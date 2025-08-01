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

// import { useEffect } from "react";
// import { useRouter } from "next/router";

// const PaymentSuccessPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // ✅ Store short-lived access (just for current tab/session)
//     sessionStorage.setItem("paymentSuccess", "true");

//     // ✅ Also store in localStorage in case of refresh
//     localStorage.setItem("paymentSuccess", "true");

//     // ✅ Redirect to assessment page after 1 second
//     const timer = setTimeout(() => {
//       router.push("/coaching/coach-knowledge-assessment-s");
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div style={{ textAlign: "center", padding: "80px 20px" }}>
//       <h1 style={{ color: "#28a745" }}>🎉 Payment Successful!</h1>
//       <p>Redirecting you to the assessment page...</p>
//     </div>
//   );
// };

// export default PaymentSuccessPage;

// import { useEffect } from "react";
// import { useRouter } from "next/router";

// const PaymentSuccessPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const now = Date.now();
//       const expiry = now + 1 * 60 * 1000; // 5 minutes from now

//       // Save access data right before redirect
//       localStorage.setItem("paymentSuccess", "true");
//       localStorage.setItem("paymentExpiry", expiry.toString());

//       sessionStorage.setItem("paymentSuccess", "true");
//       sessionStorage.setItem("paymentExpiry", expiry.toString());

//       // Redirect after setting values
//       router.push("/coaching/coach-knowledge-assessment-s");
//     }, 1000); // ⏱️ wait 1 second

//     return () => clearTimeout(timer); // cleanup
//   }, []);

//   return (
//     <div style={{ textAlign: "center", padding: "80px 20px" }}>
//       <h1 style={{ color: "#28a745" }}>🎉 Payment Successful!</h1>
//       <p>Redirecting you to the assessment page...</p>
//     </div>
//   );
// };

// export default PaymentSuccessPage;

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const PaymentSuccessPage = () => {
//   const router = useRouter();
//   const [shouldRedirect, setShouldRedirect] = useState(false);
//   const [isInvalidAccess, setIsInvalidAccess] = useState(false);

//   useEffect(() => {
//     const referrer = document.referrer;

//     if (referrer.includes("razorpay.com")) {
//       // ✅ Valid redirect from Razorpay
//       setShouldRedirect(true);

//       // Optional: Set expiry of 5 minutes from now
//       const expiryTime = Date.now() + 5 * 60 * 1000;
//       localStorage.setItem("paymentSuccess", "true");
//       localStorage.setItem("paymentSuccessExpiry", expiryTime.toString());

//       // Redirect after 1 second
//       setTimeout(() => {
//         router.push("/coaching/coach-knowledge-assessment-s");
//       }, 1000);
//     } else {
//       // ❌ Invalid access — maybe directly hit URL
//       setIsInvalidAccess(true);
//     }
//   }, []);

//   return (
//     <div style={{ textAlign: "center", padding: "80px 20px" }}>
//       {shouldRedirect ? (
//         <>
//           <h1 style={{ color: "#28a745" }}>🎉 Payment Successful!</h1>
//           <p>Redirecting you to the assessment page...</p>
//         </>
//       ) : isInvalidAccess ? (
//         <>
//           <h1 style={{ color: "red" }}>⚠ Unauthorized Access</h1>
//           <p>This page can only be accessed after successful payment.</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default PaymentSuccessPage;

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const PaymentSuccessPage = () => {
//   const router = useRouter();
//   const [shouldRedirect, setShouldRedirect] = useState(false);
//   const [isInvalidAccess, setIsInvalidAccess] = useState(false);

//   useEffect(() => {
//     // Wait for router.query to be available
//     if (!router.isReady) return;

//     const { payment } = router.query;

//     if (payment === "success") {
//       // ✅ Valid access via Razorpay callback
//       setShouldRedirect(true);

//       // Optional: Set expiry of 5 minutes from now
//       const expiryTime = Date.now() + 5 * 60 * 1000;
//       localStorage.setItem("paymentSuccess", "true");
//       localStorage.setItem("paymentSuccessExpiry", expiryTime.toString());

//       // Redirect after 1 second
//       const timer = setTimeout(() => {
//         router.push("/coaching/coach-knowledge-assessment-s");
//       }, 1000);

//       // Clean up timeout
//       return () => clearTimeout(timer);
//     } else {
//       // ❌ Invalid access (direct URL or expired session)
//       setIsInvalidAccess(true);
//     }
//   }, [router.isReady, router.query]);

//   return (
//     <div style={{ textAlign: "center", padding: "80px 20px" }}>
//       {shouldRedirect ? (
//         <>
//           <h1 style={{ color: "#28a745" }}>🎉 Payment Successful!</h1>
//           <p>Redirecting you to the assessment page...</p>
//         </>
//       ) : isInvalidAccess ? (
//         <>
//           <h1 style={{ color: "red" }}>⚠ Unauthorized Access</h1>
//           <p>This page can only be accessed after successful payment.</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default PaymentSuccessPage;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PaymentSuccessPage = () => {
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const referrer =
      document.referrer ||
      (typeof window !== "undefined" && window.history.length > 1
        ? document.referrer
        : "");

    const cameFromRazorpay = referrer.includes("razorpay.com");
    const now = Date.now();

    if (cameFromRazorpay) {
      // ✅ Valid Razorpay redirect
      const expiryTime = now + 5 * 60 * 1000; // 5 minutes
      localStorage.setItem("paymentSuccess", "true");
      localStorage.setItem("paymentSuccessExpiry", expiryTime.toString());

      setIsValid(true);

      // Redirect to assessment after 1 sec
      setTimeout(() => {
        router.push("/coaching/coach-knowledge-assessment-s");
      }, 1000);
    } else {
      // ❌ Direct access attempt
      setIsValid(false);
    }

    setChecking(false);
  }, []);

  if (checking) return null; // optional: show a spinner

  if (!isValid) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ color: "#dc3545" }}>Invalid Access</h1>
        <p>This page can only be accessed after a successful payment.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ color: "#28a745" }}>🎉 Payment Successful!</h1>
      <p>Thank you for your payment.</p>
      <p>Redirecting you to the assessment page...</p>
    </div>
  );
};

export default PaymentSuccessPage;
