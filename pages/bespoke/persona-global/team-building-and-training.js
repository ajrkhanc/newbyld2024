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
                <title>Team Building and Training</title>
                <meta name="description" content="Team Building and Training" />
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <div class="rs-breadcrumbs teammb">
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
                                <a href="/bespoke/persona-global/team-building-and-training">
                                    <span>Team Building and Training</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">                                
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                Team Building and Training
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
                                <h4 class="countertoph2 text-left font28">Trust is the Key to Team Success</h4>
                                <div class="heading-border-line left-style"></div>
                                <p class="mtt-40 justify mbb-10">
                                In teamwork, interpersonal conflict is the single most frequently cited reason for failure to meet deadlines as well as for miscommunication, stress, inefficiency, and low productivity.
                                </p>
                                    <p className='justify'>
                                    As business organizations grow in complexity, the need for cohesive work teams also grows. Persona GLOBAL<sup>®</sup>, Inc.’s Team Building and Training workshop lays a solid foundation of mutual understanding and Trust through a comprehensive People Skill program that helps teams reach their full potential.
                                </p>
                              
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img className="img100" src="/assets/img/tea1.png" />
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
                                        <li>Renewed team spirit.</li>
                                        <li>Renewed commitment to project goals and vision.</li>
                                        <li>Provides a foundation to support effective teamwork.</li>
                                        <li>Reduction of interpersonal tension and stress.</li>
                                        <li>Team members gain the ability to build trust by creating win/win situations.</li>
                                        <li>Team members learn strategies that lead to individual achievement and team success.</li>
                                        <li>Team members leave with an understanding of the strategies that lead to individual achievement and team success.</li>
                                        <li>Team members learn to better understand, respect, and respond to each other’s needs.</li>
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
                                    <h5 className='h5cc'>Establish participants’ case studies</h5>
                                    <ul className="estimate-info mtt-5">
                                        <li>Understand the difference between describing and judging behavior</li>
                                        <li>Learn how to recognize communication styles</li>
                                        <li>Learn stylistic needs of each communication style</li>
                                        <li>Examine cooperation and conflict among people of different styles</li>
                                    </ul>

                                    <h5 className='h5cc'>Trust and Empathy</h5>
                                    <ul className="estimate-info mtt-5">
                                        <li>The Persona Trust Model</li>
                                        <li>Learn the elements of trust</li>
                                        <li>Understand the importance of empathy and practice empathy projection</li>
                                        <li>See ourselves as others see us</li>
                                    </ul>
                                </div>                                
                            </div>
                        </div>

                        <div className="col-lg-6 md-pt-50">
                            <div className="">
                            <img src="/assets/img/tea2.png" alt="" />
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
