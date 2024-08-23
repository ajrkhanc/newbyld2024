import Head from "next/head"
import Link from "next/link"

export default function BlanchardGenericLPNew() {

   const BGLP = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://byldgroup.in/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/8/feedback');
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
            <title>Leadership Training in India | Leadership Training Programs - Blanchard</title>
            <meta name="description" content="Lead the winning path with Leadership training programs in India. Acquiring Leadership training by the experts help in the development of the individuals." />            
         </Head>
         
         <div className="inner-banner genericnewlp">
            <div className="container">
                <div className='row'>
                   <div className='col-sm-7'>
                        <div className="inner-title text-left">
                            <h3>Advance Your Leadership for the New World of Work</h3>
                            <h4 className='landingpagesbannerh4 landingpagesbannerh4cc'><span>Bridging The Capability Gap Which Impacts Your Business Results</span></h4>
                        </div>
                   </div>
        <div className='col-sm-5'>
       <div className='contact-form genericnewlpformbg'>
             <div className="section-title">                   
                <p>Looking for quicker assistance? Fill in your details and get a call back within 24 working hours.</p>
            </div>
             <form id="contactForm" method="post" onSubmit={BGLP}>
                     <div className="row">
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="name" id="name" className="form-control" data-error="Please Enter Your Name" placeholder="Your Name*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="email" name="email" id="email" className="form-control" data-error="Please Enter Your Email" placeholder="Work Email/Email*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="phone_number" id="phone_number" pattern="[0-9]*" minlength="10" maxlength="10" className="form-control" placeholder="Phone No.*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="companyName" id="companyName" className="form-control" data-error="Please Enter Company Name" placeholder="Company Name*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="designation" id="designation" className="form-control" data-error="Please Enter Designation" placeholder="Designation*" pattern="[a-zA-Z -]*$" title="Only alphabets are allowed" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">                              
                              <select className="form-control" name="interest_in" required>
                                 <option value="">Interested In*</option>
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
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        
                        <div className="col-lg-6 d-none">
                           <div className="form-group">
                              <label>Referred By</label>                              
                              <select className="form-control" name="referredby">                                 
                                 <option value="paid">Paid</option>
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
                        <div className="col-lg-12 col-md-12">                          
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


        <div className="what-did-area pt-45 pb-40 newlpsecoundbg">
            <div className="container">
                <div className="row row-eq-height">
                    <div className="col bbdr">                       
                        <div class="business-box">
                            <img class="img-responsive" src="/kbassets/img/strategic-success.svg"/>
                            <h3>Competency frameworks aligned with organisation strategies</h3>
                        </div>
                    </div>
                    <div className="col bbdr">                       
                        <div class="business-box">
                            <img class="img-responsive" src="/kbassets/img/powerful-executive-team.svg"/>
                            <h3>Personal leadership quality enhancement</h3>
                        </div>
                    </div>
                    <div className="col bbdr">                       
                        <div class="business-box">
                            <img class="img-responsive" src="/kbassets/img/Find-Talent-1.svg"/>
                            <h3>Identifying and developing high-potential future leaders</h3>
                        </div>
                    </div>
                    <div className="col bbdr">                       
                        <div class="business-box">
                            <img class="img-responsive" src="/kbassets/img/leadership-1.svg"/>
                            <h3>Aligned cohesive and compassionate c-suite teams</h3>
                        </div>
                    </div>
                    <div className="col bbdr">                       
                        <div class="business-box">
                            <img class="img-responsive" src="/kbassets/img/leadership-growth-1.svg"/>
                            <h3>Succession planning</h3>
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
                        <h2 className='titleh2 magintop00'>Let's Get Started</h2>
                            <p className="text-justify">
                            There is an imminent need to hone the skills of the employees as they will proliferate long-term benefits for the company.
                            </p>
                            <p className="text-justify maginbottom10 pb-15">
                            Blanchard Research and Training develop the leadership capabilities of people through our time-tested training modules that are suitable for each level of their leadership journey. Our consultants have 1000+ years of accumulated professional experience and are located across the region.
                            </p>
                           
                            <ul className="point6">
                                <li>Engaged employees market your company</li>
                                <li>Lesser attrition of employees, leading to longevity and loyalty</li>
                                <li>Engaged employees are optimally motivated and feel positive at work</li>
                                <li>Employees become more creative when they are focused on the jobs</li>
                                <li>They communicate better and work together as a team</li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center borderccc">
                        {/* <img className='ptt50' src="/kbassets/img/home2-pic1.jpg" alt="Images"/> */}
                        <iframe width="100%" height="490" src="https://www.youtube.com/embed/mc7rvPT4o9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            </div>


            <div className="inner-banner genericnewlpfixed d-none">
            <div className="container">
                <div className='row'>
                   <div className='col-sm-12'>
                        <div className="inner-title text-center">
                            <h3>Have any Enquiry?</h3>
                            <h4 className='landingpagesbannerh4 textsecondcolor'>We are available for you 24x7x365 using various modes of contact.</h4>
                            <div className="pt-20">                                
                                <a href="#" className="default-btn-two"> Contact Now<i className="bx bx-right-arrow-alt"></i></a>
                            </div>
                        </div>
                   </div>        
                </div>
            </div>                 
        </div>


        <div className="what-did-area pt-45 pb-40 d-none">
            <div className="container">
                <div className="row row-eq-height">
                    <div className="col-lg-6 bgshd">
                        <div className="what-did-content what-did-content0">
                        <div className="section-title pt-20">                       
                            <p className="text-justify">
                            The importance of training is much more than the ones mentioned above. It helps to develop the leadership styles of professionals and enlightens them about the difference between a boss and a leader so that they can adopt an optimistic and practical attitude towards their work.
                            </p>
                            <p className="text-justify maginbottom10">
                            Leadership training has taken an important role in identifying a global module to include role-defying methods for employees. Special emphasis is given to the improvement of management skills for career progression. Leadership is incomplete without management and engagement. Thus, it has always been a focus of this program to induce more and more sessions on these two critical aspects.
                            </p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                        <img className='' src="/kbassets/img/home2-pic1.jpg" alt="Images"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>


            <div className="what-did-area pt-45 pb-40 newlpsecoundbgq d-none">
            <div className="container">
                <div className="row row-eq-height">
                    <div className="col-sm-12">                       
                        <div className="qut text-center">
                            <h3 className="qut">Have Some Questions?</h3>                           
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="questionform">
                        <form id="contactForm" method="post" onSubmit={BGLP}>
                            <div className="row">
                                <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" name="name" id="name" className="form-control" data-error="Please Enter Your Name" placeholder="Your Name*" required/>
                                    <input type="email" name="email" id="email" className="form-control" data-error="Please Enter Your Email" placeholder="Work Email/Email*" required/>
                                </div>
                                </div>
      
                                <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" name="phone_number" id="phone_number" maxlength="10" minlength="10" pattern="[0-9]*" className="form-control" placeholder="Phone No.*" required/>
                                    <input type="text" name="companyName" id="companyName" className="form-control" data-error="Please Enter Company Name" placeholder="Company Name*" required/>
                                </div>
                                </div>
                                
                                <div className="col-md-4">
                                <div className="form-group">
                                <textarea name="leadsquared_Notes" class="form-control" id="leadsquared_Notes" cols="30" rows="3" placeholder="Comment or Message*" required></textarea>
                                </div>
                                </div>
                                
                                
                                
                                <div className="col-md-6 d-none">
                                <div className="form-group">
                                    <label>Business Entity*</label>                              
                                    <select className="form-control" name="Business_Entity">
                                        <option value="Ken Blanchard Companies">Ken Blanchard Companies</option>
                                    </select>
                                    <div className="help-block with-errors"></div>
                                </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4 pt-10 text-center">                          
                                <input id="submitbuttonform" className="default-btn btn-bg1 disabled qbtnc" type="submit" value="SUBMIT" />
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


            <div className="what-did-area pb-40 pt-45 style2">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-12">
			   <h2 className="titleh2 text-center">HOW WE WORK WITH YOU</h2>
			   <p className="text-center mbopx">We start by understanding your most critical challenges and then design a plan that achieves your desired outcomes and impact.</p>
			   <h4 className="titleh4 text-center style3 mtopx">Your Path to Creating the Best Managers </h4>
                  <div className="what-did-left-content planboxpt80">
                     <div className="row row-eq-height height100p">
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center homeboxeql planbox">
                              <img src="/kbassets/img/listen.png" alt="Images"/>
                              <h3>1. Listen</h3>
							  <p>Acknowledge your necessities, huddles, and targets.</p>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center homeboxeql planbox">
                              <img src="/kbassets/img/planning.png" alt="Images"/>
                              <h3>2. Plan</h3>
							  <p>Prescribe the most efficient training strategy to accomplish your targets.</p>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center homeboxeql planbox">
                              <img src="/kbassets/img/process.png" alt="Images"/>
                              <h3>3. Execute</h3>
							  <p>Assists you to deliver the training  program in various ways to fulfil your needs.</p>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center homeboxeql planbox">
                              <img src="/kbassets/img/data.png" alt="Images"/>
                              <h3>4. Evaluate</h3>
							  <p>Determines the  program’s development and makes alterations to maximize impacts.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>



      <div className="contact-area pt-45 pb-40 lplastsectionbg">
               <div className="container">
                  <div className="row">
                  <div className="col-lg-6">
                     <div class="what-did-right-section bedious8">
                        <div className="bor11">
                            <div className="bor22">
                            <div class="content ptop54">
                            <div class="section-title">
                                <span>Find out more about developing the skills for yourself, your team and your organization.</span>
                                <h2>Not a fan of forms?</h2>
                                <span>
                                No problem, give us a call
                                </span>
                            </div>
                            <a href="tel:+91 (981) 068-7577" class="default-btn-two">+91 (981) 068-7577 <i class="bx bx-right-arrow-alt"></i></a>
                        </div>
                            </div>
                        </div>
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="contact-form formtop20">
                           <form id="contactForm">
                           <h2 className="titleh2 text-left">HOW WE WORK WITH YOU</h2>
                              <div className="row">
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="leadsquared_FirstName" id="leadsquared_FirstName" className="form-control" placeholder="First Name*" required />
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="leadsquared_FirstName" id="leadsquared_FirstName" className="form-control" placeholder="Last Name*" required />
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
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <input type="text" name="leadsquared_Company" id="leadsquared_Company" className="form-control" placeholder="Organization*" required />

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
                                    <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="Send Message" />
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
        
        </>
    )
}
