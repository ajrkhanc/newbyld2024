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
    question: "What is the Crucial Conversations® for Accountability course?",
    answer:
      "The course helps leaders effectively manage difficult conversations about performance and accountability, enabling them to address issues directly while maintaining relationships. It’s designed to improve leadership skills, trust, and performance within teams.",
  },
  {
    id: "2",
    question:
      "How does the course improve leadership skills and accountability?",
    answer:
      "The course focuses on building essential skills such as handling difficult discussions, strengthening trust, setting clear expectations, and fostering a culture of accountability. These skills enhance overall leadership effectiveness and ensure consistent performance management.",
  },
  {
    id: "3",
    question:
      "What formats are available for Crucial Conversations® for Accountability?",
    answer:
      "The course is offered in various formats including live classroom sessions, virtual training, and on-demand eLearning. This flexibility ensures that leaders can choose the format that best fits their schedule and learning preferences.",
  },
  {
    id: "4",
    question:
      "What will I learn in the Crucial Conversations® for Accountability course?",
    answer:
      "The course covers nine key skills, including how to resolve performance issues, build mutual trust, handle emotions during difficult conversations, and take actionable steps to drive results. The course equips leaders to lead with confidence and accountability.",
  },
  {
    id: "5",
    question:
      "How can I get started with Crucial Conversations® for Accountability?",
    answer:
      'You can start by exploring free resources like the Crucial Accountability Miniseries, the Leadership Confessions eBook, and the "What Would You Do?" assessment to begin building your skills. For a more in-depth experience, you can sign up for the full course to gain actionable strategies for building accountability in leadership.',
  },
];

