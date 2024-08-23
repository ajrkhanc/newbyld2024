import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";

export default function ThanYouLP() {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
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
                <title>About Us | Blanchard International</title>
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/about-us" />
                <meta name="description" content="Learn what makes Blanchard’s leadership and management training content the industry leader, used by the world’s most innovative companies." />
                <link rel="icon" href="/blanchardindia/favicon.ico" />
            </Head>

            <section className="bredkums bgdarkc borderedus0">
                <div className="container-fluid poss bcxx">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/blanchardindia/">HOME</a></li>
                                <li><a><span>ABOUT US</span></a></li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 pa0000">
                                <img className="" src="/kbassets/img/kbnew/Debbie-Ung.jpg" alt="Images" />
                            </div>
                            <div className="col-sm-6">
                                <div className="innerbedkms">
                                    <h1>Great Managers Build Great Companies</h1>
                                    <p>
                                    The top training company in South Asia, Blanchard Research and Training LLP, specializes in developing leaders at all levels of the organizational structure. having been in operation since 2008 in India under the direction of Mr. Yogesh Sood, a seasoned professional in company operations and leadership development.
                                    </p>
                                    <p>
                                    In today's dynamic corporate environment, Blanchard Research and Training LLP offers specialized, efficient training and coaching programs. With the correct training and skill set, managers can positively impact a business, in our opinion. Our goal is to develop managers so they can build high-performing teams, come up with creative business ideas, and achieve the best financial results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-30 uncommonapproach bgdarkc">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">To Transform Potential into Performance, Blanchard Starts at the Core of Leadership</h2>
                            <p className="headingp">
                            To help leaders see every interaction as a chance to build relationships and promote trust, Blanchard starts at the core of leadership. We provide engaging, human-powered learning opportunities that help executives operate at their highest potential. These motivated leaders become the most effective catalysts for development and change within their teams, businesses, and organizations.
                            </p>                     
                        </div>
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Enabling-Every-Child-to.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-30 uncommonapproach contanerbgc">
                <div className="container">
                    <div className="row align-items-center">

                    <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/kbassets/img/kbnew/Hero-Video-frame.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">Why Blanchard</h2>
                            <p className="headingp">
                            By maximizing both individual and organizational performance, we enable quantifiable development and genuine transformation.
                            </p>
                            <ul className="ptt-20">
                                <li>Research-backed, pertinent, and resonant content.</li>
                                <li>Simple, effective models with evidence to support them.</li>
                                <li>Learning activities that provide connections and results.</li>
                                <li>Coaching that increases performance.</li>
                                <li>Measuring techniques that provide outcomes.</li>
                            </ul>

                        </div>
                        
                    </div>
                </div>
            </section>


            <div className="BlanchardAdvantage">
                <div className="container pbb-50 ptt-30">
                    <div className='row'>
                        <div className='col-sm-12 text-center pbb-40'>
                            <h2 className='sectionh ptt-50'>Our Vision</h2>
                            <h3 className="pbb-40">Leaders Powered for Good</h3>
                            <hr className=""></hr>
                            <h2 className='sectionh ptt-50'>Our Mission</h2>
                            <p className='textbox fontc24 pbb-40'>
                            The proven curriculum, dynamic learning opportunities, and leadership experts <br></br>at Blanchard maximize both employee and company success.
                            </p>
                            <hr></hr>

                            <h2 className='sectionh ptt-50'>Our Values</h2>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <h4>Be True</h4>
                                <p>
                                We uphold our beliefs in all our decisions, including corporate ones and daily encounters. With an emphasis on openness and honesty, we work tirelessly to put the needs of our customers and employees first continually.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <h4>Scale Kindness</h4>
                                <p>
                                Do no harm. With grace, love, and compassion, we serve others. We always pause to consider "Is it fair, balanced, and right?" as though the entire world is on the watch.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <h4>Transform Together</h4>
                                <p>
                                One person cannot achieve transformation. Teams are motivated to achieve new levels of success by heart and mind-aligned leaders.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <h4>Unwavering Pursuit</h4>
                                <p>
                                Authentic leadership entails a constant search for knowledge. We encourage people to constantly redefine their personal bests as a constant resource for those navigating this journey.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-12 OurCommitment">
                            <h2 className='sectionh ptt-50'>Our Commitment to an Inclusive Workplace</h2>
                           
                        </div>
                    </div>
                </div>
            </div>


            <section className='SuccessStory'>
                <div className='container ptt-90 pbb-60'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Building Tomorrow Leaders, Today
                                </h2>
                                <p className="pf16w">
                                The Ken Blanchard Companies were established in 1979 by Drs. Ken and Marjorie Blanchard with three straightforward objectives: to improve people's lives, promote workplace effectiveness and human value, and assist each organization we engage with in being the provider, employer, and investment of choice.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-6'>
                            <div className='pll-100 mimg100 imgborder'>
                                <img src="/kbassets/img/kbnew/Ken-and-Margie-about-us.jpg" alt="Images" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <section className=" ExploreCustom Ourpeople">
                <div className="container ptt-70 pbb-60">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/kbassets/img/kbnew/our-people.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">Our People</h2>
                            <p className="headingp text-justify pbb-10">
                            It takes a team of committed learning and development specialists with various skill sets to deliver cutting-edge leadership development solutions to the world's top businesses and individuals. We have created a business that draws learning and leadership development experts who carry out research and provide thought leadership that influences how we grow our employees.
                            </p>
                            <div className="twobtninone">
                                <a href='#' className='kbbtn kbbtn--orange mtt-20'>Our People</a>
                                <a href='#' className='kbbtn kbbtn--orange mtt-20 blanbtn'>Our Culture</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="ptt-60 pbb-60 ExploreCustom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Working at Blanchard</h2>
                            <p className="headingp text-justify pbb-10">
                                Are you a leadership development professional who strives to be part of an organization that is committed to creating a positive impact on the way people work, worldwide? At Blanchard, we strive to foster a collaborative, innovative, and values-driven culture with an emphasis on personal and professional growth.
                            </p>
                            <div className="twobtninone">
                                <a href='#' className='kbbtn kbbtn--orange mtt-20'>Join Us</a>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Why-blanchard.jpg" alt="Images" />
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

            {/* <section className="AwardsRecognition">
                <div className="container ptt-60 pbb-60">
                    <div className="row align-items-center">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8 text-center">
                            <h2 className="sectionh">Award-winning Programs</h2>
                            <p className="headingp pbb-10 fontc20">
                            With offices all around the world, the Blanchard team can provide you customized leadership development training and courses that cover all continents and cultures.
                            </p>
                        </div>

                        <div className="col-sm-12">
                            <Slider {...settings}>
                                <div className="awardboxc">
                                    <div className="avardinnerc">
                                        <img className="" src="/kbassets/img/kbnew/2023-Training-Industry-Top-20-Leadership-Training.png" alt="Images" />
                                        <p className="ptt-10">Top 20 Leadership Training Company</p>
                                    </div>
                                </div>

                                <div className="awardboxc">
                                    <div className="avardinnerc">
                                        <img className="" src="/kbassets/img/kbnew/2023-Training-Industry-Top-20-Leadership-Training.png" alt="Images" />
                                        <p className="ptt-10">Top 20 Leadership Training Company</p>
                                    </div>
                                </div>

                                <div className="awardboxc">
                                    <div className="avardinnerc">
                                        <img className="" src="/kbassets/img/kbnew/2023-Training-Industry-Top-20-Leadership-Training.png" alt="Images" />
                                        <p className="ptt-10">Top 20 Leadership Training Company</p>
                                    </div>
                                </div>

                                <div className="awardboxc">
                                    <div className="avardinnerc">
                                        <img className="" src="/kbassets/img/kbnew/2023-Training-Industry-Top-20-Leadership-Training.png" alt="Images" />
                                        <p className="ptt-10">Top 20 Leadership Training Company</p>
                                    </div>
                                </div>

                                <div className="awardboxc">
                                    <div className="avardinnerc">
                                        <img className="" src="/kbassets/img/kbnew/2023-Training-Industry-Top-20-Leadership-Training.png" alt="Images" />
                                        <p className="ptt-10">Top 20 Leadership Training Company</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        <div className="col-sm-12 text-center ptt-50">
                            <div className="twobtninone">
                                <a href='#' className='kbbtn kbbtn--orange mtt-20'>View All Awards</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

            <section className='SuccessStory'>
                <div className='container ptt-90 pbb-60'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 text-center'>
                            <div>
                                <h2>
                                    Local Presence, Global Reach
                                </h2>
                                <p className="pf16w">
                                    The Blanchard team is located around the globe, bringing you localized leadership development training and courses across cultures and continents.
                                </p>
                            </div>
                        </div>

                        {/* <div className="col-sm-12 text-center pbb-60">
                            <div className="twobtninone">
                                <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Explore our global locations</a>
                            </div>
                        </div> */}

                        <div className='col-sm-3'>
                            <div className="countercc">
                                <h3>300+</h3>
                                <span>Facilitators & Consultants</span>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className="countercc">
                                <h3>70</h3>
                                <span>Countries</span>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className="countercc">
                                <h3>29</h3>
                                <span>Languages</span>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className="countercc">
                                <h3>140+</h3>
                                <span>Coaches</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
