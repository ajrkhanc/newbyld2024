import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export async function getServerSideProps(context) {
  const caturl = context.params.gtdResults;

  const res = await fetch(
    `https://clblogs.vercel.app/api/styleunderstressassessment/${caturl}`
  );
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
}

export default function Home({ result }) {
  async function downloadAsPDF() {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.getElementById("demo");

    const opt = {
      margin: 0.5,
      filename: "style-under-stress-result.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  }

  return (
    <>
      <Head>
        <title>Style Under Stress Assessment Result | Crucial Learning</title>
        <meta
          name="description"
          content="The GTD Assessment is a twenty-question quiz that helps reveal some of your tendencies with managing workflow."
        />
      </Head>

      <section className="assesmentpart2 aalpading0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 text-center">
              <button onClick={downloadAsPDF} className="submit btnnewc">
                Download Result
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="assesmentbannnerbg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <br />
              <br />
              {result.slice(0, 1).map((results) => (
                <h3 key={results._id}>Hi {results.name}</h3>
              ))}

              <h2>Your Style Under Stress™ Results</h2>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>

      {/* ------------ PDF CONTENT STARTS HERE ------------ */}

      <section className="assesmentpart2" id="demo">
        <div className="container">
          <div className="row align-items-center">
            {result.slice(0, 1).map((results) => {
              const silence =
                parseInt(results.q1) +
                parseInt(results.q2) +
                parseInt(results.q3);

              const violence =
                parseInt(results.q4) +
                parseInt(results.q5) +
                parseInt(results.q6);

              const Masking = parseInt(results.q3);
              const Avoiding = parseInt(results.q2);
              const Withdrawing = parseInt(results.q1);

              const Controlling = parseInt(results.q4);
              const Labeling = parseInt(results.q5);
              const Attacking = parseInt(results.q6);

              const ch3 = parseInt(results.q13);
              const ch4 = parseInt(results.q14);
              const ch5 = parseInt(results.q15);
              const ch6 = parseInt(results.q16);
              const ch7 = parseInt(results.q17);
              const ch8 = parseInt(results.q18);

              return (
                <div key={results._id} className="col-md-12">
                  <h3 className="text-center" style={{ marginBottom: "30px" }}>
                    Hi {results.name}, here is your Style Under Stress™ Report
                  </h3>

                  <div className="component-wrapper assessment paddi20">
                    <div className="component-content">
                      <div className="assessment-right">
                        {/* Silence Block */}
                        <div className="assessment-result-block">
                          <h3>How often do you move towards silence?</h3>
                          <div className="result-bar-wrapper">
                            <div
                              className="result-bar bgredc"
                              style={{ width: silence * 33.34 + "%" }}
                            ></div>
                          </div>
                          <ul>
                            <li>Masking: {Masking}</li>
                            <li>Avoiding: {Avoiding}</li>
                            <li>Withdrawing: {Withdrawing}</li>
                          </ul>
                        </div>

                        <hr />

                        {/* Violence Block */}
                        <div className="assessment-result-block">
                          <h3>
                            How often do you move towards verbal violence?
                          </h3>
                          <div className="result-bar-wrapper">
                            <div
                              className="result-bar bgredc"
                              style={{ width: violence * 33.34 + "%" }}
                            ></div>
                          </div>
                          <ul>
                            <li>Controlling: {Controlling}</li>
                            <li>Labeling: {Labeling}</li>
                            <li>Attacking: {Attacking}</li>
                          </ul>
                        </div>

                        <hr />

                        {/* Dialogue Score */}
                        <div className="assessment-result-block">
                          <h3>Dialogue Skills Score</h3>
                          <ul>
                            <li>Choose Your Topic (Ch 3): {ch3}</li>
                            <li>Start with Heart (Ch 4): {ch4}</li>
                            <li>Master My Stories (Ch 5): {ch5}</li>
                            <li>Learn To Look (Ch 6): {ch6}</li>
                            <li>Make It Safe (Ch 7): {ch7}</li>
                            <li>STATE My Path (Ch 8): {ch8}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------ PDF CONTENT ENDS HERE ------------ */}
    </>
  );
}
