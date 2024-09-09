// import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import { useState } from 'react';

// function BookNowFormModal({ isOpen, toggle, handleChange }) {

//   const WorkShopHendle = async event => {
//     event.preventDefault();
//     document.getElementById("submitbuttonform").value = "Submitting form....";

//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         console.log(this.responseText);
//     };

//     xhttp.open("POST", 'https://byldgroup.in/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/22/feedback');
//     xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhttp.onreadystatechange = function () {
//         if (xhttp.readyState == 4) {
//             if (xhttp.status == 200) {
//                 // Show success message
//                 document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";
//                 document.getElementById("showlabel").style.display = "block";

//                 // Redirect after 3 seconds
//                 window.setTimeout(function () {
//                     const formData = new FormData(event.target);
//                     const name = formData.get('name');
//                     const email = formData.get('email');
//                     const phone = formData.get('phone');
//                     const gst_number = formData.get('gst_number');
//                     const entity_name = formData.get('entity_name');
//                     const address = formData.get('address');
//                     const pan_number = formData.get('pan_number');
//                     const gst = formData.get('gst');
//                     // Construct URL with form data
//                     const redirectURL = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${name}&email=${email}&contact=${phone}&GstNumber=${gst_number}&EntityName=${entity_name}&Amount=1000&Address=${address}&PanNumber=${pan_number}&gst=${gst}`;
//                     window.location.href = redirectURL;
//                 }, 3000);
//             } else {
//                 alert('There was a problem with the request.');
//             }
//         }
//     };

//     const formData = new FormData(event.target);
//     xhttp.send("leadsquared-FirstName=" + formData.get('name') +
//         "&leadsquared-EmailAddress=" + formData.get('email') +
//         "&leadsquared-Mobile=" + formData.get('phone') +
//         "&leadsquared-Company=" + formData.get('organization') +
//         "&leadsquared-JobTitle=" + formData.get('designation') +
//         "&leadsquared-GstNumber=" + formData.get('gst_number') +
//         "&leadsquared-EntityName=" + formData.get('entity_name') +
//         "&leadsquared-Address=" + formData.get('address') +
//         "&leadsquared-PanNumber=" + formData.get('pan_number') +
//         "&slot=" + formData.get('slot') +
//         "&gst=" + formData.get('gst') +

//         "&leadsquared-mx_Business_Entity=" + formData.get('Business_Entity'));

// }

//   const [showGSTFields, setShowGSTFields] = useState(false);
//   const [showGSTFieldsOne, setShowGSTFieldOne] = useState(false);
//   const [gstNumber, setGstNumber] = useState('');
//   const [isGstNumberValid, setIsGstNumberValid] = useState(true);
//   const [panGST, setPanGST] = useState('');
//   const [isPanGSTValid, setIsPanGSTValid] = useState(true);

//   const validateGSTNumber = (gstNumber) => {
//     const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}$/;
//     return gstRegex.test(gstNumber);
//   };

//   const validatePAN = (panNumber) => {
//     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//     return panRegex.test(panNumber);
//   };

//   const handleGstNumberChange = (event) => {
//     const value = event.target.value;
//     setGstNumber(value);
//     // setIsGstNumberValid(validateGSTNumber(value));
//     if (value === '') {
//       setIsGstNumberValid(true); // Clear the error message if the input is empty
//     } else {
//       setIsGstNumberValid(validateGSTNumber(value));
//     }

//   };

//   const handleGSTChange = (event) => {
//     setShowGSTFields(event.target.value === "Yes");
//     setShowGSTFieldOne(event.target.value === "No");
//   };

//   const handlePanGSTChange = (event) => {
//     const value = event.target.value;
//     setPanGST(value);
//     // setIsPanGSTValid(validatePAN(value));
//     if (value === '') {
//       setIsPanGSTValid(true); // Clear the error message if the input is empty
//     } else {
//       setIsPanGSTValid(validatePAN(value));
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Book Your Slot</ModalHeader>
//       <ModalBody>
//         <form id="contact-form" className="clientcornner" onSubmit={WorkShopHendle}>
//           <div className="row">
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Work Email/Email*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="phone"
//                 maxLength="10"
//                 minLength="10"
//                 pattern="[0-9]*"
//                 placeholder="Phone No.*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="organization"
//                 placeholder="Company Name*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="designation"
//                 placeholder="Designation*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <select name="slot" required onChange={handleChange}>
//                 <option value="Select">Pick up any Slot*</option>
//                 <option value="Council of the Marble star: June 5th, 2024">Council of the Marble star: June 5th, 2024</option>
//                 <option value="Council of Marble star : July 25th,2024, Bangalore">Council of Marble star : July 25th,2024, Bangalore</option>
//                 <option value="Council of Marble star : Sept 12th,2024 Mumbai">Council of Marble star : Sept 12th,2024 Mumbai</option>
//                 <option value="Council of Marble star : Nov 12th,2024 Hyderabad">Council of Marble star : Nov 12th,2024 Hyderabad</option>
//               </select>
//             </div>
//             <div className="col-sm-12 mb-12">
//               <label>Are you under GST?</label><br />
//               <div className="d-flex mt-2">
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="Yes"
//                   onChange={handleGSTChange}
//                 /> Yes
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="No"
//                   onChange={handleGSTChange}
//                 /> No
//               </div>
//             </div>

//             {showGSTFields && (
//               <div id="gst_fields">
//                 <div className="row">
//                 <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                   <input
//                     type="text"
//                     name="gst_number"
//                     placeholder="GST Number*"
//                     value={gstNumber}
//                     onChange={handleGstNumberChange}
//                     required
//                   />
//                   {!isGstNumberValid && (
//                     <span style={{ color: 'red' }}>Invalid GST Number</span>
//                   )}
//                 </div>
//                 <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                   <input
//                     type="text"
//                     name="entity_name"
//                     placeholder="Entity Name*"
//                     required
//                   />
//                 </div>
//                 <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Address*"
//                     required
//                   />
//                 </div>
//                 <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                   <input
//                     type="text"
//                     name="pan_number"
//                     placeholder="PAN Number*"
//                     value={panGST}
//                     onChange={handlePanGSTChange}
//                     required
//                   />
//                   {!isPanGSTValid && (
//                     <span style={{ color: 'red' }}>Invalid PAN Number</span>
//                   )}
//                 </div>
//                 </div>
//               </div>
//             )}

//             {showGSTFieldsOne && (
//               <div id="gst_fields">
//                 <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Address*"
//                     required
//                   />
//                 </div>
//               </div>
//             )}

//             <div className="col-lg-6 col-md-12 col-sm-12 d-none">
//               <input
//                 type="text"
//                 name="Business_Entity"
//                 value="Eagles Flight"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 id="submitbuttonform"
//                 className="clientcornnerbtn"
//                 type="submit"
//                 value="Book Now"
//               />
//             </div>
//             <p id="showlabel" style={{ display: "none" }}></p>
//           </div>
//         </form>
//       </ModalBody>
//     </Modal>
//   );
// }

// export default BookNowFormModal;

// import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import { useState, useEffect } from "react";

