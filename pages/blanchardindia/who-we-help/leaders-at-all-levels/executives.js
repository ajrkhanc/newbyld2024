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
                <title>Leadership Training for Executives | Blanchard International</title>
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/who-we-help/leaders-at-all-levels/executives" />
                <meta name="description" content="Help your executives continue to grow their management skills with leadership development training from Blanchard." />
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
                                <li><a><span>EXECUTIVES</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Executives</h1>
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
                                <img src="/kbassets/img/kbnew/Inspired-Executives-Empower-Long-Term.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Inspired executives empower long-term success
                                </h2>
                                <p className="pbb-0">
                                Today’s executive must combine business acumen, inclusive leadership, and management skills that inspire everyone to do their best while aligning the company's purpose, culture, and strategic imperatives.
                                </p>
                                <h4 className="hforh">Think strategically</h4>
                                <p className="pbb-0">
                                Develop a long-term strategy to build organizational resilience and achieve long-term success by analyzing and evaluating the company's opportunities and challenges.
                                </p>
                                <h4 className="hforh">Authentic leadership</h4>
                                <p className="pbb-0">
                                Be self-aware, lead with integrity, communicate openly, and build trust with their team.
                                </p>
                                <h4 className="hforh">Developing future leaders</h4>
                                <p className="pbb-0">
                                Develop the competencies and skills that future leaders will need to succeed by identifying and nurturing the next generation of leaders.
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
                            <h2 className="sectionh">Inspired executives unlock untapped potential</h2>
                            <p className="headingp">
                            Blanchard suggests that top executives should prioritize employee well-being and cultivate an environment of empowerment and collaboration. They lead by example, serve as mentors, and strive to develop employees' untapped potential. Building on past success and focusing on excellence, these leaders find unique ways to contribute to organizational growth. Executives can benefit from a deliberate executive development journey that focuses on developing the following skills:
                            </p>
                            <ul className="ptt-20">
                                <li>Develop a culture of self-leadership</li>
                                <li>Establish and mobilize a long-term talent pipeline</li>
                                <li>Drive innovation and transformation to position the company for success</li>
                                <li>Ensure initiatives and priorities are aligned with strategic business goals</li>
                                <li>Promote alignment of key stakeholders across functions</li>
                                <li>Get things done by establishing, communicating, and reinforcing shared values and norms</li>
                                <li>Develop a culture of idea generation</li>
                                <li>Provide opportunities for organizational experimentation and innovation</li>
                            </ul>                            
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/kbassets/img/kbnew/Inspired-executives-unlock-untapped-potential.jpg" alt="Images" />
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
                                    <h2 className='pbb-50'>Executive Programs</h2>
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
                                                <h3>Leading People Through Change®</h3>
                                                <p>A proven solution for leading organizational change</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/leading-people-through-change' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                                                <h3 className='colortheme'>Servant Leadership Essentials™</h3>
                                                <p className='colorblack'>Working side-by-side in partnership with people</p>
                                            </div>
                                            <a href='/blanchardindia/our-content/programs/servant-leadership-essentials' className='kbbtn kbbtn--orange'>Learn More</a></div>
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
                            </Slider>
                        </div>


                    </div>
                </div>
            </section>



            <section className="ptt-60 pbb-60 ExploreCustom Unleashleadership">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Develop executives who can prepare your organization for the next generation of success</h2>
                            <p className="headingp text-justify pbb-10">
                            Transformational executives are drivers of success, always focused on their team's well-being. They foster collaboration and innovation by investing in employee growth and promoting transparency. Most importantly, they seek to identify and nurture the new wave of leaders to pave the way for a successful future. Discover how Blanchard can work with your business to build an effective executive relationship training plan that lays the foundation for long-term prosperity.
                            </p>                            
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Empower-Executives-to-Prepare.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
