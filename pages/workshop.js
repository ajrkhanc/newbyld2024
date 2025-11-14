import Head from "next/head";

export default function Workshops() {
  const registerUser = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/17/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href = "/thank-you";
          }, 3000);
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "leadsquared-FirstName=" +
        event.target.name.value +
        "&leadsquared-EmailAddress=" +
        event.target.email.value +
        "&leadsquared-Mobile=" +
        event.target.phone.value +
        "&leadsquared-Company=" +
        event.target.organization.value +
        "&leadsquared-JobTitle=" +
        event.target.Designation.value +
        "&leadsquared-mx_States=" +
        event.target.Location.value +
        "&leadsquared-mx_Showed_Interest_in=" +
        event.target.leadsquared_mx_Showed_Interest_in.value +
        "&referredby=" +
        event.target.referredby.value +
        "&leadsquared-Notes=" +
        event.target.QuestionsComments.value +
        "&leadsquared-mx_Business_Entity=" +
        event.target.leadsquared_mx_Business_Entity.value
    );
  };

  return (
    <>
      <Head>
        <title>Events - BYLD Group</title>
        <link rel="canonical" href="https://byldgroup.com/workshop" />
        <meta
          name="description"
          content="April 29th, 2022Trapologist At Work™TM Workshop Virtual Public Workshop: April 29th, 2022 Learn More & Register April 26th – 29th, 2022DISC Train-the-Trainer (TTT) Virtual Public Workshop: April 26th – 29th, 2022 Learn More & Register May 9th – 12th, 2022Blanchard India Online Workshop Virtual Public Workshop: May 9th – 12th, 2022 Reserve Your Seat May… Continue reading workshop"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/homemodule.css"
        />
      </Head>

      <div class="rs-breadcrumbs workshopsbg">
        <div class="container">
          <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
            <ul>
              <li>
                <a href="/">
                  <span>Home</span>
                </a>
                <span class="separator">/</span>
              </li>
              <li>
                <a href="/workshop">
                  <span>Workshop</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div class="breadcrumbs-inner">
                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                  Workshops - BYLD Group
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ptt-60 pbb-60 positionrelative">
        <div className="container">
          <div className="row zindx">
            <div className="col-lg-4 col-sm-12 mb-30">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/evn2.webp" alt="evnt1" />
                  <span>Event 4th & 5th, December-2025</span>
                </div>
                <div className="eventbottom">
                  {/* <h4 className="eventtitlec">Time: 4:00 PM - 5:00 PM</h4> */}
                  <h3 className="mb-0">The Heart Behind Every Tough Talk </h3>
                  <p>What you mean matters more than what you say.</p>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 mb-30">
              <div className="eventcontentbox">
                <h2 className="mb-15">Workshop Overview</h2>
                <p className="mb-15">
                  In this session, you’ll discover why your intent matters more
                  than your message and how clarifying what you really want—for
                  yourself, for others, and for the relationship—changes the
                  course of every Crucial Conversation. Whether you’re a Crucial
                  Conversations expert or just getting started, master trainer
                  Scott Robley will share practical skills that will help you
                  ground yourself in purpose, build trust, and ultimately drive
                  better results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="solutionarrowbox1">
          <img src="/assets/img/homeb/orangearrow.png" />
        </div>
        <div className="solutionarrowbox2">
          <img src="/assets/img/homeb/bluearrow1.png" />
        </div>
      </section>

      <div id="Register" className="homecon ptt-60">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">
                Register Now
              </h2>
            </div>
          </div>

          <div className="row y-middle">
            <div className="col-lg-5 md-mb-50">
              <div className="contact-img wow fadeInUp delay-0-2s animated animateUP">
                <img src="/assets/img/homeb/contactl.png" alt="Contact" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-wrap">
                <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                  <form
                    id="contact-form"
                    className="clientcornner ptt-5 pbb-20"
                    onSubmit={registerUser}
                  >
                    <div className="row">
                      <div className="col-sm-6 mb-12">
                        <input
                          type="text"
                          className="borrr"
                          name="name"
                          placeholder="Your Name*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          type="email"
                          className="borrr"
                          name="email"
                          placeholder="Work Email*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          type="text"
                          className="borrr"
                          name="phone"
                          maxlength="10"
                          minlength="10"
                          pattern="[0-9]*"
                          placeholder="Phone No.*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          type="text"
                          className="borrr"
                          name="organization"
                          placeholder="Organization*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          type="text"
                          className="borrr"
                          name="Designation"
                          placeholder="Designation*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          type="text"
                          className="borrr"
                          name="Location"
                          placeholder="Location*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <select
                          name="leadsquared_mx_Showed_Interest_in"
                          required
                        >
                          <option value="">Pick up any Slot*</option>

                          <option value="The-Heart-Behind-Every-Tough-Talk 4th & 5th, Dec-2025">
                            The-Heart-Behind-Every-Tough-Talk 4th & 5th,
                            Dec-2025
                          </option>
                        </select>
                      </div>
                      <div className="col-sm-6 mb-12">
                        <select name="referredby" required>
                          <option value="">Referred By*</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Google Search">Google Search</option>
                          <option value="Reference">Reference</option>
                        </select>
                      </div>
                      <div className="col-sm-6 mb-12 d-none">
                        <select name="leadsquared_mx_Business_Entity" required>
                          <option value="BYLD Group">BYLD Group</option>
                        </select>
                      </div>
                      <div className="col-lg-12 mb-12">
                        <textarea
                          className="from-control"
                          name="QuestionsComments"
                          placeholder="Questions/Comments:"
                        ></textarea>
                      </div>
                      <div className="col-lg-12 mb-12">
                        <input
                          id="submitbuttonform"
                          className="clientcornnerbtn width150"
                          type="submit"
                          value="Get in Touch"
                        />
                      </div>
                      <p id="showlabel" style={{ display: "none" }}></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
