// import { useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PaymentSuccessPage = () => {
//   useEffect(() => {
//     const savedData = localStorage.getItem("coachAssessmentData");
//     if (!savedData) {
//       toast.error("No assessment data found.");
//       return;
//     }

//     const answers = JSON.parse(savedData);

//     const submitData = async () => {
//       try {
//         const res = await fetch(
//           "https://byldblogs.vercel.app/api/coach-knowledge-assessment",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(answers),
//           }
//         );

//         const data = await res.json();

//         if (data.status === 0 || data.status === "success") {
//           const cf7FormData = new FormData();
//           cf7FormData.append("name", answers.name);
//           cf7FormData.append("email", answers.email);
//           cf7FormData.append("phone", answers.phone);

//           await fetch(
//             "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/526/feedback",
//             {
//               method: "POST",
//               body: cf7FormData,
//             }
//           );

//           localStorage.removeItem("coachAssessmentData");
//           toast.success("Submitted successfully!");

//           setTimeout(() => {
//             window.location.href = `/coaching/coach-knowledge-assessment-s/${answers.newnameurl}`;
//           }, 2000);
//         } else {
//           toast.error("Email is already registered.");
//         }
//       } catch (error) {
//         console.error("Submission error:", error);
//         toast.error("Submission failed.");
//       }
//     };

//     submitData();
//   }, []);

//   return (
//     <div style={{ padding: "60px", textAlign: "center" }}>
//       <h2>Thank you for your payment!</h2>
//       <p>Submitting your assessment data, please wait...</p>
//       <ToastContainer position="top-right" autoClose={2000} />
//     </div>
//   );
// };

// export default PaymentSuccessPage;

// import { useEffect } from "react";
// import { useRouter } from "next/router";

// const PaymentSuccessPage = () => {
//   const router = useRouter();
//   const { status, razorpay_payment_id } = router.query;

//   useEffect(() => {
//     if (status === "success" && razorpay_payment_id) {
//       // ✅ Store payment flag in localStorage
//       localStorage.setItem("paymentSuccess", "true");
//     } else {
//       // ❌ Invalid access, redirect to public page
//       router.replace("/coaching/coaching-assessments");
//     }
//   }, [status, razorpay_payment_id]);

//   const handleStartAssessment = () => {
//     router.push("/coaching/coach-knowledge-assessment-s");
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "80px 20px" }}>
//       <h1 style={{ color: "#28a745" }}>🎉 Payment Successful!</h1>
//       <p>Thank you for your payment.</p>

//       {razorpay_payment_id && (
//         <>
//           <p>
//             <strong>Payment ID:</strong> {razorpay_payment_id}
//           </p>
//         </>
//       )}

//       <p>You can now begin your Coach Knowledge Assessment.</p>

//       <button
//         onClick={handleStartAssessment}
//         style={{
//           marginTop: "20px",
//           padding: "12px 24px",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           fontSize: "16px",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Start Assessment
//       </button>
//     </div>
//   );
// };

// export default PaymentSuccessPage;

// import { useEffect } from "react";
// import { useRouter } from "next/router";

// const PaymentSuccessPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // ✅ Directly set payment flag since we can't get query params
//     localStorage.setItem("paymentSuccess", "true");
//   }, []);

//   const handleStartAssessment = () => {
//     router.push("/coaching/coach-knowledge-assessment-s");
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "80px 20px" }}>
//       <h1 style={{ color: "#28a745" }}>🎉 Payment Successful!</h1>
//       <p>Thank you for your payment.</p>
//       <p>You can now begin your Coach Knowledge Assessment.</p>

//       <button
//         onClick={handleStartAssessment}
//         style={{
//           marginTop: "20px",
//           padding: "12px 24px",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           fontSize: "16px",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Start Assessment
//       </button>
//     </div>
//   );
// };

