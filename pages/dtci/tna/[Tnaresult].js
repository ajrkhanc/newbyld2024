import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Tnaresult;

    const res = await fetch(`https://byldblogs.vercel.app/api/training-assessment/${caturl}`)
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
                        <a class="submit" href='/dtci/tna'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>
       

            <Head>
                <title>Result | Career Coaching Snapshot</title>
                <meta name="description" content="Circle the number that best represents the extent to which you do the following" />
            </Head>


            <section className='assesmentpart2 aalpading0'>
                <div className='container'>
                    <div className='row align-items-center'>
                        {/* <div className='col-sm-12 text-center'>
                            <button class="submit btnnewc"> Download Result </button>
                        </div> */}
                        <div className='col-md-12'>
                            {
                                result.slice(0, 1).map((results) => {

                                    var px = '%'
                                    var Leadership = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) + parseInt(results.q10) + parseInt(results.q11)
                                    var Leadership100 = (Leadership/110*100).toFixed(2)
                                    var Leadershipresultbar = Leadership100 + px
                                    

                                    var Interaction = parseInt(results.q12) + parseInt(results.q13) + parseInt(results.q14) + parseInt(results.q15) + parseInt(results.q16) + parseInt(results.q17) + parseInt(results.q18)
                                    var Interaction100 = (Interaction/70*100).toFixed(2)
                                    var Interactionresultbar = Interaction100 + px
                                    

                                    var CommunicationSkills = parseInt(results.q19) + parseInt(results.q20) + parseInt(results.q21) + parseInt(results.q22) + parseInt(results.q23) + parseInt(results.q24) + parseInt(results.q25) + parseInt(results.q26)
                                    var CommunicationSkills100 = (CommunicationSkills/80*100).toFixed(2)
                                    var CommunicationSkillsresultbar = CommunicationSkills100 + px
                                   

                                    var AnalyticalSkills = parseInt(results.q27) + parseInt(results.q28) + parseInt(results.q29)
                                    var AnalyticalSkills100 = (AnalyticalSkills/30*100).toFixed(2)
                                    var AnalyticalSkillsresultbar = AnalyticalSkills100 + px
                                    

                                    var Improvement = parseInt(results.q30) + parseInt(results.q31) + parseInt(results.q32) + parseInt(results.q33) + parseInt(results.q34)
                                    var Improvement100 = (Improvement/50*100).toFixed(2)
                                    var Improvementresultbar = Improvement100 + px
                                    

                                    var Managing = parseInt(results.q35) + parseInt(results.q36) + parseInt(results.q37) + parseInt(results.q38) + parseInt(results.q39) + parseInt(results.q40) + parseInt(results.q41)
                                    var Managing100 = (Managing/70*100).toFixed(2)
                                    var Managingresultbar = Managing100 + px
                                    

                                    var Flexibility = parseInt(results.q42) + parseInt(results.q43)
                                    var Flexibility100 = (Flexibility/20*100).toFixed(2)
                                    var Flexibilityresultbar = Flexibility100 + px
                                    

                                    var Performance = parseInt(results.q44) + parseInt(results.q45) + parseInt(results.q46) + parseInt(results.q47) + parseInt(results.q48) + parseInt(results.q49) + parseInt(results.q50) + parseInt(results.q51) + parseInt(results.q52) + parseInt(results.q53) + parseInt(results.q54) + parseInt(results.q55)
                                    var Performance100 = (Performance/2).toFixed(2)
                                    var Performanceresultbar = Performance100 + px

                                    var Overall = parseInt(results.q44) + parseInt(results.q45) + parseInt(results.q46) + parseInt(results.q47) + parseInt(results.q48) + parseInt(results.q49) + parseInt(results.q50) + parseInt(results.q51) + parseInt(results.q52) + parseInt(results.q53) + parseInt(results.q54) + parseInt(results.q55)
                                    var Overall100 = (Overall/550*100).toFixed(2)
                                    var Overallresultbar = Overall100 + px
                               

                                    return (

                                        <div className='demodonload dresult' id='demo'>
                                           <div className="pageheader">              
                                                <div className="">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col mw6 header-logo ptt-5 pbb-5 bgs">                                 
                                                                <div className="logo-area">
                                                                    <a href="#">
                                                                        <img src="/assets/img/byld-logo.svg" alt="logo"/>  
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            {/* <div className="col mw6 header-logo ptt-5 pbb-5 bgs">
                                                                <div className="rs-menu-area">
                                                                <div className="logo-area text-right">
                                                                    <a href="#" className=''>
                                                                        <img src="/assets/img/insideco.jpg" alt="logo"/>  
                                                                    </a>
                                                                </div> 
                                                                </div>
                                                            </div> */}
                                                            
                                                        </div>
                                                    </div>
                                                </div>            
                                            </div>
                                            
                                            <div class="assessment-result-block">
                                                <h3 className='ptop text-center'>Hi {results.name}</h3>
                                            </div>
                                            <div className='cochingformat'>                                               
                                                <div className='dlw'>
                                                <h4 className='yresultc'><span>Y</span>OUR <span>R</span>EPORT</h4> <a onClick={downloadAsPDF}><i className="fa fa-download" aria-hidden="true"></i></a>
                                                </div>
                                                <p>Your survey responses provide a snapshot, or data from a point in time, about how you perceive your coaching. This is a unique opportunity to gain insights into how you see your effectiveness as a coach.</p>
                                            </div>

                                            <div className='resultable'>
                                                <table>
                                                    <tr className='tablefbh'>
                                                        <th>Competency</th>                                         
                                                        <th>Self</th>
                                                        <th>Result</th>
                                                    </tr>
                                                    <tr>
                                                        <td className='firsttd'>Leadership</td>                                                       
                                                        <td>                                                          
                                                            <span>{Leadership100}</span>
                                                        </td>
                                                        <td>
                                                            
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                {
                                                                        (() => {
                                                                            if (Leadership100 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: Leadershipresultbar }}></div>
                                                                            if (Leadership100 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: Leadershipresultbar }}></div>
                                                                            else (Leadership100 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: Leadershipresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Interaction</td>                                                       
                                                        <td>
                                                            <span>{Interaction100}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (Interaction100 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: Interactionresultbar }}></div>
                                                                            if (Interaction100 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: Interactionresultbar }}></div>
                                                                            else (Interaction100 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: Interactionresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Communication Skills</td>
                                                        
                                                        <td>
                                                            <span>{CommunicationSkills100}</span>
                                                        </td>
                                                        <td>                                                          
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (CommunicationSkills100 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: CommunicationSkillsresultbar }}></div>
                                                                            if (CommunicationSkills100 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: CommunicationSkillsresultbar }}></div>
                                                                            else (CommunicationSkills100 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: CommunicationSkillsresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Analytical Skills</td>
                                                       
                                                        <td>
                                                            <span>{AnalyticalSkills100}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (AnalyticalSkills100 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: AnalyticalSkillsresultbar }}></div>
                                                                            if (AnalyticalSkills100 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: AnalyticalSkillsresultbar }}></div>
                                                                            
                                                                            else (AnalyticalSkills100 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: AnalyticalSkillsresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Improvement</td>
                                                       
                                                        <td>
                                                            <span>{Improvement100}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (Improvement100 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: Improvementresultbar }}></div>
                                                                            if (Improvement100 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: Improvementresultbar }}></div>
                                                                            
                                                                            else (Improvement100 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: Improvementresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Managing</td>
                                                       
                                                        <td>
                                                            <span>{Managing100}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (Managing100 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: Managingresultbar }}></div>
                                                                            if (Managing100 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: Managingresultbar }}></div>
                                                                            
                                                                            else (Managing100 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: Managingresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Flexibility</td>
                                                       
                                                        <td>
                                                            <span>{Flexibility100}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (Flexibility100 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: Flexibilityresultbar }}></div>
                                                                            if (Flexibility100 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: Flexibilityresultbar }}></div>
                                                                            
                                                                            else (Flexibility100 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: Flexibilityresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Performance</td>
                                                       
                                                        <td>
                                                            <span>{Performance100}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (Performance100 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: Performanceresultbar }}></div>
                                                                            if (Performance100 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: Performanceresultbar }}></div>
                                                                            
                                                                            else (Performance100 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: Performanceresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>


                                                </table>                                                
                                            </div>

                                            <div className='cochingformat'>
                                               
                                                
                                                <h4 className='yresultc ccn'><span>U</span>NDERSTANDING <span>Y</span>OUR <span>R</span>ATINGS <span>S</span>UMMARY</h4>
                                                <br></br>
                                                <table>
                                                    <tr className='tablefbh'>
                                                        <th>Score</th>
                                                        <th>Interpretation</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Less than 4.5 (Red)</td>
                                                        <td>Area that needs attention</td>
                                                        <td>Prioritise to manage and learn the skills to minimize the negative impact on others.</td>
                                                    </tr>

                                                    <tr>
                                                        <td>4.6 to 6.0 (Yellow)</td>
                                                        <td>Area of strength</td>
                                                        <td>Build it further and focus on select behaviours to make them even better</td>
                                                    </tr>

                                                    <tr>
                                                        <td>6.1 + (Green)</td>
                                                        <td>Area of Commanding Excellence</td>
                                                        <td>Keep building on the strengths.</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            
                                        </div>
                                    )



                                })


                            }



                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}



