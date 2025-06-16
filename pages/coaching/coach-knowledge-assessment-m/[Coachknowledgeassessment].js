import Head from "next/head";

// Server-side data fetch
export async function getServerSideProps(context) {
  const caturl = context.params.Coachknowledgeassessment;

  try {
    const res = await fetch(`https://byldblogs.vercel.app/api/coach-knowledge-assessment/${caturl}`);
    const response = await res.json();

    // Fix: handle array vs object
    const result = Array.isArray(response) ? response[0] : response;
    // console.log("Fetched result:", result);

    if (!res.ok || !result || Object.keys(result).length === 0) {
      return { notFound: true };
    }

    return {
      props: {
        result,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { notFound: true };
  }
}

export default function Result({ result }) {
  // Calculate total score
  const getTotalScore = () => {
    let total = 0;
    for (let i = 1; i <= 80; i++) {
      const val = parseInt(result[`q${i}`], 10);
      if (!isNaN(val)) total += val;
    }
    return total;
  };

  const totalScore = getTotalScore();
  const passingScore = 56; // 70% of 80
  const isPassed = totalScore >= passingScore;
  const status = isPassed ? "Pass" : "Fail";
  const statusColor = isPassed ? "green" : "red";

  // PDF download
  async function downloadAsPDF() {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.getElementById("demo");
    html2pdf().from(element).save();
  }

  return (
    <>
      <Head>
        <title>Coach Knowledge Assessment Result</title>
        <meta name="description" content="Coach Knowledge Assessment Result" />
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

      <section id="demo" className="pbb-10 pll-20 prr-20">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="countertoph2 text-center resh">
                {result.name} - Self-Assessment Report
              </h4>
            </div>

            <div className="col-sm-6 boxshd">
              <div className="msicon mtt-0">
                <div className="services-text">
                  <h3 className="title">Coach</h3>
                  <p className="ptt-5 mbb-10">
                    Coaching is a skill to move people from where they are to where they aspire to be. ICF defines coaching as a thought-provoking and creative process that inspires clients to maximize their potential.
                  </p>
                </div>
              </div>
              <div className="msicon">
                <div className="services-text">
                  <h5 className="pinkh">A coach’s responsibilities:</h5>
                  <ul className="estimate-info mtt-5">
                    <li>Clarify goals with the client</li>
                    <li>Encourage self-discovery</li>
                    <li>Generate client-owned strategies</li>
                    <li>Ensure accountability</li>
                    <li>Improve leadership and life skills</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 boxshd letf5border text-center">
              <img src="/assets/img/df.png" alt="development" />
            </div>
          </div>
        </div>

        <div className="container ptt-30 pbb-40">
          <div className="row">
            <div className="col-sm-12">
              <div className="newtblc">
                <table>
                  <thead className="tablefbh">
                    <tr>
                      <th width="15%">Score</th>
                      <th>Level of Readiness</th>
                      <th width="20%">Your Score & Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Less than 60</td>
                      <td>Work on coaching fundamentals to progress in your journey.</td>
                      <td rowSpan="3" align="center">
                        <h4 className="yresultc text-center">
                          <span className="thmecc">{totalScore}</span>
                        </h4>
                        <h5 style={{ color: statusColor, marginTop: "10px" }}>
                          Status: {status}
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <td>Between 60–80</td>
                      <td>Good understanding. Consider certification.</td>
                    </tr>
                    <tr>
                      <td>More than 80</td>
                      <td>Excellent! Keep progressing with ICF or further training.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
