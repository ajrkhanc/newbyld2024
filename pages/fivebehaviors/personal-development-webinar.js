import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function FIveBWorkshop(){

    const FiveBPersonalD = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/everythingdisc/wp-json/contact-form-7/v1/contact-forms/258/feedback');
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
        xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +  
            "&Organization=" + event.target.Organization.value +
            "&designation=" + event.target.designation.value +
            "&intrestin=" + event.target.intrestin.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value +       
            "&referredby=" + event.target.referredby.value)
    }

   
    return(
        <>
          <Head>
            <title>Personal Development Webinar - Five Behaviors</title>
            <meta name="description" content="Bring success to your teams by upskilling each individual of your team with The principles of The Five Behaviors® The Five Behaviors® Personal Development Date: 15th July, 2022 Time: 3 PM – 4 PMActivate Your Team’s Potential The Five Behaviors® Personal Development solution teaches individuals to become better teammates by integrating Patrick Lencioni’s"/> 
          </Head>

          <div className="fivebgericlp ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-7 col-sm-12">
                            <div className="content-wrap">                                
                                <h2 className="colorw">Bring success to your teams by upskilling each individual of your team with The principles of The Five Behaviors<sup>®</sup></h2>
                                <h3 className="colorw">Five Behaviors<sup>®</sup> Personal Development</h3>
                                <h3 className="colorw">Date: 02nd August, 2023 Time: Time: 3 PM – 4 PM</h3>                                
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="bannerform">                            
                            <p className='mbb-10'>Looking for quicker assistance? Fill in your details and get a call back within 24 working hours.</p>
                            <form id="contactForm" className='clientcornner' onSubmit={FiveBPersonalD}>                                       
                                    <div className="row">
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="Organization" placeholder="Organization*" required />
                                        </div>

                                        <div className="col-md-12 mb-12">
                                            <input type="text" name="designation" placeholder="Designation" />
                                        </div>
                                        <div className="col-md-12 mb-12">
                                            <select name="intrestin" required>
                                                <option value="">Interested In*</option>
                                                <option value="Personal Development Webinar 2nd August, 2023">Personal Development Webinar 2nd August, 2023</option>
                                            </select>
                                        </div>

                                        <div className="col-md-12 mb-12 d-none">
                                            <select name="referredby" required>
                                                <option value="Email">Email</option>                                                
                                            </select>
                                        </div>
                                        
                                        <div className="col-md-6 mb-12 d-none">
                                            <input type="text" name="leadsquared_mx_Business_Entity" placeholder="The Five Behaviors" value="The Five Behaviors" required />
                                        </div>
                                       
                                        <div className="col-lg-12 mb-12">
                                        <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font34">Activate Your Team’s Potential</h4>
                        <p className='mall5'>
                        The Five Behaviors<sup>®</sup> Personal Development solution teaches individuals to become better teammates by integrating Patrick Lencioni’s model at the organizational level. The goal is to completely redefine teamwork and collaboration.
                        </p>
                        <p className='mall5'>
                        Personal Development is designed specifically to work for individuals, participants do not need to be part of the same team. Rather, participants can carry the takeaways of this program from one team to the next, enabling a culture of teamwork. Learners at all levels of an organization can benefit from this program and adopt its powerful principles, shape behaviors, and create a common language that empowers people to rewrite what it means to work together.
                        </p>
                        
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <img src="/5bassets/img/pdw-calander.jpg" alt=""/>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>

            <div className="rs-about style4 bg21 pt-70 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6">
                        <div className="sec-title3 rs-estimate">
                        <h4 className="countertoph2 text-left font34">Key Takeaways:</h4>
                        <ul className='estimate-info mtt-5'>
                            <li>Better understand themselves and their roles</li>
                            <li>Scales a culture of teamwork and collaboration</li>
                            <li>Fosters communication</li>
                            <li>Helps individual better understand, internalize and apply principles The Five Behaviours model at an Individual level</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                        <img className="rounded" src="/5bassets/img/fivebpd2.png" alt="images"/>
                        
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}
