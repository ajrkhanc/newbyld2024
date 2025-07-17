import { useEffect, useRef, useState } from "react";
import { scenarios } from "../../../data/scenarios";
import QuestionList from "../../../components/QuestionList/QuestionList";
import ScenarioTabs from "../../../components/ScenarioTabs/ScenarioTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../../styles/coachKnowledge.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

// ✅ Reactstrap Components
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

const CoachingKnowledgeAssessment = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedAnswersPerScenario, setSelectedAnswersPerScenario] = useState(
    {}
  );
  const [showModal, setShowModal] = useState(false);
  const questionListRef = useRef(null);

  const activeScenario = scenarios.find((s) => s.id === activeTab);
  const currentIndex = scenarios.findIndex((s) => s.id === activeTab);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Block unauthorized access
  useEffect(() => {
    const hasPaid = localStorage.getItem("paymentSuccess");
    if (hasPaid !== "true") {
      router.replace("/coaching/coaching-assessments");
    }
  }, []);

  useEffect(() => {
    if (questionListRef.current) {
      questionListRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTab]);

  const handleSubmit = () => {
    let hasUnanswered = false;
    let missingScenarios = [];

    scenarios.forEach((scenario) => {
      const answers = selectedAnswersPerScenario[scenario.id] || {};
      const totalQuestions = scenario.questions.length;
      const answeredCount = Object.keys(answers).length;

      if (answeredCount < totalQuestions) {
        hasUnanswered = true;
        missingScenarios.push(`"${scenario.title}"`);
      }
    });

    if (hasUnanswered) {
      toast.error(
        `Please answer all questions in: ${missingScenarios.join(", ")}`
      );
      return;
    }

    // ✅ If all valid, open modal for personal info
    setShowModal(true);
  };

  const generateSlug = (name, phone) => {
    const cleanName = name
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .toLowerCase()
      .split(" ")
      .join("-");
    return `${cleanName}${phone}`;
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const form = e.target;
  //   const submitBtn = document.getElementById("submitbuttonform");
  //   submitBtn.disabled = true;
  //   submitBtn.value = "Submitting...";

  //   const formData = new FormData(form);
  //   const name = formData.get("name");
  //   const phone = formData.get("phone");
  //   const email = formData.get("email");
  //   const organization = formData.get("organization") || "Null";
  //   const newnameurl = generateSlug(name, phone);

  //   // ✅ Create payload object
  //   const answers = {};
  //   let qCounter = 1;

  //   scenarios.forEach((scenario) => {
  //     const scenarioAnswers = selectedAnswersPerScenario[scenario.id] || {};

  //     Object.entries(scenarioAnswers).forEach(([qIndex, optIndex]) => {
  //       const questionIndex = parseInt(qIndex);
  //       const question = scenario.questions[questionIndex];
  //       const selectedOption = question.options[optIndex];

  //       // ✅ Send value: "1" or "0"
  //       answers[`q${qCounter}`] = selectedOption?.value?.toString() || "0";
  //       qCounter++;
  //     });
  //   });

  //   // Fill remaining unanswered questions as "0"
  //   while (qCounter <= 80) {
  //     answers[`q${qCounter}`] = "0";
  //     qCounter++;
  //   }

  //   // ✅ Add user info
  //   answers.name = name;
  //   answers.phone = phone;
  //   answers.email = email;
  //   answers.organization = organization;
  //   answers.newnameurl = newnameurl;

  //   try {
  //     // ✅ Send to your main API
  //     const response = await fetch(
  //       "https://byldblogs.vercel.app/api/coach-knowledge-assessment",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(answers),
  //       }
  //     );

  //     const data = await response.json();

  //     if (data.status === 0 || data.status === "success") {
  //       // ✅ Optional: Also submit to CF7
  //       const cf7FormData = new FormData();
  //       cf7FormData.append("name", name);
  //       cf7FormData.append("email", email);
  //       cf7FormData.append("phone", phone);

  //       await fetch(
  //         "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/526/feedback",
  //         {
  //           method: "POST",
  //           body: cf7FormData,
  //         }
  //       );

  //       // ✅ Show success toast message
  //       toast.success(data.message || "Submitted Successfully");

  //       // ✅ Reset form and assessment
  //       form.reset();
  //       setSelectedAnswersPerScenario({});
  //       setActiveTab(1);
  //       setShowModal(false);
  //     } else {
  //       toast.error("Email is already registered.");
  //     }
  //   } catch (error) {
  //     console.error("Submission Error:", error);
  //     toast.error("Submission failed. Please try again.");
  //   } finally {
  //     submitBtn.disabled = false;
  //     submitBtn.value = "Submit";
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   }
  // };

  const handleFormSubmit = async (e) => {
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
    const organization = formData.get("organization") || "Null";
    const newnameurl = generateSlug(name, phone);

    const answers = {};
    let qCounter = 1;

    scenarios.forEach((scenario) => {
      const scenarioAnswers = selectedAnswersPerScenario[scenario.id] || {};
      Object.entries(scenarioAnswers).forEach(([qIndex, optIndex]) => {
        const questionIndex = parseInt(qIndex);
        const question = scenario.questions[questionIndex];
        const selectedOption = question.options[optIndex];
        answers[`q${qCounter}`] = selectedOption?.value?.toString() || "0";
        qCounter++;
      });
    });

    while (qCounter <= 80) {
      answers[`q${qCounter}`] = "0";
      qCounter++;
    }

    answers.name = name;
    answers.phone = phone;
    answers.email = email;
    answers.organization = organization;
    answers.newnameurl = newnameurl;

    try {
      const response = await fetch(
        "https://byldblogs.vercel.app/api/coach-knowledge-assessment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(answers),
        }
      );

      const data = await response.json();

      if (data.status === 0 || data.status === "success") {
        // Submit to CF7
        const cf7FormData = new FormData();
        cf7FormData.append("name", name);
        cf7FormData.append("email", email);
        cf7FormData.append("phone", phone);

        await fetch(
          "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/526/feedback",
          {
            method: "POST",
            body: cf7FormData,
          }
        );

        // ✅ Show toast instead of DOM text
        toast.success(data.message || "Submitted Successfully!");

        form.reset();
        setSelectedAnswersPerScenario({});
        setActiveTab(1);
        setShowModal(false);
        setTimeout(() => {
          localStorage.removeItem("paymentSuccess"); // ✅ clear flag after assessment
          window.location.href = `/coaching/coach-knowledge-assessment-s/${newnameurl}`;
          setIsLoading(false);
        }, 2500);
      } else {
        toast.error("Email is already registered.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.value = "Submit";

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const form = e.target;
  //   const submitBtn = document.getElementById("submitbuttonform");
  //   submitBtn.disabled = true;
  //   submitBtn.value = "Redirecting to Payment...";

  //   const formData = new FormData(form);
  //   const name = formData.get("name");
  //   const phone = formData.get("phone");
  //   const email = formData.get("email");
  //   const organization = formData.get("organization") || "Null";
  //   const newnameurl = generateSlug(name, phone);

  //   const answers = {};
  //   let qCounter = 1;

  //   scenarios.forEach((scenario) => {
  //     const scenarioAnswers = selectedAnswersPerScenario[scenario.id] || {};
  //     Object.entries(scenarioAnswers).forEach(([qIndex, optIndex]) => {
  //       const questionIndex = parseInt(qIndex);
  //       const question = scenario.questions[questionIndex];
  //       const selectedOption = question.options[optIndex];
  //       answers[`q${qCounter}`] = selectedOption?.value?.toString() || "0";
  //       qCounter++;
  //     });
  //   });

  //   while (qCounter <= 80) {
  //     answers[`q${qCounter}`] = "0";
  //     qCounter++;
  //   }

  //   // Add personal info
  //   answers.name = name;
  //   answers.phone = phone;
  //   answers.email = email;
  //   answers.organization = organization;
  //   answers.newnameurl = newnameurl;

  //   // ✅ Store in localStorage temporarily
  //   localStorage.setItem("coachAssessmentData", JSON.stringify(answers));

  //   // ✅ Redirect to Razorpay Payment Link
  //   window.location.href = "https://pages.razorpay.com/pl_QqxfjgqkJSlEPY/view";
  // };

  return (
    <div>
      <section className=" ptt-20">
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ textAlign: "right" }}>
              <img
                src="/assets/images/bcaLogo.webp"
                alt="bcaLogo"
                className={styles.bcaLogo}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="assesmentbannnerbg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <h2 className="cacoh pbb-20">Coach Knowledge Assessment</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="pbb-40 mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 mb-5">
              <div className={styles.left}>
                <ScenarioTabs
                  scenarios={scenarios}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div
                className={styles.right}
                ref={questionListRef}
                style={{ maxHeight: "100%", overflowY: "auto" }}
              >
                {activeScenario && (
                  <QuestionList
                    questions={activeScenario.questions}
                    scenarioId={activeTab}
                    selectedAnswers={
                      selectedAnswersPerScenario[activeTab] || {}
                    }
                    setSelectedAnswersPerScenario={
                      setSelectedAnswersPerScenario
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #ddd",
          padding: "15px 75px",
        }}
      >
        <button
          className={`${styles.buttonNav} ${styles.buttonPrev} ${
            currentIndex === 0 ? styles.buttonDisabled : ""
          }`}
          onClick={() => setActiveTab(scenarios[currentIndex - 1]?.id)}
          disabled={currentIndex === 0}
        >
          <IoIosArrowBack className={styles.arrowTextPrev} />
          <span className={styles.arrowTextPrev}>Previous </span>
        </button>

        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <button
            className={`${styles.buttonNav} ${styles.buttonNext} ${
              currentIndex === scenarios.length - 1 ? styles.buttonDisabled : ""
            } me-2`}
            onClick={() => setActiveTab(scenarios[currentIndex + 1]?.id)}
            disabled={currentIndex === scenarios.length - 1}
          >
            <span className={styles.arrowText}>Next</span>
            <IoIosArrowForward className={styles.arrowText} />
          </button>

          {currentIndex === scenarios.length - 1 && (
            <button
              className="btn btn-success "
              style={{
                padding: "10px 20px",
                outline: "none",
                boxShadow: "none",
              }}
              onClick={handleSubmit}
            >
              Submit Assessment
            </button>
          )}
        </div>
      </div>

      {/* ✅ Reactstrap Modal */}
      <Modal
        isOpen={showModal}
        toggle={() => setShowModal(!showModal)}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => setShowModal(false)}>
          Submit Your Information
        </ModalHeader>
        <Form onSubmit={handleFormSubmit}>
          <ModalBody>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="name">Your Name*</Label>
                  <Input type="text" name="name" id="name" required />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="email">Email*</Label>
                  <Input type="email" name="email" id="email" required />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="phone">Phone No.*</Label>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    maxLength="10"
                    minLength="10"
                    pattern="[0-9]*"
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="organization">Organization*</Label>
                  <Input
                    type="text"
                    name="organization"
                    id="organization"
                    required
                  />
                </FormGroup>
              </Col>
              {/* <Col md="6">
                <FormGroup>
                  <Label for="emailer">Emailer</Label>
                  <Input type="text" name="emailer" disabled />
                </FormGroup>
              </Col> */}
            </Row>
          </ModalBody>
          <ModalFooter>
            <input
              type="submit"
              id="submitbuttonform"
              value={isLoading ? "Submitting..." : "Submit"}
              className="btn-success btn "
              color="success"
              style={{ outline: "none", boxShadow: "none" }}
            />
          </ModalFooter>
        </Form>
      </Modal>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default CoachingKnowledgeAssessment;
