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
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/11/feedback');
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
                <title>Our Solutions | HR, Productivity & Assessment Solutions| BYLD Group</title>
                <meta name="description" content="BYLD Group offers leadership development programs, coaching programs, and corporate training programs to boost self-performance and teamwork. To know more, check out the page." />
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

            <div class="rs-breadcrumbs solutionsbrud">
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
                                <a href="/our-solutions">
                                    <span>Our Solutions</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">
                                <span class="watermark ">BYLD</span>
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    Grow with BYLD Group
                                </h1>
                                <span class="sub-text wow fadeInUp delay-0-2s animated animateUP">
                                    We are dedicated to make a difference to people and their organizations. Our clients across industries trust BYLD to manage, develop and align their talent needs in line with the business objectives and strategies – a responsibility we meet every day with enthusiasm, expertise, accountability, and passion.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <section className='solutionrow ptt-60 pbb-60 positionrelative'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center pbb-50'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Explore our range of solutions</h2>
                        </div>
                    </div>
                    <div className='row zindx'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 zindx'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div>
                                    <img src='/assets/img/new/exl.jpg'/>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                <div className='mst wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='contentsolu'>
                                            <h3>Experiential Learning</h3>
                                            <p className='text-justify'>
                                                Today’s stressful and distracted workplace environments are taking a toll on people’s learning and development efforts. Let’s face it; working smarter is the only choice you have and this is where our experiential learning programs help you learn quickly and learn essential skills to keep delivering consistently.
                                            </p>
                                        </div>

                                        <div className='btnsolu'>
                                            <div className="btn-part ennc">
                                                <Link href="/our-solutions/experiential-learning"><a className="readon2"> Read More<div className="btn-arrow"></div></a></Link>
                                            </div>
                                            <div className="btn-part">
                                                <Link href="#EnquireNow"><a className="readon2">Enquire Now<div className="btn-arrow"></div></a></Link>
                                            </div>
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

            <section className='solutionrow ptt-60 pbb-60 bgwhitei'>
                <div className='container'>
                    <div className='row zindx'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 zindx'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='mst wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='contentsolu'>
                                            <h3>Leadership & Performance</h3>
                                            <p className='text-justify'>
                                            Ever since the COVID 19 pandemic has hit the world, leaders across the globe have been striving hard to maintain peace within their teams while improving their productivity. Give your leaders the right skills, support, and methods that successful leaders around the world are using.
                                            </p>
                                        </div>

                                        <div className='btnsolu'>
                                            <div className="btn-part ennc">
                                                <Link href="/our-solutions/leadership-and-talent-development"><a className="readon2"> Read More<div className="btn-arrow"></div></a></Link>
                                            </div>
                                            <div className="btn-part">
                                                <Link href="#EnquireNow"><a className="readon2">Enquire Now<div className="btn-arrow"></div></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-6'>
                                    <div>
                                    <img src='/assets/img/new/lpd.jpg'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='solutionrow ptt-60 pbb-60 positionrelative'>
                <div className='container'>
                    <div className='row zindx'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 zindx'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div>
                                    <img src='/assets/img/new/ass.jpg'/>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                <div className='mst wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='contentsolu'>
                                            <h3>Assessments</h3>
                                            <p className='text-justify'>
                                            A company is as strong as its people. Organizations of all sizes prefer psychometric assessments for hiring and managing people, and fostering the right culture across all the levels of an organizational hierarchy.
                                            </p>
                                        </div>

                                        <div className='btnsolu'>
                                            <div className="btn-part ennc">
                                                <Link href="/our-solutions/assessments"><a className="readon2"> Read More<div className="btn-arrow"></div></a></Link>
                                            </div>
                                            <div className="btn-part">
                                                <Link href="#EnquireNow"><a className="readon2">Enquire Now<div className="btn-arrow"></div></a></Link>
                                            </div>
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

            <section className='solutionrow ptt-60 pbb-60 bgwhitei'>
                <div className='container'>
                    <div className='row zindx'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 zindx'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='mst wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='contentsolu'>
                                            <h3>Custom Solutions (BeSpoke)</h3>
                                            <p className='text-justify'>
                                            In this service line, BYLD Group partners with clients by understanding their organization’s ‘farm to fork’ by validating key business-specific concerns using highly customized tools. Using the outcome of the in-depth analysis, a highly customized learning solution is designed with clearly measurable results aligned to the primary business requirements.
                                            </p>
                                        </div>

                                        <div className='btnsolu'>
                                            <div className="btn-part ennc">
                                                <Link href="/bespoke"><a className="readon2"> Read More<div className="btn-arrow"></div></a></Link>
                                            </div>
                                            <div className="btn-part">
                                                <Link href="#EnquireNow"><a className="readon2">Enquire Now<div className="btn-arrow"></div></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-6'>
                                    <div>
                                    <img src='/assets/img/new/bespok.jpg'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='solutionrow ptt-60 pbb-60 positionrelative'>
                <div className='container'>                  
                    <div className='row zindx'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 zindx'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div>
                                    <img src='/assets/img/new/coachinng.jpg'/>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                <div className='mst wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='contentsolu'>
                                            <h3>Coaching</h3>
                                            <p className='text-justify'>
                                            BYLD Group offers time-tested, customized and diverse coaching solutions. Our team of professional coaches, best consultants and facilitators across geographies offer a wide range of coaching solutions to teams, individuals and organizations.
                                            </p>
                                        </div>

                                        <div className='btnsolu'>
                                            <div className="btn-part ennc">
                                                <Link href="/our-solutions/coaching"><a className="readon2"> Read More<div className="btn-arrow"></div></a></Link>
                                            </div>
                                            <div className="btn-part">
                                                <Link href="#EnquireNow"><a className="readon2">Enquire Now<div className="btn-arrow"></div></a></Link>
                                            </div>
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

            <section className='solutionrow ptt-60 pbb-60 bgwhitei'>
                <div className='container'>
                    <div className='row zindx'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 zindx'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='mst wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='contentsolu'>
                                            <h3>Staffing & Search</h3>
                                            <p className='text-justify'>
                                            With the advent of technology and automation, more and more companies are focusing on digitizing their processes. This is where we combine technology and staffing services to provide a one-stop solution to manage recruitment, training, payrolls, payments, and automate complete employee...
                                            </p>
                                        </div>

                                        <div className='btnsolu'>
                                            <div className="btn-part ennc">
                                                <Link href="/our-solutions/staffing"><a className="readon2"> Read More<div className="btn-arrow"></div></a></Link>
                                            </div>
                                            <div className="btn-part">
                                                <Link href="#EnquireNow"><a className="readon2">Enquire Now<div className="btn-arrow"></div></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-6'>
                                    <div>
                                    <img src='/assets/img/new/staffingn.jpg'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='solutionrow ptt-60 pbb-60 positionrelative'>
                <div className='container'>                  
                    <div className='row zindx'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 zindx'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div>
                                    <img src='/assets/img/new/coachinng.jpg'/>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                <div className='mst wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='contentsolu'>
                                            <h3>Partner Network</h3>
                                            <p className='text-justify'>
                                            We are now embarking upon an exciting journey into the future. So, if you are AGILE and can THINK BIG, we invite you to join the BYLD Group Partner Network as a sales/business consultant. The role will initially involve launching our world-class technology-based Virtual Reality (AR/VR) and Creativity/Innovation...
                                            </p>
                                        </div>

                                        <div className='btnsolu'>
                                            <div className="btn-part ennc">
                                                <Link href="/join-our-partner-network"><a className="readon2"> Read More<div className="btn-arrow"></div></a></Link>
                                            </div>
                                            <div className="btn-part">
                                                <Link href="#EnquireNow"><a className="readon2">Enquire Now<div className="btn-arrow"></div></a></Link>
                                            </div>
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



            <div id='EnquireNow' class="homecon ptt-60">
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
