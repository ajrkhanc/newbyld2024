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
                <title>Ethical Marketing Policy</title>
                <meta name="description" content="BYLD Group Statement of Ethical Marketing Practice"/>
                <link rel="stylesheet" type="text/css" href="/assets/css/cohomemodule.css" />
            </Head>


            <section className='aboutmap ptt-50 pbb-40'> 
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-left pbb-10'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP headeing2">BYLD Group Statement of Ethical Marketing Practice</h2>
                            <p className='wow fadeInUp delay-0-2s animated animateUP'>
                            At BYLD Group, we are committed to ethical marketing practices in our efforts to source potential coach candidates specifically around social media. We strive to ensure that our marketing and sales efforts practices are fair and unbiased, and we are dedicated to protecting the privacy of our potential candidates and alumni Coach by only using their data in accordance with applicable laws and regulations and ICF guidelines. We also strive to provide accurate and timely information to our candidates throughout the recruitment process.
                            </p>

                            <p className='wow fadeInUp delay-0-2s animated animateUP'>
                            More generally, we value integrity and transparency in all our marketing and advertising efforts, and we are committed to providing a positive experience to all of our customers and stakeholders.
                            </p>
                        </div>

                        <div className='col-sm-12'>
                        <ul className='mpolicyesc'>
                                    <li>
                                        <a href='/policies/byld-group-and-coach-candidate-partial-completion-policy'>Partial Completion Policy</a>
                                    </li>
                                    <li>
                                        <a href='/policies/byld-group-complaint-and-grievance-policy'>Grievance Policy</a>
                                    </li>
                                    <li>
                                        <a href='/policies/disability-and-discrimination-statement'>Disability & Discrimination Statement</a>
                                    </li>
                                    <li>
                                        <a href='/policies/enrollment-agreement-for-actp-program-offered'>Enrollment Agreement Policy</a>
                                    </li>
                                    <li>
                                        <a href='/coaching/become-a-coach'>Go Back</a>
                                    </li>
                                </ul>
                        </div>
                    
                    </div>
                </div>
            </section>
        </>
    )
}
