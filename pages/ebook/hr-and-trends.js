import Head from "next/head";

export default function Ebookpage() {
  const EbookSubmit = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/everythingdisc/wp-json/contact-form-7/v1/contact-forms/5/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details.";

          document.getElementById("showlabel").style.display = "block";
          setTimeout(function () {
            window.open(
              "/assets/pdf/Blanchard-2026-L-D-Survey-BYLD.pdf",
              "_blank"
            );
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
        "&leadsquared-mx_Business_Entity=" +
        event.target.Business_Entity.value +
        "&formname=" +
        event.target.formname.value
    );
  };

  return (
    <>
      <Head>
        <title>
          2026 HR & L&D Trends E-Book | Key Insights for HR Professionals – BYLD
          Group
        </title>
        <meta
          name="description"
          content="I Download BYLD Group’s 2026 HR & L&D Trends E-Book to explore the latest workforce, leadership, and learning & development strategies shaping the future of HR. Get expert insights and practical guidance to stay ahead in talent management, capability building, and organizational performance."
        />
      </Head>

      <div className="rs-services">
        <div className="container">
          <div className="row y-middle">
            <div className="col-lg-12">
              <div className="sec-title3 ptt-30">
                <h4 className="countertoph2 text-center font30">
                  2026 HR and L&D Trends
                </h4>
                <div className="heading-border-line left-center"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="servicesContent">
                <h3 className="font26 mb-15">
                  Turning Uncertainty into Opportunity
                </h3>

                <p>Leadership development is no longer a support initiative.</p>

                <p>
                  <strong>It’s a strategic business lever.</strong>
                </p>

                <p>
                  Blanchard’s{" "}
                  <strong>2026 HR &amp; L&amp;D Trends Survey</strong>,
                  featuring insights from nearly{" "}
                  <strong>500 leaders globally</strong>, highlights the shifts
                  shaping leadership, learning, and workplace culture in the
                  year ahead.
                </p>

                <p className="mt-10">
                  <strong>The message is clear:</strong>
                </p>

                <ul className="mt-10">
                  <li>
                    Leadership capability directly influences organizational
                    performance
                  </li>
                  <li>
                    Agility, engagement, and retention are driven by behavior
                  </li>
                  <li>
                    Organizations that invest in human-centered leadership are
                    better equipped to navigate uncertainty and drive
                    sustainable results
                  </li>
                </ul>

                <p className="mt-15">
                  For HR and L&amp;D leaders planning their{" "}
                  <strong>2026 strategy</strong>, this report offers timely
                  insights and practical direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rs-achievement style1 relative ptt-50 pbb-40">
        <div className="container">
          <div className="row rs-vertical-middle">
            <div className="col-lg-6 pr-0">
              <div className="onlyshd">
                <img src="/assets/img/ebook/image.png" alt="books" />
              </div>
            </div>
            <div className="col-lg-6 md-pt-50">
              <div className="borderall">
                <div className="bannerform formshd">
                  <div className="sec-title3 mbb-35 text-left">
                    <h4 className="countertoph2 text-left font24">
                      Download now
                    </h4>
                    <div className="heading-border-line left-style"></div>
                  </div>
                  <form
                    id="contact-form"
                    className="clientcornner pbb-20"
                    onSubmit={EbookSubmit}
                  >
                    <div className="row">
                      <div className="col-sm-12 mb-12">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name*"
                          required
                        />
                      </div>
                      <div className="col-sm-12 mb-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Work Email/Email*"
                          required
                        />
                      </div>
                      <div className="col-sm-12 mb-12">
                        <input
                          type="text"
                          name="phone"
                          maxlength="10"
                          minlength="10"
                          pattern="[0-9]*"
                          placeholder="Phone No. (Optional)"
                        />
                      </div>

                      <div className="col-sm-12 mb-12">
                        <input
                          type="text"
                          name="organization"
                          placeholder="Organization (Optional)"
                        />
                      </div>
                      <div className="col-sm-12 mb-12 d-none">
                        <input
                          type="text"
                          name="formname"
                          value="Creating a Coaching Culture"
                        />
                      </div>
                      <div className="col-sm-12 mb-12 d-none">
                        <input
                          type="text"
                          name="Business_Entity"
                          value="byld"
                        />
                      </div>
                      <div className="col-lg-12 mb-12">
                        <input
                          id="submitbuttonform"
                          className="clientcornnerbtn"
                          type="submit"
                          value="Download"
                        />
                      </div>
                      <p id="showlabel" style={{ display: "none" }}></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
