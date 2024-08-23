import Head from 'next/head'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function EverythingDiscAgileEQ(){

    const EDAgileED = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/27/feedback');
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
            <title>Everything DiSC Agile EQ - Everything DiSC</title>
            <meta name="description" content="Everything DiSC<sup>®</sup>  AGILE EQ™ is now LIVE! Develop the emotional intelligence necessary to support a thriving agile culture Everything DiSC<sup>®</sup> AGILE EQ™ is now LIVE! Develop the emotional intelligence necessary to support a thriving agile culture The Everything DiSC Agile EQ Learning Experience We, as partners of Wiley brands in India, provide globally researched and"/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/edassets/img/banner/agile-eq.jpg"/>
                    </div>         
                </div>
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font24">The Everything DiSC Agile EQ Learning Experience</h4>
                        <p className='mall5'>
                        We, as partners of Wiley brands in India, provide globally researched and validated psychometric assessments, and related training solutions in leadership development across hierarchies. DiSC<sup>®</sup> Agile EQTM is a classroom training and personalized learning experience that teaches participants to read the emotional and interpersonal needs of a situation and respond accordingly.
                        </p>                        
                        <p className='mall5'><span className='themecolor'>The Everything DiSC Agile EQ (Emotional Quotient) Profile focuses on:</span></p>
                        <div className='rs-estimate'>                        
                        <ul className="estimate-info mtt-5">
                            <li>Discovering your DiSC Style</li>
                            <li>Understanding your EQ strengths</li>
                            <li>Recognizing your EQ potential</li>
                            <li>Committing to customized strategies for building agility</li>
                            <li>Learn to navigate outside your comfort zone</li>
                            <li>An agile approach to workplace interactions</li>
                            <li>Analyse Emotional needs and react to a situation accordingly</li>
                        </ul>
                        </div>
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
                                                <option value="June 18th 2021, The Everything DiSC Agile EQ">June 18th 2021, The Everything DiSC Agile EQ</option>
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

            <div className="rs-about style4 bg21 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-sm-12">
                        <Tabs>
                        <TabList className="lefttab">
                            <Tab><i className='fa fa-folder-o'></i> The Profile</Tab>
                            <Tab><i className='fa fa-folder-o'></i> The Follow-Up Tools</Tab>
                            <Tab><i className='fa fa-folder-o'></i> Benefits for participants</Tab>
                            <Tab><i className='fa fa-folder-o'></i> Comparison Reports</Tab>
                            <Tab><i className='fa fa-folder-o'></i> Team View </Tab>
                            <Tab><i className='fa fa-folder-o'></i> Group Culture Report </Tab>
                        </TabList>

                        <TabPanel className="tabdetails">
                           <div className='tabactive'>
                             <p className='mall5'>
                             <span className='themecolor'>The Everything DiSC<sup>®</sup> Agile EQ<sup>TM</sup></span> Profile provides participants with valuable insights that help them explore the concept of emotional intelligence and take an agile approach to workplace interactions. In this personalized, 26-page profile, participants will discover their <span className='themecolor'>DiSC<sup>®</sup></span> style, learn about the instinctive mindsets that shape their responses and interactions, recognize opportunities to stretch beyond what comes naturally to them, and gain actionable strategies to become more agile in their approach to social and emotional situations. The profile may be used on its own or with the companion facilitation; sold separately.
                            </p>
                           </div>                            
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='tabactive'>
                             <p className='mall5'>
                             Whether people want to dig deep into DiSC<sup>®</sup> research and theory or improve their working relationships through Comparison Reports, My Everything DiSC provides powerful, personalized tools and resources at no extra cost.
                            </p>
                           </div>                            
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='tabactive'>
                              <div class="rs-estimate">
                                <h4 class="countertoph2 text-left font26">Participants can</h4>
                                <ul class="estimate-info mtt-5">
                                    <li>Access their DiSC profile anytime, with any device</li>
                                    <li>Compare their DiSC style with their colleagues and explore similarities and differences</li>
                                    <li>Learn more about how their DiSC style impacts workplace relationships and productivity</li>
                                    <li>Build better working relationships through effective communication tips</li>
                                    <li>Deepen their understanding of the theory and research behind Everything DiSC<sup>®</sup></li>
                                </ul>
                                </div>
                           </div>                            
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='tabactive'>
                             <p className='mall5'>
                             Inspire effective collaboration with Comparison Reports. Any two participants can explore their similarities and differences, potential challenges in working together, and practical tips for improving their working relationship.
                            </p>
                           </div>                            
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='tabactive'>
                             <p className='mall5'>
                             With no limit to the number of participants included, this report gives you an at-a-glance view of a group of participants and their individual Everything DiSC maps.
                            </p>
                           </div>                            
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='tabactive'>
                             <p className='mall5'>
                             Determine the group’s DiSC culture by exploring its advantages and disadvantages, impact on group members, and influence on decision-making and risk-taking. Sold separately
                            </p>
                           </div>                            
                        </TabPanel>
                        </Tabs>
                        </div>                        
                    </div>
                </div>
                </div>
            
  
        </>
    )
}