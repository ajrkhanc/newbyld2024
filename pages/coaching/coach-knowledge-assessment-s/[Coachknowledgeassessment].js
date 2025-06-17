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

            {/* <div className="col-sm-6 boxshd">
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
            </div> */}
          </div>
        </div>

        <div className="container ptt-30 pbb-40">
          <div className="row">
            <div className="col-sm-12">
              <div className="newtblc">
                <table>
                  <thead className="tablefbh">
                    <tr>
                      <th width="20%">Score Range (out of 80)</th>
                      <th>Interpretation</th>
                      <th>Suggested Action</th>
                      <th width="20%" className="text-center">Your Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong> 72 – 80 </strong></td>
                      <td><strong>Excellent</strong> High coaching proficiency</td>
                      <td>Ready for credentialing. Continue with reflective practice and advanced development.</td>
                      <td rowSpan="5" align="center">
                        <h4 className="yresultc text-center">
                          <span className="thmecc">{totalScore}</span>
                        </h4>
                        <h5 style={{ color: statusColor, marginTop: "10px" }}>
                          Status: {status}
                        
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <td> <strong>64–71</strong> </td>
                      <td> <strong>Strong –</strong>  Above average understanding</td>
                      <td>Well-prepared for coaching situations; minor gaps to refine through practice.</td>
                      

                    </tr>
                    <tr>
                      <td><strong>56 – 63 </strong> </td>
                      <td><strong>Moderate –</strong>  Basic knowledge with gaps</td>
                      <td>Review weak competencies; consider mentor coaching or further training.</td>
                    </tr>
                    <tr>
                      <td><strong>48 – 55</strong> </td>
                      <td><strong> Emerging – </strong> Limited application skill</td>
                      <td>Needs structured practice, feedback, and targeted upskilling in specific competencies.</td>
                    </tr>
                     <tr>
                      <td><strong>Below 48</strong> </td>
                      <td><strong> Needs Development – </strong> Fundamental gaps</td>
                      <td>Revisit ICF core competencies thoroughly; recommended to undergo foundational training.</td>
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
