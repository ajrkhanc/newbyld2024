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
                  {/* <span>Webinar 18th March 2024</span> */}
                </div>
                <div className="eventbottom">
                  <p className="eventtitlec">
                    The Coach Knowledge Assessment is a structured evaluation
                    designed to measure your understanding and application of
                    core coaching competencies, aligned with international
                    coaching standards. Access Your Detailed Report
                  </p>
                  <p>
                    To receive your personalized assessment report with
                    actionable insights, please proceed with the payment.
                  </p>
                  <button className="eventbtn" type="submit">
                    Reserve Your Seat
                  </button>
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
