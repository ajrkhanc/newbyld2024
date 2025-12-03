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
                <h3 key={results.id}>Hi {results.name}</h3>
              ))}

              <h2>Your Style Under Stress™ Results</h2>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>

      <section className="assesmentpart2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div>
                <h2>UNDERSTANDING YOUR RESULTS</h2>
                <p>
                  The Style Under Stress assessment measures two areas: Your
                  style under stress, and your dialogue skills.
                </p>
                <p>
                  Your Style Under Stress™ Score indicates how likely you are to
                  move toward silence or verbal violence during a Crucial
                  Conversation.
                </p>
                <p>
                  Your Dialogue Skills Score indicates how well you use the
                  skills taught in Crucial Conversations.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="formsbarassesment">
                {result.slice(0, 1).map((results) => {
                  const silence =
                    parseInt(results.q1) +
                    parseInt(results.q2) +
                    parseInt(results.q3);

                  const silenceoverallresult = silence * 33.34 + "%";

                  const Masking = parseInt(results.q3);
                  const Avoiding = parseInt(results.q2);
                  const Withdrawing = parseInt(results.q1);

                  const violence =
                    parseInt(results.q4) +
                    parseInt(results.q5) +
                    parseInt(results.q6);

                  const violenceoverallresult = violence * 33.34 + "%";

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
                    <div
                      className="recent-post-widget paddi20"
                      id="demo"
                      key={results.id}
                    >
                      <div
                        className="component-wrapper assessment"
                        id="gtd-results"
                      >
                        <div className="component-content">
                          <div className="assessment-right">
                            <div className="assessment-result-block">
                              <h3>How often do you move towards silence?</h3>
                              <div className="result-bar-wrapper">
                                <div
                                  className="result-bar bgredc"
                                  style={{ width: silenceoverallresult }}
                                ></div>
                              </div>

                              <ul>
                                <li>Masking: {Masking}</li>
                                <li>Avoiding: {Avoiding}</li>
                                <li>Withdrawing: {Withdrawing}</li>
                              </ul>
                            </div>

                            <hr />

                            <div className="assessment-result-block">
                              <h3>
                                How often do you move towards verbal violence?
                              </h3>
                              <div className="result-bar-wrapper">
                                <div
                                  className="result-bar bgredc"
                                  style={{ width: violenceoverallresult }}
                                ></div>
                              </div>
                              <ul>
                                <li>Controlling: {Controlling}</li>
                                <li>Labeling: {Labeling}</li>
                                <li>Attacking: {Attacking}</li>
                              </ul>
                            </div>

                            <hr />

                            <div className="assessment-result-block">
                              <h3>Dialogue Skills Score</h3>
                              <ul>
                                <li>Choose Your Topic: {ch3}</li>
                                <li>Start with Heart: {ch4}</li>
                                <li>Master My Stories: {ch5}</li>
                                <li>Learn To Look: {ch6}</li>
                                <li>Make It Safe: {ch7}</li>
                                <li>STATE My Path: {ch8}</li>
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
          </div>
        </div>
      </section>
    </>
  );
}
