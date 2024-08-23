import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function TheFiveBehaviorsForVirtualTeam(){

    const TFBFVT = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/49/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
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
            "&location=" + event.target.Location.value +
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&referredby=" + event.target.referredby.value +            
            "&your-message=" + event.target.leadsquared_Notes.value )

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
                      <img className="img100" src="/5bassets/img/banner/virtualteam.jpg"/>
                    </div>         
                </div>
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font34">What does this program do?</h4>
                        <p className='mall5'>
                        We don’t always think of teamwork as a skill—but the reality is, teamwork is an <span className='themecolor'>essential skill,</span> especially in the work from home format.
                        </p>
                        <p className='mall5'>
                        The way we work has changed but the teams everywhere are struggling!
                        </p>
                        <p className='mall5'>The need for stronger teamwork skills has never been felt greater and now there is a <span className='themecolor'>PROVEN SOLUTION!</span></p>
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">Key Learnings:</h4>
                        <ul className="estimate-info mtt-5">
                            <li>Discover the principles of The Five Behaviors<sup>®</sup> to build and strengthen teamwork from anywhere.</li>
                            <li>Learn how The Five Behaviors<sup>®</sup> for Virtual Teams can support your remote workforce, no matter where they are.</li>                                      
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <img src="/5bassets/img/persondevelopment.jpg" alt=""/>
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
                                <h4 className="countertoph2 text-left font34">Reserve Your Seat</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                            <form id="contactForm" className='clientcornner pbb-20' onSubmit={TFBFVT}>                                         
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
                                                <option value="Website">Website</option>
                                                <option value="Reference">Reference</option>
                                                <option value="Sales Representative">Sales Representative</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
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