import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function TheFiveBehaviorsForVirtualTeam(){

    const Eaglesflightexecutivebriefing = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/20/feedback');
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
            "&slot=" + event.target.slot.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +          
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )
  
    }


    return(
        <>
          <Head>
            <title>The Five Behaviors for Virtual Teams - Five Behaviors</title>
            <meta name="description" content="We don’t always think of teamwork as a skill—but the reality is, teamwork is an essential skill, especially in the work from home format. The way we work has changed but the teams everywhere are struggling! The need for stronger teamwork skills has never been felt greater and now there is a PROVEN SOLUTION! Key […]"/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/efassets/img/eagles-flight-executive-briefing.jpg"/>
                    </div>         
                </div>
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>                        
                        <p className='mall5'>
                        We invite you to explore our range of experiential learning programs which combine immersive activities that mimic real-world challenges with a targeted debrief.
                        </p>
                        <p className='mall5'>
                        Experiential Learning allows participants to experience things closely through immersive learning structure; instead of merely listening, reading, or watching. As participants personally experience the results from applying their existing skills (both successes and failures), they are more inclined to do things differently next time.
                        </p>
                        <p className='mall5'>
                        And after getting back at work, new competencies get developed, more information gets retained, and individuals are more likely to apply their new knowledge to their real-world when they’re back on the job.
                        </p>
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">Key takeaways:</h4>
                        <ul className="estimate-info mtt-5">
                            <li>Better collaboration</li>
                            <li>Enhanced internal customer service</li>
                            <li>Increased productivity</li>
                            <li>Better negotiation skills</li>
                            <li>Maximize market share</li>
                            <li>Improved planning and perception management</li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <img src="/efassets/img/promises-promises.jpg" alt=""/>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>

            <div className="rs-testimonial style4 bg16 ptt-30 pbb-70">
                <div className="container">                   
                    <div className="row">
                         <div className="col-sm-2"></div>
                         <div className="col-sm-8">
                         <div className="bannerform formshd">
                            <div className="sec-title3 mbb-35 text-center">                                
                                <h4 className="countertoph2 text-left font34">Register and Learn More</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                            <form id="contact-form" className='clientcornner pbb-20' onSubmit={Eaglesflightexecutivebriefing}>                                         
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
                                            <select name="slot" required>
                                                <option value="">Pick up any Slot*</option>
                                                {/* <option value="Eagle's Flight Executive Briefing: August 17th, 2022">Eagle's Flight Executive Briefing: August 17th, 2022</option> */}
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
                         <div className="col-sm-2">
                         
                         </div>
                    </div>
                </div>
            </div>
            
  
        </>
    )
}
