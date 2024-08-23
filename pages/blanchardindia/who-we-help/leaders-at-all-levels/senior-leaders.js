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
                <title>Leadership Training for Senior Leaders | Blanchard International</title>
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/who-we-help/leaders-at-all-levels/senior-leaders" />
                <meta name="description" content="Help your senior leaders continue to grow their management skills with leadership development training from Blanchard." />
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
                                <li><a><span>SENIOR LEADERS</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Senior Leaders</h1>
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
                                <img src="/kbassets/img/kbnew/Prepare-Your-Next-Generation-of-Executive.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Develop the next generation of executive leaders
                                </h2>
                                <p className="pbb-0">
                                Your company's senior leaders are the bridge between the executive team's vision and the managers who manage the company's day-to-day operations. They are responsible for turning broad goals into actionable objectives for their departments and operating units.
                                </p>
                                <h4 className="hforh">Engage with the company's vision</h4>
                                <p className="pbb-0">
                                These leaders communicate the connection between their work and the company's long-term vision through their leadership POVs and personal stories.
                                </p>
                                <h4 className="hforh">Motivate your team</h4>
                                <p className="pbb-0">
                                Great senior leaders inspire and engage their teams by communicating effectively, encouraging high performance and accountability, and fostering an inclusive work environment.
                                </p>
                                <h4 className="hforh">Become a customer-centric organization</h4>
                                <p className="pbb-0">
                                As advocates for exceptional internal and external customer service, senior leaders set the example for accountability, innovation, and soliciting feedback to anticipate customer needs.
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
                            <h2 className="sectionh">Senior leaders operationalize the organization’s vision and values</h2>
                            <p className="headingp">
                            Senior leaders transform the company’s vision into departmental and division goals, fostering cross-organizational collaboration, leading change initiatives, and inspiring innovation. These leaders are fundamental for constructing a comprehensive, successful atmosphere corresponding to the company's ideals. According to Blanchard, it is beneficial for senior leaders to acquire training underpinned by data and to have the capacity to discuss issues and exchange top practices with other executive-level peers. In this job capacity, senior leaders need to be able:
                            </p>
                            <ul className="ptt-20">
                                <li>Establish and implement appropriate work structures and processes to accomplish goals</li>
                                <li>Apply cross-disciplinary knowledge to issues and opportunities</li>
                                <li>Establish effective working relationships with people from other functions to achieve common goals</li>
                                <li>Establish a culture of adjustment and realignment to create a nimble organization</li>
                                <li>Engage diverse teams to solve business challenges by advancing diversity and inclusion</li>
                                <li>Investigate and adopt best practices from within and outside the organization</li>
                            </ul>                            
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/kbassets/img/kbnew/Senior-leaders-operationalize.jpg" alt="Images" />
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
                                    <h2 className='pbb-50'>Senior Leader Programs</h2>
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
                                                <h3>Coaching Essentials®</h3>
                                                <p>Essential coaching skills for managers and leaders</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/coaching-essentials' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                                <h3>Leadership Point of View™</h3>
                                                <p>Ignite your workforce with leaders who can define and share their leadership stories</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/leadership-point-of-view' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                                <h3 className='colortheme'>Team Leadership</h3>
                                                <p className='colorblack'>Leaders learn to diagnose their team's development and apply the right leadership style to build high-performance teams</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/team-leadership' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                                <h3>Conversational Capacity®</h3>
                                                <p>Remaining candid and curious under pressure</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/conversational-capacity' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                            <h2 className="sectionh">Invest in experienced managers to ensure your success</h2>
                            <p className="headingp text-justify pbb-10">
                            Your organization's leaders are senior leaders, providing vision, coaching, and tested processes and frameworks to ensure high-performance teams. They must, however, gather, learn from, and adapt proven strategies from your organization and beyond to achieve this. Learn how Blanchard can create customized leadership and team-building programs for senior leaders to enhance the creativity, execution, and productivity of your organization.
                            </p>                            
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Make-Experienced-Managers-the-Foundation.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
