import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CountUp from 'react-countup';
import React from 'react';




export default function Home() {

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };


    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/11/feedback');
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
        xhttp.send("name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&tel=" + event.target.phone.value +
            "&location=" + event.target.Location.value +
            "&Company=" + event.target.organization.value +
            "&Designation=" + event.target.designation.value +
            "&Product=" + event.target.product.value +
            "&referredby=" + event.target.referredby.value +
            "&textarea=" + event.target.leadsquared_Notes.value)

    }

    return (
        <>


            <Head>
                <title>Organizational Development | E-learning Portal | BYLD Group</title>
                <link rel="canonical" href="https://byldgroup.com/about-us" />
                <meta name="description" content="Willing to know about our E-learning portal? You can find various options for In house training as well. Connect today to know about it and also get to know about the Train The Trainer training for organizational development."/>
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(30000).fadeIn();
               $('.close').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
               $('.x').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
             });
          `,
                    }}
                />
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <div class="rs-breadcrumbs aboutusbreadcrum">
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
                                <a href="/about-us/">
                                    <span>About Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">
                                <span class="watermark ">BYLD</span>
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    About Us
                                </h1>
                                <span class="sub-text wow fadeInUp delay-0-2s animated animateUP">
                                    Founded in the year 1998, BYLD is the largest group in the South Asian region, offering technology-enabled HR and business productivity solutions. We have served 5,00,000+ individuals, worked with more than 50% of the Fortune 500 and over 60% of the Business World top 1000 companies.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <section className='solutionrow ptt-60 pbb-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Our Group Businesses</h2>
                        </div>
                        <div className='col-sm-9'>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                                Founded in the year 1998, BYLD is the largest group in the South Asian region, offering technology-enabled HR and business productivity solutions.
                            </p>
                        </div>
                    </div>
                    <div className='row zindx'>
                        <div className='col-sm-3'></div>
                        <div className='col-sm-9 zindx'>
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                                        <h4><span>E</span>xperiential Learning</h4>
                                        <div className='cicon'>
                                            <img className='active' src="/assets/img/homeb/icon/experiential-learning.png" alt="images" />
                                            <img className='hover' src="/assets/img/homeb/icon/experiential-learningw.png" alt="images" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                                        <h4><span>L</span>eadership & Performance</h4>
                                        <div className='cicon'>
                                            <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                            <img className='hover' src="/assets/img/homeb/icon/leadership-performancew.png" alt="images" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                                        <h4><span>A</span>ssessments</h4>
                                        <div className='cicon'>
                                            <img className='active' src="/assets/img/homeb/icon/assessments.png" alt="images" />
                                            <img className='hover' src="/assets/img/homeb/icon/assessmentsw.png" alt="images" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                                        <h4><span>B</span>eSpoke</h4>
                                        <div className='cicon'>
                                            <img className='active' src="/assets/img/homeb/icon/bespoke.png" alt="images" />
                                            <img className='hover' src="/assets/img/homeb/icon/bespokew.png" alt="images" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                                        <h4><span>C</span>oaching</h4>
                                        <div className='cicon'>
                                            <img className='active' src="/assets/img/homeb/icon/coaching.png" alt="images" />
                                            <img className='hover' src="/assets/img/homeb/icon/coachingw.png" alt="images" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                                        <h4><span>S</span>taffing & Search</h4>
                                        <div className='cicon'>
                                            <img className='active' src="/assets/img/homeb/icon/staffing-search.png" alt="images" />
                                            <img className='hover' src="/assets/img/homeb/icon/staffing-searchw.png" alt="images" />
                                        </div>
                                    </div>
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


            <section className='aboutmap ptt-50 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP"><h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Our Presence</h2></h2>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                                Founded in the year 1998, BYLD is the largest group in the South Asian region, offering technology-enabled HR and business productivity solutions.
                            </p>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                                        <h4><span>G</span>urugram</h4>
                                        <div className='cicon'>
                                            <img className='active' src="/assets/img/new/icon/mapn.png" alt="images" />
                                            <img className='hover' src="/assets/img/new/icon/maph.png" alt="images" />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-6'>
                                    <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                                        <h4><span>H</span>yderabad</h4>
                                        <div className='cicon'>
                                            <img className='active' src="/assets/img/new/icon/mapn.png" alt="images" />
                                            <img className='hover' src="/assets/img/new/icon/maph.png" alt="images" />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-6'>
                                    <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                                        <h4><span>M</span>umbai</h4>
                                        <div className='cicon'>
                                            <img className='active' src="/assets/img/new/icon/mapn.png" alt="images" />
                                            <img className='hover' src="/assets/img/new/icon/maph.png" alt="images" />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-6'>
                                    <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                                        <h4><span>B</span>engaluru</h4>
                                        <div className='cicon'>
                                            <img className='active' src="/assets/img/new/icon/mapn.png" alt="images" />
                                            <img className='hover' src="/assets/img/new/icon/maph.png" alt="images" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <img src="/assets/img/new/contact-map.svg" />
                        </div>
                    </div>
                </div>
            </section>




            <div className="rs-about style2 logosl ptt-50 pbb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="pb-50">
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Authorized Partners</h2>
                            <br></br>
                                <Slider {...settings}>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/bla.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/eve.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/five.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/jenson8l.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/tirianl.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/lumi.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/inside.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/persona.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/trapo.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/bussion.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/by-cl.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/flight.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/yomalogs.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/logos/dtci.jpg" />
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="homecon ptt-60">
                <div class="container">
                    <div className='row'>
                        <div className='col-sm-3'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Get in touch</h2>
                        </div>
                        <div className='col-sm-9'>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                                Avail the development stream that is essential for your professional requirement. For more information, feel free to fill the form and we will get back to you
                            </p>
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
                                    <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                                        <div className="row">
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="name" placeholder="Enter Name*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="email" name="email" placeholder="Enter Email*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="Location" placeholder="Location" />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="organization" placeholder="Organization*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="designation" placeholder="Designation*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <select name="product" required>
                                                    <option value="">Product / Services</option>
                                                    <option value="Sales and Services">Sales and Services</option>
                                                    <option value="Coaching">Coaching</option>
                                                    <option value="Assessments">Assessments</option>
                                                    <option value="Leadership and Performance">Leadership and Performance</option>
                                                    <option value="Experiential Learning">Experiential Learning</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <select name="referredby" required>
                                                    <option value="">Referred By</option>
                                                    <option value="Email">Email</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Google Search">Google Search</option>
                                                    <option value="Website">Website</option>
                                                    <option value="Reference">Reference</option>
                                                    <option value="Sales Representative">Sales Representative</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input id="submitbuttonform" className="clientcornnerbtn bord0" type="submit" value="Submit" />
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
        </>
    )
}
