import Head from "next/head";

export default function Ebook() {
  const EbookForm = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/25/feedback"
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
          document.getElementById("contactForm").reset();
          document.getElementById("showlabel").style.display = "block";
          setTimeout(function () {
            window.open("/classets/pdf/Costly-Conversationsf.pdf", "_blank");
          }, 3000);
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "yourname=" +
        event.target.name.value +
        "&youremail=" +
        event.target.email.value +
        "&phonenumber=" +
        event.target.phone.value +
        "&companyname=" +
        event.target.organization.value +
        "&ebookname=" +
        event.target.ebookname.value
    );
  };

  return (
    <>
      <Head>
        <title>
          Leader&#39;s Guide to Team Productivity - Crucial Life-Changing Skills
        </title>
        <link
          rel="canonical"
          href="https://byldgroup.com/cruciallifechangingskills/ebook/leaders-guide-to-team-productivity"
        />
        <meta
          name="description"
          content="Leader's Guide to Team Productivity"
        />
      </Head>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 left-about-area ptt-70 pbb-70 text-center">
              <h1>COSTLY CONVERSATIONS</h1>

              <p className="colorb">STOP US IF THIS SOUNDS FAMILIAR . . .</p>

              <p className="colorb">
                In your organization there’s an employee who is just getting by
                with minimal effort. A supervisor is aware but doesn’t like
                confrontation and stays silent. Other employees must pick up the
                slack and begin to feel bitter, losing respect for both the
                employee and the supervisor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ptt-40" id="registered">
        <div className="container">
          <div className="row workshop-form">
            <div className="col-md-12 form-area ptt-10">
              <form id="contactForm" className="row formb" onSubmit={EbookForm}>
                <div className="col-lg-12 contact-title">
                  <h3 className="formh3 ptt-5">
                    To download the e-book, kindly fill in the details.
                  </h3>
                </div>
                <div className="col-md-12 col-lg-6 col-sm-12">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    required
                  />
                </div>

                <div className="col-md-12 col-lg-6 col-sm-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email/Email*"
                    required
                  />
                </div>

                <div className="col-md-12 col-lg-6 col-sm-12">
                  <input
                    type="text"
                    name="phone"
                    maxlength="10"
                    minlength="10"
                    pattern="[0-9]*"
                    placeholder="Phone No. (Optional)"
                  />
                </div>

                <div className="col-md-12 col-lg-6 col-sm-12">
                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization (Optional)"
                  />
                </div>

                <div className="col-md-12 col-lg-6 col-sm-12 mb-12 d-none">
                  <input
                    type="checkbox"
                    name="ebookname"
                    value="Leader's Guide to Team Productivity"
                  />
                </div>

                <div className="col-md-12">
                  <input
                    id="submitbuttonform"
                    className="formbtn"
                    type="submit"
                    value="Submit"
                    style={{ width: "100%!important" }}
                  />
                </div>
                <p id="showlabel" style={{ display: "none" }}></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
