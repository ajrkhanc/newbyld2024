import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function MuseumCaper() {

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
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

    }


    return (
        <>
            <Head>
                <title>Beyond Coaching, Mentoring</title>
                <meta name="description" content="Beyond Coaching, Mentoring" />
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <div class="rs-breadcrumbs beyooo">
                <div class="container">
                    <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
                        <ul>
                            <li>
                                <a href="/">
                                    <span>Home</span>
                                </a>
                                <span class="separator">/</span>
                            </li>
                            <li>
                                <a href="/bespoke/persona-global">
                                    <span>Persona Global</span>
                                </a>
                                <span class="separator">/</span>
                            </li>
                            <li>
                                <a href="/bespoke/persona-global/beyond-coaching-mentoring">
                                    <span>Beyond Coaching, Mentoring</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">                                
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                Beyond Coaching, Mentoring
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="rs-about style4 bg21 mtt-60">
                <div class="container">
                    <div class="row y-middle">
                        <div class="col-lg-6">
                            <div class="sec-title3 mbb-35 text-left">
                                <h4 class="countertoph2 text-left font28">Championing for Performance Improvement!</h4>
                                <div class="heading-border-line left-style"></div>
                                <br></br>
                                <h5 className='h5cc'>The Ultimate Manager Performance Enhancing Process</h5>
                                <p class="mtt-10 text-justify mbb-10">
                                Mentoring is a process of building workplace relationships to empower individuals... to develop personal and professional abilities, achieve performance goals at increasingly higher levels, and make progress toward their career goals.
                                </p>
                                <p class='text-justify'>
                                    The Communication Style Profile is a tool to assess your preferences on communication styles, flexibility and empathy as seen by others. Participants will fill in one questionnaire and select a number of their colleagues to fill in another set for a computer generated feedback of the participant’s ability to understand the differences and needs among people. From that, participants will be given a personal Gameplan to formulate communication strategies for any mentee they want to influence.
                                </p>
                              
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img className="img100" src="/efassets/img/virtual-team-building-inner.png" />
                        </div>

                    </div>
                </div>
            </div>



            


            <div className="rs-achievement style1 relative ptt-40 pbb-40 personabg">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-6 md-pt-50">
                            <div className="">
                                <img src="/efassets/img/museum-caper-2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pr-0">
                            <div className='pll-20'>
                                <div className='rs-estimate'>
                                    <h4 className="countertoph2 text-left font26">The Key Benefits</h4>
                                    <h5 className='h5cc'>For Mentee</h5>
                                    <p>Take charge of his/her own learning Advance his/her career Improve his/her performance</p>
                                    <h5 className='h5cc'>For Mentor/Manager</h5>
                                    <p>Improve organizational performance Feel pride in accomplishments of mentees</p>
                                    <h5 className='h5cc'>For Organization</h5>
                                    <p>Achieve organizational goals Build a learning organization Grow the business</p>                                 
                                </div>                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="rs-achievement style1 relative ptt-40 pbb-40">
                <div className="container">
                    <div className="row rs-vertical-middle">                        
                        <div className="col-lg-6 pr-0">
                            <div className='onlyshd'>
                                <div className='rs-estimate'>
                                    <h4 className="countertoph2 text-left font26">Learning Outcomes</h4>
                                    
                                    <ul className="estimate-info mtt-5">
                                        <li>Gain awareness of the importance and benefits of mentoring as a supervisory/management role and responsibility</li>
                                        <li>Develop an understanding of...</li>
                                        <li>– The mentoring process and how to use it to “grow” people and organizations.</li>
                                        <li>The critical success factors/competencies for effective mentoring.</li>
                                        <li>Identify their own mentoring style and learn how to apply and adapt that style in different mentoring relationships.</li>
                                        <li>Learn specific tools and techniques to mentor their people more effectively.</li>
                                    </ul>
                                </div>                                
                            </div>
                        </div>

                        <div className="col-lg-6 md-pt-50">
                            <div className="">
                                <img src="/assets/img/beyo1.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    

            {/* <div className="rs-testimonial style4 bg16 ptt-30 pbb-70 personabg">
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
                                            <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Submit" />
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
            </div> */}


        </>
    )
}
