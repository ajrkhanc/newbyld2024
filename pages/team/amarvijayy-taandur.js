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
                <title>Amarvijayy Taandur | Team | BYLD Group</title>
                <meta name="description" content="DTCI offers leadership and management courses to facilitate change management, coaching culture, and effective organizational change and development. To know more, check out the page." />
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
                                    <img src="/assets/img/team/amar1.jpg" alt="images" />
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="con-info">
                                    <h2 class="title mbb-0">Amarvijayy Taandur</h2>
                                    <span class="designation-info">Principal Advisor - Civil, Infra, Heavy Engineering, Power and Automotive</span>
                                    <p class="mbb-0 text-justify mtt-10">
                                        Amarvijayy Taandur is a seasoned professional with over 26 years of practise in handling assorted brands in various domains such as Direct Sales, B2B/C sales, Retail Sales & Marketing and L&D, to name a few.
                                    </p>

                                    <div className="sec-title3 mbb-0 text-left rs-estimate">
                                        <h4 className="countertoph2 text-left ptt-5">Certifications:</h4>
                                        <ul className='estimate-info mtt-5'>
                                            <li>ACSTH Certified Coach (ICF – International Coaching Federation)</li>
                                            <li>Accountability for Higher Performance</li>
                                            <li>Certified Senior Facilitator – Inside Out Coaching</li>
                                            <li>Certified Senior Facilitator – 5 Behaviors</li>
                                            <li>Crucial Learning Certified Facilitator – Crucial Conversations for Mastering Dialogue</li>
                                            <li>Certified Facilitator – Everything DiSC Wiley Everything DiSC (Program Agile EQ, Productive Conflict and other programs)</li>
                                            <li>Persona Global Facilitator for Persuasive Communication and other programs</li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 pr-55 md-pr-15">
                            <div class="project-con">
                                <h4 className="countertoph2 text-left">Biography</h4>

                                <p className='text-justify mbb-10'>
                                    In his current role as the Principal Advisor at BYLD Group, his focus is on Power, Automobiles, Civil and Infrastructure sectors. With several certifications to his credit, he is a certified Facilitator in SLII in a Swiss Multinational Corporation and has a very vast experience in training like Organizational Behaviour, Management Development Program and Organizational Development Program.
                                </p>

                                <p className='text-justify mbb-10'>
                                    Amar is an ACSTH (ICF) Certified Coach and is into Executive Coaching. To his credit, he is also a Certified Facilitator in Wiley Everything DiSC and Crucial Learning’s Crucial Conversation for Mastering Dialogue, Certified Senior Facilitator in Inside Out Coaching and Wiley 5 Behaviors.
                                </p>
                                <p className='text-justify mbb-10'>
                                    He has established and spearheaded the Leadership Development Academy in South East Asia, and has led and conducted several leadership and management programs in Europ and South East Asia. With expertise in Strategic Thinking, Amar has been a facilitator for change and learning, and has successfully navigated his trainees towards desired outcomes. Training encompasses coaching, critiquing, mentoring and teaching, and Amar has achieved applaudable results in inheriting and abiding to these virtues encouraging each trainee as a partner along the way. His enthusiasm for learning and imparting knowledge, being absorbent of changes, has always helped simplify the content into teachable and relatable chunks of information.
                                </p>
                            </div>

                            <div className="sec-title3 mbb-0 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Core Skill Tags:</h4>
                                <ul className='estimate-info mtt-5'>
                                    <li>B2B, Direct & Institutional Sales</li>
                                    <li>Contract Negotiations</li>
                                    <li>Strategic Business Planning </li>
                                    <li>Cross-Cultural Team Leadership</li>
                                    <li>New Business & Market Development</li>
                                    <li>General & Operations Management</li>
                                    <li>P & L Responsibility</li>
                                    <li>Sales Training & Team Leadership</li>
                                </ul>
                            </div>

                        </div>
                        <div class="col-lg-6 md-mt-55">
                            <div className="sec-title3 mbb-0 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Major Projects & Role Handled:</h4>
                                <ul className='estimate-info mtt-5'>
                                    <li>Regional office set up for Hilti India in Bangalore</li>
                                    <li>Set up for Training Centre for Hilti India in New Delhi</li>
                                    <li>Training Centre Set up for Hilti South East Asia Region in KL, Malaysia </li>
                                    <li>Designed and developed Talent advancement program for Hilti India</li>
                                    <li>Kick started Sales and Marketing operations for Hilti Vietnam</li>
                                    <li>Principal Advisor for Power, Automobile, Civil and Infrastructure</li>
                                </ul>
                            </div>

                            <div className="sec-title3 mbb-0 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Notable Clients:</h4>
                                <ul className='estimate-info mtt-5'>
                                    <li>DE Shaw </li>
                                    <li>SRF</li>
                                    <li>Flipkart</li>
                                    <li>Capgemini</li>
                                    <li>L & T LDA</li>
                                    <li>Ford Tech</li>
                                    <li>Mylan Lab</li>
                                    <li>Applied Material</li>
                                    <li>Bill & Melinda Gates Foundation</li>
                                    <li>JK Tyres</li>
                                </ul>
                            </div>

                            <div className="sec-title3 mbb-0 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Education & Certifications:</h4>
                                <ul className='estimate-info mtt-5'>
                                    <li>Masters in Chemical Technology</li>
                                </ul>
                            </div>

                            <div className="sec-title3 mbb-0 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Top Skills:</h4>
                                <ul className='estimate-info mtt-5'>
                                    <li>P & L Responsibility</li>
                                    <li>Sales Management</li>
                                    <li>Key Account Development</li>
                                    <li>Strategic Planning</li>
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