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
                <title>Our Leadership Team - BYLD Group</title>
                <link rel="canonical" href="https://byldgroup.com/our-leadership-team" />
                <meta name="description" content="Meet Our Leadership Team Yogesh Sood CMD – BYLD Group Sandeep Budhiraja Co-Founder – BYLD Group Anand Dewan Group CEO – BYLD Group Nishit Sood Chief Flow Officer – BYLD Group Amar Vijay Tandur Chief Business Officer Ronald Soans Business Head – BYLD Group Meet Our Consulting Team Naveen Kumar Learning Division at DTCI Ranjeet… Continue reading Our Leadership Team" />
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
                                <a href="/our-leadership-team">
                                    <span>Our Leadership Team</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">
                                <span class="watermark ">TEAM</span>
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    Our Leadership Team
                                </h1>
                                <span class="sub-text wow fadeInUp delay-0-2s animated animateUP">
                                The illustrious journey of BYLD Group has been shaped by the vision, beliefs, corporate knowledge, and prowess of our veteran leaders, who have the power to bring real change to people and organizations. With their extraordinary spirit, grit, and determination, we are steadily scaling new milestones every day.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <section id="rs-team" className='style2 solutionrow ptt-60 pbb-60 rsteam'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-8'>
                            <h2 class="title pbb-100 mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP pbb-30">Meet Our Leadership Team</h2>
                        </div>
                    </div>
                    <div className='row zindx'>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-8'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='innerteamc mbb-70'>
                                        <div className='teamimgc1'>
                                            <a target="_blank" href="/yogesh-sood"><img src="/assets/img/team/yogesh-sood.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a target="_blank" href="/yogesh-sood">Yogesh Sood</a>
                                            </div>
                                            <span className="post">Chairman and Managing Director</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/yogesh-sood/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className='teampera'>
                                            <p>CMD, BYLD Group, Blanchard International India, and founder of first SEA chapter of ICF in 2004</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-6'>
                                    <div className='innerteamc mbb-70'>
                                        <div className='teamimgc1'>
                                            <a href="#"><img src="/assets/img/team/sandeep.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a href="#">Sandeep Budhiraja</a>
                                            </div>
                                            <span className="post">Co-Founder and Executive Director, Chief People Officer - BYLD Group</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/sanbuds/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className='teampera'>
                                            <p>Certified trainer for Self Track and Other's Track from Partners in Leadership. Global leader in Accountability Training.</p>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-sm-6'>
                                    <div className='innerteamc'>
                                        <div className='teamimgc1'>
                                            <a href="#"><img src="/assets/img/team/anand.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a href="#">Anand Dewan</a>
                                            </div>
                                            <span className="post">Group CEO</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/anand-dewan-87528a129/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className='teampera'>
                                            <p>Passionate about empowering others to live their purpose. I am passionate about creating a positive, trusting and learning...</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-6'>
                                    <div className='innerteamc'>
                                        <div className='teamimgc1'>
                                            <a href="#"><img src="/assets/img/team/nishit.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a href="#">Nishit Sood</a>
                                            </div>
                                            <span className="post">Chief Flow Officer</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/nishitsood/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className='teampera'>
                                            <p>ENTREPRENEURIAL JOURNEY:- Currently running a pan India business services and IT company.</p>
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
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Want to Bring the Real Change? </h2>
                        </div>
                        <div className='col-sm-9'>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                            Whether you want to elevate your leadership skills, improve self-awareness, enhance productivity, unlock the full potential of your manpower, or strengthen communication skills, we are here to help you. Fill out the details in our form, and our experts will get back to you soon.
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
