import Head from 'next/head'
import Slider from "react-slick";

export default function Gettingthingsdone() {

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
                <meta name="description" content="LP Crucial Conversations For Mastering Dialogue" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <section>
                <iframe width="100%" height="660" src="https://www.youtube.com/embed/fUfy3GwgzYM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section class="gtdlpsecondrow">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 contact-title">
                            <h1 className='text-left'>Performance Management Improved</h1>
                            <p className='text-left'>
                            For creating healthy relationships amongst people and organizations, accountability becomes critical in nature. If people are able to hold each other accountable, they are able to build trust, fulfil commitments, efficiency, engagement, and more.
                            </p>
                            <p className='text-left'>
                            The course teaches nine powerful skills for resolving performance problems, strengthening trust and reliability, and eliminating inconsistency. Learn to hold anyone accountable, no matter their power, position, or authority.
                            </p>
                            
                        </div>

                        <div className='col-sm-6'>
                            <img src='/classets/img/cl-man-ccmd.png' />
                        </div>
                    </div>
                </div>
            </section>

            

            <section className='padd50s'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 alicc'>
                            <img className='lim' src='/classets/img/Crucial-Accountability.svg' />
                            <h3>Master the Art of Stress-free Productivity</h3>
                            <h4>Relieve the Cognitive Load and Peak the Performance</h4>
                            <h2>Join the Virtual Course Preview</h2>
                            <div class="workshop-date">
                                <h6><i class="fa fa-calendar" aria-hidden="true"></i>  December 22nd - 23rd, 2022</h6>
                                <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10.00 AM to 4.30 PM</h6>
                            </div>
                        </div>
                        <div class="col-md-6 form-area">
                            <form id="contactForm" class="row fbd">
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
                                    <input type="text" name='designation' placeholder="Designation" />
                                </div>

                                <div class="col-md-12">
                                    <select name='slot' required>
                                        <option value="">Interested In*</option>
                                        <option value="November 3rd, 2022 – Webinar">November 3rd, 2022 – Webinar</option>
                                        <option value="In-house Workshops">In-house Workshops</option>
                                        <option value="An Executive Overview">An Executive Overview</option>
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
                                    <h4>CRUCIAL <br /> CONVERSATIONS</h4>
                                    <p>for Accountability</p>
                                </div>
                                <h5 className='eventt'>Workshop</h5>
                                <div class="col-md-12 workshop-date">                                    
                                    <h6><i class="fa fa-calendar" aria-hidden="true"></i> December 22nd - 23rd, 2022</h6>
                                    <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10.00 AM to 4.30 PM</h6>
                                    <a href='#registered'><button class="register">REGISTER NOW</button></a>
                                </div>
                            </div>
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
                            <img className='ratingw' src='/classets/img/five-star-rating.png'/>
                            <h5 className='compname'>Crucial Conversations </h5>
                        </div>

                        <div className='testmdetails'>
                            <p className='testtext'>It was an absolutely engaging and knowledgeable session. There are times when we are at a loss on how to begin a conversation and almost 99% of the time those are important and difficult conversations. This program will help you understand the best way forward towards having those conversations in the most healthy way possible! Kudos to the team of Crucial Learning and a big thumbs up to Mr Jolly for making the session so interactive!</p>
                            <h4 className='testname'>Rohini Rastogi</h4>
                            <img className='ratingw' src='/classets/img/five-star-rating.png'/>
                            <h5 className='compname'>Middleby Celfrost Innovations Pvt. Ltd.</h5>
                        </div>
                    </Slider>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}