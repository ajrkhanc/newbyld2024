import React, { useState } from "react";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";
import { IoLogoLinkedin } from "react-icons/io5";

export default function HighPerformingTeams() {
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
      "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/535/feedback",
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
        <title>Authentic Executive Presence</title>
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
      <section className="bgImgAuthenticExecutivePresence">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="content mb-5">
                <h1 style={{ color: "#000" }}>
                  Foundations of High-Performing Teams
                </h1>
                <p style={{ color: "#000", fontSize: "24px" }}>
                  Learn how to align, inspire, and sustain teams that
                  consistently deliver results.
                </p>
                <div className="buttons">
                  <a href="#webinar-preface" className="btn join">
                    Join Now
                  </a>
                  <a
                    href="#webinar-preface"
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
      </section>

      <section className="details " id="webinar-preface">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mb-3 mt-3 text-center">
              <img
                src="/assets/img/blanchandLogo.png"
                className="img-fluid "
                alt="blanchandLogo"
              />
            </div>
            <div className="col-md-12 ">
              <h2>Webinar Preface</h2>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12 mb-5">
              <p>
                In today’s dynamic business landscape, success depends not only
                on individual talent but on how effectively teams work together.
                Leaders often face the challenge of building teams that stay
                focused, collaborative, and resilient, especially in
                fast-changing environments. As part of the{" "}
                <strong>Blanchard India Speaker Series</strong>,this session on
                Foundations of High-Performing Teams introduces leaders to the
                mindset, structure, and behaviors that drive sustained team
                performance. Participants will explore predictable team stages,
                discover strategies to align goals and roles, and learn how to
                foster trust and accountability for long-term results
              </p>

              <h3>By attending this session, you will learn to:</h3>
              <ul>
                <li>Navigate the stages of team development</li>
                <li>Align team purpose, goals, and roles</li>
                <li>Boost productivity while maintaining morale</li>
                <li>Apply the right leadership style for your team</li>
                <li>Create an actionable plan to drive high performance</li>
              </ul>
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
                    <option value="">Referred By</option>
                    <option value="Email">Email</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Website">Website</option>
                    <option value="Reference">Reference</option>
                    <option value="Sales Representative">
                      Sales Representative
                    </option>
                  </select>
                  <div style={{ textAlign: "right" }}>
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
                Anand Dewan is a seasoned Learning & Organization Development
                consultant with over 25 years of experience across line and
                support functions, including nearly a decade in Concept Selling.
                As the former Global Service Delivery Head for NIIT’s Strategic
                Business Unit, he has shaped some of the finest training talent
                in India. Recognized for his contributions to the Indian
                training industry,
                {showText && (
                  <span>
                    he was honored by the World HRD Congress as one of the 25
                    most talented global leaders in L&D, and under his
                    leadership, Kotak received a special commendation at the
                    Golden Peacock National Training Award on its very first
                    attempt in 2014. Anand has facilitated high-performing teams
                    across industries in India and internationally, including
                    Egypt and Oman.
                  </span>
                )}
              </p>

              <button
                className="register-btn"
                onClick={() => setShowText(!showText)}
              >
                Read More
              </button>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="ImgBox">
                <img src="/assets/img/ad.png" alt="Speaker 1" className="img" />
                <div className="contentBOx1">
                  <p>HR & Skilling by Mr. Anand Dewan  </p>
                  {/* <p>MCC(ICF)</p>
                  <p className="smallText">(CMD BYLD Group)</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events-section" style={{ background: "#9ED8B3" }}>
        <div className="container iconSide">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-dark font-weight-extrabold">Event Details</h3>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3 col-md-6  col-sm-12 mb-2">
              <div className="eventBox">
                <div className="eventImg">
                  <img src="/assets/img/cl.png" alt="Event 1" />
                </div>
                <div className="eventContent">
                  <p>Date</p>
                  <p className="smallTextOne"> 14 October, 2025</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div className="eventBox">
                <div className="eventImg">
                  <img src="/assets/img/time.png" alt="Event 2" />
                </div>
                <div className="eventContent">
                  <p>Time</p>
                  <p className="smallTextOne"> 03:00 PM – 05:00 PM</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div className="eventBox">
                <div className="eventImg">
                  <img src="/assets/img/user.png" alt="Event 3" />
                </div>
                <div className="eventContent">
                  <p>Facilitator</p>
                  <p className="smallTextOne">Anand Dewan</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div className="eventBox">
                <div className="eventImg">
                  <img src="/assets/img/cl.png" alt="Event 4" />
                </div>
                <div className="eventContent">
                  <p>Price</p>
                  <p className="smallTextOne"> ₹5,000 + GST (per person)</p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <a
                  href="#webinar-preface"
                  className="register-btn"
                  style={{ color: "#fff", padding: "20px 50px" }}
                >
                  {" "}
                  Reserve Your Seat Now
                </a>
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
