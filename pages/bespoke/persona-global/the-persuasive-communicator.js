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
                <title>The Persuasive Communicator</title>
                <meta name="description" content="The Persuasive Communicator" />
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <div class="rs-breadcrumbs ajb">
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
                                <a href="/bespoke/persona-global/the-persuasive-communicator">
                                    <span>The Persuasive Communicator</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">                                
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                The Persuasive Communicator<sup>®</sup>
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
                                <h4 class="countertoph2 text-left font28">The Persuasive Communicator<sup>®</sup></h4>
                                <div class="heading-border-line left-style"></div>
                                <p class="mtt-40 justify mbb-10">
                                The Persuasive Communicator<sup>®</sup> (PC) is a 16 hour workshop presenting lifelong skills enabling delegates to communicate effectively, become more influential and ultimately become successful persuasive communicators!
                                </p>
                                    <p className='justify'>
                                    This robust workshop provides delegates with an intuitive, practical system for dealing with all people, especially those “difficult or uncooperative people” whom they have not been able to influence yet.
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
                                    <ul className="estimate-info mtt-5">
                                        <li><b className='bup'>Actionable:</b> Emphasis is on acquiring immediately usable skills rather than learning theory.</li>
                                        <li><b className='bup'>Easily understandable:</b> A simple practical methodology that keys on existing personal and work experience.</li>
                                        <li><b className='bup'>Long-term benefit:</b> The Gameplanning Software either online or with the iPad application can be applied repeatedly to future communication challenges.</li>
                                        <li><b className='bup'>Multi-purpose:</b> Skills are effective in both business and personal settings.</li>
                                        <li><b className='bup'>Tailored programming:</b> The Gameplanning Software can be integrated to incorporate the benefits of a company’s specific products and services. A unique capability.</li>
                                        <li><b className='bup'>Thorough documentation:</b> Reports and guides give complete feedback and information.</li>
                                        <li><b className='bup'>Universal truths:</b> Principles and skills learned are applicable in all cultures.</li>
                                        <li><b className='bup'>Work related:</b> Participants address real-life challenges by developing an actionable plan to communicate more effectively with a specific individual at work.</li>
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
                            <div className='onlyshd'>
                                <div className='rs-estimate'>
                                    <h4 className="countertoph2 text-left font26">The Persuasive Communicator Methodology</h4>
                                    <p>
                                    The ideal workshop size is 12-16 participants in order to promote maximum interaction and learning. Since each participant has a personal case study subject, the methodology is appropriate for both in-company and public/open programs.
                                    </p>
                                    <h4 className="countertoph2 text-left font26">Value Added</h4>
                                    <p>
                                    One exclusive benefit for participating in The Persuasive Communicator® workshop is the possibility to gain access to Persona GLOBAL’s proprietary expert system – the Gameplanning software.
                                    </p>
                                </div>                                
                            </div>
                        </div>

                        <div className="col-lg-6 md-pt-50">
                            <div className="">
                                <img src="/assets/img/ajc1.png" alt="" />
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
                                <img src="/assets/img/ajc2.png" alt="" />
                            </div>
                        </div>
                        
                    <div className="col-lg-6 pr-0">
                            <div className=''>
                               
                                <div className='rs-estimate'>
                                <h4 className="countertoph2 text-left font26">Unique Value Proposition for Trainers and Consultants</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li><b>Easy-to-understand:</b> Leader Guide and PowerPoint program gives the trainer full support in facilitating the workshop.</li>                                        
                                        <li><b>GLOBAL reach:</b> Online Assessment Center enables 24/7 data collection and processing over the internet allowing distribution of feedback reports in multiple languages.</li>
                                        <li><b>Track record:</b> The Persuasive CommunicatorTM methodology has been tested and proven for more than 30 years in multiple cultures.</li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </div>                        
                       
                        

                    </div>
                </div>
            </div>

            {/* <div className="rs-testimonial style4 bg16 ptt-30 pbb-70">
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
