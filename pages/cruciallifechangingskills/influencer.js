import React, { useState } from "react";
import Head from "next/head";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
const faqs = [
  {
    id: "1",
    question: "What is the Crucial Influence® leadership course?",
    answer:
      "Crucial Influence® is a leadership training program that equips leaders with strategies to influence behavior change effectively. Built around the Six Sources of Influence model, the course helps leaders drive lasting impact by addressing personal, social, and structural factors that shape behavior.",
  },
  {
    id: "2",
    question: "What will I learn in the Crucial Influence® course?",
    answer:
      "You will learn how to uncover the root causes of behavior, apply the Six Sources of Influence, navigate resistance, and lead people toward meaningful, lasting change. The course empowers leaders to build accountability, foster trust, and create measurable results within their teams and organizations.",
  },
  {
    id: "3",
    question:
      "What learning formats are available for Crucial Influence® training?",
    answer:
      "Crucial Influence® training is available in multiple flexible formats, including in-person workshops, virtual classrooms, and blended learning experiences. This makes it ideal for organizations seeking scalable leadership training solutions that fit various team needs.",
  },
  {
    id: "4",
    question:
      "How does Crucial Influence® differ from traditional leadership training?",
    answer:
      "Unlike traditional leadership training that often focuses only on skills or knowledge, Crucial Influence® focuses on behavior change. It provides a practical framework based on 50 years of social science research, helping leaders influence real results by changing the behaviors that matter most.",
  },
  {
    id: "5",
    question: "What is the foundation of the Crucial Influence® model?",
    answer:
      "The Crucial Influence® model is based on the bestselling book that introduced the Six Sources of Influence. This framework has been successfully used by thousands of organizations to create sustainable change and drive high-impact leadership development programs around the world.",
  },
];

