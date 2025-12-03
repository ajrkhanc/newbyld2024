import Head from "next/head";

export default function BrowseCourses() {
  const submitF = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";

    var q1 = event.target.q1.value;
    var q2 = event.target.q2.value;
    var q3 = event.target.q3.value;
    var q4 = event.target.q4.value;
    var q5 = event.target.q5.value;
    var q6 = event.target.q6.value;
    var q13 = event.target.q13.value;
    var q14 = event.target.q14.value;
    var q15 = event.target.q15.value;
    var q16 = event.target.q16.value;
    var q17 = event.target.q17.value;
    var q18 = event.target.q18.value;

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const organization = event.target.organization.value;
    const Designation = event.target.designation.value; // FIXED

    var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
    nameurl = nameurl.toLowerCase();
    const newnameurl = nameurl.split(" ").join("-");

    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://clblogs.vercel.app/api/styleunderstressassessment"
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(
      "q1=" +
        q1 +
        "&q2=" +
        q2 +
        "&q3=" +
        q3 +
        "&q4=" +
        q4 +
        "&q5=" +
        q5 +
        "&q6=" +
        q6 +
        "&q13=" +
        q13 +
        "&q14=" +
        q14 +
        "&q15=" +
        q15 +
        "&q16=" +
        q16 +
        "&q17=" +
        q17 +
        "&q18=" +
        q18 +
        "&name=" +
        name +
        "&email=" +
        email +
        "&phone=" +
        phone +
        "&organization=" +
        organization +
        "&newnameurl=" +
        newnameurl
    );

    xhr.onreadystatechange = function () {
      if (xhr.status == 200) {
        document.getElementById("response").innerHTML = "Assessment Result";

        window.setTimeout(function () {
          window.location.href = `/cruciallifechangingskills/assessment/style-under-stress-assessment/${newnameurl}`;
        }, 1000);
      } else {
        document.getElementById("response").innerHTML =
          "You Have Submitted to go";
        setTimeout(function () {
          document.getElementById("response").innerHTML = "";
          document.getElementById("submitbuttonform").value = "Submit JobForm";
        }, 3000);
      }

      var xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
        console.log(this.responseText);
      };
      xhttp.open(
        "POST",
        "https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/158/feedback"
      );
      xhttp.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );

      var Assessment = "Style Under Stress - Assessment Form Marketing";
      xhttp.send(
        "name=" +
          name +
          "&email=" +
          email +
          "&phone=" +
          phone +
          "&organization=" +
          organization +
          "&designation=" +
          Designation +
          "&assessment=" +
          Assessment
      );
    };

    xhr.onerror = function () {
      console.log("error");
    };
  };

  return (
    <>
      <Head>
        <title>Style Under Stress Assessment | Crucial Learning</title>
        <link
          rel="canonical"
          href="https://byldgroup.com/cruciallifechangingskills/assessment/style-under-stress-assessment"
        />
        <meta
          name="description"
          content="Discover how well you handle Crucial Conversations and identify where you can improve with the Style Under Stress™ assessment."
        />
      </Head>

      <section className="assesmentbannnerbg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>WHAT’S YOUR STYLE UNDER STRESS?</h2>
              <h3>Stressed? Who, me? Never</h3>
              <p>
                When stakes are high, emotions run strong, and opinions differ,
                we all struggle to stay cool.
              </p>
            </div>
            <div className="col-md-6">
              <div className="assesmentimgbanner">
                <img src="/classets/img/style-under-stress-assessment.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="assesmentpart2">
        <div className="container">
          <form onSubmit={submitF}>
            <div className="row inpuut">
              <div className="col-sm-6 mb-12">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                />
              </div>

              <div className="col-sm-6 mb-12">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Work Email/Email*"
                  required
                />
              </div>

              <div className="col-sm-6 mb-12">
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  maxLength="10"
                  minLength="10"
                  pattern="[0-9]*"
                  placeholder="Phone No.*"
                  required
                />
              </div>

              <div className="col-sm-6 mb-12">
                <input
                  className="form-control"
                  type="text"
                  name="organization"
                  placeholder="Organization*"
                  required
                />
              </div>

              <div className="col-sm-6 mb-12">
                <input
                  className="form-control"
                  type="text"
                  name="designation"
                  placeholder="Designation*"
                  required
                />
              </div>
            </div>

            <input
              id="submitbuttonform"
              type="submit"
              value="Submit"
              className="assesmetmain"
              tabIndex="201"
            />
            <p className="feedbackcolor" id="response"></p>
          </form>
        </div>
      </section>
    </>
  );
}
