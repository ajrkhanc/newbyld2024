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
                <title>Disability & Discrimination Statement BYLD</title>
                <meta name="description" content="Disability & Discrimination Statement"/>
                <link rel="stylesheet" type="text/css" href="/assets/css/cohomemodule.css" />
            </Head>


            <section className='aboutmap ptt-50 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-left pbb-10'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP headeing2">Disability & Discrimination Statement</h2>
                            <p className='wow fadeInUp delay-0-2s animated animateUP'>
                            We at BYLD Group are committed to providing a safe and inclusive environment for everyone. We do not tolerate any form of disability discrimination, harassment, or victimisation. We are committed to promoting equal access, opportunity, and respect for all people regardless of their disability. We actively strive to ensure that everyone is treated equally and with respect, and that any differences in ability or disability are recognised and valued. We are committed to providing reasonable adjustments to ensure that everyone can participate fully in our activities. We will take all necessary steps to prevent disability discrimination, harassment, and victimisation and to promote a positive and inclusive culture for all.
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
                                        <a href='/policies/enrollment-agreement-for-actp-program-offered'>Enrollment Agreement Policy</a>
                                    </li>
                                    <li>
                                        <a href='/policies/ethical-marketing-policy'>Ethical Marketing Practice</a>
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
