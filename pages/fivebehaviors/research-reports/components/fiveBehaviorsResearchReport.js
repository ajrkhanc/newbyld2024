import Head from "next/head";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function ResearchOne() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const storyOneSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://byldgroup.in/everythingdisc/wp-json/contact-form-7/v1/contact-forms/5/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "leadsquared-FirstName": event.target.name.value,
            "leadsquared-EmailAddress": event.target.email.value,
            "leadsquared-Company": event.target.organization.value,
            "leadsquared-Designation": event.target.designation.value,
            "leadsquared-mx_Business_Entity":
              event.target.Business_Entity.value,
            formname: event.target.formname.value,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      document.getElementById("showlabel").innerHTML =
        "Thank you for submitting your details.";
      document.getElementById("showlabel").style.display = "block";

      setTimeout(function () {
        window.open(
          "/5bassets/pdf/Five-Behaviors-Research-Report-v2.pdf",
          "_blank"
        );
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a problem submitting the form.");
    }
  };

  return (
    <>
      <div className="innervideoshd ebookst">
        <img src="/5bassets/img/FiveBehaveImg.png" alt="books" />
        <h4
          className="booktitlerow1  "
          style={{
            margin: "0px",
            padding: "10px 10px 0px 15px",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "30px",
          }}
        >
          The Five Behaviors of a Chohesive Team
        </h4>
        <h3
          className="booktitlerow1 "
          onClick={toggle}
          style={{ cursor: "pointer" }}
        >
          Download
        </h3>
      </div>

      <Modal className="modal-dialog-centered" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Success Story</ModalHeader>
        <ModalBody>
          <div className="col-lg-12 md-pt-50">
            <div className="borderall">
              <div className="bannerform formshd">
                <div className="sec-title3 mbb-35 text-left">
                  <h4 className="countertoph2 text-left font24">
                    Download now
                  </h4>
                  <div className="heading-border-line left-style"></div>
                </div>
                <form
                  id="contact-form"
                  className="clientcornner pbb-20"
                  onSubmit={storyOneSubmit}
                >
                  <div className="row">
                    <div className="col-sm-6 mb-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name*"
                        required
                      />
                    </div>
                    <div className="col-sm-6 mb-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Work Email/Email*"
                        required
                      />
                    </div>
                    <div className="col-sm-6 mb-12">
                      <input
                        type="text"
                        name="organization"
                        placeholder="Organization"
                        required
                      />
                    </div>
                    <div className="col-sm-6 mb-12">
                      <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        required
                      />
                    </div>
                    <div className="col-sm-12 mb-12 d-none">
                      <input
                        type="text"
                        name="formname"
                        value="How to Navigate The Great Resignation"
                      />
                    </div>
                    <div className="col-sm-12 mb-12 d-none">
                      <input
                        type="text"
                        name="Business_Entity"
                        value="Everything DiSC"
                      />
                    </div>
                    <div className="col-lg-12 mb-12">
                      <input
                        id="submitbuttonform"
                        className="clientcornnerbtn"
                        type="submit"
                        value="Download"
                      />
                    </div>
                    <p id="showlabel" style={{ display: "none" }}></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
