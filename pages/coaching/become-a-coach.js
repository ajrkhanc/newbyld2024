import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

import CountUp from 'react-countup';
import React from 'react';




export async function getServerSideProps() {
    const res = await fetch('https://byldgroup.com/assets/countryPhoneCodes.json')
    const country = await res.json()
    return {
        props: {
            country
        },
    }
}

export default function Home({ country }) {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalOpen2, setModalOpen2] = React.useState(false);

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/124/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/coaching/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.cocode.value + '-' + event.target.phone.value +
            "&organization=" + event.target.organization.value +
            "&designation=" + event.target.designation.value)

    }


    const submit = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonformc").value = "Submitting...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/125/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/coaching/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.cocode.value + '-' + event.target.phone.value +
            "&organization=" + event.target.organization.value +
            "&designation=" + event.target.designation.value +
            "&slot=" + event.target.slot.value +
            "&howdidyouknowaboutus=" + event.target.howdidyouknowaboutus.value +
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

    }


    const downloadpdf = async event => {
        event.preventDefault()
        document.getElementById("hellocc").value = "Downloading...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/124/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/assets/pdf/coaching-brochure.pdf"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.cocode.value + '-' + event.target.phone.value +
            "&organization=" + event.target.organization.value +
            "&designation=" + event.target.designation.value)

    }




    return (
        <>


            <Head>
                <title>Become a Coach | ICF Certification | BYLD Group</title>
                <meta name="description" content="BYLD Coaching is the prominent ICF Coach Certification provider with 300+ coaches in India and abroad as per the globally recognized ICF Credentialing process and guidelines." />
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9D9QEXG1BB"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-9D9QEXG1BB');
          `,
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(30000).fadeIn();
               $('.close').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
               $('.x').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
             });
          `,
                    }}
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.__lo_site_id = 328784;

                        (function() {
                        var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
                        wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
                        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
                         })();
          `,
                    }}
                />
                <link rel="stylesheet" type="text/css" href="/assets/css/cohomemodule.css" />
            </Head>


            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} backdrop="static" keyboard={false} className='ccmdc'>
                <button
                    aria-label="Close"
                    className="close popcl"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>

                    <form id="contactForm" className='clientcornner ptt-5 pbb-0' onSubmit={submit}>
                        <div className="row mmcform">
                            <div className="col-sm-6 mb-12">
                                <input type="text" className='borrr' name="name" placeholder="Name*" required />
                            </div>
                            <div className="col-sm-6 mb-12 eqlcwi">

                                <select className='borrr wi10' name='cocode'>
                                    {
                                        country.slice().map((countrys) => {
                                            return (
                                                <option value={countrys.code}>{countrys.iso}-{countrys.code}</option>
                                            )

                                        })


                                    }
                                </select>

                                <input type="text" className='borrr wi90' name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                            </div>
                            <div className="col-sm-12 mb-12">
                                <input type="email" className='borrr' name="email" placeholder="Professional/Personal Email Address*" required />
                            </div>


                            <div className="col-sm-12 mb-12">
                                <input type="text" className='borrr' name="organization" placeholder="Organization*" required />
                            </div>
                            <div className="col-sm-12 mb-12">
                                <input type="text" className='borrr' name="designation" placeholder="Designation*" required />
                            </div>

                            <div className="col-sm-12 mb-12">
                                <select className='borrr' name='slot' required>
                                    <option value=''>Pick up any Slot*</option>                                    
                                    <option value='ICF Certification batch 1st June 2024 '>ICF Certification batch 1st June 2024 </option>
                                  
                                </select>
                            </div>

                            <div className="col-sm-12 mb-12">
                                <select className='borrr' name='howdidyouknowaboutus' required>
                                    <option value=''>How did you know about us*</option>
                                    <option value='Email'>Email</option>
                                    <option value='Social Media'>Social Media</option>
                                    <option value='Google Ads'>Google Ads</option>
                                </select>
                            </div>


                            <div className="col-sm-12 d-none">
                                <input type="text" name="Business_Entity" value="ICF" required />
                            </div>
                            <div className="col-lg-12 mb-12 text-center">
                                <input id='submitbuttonformc' className="clientcornnerbtn" type="submit" value="Register" />
                            </div>
                            <p id="showlabel" style={{ display: "none" }}></p>
                        </div>
                    </form>
                </ModalBody>

            </Modal>

            <Modal toggle={() => setModalOpen2(!modalOpen2)} isOpen={modalOpen2} backdrop="static" keyboard={false} className='ccmdc'>
                <button
                    aria-label="Close"
                    className="close popcl"
                    type="button"
                    onClick={() => setModalOpen2(!modalOpen2)}
                >
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>

                    <form id="contactForm" className='clientcornner ptt-5 pbb-0' onSubmit={downloadpdf}>
                        <div className="row mmcform">
                            <div className="col-sm-6 mb-12">
                                <input type="text" className='borrr' name="name" placeholder="Name*" required />
                            </div>
                            <div className="col-sm-6 mb-12 eqlcwi">
                                <select className='borrr wi10' name='cocode'>
                                    {
                                        country.slice().map((countrys) => {
                                            return (
                                                <option value={countrys.code}>{countrys.iso}-{countrys.code}</option>
                                            )

                                        })


                                    }
                                </select>
                                <input type="text" className='borrr wi90' name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                            </div>
                            <div className="col-sm-12 mb-12">
                                <input type="email" className='borrr' name="email" placeholder="Professional/Personal Email Address*" required />
                            </div>


                            <div className="col-sm-12 mb-12">
                                <input type="text" className='borrr' name="organization" placeholder="Organization*" required />
                            </div>
                            <div className="col-sm-12 mb-12">
                                <input type="text" className='borrr' name="designation" placeholder="Designation*" required />
                            </div>

                            <div className="col-lg-12 mb-12 text-center">
                                <input id='hellocc' className="clientcornnerbtn" type="submit" value="Download" />
                            </div>
                            <p id="showlabel" style={{ display: "none" }}></p>
                        </div>
                    </form>
                </ModalBody>

            </Modal>

            <div class="rs-breadcrumbs lawfirms">
                <div class="container">
                    <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">

                    </div>

                    <div className='row'>
                        <div className='col-sm-8'>
                            <div class="breadcrumbs-inner">
                                <span class="watermark ">BYLD</span>
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    Get Your ICF Coach Certification Today
                                </h1>
                                <span class="sub-text wow fadeInUp delay-0-2s animated animateUP prr-20">
                                    BYLD Coaching is the prominent ICF Coach Certification provider with 300+ coaches in India and abroad as per the globally recognized ICF Credentialing process and guidelines
                                </span>
                                <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
                                    <a className="readon2" href="#" onClick={() => setModalOpen2(!modalOpen2)}>Download Brochure <div className="btn-arrow ddc"></div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* <section className='solutionrow ptt-60 pbb-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Model</h2>
                        </div>
                    </div>
                    <div className='row zindx'>

                        <div className='col-sm-12 zindx'>
                            <div className='row align-items-center'>
                                <div className='col-sm-6'>
                                    <div className='wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/model1.png" alt="images" />
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                                        This coaching model is designed to help clients develop a clear understanding of their situation, set specific goals, measure progress, and take action towards success. This model is supported by Problem solving tools at various steps.
                                    </p>
                                    <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
                                        <Link href="#know-more"><a className="readon2">Know More <div className="btn-arrow"></div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>

                </div>
            </section> */}

            <div className="rs-about oveflohh style2 logosl ptt-50 pbb-50">
                <div className="container">
                    <div className="row zindx">
                        <div className="col-sm-12">
                            <div className="pb-50  text-center">
                                <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Modules</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row mmssb zindx new-line'>
                        <div className='col-sm-12'>
                            <div className='text-center'>
                                <div className='minnerb wow fadeInUp delay-0-2s animated animateUP new-box'>
                                <div className='d-flex justify-content-between align-items-center'>
                                <div className='text-left'>
                                <p className='mb-0'>Total Time -170Hours</p>
                                <p className='mb-0'>Module 1 -30 Hours Credit</p>
                                <p className='mb-0'>Module 2 -30 Hours Credit</p>
                                <p className='mb-0'>Mentor Coaching - 10 Hours</p>
                                <p className='mb-0'>Coaching - 100 Hours</p>
                                <p className='mb-0'>Max Students - 20</p>
                                </div>
                                <div>
                                <img src="/assets/img/icf-logo.png" className='icf-width' alt="images" />

                                </div>
                                </div>
                                
                             {/*<h3>Time - 130 hrs</h3>
                                    <h4> Max students - 20 </h4>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mmssb2 zindx new-line1'>
                        <div className='col-sm-6 zindexx'>
                            <div className='moduleinner'>
                                <h3 className='wow fadeInUp delay-0-2s animated animateUP'>Coaching Foundation Module 1</h3>
                                <img className='wow fadeInUp delay-0-2s animated animateUP' src="/assets/img/new/frame.jpg" alt="images" />
                                {/* <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
                                    <Link href="/module/module-1"><a className="readon2">Know More <div className="btn-arrow"></div></a></Link>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-sm-6 zindexx'>
                            <div className='moduleinner'>
                                <h3 className='wow fadeInUp delay-0-2s animated animateUP'>Coaching for Performance Module II</h3>
                                <img className='wow fadeInUp delay-0-2s animated animateUP' src="/assets/img/new/model2.png" alt="images" />

                            </div>
                        </div>

                        <div className='col-sm-12 text-center'>
                            <div className="btn-part ptt-10 pbb-30 mtt-30 wow fadeInUp delay-0-2s animated animateUP">
                                <Link href="/module/module-1"><a className="readon2">Know More <div className="btn-arrow"></div></a></Link>
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>
                </div>
            </div>


            <section className='aboutmap ptt-50 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center pbb-30'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP"><h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Emotional Intelligence Based Coaching</h2></h2>
                        </div>
                        <div className='clearfix'></div>

                        <div className='col-sm-8'>
                            <div>
                                <table className='mtblc wow fadeInUp delay-0-2s animated animateUP'>
                                    <tr>
                                        <th className='texttrasc' width='10px'></th>
                                        <th>Recognition</th>
                                        <th>Regulation</th>
                                    </tr>
                                    <tr>
                                        <td className='texttras'><p>Personal Competence</p></td>
                                        <td>
                                            <h3>Self-Awareness</h3>
                                            <ul>
                                                <li>Self-confidence</li>
                                                <li>Awareness of your emotional  state</li>
                                                <li>Recognizing how your behavior impacts others</li>
                                                <li>Paying attention to how others influence your emotional state</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <h3>Self-Management</h3>
                                            <ul>
                                                <li>Keeping disruptive emotions and impulses in check</li>
                                                <li>Acting in congruence with your values</li>
                                                <li>Handling change flexibly</li>
                                                <li>Pursuing goals and opportunities despite obstacles and setbacks</li>
                                            </ul>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'><p>Social Competence</p></td>
                                        <td>
                                            <h3>Social Awareness</h3>
                                            <ul>
                                                <li>Picking up on the mood in the room</li>
                                                <li>Caring what others are going through</li>
                                                <li>Hearing what the other person is "really" saying</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <h3>Relationship Management</h3>
                                            <ul>
                                                <li>Getting along well with others</li>
                                                <li>Handling conflict effectively</li>
                                                <li>Clearly expressing ideas/information</li>
                                                <li>Using sensitivity to another persons feeling (empathy) to manage interactions successfully</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='helpm'>
                                <h3>Helps in :</h3>
                            </div>
                            <div className='helpsb mbb-30 wow fadeInUp delay-0-2s animated animateUP'>
                                <img src="/assets/img/new/lifec.png" alt="images" />
                                <h4>Life Coaching</h4>
                            </div>

                            <div className='helpsb wow fadeInUp delay-0-2s animated animateUP'>
                                <img src="/assets/img/new/relationshipc.png" alt="images" />
                                <h4>Relationship Coaching</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="rs-team" className='style2 solutionrow ptt-60 pbb-60 rsteam'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-8 text-center'>
                            <h2 class="title pbb-100 mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP pbb-30">Program Directors</h2>
                        </div>
                    </div>
                    <div className='row zindx'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 zindexxc'>
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <div className='innerteamc  mtt-30'>
                                        <div className='teamimgc1'>
                                            <a target="_blank" href="/yogesh-sood"><img src="/assets/img/team/yogesh-sood.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a target="_blank" href="/yogesh-sood">Yogesh Sood</a>
                                            </div>
                                            <span className="post">ACTP, MCC (ICF)</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/yogesh-sood/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className='teampera'>
                                            <p>CMD, BYLD Group, Blanchard International India, and founder of first SEA chapter of ICF in 2004</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-8'>
                                    <div className='innerteamc mtt-30'>
                                        <div className='teamimgc1'>
                                            <a href="#"><img src="/assets/img/team/sandeep.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a href="#">Sandeep Budhiraja</a>
                                            </div>
                                            <span className="post">Certified Master Trainer – ICF Coaching Curriculum, PMC Global™<br></br> Master Facilitator DTCI ViLT | Certified ICF ACC Coach</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/sanbuds/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className='teampera'>
                                            <p>Certified trainer for Self Track and Other's Track from Partners in Leadership.<br></br>Global leader in Accountability Training.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>

                </div>
            </section>


            <section className='solutionrow ptt-60 pbb-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>

                        </div>
                    </div>
                    <div className='row zindx'>

                        <div className='col-sm-12 zindx'>
                            <div className='row align-items-center'>
                                <div className='col-sm-6'>
                                    <div className='wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/cc1.png" alt="images" />
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='pll-20'>
                                        <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Program Details</h2>
                                        <ul className='programul ptt-20'>
                                            <li>Program Starts : (October onwards)</li>
                                            <li>Language : English</li>
                                            <li>Delivery Method: Combination (face-to-face, webinar, telephonic, combination)</li>
                                            <li>Program is for : HR, Learning Professionals, Freelancers,Managers</li>
                                            <li>Prerequisite : Graduation</li>
                                        </ul>

                                        <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
                                            <Link href="#know-more"><a className="readon2">Know More <div className="btn-arrow"></div></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>

                </div>
            </section>




            <section className='aboutmap ptt-50 pbb-40 zinc'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 text-center pbb-30'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Our Upcoming Training schedule</h2>
                        </div>
                        <div className='clearfix'></div>

                        {/* <div className='col-sm-6'>
                            <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
                                <div className='dateside'>
                                    <div className='datefont'>
                                        10<br></br> June
                                    </div>
                                </div>
                                <div className='textsidec'>
                                    <div className='eventi'>
                                        ICF Accredited Coach Certification
                                    </div>
                                    <div className='timed'>
                                        <ul>
                                            <li><i className='fa fa-th-large'>DCA Batch 47</i></li>
                                            <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='booknowside'>
                                    <a>Book Now</a>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className='col-sm-6'>
                            <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
                                <div className='dateside'>
                                    <div className='datefont'>
                                        16<br></br> Sep
                                    </div>
                                </div>
                                <div className='textsidec'>
                                    <div className='eventi'>
                                        ICF Accredited Coach Certification
                                    </div>
                                    <div className='timed'>
                                        <ul>
                                            <li><i className='fa fa-th-large'>DCA Batch 42</i></li>
                                            <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='booknowside'>
                                    <a>Book Now</a>
                                </div>
                            </div>
                        </div> */}

                       {/* <div className='col-sm-6'>
                            <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
                                <div className='dateside'>
                                    <div className='datefont'>
                                    28<br></br> Oct
                                    </div>
                                </div>
                                <div className='textsidec'>
                                    <div className='eventi'>
                                        ICF Accredited Coach Certification
                                    </div>
                                    <div className='timed'>
                                        <ul>
                                            <li><i className='fa fa-th-large'>DCA Batch 43</i></li>
                                            <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='booknowside'>
                                    <a>Book Now</a>
                                </div>
                            </div>
                        </div>*/}
                        {/* <div className='col-sm-6'>
                            <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
                                <div className='dateside'>
                                    <div className='datefont'>
                                    06<br></br> Jan
                                    </div>
                                </div>
                                <div className='textsidec'>
                                    <div className='eventi'>
                                        ICF Accredited Coach Certification
                                    </div>
                                    <div className='timed'>
                                        <ul>
                                            <li><i className='fa fa-th-large'>DCA Batch 44</i></li>
                                            <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='booknowside'>
                                    <a>Book Now</a>
                                </div>
                            </div>
                        </div> */}

                        <div className='col-sm-6'>
                            <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
                                <div className='dateside'>
                                    <div className='datefont'>
                                    13th<br></br> July 2024 
                                    </div>
                                </div>
                                <div className='textsidec'>
                                    <div className='eventi'>
                                        ICF Accredited Coach Certification
                                    </div>
                                    <div className='timed'>
                                        <ul>
                                            <li><i className='fa fa-th-large'>DCA Batch 47</i></li>
                                            <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='booknowside'>
                                    <a>Book Now</a>
                                </div>
                            </div>
                        </div>


                        {/* <div className='col-sm-12'>
                            <div>
                                <table className='mtblc wow fadeInUp delay-0-2s animated animateUP width100p'>
                                    <tr>
                                        <th>Dates</th>
                                        <th>Time</th>
                                        <th>Events Name</th>
                                        <th>Book Know</th>
                                    </tr>
                                    <tr>
                                        <td className='texttras'>16 April 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>Virtual Training Apollo3</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'>17 June 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>Harnessing Creative Intelligence</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'>30 May 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>Five Behaviour - Course Preview</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'>20 June 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>DISC Train-the-Trainer (TTT)</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'>12 May 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>The SLII Experience™ - Face to Face</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'>29 April 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>Everything DISC - Virtual Course Preview</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>
                                </table>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>



            <div id='know-more' class="homecon ptt-60 zinc">
                <div class="container">
                    <div class="row">
                        <div className='col-sm-8'>
                            <div className='row'>
                                <div className='col-sm-12 text-center'>
                                    <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Get in touch</h2>
                                </div>
                                <div class="col-md-6 md-mb-50">
                                    <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
                                        <img src="/assets/img/homeb/contactl.png" alt="Contact" />
                                    </div>


                                </div>
                                <div class="col-md-6">
                                    <div class="contact-wrap">
                                        <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                                            <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                                                <div className="row">
                                                    <div className="col-sm-12 mb-12">
                                                        <input className='borrr' type="text" name="name" placeholder="Enter Name*" required />
                                                    </div>

                                                    <div className="col-sm-12 mb-12 eqlcwi">
                                                        <select className='borrr wi10' name='cocode'>
                                                            {
                                                                country.slice().map((countrys) => {
                                                                    return (
                                                                        <option value={countrys.code}>{countrys.iso}-{countrys.code}</option>
                                                                    )

                                                                })


                                                            }
                                                        </select>
                                                        <input className='borrr wi90' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                                    </div>
                                                    <div className="col-sm-12 mb-12">
                                                        <input className='borrr' type="email" name="email" placeholder="Professional/Personal Email Address*" required />
                                                    </div>
                                                    <div className="col-sm-6 mb-12">
                                                        <input className='borrr' type="text" name="organization" placeholder="Organization" />
                                                    </div>
                                                    <div className="col-sm-6 mb-12">
                                                        <input className='borrr' type="text" name="designation" placeholder="Designation*" required />
                                                    </div>
                                                    <div className="col-sm-12 mb-12">
                                                        <input className='borrr' type="text" name="coupon" placeholder="Coupon (LD10)" disabled  />
                                                    </div>

                                                    <div className="col-lg-12 mb-12">
                                                        <input id="submitbuttonform" className="clientcornnerbtn bord0" type="submit" value="Submit" />
                                                    </div>
                                                    <p id="showlabel" style={{ display: "none" }}></p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-4'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Policies</h2>
                            <div>
                                {/* <h4 className='policyh4'></h4> */}
                                <ul className='mpolicyes dcd'>
                                    <li>
                                        <a href='/policies/byld-group-and-coach-candidate-partial-completion-policy'>Partial Completion Policy</a>
                                    </li>
                                    <li>
                                        <a href='/policies/byld-group-complaint-and-grievance-policy'>Grievance Policy</a>
                                    </li>
                                    <li>
                                        <a href='/policies/disability-and-discrimination-statement'>Disability & Discrimination Statement</a>
                                    </li>
                                    <li>
                                        <a href='/policies/enrollment-agreement-for-actp-program-offered'>Enrollment Agreement Policy</a>
                                    </li>
                                    <li>
                                        <a href='/policies/ethical-marketing-policy'>Ethical Marketing Practice</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
