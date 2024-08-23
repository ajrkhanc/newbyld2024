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
                <title>Monica Sharma | Team | BYLD Group</title>
                <meta name="description" content="Monica Sharma is an accomplished professional with a remarkable tenure of over 3 decades in Banking, Training, and Consulting. She has been working with esteemed organizations, witnessing the evolution of industries first-hand, and actively participating in their growth." />
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
                                    <img src="/assets/img/team/monica.jpg" alt="images" />
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="con-info">
                                    <h2 class="title mbb-5">Monica Sharma</h2>
                                    <span class="designation-info mbb-5">Principal Advisor - Banking, Retail, Hospitality, Media and Travel</span>
                                    <div class="short-desc text-justify mbb-10">
                                        Monica Sharma has over 30 years of experience in Banking and Training, Organizational Behaviour and Soft Skills Facilitation, Content Creation, Sales and Relationship Management, Acquisition, Training and Deployment of Workforce, and strategizing for achieving business goals.
                                    </div>

                                    <div className="sec-title3 text-left rs-estimate">
                                        <h4 className="countertoph2 text-left">Awards and Accolades:</h4>
                                        <ul className='estimate-info mtt-5'>
                                            <li>Awarded with shares under the HSBC Holdings Group Share Option Plan in HSBC</li>
                                            <li>Awarded shares in Employee Stock Option Scheme in HDFC Bank</li>
                                            <li>Awarded shares in Employee Stock Option Plans in NIFBIT</li>
                                            <li>Presented with “The Award of Excellence” for demonstrating excellence in work and walking that extra mile in NIIT</li>
                                        </ul>
                                    </div>

                                    <div className="sec-title3 mbb-35 text-left rs-estimate">
                                        <h4 className="countertoph2 text-left">Education:</h4>
                                        <ul className='estimate-info mtt-5'>
                                            <li>Commerce Representative – Department of Commerce, Gargi College, University of Delhi</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-7 pr-55 md-pr-15">
                            <div class="project-con">
                                <h4 className="countertoph2 text-left">Biography</h4>
                                <p class="mbb-10 text-justify">
                                Monica Sharma is an accomplished professional with a remarkable tenure of over 3 decades in Banking, Training, and Consulting. She has been working with esteemed organizations, witnessing the evolution of industries first-hand, and actively participating in their growth.
                                </p>
                                <p class="mbb-10 text-justify">
                                She brings a wealth of knowledge and expertise, demonstrating exceptional leadership skills and a keen ability to develop and implement effective strategies for achieving business goals. She has a deep understanding of the financial industry and extensive training experience.
                                </p>
                                <p className='mbb-10 text-justify'>
                                As a thought leader, she often shares her insights and expertise. She is the author of a published article in The Economic Times. She also owns her certification in Finacle from Infosys. Her ability to communicate complex ideas clearly and concisely is one of the reasons why she is highly regarded.
                                </p>
                                <p className='mbb-10 text-justify'>
                                Her commitment to excellence is incomparable. She has a proven track record of success in driving business growth, improving operational efficiency, and leading high-performing teams. Her ability to inspire and motivate others is unparalleled, and she has a reputation for building strong and collaborative relationships with clients and colleagues.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-5 md-mt-55">
                            <div className="sec-title3 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Core Skills:</h4>
                                <ul className='estimate-info mtt-5'>
                                    <li>Emotional Intelligence</li>
                                    <li>Self-Optimization</li>
                                    <li>Consultative Selling</li>
                                    <li> Team Building</li>
                                    <li>Integrity</li>
                                    <li>Relationship building and management</li>
                                    <li>Motivation</li>
                                    <li>Lateral Thinking</li>                                    
                                </ul>
                            </div>

                            <div className="sec-title3 mbb-35 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Work Role:</h4>
                                <ul className='estimate-info mtt-5'>
                                <li>Principal Advisor - Banking, Retail, Hospitality, Media and Travel, BYLD Group from 24th April 2023</li>
                                <li>TimesPro - DGM</li>
                                <li>Indiacan - Lead delivery and content head</li>
                                <li>IFBI - Training Specialist</li>
                                <li>Kotak Mahindra Bank Ltd - Group Internal Audit Department</li>
                              
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