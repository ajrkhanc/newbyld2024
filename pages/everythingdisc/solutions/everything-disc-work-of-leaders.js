import Head from 'next/head'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function EverythingDiscWorkofLeaders(){

    const EDAgileED = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/29/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
  
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/everythingdisc/thank-you"
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
            "&leadsquared-mx_Showed_Interest_in=" + event.target.slot.value +            
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +          
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )
  
    }


    return(
        <>
          <Head>
            <title>Develop the Best Emotional Intelligence and Leadership Culture</title>
            <meta name="description" content="Emotional Intelligence and Leadership are essential for an agile organizational structure with an in-depth understanding of your people’s DiSC personality types."/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/edassets/img/banner/everything-disc-work-of-leaders.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font34 mbb-10 pbb-10">Everything DiSC Work Of Leaders Learning Experience</h4>
                        <p className='mall5'>
                        Everything DiSC Work of Leaders<sup>®</sup> is a tailored learning and classroom training experience that connects unique leadership styles to real-world demands, courtesy of their <span className='themecolor'>personality types.</span> It brings the best practices from 300 professionals in over 150 organizations, the vital work of the most prominent scholars, and over four years of additional research and development on <span className='themecolor'>emotional intelligence and leadership</span> to offer participants an actionable path toward effective leadership. One combined <span className='themecolor'>DiSC model leadership–</span> Alignment, Vision, and Execution – it helps leaders comprehend their leadership and how their tendencies influence their effectiveness in particular leadership conditions.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <img src="/edassets/img/rrrr.jpg" alt=""/>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>
 
            <div className="rs-about style4 bg21 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-sm-12">
                        <Tabs>
                        <TabList className="lefttab">
                            <Tab><i className='fa fa-folder-o'></i> The Assessment</Tab>
                            <Tab><i className='fa fa-folder-o'></i> The Profile</Tab>
                            <Tab><i className='fa fa-folder-o'></i> The Classroom</Tab>
                            <Tab><i className='fa fa-folder-o'></i> The follow Up Tools</Tab>                            
                        </TabList>

                        <TabPanel className="tabdetails">
                           <div className='tabactive'>
                             <p className='mall5'>
                             The research-validated, online assessment asks participants to respond to behavioral statements on a five-point scale, including application-specific questions to help determine the participant’s Work of Leaders priorities. Built using the latest adaptive testing methodology, each participant receives precise insights to personalize their experience.
                            </p>
                           </div>                            
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='tabactive'>
                              <div class="rs-estimate">
                                <p>
                                <span className='themecolor'>The Everything DiSC Work of Leaders<sup>®</sup> Profile offers comprehensive, context-specific feedback based on the Alignment, Execution framework, Vision, and The Three Drivers linked with every step. In this profile, members will receive personalized plans for:</span>
                                </p>
                                <ul class="estimate-info mtt-5">
                                    <li>Framing a Vision through exploration, boldness, and testing assumptions.</li>
                                    <li>Crafting Alignment through dialog, clarity, and inspiration.</li>                                    
                                    <li>Championing Execution through structure, momentum, and feedback.</li>                                    
                                </ul>
                                </div>
                           </div>                            
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='tabactive'>
                             <p className='mall5'>
                             The profile works well with the Everything DiSC Work of Leaders Facilitation Kit, providing a classroom experience that educated and engages. With an active, modular design, a customizable presentation, modern videos, and 36 podcast segments specific to Alignment, Vision, and Execution, your members will walk away with an understanding of their personalized profile and memorable experience that motivates long-lasting behaviour change.
                            </p>
                           </div>                            
                        </TabPanel>

                        <TabPanel className="tabdetails">
                        <div className='tabactive'>
                              <div className='row'>
                                  <div className='col-sm-3'>
                                      <div className='innertab'>
                                          <h3>MyEverythingDiSC™</h3>
                                          <p>Expand the learning experience with the mobile-friendly, interactive learning portal that offers participants limitless access to on-demand insights about DiSC and plans for applying DiSC to real work conditions.</p>
                                      </div>
                                  </div>

                                  <div className='col-sm-3'>
                                      <div className='innertab'>
                                          <h3>COMPARISON REPORTS</h3>
                                          <p>
                                          Motivate effectual collaboration with Comparison Reports. Any two participants can discover their similarities and differences, possible challenges in working together, and practical tips for refining their working relationships.
                                          </p>
                                      </div>
                                  </div>

                                  <div className='col-sm-3'>
                                      <div className='innertab'>
                                          <h3>TEAM VIEW</h3>
                                          <p>
                                          With no restriction on the number of participants included, this report offers you an at-a-glance view of a group of participants and their individual Everything DiSC maps.
                                          </p>
                                      </div>
                                  </div>

                                  <div className='col-sm-3'>
                                      <div className='innertab'>
                                          <h3>GROUP CULTURE REPORT</h3>
                                          <p>Regulate the group’s DiSC culture by discovering its benefits and drawbacks, impact on group members, and influence on decision-making and risk-taking.</p>
                                      </div>
                                  </div>
                              </div>
                           </div>                           
                        </TabPanel>

                        </Tabs>
                        </div>                        
                    </div>
                </div>
                </div>


                <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font24">DiSC Model Leadership- Need of Every Leader</h4>
                        <p className='mall5'>
                        The more unpredictable, uncertain, complicated, and ambiguous our work environments become, the more important it is to have a swift team. And they need an equally able leader to guide them through. To be steadfast in your convictions while keeping open to new ideas, you need to study your people’s different <span className='themecolor'>DiSC personality types.</span>
                        </p>                        
                        
                        <p>
                        <span className='themecolor'>These personality types are equally important for leaders as well. There are four “primary emotions” and associated behavioral responses, which today we know as:</span>
                        </p>
                        <div className='rs-estimate'>                        
                        <ul className="estimate-info mtt-5">
                            <li>Dominance (D)</li>
                            <li>Influence (i)</li>
                            <li>Steadiness (S)</li>
                            <li>Conscientiousness (C)</li>
                        </ul>
                        </div>
                        <p>
                        The ultimate purpose is to understand your people’s emotions and use them to pace up the productivity of your organization. Leaders develop a model of leadership that creates a structural pattern of resolving issues.
                        </p>
                        <p>
                        This <span className='themecolor'>DiSC model leadership</span> exhibitions the magnificent outcomes of workplace challenges when your leaders can develop and manage people with ease.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <div className="bannerform formshd">
                            <div className="sec-title3 mbb-35 text-left">                                
                                <h4 className="countertoph2 text-left font24">Connect With Us</h4>
                                <div className="heading-border-line left-style"></div>
                            </div>
                            <form id="contact-form" className='clientcornner pbb-20' onSubmit={EDAgileED}>                                         
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
                                            <input type="text" name="designation" placeholder="Designation" />
                                        </div>
                                    
                                        <div className="col-sm-12 mb-12">
                                            <select name="slot" required>
                                                <option value="">Pick up any Slot*</option>
                                                <option value="August 21st 2020, Everything DiSC® Work Of Leaders Webinar">August 21st 2020, Everything DiSC® Work Of Leaders Webinar</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Website">Website</option>
                                                <option value="Reference">Reference</option>
                                                <option value="Sales Representative">Sales Representative</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="Business_Entity" value="Everything DiSC"/>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Submit"/>
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

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                         <div className="sec-title3 mbb-35 text-center ptt-40">                                
                                <h4 className="countertoph2 text-left font28">Transform Your Leadership Culture</h4>
                                <div className="heading-border-line center-style"></div>
                                <p className='mtt-40'>
                                Explore how Everything DiSC Work of Leaders<sup>®</sup> can assist your leader’s influence and enhance your firm. Everything DiSC Work of Leaders<sup>®</sup> is accessible through our network of consultants and coaches.
                                </p>

                                <div class="btn-part ptt-10 pbb-30">
                                <a class="readon2" href="/everythingdisc/contact-us">
                                Find a Partner
                                    <div class="btn-arrow"></div>
                                </a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
  
        </>
    )
}