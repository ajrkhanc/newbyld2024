import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CountUp from 'react-countup';
import React from 'react';




export default function Home() {

    return (
        <>


            <Head>
                <title>Coaching for Performance Module II</title>
                <meta name="description" content="We will learn about ethical practice and coach values, and gain insights on how to navigate ethical dilemmas with integrity. Additionally, you will learn about the road to becoming an accredited coach, which is essential for gaining credibility and recognition in the coaching industry" />
                <link rel="stylesheet" type="text/css" href="/assets/css/cohomemodule.css" />
            </Head>



            <section className='aboutmap ptt-50 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-left pbb-10 text-center'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP headeing2">Coaching for Performance Module II</h2>
                        </div>
                        <div className='clearfix'></div>

                        <div className='col-sm-6 modileshdc'>
                            <div className=''>
                                <div className='policyeslist wow fadeInUp delay-0-2s animated animateUP'>
                                    <p className='mbb-20 text-justify ptt-10'>
                                        By completing Module II, you will gain a comprehensive set of coaching skills and techniques that will allow you to provide an exceptional coaching experience for your clients.
                                    </p>
                                    <p className='mbb-20 text-justify'>
                                        We will establish how to effectively utilize the ADMI coaching process to ensure a structured and impactful coaching experience for your clients. Through this process, you will gain the ability to identify and analyze the needs of your clients, design a customized coaching plan, motivate and inspire your clients, and evaluate the success of your coaching. Next, you will explore the importance of maintaining coach presence in order to create a supportive and constructive coaching environment. You will learn how to stay focused and engaged with your clients, manage your emotions, and build a strong relationship with your clients based on trust and respect.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-6 imgbboder'>
                            <div className='wow fadeInUp delay-0-2s animated animateUP'>
                                <img src="/assets/img/new/admilogo.png" alt="images" />
                            </div>
                        </div>


                        <div className='col-sm-12'>
                            <div className='policyeslist ptt-30 wow fadeInUp delay-0-2s animated animateUP'>

                                <p className='mbb-20 text-justify'>
                                    Emotional Intelligence (EQ) is a crucial component of effective coaching, and this module provides an introduction to the EQ model in coaching. You will learn how to recognize and manage emotions, empathize with your clients, communicate effectively, and foster a positive coaching relationship.
                                </p>

                                <p className='mbb-20 text-justify'>
                                    You’d see how client and stakeholder expectations can often be challenging to balance, and through this module, we will learn how to manage these expectations and ensure a successful coaching experience for all parties involved. You will also learn how to integrate assessments into your coaching practice to raise awareness and help your clients achieve their goals. Moreover, as challenging client situations can arise at any time, we will show you how to handle these situations by gaining the skills to address difficult client behaviors, navigate conflicts, and maintain a positive coaching relationship.
                                </p>


                                <p className='mbb-20 text-justify'>
                                    Finally, you will learn how to grow as a coach and continue to improve your coaching practice over time through reflection, self-evaluation and ongoing learning, so that you feel empowered to elevate your coaching skills and provide greater impact for your clients.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-12'>
                        <div className='policyeslist wow fadeInUp delay-0-2s animated animateUP'>
                        <h3 className='mbb-20 text-justify'>Here’s a quick snapshot of the topics covered</h3>
                        </div>
                            <table className='mtblc tblfont15 wow fadeInUp delay-0-2s animated animateUP width100p'>
                                <tr>
                                    <th width="80px">S. No</th>
                                    <th>Module Name</th>
                                    <th>Learning Goal</th>
                                    <th width="140px">Time (Mins)</th>

                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>Introduction and Recap</td>
                                    <td>Get to know each other and bridge with knowledge of Module I</td>
                                    <td>60</td>
                                </tr>

                                <tr>
                                    <td>02</td>
                                    <td>Intro to ADMI Model in Coaching - Analyze, Define, Measure, Improve</td>
                                    <td>Understand steps to problem solving in coaching steps.</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>Problem solving Tools for Enabling Each Step of ADMI</td>
                                    <td>Be able to use tools of problem solving to coaching conversations at each step of DMAI</td>
                                    <td>150</td>
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>Practice ADMI Coaching Process</td>
                                    <td>Integrate tools at each 5step of DMAI in realistic coaching scenarios</td>
                                    <td>120</td>
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>Maintains Presence</td>
                                    <td>Learn how to allow client to lead the coaching conversations</td>
                                    <td>70</td>
                                </tr>
                                <tr>
                                    <td>06</td>
                                    <td>Introduction to Emotional Intelligence (EQ) Model in Coaching</td>
                                    <td>Understand the 4 skills core areas of Emotional Intelligence</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>Practice EQ Based Coaching</td>
                                    <td>Internalise the Process of working with Emotional Intelligence model in Coaching </td>
                                    <td>120</td>
                                </tr>
                                <tr>
                                    <td>08</td>
                                    <td>Balancing Client and Stakeholder Expectations</td>
                                    <td>Use Social Competence skills in client coaching situations</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>09</td>
                                    <td>Invoke Awareness by Integrating Assessments in Coaching </td>
                                    <td>Learn about how to use different types on assessments as part of coaching process?</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Practicing Coaching with Assessments </td>
                                    <td>How to build awareness using assessments?</td>
                                    <td>120</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Dealing with 'Ok But' Client Situations </td>
                                    <td>How to build Coach Presence? </td>
                                    <td>75</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Coach Growth </td>
                                    <td>How to grow as a coach?</td>
                                    <td>60</td>
                                </tr>


                            </table>
                        </div>

                        <div className='col-sm-12 text-center'>
                            <div className="btn-part ptt-10 pbb-30 mtt-30 wow fadeInUp delay-0-2s animated animateUP">
                                <Link href="/coaching/become-a-coach"><a className="readon2">Continue <div className="btn-arrow"></div></a></Link>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </section>
        </>
    )
}