// function BookNowFormModal({ isOpen, toggle }) {
//   // Sample JSON data for slots
//   const slotData = [
//     {
//       id: 1,
//       name: "Crucial Conversations® For Mastering Dialogue: Sep 19th-20th, 2024,Gurugram",
//     },
//     { id: 2, name: "The SLII Experience™: Sep 17th-18,2024,Gurugram" },
//     {
//       id: 3,
//       name: "The SLII Experience™ T4T F2F : Sep 19th-20th,2024,Gurugram",
//     },
//     { id: 4, name: "Disc Certification® : Sep 24th-27,2024,Virtual" },
//     {
//       id: 5,
//       name: "Crucial Conversations® For Mastering Dialogue:Oct 10th-11th,2024,Mumbai",
//     },
//     { id: 6, name: "The Power of Habit™ :Oct 17th,2024,Gurugram" },
//     { id: 7, name: "Blanchard Management Essentials :Oct 18th,2024,Virtual" },
//     { id: 8, name: "Crucial Influence : Nov 12th,2024,Virtual" },
//     { id: 9, name: "Getting Things Done® : Dec 20th,2024,Bangalore" },
//     { id: 10, name: "Trapologist At Work : Dec 11th,2024,Virtual" },
//     { id: 11, name: "Disc Certification® : Dec 10th-13th,2024,Virtual" },
//     { id: 12, name: "Self Leadership : Dec 10th,2024,Gurugram" },
//     { id: 13, name: "Getting Things Done® : Jan 24th,2025,Virtual" },
//     { id: 14, name: "The SLII Experience™ : Jan 20th-21th,2025,Virtual" },
//     {
//       id: 15,
//       name: "The SLII Experience™ T4T F2F: Jan 22nd-23th,2025,Virtual",
//     },
//     { id: 16, name: "Getting Things Done: Feb 7,2025,Gurugram" },
//     { id: 17, name: "Disc Certification®: Feb 24th-25th,2025,Gurugram" },
//     { id: 18, name: "Crucial Influence: Feb 20th-21th,2025,Virtual" },
//     {
//       id: 19,
//       name: "Crucial Conversations® For Mastering Dialogue: Mar 20th-21th,2025,Virtual",
//     },
//     { id: 20, name: "The SLII Experience™: Mar 18th-19th,2025,Virtual" },
//     {
//       id: 21,
//       name: "The SLII Experience™ T4T F2F: Mar 20th-21th,2025,Chennai",
//     },
//     {
//       id: 22,
//       name: "The SLII Experience™ T4T F2F: Mar 20th-21th,2025,HyDerabad",
//     },
//   ];

//   const [slots, setSlots] = useState([]);

//   useEffect(() => {
//     // Setting slot data from JSON
//     setSlots(slotData);
//   }, []);

//   const WorkShopHendle = async (event) => {
//     event.preventDefault();
//     document.getElementById("submitbuttonform").value = "Submitting form....";

//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//       console.log(this.responseText);
//     };

//     xhttp.open(
//       "POST",

//       "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/407/feedback"
//     );
//     xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhttp.onreadystatechange = function () {
//       if (xhttp.readyState === 4) {
//         if (xhttp.status === 200) {
//           document.getElementById("showlabel").innerHTML =
//             "Thank you for submitting your details.";
//           document.getElementById("showlabel").style.display = "block";

//           window.setTimeout(function () {
//             const formData = new FormData(event.target);
//             const name = formData.get("name");
//             const email = formData.get("email");
//             const phone = formData.get("phone");
//             const gst_number = formData.get("gst_number");
//             const entity_name = formData.get("entity_name");
//             const address = formData.get("address");
//             const pan_number = formData.get("pan_number");
//             const gst = formData.get("gst");

//             const redirectURL = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${name}&email=${email}&contact=${phone}&GstNumber=${gst_number}&EntityName=${entity_name}&Amount=1000&Address=${address}&PanNumber=${pan_number}&gst=${gst}`;
//             window.location.href = redirectURL;
//           }, 3000);
//         } else {
//           alert("There was a problem with the request.");
//         }
//       }
//     };

//     const formData = new FormData(event.target);
//     xhttp.send(
//       "leadsquared-Name=" +
//         formData.get("name") +
//         "&leadsquared-EmailAddress=" +
//         formData.get("email") +
//         "&leadsquared-Mobile=" +
//         formData.get("phone") +
//         "&leadsquared-Company=" +
//         formData.get("organization") +
//         "&leadsquared-JobTitle=" +
//         formData.get("designation") +
//         "&leadsquared-GstNumber=" +
//         formData.get("gst_number") +
//         "&leadsquared-EntityName=" +
//         formData.get("entity_name") +
//         "&leadsquared-Address=" +
//         formData.get("address") +
//         "&leadsquared-PanNumber=" +
//         formData.get("pan_number") +
//         "&slot=" +
//         formData.get("slot")+
//         "&gst=" +
//         formData.get("gst")+
//         "&comments=" +
//         formData.get("comments")
//     );
//   };

//   const [showGSTFields, setShowGSTFields] = useState(false);
//   const [showGSTFieldsOne, setShowGSTFieldOne] = useState(false);
//   const [gstNumber, setGstNumber] = useState("");
//   const [isGstNumberValid, setIsGstNumberValid] = useState(true);
//   const [panGST, setPanGST] = useState("");
//   const [isPanGSTValid, setIsPanGSTValid] = useState(true);

//   const validateGSTNumber = (gstNumber) => {
//     const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}$/;
//     return gstRegex.test(gstNumber);
//   };

//   const validatePAN = (panNumber) => {
//     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//     return panRegex.test(panNumber);
//   };

//   const handleGstNumberChange = (event) => {
//     const value = event.target.value;
//     setGstNumber(value);
//     if (value === "") {
//       setIsGstNumberValid(true); // Clear the error message if the input is empty
//     } else {
//       setIsGstNumberValid(validateGSTNumber(value));
//     }
//   };

//   const handleGSTChange = (event) => {
//     setShowGSTFields(event.target.value === "Yes");
//     setShowGSTFieldOne(event.target.value === "No");
//   };

//   const handlePanGSTChange = (event) => {
//     const value = event.target.value;
//     setPanGST(value);
//     if (value === "") {
//       setIsPanGSTValid(true); // Clear the error message if the input is empty
//     } else {
//       setIsPanGSTValid(validatePAN(value));
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Book Your Slot</ModalHeader>
//       <ModalBody>
//         <form
//           id="contact-form"
//           className="clientcornner"
//           onSubmit={WorkShopHendle}
//         >
//           <div className="row">
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input type="text" name="name" placeholder="Name*" required />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Work Email/Email*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="phone"
//                 maxLength="10"
//                 minLength="10"
//                 pattern="[0-9]*"
//                 placeholder="Phone No.*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="organization"
//                 placeholder="Company Name*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="designation"
//                 placeholder="Designation*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="pan_number"
//                 placeholder="Pan Number"
//                 value={panGST}
//                 onChange={handlePanGSTChange}
//                 required
//               />
//               {!isPanGSTValid && (
//                 <span style={{ color: "red" }}>Invalid PAN Number</span>
//               )}
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <select name="slot" required>
//                 <option value="Select">Pick up any Slot*</option>
//                 {slots.map((slot) => (
//                   <option key={slot.id} value={slot.name}>
//                     {slot.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
           
//             <div className="col-sm-12 mb-12">
//               <label>Are you under GST?</label>
//               <br />
//               <div className="d-flex mt-2">
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="Yes"
//                   onChange={handleGSTChange}
//                 />{" "}
//                 Yes
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="No"
//                   onChange={handleGSTChange}
//                 />{" "}
//                 No
//               </div>
//             </div>

//             {showGSTFields && (
//               <div id="gst_fields">
//                 <div className="row">
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="gst_number"
//                       placeholder="GST Number*"
//                       value={gstNumber}
//                       onChange={handleGstNumberChange}
//                       required
//                     />
//                     {!isGstNumberValid && (
//                       <span style={{ color: "red" }}>Invalid GST Number</span>
//                     )}
//                   </div>
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="entity_name"
//                       placeholder="Entity Name*"
//                       required
//                     />
//                   </div>
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="address"
//                       placeholder="Address*"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {showGSTFieldsOne && (
//               <div id="gst_fields">
//                 <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Address*"
//                     required
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="col-lg-12 col-md-12 col-sm-12 mb-12">
//               <textarea  name="comments" placeholder="message"></textarea>
//             </div>

