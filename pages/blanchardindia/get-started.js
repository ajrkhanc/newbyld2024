import Link from "next/link"
import Head from "next/head"

function Contact() {
   const registerUser = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://byldgroup.in/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/9/feedback');
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
      xhttp.send("leadsquared-FirstName=" + event.target.leadsquared_FirstName.value
         + "&leadsquared-EmailAddress=" + event.target.leadsquared_EmailAddress.value
         + "&leadsquared-Mobile=" + event.target.leadsquared_Mobile.value
         + "&leadsquared-Company=" + event.target.leadsquared_Company.value
         + "&leadsquared-JobTitle=" + event.target.leadsquared_JobTitle.value
         + "&leadsquared-mx_States=" + event.target.leadsquared_mx_States.value
         + "&leadsquared-mx_Showed_Interest_in=" + event.target.leadsquared_mx_Showed_Interest_in.value
         + "&referredby=" + event.target.referredby.value
         + "&leadsquared-Notes=" + event.target.leadsquared_Notes.value
         + "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

   }

   return (
      <>
         <Head>
            <title>Contact us for all General and Non-Sales Enquiries - Blanchard India</title>
            <link rel="canonical" href="https://byldgroup.com/blanchardindia/get-started" />
            <meta name="description" content="Investing in learning and development of employees can be tough. Contact us for all general and non-sales enquiries and talk to our expert advisors and business counsellors to understand what program will suit your requirements best." />            
         </Head>

         <section className="bredkums2 pbb-100">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/">HOME</a></li>
                                <li><a><span>CONTACT US</span></a></li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-sm-1">
                                
                            </div>
                            <div className="col-sm-10">
                                <div className="innerbedkms text-center">
                                    <h1>Get started with the leadership challenge resolutions.</h1>
                                    <p className="ptt-15">
                                    We can help train your managers and deliver real roi for your training investment.
                                    </p>
                                    <h3>
                                    WANT TO TALK TO SOMEONE? CALL US AT 1800.102.1345
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         <section className="colorthemebg">           
            <div className="contact-area pt-45 pb-40 ptt-60 border-top-left-radius-70 border-top-right-radius-70 contanerbgc">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="contact-form">
                           <form id="contactForm" onSubmit={registerUser}>
                              <div className="row">
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
                                           <option value="ROI-Webinar-8th-August">ROI Webinar-8th August</option>
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
                     <div className="col-lg-6">
                        <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.549960658342!2d77.0706952!3d28.4528078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229e95e22137%3A0x784abf10032f4ea1!2sBYLD%20Group%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1679574883918!5m2!1sen!2sin" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Contact