// export default PaymentSuccessPage;

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const PaymentSuccessPage = () => {
//   const router = useRouter();
//   const [authorized, setAuthorized] = useState(false);

//   // useEffect(() => {
//   //   const hasPaid = localStorage.getItem("paymentSuccess");
//   //   if (hasPaid === "true") {
//   //     setAuthorized(true);
//   //   } else {
//   //     router.replace("/coaching/coaching-assessments"); // redirect if not paid
//   //   }
//   // }, [router]);

//   useEffect(() => {
//     const hasPaid = localStorage.getItem("paymentSuccess");
//     if (hasPaid === "true") {
//       setAuthorized(true);

//       // ✅ Remove the flag after showing this page once
//       localStorage.removeItem("paymentSuccess");
//     } else {
//       router.replace("/coaching/coaching-assessments");
//     }
//   }, []);

//   const handleStartAssessment = () => {
//     router.push("/coaching/coach-knowledge-assessment-s");
//   };

//   if (!authorized) return null; // don't render anything until checked

//   return (
//     <div style={{ textAlign: "center", padding: "80px 20px" }}>
//       <h1 style={{ color: "#28a745" }}>🎉 Payment Successful!</h1>
//       <p>Thank you for your payment.</p>
//       <p>You can now begin your Coach Knowledge Assessment.</p>

//       <button
//         onClick={handleStartAssessment}
//         style={{
//           marginTop: "20px",
//           padding: "12px 24px",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           fontSize: "16px",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Start Assessment
//       </button>
//     </div>
//   );
// };

// export default PaymentSuccessPage;

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const PaymentSuccessPage = () => {
//   const router = useRouter();
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const [checkingAuth, setCheckingAuth] = useState(true);

//   useEffect(() => {
//     if (!router.isReady) return;

//     const checkPayment = () => {
//       const { status, razorpay_payment_id } = router.query;

//       if (typeof window === "undefined") return;

//       const hasPaid = localStorage.getItem("paymentSuccess");
//       const sessionPaid = sessionStorage.getItem("justPaid");
//       const sessionExpiry = sessionStorage.getItem("justPaidExpiry");
//       const now = Date.now();

//       // ✅ 1. Just redirected after payment
//       if (status === "success" && razorpay_payment_id && hasPaid === "true") {
//         setIsAuthorized(true);
//         localStorage.removeItem("paymentSuccess");

//         const expiresAt = now + 5 * 60 * 1000;
//         sessionStorage.setItem("justPaid", "true");
//         sessionStorage.setItem("justPaidExpiry", expiresAt.toString());

//         setCheckingAuth(false);
//         return;
//       }

//       // ✅ 2. Within valid session
//       if (sessionPaid === "true" && now < parseInt(sessionExpiry || "0")) {
//         setIsAuthorized(true);
//         setCheckingAuth(false);
//         return;
//       }

//       // ❌ 3. Invalid/Expired
//       router.replace("/coaching/coaching-assessments");
//     };

//     checkPayment();
//   }, [router.isReady, router.query]);

//   const handleStartAssessment = () => {
//     router.push("/coaching/coach-knowledge-assessment-s");
//   };

//   if (checkingAuth || !isAuthorized) return null;

//   return (
//     <div style={{ textAlign: "center", padding: "80px 20px" }}>
//       <h1 style={{ color: "#28a745" }}>🎉 Payment Successful!</h1>
//       <p>Thank you for your payment.</p>

//       {router.query.razorpay_payment_id && (
//         <p>
//           <strong>Payment ID:</strong> {router.query.razorpay_payment_id}
//         </p>
//       )}

//       <p>You can now begin your Coach Knowledge Assessment.</p>

//       <button
//         onClick={handleStartAssessment}
//         style={{
//           marginTop: "20px",
//           padding: "12px 24px",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           fontSize: "16px",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Start Assessment
//       </button>
//     </div>
//   );
// };

// export default PaymentSuccessPage;

import { useEffect } from "react";
import { useRouter } from "next/router";

const PaymentSuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    // ✅ Store short-lived access (just for current tab/session)
    sessionStorage.setItem("paymentSuccess", "true");

    // ✅ Also store in localStorage in case of refresh
    localStorage.setItem("paymentSuccess", "true");

    // ✅ Redirect to assessment page after 1 second
    const timer = setTimeout(() => {
      router.push("/coaching/coach-knowledge-assessment");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ color: "#28a745" }}>🎉 Payment Successful!</h1>
      <p>Redirecting you to the assessment page...</p>
    </div>
  );
};

export default PaymentSuccessPage;
