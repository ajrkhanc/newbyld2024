import Head from "next/head";
import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function EventsGallerys() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const images = [
    "/assets/img/new/galleryImg1.1.webp",
    "/assets/img/new/galleryImg1.2.webp",
    "/assets/img/new/galleryImg1.3.webp",
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <>
      <Head>
        <title>Events Gallerys - BYLD Group</title>
        <link rel="canonical" href="https://byldgroup.com/events-gallery" />
        <meta
          name="description"
          content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/homemodule.css"
        />
      </Head>

      <div class="rs-breadcrumbs events_glaybg">
        <div class="container">
          <div className="row">
            <div className="col-sm-12">
              <div class="breadcrumbs-innerOne">
                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP text-white">
                  Where Leaders Emerge, <br /> Ideas Transform, and Growth
                  Begins
                </h1>
                <div className="buttons">
                  <a href="/contact-us" className="btn join">
                    Join Now
                  </a>
                  <a
                    href="/about-us"
                    className="btn learn"
                    style={{ background: "#e0e0e0", color: "#333" }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" pbb-100 ">
        <div className="container calender_bg">
          <div className="row pt-5 pb-5">
            <div className="col-sm-8 m-auto">
              <div className="calendarBox">
                <h3>Join Us for an Exclusive Leadership Meetup</h3>
                <div className="calenderIcon">
                  <div className="calenderIconInner">
                    <img
                      src="/assets/img/new/calenderIcon1.png"
                      alt="calender_icon"
                    />
                    <span>Lorem Ipsum</span>
                  </div>
                  <div className="calenderIconInner">
                    <img
                      src="/assets/img/new/calenderIcon2.png"
                      alt="calender_icon2"
                    />
                    <span>Lorem Ipsum</span>
                  </div>
                  <div className="calenderIconInner">
                    <img
                      src="/assets/img/new/calenderIcon3.png"
                      alt="calender_icon3"
                    />
                    <span>Lorem Ipsum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 col-sm-12 mb-2">
              <div className="galleryBox">
                <div class="gallery-item" onClick={() => openLightbox(0)}>
                  <a href="#">
                    <img
                      src="/assets/img/new/galleryImg1.1.webp"
                      alt="Gallery item"
                    />
                    <div class="caption">
                      <h3>Conclave</h3>
                    </div>

                    <div className="overlay">
                      <div className="overlay-text">
                        <h3>Conclave</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mb-2">
              <div className="galleryBox">
                <div class="gallery-item">
                  <a href="#">
                    <img
                      src="/assets/img/new/galleryImg2.webp"
                      alt="Gallery item"
                    />
                    <div class="caption">
                      <h3>Founder's Day</h3>
                    </div>

                    <div className="overlay">
                      <div className="overlay-text">
                        <h3>Founder's Day</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mb-2">
              <div className="galleryBox">
                <div class="gallery-item">
                  <a href="#">
                    <img
                      src="/assets/img/new/galleryImg3.webp"
                      alt="Gallery item"
                    />
                    <div class="caption">
                      <h3>Women's Day</h3>
                    </div>

                    <div className="overlay">
                      <div className="overlay-text">
                        <h3>Women's Day</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mb-2">
              <div className="galleryBox">
                <div class="gallery-item">
                  <a href="#">
                    <img
                      src="/assets/img/new/galleryImg4.webp"
                      alt="Gallery item"
                    />
                    <div class="caption">
                      <h3>Republic Day</h3>
                    </div>

                    <div className="overlay">
                      <div className="overlay-text">
                        <h3>Republic Day</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mb-2">
              <div className="galleryBox">
                <div class="gallery-item">
                  <a href="#">
                    <img
                      src="/assets/img/new/galleryImg5.webp"
                      alt="Gallery item"
                    />
                    <div class="caption">
                      <h3>Indoor Sports League</h3>
                    </div>

                    <div className="overlay">
                      <div className="overlay-text">
                        <h3>Indoor Sports League</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mb-2">
              <div className="galleryBox">
                <div class="gallery-item">
                  <a href="#">
                    <img
                      src="/assets/img/new/galleryImg6.webp"
                      alt="Gallery item"
                    />
                    <div class="caption">
                      <h3>Holi</h3>
                    </div>

                    <div className="overlay">
                      <div className="overlay-text">
                        <h3>Holi</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
