import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import CountUp from "react-countup";
import React from "react";

export default function Home() {
  const registerUser = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/252/feedback"
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

          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href = "/thank-you";
          }, 3000);
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "name=" +
        event.target.name.value +
        "&email=" +
        event.target.email.value +
        "&tel=" +
        event.target.phone.value +
        "&location=" +
        event.target.Location.value +
        "&Company=" +
        event.target.organization.value +
        "&Designation=" +
        event.target.designation.value +
        "&Product=" +
        event.target.product.value
    );
  };

  const PopupRegisterd = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonformpopup").value =
      "Submitting form....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/22/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel1popup").innerHTML =
            "Thank you for your details. Check your inbox for more details.";

          document.getElementById("showlabel1popup").style.display = "block";
          setTimeout(function () {
            document.getElementById("popuphidec").style.display = "none";
          }, 3000);
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send("your-email=" + event.target.fmail.value);
  };

  var homeslider = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    cssEase: "linear",
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
          slidesToScroll: 2,
        },
      },
    ],
  };

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToScroll: 2,
        },
      },
    ],
  };

  var settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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

  return (
    <>
      <Head>
        <title>
          Corporate HR Solutions | BYLD Group – Expert Corporate Solutions for
          Performance & Growth
        </title>
        <link rel="canonical" href="https://byldgroup.com" />
        <link rel="icon" href="/favicon.ico" as="image" />
        <meta
          name="description"
          content="Discover BYLD’s Corporate HR Solutions tailored to enhance leadership, communication, and team performance. Explore our expert corporate solutions designed to align people strategies with business growth."
        />

        {/* Preload critical CSS */}
        {/* <link rel="preload" href="/assets/css/homemodule.css" as="style" /> */}
        <link
          rel="stylesheet"
          href="/assets/css/homemodule.css"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link rel="stylesheet" href="/assets/css/homemodule.css" />
        </noscript>
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/experiential-learning_q260h2aTw.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/experiential-learningw_QCXfDVFAYK.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/leadership-performance_NO5FCroQBk.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/leadership-performancew_jx1F-H4ux5.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/assessments_mTorLOz_F.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/assessmentsw_NcN1Urbw-v.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/bespoke_15L20XFTtC.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/bespokew_S0ZixVfkUD.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/coaching_1jP006fOBl.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/coachingw_68ZkCHybAM.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/staffing-search_tvTyJN41jb.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/staffing-searchw_CjnDHFJCd.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/bluearrow1_IallzTm-61.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/bluearrow1_IallzTm-61.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/quote__zGVpNdMC.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/av_F1t3RP1apA.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/ratting_eGQ1-rqTv.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/quote__zGVpNdMC.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/handb_A20SaYtbVo.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldteam_cTSpTwFFTc.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/contactl_jbAHOfbU3.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho1_0ZtYzLNsy.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho2_cMGKuHV8D.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho4_VozZqoqC-.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho3_hHuQrAHkVf.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho1smollSize_nrjDmkPAo.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho2smallSize_2JmH1qYAt.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho3smollSize__77iP6J_78.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho4smaollimg_cHQ2SZAcX.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/cpsmollImg_znOWn6AFz.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho1smollSizeOne_CVFteJy72W.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho2smallSize_2_-sjKtlxC9j.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho3smollSize__3_vS7JA0Wzk.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/byld/BYLD/byldallasests/byldho4smaollimg_4_D7qDCA28k.webp"
          as="image"
        />

        {/* Load jQuery only when needed */}
        <script async src="https://code.jquery.com/jquery-1.8.2.js"></script>

        {/* Inline critical jQuery functionality and defer loading */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
        $(document).ready(function() {
          var overlay = $('<div id="overlay"></div>');
          overlay.appendTo(document.body);
          setTimeout(function() {
            $('.popup').fadeIn();
          }, 30000);
          $('.close, .x').click(function() {
            $('.popup').hide();
            overlay.remove();
            return false;
          });
        });
      `,
          }}
        />
      </Head>

      <section className="bannersection">
        <Slider {...homeslider}>
          <div className="slide1c">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-7">
                  <div className="siderco ">
                    <h1>
                      Driving You toward Individual and Organizational
                      Excellence
                    </h1>
                    <p>
                      With our effective and proven business solutions, we can
                      transform your personal and professional life to help you
                      achieve the pinnacle of success.
                    </p>
                    <div className="btn-part ptt-10 pbb-30">
                      <Link href="/contact-us">
                        <a className="readon2">
                          Contact Now <div className="btn-arrow"></div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide2c">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="siderco ">
                    <h1>
                      Tailor Your Corporate Needs with Our Customized Solutions{" "}
                    </h1>
                    <p>
                      Based on a careful and detailed assessment of client
                      needs, we can curate corporate solutions to drive
                      excellence.
                    </p>
                    <div className="btn-part ptt-10 pbb-30">
                      <Link href="/contact-us">
                        <a className="readon2">
                          Contact Now <div className="btn-arrow"></div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide3c">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-7">
                  <div className="siderco ">
                    <h1>Empowering Businesses to Achieve Their Goals</h1>
                    <p>
                      We offer knowledge, skills, and expertise in various
                      domains to help companies build a sustainable future.
                    </p>
                    <div className="btn-part ptt-10 pbb-30">
                      <Link href="/contact-us">
                        <a className="readon2">
                          Contact Now <div className="btn-arrow"></div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide4c">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-7">
                  <div className="siderco">
                    <h1>Get Instant Global Credibility and Recognition</h1>
                    <p>
                      Our experienced mentors, trainers, and subject matter
                      experts will ensure you get the best corporate training
                      and exposure.
                    </p>
                    <div className="btn-part ptt-10 pbb-30">
                      <Link href="/contact-us">
                        <a className="readon2">
                          Contact Now <div className="btn-arrow"></div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className="ptt-50 pbb-30">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div class="sub-text supperh ">What can we offer?</div>
              <h2 class="title mb-0 md-pb-20 h2call ">
                Nurturing your full potential and abilities with our curated
                solutions
              </h2>
            </div>
            <div className="col-sm-6">
              <p class="mb-0 mtt-40 pall pbb-20  ajccm">
                We empower organizations and individuals to excel and achieve
                sustainable growth by offering them our expertise in learning
                and people solutions. Further, we are a one-stop destination for
                business productivity, leadership development, HR solutions,
                team performance, and other domains.
              </p>
              <div className="btn-part ptt-10 pbb-30 ">
                <Link href="#our-solutions">
                  <a className="readon2">
                    Learn More <div className="btn-arrow"></div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ptt-0 pbb-60">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 class="title mb-0 md-pb-20 h2call  pbb-30">
                Nurturing a Healthy and Inclusive Work Culture to Transform the{" "}
                <br></br>Lives of People Around Us{" "}
              </h2>
              <div class="rs-videos choose-video ">
                <div class="images-video fvideo">
                  <iframe
                    src="https://www.youtube.com/embed/LXd9OtxQQQA?si=fLtvIRyKpbvr6dCE"
                    title="YouTube video player"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                {/* <div class="animate-border">
                           <a class="popup-border" target="_blank" href="https://www.youtube.com/watch?v=LXd9OtxQQQA&t=16s">
                              <i class="fa fa-play"></i>
                           </a>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-solutions" className="solutionrow ptt-60 pbb-60">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h2 class="title mb-0 md-pb-20 h2call ">
                OUR<br></br>SOLUTIONS
              </h2>
            </div>
            <div className="col-sm-9">
              <p class="mb-0 pall pbb-20 ">
                BYLD Group is committed to making a difference to people and
                their organizations through its decades of excellence in
                business solutions, diverse corporate exposure, and skilled
                workforce. Our clients across various industries believe us in
                managing, developing, and aligning their corporate needs with
                their organizational goals and objectives.
              </p>
            </div>
          </div>
          <div className="row zindx">
            <div className="col-sm-3"></div>
            <div className="col-sm-9 zindx">
              <div className="row">
                <div className="col-sm-4">
                  <a href="/our-solutions/experiential-learning">
                    <div className="solutionbox ">
                      <h4>
                        <span>E</span>xperiential Learning
                      </h4>
                      <div className="cicon">
                        <img
                          className="active"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/experiential-learning_q260h2aTw.webp"
                          alt="images"
                          loading="lazy"
                        />
                        <img
                          className="hover"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/experiential-learningw_QCXfDVFAYK.webp"
                          alt="images"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4">
                  <a href="/our-solutions/leadership-and-talent-development">
                    <div className="solutionbox ">
                      <h4>
                        <span>L</span>eadership & Performance
                      </h4>
                      <div className="cicon">
                        <img
                          className="active"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/leadership-performance_NO5FCroQBk.webp"
                          alt="images"
                          loading="lazy"
                        />
                        <img
                          className="hover"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/leadership-performancew_jx1F-H4ux5.webp"
                          alt="images"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4">
                  <a href="/our-solutions/assessments">
                    <div className="solutionbox ">
                      <h4>
                        <span>A</span>ssessments
                      </h4>
                      <div className="cicon">
                        <img
                          className="active"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/assessments_mTorLOz_F.webp"
                          alt="images"
                          loading="lazy"
                        />
                        <img
                          className="hover"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/assessmentsw_NcN1Urbw-v.webp"
                          alt="images"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4">
                  <a href="/bespoke">
                    <div className="solutionbox ">
                      <h4>
                        <span>B</span>eSpoke
                      </h4>
                      <div className="cicon">
                        <img
                          className="active"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/bespoke_15L20XFTtC.webp"
                          alt="images"
                          loading="lazy"
                        />
                        <img
                          className="hover"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/bespokew_S0ZixVfkUD.webp"
                          alt="images"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4">
                  <a href="/our-solutions/coaching">
                    <div className="solutionbox ">
                      <h4>
                        <span>C</span>oaching
                      </h4>
                      <div className="cicon">
                        <img
                          className="active"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/coaching_1jP006fOBl.webp"
                          alt="images"
                          loading="lazy"
                        />
                        <img
                          className="hover"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/coachingw_68ZkCHybAM.webp"
                          alt="images"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4">
                  <a href="/our-solutions/staffing">
                    <div className="solutionbox ">
                      <h4>
                        <span>S</span>taffing & Search
                      </h4>
                      <div className="cicon">
                        <img
                          className="active"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/staffing-search_tvTyJN41jb.webp"
                          alt="images"
                          loading="lazy"
                        />
                        <img
                          className="hover"
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/staffing-searchw_CjnDHFJCd.png"
                          alt="images"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4">
                  <a href="https://globalchecks.in/">
                    <div className="solutionbox ">
                      <h4>
                        <span>V</span>erification
                      </h4>
                      <div className="cicon">
                        <img
                          className="active"
                          src="https://ik.imagekit.io/byld/BYLD/ver2_2OU_GLywm.png"
                          alt="images"
                          loading="lazy"
                        />
                        <img
                          className="hover"
                          src="https://ik.imagekit.io/byld/BYLD/vw2_sqSvSEJS_.png"
                          alt="images"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>
          <div className="solutionarrowbox1">
            <img
              src="https://ik.imagekit.io/byld/BYLD/byldallasests/orangearrow_Y2tPSed3ik.webp"
              loading="lazy"
            />
          </div>
          <div className="solutionarrowbox2">
            <img
              src="https://ik.imagekit.io/byld/BYLD/byldallasests/bluearrow1_IallzTm-61.webp"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="ptt-60 pbb-50 ccl">
        <div className="container">
          <div className="row rs-testimonial style2 rs-blog style1">
            <div className="col-sm-4">
              <div className="mst ">
                <div className="sec-title3 mbb-35">
                  <h4 className="countertoph2">CLIENTS SPEAK</h4>
                  <div className="heading-border-line left-style"></div>
                </div>
              </div>
              <Slider {...settings1}>
                <div class="testi-wrap">
                  <div class="item-content">
                    <span>
                      <img
                        src="https://ik.imagekit.io/byld/BYLD/byldallasests/quote__zGVpNdMC.webp"
                        alt="Testimonial"
                        loading="lazy"
                      />
                    </span>
                    <p>
                      The online program was complete with several videos, real
                      life examples and activities / note taking facility post
                      each leg of the module which helped reflect on the
                      learnings and its application. While a classroom training
                      is best suited for this kind of a learning, the online
                      module was well designed and engaging keeping the current
                      constraints in perspective
                    </p>
                  </div>
                  <div class="testi-content">
                    <div class="image-wrap">
                      <img
                        src="https://ik.imagekit.io/byld/BYLD/byldallasests/av_F1t3RP1apA.webp"
                        alt="Testimonial"
                        loading="lazy"
                      />
                    </div>
                    <div class="testi-information">
                      <div class="testi-name">Namita Shah</div>
                      <span class="testi-title">(HSBC India)</span>
                      <div class="ratting-img">
                        <img
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/ratting_eGQ1-rqTv.webp"
                          alt="Testimonial"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="testi-wrap ">
                  <div class="item-content">
                    <span>
                      <img
                        src="https://ik.imagekit.io/byld/BYLD/byldallasests/quote__zGVpNdMC.webp"
                        alt="Testimonial"
                        loading="lazy"
                      />
                    </span>
                    <p>
                      We engaged their services for facilitating a session on
                      SLII<sup>®</sup> for our 26 employees, who were members of
                      the regional and local country leadership team spread
                      across APAC, in Nov 2019. The objective of the learning
                      program being enabling the leaders to drive change in the
                      organization and have constructive & difficult
                      conversations with their teams, ensuring the
                      organizational goals are at the focal point of
                      discussions.
                    </p>
                  </div>
                  <div class="testi-content">
                    <div class="image-wrap">
                      <img
                        src="https://ik.imagekit.io/byld/BYLD/byldallasests/av_F1t3RP1apA.webp"
                        alt="Testimonial"
                        loading="lazy"
                      />
                    </div>
                    <div class="testi-information">
                      <div class="testi-name">Rangkynsai Nongbet</div>
                      <span class="testi-title">
                        (Ortho Clinical Diagnostics)
                      </span>
                      <div class="ratting-img">
                        <img
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/ratting_eGQ1-rqTv.webp"
                          alt="Testimonial"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="testi-wrap ">
                  <div class="item-content">
                    <span>
                      <img
                        src="https://ik.imagekit.io/byld/BYLD/byldallasests/quote__zGVpNdMC.webp"
                        alt="Testimonial"
                        loading="lazy"
                      />
                    </span>
                    <p>
                      Thankful to the team at Crucial Life Changing Skills for
                      conducting a power packed session on the topic of
                      “Influencer” for our leaders at CK Birla Group. The simple
                      (and powerful) 6 sources of influence model will guide us
                      to to drive change in our personal and professional space!
                    </p>
                  </div>
                  <div class="testi-content">
                    <div class="image-wrap">
                      <img
                        src="https://ik.imagekit.io/byld/BYLD/byldallasests/av_F1t3RP1apA.webp"
                        alt="Testimonial"
                        loading="lazy"
                      />
                    </div>
                    <div class="testi-information">
                      <div class="testi-name">Prerna S</div>
                      <span class="testi-title">(Birla Fertility and IVF)</span>
                      <div class="ratting-img">
                        <img
                          src="https://ik.imagekit.io/byld/BYLD/byldallasests/ratting_eGQ1-rqTv.webp"
                          alt="Testimonial"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="col-sm-8">
              <div className="sec-title3 mbb-35 ">
                <h4 className="countertoph2">WHY OUR CLIENTS TRUST US?</h4>
                <div className="heading-border-line left-style"></div>
              </div>
              <div className="mycounter">
                <div className="counterbox countb1 ">
                  <span className="rs-count">500,000 +</span>
                  <h3>PEOPLE TRAINED</h3>
                </div>
                <div className="counterbox countb2 ">
                  <span className="rs-count">1,000 +</span>
                  <h3>YEARS OF ACCUMULATED CONSULTING EXPERIENCE</h3>
                </div>
                <div className="counterbox countb3 ">
                  <span className="rs-count">10 +</span>
                  <h3>GLOBAL PARTNERSHIPS</h3>
                </div>
                <div className="counterbox countb4 ">
                  <span className="rs-count">100,000 +</span>
                  <h3>ACCESS TO PROFILES</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 class="title mb-0 md-pb-20 h2call ">
                Partnership with global leaders
              </h2>
            </div>
          </div>
        </div>
        <img
          className=" img100p"
          src="https://ik.imagekit.io/byld/BYLD/byldallasests/handb_A20SaYtbVo.webp"
          loading="lazy"
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 text-center">
              <p class="mb-0 pall pbb-0 ptt-10  ajcenter">
                We are driven by the strong desire to deliver the best corporate
                solutions and trainings to our valuable clients by establishing
                strong business partnerships with global training and learning
                providers.
              </p>
              <p class="mb-0 pall pbb-20 ptt-10  ajcenter">
                To achieve success in this ever-lasting endeavor, BYLD Group is
                in partnerships with global players such as Everything DiSC and
                The Five Behaviors (Wiley brands), Blanchard, Trapologist at
                Work, Eagle’s Flight, Tirian, Jenson8, Crucial Learning, and so
                on.
              </p>
              <div className="btn-part ptt-10 pbb-30 ">
                <Link href="/join-our-partner-network">
                  <a className="readon2">
                    Learn More <div className="btn-arrow"></div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="jointeam ptt-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center pbb-30">
              <h2 class="title mb-0 md-pb-20 h2call ">Join the BYLD Family</h2>
            </div>
          </div>
        </div>
        <img
          className="img100p"
          src="https://ik.imagekit.io/byld/BYLD/byldallasests/byldteam_cTSpTwFFTc.webp"
          loading="lazy"
        />
        <div className="clearfix"></div>
        <div className="solutionarrowbox1">
          <img
            src="https://ik.imagekit.io/byld/BYLD/byldallasests/orangearrow_Y2tPSed3ik.webp"
            loading="lazy"
          />
        </div>
        <div className="solutionarrowbox2">
          <img
            src="https://ik.imagekit.io/byld/BYLD/byldallasests/bluearrow1_IallzTm-61.webp"
            loading="lazy"
          />
        </div>
      </section>

      <div class="homecon ptt-60">
        <div class="container">
          <div className="row">
            <div className="col-sm-3">
              <h2 class="title mb-0 md-pb-20 h2call ">
                Want to Bring the Real Change?{" "}
              </h2>
            </div>
            <div className="col-sm-9">
              <p class="mb-0 pall pbb-20 ">
                Whether you want to elevate your leadership skills, improve
                self-awareness, enhance productivity, unlock the full potential
                of your workforce, or strengthen communication skills, we are
                here to help you. Fill out the details in our form, and our
                experts will get back to you soon.
              </p>
            </div>
          </div>

          <div class="row y-middle">
            <div class="col-lg-5 md-mb-50 dnoneinm">
              <div class="contact-img ">
                <img
                  src="https://ik.imagekit.io/byld/BYLD/byldallasests/contactl_jbAHOfbU3.webp"
                  alt="Contact"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="contact-wrap">
                <div className="bannerform ">
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
                          placeholder="Work Email/Email*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          className="borrr"
                          type="number"
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
                          name="Location"
                          placeholder="Location"
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          className="borrr"
                          type="text"
                          name="organization"
                          placeholder="Organization*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          className="borrr"
                          type="text"
                          name="designation"
                          placeholder="Designation*"
                          required
                        />
                      </div>
                      <div className="col-sm-12 mb-12">
                        <select name="product" required>
                          <option value="">Product / Services</option>
                          <option value="Sales and Services">
                            Sales and Services
                          </option>
                          <option value="Coaching">Coaching</option>
                          <option value="Assessments">Assessments</option>
                          <option value="Leadership and Performance">
                            Leadership and Performance
                          </option>
                          <option value="Experiential Learning">
                            Experiential Learning
                          </option>
                        </select>
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
