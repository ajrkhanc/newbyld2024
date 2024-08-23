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
                <title>InsideOut™ Coaching</title>
                <meta name="description" content="Transcend the productivity tips and learn the personal workflow management system via instruction, application, and coaching. This virtual course preview is a perfect introduction for evaluating a course for their team or organization." />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9D9QEXG1BB"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-9D9QEXG1BB');
          `,
                    }}
                />
            </Head>
            <section>
                <iframe width="100%" height="560" src="https://www.youtube.com/embed/_oqHzgTf1F4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section class="gtdlpsecondrow">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 contact-title">
                            <div className='sec-title3 text-left'>
                                <h4 className='countertoph2 text-left font30'>InsideOut Mindset</h4>
                                <div class="heading-border-line left-style"></div>
                            </div>

                            <p className='text-left mbb-10 ptt-20 font18'>
                                Any attempt to improve performance begins with the understanding that everyone has the capacity to learn and perform at a higher level. The key to better performance usually lies not in knowing more about what to do, but in doing more of what we already know how to do.
                            </p>
                            <p className='text-left mbb-0 font18'>
                                Inside Out Coaching helps leaders increase their workplace coaching capabilities to unleash the hidden potential inside their team members. Its an approach designed to increase the leaders' effectiveness. It's simple enough for managers to use immediately, flexible enough to apply in any situation, and can be used from the board room to the manufacturing floor.
                            </p>
                            <h4 className="countertoph2 text-left">Our solution helps:</h4>
                            <div className=''>
                                <ul className='iocchecklist paac'>
                                    <li><i class="fa fa-check-circle"></i> 
                                        Achieve organizational goals.
                                    </li>
                                    <li><i class="fa fa-check-circle"></i> 
                                        Improve employee engagement, satisfaction, retention, productivity, and performance.
                                    </li>
                                    <li><i class="fa fa-check-circle"></i> 
                                        Align and empower your people to focus on the most important aspects of the business.
                                    </li>
                                    <li><i class="fa fa-check-circle"></i> 
                                        Become nimbler at capitalizing on business opportunities.
                                    </li>
                                    <li><i class="fa fa-check-circle"></i> 
                                        Unlock the skills people already have and unleash their ability to learn new skills.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-sm-5'>
                            <img src='/assets/img/icf-man.png' />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='ptt-40 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 newcstimg'>
                            <h4 className="countertoph2 text-left">Organizations around the world have adopted InsideOut Development coaching because of its competency to make connections and ignite actions that bring out results.</h4>
                            <div className='rs-estimate'>
                                <ul className='estimate-info mtt-5'>
                                    <li>
                                        Leaders spot situations that require undivided attention and implement appropriate coaching tools
                                    </li>
                                    <li>
                                        Be part of hands-on group discussions, videos, activities, and coaching practice
                                    </li>
                                    <li>
                                        You are provided access to practical tools and supports to bring out the best in your team
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 newcstimg2'>
                            <div className=''>
                                <img src='/assets/img/icfimg1.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='ptt-40 pbb-40 brboxbg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                        <div className='sec-title3 text-left pbb-50'>
                                <h4 className='countertoph2 text-center font30'>What do managers usually struggle with?</h4>
                                <div class="heading-border-line center-style"></div>
                            </div>
                           
                        </div>
                        <div className='col-md-6'>
                            <div className=''>
                                <ul className='iocchecklist'>
                                    <li><i class="fa fa-check-circle"></i> 38% struggle with developing strategies to meet goals</li>
                                    <li><i class="fa fa-check-circle"></i> 38% face challenges with providing feedback of any kind</li>
                                    <li><i class="fa fa-check-circle"></i> 36% ask questions to help employees create their own solutions</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className=''>
                                <ul className='iocchecklist'>
                                    <li><i class="fa fa-check-circle"></i> 34% create accountability for team members</li>
                                    <li><i class="fa fa-check-circle"></i> 32% struggle to instill confidence in their team</li>
                                    <li><i class="fa fa-check-circle"></i> 16% do not want to hold difficult conversations</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='ptt-40 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 newcstimg'>
                            <h4 className="countertoph2 text-left">An effective manager creates a common language within the team and the team that speaks the same language:</h4>
                            <div className='rs-estimate'>
                                <ul className='iocchecklist paac'>
                                    <li><i class="fa fa-check-circle"></i> Has higher Impact</li>
                                    <li><i class="fa fa-check-circle"></i> Experiences improved productivity</li>
                                    <li><i class="fa fa-check-circle"></i> Has greater allegiance</li>
                                    <li><i class="fa fa-check-circle"></i> Improves efficiency</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 newcstimg2'>
                            <div className='text-center'>
                                <img src='/assets/img/icfimg3.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            

            <section className='padd50s'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 alicc'>
                            <img className='lim' src='/assets/img/insideco.jpg' />
                            <h2>Join the Virtual Course Preview</h2>
                            <div class="workshop-date">
                                <h6><i class="fa fa-calendar" aria-hidden="true"></i> May 13th, 2022</h6>
                                <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10.00 AM to 4.30 PM</h6>
                            </div>
                        </div>
                        <div class="col-md-6 form-area">

                            <form id="contact-form" className='clientcornner pbb-20 row icff'>
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
                                    <input id='submitbuttonform' class="formbtn icfsubmit" type="submit" value="Submit" />
                                </div>
                                <p id="showlabel" style={{ display: "none" }}></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className='testmonials text-center pbb-50 bgcc icfsl'>
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
        </>
    )
}