//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 id="submitbuttonform"
//                 className="clientcornnerbtn"
//                 type="submit"
//                 value="Book Now"
//               />
//             </div>
//           </div>
//         </form>
//         <div id="showlabel" style={{ display: "none" }}>
//           Thank you for submitting your details.
//         </div>
//       </ModalBody>
//     </Modal>
//   );
// }

// export default BookNowFormModal;


// import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import { useState, useEffect } from "react";

// function BookNowFormModal({ isOpen, toggle }) {
//   const slotData = [
//     { id: 1, name: "Crucial Conversations® For Mastering Dialogue: Sep 19th-20th, 2024, Gurugram" },
//     { id: 2, name: "The SLII Experience™: Sep 17th-18, 2024, Gurugram" },
//     { id: 3, name: "The SLII Experience™ T4T F2F: Sep 19th-20th, 2024, Gurugram" },
//     { id: 4, name: "Disc Certification®: Sep 24th-27, 2024, Virtual" },
//     { id: 5, name: "Crucial Conversations® For Mastering Dialogue: Oct 10th-11th, 2024, Mumbai" },
//     { id: 6, name: "The Power of Habit™: Oct 17th, 2024, Gurugram" },
//     { id: 7, name: "Blanchard Management Essentials: Oct 18th, 2024, Virtual" },
//     { id: 8, name: "Crucial Influence: Nov 12th, 2024, Virtual" },
//     { id: 9, name: "Getting Things Done®: Dec 20th, 2024, Bangalore" },
//     { id: 10, name: "Trapologist At Work: Dec 11th, 2024, Virtual" },
//     { id: 11, name: "Disc Certification®: Dec 10th-13th, 2024, Virtual" },
//     { id: 12, name: "Self Leadership: Dec 10th, 2024, Gurugram" },
//     { id: 13, name: "Getting Things Done®: Jan 24th, 2025, Virtual" },
//     { id: 14, name: "The SLII Experience™: Jan 20th-21st, 2025, Virtual" },
//     { id: 15, name: "The SLII Experience™ T4T F2F: Jan 22nd-23rd, 2025, Virtual" },
//     { id: 16, name: "Getting Things Done: Feb 7th, 2025, Gurugram" },
//     { id: 17, name: "Disc Certification®: Feb 24th-25th, 2025, Gurugram" },
//     { id: 18, name: "Crucial Influence: Feb 20th-21st, 2025, Virtual" },
//     { id: 19, name: "Crucial Conversations® For Mastering Dialogue: Mar 20th-21st, 2025, Virtual" },
//     { id: 20, name: "The SLII Experience™: Mar 18th-19th, 2025, Virtual" },
//     { id: 21, name: "The SLII Experience™ T4T F2F: Mar 20th-21st, 2025, Chennai" },
//     { id: 22, name: "The SLII Experience™ T4T F2F: Mar 20th-21st, 2025, Hyderabad" },
//   ];

//   const [slots, setSlots] = useState([]);
//   const [showGSTFields, setShowGSTFields] = useState(false);
//   const [showGSTFieldsOne, setShowGSTFieldOne] = useState(false);
//   const [gstNumber, setGstNumber] = useState("");
//   const [isGstNumberValid, setIsGstNumberValid] = useState(true);
//   const [panGST, setPanGST] = useState("");
//   const [isPanGSTValid, setIsPanGSTValid] = useState(true);

//   useEffect(() => {
//     setSlots(slotData);
//   }, []);

//   const WorkShopHendle = async (event) => {
//     event.preventDefault();
//     document.getElementById("submitbuttonform").value = "Submitting form...";

//     try {
//       const formData = new FormData(event.target);
//       const amount = 1000; // Replace with dynamic amount logic if needed

//       const response = await fetch("https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/407/feedback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           "leadsquared-Name": formData.get("name"),
//           "leadsquared-EmailAddress": formData.get("email"),
//           "leadsquared-Mobile": formData.get("phone"),
//           "leadsquared-Company": formData.get("organization"),
//           "leadsquared-JobTitle": formData.get("designation"),
//           "leadsquared-GstNumber": formData.get("gst_number"),
//           "leadsquared-EntityName": formData.get("entity_name"),
//           "leadsquared-Address": formData.get("address"),
//           "leadsquared-PanNumber": formData.get("pan_number"),
//           "slot": formData.get("slot"),
//           "gst": formData.get("gst"),
//           "comments": formData.get("comments"),
//         }),
//       });

//       if (response.ok) {
//          // Update and show confirmation message
//         const messageElement = document.getElementById("showlabel");
//         messageElement.innerHTML = "Thank you for submitting your details.";
//         messageElement.style.display = "block";

//         setTimeout(() => {
//           const redirectURL = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${formData.get("name")}&email=${formData.get("email")}&contact=${formData.get("phone")}&GstNumber=${formData.get("gst_number")}&EntityName=${formData.get("entity_name")}&Amount=${amount}&Address=${formData.get("address")}&PanNumber=${formData.get("pan_number")}&gst=${formData.get("gst")}`;
//           window.location.href = redirectURL;
//         }, 3000);
//       } else {
//         alert("There was a problem with the request.");
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       alert("There was a problem with the request.");
//     } finally {
//       document.getElementById("submitbuttonform").value = "Book Now";
//     }
//   };

//   const validateGSTNumber = (gstNumber) => {
//     const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}$/;
//     return gstRegex.test(gstNumber);
//   };

//   const validatePAN = (panNumber) => {
//     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//     return panRegex.test(panNumber);
//   };

//   const handleGstNumberChange = (event) => {
//     const value = event.target.value;
//     setGstNumber(value);
//     setIsGstNumberValid(value === "" || validateGSTNumber(value));
//   };

//   const handleGSTChange = (event) => {
//     const gstValue = event.target.value;
//     setShowGSTFields(gstValue === "Yes");
//     setShowGSTFieldOne(gstValue === "No");
//   };

//   const handlePanGSTChange = (event) => {
//     const value = event.target.value;
//     setPanGST(value);
//     setIsPanGSTValid(value === "" || validatePAN(value));
//   };
//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Book Your Slot</ModalHeader>
//       <ModalBody>
//         <form
//           id="contact-form"
//           className="clientcornner"
//           onSubmit={WorkShopHendle}
//         >
//           <div className="row">
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input type="text" name="name" placeholder="Name*" required />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Work Email/Email*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="phone"
//                 maxLength="10"
//                 minLength="10"
//                 pattern="[0-9]*"
//                 placeholder="Phone No.*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="organization"
//                 placeholder="Company Name*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="designation"
//                 placeholder="Designation*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="pan_number"
//                 placeholder="Pan Number"
//                 value={panGST}
//                 onChange={handlePanGSTChange}
//                 required
//               />
//               {!isPanGSTValid && (
//                 <span style={{ color: "red" }}>Invalid PAN Number</span>
//               )}
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <select name="slot" required>
//                 <option value="Select">Pick up any Slot*</option>
//                 {slots.map((slot) => (
//                   <option key={slot.id} value={slot.name}>
//                     {slot.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
           
