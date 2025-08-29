import React, { useState } from "react";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";

export default function AuthenticExecutivePresence() {
  const [showText, setShowText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    slot: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { fullName, email, phone, company, designation, slot } = formData;
    console.log("Form submitted:", formData);

    const cf7FormData = new FormData();
    cf7FormData.append("full-name", fullName);
    cf7FormData.append("email", email);
    cf7FormData.append("phone", phone);
    cf7FormData.append("company-name", company);
    cf7FormData.append("designation", designation);
    cf7FormData.append("slot", slot);

    fetch(
      "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/530/feedback",
      {
        method: "POST",
        body: cf7FormData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.status === "mail_sent") {
          toast.success("Form submitted successfully!");

          // Redirect after 2s
          setTimeout(() => {
            window.location.href = "/thank-you";
          }, 2000);

          // Reset form
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            company: "",
            designation: "",
            slot: "",
          });
        } else {
          toast.error("Form submission failed, please try again.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error submitting form:", error);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Head>
        <title>Giving &amp; Receiving Feedback</title>
        <meta
          name="description"
          content="Learn how to give and receive feedback effectively in your organization."
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/GivingAndReceivingFeedback.css"
        />
      </Head>
      <section className="giving-receiving-feedback">
        <div className="content">
          <h1>Giving & Receiving Feedback</h1>
          <p>
            In every organization, feedback is the fuel that drives growth,
            trust, and performance. Yet, many leaders and teams struggle with
            how to give or receive it effectively.
          </p>
          <div className="buttons">
            <a href="#webinar-preface" className="btn join">
              Join Now
            </a>
            <a href="#webinar-preface" className="btn learn">
              Learn More
            </a>
          </div>
        </div>

        <div className="images">
          <img
            src="/assets/img/groupImg.png"
            alt="Presentation"
            className="img main-img"
          />
        </div>
      </section>

      <section className="details" id="webinar-preface">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 ">
              <h2>Webinar Preface</h2>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12 mb-5">
              <p>
                In every organization, feedback is the fuel that drives growth,
                trust, and performance. Yet, many leaders and teams struggle
                with how to give or receive it effectively. As part of the BYLD
                Group Speaker Series, this session on “Giving & Receiving
                Feedback” explores how feedback, when delivered with clarity and
                intention, can become a powerful tool for alignment and
                accountability, not criticism.
              </p>
              <h3>By attending this session, you will learn how to</h3>
              <ul>
                <li>
                  Build a safe and respectful environment for feedback
                  conversations
                </li>
                <li>
                  Deliver feedback that inspires improvement rather than
                  defensiveness
                </li>
                <li>Receive feedback with openness and self-awareness</li>
                <li>
                  Foster a feedback culture that drives performance and trust
                </li>
              </ul>
              <p>
                Join us to discover how the right approach to feedback can
                transform people and performance.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="form-wrapper">
                <form className="form-card" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name*"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation*"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                  />
                  <select
                    name="slot"
                    value={formData.slot}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose your Slot*</option>
                    <option value="11 AM - 12PM">11 AM - 12PM</option>
                    <option value="4PM - 5PM">4PM - 5PM</option>
                  </select>
                  <div style={{ textAlign: "center" }}>
                    <button className="register-btn mt-4" disabled={loading}>
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="h-5 w-5 animate-spin me-2" />
                          Submitting...
                        </span>
                      ) : (
                        "Register Now"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="details ptt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
              <h3>Program Facilitator</h3>
              <p>
                Yogesh Sood is the Founder and Chairman & Managing Director
                (CMD) of BYLD Group He also leads the Indian boards of reputed
                global organizations, including DOOR Training and Consulting,
                VitalSmarts USA, Blanchard International, and Aspectum
                Consulting, Finland—all recognized for their excellence in
                business consulting, training, and coaching. With nearly four
                decades of professional experience in sales, marketing, and
                learning & development roles at top-tier companies like
                Novartis, Amul, and the Aditya Birla Group, Yogesh brings
                unparalleled industry insight and leadership acumen to the
                table.
              </p>
              {showText && (
                <div>
                  <p>
                    Yogesh Sood is the Founder and Chairman & Managing Director
                    (CMD) of BYLD Group (www.byldgroup.com). He also leads the
                    Indian boards of reputed global organizations, including
                    DOOR Training and Consulting, VitalSmarts USA, Blanchard
                    International, and Aspectum Consulting, Finland—all
                    recognized for their excellence in business consulting,
                    training, and coaching. With nearly four decades of
                    professional experience in sales, marketing, and learning &
                    development roles at top-tier companies like Novartis, Amul,
                    and the Aditya Birla Group, Yogesh brings unparalleled
                    industry insight and leadership acumen to the table. A
                    distinguished MCC (Master Certified Coach) accredited by
                    ICF, Yogesh has over 19 years of active coaching and
                    mentoring experience, working closely with senior leadership
                    teams across multinational and Indian corporations. His
                    expertise lies in enhancing leadership effectiveness,
                    resolving team conflicts, and managing difficult workplace
                    dialogues to positively influence business outcomes. He was
                    instrumental in establishing the first ICF chapter in South
                    Asia in 2005 and is also a member of the elite international
                    panel of coaches for Korn Ferry, contributing to leadership
                    development across global markets. Yogesh holds a
                    postgraduate degree in management, is an alumnus of Harvard
                    Business School, and a graduate of the College of Executive
                    Coaching, USA. He has completed advanced certifications in
                    areas such as design thinking, digital strategies, health
                    and wellness coaching, and executive and performance
                    coaching. His thought leadership is widely recognized
                    through various Indian and international publications.
                    Additionally, he has contributed to two globally acclaimed
                    books: “Diversity in Coaching” (Kogan Page UK, 2009) and
                    “Ready, Aim, Excel” (Expert Insights USA, 2011). Among his
                    prestigious clientele are organizations like Airtel, Canon,
                    Microsoft India, Tata Sky, and Infosys. Yogesh continues to
                    travel globally to deliver internationally certified
                    leadership and strategy development programs. He can be
                    reached via LinkedIn or through the official BYLD Group
                    website.
                  </p>
                </div>
              )}
              <button
                className="register-btn"
                onClick={() => setShowText(!showText)}
              >
                Read More
              </button>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="ImgBox">
                <img
                  src="/assets/img/yogeshShoodImg.png"
                  alt="Speaker 1"
                  className="img"
                />
                <div className="contentBOx1">
                  <p>Mr. Yogesh sood, ACTP, </p>
                  <p>MCC(ICF)</p>
                  <p className="smallText">(CMD BYLD Group)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events-section">
        <div className="container-fluid iconSide">
          <div className="row">
            <div className="col-md-12  mb-3">
              <h3>Upcoming Events &amp; Learning Opportunities</h3>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-12 col-sm-12 relative mb-5 mt-5">
              <div className="wrapper">
                <div className="top-v"></div>
                <div className="orange-shape"></div>
                <div className="dark-rect">
                  <p className="month mb-0">September</p>
                  <p className="date mb-0">05, 2025</p>
                </div>
              </div>
              <div className="event-title">Facilitator : Yogesh Sood</div>
              <div className="event-card">
                <div className="event-details">
                  <div className="facilitator">
                    <h3 className="mb-0">Goal Setting</h3>
                    <p className="mb-0">
                      11:00AM to 12PM to 04:00PM to 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 relative mt-5 mb-5">
              <div className="wrapper">
                <div className="top-v"></div>
                <div className="orange-shape"></div>
                <div className="dark-rect">
                  <p className="month mb-0">September</p>
                  <p className="date mb-0">19, 2025</p>
                </div>
              </div>
              <div className="event-title">Facilitator : Yogesh Sood</div>
              <div className="event-card">
                <div className="event-details">
                  <div className="facilitator">
                    <h3 className="mb-0">Accountability & Ownership</h3>
                    <p className="mb-0">
                      11:00AM to 12PM to 04:00PM to 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offer-bar-section">
        <div className="container-fluid">
          <div id="offerBar" className="offer-bar">
            <span className="tag">#speakerseries</span>
            <div className="marquee">
              <span>Get 10% off for 5+ nominations | 20% off for 10+</span>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
