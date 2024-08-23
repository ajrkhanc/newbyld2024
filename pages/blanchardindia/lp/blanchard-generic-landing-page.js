import Head from "next/head"
import Link from "next/link"
import Slider from "react-slick";

export default function BlanchardGenericLP() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

   const BGLP = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://byldgroup.in/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/7/feedback');
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
                   window.location.href = "/blanchardindia/thank-you-lp-blanchard-generic-landing-page"
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
         
         <div className="inner-banner online-learning-headbg">
            <div className="container">
                <div className='row'>
                   <div className='col-sm-6'>
                        <div className="inner-title text-left">
                            <h3>We’ve been training the world’s best managers, for more than 40 years.</h3>
                            <h4 className='landingpagesbannerh4'>Advance your Leadership for the new world of work with <span>Blanchard Leadership Programs.</span></h4>
                        </div>
                   </div>
                   <div className='col-sm-6'>
       <div className='contact-form eventsformbanner'>
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
                        <div className="col-lg-12">
                           <div className="form-group">
                              <input type="text" name="designation" id="designation" className="form-control" data-error="Please Enter Designation" placeholder="Designation*" pattern="[a-zA-Z -]*$" title="Only alphabets are allowed" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                              <label>Interested In*</label>                              
                              <select className="form-control" name="interest_in" required>
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


        <div className="what-did-area pt-45 pb-40 themebg">
            <div className="container">
                <div className="row row-eq-height">
                    <div className="col-lg-6 bgshd">
                        <div className="what-did-content">
                        <div className="section-title pt-20">                            
                            <p className="text-justify">
                            Many organizations are struggling to find solutions that truly make an impact in today’s hybrid world of work.
                            </p>
                            <p>
                            Our <strong>leadership development</strong> and <strong>corporate training</strong> programs help develop results-oriented, proactive leaders who can deliver increased engagement, improved performance, higher retention, and reap real results for your organization — no matter how is the work environment.
                            </p>
                            <h2 className='titleh2'>Our award-winning programs are customized as per different levels of your leaders’ journey.</h2>
                            <a className="default-btn-two" href="#">
                            Schedule a Call<i className="bx bx-right-arrow-alt"></i>
                            </a>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                        <img className='width80' src="/kbassets/img/call-a.png" alt="Images"/>
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
                <h2 className="landingpagesinnerh4 text-center">Check out our plethora of <span>virtual leadership training programs</span> that suit different <br/>leadership needs and are available in <span>flexible training formats:</span></h2>
                </div>
                <div className="what-did-left-content">
                    <div className="row how-we-work-with-u0pa">
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/slii.png"/>
                            <h3>The SLII Experience™</h3>
                            <p className="text-justify">SLII Experience™ is one of the most widely used, practical, and comprehensive <strong>leadership development</strong> programs in the world. The pace of change is so disruptive that Managers need a leadership training program that helps them to be agile, lead situationally, and empower their people to succeed.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/virtual-team.png"/>
                            <h3>Leading in Virtual Team</h3>
                            <p className="text-justify">Participants will develop their ability to build virtual trust, identify the specific challenges and advantages of working with virtual team, and how to have a greater personal impact in supporting, and influencing others to support high performance.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/building-trust.png"/>
                            <h3>Building Trust</h3>
                            <p className="text-justify">One of the most essential <strong>leadership development programs</strong>, Building Trust helps participants identify the behaviors that either boost or erode trust. This program helps <strong>anyone in a managerial role</strong> to become conscious of the behaviors that influence trust and shows how to build and sustain trust in relationships.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/blanchard-management.png"/>
                            <h3>Blanchard Management Essentials<sup>®</sup></h3>
                            <p className="text-justify">The challenges of transitioning from being an individual contributor to the role of leading others are well known. Along with the general issues of making this shift, new managers also need to understand the specific expectations of a leader. This program provides Essential Skills Every First-time & New Manager needs and The Four Conversations Every Manager Should Master.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/conversational-capacity.png"/>
                            <h3>Conversational Capacity<sup>®</sup></h3>
                            <p className="text-justify">Conversational Capacity<sup>®</sup> by The Ken Blanchard Companies teaches the skills needed to have open, balanced, non-defensive dialogue about difficult subjects. Employees learn how to engage in constructive, learning-focused dialogue when challenging topics or conflicts arise so they can make informed decisions and find the best solutions, even under high pressure.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/legendary-service.png"/>
                            <h3>Legendary Service<sup>®</sup></h3>
                            <p className="text-justify">This program helps leaders focus on the critical role and responsibility of implementing the company’s service culture through employees, as well as crafting a plan on how to support their employees through a systematic approach that enables service to become the competitive edge of your organization.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/self-leadership.png"/>
                            <h3>Self Leadership</h3>
                            <p className="text-justify">Organizations need self-motivated employees who improve corporate productivity and profitability, effectively manage themselves, and create an emotional engagement with the customers they serve. Self-Leadership is a <strong>most sought-after leadership development programs</strong> designed to assist individuals at all levels in making the transition from disengaged to engaged, from being responsive to responsible, and in taking initiative in idea generation, innovation, and problem-solving.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/team-leadership.png"/>
                            <h3>Team Leadership</h3>
                            <p className="text-justify">This program teaches managers to diagnose their team’s development and apply the right leadership style to build and sustain high-performing teams. Based on SLII<sup>®</sup>, the most widely taught leadership model in the world, Blanchard’s Team Leadership program teaches managers of Managers to diagnose their team’s development and apply the right leadership style to build and sustain high-performance teams.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/leading-people-through-chang.png"/>
                            <h3>Leading People Through Change<sup>®</sup></h3>
                            <p className="text-justify">Change efforts often fail because the organization and its leaders lack the framework and skills to guide their people through it effectively. Our Leading People Through Change<sup>®</sup> program teaches your executives and managers how to lead successful change initiatives by involving others throughout the change process.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/coaching-essentials.png"/>
                            <h3>Coaching Essentials<sup>®</sup></h3>
                            <p className="text-justify">Coaching Essentials<sup><sup>®</sup></sup> is <strong>the most widely taught leadership development course</strong> that helps leaders to integrate coaching skills into their leadership style by developing coaching skills and applying new behaviors to help employees reach higher levels of performance &amp; professional development.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
         </div>
      </div>

      <div className="what-did-area pt-20 pb-40 themebg">
         <div className="container">
            <div className="row row-eq-height">               
            <div className="col-lg-12">
                <div className='text-center pt-20 pb-25'>
                <h3 className='titleh2'>CLIENTS TESTIMONIALS</h3>
                </div>
                <div className="what-did-left-content">
                    <div className="row how-we-work-with-u0pa">                         
                        <div className="col-sm-4">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/quotation.png"/>                            
                            <p className="text-justify">The SLII<sup>®</sup> Experience provided some really helpful tips to our managers to engage with the teams and be agile in their responses accordingly. It helped them look at the capability model from a different perspective and in turn made them realize the importance of different leadership styles to be an effective leader.</p>
                            <h4>– Our SLII<sup>®</sup> Experience Training participant</h4>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/quotation.png"/>                           
                            <p className="text-justify">We are pleased to share that the facilitator delivered a power-packed program on SLII<sup>®</sup> , and the examples used were relevant to the audience. The program content was simple to comprehend as well as apply at the workplace. We are happy to recommend Blanchard International’s programs.</p>
                            <h4>Rangkynsai Nongbet (Ortho Clinical Diagnostics)</h4>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="equialwithborder">
                            <img src="/kbassets/img/quotation.png"/>                            
                            <p className="text-justify">The participants learned setting goals for themselves and their teams and recognized the developmental levels and guided them with the right conversations while using the essentials skills.</p>
                            <h4>– Participants of Blanchard Management Essentials<sup>®</sup> & Self Leadership</h4>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
         </div>
      </div>

      <div className="brand-area brand-bg2">
         <div className="container">
               <Slider {...settings}>
                  <div key={1}>
                     <img src="/kbassets/img/boston-1.png" alt="Images"/>
                  </div>
                  <div key={2}>
                     <img src="/kbassets/img/tcs.png" alt="Images"/>
                  </div>
                  <div key={3}>
                     <img src="/kbassets/img/optum.png" alt="Images"/>
                  </div>
                  <div key={4}>
                     <img src="/kbassets/img/nthrive.png" alt="Images"/>
                  </div>
                  <div key={5}>
                     <img src="/kbassets/img/mcm.png" alt="Images"/>
                  </div>
                  <div key={6}>
                     <img src="/kbassets/img/hp.png" alt="Images"/>
                  </div>
                  <div key={7}>
                    <img src="/kbassets/img/hero.png" alt="Images"/>
                  </div>
                  <div key={8}>
                    <img src="/kbassets/img/hcl.png" alt="Images"/>
                  </div>
                  <div key={9}>
                    <img src="/kbassets/img/fA.png" alt="Images"/>
                  </div>
               </Slider>
            
         </div>
      </div>

        
        </>
    )
}
