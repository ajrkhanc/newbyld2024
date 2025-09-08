import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import React from "react";
import Script from "next/script";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function Home() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const registerUser = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";

    const formData = new FormData(event.target); // Automatically gathers form data

    try {
      const response = await fetch(
        "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/499/feedback",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        if (result.status === "mail_sent") {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect with you within 24 working hours.";
          document.getElementById("showlabel").style.display = "block";
          setTimeout(() => {
            window.location.href = "/thank-you";
          }, 3000);
        } else {
          alert("There was a problem with the request.");
        }
      } else {
        alert("There was a problem with the request.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }

    document.getElementById("submitbuttonform").value = "Submit";
  };

  return (
    <>
      <Head>
        <title>Careers | BYLD Group</title>
        <link rel="canonical" href="https://byldgroup.com/contact-us" />
        <meta
          name="description"
          content="Willing to know about our E-learning portal? You can find various options for In house training as well. Connect today to know about it and also get to know about the Train The Trainer training for organizational development."
        />
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.8.2.js"
        ></script>
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
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/homemodule.css"
        />
      </Head>

      <div class="rs-breadcrumbs aboutusbreadcrum">
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
                <a href="/careers/">
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-7">
              <div class="breadcrumbs-inner">
                <span class="watermark ">Careers</span>
                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                  Careers
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="solutionrow ptt-60 pbb-60">
        <div className="container">
          <div className="row zindx">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 zindx">
              <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                BYLD Group is the frontrunner organization in terms of being
                people-centric and is working toward transforming businesses and
                people’s lives. We are highly professional, competent, and
                determined to change how companies operate, leverage their
                resources, and optimally utilize their people and skills.
              </p>
              <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">
                Professional Life @BYLD Group
              </h2>
              <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                We believe in growing together with our employees, who have
                firmly stood behind us through our thick and thin times. Our
                organization follows the strong ethics of a healthy work culture
                where everyone can thrive, communicate, and grow without
                prejudice.
              </p>
              <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                We are eager to nurture a workplace environment that fosters
                innovation, shared purpose, empowerment, and continuous learning
                among our employees.
              </p>
            </div>
          </div>

          <div className="clearfix"></div>
          <div className="solutionarrowbox2">
            <img src="https://ik.imagekit.io/byld/BYLD/byldallasests/bluearrow1_IallzTm-61.webp" />
          </div>
        </div>
      </section>

      <div className="rs-about style2 logosl ptt-50 pbb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="pb-50">
                <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">
                  BYLD Awards{" "}
                </h2>
                <br></br>
                <Slider {...settings}>
                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca8.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca9.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca10.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca11.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca19.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca18.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca17.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca16.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca1.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca2.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca3.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca4.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca5.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca7.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca12.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca13.jpg" />
                  </div>

                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca14.jpg" />
                  </div>
                  <div className="logoslider wow fadeInUp delay-0-2s animated animateUP">
                    <img src="/assets/img/new/events/ca15.jpg" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div id="rs-faq" class="rs-faq ptt-60 pbb-50 zinc">
        <div className="container">
          <div className="row ">
            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">
              Join the BYLD Family
            </h2>
            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
              Want to excel professionally, enhance your abilities, and
              strengthen a strong network of growth opportunities?{" "}
              <b>APPLY NOW!</b>
            </p>
          </div>

          <div className="row ptt-40">
            <div className="col-sm-12 faqss">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Paid Ads Specialist
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="cafaq">
                      <h4>JOB ROLE</h4>
                      <p>Paid Ads Specialist </p>
                    </div>
                    <div className="cafaq">
                      <h4>EXPERIENCE</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>2 + Years</li>
                          <li>Marketing</li>
                        </ul>
                      </div>
                    </div>

                    <div className="cafaq">
                      <h4>Job Description Role & Responsibilities:</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>
                            Develop and execute paid advertising strategies
                            across platforms (Google Ads, Facebook Ads, LinkedIn
                            Ads, etc.).
                          </li>
                          <li>
                            Conduct market research and analyze competitor
                            advertising activity.
                          </li>
                          <li>
                            Create and optimize ad copy, images, and landing
                            pages for maximum conversions.
                          </li>
                          <li>
                            {" "}
                            Manage and optimize campaign budgets, targeting, and
                            bidding.
                          </li>
                          <li>
                            {" "}
                            Monitor and report on campaign performance (CPC,
                            CTR, CPA, ROI)
                          </li>
                          <li>
                            {" "}
                            Collaborate with content, SEO, and social media
                            teams to ensure integrated digital marketing
                            strategies.
                          </li>
                          <li>
                            Stay up-to-date with platform updates, algorithm
                            changes, and industry trends.
                          </li>
                          <li>
                            {" "}
                            <strong>
                              {" "}
                              If interested, kindly share your CV at
                              talentacquisition.aak@byldgroup.com
                            </strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="cafaq">
                      <h4>Requirements:</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>
                            2+ years of experience in paid advertising (Google
                            Ads, Facebook Ads, LinkedIn Ads).
                          </li>
                          <li>
                            Proven track record of improving campaign
                            performance and ROI.
                          </li>
                          <li>
                            In-depth knowledge of paid advertising platforms and
                            formats (text, image, video).
                          </li>
                          <li>
                            Excellent analytical, problem-solving, and
                            communication skills.
                          </li>
                          <li>
                            Experience with advertising analytics tools (Google
                            Analytics, Facebook Ads Manager).
                          </li>
                          <li>
                            {" "}
                            Familiarity with CRM software and marketing
                            automation tools.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="cafaq">
                      <h4>Skills:</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>Paid advertising strategy and execution.</li>
                          <li>Ad copywriting and creative optimization.</li>
                          <li>Campaign management and optimization.</li>
                          <li>Analytics and reporting.</li>
                          <li>Communication and teamwork.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="cafaq">
                      <h4>WORK LOCATION</h4>
                      <p> Manesar Sec - 2</p>
                      <div className="caapplybtn">
                        <a className="cabtnc1" href="#">
                          SEE MORE
                        </a>
                        <a className="cabtnc2" href="#careerForm">
                          APPLY
                        </a>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Sr. Net Developer</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="cafaq">
                      <h4>JOB ROLE</h4>
                      <p>Sr. Net Developer </p>
                    </div>
                    <div className="cafaq">
                      <h4>EXPERIENCE</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>5 Years +</li>
                          <li>IT</li>
                        </ul>
                      </div>
                    </div>

                    <div className="cafaq">
                      <h4>Report to</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>Manager</li>
                        </ul>
                      </div>
                    </div>
                    <div className="cafaq">
                      <h4>Entity</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>Yoma Tech</li>
                        </ul>
                      </div>
                    </div>

                    <div className="cafaq">
                      <h4>Job Description Role & Responsibilities:</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>
                            Write clean, scalable code using .NET programming
                            languages
                          </li>
                          <li>
                            Remain up to date with the terminology, concepts and
                            best practices for coding mobile apps
                          </li>
                          <li>
                             Develop technical interfaces, specifications, and
                            architecture
                          </li>
                          <li>
                            Use and adapt existing web applications for apps
                          </li>
                          <li>Create and test software prototypes</li>
                          <li>Develop client displays and user interfaces</li>
                          <li>
                            Assist software personnel in handling project
                            related work and other requirements
                          </li>
                          <li>
                            Coordinate with other software professionals and
                            developers
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="cafaq">
                      <h4>Required Skills :</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>
                            Exposure to .NET Frameworks 4.0/4.5 and Dotnet Core
                          </li>
                          <li>
                            Minimum 5+ year experience in .NET Dot Net Core, MVC
                            4.0/5.0, SQL &amp;amp; C#
                          </li>
                          <li>
                             Sound knowledge in Razor syntax, attribute-based
                            routing, server, and client-side validations,
                            partial views
                          </li>
                          <li>Experience in REST services e.g. Web API</li>
                          <li>
                            Adequate knowledge and experience in developing web
                            applications
                          </li>
                          <li>
                            Proficiency in programming in C# with knowledge of
                            advanced subjects like LINQ, parallel
                          </li>
                          <li>programming, Generics</li>
                          <li>
                            Must have worked on any of the ORM technologies like
                            Entity Framework, Dapper, etc.
                          </li>
                          <li>Experience in SQL Server 2008 and above</li>
                          <li>
                            Knowledge of client-side tools like JavaScript,
                            JQuery, HTML, CSS
                          </li>
                          <li>
                            Ability to write SQL queries, create stored
                            procedures, functions, views
                          </li>
                          <li>Knowledge of unit testing</li>
                          <li>Must have worked on 3-tier applications</li>
                        </ul>
                      </div>
                    </div>

                    <div className="cafaq">
                      <h4>Mandatory Skills:</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>
                            .NET Dot Net Core, MVC 4.0/5.0, SQL,Ado.Net
                            &amp;amp; C#
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="cafaq">
                      <h4>Qualifications:</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>
                            Min. Bachelor’s /Master’s degree in Technology
                          </li>
                          <li>
                            If you are an energetic and ambitious individual
                            with a background, we invite you to apply and be a
                            partof our dynamic team
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="cafaq">
                      <h4>Working conditions</h4>
                      <p>
                        BYOD (bring your own device policy)- candidate will be
                        eligible for monthly allowances apart from CTC for using
                        their own assets/ devices.
                      </p>
                    </div>

                    <div className="cafaq">
                      <h4>Why join BYLD:</h4>
                      <h4 className="mtt-5">Perks &amp; Benefits:</h4>
                      <div className="rs-estimate">
                        <ul className="estimate-info mtt-5">
                          <li>
                            Learn directly from industry experts with 20+ years
                            of experience
                          </li>
                          <li>Professional and Healthy work atmosphere</li>

                          <li>
                            Gain experience in world class management practices
                          </li>
                          <li>
                            Health Insurance Job role &amp; Skills trainings
                          </li>
                          <li>
                            Wide range of Rewards &amp; Recognition programs
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="cafaq">
                      <h4>WORK LOCATION</h4>
                      <p> Gurgaon</p>
                      <div className="caapplybtn">
                        <a className="cabtnc1" href="#">
                          SEE MORE
                        </a>
                        <a className="cabtnc2" href="#careerForm">
                          APPLY
                        </a>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container ptt-60 pbb-60">
        <div className="row ">
          <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">
            Join the BYLD Family
          </h2>
          <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
            Want to excel professionally, enhance your abilities, and strengthen
            a strong network of growth opportunities? <b>APPLY NOW!</b>
          </p>
        </div>

        {/* ✅ Keka Jobs Embed */}
        <Script id="keka-config" strategy="afterInteractive">
          {`
            window.khConfig = {
              identifier: '2eb863de-a5e4-4ffc-89f3-c05e44ce3a18',
              domain: 'https://byld.keka.com/careers/',
              targetContainer: '#khembedjobs'
            }
          `}
        </Script>
        <Script
          src="https://byld.keka.com/careers/api/embedjobs/js/2eb863de-a5e4-4ffc-89f3-c05e44ce3a18"
          strategy="afterInteractive"
          defer
        />
        <div id="khembedjobs"></div>
      </div>

      <div id="careerForm" class="homecon ptt-60">
        <div class="container">
          <div className="row">
            <div className="col-sm-3">
              <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">
                Want to Grow with Us?
              </h2>
            </div>
            <div className="col-sm-9">
              <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                If you want to enjoy an impeccable career growth or shape your
                career in the right direction, join our corporate journey. Fill
                out our form, and we will quickly get in touch with you.
              </p>
            </div>
          </div>

          <div class="row y-middle">
            <div class="col-lg-5 md-mb-50">
              <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
                <img src="/assets/img/homeb/contactl.png" alt="Contact" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="contact-wrap">
                <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                  <form
                    id="contact-form"
                    className="clientcornner ptt-40 pbb-20"
                    onSubmit={registerUser}
                  >
                    <div className="row">
                      <div className="col-sm-6 mb-12">
                        <input
                          className="borrr"
                          type="text"
                          name="name"
                          placeholder="Enter Name*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          className="borrr"
                          type="email"
                          name="email"
                          placeholder="Enter Email*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          className="borrr"
                          type="text"
                          name="phone"
                          maxlength="10"
                          minlength="10"
                          pattern="[0-9]*"
                          placeholder="Phone No.*"
                          required
                        />
                      </div>

                      <div className="col-sm-6 mb-12">
                        <input
                          className="borrr"
                          type="text"
                          name="organization"
                          placeholder="Pre Organization*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          className="borrr"
                          type="text"
                          name="position"
                          placeholder="Position To Apply*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          className="borrr"
                          type="text"
                          name="ctc"
                          placeholder="Your current CTC*"
                          required
                        />
                      </div>

                      {/* <div className="col-sm-12 mb-12">
                        <select name="product" required>
                          <option value="">Select Position To Apply</option>
                          <option value="Paid Ads Specialist">
                          Paid Ads Specialist
                          </option>
                         
                        </select>
                      </div> */}

                      <div className="col-sm-12 mb-12">
                        <span>Upload Resume*</span>
                        <input
                          className="borrr"
                          type="file"
                          name="resume"
                          placeholder="Upload Resume*"
                          required
                        />
                      </div>

                      <div className="col-lg-12 mb-12">
                        <textarea
                          className="from-control"
                          name="leadsquared_Notes"
                          placeholder="Let us know what you are looking for."
                        ></textarea>
                      </div>
                      <div className="col-lg-12 mb-12">
                        <input
                          id="submitbuttonform"
                          className="clientcornnerbtn bord0"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                      <p id="showlabel" style={{ display: "none" }}></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
