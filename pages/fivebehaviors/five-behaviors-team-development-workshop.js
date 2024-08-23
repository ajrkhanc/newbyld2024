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
        xhttp.open("Post", 'https://byldgroup.in/everythingdisc/wp-json/contact-form-7/v1/contact-forms/262/feedback');
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
            <title>Five Behaviors Team Development Workshop - Five Behaviors</title>
            <meta name="description" content="Develop Cohesive Teams to Drive Desirable Results Five Behaviors<sup>®</sup> Team Development Date: 25th February, 2022 Time: 3 PM – 5 PM Do you want to build high-performing teams? Do you want your people to become self-organized? You have landed at the right place. Activate Your Team’s PotentialThe Five Behaviors<sup>®</sup> solutions can help you activate your […]"/> 
          </Head>

          <div className="fivebgericlp ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-7 col-sm-12">
                            <div className="content-wrap">                                
                                <h2 className="colorw">Develop Cohesive Teams to Drive Desirable Results</h2>
                                <h3 className="colorw">Five Behaviors<sup>®</sup> Team Development</h3>
                                <h3 className="colorw">Date: 25th February, 2022 Time: 3 PM – 5 PM</h3>
                                <h3 className="colorw font18">Do you want to build high-performing teams? Do you want your people to become self-organized? You have landed at the right place.</h3>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="bannerform">                            
                            <p className='mbb-10'>Looking for quicker assistance? Fill in your details and get a call back within 24 working hours.</p>
                            <form id="contact-form" className='clientcornner'>                                         
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
                                                <option value="25th February, 2022 Five Behaviors® Team Development">25th February, 2022 Five Behaviors® Team Development</option>                                                
                                            </select>
                                        </div>

                                        <div className="col-md-12 mb-12">
                                            <select name="intrestin" required>
                                                <option value="">Referred By*</option>
                                                <option value="Email">Email</option>                                                
                                            </select>
                                        </div>
                                        
                                        <div className="col-md-6 mb-12 d-none">
                                            <input type="text" name="leadsquared_mx_Business_Entity" placeholder="The Five Behaviors" value="The Five Behaviors" required />
                                        </div>
                                       
                                        <div className="col-lg-12 mb-12">
                                        <input className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
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
                        The Five Behaviors<sup>®</sup> solutions can help you activate your team’s ability to drive results through cohesive teamwork.
                        </p>
                        <p className='mall5'>
                        This workshop will help individuals learn the skills of teamwork. And it will eventually lead intact teams to gain the know-how of working better together.
                        </p>
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left">What will you get?</h4>
                        <ul className='estimate-info mtt-5'>
                            <li>The Five Behaviors assessment to identify your personality type</li>
                            <li>Insights Delivered in a Personalized Profile</li>
                            <li>Tools to Continue the Teams Development</li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <img src="/5bassets/img/calander.jpg" alt=""/>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>

            <div className="rs-about style4 bg21 pt-70 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-7">
                        <div className="sec-title3 rs-estimate">
                        <h4 className="countertoph2 text-left font34">Powerful Facilitation Experience</h4>
                        <ul className='estimate-info mtt-5'>
                            <li>Designed for in-person and virtual experiences</li>
                            <li>A one-day or three-day session that can be customized to fit specific goals or timeframe</li>
                            <li>Small and medium-sized intact teams of about 5-12 people</li>
                            <li>Designed for teams with a 6-week minimum tenure</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-img">
                        <img className="rounded-circle" src="/5bassets/img/fiveworkshop.png" alt="images"/>
                        <div className="animations one">
                            <img className="dance2" src="/5bassets/img/1.png" alt="About"/>
                        </div>
                        <div className="animations two">
                            <img className="scale" src="/5bassets/img/2.png" alt="About"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}
