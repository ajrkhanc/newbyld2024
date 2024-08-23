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
                <title>Leadership Training for Emerging Leaders | Blanchard International</title>
               <link rel="canonical" href="https://byldgroup.com/blanchardindia/who-we-help/leaders-at-all-levels/emerging-leaders" />
                <meta name="description" content="Support your high potential employees with leadership development training for emerging leaders from Blanchard." />
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
                                <li><a><span>EMERGING LEADERS</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Emerging Leaders</h1>
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
                                <img src="/kbassets/img/kbnew/Give-Your-High-Potential.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Develop your high potential employees' leadership skills
                                </h2>
                                <p className="pbb-0">
                                Individuals with high potential to contribute to you will exceed expectations and face new challenges. For those who demonstrate leadership potential, it is essential to provide training and learning opportunities to prepare them for future leadership roles in the organization.
                                </p>
                                <h4 className="hforh">Boost engagement</h4>
                                <p className="pbb-0">
                                Keeping high achievers engaged in their work requires career development opportunities.
                                </p>
                                <h4 className="hforh">Retain high performers</h4>
                                <p className="pbb-0">
                                Companies that invest in their employees are more likely to retain them.
                                </p>
                                <h4 className="hforh">Establish a leadership pool</h4>
                                <p className="pbb-0">
                                Employee retention and buy-in for management changes are higher in organizations that promote from within.
                                </p>
                                <h4 className="hforh">Demonstrate your values</h4>
                                <p className="pbb-0">
                                A path to the leadership team helps everyone feel seen, heard, and valued by investing in exceptional employees.
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
                            <h2 className="sectionh">Establish a clear path for future leaders</h2>
                            <p className="headingp">
                            According to Blanchard, you need to identify your high-performing individual contributors passionate about leadership to build your leadership talent pool from within. Emerging leaders must develop the skills following to transition from individual contributors to proactive, assertive leaders:
                            </p>
                            <ul className="ptt-20">
                                <li>Share information accurately and openly</li>
                                <li>Overcome challenges and take risks</li>
                                <li>Demonstrate excellent interpersonal skills</li>
                                <li>Cultivate curiosity about emerging industry and workplace trends</li>
                                <li>Collaborate with and support others</li>
                                <li>Work cooperatively with others across the organization</li>
                            </ul>
                            <p className="headingp">
                            Blanchard sees that all employees can be leaders in their own right—individual contributors lead themselves, while others may also affect the development of projects and teams. Our emerging leader plans aim to instill individuals with a leadership mindset, provide them with the necessary skills to undertake their current duties and prepare them for a more senior leadership position. Learners take part in multiple research-backed approaches encompassing all aspects of life, not just work, heightening their leadership capacity.
                            </p>
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/kbassets/img/kbnew/Create-a-Clear-Path.jpg" alt="Images" />
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
                                    <h2 className='pbb-50'>Emerging Leader Programs</h2>
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
                                                <h3>Self Leadership</h3>
                                                <p>Create a workforce of self leaders to power your organization</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/self-leadership' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                                <h3 className='colortheme'>Legendary Service®</h3>
                                                <p className='colorblack'>Consistently deliver ideal service that will keep customers coming back and create a competitive edge for your organization</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/legendary-service' className='kbbtn kbbtn--orange'>Learn More</a></div>
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

                                
                            </Slider>
                        </div>


                    </div>
                </div>
            </section>



            <section className="ptt-60 pbb-60 ExploreCustom Unleashleadership">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Help your emerging leaders reach their potential</h2>
                            <p className="headingp text-justify pbb-10">
                            Work with us to build communication and connection plans for your emerging leaders, linking the learning goals and objectives to your operational imperatives. Doing so will allow individual contributors to comprehend the value to them and their organization. Our individual contributor learning journeys are designed to integrate interaction points with a learner’s manager, which will incentivize them, keep them accountable, advise on skill application in their workplace setting, and urge new skills and desired behaviors.
                            </p>                            
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Help-Your-Emerging-Leaders.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
