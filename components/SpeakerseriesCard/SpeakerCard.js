import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar, BiMap, BiGlobe } from "react-icons/bi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import { Button } from "reactstrap";
import BookNowFormModal from "../BookNowFromModal/BookNowFromModal";
import SpeakersCalenderList from "../ByldSpeakercld/SpeakersCalenderList";

function SpeakerCard() {
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
    if (dateA.getMonth() === 6 && dateB.getMonth() !== 6) return -1; // September is month 8 in JS Date
    if (dateA.getMonth() !== 6 && dateB.getMonth() === 6) return 1;

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
    <>
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
          <SpeakersCalenderList
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
                        <IoTimeOutline />
                        <span className="ms-2">{workshop.time}</span>
                      </div>
                      {/* <div className="d-flex align-items-center ml-15">
                        <RiMoneyRupeeCircleFill />
                        <span className="ms-2">
                          {workshop.amount} <span>(Inclusive of GST)</span>{" "}
                        </span>
                      </div> */}
                    </div>

                    <div
                      className="mt-3 fs-18"
                      dangerouslySetInnerHTML={{ __html: workshop.description }}
                    />
                    {/* <a
                      href={workshop.pageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Know More
                    </a> */}

                    <hr className="mt-0" />

                    <a
                      href="{ workshop.pageUrl }"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="orangebtn"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Reserve Your Seat
                    </a>

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
    </>
  );
}

export default SpeakerCard;

const workshops = [
  {
    id: 1,
    courseName: "Authentic Executive Presence",
    dateRangeOne: "26th September 2025",
    dateRangeTwo: "",
    location: "India",
    format: "Virtual",
    time: "3:00 PM - 5:00 PM",
    // amount: 28910,
    pageUrl: "https://byldgroup.com/speakerseries/authentic-executive-presence",
    description: `
      <p >Executive presence isn’t about titles—it’s about how you show up as a leader. This 90-minute, facilitator-led virtual session introduces leaders to the essentials of Authentic Executive Presence. Participants will explore what authenticity means in leadership, reflect on their own leadership situations, and understand the impact of executive presence.
The session dives into the Four Pillars of authentic leadership—Care, Curiosity, Candor, and Courage— through guided discussion, self-reflection, and practical tools. Leaders leave with actionable strategies to strengthen trust, influence, and credibility in their day-to-day roles.</p>
`,
  },
  {
    id: 2,
    courseName: "High Performing Teams",
    dateRangeOne: "14th October 2025",
    dateRangeTwo: "",
    location: "India",
    format: "virtual",
    time: "3:00 PM - 5:00 PM",
    // amount: 41300,
    pageUrl: "https://byldgroup.com/speakerseries/high-performing-teams",
    description: `
      <p >High-performing teams don’t happen by chance—they are built through intentional leadership. This 90-minute, facilitator-led virtual session introduces leaders to the mindset, structure, and behaviors needed to create and sustain high-performing teams. Participants will explore the predictable stages of team development and understand how productivity and morale shift along the way.</p>
      <p>The session dives into core elements of team effectiveness—purpose, goals, roles, and norms—through guided discussion, observation strategies, and team charter development. Leaders gain practical approaches to foster trust, provide the right balance of direction and support, and keep teams focused, connected, and performing at their best.</p>

      
    `,
  },

  {
    id: 3,
    courseName: "Highly Trusted Leader",
    dateRangeOne: "21st November 2025",
    dateRangeTwo: "",
    location: "India",
    format: "virtual",
    time: "3:00 PM - 5:00 PM",
    // amount: 41300,
    pageUrl: "https://byldgroup.com/speakerseries/highly-trusted-leader",
    description: `
      <p >Trust is the foundation of effective leadership. This 90-minute, facilitator-led virtual session introduces leaders to the essentials of Becoming a Highly Trusted Leader. Participants will reflect on the meaning of trust in leadership, explore the benefits of high trust, and examine the costs of low trust in teams and organizations.</p>
      <p>The session dives into the Four Elements of Trust—Able, Believable, Connected, and Dependable—through guided discussion, self-reflection, and interactive activities. Leaders will learn practical ways to build, demonstrate, and restore trust, enabling them to elevate performance and deepen connection. They leave with actionable strategies to create environments where people feel safe, supported, and empowered to thrive.</p>

    `,
  },
];
