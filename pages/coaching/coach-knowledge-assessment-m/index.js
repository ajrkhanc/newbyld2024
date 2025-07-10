import { useEffect, useRef, useState } from "react";
import { scenarios } from "../../../data/scenarios";
import QuestionList from "../../../components/QuestionList/QuestionList";
import ScenarioTabs from "../../../components/ScenarioTabs/ScenarioTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../../styles/coachKnowledge.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

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

    try {
      // ✅ Send data to Contact Form 7 WordPress API
      const cf7FormData = new FormData();
      cf7FormData.append("name", name);
      cf7FormData.append("email", email);
      cf7FormData.append("phone", phone);
      cf7FormData.append("organization", organization); // if supported by your CF7 form

      const response = await fetch(
        "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/526/feedback",
        {
          method: "POST",
          body: cf7FormData,
        }
      );

      const data = await response.json();

      if (data.status === "mail_sent") {
        toast.success("Submitted Successfully!");
        form.reset();
        setSelectedAnswersPerScenario({});
        setActiveTab(1);
        setShowModal(false);

        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 2500);
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("CF7 Submission Error:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.value = "Submit";
      setIsLoading(false);
    }
  };

  return (
    <div>
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
