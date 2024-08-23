// import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'
// import Slider from "react-slick";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

// import CountUp from 'react-countup';
// import React from 'react';




// export default function Home() {

//     var settings = {
//         dots: false,
//         arrows: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 0,
//         autoplay: false,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             }
//         ]
//     };


//     const registerUser = async event => {
//         event.preventDefault()
//         document.getElementById("submitbuttonform").value = "Submitting form...."
//         const xhttp = new XMLHttpRequest();
//         xhttp.onload = function () {
//             console.log(this.responseText);
//         }
//         xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/11/feedback');
//         xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
//         xhttp.onreadystatechange = function () {
//             if (xhttp.readyState == 4) {
//                 if (xhttp.status == 200) {
//                     document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

//                     document.getElementById("showlabel").style.display = "block";
//                     window.setTimeout(function () {
//                         window.location.href = "/thank-you"
//                     }, 3000);

//                 } else {
//                     alert('There was a problem with the request.');
//                 }
//             }
//         };
//         xhttp.send("name=" + event.target.name.value +
//             "&email=" + event.target.email.value +
//             "&tel=" + event.target.phone.value +
//             "&location=" + event.target.Location.value +
//             "&Company=" + event.target.organization.value +
//             "&Designation=" + event.target.designation.value +
//             "&Product=" + event.target.product.value +
//             "&referredby=" + event.target.referredby.value +
//             "&textarea=" + event.target.leadsquared_Notes.value)

//     }


//     const submit = async event => {
//         event.preventDefault()
//         document.getElementById("submitbuttonform").value = "Submitting form...."
//         const xhttp = new XMLHttpRequest();
//         xhttp.onload = function () {
//             console.log(this.responseText);
//         }
//         xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/79/feedback');
//         xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
//         xhttp.onreadystatechange = function () {
//             if (xhttp.readyState == 4) {
//                 if (xhttp.status == 200) {
//                     document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

//                     document.getElementById("showlabel").style.display = "block";
//                     window.setTimeout(function () {
//                         window.location.href = "/thank-you"
//                     }, 3000);

//                 } else {
//                     alert('There was a problem with the request.');
//                 }
//             }
//         };
//         xhttp.send("fname=" + event.target.fname.value +
//             "&email=" + event.target.email.value +
//             "&phone=" + event.target.phone.value +
//             "&company=" + event.target.company.value +
//             "&designation=" + event.target.designation.value +
//             "&howdidyouknowaboutus=" + event.target.howdidyouknowaboutus.value +
//             "&leadsquared_Notes=" + event.target.leadsquared_Notes.value)

//     }


//     const [modalOpen, setModalOpen] = React.useState(false);

//     return (
//         <>


//             <Head>
//                 <title>Get Your Certification Today | BYLD Group</title>
//                 <meta name="description" content="Get Your Certification Today" />
//                 <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
//                 <script
//                     dangerouslySetInnerHTML={{
//                         __html: `
//               $(function() {
//                var overlay = $('<div id="overlay"></div>');
//                overlay.delay();
//                overlay.appendTo(document.body);
//                $('.popup').delay(30000).fadeIn();
//                $('.close').click(function() {
//                  $('.popup').hide();
//                  overlay.appendTo(document.body).remove();
//                  return false;
//                });
//                $('.x').click(function() {
//                  $('.popup').hide();
//                  overlay.appendTo(document.body).remove();
//                  return false;
//                });
//              });
//           `,
//                     }}
//                 />
//                 <link rel="stylesheet" type="text/css" href="/assets/css/cohomemodule.css" />
//             </Head>


//             <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} backdrop="static" keyboard={false} className='ccmdc'>
//                 <button
//                     aria-label="Close"
//                     className="close popcl"
//                     type="button"
//                     onClick={() => setModalOpen(!modalOpen)}
//                 >
//                     <span aria-hidden={true}>×</span>
//                 </button>

//                 <ModalBody>

//                     <form id="contactForm" className='clientcornner ptt-5 pbb-0' onSubmit={submit}>
//                         <div className="row">
//                             <div className="col-sm-12 mb-12">
//                                 <input type="text" name="name" placeholder="Name*" required />
//                             </div>
//                             <div className="col-sm-12 mb-12">
//                                 <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
//                             </div>
//                             <div className="col-sm-12 mb-12">
//                                 <input type="email" name="email" placeholder="Professional/Personal Email Address*" required />
//                             </div>


//                             <div className="col-sm-12 mb-12">
//                                 <input type="text" name="organization" placeholder="Organization*" required />
//                             </div>
//                             <div className="col-sm-12 mb-12">
//                                 <input type="text" name="designation" placeholder="Designation*" required />
//                             </div>

//                             <div className="col-sm-12 mb-12">
//                                 <select>
//                                     <option value=''>Pick up any Slot*</option>
//                                     <option value='22 April 2023'>22 April 2023</option>
//                                     <option value='10 June 2023'>10 June 2023</option>
//                                     <option value='29 July 2023'>29 July 2023</option>
//                                     <option value='16 September 2023'>16 September 2023</option>
//                                     <option value='25 November 2023'>25 November 2023</option>
//                                     <option value='27 January 2024'>27 January 2024</option>
//                                     <option value='09 March 2024'>09 March 2024</option>
//                                 </select>
//                             </div>


//                             <div className="col-sm-12 d-none">
//                                 <input type="text" name="Business_Entity" value="ICF" required />
//                             </div>
//                             <div className="col-lg-12 mb-12 text-center">
//                                 <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Register" />
//                             </div>
//                             <p id="showlabel" style={{ display: "none" }}></p>
//                         </div>
//                     </form>
//                 </ModalBody>

