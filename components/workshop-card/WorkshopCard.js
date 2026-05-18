import React, { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BiCalendar, BiMap, BiGlobe, BiUserCircle } from "react-icons/bi";

import { FaRegCalendarDays } from "react-icons/fa6";
import { Button } from "reactstrap";

import BookNowFormModal from "../BookNowFromModal/BookNowFromModal";
import WorkShopCalenderList from "../ByldWorkShopPdf/WorkShopCalenderList";

function WorkshopCard() {
  const cities = ["Gurugram", "Mumbai", "Bangalore", "Chennai", "Hyderabad"];

  const [checkedWorkshops, setCheckedWorkshops] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [selectedCity, setSelectedCity] = useState("");
  const [modality, setModality] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [viewCalenderOpen, setViewCalenderOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedWorkshopsList, setSelectedWorkshopsList] = useState([]);

  const itemsPerPage = 2;

  // =========================
  // MODAL
  // =========================

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const OpenViewCalender = () => {
    setViewCalenderOpen((prev) => !prev);
  };

  const handleSelectWorkshop = (workshop) => {
    setSelectedWorkshopsList([workshop]);
    setModalOpen(true);
  };

  // =========================
  // FILTER HANDLERS
  // =========================

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedWorkshops((prev) => [...prev, value]);
    } else {
      setCheckedWorkshops((prev) => prev.filter((item) => item !== value));
    }

    setCurrentPage(1);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setCurrentPage(1);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setCurrentPage(1);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setCurrentPage(1);
  };

  const handleModalityChange = (e) => {
    setModality(e.target.value);
    setCurrentPage(1);
  };

  // =========================
  // DATE FILTER
  // =========================

  const isWithinDateRange = (dateOne, dateTwo) => {
    const workshopStart = dateOne ? new Date(dateOne) : null;

    const workshopEnd = dateTwo ? new Date(dateTwo) : workshopStart;

    if (!workshopStart) return false;

    // No filters selected
    if (!startDate && !endDate) return true;

    // Only start date selected
    if (startDate && !endDate) {
      return workshopEnd >= startDate;
    }

    // Only end date selected
    if (!startDate && endDate) {
      return workshopStart <= endDate;
    }

    // Both selected
    return workshopStart <= endDate && workshopEnd >= startDate;
  };

  // =========================
  // MAIN FILTER
  // =========================

  const isMatchingFilters = (workshop) => {
    const workshopCities = Array.isArray(workshop.location)
      ? workshop.location
      : workshop.location?.split("|").map((city) => city.trim()) || [];

    return (
      // Course filter
      (checkedWorkshops.length === 0 ||
        checkedWorkshops.includes(workshop.courseName)) &&
      // Date filter
      isWithinDateRange(workshop.dateRangeOne, workshop.dateRangeTwo) &&
      // City filter
      (selectedCity === "" || workshopCities.includes(selectedCity)) &&
      // Modality filter
      (modality === "" || workshop.format === modality)
    );
  };

  // =========================
  // FILTERED + SORTED DATA
  // =========================

  const filteredWorkshops = useMemo(() => {
    return workshops.filter(isMatchingFilters).sort((a, b) => {
      const dateA = new Date(a.dateRangeOne || a.dateRangeTwo);

      const dateB = new Date(b.dateRangeOne || b.dateRangeTwo);

      return dateA - dateB;
    });
  }, [checkedWorkshops, startDate, endDate, selectedCity, modality]);

  // =========================
  // PAGINATION
  // =========================

  const totalPages = Math.ceil(filteredWorkshops.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentWorkshops = filteredWorkshops.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // =========================
  // COURSE COUNTS
  // =========================

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
      {/* ========================= */}
      {/* TOP SECTION */}
      {/* ========================= */}

      {/* <div className="row mt-3">
        <div className="col-12 d-flex justify-content-end">
          <button
            className="btn btn-primary d-flex align-items-center gap-2"
            onClick={OpenViewCalender}
          >
            <FaRegCalendarDays />
            View Calendar
          </button>
        </div>

        <WorkShopCalenderList
          isOpen={viewCalenderOpen}
          OpenViewCalender={OpenViewCalender}
        />
      </div> */}

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="row my-5">
        {/* ========================= */}
        {/* FILTER SIDEBAR */}
        {/* ========================= */}

        <div className="col-md-3 borderLeft position-relative">
          {/* COURSE FILTER */}

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

          {/* DATE FILTER */}

          <hr />

          <h6 className="mb-1">Date Range</h6>

          <div className="d-flex gap-2">
            <div className="mb-3 w-100">
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

            <div className="mb-3 w-100">
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

          {/* CITY FILTER */}

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

          {/* MODALITY FILTER */}

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

        {/* ========================= */}
        {/* WORKSHOP LIST */}
        {/* ========================= */}

        <div className="col-md-9 pl-40">
          {currentWorkshops.length > 0 ? (
            currentWorkshops.map((workshop, index) => (
              <div key={index} className="card roundedcorner mb-4">
                <div className="card-body p-4">
                  <h5 className="mb-3">{workshop.courseName}</h5>

                  <div className="d-flex flex-wrap align-items-center gap-3">
                    {/* DATE */}

                    <div className="d-flex align-items-center">
                      <BiCalendar />

                      <span className="ms-2">
                        {workshop.dateRangeOne}

                        {workshop.dateRangeTwo && ` - ${workshop.dateRangeTwo}`}
                      </span>
                    </div>

                    {/* LOCATION */}

                    <div className="d-flex align-items-center">
                      <BiMap />

                      <span className="ms-2">{workshop.location}</span>
                    </div>

                    {/* FORMAT */}

                    <div className="d-flex align-items-center">
                      <BiGlobe />

                      <span className="ms-2">{workshop.format}</span>
                    </div>

                    {/* TRAINER */}

                    <div className="d-flex align-items-center">
                      <BiUserCircle />

                      <span className="ms-2">{workshop.trainerName}</span>
                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <p className="mt-3 fs-18">{workshop.description}</p>

                  <hr className="mt-0" />

                  {/* BUTTON */}

                  <Button
                    className="orangebtn"
                    size="lg"
                    onClick={() => handleSelectWorkshop(workshop)}
                  >
                    Reserve Your Seat
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <h5>No workshops found</h5>

              <p>Please try changing your filters.</p>
            </div>
          )}

          {/* ========================= */}
          {/* PAGINATION */}
          {/* ========================= */}

          {totalPages > 1 && (
            <div className="pagination mt-4 d-flex align-items-center gap-3">
              <Button
                color="secondary"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </Button>

              <span>
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

      {/* ========================= */}
      {/* BOOK MODAL */}
      {/* ========================= */}

      <BookNowFormModal
        isOpen={modalOpen}
        toggle={toggleModal}
        workshops={selectedWorkshopsList}
      />
    </div>
  );
}

export default WorkshopCard;

// =========================
// WORKSHOP DATA
// =========================

const workshops = [
  {
    id: 1,
    courseName: "Getting Things Done®",
    dateRangeOne: "2026-05-22",
    dateRangeTwo: "",
    location: "India",
    format: "Virtual",
    trainerName: "Mehernosh",
    description:
      "Based on the bestseller by David Allen, Getting Things Done teaches skills that improve focus and productivity while reducing stress and burnout.",
  },

  {
    id: 2,
    courseName: "The SLII Experience™",
    dateRangeOne: "2026-05-19",
    dateRangeTwo: "2026-05-20",
    location: "Bangalore",
    format: "In Person",
    trainerName: "RonaldS",
    description:
      "Crucial Conversations® for Mastering Dialogue teaches powerful skills to help you speak up quickly, directly, and effectively.",
  },

  {
    id: 3,
    courseName: "The SLII Experience™",
    dateRangeOne: "2026-05-21",
    dateRangeTwo: "2026-05-22",
    location: "Bangalore",
    format: "In Person",
    trainerName: "BrijKC",
    description:
      "SLII® introduces a practical diagnostic lens that helps leaders assess what each individual needs.",
  },

  {
    id: 4,
    courseName: "Everything DiSC® Certification",
    dateRangeOne: "2026-05-21",
    dateRangeTwo: "2026-05-22",
    location: "Bangalore",
    format: "In Person",
    trainerName: "BrijKC",
    description:
      "The Everything DiSC Certification course is an online two-week blended learning experience.",
  },

  {
    id: 5,
    courseName: "Crucial Conversations®",
    dateRangeOne: "2026-05-28",
    dateRangeTwo: "2026-05-29",
    location: ["Mumbai", "&", "Bangalore"],
    format: "In Person",
    trainerName: "TBD",
    description:
      "Crucial Conversations teaches research-backed skills through engaging video and interactive exercises.",
  },
];
