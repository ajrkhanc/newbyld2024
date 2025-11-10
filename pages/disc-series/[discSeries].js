import Head from "next/head";

// Fetch DISC result data for a specific user
export async function getServerSideProps(context) {
  const slug = context.params.discSeries;

  const res = await fetch(
    `https://byldblogs.vercel.app/api/disc-series/${slug}`
  );
  const result = await res.json();

  return {
    props: { result },
  };
}

export default function DiscResult({ result }) {
  if (!result || !Array.isArray(result) || result.length === 0) {
    return (
      <div className="container text-center p-10">
        <h1>Nothing Found</h1>
        <p>Please submit your DISC Assessment before viewing results.</p>
        <a className="submit" href="/disc-series">
          Go Back
        </a>
      </div>
    );
  }

  // Take the first entry
  const data = result[0];

  // Count DISC values
  const scores = { D: 0, I: 0, S: 0, C: 0 };
  for (let i = 1; i <= 10; i++) {
    const val = data[`q${i}`];
    if (val && scores[val] !== undefined) scores[val]++;
  }

  // Normalize to percentage
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const perc = {
    D: ((scores.D / total) * 100).toFixed(1),
    I: ((scores.I / total) * 100).toFixed(1),
    S: ((scores.S / total) * 100).toFixed(1),
    C: ((scores.C / total) * 100).toFixed(1),
  };

  // Determine dominant & secondary
  const sorted = Object.entries(perc).sort((a, b) => b[1] - a[1]);
  const dominant = sorted[0][0];
  const secondary = sorted[1][0];
  const least = sorted[3][0];

  // Mini interpretation summaries
  const descriptions = {
    D: {
      title: "Dominance (D)",
      strengths:
        "Decisive, results-driven, confident, and focused on goals. You like taking charge and driving action.",
      blind:
        "May come across as blunt or impatient. Can overlook details or others’ feelings when under pressure.",
    },
    I: {
      title: "Influence (I)",
      strengths:
        "Outgoing, persuasive, and enthusiastic. You inspire others and thrive on collaboration and energy.",
      blind:
        "May lose focus on tasks or overpromise. Prefers excitement over routine, and can avoid conflict.",
    },
    S: {
      title: "Steadiness (S)",
      strengths:
        "Patient, dependable, and supportive. You value harmony, teamwork, and consistency in relationships.",
      blind:
        "Can resist change or avoid confrontation. Sometimes sacrifices own needs to maintain peace.",
    },
    C: {
      title: "Conscientiousness (C)",
      strengths:
        "Analytical, detail-oriented, and precise. You strive for accuracy, structure, and logical solutions.",
      blind:
        "Can overthink decisions, be overly critical, or slow down progress while seeking perfection.",
    },
  };

  const dominantDesc = descriptions[dominant];
  const secondaryDesc = descriptions[secondary];

  return (
    <>
      <Head>
        <title>DISC Series Result</title>
        <meta name="description" content="Your DISC Personality Style Report" />
      </Head>

      <section className="pbb-40 ptt-40">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="cacoh">Your DISC Assessment Result</h1>
            <h4>
              Hi <strong>{data.name}</strong>, here’s your personalized DISC
              profile based on your responses.
            </h4>
          </div>

          {/* Score Table */}
          <div className="resultable text-center">
            <h3>Your Scores (out of 100%)</h3>
            <table className="table table-bordered mt-3 mb-5">
              <thead>
                <tr>
                  <th>Style</th>
                  <th>Score</th>
                  <th>Bar</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(perc).map(([key, val]) => (
                  <tr key={key}>
                    <td>
                      <strong>{key}</strong>
                    </td>
                    <td>{val}%</td>
                    <td>
                      <div
                        style={{
                          background: "#2a6db5",
                          height: "12px",
                          width: `${val}%`,
                          borderRadius: "4px",
                        }}
                      ></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interpretation Section */}
          <div className="cochingformat">
            <h3 className="yresultc">
              <span>Y</span>OUR <span>D</span>ISC <span>S</span>UMMARY
            </h3>

            <p className="mt-3">
              Your dominant style is <strong>{dominant}</strong>, with a
              secondary influence of <strong>{secondary}</strong>.{" "}
              {dominant !== secondary && (
                <>
                  This makes you a{" "}
                  <strong>
                    {dominant}-{secondary}
                  </strong>{" "}
                  blend type — someone who demonstrates both{" "}
                  {dominantDesc.title.replace(/\(.*\)/, "").trim()} and{" "}
                  {secondaryDesc.title.replace(/\(.*\)/, "").trim()} traits.
                </>
              )}
            </p>

            <div className="row mt-4">
              <div className="col-md-6">
                <div className="result-card">
                  <h4>{dominantDesc.title}</h4>
                  <p>
                    <strong>Strengths:</strong> {dominantDesc.strengths}
                  </p>
                  <p>
                    <strong>Blind Spots:</strong> {dominantDesc.blind}
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="result-card">
                  <h4>{secondaryDesc.title}</h4>
                  <p>
                    <strong>Strengths:</strong> {secondaryDesc.strengths}
                  </p>
                  <p>
                    <strong>Blind Spots:</strong> {secondaryDesc.blind}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <h5>
                Least Expressed Style: <strong>{least}</strong>
              </h5>
              <p className="small text-muted">
                You may find it challenging to connect with people who strongly
                exhibit this style, but learning to flex toward it can improve
                communication and leadership balance.
              </p>
            </div>
          </div>

          {/* Summary Table */}
          <div className="mt-5">
            <h4 className="yresultc ccn">
              <span>S</span>CORING & <span>I</span>NTERPRETATION <span>M</span>
              ODEL
            </h4>
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>Range</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>70% +</td>
                  <td>
                    Strongly dominant in that style — highly expressive traits.
                  </td>
                </tr>
                <tr>
                  <td>50% - 69%</td>
                  <td>
                    Moderate tendency — shows this style in familiar settings.
                  </td>
                </tr>
                <tr>
                  <td>Below 50%</td>
                  <td>
                    Less natural preference — may adapt this style
                    situationally.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
