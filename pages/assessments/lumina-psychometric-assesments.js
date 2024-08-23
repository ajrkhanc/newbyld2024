import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function LuminaPsychomentricAssesments(){

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/55/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                        window.location.href = "/thank-you"
                     }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("fname=" + event.target.fname.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&company=" + event.target.company.value +
            "&designation=" + event.target.designation.value +
            "&intrestedin=" + event.target.intrestedin.value +
            "&wheredidyoucome=" + event.target.howdidyouknowaboutus.value )

    }

    return(
        <>
          <Head>
            <title>Lumina Psychometric Assessments | Assessments | BYLD Group</title>
            <meta name="description" content="It is a Psychometric Analysis tool with information about the Lumina Mandala, explaining the key strengths and weaknesses of an individual. To know more, check out the page."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/lumina-psychometric-assesments.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div id='register' class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">

                       <div class="col-sm-6 rightsides">
                       <div className="sec-title3 mbb-35 text-left rs-estimate">                            
                            <p className='mtt-30'>
                            <i>It is a cutting-edge professional development tool that provides employees with an opportunity to analyze their personalities by giving clear and jargon-free insights. This psychometric tool aims at transforming organizations through transforming their people.</i>
                            </p>
                            <p><i>Lumina Spark facilitates every individual with their special Lumina Mandala which explains their key strengths and vulnerabilities in the simplest way possible.</i></p>
                            <h4 className="countertoph2 text-left">How does it help?</h4>                            
                            <ul className='estimate-info mtt-5'>
                                <li>Lumina Spark helps employees to identify and work upon their positive and negative traits</li>
                                <li>Learners unlock better business benefits</li>
                                <li>Employees become more influential with external clients, colleagues, and stakeholders</li>
                                <li>Better, more cordial work relationships which enhance the work culture</li>
                            </ul>
                        </div>                        
                       </div>

                       <div className="col-md-6 pr-33 md-pr-15 md-mb-50">
                            <div className="images-part parnernetworkheight">
                            <div className="bannerform">
                            <p>Fill in the form below with your interest to work as a sales/business consultant with us and will connect/call back at the earliest.</p>
                            <form id="contact-form" className='clientcornner' onSubmit={registerUser}>                                         
                                    <div className="row">
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="fname" placeholder="Name*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-lg-6 mb-12">
                                        <input type="text" name="company" placeholder="Company Name*" required />                                            
                                        </div>

                                        <div className="col-lg-6 mb-12">
                                        <input type="text" name="designation" placeholder="Designation*" required />                                            
                                        </div>

                                        <div className="col-lg-12 mb-12">
                                            <select name="intrestedin" required>
                                                <option value="">Pick up any Slot*</option>
                                                <option value="23rd August 2023: 03:00 PM - 04:00 PM">23rd August 2023: 03:00 PM - 04:00 PM</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-lg-12 mb-12">
                                            <select name="howdidyouknowaboutus" required>
                                                <option value="">How did you know about us?</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>                                                
                                            </select>
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


            {/* <div class="rs-process style1 pt-100 pb-100 md-pt-70 md-pb-70">                
                <div class="container">
                    <div class="row y-middle">
                    </div>
                </div>
                <div class="container custom2">
                    <div class="process-effects-layer">
                        <div class="row">
                          <div className='col'></div>
                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <a className='hccs' href='/everythingdisc'>
                                        <div class="number-image">
                                            <span>DiSC<sup>®</sup></span>
                                        </div>
                                        
                                        </a>                                        
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/assessments/talentsmart-eq-assesments'>
                                        <div class="number-image">
                                            <span>TalentSmart EQ Assessments</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col'></div>

                        </div>
                    </div>
                </div>
            </div> */}

<section className='ptt-20 pbb-20'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                    <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center font30">To get more insights, register for any of the upcoming sessions below:</h4>                        
                    </div>
                    </div>
                    <div className='clearfix'></div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar 23rd August 2023</span>
                            </div>
                            
                            <div className='eventbottom'>
                                <h3 className='hhd'>Lumina Spark</h3>
                                <h5>Time: 03:00 PM - 04:00 PM</h5>
                                <a className="eventbtn" href='#register'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 d-none'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar 15th February 2023</span>
                            </div>
                            
                            <div className='eventbottom'>
                                <h3 className='hhd'>BYLD Partner Network Briefing</h3>
                                <h5>Time: 11:00 PM - 12:00 PM</h5>
                                <a className="eventbtn" href='#'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
            
        </>
    )
}
