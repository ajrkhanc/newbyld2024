import Head from "next/head";
import React from "react";
import Link from "next/link";

const CoachingAssessmentsPage = () => {
  return (
    <>
      <div className="rs-breadcrumbs webinarsbg">
        <div className="container">
          <div className="breadcrumb-container theme1">
            <ul>
              <li>
                <Link href="/">Home</Link>
                <span className="separator">/</span>
              </li>
              <li>
                <Link href="/webinars-and-program-experience">Webinars</Link>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="breadcrumbs-inner">
                <h1 className="page-title">
                  Register For Your Complimentary <br />
                  Virtual Events
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoachingAssessmentsPage;
