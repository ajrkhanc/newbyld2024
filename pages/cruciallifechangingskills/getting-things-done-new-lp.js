import Head from 'next/head'
import Slider from "react-slick";

export default function Gettingthingsdone() {

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/117/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/cruciallifechangingskills/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&organization=" + event.target.organization.value +
            "&designation=" + event.target.designation.value +
            "&slot=" + event.target.slot.value)

    }

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
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
                    slidesToScroll: 1
                }
            }
        ]
    };

    var settings2 = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
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
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Getting Things Done LP - Crucial Life-Changing Skills</title>
                <meta name="description" content="Transcend the productivity tips and learn the personal workflow management system via instruction, application, and coaching. This virtual course preview is a perfect introduction for evaluating a course for their team or organization." />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <section>
                <iframe width="100%" height="560" src="https://www.youtube.com/embed/4jUHKOEXEMo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section class="gtdlpsecondrow">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 contact-title">
                            <h1 className='text-left'>Overview</h1>
                            <p className='text-left'>
                                Transcend the productivity tips and learn the personal workflow management system via instruction, application, and coaching. This virtual course preview is a perfect introduction for evaluating a course for their team or organization.
                            </p>
                            <h3 className='secoundinnerboxh3'>The Getting Things Done program will help you.</h3>
                            <ul className='browsecourseullist'>
                                <li>
                                    <i class="fa fa-chevron-left"></i>
                                    Effective time management
                                </li>
                                <li>
                                    <i class="fa fa-chevron-left"></i>
                                    Shared process for managing and executing work
                                </li>
                                <li>
                                    <i class="fa fa-chevron-left"></i>
                                    Reduced stress and increased joy
                                </li>
                                <li>
                                    <i class="fa fa-chevron-left"></i>
                                    Able to meet deadlines and deliver on commitments.
                                </li>

                            </ul>
                        </div>

                        <div className='col-sm-6'>
                            <img src='/classets/img/man-1.png' />
                        </div>
                    </div>
                </div>
            </section>

            <section class="preview-section ccdsection">
                <div class="container">
                    <div class="row">
                        <div className='col-sm-12'>
                            <h1>Virtual course previews to assessments to case studies, find the latest from our team for you and your teams.</h1>
                        </div>
                        <div className='clearfix'></div>
                        <div className='col-sm-4'>
                            <div className='innerb ccd'>
                                <img src="/classets/img/gtdc1.jpg" />
                                <p>
                                    Increase patient safety, reduce errors, and improve employee engagement with Crucial Conversations Courses.
                                </p>
                                <h4>Click below and browse our courses</h4>
                                <a className='innerba' href='/cruciallifechangingskills/browse-courses'>Browse Courses</a>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='innerb ccd'>
                                <img src="/classets/img/gtdc2.jpg" />
                                <p>
                                    This twenty-question quick assessment will reveal your tendencies when it comes to managing your workflow and provides some tips for improvement.
                                </p>
                                <h4>To Take assesment click below</h4>
                                <a className='innerba' href='https://classesmentc.herokuapp.com/ass'>Take Assessment</a>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='innerb ccd'>
                                <img src="/classets/img/gtdc3.jpg" />
                                <p>
                                    Master the Art of Stress-free Productivity, Register and join our virtual course preview on.
                                </p>
                                <b>Newyork Best Seller:</b>
                                <h4><i>Getting Things Done – Davind Allen</i></h4>
                                <a className='innerba' href='#join-us'>Register Now</a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section id='registered' className='padd50s'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 alicc'>
                            <img className='lim' src='/classets/img/gtd.svg' />
                            <h3>Master the Art of Stress-free Productivity</h3>
                            <h4>Relieve the Cognitive Load and Peak the Performance</h4>
                            <br></br>
                            <Slider {...settings2}>
                              
                                 {/* <div>
                                    <h2>Workshop</h2>
                                    <div class="workshop-date">
                                        <h6><i class="fa fa-calendar" aria-hidden="true"></i> November 6th - 8th, 2023</h6>
                                        <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 02:30 PM to 5:00 PM</h6>
                                    </div>
                                </div> */}

                                {/* <div>
                                    <h2>Train-The-Trainers (TTT) - Workshop</h2>
                                    <div class="workshop-date">
                                        <h6><i class="fa fa-calendar" aria-hidden="true"></i> November 9th - 10th, 2023</h6>
                                        <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 4:00 PM</h6>
                                    </div>
                                </div> */}
                               {/*  <div>
                                    <h2>Workshop</h2>
                                    <div class="workshop-date">
                                        <h6><i class="fa fa-calendar" aria-hidden="true"></i> February 7th, 2024</h6>
                                        <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                                    </div>
                                </div>  */}

                                <div>
                                    <h2>Workshop</h2>
                                    <div class="workshop-date">
                                        <h6><i class="fa fa-calendar" aria-hidden="true"></i>18th April ,2024</h6>
                                        <h6><i class="fa fa-clock-o" aria-hidden="true"></i>9:00 AM - 5:30 PM</h6>
                                    </div>
                                </div>
                               {/* <div>
                                    <h2>Virtual Course Preview</h2>
                                    <div class="workshop-date">
                                        <h6><i class="fa fa-calendar" aria-hidden="true"></i> January 5th, 2024</h6>
                                        <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 11:00 AM to 12:00 PM</h6>
                                    </div>
                                </div> */}
                               
                                {/* <div>
                                    <h2>Workshop</h2>
                                    <div class="workshop-date">
                                        <h6><i class="fa fa-calendar" aria-hidden="true"></i>February 9th, 2024</h6>
                                        <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                                    </div>
                                </div>  */}

                               {/*  <div>
                                    <h2>Virtual Course Preview</h2>
                                    <div class="workshop-date">
                                        <h6><i class="fa fa-calendar" aria-hidden="true"></i>March 14th, 2024</h6>
                                        <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 11:00 AM to 12:00 PM</h6>
                                    </div>
                                </div> */}
                            </Slider>
                        </div>
                        <div class="col-md-6 form-area">
                            <form id="contactForm" class="row fbd" onSubmit={registerUser}>
                                <div className='col-sm-12'>
                                    <h4 className=''>Fill in the details and register for the virtual course preview now!</h4>
                                </div>
                                <div class="col-md-6 col-6">
                                    <input type="text" name='name' placeholder="Your Name*" />
                                </div>
                                <div class="col-md-6 col-6">
                                    <input type="email" name='email' placeholder="Work Email/Email*" />
                                </div>
                                <div class="col-md-6 col-6">
                                    <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                </div>
                                <div class="col-md-6 col-6">
                                    <input type="text" name='organization' placeholder="Organization*" />
                                </div>
                                <div class="col-md-12">
                                    <input type="text" name='designation' placeholder="Designation*" required/>
                                </div>

                                <div class="col-md-12">
                                    <select name='slot' required>                                                                              
                                        <option value="">Pick any Slot*</option>
                                            {/* <option value="Getting Things Done - November 6th to 8th, 2023">Getting Things Done - November 6th to 8th, 2023</option>
                                            <option value="Getting Things Done - November 9th to 10th, 2023">Getting Things Done - November 9th to 10th, 2023</option> */}
                                            
                                            {/* <option value="Getting Things Done, Workshop -  February 7th, 2024">Getting Things Done, Workshop - February 7th, 2024</option>*/}
                                            <option value="Getting Things Done,Workshop -  18th April 2024">Getting Things Done, Workshop - 18th April, 2024</option>
                                           

                                          

                                    </select>
                                </div>

                                <div class="col-md-12">
                                    <input id='submitbuttonform' class="formbtn" type="submit" value="Submit" />
                                </div>
                                <p id="showlabel" style={{ display: "none" }}></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className='testmonials text-center pbb-50 bgcc'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h2 className='testmt'>TESTIMONIALS</h2>
                        </div>
                        <div className='col-sm-12'>
                            <Slider {...settings}>
                                <div className='testmdetails'>
                                    <p className='testtext'>Subject matter was very relevant to our needs and was taught along with suitable demonstrations and examples. Interactive practice sessions and group exercises.Live cases used to explain concepts. Content delivery from the trainer was clear and to the point</p>
                                    <h4 className='testname'>Alstom</h4>
                                    <img className='ratingw' src='/classets/img/five-star-rating.png' />
                                    <h5 className='compname'>Crucial Conversations </h5>
                                </div>

                                <div className='testmdetails'>
                                    <p className='testtext'>It was an absolutely engaging and knowledgeable session. There are times when we are at a loss on how to begin a conversation and almost 99% of the time those are important and difficult conversations. This program will help you understand the best way forward towards having those conversations in the most healthy way possible! Kudos to the team of Crucial Learning and a big thumbs up to Mr Jolly for making the session so interactive!</p>
                                    <h4 className='testname'>Rohini Rastogi</h4>
                                    <img className='ratingw' src='/classets/img/five-star-rating.png' />
                                    <h5 className='compname'>Middleby Celfrost Innovations Pvt. Ltd.</h5>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section class="workshops">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 contact-title">
                            <h1>Our Upcoming Programs</h1>
                        </div>



                        <div class="col-md-4 workshop-col">
                            <div class="row workshop-row">
                                <div class="col-md-12 workshop-content gtdcolor">
                                    <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                                    <h4 className='pbb-20'>Getting Things Done</h4>
                                </div>
                                <h5 className='eventt'>Workshop</h5>
                                <div class="col-md-12 workshop-date">
                                    <h6><i class="fa fa-calendar" aria-hidden="true"></i> February 7th, 2024</h6>
                                    <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                                    <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 workshop-col">
                            <div class="row workshop-row">
                                <div class="col-md-12 workshop-content gtdcolor">
                                    <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                                    <h4 className='pbb-20'>Getting Things Done</h4>
                                </div>
                                <h5 className='eventt'>Virtual Course Preview</h5>
                                <div class="col-md-12 workshop-date">
                                    <h6><i class="fa fa-calendar" aria-hidden="true"></i> October 23rd, 2023</h6>
                                    <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 4.00 PM to 5:00 PM</h6>
                                    <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 workshop-col">
                            <div class="row workshop-row">
                                <div class="col-md-12 workshop-content gtdcolor">
                                    <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                                    <h4 className='pbb-20'>Getting Things Done</h4>
                                </div>
                                <h5 className='eventt'>Workshop</h5>
                                <div class="col-md-12 workshop-date">
                                    <h6><i class="fa fa-calendar" aria-hidden="true"></i> September 28th, 2023</h6>
                                    <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                                    <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 workshop-col">
                            <div class="row workshop-row">
                                <div class="col-md-12 workshop-content gtdcolor">
                                    <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                                    <h4 className='pbb-20'>Getting Things Done</h4>
                                </div>
                                <h5 className='eventt'>Workshop</h5>
                                <div class="col-md-12 workshop-date">
                                    <h6><i class="fa fa-calendar" aria-hidden="true"></i> January 11th, 2024</h6>
                                    <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                                    <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
        </>
    )
}
