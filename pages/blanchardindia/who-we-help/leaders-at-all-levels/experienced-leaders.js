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
                <title>Leadership Training for Experienced Leaders | Blanchard International</title>
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/who-we-help/leaders-at-all-levels/experienced-leaders" />
                <meta name="description" content="Help your experienced leaders continue to grow their management skills with leadership development training from Blanchard." />
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
                                <li><a><span>EXPERIENCED LEADERS</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Experienced Leaders</h1>
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
                                <img src="/kbassets/img/kbnew/unlock-experienced-leaders-growth.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Enhance the growth potential of experienced leaders
                                </h2>
                                <p className="pbb-0">
                                A leader with experience needs support to take his or her team to the next level while staying on track for their next promotion. This requires being able to inspire and help others to improve and advance their careers.
                                </p>
                                <h4 className="hforh">Learn how to be an effective coach</h4>
                                <p className="pbb-0">
                                You can help your team members achieve their individual and collective goals by learning effective coaching skills.
                                </p>
                                <h4 className="hforh">Influence others</h4>
                                <p className="pbb-0">
                                Managers who develop strategies for meaningfully influencing decision-makers and organizational processes are more effective.
                                </p>
                                <h4 className="hforh">As you lead, you learn</h4>
                                <p className="pbb-0">
                                The culture of continuous learning in your team and organization can be reinforced by continuing your learning journey and developing your management skills.
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
                            <h2 className="sectionh">Set the pace - give them a road map for success</h2>
                            <p className="headingp">
                            Your experienced leaders manage the day-to-day execution of your goals and empower and engage your frontline staff. A leader at this level needs to be able to manage up and down and have the ability to have difficult conversations. For these managers to be successful in managing teams while managing executive leadership expectations, Blanchard emphasizes the importance of:
                            </p>
                            <ul className="ptt-20">
                                <li>Providing career development guidance and empowerment to direct reports</li>
                                <li>Identify and prioritize the organization's annual strategic goals.</li>
                                <li>Motivate, develop, and retain diverse talent by creating an inclusive environment</li>
                                <li>When necessary, make tough but necessary decisions by leading decisively, setting clear expectations, and setting clear expectations</li>
                                <li>Set the pace and standards for results</li>
                                <li>Develop a culture of innovation and idea generation among your team members</li>
                                <li>Establish a collaborative culture among team members and partners</li>
                                <li>Leadership and presence that inspires others</li>
                                <li>Anticipate and adapt to business needs, embracing change</li>
                            </ul>
                            
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/kbassets/img/kbnew/Experienced-managers-set-the-pace.jpg" alt="Images" />
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
                                    <h2 className='pbb-50'>Experienced Leader Programs</h2>
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
                                                <h3>SLII.®  Powering Inspired Leaders™</h3>
                                                <p>Only those who lead situationally can inspire their teams to rise to the challenge</p>
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
                                                <h3>Courageous Inclusion®</h3>
                                                <p>A framework for creating a more inclusive environment</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/courageous-inclusion' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                                <h3 className='colortheme'>Leading Virtually</h3>
                                                <p className='colorblack'>Proven formula to help virtual workers be effective and engaged</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/leading-virtually' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                            <h2 className="sectionh">Make experienced leaders the foundation of your success</h2>
                            <p className="headingp text-justify pbb-10">
                            Experienced managers are the silent backbone of an organization's management pool, forming the majority yet rarely receiving well-deserved recognition. Blanchard understands that these experienced managers can deliver results and potentially be further utilized. We collaborate with you to develop learning journeys that accelerate experienced managers, building upon their existing skills to drive exceptional performance. Unlock the potential of these leaders and put them on the path to organizational leadership with our evidence-based management training.
                            </p>                            
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Make-Experienced-Leaders-the-Foundation.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
