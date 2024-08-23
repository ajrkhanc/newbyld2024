// import { useState } from 'react';
// import Head from 'next/head';


// export default function Home() {

//   const [amount, setAmount] = useState(0);

//   const handleSubmit = async (event) => {

    
//     event.preventDefault();

//     const name = event.target.name.value;
//     const email = 'aj@gmail.com';
//     const phone = 9828088786;


//     console.log("here...");
//     const res = await initializeRazorpay();
//     if (!res) {
//       alert("Razorpay SDK Failed to load");
//       return;
//     }


//     const response = await fetch("/api/razorpay", {
//       method: 'POST',
//       body: JSON.stringify({amount}),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     const {order_id} = await response.json();

//     console.log(response);


//     var options = {
//       key: 'rzp_test_n1QZXDjqHkx1mZ', 
//       name: "Ajrkhan",
//       currency: response.currency,
//       amount: (amount * 100),
//       order_id: order_id,
//       description: "Thankyou for your test",
//       image: "https://byldgroup.com/assets/img/byld-logo.svg",
//       handler: function (response) {
 
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature);

//         const requestHeaders = new Headers();
//         requestHeaders.append('Content-Type', 'application/json');
        
//         const requestOptions = {
//           method: 'POST',
//           headers: requestHeaders,
//           body: JSON.stringify(data),
//         };

//         fetch('/api/capture-payment', requestOptions)
//           .then((response) => response.json())
//           .then((data) => {
//             alert(data.msg);
//           });
        
//       },

      
      
//       prefill: {
//         name: name,
//         email: email,
//         contact: phone
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   const initializeRazorpay = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";


//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };

//       document.body.appendChild(script);
//     });
//   };


//   return (
//     <>

//       <section className='assesmentpart2'>
//         <div className='container'>
//           <div className='row align-items-center'>
//             <div className='col-md-12'>
//               <div className='dfdfdf'>
//               <form onSubmit={handleSubmit}>
//       <Head>
//         <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
//       </Head>
//       <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//       <button type="submit">Pay with Razorpay</button>
//     </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   )
// }






import Head from "next/head";


export default function Home() {
  const makePayment = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,      
      payment: event.target.amount.value,
      phone: event.target.phone.value,
    };
    
    


  
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", 
    {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    ).then((t) =>
      t.json()
    );

    
    
    
    console.log(data);
    
    var options = {
      key: 'rzp_test_Jx7KqSnuFkc8pi', // Enter the Key ID generated from the Dashboard
      name: "BYLD",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        window.location.replace('/payment/success');
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },

      // handle payment failure
      "modal": {"ondismiss": function(){ window.location.replace('/paymentfailed')}}
      
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <div>
      <Head>
        <title>Integrate Payments 🔥</title>
        <meta
          name="description"
          content="Integrate payments in your React and Next.js application with TailwindCSS and Razorpay"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="contact-area pt-45 pb-40">
               <div className="container">
                  <div className="row">
                  <div className="col-lg-3"></div>
                     <div className="col-lg-6">
                        <div className="contact-form">
                           <form id="contactForm" onSubmit={makePayment}>
                              <div className="row">
                              <div className="col-sm-6 mb-12">
                              <div className="form-group">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                        <div className="form-group">
                                            <input className='form-control' type="email" name="email" placeholder="Your Email*" required />
                                        </div>
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                        <div className="form-group">
                                            <input className='form-control' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                        <div className="form-group">
                                            <input className='form-control' type="number" name="amount" pattern="[0-9]*" placeholder="Amount*" required />
                                            </div>
                                        </div>

                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="leadsquared_FirstName" id="leadsquared_FirstName" className="form-control" placeholder="Your Name*" required />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="email" name="leadsquared_EmailAddress" id="leadsquared_EmailAddress" className="form-control" placeholder="Work Email/Email*" required />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="leadsquared_Mobile" id="leadsquared_Mobile" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*" required />
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="leadsquared_Company" id="leadsquared_Company" className="form-control" placeholder="Company Name*" required />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="leadsquared_JobTitle" id="leadsquared_JobTitle" className="form-control" placeholder="Designation" />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="leadsquared_mx_States" id="leadsquared_mx_States" className="form-control" placeholder="Location" />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <label>Products Services*</label>
                                       <select name="leadsquared_mx_Showed_Interest_in" className="form-control" required>
                                          <option value="">---</option>
                                          <option value="The SLII Experience">The SLII Experience</option>
                                          <option value="First-Time Manager">First-Time Manager</option>
                                          <option value="Self-Leadership">Self-Leadership</option>
                                          <option value="Coaching-Essentials">Coaching-Essentials</option>
                                          <option value="Building-Trust">Building-Trust</option>
                                          <option value="Leading-People-Through-Change">Leading-People-Through-Change</option>
                                          <option value="Team-Leadership">Team-Leadership</option>
                                          <option value="Optimal-Motivation">Optimal-Motivation</option>
                                          <option value="Legendary-Service">Legendary-Service</option>
                                          <option value="Blanchard-Online-Learning">Blanchard-Online-Learning</option>
                                          <option value="Coaching-Services">Coaching-Services</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <label>Referred By*</label>
                                       <select name="referredby" className="form-control" required>
                                          <option value="">---</option>
                                          <option value="Social Media">Social Media</option>
                                          <option value="Google Search">Google Search</option>
                                          <option value="Reference">Reference</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 d-none">
                                    <div className="form-group">
                                       <input type="text" name="leadsquared_mx_Business_Entity" id="leadsquared_mx_Business_Entity" value="Ken Blanchard Companies" className="form-control" />

                                    </div>
                                 </div>

                                 <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                       <textarea name="leadsquared_Notes" className="form-control" id="leadsquared_Notes" cols="30" rows="3" placeholder="Your Message" />

                                    </div>
                                 </div>
                                 <div className="col-lg-12 col-md-12">
                                    <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="Send Messageme" />
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                    <p id="showlabel" style={{ display: "none" }}></p>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  
                  </div>
               </div>
            </div>

    </div>
  );
}

