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
                <title>Developing Leadership Capability | Blanchard International</title>
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/our-content/challenges/leadership-capabilities" />
                <meta name="description" content="Learn the core capabilities today’s leaders need to be successful and how Blanchard’s programs can develop your organization’s leadership capability." />
                <link rel="icon" href="/blanchardindia/favicon.ico" />
            </Head>

            <section className="bredkums2 colortheme4bg pbb-100 border-bottom-left-radius-70">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/blanchardindia/">HOME</a></li>
                                <li className="brdlifirst"><a href="/blanchardindia/our-content">OUR CONTENT</a></li>
                                <li className="brdlifirst"><a href="/blanchardindia/our-content/challenges">CHALLENGES</a></li>
                                <li><a><span>LEADERSHIP CAPABILITIES</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Leadership Capabilities</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60 uncommonapproach rightimgc">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Leadership isn’t limited to the C-suite</h2>
                            <p className="headingp">
                            Successful leaders are not defined by their position in the company org chart, they're defined by their leadership capabilities. Leadership capability includes people at all levels in your organization being able to:
                            </p>
                            <ul className="ptt-20">
                                <li>Communicate and collaborate effectively with diverse groups</li>
                                <li>Lead others through change by adapting to it</li>
                                <li>Make sound decisions by thinking strategically</li>
                                <li>Motivate and inspire others</li>
                                <li>Continuously learn and improve</li>
                                <li>Utilize technology to drive business results</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/kbassets/img/kbnew/Leadership-isn’t-limited-to.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Innovativelearning'>
                <div className='container-fluid ptt-90 pbb-60 borderedus0 colortheme2bg'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6 pa0000'>
                            <div className='prr-90'>
                                <img src="/kbassets/img/kbnew/Great-leaders-learn-to-adapt.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Leadership is about adapting your style to meet the needs of your people
                                </h2>
                                <p className="pbb-0">
                                The Blanchard team values serving the needs of its team members very much. The best leaders take the time to understand each employee's unique needs, abilities, and development levels and adjust their leadership style accordingly. Your leaders will learn how to do the following when you invest in their leadership capability:
                                </p>
                                <h4 className="hforh">Clarify your expectations</h4>
                                <p className="pbb-0">
                                By setting clear goals and expectations, executives and managers lead others effectively and support them.
                                </p>
                                <h4 className="hforh">Build trust to create an inclusive culture</h4>
                                <p className="pbb-0">
                                Team members feel comfortable sharing ideas, thoughts, and concerns with leaders when they are transparent, honest, and reliable.
                                </p>
                                <h4 className="hforh">Identify growth opportunities by evaluating performance</h4>
                                <p className="pbb-0">
                                Using data and metrics to track progress and identify areas for improvement, effective leaders monitor and evaluate their teams' performance.
                                </p>
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
                                    <h2 className='pbb-50'>Recommended Solutions</h2>
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
                                            <h3>Servant Leadership Essentials™</h3>
                                            <p>Working side-by-side in partnership with people</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/servant-leadership-essentials' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                            <h3 className='colortheme'>SLII®. Powering Inspired Leaders™</h3>
                                            <p className='colorblack'>Only those who lead situationally can inspire their teams to rise to the challenge</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/slii' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                            <h3>Coaching Essentials®</h3>
                                            <p>Essential coaching skills for managers and leaders</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/coaching-essentials' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                            <h2 className="sectionh">Develop your organization's leadership skills</h2>
                            <p className="headingp text-justify pbb-10">
                            Your organization’s success relies upon your ability to scale your managers’ leadership capability. Let us build a custom learning journey to help your managers unlock their leadership potential and become your competitive advantage.
                            </p>                            
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Expand-your-organization’s-leadership-capability.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
