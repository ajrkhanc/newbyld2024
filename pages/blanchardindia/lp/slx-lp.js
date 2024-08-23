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
            <title>Leaders become GREAT, not because of their position but because of their ability to inspire, empower, and develop others.</title>
            <meta name="description" content="" />
         </Head>

<div id="register-today" className="inner-banner online-learning-headbg">
   <div className="container">
      <div className='row'>
         <div className='col-sm-6'>
            <div className="inner-title text-left">
               <h3>Leaders become GREAT, not because of their position but because of their ability to inspire, empower, and develop others.</h3>
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
                             <option value="The SLII Experience™ - March 13th- 14th, 2024">The SLII Experience™ - March 13th- 14th, 2024</option>
                              <option value="The SLII Experience™ - T4T - March 21st- 22nd, 2024">The SLII Experience™ - T4T - March 21st- 22nd, 2024</option>
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
             <h2 className="titleh2 text-left">TRAIN YOUR MANAGERS WITH THE MOST POPULAR LEADERSHIP MODEL IN THE WORLD</h2>
         </div>
         <div className="col-lg-6 bgshd">
            <div className="what-did-content what-did-content-rs">
               <div className="section-title-two pt-20">
                  <p className="text-justify">
                     High-performing leaders today need different skills. Successful leaders have the ability to look at situations from different perspectives. They assess the situation and behaviors of the team members in play, after which they determine the type of leadership approach to use to get the best result.
                  </p>
                  <p className="text-justify">
                      Our learning design — The SLII Experience™ — uses game-changing techniques that immerse learners quickly, deeply, and effectively. You will learn a new language for leadership that will help you increase the quality and quantity of conversations you have with your team members, accelerate their development, increase their performance, and support autonomy.
                  </p>
                  <p className="text-justify">
                      Becoming a situational leader will allow you to partner with those you lead, giving them what they need to succeed. Your managers learn the four stages of development, from enthusiastic beginner (D1) to self-reliant achiever (D4), and how to apply the appropriate directive and supportive behaviors, from directing (S1) to delegating (S4), to match the development needs of their people.
                  </p>
               </div>
            </div>
         </div>
         <div className="col-lg-6 bgshd">
            <div className="">
           <img src="/kbassets/img/slx-lp1.jpg" alt="Images" />
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
                 <h2 className="titleh2 text-left">How Does it Work:</h2>
               <p>
               The SLII Experience™ can be delivered face-to-face, virtually, or as a combination of face-to-face, virtual, and online learning modalities.
               </p>
            </div>
         </div>
         <div className="col-lg-6 bgshd">
            <div className='pt-15 pb-15'>
              <img src="/kbassets/img/img4-1.jpg" alt="Images" />
            </div>
         </div>
      </div>
   </div>
</div>

</>
    )
}
