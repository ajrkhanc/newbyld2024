import Head from "next/head";
import styles from "../../../styles/coachKnowledge.module.css";
import { FaDownload } from "react-icons/fa6";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { IoTriangleSharp } from "react-icons/io5";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Server-side data fetch
export async function getServerSideProps(context) {
  const caturl = context.params.Coachknowledgeassessments;

  try {
    const res = await fetch(
      `https://byldblogs.vercel.app/api/coach-knowledge-assessment/${caturl}`
    );
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
  const getTotalScore = () => {
    let total = 0;
    for (let i = 1; i <= 80; i++) {
      const val = parseInt(result[`q${i}`], 10);
      if (!isNaN(val)) total += val;
    }
    return total;
  };

  const totalScore = getTotalScore();
  const passingScore = 56;
  const isPassed = totalScore >= passingScore;
  const status = isPassed ? "Pass" : "Fail";
  const statusColor = isPassed ? "green" : "red";

  const downloadAsPDF = async () => {
    const input = document.getElementById("demo");
    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#fff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pageWidth) / imgProps.width;

    let position = 0;

    if (imgHeight <= pageHeight) {
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
    } else {
      while (position < imgHeight) {
        pdf.addImage(imgData, "PNG", 0, -position, pageWidth, imgHeight);
        position += pageHeight;
        if (position < imgHeight) pdf.addPage();
      }
    }

    pdf.save("Coach-Knowledge-Report.pdf");
  };

  const scenarioTitles = [
    "Demonstrates Ethical Practice",
    "Embodies A Coaching Mindset",
    "Establishes And Maintains Agreements",
    "Cultivates Trust And Safety",
    "Maintains Presence",
    "Listens Actively",
    "Evokes Awareness",
    "Facilitates Client Growth",
  ];
  const chartData = [
    { name: "Correct", value: totalScore, fill: "#39CEF3" },
    { name: "Incorrect", value: 80 - totalScore, fill: "#FF6228" },
  ];

  return (
    <>
      <Head>
        <title>Coach Knowledge Assessment Result</title>
        <meta name="description" content="Coach Knowledge Assessment Result" />
      </Head>

      <section className={styles.assesmentpartHeading}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 text-center">
              <h2 className={styles.titles}>Coach Knowledge Assessment</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="pbb-10 pll-20 prr-20">
        <div className="container">
          <div className="row">
            {/* <div className="col-sm-6">
              <h4 className="countertoph2  resh ">
                {result.name} - Self-Assessment Report
              </h4>
            </div> */}
            <div className="col-sm-12 ">
              <div className={styles.downBtn}>
                <button onClick={downloadAsPDF} className={styles.btnnewc}>
                  <span>Download Result</span> <FaDownload />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="pbb-10 pll-20 prr-20">
        {/* Scenario Wise Cards */}
        <section className="CardWise pbb-10 pll-20 prr-20">
          <div className="container">
            <div className="row mbb-20">
              <div className="col-sm-6">
                <h4 className="countertoph2  resh ">
                  {result.name} - Self-Assessment Report
                </h4>
              </div>
            </div>
            <div className="row">
              {Array.from({ length: 8 }).map((_, scenarioIndex) => {
                const startQ = scenarioIndex * 10 + 1;
                const endQ = startQ + 9;
                let correct = 0;

                for (let i = startQ; i <= endQ; i++) {
                  const val = parseInt(result[`q${i}`], 10);
                  if (!isNaN(val) && val === 1) correct++;
                }

                const incorrect = 10 - correct;
                const correctPercent = correct * 10;
                const incorrectPercent = incorrect * 10;

                return (
                  <div
                    className="col-lg-6 col-md-6 col-sm-12 mb-4"
                    key={scenarioIndex}
                  >
                    <div className={styles.cardStyle}>
                      <div className={styles.cardHeader}>
                        <p className={styles.scenarioTitle}>
                          Scenario &rdquo;{scenarioTitles[scenarioIndex]}
                          &rdquo;
                        </p>
                        <span className={styles.cardNum}>
                          {String(scenarioIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className={styles.cardBody}>
                        <div className={styles.scoreBox}>
                          <svg width="100" height="100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="#ccc"
                              strokeWidth="6"
                              fill="none"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="#2871b0"
                              strokeWidth="6"
                              fill="none"
                              strokeDasharray={`${
                                (correctPercent * 251.2) / 100
                              }, 251.2`}
                              transform="rotate(-90 50 50)"
                            />
                          </svg>

                          {/* <div className={styles.triangle}>
                            <span className={styles.trianglePercent}>
                              {incorrectPercent}%
                            </span>
                          </div> */}

                          <div className={styles.triangle}>
                            <IoTriangleSharp className={styles.triangleOne} />

                            <span className={styles.trianglePercent}>
                              {incorrectPercent}%
                            </span>
                          </div>

                          <div className={styles.innerCircleText}>
                            {correctPercent}%
                          </div>
                        </div>
                        <div className={styles.cardScore}>{correct}/10</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="container ptt-30 pbb-40">
          <div className="row">
            <div className="col-sm-12">
              <div className="newtblc table-responsive">
                <table>
                  <thead className="tablefbh">
                    <tr>
                      <th width="20%">Score Range (out of 80)</th>
                      <th>Interpretation</th>
                      <th>Suggested Action</th>
                      <th width="20%" className="text-center">
                        Your Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>72 – 80</strong>
                      </td>
                      <td>
                        <strong>Excellent</strong> – High coaching proficiency
                      </td>
                      <td>
                        Ready for credentialing. Continue reflective practice
                        and advanced development.
                      </td>
                      <td rowSpan="5" align="center">
                        {/* Chart container */}
                        <div
                          style={{
                            width: "160px",
                            margin: "auto",
                            position: "relative",
                          }}
                        >
                          {/* Chart + centered score */}
                          <div
                            style={{
                              position: "relative",
                              width: "160px",
                              height: "160px",
                            }}
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={chartData}
                                  dataKey="value"
                                  innerRadius={55}
                                  outerRadius={70}
                                  startAngle={90}
                                  endAngle={-270}
                                  paddingAngle={1}
                                />
                              </PieChart>
                            </ResponsiveContainer>

                            {/* Centered Score Number */}
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "22px",
                                fontWeight: "bold",
                                color: "#FF6633",
                                textAlign: "center",
                              }}
                            >
                              {totalScore}
                            </div>
                          </div>

                          {/* Legend */}
                          <div style={{ marginTop: "10px" }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                                marginBottom: "5px",
                              }}
                            >
                              <div
                                style={{
                                  width: "14px",
                                  height: "14px",
                                  backgroundColor: "#39CEF3",
                                  marginRight: "6px",
                                }}
                              ></div>
                              <span style={{ fontSize: "14px" }}>Correct</span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                              }}
                            >
                              <div
                                style={{
                                  width: "14px",
                                  height: "14px",
                                  backgroundColor: "#FF6228",
                                  marginRight: "6px",
                                }}
                              ></div>
                              <span style={{ fontSize: "14px" }}>
                                Incorrect
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                              }}
                            >
                              <div
                                style={{
                                  width: "14px",
                                  height: "14px",
                                  backgroundColor: "#F27D0C",
                                  marginRight: "6px",
                                }}
                              ></div>
                              <span style={{ fontSize: "14px" }}>
                                Status: {status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>64–71</strong>
                      </td>
                      <td>
                        <strong>Strong</strong> – Above average understanding
                      </td>
                      <td>
                        Well-prepared for coaching situations; minor gaps to
                        refine through practice.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>56 – 63</strong>
                      </td>
                      <td>
                        <strong>Moderate</strong> – Basic knowledge with gaps
                      </td>
                      <td>
                        Review weak competencies; consider mentor coaching or
                        further training.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>48 – 55</strong>
                      </td>
                      <td>
                        <strong>Emerging</strong> – Limited application skill
                      </td>
                      <td>
                        Needs structured practice, feedback, and targeted
                        upskilling.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Below 48</strong>
                      </td>
                      <td>
                        <strong>Needs Development</strong> – Fundamental gaps
                      </td>
                      <td>
                        Revisit ICF core competencies; recommended to undergo
                        foundational training.
                      </td>
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
