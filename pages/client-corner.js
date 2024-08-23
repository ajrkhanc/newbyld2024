import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function ClientCorner() {

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/6/feedback');
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
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-mx_States=" + event.target.Location.value +
            "&leadsquared-Company=" + event.target.Organization.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

    }

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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

    var settings1 = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
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

    var testmonials = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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

    return (
        <>
            <Head>
                <title>Client Corner - BYLD Group</title>
                <link rel="canonical" href="https://byldgroup.com/client-corner" />
                <meta name="description" content="Continuously adding value to our customer’s businesses! Continuously adding value to our customer’s businesses! Let us help you find the best resource for your company. Highly effective, employee screening process for hiring of blue-collared and entry-level staff. Highly effective, employee screening process for hiring of blue-collared and entry-level staff. Business Enquiry Submit Your Query Our… Continue reading Client Corner" />
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
                                <a href="/client-corner">
                                    <span>Client Corner</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-8'>
                            <div class="breadcrumbs-inner">
                                <span class="watermark ">BYLD</span>
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    Continuously adding value to our customers' business!
                                </h1>
                                <span class="sub-text wow fadeInUp delay-0-2s animated animateUP">
                                    Let us help you find the best resource for your company. Highly effective, employee screening process for hiring of blue-collared and entry-level staff.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="solutionrow logosl ptt-50 pbb-50">
                <div className="container">
                    <div className="row zindx">
                        <div className="col-sm-12">
                            <div className="pb-50 text-center">
                                <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP text">Our Clientele</h2>
                                <br></br>
                                <Slider {...settings}>

                                    <div className='logoslider'>
                                        <img src="/assets/img/logos/l1.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/assets/img/logos/l2.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/assets/img/logos/l3.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/assets/img/logos/l4.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/assets/img/logos/l5.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/assets/img/logos/l6.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/assets/img/logos/l7.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/assets/img/logos/l8.jpg" />
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>
                </div>
            </div>

            <section className='ptt-60 pbb-50 ccl'>
                <div className='container'>
                    <div className='row rs-testimonial style2 rs-blog style1'>
                        <div className='col-sm-4'>
                            <div className='mst wow fadeInUp delay-0-2s animated animateUP'>
                                <div className='sec-title3 mbb-35'>
                                    <h4 className="countertoph2">CLIENTS SPEAK</h4>
                                    <div className="heading-border-line left-style"></div>
                                </div>
                            </div>
                            <Slider {...settings1}>
                                <div class="testi-wrap wow fadeInUp delay-0-2s animated animateUP">
                                    <div class="item-content">
                                        <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                                        <p>
                                            The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective
                                        </p>
                                    </div>
                                    <div class="testi-content">
                                        <div class="image-wrap">
                                            <img src="/assets/img/av.png" alt="Testimonial" />
                                        </div>
                                        <div class="testi-information">
                                            <div class="testi-name">Namita Shah</div>
                                            <span class="testi-title">(HSBC India)</span>
                                            <div class="ratting-img">
                                                <img src="/assets/img/ratting.png" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="testi-wrap wow fadeInUp delay-0-2s animated animateUP">
                                    <div class="item-content">
                                        <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                                        <p>
                                            We engaged their services for facilitating a session on SLII<sup>®</sup> for our 26 employees, who were members of the regional and local country leadership team spread across APAC, in Nov 2019. The objective of the learning program being enabling the leaders to drive change in the organization and have constructive & difficult conversations with their teams, ensuring the organizational goals are at the focal point of discussions.
                                        </p>
                                    </div>
                                    <div class="testi-content">
                                        <div class="image-wrap">
                                            <img src="/assets/img/av.png" alt="Testimonial" />
                                        </div>
                                        <div class="testi-information">
                                            <div class="testi-name">Rangkynsai Nongbet</div>
                                            <span class="testi-title">(Ortho Clinical Diagnostics)</span>
                                            <div class="ratting-img">
                                                <img src="/assets/img/ratting.png" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="testi-wrap wow fadeInUp delay-0-2s animated animateUP">
                                    <div class="item-content">
                                        <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                                        <p>
                                            Thankful to the team at Crucial Life Changing Skills for conducting a power packed session on the topic of “Influencer” for our leaders at CK Birla Group. The simple (and powerful) 6 sources of influence model will guide us to to drive change in our personal and professional space!
                                        </p>
                                    </div>
                                    <div class="testi-content">
                                        <div class="image-wrap">
                                            <img src="/assets/img/av.png" alt="Testimonial" />
                                        </div>
                                        <div class="testi-information">
                                            <div class="testi-name">Prerna S</div>
                                            <span class="testi-title">(Birla Fertility and IVF)</span>
                                            <div class="ratting-img">
                                                <img src="/assets/img/ratting.png" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className='col-sm-8'>
                            <div className='sec-title3 mbb-35 wow fadeInUp delay-0-2s animated animateUP'>
                                <h4 className="countertoph2">WHY OUR CLIENTS TRUST US?</h4>
                                <div className="heading-border-line left-style"></div>
                            </div>
                            <div className='mycounter'>
                                <div className='counterbox countb1 wow fadeInUp delay-0-2s animated animateUP'>
                                    <span className="rs-count">500,000 +</span>
                                    <h3>PEOPLE TRAINED</h3>
                                </div>
                                <div className='counterbox countb2 wow fadeInUp delay-0-2s animated animateUP'>
                                    <span className="rs-count">1,000 +</span>
                                    <h3>YEARS OF ACCUMULATED CONSULTING EXPERIENCE</h3>
                                </div>
                                <div className='counterbox countb3 wow fadeInUp delay-0-2s animated animateUP'>
                                    <span className="rs-count">10 +</span>
                                    <h3>GLOBAL PARTNERSHIPS</h3>
                                </div>
                                <div className='counterbox countb4 wow fadeInUp delay-0-2s animated animateUP'>
                                    <span className="rs-count">100,000 +</span>
                                    <h3>ACCESS TO PROFILES</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div className="solutionrow rs-about style2 logosl ptt-50 pbb-50">
                <div className="container">
                    <div className="row zindx">
                        <div className="col-sm-12">
                            <div className="pb-50 text-center">
                                <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP text">Client Testimonials</h2>
                                <br></br>
                                <Slider {...testmonials}>

                                    <div className="clvideopa">
                                        <div className="innervideoshd">
                                            <iframe width="100%" height="" src="https://www.youtube.com/embed/h9QXumwwniA"></iframe>
                                            <h3>Shalabh Srivatava</h3>
                                        </div>
                                    </div>

                                    <div className="clvideopa">
                                        <div className="innervideoshd">
                                            <iframe width="100%" height="" src="https://www.youtube.com/embed/4OVE2D_mec4"></iframe>
                                            <h3>Crucial Conversations</h3>
                                        </div>
                                    </div>

                                    <div className="clvideopa">
                                        <div className="innervideoshd">
                                            <iframe width="100%" height="" src="https://www.youtube.com/embed/Yon0KjySlMk"></iframe>
                                            <h3>Livpure’s</h3>
                                        </div>
                                    </div>
                                    <div className="clvideopa">
                                        <div className="innervideoshd">
                                            <iframe width="100%" height="" src="https://www.youtube.com/embed/h9QXumwwniA"></iframe>
                                            <h3>Shalabh Srivatava</h3>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
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
                                            <div className="col-lg-12 mb-12">
                                                <input className='borrr' type="text" name="name" placeholder="Enter Name*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input className='borrr' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input className='borrr' type="text" name="Location" placeholder="Location*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input className='borrr' type="text" name="Organization" placeholder="Organization*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12 d-none">
                                                <input className='borrr' type="text" name="leadsquared_mx_Business_Entity" placeholder="BYLD Group" value="BYLD Group" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
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
                    </div>
                </div>
            </div>


        </>
    )
}