//             </Modal>

//             <div class="rs-breadcrumbs lawfirms">
//                 <div class="container">
//                     <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">

//                     </div>

//                     <div className='row'>
//                         <div className='col-sm-7'>
//                             <div class="breadcrumbs-inner">
//                                 <span class="watermark ">BYLD</span>
//                                 <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
//                                     Get Your Certification Today
//                                 </h1>
//                                 <span class="sub-text wow fadeInUp delay-0-2s animated animateUP">
//                                     People are the best source of solutions to their own problems and aspirations. Coach is there to help and accelerate the journey to destination or solution.
//                                 </span>
//                                 <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
//                                     <a className="readon2" href="/assets/pdf/BYLD-ACTP-Level-Brochure.pdf" download>Download Brochure <div className="btn-arrow ddc"></div></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>




//             {/* <section className='solutionrow ptt-60 pbb-60'>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-sm-12 text-center'>
//                             <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Model</h2>
//                         </div>
//                     </div>
//                     <div className='row zindx'>

//                         <div className='col-sm-12 zindx'>
//                             <div className='row align-items-center'>
//                                 <div className='col-sm-6'>
//                                     <div className='wow fadeInUp delay-0-2s animated animateUP'>
//                                         <img src="/assets/img/new/model1.png" alt="images" />
//                                     </div>
//                                 </div>
//                                 <div className='col-sm-6'>
//                                     <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
//                                         This coaching model is designed to help clients develop a clear understanding of their situation, set specific goals, measure progress, and take action towards success. This model is supported by Problem solving tools at various steps.
//                                     </p>
//                                     <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
//                                         <Link href="#know-more"><a className="readon2">Know More <div className="btn-arrow"></div></a></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='clearfix'></div>
//                     <div className='solutionarrowbox1'>
//                         <img src="/assets/img/homeb/orangearrow.png" />
//                     </div>
//                     <div className='solutionarrowbox2'>
//                         <img src="/assets/img/homeb/bluearrow1.png" />
//                     </div>

//                 </div>
//             </section> */}

//             <div className="rs-about oveflohh style2 logosl ptt-50 pbb-50">
//                 <div className="container">
//                     <div className="row zindx">
//                         <div className="col-sm-12">
//                             <div className="pb-50  text-center">
//                                 <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Modules</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='row mmssb zindx'>
//                         <div className='col-sm-12'>
//                             <div className='text-center'>
//                                 <div className='minnerb wow fadeInUp delay-0-2s animated animateUP'>
//                                     <h3>Time - 130 hrs</h3>
//                                     <h4> Max students - 20 </h4>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='row mmssb2 zindx'>
//                         <div className='col-sm-6 zindexx'>
//                             <div className='moduleinner'>
//                                 <h3 className='wow fadeInUp delay-0-2s animated animateUP'>Coaching Foundation Module 1</h3>
//                                 <img className='wow fadeInUp delay-0-2s animated animateUP' src="/assets/img/new/frame.jpg" alt="images" />
//                                 {/* <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
//                                     <Link href="/module/module-1"><a className="readon2">Know More <div className="btn-arrow"></div></a></Link>
//                                 </div> */}
//                             </div>
//                         </div>
//                         <div className='col-sm-6 zindexx'>
//                             <div className='moduleinner'>
//                                 <h3 className='wow fadeInUp delay-0-2s animated animateUP'>Coaching for Performance Module II</h3>
//                                 <img className='wow fadeInUp delay-0-2s animated animateUP' src="/assets/img/new/model2.png" alt="images" />

//                             </div>
//                         </div>

//                         <div className='col-sm-12 text-center'>
//                             <div className="btn-part ptt-10 pbb-30 mtt-30 wow fadeInUp delay-0-2s animated animateUP">
//                                 <Link href="/module/module-1"><a className="readon2">Know More <div className="btn-arrow"></div></a></Link>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='clearfix'></div>
//                     <div className='solutionarrowbox1'>
//                         <img src="/assets/img/homeb/orangearrow.png" />
//                     </div>
//                     <div className='solutionarrowbox2'>
//                         <img src="/assets/img/homeb/bluearrow1.png" />
//                     </div>
//                 </div>
//             </div>


//             <section className='aboutmap ptt-50 pbb-40'>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-sm-12 text-center pbb-30'>
//                             <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP"><h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Emotional Intelligence Based Coaching</h2></h2>
//                         </div>
//                         <div className='clearfix'></div>

//                         <div className='col-sm-8'>
//                             <div>
//                                 <table className='mtblc wow fadeInUp delay-0-2s animated animateUP'>
//                                     <tr>
//                                         <th className='texttrasc' width='10px'></th>
//                                         <th>Recognition</th>
//                                         <th>Regulation</th>
//                                     </tr>
//                                     <tr>
//                                         <td className='texttras'><p>Personal Competence</p></td>
//                                         <td>
//                                             <h3>Self-Awareness</h3>
//                                             <ul>
//                                                 <li>Self-confidence</li>
//                                                 <li>Awareness of your emotional  state</li>
//                                                 <li>Recognizing how your behavior impacts othres</li>
//                                                 <li>Paying attention to how others influence your emotional state</li>
//                                             </ul>
//                                         </td>
//                                         <td>
//                                             <h3>Self-Management</h3>
//                                             <ul>
//                                                 <li>Keeping disruptive emotions and impulses in check</li>
//                                                 <li>Acting in congruence with your values</li>
//                                                 <li>Handling change flexibly</li>
//                                                 <li>Pursuing goals and opportunities despite obstacles and setbacks</li>
//                                             </ul>
//                                         </td>
//                                     </tr>

