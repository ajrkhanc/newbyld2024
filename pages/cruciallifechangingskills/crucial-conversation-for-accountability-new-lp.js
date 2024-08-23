import Head from 'next/head'
import Slider from "react-slick";

export default function BrowseCourses() {

    const WorkshopsForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/19/feedback');
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

    return (
        <>
            <Head>
                <title>Crucial Conversation for Accountability New LP - Crucial Life-Changing Skills</title>
                <meta name="description" content="Call Today: 1800-102-1345 Email: cruciallearning.info@byldgroup.com Based on 30+ years of social science research, our courses for managers have proven highly effective in strengthening relationships, achieving more with less stress, building... Read more" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <section className='genericlpbanner'>
                <div className='container'>
                    <div className='row y-middle'>
                        <div className='col-md-6 text-center'>
                            <img className='prlogo' src="/classets/img/Crucial-Accountability.svg" />
                            <h1>Performance Management Improved</h1>
                            <p className='genericp'>
                                For creating healthy relationships amongst people and organizations, accountability becomes critical in nature. If people are able to hold each other accountable, they are able to build trust, fulfil commitments, efficiency, engagement, and more.
                            </p>

                        </div>
                        <div className='col-md-6'>
                            <div className='icfvideoborder'>
                                <iframe width="100%" height="310" src="https://www.youtube.com/embed/fUfy3GwgzYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ptt-40' id="registered">
                <div className='container'>
                    <div className='row workshop-form'>
                        <div className='col-sm-6'>
                            <div>
                                <p>
                                    The course teaches nine powerful skills for resolving performance problems, strengthening trust and reliability, and eliminating inconsistency. Learn to hold anyone accountable, no matter their power, position, or authority.
                                </p>

                                <h3 className='videotitle'>PREVIEW THE COURSE</h3>
                                <a target="_blank" href='https://www.youtube.com/c/CrucialLifeChangingSkills'>
                                    <video controls
                                        src=""
                                        poster="/classets/img/cc1-vid.jpg"
                                        width="100%">
                                    </video>
                                </a>
                            </div>



                        </div>
                        <div class="col-md-6 form-area ptt-10">
                            <form id="contactForm" class="row formb" onSubmit={WorkshopsForm}>
                                <div class="col-lg-12 contact-title">
                                    <h3 className='formh3 ptt-5'>
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
                                    <input type="text" name='designation' placeholder="Designation*" required/>
                                </div>



                                <div class="col-md-6 col-6">
                                    <select name='slot' required>
                                        <option value="">Pick any Slot*</option>                                        
                                   
                                        <option value="Workshop–4th-&-5th-March,2024">Workshop– 4th & 5th March, 2024</option>

                                    
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
                </div>
            </section>


            <section className='testmonials text-center pbb-30 ptt-50 testmbg'>
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

            <section class="workshops">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 contact-title">
                            <h1>Our Upcoming Programs</h1>
                        </div>
                     


                      

                      
                        
                        <div class="col-md-4 workshop-col">
                            <div class="row workshop-row">
                                <div class="col-md-12 workshop-content">
                                    <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                                    <h4>CRUCIAL CONVERSATIONS</h4>
                                    <p>for Accountability</p>
                                </div>
                                <h5 className='eventt'>Workshop</h5>
                                <div class="col-md-12 workshop-date">
                                    <h6><i class="fa fa-calendar" aria-hidden="true"></i> 4th & 5th March, 2024</h6>
                                    <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                                    <a href='#registered'><button class="register">REGISTER NOW</button></a>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

        </>
    )
}