//             <div className="col-sm-12 mb-12">
//               <label>Are you under GST?</label>
//               <br />
//               <div className="d-flex mt-2">
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="Yes"
//                   onChange={handleGSTChange}
//                 />{" "}
//                 Yes
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="No"
//                   onChange={handleGSTChange}
//                 />{" "}
//                 No
//               </div>
//             </div>

//             {showGSTFields && (
//               <div id="gst_fields">
//                 <div className="row">
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="gst_number"
//                       placeholder="GST Number*"
//                       value={gstNumber}
//                       onChange={handleGstNumberChange}
//                       required
//                     />
//                     {!isGstNumberValid && (
//                       <span style={{ color: "red" }}>Invalid GST Number</span>
//                     )}
//                   </div>
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="entity_name"
//                       placeholder="Entity Name*"
//                       required
//                     />
//                   </div>
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="address"
//                       placeholder="Address*"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {showGSTFieldsOne && (
//               <div id="gst_fields">
//                 <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Address*"
//                     required
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="col-lg-12 col-md-12 col-sm-12 mb-12">
//               <textarea  name="comments" placeholder="message"></textarea>
//             </div>

//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 id="submitbuttonform"
//                 className="clientcornnerbtn"
//                 type="submit"
//                 value="Book Now"
//               />
//             </div>
//           </div>
//         </form>
//         <div id="showlabel" style={{ display: "none" }}>
//           Thank you for submitting your details.
//         </div>
//       </ModalBody>
//     </Modal>
//   );
// }

// export default BookNowFormModal;


// import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import { useState, useEffect } from "react";

// function BookNowFormModal({ isOpen, toggle }) {
//   const slotData = [
//     { id: 1, name: "Crucial Conversations® For Mastering Dialogue: Sep 19th-20th, 2024, Gurugram", amount: 2000 },
//     { id: 2, name: "The SLII Experience™: Sep 17th-18th, 2024, Gurugram", amount: 3000 },
//     { id: 3, name: "The SLII Experience™ T4T F2F: Sep 19th-20th, 2024, Gurugram", amount: 4000 },
//     { id: 4, name: "Disc Certification®: Sep 24th-27, 2024, Virtual", amount: 5000 },
//     { id: 5, name: "Crucial Conversations® For Mastering Dialogue: Oct 10th-11th, 2024, Mumbai", amount: 6000 },
//     { id: 6, name: "The Power of Habit™: Oct 17th, 2024, Gurugram", amount: 7000 },
//     { id: 7, name: "Blanchard Management Essentials: Oct 18th, 2024, Virtual", amount: 8000 },
//     { id: 8, name: "Crucial Influence: Nov 12th, 2024, Virtual", amount: 9000 },
//     { id: 9, name: "Getting Things Done®: Dec 20th, 2024, Bangalore", amount: 5000 },
//     { id: 10, name: "Trapologist At Work: Dec 11th, 2024, Virtual", amount: 5000 },
//     { id: 11, name: "Disc Certification®: Dec 10th-13th, 2024, Virtual", amount: 4000 },
//     { id: 12, name: "Self Leadership: Dec 10th, 2024, Gurugram", amount: 2000 },
//     { id: 13, name: "Getting Things Done®: Jan 24th, 2025, Virtual", amount: 1000 },
//     { id: 14, name: "The SLII Experience™: Jan 20th-21st, 2025, Virtual", amount: 9000 },
//     { id: 15, name: "The SLII Experience™ T4T F2F: Jan 22nd-23rd, 2025, Virtual", amount: 2000 },
//     { id: 16, name: "Getting Things Done: Feb 7th, 2025, Gurugram", amount: 2000 },
//     { id: 17, name: "Disc Certification®: Feb 24th-25th, 2025, Gurugram", amount: 2500 },
//     { id: 18, name: "Crucial Influence: Feb 20th-21st, 2025, Virtual", amount: 2800 },
//     { id: 19, name: "Crucial Conversations® For Mastering Dialogue: Mar 20th-21st, 2025, Virtual", amount: 2800 },
//     { id: 20, name: "The SLII Experience™: Mar 18th-19th, 2025, Virtual", amount: 2900 },
//     { id: 21, name: "The SLII Experience™ T4T F2F: Mar 20th-21st, 2025, Chennai", amount: 31000 },
//     { id: 22, name: "The SLII Experience™ T4T F2F: Mar 20th-21st, 2025, Hyderabad", amount: 31000 },
//   ];

//   const [slots, setSlots] = useState([]);
//   const [showGSTFields, setShowGSTFields] = useState(false);
//   const [showGSTFieldsOne, setShowGSTFieldOne] = useState(false);
//   const [gstNumber, setGstNumber] = useState("");
//   const [isGstNumberValid, setIsGstNumberValid] = useState(true);
//   const [panGST, setPanGST] = useState("");
//   const [isPanGSTValid, setIsPanGSTValid] = useState(true);
//   const [selectedSlot, setSelectedSlot] = useState(null);

//   useEffect(() => {
//     setSlots(slotData);
//   }, []);

//   const WorkShopHendle = async (event) => {
//     event.preventDefault();
//     document.getElementById("submitbuttonform").value = "Submitting form...";

//     try {
//       const formData = new FormData(event.target);
//       const amount = slotData.find(slot => slot.name === formData.get("slot"))?.amount || 1000;

//       const response = await fetch("https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/407/feedback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           "leadsquared-Name": formData.get("name"),
//           "leadsquared-EmailAddress": formData.get("email"),
//           "leadsquared-Mobile": formData.get("phone"),
//           "leadsquared-Company": formData.get("organization"),
//           "leadsquared-JobTitle": formData.get("designation"),
//           "leadsquared-GstNumber": formData.get("gst_number"),
//           "leadsquared-EntityName": formData.get("entity_name"),
//           "leadsquared-Address": formData.get("address"),
//           "leadsquared-PanNumber": formData.get("pan_number"),
//           "slot": formData.get("slot"),
//           "gst": formData.get("gst"),
//           "comments": formData.get("comments"),
//         }),
//       });

//       if (response.ok) {
//         const messageElement = document.getElementById("showlabel");
//         messageElement.innerHTML = "Thank you for submitting your details.";
//         messageElement.style.display = "block";

//         setTimeout(() => {
//           const redirectURL = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${formData.get("name")}&email=${formData.get("email")}&contact=${formData.get("phone")}&GstNumber=${formData.get("gst_number")}&EntityName=${formData.get("entity_name")}&Amount=${amount}&Address=${formData.get("address")}&PanNumber=${formData.get("pan_number")}&gst=${formData.get("gst")}`;
//           window.location.href = redirectURL;
//         }, 2000);
//       } else {
//         alert("There was a problem with the request.");
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       alert("There was a problem with the request.");
//     } finally {
//       document.getElementById("submitbuttonform").value = "Booked Now";
//     }
//   };

//   const validateGSTNumber = (gstNumber) => {
//     const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}$/;
//     return gstRegex.test(gstNumber);
//   };

//   const validatePAN = (panNumber) => {
//     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//     return panRegex.test(panNumber);
//   };

//   const handleGstNumberChange = (event) => {
//     const value = event.target.value;
//     setGstNumber(value);
//     setIsGstNumberValid(value === "" || validateGSTNumber(value));
//   };

//   const handleGSTChange = (event) => {
//     const gstValue = event.target.value;
//     setShowGSTFields(gstValue === "Yes");
//     setShowGSTFieldOne(gstValue === "No");
//   };

