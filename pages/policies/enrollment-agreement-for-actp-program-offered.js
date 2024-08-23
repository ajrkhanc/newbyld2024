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
                <title>ENROLLMENT AGREEMENT for ACTP Program offered by BYLD Group</title>
                <meta name="description" content="ENROLLMENT AGREEMENT for ACTP Program offered by BYLD Group" />
                <link rel="stylesheet" type="text/css" href="/assets/css/cohomemodule.css" />
            </Head>


            <section className='aboutmap ptt-50 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-left pbb-10'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP headeing2">ENROLLMENT AGREEMENT for ACTP Program offered by BYLD Group</h2>
                            <p className='wow fadeInUp delay-0-2s animated animateUP'>
                                This Enrolment Agreement (the “Agreement”) is entered into by and between BYLD Group, a company incorporated in Gurugram, Haryana, India (“BYLD” or “Company”) and the Coach Candidate (“Coach Candidate”), as of the date of acceptance of this Agreement.
                            </p>
                            <p className='wow fadeInUp delay-0-2s animated animateUP'>
                                This Agreement governs the enrolment of the Coach Candidate into the Accredited Coach Training Program (“ACTP Program”) offered by BYLD.
                            </p>
                        </div>
                        <div className='clearfix'></div>

                        <div className='col-sm-12'>
                            <div className='policyeslist wow fadeInUp delay-0-2s animated animateUP'>
                                <h3>1. Enrolment</h3>
                                <p>
                                    The Coach Candidate hereby applies for enrolment in the ACTP Program, and the Company hereby
                                    accepts such application. The Coach Candidate hereby agrees to abide by the terms of this
                                    Agreement and any additional rules and regulations that may be adopted by the Company from time
                                    to time.
                                </p>

                                <h3>2. Term</h3>
                                <p>
                                    The term of this Agreement shall commence on the date of acceptance of this Agreement and shall
                                    remain in full force and effect until the completion of the ACTP Program by the Coach Candidate, as
                                    set forth in Section 4 below.
                                </p>

                                <h3>3. Fees</h3>
                                <p>
                                    The Coach Candidate shall pay the fees for the ACTP Program as set forth in the Company’s fee
                                    schedule which shall be provided upon acceptance of this Agreement. The Company reserves the
                                    right to modify the fee schedule from time to time, and any such changes shall become effective
                                    upon written notice to the Coach Candidate. All fees shall be payable in full in advance of the
                                    commencement of the ACTP Program.
                                </p>

                                <h3>4. Completion of Program</h3>
                                <p>
                                    The ACTP Program shall be deemed completed upon successful completion of all assessments,
                                    including written, oral and practical assessments as required by the Company. Upon completion of
                                    the ACTP Program, the Company shall issue a certificate of completion to the Coach Candidate.
                                </p>

                                <h3>5. Termination</h3>
                                <p>
                                    This Agreement may be terminated by either party upon written notice to the other party. In the
                                    event of termination by the Coach Candidate, the Company shall refund any fees that have been paid
                                    by the Coach Candidate, less any service & administrative costs incurred by the Company.
                                </p>

                                <h3>6. Indemnification</h3>
                                <p>
                                    The Coach Candidate shall indemnify and hold the Company harmless from all claims, damages and
                                    liabilities of any kind arising out of or related to the Coach Candidate’s enrolment in and completion
                                    of the ACTP Program.
                                </p>

                                <h3>7. Governing Law</h3>
                                <p>This Agreement shall be governed by and construed in accordance with the laws of the Gurugram,
                                    State of Haryana, India, without giving effect to any choice of law or conflict of law provisions or
                                    rules.  </p>

                                <p>IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.</p>


                                <table className='mtblc wow fadeInUp delay-0-2s animated animateUP width100p'>
                                    <tr>
                                        <th>BYLD Group</th>
                                        <th>Coach Candidate</th>
                                      
                                    </tr>
                                    <tr>
                                        <td>Name:</td>
                                        <td>Name:</td>
                                    </tr>

                                    <tr>
                                        <td>Signature</td>
                                        <td>Signature</td>
                                    </tr>

                                    <tr>
                                        <td>Date</td>
                                        <td>Date</td>
                                    </tr>

                                    
                                </table>
                            </div>
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
