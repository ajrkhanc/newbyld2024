import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";

export default function ThanYouLP() {

    var settings2 = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
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

    return (
        <>
            <Head>
                <title>Leadership Training for New Managers | Blanchard International</title>
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/who-we-help/leaders-at-all-levels/new-managers" />
                <meta name="description" content="Support your new managers with leadership development training from Blanchard." />
                <link rel="icon" href="/blanchardindia/favicon.ico" />
            </Head>

            <section className="bredkums2 colortheme4bg pbb-100 border-bottom-left-radius-70">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/blanchardindia/">HOME</a></li>
                                <li className="brdlifirst"><a href="/blanchardindia/who-we-help">WHO WE HELP</a></li>
                                <li className="brdlifirst"><a href="/blanchardindia/who-we-help/leaders-at-all-levels">LEADERS AT ALL LEVELS</a></li>
                                <li><a><span>NEW MANAGERS</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>New Managers</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Innovativelearning contanerbgc'>
                <div className='container-fluid ptt-90 pbb-60 borderedus0 contanerbgc'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6 pa0000'>
                            <div className='prr-90'>
                                <img src="/kbassets/img/kbnew/business-meeting-office.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                    Ensure the success of new managers
                                </h2>
                                <p className="pbb-0">
                                    You want to ensure their success when promoting high-potential individual contributors into their first people manager role. You must support those just starting to manage people with the necessary training and leadership tools from the start.
                                </p>
                                <h4 className="hforh">Build early momentum</h4>
                                <p className="pbb-0">
                                    Provide new managers with the confidence and skills to lead productive teams.
                                </p>
                                <h4 className="hforh">Engage your employees</h4>
                                <p className="pbb-0">
                                    To shift from being an individual contributor, you must learn how to balance execution with employee engagement.
                                </p>
                                <h4 className="hforh">Communicate effectively</h4>
                                <p className="pbb-0">
                                    Clear communication of organizational goals and how the team's work supports them is essential for new managers to succeed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ptt-60 pbb-60 uncommonapproach rightimgc colortheme2bg">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Empower first-time managers with decades of training experience</h2>
                            <p className="headingp">
                                Not surprisingly, 49% of new managers don't feel ready to succeed, as 60% have not received adequate training for their new roles. Excerpted from the bestselling book The New One Minute Manager®, describes the mindset, key conversations, and communication skills entry-level managers need to succeed quickly, including how to:
                            </p>
                            <ul className="ptt-20">
                                <li>Move direct reports forward on goals</li>
                                <li>Provide timely, constructive, balanced, and actionable feedback</li>
                                <li>Conduct one-on-ones</li>
                                <li>Ensure accountability for results and progress</li>
                                <li>Review goals regularly</li>
                                <li>Transparent dialogue and active listening are key to communicating clearly and making meaning for others</li>
                                <li>Providing resources and empowering direct reports to deliver responsibilities</li>
                                <li>Provide guidance, coaching, and training to team members</li>
                                <li>Support the team's goals by advocating for resources</li>
                            </ul>

                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/kbassets/img/kbnew/Empower-first-time-managers.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='ExperiencesCourses pbb-60 ptt-50'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <h2 className='pbb-50'>New Manager Programs</h2>
                                </div>
                                <div className='col-sm-4 viewall'>
                                    <a href='/blanchardindia/our-content/programs'>Explore Additional Solutions <i class="bx bx-right-arrow-alt"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12'>
                            <Slider {...settings2}>
                                <div className='slxpd30'>
                                    <div className='slbox greenboxc forwhitec'>
                                        <div className='slboxheader'>
                                            <div className='slboxfigure'>
                                                <div className='slboximg1'></div>
                                            </div>
                                        </div>
                                        <div className='slboxbottom'>
                                            <div className="slboxheight">
                                                <span className='sltype'>Program</span>
                                                <h3>Blanchard Management Essentials®</h3>
                                                <p>The fundamental skills for every manager</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/blanchard-management-essentials' className='kbbtn kbbtn--orange'>Learn More</a></div>
                                    </div>
                                </div>

                                <div className='slxpd30'>
                                    <div className='slbox darkblueboxc forwhitec'>
                                        <div className='slboxheader'>
                                            <div className='slboxfigure'>
                                                <div className='slboximg2'></div>
                                            </div>
                                        </div>
                                        <div className='slboxbottom'>
                                            <div className="slboxheight">
                                                <span className='sltype'>Program</span>
                                                <h3>Building Trust</h3>
                                                <p>Trust is at the heart of every relationship, and it’s especially critical in the workplace</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/building-trust' className='kbbtn kbbtn--orange'>Learn More</a></div>
                                    </div>
                                </div>

                                <div className='slxpd30'>
                                    <div className='slbox darkwhiteboxc forwhitec'>
                                        <div className='slboxheader'>
                                            <div className='slboxfigure'>
                                                <div className='slboximg3'></div>
                                            </div>
                                        </div>
                                        <div className='slboxbottom'>
                                            <div className="slboxheight">
                                                <span className='sltype'>Program</span>
                                                <h3 className='colortheme'>Conversational Capacity®</h3>
                                                <p className='colorblack'>Remaining candid and curious under pressure</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/conversational-capacity' className='kbbtn kbbtn--orange'>Learn More</a></div>
                                    </div>
                                </div>

                                <div className='slxpd30'>
                                    <div className='slbox darkblueboxc forwhitec'>
                                        <div className='slboxheader'>
                                            <div className='slboxfigure'>
                                                <div className='slboximg2'></div>
                                            </div>
                                        </div>
                                        <div className='slboxbottom'>
                                            <div className="slboxheight">
                                                <span className='sltype'>Program</span>
                                                <h3>Essential Motivators™</h3>
                                                <p>Boost collaboration by better understanding yourself and others</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/essential-motivators' className='kbbtn kbbtn--orange'>Learn More</a></div>
                                    </div>
                                </div>
                            </Slider>
                        </div>


                    </div>
                </div>
            </section>



            <section className="ptt-60 pbb-60 ExploreCustom Unleashleadership">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Establish a foundation for success for new managers</h2>
                            <p className="headingp text-justify pbb-10">
                                Blanchard recognizes that even the most successful individual contributors could struggle when taking on the duty of people manager. Join us in creating learning paths for your new people managers to help build their skills and get their teams geared up for success. Together, we will formulate a training program that links learning goals and objectives with your operational priorities, aiding individual contributors to comprehend the personal benefits and the significance it holds for the organization.
                            </p>
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>

                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Give-New-Managers-a-Foundation.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
