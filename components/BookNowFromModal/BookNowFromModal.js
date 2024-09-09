
import { Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";
import { useState } from "react";
import PropTypes from "prop-types";

function BookNowFormModal({ isOpen, toggle, workshops }) {
  const [showGSTFields, setShowGSTFields] = useState(false);
  const [showGSTFieldsOne, setShowGSTFieldsOne] = useState(false);
  const [gstNumber, setGstNumber] = useState("");
  const [isGstNumberValid, setIsGstNumberValid] = useState(true);
  const [panGST, setPanGST] = useState("");
  const [isPanGSTValid, setIsPanGSTValid] = useState(true);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const WorkShopHandle = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    let amount = selectedWorkshop?.amount || 1000; // Default to 1000 if no amount is selected
    amount = parseFloat(amount); // Ensure amount is a number

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
            "leadsquared-GstNumber": formData.get("gst_number"),
            "leadsquared-EntityName": formData.get("entity_name"),
            "leadsquared-Address": formData.get("address"),
            "leadsquared-PanNumber": formData.get("pan_number"),
            slot: formData.get("slot"),
            gst: formData.get("gst"),
            comments: formData.get("comments"),
          }),
        }
      );

      if (response.ok) {
        setMessage("Thank you for submitting your details.");
        setTimeout(() => {
          const redirectURL = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${encodeURIComponent(
            formData.get("name")
          )}&email=${encodeURIComponent(
            formData.get("email")
          )}&contact=${encodeURIComponent(
            formData.get("phone")
          )}&GstNumber=${encodeURIComponent(
            formData.get("gst_number")
          )}&EntityName=${encodeURIComponent(
            formData.get("entity_name")
          )}&Amount=${amount}&Address=${encodeURIComponent(
            formData.get("address")
          )}&PanNumber=${encodeURIComponent(
            formData.get("pan_number")
          )}&gst=${encodeURIComponent(formData.get("gst"))}`;
          window.location.href = redirectURL;
        }, 1000);
      } else {
        setMessage("There was a problem with the request.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setMessage("There was a problem with the request.");
    }
  };

  const validateGSTNumber = (gstNumber) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}$/;
    return gstRegex.test(gstNumber);
  };

  const validatePAN = (panNumber) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(panNumber);
  };

  const handleGstNumberChange = (event) => {
    const value = event.target.value;
    setGstNumber(value);
    setIsGstNumberValid(value === "" || validateGSTNumber(value));
  };

  const handleGSTChange = (event) => {
    const gstValue = event.target.value;
    setShowGSTFields(gstValue === "Yes");
    setShowGSTFieldsOne(gstValue === "No");
  };

  const handlePanGSTChange = (event) => {
    const value = event.target.value.toUpperCase();
    // const value = event.target.value;
    setPanGST(value);
    setIsPanGSTValid(value === "" || validatePAN(value));
  };
  const handleSlotChange = (event) => {
    const selectedSlot = JSON.parse(event.target.value);
    setSelectedWorkshop(selectedSlot);
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

            {/* PAN Number */}
            <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
              <input
                type="text"
                name="pan_number"
                placeholder="PAN Number"
                value={panGST}
                onChange={handlePanGSTChange}
                required
              />
              {!isPanGSTValid && (
                <span style={{ color: "red" }}>Invalid PAN Number</span>
              )}
            </div>

            {/* Slot Selection */}
            <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
           <select name="slot" required onChange={handleSlotChange} defaultValue="">
              <option value="" disabled>
                Pick any Slot*
              </option>
              {workshops.map((slot) => (
                <option
                  key={slot.id}
                  value={JSON.stringify({
                    courseName: slot.courseName,
                    startDate: slot.dateRangeOne,
                    endDate: slot.dateRangeTwo,
                    location: slot.location,
                    format: slot.format,
                    amount: `${slot.amount} INR`,
                  })}
                >
                  {`${slot.courseName}: ${slot.dateRangeOne}${
                    slot.dateRangeTwo ? ` - ${slot.dateRangeTwo}` : ""
                  }, ${slot.location} (${slot.format}) (${slot.amount} INR)`}
                </option>
              ))}
            </select>
            </div>

            {/* GST Option */}
            <div className="col-sm-12 mb-12">
              <label>Are you under GST?</label>
              <br />
              <div className="d-flex mt-2">
                <input
                  className="w-auto ms-2 me-2"
                  type="radio"
                  name="gst"
                  value="Yes"
                  onChange={handleGSTChange}
                  required
                />{" "}
                Yes
                <input
                  className="w-auto ms-2 me-2"
                  type="radio"
                  name="gst"
                  value="No"
                  onChange={handleGSTChange}
                  required
                />{" "}
                No
              </div>
            </div>

            {/* GST Fields */}
            {showGSTFields && (
              <div id="gst_fields" className="col-12">
                <div className="row">
                  {/* GST Number */}
                  <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
                    <input
                      type="text"
                      name="gst_number"
                      placeholder="GST Number*"
                      value={gstNumber}
                      onChange={handleGstNumberChange}
                      required
                    />
                    {!isGstNumberValid && (
                      <span style={{ color: "red" }}>Invalid GST Number</span>
                    )}
                  </div>

                  {/* Entity Name */}
                  <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
                    <input
                      type="text"
                      name="entity_name"
                      placeholder="Entity Name*"
                      required
                    />
                  </div>

                  {/* Address */}
                  <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address*"
                      required
                    />
                  </div>

                  {/* Additional Fields if Needed */}
                  {/* Add more fields here if necessary */}
                </div>
              </div>
            )}

            {/* GST Not Applicable Fields */}
            {showGSTFieldsOne && (
              <div
                id="gst_fields_one"
                className="col-lg-6 col-md-12 col-sm-12 mb-12"
              >
                <input
                  type="text"
                  name="address"
                  placeholder="Address*"
                  required
                />
              </div>
            )}

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
                    color: isLoading ? "green" : "red",
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
      courseName: PropTypes.string.isRequired,
      dateRangeOne: PropTypes.string.isRequired,
      dateRangeTwo: PropTypes.string,
      location: PropTypes.string.isRequired,
      format: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default BookNowFormModal;
