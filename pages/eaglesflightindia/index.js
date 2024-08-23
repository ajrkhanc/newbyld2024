import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CountUp from 'react-countup';
import React from 'react';




export default function Home() {

   const Eaglesflightindia = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
          console.log(this.responseText);
      }
      xhttp.open("Post", 'https://byldgroup.in/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/18/feedback');
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

 

   var homeslider = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      fade: true,
      cssEase: 'linear',
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 2
            }
         }
      ]
   };

   var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 2
            }
         }
      ]
   };

   var settings1 = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <>
         <Head>
            <title>Eagle’s Flight | Experiential Learning | BYLD Group</title>
            <link rel="canonical" href="https://byldgroup.com/eaglesflightindia" />
            <meta name="description" content="Eagle’s Flight offers corporate team building games in a virtual immersive learning environment for effective self-learning. To know more, check out the page." />
            
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
            <script
               dangerouslySetInnerHTML={{
                  __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(30000).fadeIn();
               $('.close').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
               $('.x').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
             });
          `,
               }}
            />

      

<link rel="stylesheet" type="text/css" href="/efassets/css/homemodule.css" />
         </Head>

       
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WF8WJWJ"
        height="0"
        width="0"
        style={{ display: "none" }}
      ></iframe>
    </noscript>
  

         <section className='bannersection'>
            <Slider {...homeslider}>
               <div className='slide3c'>
                  <div className='container'>
                     <div className='row align-items-center'>
                        <div className='col-sm-6'>
                           <div className='siderco wow fadeInUp delay-0-2s animated animateUP'>
                              <h1>We are the authorized partners of Eagle’s Flight in India</h1>
                              
                              <div className="btn-part ptt-10 pbb-30">
                                 <Link href="#get-in-touch"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='slide4c'>
                  <div className='container'>
                     <div className='row align-items-center'>
                        <div className='col-sm-6'>
                           <div className='siderco wow fadeInUp delay-0-2s animated animateUP'>
                              <h1>We are the authorized partners of Eagle’s Flight in India</h1>
                             
                              <div className="btn-part ptt-10 pbb-30">
                                 <Link href="#get-in-touch"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Slider>
         </section>

         {/* <section className='ptt-50 pbb-60'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-6'>
                     <div class="sub-text supperh wow fadeInUp delay-0-2s animated animateUP">What We Offer</div>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Shaping your abilities with curated solutions</h2>
                  </div>
                  <div className='col-sm-6'>
                     <p class="mb-0 mtt-40 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">As a one-stop destination for building extraordinary talent, we create sustainable growth for individuals and organizations by empowering them through our expertise in learning and people solutions.</p>
                     <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
                        <Link href="#"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='ptt-0 pbb-60'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12'>
                     <div class="rs-videos choose-video wow fadeInUp delay-0-2s animated animateUP">
                        <div class="images-video">
                           <img src="/assets/img/homeb/newbyldb.jpg" alt="images" />
                        </div>
                        <div class="animate-border">
                           <a class="popup-border" target="_blank" href="https://www.youtube.com/watch?v=LXd9OtxQQQA&t=16s">
                              <i class="fa fa-play"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}

         <section className='solutionrow ptt-60 pbb-60'>
            <div className='container'>               
               <div className='row align-items-center zindx'>
                  <div className='col-sm-6'>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Business Team Building Activities <br></br>for Work</h2>
                     <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                     In partnership with Eagle’s Flight™, we present our wide range of cost-effective, customizable, and globally renowned experiential learning programs. These <b><i>corporate team-building games</i></b> combine immersive activities that mimic real-world challenges with a targeted debrief that connects the lessons learned with the reality of the workplace. It allows participants to learn by doing and not by just listening, reading, or watching. Because they have personally experienced <b><i>virtual team games</i></b> and the results (both successes and failures) that come with applying their existing skills and developing new behaviors, participants retain more information and are more likely to enthusiastically apply their new knowledge in their real-world back on the job.
                     </p>
                  </div>
                  <div className='col-sm-6 zindx'>
                  <div class="about-img"><img src="/efassets/img/business-team-building.svg" alt="images"/></div>
                  </div>
               </div>

               <div className='clearfix'></div>
               
               <div className='solutionarrowbox2'>
                  <img src="/assets/img/homeb/bluearrow1.png" />
               </div>

            </div>
         </section>

         <section className='solutionrow backwhite ptt-60 pbb-60'>
            <div className='container'>               
               <div className='row align-items-center zindx'>
               <div className='col-sm-6 zindx'>
                  <div class="about-img"><img src="/efassets/img/efimg2.png" alt="images"/></div>
                  </div>
                  <div className='col-sm-6'>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Get Access to the Best Corporate Team Building Games</h2>
                     <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                     Experiential learning programs help participants gain competence in areas such as leading teams or making quick decisions so as to improve processes, serve customers better, work with teams, improve processes, and manage time through virtual team games. At work, or in the office, developing good relationships is essential for a great organizational culture. Virtual fun activities for employees are a great way to enhance an inclusive work culture for your organization. Explore our offerings or connect with us to know more.
                     </p>
                  </div>                 
               </div>

               <div className='clearfix'></div>
               <div className='solutionarrowbox1'>
                  <img className='opacity4' src="/assets/img/homeb/bluearrow.png" />
               </div>
               <div className='solutionarrowbox2'>
                  <img src="/assets/img/homeb/orangearrow1.png" />
               </div>

            </div>
         </section>

         <section className='solutionrow ptt-60 pbb-60'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12 pbb-20'>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">OUR OFFERINGS</h2>
                  </div>                 
               </div>
               <div className='row zindx'>               
                  <div className='col-sm-12 zindx'>
                     <div className='row'>
                        <div className='col-sm-3'>
                           <a href='/eaglesflightindia/our-offerings/museum-caper'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>M</span>useum Caper™</h4>
                              <div className='cicon'>
                              <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/leadership-performancew.png" alt="images" />
                              </div>
                           </div>
                           </a>
                        </div>
                        <div className='col-sm-3'>
                           <a href='/eaglesflightindia/our-offerings/king-kahufu'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>K</span>ing Kahufu™</h4>
                              <div className='cicon'>
                                 <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/leadership-performancew.png" alt="images" />
                              </div>
                           </div>
                           </a>
                        </div>
                        <div className='col-sm-3'>
                           <a href='/eaglesflightindia/our-offerings/gold-of-the-desert-kings'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>G</span>old Of Desert Kings™</h4>
                              <div className='cicon'>
                              <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/leadership-performancew.png" alt="images" />
                              </div>
                           </div>
                           </a>
                        </div>
                        <div className='col-sm-3'>
                          <a href='/eaglesflightindia/our-offerings/council-of-the-marble-star'>
                          <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>C</span>ouncil Of Marble Star™</h4>
                              <div className='cicon'>
                              <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/leadership-performancew.png" alt="images" />
                              </div>
                           </div>
                          </a>
                        </div>
                        <div className='col-sm-3'>
                           <a href='/eaglesflightindia/our-offerings/promises-promises'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>P</span>romises! Promises!™</h4>
                              <div className='cicon'>
                              <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/leadership-performancew.png" alt="images" />
                              </div>
                           </div>
                           </a>
                        </div>
                        <div className='col-sm-3'>
                          <a href='/eaglesflightindia/our-offerings/rattlesnake-canyon'>
                          <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>R</span>attlesnake Canyon™</h4>
                              <div className='cicon'>
                              <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/leadership-performancew.png" alt="images" />
                              </div>
                           </div>
                          </a>
                        </div>

                        <div className='col-sm-3'>
                           <a href='/eaglesflightindia/our-offerings/expedition-outback'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>E</span>xpedition Outback™</h4>
                              <div className='cicon'>
                              <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/leadership-performancew.png" alt="images" />
                              </div>
                           </div>
                           </a>
                        </div>
                        <div className='col-sm-3'>
                           <a href='/eaglesflightindia/our-offerings/windjammer'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>W</span>indjammer™</h4>
                              <div className='cicon'>
                              <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/leadership-performancew.png" alt="images" />
                              </div>
                           </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='clearfix'></div>
               <div className='solutionarrowbox1'>
                  <img src="/assets/img/homeb/orangearrow.png" />
               </div>
               <div className='solutionarrowbox2'>
                  <img src="/assets/img/homeb/bluearrow1.png" />
               </div>

            </div>
         </section>

        

         <section className='ptt-40'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12 text-center'>
                  <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Partnership with a global leader</h2>
                  </div>
               </div>
            </div>
            <img className='wow fadeInUp delay-0-2s animated animateUP img100p' src='/efassets/img/handb.jpg' />
            <div className='container'>
               <div className='row'>
               <div className='col-sm-12 text-center pbb-10'>
                     <h2 class="title mb-0 h2call wow fadeInUp delay-0-2s animated animateUP">About BYLD Group</h2>
                  </div>                 
                  <div className='col-sm-12 text-center'>                    
                     <p class="mb-0 pall pbb-20 ptt-10 wow fadeInUp delay-0-2s animated animateUP">
                     BYLD Group is the largest group in the South Asian region, offering value-added services in Strategic and Operational HR, Business Operations, Manpower Staffing, Technology, Executive Coaching, Leadership, and Organizational Development. The first company of BYLD Group, Door Training, and Consulting India Pvt. Ltd. was founded in the year 1998, and since then we have served 5,00,000+ individuals, more than 50% of the Fortune 500 Companies and over 60% of the Business World Top 1000 Companies. Our key international alliances include The Ken Blanchard<sup>®</sup> Companies, Crucial Learning (formerly VitalSmarts™), Eagle’s Flight™, Everything DiSC<sup>®</sup> and The Five Behaviors<sup>®</sup> (Wiley Brands), Lumina Spark<sup>®</sup>, Business Today Simulations, InsideOut Development™, Persona Global<sup>®</sup>, Trapologist at Work™, Aster Coaching. Our India headquartered businesses comprise – Door Training and Consulting India Pvt. Ltd. (DTCI) and YOMA Business Solutions. With an annual turnover of over USD 32 Million (INR 230 crores approx.), more than 250 employees, our operational domain is spread across national and international boundaries. Backed by nearly 1000+ years of professional experience, our consultants support clients across industries to manage, develop and align the talent needs in line with their business objectives and strategies.
                     </p>
                     <div className="btn-part pbb-30 wow fadeInUp delay-0-2s animated animateUP">
                        <Link href="#"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

     
         <div id='get-in-touch' class="homecon ptt-60">
            <div class="container">
               <div className='row'>
                  <div className='col-sm-3'>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Get in touch</h2>
                  </div>
                  <div className='col-sm-9'>
                     <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                        Avail the development stream that is essential for your professional requirement. For more information, feel free to fill the form and we will get back to you
                     </p>
                  </div>
               </div>

               <div class="row y-middle">
                  <div class="col-lg-5 md-mb-50">
                     <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
                        <img src="/assets/img/homeb/contactl.png" alt="Contact" />
                     </div>
                  </div>
                  <div class="col-lg-7">
                     <div class="contact-wrap">
                        <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                           <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={Eaglesflightindia}>
                              <div className="row">
                                 <div className="col-sm-6 mb-12">
                                    <input className='borrr' type="text" name="name" placeholder="Enter Name*" required />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <input className='borrr' type="email" name="email" placeholder="Enter Email*" required />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <input className='borrr' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <input className='borrr' type="text" name="Location" placeholder="Location" />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <input className='borrr' type="text" name="organization" placeholder="Organization*" required />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <input className='borrr' type="text" name="designation" placeholder="Designation*" required />
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
                                    <input id="submitbuttonform" className="clientcornnerbtn bord0" type="submit" value="Submit" />
                                 </div>
                                 <p id="showlabel" style={{ display: "none" }}></p>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>



















      </>
   )
}
