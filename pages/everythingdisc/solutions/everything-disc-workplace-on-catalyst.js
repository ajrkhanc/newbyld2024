import Head from 'next/head'


export default function Everythingdiscworkplaceoncatalyst(){

    const EDAgileED = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/31/feedback');
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
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +          
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )
  
    }


    return(
        <>
          <Head>
            <title>Best Catalyst Everything DiSC Workplace Assessment to Flourish</title>
            <meta name="description" content="Catalyst Everything DiSC<sup>®</sup> builds effective relationships. Everything DiSC<sup>®</sup> Workplace Assessment profile helps to improve collaboration and communication at work."/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/edassets/img/banner/ed-catal.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font34 mbb-10 pbb-10">The Experience:</h4>
                        <p className='mall5'>
                        Organizational culture faces unpredictable and constantly evolving challenges. Your organization needs to actively shape a culture that supports <span className='themecolor'>morale, recovery,</span> and <span className='themecolor'>continued success.</span>
                        </p>
                        <p>
                        <span className='themecolor'>Everything DiSC Workplace<sup>®</sup></span> on Catalyst™ takes the best-selling Everything DiSC Workplace<sup>®</sup> experience to the next level. Designed to engage everyone in building more effective relationships at work, <span className='themecolor'>Catalyst Everything DiSC<sup>®</sup></span> helps people adapt to others in real-time, unlocking engagement, and inspiring more effective collaboration.
                        </p>
                        <p className='mmm font20'>
                        <span className='themecolor'>The Key Learnings:</span>
                        </p>

                        <div className='rs-estimate'>                        
                            <ul className="estimate-info mtt-5">
                                <li>Discover DiSC<sup>®</sup> style.</li>
                                <li>Deepen understanding of self and others.</li>
                                <li>Learn how to build better relationships with others.</li>
                                <li>Access real-time tips for more effective interactions with colleagues.</li>
                                <li>Build the foundation for future social and emotional skills training.</li>
                            </ul>
                        </div>

                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <img src="/edassets/img/everything-disc-workplace-on-catalyst.png" alt=""/>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>


            <div class="rs-process style1 edca pt-100 pb-100 md-pt-70 md-pb-70">                
                <div class="container">
                    <div class="row y-middle">
                        <div class="col-sm-12">
                            <div class="sec-title2 md-text-center">                                
                                <h2 class="title mb-23 white-color text-center">How does it work?</h2>
                            </div>
                        </div>                      
                    </div>
                </div>
                <div class="container custom2">
                    <div class="process-effects-layer">
                        <div class="row">
                            <div class="col-sm-4 md-mb-30">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <div class="number-image">
                                            <img src="/edassets/img/proses1.png" alt="Process"/>
                                        </div>
                                        <div class="number-text">
                                            <div class="number-area"> <span class="number-prefix"> 1 </span></div>
                                            <div class="number-title"><h3 class="title"> The Everything DiSC Assessment</h3></div>
                                            <div class="number-txt"> 
                                                <ol>
                                                    <li>Powered and proven by 40+ years of research</li>
                                                    <li>Uses computer-based testing and sophisticated algorithms for precise results</li>
                                                    <li>Everything DiSC Workplace assessment builds the foundation for an ongoing, personalized learning experience</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 md-mb-30">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <div class="number-image">
                                        <img src="/edassets/img/proses2.png" alt="Process"/>
                                        </div>
                                        <div class="number-text">
                                            <div class="number-area"> <span class="number-prefix"> 2 </span></div>
                                            <div class="number-title"><h3 class="title">Catalyst™—A Personalized, On-Demand Learning Platform</h3></div>
                                            <div class="number-txt"> 
                                            <ol>
                                                    <li>Delivers the narrative-style results of the Everything DiSC assessment, allowing learners to delve into their style and develop new skills</li>
                                                    <li>Offers real-time tips for more effective interactions with the learner’s colleagues</li>
                                                    <li>Serves as a learning hub throughout the learner’s DiSC journey, from facilitation to independent exploration</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 sm-mb-30">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <div class="number-image">
                                        <img src="/edassets/img/proses3.png" alt="Process"/>
                                        </div>
                                        <div class="number-text">
                                            <div class="number-area"> <span class="number-prefix"> 3 </span></div>
                                            <div class="number-title"><h3 class="title">Workplace on Catalyst Facilitation</h3></div>
                                            <div class="number-txt"> 
                                            <ol>
                                                    <li>Brings the learner’s DiSC results to life in an instructor-led experience that engages and educates</li>
                                                    <li>Virtual training modules including scripted content, contemporary video, and activities (in-person training coming later in 2020)</li>
                                                    <li>Short-format, modular design that is easily tailored to any group size or time constraint</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
 
            

           <div className="rs-achievement style1 relative ptt-50 pbb-40 bg21">
            <div className="container">
                <div className="row rs-vertical-middle">
                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font20">Improve Workplace Relationships With Top Catalyst Everything DiSC<sup>®</sup></h4>
                        <p className='mall5'>
                        What’s the most important thing to do when you have disengagements and misalignments within your team?
                        </p>                        
                        <p className='mmm'>
                        <span className='themecolor'>Sure you can count a couple on your fingertips.</span>
                        </p>
                        
                        <p className='mmm'>
                        Which one will you give more weightage to?
                        </p>
                        <p className='mmm'>
                        Unsure, right? We’ll tell you how to boost productivity with relationships. Everything DiSC<sup>®</sup> Catalyst enables businesses to understand how a person performs in a specific setting. From communication to collaboration, a collective effort is all it takes to uplift people whose productivity has declined over time. And in the end, it will result in a healthy work atmosphere with strong employee connections.
                        </p>
                        <h4 className="countertoph2 text-left font18">An innovative virtual solution for fostering a positive workplace culture</h4>
                        <p>
                        Everything DiSC Workplace assessment helps in better analyzing and knowing why people are the way they are. And the best thing about truly knowing your people is that you can positively help them improve where they are falling short. This detailed report by the top Catalyst Everything DiSC<sup>®</sup> will eventually bring in-depth Self-discovery, Appreciation for Differences in Work Styles, and Strategies for Successful Interactions.
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
            
  
        </>
    )
}