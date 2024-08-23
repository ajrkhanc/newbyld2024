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
                <title>Transition to Management</title>
                <meta name="description" content="Transition to Management" />
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <div class="rs-breadcrumbs ajcba">
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
                                <a href="/bespoke/persona-global/transition-to-management">
                                    <span>Transition to Management</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">                                
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                Transition to Management
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
                                <h4 class="countertoph2 text-left font28">Essential Skills for the Newly Appointed Manager</h4>
                                <div class="heading-border-line left-style"></div>
                                <p class="mtt-40 text-justify mbb-10">
                                Many new managers, when placed in a position of authority over former peers, need to know how to handle this unfamiliar situation. They need to learn how to recognize the various work styles of those they manage in order to tailor their leadership approach accordingly. Persona GLOBAL®, Inc.’s Transition to Management workshop gives them the skills necessary to fulfill their new responsibilities with confidence.
                                </p>
                                <h5 className='h5cc'>The Manager as a Leader</h5>
                                    <p className='text-justify'>
                                    Employees only produce quality work and give excellent service when they are inspired to do so through effective leadership. While effective managers keep the system on an even keel and headed in the right direction, effective leaders provide the dynamics to make new things happen.
                                </p>
                              
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img className="img100" src="/assets/img/commc.png" />
                        </div>

                    </div>
                </div>
            </div>



            


            <div className="rs-achievement style1 relative ptt-40 pbb-40 personabg">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-6 md-pt-50">
                            <div className="">
                                <img src="/assets/img/comm.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pr-0">
                            <div className='pll-20'>
                                <div className='rs-estimate'>
                                    <h4 className="countertoph2 text-left font26">The Key Benefits</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li>Examine the importance of Vision and Communication in effective Leadership.</li>
                                        <li>Discover how and why people do or do not communicate effectively.</li>
                                        <li>Learn to see yourself as others perceive you and identify your management style.</li>
                                        <li>Learn how to build trust in your communications with subordinates as a basis for teamwork and cooperation.</li>
                                        <li>Practice applying flexibility in problem solving to develop winning solutions that support teamwork.</li>
                                        <li>Build increased awareness of your behavior, needs and values, and how these impact your effectiveness in leading and managing others.</li>
                                        <li>Develop a personal plan for maximizing leadership and management effectiveness by:</li>                                        
                                    </ul>
                                    <p className='mbb-0'>– Learning what effective leadership is.</p>
                                        <p className='mbb-0'>– Assessing your current strengths.</p>
                                        <p className='mbb-0'>– Identifying areas of opportunity for improvement.</p>
                                        <p className='mbb-0'>– Completing the Manager as a Leader</p>
                                        <h5 className='h5cc'>Development:</h5>
                                        <ul className="estimate-info mtt-5">
                                            <li>Plan to identify specific activities and behaviors that will result in increased leadership effectiveness.</li>
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
                                    <h4 className="countertoph2 text-left font26">Learning Outcomes</h4>
                                    
                                    <ul className="estimate-info mtt-5">
                                        <li>Knowledge of your communication style as others perceive you.</li>
                                        <li>Your strengths and weaknesses as a trust builder and leader.</li>
                                        <li>A systematic approach to understanding and managing others.</li>
                                        <li>A new plan for interacting with colleagues, especially those with whom you most need a more effective approach.</li>
                                        <li>A proven leadership process you can use continually to deal with anyone—especially those difficult people in your life.</li>
                                    </ul>
                                </div>                                
                            </div>
                        </div>

                        <div className="col-lg-6 md-pt-50">
                            <div className="">
                                <img src="/efassets/img/museum-caper-2.png" alt="" />
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
