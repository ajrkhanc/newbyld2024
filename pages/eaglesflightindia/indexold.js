import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from 'react';

export default function Home() {  

    const [modalOpen2, setModalOpen2] = React.useState(false);

    const Eaglesflightindia = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/18/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/eaglesflightindia/thank-you"
                    }, 3000);
  
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-mx_States=" + event.target.Location.value +          
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +          
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )
  
    }

    const downloadpdf = async event => {
        event.preventDefault()
        document.getElementById("hellocc").value = "Downloading...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/46/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/efassets/pdf/eaglesflightindia.pdf"
                    });

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&organization=" + event.target.organization.value +
            "&designation=" + event.target.designation.value)

    }

  return (
    <>
         <Head>
            <title>Eagle’s Flight | Experiential Learning | BYLD Group</title>
            <meta name="description" content="Eagle’s Flight offers corporate team building games in a virtual immersive learning environment for effective self-learning. To know more, check out the page."/> 
          </Head>

          <Modal toggle={() => setModalOpen2(!modalOpen2)} isOpen={modalOpen2} backdrop="static" keyboard={false} className='ccmdc'>
                <button
                    aria-label="Close"
                    className="close popcl"
                    type="button"
                    onClick={() => setModalOpen2(!modalOpen2)}
                >
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>

                    <form id="contactForm" className='clientcornner ptt-5 pbb-0' onSubmit={downloadpdf}>
                        <div className="row mmcform">
                            <div className="col-sm-6 mb-12">
                                <input type="text" className='borrr' name="name" placeholder="Name*" required />
                            </div>
                            <div className="col-sm-6 mb-12">
                                <input type="text" className='borrr' name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                            </div>
                            <div className="col-sm-12 mb-12">
                                <input type="email" className='borrr' name="email" placeholder="Work Email/Email*" required />
                            </div>


                            <div className="col-sm-12 mb-12">
                                <input type="text" className='borrr' name="organization" placeholder="Organization*" required />
                            </div>
                            <div className="col-sm-12 mb-12">
                                <input type="text" className='borrr' name="designation" placeholder="Designation*" required />
                            </div>

                            <div className="col-lg-12 mb-12 text-center">
                                <input id='hellocc' className="clientcornnerbtn" type="submit" value="Download" />
                            </div>
                            <p id="showlabel" style={{ display: "none" }}></p>
                        </div>
                    </form>
                </ModalBody>
            </Modal>

          <div className="rs-services">
            <div className="container-full mcdf">
               <div className="row y-middle">
                  <div className="col-lg-12">
                     <img className="img100" src="/efassets/img/banner/ef-main-banner.jpg"/>
                     <a className="readon2" href="#" onClick={() => setModalOpen2(!modalOpen2)}>Download Brochure <div className="btn-arrow ddc"></div></a>
                  </div>
               </div>
            </div>
         </div>

         <div class="rs-about style4 bg21 mtt-60">
            <div class="container">
               <div class="row y-middle">
                  <div class="col-lg-7">
                     <div class="sec-title3 mbb-35 text-left onlyshd">
                        <h4 class="countertoph2 text-left font36">Business Team Building Activities for Work</h4>
                        <div class="heading-border-line left-style"></div>
                        <p class="mtt-40">
                        In partnership with Eagle’s Flight™, we present our wide range of cost-effective, customizable, and globally renowned experiential learning programs. These <b><i>corporate team-building games</i></b> combine immersive activities that mimic real-world challenges with a targeted debrief that connects the lessons learned with the reality of the workplace. It allows participants to learn by doing and not by just listening, reading, or watching. Because they have personally experienced <b><i>virtual team games</i></b> and the results (both successes and failures) that come with applying their existing skills and developing new behaviors, participants retain more information and are more likely to enthusiastically apply their new knowledge in their real-world back on the job.
                        </p>
                     </div>
                  </div>
                  <div class="col-lg-5">
                     <div class="about-img"><img src="/efassets/img/business-team-building.svg" alt="images"/></div>
                  </div>
               </div>
            </div>
         </div>


         <div class="rs-achievement style1 relative ptt-50">
            <div class="container">
               <div class="row rs-vertical-middle">
                  <div class="col-lg-6">
                     <div class=""><img src="/efassets/img/employees-giving-hands-helping.jpg" alt=""/></div>
                  </div>
                  <div class="col-lg-6 pr-0">
                     <div class="fivemodelshd">
                        <h4 class="countertoph2 text-left font34">Get Access to the Best Corporate Team Building Games</h4>
                        
                        <p class="justify mbb-5">
                        Experiential learning programs help participants gain competence in areas such as leading teams or making quick decisions so as to improve processes, serve customers better, work with teams, improve processes, and manage time through virtual team games. At work, or in the office, developing good relationships is essential for a great organizational culture. Virtual fun activities for employees are a great way to enhance an inclusive work culture for your organization. Explore our offerings or connect with us to know more.
                        </p>               
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="rs-project style2 efhbg mtt-40 ptt-30 pbb-60">
                <div class="container">                
                    <div class="row">
                     <div className='col-sm-12'>
                        <div className="sec-title3 mbb-35">
                           <h4 className="countertoph2 text-center font30">OUR OFFERINGS</h4>
                           <div className="heading-border-line center-style mbb-50"></div>
                        </div>
                     </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/mus01.jpg" alt="images"/>
                                </div>
                                <div class="project-content">                                
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/museum-caper"><i class="custom-icon"></i></a>
                                    <div class="project-inner">                                        
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/museum-caper">Museum Caper™ (Virtual Immersive Learning)</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/king01.jpg" alt="images"/>
                                </div>
                                <div class="project-content">                                
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/king-kahufu"><i class="custom-icon"></i></a>
                                    <div class="project-inner">                                        
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/king-kahufu">King Kahufu™ (Virtual Immersive Learning)</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/gold01.jpg" alt="images"/>
                                </div>
                                <div class="project-content">                                
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings"><i class="custom-icon"></i></a>
                                    <div class="project-inner">                                        
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings">Gold Of Desert Kings™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/consil01.jpg" alt="images"/>
                                </div>
                                <div class="project-content">                                
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/council-of-the-marble-star"><i class="custom-icon"></i></a>
                                    <div class="project-inner">                                        
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/council-of-the-marble-star">Council Of Marble Star™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/promise01.jpg" alt="images"/>
                                </div>
                                <div class="project-content">                                
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/promises-promises"><i class="custom-icon"></i></a>
                                    <div class="project-inner">                                        
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/promises-promises">Promises! Promises!™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/rat01.jpg" alt="images"/>
                                </div>
                                <div class="project-content">                                
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/rattlesnake-canyon"><i class="custom-icon"></i></a>
                                    <div class="project-inner">                                        
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/rattlesnake-canyon">Rattlesnake Canyon™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/outback.jpg" alt="images"/>
                                </div>
                                <div class="project-content">                                
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/expedition-outback"><i class="custom-icon"></i></a>
                                    <div class="project-inner">                                        
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/expedition-outback">Expedition Outback™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/win01.jpg" alt="images"/>
                                </div>
                                <div class="project-content">                                
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/windjammer"><i class="custom-icon"></i></a>
                                    <div class="project-inner">                                        
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/windjammer">Windjammer™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


         <div className="shape-bg ptt-50 pbb-40 solutionsboxarea">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">

                     <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center font30">About BYLD Group</h4>
                        <div className="heading-border-line center-style mbb-30"></div>
                     </div>

                     <div className="sec-title3 mbb-35 text-center rs-estimate">                        
                        <p>
                        BYLD Group is the largest group in the South Asian region, offering value-added services in Strategic and Operational HR, Business Operations, Manpower Staffing, Technology, Executive Coaching, Leadership, and Organizational Development. The first company of BYLD Group, Door Training, and Consulting India Pvt. Ltd. was founded in the year 1998, and since then we have served 5,00,000+ individuals, more than 50% of the Fortune 500 Companies and over 60% of the Business World Top 1000 Companies. Our key international alliances include The Ken Blanchard<sup>®</sup> Companies, Crucial Learning (formerly VitalSmarts™), Eagle’s Flight™, Everything DiSC<sup>®</sup> and The Five Behaviors<sup>®</sup> (Wiley Brands), Lumina Spark<sup>®</sup>, Business Today Simulations, InsideOut Development™, Persona Global<sup>®</sup>, Trapologist at Work™, Aster Coaching. Our India headquartered businesses comprise – Door Training and Consulting India Pvt. Ltd. (DTCI) and YOMA Business Solutions. With an annual turnover of over USD 32 Million (INR 230 crores approx.), more than 250 employees, our operational domain is spread across national and international boundaries. Backed by nearly 1000+ years of professional experience, our consultants support clients across industries to manage, develop and align the talent needs in line with their business objectives and strategies.
                        </p>
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="rs-testimonial style4 homebgcontactus ptt-30 pbb-70">
                <div className="container">                   
                    <div className="row">                    
                         <div className="col-sm-12">
                            <div className="sec-title3 mbb-35 text-center">                                
                                <h4 className="countertoph2 text-center font30 colorw">Reach Out to Us</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                         </div>
                         <div className="clearfix"></div>                         
                         <div className="col-sm-7">
                         <div className="bannerform">
                            <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={Eaglesflightindia}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Enter Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>                                        
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>                                               
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>                                                
                                                <option value="Reference">Reference</option>                                                
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-sm-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagles Flight" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                         </div>
                         <div className="col-sm-5">
                            <img src='/wileyassets/img/cside.png' alt=""/>
                        </div>
                      
                    </div>
                </div>
            </div>

    </>
  )
}
