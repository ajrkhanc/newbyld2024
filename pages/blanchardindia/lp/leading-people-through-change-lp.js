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
            <title>Four Coaching Essential Skills at Hybrid Workplace</title>
            <meta name="description" content="As a leader, every interaction is an opportunity to strengthen and develop your people. Coaching is not a checklist task, it's a mindset, great coaches don’t see coaching as a “to-do.”" />
         </Head>

<div id="register-today" className="inner-banner online-learning-headbg">
   <div className="container">
      <div className='row'>
         <div className='col-sm-6'>
            <div className="inner-title text-left">
               <h3>Five Communication Strategies For Leading Successful Change Initiatives</h3>
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
                              <option value="Five Communication Strategies For Leading Successful Change Initiatives: 25th March , 2022">Five Communication Strategies For Leading Successful Change Initiatives: 25th March , 2022</option>
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
                  <h2 className="titleh2 text-left">Change is crucial: Learn the change management strategies to lead effective change initiatives.</h2>
                  <p className="text-justify">
                     A staggering 70% of all changes attempted in organizations fail. If you want to be in the successful 30%, you need a change management communication plan because the people affected by the change are ultimately the ones responsible for making and sustaining it.
                  </p>
                  <p className="text-justify">
                      Shift yourself from a transactional leader and become the transformational leader for your people - adopt the change or transformational leadership style where you work with your teams or followers beyond their immediate self-interests to identify needed change, creating a vision to guide the change.
                  </p>
               </div>
            </div>
         </div>
         <div className="col-lg-6 bgshd">
            <div className="">
               <img src="/kbassets/img/five-comm.jpg" alt="Images" />
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
                 <h2 className="titleh2 text-left">Best Practices in Change Management Communication</h2>
               <p>
               <ol className="colorwhitlist">
                  <li>Be specific, early and often: Remember, sudden change is jarring, so be specific right from the start. Don’t make your employees dig for details; offer them early and often.</li>
                  <li>Communicate through multiple channels: Don’t rely on one medium to talk about a new change. Everyone has different communication styles and preferences — it’s important to reach people through the channels they respond to best. Each channel has its strengths and weaknesses.</li>
                  <li>Prepare for resistance: No matter how justified the change might be, people are bound to resist.</li>
                  <li>Listen to feedback: Change management communication needs to flow both ways.</li>
               </ol>
               </p>
            </div>
         </div>
         <div className="col-lg-6 bgshd">
            <div className='pt-15 pb-15'>
              <img src="/kbassets/img/business-people-meeting.jpg" alt="Images" />
            </div>
         </div>
      </div>
   </div>
</div>

</>
    )
}
