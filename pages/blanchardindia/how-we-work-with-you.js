import Link from "next/link";
import Head from "next/head";

export default function HowWeWorkWithYou() {
    const registerUser = async event => {
        event.preventDefault()
  
        document.getElementById("submitbuttonform").value = "Submitting form...."
  
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
           // console.log(this.responseText.status);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/12/feedback');
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
                     window.location.href = "/blanchardinternational/thank-you-lp"
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
        <title>How We Work With You - Blanchard International</title>
        <meta name="description" content="TRAINING THAT MEETS YOUR NEEDS TRAINING THAT TRANSFORMS MANAGERS Our proven study provides a path which enables us to guide you regarding the design, implementation, and evaluation of an interactive learning engagement. The Blanchard’s team identifies your obstacles and challenges and gauges your training needs, then we prescribe the most suitable leadership development plan that"/>
        <link rel="icon" href="/favicon.ico" />
        </Head> 
        <div className="inner-banner how-we-work-headbg">
                <div className="container">
                    <div className="inner-title text-center">
                        <h3>TRAINING THAT MEETS YOUR NEEDS</h3>
                        <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>How We Work With You</li>
                        </ul>
                    </div>
                </div>
                <div className="inner-lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

   
            <div className="what-did-area pb-40 pt-45 style2 themebg">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-12">
                    <h2 className="titleh2 text-center">TRAINING THAT TRANSFORMS MANAGERS</h2>
                    <p className="text-center">
                    Our proven study provides a path which enables us to guide you regarding the design, implementation, and evaluation of an interactive learning engagement. The Blanchard’s team identifies your obstacles and challenges and gauges your training needs, then we prescribe the most suitable leadership development plan that provides solutions to your problems and results in desired outputs.
                    </p>
                    
                        <div className="what-did-left-content">
                            <div className="row row-eq-height how-we-work-with-u1">
                                <div className="col-sm-3">
                                <div className="what-did-left-card what-did-left-card-sl2 text-center">
                                    <img src="/kbassets/img/listen.png"/>
                                    <h3>1. Listen</h3>
                                    <p>
                                    Acknowledge your necessities, hurdles, and targets.
                                    </p>
                                </div>
                                </div>
                                <div className="col-sm-3">
                                <div className="what-did-left-card what-did-left-card-sl2 text-center">
                                    <img src="/kbassets/img/planning.png"/>
                                    <h3>2. Plan</h3>
                                    <p>Prescribe the most efficient training strategy to accomplish your targets.</p>
                                </div>
                                </div>
                                <div className="col-sm-3">
                                <div className="what-did-left-card what-did-left-card-sl2 text-center">
                                    <img src="/kbassets/img/process.png"/>
                                    <h3>3. Execute</h3>
                                    <p>
                                    Assists you to deliver the training program in various ways to fulfil your needs.
                                    </p>
                                </div>
                                </div>
                                <div className="col-sm-3">
                                <div className="what-did-left-card what-did-left-card-sl2 text-center">
                                    <img src="/kbassets/img/data.png"/>
                                    <h3>4. Evaluate</h3>
                                    <p>
                                    Determines the programs development and makes alterations to maximize impacts.
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>

        <div className="what-did-area pt-20 pb-40">
         <div className="container">
            <div className="row row-eq-height">               
            <div className="col-lg-12">
                <div className='text-center pt-20 pb-25'>
                    <h3 className='titleh2'>CREATE THE LEADERSHIP TRAILBLAZERS</h3>
                    <p className='p-white'>
                    Backed by our extensive behavioral research, we have been pioneers in training millions of managers; our cutting-edge leadership development programs create versatile experiences that will transform your managers and your organization.
                    </p>
                </div>
                <div className="what-did-left-content">
                    <div className="row how-we-work-with-u0pa">
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/on-sitetraining.png"/>
                            <h3>ON-SITE TRAINING</h3>
                            <p className="text-justify">With 100+ of facilitators globally, we deliver informative, enlightening, and engaging training sessions that will acknowledge your leadership and talent development hurdles—and facilitate development for your organization.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/e-learning.png"/>
                            <h3>E-LEARNING</h3>
                            <p className="text-justify">Through award-winning technology, Blanchard Online Learning provides instructor-led debriefs with self-paced learning modules that allow participants to learn and apply new skills in an enlightening and time-saving format.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/virtual-training.png"/>
                            <h3>VIRTUAL TRAINING</h3>
                            <p className="text-justify">Our expert facilitators are masters in delivering virtual training sessions, enabling your managers and team members to acquire the world-class content right from their desks. We often offer a blended solution that combines in-person and virtual training sessions to reduce the time and cost.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/coaching.png"/>
                            <h3>COACHING</h3>
                            <p className="text-justify">Blanchard’s certified coaches work interactively with your executives, managers, or team members to emphasize training programs and also provide support in the areas of leadership development, relationship-building, problem-solving, and management skills.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/public-workshops.png"/>
                            <h3>PUBLIC WORKSHOPS</h3>
                            <p className="text-justify">Our public workshops offer various opportunities for individuals, leaders, managers, and teams, regardless of their geographical placement, to engage in Blanchard’s leadership development training programs.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/custom-design.png"/>
                            <h3>CUSTOM DESIGN</h3>
                            <p className="text-justify">We can customize our learning solutions, specifically for your organization or industry, through the following methods- program design alteration, training material customization, and enhancing the means of delivery to cater to your specific needs.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/training-for-trainers.png"/>
                            <h3>TRAINING FOR TRAINERS (T4T)</h3>
                            <p className="text-justify">Our Training for Trainers workshops can enable you to learn and practice the world-renowned training programs so that you can deliver them within your organization. We offer both on-site training and public T4T workshops in which you can register, at any point in time.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/keynotes.png"/>
                            <h3>KEYNOTES AND SPEAKING ENGAGEMENTS</h3>
                            <p className="text-justify">Encouraging. Enlightening. Exhilarating. Explanatory. Our exclusive group of Influential leaders deliver keynote presentations frequently at corporate and industry events. We would appreciate the opportunity to discuss your obstacles and how to implement a strategy to move your organization ahead.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
         </div>
      </div>

        

      <div className="contact-area pt-45 pb-25 themebg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className='text-center pb-25'>
                    <h3 className='titleh2'>LET’S GET STARTED</h3>
                    <p className='p-white'>
                    Fill out this form and find out how we can help your organization train the best managers in the world.
                    </p>
                    <h4>WANT TO TALK TO SOMEONE? CALL US AT 1800.102.1345</h4>
                </div>
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
                              </select>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label>Referred By</label>
                              <select name="referredby" className="form-control">
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
                           <div className="form-group pt-20">
                              <textarea name="leadsquared_Notes" className="form-control" id="leadsquared_Notes" cols="30" rows="3" placeholder="Your Message"></textarea>

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