export default function Influencer() {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    setOpen(open === id ? "" : id);
  };
  return (
    <>
      <Head>
        <title>
          Crucial Influence Training | Leadership Course Based on Crucial
          Influence Model
        </title>
        <meta name="robots" content="INDEX, FOLLOW" />
        <link
          rel="canonical"
          href="https://byldgroup.com/cruciallifechangingskills/influencer"
        />
        <meta
          name="description"
          content=" Master the Crucial Influence model with our leadership training course. Learn key strategies from the Crucial Influence book to enhance your leadership effectiveness and influence others in high-stakes situations."
        />
        <link rel="stylesheet" type="text/css" href="/classets/css/cl.css" />

        {/* og tag */}
        <meta
          property="og:url"
          content="https://byldgroup.com/cruciallifechangingskills/influencer"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Crucial Influence | Influential Leadership Training Program"
        />
        <meta
          property="og:description"
          content="Influence poeple skills training helps emerging leaders to reconstruct persuasion and perks with powerful influence strategies and skills that bring real-life changes. Ready to get started?"
        />
        <meta
          property="og:image"
          content="https://byldgroup.com/classets/img/clf.png"
        />

        {/* TWITTER TAG */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@crucial__skills" />
        <meta
          name="twitter:title"
          content="Crucial Influence | Influential Leadership Training Program"
        />
        <meta
          name="twitter:description"
          content="Influence poeple skills training helps emerging leaders to reconstruct persuasion and perks with powerful influence strategies and skills that bring real-life changes. Ready to get started? "
        />
        <meta
          name="twitter:image:src"
          content="https://pbs.twimg.com/profile_images/1475415956583186432/v2nzALrw_400x400.jpg"
        />
        <meta
          name="twitter:domain"
          content="https://byldgroup.com/classets/img/clf.png"
        />

        {/* itemProp TAG */}
        <meta
          itemProp="title"
          content="Crucial Influence | Influential Leadership Training Program"
        />
        <meta
          itemProp="description"
          content="Influence poeple skills training helps emerging leaders to reconstruct persuasion and perks with powerful influence strategies and skills that bring real-life changes. Ready to get started? "
        />
        <meta
          itemProp="image"
          content="https://byldgroup.com/classets/img/clf.png"
        />

        {/* script schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "BYLD Crucial Skills",
            "url": "https://byldgroup.com/cruciallifechangingskills",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://byldgroup.com/cruciallifechangingskills/influencer/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
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
          }
        `,
          }}
        />
      </Head>
      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 contact-title">
              {/* <img src="/classets/img/clf.png" /> */}
              <div className="clLogoBox">
                <img
                  src="/classets/img/icon-Influencer.svg"
                  alt="image1"
                  loading="lazy"
                />
                <h1>
                  Crucial Influence<sup className="tredMark">®</sup>
                  {/* <span className="subTitle">for Mastering Dialogue</span> */}
                </h1>
              </div>
              <h2>The New Science of Leadership</h2>
              <p>
                Backed by 50 years of research in social science, Influencer
                takes a route on corporate perks and charismatic personalities
                to help learn techniques that can alter ingrained human
                behavior.
              </p>
              <h6>
                <a
                  class="submit"
                  href="/cruciallifechangingskills/course-overview-influencer"
                >
                  {" "}
                  Download the Course Overview{" "}
                </a>
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="darkbg patt-70 pabb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="font50 cblack">
                Leadership Development Starts Here
              </h2>
              <p className="font24 pabb-20">
                Learn more about the Crucial Influence leadership course and
                begin improving your <br></br>leadership skills with these
                resources.
              </p>
            </div>
            <div className="col-sm-4">
              <div className="incbox">
                <img src="/classets/img/in1.webp" />
                <h3>Crucial Influence Miniseries</h3>
                <p>
                  Join Joseph Grenny, coauthor of Crucial Influence and
                  cofounder of Crucial Learning, in this video series that
                  introduces concepts and skills from the course.
                </p>
                <a className="regularbtn" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="incbox">
                <img src="/classets/img/in2.webp" />
                <h3>What’s New in Crucial Influence</h3>
                <p>
                  Formerly Influencer, Crucial Influence teaches leaders how to
                  apply the Six Sources of Influence to create lasting behavior
                  change. See what’s new.
                </p>
                <a
                  className="regularbtn"
                  download
                  href="https://vitalsmarts.widen.net/s/7qxxml9fls/whats-new---crucial-influence"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="incbox">
                <img src="/classets/img/in3.webp" />
                <h3>Crucial Influence Assessment</h3>
                <p>
                  Discover your natural tendencies when trying to influence
                  others and identify areas for improvement with this short
                  self-assessment.
                </p>
                <a
                  className="regularbtn"
                  target="_blank"
                  href="/cruciallifechangingskills/assessment/influencer-assessment"
                >
                  Take Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="video-section-main">
        <div class="container-fluid">
          <div class="row video-section course-video">
            <div class="col-md-6 offset-md-3">
              <div class="row video-area">
                <iframe
                  width="768"
                  height="432"
                  src="https://www.youtube.com/embed/vbflk9hXOUY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="darkbg patt-70 pabb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <h2 className="font50 cblack">
                LEARN ESSENTIAL LEADERSHIP SKILLS
              </h2>
              <p className="font24 pabb-20 text-justify">
                Crucial Influence is rooted in 50 years of social science
                research and teaches the renowned Six Sources of Influence
                model. The course reveals the personal, social, and structural
                sources that shape behavior and teaches a method for using these
                sources to influence people and results.
              </p>
            </div>

            <div className="col-sm-5">
              <div className="incbox">
                <img src="/classets/img/in4.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features courses-features">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 learn-title text-center">
              <h2>
                LEARN AND MASTER THE SKILLS OF THE WORLD’S GREATEST LEADERS
              </h2>
              <p>
                Any emerging leader — a first-time manager without formal
                authority, an emerging leader, or a senior leader — can
                reconstruct persuasion and perks with powerful influence
                strategies and skills that bring real-life changes with
                influence skills training.
              </p>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/IDENTIFY-THE-VITAL-BEHAVIOURS.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>IDENTIFY THE VITAL BEHAVIOURS</h5>
                  <p>
                    Find out the key areas where enacting the right behavior
                    will have an immense effect on results through influencing
                    skills course.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/DIAGNOSE-WHERE-CHANGES-ARE-REQUIRED.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>DIAGNOSE WHERE CHANGES ARE REQUIRED</h5>
                  <p>
                    Learn the root cause of the persisting problems which might
                    have more than one cause.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/SOURCE-1-PERSONAL-MOTIVATION.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>SOURCE 1: PERSONAL MOTIVATION</h5>
                  <p>
                    Make the ostensible, unmanageable, and undesirable behaviors
                    manageable and enjoyable.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/SOURCE-2-PERSONAL-ABILITY.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>SOURCE 2: PERSONAL ABILITY</h5>
                  <p>
                    To enhance personal ability, try to invest in deliberate
                    practice.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/SOURCE-3-SOCIAL-MOTIVATION.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>SOURCE 3: SOCIAL MOTIVATION</h5>
                  <p>
                    Gather inspiration from formal leaders and opinionated
                    leaders.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/SOURCE-4-SOCIAL-ABILITY.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>SOURCE 4: SOCIAL ABILITY</h5>
                  <p>
                    Find strength in numbers through the influencing course to
                    gain social pressure's power.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/SOURCE-5-STRUCTURAL-MOTIVATION.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>SOURCE 5: STRUCTURAL MOTIVATION</h5>
                  <p>Link reward for vital behaviors.</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/GET-UNSTUCK-5.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>SOURCE 6: STRUCTURAL ABILITY</h5>
                  <p>Leverage space, data, and tools around you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="why-us choose-path">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-10 offset-md-1 text-center title">
              <h2>
                <span>Learning Formats</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="grey-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="row">
                <div class="col-md-6">
                  <div class="row feature-content text-center feature-box">
                    <img
                      className="imgmauto img70 pbb-30"
                      src="/classets/img/icon-virtual-1.webp"
                    />
                    <h4>Virtual</h4>
                    <p>Join one of our instructors online.</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row feature-content text-center feature-box">
                    <img
                      className="imgmauto img70 pbb-30"
                      src="/classets/img/icon-in-person.webp"
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
      <section className="features courses-features">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ">
              <img
                className="imgmauto img100"
                src="/classets/img/Crucial-Influence_3D-Book-Mock-up-1.webp"
                alt="image14"
                loading="lazy"
              />
            </div>
            <div class="col-md-6  mtt-20  learn-titleBox">
              <div class="learn-titleBox">
                <h2>Bestselling Leadership Book</h2>

                <p>
                  Discover the New York Times bestseller behind the
                  award-winning course. Crucial Influence—the updated third
                  edition of Influencer—unpacks the science of leadership with
                  rich case studies and outlines a proven method for leading
                  change.
                </p>
                <h6 className="mtt-20">
                  <a
                    class="submit"
                    href="/cruciallifechangingskills/course-overview-influencer"
                  >
                    Download the Course Overview
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="why-us">
        <div class="container">
          <div class="row">
            <div class="col-md-6 newsletter">
              <h2>READY TO GET STARTED?</h2>
            </div>
            <div class="col-md-6 newsletter-btn mtt-20">
              <a href="/cruciallifechangingskills/contact-us" class="start">
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="about-section preview-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 left-about-area preview-course">
              <h2>PREVIEW THE COURSE</h2>
              <p>
                Watch the video to learn more about course skills, learning
                formats, and delivery options. The Power of Habit is an
                unparallel predictor of long-term outcomes.
              </p>
              <hr />
              <h6>
                <i class="ph-play-circle-bold"></i> 01.11 Mins Video
              </h6>
            </div>
            <div class="col-lg-6 preview-image">
              <a href="https://www.youtube.com/channel/UCwpwP8sH7YBIFs4xJeID9uA">
                <img src="/classets/img/52df3c2121cb3476d031945c32e61e98.webp" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="darkbg courses-features pbb-60">
        <div class="container">
          <div class="row">
            <div className="col-12">
              <div className="faq-container">
                <h3 className="faq-title">Frequently Asked Questions:</h3>
                <Accordion
                  open={open}
                  toggle={toggle}
                  className="custom-accordion"
                >
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.id}>
                      <AccordionHeader targetId={faq.id}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <span>{faq.question}</span>
                          <span className="icon">
                            {open === faq.id ? <FaMinus /> : <FaPlus />}
                          </span>
                        </div>
                      </AccordionHeader>
                      <AccordionBody accordionId={faq.id}>
                        {faq.answer}
                        {/* <div dangerouslySetInnerHTML={{ __html: faq.answer }} /> */}
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
