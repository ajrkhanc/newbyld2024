import Head from "next/head";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";

export default function Home() {
  var settings = {
    dots: false,
    arrows: true,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var Coursec = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [modalOpen1, setModalOpen1] = React.useState(false);
  const [modalOpen2, setModalOpen2] = React.useState(false);
  const [modalOpen3, setModalOpen3] = React.useState(false);
  const [modalOpen4, setModalOpen4] = React.useState(false);
  const [modalOpen5, setModalOpen5] = React.useState(false);
  const [modalOpen6, setModalOpen6] = React.useState(false);

  const HomeForm = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post","https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/5/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
          document.getElementById("contactForm").reset();
          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href = "/cruciallifechangingskills/thank-you";
          }, 3000);
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "your-name=" +
        event.target.name.value +
        "&your-email=" +
        event.target.email.value +
        "&PhoneNumber=" +
        event.target.phone.value +
        "&your-subject=" +
        event.target.subject.value +
        "&your-message=" +
        event.target.message.value
    );
  };

  const ccmd2 = async (event) => {
    const coursename = "Crucial Conversations for Mastering Dialogue";
    event.preventDefault();
    document.getElementById("submitbuttonform1").value = "Submitting....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
          document.getElementById("contactForm").reset();
          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href =
              "/classets/pdf/course-overview-pdf-crucial-conversations-for-mastering-dialogue.pdf";
          });
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "name=" +
        event.target.name.value +
        "&youremail=" +
        event.target.email.value +
        "&coursename=" +
        coursename
    );
  };

  const gtd = async (event) => {
    const coursename = "Getting Things Done";
    event.preventDefault();
    document.getElementById("submitbuttonform2").value = "Submitting....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
          document.getElementById("contactForm").reset();
          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href =
              "/classets/pdf/course-overview-getting-things-done.pdf";
          });
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "name=" +
        event.target.name.value +
        "&youremail=" +
        event.target.email.value +
        "&coursename=" +
        coursename
    );
  };

  const cc1 = async (event) => {
    const coursename = "Crucial Conversations for Accountability";
    event.preventDefault();
    document.getElementById("submitbuttonform3").value = "Submitting....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
          document.getElementById("contactForm").reset();
          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href =
              "/classets/pdf/course-overview-pdf-crucial-conversations-for-accountability.pdf";
          });
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "name=" +
        event.target.name.value +
        "&youremail=" +
        event.target.email.value +
        "&coursename=" +
        coursename
    );
  };

  const poh = async (event) => {
    const coursename = "The Power of Habit";
    event.preventDefault();
    document.getElementById("submitbuttonform4").value = "Submitting....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
          document.getElementById("contactForm").reset();
          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href =
              "/classets/pdf/course-overview-pdf-the-power-of-habit.pdf";
          });
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "name=" +
        event.target.name.value +
        "&youremail=" +
        event.target.email.value +
        "&coursename=" +
        coursename
    );
  };

  const influncer = async (event) => {
    const coursename = "Influencer";
    event.preventDefault();
    document.getElementById("submitbuttonform5").value = "Submitting....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details.";
          document.getElementById("contactForm").reset();
          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href =
              "/classets/pdf/course-overview-pdf-influencer.pdf";
          });
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "name=" +
        event.target.name.value +
        "&youremail=" +
        event.target.email.value +
        "&coursename=" +
        coursename
    );
  };

  return (
    <>
      <Head>
    
       <title>Crucial Leaning | Crucial Life-Changing Skills</title>
       <meta name="robots" content="INDEX, FOLLOW" />  
      <meta name="description" content="We offer the best communication courses for leaders to ensure effective business communication through Influence skills training. To know more, check out the page." />
      <link rel="canonical" href="https://byldgroup.com/cruciallifechangingskills" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        
         <meta name="google-site-verification" content="OM6hSC8XO4ylFInFKwcHaWp5gFMt0Nn6aQ6A-eV7SWc" />
         {/* og tag */}

         <meta property="og:url" content="https://byldgroup.com/cruciallifechangingskills"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Crucial Leaning | Crucial Life-Changing Skills"/>
          <meta property="og:description" content="We offer the best communication courses for leaders to ensure effective business communication through Influence skills training. To know more, check out the page."/>
          <meta property="og:image" content="https://byldgroup.com/classets/img/cruciallifechangingskills-logo.svg"/>
        {/* TWITTER TAG */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@crucial__skills"/>
        <meta name="twitter:title" content="Crucial Leaning | Crucial Life-Changing Skills"/>
        <meta name="twitter:description" content="We offer the best communication courses for leaders to ensure effective business communication through Influence skills training. To know more, check out the page."/>
        <meta name="twitter:image:src" content="https://pbs.twimg.com/profile_images/1475415956583186432/v2nzALrw_400x400.jpg"/>
        <meta name="twitter:domain" content="https://byldgroup.com/cruciallifechangingskills"/>
        {/* itemProp TAG */}
        <meta itemProp="title" content="Crucial Leaning | Crucial Life-Changing Skills"/>
        <meta itemProp="description" content="We offer the best communication courses for leaders to ensure effective business communication through Influence skills training. To know more, check out the page."/>
        <meta itemProp="image" content="https://byldgroup.com/classets/img/cruciallifechangingskills-logo.svg"/>
        {/* script schema */}

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "WebSite",
                "name": "BYLD Crucial Skills",
                "url": "https://byldgroup.com/cruciallifechangingskills",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://byldgroup.com/cruciallifechangingskills/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }),
            }}
          />
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "BYLD Crucial Skills",
                "alternateName": "Crucial Learning",
                "url": "https://byldgroup.com/cruciallifechangingskills",
                "logo": "https://byldgroup.com/classets/img/cruciallifechangingskills-logo.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "18001021345",
                  "contactType": "customer service",
                  "contactOption": "TollFree",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                },
                "sameAs": [
                  "https://www.facebook.com/Cruciallifechangingskills",
                  "https://twitter.com/crucial__skills",
                  "https://www.instagram.com/cruciallifechangingskills/",
                  "https://www.youtube.com/channel/UCwpwP8sH7YBIFs4xJeID9uA",
                  "https://www.linkedin.com/company/crucial-life-changing-skills",
                  "https://byldgroup.com/cruciallifechangingskills"
                ]
              }),
            }}
          />

      </Head>

      <Modal
        className="toppc"
        toggle={() => setModalOpen1(!modalOpen1)}
        isOpen={modalOpen1}
        backdrop="static"
        keyboard={false}
      >
        <button
          aria-label="Close"
          className="close popcl"
          type="button"
          onClick={() => setModalOpen1(!modalOpen1)}
        >
          <span aria-hidden={true}>×</span>
        </button>

        <ModalBody>
          <form id="contactForm" class="row popupfc" onSubmit={ccmd2}>
            <h4>Please Register to download</h4>
            <div class="col-md-12">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Your Name*"
                required
              />
            </div>
            <div class="col-md-12">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Your Work Email*"
                required
              />
            </div>
            <div class="col-md-12">
              <input
                id="submitbuttonform1"
                class="formbtn"
                type="submit"
                value="Submit"
              />
            </div>
            <p id="showlabel" style={{ display: "none" }}></p>
          </form>
        </ModalBody>
      </Modal>

      <Modal
        className="toppc"
        toggle={() => setModalOpen2(!modalOpen2)}
        isOpen={modalOpen2}
        backdrop="static"
        keyboard={false}
      >
        <button
          aria-label="Close"
          className="close popcl"
          type="button"
          onClick={() => setModalOpen2(!modalOpen2)}
        >
          <span aria-hidden={true}>×</span>
        </button>

        <ModalBody>
          <form id="contactForm" class="row popupfc" onSubmit={gtd}>
            <h4>Please Register to download</h4>
            <div class="col-md-12">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Your Name*"
                required
              />
            </div>
            <div class="col-md-12">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Your Work Email*"
                required
              />
            </div>
            <div class="col-md-12">
              <input
                id="submitbuttonform2"
                class="formbtn"
                type="submit"
                value="Submit"
              />
            </div>
            <p id="showlabel" style={{ display: "none" }}></p>
          </form>
        </ModalBody>
      </Modal>

      <Modal
        className="toppc"
        toggle={() => setModalOpen3(!modalOpen3)}
        isOpen={modalOpen3}
        backdrop="static"
        keyboard={false}
      >
        <button
          aria-label="Close"
          className="close popcl"
          type="button"
          onClick={() => setModalOpen3(!modalOpen3)}
        >
          <span aria-hidden={true}>×</span>
        </button>

        <ModalBody>
          <form id="contactForm" class="row popupfc" onSubmit={cc1}>
            <h4>Please Register to download</h4>
            <div class="col-md-12">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Your Name*"
                required
              />
            </div>
            <div class="col-md-12">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Your Work Email*"
                required
              />
            </div>
            <div class="col-md-12">
              <input
                id="submitbuttonform3"
                class="formbtn"
                type="submit"
                value="Submit"
              />
            </div>
            <p id="showlabel" style={{ display: "none" }}></p>
          </form>
        </ModalBody>
      </Modal>

      <Modal
        className="toppc"
        toggle={() => setModalOpen4(!modalOpen4)}
        isOpen={modalOpen4}
        backdrop="static"
        keyboard={false}
      >
        <button
          aria-label="Close"
          className="close popcl"
          type="button"
          onClick={() => setModalOpen4(!modalOpen4)}
        >
          <span aria-hidden={true}>×</span>
        </button>

        <ModalBody>
          <form id="contactForm" class="row popupfc" onSubmit={poh}>
            <h4>Please Register to download</h4>
            <div class="col-md-12">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Your Name*"
                required
              />
            </div>
            <div class="col-md-12">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Your Work Email*"
                required
              />
            </div>
            <div class="col-md-12">
              <input
                id="submitbuttonform4"
                class="formbtn"
                type="submit"
                value="Submit"
              />
            </div>
            <p id="showlabel" style={{ display: "none" }}></p>
          </form>
        </ModalBody>
      </Modal>

      <Modal
        className="toppc"
        toggle={() => setModalOpen5(!modalOpen5)}
        isOpen={modalOpen5}
        backdrop="static"
        keyboard={false}
      >
        <button
          aria-label="Close"
          className="close popcl"
          type="button"
          onClick={() => setModalOpen5(!modalOpen5)}
        >
          <span aria-hidden={true}>×</span>
        </button>

        <ModalBody>
          <form id="contactForm" class="row popupfc" onSubmit={influncer}>
            <h4>Please Register to download</h4>
            <div class="col-md-12">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Your Name*"
                required
              />
            </div>
            <div class="col-md-12">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Your Work Email*"
                required
              />
            </div>
            <div class="col-md-12">
              <input
                id="submitbuttonform5"
                class="formbtn"
                type="submit"
                value="Submit"
              />
            </div>
            <p id="showlabel" style={{ display: "none" }}></p>
          </form>
        </ModalBody>
      </Modal>

      {/* <Modal
        className="toppc modal-lg popUpModal "
        toggle={() => setModalOpen6(!modalOpen6)}
        isOpen={modalOpen6}
        backdrop="static"
        keyboard={false}
      >
        <button
          arffasia-label="Close"
          className="close popcl"
          type="button"
          onClick={() => setModalOpen6(!modalOpen6)}
        >
          <span aria-hidden={true}>×</span>
        </button>

 <ModalBody>
          <div class="row">
            <div class="col-md-8">
              <div class="text-center">
                <h4 class="text-danger">Register Now and Avail 10% OFF</h4>
                <p>
                  Register by December 31 on any course and get 10% OFF. First
                  20 registrations will get an extra 5% discount{" "}
                </p>

                <a class="btn btn-sm rounded-pill btn-danger" href="#">
                  See In-Person Courses
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <img
                class="img-fluid"
                src="classets/img/Human_In-Person-Teaching_Color.webp"
              ></img>
            </div>
          </div>
        </ModalBody>
      </Modal> */}

      <section class="hero-section pad0">
        <div class="container-fluid">
          <div class="row">
            <div className="col-sm-12 pad0 videc">
              <div className="mainvd">
                <video
                  src="/classets/video/clh.mp4"
                  autoPlay
                  muted
                  loop
                  type="video/mp4"
                ></video>
              </div>

              <div className="ffffb">
                <h1>Learn Life-Transforming Skills</h1>
                <p>
                  Enrol in our award-winning trainings and learn how to handle
                  the most<br></br>crucial challenges of life and work.
                </p>
                <br />
                <h6>
                  <a
                    class="btn1"
                    href="/cruciallifechangingskills/browse-courses/"
                  >
                    Browse Courses
                  </a>
                  <a class="btn2" href="/cruciallifechangingskills/contact-us">
                    Get Started
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="darkbg patt-70 pabb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="font50 cblack">What’s New at Crucial Learning</h2>
              <p className="font24 pabb-20">
                From webinars to courses, assessments to case studies, find the
                latest <br></br>from our team to foster greatness in your teams.
              </p>
            </div>
            <div className="col-sm-4">
              <div className="incbox">
                <img src="classets/img/new/justinhale-cruciallearning.jpg" />
                <h3>
                  Free GTD<sup>®</sup> Miniseries
                </h3>
                <p>
                  Learn skills to decrease distraction and improve focus in four
                  short video lessons with GTD expert Justin Hale.
                </p>
                <a className="regularbtn" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="incbox">
                <img src="classets/img/clinf.jpg" />
                <h3>New Leadership Course</h3>
                <p>
                  Explore our new leadership course—find assessments, webinars,
                  even a free miniseries with Joseph Grenny.
                </p>
                <a
                  className="regularbtn"
                  href="/cruciallifechangingskills/influencer"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="incbox">
                <img src="classets/img/new/cl-3.jpg" />
                <h3>Can You Disagree Respectfully?</h3>
                <p>
                  When faced with an argument, do you dig in, or give in? Shut
                  down, or lash out? Take the Style Under Stress assessment and
                  find out.
                </p>
                <a
                  className="regularbtn"
                  href="/cruciallifechangingskills/assessment/style-under-stress-assessment"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chooseyp patt-100 pabb-60">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center bbefor pabb-100">
              <h2 className="font50 cwhite">Choose Your Path</h2>
              <div className="body_text uses-wysiwyg">
                <p className="font24 pabb-20 cwhite">
                  To ensure you and your organization beneﬁts from our
                  world-renowned training, we offer courses in ﬂexible formats
                  including in person, virtually, or on-demand—or you can blend
                  them for a unique and engaging learning experience to learn
                  Effective Communication Skills.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="row">
                <div class="col-md-4">
                  <div class="text-center chooseypbox">
                    <img
                      className="imgmauto img70 pbb-30"
                      src="classets/img/icon-on-demand-1.svg"
                    />
                    <h4>On Demand</h4>
                    <p>Learn at your own pace online.</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="text-center chooseypbox bgorangelight">
                    <img
                      className="imgmauto img70 pbb-30"
                      src="classets/img/icon-virtual-1.svg"
                    />
                    <h4>Virtual</h4>
                    <p>Join one of our instructors online.</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="text-center chooseypbox bgsky">
                    <img
                      className="imgmauto img70 pbb-30"
                      src="classets/img/icon-in-person.svg"
                    />
                    <h4>In Person</h4>
                    <p>Attend a classroom course.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="darkbg patt-70 pabb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <Slider {...settings}>
                <div className="homesl">
                  <h2 className="font50 cblack">New GTD Course</h2>
                  <p className="font24 pabb-20">
                    We’ve updated everything from videos to learner guides to
                    course content. <br></br>See what’s new in Getting Things
                    Done.
                  </p>
                  <a className="regularbtn" href="#">
                    Learn More
                  </a>
                </div>
                <div className="homesl">
                  <h2 className="font50 cblack">
                    Crucial Conversations for Healthcare
                  </h2>
                  <p className="font24 pabb-20">
                    Crucial Conversations for Mastering Dialogue is now
                    available as a healthcare course, featuring lessons,{" "}
                    <br></br>scenarios, and exercises that address the
                    challenges healthcare professionals face.
                  </p>
                  <a className="regularbtn" href="#">
                    Learn More
                  </a>
                </div>
                <div className="homesl">
                  <h2 className="font50 cblack">Global Impact</h2>
                  <p className="font24 pabb-20">
                    Our work has been translated into more than 20 languages,
                    and people around the world learn <br></br>our skills
                    through partners in 27 countries.
                  </p>
                  <a className="regularbtn" href="#">
                    See Partners
                  </a>
                </div>
                <div className="homesl">
                  <h2 className="font50 cblack">We Are Crucial Learning</h2>
                  <p className="font24 pabb-20">
                    Formerly VitalSmarts, our new brand and redesigned courses
                    make <br></br>timeless skills more inclusive, flexible, and
                    accessible.
                  </p>
                  <a className="regularbtn" href="#">
                    Learn More
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="blackbg fullbefor prelative">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="blackboxl">
                <h2 className="blh21">
                  <i>Learning that Changes Behavior</i>
                </h2>
                <h2 className="blh22">167%</h2>
                <p>
                  Employees at MaineGeneral Health were 167% more likely to
                  speak up and resolve problems with colleagues after learning
                  the skills taught in Crucial Conversations<sup>®</sup> for
                  Mastering Dialogue.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="blackboxl">
                <h2 className="blh22">40 MINS</h2>
                <p>
                  Nine of ten Getting Things Done<sup>®</sup> graduates report
                  permanently changing a time-management behavior and saving an
                  average of 40 minutes every day for more focused work.
                </p>
                <h2 className="blh22">$7,500</h2>
                <p>
                  Our research shows that every successful Crucial Conversation
                  could save the organization an average of $7,500.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="darkbg patt-70 pabb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <Slider {...settings}>
                <div className="homesl">
                  <h2 className="font50 cblack">New GTD Course</h2>
                  <p className="font24 pabb-20">
                    We’ve updated everything from videos to learner guides to
                    course content. <br></br>See what’s new in Getting Things
                    Done.
                  </p>
                  <a className="regularbtn" href="#">
                    Learn More
                  </a>
                </div>
                <div className="homesl">
                  <h2 className="font50 cblack">
                    Crucial Conversations for Healthcare
                  </h2>
                  <p className="font24 pabb-20">
                    Crucial Conversations for Mastering Dialogue is now
                    available as a healthcare course, featuring lessons,{" "}
                    <br></br>scenarios, and exercises that address the
                    challenges healthcare professionals face.
                  </p>
                  <a className="regularbtn" href="#">
                    Learn More
                  </a>
                </div>
                <div className="homesl">
                  <h2 className="font50 cblack">Global Impact</h2>
                  <p className="font24 pabb-20">
                    Our work has been translated into more than 20 languages,
                    and people around the world learn <br></br>our skills
                    through partners in 27 countries.
                  </p>
                  <a className="regularbtn" href="#">
                    See Partners
                  </a>
                </div>
                <div className="homesl">
                  <h2 className="font50 cblack">We Are Crucial Learning</h2>
                  <p className="font24 pabb-20">
                    Formerly VitalSmarts, our new brand and redesigned courses
                    make <br></br>timeless skills more inclusive, flexible, and
                    accessible.
                  </p>
                  <a className="regularbtn" href="#">
                    Learn More
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="mthemebg custompad">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="font50 cwhite pabb-50">START YOUR JOURNEY</h2>
              <a className="regularbtnwhite" href="#">
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="blackbg prelative pabb-100 patt-80 courseal">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="font50 cwhite pabb-50">Featured Courses</h2>
              <Slider {...Coursec}>
                <div className="ours">
                  <div className="innerbc">
                    <img src="/classets/img/ccmd.jpg" />
                    <span className="forbgs"></span>
                  </div>
                  <div className="inerbtnccmd">
                    <div className="row">
                      <div className="col rights3">
                        <a
                          target="_blank"
                          className="cc12btn"
                          href="/cruciallifechangingskills/assessment/style-under-stress-assessment"
                        >
                          Assessment
                        </a>
                      </div>
                      <div className="col lefts3">
                        <a
                          className="cc12btn"
                          onClick={() => setModalOpen1(!modalOpen1)}
                        >
                          Download Preview
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ours">
                  <div className="innerbc">
                    <img src="/classets/img/gtd.jpg" />
                    <span className="forbgs"></span>
                  </div>
                  <div className="inerbtnccmd">
                    <div className="row">
                      <div className="col rights3">
                        <a
                          target="_blank"
                          className="cc12btn cc12btntgtd"
                          href="/cruciallifechangingskills/assessment/gtd-assessment"
                        >
                          Assessment
                        </a>
                      </div>
                      <div className="col lefts3">
                        <a
                          className="cc12btn cc12btntgtd"
                          onClick={() => setModalOpen2(!modalOpen2)}
                        >
                          Download Prevview
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ours">
                  <div className="innerbc">
                    <img src="/classets/img/cc.jpg" />
                    <span className="forbgs"></span>
                  </div>
                  <div className="inerbtnccmd">
                    <div className="row">
                      <div className="col rights3">
                        <a
                          target="_blank"
                          className="cc12btn"
                          href="/cruciallifechangingskills/assessment/what-would-you-do-assessment"
                        >
                          Assessment
                        </a>
                      </div>
                      <div className="col lefts3">
                        <a
                          className="cc12btn"
                          onClick={() => setModalOpen3(!modalOpen3)}
                        >
                          Download Prevview
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ours">
                  <div className="innerbc">
                    <img src="/classets/img/tpoh.jpg" />
                    <span className="forbgs"></span>
                  </div>
                  <div className="inerbtnccmd">
                    <div className="row">
                      <div className="col rights3">
                        <a
                          target="_blank"
                          className="cc12btn cc12btntpoh"
                          href="#"
                        >
                          Assessment
                        </a>
                      </div>
                      <div className="col lefts3">
                        <a
                          className="cc12btn cc12btntpoh"
                          onClick={() => setModalOpen4(!modalOpen4)}
                        >
                          Download Prevview
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ours">
                  <div className="innerbc">
                    <img src="/classets/img/inc.jpg" />
                    <span className="forbgs"></span>
                  </div>
                  <div className="inerbtnccmd">
                    <div className="row">
                      <div className="col rights3">
                        <a
                          target="_blank"
                          className="cc12btn cc12btninc"
                          href="/cruciallifechangingskills/assessment/influencer-assessment"
                        >
                          Assessment
                        </a>
                      </div>
                      <div className="col lefts3">
                        <a
                          className="cc12btn cc12btninc"
                          onClick={() => setModalOpen5(!modalOpen5)}
                        >
                          Download Prevview
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section class="darkbg patt-60 pabb-60">
        <div class="container">
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-5">
              <h2 className="font50 cblack pabb-10">GET STARTED</h2>
              <p className="font20 pabb-20 cblack">
                Ready to bring our courses to your organization? <br></br>
                Complete the form to speak with a client advisor.
              </p>
            </div>
            <div class="col-md-5 newclf">
              <form id="contactForm" class="row" onSubmit={HomeForm}>
                <div class="col-md-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="First Name*"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Last Name*"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Work Email*"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    name="phone"
                    class="form-control"
                    maxlength="10"
                    minlength="10"
                    pattern="[0-9]*"
                    placeholder="Phone No.*"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    name="company"
                    class="form-control"
                    placeholder="Company*"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    name="designation"
                    class="form-control"
                    placeholder="Designation"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <button
                    id="submitbuttonform"
                    class="formbtnall"
                    type="submit"
                  >
                    Start the Conversation
                  </button>
                </div>

                <p id="showlabel" style={{ display: "none" }}></p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={() => setModalOpen6(!modalOpen6)}
        id="myButton"
        style={{ display: "none" }}
      >
        modalevent
      </button>
    </>
  );
}