export default function crucialconversationsforaccountability() {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    setOpen(open === id ? "" : id);
  };
  return (
    <>
      <Head>
        <meta name="robots" content="INDEX, FOLLOW" />
        <title>
          Crucial Conversations for Accountability Course | Leadership & Manager
          Training
        </title>
        <link
          rel="canonical"
          href="https://byldgroup.com/cruciallifechangingskills/crucial-conversations-for-accountability"
        />
        <meta
          name="description"
          content="Boost accountability in leadership with our Crucial Conversations for Accountability course. Ideal for managers, this training builds skills to hold others accountable effectively and respectfully."
        />
        {/* og tag */}
        <meta
          property="og:url"
          content="https://byldgroup.com/cruciallifechangingskills/crucial-conversations-for-accountability"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Crucial Conversations for Accountability - Crucial Life-Changing Skills"
        />
        <meta
          property="og:description"
          content="Performance Management Improved When it comes to creating healthy relationships amongst people and organizations, accountability becomes critical in nature. If people are able to hold each other accountable, they are... Read more"
        />
        <meta
          property="og:image"
          content="https://byldgroup.com/classets/img/Crucial-Accountability.svg"
        />

        {/* TWITTER TAG */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@crucial__skills" />
        <meta
          name="twitter:title"
          content="Crucial Conversations for Accountability - Crucial Life-Changing Skills"
        />
        <meta
          name="twitter:description"
          content="Performance Management Improved When it comes to creating healthy relationships amongst people and organizations, accountability becomes critical in nature. If people are able to hold each other accountable, they are... Read more"
        />
        <meta
          name="twitter:image:src"
          content="https://pbs.twimg.com/profile_images/1475415956583186432/v2nzALrw_400x400.jpg"
        />
        <meta
          name="twitter:domain"
          content="https://byldgroup.com/cruciallifechangingskills/crucial-conversations-for-accountability"
        />

        {/* itemProp TAG */}
        <meta
          itemProp="title"
          content="Crucial Conversations for Accountability - Crucial Life-Changing Skills"
        />
        <meta
          itemProp="description"
          content="Performance Management Improved When it comes to creating healthy relationships amongst people and organizations, accountability becomes critical in nature. If people are able to hold each other accountable, they are... Read more"
        />
        <meta
          itemProp="image"
          content="https://byldgroup.com/classets/img/Crucial-Accountability.svg"
        />

        {/* script schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BYLD Crucial Skills",
              url: "https://byldgroup.com/cruciallifechangingskills",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://byldgroup.com/cruciallifechangingskills/crucial-conversations-for-accountability/search?q={search_term_string}",
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
              {/* <img src="/classets/img/Crucial-Accountability.svg" /> */}
              <div className="clLogoBox">
                <img
                  src="/classets/img/CrucialConversations_FMD-logo.svg"
                  alt="image1"
                  loading="lazy"
                />
                <h1>
                  Crucial Conversations
                  <sub className="tredMark">®</sub>{" "}
                  <span className="subTitle">For Accountability</span>
                </h1>
              </div>

              <h2>Performance Management Improved</h2>
              <p>
                When it comes to creating healthy relationships between people
                and organizations, accountability becomes critical. If people
                hold each other accountable, they can build trust, fulfill
                commitments, efficiency, engagement, and more.
              </p>
              <h6>
                <a
                  class="submit"
                  href="/cruciallifechangingskills/course-overview-crucial-conversations-for-accountability"
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
                  src="https://www.youtube.com/embed/fUfy3GwgzYM"
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
                Explore and learn the nine powerful skills that result in easy
                and simple problem solving along with strengthening trust, and
                reliability amongst the team and organization through crucial
                accountability training. With these skills, you will learn to
                hold people accountable despite the situation, position, or
                authority in play.
              </p>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/GET-UNSTUCK-4.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>GET UNSTUCK</h5>
                  <p>
                    Identify obstacles to solve dilemmas that contribute to poor
                    results and struggling relationships.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/IDENTIFYING-STORIES-TO-MASTER-THEM.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>IDENTIFYING STORIES TO MASTER THEM</h5>
                  <p>
                    Staying calm when feeling angry or defensive and identifying
                    stories that you might tell yourself.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/BEGIN-WITH-YOUR-HEART.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>BEGIN WITH YOUR HEART</h5>
                  <p>
                    Start with making things clear to yourself and others about
                    what you really want with Crucial Conversations train the
                    trainer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/BE-CLEAR-ABOUT-PATH.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>BE CLEAR ABOUT YOUR PATH</h5>
                  <p>Share your opinions without invalidating others.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/DIAGNOSE.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>DIAGNOSE</h5>
                  <p>
                    Identifying what leads to gaps in between the expected and
                    actual behavior.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/MAKING-IT-EASY.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>MAKING IT EASY</h5>
                  <p>
                    Start by asking others rather than implying what you already
                    know and believe.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/DRIVE-FOR-MOTIVATION.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>DRIVE FOR MOTIVATION</h5>
                  <p>
                    Rather than using coercion, use motivation to drive people.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/MOVE-TO-ACTION.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>MOVE TO ACTION</h5>
                  <p>
                    Make every conversation an accountable discussion rather
                    than a conflictive argument through a corporate training
                    program
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="row feature-right">
                <div class="col-md-2 feature-icon">
                  <img src="/classets/img/TUNE-IN-TO-TAKE-ACTION-1.svg" />
                </div>
                <div class="col-md-10 feature-content">
                  <h5>TUNE IN TO TAKE ACTION</h5>
                  <p>
                    Make every crucial conversation change its course to better
                    outcomes.
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
                src="/classets/img/VS_Book-Mock-up_CC2.webp"
                alt="image14"
                loading="lazy"
              />
            </div>
            <div class="col-md-6  mtt-20  learn-titleBox">
              <div class="learn-titleBox">
                <h2>READ THE BESTSELLER BEHIND THE COURSE</h2>

                <p>
                  With more than half a million copies sold, Crucial
                  Accountability continues to improve the health of
                  relationships, teams, and organizations worldwide.
                </p>
                <h6 className="mtt-20">
                  <a
                    class="submit"
                    href="/cruciallifechangingskills/course-overview-crucial-conversations-for-accountability"
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
                formats, and delivery options. Unlock the soft skills for
                effective interpersonal communication.
              </p>
              <hr />
              <h6>
                <i class="ph-play-circle-bold"></i> 0.59 Mins Video
              </h6>
            </div>
            <div class="col-lg-6 preview-image">
              <a href="https://www.youtube.com/channel/UCwpwP8sH7YBIFs4xJeID9uA">
                <img src="/classets/img/a4354e5d3b8f4f205bab9e53646a76bc.webp" />
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
