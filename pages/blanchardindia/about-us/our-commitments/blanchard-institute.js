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
                <title>Blanchard Institute | Blanchard International</title>
                <meta name="description" content="Learn more about the mission and goals of the Blanchard Institute, a nonprofit dedicated to building a world full of self-reliant leaders." />
                <link rel="icon" href="/blanchardindia/favicon.ico" />
            </Head>

            <section className="bredkums2 colortheme4bg pbb-100 border-bottom-left-radius-70">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/blanchardindia/">HOME</a></li>
                                <li className="brdlifirst"><a href="/blanchardindia/about-us">ABOUT US</a></li>
                                <li className="brdlifirst"><a href="#">OUR COMMITMENTS</a></li>
                                <li><a><span>BLANCHARD INSTITUTE</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Blanchard Institute</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-70 uncommonapproach bgdarkc">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Enabling every emerging learner to become a self-reliant leader</h2>
                            <p className="headingp">
                            Blanchard Institute (BI) is a non-profit 501(c)(3) organization that was established over two decades ago by Ken and Margie Blanchard.  Its vision is a world where every child can become a self-reliant leader. BI has exclusive permission to use Blanchard's content and intellectual property to adapt and tailor leadership training programs for middle and high school students, without any charge to the students, teachers, facilitators, parents, schools, or organizations involved.
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

            <section className="ptt-60 pbb-60 ExploreCustom">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/kbassets/img/kbnew/How-The-Blanchard-Institute.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h2 className="sectionh">How the Blanchard Institute enables the next generation of self leaders</h2>
                            <p className="headingp text-justify pbb-10">
                            The Blanchard Institute is focused on leadership training for middle and high school age students to teach the mindset and skillset of a self leader. We’ve taken what we know has worked best in the corporate world and adapted the content for young adults. Students explore how to take responsibility, communicate better, gain confidence, and set clear goals. Additionally, students who complete the class requirements earn a digital credential—perfect for adding to resumes and online portfolios—and are eligible to apply for a Blanchard Institute scholarship to continue their higher education.
                            </p>                            
                        </div>
                    </div>
                </div>
            </section>

            <section className="EmpoweringLeaders ptt-70 pbb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center pbb-40">
                            <h2 className="sectionh">How We Do It</h2>
                            <p className="headingp">
                            We offer three student leadership programs at no cost to the participants.
                            </p>
                        </div>

                        <div className="col-sm-4 text-center">
                            <div className="empinner">
                                <h3>Student Self Leadership Collaborative Online</h3>
                                <p>
                                For high school students only, this course is offered four times a year. Students have one hour of self-study a week, meet virtually with a Blanchard trainer one hour a week, and receive a digital badge. Seniors are eligible to apply for a small college scholarship.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-4 text-center">
                            <div className="empinner">
                                <h3>Student Self Leadership Collaborative Online for Champions</h3>
                                <p>
                                For the parents, coaches, teachers, or any adult who leads or influences the high school student who is enrolled in the Student Self Leadership course, this course is offered four times a year in conjunction with the student course. Adults learn strategies to support their student in their new learning.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-4 text-center">
                            <div className="empinner">
                                <h3>Do It Yourself</h3>
                                <p>
                                Blanchard also offers a do-it-yourself option that teachers, coaches, mentors, counselors, and facilitators can use with middle school or high school students. Materials include over 40 different lesson plans with videos, PowerPoint presentation decks, and learning activities.
                                </p>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60 ExploreCustom">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/kbassets/img/kbnew/Join-Our-Commitment-to.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h2 className="sectionh">Join our commitment to empowering students</h2>
                            <p className="headingp text-justify pbb-10">
                            The Blanchard Institute aims to break down the barrier to high quality leadership programs. We want to provide the same high standard of Blanchard training programs to all middle and high school students, organizations, and the people who lead them. Help us change students’ lives. Bring this program to your community or your organization, or learn how to facilitate it.
                            </p>
                            <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange'>Get Involved Today</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}