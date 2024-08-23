import Head from 'next/head'

export default function WebinarsAndProgramExperience() {

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/15/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.Designation.value +
            "&leadsquared-mx_States=" + event.target.Location.value +
            "&leadsquared-mx_Showed_Interest_in=" + event.target.leadsquared_mx_Showed_Interest_in.value +
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.QuestionsComments.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

    }

    return (
        <>
            <Head>
                <title>Webinars and Program Experience - BYLD Group</title>
                <meta name="description" content="Batches till 20th April 2022 Crucial Life Changing Skills Batches till 20th April 2022 Reserve Your Seat Batches till 29th April 2022 Blanchard India Webinars Batches till 29th April 2022 Reserve Your Seat May 4th, 2022Trapologist at WorkTM Webinar 4th May 2022 Reserve Your Seat Webinar May 6th, 2022Five Behaviours Team Development Webinar 6th May… Continue reading Webinars and Program Experience" />
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>
            <div class="rs-breadcrumbs webinarsbg">
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
                                <a href="/webinars-and-program-experience">
                                    <span>Webinars</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-8'>
                            <div class="breadcrumbs-inner">
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    Register For Your Complimentary <br></br>Virtual Events
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='ptt-60 pbb-60 positionrelative'>
                <div className='container'>
                    <div className='row zindx'>



                        {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar January 5th, 2024</span>
                                </div>
                                <div className='eventbottom'>
                                <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                    <h3>Getting Things Done®</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar January 19th, 2024</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                <h3>Crucial Influence®</h3>
                                <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}

                        {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar January 30th, 2024</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 4.00 PM to 5.00 PM</h4>
                                <h3>Crucial Life Changing Skills Webinar</h3>
                                <a className="eventbtn" href='/cruciallifechangingskills/webinars/'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}
                        {/* 
                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar February 5th, 2024</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                <h3>Crucial Conversations for Accountability®</h3>
                                <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}


                        {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar January 30th, 2024</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                <h3>Crucial Conversations for Accountability®</h3>
                                <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}

                        {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar February 13th, 2024</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className="eventtitlec">Time: 3:00 PM - 4:00 PM</h4>
                                    <h3>Trapologist at Work®</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

                        {/* 
                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar February 20th, 2024</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                <h3>Crucial Influence®</h3>
                                <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}



                        {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar - Friday, April 14th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 11:00 AM -12:00 PM</h4>
                                <h3>Virtual Training Apollo3</h3>
                                <a className="eventbtn" href='/jenson-8'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar Friday, April 14th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 11:00 AM -12:00 PM</h4>
                                <h3>Harnessing Creative Intelligence</h3>
                                <a className="eventbtn" href='/tirian-lp'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}







                        {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar 8th March 2024</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 3:00 pm - 4:00 pm</h4>
                                <h3>Crucial Conversations® For Mastering Dialogue</h3>
                                <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}




                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 18th March 2024</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className="eventtitlec">Time: 4:00 PM - 5:00 PM</h4>
                                    <h3>Getting Things Done®</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>


                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar May 31st, 2024</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className="eventtitlec">Time: 3:00 PM - 4:00 PM</h4>
                                    <h3>Trapologist at Work®</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>



                        {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 14th March 2024</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className="eventtitlec">Time: 4:00 PM - 5:00 PM</h4>
                                    <h3>Getting Things Done®</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}


                        {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 2nd August, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className="eventtitlec">Time: 3:00 PM - 4:00 PM</h4>
                                    <h3>Five Behaviour Personal Development</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 23rd August, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className="eventtitlec">Time: 4:00 AM 5:00 PM</h4>
                                    <h3>Inside Out Coaching</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 23rd August, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className="eventtitlec">Time: 11:00 AM - 12:00 AM</h4>
                                    <h3>Lumina Spark</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}



                        {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Virtual Course Preview - November 9th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className="eventtitlec">Time: 4:00 PM - 5:00 PM</h4>
                                    <h3>BeSpoke Solutions</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Virtual Course Preview - November 30th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className="eventtitlec">11:00 AM to 12:00 PM</h4>
                                    <h3>Crucial Life Changing Skills</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Virtual Course Preview - December 5th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className="eventtitlec">Time: 4:00 PM - 5:00 PM</h4>
                                    <h3>Crucial Life Changing Skills</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}



                        {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar March 8th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                <h3>Eagle’s Flight Executive Briefing</h3>
                                <a className="eventbtn" href='/eaglesflightindia/ef-generic-lp'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}


                    </div>
                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>
                </div>
            </section>

            <div id="Register" class="homecon ptt-60">
                <div className="container">

                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Register Now</h2>
                        </div>
                    </div>
                    <div class="row y-middle">

                        <div class="col-lg-5 md-mb-50">
                            <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
                                <img src="/assets/img/homeb/contactl.png" alt="Contact" />
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="contact-wrap">
                                <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                                    <form id="contact-form" className='clientcornner ptt-5 pbb-20' onSubmit={registerUser}>
                                        <div className="row">

                                            <div className="col-sm-6 mb-12">
                                                <input type="text" className='borrr' name="name" placeholder="Your Name*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input type="email" className='borrr' name="email" placeholder="Work Email*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input type="text" className='borrr' name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input type="text" className='borrr' name="organization" placeholder="Organization*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input type="text" className='borrr' name="Designation" placeholder="Designation*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input type="text" className='borrr' name="Location" placeholder="Location*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <select name="leadsquared_mx_Showed_Interest_in" required>
                                                    <option value="">Pick up any Slot*</option>
                                                    {/* <option value="Everything DiSC Work Productive Conflict, 5th July, 2023">Everything DiSC Work Productive Conflict, 5th July, 2023</option>                                               
                                                <option value="Everything DiSC Agile EQ, 19th July, 2023">Everything DiSC Agile EQ, 19th July, 2023</option> */}
                                                    {/* <option value="Five Behaviour Personal Development, 2nd August, 2023">Five Behaviour Personal Development, 2nd August, 2023</option> */}
                                                    {/* <option value="Inside Out Coaching, 23rd August 2023">Inside Out Coaching, 23rd August 2023</option>
                                                <option value="Lumina Spark, 23rd August, 2023">Lumina Spark, 23rd August, 2023</option> */}
                                                    <option value="Getting Things Done® – January 5th, 2024">Getting Things Done® – January 5th, 2024</option>
                                                    <option value="Crucial Influence® – January 5th, 2024">Crucial Influence® – January 5th, 2024</option>
                                                    <option value="Crucial Conversations for Accountability® – January 30th, 2024">Crucial Conversations for Accountability® – January 30th, 2024</option>
                                                    <option value="Crucial Influence® – February 20th, 2024">Crucial Influence® – February 20th, 2024</option>
                                                    <option value="Crucial Conversations® For Mastering Dialogue – March 8th, 2024">Crucial Conversations® For Mastering Dialogue – March 8th, 2024</option>
                                                    <option value="Getting Things Done® – March 14th, 2024">Getting Things Done® – March 14th, 2024</option>
                                                    <option value="Trapologist at Work® – February 13th, 2024">Trapologist at Work® – February 13th, 2024</option>
                                                    <option value="Trapologist at Work® – May 31st, 2024">Trapologist at Work® – May 31st, 2024</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <select name="referredby" required>
                                                    <option value="">Referred By*</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Google Search">Google Search</option>
                                                    <option value="Reference">Reference</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6 mb-12 d-none">
                                                <select name="leadsquared_mx_Business_Entity" required>
                                                    <option value="BYLD Group">BYLD Group</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <textarea className="from-control" name="QuestionsComments" placeholder="Questions/Comments:"></textarea>
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input id="submitbuttonform" className="clientcornnerbtn width150" type="submit" value="Get in Touch" />
                                            </div>
                                            <p id="showlabel" style={{ display: "none" }}></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-2'></div>

                    </div>
                </div>
            </div>
        </>
    )
}
