import Head from 'next/head'
import Slider from "react-slick";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";

export default function JoinOurPartnerNetworkLP() {

    const [modalOpen1, setModalOpen1] = React.useState(false);
    const [modalOpen2, setModalOpen2] = React.useState(false);
    const [modalOpen3, setModalOpen3] = React.useState(false);
    const [modalOpen4, setModalOpen4] = React.useState(false);
    const [modalOpen5, setModalOpen5] = React.useState(false);
    const [modalOpen6, setModalOpen6] = React.useState(false);
    const [modalOpen7, setModalOpen7] = React.useState(false);


    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
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

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/79/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("fname=" + event.target.fname.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&company=" + event.target.company.value +
            "&designation=" + event.target.designation.value +
            "&howdidyouknowaboutus=" + event.target.howdidyouknowaboutus.value +
            "&leadsquared_Notes=" + event.target.leadsquared_Notes.value)

    }




    // const whitp1 = async event => {
    //     const coursename = 'White Paper';
    //     event.preventDefault()
    //     document.getElementById("submitbuttonform1").value = "Submitting...."
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onload = function () {
    //         console.log(this.responseText);
    //     }
    //     xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback');
    //     xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    //     xhttp.onreadystatechange = function () {
    //         if (xhttp.readyState == 4) {
    //             if (xhttp.status == 200) {
    //                 document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
    //                 document.getElementById("contactForm").reset();
    //                 document.getElementById("showlabel").style.display = "block";
    //                 window.setTimeout(function () {
    //                     window.location.href = "/assets/pdf/challenges-and-recommendations-for-auto-industry.pdf"
    //                 });

    //             } else {
    //                 alert('There was a problem with the request.');
    //             }
    //         }
    //     };
    //     xhttp.send("name=" + event.target.name.value +
    //     "&youremail=" + event.target.email.value +
    //     "&coursename=" + coursename)
    // }

    // const whitp2 = async event => {
    //     const coursename = 'White Paper';
    //     event.preventDefault()
    //     document.getElementById("submitbuttonform2").value = "Submitting...."
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onload = function () {
    //         console.log(this.responseText);
    //     }
    //     xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback');
    //     xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    //     xhttp.onreadystatechange = function () {
    //         if (xhttp.readyState == 4) {
    //             if (xhttp.status == 200) {
    //                 document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
    //                 document.getElementById("contactForm").reset();
    //                 document.getElementById("showlabel").style.display = "block";
    //                 window.setTimeout(function () {
    //                     window.location.href = "/assets/pdf/auto-industry-white-paper.pdf"
    //                 });

    //             } else {
    //                 alert('There was a problem with the request.');
    //             }
    //         }
    //     };
    //     xhttp.send("name=" + event.target.name.value +
    //     "&youremail=" + event.target.email.value +
    //     "&coursename=" + coursename)
    // }

    // const whitp3 = async event => {
    //     const coursename = 'White Paper';
    //     event.preventDefault()
    //     document.getElementById("submitbuttonform3").value = "Submitting...."
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onload = function () {
    //         console.log(this.responseText);
    //     }
    //     xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback');
    //     xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    //     xhttp.onreadystatechange = function () {
    //         if (xhttp.readyState == 4) {
    //             if (xhttp.status == 200) {
    //                 document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
    //                 document.getElementById("contactForm").reset();
    //                 document.getElementById("showlabel").style.display = "block";
    //                 window.setTimeout(function () {
    //                     window.location.href = "/assets/pdf/roadblocks-in-the-growth-path-for-BFSI-Industry.pdf"
    //                 });

    //             } else {
    //                 alert('There was a problem with the request.');
    //             }
    //         }
    //     };
    //     xhttp.send("name=" + event.target.name.value +
    //     "&youremail=" + event.target.email.value +
    //     "&coursename=" + coursename)
    // }

    // const whitp4 = async event => {
    //     const coursename = 'White Paper';
    //     event.preventDefault()
    //     document.getElementById("submitbuttonform4").value = "Submitting...."
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onload = function () {
    //         console.log(this.responseText);
    //     }
    //     xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback');
    //     xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    //     xhttp.onreadystatechange = function () {
    //         if (xhttp.readyState == 4) {
    //             if (xhttp.status == 200) {
    //                 document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
    //                 document.getElementById("contactForm").reset();
    //                 document.getElementById("showlabel").style.display = "block";
    //                 window.setTimeout(function () {
    //                     window.location.href = "/assets/pdf/what-will-spur-BFSI-industry-to-its-next-peak.pdf"
    //                 });

    //             } else {
    //                 alert('There was a problem with the request.');
    //             }
    //         }
    //     };
    //     xhttp.send("name=" + event.target.name.value +
    //     "&youremail=" + event.target.email.value +
    //     "&coursename=" + coursename)
    // }

    // const whitp5 = async event => {
    //     const coursename = 'White Paper';
    //     event.preventDefault()
    //     document.getElementById("submitbuttonform4").value = "Submitting...."
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onload = function () {
    //         console.log(this.responseText);
    //     }
    //     xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback');
    //     xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    //     xhttp.onreadystatechange = function () {
    //         if (xhttp.readyState == 4) {
    //             if (xhttp.status == 200) {
    //                 document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
    //                 document.getElementById("contactForm").reset();
    //                 document.getElementById("showlabel").style.display = "block";
    //                 window.setTimeout(function () {
    //                     window.location.href = "/assets/pdf/culture-needed-in-an-airline-Industry-to-ride-the-talent-shortage.pdf"
    //                 });

    //             } else {
    //                 alert('There was a problem with the request.');
    //             }
    //         }
    //     };
    //     xhttp.send("name=" + event.target.name.value +
    //     "&youremail=" + event.target.email.value +
    //     "&coursename=" + coursename)
    // }

    // const whitp6 = async event => {
    //     const coursename = 'White Paper';
    //     event.preventDefault()
    //     document.getElementById("submitbuttonform4").value = "Submitting...."
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onload = function () {
    //         console.log(this.responseText);
    //     }
    //     xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback');
    //     xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    //     xhttp.onreadystatechange = function () {
    //         if (xhttp.readyState == 4) {
    //             if (xhttp.status == 200) {
    //                 document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
    //                 document.getElementById("contactForm").reset();
    //                 document.getElementById("showlabel").style.display = "block";
    //                 window.setTimeout(function () {
    //                     window.location.href = "/assets/pdf/explain-nature-of-leadership-required-in-a-bfsi-industry.pdf"
    //                 });

    //             } else {
    //                 alert('There was a problem with the request.');
    //             }
    //         }
    //     };
    //     xhttp.send("name=" + event.target.name.value +
    //     "&youremail=" + event.target.email.value +
    //     "&coursename=" + coursename)
    // }

    // const whitp7 = async event => {
    //     const coursename = 'White Paper';
    //     event.preventDefault()
    //     document.getElementById("submitbuttonform4").value = "Submitting...."
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onload = function () {
    //         console.log(this.responseText);
    //     }
    //     xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback');
    //     xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    //     xhttp.onreadystatechange = function () {
    //         if (xhttp.readyState == 4) {
    //             if (xhttp.status == 200) {
    //                 document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
    //                 document.getElementById("contactForm").reset();
    //                 document.getElementById("showlabel").style.display = "block";
    //                 window.setTimeout(function () {
    //                     window.location.href = "/assets/pdf/hr-manage-fear-of-job-loss-among-employees-given-the-lay-off-culture-prevalent-in-it-industry-currently.pdf"
    //                 });

    //             } else {
    //                 alert('There was a problem with the request.');
    //             }
    //         }
    //     };
    //     xhttp.send("name=" + event.target.name.value +
    //     "&youremail=" + event.target.email.value +
    //     "&coursename=" + coursename)
    // }

    return (
        <>
            <Head>
                <title>Consulting Practice - BYLD Group</title>
                <link rel="canonical" href="https://byldgroup.com/cp" />
                <meta name="description" content="Welcome to BYLD Group! Join the BYLD Group Partner network, and become our business partner to maximize your growth opportunities. We are the largest group in South Asia offering HR and business productivity solutions for individuals, teams and organizations. Served 300 of 500 Fortune companies. Founded in 1998, backed by 1000+ years of accumulated professional… Continue reading Join our Partner network LP Ab Testing" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            {/* <Modal className='toppc mwc500' toggle={() => setModalOpen1(!modalOpen1)} isOpen={modalOpen1} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen1(!modalOpen1)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc" onSubmit={whitp1}>
                        <h4>Want to get access to the Whitepaper?</h4>
                        <h5>Please Register to download </h5>
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Your Name*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Your Work Email*" required />
                        </div>                        
                        <div class="col-md-12 text-center">
                        <input id='submitbuttonform1' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal>

            <Modal className='toppc mwc500' toggle={() => setModalOpen2(!modalOpen2)} isOpen={modalOpen2} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen2(!modalOpen2)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc" onSubmit={whitp2}>
                    <h4>Want to get access to the Whitepaper?</h4>
                        <h5>Please Register to download </h5>
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Your Name*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Your Work Email*" required />
                        </div>                        
                        <div class="col-md-12 text-center">
                        <input id='submitbuttonform2' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal>

            <Modal className='toppc mwc500' toggle={() => setModalOpen3(!modalOpen3)} isOpen={modalOpen3} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen3(!modalOpen3)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc" onSubmit={whitp3}>
                    <h4>Want to get access to the Whitepaper?</h4>
                        <h5>Please Register to download </h5>
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Your Name*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Your Work Email*" required />
                        </div>                        
                        <div class="col-md-12 text-center">
                        <input id='submitbuttonform3' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal>

            <Modal className='toppc mwc500' toggle={() => setModalOpen4(!modalOpen4)} isOpen={modalOpen4} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen4(!modalOpen4)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc" onSubmit={whitp4}>
                    <h4>Want to get access to the Whitepaper?</h4>
                        <h5>Please Register to download </h5>
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Your Name*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Your Work Email*" required />
                        </div>                        
                        <div class="col-md-12 text-center">
                        <input id='submitbuttonform4' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal>

            <Modal className='toppc mwc500' toggle={() => setModalOpen5(!modalOpen5)} isOpen={modalOpen5} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen5(!modalOpen5)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc" onSubmit={whitp5}>
                    <h4>Want to get access to the Whitepaper?</h4>
                        <h5>Please Register to download </h5>
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Your Name*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Your Work Email*" required />
                        </div>                        
                        <div class="col-md-12 text-center">
                        <input id='submitbuttonform4' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal>

            <Modal className='toppc mwc500' toggle={() => setModalOpen6(!modalOpen6)} isOpen={modalOpen6} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen6(!modalOpen6)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc" onSubmit={whitp6}>
                    <h4>Want to get access to the Whitepaper?</h4>
                        <h5>Please Register to download </h5>
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Your Name*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Your Work Email*" required />
                        </div>                        
                        <div class="col-md-12 text-center">
                        <input id='submitbuttonform4' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal>

            <Modal className='toppc mwc500' toggle={() => setModalOpen7(!modalOpen7)} isOpen={modalOpen7} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen7(!modalOpen7)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc" onSubmit={whitp7}>
                    <h4>Want to get access to the Whitepaper?</h4>
                        <h5>Please Register to download </h5>
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Your Name*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Your Work Email*" required />
                        </div>                        
                        <div class="col-md-12 text-center">
                        <input id='submitbuttonform4' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal> */}

<div class="rs-breadcrumbs cpbg">
                <div class="container">
                    <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
                        <ul>
                            <li>
                                <a href="/">
                                    <span>Home</span>
                                </a>
                                <span class="separator">/</span>
                            </li>
                            <li>
                                <a href="/cp">
                                    <span>Consulting Practice</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-8'>
                            <div class="breadcrumbs-inner">                                
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                Consulting Practice
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className='cplps1 ptt-50 pbb-50 positionrelative'>
                <div className='container'>
                    <div className='row align-items-center zindx'>
                        <div className='col-sm-6'>
                            <div>
                                <h1>We Diagnose Your Problems, Curate an Action Plan, and Offer Bespoke Solutions for Actionable Results</h1>
                                <p>BYLD Group, a leading multinational organization, is working closely with various Fortune 500 and Business World Top 1000 companies through its technology-enabled HR, leadership, assessment, and business productivity solutions.</p>
                                <a href='#GetinTouch'>Explore our whitepapers</a>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                            <img src="/assets/img/cpb.png" />
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>                   
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/orangearrow1.png" />
                    </div>

                </div>
            </section>

            <section id="rs-team" className='style2 solutionrow ptt-60 pbb-60 cpteambg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <h2 class="title pbb-100 mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP pbb-30">Know Our Consulting Practitioners (CPs):</h2>
                        </div>
                    </div>
                    <div className='row zindx'>
                        <div className='col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <div className='innerteamc mbb-70'>
                                        <div className='teamimgc1'>
                                            <a href="/team/amarvijayy-taandur"><img src="/assets/img/team/amar1.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a href="/team/amarvijayy-taandur">Amarvijayy Taandur</a>
                                            </div>
                                            <span className="post">Principal Advisor - Civil, Infra, Heavy Engineering, Power and Automotive</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/amarvijayy-taandur-9359334/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className='col-sm-4'>
                                    <div className='innerteamc mbb-70'>
                                        <div className='teamimgc1'>
                                            <a href="/team/ronald-soans"><img src="/assets/img/team/ronald1.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a href="/team/ronald-soans">Ronald Soans</a>
                                            </div>
                                            <span className="post">Principal Advisor - IT, ITES, <br></br>Consulting and BFSI</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/ronald-soans-4b703412/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className='col-sm-3'>
                                    <div className='innerteamc mbb-70'>
                                        <div className='teamimgc1'>
                                            <a href="/team/meghna-goyal"><img src="/assets/img/team/meghna.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a href="/team/meghna-goyal">Meghna Goyal</a>
                                            </div>
                                            <span className="post">Principal Advisor - Pharma, <br></br>FMCG, E-commerce</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/meghna-goyal-442560b/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}

                                <div className='col-sm-4'>
                                    <div className='innerteamc mbb-70'>
                                        <div className='teamimgc1'>
                                            <a href="/team/monica-sharma"><img src="/assets/img/team/monica.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a href="/team/monica-sharma">Monica Sharma</a>
                                            </div>
                                            <span className="post">Principal Advisor - Banking, Retail, Hospitality, Media and Travel</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="#"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
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

            {/* <section className='cplps2 ptt-50 pbb-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div class="sec-title3 text-center mb-30">
                                <h2 class="title color2 font345">Know Our Consulting Practitioners (CPs):</h2>
                                <div class="heading-border-line center-style"></div>
                            </div>
                        </div>
                        
                        <div className='col-sm-3'>
                            <a href='/team/amarvijayy-taandur'>
                            <div className='teamf'>
                                <div className='teamimgc'>
                                    <img src="/assets/img/team/amar1.jpg" alt="image" />
                                </div>
                                <div className='teamfro'>
                                    <h3>Amarvijayy Taandur</h3>
                                    <h4>Principal Advisor - Civil, Infra, Heavy Engineering, Power and Automotive</h4>
                                </div>
                            </div>
                            </a>
                        </div>

                        <div className='col-sm-3'>
                            <a href='/team/ronald-soans'>
                            <div className='teamf'>
                                <div className='teamimgc'>
                                    <img src="/assets/img/team/ronald1.jpg" alt="image" />
                                </div>
                                <div className='teamfro'>
                                    <h3>Ronald Soans</h3>
                                    <h4>Principal Advisor - IT, ITES, Consulting and BFSI</h4>
                                </div>
                            </div>
                            </a>
                        </div>

                        <div className='col-sm-3'>
                            <a href='/team/meghna-goyal'>
                            <div className='teamf'>
                                <div className='teamimgc'>
                                    <img src="/assets/img/team/meghna.jpg" alt="image" />
                                </div>
                                <div className='teamfro'>
                                    <h3>Meghna Goyal</h3>
                                    <h4>Principal Advisor - Pharma, FMCG, E-commerce</h4>
                                </div>
                            </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section> */}



            <section className='jopn1 ptt-50 pbb-50 cplps3'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12'>
                            <div class="sec-title3 text-center mb-30">
                                <h2 class="title color2 font345">Stuck with your business? Ask our seasoned industry experts</h2>
                                <div class="heading-border-line center-style"></div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='boxshd borderr mtt-30'>
                                <div className="bannerform">
                                    <p className='cplpf'>Fill out the form below, and we will reach out to you within 24 hours.</p>
                                    <form id="contact-form" className='clientcornner' onSubmit={registerUser}>
                                        <div className="row">
                                            <div className="col-lg-6 mb-12">
                                                <input type="text" name="fname" placeholder="First Name*" required />
                                            </div>
                                            <div className="col-lg-6 mb-12">
                                                <input type="email" name="email" placeholder="Work Email/Email*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input type="text" name="company" placeholder="Company Name*" required />
                                            </div>

                                            <div className="col-lg-12 mb-12">
                                                <input type="text" name="designation" placeholder="Designation*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <select name="howdidyouknowaboutus" required>
                                                    <option value="">Referred By</option>
                                                    <option value="Email">Email</option>
                                                    <option value="LinkedIn">LinkedIn</option>
                                                    <option value="Facebook">Facebook</option>
                                                    <option value="Instagram">Instagram</option>
                                                    <option value="Twitter">Twitter</option>
                                                </select>
                                            </div>

                                            <div className="col-lg-12 mb-12">
                                                <textarea className="from-control" name="leadsquared_Notes" placeholder="Questions/Comments:"></textarea>
                                            </div>

                                            <div className="col-lg-12 mb-12">
                                                <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Get help now" />
                                            </div>
                                            <p id="showlabel" style={{ display: "none" }}></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='pll-50'>
                                <img src="/assets/img/co/c1.png" alt="image" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>


           <section id='GetinTouch' className='ptt-50 pbb-70 cplps4 positionrelative'>
                <div className="container">
                    <div className="row zindx">
                        <div className='col-sm-12'>
                            <div class="sec-title3 text-center mb-30">
                                <h2 class="title color2 font345">Let Us Explore Our Professional Journey Together</h2>
                                <div class="heading-border-line center-style"></div>
                            </div>
                        </div>


                        <div className='col-sm-12 cld'>
                            <Slider {...settings}>
                            <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/pharmaceutical-sector.jpg' alt="books" />
                                        <a href='/cp/white-paper/pharmaceutical-sector'>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/embracing-a-customer-centric-mindset.png' alt="books" />
                                        <a href='/cp/white-paper/embracing-a-customer-centric-mindset'>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/fostering-culture-of-high-performance.jpg' alt="books" />
                                        <a href='/cp/white-paper/fostering-culture-of-high-performance'>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/the-indian-automotive-sector-has-been-witnessing-changing-trends.jpg' alt="books" />
                                        <a href='/cp/white-paper/the-indian-automotive-sector-has-been-witnessing-changing-trends'>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/the-indian-construction-industry-new-amarvijay-sir.jpg' alt="books" />
                                        <a href='/cp/white-paper'>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/driving-innovation.jpg' alt="books" />
                                        <a href='/cp/white-paper'>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/issues-in-healthcare.jpg' alt="books" />
                                        <a href='/cp/white-paper'>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/hr-managing-fear.jpg' alt="books" />
                                        <a href='/cp/white-paper'>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/culture-needed-in-an-airline-industry.jpg' alt="books" />
                                        <a href='/cp/white-paper'>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/challenges-in-it-industry-today.jpg' alt="books" />
                                        <a href='/cp/white-paper'>Download White Paper</a>
                                    </div>
                                </div>
                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src='/assets/img/white-paper/what-will-spur-bfsi-industry.jpg' alt="books" />
                                        <a href='/cp/white-paper'>Download White Paper</a>
                                        {/* <i class="blink fa fa-download" aria-hidden="true" onClick={() => setModalOpen7(!modalOpen7)}></i> */}
                                    </div>
                                </div>

                            </Slider>
                        </div>
                        {/* <div className='col-sm-4'>
                            <div className='aass'>
                                <a target="_blank" href='https://byldgroup.com/cruciallifechangingskills/assessment/gtd-assessment-marketing'>
                                    <img src="/assets/img/assessing.jpg" />                                   
                                </a>
                            </div>
                        </div> */}
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
















            {/* <section className='ptt-20 pbb-20'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font30">To get more insights, register for any of the upcoming sessions below:</h4>
                            </div>
                        </div>
                        <div className='clearfix'></div>



                        <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar 18th January 2023</span>
                            </div>
                            
                            <div className='eventbottom'>
                                <h3 className='hhd'>BYLD Partner Network Briefing</h3>
                                <h5>Time: 11:00 PM - 12:00 PM</h5>
                                <a className="eventbtn" href='#'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 15th February 2023</span>
                                </div>

                                <div className='eventbottom'>
                                    <h3 className='hhd'>BYLD Partner Network Briefing</h3>
                                    <h5>Time: 11:00 PM - 12:00 PM</h5>
                                    <a className="eventbtn" href='#'>REGISTER NOW</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}


        </>
    )
}


