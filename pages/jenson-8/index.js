import Head from 'next/head';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";
import Slider from "react-slick";

export default function Jenson8() {
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/12/feedback');
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
            "&lname=" + event.target.lname.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&Companyname=" + event.target.organization.value +
            "&slot=" + event.target.slot.value +
            "&wheredidyoucome=" + event.target.referredby.value +
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value +
            "&QuestionsComments=" + event.target.QuestionsComments.value)

    }

    const [modalOpen, setModalOpen] = React.useState(false);


    var homeslider = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Jenson8 | Experiential Learning | BYLD Group</title>
                <link rel="canonical" href="https://byldgroup.com/jenson-8" />
                <meta name="description" content="BYLD Group, in partnership with Jenson8, offers the best VR games and virtual games for employees for effective leadership development and training. To know more, check out the page." />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-S7PQH69WDV"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S7PQH69WDV');
          `,
                    }}
                />
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} backdrop="static" keyboard={false}>
                <button
                    aria-label="Close"
                    className="close popcl"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <iframe width="100%" height="550" src="https://www.youtube.com/embed/-FX3KtXABLM?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                </ModalBody>

            </Modal>




            <div className="rs-services tirianpage">
                <div className="container-full">
                    <div className="row y-middle">
                        <div className="col-lg-12">
                            <img className="img100" src="/assets/img/banner/jenson8.jpg" />
                        </div>
                    </div>
                </div>
                <div className="btn-part ptt-10 pbb-30 text-center tirianbannerbtn jenson8btn">
                    <a className="readon2" onClick={() => setModalOpen(!modalOpen)}>WATCH INTRO<div className="btn-arrow"></div></a>
                    <a href="#connect-us" className="readon2">GET THE DEMO<div className="btn-arrow"></div></a>
                </div>
            </div>

            <section className='ptt-40 pbb-30 jenson8section1 solutionrow ptt-60 pbb-60'>
                <div className='container'>
                    <div className='row zindx'>
                        <div className='col-sm-6'>
                            <div className="msicon">
                                <div className="services-text">
                                    <h1 className='jenson8h1 themec1 wow fadeInUp delay-0-2s animated animateUP'>
                                        Revolutionising Experiential Learning
                                    </h1>
                                    <p className='mb-0 pall1 pbb-10 wow fadeInUp delay-0-2s animated animateUP'>
                                        For the first time in India, we at <span className='jenson8spantheme'>BYLD Group,</span> in partnership with <span>Jenson8</span> (a UK-based award-winning Virtual Reality training company), bring highly effective Virtual Reality leadership courses. <span className='jenson8spanbrand'>THERE IS NOTHING LIKE IT SO FAR IN THE INDIAN MARKET.</span>
                                    </p>
                                    <p className='mb-0 pall1 pbb-10 wow fadeInUp delay-0-2s animated animateUP'>
                                        Outdoor training, classroom training, and e-learning have all been utilized to solve corporate teamwork, collaboration, and communication difficulties for decades. <span className='jenson8spanbrand'>Things are changing now….</span>
                                    </p>
                                    <p className='mb-0 pall1 pbb-10 wow fadeInUp delay-0-2s animated animateUP'>
                                        We bring into the Indian market The FUTURE of Leadership development through <span className='jenson8spanbrand'>VIRTUAL REALITY LEARNING SOLUTIONS by Jenson8.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-5 boxshd letf5border text-left bgwhite'>
                            <h2 className='jenson8homeh2 wow fadeInUp delay-0-2s animated animateUP'>Jenson8 NAMED TOP EXPERIENTIAL LEARNING TECHNOLOGY</h2>
                            <p>
                                <a className='wow fadeInUp delay-0-2s animated animateUP' target="_blank" href='https://trainingindustry.com/top-training-companies/learning-technologies/2021-top-experiential-learning-technologies-companies/'>2021 Top Experiential Learning Technologies Companies – Training Industry</a>
                            </p>
                            <div className='d-flex ptt-30'>
                                <img className='wow fadeInUp delay-0-2s animated animateUP' src='/assets/img/top-2021.png' alt="development" />
                                <p className='ptt-50 pll-30 wow fadeInUp delay-0-2s animated animateUP'>– BY TRAINING INDUSTRY INC</p>
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img className='opacity4' src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>
                </div>
            </section>


            <div className="rs-about style2 ptt-40 solutionrow backgroundwhit">
                <div className="container">
                    <div className="row zindx align-items-center">
                        <div className="col-sm-6">
                            <div className="pb-50">
                                <img src='/assets/img/jens1.png' alt="dt-dr" />
                            </div>
                        </div>

                        <div className='col-sm-6'>
                            <div className='sec-title3'>
                                <h2 class="mb-0 md-pb-20 h2call2 wow fadeInUp delay-0-2s animated animateUP">A data-driven experience, delivering insight where it’s needed</h2>
                            </div>

                            <p className='mb-0 pall1 pbb-10 wow fadeInUp delay-0-2s animated animateUP ptt-20'>
                                The Jenson8 Platform collects crucial data from user sessions. It provides deep insight into the organization, allowing them to adjust leadership and team development strategies and make smarter decisions about structuring their organizations for maximum impact. And it will result in detailed insight about participants through reports narrating strengths, growth opportunities, and suggestions for ongoing coaching and development.
                            </p>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img className='opacity4' src="/assets/img/homeb/bluearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/orangearrow1.png" />
                    </div>
                </div>
            </div>

            {/* <section className='jensectionbg ptt-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div class="sec-title3 text-center mbb-35">
                                <h3 class="title primary-color pbb-10 colorw">VR-Learners felt 3.75 times more connected to the content than classroom learners and 2.3 times more than e-learners.</h3>
                                <div class="heading-border-line center-style"></div>

                                <p className='ptt-40 svgtext'>
                                    <span>Source:</span> PWC Virtual Reality Study, June 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='solutionrow ptt-60 pbb-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3'>
                        </div>
                        <div className='col-sm-9'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Jenson8 NAMED TOP EXPERIENTIAL LEARNING TECHNOLOGY</h2>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                                Virtual Reality holds the promise of radically transforming the field of learning and development. Adding the VR delivery modality to your professional development curriculum gives you a significant competitive advantage.
                            </p>
                        </div>
                    </div>
                    <div className='row zindx'>
                        <div className='col-sm-3'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">VR Learners are:</h2>

                        </div>
                        <div className='col-sm-9 zindx'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='solutionbox2 wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='jeniconbox d-flex'>
                                            <div className='jenicon'>
                                                <div className='jimgbox'>
                                                    <img src='/assets/img/icon/j1.png' alt="icon" />
                                                </div>
                                            </div>
                                            <div className='jenicontex'>
                                                <h4>4X</h4>
                                                <p>faster to train than in <br></br>the classroom</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='solutionbox2 wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='jeniconbox d-flex'>
                                            <div className='jenicon'>
                                                <div className='jimgbox'>
                                                    <img src='/assets/img/icon/j2.png' alt="icon" />
                                                </div>
                                            </div>
                                            <div className='jenicontex'>
                                                <h4>3.75%</h4>
                                                <p>more emotionally connected to content <br></br>than classroom learners</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='solutionbox2 wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='jeniconbox d-flex'>
                                            <div className='jenicon'>
                                                <div className='jimgbox'>
                                                    <img src='/assets/img/icon/j3.png' alt="icon" />
                                                </div>
                                            </div>
                                            <div className='jenicontex'>
                                                <h4>275%</h4>
                                                <p>more confident to apply skills learned <br></br>after training</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='solutionbox2 wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='jeniconbox d-flex'>
                                            <div className='jenicon'>
                                                <div className='jimgbox'>
                                                    <img src='/assets/img/icon/j4.png' alt="icon" />
                                                </div>
                                            </div>
                                            <div className='jenicontex'>
                                                <h4>4X</h4>
                                                <p>more focused than their <br></br>e-learning peers</p>
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

            <section className='ptt-0 pbb-60 ptt-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div class="rs-videos choose-video wow fadeInUp delay-0-2s animated animateUP">
                                <h3 className='tirianh3 pbb-30'>
                                    Watch Our Teaser Trailer
                                </h3>
                                <div class="images-video">
                                    <img className='imgbr' src="/assets/img/jenvi.jpg" alt="images" />
                                </div>
                                <div class="animate-border">
                                    <a class="popup-border" target="_blank" href="https://www.youtube.com/watch?v=ul9yrazmpV0&t=4s">
                                        <i class="fa fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='solutionrow ptt-60 pbb-60'>
                <div className='container'>
                    <div className='row pbb-40'>
                        <div className='col-sm-3'>
                            <h2 class="title h2call2 mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Empowering your Business using VR</h2>
                        </div>
                        <div className='col-sm-9'>
                            <p class="mb-0 pbb-20 ptt-10 pall2 wow fadeInUp delay-0-2s animated animateUP">
                                With the use of technology, the experience is close to the real world, realistic and relevant skill transfer happens, which leads to higher engagement and retention levels.
                            </p>
                        </div>
                    </div>
                    <div className='row zindx'>
                    <div className='col-sm-3'></div>
                        <div className='col-sm-9'>
                            <div className='row missionslrow boch'>                                
                                <div className='col-sm-4 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/staffing-search.png" alt="images" />
                                            <h4><span>C</span>onnect</h4>
                                        </div>
                                        <div className='onlytext'>
                                            <p>
                                            Ensure your teams stay connected to and invested in your organization by taking them through a fascinating development process.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-4 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/coaching.png" alt="images" />
                                            <h4><span>E</span>ngage</h4>
                                        </div>
                                        <div className='onlytext wow fadeInUp delay-0-2s animated animateUP'>
                                            <p>
                                            Truly engage with your teams through the process of personal and leadership development. It doesn't get more fascinating than Virtual Reality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/bespoke.png" alt="images" />
                                            <h4><span>C</span>ollaborate</h4>
                                        </div>
                                        <div className='onlytext'>
                                            <p>
                                            Bring your leaders and employees into an environment that encourages them to solve problems and collaborate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/assessments.png" alt="images" />
                                            <h4><span>L</span>aunch</h4>
                                        </div>
                                        <div className='onlytext'>
                                            <p>
                                            Participants complete a psychometric self-assessment before the workshop. This data developed by the University of North Carolina at Wilmington is used in the debriefing process at the end of the workshop.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                            <h4><span>L</span>earn</h4>
                                        </div>
                                        <div className='onlytext'>
                                            <p>
                                            The immersive experience allows participants to observe and reflect on their behavior and that of others as they accomplish (or not) the goals and meet the challenges of the situation. The experience is provided in "cycles", each concluding with learning debrief, resulting in a continual improvement process.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/experiential-learning.png" alt="images" />
                                            <h4><span>P</span>ractice</h4>
                                        </div>
                                        <div className='onlytext'>
                                            <p>
                                            Using multidimensional feedback (including psychometrics), learners understand the impact of their behavior on themselves, others, and their organization. Facilitated roundtable discussions result in action plans to realize lasting behavioral change.
                                            </p>
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


            <section className='ptt-40 pbb-30 solutionrow backgroundwhit'>
                <div className='container'>
                    <div className='row zindx'>
                        <div className='col-sm-12 boxshd text-left mb00'>
                            <h2 className='jenson8homeh2 wow fadeInUp delay-0-2s animated animateUP'>Powered by BYLD Group and Jenson8...... For You!</h2>
                            <p>
                                <span className='jenson8spanbrand wow fadeInUp delay-0-2s animated animateUP'>Focused Scenarios:</span> With an array of ready-to-go scenarios, we can deliver real learning experiences that focus on critical issues such as leadership, communication, teamwork, inclusion, learner mindset, and talent assessment.
                            </p>
                            <p>
                                <span className='jenson8spanbrand wow fadeInUp delay-0-2s animated animateUP'>Tailored Workshops:</span> Your workshop can be scheduled to meet your specific requirements. It can potentially incorporate information from our extensive collection, such as other people’s and teams’ leadership, trust, etc.
                            </p>

                            <p>
                                <span className='jenson8spanbrand wow fadeInUp delay-0-2s animated animateUP'>Backed by science:</span> The Jenson8 psychometrics have been developed in conjunction with a research lab at the University of North Carolina, Wilmington, to ensure that the measurements are relevant to job performance and workplace culture.
                            </p>

                            <p>
                                <span className='jenson8spanbrand wow fadeInUp delay-0-2s animated animateUP'>Delivered to suit you:</span> Our virtual reality experience can be provided at our VR Lab in Gurgaon or in a location to serve you. We can even bring the equipment to your learners’ houses for remote virtual delivery.
                            </p>

                            <p>
                                <span className='jenson8spanbrand wow fadeInUp delay-0-2s animated animateUP'>Integration with your other initiatives:</span> We’ll work with you to make sure that critical messages about workplace values, behavior, and inclusiveness are highlighted to help you achieve your specific target culture.
                            </p>

                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img className='opacity4' src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img className='opacity4' src="/assets/img/homeb/bluearrow1.png" />
                    </div>
                </div>
            </section>

            {/* <section className='jensectionbg ptt-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div class="sec-title3 text-center mbb-35">
                                <h3 id="connect-us" class="title primary-color pbb-10 colorw">
                                    Seize the Opportunity to TRANSFORM LEARNING WITHIN YOUR ORGANIZATION and Experience Innovation Firsthand.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}




          


            <section className='ptt-60 pbb-60 solutionrow'>
                <div className='container'>
                    <div className='row zindx'>
                        <div className='col-sm-12'>
                            <div className="sec-title3 mbb-35 text-center">
                                <h4 className="countertoph2 font30 h2call2 wow fadeInUp delay-0-2s animated animateUP">To get more insights, register for any of the upcoming sessions below:</h4>
                            </div>
                        </div>
                        <div className='clearfix'></div>
                        {/* <div className='col-sm-4'>
                            <div className='eventsbox wow fadeInUp delay-0-2s animated animateUP'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Virtual Course Preview - September 6th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h4 className='eventtitlec'>Virtual Course Preview for Jenson8(Corporate)</h4>
                                    <h3>Time: 11:00 PM 12:00 PM</h3>
                                    <a className="eventbtn" href='#Reserve'>REGISTER NOW</a>
                                </div>
                            </div>
                        </div> */}

                         {/* <div className='col-sm-4'>
                        <div className='eventsbox wow fadeInUp delay-0-2s animated animateUP'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar - Friday, October 23rd, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className='eventtitlec'>Virtual Training Apollo3</h4>
                            <h3>Time: 11:00 PM 12:00 PM</h3>
                                <a className="eventbtn" href='#Reserve'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> */}

                    <div className='col-sm-4'>
                        <div className='eventsbox wow fadeInUp delay-0-2s animated animateUP'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Jenson8 Product Showcase 14 Dec 2023</span>
                            </div>
                            <div className='eventbottom'>
                           
                                <h3>Time: 11:00 AM -12:00 PM</h3>
                                <a className="eventbtn" href='#Reserve'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img className='opacity4' src="/assets/img/homeb/orangearrow.png" />
                    </div>
                </div>
            </section>




            <div className="rs-testimonial style4 tirianformbg ptt-50 pbb-70 homecon" id="Reserve">
                <div className="container">
                    <div className="row">
                        <div className="clearfix"></div>

                        <div className='col-sm-2'></div>
                        <div className="col-sm-8">
                            <div className="bannerform tirianformshd">
                                <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                                    <div className="row">
                                        <div className='col-sm-12'>
                                            <p>
                                                Fill in the form below and we will connect back at the earliest.
                                            </p>
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='borrr' type="text" name="fname" placeholder="First Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='borrr' type="text" name="lname" placeholder="Last Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='borrr' type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='borrr' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <input className='borrr' type="text" name="organization" placeholder="Organization*" required />
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <select name="slot" required>
                                                <option value="">Pick up any Slot*</option>                                                
                                                <option value="Jenson8 Product Showcase 14 Dec 2023">Jenson8 Product Showcase 14 Dec 2023</option>
                                                </select>
                                        </div>


                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby">
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Reference">Reference</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control borrr" name="QuestionsComments" placeholder="Questions/Comments:"></textarea>
                                        </div>
                                        <div className="col-sm-12 mb-12 d-none">
                                            <select name="Business_Entity" required>
                                                <option value="BYLD Group">BYLD Group</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input id="submitbuttonform" className="clientcornnerbtn width150" type="submit" value="Get in Touch" />
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='col-sm-2'></div>

                    </div>
                </div>
            </div>

        </>
    )
}
