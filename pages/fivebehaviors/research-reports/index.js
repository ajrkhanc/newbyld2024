import Head from 'next/head';
import React, { useState } from 'react';
 import ResearchOne from './components/fiveBehaviorsResearchReport'

export default function researchReports() {
   
    return (
        <>
            <Head>
                <title>Research Reports</title>
                <meta name="description" content="" />


            </Head>

            <div className="rs-about style2 clientcornnerlogo ptt-20 pbb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="">
                                <div className="sec-title3 mbb-35">
                                    <h4 className="countertoph2 text-center font30">Explore Our Library</h4>
                                    <div className="heading-border-line center-style"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                          <ResearchOne/> 
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
