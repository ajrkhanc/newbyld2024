import Head from "next/head";
import { useRouter } from "next/router";

export default function DiscAssessment() {
  const router = useRouter();

  const submitF = async (event) => {
    event.preventDefault();
    const btn = document.getElementById("submitbuttonform");
    const responseBox = document.getElementById("response");
    btn.value = "Submitting...";

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const organization = form.organization.value.trim() || "Null";

    // ✅ Generate slug from name + phone
    const generateSlug = (name, phone) => {
      const cleanName = name
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .toLowerCase()
        .split(" ")
        .join("-");
      return `${cleanName}${phone}`;
    };

    const newnameurl = generateSlug(name, phone);

    // Gather DISC answers
    const answers = {};
    for (let i = 1; i <= 10; i++) {
      answers[`q${i}`] = form[`q${i}`]?.value || "";
    }

    // Prepare POST body
    const payload = new URLSearchParams({
      ...answers,
      name,
      email,
      phone,
      organization,
      newnameurl,
    });

    try {
      const res = await fetch("https://byldblogs.vercel.app/api/disc-series", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      const data = await res.json();
      responseBox.innerHTML = data.message || "";

      if (res.ok) {
        // Optional WordPress CF7 log
        const assessment = "DISC - DISC Series Assessment";
        fetch(
          "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/539/feedback",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(
              email
            )}&phone=${encodeURIComponent(
              phone
            )}&organization=${encodeURIComponent(
              organization
            )}&assessment=${encodeURIComponent(assessment)}`,
          }
        ).catch(() => {});

        // Redirect after success
        setTimeout(() => router.push(`/disc-series/${newnameurl}`), 1000);
      } else {
        responseBox.innerHTML = "Something went wrong, please try again.";
      }
    } catch (err) {
      console.error("Submission Error:", err);
      responseBox.innerHTML = "Network error. Please try again.";
    }

    setTimeout(() => {
      btn.value = "Submit";
      responseBox.innerHTML = "";
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>DISC Series</title>
        <meta name="description" content="DISC Series Personality Assessment" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9KS6KX2NZZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9KS6KX2NZZ');
            `,
          }}
        />
      </Head>

      {/* ---------- HERO SECTION ---------- */}
      <section className="assesmentbannnerbg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <h2 className="cacoh pbb-20">
                Adjective / Trait-based & Scenario-based DISC Questions
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FORM SECTION ---------- */}
      <section className="pbb-40">
        <div className="container">
          <form id="formreset" onSubmit={submitF}>
            <div className="row">
              <div className="col-sm-12">
                {/* ---------- DISC QUESTIONS ---------- */}

                <div
                  className="fcol1 newassesment"
                  style={{ borderTop: "1px solid #2a6db5" }}
                >
                  <h2>1. Which adjective describes you best at work?</h2>
                  {[
                    ["D", "Assertive"],
                    ["I", "Enthusiastic"],
                    ["S", "Dependable"],
                    ["C", "Analytical"],
                  ].map(([val, label], i) => (
                    <div className="fcolmain" key={i}>
                      <input
                        type="radio"
                        name="q1"
                        value={val}
                        id={`q1${val}`}
                        required
                      />
                      <label htmlFor={`q1${val}`}>{label}</label>
                    </div>
                  ))}
                </div>

                <div className="fcol1 newassesment">
                  <h2>2. Which of these words fits you the most?</h2>
                  {[
                    ["D", "Bold"],
                    ["I", "Outgoing"],
                    ["S", "Patient"],
                    ["C", "Meticulous"],
                  ].map(([val, label], i) => (
                    <div className="fcolmain" key={i}>
                      <input
                        type="radio"
                        name="q2"
                        value={val}
                        id={`q2${val}`}
                        required
                      />
                      <label htmlFor={`q2${val}`}>{label}</label>
                    </div>
                  ))}
                </div>

                <div className="fcol1 newassesment">
                  <h2>
                    3. When your team is behind schedule, what do you tend to
                    do?
                  </h2>
                  {[
                    ["D", "Take over and push them to catch up (D)"],
                    ["I", "Energize the team and boost morale (I)"],
                    ["S", "Support them and manage stress (S)"],
                    ["C", "Analyze causes and adjust the plan (C)"],
                  ].map(([val, label], i) => (
                    <div className="fcolmain" key={i}>
                      <input
                        type="radio"
                        name="q3"
                        value={val}
                        id={`q3${val}`}
                        required
                      />
                      <label htmlFor={`q3${val}`}>{label}</label>
                    </div>
                  ))}
                </div>

                <div className="fcol1 newassesment">
                  <h2>4. In meetings, how do you typically behave?</h2>
                  {[
                    ["D", "Steer the conversation toward outcomes (D)"],
                    ["I", "Engage everyone and keep energy high (I)"],
                    ["S", "Listen, encourage quieter voices (S)"],
                    ["C", "Bring facts, data, and clarify questions (C)"],
                  ].map(([val, label], i) => (
                    <div className="fcolmain" key={i}>
                      <input
                        type="radio"
                        name="q4"
                        value={val}
                        id={`q4${val}`}
                        required
                      />
                      <label htmlFor={`q4${val}`}>{label}</label>
                    </div>
                  ))}
                </div>

                <div className="fcol1 newassesment">
                  <h2>5. How do you handle sudden changes to plans?</h2>
                  {[
                    ["D", "React quickly and reset direction (D)"],
                    ["I", "See the opportunity and excite others (I)"],
                    ["S", "Adapt carefully and support people (S)"],
                    ["C", "Evaluate and plan methodically (C)"],
                  ].map(([val, label], i) => (
                    <div className="fcolmain" key={i}>
                      <input
                        type="radio"
                        name="q5"
                        value={val}
                        id={`q5${val}`}
                        required
                      />
                      <label htmlFor={`q5${val}`}>{label}</label>
                    </div>
                  ))}
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    6. If you receive criticism, your immediate reaction is to…
                  </h2>
                  {[
                    ["D", "Take action to fix things fast (D)"],
                    ["I", "Ask for dialogue and stay positive (I)"],
                    [
                      "S",
                      "Reflect on how it affects everyone, consider feelings(S)",
                    ],
                    [
                      "C",
                      "Analyze whether it's valid, then incorporate improvements (C)",
                    ],
                  ].map(([val, label], i) => (
                    <div className="fcolmain" key={i}>
                      <input
                        type="radio"
                        name="q6"
                        value={val}
                        id={`q6${val}`}
                        required
                      />
                      <label htmlFor={`q6${val}`}>{label}</label>
                    </div>
                  ))}
                </div>

                <div className="fcol1 newassesment">
                  <h2>
                    7. You prefer that your manager gives you feedback how?{" "}
                  </h2>
                  {[
                    ["D", "Brief, direct, to the point (D)"],
                    ["I", "Friendly, informal, encouraging (I)"],
                    ["S", "Gentle, supportive, giving context (S)"],
                    ["C", "Detailed, logical, with examples (C)"],
                  ].map(([val, label], i) => (
                    <div className="fcolmain" key={i}>
                      <input
                        type="radio"
                        name="q7"
                        value={val}
                        id={`q7${val}`}
                        required
                      />
                      <label htmlFor={`q7${val}`}>{label}</label>
                    </div>
                  ))}
                </div>

                <div className="fcol1 newassesment">
                  <h2>
                    8. When working on a long project, how do you pace yourself?
                  </h2>
                  {[
                    ["D", "Push, sprint phases to get quick wins (D)"],
                    ["I", "Keep the team motivated and energized (I)"],
                    ["S", "Maintain steady, consistent work throughout (S)"],
                    ["C", "Plan and check quality continuously (C)"],
                  ].map(([val, label], i) => (
                    <div className="fcolmain" key={i}>
                      <input
                        type="radio"
                        name="q8"
                        value={val}
                        id={`q8${val}`}
                        required
                      />
                      <label htmlFor={`q8${val}`}>{label}</label>
                    </div>
                  ))}
                </div>

                <div className="fcol1 newassesment">
                  <h2>9. When in conflict, you are most likely to…</h2>
                  {[
                    ["D", "Confront it directly and move to resolution (D)"],
                    [
                      "I",
                      "Try to lighten the mood and keep things positive (I)",
                    ],
                    ["S", "Seek compromise and calm things down (S)"],
                    [
                      "C",
                      "Analyze objectively and propose a fair solution (C)",
                    ],
                  ].map(([val, label], i) => (
                    <div className="fcolmain" key={i}>
                      <input
                        type="radio"
                        name="q9"
                        value={val}
                        id={`q9${val}`}
                        required
                      />
                      <label htmlFor={`q9${val}`}>{label}</label>
                    </div>
                  ))}
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    10. Given overlapping tasks, how do you decide what to do
                    first?
                  </h2>
                  {[
                    ["D", "Pick the task that will impact results most (D)"],
                    [
                      "I",
                      "Choose tasks that involve people/collaboration first (I)",
                    ],
                    ["S", "Do tasks steadily, avoid disruption (S)"],
                    [
                      "C",
                      "Do tasks with complex detail first, then simpler ones (C)",
                    ],
                  ].map(([val, label], i) => (
                    <div className="fcolmain" key={i}>
                      <input
                        type="radio"
                        name="q10"
                        value={val}
                        id={`q10${val}`}
                        required
                      />
                      <label htmlFor={`q10${val}`}>{label}</label>
                    </div>
                  ))}
                </div>

                {/* ---------- FORM DETAILS ---------- */}
                <div className="fcol1 lastinp ptt-20">
                  <div className="row inpuut">
                    {[
                      ["name", "Your Name*", "text"],
                      ["email", "Email*", "email"],
                      ["phone", "Phone No.*", "text"],
                      ["organization", "Organization Name", "text"],
                    ].map(([field, placeholder, type], i) => (
                      <div className="col-lg-6 col-sm-6 mb-12" key={i}>
                        <input
                          className="form-control"
                          type={type}
                          name={field}
                          placeholder={placeholder}
                          required={field !== "organization"}
                          {...(field === "phone" && {
                            maxLength: 10,
                            minLength: 10,
                            pattern: "[0-9]*",
                          })}
                        />
                      </div>
                    ))}

                    <div className="col-sm-12">
                      <input
                        type="submit"
                        value="Submit"
                        id="submitbuttonform"
                        className="assesmetmain"
                        tabIndex="201"
                      />
                      <p className="feedbackcolor" id="response"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
