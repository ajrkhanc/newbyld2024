import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';

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
                <title>Essential Motivators™ - Motivation Training Program for Employees</title>
                <meta name="robots" content="INDEX, FOLLOW" />                <link rel="canonical" href="https://byldgroup.com/blanchardindia/our-content/programs/essential-motivators" />
                <meta name="description" content="The motivation training program for employees by Blanchard India aims at developing a genuine working culture in an organization and provide the right motivation." />
                <link rel="icon" href="/blanchardindia/favicon.ico" />

                {/* og tag */}
                <meta property="og:url" content="https://byldgroup.com/blanchardindia/our-content/programs/essential-motivators" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Essential Motivators™ - Motivation Training Program for Employees" />
                <meta property="og:description" content="The motivation training program for employees by Blanchard India aims at developing a genuine working culture in an organization and provide the right motivation." />
                <meta property="og:image" content="https://byldgroup.com/kbassets/img/Blanchard_Global%20Partner%20Logo_India-01.png" />


                {/* TWITTER TAG */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Blanchard_India" />
                <meta name="twitter:title" content="Essential Motivators™ - Motivation Training Program for Employees" />
                <meta name="twitter:description" content="The motivation training program for employees by Blanchard India aims at developing a genuine working culture in an organization and provide the right motivation." />
                <meta name="twitter:image:src" content="https://byldgroup.com/kbassets/img/Blanchard_Global%20Partner%20Logo_India-01.png" />
                <meta name="twitter:domain" content="https://byldgroup.com/blanchardindia/our-content/programs/essential-motivators" />


                {/* itemProp TAG */}
                <meta itemProp="title" content="Essential Motivators™ - Motivation Training Program for Employees" />
                <meta itemProp="description" content="The motivation training program for employees by Blanchard India aims at developing a genuine working culture in an organization and provide the right motivation." />
                <meta itemProp="image" content="https://byldgroup.com/kbassets/img/Blanchard_Global%20Partner%20Logo_India-01.png" />

                {/* script schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "WebSite",
                            "name": "Blanchard India",
                            "url": "https://byldgroup.com/blanchardindia/",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://byldgroup.com/blanchardindia/our-content/programs/essential-motivators{search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        }),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Blanchard Research and Training India",
                            "alternateName": "Blanchard India",
                            "url": "https://byldgroup.com/blanchardindia",
                            "logo": "https://byldgroup.com/kbassets/img/Blanchard_Global%20Partner%20Logo_India-01.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "18001021345",
                                "contactType": "customer service",
                                "contactOption": "TollFree",
                                "areaServed": "IN",
                                "availableLanguage": "en"
                            },
                            "sameAs": [
                                "https://www.facebook.com/blanchardresearchandtrainingindia",
                                "https://twitter.com/blanchard_india",
                                "https://www.instagram.com/blanchard_research_india/",
                                "https://www.youtube.com/c/BlanchardinternationalIndia",
                                "https://www.linkedin.com/company/blanchard-research-and-training-india/",
                                "https://byldgroup.com/blanchardindia"
                            ]
                        }),
                    }}
                />








            </Head>

            <section className="bredkums2 colortheme4bg pbb-100 border-bottom-left-radius-70">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/blanchardindia/">HOME</a></li>
                                <li className="brdlifirst"><a href="/blanchardindia/our-content/programs">OUR CONTENT</a></li>
                                <li className="brdlifirst"><a href="/blanchardindia/our-content/programs">PROGRAMS</a></li>
                                <li><a><span>ESSENTIAL MOTIVATORS</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Essential Motivators™</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60 uncommonapproach rightimgc contanerbgc">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">
                                Improve collaboration by understanding what motivates you and others
                            </h2>
                            <p className="headingp">
                                The frustration and problems caused by friction and misunderstandings in work relationships drain efficiency. To collaborate more impactfully and enjoyably with others, individuals must better understand themselves to bring their best skills and talents to their work.
                            </p>
                            <p className="headingp">
                                Through Essential Motivators™, learners can identify their core psychological needs, values, talents, and behaviors to understand themselves and others better.
                            </p>
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/kbassets/img/kbnew/EM-Boost-collaboration-by-better.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ExploreCustom colorthemebg">
                <div className="container colortheme2bg border-bottom-right-radius-70 ptt-60 pbb-60">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/kbassets/img/kbnew/EM-model-uncover-core-strength.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">Core strengths and needs are</h2>
                            <p className="headingp">
                                With Essential Motivators, people become more comfortable with themselves and more collaborative and influential with others by applying four patterns - Air, Earth, Fire, and Water.
                            </p>
                            <p className="headingp">
                                Learners are guided through self-discovery to identify their Essential Motivators pattern. In this process, they:
                            </p>
                            <ul>
                                <li>You can discover their superpower by discovering who they are at their core and what makes them unique</li>
                                <li>Gain a deeper understanding of themselves and their core needs.</li>
                                <li>Accept others for who they are and what they need</li>
                                <li>Resolve conflicts, improve communication, and work more effectively with others</li>
                            </ul>

                        </div>


                    </div>
                </div>
            </section>




            <section className="colorthemebg DeliveryOptions ptt-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10 text-center pbb-40">
                            <h2>Delivery Options to Meet Your Needs</h2>
                            <p className="pcl">
                                Essential Motivators can be delivered as virtual sessions, as part of a learning journey, or in a self-directed online or moderated online version, so your learners can identify their core needs wherever they are and whenever they have time.
                            </p>
                        </div>

                        <div className="col-sm-12">
                            <div className="ourstabs">
                                <Tabs>
                                    <TabList className="lefttab">
                                        <Tab>
                                            <img className="" src="/kbassets/img/kbnew/icon/Virtual.svg" alt="Images" />
                                            <span>Virtual</span>
                                        </Tab>
                                        <Tab>
                                            <img className="" src="/kbassets/img/kbnew/icon/Online.svg" alt="Images" />
                                            <span>Online</span>
                                        </Tab>

                                    </TabList>

                                    <TabPanel className="tabdetails colortheme2bg">
                                        <div className="">
                                            <div className="tabinner">
                                                <p>
                                                    This design is a six-week online learning journey with weekly 60-minute live virtual sessions that include interactive discussions and breakout sessions. The course is a rich, easy-to-understand theory of temperament that will help participants better understand themselves and others and learn to value and appreciate different perspectives. This design provides key concepts, models, discussion questions, practice, and application over a six-week multifaceted learning experience.
                                                </p>
                                                <p>
                                                    <b>Week 1: Getting Started -</b> Discover the nature of the Essential Motivators patterns and how we express them through our core needs, values, talents, and behaviors.
                                                </p>
                                                <p>
                                                    <b>Week 2: Understanding Self -</b> Learn about the four Essential Motivators patterns: Fire, Earth, Air, and Water.
                                                </p>
                                                <p>
                                                    <b>Week 3: Clarifying the Patterns -</b> Explore the patterns further through the dimensions of language, roles, and attention.
                                                </p>
                                                <p>
                                                    <b>Week 4: Stressors and Stereotypes -</b> Discover how stress manifests for each pattern and how to reduce stress in oneself and others. Explore the stereotype side of each pattern that can influence the perception of others.
                                                </p>

                                                <p>
                                                    <b>Week 5: Understanding Others -</b> Discover how people's shadow pattern—the pattern least like themselves—can affect how they react to others. Identify others within each of the four patterns.
                                                </p>

                                                <p>
                                                    <b>Week 6: Putting It into Practice -</b> Shift perspective and accept others for who they are and what they need, even if they are different from oneself.
                                                </p>

                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className="tabdetails colortheme2bg">
                                        <div className="">
                                            <div className="tabinner">
                                                <h3>Online Overview with Debrief </h3>
                                                <p>
                                                    This design includes a 35-minute online overview to teach the core content, which will help participants identify  their pattern of core psychological needs, values, talents, and behaviors to better understand themselves and others, be more effective, and appreciate different perspectives.
                                                </p>
                                                <h3>Online Overview with Debrief</h3>
                                                <p>
                                                    This design includes a 35-minute online overview to teach the core content, which will help participants identify their pattern of core psychological needs, values, talents, and behaviors to better understand themselves and others, be more effective, and appreciate different perspectives.
                                                </p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="ptt-90 ExploreCustom colorthemebg">
                <div className="container mbordee pbb-60 ptt-60 mbordee colortheme2bg">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/kbassets/img/kbnew/EM-understanding-employee-motivators-equips.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">You can meet the needs of your employees by understanding their motivators</h2>
                            <p className="themepbold pbb-10">
                                It has been reported that employees who feel their needs have been met report a <b><span>30%</span></b> greater capacity for focus, a nearly <b><span>50%</span></b> higher level of engagement, and a 63% greater likelihood of staying at a company.
                            </p>
                        </div>
                        <div className="col-sm-12 ptt-60 pbb-20">
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </section>

            <section className='colortheme2bg'>
                <div className='container-fluid ptt-10 pbb-60 borderedus0'>
                    <div className='row align-items-center'>
                        <div className="col-sm-2"></div>
                        <div className='col-sm-8 pbb-70'>
                            <div className="text-center">
                                <h2 className="sectionh">
                                    Understand Different Perspectives To Fuel Deeper Collaboration
                                </h2>
                                <p>
                                    Linda Berens, who has over forty years of experience in teaching people to recognize their strengths, transcend their weaknesses, and work together more effectively, developed the Essential Motivators framework.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/increase-effectiveness.svg" alt="Images" />
                                <h3 className="lineh34">Enhance effectiveness</h3>
                                <p>
                                    Learning to identify others' core needs and working collaboratively and synergistically increases organizational effectiveness.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/Improve-employee-engagement.svg" alt="Images" />
                                <h3 className="lineh34">Engage employees better</h3>
                                <p>
                                    Educate people about how their core needs affect motivation, career satisfaction, communication, and problem-solving.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/boost-empathy.svg" alt="Images" />
                                <h3 className="lineh34">Empathy Booster</h3>
                                <p>
                                    Changes perspectives and allows people to accept others for who they are, which increases appreciation for diversity and inclusion.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/Deepen-collaboration.svg" alt="Images" />
                                <h3 className="lineh34">Deepen Collaboration</h3>
                                <p>
                                    Builds empathy and trust by strengthening relationships and understanding each other's perspectives.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section className="ptt-90 ExploreCustom colortheme4bg">
                <div className="container contanerbgc mbordee pbb-60 ptt-60">
                    <div className="row align-items-center">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6 text-center">
                            <h2 className="sectionh">Are you ready to get started?</h2>
                            <p className="headingp pbb-10">
                                Contact us today to learn how we can help your leaders become more effective communicators through Essential Motivators.
                            </p>
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange  mtt-10'>Talk to an Expert</a>
                        </div>
                        {/* <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-30">
                                <div className="row text-center mmcsh">
                                    <div className="col-sm-12 pbb-30">
                                        <h3 className="sectionh">Learn More</h3>
                                    </div>
                                    <div className="col-sm-6 borderrrrr">
                                        <a href="#">
                                            <img src="/kbassets/img/kbnew/icon/One-pagers_One-Pager.svg" alt="Images" />
                                            <h4>Download Overview</h4>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="#">
                                            <img src="/kbassets/img/kbnew/icon/View-SLII-Resources.svg" alt="Images" />
                                            <h4>View Related Resources</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>

        </>
    )
}
