import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function MuseumCaper(){

    const MuseumCaperForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/14/feedback');
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


    return(
        <>
          <Head>
            <title>Best Team Activities Virtually for Communication- Museum Caper</title>
            <link rel="canonical"href="https://byldgroup.com/eaglesflightindia/our-offerings/museum-caper" />
            <meta name="description" content="If you want to develop your communication skills, then you need outdoor team-building activities. You’ll do great with these team activities virtually."/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                        <img className="img100" src="/efassets/img/banner/museum-caper-banner.jpg"/>
                    </div>
                </div>
            </div>
            </div>

            <div class="rs-about style4 bg21 mtt-60">
            <div class="container">
                <div class="row y-middle">
                    <div class="col-lg-6">
                        <div class="sec-title3 mbb-35 text-left onlyshd">
                        <h4 class="countertoph2 text-left font28">Top Virtual Team-Building Activities for Employees</h4>
                        <div class="heading-border-line left-style"></div>
                        <p class="mtt-40 justify">
                        In Eagle’s Flight’s mystery-themed virtual experiential activity, Museum Caper™, participants work in teams as detectives to track down the culprits of three major robberies using the evidence left at the scene of each crime.
                        </p>
                        <p className='justify'>
                        By cross-referencing the clues they receive, they eliminate suspects and identify the true criminals. Involve in a virtual world of Museum Caper™ to identify the three best practices to succeed by conducting outdoor team building activities.
                        </p>
                        <div class="btn-part ptt-10 pbb-30">
                            <a class="readon2" target="_blank" href="https://ik.imagekit.io/byld/EF/1%20again_uRYEZacKu.pdf?updatedAt=1708517913734">
                                 DOWNLOAD BROCHURE
                                <div class="btn-arrow"></div>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img className="img100" src="/efassets/img/virtual-team-building-inner.png"/>
                    </div>
                    
                </div>
            </div>
            </div>

          

            {/* <div className="rs-achievement style1 relative ptt-30 pbb-10">
            <div className="container">
                <div className="row rs-vertical-middle">
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font34">A productive, high-functioning team:</h4>
                        <div className='rs-estimate'>
                        <ul className="estimate-info mtt-5">
                            <li>Makes better, faster decisions</li>
                            <li>Avoids wasting time and energy on politics, confusion, and destructive conflicts</li>                  
                            <li>Avoids wasting time talking about the wrong issues and revisiting the same topics over and over again because of a lack of buy-in</li>
                            <li>Creates a competitive advantage</li>
                            <li>Feels safe to ask for help and express their opinions</li>                  
                            <li>Is committed to the end goal</li>
                            <li>Holds one another accountable</li>
                            <li>Have more fun—and delivers results!</li>                           
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <img src="/5bassets/img/fb-team.jpg" alt=""/>
                        </div>
                    </div>
                </div>                 
            </div>
            </div> */}


            <div className="rs-achievement style1 relative ptt-40 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    <div className="col-lg-6 md-pt-50">
                        <div className="">
                        <img src="/efassets/img/museum-caper-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>                        
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">THE PRACTICAL DETAILS:</h4>
                        <ul className="estimate-info mtt-5">
                            <li>Ideal for all team members for training</li>
                            <li>Virtual delivery</li>                            
                        </ul>
                        </div>

                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">KEY LEARNING POINTS:</h4>
                        <ul className="estimate-info mtt-5">
                            <li>Provide timely feedback that can keep the team progressing to the goal</li>
                            <li>A team’s productivity increases with virtual team building activities for employees</li>
                            <li>Seek understanding to achieve the right results</li>
                            <li>Improve accuracy and efficiency of communications</li>
                            <li>Create overall clarity and prevent miscommunications</li>
                        </ul>
                        </div>
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
                            <form id="contact-form" className='clientcornner pbb-20' onSubmit={MuseumCaperForm}>                                         
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
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>                                                
                                            </select>
                                        </div>
                                        <div className="col-sm-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagles Flight" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
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
