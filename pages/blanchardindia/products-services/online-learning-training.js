import Link from "next/link";
import Head from "next/head";

export default function OnlineLearning() {
    return (
        <>
        <Head>
        <title>Online Learning - Blanchard International</title>
        <meta name="description" content="Hone your relationship building skills with Blanchard’s Building Trust program. Influential leadership is all about building trust and relationships. Great leaders are more adaptive to external changes and lead their teams with effectiveness."/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="inner-banner online-learning-headbg">
                <div className="container">
                    <div className="inner-title text-center">
                        <h3>THE E-LEARNING ERA IS HERE NOW!</h3>
                        <ul>
                        <li>
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        <li>Online Learning</li>
                        </ul>
                    </div>
                </div>
                <div className="inner-lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="what-did-area pt-45">
   <div className="container">
      <div className="row row-eq-height">
         <div className="col-lg-6 bgshd">
             <div className='contact-form'>
             <div className="section-title">
                <span className="sp-color1">Get A Quick Access to Preview</span>            
                <p>Willing to join our upcoming session? Fill-up this form to get access to our online preview</p>
            </div>
             <form id="contactForm" novalidate="true" action="" method="#">
                     <div className="row">
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="name" id="name" className="form-control" required data-error="Please Enter Your Name" placeholder="Name"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="email" name="email" id="email" className="form-control" required data-error="Please Enter Your Email" placeholder="Email"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="phone_number" id="phone_number" required data-error="Please Enter Your number" className="form-control" placeholder="Phone Number"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                                 <select name="referred_by" className="form-control" required>
                                    <option value="">Referred By*</option>                                 
                                    <option value="Social Media">Social Media</option>
                                    <option value="Google Search">Google Search</option>                                 
                                    <option value="Reference">Reference</option>                                 
                                 </select>
                              
                              <input type="text" name="referred_by" id="msg_subject" className="form-control" required="" data-error="Please Enter Referred By*" placeholder="Referred By*"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <textarea name="message" className="form-control" id="message" cols="30" rows="3" required="" data-error="Write your message" placeholder="Your Message"></textarea>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>                         
                        <div className="col-lg-12 col-md-12">                          
                           <input className="default-btn btn-bg1 disabled" type="submit" value="SUBMIT"/>
                           <div id="msgSubmit" className="h3 text-center hidden"></div>
                           <div className="clearfix"></div>
                        </div>
                     </div>
                  </form>
             </div>
         </div>
         <div className="col-lg-6">
            <div className="">
            <img className='online-learningimg100' src="/kbassets/img/online-learning2.jpg" alt="Images"/>
            </div>
         </div>
      </div>
   </div>
</div>

            <div className="what-did-area pb-40 pt-45 style2">
                <div className="container">
                    <div className="row align-items-center">                  
                        <div className="what-did-left-content pt-20">
                            <div className="row row-eq-height height100p align-items-center">
                                <div className="col-sm-6">
                                    <div className="cl2-50-54-box cl2-50-54-boxb1 online-learningfixtheight1">                                    
                                        <h2 className="titleh2 text-left">Why E-LEARNING?</h2>                                       
                                        <p className="text-justify">
                                        Providing one-on-one training to all the individuals in an organization is not always flexible nor affordable. To broaden the reach and impact of their training workshops, 75% of corporations are applying eLearning as an impactful training method. Using highly reputed technology, Online Learning enables the delivery of the finest online leadership training, in a customized system that’s accessible to learners at any time or place.
                                        </p>
                                    </div>
                                </div>                            
                                <div className="col-sm-6">
                                <div className="cl2-50-54-box cl2-50-54-boxb2 online-learningfixtheight1">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="case-studies-list">
                                                <i className='hoverbgn'><img src="/kbassets/img/ol-online-leadership-training-savings.png"/></i>
                                                <p>                                                
                                                eLearning can <span className="blue">SAVE BUSINESSES AT LEAST 50%</span> over traditional instructor-based training. <span className="blue">CUT INSTRUCTION TIME BY UP TO 60%, AND INCREASE INFORMATION RETENTION RATES UP TO 60%</span>
                                                </p>                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="case-studies-list">
                                                <i className='hoverbgn'><img src="/kbassets/img/ol-leadership-training-programs-productivity-boost.png"/></i>
                                                <p><span className="blue">EVERY $1</span> invested in online training results in <span className="blue">$30 IN PRODUCTIVITY.</span> Companies that use eLearning achieve an <span className="blue">18% BOOST IN EMPLOYEE ENGAGEMENT.*</span></p>                                                
                                            </div>
                                        </div>
                                       
                                        <div className="services-more-btn text-left">                                        
                                        <Link href="/get-started">
                                            <a className="default-btn-two">Get Started<i className="bx bx-right-arrow-alt"></i></a>
                                        </Link>                  
                                        </div>
                                    </div>
                                    </div>
                                </div>                                   
                            </div>
                        </div>                                   
                    </div>
                </div>
            </div>

            <div className="what-did-area pb-40 pt-45 style2 themebg">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-12">
                    <h2 className="titleh2 text-center">ONLINE COURSES WITH CERTIFICATES IN INDIA</h2>
                    <p className="text-center">
                    Innovation is changing the way individuals learn and share data. With the advent of online courses along with certification in India, you can introduce significant leadership training and professional development courses to all hierarchies of your organization while saving time and other resources. It’s the ideal solution for a demographically dispersed workforce, front-line employees with constrained time, and the new age of computerized locals.
                    </p>
                    
                        <div className="what-did-left-content">
                            <div className="row row-eq-height online-learing-eq3">
                                <div className="col-sm-3">
                                <div className="what-did-left-card what-did-left-card-sl2 text-center">
                                    <img src="/kbassets/img/maximize-reach.png"/>
                                    <h3>MAXIMIZE <br/>REACH</h3>
                                    <p>
                                    With online learning, you can share fundamental authority ideas and aptitudes with a boundless number of individuals in your organization.
                                    </p>
                                </div>
                                </div>
                                <div className="col-sm-3">
                                <div className="what-did-left-card what-did-left-card-sl2 text-center">
                                    <img src="/kbassets/img/save-time.png"/>
                                    <h3>SAVE TIME <br/>AND MONEY</h3>
                                    <p>
                                    Web-based learning diminishes time and distance from the workplace, takes out the requirement for movement, and lessens general training costs.
                                    </p>
                                </div>
                                </div>
                                <div className="col-sm-3">
                                <div className="what-did-left-card what-did-left-card-sl2 text-center">
                                    <img src="/kbassets/img/take-advantage.png"/>
                                    <h3>TAKE ADVANTAGE OF <br/>TECHNOLOGY</h3>
                                    <p>
                                    Web-based learning bids to Generation X and Y’s inclination for everything computerized, engaging them to control the pace and utilization of the learning.
                                    </p>
                                </div>
                                </div>
                                <div className="col-sm-3">
                                <div className="what-did-left-card what-did-left-card-sl2 text-center">
                                    <img src="/kbassets/img/move-at.png"/>
                                    <h3>MOVE AT YOUR <br/>OWN PACE</h3>
                                    <p>
                                    Web-based learning enables participants to advance through a little, nibble estimated content at their own pace, survey ideas, or hop ahead to meet the needs.
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
               <div className='col-sm-12 text-center'>
               <h2 className="titleh2 pt-20 pb-25">HOW TO DELIVER GOOD TO EXTRAORDINARY SERVICES?</h2>
               </div>
               <div className="col-lg-6 bgshd">
                  <div className="what-did-content what-did-content-rs">
                     <div className="section-title-two pt-20">                        
                        <p className="text-justify">
                        Utilizing the most recent developments in a learning plan and propelled innovation, SLII Express is the newest expansion to Online Learning – comprehensive courseware that enables your administrators and directors to learn the basics of The SLII Experience™. The modern initiative model can be accessed anywhere and anytime around the globe.
                        </p>
						 <p className="text-justify">
                         Participants work their way through eight drawing-in modules, with various exercises in each ranging from 2 to 20 minutes long, that incorporate recordings, intuitive exercises, diversions, stories, and contextual analyses. The modules can be finished in succession, or participants can get to learn essentials when required within a time frame. Participants can likewise meet up to ask specific questions to work together with peers, talk about learnings, and practice their new skills.
                         </p>
                         <p className="text-justify">
                         SLII Express is an efficient method to furnish people in your organization with the new type of training and skill development platform that can help them to become extraordinary leaders or managers.
                         </p>
                     </div>                     
                  </div>
               </div>
               <div className="col-lg-6 themebg2">
                  <div className="">
                     <img src="/kbassets/img/online-leadership-training-model.jpg" alt="Images"/>                      
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="what-did-area pt-25 pb-40">
         <div className="container">
            <div className="row row-eq-height">
               <div className="col-lg-6 bgleftcol16">
                  <div className="text-center pt-20 pb-25">
                  <h3 className='h3white'>HOW CAN YOUR ORGANIZATION BENEFIT FROM ELEARNING?</h3>
                   
                  <a className="default-btn-two" target="_blank" href="https://youtu.be/GatL7Ds-6LE">
                  WATCH NOW<i className="bx bx-right-arrow-alt"></i>
                  </a>
                  </div>
               </div>
               <div className="col-lg-6 bgshd">
                  <div className="what-did-content what-did-content-rs">
                     <div className="section-title-two pt-20">                         
                        <h2 className="titleh2">WANT TO LEARN MORE?</h2>
                        <ul className="point3">
                            <li><a target="_blank" href="http://blanchardinternational.co.in/pdf/SLII-Online-Overview-MK0835.pdf">SLII ONLINE</a></li>
                            <li><a target="_blank" href="http://blanchardinternational.co.in/pdf/Self-Leadership-Online-Overview.pdf">SELF LEADERSHIP ONLINE</a></li>
                            <li><a target="_blank" href="http://blanchardinternational.co.in/pdf/Building-Trust-Online-Overview.pdf">BUILDING TRUST ONLINE</a></li>
                        </ul>
                     </div>                     
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="contact-area pt-25 pb-40">
      <div className="container">
         <div className="row">
            <div className="col-lg-6 bgshd">
               <div className="contact-form">
                  <div className="section-title">                     
                     <h2>Connect with us to access our case studies or other resources.</h2>
                  </div>
                  <form id="contactForm" novalidate="true" action="" method="#">
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="form-group">
                              <input type="text" name="name" id="name" className="form-control" required="" data-error="Please Enter Your Name" placeholder="Your Name"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                              <input type="email" name="email" id="email" className="form-control" required="" data-error="Please Enter Your Email" placeholder="Your Email"/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>

                        <div className="col-lg-12 col-md-12">                          
                           <input className="default-btn btn-bg1 disabled" type="submit" value="Send Message"/>
                           <div id="msgSubmit" className="h3 text-center hidden"></div>
                           <div className="clearfix"></div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
            <div className="col-lg-6 bgleftcol15">
                <div className='pt-45'>
                <h3 className='h3white'>Ready To Get Started?</h3>
                <p className='p-white'>
                <strong>Online Learning</strong> is a flexible, self-paced, and affordable eLearning solution that allows you to deliver Blanchard’s world-class leadership training programs online to dispersed learners across your organization.
                </p>
                <div className="services-more-btn text-center">
                    <Link href="/get-started"><a className="default-btn-two btn-three">Talk to an expert</a></Link>                  
                </div>               
                </div>
            </div>
         </div>
      </div>
   </div>

   <div className="container">
         <div className="row">           
            <div className="col-lg-12">
                <div className='text-center'>               
                <p className='p-white'>
                *The Economics of Wellbeing by Tom Rath and Jim Harter, 2010
                </p>
                <p className='p-white'>
                Positive Intelligence, Harvard Business Review, 2013
                </p>
                </div>
            </div>
         </div>
      </div>
        </>
    )
}