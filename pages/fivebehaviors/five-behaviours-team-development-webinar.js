import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function FiveBWebinar(){

    const FiveBcontactUs = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/everythingdisc/wp-json/contact-form-7/v1/contact-forms/263/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/fivebehaviors/thank-you"
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
            "&interested=" + event.target.interested.value +            
            "&leadsquared-Notes=" + event.target.leadsquaredNotes.value +          
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )
  
    }

    return(
        <>
          <Head>
            <title>Five Behaviours Team Development Webinar - Five Behaviors</title>
            <meta name="description" content="Join us for an exciting discovery of your team’s behaviors and qualities based on The Five Behaviors of a Cohesive Team, an assessment-based learning model. It is based on Patrick Lencioni’s best selling book – “The Five Dysfunctions of a Team” Learn how you and your teams score on the key components of the Five […]"/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/5bassets/img/banner/fivebwebinar.jpg"/>
                    </div>         
                </div>
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    <div className='col-sm-2'></div>
                    <div className="col-md-8 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font34">Five Behaviors Team Development Webinar</h4>
                        <p className='mall5'>
                        Join us for an exciting discovery of your team’s behaviors and qualities based on The Five Behaviors of a Cohesive Team, an assessment-based learning model.
                        </p>
                        <p className='mall5'>
                        <b>It is based on Patrick Lencioni’s best selling book – <span className='themecolor'>“The Five Dysfunctions of a Team”</span></b>
                        </p>
                        <p className='mall5'>
                        Learn how you and your teams score on the key components of the Five Behaviors<sup>®</sup> model of Trust, Conflict, Commitment, Accountability and Results.
                        </p>
                        <p className='mall5'>
                        It’s time to <b>transform</b> your team members into <span className='themecolor'>great players.</span>
                        </p>                       
                        </div>
                    </div>                   
                    <div className='col-sm-2'></div>
                </div>                 
            </div>
            </div>

            <div className="rs-testimonial style4 bg16 ptt-50 pbb-70">
                <div className="container">                   
                    <div className="row">
                         <div className="col-sm-2"></div>
                         <div className="col-sm-8">
                         <div className="bannerform formshd">
                            <div className="sec-title3 mbb-35 text-center">                                
                                <h4 className="countertoph2 text-left font34">Reserve Your Seat</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                            <form id="contactForm" className='clientcornner pbb-20' onSubmit={FiveBcontactUs}>
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
                                    
                                        <div className="col-sm-6 mb-12">
                                            <select name="interested" required>
                                                <option value="">Pick up any Slot*</option>
                                                <option value="21st June 2023 The Five Behaviors<sup>®</sup> Team Development Webinar">21st June 2023 The Five Behaviors® Team Development Webinar</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By*</option>
                                                <option value="Email">Email</option>                                                
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquaredNotes" placeholder="Your Message"></textarea>
                                        </div>
                                        <div className="col-sm-6 mb-12 d-none">
                                            <input type="text" name="Business_Entity" placeholder="" value="The Five Behaviors" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Submit"/>
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