//   const handlePanGSTChange = (event) => {
//     const value = event.target.value;
//     setPanGST(value);
//     setIsPanGSTValid(value === "" || validatePAN(value));
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Book Your Slot</ModalHeader>
//       <ModalBody>
//         <form
//           id="contact-form"
//           className="clientcornner"
//           onSubmit={WorkShopHendle}
//         >
//           <div className="row">
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input type="text" name="name" placeholder="Name*" required />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Work Email/Email*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="phone"
//                 maxLength="10"
//                 minLength="10"
//                 pattern="[0-9]*"
//                 placeholder="Phone No.*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="organization"
//                 placeholder="Company Name*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="designation"
//                 placeholder="Designation*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="pan_number"
//                 placeholder="Pan Number"
//                 value={panGST}
//                 onChange={handlePanGSTChange}
//                 required
//               />
//               {!isPanGSTValid && (
//                 <span style={{ color: "red" }}>Invalid PAN Number</span>
//               )}
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <select
//                 name="slot"
//                 required
//                 onChange={(e) => setSelectedSlot(e.target.value)}
//               >
//                 <option value="">Pick up any Slot*</option>
//                 {slots.map((slot) => (
//                   <option key={slot.id} value={slot.name}>
//                     {slot.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
           
//             <div className="col-sm-12 mb-12">
//               <label>Are you under GST?</label>
//               <br />
//               <div className="d-flex mt-2">
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="Yes"
//                   onChange={handleGSTChange}
//                 />{" "}
//                 Yes
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="No"
//                   onChange={handleGSTChange}
//                 />{" "}
//                 No
//               </div>
//             </div>

//             {showGSTFields && (
//               <div id="gst_fields">
//                 <div className="row">
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="gst_number"
//                       placeholder="GST Number*"
//                       value={gstNumber}
//                       onChange={handleGstNumberChange}
//                       required
//                     />
//                     {!isGstNumberValid && (
//                       <span style={{ color: "red" }}>Invalid GST Number</span>
//                     )}
//                   </div>
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="entity_name"
//                       placeholder="Entity Name*"
//                       required
//                     />
//                   </div>
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="address"
//                       placeholder="Address*"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {showGSTFieldsOne && (
//               <div id="gst_fields">
//                 <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Address*"
//                     required
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="col-lg-12 col-md-12 col-sm-12 mb-12">
//               <textarea name="comments" placeholder="Message"></textarea>
//             </div>

//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 id="submitbuttonform"
//                 className="clientcornnerbtn"
//                 type="submit"
//                 value="Book Now"
//               />
//             </div>
//           </div>
//         </form>
//         <div id="showlabel" style={{ display: "none" }}>
//           Thank you for submitting your details.
//         </div>
//       </ModalBody>
//     </Modal>
//   );
// }

// export default BookNowFormModal;



// import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import { useState, useEffect } from "react";

// function BookNowFormModal({ isOpen, toggle }) {
//   const slotData = [
//     { id: 1, name: "Crucial Conversations® For Mastering Dialogue: Sep 19th-20th, 2024, Gurugram", amount: 2000 },
//     { id: 2, name: "The SLII Experience™: Sep 17th-18th, 2024, Gurugram", amount: 3000 },
//     { id: 3, name: "The SLII Experience™ T4T F2F: Sep 19th-20th, 2024, Gurugram", amount: 4000 },
//     { id: 4, name: "Disc Certification®: Sep 24th-27, 2024, Virtual", amount: 5000 },
//     { id: 5, name: "Crucial Conversations® For Mastering Dialogue: Oct 10th-11th, 2024, Mumbai", amount: 6000 },
//     { id: 6, name: "The Power of Habit™: Oct 17th, 2024, Gurugram", amount: 7000 },
//     { id: 7, name: "Blanchard Management Essentials: Oct 18th, 2024, Virtual", amount: 8000 },
//     { id: 8, name: "Crucial Influence: Nov 12th, 2024, Virtual", amount: 9000 },
//     { id: 9, name: "Getting Things Done®: Dec 20th, 2024, Bangalore", amount: 5000 },
//     { id: 10, name: "Trapologist At Work: Dec 11th, 2024, Virtual", amount: 5000 },
//     { id: 11, name: "Disc Certification®: Dec 10th-13th, 2024, Virtual", amount: 4000 },
//     { id: 12, name: "Self Leadership: Dec 10th, 2024, Gurugram", amount: 2000 },
//     { id: 13, name: "Getting Things Done®: Jan 24th, 2025, Virtual", amount: 1000 },
//     { id: 14, name: "The SLII Experience™: Jan 20th-21st, 2025, Virtual", amount: 9000 },
//     { id: 15, name: "The SLII Experience™ T4T F2F: Jan 22nd-23rd, 2025, Virtual", amount: 2000 },
//     { id: 16, name: "Getting Things Done: Feb 7th, 2025, Gurugram", amount: 2000 },
//     { id: 17, name: "Disc Certification®: Feb 24th-25th, 2025, Gurugram", amount: 2500 },
//     { id: 18, name: "Crucial Influence: Feb 20th-21st, 2025, Virtual", amount: 2800 },
//     { id: 19, name: "Crucial Conversations® For Mastering Dialogue: Mar 20th-21st, 2025, Virtual", amount: 2800 },
//     { id: 20, name: "The SLII Experience™: Mar 18th-19th, 2025, Virtual", amount: 2900 },
//     { id: 21, name: "The SLII Experience™ T4T F2F: Mar 20th-21st, 2025, Chennai", amount: 31000 },
//     { id: 22, name: "The SLII Experience™ T4T F2F: Mar 20th-21st, 2025, Hyderabad", amount: 31000 },
//   ];

//   const [slots, setSlots] = useState([]);
//   const [showGSTFields, setShowGSTFields] = useState(false);
//   const [showGSTFieldsOne, setShowGSTFieldOne] = useState(false);
//   const [gstNumber, setGstNumber] = useState("");
//   const [isGstNumberValid, setIsGstNumberValid] = useState(true);
//   const [panGST, setPanGST] = useState("");
//   const [isPanGSTValid, setIsPanGSTValid] = useState(true);
//   const [selectedSlot, setSelectedSlot] = useState(null);

//   useEffect(() => {
//     setSlots(slotData);
//   }, []);

//   const WorkShopHendle = async (event) => {
//     event.preventDefault();
//     document.getElementById("submitbuttonform").value = "Submitting form...";

//     try {
//       const formData = new FormData(event.target);
//       const amount = slotData.find(slot => slot.name === formData.get("slot"))?.amount || 1000;

//       const response = await fetch("https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/407/feedback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           "leadsquared-Name": formData.get("name"),
//           "leadsquared-EmailAddress": formData.get("email"),
//           "leadsquared-Mobile": formData.get("phone"),
//           "leadsquared-Company": formData.get("organization"),
//           "leadsquared-JobTitle": formData.get("designation"),
//           "leadsquared-GstNumber": formData.get("gst_number"),
//           "leadsquared-EntityName": formData.get("entity_name"),
//           "leadsquared-Address": formData.get("address"),
//           "leadsquared-PanNumber": formData.get("pan_number"),
//           "slot": formData.get("slot"),
//           "gst": formData.get("gst"),
//           "comments": formData.get("comments"),
//         }),
//       });

//       if (response.ok) {
//         const messageElement = document.getElementById("showlabel");
//         messageElement.innerHTML = "Thank you for submitting your details.";
//         messageElement.style.display = "block";

//         setTimeout(() => {
//           const redirectURL = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${formData.get("name")}&email=${formData.get("email")}&contact=${formData.get("phone")}&GstNumber=${formData.get("gst_number")}&EntityName=${formData.get("entity_name")}&Amount=${amount}&Address=${formData.get("address")}&PanNumber=${formData.get("pan_number")}&gst=${formData.get("gst")}`;
//           window.location.href = redirectURL;
//         }, 2000);
//       } else {
//         alert("There was a problem with the request.");
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       alert("There was a problem with the request.");
//     } finally {
//       document.getElementById("submitbuttonform").value = "Booked Now";
//     }
//   };

