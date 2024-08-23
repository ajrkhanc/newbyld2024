import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function KingKahufu(){

    const KingKahufuForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/16/feedback');
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
            <title>King Kahufu - Eaglesflightinidia</title>
            <link rel="canonical" href="https://byldgroup.com/eaglesflightindia/our-offerings/king-kahufu" />
            <meta name="description" content="The Experience: In the ancient Egypt-themed virtual experiential activity, King Kahufu, participants become agents representing major interest groups assembled to assess a newly discovered pyramid and propose a plan of action for opportunities that have emerged as a result of the discovery. The goal of the experience is to accomplish personal objectives as well as […]"/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                        <img className="img100" src="/efassets/img/banner/ef-king-kahafu.jpg"/>
                    </div>
                </div>
            </div>
            </div>

            <div class="rs-about style4 bg21 mtt-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="sec-title3 mbb-35 text-left onlyshd">
                        <h4 class="countertoph2 text-left font36">The Experience</h4>
                        <div class="heading-border-line left-style"></div>
                        <p class="mtt-40 justify">
                        In the ancient Egypt-themed virtual experiential activity, King Kahufu, participants become agents representing major interest groups assembled to assess a newly discovered pyramid and propose a plan of action for opportunities that have emerged as a result of the discovery. The goal of the experience is to accomplish personal objectives as well as the team’s collective objectives via the virtual learning platform.
                        </p>  
                        <div class="btn-part ptt-10 pbb-30">
                            <a class="readon2" target="_blank" href="https://ik.imagekit.io/byld/EF/PAGERS_T29sCcp09.pdf?updatedAt=1708519086147">
                                 DOWNLOAD BROCHURE
                                <div class="btn-arrow"></div>
                            </a>
                        </div>                      
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className="col-lg-5">
                        <img className="img100" src="/efassets/img/eagles-flight-king-kahufu.jpg"/>
                    </div>
                    
                </div>
            </div>
            </div>

            <div className="rs-achievement style1 relative ptt-40 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    <div className="col-lg-6 md-pt-50">
                        <div className="">                        
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
                            <li>Optimize team performance to positively impact results</li>
                            <li>Create a cohesive and effective team with a singular mindset</li>
                            <li>Communicate with clarity and purpose</li>
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
                            <form id="contact-form" className='clientcornner pbb-20' onSubmit={KingKahufuForm}>                                         
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