//                                     <tr>
//                                         <td className='texttras'><p>Social Competence</p></td>
//                                         <td>
//                                             <h3>Social Awareness</h3>
//                                             <ul>
//                                                 <li>Picking up on the mood in the room</li>
//                                                 <li>Caring what others are going through</li>
//                                                 <li>Hearing what the other person is "really" saying</li>
//                                             </ul>
//                                         </td>
//                                         <td>
//                                             <h3>Relationship Management</h3>
//                                             <ul>
//                                                 <li>Getting along well with others</li>
//                                                 <li>Handling conflict effenctively</li>
//                                                 <li>Clearly expressing ideas/information</li>
//                                                 <li>Using sensitivity to another persons feeling (empathy) to manage interactions successfully</li>
//                                             </ul>
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </div>
//                         </div>
//                         <div className='col-sm-4'>
//                             <div className='helpm'>
//                                 <h3>Helps in :</h3>
//                             </div>
//                             <div className='helpsb mbb-30 wow fadeInUp delay-0-2s animated animateUP'>
//                                 <img src="/assets/img/new/lifec.png" alt="images" />
//                                 <h4>Life Coaching</h4>
//                             </div>

//                             <div className='helpsb wow fadeInUp delay-0-2s animated animateUP'>
//                                 <img src="/assets/img/new/relationshipc.png" alt="images" />
//                                 <h4>Relationship Coaching</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <section id="rs-team" className='style2 solutionrow ptt-60 pbb-60 rsteam'>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-sm-2'></div>
//                         <div className='col-sm-8 text-center'>
//                             <h2 class="title pbb-100 mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP pbb-30">Program Directors</h2>
//                         </div>
//                     </div>
//                     <div className='row zindx'>
//                         <div className='col-sm-1'></div>
//                         <div className='col-sm-10 zindexxc'>
//                             <div className='row'>
//                                 <div className='col-sm-4'>
//                                     <div className='innerteamc  mtt-30'>
//                                         <div className='teamimgc1'>
//                                             <a target="_blank" href="/yogesh-sood"><img src="/assets/img/team/yogesh-sood.jpg" alt="" /></a>
//                                         </div>
//                                         <div className="team-info">
//                                             <div className="name">
//                                                 <a target="_blank" href="/yogesh-sood">Yogesh Sood</a>
//                                             </div>
//                                             <span className="post">ACTP, MCC (ICF)</span>
//                                         </div>
//                                         <div>
//                                             <ul className="social-icon">
//                                                 <li><a target="_blank" href="https://www.linkedin.com/in/yogesh-sood/"><i className="fa fa-linkedin"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className='teampera'>
//                                             <p>CMD, BYLD Group, Blanchard International India, and founder of first SEA chapter of ICF in 2004</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className='col-sm-8'>
//                                     <div className='innerteamc mtt-30'>
//                                         <div className='teamimgc1'>
//                                             <a href="#"><img src="/assets/img/team/sandeep.jpg" alt="" /></a>
//                                         </div>
//                                         <div className="team-info">
//                                             <div className="name">
//                                                 <a href="#">Sandeep Budhiraja</a>
//                                             </div>
//                                             <span className="post">Certified Master Trainer – ICF Coaching Curriculum, PMC Global™<br></br> Master Facilitator DTCI ViLT | Certified ICF ACC Coach</span>
//                                         </div>
//                                         <div>
//                                             <ul className="social-icon">
//                                                 <li><a target="_blank" href="https://www.linkedin.com/in/sanbuds/"><i className="fa fa-linkedin"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className='teampera'>
//                                             <p>Certified trainer for Self Track and Other's Track from Partners in Leadership.<br></br>Global leader in Accountability Training.</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                     <div className='clearfix'></div>
//                     <div className='solutionarrowbox1'>
//                         <img src="/assets/img/homeb/orangearrow.png" />
//                     </div>
//                     <div className='solutionarrowbox2'>
//                         <img src="/assets/img/homeb/bluearrow1.png" />
//                     </div>

//                 </div>
//             </section>


//             <section className='solutionrow ptt-60 pbb-60'>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-sm-12 text-center'>

//                         </div>
//                     </div>
//                     <div className='row zindx'>

//                         <div className='col-sm-12 zindx'>
//                             <div className='row align-items-center'>
//                                 <div className='col-sm-6'>
//                                     <div className='wow fadeInUp delay-0-2s animated animateUP'>
//                                         <img src="/assets/img/new/cc1.png" alt="images" />
//                                     </div>
//                                 </div>
//                                 <div className='col-sm-6'>
//                                     <div className='pll-20'>
//                                         <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Program Details</h2>
//                                         <ul className='programul ptt-20'>
//                                             <li>Program Starts : (May onwards)</li>
//                                             <li>Language : English</li>
//                                             <li>Delivery Method: Combination (face-to-face, webinar, telephonic, combination)</li>
//                                             <li>Program is for : HR, Learning Professionals, Freelancers,Managers</li>
//                                             <li>Prerequisite : Graduation</li>
//                                         </ul>

//                                         <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
//                                             <Link href="#know-more"><a className="readon2">Know More <div className="btn-arrow"></div></a></Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='clearfix'></div>
//                     <div className='solutionarrowbox1'>
//                         <img src="/assets/img/homeb/orangearrow.png" />
//                     </div>
//                     <div className='solutionarrowbox2'>
//                         <img src="/assets/img/homeb/bluearrow1.png" />
//                     </div>