//   const validateGSTNumber = (gstNumber) => {
//     const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}$/;
//     return gstRegex.test(gstNumber);
//   };

//   const validatePAN = (panNumber) => {
//     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//     return panRegex.test(panNumber);
//   };

//   const handleGstNumberChange = (event) => {
//     const value = event.target.value;
//     setGstNumber(value);
//     setIsGstNumberValid(value === "" || validateGSTNumber(value));
//   };

//   const handleGSTChange = (event) => {
//     const gstValue = event.target.value;
//     setShowGSTFields(gstValue === "Yes");
//     setShowGSTFieldOne(gstValue === "No");
//   };

//   const handlePanGSTChange = (event) => {
//     const value = event.target.value;
//     setPanGST(value);
//     setIsPanGSTValid(value === "" || validatePAN(value));
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Book Your Slot</ModalHeader>
//       <ModalBody>
//         <form
//           id="contact-form"
//           className="clientcornner"
//           onSubmit={WorkShopHendle}
//         >
//           <div className="row">
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input type="text" name="name" placeholder="Name*" required />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Work Email/Email*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="phone"
//                 maxLength="10"
//                 minLength="10"
//                 pattern="[0-9]*"
//                 placeholder="Phone No.*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="organization"
//                 placeholder="Company Name*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="designation"
//                 placeholder="Designation*"
//                 required
//               />
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="pan_number"
//                 placeholder="Pan Number"
//                 value={panGST}
//                 onChange={handlePanGSTChange}
//                 required
//               />
//               {!isPanGSTValid && (
//                 <span style={{ color: "red" }}>Invalid PAN Number</span>
//               )}
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <select
//                 name="slot"
//                 required
//                 onChange={(e) => setSelectedSlot(e.target.value)}
//               >
//                 <option value="">Pick up any Slot*</option>
//                 {slots.map((slot) => (
//                   <option key={slot.id} value={slot.name}>
//                     {slot.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
           
//             <div className="col-sm-12 mb-12">
//               <label>Are you under GST?</label>
//               <br />
//               <div className="d-flex mt-2">
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="Yes"
//                   onChange={handleGSTChange}
//                 />{" "}
//                 Yes
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="No"
//                   onChange={handleGSTChange}
//                 />{" "}
//                 No
//               </div>
//             </div>

//             {showGSTFields && (
//               <div id="gst_fields">
//                 <div className="row">
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="gst_number"
//                       placeholder="GST Number*"
//                       value={gstNumber}
//                       onChange={handleGstNumberChange}
//                       required
//                     />
//                     {!isGstNumberValid && (
//                       <span style={{ color: "red" }}>Invalid GST Number</span>
//                     )}
//                   </div>
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="entity_name"
//                       placeholder="Entity Name*"
//                       required
//                     />
//                   </div>
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="address"
//                       placeholder="Address*"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {showGSTFieldsOne && (
//               <div id="gst_fields">
//                 <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Address*"
//                     required
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="col-lg-12 col-md-12 col-sm-12 mb-12">
//               <textarea name="comments" placeholder="Message"></textarea>
//             </div>

//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 id="submitbuttonform"
//                 className="clientcornnerbtn"
//                 type="submit"
//                 value="Book Now"
//               />
//             </div>
//           </div>
//         </form>
//         <div id="showlabel" style={{ display: "none" }}>
//           Thank you for submitting your details.
//         </div>
//       </ModalBody>
//     </Modal>
//   );
// }

// export default BookNowFormModal;


// BookNowFormModal.js

// import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import { useState } from "react";
// import PropTypes from "prop-types";
// import { Spinner } from "reactstrap";

// function BookNowFormModal({ isOpen, toggle, workshops }) {
//   const [showGSTFields, setShowGSTFields] = useState(false);
//   const [showGSTFieldsOne, setShowGSTFieldOne] = useState(false);
//   const [gstNumber, setGstNumber] = useState("");
//   const [isGstNumberValid, setIsGstNumberValid] = useState(true);
//   const [panGST, setPanGST] = useState("");
//   const [isPanGSTValid, setIsPanGSTValid] = useState(true);
//   const [selectedWorkshop, setSelectedWorkshop] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
 
//   const WorkShopHandle = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     document.getElementById("submitbuttonform").value = "Submitting form...";

//     try {
//       const formData = new FormData(event.target);
//       const selectedWorkshop = workshops.find(
//         (workshop) => workshop.courseName === formData.get("slot")
//       );
//       const amount = selectedWorkshop?.amount || 1000;

//       const response = await fetch("https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/407/feedback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           "leadsquared-Name": formData.get("name"),
//           "leadsquared-EmailAddress": formData.get("email"),
//           "leadsquared-Mobile": formData.get("phone"),
//           "leadsquared-Company": formData.get("organization"),
//           "leadsquared-JobTitle": formData.get("designation"),
//           "leadsquared-GstNumber": formData.get("gst_number"),
//           "leadsquared-EntityName": formData.get("entity_name"),
//           "leadsquared-Address": formData.get("address"),
//           "leadsquared-PanNumber": formData.get("pan_number"),
//           "slot": formData.get("slot"),
//           "gst": formData.get("gst"),
//           "comments": formData.get("comments"),
//         }),
//       });

//       if (response.ok) {
//         const messageElement = document.getElementById("showlabel");
//         messageElement.innerHTML = "Thank you for submitting your details.";
//         messageElement.style.display = "block";

//         setTimeout(() => {
//           const redirectURL = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${formData.get("name")}&email=${formData.get("email")}&contact=${formData.get("phone")}&GstNumber=${formData.get("gst_number")}&EntityName=${formData.get("entity_name")}&Amount=${amount}&Address=${formData.get("address")}&PanNumber=${formData.get("pan_number")}&gst=${formData.get("gst")}`;
//           window.location.href = redirectURL;
//         }, 1000);
//       } else {
//         alert("There was a problem with the request.");
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       alert("There was a problem with the request.");
//     } finally {
     
//       document.getElementById("submitbuttonform").value = "Book Now";
     
//     }
//   };


//   const validateGSTNumber = (gstNumber) => {
//     const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}$/;
//     return gstRegex.test(gstNumber);
//   };

//   const validatePAN = (panNumber) => {
//     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//     return panRegex.test(panNumber);
//   };

//   const handleGstNumberChange = (event) => {
//     const value = event.target.value;
//     setGstNumber(value);
//     setIsGstNumberValid(value === "" || validateGSTNumber(value));
//   };

//   const handleGSTChange = (event) => {
//     const gstValue = event.target.value;
//     setShowGSTFields(gstValue === "Yes");
//     setShowGSTFieldOne(gstValue === "No");
//   };

//   const handlePanGSTChange = (event) => {
//     const value = event.target.value;
//     setPanGST(value);
//     setIsPanGSTValid(value === "" || validatePAN(value));
//   };

//   const handleSlotChange = (event) => {
//     const selectedSlotName = event.target.value;
//     const workshop = workshops.find(
//       (slot) => slot.courseName === selectedSlotName
//     );
//     setSelectedWorkshop(workshop || null);
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Book Your Slot</ModalHeader>
//       <ModalBody>
//         <form
//           id="contact-form"
//           className="clientcornner"
//           onSubmit={WorkShopHandle}
//         >
//           <div className="row">
//             {/* Name */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input type="text" name="name" placeholder="Name*" required />
//             </div>

