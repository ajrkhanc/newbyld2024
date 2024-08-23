import Head from 'next/head';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";

export default function Jenson8(){
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/24/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                        window.location.href = "/thank-you"
                     }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("fname=" + event.target.fname.value +            
            "&email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&Companyname=" + event.target.organization.value +
            "&designation=" + event.target.designation.value +
            "&wheredidyoucome=" + event.target.referredby.value +
            "&QuestionsComments=" + event.target.QuestionsComments.value )

    }

    return(
        <>
          <Head>
            <title>BeSpoke - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
         
         
         
          </Head>

          <section className='bespokebanner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 col-md-12'>
                        <div className='tailoring text-center'>
                            <h3>BeSpoke – Tailoring Learning Solutions For Your Workforce</h3>
                            <h5>The BeSpoke service line offers highly customized and outcome-driven learning solutions <br></br>to accelerate achieving desired business outcomes.</h5>
                            <p>The solutions offered are aimed at building business-relevant skills.</p>
                            <a href='#bespoke-lp'>Speak to our Expert</a>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className=" fvideoNew">
                        <iframe src="https://www.youtube.com/embed/WMnNMMqK6ig?si=9s-Ye7fZNdJBa_vO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                            </iframe>
                    </div>

                    </div>
                </div>
            </div>
          </section>

          <section>
            <div className='container-fluid pad0'>
                <div className='row align-items-center'>
                    <div className='col-sm-12 themebgc'>
                        <h3>OUR SERVICES</h3>
                    </div>
                    <div className='clearfix'></div>
                    <div className='col-md-6'>
                        <img src='/assets/img/bespoke-img-1.jpg'/>
                    </div>
                    <div className='col-md-6'>
                        <div className='largescale'>
                            <h4>Large-Scale Projects</h4>
                            <p>
                            In this service line, BYLD Group partners with clients by understanding their organization’s ‘farm to fork’ by validating key business-specific concerns using highly customized tools. Using the outcome of the in-depth analysis, a highly customized learning solution is designed with clearly measurable results aligned to the primary business requirements.
                            </p>
                            <h5>A.D.D.I.E: A proven methodology combined with our knowledge and expertise</h5>
                            <p><span>Access –</span> Evaluate the key skills required to transition from “As Is” to “To Be” situation</p>
                            <p><span>Develop – </span> Create a highly customized and measurable framework aligned to bridge the identified gaps</p>
                            <p><span>Deliver –</span> Offer a highly experiential learning format to enable participants to build the desired skills</p>
                            <p><span>Integrate –</span> Put a support framework where constant support is offered to navigate the learning implementation challenges at the workplace.</p>
                            <p><span>Evaluate –</span> Highly customized evaluation tools measured the desired needle movement.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
             
          <section className='jenvrbg ptt-50 pbb-40'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                    <h3 className='colorwwc'>Skill Building Workshops</h3>
                    <p className='colorwwc pbb-30'>
                       This service line aims at enabling the participants on the key skills that can essentially push them towards success in their specific roles. The learning solutions are highly customized as per identified learning gaps by internal learning SMEs and are offered under the following buckets:
                    </p>
                </div>
                   <div className='col-sm-4'>
                       <div className='jenvrbgbox minh280'>
                          <div className='jenvrbgboximg pinkco'>
                          <img src="/assets/img/icon/global-network.png"/>                          
                          </div>
                          <h3>Sales Capability Building</h3>                          
                          <p className='text-left'>Sales is usually considered one of the most important functions in an organization. In this portfolio, solutions are specific to the nature of the sales, such as Distributor/Channel, Retail, and B2B sales environment. Some of the highly demanded solutions offered under this category,</p>
                          <ul className='skillslist'>
                            <li>Channel Sales</li>
                            <li>Virtual Selling</li>
                            <li>Retail Selling</li>
                            <li>Key Account Management</li>
                            <li>Negotiation Skills</li>
                            <li>Consultative Selling skills, and many more.</li>
                          </ul>
                       </div>
                    </div>
                    <div className='col-sm-4'>
                       <div className='jenvrbgbox minh280'>
                       <div className='jenvrbgboximg pinkco'>
                          <img src="/assets/img/icon/people.png"/>
                          </div>
                          <h3>Leadership Capability Building</h3>                          
                          <p className='text-left'>One of the most important focus areas for any organization in today’s world is Leadership Development. This portfolio has a series of specific solutions to enable modern-day leaders around key leadership competencies. These solutions offered in this portfolio are:</p>
                          <ul className='skillslist'>
                            <li>People Management</li>
                            <li>Driving Performance</li>
                            <li>Accountability for Higher Performance</li>
                            <li>Giving & Receiving Feedback</li>
                            <li>Interviewing Skills</li>
                            <li>Decision Making Skills</li>
                            <li>Critical Thinking, and many more</li>
                          </ul>
                       </div>
                    </div>
                    <div className='col-sm-4'>
                       <div className='jenvrbgbox minh280'>
                       <div className='jenvrbgboximg pinkco'>
                          <img src="/assets/img/icon/triangular-arrows-sign-for-recycle.png"/>
                          </div>
                          <h3>Individual Capability Building</h3>                          
                          <p className='text-left'>The backbone to making strategy a reality is the employees at the front-end level. This portfolio offers highly engaging and customized solutions to build the skill gaps as per the identified competencies of organization-specific needs. Some of the solutions under this bucket are:</p>
                          <ul className='skillslist'>
                            <li>Communication Skills</li>
                            <li>Time Management</li>
                            <li>Stress Management</li>
                            <li>Presentation Skills</li>
                            <li>Conflict Management, and a few more.</li>
                          </ul>
                       </div>
                    </div>
 
              </div>
            </div>
          </section>

          


            <div id='bespoke-lp' className="rs-testimonial style4 tirianformbg ptt-50 pbb-70">
                <div className="container">                   
                    <div className="row">                     
                         <div className="clearfix"></div>
                   
                         <div className='col-sm-2'></div>
                         <div className="col-sm-8">
                         <div className="bannerform tirianformshd">
                            <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                                    <div className="row">
                                      <div className='col-sm-12'>
                                        <p>
                                        Fill in the form below and our subject matter experts will connect you within 24 working hours.
                                        </p>
                                      </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="fname" placeholder="Name*" required />
                                        </div>
                                       
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        
                                        <div className="col-sm-6 mb-12">
                                            <select name="referredby">
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>                                                                                                
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="QuestionsComments" placeholder="Questions/Comments:"></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn width150" type="submit" value="Submit"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                         </div>

                         <div className='col-sm-2'></div>
                         
                    </div>
                </div>
            </div>

        </>
    )
}
