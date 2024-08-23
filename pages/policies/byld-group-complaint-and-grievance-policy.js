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
                <meta name="description" content="BYLD Group and Coach Candidate Partial Completion Policy"/>
                <link rel="stylesheet" type="text/css" href="/assets/css/cohomemodule.css" />
            </Head>


            <section className='aboutmap ptt-50 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-left pbb-10'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP headeing2">BYLD Group Complaint and Grievance Policy</h2>
                            <p className='wow fadeInUp delay-0-2s animated animateUP'>
                                BYLD Group is committed to providing quality services and support to our clients. We value our clients' opinions and feedback and strive to provide a fair and equitable approach to resolving any issues that may arise. This policy outlines our commitment to addressing and resolving client complaints and grievances.
                            </p>
                        </div>
                        <div className='clearfix'></div>

                        <div className='col-sm-12'>
                            <div className='policyeslist wow fadeInUp delay-0-2s animated animateUP'>
                                <h3>1. Receiving and Responding to Complaints and Grievances</h3>
                                <p>
                                    BYLD Group will take all complaints and grievances seriously and will make every effort to resolve them in a timely and satisfactory manner. All complaints and grievances should be directed to the appropriate staff member or department. All complaints and grievances will be acknowledged and responded to within 5 business days of receipt.
                                </p>

                                <h3>2. Investigating Complaints and Grievances</h3>
                                <p>
                                    BYLD Group will conduct a thorough investigation of all complaints and grievances. All investigations
                                    will be conducted in a fair and impartial manner, taking into account all relevant information. The
                                    investigation process may include interviews, surveys and review of relevant documents. The
                                    outcome of the investigation will be communicated to the complainant in writing.
                                </p>

                                <h3>3. Resolving Complaints and Grievances</h3>
                                <p>
                                    BYLD Group will make every effort to resolve complaints and grievances to the complainant’s
                                    satisfaction. Where applicable, appropriate remedies may be offered, such as an apology, additional
                                    training or an adjustment to the services provided. Wherever possible, BYLD Group will strive to
                                    reach an amicable resolution to any disputes.
                                </p>

                                <h3>4. Appeals</h3>
                                <p>
                                    If the complainant is not satisfied with the outcome of the complaint or grievance, they may lodge an
                                    appeal with the relevant department. All appeals will be assessed by a senior staff member and the
                                    complainant will be notified of the outcome in writing.
                                </p>

                                <h3>5. Confidentiality</h3>
                                <p>
                                    BYLD Group will ensure that all complaints and grievances are treated with confidentiality. All
                                    information collected and exchanged during the complaint or grievance process will remain
                                    confidential, unless required by law.
                                </p>
                                <p>
                                    We hope that this Complaint and Grievance Policy provides clarity and reassurance when it comes to
                                    resolving any issues that arise. We value your feedback and are committed to providing a fair and
                                    equitable approach to resolving any issues that may arise.
                                </p>

                                <p>Do not Copy without Permission. 2022</p>

                            </div>
                        </div>

                        <div className='col-sm-12'>
                        <ul className='mpolicyesc'>
                                    <li>
                                        <a href='/policies/byld-group-and-coach-candidate-partial-completion-policy'>Partial Completion Policy</a>
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