//             {/* Email */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Work Email/Email*"
//                 required
//               />
//             </div>

//             {/* Phone */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="phone"
//                 maxLength="10"
//                 minLength="10"
//                 pattern="[0-9]*"
//                 placeholder="Phone No.*"
//                 required
//               />
//             </div>

//             {/* Company Name */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="organization"
//                 placeholder="Company Name*"
//                 required
//               />
//             </div>

//             {/* Designation */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="designation"
//                 placeholder="Designation*"
//                 required
//               />
//             </div>

//             {/* PAN Number */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="pan_number"
//                 placeholder="PAN Number"
//                 value={panGST}
//                 onChange={handlePanGSTChange}
//                 required
//               />
//               {!isPanGSTValid && (
//                 <span style={{ color: "red" }}>Invalid PAN Number</span>
//               )}
//             </div>

//             {/* Slot Selection */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <select
//                 name="slot"
//                 required
//                 onChange={handleSlotChange}
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Pick any Slot*
//                 </option>
//                 {workshops.map((slot, index) => (
//                   <option key={index} value={slot.courseName}>
//                     {`${slot.courseName}: ${slot.dateRangeOne}${
//                       slot.dateRangeTwo
//                         ? ` - ${slot.dateRangeTwo}`
//                         : ""
//                     }, ${slot.location} (${slot.format}) (${slot.amount} INR)`}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* GST Option */}
//             <div className="col-sm-12 mb-12">
//               <label>Are you under GST?</label>
//               <br />
//               <div className="d-flex mt-2">
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="Yes"
//                   onChange={handleGSTChange}
//                   required
//                 />{" "}
//                 Yes
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="No"
//                   onChange={handleGSTChange}
//                   required
//                 />{" "}
//                 No
//               </div>
//             </div>

//             {/* GST Fields */}
//             {showGSTFields && (
//               <div id="gst_fields" className="col-12">
//                 <div className="row">
//                   {/* GST Number */}
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="gst_number"
//                       placeholder="GST Number*"
//                       value={gstNumber}
//                       onChange={handleGstNumberChange}
//                       required
//                     />
//                     {!isGstNumberValid && (
//                       <span style={{ color: "red" }}>Invalid GST Number</span>
//                     )}
//                   </div>

//                   {/* Entity Name */}
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="entity_name"
//                       placeholder="Entity Name*"
//                       required
//                     />
//                   </div>

//                   {/* Address */}
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="address"
//                       placeholder="Address*"
//                       required
//                     />
//                   </div>

//                   {/* Additional Fields if Needed */}
//                   {/* Add more fields here if necessary */}
//                 </div>
//               </div>
//             )}

//             {/* GST Not Applicable Fields */}
//             {showGSTFieldsOne && (
//               <div id="gst_fields_one" className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                 <input
//                   type="text"
//                   name="address"  
//                   placeholder="Address*"
//                   required
//                 />
//               </div>
//             )}

//             {/* Comments/Message */}
//             <div className="col-lg-12 col-md-12 col-sm-12 mb-12">
//               <textarea
//                 name="comments"
//                 placeholder="Questions/Comments"
//                 rows="4"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 id="submitbuttonform"
//                 className="clientcornnerbtn"
//                 type="submit"
//                 value="Book Now"
//               />
//             </div>

//             {/* Success Message */}
//             <div id="showlabel" style={{ display: "none" }}></div>
//           </div>
//         </form>
//       </ModalBody>
//         {/* Spinner Overlay */}
//         {isLoading && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             zIndex: 9999,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Spinner style={{ width: "3rem", height: "3rem",color:"#fff" }} />
//         </div>
//       )}
//     </Modal>
//   );
// }

// BookNowFormModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   toggle: PropTypes.func.isRequired,
//   workshops: PropTypes.arrayOf(
//     PropTypes.shape({
//       courseName: PropTypes.string.isRequired,
//       dateRangeOne: PropTypes.string.isRequired,
//       dateRangeTwo: PropTypes.string,
//       location: PropTypes.string.isRequired,
//       format: PropTypes.string.isRequired,
//       amount: PropTypes.number.isRequired,
//       description: PropTypes.string,
//     })
//   ).isRequired,
// };

// export default BookNowFormModal;


// import { Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";
// import { useState } from "react";
// import PropTypes from "prop-types";

// function BookNowFormModal({ isOpen, toggle, workshops }) {
//   const [showGSTFields, setShowGSTFields] = useState(false);
//   const [showGSTFieldsOne, setShowGSTFieldsOne] = useState(false);
//   const [gstNumber, setGstNumber] = useState("");
//   const [isGstNumberValid, setIsGstNumberValid] = useState(true);
//   const [panGST, setPanGST] = useState("");
//   const [isPanGSTValid, setIsPanGSTValid] = useState(true);
//   const [selectedWorkshop, setSelectedWorkshop] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const WorkShopHandle = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);

//     const formData = new FormData(event.target);
    
//     console.log(workshops);

//     const selectedWorkshop = workshops.find(
//       (workshop) => workshop.courseName === formData.get("slot")
//     );
//     const amount = selectedWorkshop?.amount || 1000;

//     try {
//       const response = await fetch("https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/407/feedback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           "leadsquared-Name": formData.get("name"),
//           "leadsquared-EmailAddress": formData.get("email"),
//           "leadsquared-Mobile": formData.get("phone"),
//           "leadsquared-Company": formData.get("organization"),
//           "leadsquared-JobTitle": formData.get("designation"),
//           "leadsquared-GstNumber": formData.get("gst_number"),
//           "leadsquared-EntityName": formData.get("entity_name"),
//           "leadsquared-Address": formData.get("address"),
//           "leadsquared-PanNumber": formData.get("pan_number"),
//           "slot": formData.get("slot"),
//           "gst": formData.get("gst"),
//           "comments": formData.get("comments"),
//         }),
//       });

//       if (response.ok) {
//         setMessage("Thank you for submitting your details.");
//         setTimeout(() => {
//           const redirectURL = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${encodeURIComponent(formData.get("name"))}&email=${encodeURIComponent(formData.get("email"))}&contact=${encodeURIComponent(formData.get("phone"))}&GstNumber=${encodeURIComponent(formData.get("gst_number"))}&EntityName=${encodeURIComponent(formData.get("entity_name"))}&Amount=${amount}&Address=${encodeURIComponent(formData.get("address"))}&PanNumber=${encodeURIComponent(formData.get("pan_number"))}&gst=${encodeURIComponent(formData.get("gst"))}`;
//           window.location.href = redirectURL;
//         }, 1000);
//       } else {
//         setMessage("There was a problem with the request.");
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       setMessage("There was a problem with the request.");
//     } 
//   };

//   const validateGSTNumber = (gstNumber) => {
//     const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}$/;
//     return gstRegex.test(gstNumber);
//   };

//   const validatePAN = (panNumber) => {
//     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//     return panRegex.test(panNumber);
//   };

//   const handleGstNumberChange = (event) => {
//     const value = event.target.value;
//     setGstNumber(value);
//     setIsGstNumberValid(value === "" || validateGSTNumber(value));
//   };

//   const handleGSTChange = (event) => {
//     const gstValue = event.target.value;
//     setShowGSTFields(gstValue === "Yes");
//     setShowGSTFieldsOne(gstValue === "No");
//   };

//   const handlePanGSTChange = (event) => {
//     const value = event.target.value;
//     setPanGST(value);
//     setIsPanGSTValid(value === "" || validatePAN(value));
//   };

