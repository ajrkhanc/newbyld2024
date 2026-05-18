
import { Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";
import { useState } from "react";
import PropTypes from "prop-types";

function BookNowFormModal({ isOpen, toggle, workshops }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const WorkShopHandle = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");
    setMessageType("");

    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/407/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "leadsquared-Name": formData.get("name"),
            "leadsquared-EmailAddress": formData.get("email"),
            "leadsquared-Mobile": formData.get("phone"),
            "leadsquared-Company": formData.get("organization"),
            "leadsquared-JobTitle": formData.get("designation"),
            slot: formData.get("slot"),
            comments: formData.get("comments"),
          }),
        }
      );

      if (response.ok) {
        setMessage("Thank you for submitting your details.");
        setMessageType("success");
      } else {
        setMessage("There was a problem with the request.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setMessage("There was a problem with the request.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Book Your Slot</ModalHeader>
      <ModalBody>
        <form
          id="contact-form"
          className="clientcornner"
          onSubmit={WorkShopHandle}
        >
          <div className="row">
            {/* Name */}
            <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
              <input type="text" name="name" placeholder="Name*" required />
            </div>

            {/* Email */}
            <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
              <input
                type="email"
                name="email"
                placeholder="Work Email/Email*"
                required
              />
            </div>

            {/* Phone */}
            <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
              <input
                type="text"
                name="phone"
                maxLength="10"
                minLength="10"
                pattern="[0-9]*"
                placeholder="Phone No.*"
                required
              />
            </div>

            {/* Company Name */}
            <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
              <input
                type="text"
                name="organization"
                placeholder="Company Name*"
                required
              />
            </div>

            {/* Designation */}
            <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
              <input
                type="text"
                name="designation"
                placeholder="Designation*"
                required
              />
            </div>

            {/* Slot Selection */}
            <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
              <select name="slot" required defaultValue="">
                <option value="" disabled>
                  Pick any Slot*
                </option>
                {workshops.map((slot) => (
                  <option
                    key={slot.id}
                    value={`${slot.courseName}: ${slot.dateRangeOne}${
                      slot.dateRangeTwo ? ` - ${slot.dateRangeTwo}` : ""
                    }, ${slot.location} (${slot.format})`}
                  >
                    {`${slot.courseName}: ${slot.dateRangeOne}${
                      slot.dateRangeTwo ? ` - ${slot.dateRangeTwo}` : ""
                    }, ${slot.location} (${slot.format})`}
                  </option>
                ))}
              </select>
            </div>

            {/* Comments/Message */}
            <div className="col-lg-12 col-md-12 col-sm-12 mb-12">
              <textarea
                name="comments"
                placeholder="Questions/Comments"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
              <input
                id="submitbuttonform"
                className="clientcornnerbtn"
                type="submit"
                value={isLoading ? "Submitting..." : "Book Now"}
                disabled={isLoading}
              />
            </div>

            {/* Success or Error Message */}
            {message && (
              <div className="col-lg-12 col-md-12 col-sm-12 mb-12">
                <span
                  style={{
                    display: "block",
                    color: messageType === "success" ? "green" : "red",
                  }}
                >
                  {message}
                </span>
              </div>
            )}
          </div>
        </form>
      </ModalBody>
      {/* Spinner Overlay */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner style={{ width: "3rem", height: "3rem", color: "#fff" }} />
        </div>
      )}
    </Modal>
  );
}

BookNowFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  workshops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      courseName: PropTypes.string.isRequired,
      dateRangeOne: PropTypes.string.isRequired,
      dateRangeTwo: PropTypes.string,
      location: PropTypes.string.isRequired,
      format: PropTypes.string.isRequired,
      amount: PropTypes.number,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default BookNowFormModal;
