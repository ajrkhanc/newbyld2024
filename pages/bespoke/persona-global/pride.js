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
                <title>Pride</title>
                <meta name="description" content="pride" />
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <div class="rs-breadcrumbs prideb">
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
                                <a href="/bespoke/persona-global/pride">
                                    <span>PRIDE</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">                                
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                PRIDE
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
                                <h4 class="countertoph2 text-left font28">PRIDE</h4>
                                <div class="heading-border-line left-style"></div>
                                <p class="mtt-40 text-justify mbb-10">
                                PRIDE is a first-class approach to team building that is enjoyable, comprehensive, and cost-effective.
                                </p>
                                    <p className='text-justify'>
                                    PRIDE is divided into five categories corresponding to the key requirements for team and individual development. PRIDE training builds skills around these core concepts and can easily be integrated into existing quality and productivity initiatives or PRIDE can be the basis for those efforts.
                                </p>
                              <h5 className='h5cc'>The PRIDE Methodology are:</h5>
                              <ol>
                                <li>Group Exercises</li>
                                <li>Individual Exercises</li>
                                <li>Discussions, Brief Lectures, and Role Playing</li>
                              </ol>
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
                                    <h4 className="countertoph2 text-left font26">PRIDE FUNDAMENTALS</h4>
                                    <h5 className='h5cc'>Purpose</h5>
                                    <ul className="estimate-info mtt-5">
                                        <li>Pyramid of Success</li>
                                        <li>The Chain of Customers</li>
                                        <li>Customer Requirements</li>
                                        <li>Performance Measurements</li>
                                        <li>The Visual Workplace</li>
                                    </ul>

                                    <h5 className='h5cc'>Recognition</h5>
                                    <ul className="estimate-info mtt-5">
                                        <li>Positive Reinforcement</li>
                                        <li>Types of Recognition</li>
                                        <li>Making Reinforcement Effective</li>
                                        <li>Giving Recognition</li>
                                        <li>Job Enrichment</li>
                                        <li>Self-Management</li>
                                    </ul>
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
                            <div className=''>
                                <div className='rs-estimate'>
                                    <h5 className="h5cc">Influence</h5>
                                    <ul className="estimate-info mtt-5">
                                        <li>Factors Promoting High Performance Teams</li>
                                        <li>Group Influence</li>
                                        <li>Cooperation vs. Competition</li>
                                        <li>Giving and Receiving Feedback</li>
                                        <li>Conflict Management</li>
                                    </ul>

                                    <h5 className="h5cc">Development</h5>
                                    <ul className="estimate-info mtt-5">
                                        <li>Goal Setting and Continuous Improvement</li>
                                        <li>Team Development</li>
                                        <li>Personal Development</li>
                                        <li>Customer-focused Continuous Improvement System</li>
                                        <li>Problem Solving</li>
                                        <li>Decision Making</li>
                                    </ul>
                                    <h5 className="h5cc">Energy</h5>
                                    <ul className="estimate-info mtt-5">
                                        <li>Team Building Meeting</li>
                                        <li>Conducting Meetings</li>
                                        <li>Maintaining Performance</li>
                                    </ul>
                                </div>                                
                            </div>
                        </div>

                        <div className="col-lg-6 md-pt-50">
                            <div className="">
                                <img src="/assets/img/pri1.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="rs-achievement style1 relative ptt-40 pbb-40 personabg">
                <div className="container">
                    <div className="row rs-vertical-middle">
                    <div className="col-lg-6 md-pt-50">
                            <div className="">
                                <img src="/assets/img/pri2.png" alt="" />
                            </div>
                        </div>
                    <div className="col-lg-6 pr-0">
                            <div className=''>
                               
                                <div className='rs-estimate'>
                                <h5 className="h5cc">The Key Benefits</h5>
                                    <ul className="estimate-info mtt-5">
                                        <li>Make teams and individuals learn more effective</li>                                        
                                        <li>Enhance Productivity</li>
                                        <li>Build internal and external customer relationships</li>
                                        <li>Improve customer service and satisfaction</li>
                                        <li>Get bottom-line results in less time with less waste and stress</li>
                                    </ul>
                                   
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
                            <div className=''>
                               
                                <div className='rs-estimate'>
                                <h5 className="h5cc">Learning outcomes</h5>
                                    <ul className="estimate-info mtt-5">
                                        <li>Easy to implement process to empower the front-line to improve their team’s productivity</li>                                        
                                        <li>Strategy to get people involved and committed to improving quality and performance throughout your organization</li>
                                        <li>Framework for integrating your company’s various quality, service, and productivity initiatives and avoid the “program of the week” phenomenon</li>
                                        <li>Way to directly link competitive strategy to the day-to-day activities of every front-line employee</li>
                                        <li>Methods to measure performance to ensure every team member knows how to meet customer requirements</li>
                                        <li>Problem Solving and goal setting skills to ensure continuous improvement of products and services</li>
                                        <li>Way to assess team development progress in your organization</li>
                                        <li>Self-direction techniques to develop the capabilities of each individual team member</li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </div>                        
                        <div className="col-lg-6 md-pt-50">
                            <div className="">
                                <img src="/assets/img/pri3.png" alt="" />
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
