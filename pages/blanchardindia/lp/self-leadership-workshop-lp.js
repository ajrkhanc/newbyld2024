
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
                   window.location.href = "/lp/self-leadership-workshop-lp-thank-you"
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
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-370688250"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-370688250');
          `,
            }}
          />
         </Head>

        <div id="register-today" className="inner-banner online-learning-headbg">
            <div className="container">
                <div className='row'>
                   <div className='col-sm-6'>
                        <div className="inner-title text-left">
                            <h3>Be the Self-Reliant Successor in the Hybrid Work Environment</h3>                            
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
                              <input type="text" name="name" id="name" className="form-control" required="" data-error="Please Enter Your Name" placeholder="Your Name*"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="email" name="email" id="email" className="form-control" required="" data-error="Please Enter Your Email" placeholder="Work Email/Email*"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="phone_number" id="phone_number" minlength="10" maxlength="10" className="form-control" placeholder="Phone No.*"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="companyName" id="companyName" className="form-control" required="" data-error="Please Enter Company Name" placeholder="Company Name*"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                              <input type="text" name="designation" id="designation" className="form-control" data-error="Please Enter Designation" placeholder="Designation*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label>Program Name*</label>                              
                              <select className="form-control" name="interest_in" required>                                 
                                 <option value="Self leadership Workshop: February 1, 2024">Self leadership Workshop: February 1, 2024</option>
             
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
                              <select className="form-control" name="Business_Entity">
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
                        <h2 className="titleh2 text-left">Leading in a Hybrid World is a Skill.</h2> 
                        <p className="text-justify">
                        A great leader has many essential qualities that make them stand out from the rest. One of the most essential of these leadership qualities is having a deep sense and knowledge of knowing your self-worth, value, and strengths and the ability to use them to lead by example.
                        </p>
                        <p className="text-justify">
                        Successful leadership begins with self-leadership skills. Careers are not built overnight, it requires a lot of effort, dedication, and passion for many months and years. To build a successful career, first, become a self-reliant achiever.
                        </p>
                     </div>                     
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="">
                     <img src="/kbassets/img/self-leadership-lp.jpg" alt="Images"/>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="what-did-area pt-25 pb-40">
         <div className="container">
            <div className="row row-eq-height">
               <div className="col-lg-6 bgshd">
                 <div className='pt-20 pb-25'> 
                    <p className="text-justify">At Blanchard India, we teach how to develop and become a high-performer of your organization by learning, exploring, and understanding the mindset and skillset that an individual needs to feel empowered, proactive self leader–who take control of their own career decisions, success, and are committed to getting positive results for the organization.</p>
                    <p className="text-justify">The Self Leadership Program is based on the world’s most widely taught leadership model, The SLII Experience™ which helps professionals to become proactive at their workplaces by learning certain skill sets.</p>
                 </div>
               </div>
               <div className="col-lg-6 bgleftcol16">
                  <div className="text-left pt-20 pb-25">
                  <h2 className="titleh2 text-left">Key Benefits of the Program:</h2> 
                  <p>
                  <ol className="colorwhitlist">
                    <li>Accelerated Development</li>
                    <li>Higher performance and personal accountability</li>
                    <li>Improving daily productivity</li>
                    <li>Increase innovation</li>
                    <li>Keeps you motivated and accountable</li>
                    <li>Builds stronger relationships with co-workers</li>
                  </ol>
                  </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
  
        </>
    )
}
