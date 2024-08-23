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
                <title>Best Team Activities Virtually for Communication- Museum Caper</title>
                <meta name="description" content="If you want to develop your communication skills, then you need outdoor team-building activities. You’ll do great with these team activities virtually." />
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <div class="rs-breadcrumbs leadershipbrud">
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
                                <a href="/bespoke/persona-global/the-persuasive-salesperson">
                                    <span>The Persuasive Salesperson™</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">                                
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    The Persuasive Salesperson™
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
                            <div class="sec-title3 mbb-35 text-left onlyshd">
                                <h4 class="countertoph2 text-left font28">The Persuasive Salesperson™ (PS)</h4>
                                <div class="heading-border-line left-style"></div>
                                <p class="mtt-40 justify mbb-10">
                                    The Persuasive Salesperson™ (PS) is a 16-hour, skills training methodology, which gives participants a lifelong tool for communicating more powerfully and persuasively in different types of business and professional situations.</p>
                                    <p className='justify'>
                                    The methodology is based on Persona’s Social Styles and Trust Building Models, proven over the past 37 years to be one of the world’s most effective communication skills training programs.
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
                            <div className=''>
                                <div className='rs-estimate'>
                                    <h4 className="countertoph2 text-left font26">Key Benefits</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li><b>ACTIONABLE:</b> Emphasis is on acquiring immediately usable skills rather than learning theory.</li>
                                        <li><b>EASILY UNDERSTANDABLE:</b> A simple practical methodology that keys on existing personal and work experience.</li>
                                        <li><b>LONG-TERM BENEFIT:</b> The Gameplanning Software can be applied repeatedly to future communication challenges.</li>
                                        <li><b>MULTI-PURPOSE:</b> Skills are effective in both business and personal settings.</li>
                                        <li><b>TAILORED PROGRAMMING:</b> The Gameplanning Software can be integrated to incorporate the benefits of a company’s specific products and services.</li>
                                        <li><b>THOROUGH DOCUMENTATION:</b> Reports and guides give complete feedback and information.</li>
                                        <li><b>UNIVERSAL TRUTHS:</b> Principles and skills learned are applicable in all cultures.</li>
                                        <li><b>WORK RELATED:</b> Participants address real-life challenges by developing an actionable plan to communicate more effectively with a specific individual at work.</li>
                                    </ul>
                                </div>                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="rs-achievement style1 relative ptt-40 pbb-40">
                <div className="container">
                    <div className="row">
                        <div className='col-sm-12 sec-title3 mbb-35 text-center'>
                        <h4 class="countertoph2 font28">Learning Outcomes</h4>
                        <div class="heading-border-line center-style"></div>
                        </div>
                    <div className="col-lg-6 pr-0">
                            <div className=''>
                               
                                <div className='rs-estimate'>
                                <h4 className="countertoph2 text-left font26">Effective Salesperson at the interpersonal level</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li>Understanding the importance of people skills, principles of good communication and cooperation.</li>                                        
                                    </ul>
                                    <h4 className="countertoph2 text-left font26">Communication Style Basics</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li>Introduction to Persona’s four style concepts – Controlling, Promoting, Facilitating, and analytical</li>                                        
                                    </ul>
                                    <h4 className="countertoph2 text-left font26">How to Build Trust</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li>The Persona Trust Model</li>
                                        <li>How people perceive you as a trust builder</li>
                                        <li>Working with individuals and teams to achieve the optimum results</li>
                                    </ul>
                                    <h4 className="countertoph2 text-left font26">Empathy, Flexibility & Defensiveness</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li>Change and defensiveness – how to respond to defensive behavior and turn it around</li>
                                        <li>Interpersonal flexibility</li>
                                        <li>How to build empathy and flexibility with others.</li>
                                    </ul>

                                    
                                </div>
                            </div>
                        </div>                        
                        <div className="col-lg-6 md-pt-50">
                            <div className="rs-estimate">
                            <h4 className="countertoph2 text-left font26">Selling Process</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li>A step-by-step analysis of the sales process.</li>
                                        <li>Developing goals and appropriate actions for each stage of the sales cycle.</li>
                                        <li>Applying the knowledge of communication styles to the sales process.</li>
                                    </ul>

                                    <h4 className="countertoph2 text-left font26">Role Playing–Preparing for that Difficult Client</h4>
                                    <p>Introduction of each participant’s individual Gameplan:</p>
                                    <ul className="estimate-info mtt-5">
                                        <li>Reviewing the Gameplan’s step-by-step approach and effectively communicating with your targeted key account or difficult client.</li>
                                        <li>Role playing with participants on applying improved sales skills.</li>
                                        <li>Action planning for continued application of the skills acquired for your most important customers.</li>
                                    </ul>
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
