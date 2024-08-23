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
                <title>Fostering Diversity and Inclusion | Blanchard International</title>
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/our-content/challenges/diversity-inclusion" />
                <meta name="description" content="Gain understanding of how to foster diversity, equity, and inclusion in the workplace with the help of Blanchard’s programs." />
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
                                <li><a><span>DIVERSITY & INCLUSION</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Diversity & Inclusion</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60 uncommonapproach rightimgc">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">
                            Everyone feels valued, seen, and heard in an inclusive workplace
                            </h2>
                            <p className="headingp">
                            Diverse, inclusive, and belonging issues must be addressed in the workplace in order to create cultures and workforces that reflect the customers and communities a business serves. A comprehensive DEI program should achieve the following outcomes:
                            </p>
                            <ul className="ptt-20">
                                <li>
                                    Fair and equal access to opportunities and resources for a diverse workforce
                                </li>
                                <li>
                                    An environment where all individuals feel valued, respected, and supported
                                </li>
                                <li>
                                    People from all backgrounds are able to bring their whole selves to the workplace
                                </li>
                                <li>
                                    A sense of belonging where everyone is accepted and valued as a member of the organization
                                </li>
                                                         
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/An-inclusive-workplace.jpg" alt="Images" />
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
                                <img src="/kbassets/img/kbnew/Leaders-build-a-more-inclusive.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                One interaction at a time, leaders build a more inclusive workplace
                                </h2>
                                <p className="pbb-0">
                                A company's culture is shaped by its leadership. To create an environment that values diversity, inclusion, and belonging, effective leaders take a proactive approach by modeling inclusive behaviors within the organization. DEI programs from Blanchard equip leaders with the following skills:
                                </p>
                                <h4 className="hforh">Accountability</h4>
                                <p className="pbb-0">
                                Leaders learn how to hold themselves accountable by examining and addressing their biases. They are open to feedback and make changes when necessary.
                                </p>
                                <h4 className="hforh">Lead by example</h4>
                                <p className="pbb-0">
                                Leaders’ actions and behaviors create workplace norms that significantly impact the company’s culture. Inclusive leaders create a culture that values diversity and inclusion by setting clear expectations and leading by example.
                                </p>
                                <h4 className="hforh">Promote belonging</h4>
                                <p className="pbb-0">
                                Leaders who value individual differences and intentionally create opportunities for employees to connect and collaborate cultivate a sense of community.
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
                                                <h3>Courageous Inclusion®</h3>
                                                <p>A framework for creating a more inclusive environment</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/courageous-inclusion' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                            <h3 className='colortheme'>SLII.® Powering Inspired Leaders™</h3>
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
                                            <h3>Team Leadership</h3>
                                            <p>Leaders learn to diagnose their team's development and apply the right leadership style to build high-performance teams</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/team-leadership' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                            <h2 className="sectionh">Develop an intentionally inclusive culture</h2>
                            <p className="headingp text-justify pbb-10">
                            We will create a custom learning journey to help your leaders learn how to create a work environment where everyone feels valued and respected based on their unique experiences, perspectives, and contributions.
                            </p>                            
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Create-an-intentionally-inclusive-culture.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
