import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {

    const Eaglesflightindia = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/36/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
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
            "&solutions=" + event.target.solutions.value +
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

    }

  return (
    <>
    <footer id="rs-footer" className="rs-footer style1">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-12 md-mb-10">
                        <h3 className="footer-title">Important Links</h3>
                            <ul className="site-map">
                                <li><a href="/eaglesflightindia">Home</a></li>
                                <li><a href="/eaglesflightindia/the-company">The Company</a></li>
                                <li><a href="/eaglesflightindia/our-approach">Our Approach</a></li>
                                <li><a href="/eaglesflightindia/blogs">Blog</a></li>
                                <li><a href="/eaglesflightindia/contact-us">Contact Us</a></li>                              
                            </ul>                              
                        </div>
                        <div className="col-md-3 md-mb-10 pl-55 md-pl-15">
                            <h3 className="footer-title">Our Offerings</h3>
                            <ul className="site-map">
                                <li><a href="/eaglesflightindia/our-offerings/museum-caper">Museum Caper</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/king-kahufu">King Kahufu</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings">Gold Of Desert Kings</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/council-of-the-marble-star">Council Of Marble Star</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/promises-promises">Promises! Promises!</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/rattlesnake-canyon">Rattlesnake Canyon</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/expedition-outback">Expedition Outback</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/windjammer">Windjammer</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 md-mb-10">
                            <h3 className="footer-title">Contact Info</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">BYLD Group, 2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                       <a href="tel:1800-102-1345">1800-102-1345</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc">
                                        <a href="mailto:eaglesflightindia.info@byldgroup.com">eaglesflightindia.info@byldgroup.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-clock"></i>
                                    <div className="desc">
                                    9:00 AM - 6:00 PM
                                    </div>
                                </li>
                            </ul>

                            <h3 className="footer-title">Follow Us</h3>

                            <ul className="footer-social md-mb-30">  
                                  <li> 
                                      <a href="https://www.facebook.com/BYLDExperientialLearning" target="_blank"><span><i className="fa fa-facebook"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="https://twitter.com/ByldLearnings" target="_blank"><span><i className="fa fa-twitter"></i></span></a> 
                                  </li>

                                  <li> 
                                      <a href="https://www.linkedin.com/company/byld-experiential-learning/" target="_blank"><span><i className="fa fa-linkedin"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="https://www.youtube.com/channel/UCfRDkIqa8kzNCDWA_VotHXw/videos" target="_blank"><span><i className="fa fa-youtube"></i></span></a> 
                                  </li>
                                                                           
                              </ul> 
                        </div>
                        <div className="col-md-4">                        
                        <h3 className="footer-title">Reach Out to Us</h3>
                        <div className="bannerform">
                                <form id="contact-form" className='clientcornner ptt-30 pbb-10' onSubmit={Eaglesflightindia}>
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
                                            <select name="solutions" required>
                                                <option value="">Our Solutions</option>
                                                <option value="Museum Caper (Virtual Immersive Learning)">Museum Caper (Virtual Immersive Learning)</option>
                                                <option value="King Kahufu (Virtual Immersive Learning)">King Kahufu (Virtual Immersive Learning)</option>
                                                <option value="Gold of the Desert Kings">Gold of the Desert Kings</option>
                                                <option value="Council of the Marble Star">Council of the Marble Star</option>
                                                <option value="Rattlesnake Canyon">Rattlesnake Canyon</option>
                                                <option value="Promises, Promises!">Promises, Promises!</option>
                                                <option value="Expedition Outback">Expedition Outback</option>
                                                <option value="Windjammer">Windjammer</option>
                                            </select>
                                        </div>
                                        {/* <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div> */}
                                        <div className="col-sm-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagles Flight" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Submit" />
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">                    
                    <div className="row y-middle">                        
                        <div className="col-lg-12">
                            <div className="copyright text-lg-start text-center ">
                                <p className='text-center'>
                                ©2023 EAGLES FLIGHT INDIA. All Rights Reserved. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
