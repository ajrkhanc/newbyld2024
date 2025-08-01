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
    question: "What is The Power of Habit® course?",
    answer:
      "The Power of Habit® course helps individuals and teams identify, break, and replace dysfunctional habits with productive ones. It uses proven strategies grounded in neuroscience and behavior science to support sustainable behavior change and high performance.",
  },
  {
    id: "2",
    question: "How does The Power of Habit® course improve performance?",
    answer:
      "The course teaches participants how to leverage the science of habit formation to make small but impactful changes in behavior. These changes lead to improved productivity, influence, and performance, both personally and professionally.",
  },
  {
    id: "3",
    question:
      "What are the learning formats available for The Power of Habit® course?",
    answer:
      "The course is available in multiple formats including live classroom sessions, virtual workshops, and on-demand learning. This flexibility ensures the course can be tailored to fit individual or organizational schedules and needs.",
  },
  {
    id: "4",
    question:
      "What tools and strategies will I learn in The Power of Habit® course?",
    answer:
      "Participants will learn to identify performance gaps, understand the habit loop (cue, routine, reward), eliminate triggers for bad habits, and build new routines through repetition and rewards. The course provides a repeatable skillset for sustainable behavior change.",
  },
  {
    id: "5",
    question: "Why does The Power of Habit® course work?",
    answer:
      "The course is grounded in science and focuses on practical tools for habit formation, reprogramming, and maintenance. It is designed to help learners redesign their routines and adopt successful habits, enhancing personal growth, team cohesion, and leadership performance.",
  },
];

