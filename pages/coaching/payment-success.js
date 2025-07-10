import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentSuccessPage = () => {
  useEffect(() => {
    const savedData = localStorage.getItem("coachAssessmentData");
    if (!savedData) {
      toast.error("No assessment data found.");
      return;
    }

    const answers = JSON.parse(savedData);

    const submitData = async () => {
      try {
        const res = await fetch(
          "https://byldblogs.vercel.app/api/coach-knowledge-assessment",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(answers),
          }
        );

        const data = await res.json();

        if (data.status === 0 || data.status === "success") {
          const cf7FormData = new FormData();
          cf7FormData.append("name", answers.name);
          cf7FormData.append("email", answers.email);
          cf7FormData.append("phone", answers.phone);

          await fetch(
            "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/526/feedback",
            {
              method: "POST",
              body: cf7FormData,
            }
          );

          localStorage.removeItem("coachAssessmentData");
          toast.success("Submitted successfully!");

          setTimeout(() => {
            window.location.href = `/coaching/coach-knowledge-assessment-s/${answers.newnameurl}`;
          }, 2000);
        } else {
          toast.error("Email is already registered.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        toast.error("Submission failed.");
      }
    };

    submitData();
  }, []);

  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h2>Thank you for your payment!</h2>
      <p>Submitting your assessment data, please wait...</p>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default PaymentSuccessPage;
