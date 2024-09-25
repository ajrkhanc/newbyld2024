import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar, BiMap, BiGlobe } from "react-icons/bi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaRegCalendarDays } from "react-icons/fa6";
import { Button } from "reactstrap";
import BookNowFormModal from "../BookNowFromModal/BookNowFromModal";
import WorkShopCalenderList from "../ByldWorkShopPdf/WorkShopCalenderList";

function WorkshopCard() {
  const cities = ["Gurugram", "Mumbai", "Bangalore", "Chennai", "Hyderabad"]; // Add more Indian cities as needed

  const [checkedWorkshops, setCheckedWorkshops] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [modality, setModality] = useState(""); // In Person or Virtual
  const [modalOpen, setModalOpen] = useState(false);
  const [viewCalenderOpen, setViewCalenderOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [selectedWorkshopsList, setSelectedWorkshopsList] = useState([]);

  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  const handleSelectWorkshop = (workshop) => {
    setSelectedWorkshopsList([workshop]);
    toggleModal();
  };

  function OpenViewCalender() {
    setViewCalenderOpen(!viewCalenderOpen);
  }

  function selectedWorkshops(id) {
    const workShop = workshops.filter((w) => w.id === id);
    return workShop;
  }
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedWorkshops([...checkedWorkshops, value]);
    } else {
      setCheckedWorkshops(checkedWorkshops.filter((item) => item !== value));
    }
    setCurrentPage(1); // Reset to the first page
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setCurrentPage(1); // Reset to the first page
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setCurrentPage(1); // Reset to the first page
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setCurrentPage(1); // Reset to the first page
  };

  const handleModalityChange = (e) => {
    setModality(e.target.value);
    setCurrentPage(1); // Reset to the first page
  };
  const isWithinDateRange = (workshopDateOne, workshopDateTwo) => {
    const parseDate = (dateString) => {
      return dateString && dateString !== "null" ? new Date(dateString) : null;
    };

    const workshopStart = parseDate(workshopDateOne);
    const workshopEnd = parseDate(workshopDateTwo) || workshopStart; // Default to start date if end date is null

    const selectedStartDate = startDate ? new Date(startDate) : null;
    const selectedEndDate = endDate ? new Date(endDate) : null;

    return (
      (!selectedStartDate && !selectedEndDate) || // No dates selected, show all
      (selectedStartDate &&
        !selectedEndDate &&
        selectedStartDate <= workshopEnd) || // Only startDate specified
      (selectedStartDate &&
        selectedEndDate &&
        selectedStartDate <= workshopEnd &&
        selectedEndDate >= workshopStart) || // Both dates specified
      (!selectedStartDate &&
        selectedEndDate &&
        workshopStart <= selectedEndDate) // Only endDate specified
    );
  };

  const isMatchingFilters = (workshop) => {
    const city =
      workshop.location && workshop.location !== "null"
        ? workshop.location.split(" | ")[1]
        : "";
    return (
      (checkedWorkshops.length === 0 ||
        checkedWorkshops.includes(workshop.courseName)) &&
      isWithinDateRange(workshop.dateRangeOne, workshop.dateRangeTwo) &&
      workshop.location.includes("India") && // Only include workshops in India
      (selectedCity === "" || city === selectedCity) &&
      (modality === "" || workshop.format === modality)
    );
  };

  const filteredWorkshops = workshops.filter(isMatchingFilters).sort((a, b) => {
    const dateA = new Date(a.dateRangeOne || a.dateRangeTwo);
    const dateB = new Date(b.dateRangeOne || b.dateRangeTwo);

    // Prioritize September dates first
    if (dateA.getMonth() === 8 && dateB.getMonth() !== 8) return -1; // September is month 8 in JS Date
    if (dateA.getMonth() !== 8 && dateB.getMonth() === 8) return 1;

    // Otherwise, sort by date
    return dateA - dateB;
  });

  const totalPages = Math.ceil(filteredWorkshops.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentWorkshops = filteredWorkshops.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const courseCountMap = workshops.reduce((acc, workshop) => {
    acc[workshop.courseName] = (acc[workshop.courseName] || 0) + 1;
    return acc;
  }, {});

  const uniqueCourseNames = Object.keys(courseCountMap);

  const displayedCourses = showMore
    ? uniqueCourseNames
    : uniqueCourseNames.slice(0, 5);

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12  d-flex align-items-center gap-2 justify-content-end ">
          <button
            className="btn btn-primary d-flex align-items-center gap-2 justify-content-end "
            color="primary"
            onClick={() => OpenViewCalender()}
          >
            <FaRegCalendarDays className="ms-2" /> View Calendar
          </button>
        </div>
        <WorkShopCalenderList
          isOpen={viewCalenderOpen}
          OpenViewCalender={OpenViewCalender}
        />
      </div>

      <div className="row my-5">
        <div className="col-md-3 borderLeft position-relative">
          <h6 className="mb-1">Course</h6>
          <hr />
          {displayedCourses.map((courseName, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value={courseName}
                id={courseName.replace(/\s+/g, "")}
                onChange={handleCheckboxChange}
                checked={checkedWorkshops.includes(courseName)}
              />
              <label
                className="form-check-label"
                htmlFor={courseName.replace(/\s+/g, "")}
              >
                {courseName} ({courseCountMap[courseName]})
              </label>
            </div>
          ))}
          {uniqueCourseNames.length > 5 && (
            <Button color="link" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Show More"}
            </Button>
          )}
          <hr />
          <h6 className="mb-1">Date Range</h6>
          <div className="d-flex dataInput gap-2">
            <div className="mb-3">
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date"
                className="form-control"
              />
            </div>
          </div>

          <hr />
          <h6 className="mb-1">City</h6>
          <select
            className="form-control mb-3"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          <hr />
          <h6 className="mb-1">Modality</h6>
          <select
            className="form-control mb-3"
            value={modality}
            onChange={handleModalityChange}
          >
            <option value="">Select Modality</option>
            <option value="In Person">In Person</option>
            <option value="Virtual">Virtual</option>
          </select>
        </div>

        <div className="col-md-9 pl-40">
          {currentWorkshops.length > 0 ? (
            currentWorkshops.map((workshop, index) => (
              <div key={index} className="card roundedcorner mb-4">
                <div className="card-body p-4">
                  <h5 className="mb-3">{workshop.courseName}</h5>
                  <div className="d-flex justify-content-start align-items-center">
                    <BiCalendar />
                    <span className="ms-2">
                      {workshop.dateRangeOne}
                      {workshop.dateRangeTwo && ` - ${workshop.dateRangeTwo}`}
                    </span>

                    <div className="d-flex align-items-center ml-15">
                      <BiMap />
                      <span className="ms-2">{workshop.location}</span>
                    </div>
                    <div className="d-flex align-items-center ml-15">
                      <BiGlobe />
                      <span className="ms-2">{workshop.format}</span>
                    </div>
                    <div className="d-flex align-items-center ml-15">
                      <RiMoneyRupeeCircleFill />
                      <span className="ms-2">
                        {workshop.amount} <span>(Inclusive of GST)</span>{" "}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 fs-18">
                    {workshop.description}{" "}
                    <a href={workshop.pageUrl} target="_blank">
                      {" "}
                      Know More
                    </a>{" "}
                  </p>
                  <hr className="mt-0" />
                  <Button
                    className="orangebtn"
                    size="lg"
                    onClick={() => handleSelectWorkshop(workshop)}
                  >
                    Reserve Your Seat
                  </Button>
                  <BookNowFormModal
                    isOpen={modalOpen}
                    toggle={toggleModal}
                    workshops={selectedWorkshopsList}
                  />
                  {/* <span>{workshop.id} {workshop.courseName}</span> */}
                </div>
              </div>
            ))
          ) : (
            <p>No workshops found matching your criteria.</p>
          )}

          {totalPages > 1 && (
            <div className="pagination mt-4">
              <Button
                color="secondary"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </Button>
              <span className="mx-3">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                color="primary"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkshopCard;

const workshops = [
  {
    id: 1,
    courseName: "Crucial Conversations® For Mastering Dialogue",
    dateRangeOne: "September 19, 2024",
    dateRangeTwo: "September 20, 2024",
    location: "India | Gurugram",
    format: "In Person",
    amount: 41300,
    pageUrl:
      "https://byldgroup.com/cruciallifechangingskills/crucial-conversations-for-mastering-dialogue",
    description:
      "Crucial Conversations® for Mastering Dialogue teaches powerful skills to help you speak up quickly, directly, and effectively when it matters most. This course, grounded in decades of social science research, introduces the foundations of holding impactful dialogue and takes a deeper dive into mastering the most challenging conversations, at work and at home.",
  },
  {
    id: 2,
    courseName: "The SLII Experience™",
    dateRangeOne: "September 24, 2024",
    dateRangeTwo: "September 27, 2024",
    location: "India | Gurugram",
    format: "In Person",
    amount: 53100,
    pageUrl: "https://byldgroup.com/blanchardindia/our-content/programs/slii",
    description:
      "SLII ®  is the most widely taught leadership model in the world. It teaches leaders to use the appropriate leadership style in response to the needs of the person and the situation. The course’s interactive learning design uses powerful techniques that immerse learners in SLII quickly, deeply, and effectively.",
  },
  {
    id: 3,
    courseName: "The SLII Experience™ T4T F2F",
    dateRangeOne: "September 19, 2024",
    dateRangeTwo: "September 20, 2024",
    location: "India | Gurugram",
    format: "In Person",
    amount: 442500,
    pageUrl: "https://byldgroup.com/blanchardindia/our-content/programs/slii",
    description:
      "SLII ®  is the most widely taught leadership model in the world. It teaches leaders to use the appropriate leadership style in response to the needs of the person and the situation. The course’s interactive learning design uses powerful techniques that immerse learners in SLII quickly, deeply, and effectively.",
  },
  {
    id: 4,
    courseName: "Disc Certification®",
    dateRangeOne: "September 24, 2024",
    dateRangeTwo: "September 27, 2024",
    location: "India",
    format: "Virtual",
    amount: 37760,
    pageUrl: "https://byldgroup.com/everythingdisc",
    description:
      "Everything DiSC is a personal development learning experience that measures an individual’s preferences and tendencies based on the DiSC ®  profile. This simple yet powerful model describes four basic styles: D, i, S, and C, and serves as the foundation for the Everything DiSC application suit. Participants receive personalized insights of DiSC Assessment that deepen their understanding of self and others, making workplace interactions more enjoyable and effective. The result of DiSC analysis is a more engaged and collaborative workforce that can spark meaningful culture improvement in your organization. Psychometric analysis, on the other hand, fulfills an organization’s requirement of knowing and evaluating a candidate with perfection.",
  },
  {
    id: 5,
    courseName: "Crucial Conversations® For Mastering Dialogue",
    dateRangeOne: "October 21, 2024",
    dateRangeTwo: "October 22, 2024",
    location: "India | Bangalore",
    format: "In Person",
    amount: 41300,
    pageUrl:
      "https://byldgroup.com/cruciallifechangingskills/crucial-conversations-for-mastering-dialogue",
    description:
      "Crucial Conversations® for Mastering Dialogue teaches powerful skills to help you speak up quickly, directly, and effectively when it matters most. This course, grounded in decades of social science research, introduces the foundations of holding impactful dialogue and takes a deeper dive into mastering the most challenging conversations, at work and at home.",
  },
  {
    id: 6,
    courseName: "The Power of Habit™",
    dateRangeOne: "October 17, 2024",
    dateRangeTwo: "",
    location: "India | Gurugram",
    format: "In Person",
    amount: 28910,
    pageUrl:
      "https://byldgroup.com/cruciallifechangingskills/the-power-of-habit",
    description:
      "Based on the bestseller by Charles Duhigg, The Power of Habit teaches a skillset for aligning behavior with values and goals, continually improving, adapting to the challenges and changes of work and life, and optimizing personal performance. *** FREE TRIAL *** To access a preview of The Power of Habit On Demand, click the “Free Trial” link in the upper right corner above “Enroll Now.”",
  },
  {
    id: 7,
    courseName: "Blanchard Management Essentials",
    dateRangeOne: "October 18, 2024",
    dateRangeTwo: "",
    location: "India",
    format: "Virtual",
    amount: 29500,
    pageUrl:
      "https://byldgroup.com/blanchardindia/our-content/programs/blanchard-management-essentials",
    description:
      "Equip New Managers with Crucial Skills for Success When managers run into trouble, the costs are high: high turnover, low morale, low productivity, and more. Often, these performance challenges occur because they lack the basic management skills necessary for success. That's why we created Blanchard Management Essentials®: a transformational leadership training program for new managers and those who need to hone the essential skills needed to build relationships. Maintain a positive attitude towards team members, inspire engagement, and increase productivity.",
  },
  {
    id: 8,
    courseName: "Crucial Influence",
    dateRangeOne: "November 12, 2024",
    dateRangeTwo: "",
    location: "India",
    format: "Virtual",
    amount: 41300,
    pageUrl: "https://byldgroup.com/cruciallifechangingskills/influencer",
    description:
      "Crucial Influence® teaches leadership skills that are essential to leaders at every level. Drawing on five decades of social science research and work with successful leaders around the world, the Crucial Influence Model reveals why people do what they do and how all leaders—from aspiring leaders to top executives—can influence others for lasting results.",
  },
  {
    id: 9,
    courseName: "Getting Things Done®",
    dateRangeOne: "December 20, 2024",
    dateRangeTwo: "",
    location: "India | Bangalore",
    format: "In Person",
    amount: 28910,
    pageUrl:
      "https://byldgroup.com/cruciallifechangingskills/getting-things-done",
    description:
      "Created more than 30 years ago by author and productivity expert David Allen, Getting Things Done® (GTD®) teaches skills to be focused and productive without stress and burnout. The on-demand course teaches learners how to increase individual focus; capture, prioritize, and organize ideas, projects, and requests; trust their choices; say no to low-priority work; and improve team productivity. Teams and organizations around the world have turned to Getting Things Done to improve their people’s ability to manage their time and attention so they can focus on the projects and people that matter most. Results include more predictable and consistent outcomes, less stress and burnout, and improved individual and team effectiveness.",
  },
  {
    id: 10,
    courseName: "Trapologist At Work™",
    dateRangeOne: "December 11, 2024",
    dateRangeTwo: "",
    location: "India",
    format: "Virtual",
    amount: 28910,
    pageUrl: "https://byldgroup.com/leadership-and-performance/trapologist",
    description:
      "The Trapologist at Work™ framework is unique and effective because it teaches you the restraining forces [traps] that are keeping you from achieving your goals and reaching your dreams. Most workshops do the opposite. They offer initiatives and to-dos to your already overwhelmed life.",
  },
  {
    id: 11,
    courseName: "Disc Certification®",
    dateRangeOne: "December 10, 2024",
    dateRangeTwo: "December 13, 2024",
    location: "India",
    format: "Virtual",
    amount: 37760,
    pageUrl: "https://byldgroup.com/everythingdisc",
    //  amount: 1,
    description:
      "Everything DiSC is a personal development learning experience that measures an individual’s preferences and tendencies based on the DiSC ®  profile. This simple yet powerful model describes four basic styles: D, i, S, and C, and serves as the foundation for the Everything DiSC application suit. Participants receive personalized insights of DiSC Assessment that deepen their understanding of self and others, making workplace interactions more enjoyable and effective. The result of DiSC analysis is a more engaged and collaborative workforce that can spark meaningful culture improvement in your organization. Psychometric analysis, on the other hand, fulfills an organization’s requirement of knowing and evaluating a candidate with perfection.",
  },
  {
    id: 12,
    courseName: "Self Leadership",
    dateRangeOne: "December 10, 2024",
    dateRangeTwo: "",
    location: "India | Gurugram ",
    format: "Virtual",
    amount: 29500,
    pageUrl:
      "https://byldgroup.com/blanchardindia/our-content/programs/self-leadership",
    description:
      "Based on SLII ® , the most widely taught management model in the world, the Self Leadership course provides strategies for learners to gain more satisfaction from work by examining their motivation, confidence, knowledge, and skills.",
  },
  {
    id: 13,
    courseName: "Getting Things Done®",
    dateRangeOne: "January 24, 2025",
    dateRangeTwo: "",
    location: "India",
    format: "Virtual",
    amount: 28910,
    pageUrl:
      "https://byldgroup.com/cruciallifechangingskills/getting-things-done",
    description:
      "Created more than 30 years ago by author and productivity expert David Allen, Getting Things Done® (GTD®) teaches skills to be focused and productive without stress and burnout. The on-demand course teaches learners how to increase individual focus; capture, prioritize, and organize ideas, projects, and requests; trust their choices; say no to low-priority work; and improve team productivity. Teams and organizations around the world have turned to Getting Things Done to improve their people’s ability to manage their time and attention so they can focus on the projects and people that matter most. Results include more predictable and consistent outcomes, less stress and burnout, and improved individual and team effectiveness.",
  },
  {
    id: 14,
    courseName: "The SLII Experience™",
    dateRangeOne: "January 20, 2025",
    dateRangeTwo: "January 21, 2025",
    location: "India",
    format: "Virtual",
    amount: 53100,
    pageUrl: "https://byldgroup.com/blanchardindia/our-content/programs/slii",
    description:
      "SLII ®  is the most widely taught leadership model in the world. It teaches leaders to use the appropriate leadership style in response to the needs of the person and the situation. The course’s interactive learning design uses powerful techniques that immerse learners in SLII quickly, deeply, and effectively.",
  },
  {
    id: 15,
    courseName: "The SLII Experience™ T4T F2F",
    dateRangeOne: "January 22, 2025",
    dateRangeTwo: "January 23, 2025",
    location: "India",
    format: "Virtual",
    amount: 442500,
    pageUrl: "https://byldgroup.com/blanchardindia/our-content/programs/slii",
    description:
      "SLII ®  is the most widely taught leadership model in the world. It teaches leaders to use the appropriate leadership style in response to the needs of the person and the situation. The course’s interactive learning design uses powerful techniques that immerse learners in SLII quickly, deeply, and effectively.",
  },
  {
    id: 16,
    courseName: "Getting Things Done®",
    dateRangeOne: "February 7, 2025",
    dateRangeTwo: "",
    location: "India | Gurugram",
    format: "In Person",
    amount: 28910,
    pageUrl:
      "https://byldgroup.com/cruciallifechangingskills/getting-things-done",
    description:
      "Created more than 30 years ago by author and productivity expert David Allen, Getting Things Done® (GTD®) teaches skills to be focused and productive without stress and burnout. The on-demand course teaches learners how to increase individual focus; capture, prioritize, and organize ideas, projects, and requests; trust their choices; say no to low-priority work; and improve team productivity. Teams and organizations around the world have turned to Getting Things Done to improve their people’s ability to manage their time and attention so they can focus on the projects and people that matter most. Results include more predictable and consistent outcomes, less stress and burnout, and improved individual and team effectiveness.",
  },
  {
    id: 17,
    courseName: "Disc Certification®",
    dateRangeOne: "February 24, 2025",
    dateRangeTwo: "February 25, 2025",
    location: "India | Gurugram",
    format: "In Person",
    amount: 37760,
    pageUrl: "https://byldgroup.com/everythingdisc",
    description:
      "Everything DiSC is a personal development learning experience that measures an individual’s preferences and tendencies based on the DiSC ®  profile. This simple yet powerful model describes four basic styles: D, i, S, and C, and serves as the foundation for the Everything DiSC application suit. Participants receive personalized insights of DiSC Assessment that deepen their understanding of self and others, making workplace interactions more enjoyable and effective. The result of DiSC analysis is a more engaged and collaborative workforce that can spark meaningful culture improvement in your organization. Psychometric analysis, on the other hand, fulfills an organization’s requirement of knowing and evaluating a candidate with perfection.",
  },
  {
    id: 18,
    courseName: "Crucial Influence",
    dateRangeOne: "February 20, 2025",
    dateRangeTwo: "February 21, 2025",
    location: "India",
    format: "Virtual",
    pageUrl: "https://byldgroup.com/cruciallifechangingskills/influencer",
    amount: 41300,
    description:
      "Crucial Influence® teaches leadership skills that are essential to leaders at every level. Drawing on five decades of social science research and work with successful leaders around the world, the Crucial Influence Model reveals why people do what they do and how all leaders—from aspiring leaders to top executives—can influence others for lasting results.",
  },
  {
    id: 19,
    courseName: "Crucial Conversations® For Mastering Dialogue",
    dateRangeOne: "March 6th, 2025",
    dateRangeTwo: "March 7th, 2025",
    location: "India",
    format: "Virtual",
    amount: 41300,
    pageUrl:
      "https://byldgroup.com/cruciallifechangingskills/crucial-conversations-for-mastering-dialogue",
    description:
      "Crucial Conversations® for Mastering Dialogue teaches powerful skills to help you speak up quickly, directly, and effectively when it matters most. This course, grounded in decades of social science research, introduces the foundations of holding impactful dialogue and takes a deeper dive into mastering the most challenging conversations, at work and at home.",
  },
  {
    id: 20,
    courseName: "The SLII Experience™",
    dateRangeOne: "March 18, 2025",
    dateRangeTwo: "March 19, 2025",
    location: "India",
    format: "Virtual",
    amount: 53100,
    pageUrl: "https://byldgroup.com/blanchardindia/our-content/programs/slii",
    description:
      "SLII ®  is the most widely taught leadership model in the world. It teaches leaders to use the appropriate leadership style in response to the needs of the person and the situation. The course’s interactive learning design uses powerful techniques that immerse learners in SLII quickly, deeply, and effectively.",
  },
  {
    id: 21,
    courseName: "The SLII Experience™ T4T F2F",
    dateRangeOne: "March 20, 2025",
    dateRangeTwo: "March 21, 2025",
    location: "India | Chennai",
    format: "In Person",
    amount: 442500,
    pageUrl: "https://byldgroup.com/blanchardindia/our-content/programs/slii",
    description:
      "SLII ®  is the most widely taught leadership model in the world. It teaches leaders to use the appropriate leadership style in response to the needs of the person and the situation. The course’s interactive learning design uses powerful techniques that immerse learners in SLII quickly, deeply, and effectively.",
  },
  {
    id: 22,
    courseName: "The SLII Experience™ T4T F2F",
    dateRangeOne: "March 20, 2025",
    dateRangeTwo: "March 21, 2025",
    location: "India | Hyderabad",
    format: "In Person",
    amount: 442500,
    pageUrl: "https://byldgroup.com/blanchardindia/our-content/programs/slii",
    description:
      "SLII ®  is the most widely taught leadership model in the world. It teaches leaders to use the appropriate leadership style in response to the needs of the person and the situation. The course’s interactive learning design uses powerful techniques that immerse learners in SLII quickly, deeply, and effectively.",
  },
  {
    id: 23,
    courseName: "Getting Things Done®",
    dateRangeOne: "October 24, 2024",
    dateRangeTwo: "",
    location: "India",
    format: "Virtual",
    amount: 28910,
    pageUrl:
      "https://byldgroup.com/cruciallifechangingskills/getting-things-done",
    description:
      "Created more than 30 years ago by author and productivity expert David Allen, Getting Things Done® (GTD®) teaches skills to be focused and productive without stress and burnout. The on-demand course teaches learners how to increase individual focus; capture, prioritize, and organize ideas, projects, and requests; trust their choices; say no to low-priority work; and improve team productivity. Teams and organizations around the world have turned to Getting Things Done to improve their people’s ability to manage their time and attention so they can focus on the projects and people that matter most. Results include more predictable and consistent outcomes, less stress and burnout, and improved individual and team effectiveness.",
  },
];
