import Head from "next/head";
import { useState } from "react";
import { Spinner } from "reactstrap";

export default function CoachKnowledgeAssessment() {
   const [isLoading, setIsLoading] = useState(false);


  const generateSlug = (name,phone) => {
  const cleanName = name.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(' ').join('-');
    return `${cleanName}${phone}`;
  };

 
 

//  const submitF = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const form = e.target;
//     const submitBtn = document.getElementById("submitbuttonform");
//     submitBtn.disabled = true;
//     submitBtn.value = "Submitting...";

//     const formData = new FormData(form);
//     const name = formData.get("name");
//     const phone = formData.get("phone");
//     const email = formData.get("email");
//     const organization = formData.get("organization") || "Null";
//     const newnameurl = generateSlug(name, phone);

//     const answers = {};
//     for (let i = 1; i <= 80; i++) {
//       answers[`q${i}`] = formData.get(`q${i}`);
//     }

//     answers.name = name;
//     answers.phone = phone;
//     answers.email = email;
//     answers.organization = organization;
//     answers.newnameurl = newnameurl;

//     try {
//       const response = await fetch(
//         "https://byldblogs.vercel.app/api/coach-knowledge-assessment",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(answers),
//         }
//       );

//       const data = await response.json();
//       // console.log("API response:", data);

//       if (data.status === 0 || data.status === "success") {
//         // Optional Contact Form 7 submission

//       const cf7FormData = new FormData();
//       cf7FormData.append("name", name);     // match exactly as in CF7
//       cf7FormData.append("email", email);
//       cf7FormData.append("phone", phone);
//         await fetch(
//           "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/526/feedback",
//            {
//           method: "POST",
//           body: cf7FormData,
//         }
//         );

//         document.getElementById("response").textContent = data.message;
//        // ✅ Reset the form
//       form.reset();

//         setTimeout(() => {
//           window.location.href = `/coaching/coach-knowledge-assessment-s/${newnameurl}`;
//           setIsLoading(false); // stop loader after redirect
//         }, 2500);
//       } else {
//         document.getElementById("response").textContent = "Email is already registered.";
//       }
//     } catch (error) {
//       console.error("Error submitting:", error);
//       document.getElementById("response").textContent = "Submission failed. Please try again.";
//     } finally {
//       submitBtn.disabled = false;
//       submitBtn.value = "Submit";
//       setTimeout(() => {
//         document.getElementById("response").textContent = "";
//         setIsLoading(false);
//       }, 2000);
//     }
//   };












const submitF = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  const form = e.target;
  const submitBtn = document.getElementById("submitbuttonform");
  submitBtn.disabled = true;
  submitBtn.value = "Submitting...";

  const formData = new FormData(form);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");

  try {
    // ✅ Send data to Contact Form 7
    const cf7FormData = new FormData();
    cf7FormData.append("name", name);    // Field names must match CF7 form
    cf7FormData.append("email", email);
    cf7FormData.append("phone", phone);

    const response = await fetch(
      "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/526/feedback",
      {
        method: "POST",
        body: cf7FormData,
      }
    );

    const data = await response.json();

    if (data.status === "mail_sent") {
      // ✅ Reset form
      form.reset();

      // ✅ Redirect to thank-you page
      window.location.href = "/thank-you";
    } else {
      document.getElementById("response").textContent =
        data.message || "Submission failed. Please try again.";
    }
  } catch (error) {
    console.error("CF7 submission error:", error);
    document.getElementById("response").textContent =
      "Something went wrong. Please try again.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.value = "Submit";
    setIsLoading(false);
  }
};

  return (
    <>
      <Head>
        <title>Coach Knowledge Assessment</title>
        <meta name="description" content="Coach Knowledge Assessment" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9KS6KX2NZZ"
        />
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
      <section className="assesmentbannnerbg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <h2 className="cacoh pbb-20">
                Coach Knowledge Assessment
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="pbb-40">
        <div className="container">
          <form id="formreset" onSubmit={submitF} >
            <div className="row">
              <div className="col-sm-12">
                <div className="fh3">
                  <h3>1. Scenario &#34;Demonstrates Ethical Practice&#34;</h3>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    1. A client begins discussing ongoing depression and
                    suicidal thoughts during a session. What should the coach
                    do?
                  </h2>

                  <div className="fcolmain">
                    <input type="radio" name="q1" value="0" id="q1a" required />
                    <label htmlFor="q1a">
                      Explore the client&#39;s past experiences more deeply.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q1" value="0" id="q1b" required />
                    <label htmlFor="q1b">
                      Ask the client to schedule more frequent coaching
                      sessions.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q1"
                      value="1"
                      id="q1c"
                      required
                    />
                    <label htmlFor="q1c">
                      Refer the client to a qualified mental health
                      professional.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q1" value="0" id="q1d" required />
                    <label htmlFor="q1d">
                      Reassure the client that coaching will help manage those
                      feelings.
                    </label>
                  </div>
                </div>

                <div className="fcol1 newassesment">
                  <h2>
                    2. A sponsor asks the coach to provide session recordings of
                    their employee’s coaching sessions. What is the ethical
                    response?
                  </h2>

                  <div className="fcolmain">
                    <input type="radio" name="q2" value="0" id="q2a" required />
                    <label htmlFor="q2a">
                      Share the recordings since the sponsor is paying for the
                      coaching.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q2" value="0" id="q2b" required />
                    <label htmlFor="q2b">
                      Summarize key takeaways from each session for the sponsor.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q2"
                      value="1"
                      id="q2c"
                      required
                    />
                    <label htmlFor="q2c">
                      Decline unless the client has explicitly consented to
                      sharing recordings.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q2" value="0" id="q2d" required />
                    <label htmlFor="q2d">
                      Ask the client to write a summary to share with the
                      sponsor.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    3. A coach is bilingual and works with a client in their
                    native language but often uses culturally unfamiliar
                    phrases. The client seems confused. What should the coach
                    do?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q3"
                      value="1"
                      id="q3a"
                      required
                    />
                    <label htmlFor="q3a">
                      Adjust the language to better reflect the client’s
                      cultural context.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q3" value="0" id="q3b" required />
                    <label htmlFor="q3b">
                      Continue as usual since the coach is fluent.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q3" value="0" id="q3c" required />
                    <label htmlFor="q3c">
                      Ask the client to learn the terminology being used.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q3" value="0" id="q3d" required />
                    <label htmlFor="q3d">
                      Keep explanations vague to avoid misunderstanding.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    4. A client says, “This coaching feels like therapy.” What
                    is the best ethical response?
                  </h2>

                  <div className="fcolmain">
                    <input type="radio" name="q4" value="0" id="q4a" required />
                    <label htmlFor="q4a">
                      Reassure them the sessions are similar and not to worry.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q4" value="0" id="q4b" required />
                    <label htmlFor="q4b">
                      Avoid discussing the difference to prevent confusion.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q4"
                      value="1"
                      id="q4c"
                      required
                    />
                    <label htmlFor="q4c">
                      Clarify the distinction between coaching and therapy.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q4" value="0" id="q4d" required />
                    <label htmlFor="q4d">
                      Recommend they stop therapy to focus only on coaching.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    5. A coach accidentally discovers private client information
                    through a mutual connection on social media. What should the
                    coach do?
                  </h2>

                  <div className="fcolmain">
                    <input type="radio" name="q5" value="0" id="q5a" required />
                    <label htmlFor="q5a">
                      Mention it to the client in the next session.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q5"
                      value="1"
                      id="q5b"
                      required
                    />
                    <label htmlFor="q5b">
                      Avoid using or referencing the information during
                      coaching.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q5" value="0" id="q5c" required />
                    <label htmlFor="q5c">
                      Use the insight to ask more specific questions.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q5" value="0" id="q5d" required />
                    <label htmlFor="q5d">
                      Inform the client’s sponsor immediately for awareness.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    6. During an intake conversation, the client shares personal
                    information and asks the coach to never share it. What
                    should the coach do?
                  </h2>

                  <div className="fcolmain">
                    <input type="radio" name="q6" value="0" id="q6a" required />
                    <label htmlFor="q6a">
                      Agree, regardless of existing contracts.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q6" value="0" id="q6b" required />
                    <label htmlFor="q6b">
                      Tell the client it will only be shared with the sponsor.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q6"
                      value="1"
                      id="q6c"
                      required
                    />
                    <label htmlFor="q6c">
                      Reaffirm confidentiality terms aligned with the agreement
                      and laws.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q6" value="0" id="q6d" required />
                    <label htmlFor="q6d">
                      Avoid making any confidentiality commitments to stay
                      flexible.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    7. A coach begins working with a client who has vastly
                    different political and spiritual views. The coach finds it
                    difficult to stay neutral. What is the ethical action?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q7"
                      value="1"
                      id="q7a"
                      required
                    />
                    <label htmlFor="q7a">
                      Reflect and manage personal bias to remain fully present
                      for the client.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q7" value="0" id="q7b" required />
                    <label htmlFor="q7b">
                      Try to change the topic when uncomfortable beliefs arise.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q7" value="0" id="q7c" required />
                    <label htmlFor="q7c">
                      Use the session to explain a more balanced perspective.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q7" value="0" id="q7d" required />
                    <label htmlFor="q7d">
                      Redirect the client toward more neutral conversation.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    8. A client asks the coach to help with legal advice
                    regarding their business. What should the coach do?
                  </h2>

                  <div className="fcolmain">
                    <input type="radio" name="q8" value="0" id="q8a" required />
                    <label htmlFor="q8a">
                      Research and provide advice before the next session.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q8"
                      value="1"
                      id="q8b"
                      required
                    />
                    <label htmlFor="q8b">
                      Clarify coaching boundaries and suggest they consult a
                      legal professional.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q8" value="0" id="q8c" required />
                    <label htmlFor="q8c">
                      Offer personal opinions while disclaiming responsibility.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q8" value="0" id="q8d" required />
                    <label htmlFor="q8d">
                      Ask the sponsor how to proceed in this case.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    9. A coach uses a client&#39;s anonymized story as a case
                    example in a training workshop without prior approval. Is
                    this ethical?
                  </h2>

                  <div className="fcolmain">
                    <input type="radio" name="q9" value="0" id="q9a" required />
                    <label htmlFor="q9a">
                      Yes, because the name was not used.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q9" value="0" id="q9b" required />
                    <label htmlFor="q9b">
                      Yes, as long as the coach doesn’t repeat it often.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q9"
                      value="1"
                      id="q9c"
                      required
                    />
                    <label htmlFor="q9c">
                      No, because client consent is still required.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input type="radio" name="q9" value="0" id="q9d" required />
                    <label htmlFor="q9d">
                      No, unless the sponsor has already approved.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    10. A sponsor asks the coach to subtly influence the client
                    toward accepting a promotion. What is the ethical course of
                    action?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q10"
                      value="0"
                      id="q10a"
                      required
                    />
                    <label htmlFor="q10a">
                      Use the sessions to encourage the promotion indirectly.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q10"
                      value="1"
                      id="q10b"
                      required
                    />
                    <label htmlFor="q10b">
                      Maintain coaching neutrality and discuss the client’s
                      actual aspirations.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q10"
                      value="0"
                      id="q10c"
                      required
                    />
                    <label htmlFor="q10c">
                      Notify the sponsor about the client’s hesitation.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q10"
                      value="0"
                      id="q10d"
                      required
                    />
                    <label htmlFor="q10d">
                      End the coaching engagement to avoid conflict.
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="fh3">
                  <h3>2. Scenario  &#34;Embodies a Coaching Mindset&#34;</h3>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    1. A coach becomes aware that they are feeling frustrated
                    after several unproductive sessions with a client. What is
                    the most appropriate course of action?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q11"
                      value="0"
                      id="q11a"
                      required
                    />
                    <label htmlFor="q11a">
                      Tell the client they need to be more serious.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q11"
                      value="1"
                      id="q11b"
                      required
                    />
                    <label htmlFor="q11b">
                      Reflect on the emotion and explore its impact on the
                      coaching process. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q11"
                      value="0"
                      id="q11c"
                      required
                    />
                    <label htmlFor="q11c">
                      Ignore the feeling and continue as normal.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q11"
                      value="0"
                      id="q11d"
                      required
                    />
                    <label htmlFor="q11d">
                      Reduce session time to manage personal frustration.
                    </label>
                  </div>
                </div>

                <div className="fcol1 newassesment">
                  <h2>
                    2.Before a coaching session, the coach takes a few quiet
                    minutes to ground themselves and review client notes. This
                    is an example of:
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q12"
                      value="1"
                      id="q12a"
                      required
                    />
                    <label htmlFor="q12a">
                      Mental and emotional preparation.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q12"
                      value="0"
                      id="q12b"
                      required
                    />
                    <label htmlFor="q12b">Time management strategy.</label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q12"
                      value="0"
                      id="q12c"
                      required
                    />
                    <label htmlFor="q12c">Process-oriented coaching.</label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q12"
                      value="0"
                      id="q12d"
                      required
                    />
                    <label htmlFor="q12d">Passive mindfulness practice.</label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    3. A client wants to explore a decision that contradicts
                    what the coach believes is wise. What demonstrates the right
                    coaching mindset?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q13"
                      value="0"
                      id="q13a"
                      required
                    />
                    <label htmlFor="q13a">
                      Advise the client to reconsider.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q13"
                      value="0"
                      id="q13b"
                      required
                    />
                    <label htmlFor="q13b">
                      Encourage the client to ask a mentor instead.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q13"
                      value="1"
                      id="q13c"
                      required
                    />
                    <label htmlFor="q13c">
                      Remain curious and explore the client’s rationale.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q13"
                      value="0"
                      id="q13d"
                      required
                    />
                    <label htmlFor="q13d">
                      Warn the client about the consequences.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    4. A coach finds themselves being reactive during a
                    difficult session. What should the coach do next?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q14"
                      value="1"
                      id="q14a"
                      required
                    />
                    <label htmlFor="q14a">
                      Use emotional regulation tools and refocus on the client.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q14"
                      value="0"
                      id="q14b"
                      required
                    />
                    <label htmlFor="q14b">
                      End the session early to regain composure.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q14"
                      value="0"
                      id="q14c"
                      required
                    />
                    <label htmlFor="q14c">
                      Address the client’s behavior as the cause of stress.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q14"
                      value="0"
                      id="q14d"
                      required
                    />
                    <label htmlFor="q14d">
                      Address the client’s behavior as the cause of stress.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    5. A coach working with a client from a different cultural
                    background notices recurring misunderstandings. What is the
                    best next step?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q15"
                      value="0"
                      id="q15a"
                      required
                    />
                    <label htmlFor="q15a">
                      A. Stick to the same approach and wait for alignment.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q15"
                      value="1"
                      id="q15b"
                      required
                    />
                    <label htmlFor="q15b">
                      Reflect on their own cultural assumptions and adapt
                      accordingly.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q15"
                      value="0"
                      id="q15c"
                      required
                    />
                    <label htmlFor="q15c">
                      Recommend the client work with someone from a similar
                      background.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q15"
                      value="0"
                      id="q15d"
                      required
                    />
                    <label htmlFor="q15d">
                      Avoid cultural discussions during coaching.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    6. A coach realizes they are consistently second-guessing
                    their intuition during sessions. What should they do?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q16"
                      value="0"
                      id="q16a"
                      required
                    />
                    <label htmlFor="q16a">
                      Ignore the feeling—it’s not data-based.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q16"
                      value="0"
                      id="q16b"
                      required
                    />
                    <label htmlFor="q16b">
                      Start offering more direct advice to gain control.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q16"
                      value="1"
                      id="q16c"
                      required
                    />
                    <label htmlFor="q16c">
                      Explore how to develop confidence in intuition for client
                      benefit.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q16"
                      value="0"
                      id="q16d"
                      required
                    />
                    <label htmlFor="q16d">
                      Share every intuitive thought openly with the client.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    7. A coach learns about a new coaching technique that may
                    support a struggling client. What is the coach’s best
                    response?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q17"
                      value="1"
                      id="q17a"
                      required
                    />
                    <label htmlFor="q17a">
                      Learn and integrate the technique after assessing its
                      relevance. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q17"
                      value="0"
                      id="q17b"
                      required
                    />
                    <label htmlFor="q17b">
                      Use the technique immediately without training.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q17"
                      value="0"
                      id="q17c"
                      required
                    />
                    <label htmlFor="q17c">
                      C. Recommend the client search for similar tools online.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q17"
                      value="0"
                      id="q17d"
                      required
                    />
                    <label htmlFor="q17d">
                      Avoid new methods to stay consistent.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    8. A client complains they’re not progressing, and the coach
                    feels unsure of how to proceed. What should the coach do?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q18"
                      value="0"
                      id="q18a"
                      required
                    />
                    <label htmlFor="q18a">
                      Reassure the client and change the topic.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q18"
                      value="1"
                      id="q18b"
                      required
                    />
                    <label htmlFor="q18b">
                      Seek supervision or mentor coaching to gain perspective.
                      
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q18"
                      value="0"
                      id="q18c"
                      required
                    />
                    <label htmlFor="q18c">
                      End the engagement due to lack of progress.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q18"
                      value="0"
                      id="q18d"
                      required
                    />
                    <label htmlFor="q18d">
                      Ask the client to reflect more between sessions.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    9. During a session, the client asks the coach to make a
                    decision on their behalf. What should the coach do?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q19"
                      value="0"
                      id="q19a"
                      required
                    />
                    <label htmlFor="q19a">
                      Offer an opinion based on experience.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q19"
                      value="1"
                      id="q19b"
                      required
                    />
                    <label htmlFor="q19b">
                      Remind the client they are responsible for their own
                      choices. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q19"
                      value="0"
                      id="q19c"
                      required
                    />
                    <label htmlFor="q19c">
                      Make the decision with the client’s best interest in mind.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q19"
                      value="0"
                      id="q19d"
                      required
                    />
                    <label htmlFor="q19d">
                      Delay the topic until the next session.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    10. A coach regularly takes time after sessions to journal
                    about their reactions, what worked, and what didn’t. This
                    practice is best described as:
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q20"
                      value="0"
                      id="q20a"
                      required
                    />
                    <label htmlFor="q20a">Scheduling recovery time.</label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q20"
                      value="0"
                      id="q20b"
                      required
                    />
                    <label htmlFor="q20b">Personal coaching.</label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q20"
                      value="1"
                      id="q20c"
                      required
                    />
                    <label htmlFor="q20c">
                      Reflective practice to improve coaching effectiveness. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q20"
                      value="0"
                      id="q20d"
                      required
                    />
                    <label htmlFor="q20d">Client evaluation.</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="fh3">
                  <h3>3. Scenario  &#34;Establishes and Maintains Agreements&#34;</h3>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    At the beginning of the first coaching session, the client
                    says, “Let’s just jump in.” What is the most appropriate
                    coach response?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q21"
                      value="0"
                      id="q21a"
                      required
                    />
                    <label htmlFor="q21a">
                      Dive into exploration without wasting time.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q21"
                      value="1"
                      id="q21b"
                      required
                    />
                    <label htmlFor="q21b">
                      Clarify the session’s purpose and co-create a focus before
                      starting. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q21"
                      value="0"
                      id="q21c"
                      required
                    />
                    <label htmlFor="q21c">
                      Offer advice based on the coach’s perception of the issue.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q21"
                      value="0"
                      id="q21d"
                      required
                    />
                    <label htmlFor="q21d">
                      Begin with a visualization to warm up the session.
                    </label>
                  </div>
                </div>

                <div className="fcol1 newassesment">
                  <h2>
                    2. A coach begins working with a new client but hasn’t yet
                    discussed confidentiality, session length, or fees. What
                    should the coach do?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q22"
                      value="0"
                      id="q22a"
                      required
                    />
                    <label htmlFor="q22a">
                      Bring up these topics only if the client asks.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q22"
                      value="1"
                      id="q22b"
                      required
                    />
                    <label htmlFor="q22b">
                      Proactively clarify these aspects before proceeding. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q22"
                      value="0"
                      id="q22c"
                      required
                    />
                    <label htmlFor="q22c">
                      Continue coaching and send a follow-up email later.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q22"
                      value="0"
                      id="q22d"
                      required
                    />
                    <label htmlFor="q22d">
                      Assume standard practices apply to all clients.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    3. A sponsor tells the coach that they expect regular
                    updates on the employee’s progress. What is the most ethical
                    and professional coach action?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q23"
                      value="0"
                      id="q23a"
                      required
                    />
                    <label htmlFor="q23a">
                      Agree to provide summaries without informing the client.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q23"
                      value="1"
                      id="q23b"
                      required
                    />
                    <label htmlFor="q23b">
                      Clarify confidentiality terms and ensure a three-way
                      agreement is in place. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q23"
                      value="0"
                      id="q23c"
                      required
                    />
                    <label htmlFor="q23c">
                      Ask the employee to share progress with the sponsor.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q23"
                      value="0"
                      id="q23d"
                      required
                    />
                    <label htmlFor="q23d">
                      Send only general comments to avoid conflict.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    4. The client wants career coaching, but mid-way through the
                    engagement, they shift to personal issues without informing
                    the coach. What should the coach do?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q24"
                      value="1"
                      id="q24a"
                      required
                    />
                    <label htmlFor="q24a">
                      Pause and renegotiate the coaching goals with the client.
                      
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q24"
                      value="0"
                      id="q24b"
                      required
                    />
                    <label htmlFor="q24b">
                      Follow the client’s new direction without question.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q24"
                      value="0"
                      id="q24c"
                      required
                    />
                    <label htmlFor="q24c">
                      Continue exploring both areas without clarification.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q24"
                      value="0"
                      id="q24d"
                      required
                    />
                    <label htmlFor="q24d">
                      End the engagement due to scope change.
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    5. A client regularly cancels sessions last-minute and
                    hasn’t paid their last invoice. What should the coach do?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q25"
                      value="0"
                      id="q25a"
                      required
                    />
                    <label htmlFor="q25a">
                      Let it go and focus on serving the client.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q25"
                      value="0"
                      id="q25b"
                      required
                    />
                    <label htmlFor="q25b">
                      Ask the client when they plan to pay.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q25"
                      value="0"
                      id="q25c"
                      required
                    />
                    <label htmlFor="q15c">
                      Stop sessions until payment is received.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q25"
                      value="1"
                      id="q25d"
                      required
                    />
                    <label htmlFor="q25d">
                      Revisit and reinforce the original agreement on logistics
                      and responsibilities. 
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    6. During a chemistry call, the client seems unclear about
                    how coaching differs from mentoring. What should the coach
                    do?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q26"
                      value="0"
                      id="q26a"
                      required
                    />
                    <label htmlFor="q26a">
                      Say coaching is like mentoring but more collaborative.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q26"
                      value="0"
                      id="q26b"
                      required
                    />
                    <label htmlFor="q16b">
                      Redirect to session goals instead of definitions.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q26"
                      value="1"
                      id="q26c"
                      required
                    />
                    <label htmlFor="q26c">
                      Clearly explain what coaching is and is not. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q26"
                      value="0"
                      id="q26d"
                      required
                    />
                    <label htmlFor="q26d">
                      Recommend the client try both and compare
                    </label>
                  </div>
                </div>
                <div className="fcol1 newassesment">
                  <h2>
                    7. In the first session, the coach notices the client has
                    multiple topics to cover but hasn’t chosen one. What is the
                    best next step?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q27"
                      value="1"
                      id="q27a"
                      required
                    />
                    <label htmlFor="q27a">
                      Partner with the client to identify what they want to
                      focus on today. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q27"
                      value="0"
                      id="q27b"
                      required
                    />
                    <label htmlFor="q27b">
                      Choose the topic that seems most urgent to the coach.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q27"
                      value="0"
                      id="q27c"
                      required
                    />
                    <label htmlFor="q27c">
                      Postpone the session until the client has clarity.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q27"
                      value="0"
                      id="q27d"
                      required
                    />
                    <label htmlFor="q27d">
                      Explore each topic briefly without a main focus.
                    </label>
                  </div>
                </div>

                <div className="fcol1 newassesment">
                  <h2>
                    8. A client says, “I want to feel more confident,” but gives
                    vague details. What should the coach do?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q28"
                      value="0"
                      id="q28a"
                      required
                    />
                    <label htmlFor="q28a">
                      Offer techniques to build confidence.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q28"
                      value="1"
                      id="q28b"
                      required
                    />
                    <label htmlFor="q28b">
                      Partner with the client to define what “confidence” means
                      and how it will be measured. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q28"
                      value="0"
                      id="q28c"
                      required
                    />
                    <label htmlFor="q28c">
                      Move on to another area of their life.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q28"
                      value="0"
                      id="q28d"
                      required
                    />
                    <label htmlFor="q28d">
                      Ask the client to bring more specifics next time.
                    </label>
                  </div>
                </div>

                <div className="fcol1 newassesment">
                  <h2>
                    9. Mid-session, the client starts talking about a new and
                    unrelated issue. What should the coach do?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q29"
                      value="0"
                      id="q29a"
                      required
                    />
                    <label htmlFor="q29a">
                      Allow the conversation to flow without concern.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q29"
                      value="0"
                      id="q29b"
                      required
                    />
                    <label htmlFor="q29b">
                      Redirect the client back to the original topic.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q29"
                      value="1"
                      id="q29c"
                      required
                    />
                    <label htmlFor="q29c">
                      Check in with the client to see if they want to redefine
                      the session outcome. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q29"
                      value="0"
                      id="q29d"
                      required
                    />
                    <label htmlFor="q29d">
                      End the session early to maintain boundaries.
                    </label>
                  </div>
                </div>

                <div className="fcol1 newassesment">
                  <h2>
                    10. A potential client seems hesitant about committing to
                    coaching. What should the coach do to establish clarity?
                  </h2>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q30"
                      value="0"
                      id="q30a"
                      required
                    />
                    <label htmlFor="q30a">
                      Offer a discount to encourage commitment.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q30"
                      value="0"
                      id="q30b"
                      required
                    />
                    <label htmlFor="q30b">
                      Avoid too many details to prevent overwhelm.
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q30"
                      value="1"
                      id="q30c"
                      required
                    />
                    <label htmlFor="q30c">
                      Explore compatibility and the client’s expectations for
                      coaching. 
                    </label>
                  </div>

                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q30"
                      value="0"
                      id="q30d"
                      required
                    />
                    <label htmlFor="q30d">
                      Begin a trial session without a formal agreement.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="fh3">
                  <h3>4. Scenario &#34;Cultivates Trust and Safety&#34;</h3>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    1. A client hesitates while sharing something personal and
                    looks uncomfortable. What should the coach do?
                  </h2>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q31"
                      value="0"
                      id="q31a"
                      required
                    />
                    <label htmlFor="q31a">
                      Change the topic to something lighter.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q31"
                      value="1"
                      id="q31b"
                      required
                    />
                    <label htmlFor="q31b">
                      Gently acknowledge the hesitation and invite the client to
                      share at their own pace. 
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q31"
                      value="0"
                      id="q31c"
                      required
                    />
                    <label htmlFor="q31c">
                      Push the client to express everything for clarity.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q31"
                      value="0"
                      id="q31d"
                      required
                    />
                    <label htmlFor="q31d">
                      Assume the client is done talking and move on.
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    2. A client expresses strong emotions and says, “I feel like
                    I’m failing.” What is the best coach response?
                  </h2>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q32"
                      value="0"
                      id="q32a"
                      required
                    />
                    <label htmlFor="q32a">
                      Suggest reframing the situation more positively.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q32"
                      value="0"
                      id="q32b"
                      required
                    />
                    <label htmlFor="q32b">
                      Reassure them that everyone feels that way sometimes.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q32"
                      value="0"
                      id="q32c"
                      required
                    />
                    <label htmlFor="q32c">
                      Tell a personal story about failure to relate.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q32"
                      value="1"
                      id="q32d"
                      required
                    />
                    <label htmlFor="q32d">
                      Acknowledge and support the client’s feelings without
                      judgment. 
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    3. During coaching, a client mentions that their cultural
                    values sometimes clash with their workplace. What should the
                    coach do?
                  </h2>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q33"
                      value="0"
                      id="q33a"
                      required
                    />
                    <label htmlFor="q33a">
                      Recommend strategies to adapt better to the workplace.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q33"
                      value="1"
                      id="q33b"
                      required
                    />
                    <label htmlFor="q33b">
                      Seek to understand the client’s values and how they impact
                      their experience. 
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q33"
                      value="0"
                      id="q33c"
                      required
                    />
                    <label htmlFor="q33c">
                      Encourage the client to set their values aside for
                      professional success.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q33"
                      value="0"
                      id="q33d"
                      required
                    />
                    <label htmlFor="q33d">
                      Avoid the topic to keep the conversation goal-focused.
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    4. A coach uses complex jargon and fast-paced speech while
                    the client uses simple and reflective language. What is the
                    best approach?
                  </h2>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q34"
                      value="1"
                      id="q34a"
                      required
                    />
                    <label htmlFor="q34a">
                      Adapt the communication style to match the client’s pace
                      and language. 
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q34"
                      value="0"
                      id="q34b"
                      required
                    />
                    <label htmlFor="q34b">
                      Ask the client to adjust to a more standard coaching tone.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q34"
                      value="0"
                      id="q34c"
                      required
                    />
                    <label htmlFor="q34c">
                      Continue with the coach’s usual approach.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q34"
                      value="0"
                      id="q34d"
                      required
                    />
                    <label htmlFor="q34d">
                      Slow down slightly but keep using technical terms.
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    5. The client says, “I don’t know if this is even worth
                    talking about,” and looks down. What should the coach do?
                  </h2>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q35"
                      value="0"
                      id="q35a"
                      required
                    />
                    <label htmlFor="q35a">
                      Move on to another topic that seems more important.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q35"
                      value="1"
                      id="q35b"
                      required
                    />
                    <label htmlFor="q35b">
                      Express empathy and invite the client to explore what
                      feels important to them. 
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q35"
                      value="0"
                      id="q35c"
                      required
                    />
                    <label htmlFor="q35c">
                      Reassure them everything matters and change the subject.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q35"
                      value="0"
                      id="q35d"
                      required
                    />
                    <label htmlFor="q35d">
                      Share a similar situation to normalize the feeling.
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    6. The coach disagrees with a client’s perspective but wants
                    to maintain trust. What’s the most ethical and effective
                    approach?
                  </h2>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q36"
                      value="0"
                      id="q36a"
                      required
                    />
                    <label htmlFor="q36a">
                      Let it go and ignore the perspective.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q36"
                      value="0"
                      id="q36b"
                      required
                    />
                    <label htmlFor="q36b">
                      Correct the client respectfully.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q36"
                      value="1"
                      id="q36c"
                      required
                    />
                    <label htmlFor="q36c">
                      Stay open and explore the client’s view with curiosity.
                      
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q36"
                      value="0"
                      id="q36d"
                      required
                    />
                    <label htmlFor="q36d">
                      Argue respectfully and share a different viewpoint.
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    7. A coach notices a client becoming defensive when
                    discussing their manager. How can the coach respond to
                    maintain safety and trust?
                  </h2>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q37"
                      value="0"
                      id="q37a"
                      required
                    />
                    <label htmlFor="q37a">
                      Ask more pointed questions to break the barrier.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q37"
                      value="0"
                      id="q37b"
                      required
                    />
                    <label htmlFor="q37b">
                      Suggest the client may be overreacting.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q37"
                      value="1"
                      id="q37c"
                      required
                    />
                    <label htmlFor="q37c">
                      Acknowledge the defensiveness and invite exploration
                      without pressure. 
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q37"
                      value="0"
                      id="q37d"
                      required
                    />
                    <label htmlFor="q37d">
                      Shift to a more neutral topic immediately.
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    8. The client shares a success and says, “But it’s probably
                    not a big deal.” What should the coach do?
                  </h2>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q38"
                      value="0"
                      id="q38a"
                      required
                    />
                    <label htmlFor="q38a">
                      Move forward to more pressing goals.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q38"
                      value="0"
                      id="q38b"
                      required
                    />
                    <label htmlFor="q38b">Joke lightly and move on.</label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q38"
                      value="1"
                      id="q38c"
                      required
                    />
                    <label htmlFor="q38c">
                      Acknowledge the success and ask how it feels to the
                      client. 
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q38"
                      value="0"
                      id="q38d"
                      required
                    />
                    <label htmlFor="q38d">
                      Say, “That’s nice,” and change the subject.
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    9. The coach is struggling with a personal issue and feels
                    distracted before a session. What action reflects
                    cultivating trust and safety?
                  </h2>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q39"
                      value="0"
                      id="q39a"
                      required
                    />
                    <label htmlFor="q39a">
                      Coach anyway without letting it show.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q39"
                      value="1"
                      id="q39b"
                      required
                    />
                    <label htmlFor="q39b">
                      Consider rescheduling or center themselves to stay fully
                      present. 
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q39"
                      value="0"
                      id="q39c"
                      required
                    />
                    <label htmlFor="q39c">
                      Openly talk about the issue with the client.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q39"
                      value="0"
                      id="q39d"
                      required
                    />
                    <label htmlFor="q39d">
                      Use coaching time to process their feelings.
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>
                    10. A client asks, “Have you ever failed at something
                    important?” How should the coach respond to build trust
                    while maintaining professional boundaries?
                  </h2>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q40"
                      value="1"
                      id="q40a"
                      required
                    />
                    <label htmlFor="q40a">
                      Briefly share a relevant experience if it supports the
                      client’s growth. 
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q40"
                      value="0"
                      id="q40b"
                      required
                    />
                    <label htmlFor="q40b">
                      Decline to answer and redirect immediately.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q40"
                      value="0"
                      id="q40c"
                      required
                    />
                    <label htmlFor="q40c">
                      Avoid the question to maintain authority.
                    </label>
                  </div>
                  <div className="fcolmain">
                    <input
                      type="radio"
                      name="q40"
                      value="0"
                      id="q40d"
                      required
                    />
                    <label htmlFor="q40d">
                      Give detailed personal advice based on experience.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="fh3">
                  <h3> 5. Scenario &#34;Maintains Presence&#34;</h3>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>1. A client becomes quiet during a session after discussing a difficult topic. What is the best way for the coach to respond?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q41" value="0" id="q41a" required />
                    <label htmlFor="q41a">Quickly move on to avoid discomfort.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q41" value="0" id="q41b" required />
                    <label htmlFor="q41b">Ask a new question to fill the silence.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q41" value="0" id="q41c" required />
                    <label htmlFor="q41c">Tell the client it’s okay to be quiet, then wait.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q41" value="1" id="q41d" required />
                    <label htmlFor="q41d">Hold the space and allow the silence for reflection. </label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>2. During a coaching session, the client expresses intense frustration about their team. What should the coach do?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q42" value="0" id="q42a" required />
                    <label htmlFor="q42a">Reassure the client that things will get better.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q42" value="0" id="q42b" required />
                    <label htmlFor="q42b">Shift to goal-setting to create momentum.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q42" value="1" id="q42c" required />
                    <label htmlFor="q42c">Stay grounded and present while inviting the client to explore the emotion. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q42" value="0" id="q42d" required />
                    <label htmlFor="q42d">Share a similar personal story to show understanding.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>3. A coach feels nervous while coaching a senior executive client and finds themselves overexplaining. What should they do to stay present?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q43" value="0" id="q43a" required />
                    <label htmlFor="q43a">Keep speaking to hide their nervousness.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q43" value="0" id="q43b" required />
                    <label htmlFor="q43b">Avoid asking open-ended questions.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q43" value="1" id="q43c" required />
                    <label htmlFor="q43c">Pause, take a breath, and refocus attention on the client. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q43" value="0" id="q43d" required />
                    <label htmlFor="q43d">Let the client lead the session without coaching structure.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>4. A client says something surprising that challenges the coach’s assumptions. What does maintaining presence look like here?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q44" value="0" id="q44a" required />
                    <label htmlFor="q44a">Respond with advice based on past experiences.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q44" value="0" id="q44b" required />
                    <label htmlFor="q44b">Ignore the comment and continue with the planned path.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q44" value="1" id="q44c" required />
                    <label htmlFor="q44c">Stay curious and ask the client to elaborate further. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q44" value="0" id="q44d" required />
                    <label htmlFor="q44d">Politely disagree and shift the conversation.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>5. The coach notices their own mind drifting to unrelated thoughts during a session. What is the best response?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q45" value="0" id="q45a" required />
                    <label htmlFor="q45a">Push through and hope the client doesn’t notice.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q45" value="0" id="q45b" required />
                    <label htmlFor="q45b">Pause the session to take a break.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q45" value="1" id="q45c" required />
                    <label htmlFor="q45c">Gently bring their attention back to the client and re-engage fully. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q45" value="0" id="q45d" required />
                    <label htmlFor="q45d">End the session early to avoid further distraction.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>6. The client suddenly starts crying while discussing a deeply personal experience. What is the most appropriate way to respond?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q46" value="0" id="q46a" required />
                    <label htmlFor="q46a">Offer tissues and try to lighten the mood.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q46" value="1" id="q46b" required />
                    <label htmlFor="q46b">Remain calm, compassionate, and hold space without rushing. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q46" value="0" id="q46c" required />
                    <label htmlFor="q46c">Suggest moving to a less emotional topic.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q46" value="0" id="q46d" required />
                    <label htmlFor="q46d">Ask the client if they want to stop the session.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>7. A coach realizes that they don’t know how to “solve” the client’s challenge. What should they do?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q47" value="1" id="q47a" required />
                    <label htmlFor="q47a">Embrace the uncertainty and stay curious with the client. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q47" value="0" id="q47b" required />
                    <label htmlFor="q47b">Suggest a solution to regain control.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q47" value="0" id="q47c" required />
                    <label htmlFor="q47c">End the topic and shift to goal tracking.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q47" value="0" id="q47d" required />
                    <label htmlFor="q47d">Ask the client to research options and return with a plan.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>8. A client reflects deeply and says, “I’ve never thought about it this way before.” What is the best next step for the coach?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q48" value="1" id="q48a" required />
                    <label htmlFor="q48a">Pause and allow space for the client to continue processing. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q48" value="0" id="q48b" required />
                    <label htmlFor="q48b">Quickly ask another question to keep the flow going.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q48" value="0" id="q48c" required />
                    <label htmlFor="q48c">Move to action planning to build on the insight.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q48" value="0" id="q48d" required />
                    <label htmlFor="q48d">Repeat the insight and ask for confirmation.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>9. A client is stuck in circular thinking and the coach begins to feel impatient. What should the coach do?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q49" value="0" id="q49a" required />
                    <label htmlFor="q49a">Interrupt and guide them out of the loop.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q49" value="0" id="q49b" required />
                    <label htmlFor="q49b">Challenge the client firmly to break the pattern.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q49" value="1" id="q49c" required />
                    <label htmlFor="q49c">Notice the feeling, stay present, and gently explore what’s underneath the repetition. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q49" value="0" id="q49d" required />
                    <label htmlFor="q49d">Let the client talk until they find their own way.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>10. The coach’s schedule is packed, and they feel rushed as the session begins. How can they maintain presence?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q50" value="0" id="q50a" required />
                    <label htmlFor="q50a">Power through the session quickly.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q50" value="1" id="q50b" required />
                    <label htmlFor="q50b">Take a moment to center themselves before fully engaging with the client. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q50" value="0" id="q50c" required />
                    <label htmlFor="q50c">Apologize to the client for being in a hurry.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q50" value="0" id="q50d" required />
                    <label htmlFor="q50d">Keep the session short to manage time.</label>
                  </div>
                </div>
              </div>


            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="fh3">
                  <h3>6. Scenario &#34;Listens Actively&#34;</h3>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>1. During a session, the client repeatedly mentions feeling “stuck,” but their tone is upbeat and they smile. What should the coach do?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q51" value="0" id="q51a" required />
                    <label htmlFor="q51a">Accept the client’s words and move forward.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q51" value="1" id="q51b" required />
                    <label htmlFor="q51b">Explore the discrepancy between words and tone. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q51" value="0" id="q51c" required />
                    <label htmlFor="q51c">Reassure the client that feeling stuck is common.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q51" value="0" id="q51d" required />
                    <label htmlFor="q51d">Offer a strategy that worked with a previous client.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>2. A client says, “I just don’t know what to do anymore,” and sighs heavily. What is the most effective coach response?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q52" value="0" id="q52a" required />
                    <label htmlFor="q52a">Ignore the sigh and focus on next steps.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q52" value="0" id="q52b" required />
                    <label htmlFor="q52b">Shift to a different topic.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q52" value="1" id="q52c" required />
                    <label htmlFor="q52c">Reflect the emotional tone and ask what the sigh means. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q52" value="0" id="q52d" required />
                    <label htmlFor="q52d">Summarize the last thing the client said.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>3. In response to a client describing a stressful work situation, the coach says: “So you’re overwhelmed and frustrated.” The client nods. What should the coach do next?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q53" value="0" id="q53a" required />
                    <label htmlFor="q53a">Move on to setting goals for next week.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q53" value="0" id="q53b" required />
                    <label htmlFor="q53b">Offer a suggestion for stress relief.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q53" value="1" id="q53c" required />
                    <label htmlFor="q53c">Ask the client to share more about the frustration. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q53" value="0" id="q53d" required />
                    <label htmlFor="q53d">Praise the client for being honest.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>4. Over several sessions, the client uses words like “invisible,” “forgotten,” and “on the sidelines.” What should the coach do?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q54" value="1" id="q54a" required />
                    <label htmlFor="q54a">Bring up the recurring language and explore its meaning. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q54" value="0" id="q54b" required />
                    <label htmlFor="q54b">Tell the client to avoid negative language.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q54" value="0" id="q54c" required />
                    <label htmlFor="q54c">Focus only on what the client says today.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q54" value="0" id="q54d" required />
                    <label htmlFor="q54d">Encourage the client to be more optimistic.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>5. A client describes an interaction with their boss and says, “I didn’t say anything, but inside I was boiling.” What should the coach explore?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q55" value="0" id="q55a" required />
                    <label htmlFor="q55a">What the boss said.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q55" value="0" id="q55b" required />
                    <label htmlFor="q55b">Whether the client should speak up next time.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q55" value="1" id="q55c" required />
                    <label htmlFor="q55c">What the client felt and chose not to express. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q55" value="0" id="q55d" required />
                    <label htmlFor="q55d">Whether silence is always the best approach.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>6. When a client says, “I feel okay, I guess,” the coach replies, “You’re okay.” What’s missing in this response?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q56" value="0" id="q56a" required />
                    <label htmlFor="q56a">Validation of client’s uncertainty.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q56" value="1" id="q56b" required />
                    <label htmlFor="q56b">Exploration of the ambiguity in the client’s tone. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q56" value="0" id="q56c" required />
                    <label htmlFor="q56c">Repetition of the client’s words.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q56" value="0" id="q56d" required />
                    <label htmlFor="q56d">Suggestion for next steps.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>7. A client is talking about a challenging project, and the coach notices the client wringing their hands. What should the coach do?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q57" value="0" id="q57a" required />
                    <label htmlFor="q57a">Ignore it; non-verbal cues are unreliable.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q57" value="0" id="q57b" required />
                    <label htmlFor="q57b">Ask if the client is anxious.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q57" value="1" id="q57c" required />
                    <label htmlFor="q57c">Share the observation and ask what the gesture represents. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q57" value="0" id="q57d" required />
                    <label htmlFor="q57d">Reassure the client that stress is normal.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>8. A client speaks with low energy and avoids eye contact. How should the coach respond?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q58" value="0" id="q58a" required />
                    <label htmlFor="q58a">Keep the conversation focused on tasks.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q58" value="0" id="q58b" required />
                    <label htmlFor="q58b">Ask if the client wants to talk about their week.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q58" value="1" id="q58c" required />
                    <label htmlFor="q58c">Gently reflect on the observed low energy and invite exploration. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q58" value="0" id="q58d" required />
                    <label htmlFor="q58d">Conclude the session early to allow rest.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>9. The client says, “I know I should be grateful, but I’m just tired.” What would demonstrate active listening?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q59" value="0" id="q59a" required />
                    <label htmlFor="q59a">Tell the client to focus on gratitude.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q59" value="0" id="q59b" required />
                    <label htmlFor="q59b">Say, “You shouldn’t feel guilty.”</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q59" value="0" id="q59c" required />
                    <label htmlFor="q59c">Ask what’s making them tired.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q59" value="1" id="q59d" required />
                    <label htmlFor="q59d">Reflect the conflict between gratitude and exhaustion. </label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>10. The coach hears recurring themes of self-doubt over several sessions. What is the best course of action?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q60" value="0" id="q60a" required />
                    <label htmlFor="q60a">Wait for the client to bring it up again.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q60" value="1" id="q60b" required />
                    <label htmlFor="q60b">Explore the pattern of self-doubt as a theme. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q60" value="0" id="q60c" required />
                    <label htmlFor="q60c">Challenge the client to stop doubting themselves.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q60" value="0" id="q60d" required />
                    <label htmlFor="q60d">Redirect to setting performance goals.</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="fh3">
                  <h3>7. Scenario &#34;Evokes Awareness&#34;</h3>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>1. A client says, “I always end up taking on too much at work.” What’s the best way for the coach to evoke insight?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q61" value="0" id="q61a" required />
                    <label htmlFor="q61a">Suggest time management tools immediately.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q61" value="0" id="q61b" required />
                    <label htmlFor="q61b">Ask if they’ve considered delegating.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q61" value="1" id="q61c" required />
                    <label htmlFor="q61c">Ask what patterns or beliefs might lead to saying yes too often. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q61" value="0" id="q61d" required />
                    <label htmlFor="q61d">Offer to role-play how to say no.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>2. The client expresses uncertainty about how to move forward. What coach response would best evoke awareness?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q62" value="0" id="q62a" required />
                    <label htmlFor="q62a">Encourage the client to revisit past goals.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q62" value="1" id="q62b" required />
                    <label htmlFor="q62b">Ask, “What haven’t you tried yet that might be worth exploring?” </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q62" value="0" id="q62c" required />
                    <label htmlFor="q62c">Offer examples of what other clients have done.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q62" value="0" id="q62d" required />
                    <label htmlFor="q62d">Tell them to list out pros and cons.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>3. A client says, “I’m just not the kind of person who takes risks.” How should the coach respond to support deeper awareness?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q63" value="0" id="q63a" required />
                    <label htmlFor="q63a">Agree and move on to something else.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q63" value="0" id="q63b" required />
                    <label htmlFor="q63b">Ask them to describe why they avoid risk.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q63" value="0" id="q63c" required />
                    <label htmlFor="q63c">Encourage them to take small risks anyway.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q63" value="1" id="q63d" required />
                    <label htmlFor="q63d">Ask, “What has shaped your belief about risk?” </label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>4. A client is caught in a loop of negative self-talk. What would be the most effective coaching move?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q64" value="0" id="q64a" required />
                    <label htmlFor="q64a">Disagree with their statements to counter the negativity.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q64" value="1" id="q64b" required />
                    <label htmlFor="q64b">Invite them to explore where that inner voice comes from and how it serves them. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q64" value="0" id="q64c" required />
                    <label htmlFor="q64c">Encourage affirmations to override the mindset.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q64" value="0" id="q64d" required />
                    <label htmlFor="q64d">Share a success story to inspire them.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>5. A client says, “This just doesn’t feel like me,” while talking about a recent decision. What coach response could spark useful reflection?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q65" value="0" id="q65a" required />
                    <label htmlFor="q65a">Suggest they reverse the decision.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q65" value="0" id="q65b" required />
                    <label htmlFor="q65b">Tell them it’s okay to feel that way.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q65" value="1" id="q65c" required />
                    <label htmlFor="q65c">Ask, “What about this decision feels out of alignment with who you are?” </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q65" value="0" id="q65d" required />
                    <label htmlFor="q65d">Explore whether the consequences are serious.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>6. During a session, the coach notices the client’s energy drops when discussing a new job opportunity. What should the coach do?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q66" value="0" id="q66a" required />
                    <label htmlFor="q66a">Encourage the client to stay positive.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q66" value="1" id="q66b" required />
                    <label htmlFor="q66b">Share the observation and ask what might be happening internally. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q66" value="0" id="q66c" required />
                    <label htmlFor="q66c">Move on to action steps.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q66" value="0" id="q66d" required />
                    <label htmlFor="q66d">Ask about salary and logistics.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>7. A coach senses the client is operating on assumptions. What is the best way to support awareness?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q67" value="0" id="q67a" required />
                    <label htmlFor="q67a">Challenge the assumption by providing a counter-example.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q67" value="1" id="q67b" required />
                    <label htmlFor="q67b">Ask, “What if the opposite were true—how would that change things?” </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q67" value="0" id="q67c" required />
                    <label htmlFor="q67c">Ask the client to stop assuming and look at facts.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q67" value="0" id="q67d" required />
                    <label htmlFor="q67d">Avoid the topic to keep the session flowing.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>8. A client says they’ve had a great week and feel proud. What is an effective way to enhance learning in this moment?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q68" value="0" id="q68a" required />
                    <label htmlFor="q68a">Congratulate them and move on.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q68" value="1" id="q68b" required />
                    <label htmlFor="q68b">Ask, “What worked well for you, and how can you apply that again?” </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q68" value="0" id="q68c" required />
                    <label htmlFor="q68c">Remind them that consistency is important.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q68" value="0" id="q68d" required />
                    <label htmlFor="q68d">Shift the focus to new goals.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>9. A client is overwhelmed by too many ideas. What coach approach supports clarity and insight?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q69" value="0" id="q69a" required />
                    <label htmlFor="q69a">Prioritize the ideas for them.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q69" value="0" id="q69b" required />
                    <label htmlFor="q69b">Ask which idea they like best.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q69" value="1" id="q69c" required />
                    <label htmlFor="q69c">Invite the client to group or theme the ideas to see patterns. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q69" value="0" id="q69d" required />
                    <label htmlFor="q69d">Tell them to focus on just one and ignore the rest.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>10. The client appears stuck between two choices and asks, “What would you do if you were me?” What is the best response?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q70" value="0" id="q70a" required />
                    <label htmlFor="q70a">Share your personal experience.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q70" value="1" id="q70b" required />
                    <label htmlFor="q70b">Invite the client to consider what each option represents to them. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q70" value="0" id="q70c" required />
                    <label htmlFor="q70c">Suggest the safer option.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q70" value="0" id="q70d" required />
                    <label htmlFor="q70d">Help them decide by listing risks and benefits.</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="fh3">
                  <h3>8. Scenario &#34;Facilitates Client Growth&#34;</h3>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>1. A client says, “I realize I always avoid difficult conversations.” What should the coach do to facilitate growth?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q71" value="0" id="q71a" required />
                    <label htmlFor="q71a">Suggest a book on assertive communication.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q71" value="1" id="q71b" required />
                    <label htmlFor="q71b">Ask how this insight might influence future choices or behaviors. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q71" value="0" id="q71c" required />
                    <label htmlFor="q71c">Congratulate the client and move on.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q71" value="0" id="q71d" required />
                    <label htmlFor="q71d">Recommend a role-play exercise immediately.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>2. The client says, “I want to commit to better time boundaries next week.” What’s the most appropriate coach response?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q72" value="0" id="q72a" required />
                    <label htmlFor="q72a">Set specific deadlines for them.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q72" value="1" id="q72b" required />
                    <label htmlFor="q72b">Ask how they want to stay accountable and what success would look like. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q72" value="0" id="q72c" required />
                    <label htmlFor="q72c">Encourage the client to just try and see how it goes.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q72" value="0" id="q72d" required />
                    <label htmlFor="q72d">Give them a time management tool to follow.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>3. A client takes a bold step in line with their goals. How can the coach reinforce client growth?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q73" value="1" id="q73a" required />
                    <label htmlFor="q73a">Celebrate the action and invite the client to reflect on what they learned. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q73" value="0" id="q73b" required />
                    <label htmlFor="q73b">Suggest a more structured plan next time.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q73" value="0" id="q73c" required />
                    <label htmlFor="q73c">Review the risk they took.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q73" value="0" id="q73d" required />
                    <label htmlFor="q73d">Move quickly to the next action item.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>4. At the end of a coaching session, the client seems energized but the coach ends abruptly due to time. What could the coach do differently next time?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q74" value="0" id="q74a" required />
                    <label htmlFor="q74a">Skip summaries to save time.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q74" value="1" id="q74b" required />
                    <label htmlFor="q74b">Reserve time to partner with the client in closing and capturing learning. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q74" value="0" id="q74c" required />
                    <label htmlFor="q74c">Leave it to the client to reflect after the session.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q74" value="0" id="q74d" required />
                    <label htmlFor="q74d">End early and send a follow-up email instead.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>5. A client says, “I learned I’m most productive in the mornings.” What is the coach’s best next step?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q75" value="0" id="q75a" required />
                    <label htmlFor="q75a">Move on to a new topic.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q75" value="0" id="q75b" required />
                    <label htmlFor="q75b">Suggest adding morning goals to their to-do list.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q75" value="1" id="q75c" required />
                    <label htmlFor="q75c">Ask how they want to integrate this learning into their weekly routine. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q75" value="0" id="q75d" required />
                    <label htmlFor="q75d">Offer morning productivity hacks.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>6. A client has not followed through on a planned action. How should the coach respond?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q76" value="1" id="q76a" required />
                    <label htmlFor="q76a">Invite the client to explore what got in the way and what they learned. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q76" value="0" id="q76b" required />
                    <label htmlFor="q76b">Express disappointment and set a new deadline.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q76" value="0" id="q76c" required />
                    <label htmlFor="q76c">Move on without addressing it.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q76" value="0" id="q76d" required />
                    <label htmlFor="q76d">Remind them of their original commitment.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>7. A client shares excitement about a small win. What’s the best coach response?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q77" value="0" id="q77a" required />
                    <label htmlFor="q77a">Say, “That’s great—let’s focus on the next step.”</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q77" value="0" id="q77b" required />
                    <label htmlFor="q77b">Log the success for future tracking.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q77" value="0" id="q77c" required />
                    <label htmlFor="q77c">Tell them this is expected progress.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q77" value="1" id="q77d" required />
                    <label htmlFor="q77d">Celebrate the success and ask what contributed to it. </label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>8. A client is unsure how to move forward after a big realization. What should the coach do?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q78" value="0" id="q78a" required />
                    <label htmlFor="q78a">Offer a few potential next steps.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q78" value="1" id="q78b" required />
                    <label htmlFor="q78b">Ask, “What’s one small step you could take to act on this insight?” </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q78" value="0" id="q78c" required />
                    <label htmlFor="q78c">Delay action planning until the next session.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q78" value="0" id="q78d" required />
                    <label htmlFor="q78d">Tell the client to sleep on it.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>9. A client finishes summarizing their key insight from the session. What is a good next step for the coach?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q79" value="1" id="q79a" required />
                    <label htmlFor="q79a">Partner with the client to identify how they want to apply that learning. </label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q79" value="0" id="q79b" required />
                    <label htmlFor="q79b">Compliment their awareness and close the session.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q79" value="0" id="q79c" required />
                    <label htmlFor="q79c">Offer homework to reinforce the learning.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q79" value="0" id="q79d" required />
                    <label htmlFor="q79d">Write the summary down for them.</label>
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <div className="fcol1 newassesment">
                  <h2>10. A client is exploring how to manage competing priorities. How can the coach support forward momentum?</h2>
                  <div className="fcolmain">
                    <input type="radio" name="q80" value="0" id="q80a" required />
                    <label htmlFor="q80a">Create a step-by-step plan for them.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q80" value="0" id="q80b" required />
                    <label htmlFor="q80b">Tell them to focus on their top three tasks.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q80" value="0" id="q80c" required />
                    <label htmlFor="q80c">Ask what they’ve already tried.</label>
                  </div>
                  <div className="fcolmain">
                    <input type="radio" name="q80" value="1" id="q80d" required />
                    <label htmlFor="q80d">Invite the client to consider resources, support, and potential obstacles. </label>
                  </div>
                </div>
              </div>
            </div>








            <div className="fcol1 lastinp ptt-20">
              <div className="row inpuut">
                <div className=" col-lg-6 col-sm-4 mb-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    required
                  />
                </div>
                <div className=" col-lg-6 col-sm-6 mb-12">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Work Email/ Personal Email*"
                    required
                  />
                </div>
                <div className=" col-lg-6 col-sm-6 mb-12">
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

                <div className=" col-lg-6 col-sm-6 mb-12 d-none">
                  <input
                    className="form-control"
                    type="text"
                    value="Null"
                    name="organization"
                    placeholder="Organization*"
                    required
                  />
                </div>
                <div className=" col-lg-6 col-sm-6 mb-12">
                  <input
                    className="form-control"
                    type="text"
                    name="emailer"
                    placeholder="Emailer"
                    disabled
                  />
                </div>
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
          </form>
        </div>
          {/* Spinner Overlay */}
        {isLoading && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner style={{ width: "3rem", height: "3rem", color: "#fff" }} />
          </div>
        )}
      </section>
    </>
  );
}
