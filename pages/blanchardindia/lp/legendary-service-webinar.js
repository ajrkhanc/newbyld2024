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
            <title>When It Comes to Customer Loyalty, Is Your Business Flourishing or Failing?</title>
            <meta name="description" content="Excellent service is at the heart of every great company. It attracts more customers, keeps them loyal for longer, and ultimately leads to more profit." />
         </Head>

        <div className="inner-banner genericnewlp">
            <div className="container">
                <div className='row'>
                   <div className='col-sm-7'>
                        <div className="inner-title text-left">
                            <h3>When It Comes to Customer Loyalty, Is Your Business Flourishing or Failing?</h3>
                            {/* <h4 className='landingpagesbannerh4 landingpagesbannerh4cc'><span>Legendary service</span></h4> */}
                        </div>
                   </div>
        <div className='col-sm-5'>
       <div className='contact-form genericnewlpformbg'>
             <div className="section-title">                   
                <p>Looking for quicker assistance? Fill in your details and get a call back within 24 working hours.</p>
            </div>
            <form id="contactForm" onSubmit={Submitdata}>
                     <div className="row">
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="name" id="name" className="form-control" required data-error="Please Enter Your Name" placeholder="Your Name*"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="email" name="email" id="email" className="form-control" required data-error="Please Enter Your Email" placeholder="Work Email/Email*"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="phone_number" id="phone_number" minlength="10" maxlength="10" className="form-control" placeholder="Phone No.*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="companyName" id="companyName" className="form-control" required data-error="Please Enter Company Name" placeholder="Company Name*"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="designation" id="designation" className="form-control" data-error="Please Enter Designation" placeholder="Designation*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">                              
                              <select className="form-control" name="interest_in" required>
                                 <option value="">Program Name*</option>
                                 <option value="When It Comes to Customer Loyalty: 2nd September, 2022">When It Comes to Customer Loyalty: 2nd September, 2022</option>
                              </select>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        
                        <div className="col-lg-6 d-none">
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
                        Excellent service is at the heart of every great company. It attracts more customers, keeps them loyal for longer, and ultimately leads to more profit.
                        </p>

                        <p className="text-justify">
                        Our Legendary Service<sup>®</sup> customer service training transfer this knowledge and skill to you and your team and support you on the journey to creating a workplace that becomes the place of legends.
                        </p>
                     </div>                     
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="">
                     <img src="/kbassets/img/ls-webinar.jpg" alt="Images"/>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="what-did-area pt-45 pb-40">
            <div className="container">
                <div className="row row-eq-height">
                    <div className="col-lg-6 bgshd">
                        <div className="what-did-content what-did-content0">
                        <div className="section-title pt-20">
                        <h2 className='titleh2 magintop00'>Legendary Service Model: The key is to CARE</h2>
                            <p className="text-justify">
                            Committed - Fostering an environment that focuses on serving the customer
                            </p>
                            
                            <ul className="point6">
                                <li>Attentive - Knowing customers and their preferences</li>
                                <li>Responsive - Demonstrating a genuine willingness to serve others as you fulfill their individual needs</li>
                                <li>Empowered - Taking the initiative to implement the service vision</li>
                            </ul>
                            <div className="services-more-btn text-left pt-20">                            
                                <a href="#" className="default-btn-two"> Enroll Now<i className="bx bx-right-arrow-alt"></i></a>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center borderccc">
                        <iframe width="100%" height="390" src="https://www.youtube.com/embed/qOwvzq-_kyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  
        </>
    )
}
