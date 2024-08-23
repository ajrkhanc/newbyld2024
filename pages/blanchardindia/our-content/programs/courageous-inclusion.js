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
                <title>Courageous Inclusion™ - Diversity And Inclusion Leadership Program</title>
                <meta name="robots" content="INDEX, FOLLOW" />
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/our-content/programs/courageous-inclusion" />
                <meta name="description" content="Inclusive leadership lead with courageous vulnerability. Based on the proven developmental continuum 'How to Be an Inclusive Leader'." />
                <link rel="icon" href="/blanchardindia/favicon.ico" />

                {/* og tag */}
                <meta property="og:url" content="https://byldgroup.com/blanchardindia/our-content/programs/courageous-inclusion" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Courageous Inclusion™ - Diversity And Inclusion Leadership Program" />
                <meta property="og:description" content="Inclusive leadership lead with courageous vulnerability. Based on the proven developmental continuum 'How to Be an Inclusive Leader'." />
                <link rel="icon" />
                <meta property="og:image" content="https://byldgroup.com/kbassets/img/Blanchard_Global%20Partner%20Logo_India-01.png" />


                {/* TWITTER TAG */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Blanchard_India" />
                <meta name="twitter:title" content="Courageous Inclusion™ - Diversity And Inclusion Leadership Program" />
                <meta name="twitter:description" content="Inclusive leadership lead with courageous vulnerability. Based on the proven developmental continuum 'How to Be an Inclusive Leader'." />
                <link rel="icon" />
                <meta name="twitter:image:src" content="https://byldgroup.com/kbassets/img/Blanchard_Global%20Partner%20Logo_India-01.png" />
                <meta name="twitter:domain" content="https://byldgroup.com/blanchardindia/our-content/programs/courageous-inclusion" />


                {/* itemProp TAG */}
                <meta itemProp="title" content="Courageous Inclusion™ - Diversity And Inclusion Leadership Program" />
                <meta itemProp="description" content="Inclusive leadership lead with courageous vulnerability. Based on the proven developmental continuum 'How to Be an Inclusive Leader'." />
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
                                "target": "https://byldgroup.com/blanchardindia/our-content/programs/courageous-inclusion{search_term_string}",
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
                                <li><a><span>COURAGEOUS INCLUSION</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Courageous Inclusion™</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60 uncommonapproach rightimgc contanerbgc">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Creating a workplace where everyone feels valued, heard, and seen</h2>
                            <p className="headingp">
                                Blanchard believes everyone deserves a workplace environment where they truly can be themselves. Leaders need a plan and the right skills to implement it to achieve true diversity, equity, and inclusion (DEI).
                            </p>
                            <p className="headingp">
                                As a result of Jennifer Brown's book, How to Be an Inclusive Leader, Courageous Inclusion™ cultivates an inclusive mindset. Through this course, participants will learn how to become more knowledgeable and active advocates of inclusion in the workplace.
                            </p>
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/kbassets/img/kbnew/CINC-Creating-a-workplace.jpg" alt="Images" />
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
                                <img className="" src="/kbassets/img/kbnew/CINC-model-build-a-road-map-to-become.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">Create a road map for becoming a more inclusive workplace</h2>
                            <p className="headingp">
                                With Blanchard's Courageous Inclusion program, you can empower your people to speak out and raise DEI issues confidently and safely.
                            </p>
                            <p className="headingp">
                                With Courageous Inclusion, you will teach your people a mindset that promotes diversity and inclusion and provide a proven process to help them become more knowledgeable and active proponents of inclusion.
                            </p>
                            <p className="headingp">
                                You will teach your people how to diagnose themselves on the developmental continuum and how to progress to higher inclusion levels.
                            </p>
                            <p className="headingp">
                                With Courageous Inclusion's road map approach, you can increase inclusivity within your organization and create a place where everyone feels welcomed.
                            </p>
                            <p className="headingp">
                                The time has come to transform DEI from a business priority to a workplace reality
                            </p>
                            <p className="headingp">
                                Diversity and inclusion are top priorities for 93% of leaders. Still, only 34% believe it is a strength in their workplace.
                            </p>

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
                                We can deliver Courageous Inclusion as live virtual sessions, as part of a learning journey, or in a self-directed online version, so your people can learn the skills to create an inclusive work environment wherever they are and whenever they have time.
                            </p>
                        </div>

                        <div className="col-sm-12">
                            <div className="ourstabs">
                                <Tabs>
                                    <TabList className="lefttab">
                                        <Tab>
                                            <img className="" src="/kbassets/img/kbnew/icon/In-person.svg" alt="Images" />
                                            <span>In Person</span>
                                        </Tab>
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
                                                <h3>1-Day Instructor-Led Course</h3>
                                                <p>
                                                    Courageous Inclusion is a one-day, in-person session that cultivates a mindset that promotes diversity and inclusion through a compelling and engaging learner experience.
                                                </p>
                                                <p>
                                                    <b>Prework: LAUNCH—</b>Participants prepare for the cohort learning experience by completing a few pre-session assignments.
                                                </p>
                                                <p>
                                                    <b>Welcome: LEARN & PRACTICE—</b>Welcomes participants and sets the context for the learning experience.
                                                </p>
                                                <p>
                                                    <b>Courageous Inclusion Mindset & Model—</b>Presents the three components of the Courageous Inclusion mindset and describes the model. Invites participants to identify their stage for the inclusion issue they are focusing on.
                                                </p>
                                                <p>
                                                    <b>Stage 1: Unaware—</b>Explores obstacles to knowing you’re Unaware and introduces unconscious bias as a foundation.
                                                </p>
                                                <p>
                                                    <b>Stage 2: Aware—</b>Explores privilege as an important factor to understand oneself in order to be more inclusive. Time for reflection and discussion in small groups.
                                                </p>
                                                <p>
                                                    <b>Stage 3: Active—</b>Explores various aspects of being Active, including risks. Allows participants time to reflect and discuss in small groups.
                                                </p>
                                                <p>
                                                    <b>Stage 4: Advocate—</b>Reviews the characteristics of Advocate. Presents one person’s experience as an advocate for self and others.
                                                </p>
                                                <p>
                                                    <b>Courageous Inclusion Journey and Action Plan—</b>Invites participants to envision their own journey and discuss. Introduces and explains the Courageous Inclusion Action Plan and provides coaching as needed.
                                                </p>
                                                <p>
                                                    <b>Wrap Up and Apply—</b>Participants review key learnings and get introduced to APPLY resources to continue their journey.
                                                </p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className="tabdetails colortheme2bg">
                                        <div className="">
                                            <div className="tabinner">
                                                <h3>Virtual Instructor-led Course</h3>
                                                <p>
                                                    This design includes two 3-hour virtual sessions to inspire managers and individual contributors to become more inclusive by shifting their mindset to challenge their perspective, embrace differences, and value fairness for all. Learners will gain the skills to help create an environment where coworkers feel appreciated and connected, increasing the effectiveness of people and teams and improving organizational performance.
                                                </p>
                                                <p>
                                                    <b>Prework: LAUNCH —</b> Engaging assignments to expedite the learning and help them internalize the content to frame their thinking prior to class. This will enable them to immediately apply their learnings from this course to real-world challenges.
                                                </p>
                                                <p>
                                                    <b>Session 1: UNAWARE —</b> Reviews the characteristics of being Unaware. Explores obstacles to knowing you’re Unaware and introduces unconscious bias as a foundation of being Unaware. Reviews the characteristics of being Aware. Explores privilege as an important factor in understanding oneself to become more inclusive. Allows participants time to reflect and then discuss in small groups.
                                                </p>
                                                <p>
                                                    <b>Session 2: ACTIVE — </b> Reviews the characteristics of being Active. Explores various aspects of being Active, including risk. Allows participants time to reflect and then discuss in small groups. Reviews the characteristics of Advocate. Presents one person’s experience as an Advocate for self and others.
                                                </p>
                                                <p>
                                                    <b>Post Work: APPLY —</b> Provides the Action Plan worksheet and At a Glance reference booklet to support participants in embracing Courageous Inclusion on the job.
                                                </p>

                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className="tabdetails colortheme2bg">
                                        <div className="">
                                            <div className="tabinner">
                                                <h3>1-Day Instructor-Led Course</h3>
                                                <p>
                                                    Courageous Inclusion is a one-day, in-person session that cultivates a mindset that promotes diversity and inclusion through a compelling and engaging learner experience.
                                                </p>
                                                <p>
                                                    <b>Prework: LAUNCH—</b>Participants prepare for the cohort learning experience by completing a few pre-session assignments.
                                                </p>
                                                <p>
                                                    <b>Welcome: LEARN & PRACTICE—</b>Welcomes participants and sets the context for the learning experience.
                                                </p>
                                                <p>
                                                    <b>Courageous Inclusion Mindset & Model—</b>Presents the three components of the Courageous Inclusion mindset and describes the model. Invites participants to identify their stage for the inclusion issue they are focusing on.
                                                </p>
                                                <p>
                                                    <b>Stage 1: Unaware—</b>Explores obstacles to knowing you’re Unaware and introduces unconscious bias as a foundation.
                                                </p>
                                                <p>
                                                    <b>Stage 2: Aware—</b>Explores privilege as an important factor to understand oneself in order to be more inclusive. Time for reflection and discussion in small groups.
                                                </p>
                                                <p>
                                                    <b>Stage 3: Active—</b>Explores various aspects of being Active, including risks. Allows participants time to reflect and discuss in small groups.
                                                </p>
                                                <p>
                                                    <b>Stage 4: Advocate—</b>Reviews the characteristics of Advocate. Presents one person’s experience as an advocate for self and others.
                                                </p>
                                                <p>
                                                    <b>Courageous Inclusion Journey and Action Plan—</b>Invites participants to envision their own journey and discuss. Introduces and explains the Courageous Inclusion Action Plan and provides coaching as needed.
                                                </p>
                                                <p>
                                                    <b>Wrap Up and Apply—</b>Participants review key learnings and get introduced to APPLY resources to continue their journey.
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
                <div className="container contanerbgc mbordee pbb-60 ptt-60">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Incorporate Courageous Inclusion Into Your Culture</h2>
                            <p className="headingp text-justify pbb-10">
                                We partnered with diversity and inclusion expert Jennifer Brown to create Courageous Inclusion™ based on the proven developmental continuum in her book, <em>How to Be an Inclusive Leader.</em>
                            </p>
                            <p>
                                Drawing on years of work with many leading organizations, Jennifer Brown shows what leaders at any level can do to spark real change. She guides readers through the Inclusive Leader Continuum, a set of four developmental stages: Unaware, Aware, Active, and Advocate.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/CINC-based-on-a-proven-development-path.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ptt-90 ExploreCustom colortheme2bg">
                <div className="container mbordee pbb-60">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/kbassets/img/kbnew/CINC-it-s-time-to-move-DEI-from-a-business.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">It’s time to move DEI from a business priority to a workplace reality</h2>
                            <p className="headingp text-justify pbb-10 font2438">
                                93% of leaders agreed that diversity and inclusion is a top priority, but only 34% of leaders believed it's a strength in their workplace.1
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
                                    Create A Culture Of Courageous Inclusion
                                </h2>
                                <p>
                                    It takes more than just awareness building and familiarizing people with DEI terminology to enable lasting culture change. Give your people the confidence and skills they need to create an inclusive, welcoming work environment that encourages people to bring their whole selves to work.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/Expand-workplace-inclusion.svg" alt="Images" />
                                <h3 className="lineh34">Expand Workplace Inclusion</h3>
                                <p>
                                    Participants learn the benefits of inclusion and a framework for continual progression toward a more inclusive environment.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/Improve-belonging-and-engagement.svg" alt="Images" />
                                <h3 className="lineh34">Improve Belonging and Engagement</h3>
                                <p>
                                    Employees will feel more welcome and able to bring their authentic selves into the workplace.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/increase-team-effectiveness.svg" alt="Images" />
                                <h3 className="lineh34">Increase Team Effectiveness</h3>
                                <p>
                                    People are more creative, driven, productive, forgiving, and collaborative when they feel welcomed and appreciated.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/retain-your-talent_1.svg" alt="Images" />
                                <h3 className="lineh34">Retain Your Talent</h3>
                                <p>
                                    Employees are more drawn to a workplace that demonstrates diversity and inclusion and treats people well.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='SuccessStory'>
                <div className='container-fluid ptt-90 pbb-60'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                    Client Success Story
                                </h2>
                                <h4>
                                    GOVERNMENT
                                </h4>
                                <h3>Improving leader behaviors by 91 percent at Arizona Department of Economic Security</h3>

                                <p>
                                    Learn how a comprehensive leadership development program is improving engagement, performance, and retention.
                                </p>
                                <a href='#' className='kbbtn kbbtn--orange  mtt-10'>Learn More</a>
                            </div>
                        </div>

                        <div className='col-sm-6 pa0000'>
                            <div className='pll-100'>
                                <img src="/kbassets/img/kbnew/Arizona-DES-spotlight.jpg" alt="Images" />
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
                            <h2 className="sectionh">Ready to Get Started?</h2>
                            <p className="headingp pbb-10">
                                Contact us today to learn how we can help your leaders learn the skills they need to be more effective communicators.
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
