import Head from 'next/head'

export default function JoinOurPartnerNetworkLP() {

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/75/feedback');
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
        xhttp.send("fname=" + event.target.fname.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&Occupation=" + event.target.occupation.value +
            "&wheredidyoucome=" + event.target.howdidyouknowaboutus.value +
            "&intrestedin=" + event.target.intrestedin.value)

    }

    return (
        <>
            <Head>
                <title>Join our Partner network - BYLD Group</title>
                <meta name="description" content="Welcome to BYLD Group! Join the BYLD Group Partner network, and become our business partner to maximize your growth opportunities. We are the largest group in South Asia offering HR and business productivity solutions for individuals, teams and organizations. Served 300 of 500 Fortune companies. Founded in 1998, backed by 1000+ years of accumulated professional… Continue reading Join our Partner network LP Ab Testing" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <section className='join55 jopn1 pbb-50 joinfont positionrelative'>
                <div className='container'>
                    <div className='row align-items-center zindx'>
                        <div className='col-sm-6 '>
                            <div className='BossBtn'>
                                {/* <h1>Become a BYLD Partner</h1>
                                <p>Join our Partner Community for Lucrative <br></br>Business Opportunities!</p> */}
                                <a href='https://us06web.zoom.us/meeting/register/tZEqcu-ppzsrH9eU9m-CWelLlBXNVTL3fJ-i#/registration'>Register Now</a>
                            </div>
                        </div>
                        {/* <div className='col-sm-6'>
                            <div>
                                <img src="/assets/img/img3.png" />
                            </div>
                        </div> */}
                        {/* <div className='col-sm-6'>
                            <div>
                                <h1>Become a BYLD Partner</h1>
                                <p>Join our Partner Community for Lucrative <br></br>Business Opportunities!</p>
                                <a href='#GetinTouch'>Register Now</a>
                            </div>
                        </div> */}
                        {/* <div className='BossBtn'>
                        <a href='#GetinTouch'>Be Your Own Boss</a>
                        </div> */}
                    </div>

                    <div className='clearfix'></div>
                    {/* <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/img99.png" />
                    </div> */}
                    {/* <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div> */}
                </div>
            </section>
            <section className='ptt-60 pbb-60 positionrelative'>
                <div className='container'>
                <div className='row mb--10'>
                    <div className='col-sm-12'>
                        <div class="sec-title3 text-center mb-30">
                            <h2 class="title color2 ncc">Our Upcoming Events</h2>
                            <div class="heading-border-line center-style"></div>
                        </div>
                    </div>
                </div>
                    <div className='row zindx'>


                         <div className='col-lg-12 col-md-6'>
                            <div className='eventsbox1'>
                                <div className='eventmiddle1'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Event 30th April 2024</span>
                                </div>
                                <div className='eventbottom1 mb-100'>
                                    <h4 className="eventtitlec">Time: 12:00 PM - 1:00 PM</h4>
                                    <h3 className=''>Why Data Integrity problems in Pharma and Healthcare Sectors are leadership and accountability issues?</h3>
                                    <h4 className="eventtitlec1">Speaker- MR. Sandeep Budhiraja</h4>

                                    <a className="eventbtn" href='#GetinTouch'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>







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
            <section className='join2 ptt-50 pbb-50 joinfont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='join2box'>
                                <h4>Promote New Technology Solutions in VR, Innovation, and Creativity</h4>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='join2box'>
                                <h4>Attain Financial Freedom</h4>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='join2box'>
                                <h4>No Franchise Fee</h4>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='join2box'>
                                <h4>Quick Onboarding</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       


            <section id='GetinTouch' className='jopn1 ptt-50 pbb-50 jooo5 joinfont homecon positionrelative'>
                <div className='container'>
                    <div className='row align-items-center zindx'>
                        <div className='col-sm-6'>
                            <div className='boxshd mtt-30'>
                                <div className="bannerform">
                                    <p className='formpp'>Fill in the form below with your interest to work as a sales/business consultant with us and will connect/call back at the earliest.</p>
                                    <form id="contact-form" className='clientcornner' onSubmit={registerUser}>
                                        <div className="row">
                                            <div className="col-lg-12 mb-12">
                                                <input type="text" class="borrr" name="fname" placeholder="Work Email/Email*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input type="email" class="borrr" name="email" placeholder="Work Email/Email*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input type="text" class="borrr" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input type="text" class="borrr" name="occupation" placeholder="Occupation*" required />
                                                {/* <select name="occupation" required>
                                                    <option value="">Occupation*</option>
                                                    <option value="HR Professional">HR Professional</option>
                                                    <option value="L & D Professional">L & D Professional</option>
                                                    <option value="Independent Consultant (Technical)">Independent Consultant (Technical)</option>
                                                    <option value="Trainer">Trainer</option>
                                                    <option value="Medical Professional">Medical Professional</option>
                                                    <option value="Software Engineer">Software Engineer</option>
                                                    <option value="Business Analyst">Business Analyst</option>
                                                    <option value="Consultant">Consultant</option>
                                                    <option value="Sales Representative">Sales Representative</option>
                                                    <option value="Lawyer">Lawyer</option>
                                                    <option value="Architect">Architect</option>
                                                    <option value="Project Manager">Project Manager</option>
                                                    <option value="Marketing Manager">Marketing Manager</option>
                                                    <option value="Others">Others</option>
                                                </select> */}
                                            </div>



                                            <div className="col-lg-12 mb-12">
                                                <select name="howdidyouknowaboutus" required>
                                                    <option value="">How did you know about us:</option>
                                                    <option value="Email">Email</option>
                                                    <option value="LinkedIn">LinkedIn</option>
                                                    <option value="Facebook">Facebook</option>
                                                    <option value="Instagram">Instagram</option>
                                                    <option value="Twitter">Twitter</option>
                                                </select>
                                            </div>

                                            <div className="col-lg-12 mb-12">
                                                <select name="intrestedin" required>
                                                    <option value="">Pick up any Slot*</option>                                                    
                                                    <option value="Event – 30th April 2024">Event – 30th April 2024</option> 
                                                </select>
                                            </div>

                                            <div className="col-lg-12 mb-12">
                                                <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Submit" />
                                            </div>
                                            <p id="showlabel" style={{ display: "none" }}></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='pll-50'>
                                <div class="wgl-image-animate">
                                    <div class="img-layer_image-wrapper move-rotate1">
                                        <div class="img-layer_item">
                                            <div class="img-layer_image">
                                                <img src="/assets/img/img-19.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="img-layer_image-wrapper move-rotate2">
                                        <div class="img-layer_item">
                                            <div class="img-layer_image">
                                                <img src="/assets/img/img-18.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="img-layer_image-wrapper move-rotate3">
                                        <div class="img-layer_item">
                                            <div class="img-layer_image">
                                                <img src="/assets/img/img-20.png" alt="img-20" />
                                            </div>
                                        </div>
                                    </div></div>
                            </div>
                        </div>
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


            <div className='container ptt-60 joinfont'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div class="sec-title3 text-center mb-30">
                            <h2 class="title color2 ncc">This Unique Business Opportunity is for:</h2>
                            <div class="heading-border-line center-style"></div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='join3 ptt-50 pbb-50 joinfont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='space170'></div>
                            <div className='joinib3'>
                                <div className='msvg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4"><path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path></svg>
                                </div>
                                <div class="services_number">01</div>
                                <div class="services_content">
                                    <div class="services_icon_wrapper">
                                        <img src='/assets/img/icon/joinicon1.png' />
                                    </div>
                                    <h3 class="services_title">CHROs</h3>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='space50'></div>
                            <div className='joinib3'>
                                <div className='msvg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4"><path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path></svg>
                                </div>
                                <div class="services_number">02</div>
                                <div class="services_content">
                                    <div class="services_icon_wrapper">
                                        <img src='/assets/img/icon/joinicon2.png' />
                                    </div>
                                    <h3 class="services_title">Ex L&D Heads</h3>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='space100'></div>
                            <div className='joinib3'>
                                <div className='msvg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4"><path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path></svg>
                                </div>
                                <div class="services_number">03</div>
                                <div class="services_content">
                                    <div class="services_icon_wrapper">
                                        <img src='/assets/img/icon/joinicon3.png' />
                                    </div>
                                    <h3 class="services_title">Training Consultants</h3>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='space50'></div>
                            <div className='joinib3'>
                                <div className='msvg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4"><path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path></svg>
                                </div>
                                <div class="services_number">04</div>
                                <div class="services_content">
                                    <div class="services_icon_wrapper">
                                        <img src='/assets/img/icon/joinicon4.png' />
                                    </div>
                                    <h3 class="services_title">Corporate Trainers</h3>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            {/* <div className='space100'></div> */}
                            <div className='joinib3'>
                                <div className='msvg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4"><path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path></svg>
                                </div>
                                <div class="services_number">05</div>
                                <div class="services_content">
                                    <div class="services_icon_wrapper">
                                        <img src='/assets/img/icon/joinicon5.png' />
                                    </div>
                                    <h3 class="services_title">VR and New Technology Enthusiasts</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <div class="rs-process style1 ptt-50 pbb-50 ptpagepro joinfont">                
                <div class="container custom2">
                    <div class="process-effects-layer pbb-40">
                        <div class="row">
                        <div className='col-sm-12'>
                            <div class="sec-title3 text-center mb-30 pbb-30">
                                <h2 class="title color2 ncc">Roadmap to Become Your Own Boss!</h2>
                                <div class="heading-border-line center-style"></div>
                            </div>
                        </div>
                        <div className='clearfix'></div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <div class="number-image">
                                            <img src="/assets/img/icon/ic1.png" alt="Process"/>
                                        </div>
                                        <div class="number-text">
                                            <div class="number-area"> <span class="number-prefix"> 1 </span></div>
                                            <div class="number-title"><h3 class="title"> Interested in <br></br>partnership</h3></div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <div class="number-image">
                                            <img src="/assets/img/icon/ic2.png" alt="Process"/>
                                        </div>
                                        <div class="number-text">
                                            <div class="number-area"> <span class="number-prefix"> 2 </span></div>
                                            <div class="number-title"><h3 class="title">Introductory<br></br> meeting</h3></div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <div class="number-image">
                                            <img src="/assets/img/icon/ic3.png" alt="Process"/>
                                        </div>
                                        <div class="number-text">
                                            <div class="number-area"> <span class="number-prefix"> 3 </span></div>
                                            <div class="number-title"><h3 class="title">MOU</h3></div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <div class="number-image">
                                            <img src="/assets/img/icon/ic4.png" alt="Process"/>
                                        </div>
                                        <div class="number-text">
                                            <div class="number-area"> <span class="number-prefix"> 4 </span></div>
                                            <div class="number-title"><h3 class="title">Business planning <br></br>meeting</h3></div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <div class="number-image">
                                            <img src="/assets/img/icon/ic5.png" alt="Process"/>
                                        </div>
                                        <div class="number-text">
                                            <div class="number-area"> <span class="number-prefix"> 5 </span></div>
                                            <div class="number-title"><h3 class="title">Kickstart your <br></br>Journey </h3></div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <section className='join4 ptt-50 pbb-50 joinfont positionrelative'>
                <div className='container'>
                    <div className='row zindx'>
                        <div className='col-sm-12'>
                            <div class="sec-title3 text-center mb-30">
                                <h2 class="title color2 ncc">What’s in Store for You?</h2>
                                <div class="heading-border-line center-style"></div>
                            </div>
                        </div>
                        <div className='clearfix'></div>
                        <div className='col'>
                            <div className='join4b1 ml30'>
                                <h3>Accelerate your Growth</h3>
                            </div>
                            <div className='join4b1 mr30'>
                                <h3>Lucrative Business Opportunity</h3>
                            </div>
                            <div className='join4b1 mr30'>
                                <h3>Added Revenue Source</h3>
                            </div>
                            <div className='join4b1 ml30'>
                                <h3>Globally Validated Research-Based Solutions</h3>
                            </div>
                        </div>
                        <div className='col'>
                            <img className="img100" src="/assets/img/join4b.png" />
                        </div>
                        <div className='col'>
                            <div className='join4b1 mr30'>
                                <h3>Bring International Content to Your Clients</h3>
                            </div>

                            <div className='join4b1 ml30'>
                                <h3>Solid Foundation of 23+ Years in L&D and HR Services</h3>
                            </div>

                            <div className='join4b1 ml30'>
                                <h3>Leverage Trust by Reaching New Markets and Customer Segments</h3>
                            </div>

                            <div className='join4b1 mr30'>
                                <h3>Solutions Across Organizational Hierarchies</h3>
                            </div>
                        </div>
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




            <section className='join6 ptt-100 pbb-100 joinfont'>
                <div className='container ptt-100 pbb-100'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6'>
                            <div>
                                <h2>Welcome to BYLD Group</h2>
                                <p>
                                    We are now embarking upon an exciting journey into the future. So, if you are AGILE and can THINK BIG, we invite you to join the BYLD Group Partner Network as a sales/business consultant. The role will initially involve launching our world-class technology-based Virtual Reality (AR/VR) and Creativity/Innovation leadership solutions in India.
                                </p>
                                <a href='#GetinTouch' className='dblocc'>Get in Touch</a>
                            </div>
                        </div>
                        <div className='col-sm-6'>

                        </div>
                    </div>
                </div>
            </section>






            <section className='ptt-60 pbb-60 positionrelative'>
            <div className='container'>
                <div className='row zindx'>
                        <div className='col-sm-12 text-center'>
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 font30">To get more insights, register for any of the upcoming sessions below:</h4>
                            </div>
                        </div>
                        <div className='clearfix'></div>



{/* 

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 12th May 2023</span>
                                </div>

                                <div className='eventbottom'>
                                    <h3 className='hhd'>BYLD Partner Network Briefing</h3>
                                    <h5>Time: 11:00 AM - 12:00 PM</h5>
                                    <a className="eventbtn" href='#GetinTouch'>REGISTER NOW</a>
                                </div>
                            </div>
                        </div> */}
                    {/*     <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 4th October 2023</span>
                                </div>

                                <div className='eventbottom'>
                                    <h3 className='hhd'>BYLD Partner Network Briefing</h3>
                                    <h5>Time: 11:00 AM - 12:00 PM</h5>
                                    <a className="eventbtn" href='#GetinTouch'>REGISTER NOW</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 22nd November 2023</span>
                                </div>

                                <div className='eventbottom'>
                                    <h3 className='hhd'>BYLD Partner Network Briefing</h3>
                                    <h5>Time: 11:00 AM - 12:00 PM</h5>
                                    <a className="eventbtn" href='#GetinTouch'>REGISTER NOW</a>
                                </div>
                            </div>
                        </div>
                    */}
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


        </>
    )
}