//                 </div>
//             </section>




//             <section className='aboutmap ptt-50 pbb-40 zinc'>
//                 <div className='container'>
//                     <div className='row align-items-center'>
//                         <div className='col-sm-12 text-center pbb-30'>
//                             <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Our Upcoming Training schedule</h2>
//                         </div>
//                         <div className='clearfix'></div>
//                         <div className='col-sm-6'>

//                             <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
//                                 <div className='dateside'>
//                                     <div className='datefont'>
//                                         22<br></br> April
//                                     </div>
//                                 </div>
//                                 <div className='textsidec'>
//                                     <div className='eventi'>
//                                     ICF Coach Certification 
//                                     </div>
//                                     <div className='timed'>
//                                         <ul>
//                                             <li><i className='fa fa-th-large'>DCA Batch 39</i></li>
//                                             <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 <div className='booknowside'>
//                                 <a>Book Now</a>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className='col-sm-6'>
//                             <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
//                                 <div className='dateside'>
//                                     <div className='datefont'>
//                                         10<br></br> June
//                                     </div>
//                                 </div>
//                                 <div className='textsidec'>
//                                     <div className='eventi'>
//                                     ICF Coach Certification 
//                                     </div>
//                                     <div className='timed'>
//                                         <ul>
//                                             <li><i className='fa fa-th-large'>DCA Batch 40</i></li>
//                                             <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 <div className='booknowside'>
//                                 <a>Book Now</a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='col-sm-6'>
//                             <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
//                                 <div className='dateside'>
//                                     <div className='datefont'>
//                                         29<br></br> July
//                                     </div>
//                                 </div>
//                                 <div className='textsidec'>
//                                     <div className='eventi'>
//                                     ICF Coach Certification 
//                                     </div>
//                                     <div className='timed'>
//                                         <ul>
//                                             <li><i className='fa fa-th-large'>DCA Batch 41</i></li>
//                                             <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 <div className='booknowside'>
//                                 <a>Book Now</a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='col-sm-6'>
//                             <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
//                                 <div className='dateside'>
//                                     <div className='datefont'>
//                                         16<br></br> Sep
//                                     </div>
//                                 </div>
//                                 <div className='textsidec'>
//                                     <div className='eventi'>
//                                     ICF Coach Certification
//                                     </div>
//                                     <div className='timed'>
//                                         <ul>
//                                             <li><i className='fa fa-th-large'>DCA Batch 42</i></li>
//                                             <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 <div className='booknowside'>
//                                 <a>Book Now</a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='col-sm-6'>
//                             <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
//                                 <div className='dateside'>
//                                     <div className='datefont'>
//                                         25<br></br> Nov
//                                     </div>
//                                 </div>
//                                 <div className='textsidec'>
//                                     <div className='eventi'>
//                                     ICF Coach Certification
//                                     </div>
//                                     <div className='timed'>
//                                         <ul>
//                                             <li><i className='fa fa-th-large'>DCA Batch 43</i></li>
//                                             <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 <div className='booknowside'>
//                                 <a>Book Now</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-sm-6'>
//                             <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
//                                 <div className='dateside'>
//                                     <div className='datefont'>
//                                         27<br></br> Jan
//                                     </div>
//                                 </div>
//                                 <div className='textsidec'>
//                                     <div className='eventi'>
//                                     ICF Coach Certification
//                                     </div>
//                                     <div className='timed'>
//                                         <ul>
//                                             <li><i className='fa fa-th-large'>DCA Batch 44</i></li>
//                                             <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 <div className='booknowside'>
//                                 <a>Book Now</a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='col-sm-6'>
//                             <div className='innerca' onClick={() => setModalOpen(!modalOpen)}>
//                                 <div className='dateside'>
//                                     <div className='datefont'>
//                                         09<br></br> March
//                                     </div>
//                                 </div>
//                                 <div className='textsidec'>
//                                     <div className='eventi'>
//                                     ICF Coach Certification
//                                     </div>
//                                     <div className='timed'>
//                                         <ul>
//                                             <li><i className='fa fa-th-large'>DCA Batch 45</i></li>
//                                             <li><i className='fa fa-clock-o'>10:00 am to 4:00 pm</i></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 <div className='booknowside'>
//                                     <a>Book Now</a>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* <div className='col-sm-12'>
//                             <div>
//                                 <table className='mtblc wow fadeInUp delay-0-2s animated animateUP width100p'>
//                                     <tr>
//                                         <th>Dates</th>
//                                         <th>Time</th>
//                                         <th>Events Name</th>
//                                         <th>Book Know</th>
//                                     </tr>
//                                     <tr>
//                                         <td className='texttras'>16 April 2023</td>
//                                         <td>10:30 AM to 5:00 PM</td>
//                                         <td>Virtual Training Apollo3</td>
//                                         <td><a href='#'>Register Now</a></td>
//                                     </tr>

//                                     <tr>
//                                         <td className='texttras'>17 June 2023</td>
//                                         <td>10:30 AM to 5:00 PM</td>
//                                         <td>Harnessing Creative Intelligence</td>
//                                         <td><a href='#'>Register Now</a></td>
//                                     </tr>

//                                     <tr>
//                                         <td className='texttras'>30 May 2023</td>
//                                         <td>10:30 AM to 5:00 PM</td>
//                                         <td>Five Behaviour - Course Preview</td>
//                                         <td><a href='#'>Register Now</a></td>
//                                     </tr>