export default function Thepowerofhabit() {
    const [open, setOpen] = useState("");

    const toggle = (id) => {
      setOpen(open === id ? "" : id);
    };
  return (
    <>
      <Head>
        <title>
          Power of Habit Course | The Power of Habit Training Program for High
          Performance
        </title>
        <meta name="robots" content="INDEX, FOLLOW" />
        <link
          rel="canonical"
          href="https://byldgroup.com/cruciallifechangingskills/the-power-of-habit"
        />
        <meta
          name="description"
          content="Unlock the power of habits with our online course based on The Power of Habit book. Learn how to build productive habits and enhance your leadership skills with expert-led training for high performance and personal growth"
        />

        {/* og tag */}
        <meta
          property="og:url"
          content="https://byldgroup.com/cruciallifechangingskills/the-power-of-habit"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The Power Of Habit Training Program"
        />
        <meta
          property="og:description"
          content="The bestseller by Charles Duhigg’s The Power of Habit Book and the latest science in habit formation has laid the foundation of this program. Habits can determine your workplace success. Enquire today to know more!"
        />
        <meta
          property="og:image"
          content="https://byldgroup.com/classets/img/ThePowerofHabit.svg"
        />

        {/* TWITTER TAG */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@crucial__skills" />
        <meta
          name="twitter:title"
          content="The Power Of Habit Training Program"
        />
        <meta
          name="twitter:description"
          content="The bestseller by Charles Duhigg’s The Power of Habit Book and the latest science in habit formation has laid the foundation of this program. Habits can determine your workplace success. Enquire today to know more!"
        />
        <meta
          name="twitter:image:src"
          content="https://pbs.twimg.com/profile_images/1475415956583186432/v2nzALrw_400x400.jpg"
        />
        <meta
          name="twitter:domain"
          content="https://byldgroup.com/cruciallifechangingskills/the-power-of-habit"
        />

        {/* itemProp TAG */}
        <meta itemProp="title" content="The Power Of Habit Training Program" />
        <meta
          itemProp="description"
          content="The bestseller by Charles Duhigg’s The Power of Habit Book and the latest science in habit formation has laid the foundation of this program. Habits can determine your workplace success. Enquire today to know more!"
        />
        <meta
          itemProp="image"
          content="https://byldgroup.com/classets/img/ThePowerofHabit.svg"
        />

        {/* script schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "BYLD Crucial Skills",
              url: "https://byldgroup.com/cruciallifechangingskills",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://byldgroup.com/cruciallifechangingskills/the-power-of-habit/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BYLD Crucial Skills",
              alternateName: "Crucial Learning",
              url: "https://byldgroup.com/cruciallifechangingskills",
              logo: "https://byldgroup.com/classets/img/cruciallifechangingskills-logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "18001021345",
                contactType: "customer service",
                contactOption: "TollFree",
                areaServed: "IN",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.facebook.com/Cruciallifechangingskills",
                "https://twitter.com/crucial__skills",
                "https://www.instagram.com/cruciallifechangingskills/",
                "https://www.youtube.com/channel/UCwpwP8sH7YBIFs4xJeID9uA",
                "https://www.linkedin.com/company/crucial-life-changing-skills",
                "https://byldgroup.com/cruciallifechangingskills",
              ],
            }),
          }}
        />
      </Head>
      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 contact-title">
              {/* <img src="/classets/img/ThePowerofHabit.svg" /> */}
              <div className="clLogoBox">
                <img
                  src="/classets/img/icon-ThePowerofHabit.svg"
                  alt="image1"
                  loading="lazy"
                />
                <h1>
                  The Power of Habit<sub className="tredMark">®</sub>
                  {/* <span className="subTitle">for Mastering Dialogue</span> */}
                </h1>
              </div>
              <h2>The Greatest Predictor of High Performance</h2>
              <p>
                Habits can determine your success more than talent,
                intelligence, luck, or decision-making. Many are aware of this
                fact but still lack control over their habits to get the desired
                results. Download our course overview to learn how The Power of
                Habit™ can help you gain mastery over the one thing that’s in
                your control: your behavior.
              </p>
              <h6>
                <a
                  class="submit"
                  href="/cruciallifechangingskills/course-overview-the-power-of-habit"
                >
                  {" "}
                  Download the Course Overview{" "}
                </a>
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section class="themesecoundbg">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 left-about-area">
              <p className="text-justify pohtext">
                The bestseller by Charles Duhigg’s The Power of Habit Book and
                the latest science in habit formation has laid the foundation of
                this program that teaches you how habits work and how you can
                cultivate these habits using your own skill rather than
                willpower. The course focuses on teaching you a skill set that
                helps you master new habits. This skill set can be called the
                habit of all habits. The one to rule them all.
              </p>
            </div>
            <div class="col-lg-6 right-about-image ptt-40 pbb-40">
              <img
                class="left-image img50"
                src="/classets/img/sitting-woman.svg"
                alt=""
              />
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
                  src="https://www.youtube.com/embed/Jqg8z3uUfoc"
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
              <h2>Here is what you will learn</h2>
              <p>
                This program teaches you how habits work and how you can
                cultivate these habits using your own skill rather than
                willpower. The course focuses on teaching you a skill set that
                helps you master new habits. This skill set can be called the
                habit of all habits. The one to rule them all.
              </p>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/Spot-1.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>SPOT THE LAG</h5>
                  <p>
                    Identifying the pain points where you’re not getting the
                    results you need.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/identify-2.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>IDENTIFY THE LOOP</h5>
                  <p>
                    Learn how to work in the loop. Find the cue. Repeat and
                    reward.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/simplify-3.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>SIMPLIFY YOUR ROUTINE</h5>
                  <p>
                    Shrink your routine and simplify it to make it more doable
                    and easy.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/find-4.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>FIND THE CUE</h5>
                  <p>
                    Find points where you can give cues to your routine that
                    create a trigger or prompt to work.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/reduce-5.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>REDUCE THE COMMOTION</h5>
                  <p>
                    Identify and reduce the cues that trigger lag in the routine
                    or reverse bad practices.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/reward-6.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>MAKE A REWARD STORY FOR YOURSELF</h5>
                  <p>
                    Identify the psychological drives that help you stay focused
                    on a habit.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/turn-7.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>TURN BAD DAYS INTO GOOD DATA</h5>
                  <p>
                    Become both the subject and the scientist through the Power
                    of Habit
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/recognize-8.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>RECOGNIZE AND REPEAT, REPEAT, REPEAT</h5>
                  <p>Envision the steps to increase your reps.</p>
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
                src="/classets/img/VS_Book-Mock-up_TPOH.webp"
                alt="image14"
                loading="lazy"
              />
            </div>
            <div class="col-md-6  mtt-20  learn-titleBox">
              <div class="learn-titleBox">
                <h2>READ THE BESTSELLER BEHIND THE COURSE</h2>

                <p>
                  Charles Duhigg’s New York Times bestseller sparked a worldwide
                  fascination with the science of habits and continues to
                  transform individuals and organizations.
                </p>
                <h6 className="mtt-20">
                  <a
                    class="submit"
                    href="/cruciallifechangingskills/course-overview-the-power-of-habit"
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
                <img src="/classets/img/a722a96b50d2f217e40af20c8d3d179a.webp" />
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
