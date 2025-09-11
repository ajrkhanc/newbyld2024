import Head from "next/head";
import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function EventsGallerys() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [currentGroup, setCurrentGroup] = React.useState([]); // current images group

  // Grouped event images
  const galleries = {
    Conclave: [
      "/assets/img/new/conclave/galleryImg1.1.webp",
      "/assets/img/new/conclave/conclaveImg2.webp",
      "/assets/img/new/conclave/conclaveImg3.webp",
      "/assets/img/new/conclave/conclaveImg4.webp",
      "/assets/img/new/conclave/conclaveImg5.webp",
      "/assets/img/new/conclave/conclaveImg6.webp",
      "/assets/img/new/conclave/conclaveImg7.webp",
      "/assets/img/new/conclave/conclaveImg8.webp",
      "/assets/img/new/conclave/conclaveImg9.webp",
      "/assets/img/new/conclave/conclaveImg10.webp",
      "/assets/img/new/conclave/conclaveImg11.webp",
      "/assets/img/new/conclave/conclaveImg12.webp",
      "/assets/img/new/conclave/conclaveImg13.webp",
      "/assets/img/new/conclave/conclaveImg14.webp",
      "/assets/img/new/conclave/conclaveImg15.webp",
      "/assets/img/new/conclave/conclaveImg16.webp",
      "/assets/img/new/conclave/conclaveImg17.webp",
      "/assets/img/new/conclave/conclaveImg18.webp",
      "/assets/img/new/conclave/conclaveImg19.webp",
      "/assets/img/new/conclave/conclaveImg20.webp",
      "/assets/img/new/conclave/conclaveImg21.webp",
    ],
    "Founder's Day": [
      "/assets/img/new/founders-day/galleryImg2.webp",
      "/assets/img/new/founders-day/fd1.webp",
      "/assets/img/new/founders-day/fd2.webp",
      "/assets/img/new/founders-day/fd3.webp",
      "/assets/img/new/founders-day/fd4.webp",
      "/assets/img/new/founders-day/fd5.webp",
      "/assets/img/new/founders-day/fd6.webp",
      "/assets/img/new/founders-day/fd7.webp",
      "/assets/img/new/founders-day/fd8.webp",
      "/assets/img/new/founders-day/fd9.webp",
      "/assets/img/new/founders-day/fd10.webp",
      "/assets/img/new/founders-day/fd11.webp",
      "/assets/img/new/founders-day/fd12.webp",
      "/assets/img/new/founders-day/fd13.webp",
      "/assets/img/new/founders-day/fd14.webp",
      "/assets/img/new/founders-day/fd15.webp",
      "/assets/img/new/founders-day/fd16.webp",
      "/assets/img/new/founders-day/fd17.webp",
      "/assets/img/new/founders-day/fd18.webp",
      "/assets/img/new/founders-day/fd19.webp",
      "/assets/img/new/founders-day/fd20.webp",
      "/assets/img/new/founders-day/fd21.webp",
    ],
    "Women's Day": [
      "/assets/img/new/women-day/galleryImg3.webp",
      "/assets/img/new/women-day/md2.webp",
      "/assets/img/new/women-day/md3.webp",
      "/assets/img/new/women-day/md4.webp",
      "/assets/img/new/women-day/md5.webp",
      "/assets/img/new/women-day/md6.webp",
      "/assets/img/new/women-day/md7.webp",
      "/assets/img/new/women-day/md8.webp",
      "/assets/img/new/women-day/md9.webp",
      "/assets/img/new/women-day/md10.webp",
      "/assets/img/new/women-day/md11.webp",
      "/assets/img/new/women-day/md12.webp",
      "/assets/img/new/women-day/md13.webp",
      "/assets/img/new/women-day/md14.webp",
      "/assets/img/new/women-day/md15.webp",
      "/assets/img/new/women-day/md16.webp",
      "/assets/img/new/women-day/md17.webp",
    ],
    "Republic Day": [
      "/assets/img/new/republic-day/galleryImg4.webp",
      "/assets/img/new/republic-day/rd1.webp",
      "/assets/img/new/republic-day/rd2.webp",
      "/assets/img/new/republic-day/rd3.webp",
      "/assets/img/new/republic-day/rd4.webp",
      "/assets/img/new/republic-day/rd5.webp",
      "/assets/img/new/republic-day/rd6.webp",
      "/assets/img/new/republic-day/rd7.webp",
    ],
    "Indoor Sports League": [
      "/assets/img/new/indoorsports-leagues/galleryImg5.webp",
      "/assets/img/new/indoorsports-leagues/id1.webp",
      "/assets/img/new/indoorsports-leagues/id2.webp",
      "/assets/img/new/indoorsports-leagues/id3.webp",
      "/assets/img/new/indoorsports-leagues/id4.webp",
      "/assets/img/new/indoorsports-leagues/id5.webp",
      "/assets/img/new/indoorsports-leagues/id6.webp",
      "/assets/img/new/indoorsports-leagues/id7.webp",
      "/assets/img/new/indoorsports-leagues/id8.webp",
      "/assets/img/new/indoorsports-leagues/id9.webp",
      "/assets/img/new/indoorsports-leagues/id10.webp",
      "/assets/img/new/indoorsports-leagues/id11.webp",
      "/assets/img/new/indoorsports-leagues/id12.webp",
      "/assets/img/new/indoorsports-leagues/id13.webp",
      "/assets/img/new/indoorsports-leagues/id14.webp",
      "/assets/img/new/indoorsports-leagues/id15.webp",
      "/assets/img/new/indoorsports-leagues/id16.webp",
      "/assets/img/new/indoorsports-leagues/id17.webp",
      "/assets/img/new/indoorsports-leagues/id18.webp",

      "/assets/img/new/indoorsports-leagues/id20.webp",
      "/assets/img/new/indoorsports-leagues/id21.webp",
      "/assets/img/new/indoorsports-leagues/id22.webp",
      "/assets/img/new/indoorsports-leagues/id23.webp",
      "/assets/img/new/indoorsports-leagues/id24.webp",
      "/assets/img/new/indoorsports-leagues/id25.webp",
      "/assets/img/new/indoorsports-leagues/id26.webp",
      "/assets/img/new/indoorsports-leagues/id27.webp",
      "/assets/img/new/indoorsports-leagues/id28.webp",
      "/assets/img/new/indoorsports-leagues/id29.webp",
      "/assets/img/new/indoorsports-leagues/id30.webp",
      "/assets/img/new/indoorsports-leagues/id31.webp",

      ,
    ],
    Holi: [
      "/assets/img/new/Holi/galleryImg6.webp",
      "/assets/img/new/Holi/Hl1.webp",
      "/assets/img/new/Holi/Hl2.webp",
      "/assets/img/new/Holi/Hl3.webp",
      "/assets/img/new/Holi/Hl4.webp",
      "/assets/img/new/Holi/Hl5.webp",
      "/assets/img/new/Holi/Hl6.webp",
      "/assets/img/new/Holi/Hl7.webp",
      "/assets/img/new/Holi/Hl8.webp",
      "/assets/img/new/Holi/Hl9.webp",
      "/assets/img/new/Holi/Hl10.webp",
      "/assets/img/new/Holi/Hl11.webp",
      "/assets/img/new/Holi/Hl12.webp",
      "/assets/img/new/Holi/Hl13.webp",
      "/assets/img/new/Holi/Hl14.webp",
      "/assets/img/new/Holi/Hl15.webp",
      "/assets/img/new/Holi/Hl16.webp",
      "/assets/img/new/Holi/Hl17.webp",
      "/assets/img/new/Holi/Hl18.webp",
      "/assets/img/new/Holi/Hl19.webp",
      "/assets/img/new/Holi/Hl20.webp",
      "/assets/img/new/Holi/Hl21.webp",
      "/assets/img/new/Holi/Hl22.webp",
      "/assets/img/new/Holi/Hl23.webp",
      "/assets/img/new/Holi/Hl24.webp",
      "/assets/img/new/Holi/Hl25.webp",
      "/assets/img/new/Holi/Hl26.webp",
      "/assets/img/new/Holi/Hl27.webp",
      "/assets/img/new/Holi/Hl28.webp",
    ],
    "independence day": [
      "/assets/img/new/independence-day/ind1.webp",
      "/assets/img/new/independence-day/ind2.webp",
      "/assets/img/new/independence-day/ind3.webp",
      "/assets/img/new/independence-day/ind4.webp",
      "/assets/img/new/independence-day/ind5.webp",
      "/assets/img/new/independence-day/ind6.webp",
      "/assets/img/new/independence-day/ind7.webp",
      "/assets/img/new/independence-day/ind8.webp",
      "/assets/img/new/independence-day/ind9.webp",
    ],
  };

  const openLightbox = (eventName, index) => {
    setCurrentGroup(galleries[eventName]); // set group images
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
      {/* <section className=" pbb-100 ">
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
      </section> */}

      <section className="pbb-100">
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
        <div className="container">
          <div className="row">
            {Object.keys(galleries).map((eventName, idx) => (
              <div className="col-lg-4 col-sm-12 mb-2" key={idx}>
                <div
                  className="galleryBox"
                  onClick={() => openLightbox(eventName, 0)} // open first image of that event
                  style={{ cursor: "pointer" }}
                >
                  <div className="gallery-item">
                    {/* Thumbnail image = group ka first image */}
                    <img src={galleries[eventName][0]} alt={eventName} />
                    <div className="caption">
                      <h3>{eventName}</h3>
                    </div>
                    <div className="overlay">
                      <div className="overlay-text">
                        <h3>{eventName}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            mainSrc={currentGroup[photoIndex]}
            nextSrc={currentGroup[(photoIndex + 1) % currentGroup.length]}
            prevSrc={
              currentGroup[
                (photoIndex + currentGroup.length - 1) % currentGroup.length
              ]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + currentGroup.length - 1) % currentGroup.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % currentGroup.length)
            }
          />
        )}
      </section>
    </>
  );
}
