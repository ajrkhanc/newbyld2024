import Head from 'next/head'
import Link from 'next/link'

import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";

export default function Dtci() {

    const [modalOpen1, setModalOpen1] = React.useState(false);

    const whitp1 = async event => {
        event.preventDefault()
        document.getElementById("submitb").value = "Submitting...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/139/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thank-you"
                    });

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&tel=" + event.target.phone.value +            
            "&Company=" + event.target.organization.value +
            "&Designation=" + event.target.designation.value)
    }

    return (
        <>
            <Head>
                <title>Ronald Soans | Team | BYLD Group</title>
                <meta name="description" content="Ronald Soans" />
            </Head>

            <Modal className='toppc mwc500' toggle={() => setModalOpen1(!modalOpen1)} isOpen={modalOpen1} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen1(!modalOpen1)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc" onSubmit={whitp1}>
                        <div className="col-sm-12 mb-12">
                            <input class="form-control" type="text" name="name" placeholder="Enter Name*" required />
                        </div>
                        <div className="col-sm-12 mb-12">
                            <input class="form-control" type="email" name="email" placeholder="Work Email/Email*" required />
                        </div>
                        <div className="col-sm-12 mb-12">
                            <input class="form-control" type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                        </div>

                        <div className="col-sm-12 mb-12">
                            <input class="form-control" type="text" name="organization" placeholder="Organization*" required />
                        </div>
                        <div className="col-sm-12 mb-12">
                            <input class="form-control" type="text" name="designation" placeholder="Designation*" required />
                        </div>

                        <div class="col-md-12 text-center">
                            <input id='submitb' class="formbtn" type="submit" value="Submit" />
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal>

            <div class="rs-team-Single ptt-50 pbb-40 md-pt-80 md-pb-60">
                <div class="container custom">
                    <div class="btm-info-team mbb-30">
                        <div class="row align-items-center">
                            <div class="col-lg-5 md-mb-50">
                                <div class="images-part">
                                    <img src="/assets/img/team/ronald1.jpg" alt="images" />
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="con-info">
                                    <h2 class="title mbb-0">Ronald Soans</h2>
                                    <span class="designation-info mbb-0">Principal Advisor - Pharma, FMCG, E-commerce</span>
                                    <p className='mbb-0 text-justify'>
                                    Over 3 decades of experience in Leadership Consulting, Coaching , Soft Skills Facilitation, Sales Development, Hiring, Sales, Channel Management & assessment solutions
                                    </p>
                                    <div className="sec-title3 mbb-0 text-left rs-estimate">
                                        <h4 className="countertoph2 text-left">Certifications:</h4>
                                        <ul className='estimate-info mtt-5'>
                                            <li>ICF Accredited Coach (ACSTH)</li>
                                            <li>ACDP Certified Coach</li>
                                            <li>Inside Out Coaching certified Senior Trainer</li>
                                            <li>Certified Master Trainer for Everything DiSC- Psychometric assessment</li>
                                            <li>Certified Facilitator on Lumina Assessments</li>
                                            <li>Facilitator for Leadership Solutions from Ken Blanchard Companies such as Situational Leadership II, Legendary Service, Whale done, Core Leadership Skills.</li>
                                            <li>Game based Learning of Eagles Flight ( Rattle Snake Canyon) & Gaminar</li>
                                            <li>DTCI Certified –Dialogue Works, Performance Management, Coaching With Passion, CSP</li>
                                            <li>Master trainer in outbound solutions</li>
                                        </ul>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-7 pr-55 md-pr-15">
                            {/* <div class="project-con">
                                <h4 className="countertoph2 text-left">Biography</h4>
                                <p class="mbb-0 text-justify">
                                    Over 3 decades of experience in Leadership Consulting, Coaching , Soft Skills Facilitation, Sales Development, Hiring, Sales, Channel Management & assessment solutions
                                </p>
                            </div> */}

                            <div class="project-con">
                                <h4 className="countertoph2 text-left">Major Projects</h4>
                                <p class="mbb-0 text-justify">
                                    Setting up operations of new divisions as a project and handing over the management teams to take it to new heights, Tata Liebert – Distribution Channel for West India, Hita Technologies – Entire operation for West India, BPE India – Entire operation for West India, TRP Consultants Pvt. Ltd – Complete operations in Mumbai and now with DOOR since the last 20plus years . Currently Heading business operations of inside sales and Business partners at a National level.
                                </p>
                                <h4 className="countertoph2 text-left">Interests</h4>
                                <p class="mbb-0 text-justify">
                                    Compering, Event management, people motivation & problem solving, Fishing, Rowing & Cricket
                                </p>

                                <h4 className="countertoph2 text-left">SKILLS;</h4>
                                <p class="mbb-0 text-justify">
                                    Motivation, Empathy, Trustability, Communicator, Linguist
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-5 md-mt-55">

                            <div className="sec-title3 mbb-0 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Area of Expertise:</h4>
                                <ul className='estimate-info mtt-5'>
                                    <li>Leadership Development </li>
                                    <li>Relationship Coaching</li>
                                    <li>Performance Coaching</li>
                                    <li>Interpersonal Skills</li>
                                    <li>Talent Development</li>
                                    <li>Business Development</li>
                                </ul>
                            </div>

                            <div className="sec-title3 mbb-0 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Work Role:</h4>
                                <ul className='estimate-info mtt-5'>
                                    <li>Senior Vice President – BYLD Group from 5th April 2019</li>
                                    <li>National Business Head – Door Training & Consulting India Pvt Ltd. Since August 1997</li>
                                    <li>Previous work involved experience in manufacturing, sales & service besides talent acquisition (Murugappa Group, Tata Liebert, Godrej & Boyce Company pvt. Ltd) </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
<button className='mcalto' onClick={() => setModalOpen1(!modalOpen1)}>Connect with Us</button>
        </>
    )
}