//   const handleSlotChange = (event) => {
//     const selectedSlotName = event.target.value;
//     const workshop = workshops.find(
//       (slot) => slot.courseName === selectedSlotName
//     );
//     setSelectedWorkshop(workshop || null);
//   };
// //   const byldprint=()=>
// // {
// //   let element = document.getElementById('ddlslot');
// //   element.value = 'Crucial Conversations® For Mastering Dialogue';
// // };
//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Book Your Slot</ModalHeader>
//       <ModalBody>
//         <form
//           id="contact-form"
//           className="clientcornner"
//           onSubmit={WorkShopHandle}
//         >
//           <div className="row">
//             {/* Name */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input type="text" name="name" placeholder="Name*" required />
//             </div>

//             {/* Email */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Work Email/Email*"
//                 required
//               />
//             </div>

//             {/* Phone */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="phone"
//                 maxLength="10"
//                 minLength="10"
//                 pattern="[0-9]*"
//                 placeholder="Phone No.*"
//                 required
//               />
//             </div>

//             {/* Company Name */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="organization"
//                 placeholder="Company Name*"
//                 required
//               />
//             </div>

//             {/* Designation */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="designation"
//                 placeholder="Designation*"
//                 required
//               />
//             </div>

//             {/* PAN Number */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 type="text"
//                 name="pan_number"
//                 placeholder="PAN Number"
//                 value={panGST}
//                 onChange={handlePanGSTChange}
//                 required
//               />
//               {!isPanGSTValid && (
//                 <span style={{ color: "red" }}>Invalid PAN Number</span>
//               )}
//             </div>

//             {/* Slot Selection */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <select
//                 name="slot"
//                  required
//                 onChange={handleSlotChange}
                
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Pick any Slot*
//                 </option>
//                 {workshops.map((slot, index) => (
//                   <option key={slot.id} value={slot.courseName}>
//                     {`${slot.courseName}: ${slot.dateRangeOne}${
//                       slot.dateRangeTwo
//                         ? ` - ${slot.dateRangeTwo}`
//                         : ""
//                     }, ${slot.location} (${slot.format}) (${slot.amount} INR)`}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* GST Option */}
//             <div className="col-sm-12 mb-12">
//               <label>Are you under GST?</label>
//               <br />
//               <div className="d-flex mt-2">
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="Yes"
//                   onChange={handleGSTChange}
//                   required
//                 />{" "}
//                 Yes
//                 <input
//                   className="w-auto ms-2 me-2"
//                   type="radio"
//                   name="gst"
//                   value="No"
//                   onChange={handleGSTChange}
//                   required
//                 />{" "}
//                 No
//               </div>
//             </div>

//             {/* GST Fields */}
//             {showGSTFields && (
//               <div id="gst_fields" className="col-12">
//                 <div className="row">
//                   {/* GST Number */}
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="gst_number"
//                       placeholder="GST Number*"
//                       value={gstNumber}
//                       onChange={handleGstNumberChange}
//                       required
//                     />
//                     {!isGstNumberValid && (
//                       <span style={{ color: "red" }}>Invalid GST Number</span>
//                     )}
//                   </div>

//                   {/* Entity Name */}
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="entity_name"
//                       placeholder="Entity Name*"
//                       required
//                     />
//                   </div>

//                   {/* Address */}
//                   <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                     <input
//                       type="text"
//                       name="address"
//                       placeholder="Address*"
//                       required
//                     />
//                   </div>

//                   {/* Additional Fields if Needed */}
//                   {/* Add more fields here if necessary */}
//                 </div>
//               </div>
//             )}

//             {/* GST Not Applicable Fields */}
//             {showGSTFieldsOne && (
//               <div id="gst_fields_one" className="col-lg-6 col-md-12 col-sm-12 mb-12">
//                 <input
//                   type="text"
//                   name="address"  
//                   placeholder="Address*"
//                   required
//                 />
//               </div>
//             )}

//             {/* Comments/Message */}
//             <div className="col-lg-12 col-md-12 col-sm-12 mb-12">
//               <textarea
//                 name="comments"
//                 placeholder="Questions/Comments"
//                 rows="4"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className="col-lg-6 col-md-12 col-sm-12 mb-12">
//               <input
//                 id="submitbuttonform"
//                 className="clientcornnerbtn"
//                 type="submit"
//                 value={isLoading ? "Submitting..." : "Book Now"}
//                 disabled={isLoading}
//               />
//             </div>

//             {/* Success or Error Message */}
//             {message && (
//               <div className="col-lg-12 col-md-12 col-sm-12 mb-12">
//                 <span style={{ display: "block", color: isLoading ? "green" : "red" }}>
//                   {message}
//                 </span>
//               </div>
//             )}
//           </div>
//         </form>
//       </ModalBody>
//       {/* Spinner Overlay */}
//       {isLoading && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             zIndex: 9999,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Spinner style={{ width: "3rem", height: "3rem", color: "#fff" }} />
//         </div>
//       )}
//     </Modal>
//   );
// }

// BookNowFormModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   toggle: PropTypes.func.isRequired,
//   workshops: PropTypes.arrayOf(
//     PropTypes.shape({
//       courseName: PropTypes.string.isRequired,
//       dateRangeOne: PropTypes.string.isRequired,
//       dateRangeTwo: PropTypes.string,
//       location: PropTypes.string.isRequired,
//       format: PropTypes.string.isRequired,
//       amount: PropTypes.number.isRequired,
//       description: PropTypes.string,
//     })
//   ).isRequired,
// };

// export default BookNowFormModal;






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
    
    const selectedWorkshop = workshops.find(
      (workshop) => workshop.courseName === formData.get("slot")
    );
    const amount = selectedWorkshop?.amount || 1000;

    try {
      const response = await fetch("https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/407/feedback", {
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
          "slot": formData.get("slot"),
          "gst": formData.get("gst"),
          "comments": formData.get("comments"),
        }),
      });

      if (response.ok) {
        setMessage("Thank you for submitting your details.");
        setTimeout(() => {
          const redirectURL = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${encodeURIComponent(formData.get("name"))}&email=${encodeURIComponent(formData.get("email"))}&contact=${encodeURIComponent(formData.get("phone"))}&GstNumber=${encodeURIComponent(formData.get("gst_number"))}&EntityName=${encodeURIComponent(formData.get("entity_name"))}&Amount=${amount}&Address=${encodeURIComponent(formData.get("address"))}&PanNumber=${encodeURIComponent(formData.get("pan_number"))}&gst=${encodeURIComponent(formData.get("gst"))}`;
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
    const value = event.target.value;
    setPanGST(value);
    setIsPanGSTValid(value === "" || validatePAN(value));
  };

  const handleSlotChange = (event) => {
    const selectedSlotName = event.target.value;
    const workshop = workshops.find(
      (slot) => slot.courseName === selectedSlotName
    );
    setSelectedWorkshop(workshop || null);
  };
//   const byldprint=()=>
// {
//   let element = document.getElementById('ddlslot');
//   element.value = 'Crucial Conversations® For Mastering Dialogue';
// };
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
              <select
                name="slot"
                 required
                onChange={handleSlotChange}
                
                defaultValue=""
              >
                <option value="" disabled>
                  Pick any Slot*
                </option>
                {workshops.map((slot, index) => (
                  <option key={slot.id} value={slot.courseName}>
                    {`${slot.courseName}: ${slot.dateRangeOne}${
                      slot.dateRangeTwo
                        ? ` - ${slot.dateRangeTwo}`
                        : ""
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
              <div id="gst_fields_one" className="col-lg-6 col-md-12 col-sm-12 mb-12">
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
                <span style={{ display: "block", color: isLoading ? "green" : "red" }}>
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

