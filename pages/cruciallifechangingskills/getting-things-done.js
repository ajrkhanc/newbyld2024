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
    question: "What is the Getting Things Done® (GTD®) methodology?",
    answer:
      "Getting Things Done® (GTD®) is a productivity system developed by David Allen that helps individuals and teams manage tasks, priorities, and commitments more effectively. It reduces stress by providing a clear, actionable workflow to organize and execute work without feeling overwhelmed.",
  },
  {
    id: "2",
    question: "What will I learn in the Getting Things Done® (GTD®) course?",
    answer:
      "In the GTD® course, you’ll master five core practices: Capture, Clarify, Organize, Reflect, and Engage. These steps help you stay organized, prioritize tasks wisely, manage time effectively, and boost productivity both personally and professionally.",
  },
  {
    id: "3",
    question: "What formats are available for GTD® training?",
    answer:
      "GTD® training is available in live workshops, blended learning sessions, and online courses. These flexible options ensure that individuals, departments, or cross-functional teams can integrate GTD® methods into their preferred learning style and organizational culture.",
  },
  {
    id: "4",
    question:
      "How does the GTD® method improve team and individual performance?",
    answer:
      "By implementing GTD®, teams and individuals experience reduced stress, stronger accountability, improved time management, better prioritization, and enhanced collaboration. The method ensures clearer communication and execution across all levels of an organization.",
  },
  {
    id: "5",
    question:
      "What resources are available to support learning and practicing GTD®?",
    answer:
      "Learners can access updated course visuals, case studies (like MasterControl’s success story), and practical productivity tools. Additionally, the Getting Things Done book by David Allen offers a deeper understanding of the GTD® principles and supports sustainable, stress-free productivity.",
  },
];

export default function Gettingthingsdone() {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    setOpen(open === id ? "" : id);
  };
  return (
    <>
      <Head>
        <title>Getting Things Done Online Course | GTD Training & Method</title>
        <meta name="robots" content="INDEX, FOLLOW" />
        <link
          rel="canonical"
          href="https://byldgroup.com/cruciallifechangingskills/getting-things-done"
        />
        <meta
          name="description"
          content=" Master the Getting Things Done (GTD) method with our comprehensive online course. Learn practical techniques to boost productivity and achieve your goals effectively with expert-led GTD training."
        />
        {/* og tag */}
        <meta
          property="og:url"
          content="https://byldgroup.com/cruciallifechangingskills/getting-things-done"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Getting Things Done (GTD) Training Program | Getting Things Done Method"
        />
        <meta
          property="og:description"
          content="Explore Getting Things Done Method to know How to be more productive at workplace. Click here for Getting Things Done (GTD) training, it's available learning formats, and how to bring the course to your organization."
        />
        <meta
          property="og:image"
          content="https://byldgroup.com/classets/img/gtd.svg"
        />
        {/* TWITTER TAG */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@crucial__skills" />
        <meta
          name="twitter:title"
          content="Getting Things Done (GTD) Training Program | Getting Things Done Method"
        />
        <meta
          name="twitter:description"
          content="Explore Getting Things Done Method to know How to be more productive at workplace. Click here for Getting Things Done (GTD) training, it's available learning formats, and how to bring the course to your organization."
        />
        <meta
          name="twitter:image:src"
          content="https://pbs.twimg.com/profile_images/1475415956583186432/v2nzALrw_400x400.jpg"
        />
        <meta
          name="twitter:domain"
          content="https://byldgroup.com/classets/img/gtd.svg"
        />

        {/* itemProp TAG */}
        <meta
          itemProp="title"
          content="Getting Things Done (GTD) Training Program | Getting Things Done Method"
        />
        <meta
          itemProp="description"
          content="Explore Getting Things Done Method to know How to be more productive at workplace. Click here for Getting Things Done (GTD) training, it's available learning formats, and how to bring the course to your organization."
        />
        <meta
          itemProp="image"
          content="https://byldgroup.com/classets/img/gtd.svg"
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
              "target": "https://byldgroup.com/cruciallifechangingskills/getting-things-done/search?q={search_term_string}",
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
              {/* <img src="/classets/img/gtd.svg" /> */}
              <div className="clLogoBox">
                <img
                  src="/classets/img/icon-GTD.svg"
                  alt="image1"
                  loading="lazy"
                />
                <h1>
                  Getting Things Done<sub className="tredMark">®</sub>
                  {/* <span className="subTitle">for Mastering Dialogue</span> */}
                </h1>
              </div>
              <h2>Productivity with Purpose</h2>
              <p>
                Learn the skills that can help relieve the cognitive load, allow
                for increased focus, and even result in optimal experience and
                peak performance with Getting Things Done.
              </p>
              <h6>
                <a
                  class="submit"
                  target="_blank"
                  href="/cruciallifechangingskills/course-overview-getting-things-done"
                >
                  {" "}
                  Download the Course Overview{" "}
                </a>
              </h6>
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
                  src="https://www.youtube.com/embed/ihxfvecEr2k"
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

      <section class="features courses-features">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 learn-title text-center">
              <h2>HERE IS WHAT YOU’LL LEARN</h2>
              <p>
                Go beyond productivity tips and learn a personal workflow
                management system through instruction, application, and
                coaching.
              </p>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/dive-for-motivation.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>SEIZE</h5>
                  <p>
                    Direct everything to a few chosen capture tools that you
                    empty regularly.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/clarify.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>CLARIFY</h5>
                  <p>
                    Identify the very next action that would move you toward
                    closure.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/organize.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>ORGANIZE</h5>
                  <p>
                    Set context to your next actions rather than topic to make
                    completing them easier.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/reflect.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>REFLECT</h5>
                  <p>
                    Skim through your calendar and lists at the right times.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/engage.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>ENGAGE</h5>
                  <p>
                    Use your system to take appropriate action with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/eview.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>REVIEW</h5>
                  <p>
                    Make time each week to conduct a formal review of your tasks
                    and goals.
                  </p>
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
                <div class="col-md-4">
                  <div class="row feature-content text-center feature-box">
                    <img
                      className="imgmauto img70 pbb-30"
                      src="/classets/img/icon-on-demand-1.webp"
                    />
                    <h4>On Demand</h4>
                    <p>Learn at your own pace online.</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="row feature-content text-center feature-box">
                    <img
                      className="imgmauto img70 pbb-30"
                      src="/classets/img/icon-virtual-1.webp"
                    />
                    <h4>Virtual</h4>
                    <p>Join one of our instructors online.</p>
                  </div>
                </div>
                <div class="col-md-4">
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
                src="/classets/img/VS_Book-Mock-up_GTD.webp"
                alt="image14"
                loading="lazy"
              />
            </div>
            <div class="col-md-6  mtt-20  learn-titleBox">
              <div class="learn-titleBox">
                <h2>THE ART OF STRESS-FREE PRODUCTIVITY</h2>

                <p>
                  Philosophical and practical, Getting Things Done has long been
                  considered the manual for being productive and effective while
                  staying relaxed with a “mind like water.”
                </p>
                <h6 className="mtt-20">
                  <a
                    class="submit"
                    href="/cruciallifechangingskills/course-overview-getting-things-done"
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
                Play the video to learn more about the skills taught in Getting
                Things Done, the available learning formats, and how to bring
                the course to your organization.
              </p>
              <hr />
              <h6>
                <i class="ph-play-circle-bold"></i> 22 Mins Video
              </h6>
            </div>
            <div class="col-lg-6 preview-image">
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCwpwP8sH7YBIFs4xJeID9uA"
              >
                <img src="/classets/img/gtd-img.webp" />
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