//                                     <tr>
//                                         <td className='texttras'>20 June 2023</td>
//                                         <td>10:30 AM to 5:00 PM</td>
//                                         <td>DISC Train-the-Trainer (TTT)</td>
//                                         <td><a href='#'>Register Now</a></td>
//                                     </tr>

//                                     <tr>
//                                         <td className='texttras'>12 May 2023</td>
//                                         <td>10:30 AM to 5:00 PM</td>
//                                         <td>The SLII Experience™ - Face to Face</td>
//                                         <td><a href='#'>Register Now</a></td>
//                                     </tr>

//                                     <tr>
//                                         <td className='texttras'>29 April 2023</td>
//                                         <td>10:30 AM to 5:00 PM</td>
//                                         <td>Everything DISC - Virtual Course Preview</td>
//                                         <td><a href='#'>Register Now</a></td>
//                                     </tr>
//                                 </table>
//                             </div>
//                         </div> */}

//                     </div>
//                 </div>
//             </section>



//             <div id='know-more' class="homecon ptt-60 zinc">
//                 <div class="container">
//                     <div className='row'>
//                         <div className='col-sm-3'>
//                             <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Get in touch</h2>
//                         </div>
//                         <div className='col-sm-9'>
//                             <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
//                                 Avail the development stream that is essential for your professional requirement. For more information, feel free to fill the form and we will get back to you
//                             </p>
//                         </div>
//                     </div>

//                     <div class="row y-middle">
//                         <div class="col-lg-4 md-mb-50">
//                             <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
//                                 <img src="/assets/img/homeb/contactl.png" alt="Contact" />
//                             </div>


//                         </div>
//                         <div class="col-lg-4">
//                             <div class="contact-wrap">
//                                 <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
//                                     <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
//                                         <div className="row">
//                                             <div className="col-sm-6 mb-12">
//                                                 <input className='borrr' type="text" name="name" placeholder="Enter Name*" required />
//                                             </div>

//                                             <div className="col-sm-6 mb-12">
//                                                 <input className='borrr' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
//                                             </div>
//                                             <div className="col-sm-12 mb-12">
//                                                 <input className='borrr' type="email" name="email" placeholder="Professional/Personal Email Address*" required />
//                                             </div>
//                                             <div className="col-sm-12 mb-12">
//                                                 <input className='borrr' type="text" name="organization" placeholder="Organization" />
//                                             </div>
//                                             <div className="col-sm-12 mb-12">
//                                                 <input className='borrr' type="text" name="designation" placeholder="Designation*" required />
//                                             </div>

//                                             <div className="col-lg-12 mb-12">
//                                                 <input id="submitbuttonform" className="clientcornnerbtn bord0" type="submit" value="Submit" />
//                                             </div>
//                                             <p id="showlabel" style={{ display: "none" }}></p>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='col-lg-4'>
//                         <div>
//                                 <h4 className='policyh4'>Policies</h4>
//                                 <ul className='mpolicyes'>
//                                     <li>
//                                         <a href='/policies/byld-group-and-coach-candidate-partial-completion-policy'>Partial Completion Policy</a>
//                                     </li>
//                                     <li>
//                                         <a href='/policies/byld-group-complaint-and-grievance-policy'>Grievance Policy</a>
//                                     </li>
//                                     <li>
//                                         <a href='/policies/disability-and-discrimination-statement'>Disability & Discrimination Statement</a>
//                                     </li>
//                                     <li>
//                                         <a href='/policies/enrollment-agreement-for-actp-program-offered'>Enrollment Agreement Policy</a>
//                                     </li>
//                                     <li>
//                                         <a href='/policies/ethical-marketing-policy'>Ethical Marketing Practice</a>
//                                     </li> 
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }




