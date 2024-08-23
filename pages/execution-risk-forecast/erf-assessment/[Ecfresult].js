import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export async function getServerSideProps(context) {
    const caturl = context.params.Ecfresult;

    const res = await fetch(`https://byldblogs.vercel.app/api/efc-assessment/${caturl}`)
    const result = await res.json()
    return {
        props: {
            result
        },
    }
}




export default function result({ result }) {

    function downloadAsPDF() {
        var element = document.getElementById('demo');
        html2pdf(element);
    }

    if (!Object.keys(result).length) {
        return <div className='container'>
            <div className='row'>
                <div class="col-lg-12 contact-title">

                    <h1>Nothing Found</h1>
                    <p>
                        Please Submit You Asessement Before.
                    </p>
                    <h6>
                        <a class="submit" href='/execution-risk-forecast/erf-assessment'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }


    return (
        <>


            <Head>
                <title>Result | ERF</title>
                <meta name="description" content="Circle the number that best represents the extent to which you do the following" />
            </Head>


            <section>
                <div className='containeraj pbb-50'>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <button class="submit btnnewc" onClick={downloadAsPDF}> Download Your Report </button>
                        </div>
                    </div>
                    <div id="demo" className='row'>

                        {
                            result.slice(0, 1).map((results) => {

                                var px = '%'

                                var Define = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8);

                                var capacity = parseInt(results.q9) + parseInt(results.q10) + parseInt(results.q11) + parseInt(results.q12) + parseInt(results.q13) + parseInt(results.q14);

                                var Culture = parseInt(results.q15) + parseInt(results.q16) + parseInt(results.q17) + parseInt(results.q18) + parseInt(results.q19) + parseInt(results.q20);

                                var Sponsorship = parseInt(results.q21) + parseInt(results.q22) + parseInt(results.q23) + parseInt(results.q24) + parseInt(results.q25) + parseInt(results.q26) + parseInt(results.q27) + parseInt(results.q28) + parseInt(results.q29) + parseInt(results.q30) + parseInt(results.q31) + parseInt(results.q32) + parseInt(results.q33) + parseInt(results.q34) + parseInt(results.q35)

                                var Approach = parseInt(results.q36) + parseInt(results.q37) + parseInt(results.q38) + parseInt(results.q39) + parseInt(results.q40) + parseInt(results.q41) + parseInt(results.q42) + parseInt(results.q43) + parseInt(results.q44) + parseInt(results.q45)

                                var Readiness = parseInt(results.q46) + parseInt(results.q47) + parseInt(results.q48) + parseInt(results.q49) + parseInt(results.q50) + parseInt(results.q51) + parseInt(results.q52) + parseInt(results.q53)

                                var Communication = parseInt(results.q54) + parseInt(results.q55) + parseInt(results.q56) + parseInt(results.q57) + parseInt(results.q58) + parseInt(results.q59) + parseInt(results.q60) + parseInt(results.q61)

                                var Strategy = parseInt(results.q62) + parseInt(results.q63) + parseInt(results.q64) + parseInt(results.q65) + parseInt(results.q66) + parseInt(results.q67) + parseInt(results.q68) + parseInt(results.q69) + parseInt(results.q70) + parseInt(results.q71)

                                var Cultural = parseInt(results.q72) + parseInt(results.q73) + parseInt(results.q74) + parseInt(results.q75) + parseInt(results.q76) + parseInt(results.q77) + parseInt(results.q78) + parseInt(results.q79)

                                var Involvement = parseInt(results.q80) + parseInt(results.q81) + parseInt(results.q82) + parseInt(results.q83) + parseInt(results.q84) + parseInt(results.q85) + parseInt(results.q86) + parseInt(results.q87)

                                var overall = Define + capacity + Culture + Sponsorship + Approach + Readiness + Communication + Strategy + Cultural + Involvement;


                                return (

                                    <>
                                        <div className='col-sm-12'>
                                            <div>
                                                <img src="/assets/img/ecfimg1.jpg" alt="ba" />
                                            </div>
                                            <div className='both1'>
                                                <h1>
                                                    EXECUTION RISK FORECAST (CRF) <br></br>FOR TRANSFORMATION OF A PROJECT.
                                                </h1>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-6'>
                                                    <div className='clcleft ccvvbb pbb-10'>
                                                        <h4><i>Prepared For :</i></h4>
                                                        <h3>{results.name}</h3>
                                                        <h4><i>Your Initiative : </i> {results.initiative}</h4>
                                                    </div>
                                                </div>
                                                <div className='col-sm-6'>
                                                    <div className='clcright'>
                                                        <img src="/assets/img/byld-logo.svg" alt="ba" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-12'>
                                            <div>
                                                <img src="/assets/img/ecfcc2.jpg" alt="ba" />
                                            </div>

                                            <div className='row align-items-center'>
                                                <div className='col-sm-6 introc1'>
                                                    <div className=''>
                                                        <h2>INTRODUCTION</h2>
                                                    </div>
                                                </div>
                                                <div className='col-sm-6 introc2'>
                                                    <div className=''>
                                                        <p>
                                                        90% of the transformation projects go over budget, time, or quality. Means they fail. Use the assessment below to assess the risk to change/project and correct the areas of concern.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='col-sm-12 introc3'>
                                                    <p>
                                                    BYLD Execution Risk Forecast (ERF) is a reflective and scientific approach to managing the human and cultural elements critical to achieving strategic business objectives. The Execution Risk Forecast (ERF) is one component of the overall approach and provides a “snapshot” measurement designed to increase the probability of the Execution of strategies and/or transformation projects' success by identifying current risk factors and targeting specific resources for a project in progress. Additional components will assess the other key factors which are essential for change/project success.
                                                    </p>
                                                </div>

                                                <div className='col-sm-12 ptt-30 pbb-80 prr-30'>
                                                    <span className='brhc'></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-12'>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4 clp5'>
                                                    <div className='borb1 ttlc'>
                                                        <h2>Change/Project Risk Forecast (CRF)</h2>
                                                    </div>

                                                    <div className='ttlca'>
                                                        <h2>
                                                        The goal of this forecast is to increase the probability of change/project success by focusing attention on specific areas and targeting specific resources & strategies for improvement.
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className='col-sm-8 introc4'>
                                                    <div className=''>
                                                        <h4>
                                                        The change/project Risk Forecast is designed as a specific “snapshot” measurement device for any planned or ongoing change/project. The principles contained herein are integral to BYLD Consulting (Part of BYLD Group).
                                                        </h4>
                                                        <p>
                                                        Executives, Sponsors, Project Team Leads, Project Team Members, or anyone else impacted by this specific change/project can take this measurement. If it is to be used as a true measurement and not just as a development exercise, a diagnostic comparison of the perception of Sponsors, Agents, and Targets (see definition) will be the most meaningful.
                                                        </p>

                                                        <p>
                                                        This is weighted by the number of questions in each section to reflect the relative importance of the section (the larger the number of questions, the more important the section). However, it should be noted that any section (or item) might significantly reduce the probability of success since it will violate one of the basic principles of sound change/project.
                                                        </p>

                                                        <p>
                                                        The Change/Project Risk Forecast is a part of the BYLD Consulting practice toolset to help organizations diagnose and pay attention to red flags in their project or change or transformation initiative. The cost of failure of this initiative can be immense and difficult to undo. It is a summation of the basic principles behind BYLD consulting practice’s change/projects Methodology. Problems detected in any given section of this risk forecast should be further analyzed by the comprehensive measurement tool designed for that principle or section
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className='col-sm-12 ptt-100 pbb-100 prr-30'>
                                                    <span className='brhc mtt-40'></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-12'>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-8'>
                                                    <div className='sco1 ptt-5'>
                                                        <h2>SCORING</h2>
                                                        <p>
                                                            The change/project Risk Forecast provides 10 section scores that assess the key characteristics of change/project risk.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className='sco2 prr-10'>
                                                        <img src="/assets/img/ecfim3.jpg" alt="ba" />
                                                    </div>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <div className='scobtn'>
                                                        <h5>To obtain your scores:</h5>
                                                    </div>

                                                    <div className='sconumber'>
                                                        <div className='inctersco'>
                                                            <p><span>01.</span>Total each section in the section in the space given at the end of each question section.</p>
                                                            <p><span>02.</span>Transfer each section total from the previous pages to the chart below.</p>
                                                            <p><span>03.</span>Calculate your change/project risk score by totaling all the section total.</p>
                                                            <p><span>04.</span>To the right of each section score, plot your score to determine the change/project risk.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-sm-12 ptt-100 pbb-70 prr-30'>
                                                    <span className='brhc mtt-100 mbb-30'></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-12'>
                                            <div className='ecfreport'>
                                                <h3>Report</h3>
                                            </div>

                                            <div className='mtblss'>
                                                <table>
                                                    <tr>
                                                        <td width='300px'></td>
                                                        <td width='120px'><img src="/assets/img/ecf/sco.jpg" alt="ba" /></td>
                                                        <td><img src="/assets/img/ecf/tt.jpg" alt="ba" /></td>
                                                    </tr>
                                                </table>

                                                <table className='mscor'>
                                                    <tr>
                                                        <td width='300px'>Define the change</td>
                                                        <td className="resltd" width='120px'><span>{Define}</span></td>
                                                        <td><img src="/assets/img/ecf/1.jpg" alt="ba" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td width='300px'>Build agent capacity</td>
                                                        <td className="resltd" width='120px'><span>{capacity}</span></td>
                                                        <td><img src="/assets/img/ecf/2.jpg" alt="ba" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td width='300px'>Assess the climate</td>
                                                        <td className="resltd" width='120px'><span>{Culture}</span></td>
                                                        <td><img src="/assets/img/ecf/3.jpg" alt="ba" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td width='300px'>Generate sponsorship</td>
                                                        <td className="resltd" width='120px'><span>{Sponsorship}</span></td>
                                                        <td><img src="/assets/img/ecf/4.jpg" alt="ba" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td width='300px'>Determine change approach</td>
                                                        <td className="resltd" width='120px'><span>{Approach}</span></td>
                                                        <td><img src="/assets/img/ecf/5.jpg" alt="ba" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td width='300px'>Develop target readiness</td>
                                                        <td className="resltd" width='120px'><span>{Readiness}</span></td>
                                                        <td><img src="/assets/img/ecf/6.jpg" alt="ba" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td width='300px'>Build communication plan</td>
                                                        <td className="resltd" width='120px'><span>{Communication}</span></td>
                                                        <td><img src="/assets/img/ecf/7.jpg" alt="ba" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td width='300px'>Development reinforcement strategy</td>
                                                        <td className="resltd" width='120px'><span>{Strategy}</span></td>
                                                        <td><img src="/assets/img/ecf/8.jpg" alt="ba" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td width='300px'>Create cultural fit</td>
                                                        <td className="resltd" width='120px'><span>{Cultural}</span></td>
                                                        <td><img src="/assets/img/ecf/9.jpg" alt="ba" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td width='300px'>Involvement</td>
                                                        <td className="resltd" width='120px'><span>{Involvement}</span></td>
                                                        <td><img src="/assets/img/ecf/10.jpg" alt="ba" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td width='300px'>Overall probability of success</td>
                                                        <td className="resltd" width='120px'><span>{overall}</span></td>
                                                        <td><img src="/assets/img/ecf/11.jpg" alt="ba" /></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>

                                        <div className='col-sm-12 ptt-100 pbb-10 prr-30'>
                                            <span className='brhc mtt-60 mbb-0'></span>
                                        </div>

                                        <div className='col-sm-12'>
                                            <div className='ptt-50 prr-15'>
                                                <img src="/assets/img/ecf/ERF.jpg" alt="ba" />
                                            </div>
                                        </div>
                                    </>
                                )



                            })
                        }
                    </div>
                </div>
            </section>


        </>
    )
}



