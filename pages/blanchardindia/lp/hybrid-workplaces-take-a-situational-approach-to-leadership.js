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
         + "&leadsquared-Company=" + event.target.companyname.value
         + "&leadsquared-JobTitle=" + event.target.designation.value         
         + "&leadsquared-mx_Showed_Interest_in=" + event.target.interest_in.value         
         + "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

   }
    return (
        <>
        <Head>
            <title>Hybrid workplaces – Take a Situational Approach to Leadership.</title>
            <meta name="description" content="" />
         </Head>
        <div id="register-today" className="inner-banner online-learning-headbg">
            <div className="container">
                <div className='row'>
                   <div className='col-sm-6'>
                        <div className="inner-title text-left">
                            <h3>Hybrid workplaces – Take a Situational Approach to Leadership.</h3>                            
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
                              <input type="text" name="name" id="name" className="form-control" placeholder="Your Name*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="email" name="email" id="email" className="form-control" placeholder="Work Email/Email*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="phone_number" id="phone_number" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="companyname" id="companyname" className="form-control" placeholder="Company Name*" required/>
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
                              <babel>Interested In*</babel>                              
                              <select name="interest_in" className="form-control" required>
                                 <option value="">---Select---</option>
                                 <option value="Hybrid workplaces - Take a situational approach to leadership: 18th February, 2022">Hybrid workplaces - Take a situational approach to leadership: 18th February, 2022</option>
                              </select>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>  
                        <div className="col-lg-6">
                           <div className="form-group">
                              <babel>Business Entity*</babel>                              
                              <select name="Business_Entity" className="form-control" required>
                                 <option value="Ken Blanchard Companies">Ken Blanchard Companies</option>
                              </select>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>                      
                        <div className="col-lg-12 col-md-12">                          
                           <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="SUBMIT"/>
                           {/* <div id="msgSubmit" className="h3 text-center hidden"></div> */}
                           <p id="showlabel" style={{ display: "none" }}></p>
                           <div className="clearfix"></div>
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
                        Hybrid leaders need to be attentive and mindful in their conversations with team members. That’s important face-to-face, but it’s absolutely essential in a hybrid work environment.
                        </p>
                        <p className="text-justify">
                        Attentiveness means knowing the goals, motivations, needs, and experiences of team members and recognizing when changes occur.
Hybrid leaders who practice being attentive and mindful—fostering community and accelerating performance and development—will see higher satisfaction, engagement, and productivity in their people who work in a hybrid environment.
                        </p>                        
                     </div>                     
                  </div>
               </div>
               <div className="col-lg-6 themebg2">
                  <div className="">
                     <img src="/kbassets/img/bme.jpg" alt="Images"/>
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
                  <h2 className="titleh2 text-left">Benefits for leading hybrid teams:</h2> 
                  <p>
                  <ol>
                    <li>Forge collaboration and interdependence</li>
                    <li>Establish trust</li>
                    <li>Boost connection with the leader</li>
                    <li>Increase autonomy and empowerment</li>
                    <li>Improves employee engagement</li>                    
                  </ol>
                  </p>
                  </div>
               </div>
               <div className="col-lg-6 bgshd">
                 <div className='pt-20 pb-25'> 
                 <h2 className="titleh2 text-left">Some of the Key Benefits of the Program</h2>
                    <p className="text-justify">
                      <b>1.BOOST CONNECTION WITH LEADER –</b> Through more intentional and structured communication, strong virtual leaders can boost their connections with their people.
                    </p>
                    <p className="text-justify">
                      <b>2.INCREASE AUTONOMY AND EMPOWERMENT –</b> Effective virtual leaders increase the resourcefulness and autonomy of their direct reports, so they consistently meet goals and deliver results.
                    </p>
                    <p className="text-justify">
                      <b>3. IMPROVE EMPLOYEE ENGAGEMENT:</b> Remote leaders connect team members to the larger organization by actively facilitating collaboration, creating a team culture, and building community.
                    </p>    
                 </div>
               </div>
            </div>
         </div>
      </div>
  
        </>
    )
}
