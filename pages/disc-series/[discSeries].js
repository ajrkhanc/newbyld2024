import Head from "next/head";
import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
} from "reactstrap";

// Fetch DISC result data for a specific user
export async function getServerSideProps(context) {
  const { discSeries } = context.params;

  try {
    const res = await fetch(
      `https://byldblogs.vercel.app/api/disc-series/${discSeries}`
    );
    const result = await res.json();

    return {
      props: { result },
    };
  } catch (error) {
    console.error("Error fetching DISC result:", error);
    return {
      props: { result: [] },
    };
  }
}

export default function DiscResult({ result }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    interest: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("✅ Thank you! We’ll contact you soon.");
    toggleModal();
  };

  // 🔹 Dynamic options list
  const interestOptions = [
    "Everything DiSC® Certification | 11th - 14th Nov 2025 | Virtual",
    "Everything DiSC® Certification | 16th - 19th Dec 2025 | Virtual",
    "Everything DiSC® Certification | 20th - 23rd Jan 2026 | Virtual",
    "Everything DiSC® Certification | 10th - 13th Feb 2026 | Virtual",
  ];

  // Handle no result found
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

  const data = result[0];

  // Calculate DISC scores
  const scores = { D: 0, I: 0, S: 0, C: 0 };
  for (let i = 1; i <= 10; i++) {
    const ans = data[`q${i}`];
    if (ans && scores[ans] !== undefined) scores[ans]++;
  }

  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const perc = {
    D: ((scores.D / total) * 100).toFixed(1),
    I: ((scores.I / total) * 100).toFixed(1),
    S: ((scores.S / total) * 100).toFixed(1),
    C: ((scores.C / total) * 100).toFixed(1),
  };

  // Determine main types
  const sorted = Object.entries(perc).sort((a, b) => b[1] - a[1]);
  const dominant = sorted[0][0];
  const secondary = sorted[1][0];

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

  return (
    <>
      <Head>
        <title>DISC Series Result</title>
        <meta
          name="description"
          content="Your DISC Personality Assessment Result"
        />
      </Head>

      <section className="pbb-40 ptt-40">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="cacoh">Your DISC Assessment Result</h1>
            <h4>
              Hi <strong>{data.name}</strong>, here’s your personalized DISC
              profile based on your answers.
            </h4>
          </div>

          {/* ---------- SCORE TABLE ---------- */}
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

          {/* ---------- INTERPRETATION SECTION ---------- */}
          <div className="cochingformat">
            <h3 className="yresultc">
              <span>Y</span>OUR <span>D</span>ISC <span>S</span>UMMARY
            </h3>

            <p className="mt-3">
              Your dominant style is <strong>{dominant}</strong>, and your
              secondary style is <strong>{secondary}</strong>. This means you
              are a{" "}
              <strong>
                {dominant}-{secondary}
              </strong>{" "}
              blend, showing traits of{" "}
              {descriptions[dominant].title.replace(/\(.*\)/, "").trim()} and{" "}
              {descriptions[secondary].title.replace(/\(.*\)/, "").trim()}.
            </p>

            <div className="row mt-4">
              <div className="col-md-6">
                <div className="result-card">
                  <h4>{descriptions[dominant].title}</h4>
                  <p>
                    <strong>Strengths:</strong>{" "}
                    {descriptions[dominant].strengths}
                  </p>
                  <p>
                    <strong>Blind Spots:</strong> {descriptions[dominant].blind}
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="result-card">
                  <h4>{descriptions[secondary].title}</h4>
                  <p>
                    <strong>Strengths:</strong>{" "}
                    {descriptions[secondary].strengths}
                  </p>
                  <p>
                    <strong>Blind Spots:</strong>{" "}
                    {descriptions[secondary].blind}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- SCORING MODEL ---------- */}
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

          <div className="mt-5 text-center">
            <p className="mb-3 text-muted">
              You may find it challenging to connect with people who strongly
              exhibit this style, but learning to flex toward it can improve
              communication and leadership balance.
            </p>
            <button className="readon2" onClick={toggleModal}>
              Get Started
            </button>
          </div>
        </div>
      </section>
      {/* 🔹 Reactstrap Modal */}
      <Modal isOpen={showModal} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>
          Unlock the potential of your people and the power of your culture with
          the Everything DiSC®.
        </ModalHeader>

        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-lg-6 col-md-12">
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormGroup>
              </div>
              <div className="col-lg-6 col-md-12">
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
              </div>
              <div className=" col-lg-6 col-md-12">
                <FormGroup>
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Contact No."
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormGroup>
              </div>

              <div className=" col-lg-6 col-md-12">
                <FormGroup>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </FormGroup>
              </div>
              <div className=" col-lg-6 col-md-12">
                <FormGroup>
                  <Input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={handleChange}
                  />
                </FormGroup>
              </div>

              <div className=" col-lg-6 col-md-12">
                {/* 🔹 Interest dropdown */}
                <FormGroup>
                  <Input
                    type="select"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="">Interested In</option>
                    {interestOptions.map((opt, index) => (
                      <option key={index} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </div>
            </div>

            <div className="text-center">
              <Button color="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}
