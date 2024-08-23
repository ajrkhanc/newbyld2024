import Head from 'next/head'
import Slider from "react-slick";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";

export default function BrowseCourses() {

    const [modalOpen1, setModalOpen1] = React.useState(false);

    const WorkshopsForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/16/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/cruciallifechangingskills/thank-you"
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
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&leadsquared-mx_Showed_Interest_in=" + event.target.slot.value +
            "&leadsquared-Notes=" + event.target.nots.value +
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

    }

    var settings = {
        dots: false,
        arrows: true,
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


    const whitp1 = async event => {
        const coursename = 'Cl E-book';
        event.preventDefault()
        document.getElementById("submitbuttonform1").value = "Submitting...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/120/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/classets/pdf/ebook-leading-through-layoffs_cc.pdf"
                    });

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&youremail=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&designation=" + event.target.designation.value +
            "&company=" + event.target.organization.value)
    }

    return (
        <>
            <Head>
                <title>CL Genric LP - Crucial Life-Changing Skills</title>
                <meta name="description" content="Call Today: 1800-102-1345 Email: cruciallearning.info@byldgroup.com Based on 30+ years of social science research, our courses for managers have proven highly effective in strengthening relationships, achieving more with less stress, building... Read more" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

            <Modal className='toppc mwc500' toggle={() => setModalOpen1(!modalOpen1)} isOpen={modalOpen1} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen1(!modalOpen1)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc" onSubmit={whitp1}>
                        <div className='text-center width100p'>
                            <h4>Want to get access to the E-book?</h4>
                            <h5>Please Register to download </h5>
                        </div>
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Your Name*" required />
                        </div>

                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Work Email/Email*" required />
                        </div>

                        <div class="col-md-12">
                            <input type="text" class="form-control" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                        </div>

                        <div class="col-md-12">
                            <input type="text" class="form-control" name='designation' placeholder="Designation*" required />
                        </div>

                        <div class="col-md-12">
                            <input type="text" class="form-control" name='organization' placeholder="Organization*" required />
                        </div>


                        <div class="col-md-12 text-center">
                            <input id='submitbuttonform1' class="formbtn" type="submit" value="Submit" />
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal>

            <section className='genericlpbanner'>
                <div className='container'>
                    <div className='row y-middle'>
                        <div className='col-md-6'>
                            <h1>WORKPLACE LEARNING THAT CHANGES LIVES</h1>
                            <p className='genericp'>
                                Based on <span>30+</span> years of social science research, our courses for managers have proven highly effective in strengthening relationships, achieving more with less stress, building habits for success, and experiencing greater joy.
                            </p>
                            <p className='genericp'>
                                We’ve ranked among the top <span>20</span> Leadership Training companies, for seven years and counting.
                            </p>
                            <div className='knowmores'>
                                <a href='#know-more'>Know More</a>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='icfvideoborder'>
                                <iframe width="100%" height="310" src="https://www.youtube.com/embed/OalK_lZuzYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="about-section1 preview-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 preview-image">
                            <img src="/classets/img/ebooktheme1.jpg" />
                        </div>

                        <div class="col-lg-6 left-about-area preview-course">
                            <h1>MASSIVE LAYOFFS ARE MAKING NATIONAL HEADLINES.</h1>
                            <p>
                                Across the tech industry, reports indicate that in the last twelve months, 1,666 companies have laid off more than 283,000 employees, with nearly half of those—126,000 layoffs—occurring in just the first few months of 2023.
                            </p>
                            <hr />
                            <div className='knowmores text-left'>
                                <a href='#' onClick={() => setModalOpen1(!modalOpen1)}>Download Ebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className='desktopviewbrowse ptt-50'>
                <section class="about-section pbb-90">
                    <div class="container-fluid minwidth992px">
                        <div class="row">
                            <div class="col-lg-12 contact-title">
                                <h1 className='ptt-40'>OUR SOLUTIONS</h1>
                            </div>

                            <div class="col-md-5">
                                <div className='row paddingleftright3'>
                                    <div className='col-sm-12 browsecthemebg ptt-10 pbb-10'>
                                        <h3>COMMUNICATION</h3>
                                    </div>
                                    <div className='col-sm-6 padding0box'>
                                        <a className='browse-courses-box paddingright3' href='/cruciallifechangingskills/crucial-conversations-for-mastering-dialogue' target="_blank">
                                            <div className='browsecthemebgsecound ptt-20 pbb-10 minbrowseheight'>
                                                <img src="/classets/img/logo-crucial-conversations.svg" alt="logo-crucial-conversations" />
                                                <h3>CRUCIAL <br />CONVERSATIONS</h3>
                                                <p>for Mastering Dialogue</p>
                                            </div>
                                            <div className='browsecthemebgsecound mtb6px ptt-15 pbb-15'>
                                                <h4>DIALOGUE</h4>
                                            </div>
                                        </a>
                                    </div>

                                    <div className='col-sm-6 padding0box'>
                                        <a className='browse-courses-box paddingleft3' href='/cruciallifechangingskills/crucial-conversations-for-accountability/' target="_blank">
                                            <div className='browsecthemebgsecound ptt-20 pbb-10 minbrowseheight'>
                                                <img src="/classets/img/logo-crucial-conversations.svg" alt="logo-crucial-conversations" />
                                                <h3>CRUCIAL <br />CONVERSATIONS</h3>
                                                <p>for Accountability</p>
                                            </div>
                                            <div className='browsecthemebgsecound mtb6px ptt-15 pbb-15'>
                                                <h4>ACCOUNTABILITY</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-5'>
                                <div className='row paddingleftright3'>
                                    <div className='col-sm-12 browsecthemebg ptt-10 pbb-10'>
                                        <h3>PERFORMANCE</h3>
                                    </div>

                                    <div className='col-sm-6 padding0box'>
                                        <a className='browse-courses-box paddingright3' href='/cruciallifechangingskills/getting-things-done' target="_blank">
                                            <div className='coursegtdcolor ptt-20 pbb-10 minbrowseheight'>
                                                <img src="/classets/img/logo-gtd.svg" alt="logo-crucial-conversations" />
                                                <h3>GETTING THINGS DONE</h3>
                                            </div>
                                            <div className='coursegtdcolor mtb6px ptt-15 pbb7'>
                                                <h4>PRODUCTIVITY</h4>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='col-sm-6 padding0box'>
                                        <a className='browse-courses-box paddingleft3' href='/cruciallifechangingskills/the-power-of-habit' target="_blank">
                                            <div className='browsecthemebgsecound browsepohbg minbrowseheight ptt-20'>
                                                <img src="/classets/img/browse-logo-poh.svg" alt="logo-crucial-conversations" />
                                                <h3>THE POWER OF HABIT</h3>
                                            </div>
                                            <div className='browsecthemebgsecound browsepohbg mtb6px ptt-15 pbb-15'>
                                                <h4>HABITS</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className='col-md-2 paddingleftright3'>
                                <div className='browsecthemebg ptt-10 pbb-10'>
                                    <h3>LEADERSHIP</h3>
                                </div>
                                <a className='browse-courses-box' href='/cruciallifechangingskills/influencer' target="_blank">
                                    <div className='browsecthemebgsecound browseinfluncerbg minbrowseheight ptt-20'>
                                        <img src="/classets/img/browse-logo-influencer.svg" alt="logo-crucial-conversations" />
                                        <h3>INFLUENCER</h3>
                                    </div>
                                    <div className='browsecthemebgsecound browseinfluncerbg mtb6px ptt-15 pbb-15'>
                                        <h4>CHANGE</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className='testmonials text-center pbb-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h3 className='testmf'>You and your team can strengthen relationships, achieve more with less stress, build habits for success, and even experience greater joy.</h3>
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

            <section id='know-more' className='ptt-40'>
                <div className='container'>
                    <div class="col-md-12 form-area workshop-form">
                        <form id="contactForm" class="row" onSubmit={WorkshopsForm}>
                            <div class="col-lg-12 contact-title">
                                <h3 className='formh3'>
                                    Fill in the form below and our subject matter expert will connect with you within 24 working hours.
                                </h3>
                            </div>
                            <div class="col-md-6 col-6">
                                <input type="text" name='name' placeholder="Your Name*" required />
                            </div>

                            <div class="col-md-6 col-6">
                                <input type="email" name='email' placeholder="Work Email/Email*" required />
                            </div>

                            <div class="col-md-6 col-6">
                                <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                            </div>

                            <div class="col-md-6 col-6">
                                <input type="text" name='organization' placeholder="Organization*" required />
                            </div>

                            <div class="col-md-6 col-6">
                                <input type="text" name='designation' placeholder="Designation" />
                            </div>



                            <div class="col-md-6 col-6">
                                <select name='slot' required>
                                    <option value="">Pick any Solutions*</option>
                                    <option value="Crucial Conversations for Mastering Dialogue">Crucial Conversations for Mastering Dialogue</option>
                                    <option value="Crucial Conversations for Accountability">Crucial Conversations for Accountability</option>
                                    <option value="The Power of Habit">The Power of Habit</option>
                                    <option value="Influencer">Influencer</option>
                                    <option value="Getting Things Done">Getting Things Done</option>
                                </select>
                            </div>


                            <div class="col-md-12">
                                <textarea name='nots' placeholder="Your Message" rows="5"></textarea>
                            </div>

                            <div class="d-none">
                                <input type="text" name='Business_Entity' value="Crucial Life-Changing Skills" />
                            </div>

                            <div class="col-md-12">
                                <input id='submitbuttonform' class="formbtn" type="submit" value="Submit" />
                            </div>
                            <p id="showlabel" style={{ display: "none" }}></p>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
