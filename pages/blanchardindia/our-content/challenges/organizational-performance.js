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
                <title>Enhancing Organizational Performance | Blanchard International</title>
        <link rel="canonical" href="https://byldgroup.com/blanchardindia/our-content/challenges/organizational-performance" />
                <meta name="description" content="Learn how Blanchard can help leaders at all levels improve the skills that improve overall organizational performance and effectiveness." />
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
                                <li><a><span>ORGANIZATIONAL PERFORMANCE</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Organizational Performance</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60 uncommonapproach rightimgc">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">
                            Optimize organizational performance to meet the demands of today's competitive business
                            </h2>
                            <p className="headingp">
                            The demands of stakeholders and competition have placed increasing pressure on organizations to perform well in today's business environment. To maintain a high level of organizational performance, leaders must master these capabilities:
                            </p>
                            <ul className="ptt-20">
                                <li>
                                Align strategies, processes, and structures with the organization's overall goals
                                </li>
                                <li>
                                Workflows and processes should be defined and managed efficiently
                                </li>
                                <li>
                                Agility in adapting to changing market conditions
                                </li>
                                <li>
                                Take an innovative approach to their work and the company's products and services
                                </li>                                               
                            </ul>
                            <p className="headingp">
                            Promote a culture of inclusivity, diversity, social responsibility, and sustainability
                            </p>
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/kbassets/img/kbnew/Optimize-organizational-performance.jpg" alt="Images" />
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
                                <img src="/kbassets/img/kbnew/Effective-leaders-and-engaged.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Exceptional organizational performance requires the following ingredients
                                </h2>
                                <p className="pbb-0">
                                It is the roles of leaders to help their organizations improve performance, operate more efficiently, achieve goals, and grow. Blanchard programs teach leaders how to cultivate a range of skills to support organizational effectiveness, including:
                                </p>
                                <h4 className="hforh">Set a clear vision and strategy</h4>
                                <p className="pbb-0">
                                Clearly communicate the organization's vision and strategy to all employees.
                                </p>
                                <h4 className="hforh">Establish an accountability and excellence culture</h4>
                                <p className="pbb-0">
                                Encourage high standards of performance and reward employees for achieving them.
                                </p>
                                <h4 className="hforh">Promote diversity, equity, and inclusion</h4>
                                <p className="pbb-0">
                                Ensure that all employees feel valued, respected, and included.
                                </p>
                                <h4 className="hforh">Encourage innovation and creativity to be adaptive and agile</h4>
                                <p className="pbb-0">
                                To respond quickly to new opportunities, challenges, and trends in the market, leaders need to be adaptable to change.
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
                                                <h3>Leadership Point of View™</h3>
                                                <p>Ignite your workforce with leaders who can define and share their leadership stories</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/leadership-point-of-view' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                            <h3>Courageous Inclusion®</h3>
                                            <p>A framework for creating a more inclusive environment</p>
                                            </div>
                                            <a href='/blanchardindia/programs/courageous-inclusion' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                            <h3 className='colortheme'>Building Trust</h3>
                                            <p className='colorblack'>Trust is at the heart of every relationship, and it’s especially critical in the workplace</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/building-trust' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                            </Slider>
                        </div>


                    </div>
                </div>
            </section>



            <section className="ptt-60 pbb-60 ExploreCustom Unleashleadership">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Improve the performance of your organization</h2>
                            <p className="headingp text-justify pbb-10">
                            In today's fast-paced business environment, leaders need to adapt strategies quickly, support critical brand values, and keep their people focused on achieving their goals. Improve your organizational performance at all levels with a custom learning journey built by us
                            </p>                            
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Accelerate-your-organizational-performance.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
