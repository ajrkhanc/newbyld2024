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
                <title>Meghna Goyal | Team | BYLD Group</title>
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
                                    <img src="/assets/img/team/meghna.jpg" alt="images" />
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="con-info">
                                <h2 class="title mbb-5">Meghna Goyal</h2>
                                    <span class="designation-info mbb-5">Principal Advisor - Pharma, FMCG, E-commerce</span>                                    
                                    <div class="short-desc text-justify mbb-10">
                                        Professional Experience: 21 years of experience in corporate sales in the training and recruitment industry. In her current role as the Principal Advisor at BYLD Group, her focus is on FMCG, Pharma and Ecommerce sectors.
                                    </div>
                                    <div class="short-desc text-justify mbb-10">
                                        Meghna has a keen ability to understand the needs of her clients and map them to the appropriate solutions. This has helped her build a strong relationship as a trusted advisor who can provide effective solutions to complex problems and has a track record of successfully growing key accounts and expanding business in new markets.
                                    </div>
                                    <div class="ps-informations">
                                        <h4 className="countertoph2 text-left">Education:</h4>
                                        <ul class="personal-info">
                                            <li>
                                                <span><i class="fa fa-graduation-cap"></i></span>
                                                <a href="">Post Graduate Diploma in HR from ICFAI, 2008</a>
                                            </li>
                                            <li>
                                                <span><i class="fa fa-graduation-cap"></i></span>
                                                <a href="">MBA in Sales & Marketing from MET Institute of Management in Mumbai, 2001</a>
                                            </li>
                                            <li>
                                                <span><i class="fa fa-graduation-cap"></i></span>
                                                <a href="">BA Economics from Mumbai University, 1999</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sec-title3 mbb-35 text-left rs-estimate">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-7 pr-55 md-pr-15">
                            <div class="project-con">                                
                                <h4 className="countertoph2 text-left">Biography</h4>
                                <p class="mbb-10 text-justify">Her expertise lies in leadership development. She has helped many organizations develop their leaders through customized training programs and coaching sessions.</p>
                                <p class="mbb-10 text-justify">She also has experience in outplacement and career transition, which involves helping employees who are being laid off or transitioning to new roles. She has helped many employees navigate these challenges successfully.</p>
                                <p className='mbb-10 text-justify'>
                                    Meghna is passionate about promoting diversity and inclusion in the workplace. She has championed the brand as a leading D&I service provider with a special focus on gender diversity.
                                </p>
                                <p className='mbb-10 text-justify'>
                                    Overall, Meghna Goyal is a passionate sales professional with a wealth of experience in the training and recruitment industry. She has expertise in leadership development, outplacement, career transition, business development, key account management, and employee engagement. Her attributes include strong planning and execution skills, the ability to handle revenue targets, a passion for diversity and inclusion, expertise in performance improvement, and the ability to coordinate client engagements seamlessly.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-5 md-mt-55">
                            <div className="sec-title3 mbb-35 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Core Skill Tags:</h4>
                                <ul className='estimate-info mtt-5'>
                                    <li>B2B Sales</li>
                                    <li>End-to-end business development</li>
                                    <li>Consultative Sales </li>
                                    <li>Key Account Management</li>
                                    <li>Persuasion & Negotiation</li>
                                </ul>
                            </div>

                            <div className="sec-title3 mbb-35 text-left rs-estimate">
                                <h4 className="countertoph2 text-left">Notable Clients:</h4>
                                <ul className='estimate-info mtt-5'>
                                    <li>Siemens </li>
                                    <li>Alkem Laboratories</li>
                                    <li>Asian Paints </li>
                                    <li>Mercedes</li>
                                    <li>Syngenta</li>
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