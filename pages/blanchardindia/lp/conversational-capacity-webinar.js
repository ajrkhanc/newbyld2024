import Head from "next/head"
import Link from "next/link"

export default function ConversationalCapacityWebinar() {
   const Submitdata = async event => {

      document.getElementById("submitbuttonform").value = "Submitting form...."
      event.preventDefault()

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://byldgroup.in/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/297/feedback');
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
            <title>Conversations About Change: Increasing Your Conversational Capacity for a Successful Change Initiatives</title>
            <meta name="description" content="Many companies in today’s marketplace struggle with millennial employees quitting before the one-year mark. This is arguably not only a considerable waste of time, but extremely expensive for companies to hire and retain new employees year after year." />
         </Head>

        <div id="register-today" className="inner-banner online-learning-headbg">
            <div className="container">
                <div className='row'>
                   <div className='col-sm-6'>
                        <div className="inner-title text-left">
                            <h3>Conversations About Change: Increasing Your Conversational Capacity for a Successful Change Initiatives</h3>                            
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
                                 <option value="Increasing Your Conversational Capacity for a Successful Change Initiatives: 22nd July, 2022">Increasing Your Conversational Capacity for a Successful Change Initiatives: 22nd July, 2022</option>
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
                        <p className="text-justify">
                        Many companies in today’s marketplace struggle with millennial employees quitting before the one-year mark. This is arguably not only a considerable waste of time, but extremely expensive for companies to hire and retain new employees year after year.
                        </p>

                        <p>
                        Losing good employees has always been expensive. We have recognized that the wide range of frustrations people have with their companies lie within three primary categories: <b>recognition, communication,</b> and <b>social capital.</b>
                        </p>

                        <p>
                        Blanchard teaches leaders the mindset, process, and skills to have an open, balanced, and non-defensive dialogue about difficult subjects.
                        </p>
                     </div>                     
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="">
                     <img src="/kbassets/img/cc-webinar.jpg" alt="Images"/>
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
                 <h4>Conversational Capacity redirects all the energy wasted in unproductive exchanges into channels that benefit people and the enterprise.</h4>
                 <ul className="point2">
                    <li>1. ENGAGES EMPLOYEES – When people have honest and meaningful conversations, morale rises and the workplace buzzes with enthusiasm.</li>
                    <li>2. SPURS INNOVATION – People share ideas. Colleagues contribute. The original idea evolves into a great one. That’s how innovation happens.</li>
                    <li>3. IMPROVES PRODUCTIVITY – The gap between what people say and what others hear closes. Miscommunication and misunderstandings evaporate, and work gets done.</li>                    
                </ul>
                 </div>
               </div>
               <div className="col-lg-6">
                  <div className="text-left pt-20 pb-25">
                  
                  <img src="/kbassets/img/conversational-capacity2.jpg" alt="Images"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
  
        </>
    )
}
