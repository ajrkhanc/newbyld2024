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
                <title>BYLD Group and Coach Candidate Partial Completion Policy</title>
                <meta name="description" content="BYLD Group and Coach Candidate Partial Completion Policy" />
                <link rel="stylesheet" type="text/css" href="/assets/css/cohomemodule.css" />
            </Head>


            <section className='aboutmap ptt-50 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-left pbb-10'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP headeing2">BYLD Group and Coach Candidate Partial Completion Policy</h2>
                            <p className='wow fadeInUp delay-0-2s animated animateUP'>This Partial Completion Policy (the “Policy”) applies to all clients of BYLD Group and Coach Candidate’s (the “Company”) Acceptance and Commitment Training Program (the “ACTP Program”).</p>
                        </div>
                        <div className='clearfix'></div>

                        <div className='col-sm-12'>
                            <div className='policyeslist wow fadeInUp delay-0-2s animated animateUP'>
                                <ul>
                                    <li><span>1. Partial Completion:</span> The Company will allow for partial completion of the ACTP Program by a client. A partial completion is defined as the client completing a minimum of 50% of the program (Module I), including all required activities and assessments, as determined by the Company. Certificate for Module completed will offered with due credit of classroom hours. Coach Candidate may enrol in any future cohort to complete their ACTP certification without any additional costs.</li>
                                    <li><span>2. Refunds:</span> No refunds will be provided to clients who have achieved partial completion of the ACTP Program.</li>
                                    <li><span>3. Exceptions:</span> In cases of extenuating circumstances, the Company reserves the right to make exceptions to this Policy.</li>
                                    <li><span>4. Disclaimer:</span> The Company reserves the right to modify or change this Policy at any time, without prior notice. It is the client’s responsibility to stay informed and up to date with the latest version of this Policy.</li>
                                    
                                </ul>
                                <p>This Policy is effective as of 23-03-2023.</p>                               
                            </div>
                        </div>

                        <div className='col-sm-12'>
                        <ul className='mpolicyesc'>                                   
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
