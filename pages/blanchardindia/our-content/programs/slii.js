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
                <meta name="robots" content="INDEX, FOLLOW"/>
                <title>SLII® - Situational Leadership II Training Program | Blanchard</title>
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/our-content/programs/slii" />
                <meta name="description" content="SLII® - a Situational Approach to Leadership. Blanchard's SLII leadership training program teaches managers how to identify individuals’ needs and offer the appropriate leadership style to meet those needs." />
                <link rel="icon" href="/blanchardindia/favicon.ico" />
                {/* OG TAG */}
                <meta property="og:url" content="https://byldgroup.com/blanchardindia/our-content/programs/slii" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="SLII® - Situational Leadership II Training Program | Blanchard" />
                <meta property="og:description" content="SLII® - a Situational Approach to Leadership. Blanchard's SLII leadership training program teaches managers how to identify individuals’ needs and offer the appropriate leadership style to meet those needs." />
                <meta property="og:image" content="https://byldgroup.com/kbassets/img/Blanchard_Global%20Partner%20Logo_India-01.png" />
                {/* TWITTER TAG */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Blanchard_India" />
                <meta name="twitter:title" content="SLII® - Situational Leadership II Training Program | Blanchard" />
                <meta name="twitter:description" content="SLII® - a Situational Approach to Leadership. Blanchard's SLII leadership training program teaches managers how to identify individuals’ needs and offer the appropriate leadership style to meet those needs." />
                <meta name="twitter:image:src" content="https://pbs.twimg.com/profile_images/1729446806688333824/WrhGIYA-_400x400.jpg" />
                <meta name="twitter:domain" content="https://byldgroup.com/blanchardindia/our-content/programs/slii" />
                {/* itemProp TAG */}
                <meta itemProp="title" content="SLII® - Situational Leadership II Training Program | Blanchard" />
                <meta itemProp="description" content="SLII® - a Situational Approach to Leadership. Blanchard's SLII leadership training program teaches managers how to identify individuals’ needs and offer the appropriate leadership style to meet those needs." />
                <meta itemProp="image" content="https://byldgroup.com/kbassets/img/Blanchard_Global%20Partner%20Logo_India-01.png" />
                {/* script schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
                        {
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "Blanchard India",
                        "url": "https://byldgroup.com/blanchardindia/",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://byldgroup.com/blanchardindia/our-content/programs/slii{search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                        }
                    `,
                    }}
                />


                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
                        {
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
                        }
                    `,
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
                                <li><a><span>SLII<sup>®</sup></span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>SLII<sup>®</sup>. Powering Inspired Leaders™</h1>
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
                                Use a situational leadership style to achieve success
                            </h2>
                            <p className="headingp">
                                The world's most well-known leadership development course, SLII<sup>®</sup>, teaches managers how to forge deep bonds with their employees that have a multiplicative effect. Employee productivity and engagement increase when this occurs.
                            </p>
                            <p className="headingp">
                                SLII<sup>®</sup> offers much more than just effective leadership development. Across the enterprise, it provides outstanding ROI.
                            </p>
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/kbassets/img/kbnew/SLII-Video-img.jpg" alt="Images" />
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
                                <img className="" src="/kbassets/img/kbnew/SLII-model.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">Proven, time-tested leadership model</h2>
                            <p className="headingp">
                                SLII<sup>®</sup> is a practical, easy-to-understand framework to help your manager diagnose employee development for the following tasks: D1 - Enthusiastic Beginner; D2 - Disillusioned Learner; D3 - – Capable, but Cautious Contributor; D4 - Self-Reliant Achiever. Next, managers use appropriate support and coaching behaviors to help them succeed: S1 - Directing; S2 - Coaching; S3 - Supporting; S4 - Delegating.
                            </p>
                            <p className="headingp">
                                Our award-winning learning program, The SLII Experience™, combines Blanchard's latest research and cutting-edge design theory. This creates a learning experience that enables rapid mastery of the method and allows managers to help their direct reports reach new professional heights.
                            </p>
                        </div>


                    </div>
                </div>
            </section>




            <section className="colorthemebg DeliveryOptions ptt-60 pbb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10 text-center pbb-40">
                            <h2>The Right Delivery Options for You</h2>
                            <p className="pcl">
                                With thousands of qualified facilitators available worldwide, we can give your managers The SLII Experience™ in person or virtually, or we can train your trainers to deliver the course through public or private Training for Trainers courses.
                            </p>
                            <p className="pcl">
                                To ensure that your managers can learn the methodology wherever they are and whenever they have the time, SLII<sup>®</sup> can also be a component of a learning journey or taught in a self-directed online or moderated online version.
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
                                                <h3>2 Day Instructor-led Course</h3>
                                                <p>
                                                    The SLII<sup>®</sup> in-person experience is a 2-day, 8-hour course that uses a four-part learning path to ensure participants master the content and become situational leaders. Live in-person training offers the fullest content and the richest opportunities to practice new behaviors.
                                                </p>
                                                <p>
                                                    <b>LAUNCH—</b> participating in prework assignments, including assessments, accelerates
                                                </p>
                                                <p>
                                                    <b>LEARN—</b> Events teach leaders the skills and language to lead situationally and provide opportunities for one-on-one interaction with participants. (seven hours, including a 45-minute lunch break)
                                                </p>
                                                <p>
                                                    <b>Practice—</b> Leaders build new skills and practice their SLII<sup>®</sup> vocabulary in activities based on individual job challenges. They learn to match their leadership style and practice SLII<sup>®</sup> conversations. (9 hours, including a 45-minute lunch break)
                                                </p>
                                                <p>
                                                    <b>Application—</b> Tools and resources are available after the course to help participants strengthen and maintain their SLII<sup>®</sup> skills.
                                                </p>


                                                <h3>1 Day Instructor-led Course</h3>
                                                <p>
                                                    The SLII<sup>®</sup> in-person one-day experience uses the same four-part learning route but is eight hours long and more compacted.
                                                </p>
                                                <p>
                                                    <b>LAUNCH—</b> To jumpstart the learning process and prepare participants' minds for real-world problems, participants complete fun prework projects that include assessments.
                                                </p>
                                                <p>
                                                    <b>LEARN—</b> Activities give leaders the abilities and vocabulary to lead in various contexts.
                                                </p>
                                                <p>
                                                    <b>PRACTISE—</b> Activities based on one's own professional issues help one learn new abilities.
                                                </p>
                                                <p>
                                                    <b>APPLY—</b> Tools and resources available after the workshops to aid participants in honing and maintaining their SLII<sup>®</sup> skills.
                                                </p>

                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel className="tabdetails colortheme2bg">
                                        <div className="">
                                            <div className="tabinner">
                                                <h3>Virtual Instructor-led Course</h3>
                                                <p>
                                                    The SLII<sup>®</sup> Virtual course consists of five live, two-hour virtual sessions* spread out over a few days. The virtual sessions give learners a fun learning environment incorporating group activities, instruction, and chances to put new abilities to use.
                                                </p>
                                                <p>
                                                    <b>LAUNCH—</b> Prework assignments and assessments help participants organize their thoughts before class.
                                                </p>
                                                <p>
                                                    <b>LEARN (Sessions 1 & 2)—</b> Activities teach leaders the abilities and terminology to lead in various situations.
                                                </p>
                                                <p>
                                                    <b>PRACTISE (Sessions 3, 4, & 5)—</b> In activities focused on their own professional problems, leaders build and practice their SLII<sup>®</sup> vocabulary.
                                                </p>
                                                <p>
                                                    <b>APPLY—</b> tools and resources to advance and maintain their SLII<sup>®</sup> skills.
                                                </p>
                                                <p>*There is also a shortened option that consists of three 90-minute sessions.</p>

                                                <h3>Online Course with Collaboration</h3>
                                                <p>
                                                    The SLII<sup>®</sup> Collaborative Online Experiences enable participants to learn from their peers and securely hone their abilities through a combination of live weekly sessions conducted by Blanchard experienced facilitators and moderators and asynchronous learning. Cohort-based sessions are spread out over a period of 5 weeks and combine self-directed learning on a cutting-edge platform that encourages interaction through conversations, exercises, reflection, and offline tasks.
                                                </p>

                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className="tabdetails colortheme2bg">
                                        <div className="">
                                            <div className="tabinner">
                                                <h3>Online Program</h3>
                                                <p>
                                                    SLII<sup>®</sup> Online is a self-paced, on-demand training that teaches managers the fundamental ideas of SLII<sup>®</sup> and gives them conceptual practice. Optional can be added for more practice. The SLII<sup>®</sup> Online program is a three-hour online course divided into bite-sized modules lasting anywhere from one to twenty minutes. Optional debriefs that promote conversation and cooperation for a blended learning experience are also available. Contains interactive exercises: entertaining, captivating activities range from online discussions to films, games, stories, and case studies.
                                                </p>
                                                <h3>Online Overview</h3>
                                                <p>
                                                    A self-paced, on-demand course called SLII<sup>®</sup> Overview introduces the technology while highlighting its key concepts through videos of fundamental material. This 35-minute online overview offers exposure to the key concepts of SLII<sup>®</sup>. It includes engaging micro-learning activities, videos, games, and worksheets.
                                                </p>

                                                <h3>SLII<sup>®</sup> Challenge Simulation</h3>
                                                <p>
                                                    An immersive, simulation-focused experience on Advantexe designed to reinforce, practice, and apply the SLII<sup>®</sup> framework. Following a series of simulated dialogues, participants select the appropriate response for each circumstance. To show learners the effects of their decisions, scenarios are evaluated against the best practice behavior set for that particular scenario.
                                                </p>
                                                <h3>Digital kbassets</h3>
                                                <p>
                                                    Our digital kbassets include tools, interactions, and micro-learning movies offering browseable information for just-in-time assistance.
                                                </p>
                                                <p>
                                                    Through digital kbassets, leaders can access adaptable micro-activities such as films, interactions, and worksheets to provide ongoing learning, performance support, reinforcement, and personalized learning journeys.
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

            <section className='Innovativelearning'>
                <div className='container-fluid ptt-90 pbb-20 borderedus0'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6 pa0000'>
                            <div className='prr-90'>
                                <img src="/kbassets/img/kbnew/SLII-great-leaders-frame.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                    Great leaders make meaningful connections
                                </h2>
                                <p>
                                    Great leaders give employees what they need when needed. It means having authentic conversations to empower. Follow their development. Be their champion. See their commitment.
                                </p>
                                <p className="pbb-20">
                                    Leading situationally is very different from previous management styles. And this approach yields significantly higher returns than other management styles.
                                </p>
                            </div>

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="serventclcbox">
                                        <div className="blueboxservant">
                                            <h3>54%</h3>
                                            <p>
                                                of leaders use only one leadership style, regardless of the situation.*
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="serventclcbox">
                                        <div className="darkboxservant">
                                            <h3>50%</h3>
                                            <p>
                                                of the time, leaders use the wrong style to meet their people's needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <p><sup>1</sup> Blanchard internal data.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='EnablingFuture ptt-10 pbb-10 colortheme2bg'>
                <div className='container pbb-30'>
                    <div className='row'>
                        <div className="col-sm-12 ptt-60 pbb-50">
                            <hr></hr>
                        </div>
                        <div className='col-sm-1 text-center'></div>
                        <div className='col-sm-10 text-center'>
                            <h2 className='sectionh'>Give your leaders the tools to motivate and accelerate performance</h2>
                            <p className='headingp pbb-50'>
                                The current pace of change is so disruptive it requires visionary leadership. Managers need a leadership training program to prepare them to be agile situational leaders and empower their employees to succeed
                            </p>
                        </div>
                        <div className='col-sm-1 text-center'></div>

                        <div className='col-sm-6'>
                            <div className='enablingbox greenboxc textccnn'>
                                <h4>Research Driven</h4>
                                <p>
                                    Building on more than 30 years of leadership and desire research, SLII<sup>®</sup> incorporates the latest advances in neuroscience and evolves with the ever-changing workplace.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-6'>
                            <div className='enablingbox darkblueboxc textccnn'>
                                <h4>Proven Results</h4>
                                <p>
                                    More than 10,000 companies use SLII<sup>®</sup> to increase productivity, reduce sales, and increase sales and profits.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-6'>
                            <div className='enablingbox blueboxc textccnn'>
                                <h4>Develop Inspiring Leaders</h4>
                                <p>
                                    SLII<sup>®</sup> addresses the need for competence, empowerment, and brain engagement by creating a safe workplace where employees can problem-solve, innovate, and collaborate.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-6'>
                            <div className='enablingbox darkgeenboxc textccnn'>
                                <h4>Universally Effective</h4>
                                <p>
                                    SLII<sup>®</sup> is relevant to global leaders, regardless of industry, language, or job role. SLII<sup>®</sup> teaches leaders to give the right direction or support their people at the right time.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>





            <section className='colortheme2bg'>
                <div className='container-fluid ptt-5 pbb-60 borderedus0'>
                    <div className='row align-items-center'>
                        <div className="col-sm-12 ptt-5 pbb-50">
                            <hr></hr>
                        </div>

                        <div className="col-sm-2"></div>
                        <div className='col-sm-8 pbb-70'>
                            <div className="text-center">
                                <h2 className="sectionh">
                                    SLII<sup>®</sup> enables leaders to build deeper relationships
                                </h2>
                                <p>
                                    With more inspired leaders, morale and cohesion will improve, team members will feel supported, and employees will become more creative and productive problem solvers.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/accelerate-development.svg" alt="Images" />
                                <h3 className="lineh34">Accelerated development</h3>
                                <p>
                                    SLII<sup>®</sup> helps managers accelerate the development of their direct reports, from enthusiastic beginners to self-sufficient entrepreneurs.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/Common-Language.svg" alt="Images" />
                                <h3 className="lineh34">Speak a common language</h3>
                                <p>
                                    When managers and team members speak the same language, misunderstandings, micromanagement, and frustration disappear.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/Retention.svg" alt="Images" />
                                <h3 className="lineh34">Increase retention</h3>
                                <p>
                                    Leaders who match their style to the needs of their employees improve morale, commitment, and engagement.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/kbassets/img/kbnew/icon/Creativity.svg" alt="Images" />
                                <h3 className="lineh34">Creative unlock</h3>
                                <p>
                                    Research shows that employees who feel supported by their managers are more engaged, one of the cornerstones of innovation.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section className="ptt-90 ExploreCustom contanerbgc">
                <div className="container contanerbgc mbordee pbb-60 ptt-60">
                    <div className="row align-items-center">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6 text-center">
                            <h2 className="sectionh">Ready to get started?</h2>
                            <p className="headingp  pbb-10">
                                SLII<sup>®</sup> can be taught face-to-face, virtually, online, or as a combination of learning modes. Contact us today to learn how SLII<sup>®</sup> can empower your leaders to make meaningful connections that create exponential impact.
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
                                            <h4>View SLII Resources</h4>
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
