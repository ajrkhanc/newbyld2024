import Head from "next/head";
import React from "react";
import Link from "next/link";

const CoachingAssessmentsPage = () => {
  return (
    <>
      <Head>
        <title>Coaching Assessments </title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/homemodule.css"
        />
        ;
      </Head>
      <div className="rs-breadcrumbs webinarsbg">
        <div className="container">
          {/* <div className="breadcrumb-container theme1">
            <ul>
              <li>
                <Link href="/">Home</Link>
                <span className="separator">/</span>
              </li>
              <li>
                <Link href="/webinars-and-program-experience">Webinars</Link>
              </li>
            </ul>
          </div> */}

          <div className="row">
            <div className="col-sm-8">
              <div className="breadcrumbs-inner">
                <h1 className="page-title">Coach Knowledge Assessment</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ptt-60 pbb-60 positionrelative">
        <div className="container">
          <div className="row zindx">
            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img
                    src="https://ik.imagekit.io/byld/BYLD/byldallasests/events_GMK6eGd8I.webp"
                    alt=""
                  />
                  <span>Webinar 18th March 2024</span>
                </div>
                <div className="eventbottom">
                  <h4 className="eventtitlec">Time: 4:00 PM - 5:00 PM</h4>
                  <h3>Getting Things Done®</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoachingAssessmentsPage;
