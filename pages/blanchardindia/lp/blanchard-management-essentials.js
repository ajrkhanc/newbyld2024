import Head from "next/head"
import Link from "next/link"

export default function BlanchardManaE() {
   const BME = async event => {

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
            <title>Leadership Training in India | Blanchard Management Essentials</title>
            <meta name="description" content="Lead the winning path with Leadership training programs in India. Acquiring Leadership training by the experts help in the development of the individuals." />            
         </Head>
        
         <div id="register-today" className="inner-banner online-learning-headbg">
   <div className="container">
      <div className='row'>
         <div className='col-sm-6'>
            <div className="inner-title text-left">
               <h3>PREPARE YOUR NEW MANAGERS FOR SUCCESS</h3>
            </div>
         </div>
         <div className='col-sm-6'>
            <div className='contact-form eventsformbanner'>
               <div className="section-title">
                  <p>Looking for quicker assistance? Fill in your details and get a call back within 24 working hours.</p>
               </div>
               <form id="contactForm" method="post" onSubmit={BME}>
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
                              <option value="Blanchard Management Essentials®  21st March, 2024">Blanchard Management Essentials® Workshop 21st March 2024</option>
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
                  <p className="text-justify">
                     Blanchard Management Essentials<sup>®</sup> turns struggling managers into inspiring leaders. Built on the time-tested insider facts of the top-of-the-line book, The New One Minute Manager<sup>®</sup>. It presents the outlook that one must have while dealing with new responsibilities, cultivate new skills to manage other people, and the transformation that can help them to derive ultimate job satisfaction.
                  </p>
                  <p className="text-justify">
                     Blanchard Management Essentials<sup>®</sup> is for new and also for existing managers who want to be more effective as they move from individual contributors to a manager. It teaches step-by-step processes and managerial skills.
                  </p>
               </div>
            </div>
         </div>
         <div className="col-lg-6 themebg2">
            <div className="">
               <img src="/kbassets/img/bme1.jpg" alt="Images" />
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
               <p>
               <ol className="colorwhitlist">
                  <li>Blanchard Management Essentials<sup>®</sup> is for new and also for existing managers who want to be more effective as they move from individual contributors to a manager. It teaches step-by-step processes and managerial skills.</li>
                  <li>Four Core Conversations: a highly effective framework for understanding the conversations needed to manage people and performance: Goal Setting, Praising, Redirecting, and Wrapping Up</li>
                  <li>Communication Essentials: the key skills needed to boost relationships and work well with others based on our time-tested coaching model, LITE: Listen, Inquire, Tell your Truth, Express Confidence</li>
               </ol>
               </p>
            </div>
         </div>
         <div className="col-lg-6 bgshd">
            <div className='pt-20 pb-25'>
               <h2 className="titleh2 text-left">How Does it Work:</h2>
               <p className="text-justify">
                  The Blanchard Management Essentials<sup>®</sup> training can be delivered face-to-face, virtually, or as a combination of face-to-face, virtual, and online learning modalities.
               </p>
               <Link href="#register-today">
               <a className="default-btn-two">Get Started<i className="bx bx-right-arrow-alt"></i></a>
               </Link>
            </div>
         </div>
      </div>
   </div>
</div>
  
        </>
    )
}