import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

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


    const [modalOpen1, setModalOpen1] = React.useState(false);

   const submit = async event => {
    event.preventDefault();

    var name = event.target.name.value;
    var email = event.target.email.value;
    var phone = event.target.phone.value;
    var cocode = event.target.cocode.value;
    var organization = event.target.organization.value;
    var designation = event.target.designation.value;
    var slot = event.target.slot.value;
    var emailslot = event.target.emailslot.value;
    var location = event.target.location.value;
    var Business_Entity = event.target.Business_Entity.value;

    document.getElementById("submitbuttonform").value = "Submitting...."

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this.responseText);
    }
    xhttp.open("POST", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/141/feedback');
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                document.getElementById("contactForm").reset();
                document.getElementById("showlabel").style.display = "block";
                window.setTimeout(function () {
                    window.location.href = "/thank-you"
                }, 3000); // Add a delay before redirecting
            } else {
                alert('There was a problem with the request.');
            }
        }
    };

    const params = new URLSearchParams({
        "leadsquared-FirstName": name,
        "leadsquared-EmailAddress": email,
        "leadsquared-Mobile": `${cocode}-${phone}`,
        "leadsquared-Company": organization,
        "leadsquared-JobTitle": designation,
        "slot": slot,
        "emailslot": emailslot,
        "location": location,
        "leadsquared-mx_Business_Entity": Business_Entity
    }).toString();

    xhttp.send(params);
}

    const FooregisterUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform1").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/22/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel1").innerHTML = "Thank you for your details. Check your inbox for more details.";
                    document.getElementById("resetform").reset();
                    document.getElementById("showlabel1").style.display = "block";
                    setTimeout(function () {
                        document.getElementById("showlabel1").style.display = "none";
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-email=" + event.target.email.value)

    }



    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Become a Coach | BYLD Group</title>
                <meta name="description" content="When you think of becoming a coach – Think BYLD" />
                <link rel="stylesheet" type="text/css" href="/efassets/css/new.css" />
                <meta property="og:image" content="/efassets/img/business-team-building.svg"></meta>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.__lo_site_id = 330055;
(function() {
var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
 })();
          `,
                    }}
                />
            </Head>

            {/* <Modal className='toppc mwc500' toggle={() => setModalOpen1(!modalOpen1)} isOpen={modalOpen1} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen1(!modalOpen1)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc ccl" onSubmit={popupsubmit}>                     
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Enter Name*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Work Email/Email*" required />
                        </div>
                        <div className="col-sm-6 mb-12">
                            <input type="text" name="phone" class="form-control" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                        </div>
                        <div className="col-sm-6 mb-12">
                            <input type="text" name="organization" class="form-control" placeholder="Organization*" required />
                        </div>
                        <div className="col-lg-12 mb-12">
                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                        </div>
                        <div className="col-sm-12 d-none">
                            <input type="text" name="Business_Entity" value="ICF" required />
                        </div>
                        <div class="col-md-12 text-center">
                            <input id='submitbuttonformform' class="formbtn" type="submit" value="Submit" />
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal> */}

            <section className='videosection'>
                <div class="videowrapper">
                    <video src="/efassets/img/video/video.mp4" autoPlay muted loop type="video/mp4"></video>
                </div>

                <div className='container ggt'>
                    <div className='row'>
                        <div className='col-sm-8'></div>
                        <div className='col-sm-4'>
                            <div className='formhh'>
                                <div className="bannerform msddd">
                                   <h3>Enroll now </h3>
                                    {/*<h3>ICF Coach Certification Program by BYLD Group, Sat, Dec 16, 2023, 11:00 AM - 12:00 PM</h3> */}


                                    <form id="contactForm" className='clientcornner ptt-5 pbb-0' onSubmit={submit}>
                                        <div className="row">
                                            <div className="col-sm-12 mb-12">
                                                <input type="text" name="name" placeholder="Name*" required />
                                            </div>
                                            <div className="col-sm-12 mb-12 eqlcwi">
                                                <select className='wi10' name='cocode'>
                                                    {
                                                        country.slice().map((countrys) => {
                                                            return (
                                                                <option value={countrys.code}>{countrys.iso}-{countrys.code}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <input type="text" className='wi90' name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                            </div>
                                            <div className="col-sm-12 mb-12">
                                                <input type="email" name="email" placeholder="Work Email/Email*" required />
                                            </div>

                                            {/* <div className="col-sm-12 mb-12">
                                                <label for="coupen">Coupon Code<span class="required">*</span></label>
                                                <input id="coupen" type="text" name="coupon" disabled placeholder="LD10"  />
                                            </div> */}

                                            <div className="col-sm-6 mb-12">
                                                <input type="text" name="organization" placeholder="Organization*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input type="text" name="designation" placeholder="Designation*" required />
                                            </div>
                                            {/* <div className="col-sm-12 mb-12">
                                                <input type="email" name="email" placeholder="Email*" disabled />
                                            </div> */}

                                            <div className="col-sm-12 mb-12">
                                                <select name='emailslot' required>
                                                    <option value=''>Source*</option>   
                                                     <option value='Email'>Email</option> 
                                                    <option value='Linkedin'>Linkedin</option> 
                                                    <option value='Social Media'>Social Media</option> 
                                                    <option value='Website'>Website</option> 
                                                  
                                                </select>
                                            </div>

                                            <div className="col-sm-12 mb-12">
                                                <select name='slot' required>
                                                    <option value=''>Pick up any Slot*</option>   
                                                    
 
                                                    <option value='batch 47 13 august 2024'>batch 47 13 august 2024</option> 
                                                    
                                                </select>
                                            </div>
                                            <div className="col-sm-12 mb-12">
                                                <select name='location' required>
                                                    <option value=''>Location*</option>   
                                                     <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                    <option value="Assam">Assam</option>
                                                    <option value="Bihar">Bihar</option>
                                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                                    <option value="Goa">Goa</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Haryana">Haryana</option>
                                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                    <option value="Jharkhand">Jharkhand</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Manipur">Manipur</option>
                                                    <option value="Meghalaya">Meghalaya</option>
                                                    <option value="Mizoram">Mizoram</option>
                                                    <option value="Nagaland">Nagaland</option>
                                                    <option value="Odisha">Odisha</option>
                                                    <option value="Punjab">Punjab</option>
                                                    <option value="Rajasthan">Rajasthan</option>
                                                    <option value="Sikkim">Sikkim</option>
                                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                                    <option value="Telangana">Telangana</option>
                                                    <option value="Tripura">Tripura</option>
                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                    <option value="Uttarakhand">Uttarakhand</option>
                                                    <option value="West Bengal">West Bengal</option>
                                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                    <option value="Chandigarh">Chandigarh</option>
                                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                                    <option value="Daman and Diu">Daman and Diu</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Lakshadweep">Lakshadweep</option>
                                                    <option value="Puducherry">Puducherry</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Srilanka">Srilanka</option>
                                                    <option value="USA">USA</option>
                                                    <option value="UK">UK</option>
                                                    <option value="Others">Others</option>
                                            </select>
                                            </div>




                                            <div className="col-sm-12 d-none">
                                                <input type="text" name="Business_Entity" value="ICF" required />
                                            </div>
                                            <div className="col-lg-12 mb-12 text-center">
                                                <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Register" />
                                            </div>
                                            <p id="showlabel" style={{ display: "none" }}></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="rs-about style4 bg21 mtt-60">
                <div class="container">
                    <div class="row y-middle">
                        <div class="col-lg-7">
                            <div class="sec-title3 mbb-35 text-left onlyshd pbb-50">
                                <h4 class="countertoph2 text-left font36">ABOUT OUR FIRM</h4>
                                <div class="heading-border-line left-style"></div>
                                <p class="mtt-40 font-20">
                                    Largest Training & Consulting company that helps certify leaders as Coaches based on <b>ICF approved</b> Curriculum licensed by Aster Coaching LLC (USA).
                                </p>
                                <div className='rs-estimate'>
                                    <ul className="estimate-info mtt-5 font-20 listhight">
                                        <li>Competitively priced program with the highest return on investment.</li>
                                        <li>Helped <b>600+</b> professionals from various industries</li>
                                    </ul>
                                </div>
                                {/* <a className='dbro' href='#'>Download Brochure</a> */}
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="about-img"><img src="/assets/img/business-team-building.png" alt="images" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rs-project style2 efhbg mtt-40 ptt-30 pbb-60">
                <div class="container">
                    <div class="row">
                        <div className='col-sm-12'>
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font36">Reasons To Choose BYLD</h4>
                                <div className="heading-border-line center-style mbb-50"></div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="rcbyldbox rcby1">
                                <h3><span>100%</span> Online (ViLT)</h3>
                                <a class="p-icon"><i class="fa fa-plus"></i></a>
                            </div>
                            <div class="rcbyldbox  rcby2">
                                <h3>Guaranteed Peer coaching assistance</h3>
                                <a class="p-icon"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="rcbyldbox  rcby3">
                                <h3>Coaches Trained</h3>
                                <a class="p-icon"><i class="fa fa-plus"></i></a>
                            </div>
                            <div class="rcbyldbox  rcby4">
                                <h3><span>9+</span> Years of Experience</h3>
                                <a class="p-icon"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="rcbyldbox  rcby5">
                                <h3><span>10 hours</span> of mentor Coaching included</h3>
                                <a class="p-icon"><i class="fa fa-plus"></i></a>
                            </div>
                            <div class="rcbyldbox  rcby6">
                                <h3><span>100%</span> Pass Results for CKA</h3>
                                <a class="p-icon"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="rcbyldbox  rcby7">
                                <h3>ICF Accredited Coaches</h3>
                                <a class="p-icon"><i class="fa fa-plus"></i></a>
                            </div>
                            <div class="rcbyldbox  rcby8">
                                <h3>Unlimited access Online Mock assessments</h3>
                                <a class="p-icon"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape-bg ptt-50 pbb-40 solutionsboxarea">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font36">A Quick Insight into ICF Certification</h4>
                                <div className="heading-border-line center-style mbb-30"></div>
                            </div>

                            <div className='testmm'>
                                <Slider {...settings}>
                                    <div class="innertest">
                                        <div class="item-content">
                                            <div className='testmicon1'>
                                                <img src="/efassets/img/t1.png" alt="Testimonial" />
                                            </div>
                                            <div className='testmh'>
                                                <h3>Why ICF certification is imperative?</h3>
                                            </div>
                                            <div className='testmp'>
                                                <p>
                                                    The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective
                                                </p>
                                            </div>
                                            <div className='testmicon2'>
                                                <img src="/efassets/img/t2.png" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="innertest">
                                        <div class="item-content">
                                            <div className='testmicon1'>
                                                <img src="/efassets/img/t1.png" alt="Testimonial" />
                                            </div>
                                            <div className='testmh'>
                                                <h3>Who can consider the ICF accredited certification program?</h3>
                                            </div>
                                            {/* <div className='testmp'>
                                                <p>
                                                    The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective
                                                </p>
                                            </div> */}
                                            <div className='rs-estimate'>
                                                <ul className="estimate-info mtt-5 font-20 listhight">
                                                    <li>HR heads, HR managers, Training managers, Trainers, and Consultants</li>
                                                    <li>Business Heads, Directors, General Managers, Managers, and Entrepreneurs</li>
                                                    <li>CEOs, Senior leaders, Line Managers, Team Leaders, Supervisors, and all other C-suit executives.</li>
                                                </ul>
                                            </div>
                                            <div className='testmicon2'>
                                                <img src="/efassets/img/t2.png" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </div>

                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="ptt-60 pbb-50">
                <div className="container">
                    <div className="row ">
                        <div className='col-sm-4'></div>
                        <div className='col-sm-4 text-center'>
                            <img src="/efassets/img/teststar.png" alt="Testimonial" />
                        </div>
                    </div>

                    <div className="row ptt-40">
                        <div className='col-sm-4 nntestb'>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/0fzpMkqCU9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='col-sm-4 nntestb'>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/LaabW0vlKE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='col-sm-4 nntestb'>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/xiT1GoXSOps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>


            <div id="rs-faq" class="rs-faq ptt-60 pbb-50">
                <div className="container">
                    <div className="row ">
                        <div className='col-sm-4'></div>
                        <div className='col-sm-4 text-center'>
                            <img src="/efassets/img/faqs.png" alt="Testimonial" />
                        </div>
                    </div>

                    <div className="row ptt-40">
                        <div className='col-sm-12 faqss'>
                            <Accordion allowZeroExpanded>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is included in the fees of the course?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            The fees of the Coaching Certification includes facilitation fees for Classroom Sessions (Virtual Instructor led) and Asynchronous learning Sessions. We also offer 10 hrs of ‘Mentor Coaching’ sessions, along with ‘Peer Coaching Support’ with unlimited access to Mock Tests for CKA ( now replaced with the new Credentialing Exam). That’s not all, we provide flexible finance options with interest free EMIs. Moreover, various other certifications & programs worth more than Rs. 1 Lakh are complimentary with the course.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            In Addition to the coaching sessions, what else is included in the program?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            In addition, we offer you the following certifications and programs worth more than Rs. 1 lakh, as complimentary :<br></br>

                                            ‘Emotional Intelligence Train the Trainer’ certification.<br></br>
                                            25 free EQ assessments for your coaching assignments.<br></br>
                                            Free Workshop on setting up your coaching practice or profession.<br></br>
                                            ‘Advance Learning Professional Certification’ program (a 3 months certification course).<br></br>
                                            These certifications can be availed anytime within 6 months.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Are there easy finance options available?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            To reduce your upfront payment burden, we offer ‘Interest Free EMIs’, where you only pay 3 EMIs as advance payment. The rest can be paid over 6/9/12 months depending on the finance institution’s loan tenure scheme.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Does the institute provide mentor coaching hours or do we have to pay extra?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            At no additional cost, we offer 10 hrs of Mentor Coaching along with ‘Guaranteed Peer Coaching’ assistance and strong back-end support access to Master Coach / Facilitator. This will help you speed up your coaching journey and help establish coaching practice whether inside your organization or as a professional coach.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How well experienced are the Master Coaches/ Instructors?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            The International Master Coaches who conduct this training are very seasoned coaches with close to 30 years of coaching experience between the two of them. In association with Aster Coaching US (Accredited by ICF), we take pride in sharing with you that we certify and develop high-caliber coaches who meet global standards and are in tune with local, regional and global business practices.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is the flexibility of the Coaching Program?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Keeping in mind one’s work schedule, we offer ViLT sessions on weekends per your convenience. This helps in finishing classroom credits without work being affected. In case of any unforeseen challenges, you can also opt to discontinue the batch and continue later with the next upcoming batch, at no additional Cost.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            {/* 
            <div class="ptt-60 pbb-50 lastcc">
                <div className="container">
                    <div className="row ">
                        <div className='col-sm-12 text-center'>
                            <h2>Still have a doubt about coaching ?</h2>
                            <a className='talkbtn' onClick={() => setModalOpen1(!modalOpen1)}>TALK TO US</a>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='rs-footer ptt-50'>
                <div className='bg-wrap'>
                    <div class="container">
                        <div class="newslatter-wrap extra-pt">
                            <div class="footer-newsletter fly-up">
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <div class="sec-title4 text-center mb-40 plllc">
                                            <h2 class="title">Subscribe to Our Newsletter</h2>
                                            <p>Stay updated with the latest on BYLD</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <form id="resetform" class="subscribe-form" onSubmit={FooregisterUser}>
                                            <input type="email" name="email" placeholder="Enter Your Email" required />
                                            <button id='submitbuttonform1' class="readon2" type="submit">Subscribe Now <div class="btn-arrow"></div></button>
                                            <p id="showlabel1" style={{ display: "none" }}></p>
                                        </form>
                                    </div>
                                </div>


                                {/* <img class="img1 pattern" src="assets/images/pattern/pattern8.png" alt="" />
                                <img class="img2 pattern" src="assets/images/pattern/pattern9.png" alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="rs-footer relative">
                <div class="bg-wrap">
                    
                    <div class="footer-content pb-90">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-12 col-sm-12 md-md-30">
                                    <div class="about-widget">
                                        <div class="logo-area">
                                            <a href="index.html">
                                                <img src="assets/images/logo_light6.png" alt="Footer Logo"/>
                                            </a>
                                        </div>
                                        <p class="footer-desc">Sodales hendrerit, eros m sodales hendrerit.</p>
                                        <ul class="footer-contact">
                                            <li>Phone: <a href="tel:+123456789">+123456789</a></li>
                                            <li>Email: <a href="mailto:corex@gmail.com">corex@gmail.com</a></li>
                                        </ul>
                                        <ul class="social-links">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12 col-sm-12 md-md-30">
                                    <div class="quicklinks-widget widget">
                                        <h4 class="widget-title">Quick Links</h4>
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Management</a></li>
                                            <li><a href="#">Resources</a></li>
                                            <li><a href="#">News</a></li>
                                            <li><a href="#">Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12 col-sm-12 md-md-30">
                                    <div class="categories-widget widget">
                                        <h4 class="widget-title">Categories</h4>
                                        <ul>
                                            <li><a href="#">Marketing</a></li>
                                            <li><a href="#">Branding</a></li>
                                            <li><a href="#">Development</a></li>
                                            <li><a href="#">Digital Design</a></li>
                                            <li><a href="#">Illustration</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12 col-sm-12">
                                    <div class="legal-widget widget">
                                        <h4 class="widget-title">Legal</h4>
                                        <ul>
                                            <li><a href="#">Privacy & Policy</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">Copyright</a></li>
                                            <li><a href="#">Disclaimer</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom text-center">
                        <div class="container">
                            <p class="copyright">Bizup © Copyright 2021.All rights reserved.</p>
                        </div>
                    </div>
                </div>
                <img class="pattern-right" src="assets/images/pattern/pattern7.png" alt=""/>
            </div> */}


        </>
    )
}
