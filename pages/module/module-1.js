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
                <title>Coaching Foundation Module 1</title>
                <meta name="description" content="By completing Module II, you will gain a comprehensive set of coaching skills and techniques that will allow you to provide an exceptional coaching experience for your clients. " />
                <link rel="stylesheet" type="text/css" href="/assets/css/cohomemodule.css" />
            </Head>


            <section className='aboutmap ptt-50 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center pbb-10'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP headeing2">Coaching Foundation Module 1</h2>

                        </div>
                        <div className='clearfix'></div>

                        <div className='col-sm-6 modileshdc'>
                            <div className=''>
                                <div className='policyeslist wow fadeInUp delay-0-2s animated animateUP'>
                                <p className='mbb-10 text-justify'>
                                    Module I covers essential topics that will help you become a successful and effective coach. Overall, this module is a comprehensive start that will equip you with essential skills and knowledge to become a successful and effective coach. In different phases:
                                </p>
                                <p className='mbb-10 text-justify'>
                                    We will learn about ethical practice and coach values, and gain insights on how to navigate ethical dilemmas with integrity. Additionally, you will learn about the road to becoming an accredited coach, which is essential for gaining credibility and recognition in the coaching industry.
                                </p>

                                <p className='mbb-10 text-justify'>
                                    As coaching is a partnership between the coach and the client, and you will learn how to embody a coaching mindset that fosters a collaborative relationship with your client. You will also learn the fundamental skill of evoking awareness, which involves helping the client gain insights and perspectives that they may not have been aware of before.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-6 imgbboder'>
                            <div className='wow fadeInUp delay-0-2s animated animateUP'>
                                <img src="/assets/img/new/frams.png" alt="images" />
                            </div>
                        </div>

                        <div className='col-sm-12'>
                            <div className='policyeslist wow fadeInUp delay-0-2s animated animateUP'>
                   
                                <p className='mbb-20 ptt-20'>
                                    Subsequently, we will focus on how to manage client trust and intimacy effectively. We will show you how to measure the effectiveness of your coaching sessions and make necessary improvements to enhance the quality of your coaching.
                                </p>


                                <p className='mbb-20'>
                                    Last but not least, we shall cover Coaching for Performance where you will learn how to help your clients achieve their goals and improve their performance in various aspects of their lives.
                                </p>

                                <h3 className='mbb-20'>Here’s a quick snapshot of the topics covered</h3>

                                <table className='mtblc wow fadeInUp delay-0-2s animated animateUP width100p'>
                                    <tr>
                                        <th width="80px">S. No</th>
                                        <th>Module Name</th>
                                        <th>Learning Goal</th>
                                        <th width="140px">Time (Mins)</th>

                                    </tr>
                                    <tr>
                                        <td>01</td>
                                        <td>Intro to Professional Coaching</td>
                                        <td>Understand What is Professional Coaching?</td>
                                        <td>80</td>
                                    </tr>

                                    <tr>
                                        <td>02</td>
                                        <td>Ethical Practice and Coach Values</td>
                                        <td>Demonstrate Understanding of Role and Responsibility of Coach.</td>
                                        <td>90</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>Road to be an accredited Coach</td>
                                        <td>Understand the Steps and Process to get Certified as Coach</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>04</td>
                                        <td>Coaching is Partnership</td>
                                        <td>Establishes and Maintains Agreements</td>
                                        <td>120</td>
                                    </tr>
                                    <tr>
                                        <td>05</td>
                                        <td>Embodying a Coaching Mindset</td>
                                        <td>The mindset of Coach</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>06</td>
                                        <td>Evoking Awareness</td>
                                        <td>Learn, how to frame Powerful Questions.</td>
                                        <td>125</td>
                                    </tr>
                                    <tr>
                                        <td>07</td>
                                        <td>Introduction to FRAME Model of coaching by BYLD</td>
                                        <td>Learn the cognitive steps to coach the clients.</td>
                                        <td>135</td>
                                    </tr>
                                    <tr>
                                        <td>08</td>
                                        <td>Mastering FRAME Model</td>
                                        <td>Learn to master the steps sequentially to create acceleration and depth in using the Coaching Model</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>09</td>
                                        <td>Applying FRAME to Career Coaching</td>
                                        <td>Practice FRAME to help Clients in Career development Situations</td>
                                        <td>110</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Managing Client Trust and Intimacy</td>
                                        <td>Understand, how trust and Intimacy can be cultivated to create meaningful relationships with Clients</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Evaluation of Coaching Effectiveness using Kirk Patrick's Model.</td>
                                        <td>How to create 4 types of assessments strategies for Coaching Effectiveness</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Coaching for Performance </td>
                                        <td>Mastering FRAME model for enhancing client performance</td>
                                        <td>180</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>How to design actions at end of Each call?</td>
                                        <td>Help clients move forward in direction towards what the goal is?</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>Facilitate Client Growth</td>
                                        <td>Learn to build positive accountability for Coaching Effectiveness</td>
                                        <td>180</td>
                                    </tr>





                                </table>
                            </div>
                        </div>

                        <div className='col-sm-12 text-center'>
                            <div className="btn-part ptt-10 pbb-30 mtt-30 wow fadeInUp delay-0-2s animated animateUP">
                                <Link href="/module/module-2"><a className="readon2">Module II <div className="btn-arrow"></div></a></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
