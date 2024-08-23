import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




export default function Home() {

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
                <title>Careers | BYLD Group</title>
                <link rel="canonical" href="https://byldgroup.com/contact-us" />
                <meta name="description" content="Willing to know about our E-learning portal? You can find various options for In house training as well. Connect today to know about it and also get to know about the Train The Trainer training for organizational development." />
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
                                <a href="/careers/">
                                    <span>Careers</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">
                                <span class="watermark ">Careers</span>
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    Careers
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='solutionrow ptt-60 pbb-60'>
                <div className='container'>

                    <div className='row zindx'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 zindx'>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                            BYLD Group is the frontrunner organization in terms of being people-centric and is working toward transforming businesses and people’s lives. We are highly professional, competent, and determined to change how companies operate, leverage their resources, and optimally utilize their people and skills.
                            </p>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Professional Life @BYLD Group</h2>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                            We believe in growing together with our employees, who have firmly stood behind us through our thick and thin times. Our organization follows the strong ethics of a healthy work culture where everyone can thrive, communicate, and grow without prejudice.
                            </p>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                            We are eager to nurture a workplace environment that fosters innovation, shared purpose, empowerment, and continuous learning among our employees. 
                            </p>
                        </div>
                    </div>

                    <div className='clearfix'></div>
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
                                <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">BYLD Awards </h2>
                                <br></br>
                                <Slider {...settings}>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca8.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca9.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca10.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca11.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca19.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca18.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca17.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca16.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca1.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca2.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca3.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca4.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca5.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca7.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca12.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca13.jpg" />
                                    </div>

                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca14.jpg" />
                                    </div>
                                    <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/events/ca15.jpg" />
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="rs-faq" class="rs-faq ptt-60 pbb-50 zinc">
                <div className="container">
                    <div className="row ">
                        <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Join the BYLD Family</h2>
                        <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                        Want to excel professionally, enhance your abilities, and strengthen a strong network of growth opportunities? <b>APPLY NOW!</b>
                        </p>
                    </div>

                    <div className="row ptt-40">
                        <div className='col-sm-12 faqss'>
                            <Accordion allowZeroExpanded>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Training Consultant
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='cafaq'>
                                            <h4>JOB ROLE</h4>
                                            <p>Training Consultant</p>
                                        </div>
                                        <div className='cafaq'>
                                            <h4>EXPERIENCE</h4>
                                            <div className='rs-estimate'>
                                                <ul className='estimate-info mtt-5'>
                                                    <li>5+ years business / management experience (of companies with more than Rs. 5 Cr revenue )</li>
                                                    <li>Traning background and/or relevant business experience</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='cafaq'>
                                            <h4>WORK LOCATION</h4>
                                            <p>NCR / Bangalore / Mumbai</p>
                                            <div className='caapplybtn'>
                                                <a className='cabtnc1' href='#'>SEE MORE</a>
                                                <a className='cabtnc2' href='#careerForm'>APPLY</a>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Business Consultant
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='cafaq'>
                                            <h4>JOB ROLE</h4>
                                            <p>Training Consultant</p>
                                        </div>
                                        <div className='cafaq'>
                                            <h4>EXPERIENCE</h4>
                                            <div className='rs-estimate'>
                                                <ul className='estimate-info mtt-5'>
                                                    <li>5+ years business / management experience (of companies with more than Rs. 5 Cr revenue )</li>
                                                    <li>Traning background and/or relevant business experience</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='cafaq'>
                                            <h4>WORK LOCATION</h4>
                                            <p>NCR / Bangalore / Mumbai</p>
                                            <div className='caapplybtn'>
                                                <a className='cabtnc1' href='#'>SEE MORE</a>
                                                <a className='cabtnc2' href='#careerForm'>APPLY</a>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Program Manager
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='cafaq'>
                                            <h4>JOB ROLE</h4>
                                            <p>Training Consultant</p>
                                        </div>
                                        <div className='cafaq'>
                                            <h4>EXPERIENCE</h4>
                                            <div className='rs-estimate'>
                                                <ul className='estimate-info mtt-5'>
                                                    <li>5+ years business / management experience (of companies with more than Rs. 5 Cr revenue )</li>
                                                    <li>Traning background and/or relevant business experience</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='cafaq'>
                                            <h4>WORK LOCATION</h4>
                                            <p>NCR / Bangalore / Mumbai</p>
                                            <div className='caapplybtn'>
                                                <a className='cabtnc1' href='#'>SEE MORE</a>
                                                <a className='cabtnc2' href='#careerForm'>APPLY</a>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        HR generalist
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='cafaq'>
                                            <h4>JOB ROLE</h4>
                                            <p>Training Consultant</p>
                                        </div>
                                        <div className='cafaq'>
                                            <h4>EXPERIENCE</h4>
                                            <div className='rs-estimate'>
                                                <ul className='estimate-info mtt-5'>
                                                    <li>5+ years business / management experience (of companies with more than Rs. 5 Cr revenue )</li>
                                                    <li>Traning background and/or relevant business experience</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='cafaq'>
                                            <h4>WORK LOCATION</h4>
                                            <p>NCR / Bangalore / Mumbai</p>
                                            <div className='caapplybtn'>
                                                <a className='cabtnc1' href='#'>SEE MORE</a>
                                                <a className='cabtnc2' href='#careerForm'>APPLY</a>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Business Consultant
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='cafaq'>
                                            <h4>JOB ROLE</h4>
                                            <p>Training Consultant</p>
                                        </div>
                                        <div className='cafaq'>
                                            <h4>EXPERIENCE</h4>
                                            <div className='rs-estimate'>
                                                <ul className='estimate-info mtt-5'>
                                                    <li>5+ years business / management experience (of companies with more than Rs. 5 Cr revenue )</li>
                                                    <li>Traning background and/or relevant business experience</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='cafaq'>
                                            <h4>WORK LOCATION</h4>
                                            <p>NCR / Bangalore / Mumbai</p>
                                            <div className='caapplybtn'>
                                                <a className='cabtnc1' href='#'>SEE MORE</a>
                                                <a className='cabtnc2' href='#careerForm'>APPLY</a>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Trainer – Retail Banking
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='cafaq'>
                                            <h4>JOB ROLE</h4>
                                            <p>Training Consultant</p>
                                        </div>
                                        <div className='cafaq'>
                                            <h4>EXPERIENCE</h4>
                                            <div className='rs-estimate'>
                                                <ul className='estimate-info mtt-5'>
                                                    <li>5+ years business / management experience (of companies with more than Rs. 5 Cr revenue )</li>
                                                    <li>Traning background and/or relevant business experience</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='cafaq'>
                                            <h4>WORK LOCATION</h4>
                                            <p>NCR / Bangalore / Mumbai</p>
                                            <div className='caapplybtn'>
                                                <a className='cabtnc1' href='#'>SEE MORE</a>
                                                <a className='cabtnc2' href='#careerForm'>APPLY</a>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            <div id='careerForm' class="homecon ptt-60">
                <div class="container">
                    <div className='row'>
                        <div className='col-sm-3'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Want to Grow with Us?</h2>
                        </div>
                        <div className='col-sm-9'>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                            If you want to enjoy an impeccable career growth or shape your career in the right direction, join our corporate journey. Fill out our form, and we will quickly get in touch with you.
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
                                                <input className='borrr' type="text" name="organization" placeholder="Pre Organization*" required />
                                            </div>
                                           
                                            <div className="col-sm-12 mb-12">
                                                <select name="product" required>
                                                    <option value="">Select Position To Apply</option>
                                                    <option value="Training Consultant">Training Consultant</option>
                                                    <option value="Business Consultant CSR Corporate Sales">Business Consultant CSR Corporate Sales</option>
                                                    <option value="Business Consultant Corporate Sales">Business Consultant Corporate Sales</option>
                                                    <option value="Digital Producer">Digital Producer</option>
                                                    <option value="Trainer – Retail Banking">Trainer – Retail Banking</option>
                                                    <option value="Trainer – Communication and Workplace Skills">Trainer – Communication and Workplace Skills</option>
                                                    <option value="Trainer – Overview of Insurance">Trainer – Overview of Insurance</option>
                                                    <option value="Program Manager">Program Manager</option>
                                                    <option value="HR generalist">HR generalist</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-12 mb-12">
                                                <span>Upload Resume*</span>
                                                <input className='borrr' type="file" name="designation" placeholder="Upload Resume**" required />
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
