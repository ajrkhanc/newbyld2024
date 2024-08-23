import Head from "next/head"
import Link from "next/link"

export default function HybridWorkplaces() {
   const Submitdata = async event => {

      document.getElementById("submitbuttonform").value = "Submitting form...."
      event.preventDefault()

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://byldgroup.in/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/83/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            var res = JSON.parse(xhttp.responseText);
            console.log(res)
            if (res.status == "mail_sent") {
               document.getElementById("contactForm").reset();

               document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                   window.location.href = "/blanchardindia/thank-you-lp"
               }, 3000);

            } else {
               document.getElementById("showlabel").innerHTML = "There was a problem with the request.";
               document.getElementById("showlabel").style.display = "block";

            }
         }
      };
      xhttp.send("leadsquared-FirstName=" + event.target.name.value
         + "&leadsquared-EmailAddress=" + event.target.email.value
         + "&leadsquared-Mobile=" + event.target.phone_number.value
         + "&leadsquared-Company=" + event.target.companyName.value
         + "&leadsquared-JobTitle=" + event.target.designation.value         
         + "&leadsquared-mx_Showed_Interest_in=" + event.target.interest_in.value
         + "&referredby=" + event.target.referredby.value
         + "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

   }
    return (
        <>
        <Head>
            <title>Two Key Success Factors in the Hybrid Work Environment</title>
            <meta name="description" content="" />
         </Head>

<div id="register-today" className="inner-banner online-learning-headbg">
   <div className="container">
      <div className='row'>
         <div className='col-sm-6'>
            <div className="inner-title text-left">
               <h3>Two Key Success Factors in the Hybrid Work Environment</h3>
            </div>
         </div>
         <div className='col-sm-6'>
            <div className='contact-form eventsformbanner'>
               <div className="section-title">
                  <p>Looking for quicker assistance? Fill in your details and get a call back within 24 working hours.</p>
               </div>
               <form id="contactForm" onSubmit={Submitdata}>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="form-group">
                           <input type="text" name="name" id="name" className="form-control" placeholder="Your Name*" required />
                           <div className="help-block with-errors"></div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="form-group">
                           <input type="email" name="email" id="email" className="form-control" placeholder="Work Email/Email*" required />
                           <div className="help-block with-errors"></div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="form-group">
                           <input type="text" name="phone_number" id="phone_number" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*" required />
                           <div className="help-block with-errors"></div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="form-group">
                           <input type="text" name="companyName" id="companyName" className="form-control" placeholder="Company Name*" required />
                           <div className="help-block with-errors"></div>
                        </div>
                     </div>
                     <div className="col-lg-12">
                        <div className="form-group">
                           <input type="text" name="designation" id="designation" className="form-control" placeholder="Designation*" required/>
                           <div className="help-block with-errors"></div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="form-group">
                           <label>Interested In*</label>
                           <select name="interest_in" className="form-control" required>
                              <option value="">---Select---</option>
                              <option value="Self leadership be the self reliant successor in the hybrid work environment: 4th March , 2022">Self leadership be the self reliant successor in the hybrid work environment: 4th March , 2022</option>
                           </select>
                           <div className="help-block with-errors"></div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                           <div className="form-group">
                              <label>Referred By</label>                              
                              <select className="form-control" name="referredby">
                                 <option value="Email">Email</option>
                              </select>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                     <div className="col-lg-6 d-none">
                        <div className="form-group">
                           <label>Business Entity*</label>
                           <select name="Business_Entity" className="form-control" required>
                              <option value="Ken Blanchard Companies">Ken Blanchard Companies</option>
                           </select>
                           <div className="help-block with-errors"></div>
                        </div>
                     </div>
                     <div className="col-lg-12 col-md-12 pt-20">                          
                           <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="SUBMIT" />
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


<div className="what-did-area pt-20 pb-40">
   <div className="container">
      <div className="row row-eq-height">
         <div className='col-sm-12 text-center'>
         </div>
         <div className="col-lg-6 bgshd">
            <div className="what-did-content what-did-content-rs">
               <div className="section-title-two pt-20">
                  <h2 className="titleh2 text-left">Are you willing to be a self-reliant achiever in a hybrid work environment?</h2>
                  <p className="text-justify">
                     Great leadership begins with self-leadership skills. Learn how to become the self-reliant achiever in a hybrid work environment by learning and understanding the mindset and skillset to feel empowered, proactive self-leaders – who take control of their own success and are committed to getting results for the organization.
                  </p>
               </div>
            </div>
         </div>
         <div className="col-lg-6 themebg2">
            <div className="">
               <img src="/kbassets/img/self.jpg" alt="Images" />
            </div>
         </div>
      </div>
   </div>
</div>

<div className="what-did-area pt-25 pb-40">
   <div className="container">
      <div className="row row-eq-height">
         <div className="col-lg-6 bgleftcol16">
            <div className="text-left pt-20 pb-25">
                 <h2 className="titleh2 text-left">Key Benefits of the Program:</h2>
               <p>
               <ol className="colorwhitlist">
                  <li>Accelerated Development</li>
                  <li>Higher performance and personal accountability</li>
                  <li>Improving daily productivity</li>
                  <li>Overcoming obstacles and hindrances to motivation</li>
                  <li>Increase innovation</li>
                  <li>Makes you more efficient and productive</li>
               </ol>
               </p>
               <p>Find the leader within you and become the next leader for your people.</p>
            </div>
         </div>
         <div className="col-lg-6 bgshd">
            <div className='pt-15 pb-15'>
              <img src="/kbassets/img/business-1.jpg" alt="Images" />
            </div>
         </div>
      </div>
   </div>
</div>

</>
    )
}
