import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Bmeassesment;

    const res = await fetch(`https://kbblogs.vercel.app/api/bme-assessment/${caturl}`)
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
                <div class="col-lg-12 contact-title nofound">

                    <h1>Nothing Found</h1>
                    <p>
                        Please Submit You Asessement Before.
                    </p>
                    <h6>
                        <a class="submit" href='/assessments/bme-assessment'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>


            <Head>
                <title>BME and First Time Manager Result</title>
                <meta name="description" content="BME and First Time Manager" />
                <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>

            </Head>


            <section className='assesmentpart2 aalpading0'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 text-center'>
                            <button onClick={downloadAsPDF} class="submit btnnewc"> Download Result </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id='demo' className='pbb-10 pll-20 prr-20 paddingsall'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            {
                                result.slice(0, 1).map((results) => {
                                    return (
                                        <h4 className="countertoph2 text-center resh">{results.name} - Report</h4>
                                    )
                                })
                            }


                        </div>

                        <div className='col-sm-12'>
                            {
                                result.slice(0, 1).map((results) => {

                                    var px = '%'
                                    var result1 = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) + parseInt(results.q10)

                                    var overall = result1
                                    var overresult = overall

                                    var overallresult = overresult.toFixed(2) + px
                                    var overallbar = overresult

                                    return (
                                        <>
                                            <div class="assessment-result-block">
                                                <h3>Overall Score = <span className='rco'>{overresult}</span></h3>
                                                <div class="result-bar-wrapper">
                                                    {
                                                        (() => {
                                                            if (overallbar <= 50)
                                                                return <>
                                                                    <div class="result-bar bgred" style={{ width: overallresult }}></div>
                                                                </>
                                                            if (overallbar <= 68)
                                                                return <>
                                                                    <div class="result-bar yellobg" style={{ width: overallresult }}></div>
                                                                </>

                                                            if (overallbar <= 82)
                                                                return <>
                                                                    <div class="result-bar orangebg" style={{ width: overallresult }}></div>
                                                                </>
                                                            else (overallbar <= 100)
                                                            return <>
                                                                <div class="result-bar greenbg" style={{ width: overallresult }}></div>
                                                            </>
                                                        })()
                                                    }


                                                </div>

                                                <div class="result-bar-labels">
                                                    <div className='row'>
                                                        {
                                                            (() => {
                                                                if (overallbar <= 50)
                                                                    return <p className='resulttextt'>The current situation needs immediate attention as the cost in terms of Performance, Enagement and Development of team is at big risk</p>

                                                                if (overallbar <= 68)
                                                                    return <p className='resulttextt'>It is a matter of time when things will start falling apart, and it will show up in blame games, finger pointing, victim cards and helpnessness</p>

                                                                if (overallbar <= 82)
                                                                    return <p className='resulttextt'>You have a stable young leader team, check which areas you can support them further in terms of skill set to make them great</p>

                                                                else (overallbar <= 100)
                                                                return <p className='resulttextt'>Your young leaders 9 or first time) managers are doing a very good job, keep feeding and recognising them for what they are doing</p>
                                                            })()
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

                <div className='container ptt-30 pbb-40'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            {
                                result.slice(0, 1).map((results) => {

                                    var px = '%'
                                    var trust1 = parseInt(results.q1)                                
                                    var trust1reresultbar = 10 * trust1 + px

                                    var trust2 = parseInt(results.q2)                                
                                    var trust2reresultbar = 10 * trust2 + px

                                    var trust3 = parseInt(results.q3)                                
                                    var trust3reresultbar = 10 * trust3 + px

                                    var trust4 = parseInt(results.q4)                                
                                    var trust4reresultbar = 10 * trust4 + px

                                    var trust5 = parseInt(results.q5)                                
                                    var trust5reresultbar = 10 * trust5 + px

                                    var trust6 = parseInt(results.q6)                                
                                    var trust6reresultbar = 10 * trust6 + px

                                    var trust7 = parseInt(results.q7)                                
                                    var trust7reresultbar = 10 * trust7 + px

                                    var trust8 = parseInt(results.q8)                                
                                    var trust8reresultbar = 10 * trust8 + px

                                    var trust9 = parseInt(results.q9)                                
                                    var trust9reresultbar = 10 * trust9 + px

                                    var trust10 = parseInt(results.q10)                                
                                    var trust10reresultbar = 10 * trust10 + px
                                  

                                    return (
                                        <>
                                            <div className='newtblc'>
                                                <table className='w100c'>
                                                    <tr className='tablefbh'>                                                        
                                                        <th width="80%">Questions</th>
                                                        {/* <th width="10%">Score</th> */}
                                                        <th width="20%" colSpan="2" className='text-center'>Result</th>
                                                    </tr>


                                                    <tr>
                                                        
                                                        <td>How effectively the young (or First time) managers are dealing with former peers?</td>
                                                        <td width="10%" className='text-center'>{trust1}</td>
                                                        <td  width="10%">
                                                            <div className='result-bar-wrapper'>
                                                                {
                                                                    (() => {
                                                                        if (trust1 <= 3)
                                                                            return <div class="result-bar bgredmini" style={{ width: trust1reresultbar }}></div>
                                                                        if (trust1 <= 6)
                                                                            return <div class="result-bar bgorangemini" style={{ width: trust1reresultbar }}></div>
                                                                            if (trust1 <= 8)
                                                                            return <div class="result-bar bgbluemini" style={{ width: trust1reresultbar }}></div>
                                                                        else (trust1 <= 10)
                                                                        return <div class="result-bar bggreenmini" style={{ width: trust1reresultbar }}></div>
                                                                    })()
                                                                }
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                 
                                                        <td>How well the young (or First time) managers balance the new workload?</td>
                                                        <td className='text-center'>{trust2}</td>
                                                        <td>
                                                        <div className='result-bar-wrapper'>
                                                        {
                                                                    (() => {
                                                                        if (trust2 <= 3)
                                                                            return <div class="result-bar bgredmini" style={{ width: trust2reresultbar }}></div>
                                                                        if (trust2 <= 6)
                                                                            return <div class="result-bar bgorangemini" style={{ width: trust2reresultbar }}></div>
                                                                            if (trust2 <= 8)
                                                                            return <div class="result-bar bgbluemini" style={{ width: trust2reresultbar }}></div>
                                                                        else (trust2 <= 10)
                                                                        return <div class="result-bar bggreenmini" style={{ width: trust2reresultbar }}></div>
                                                                    })()
                                                                }
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        
                                                        <td>How clear are the goals being set by young (or First time) managers?</td>
                                                        <td className='text-center'>{trust3}</td>
                                                        <td>
                                                        <div className='result-bar-wrapper'>
                                                        {
                                                                    (() => {
                                                                        if (trust3 <= 3)
                                                                            return <div class="result-bar bgredmini" style={{ width: trust3reresultbar }}></div>
                                                                        if (trust3 <= 6)
                                                                            return <div class="result-bar bgorangemini" style={{ width: trust3reresultbar }}></div>
                                                                            if (trust3 <= 8)
                                                                            return <div class="result-bar bgbluemini" style={{ width: trust3reresultbar }}></div>
                                                                        else (trust3 <= 10)
                                                                        return <div class="result-bar bggreenmini" style={{ width: trust3reresultbar }}></div>
                                                                    })()
                                                                }
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        
                                                        <td>How well the team chemistry being worked upon by young (or First time) managers?</td>
                                                        <td className='text-center'>{trust4}</td>
                                                        <td><div className='result-bar-wrapper'>
                                                        {
                                                                    (() => {
                                                                        if (trust4 <= 3)
                                                                            return <div class="result-bar bgredmini" style={{ width: trust4reresultbar }}></div>
                                                                        if (trust4 <= 6)
                                                                            return <div class="result-bar bgorangemini" style={{ width: trust4reresultbar }}></div>
                                                                            if (trust4 <= 8)
                                                                            return <div class="result-bar bgbluemini" style={{ width: trust4reresultbar }}></div>
                                                                        else (trust4 <= 10)
                                                                        return <div class="result-bar bggreenmini" style={{ width: trust4reresultbar }}></div>
                                                                    })()
                                                                }
                                                            </div></td>
                                                    </tr>


                                                    <tr>
                                                        
                                                        <td>How well the young (or First time) managers inspire and motivate their team members to exceed expections?</td>
                                                        <td className='text-center'>{trust5}</td>
                                                        <td><div className='result-bar-wrapper'>
                                                        {
                                                                    (() => {
                                                                        if (trust5 <= 3)
                                                                            return <div class="result-bar bgredmini" style={{ width: trust5reresultbar }}></div>
                                                                        if (trust5 <= 6)
                                                                            return <div class="result-bar bgorangemini" style={{ width: trust5reresultbar }}></div>
                                                                            if (trust5 <= 8)
                                                                            return <div class="result-bar bgbluemini" style={{ width: trust5reresultbar }}></div>
                                                                        else (trust5 <= 10)
                                                                        return <div class="result-bar bggreenmini" style={{ width: trust5reresultbar }}></div>
                                                                    })()
                                                                }
                                                            </div></td>
                                                    </tr>

                                                    <tr>
                                                        
                                                        <td>How well (Comfortable) are young (or First time) managers in terms of giving negative or consttuctive feedback?</td>
                                                        <td className='text-center'>{trust6}</td>
                                                        <td><div className='result-bar-wrapper'>
                                                        {
                                                                    (() => {
                                                                        if (trust6 <= 3)
                                                                            return <div class="result-bar bgredmini" style={{ width: trust6reresultbar }}></div>
                                                                        if (trust6 <= 6)
                                                                            return <div class="result-bar bgorangemini" style={{ width: trust6reresultbar }}></div>
                                                                            if (trust6 <= 8)
                                                                            return <div class="result-bar bgbluemini" style={{ width: trust6reresultbar }}></div>
                                                                        else (trust6 <= 10)
                                                                        return <div class="result-bar bggreenmini" style={{ width: trust6reresultbar }}></div>
                                                                    })()
                                                                }
                                                            </div></td>
                                                    </tr>

                                                    <tr>
                                                        
                                                        <td>How well are the young (or First time) managers in holding coaching conversations?</td>
                                                        <td className='text-center'>{trust7}</td>
                                                        <td>
                                                        <div className='result-bar-wrapper'>
                                                        {
                                                                    (() => {
                                                                        if (trust7 <= 3)
                                                                            return <div class="result-bar bgredmini" style={{ width: trust7reresultbar }}></div>
                                                                        if (trust7 <= 6)
                                                                            return <div class="result-bar bgorangemini" style={{ width: trust7reresultbar }}></div>
                                                                            if (trust7 <= 8)
                                                                            return <div class="result-bar bgbluemini" style={{ width: trust7reresultbar }}></div>
                                                                        else (trust7 <= 10)
                                                                        return <div class="result-bar bggreenmini" style={{ width: trust7reresultbar }}></div>
                                                                    })()
                                                                }
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        
                                                        <td>How effectively the young (or First time) managers are in communicating things clearly and effectively?</td>
                                                        <td className='text-center'>{trust8}</td>
                                                        <td>
                                                        <div className='result-bar-wrapper'>
                                                        {
                                                                    (() => {
                                                                        if (trust8 <= 3)
                                                                            return <div class="result-bar bgredmini" style={{ width: trust8reresultbar }}></div>
                                                                        if (trust8 <= 6)
                                                                            return <div class="result-bar bgorangemini" style={{ width: trust8reresultbar }}></div>
                                                                            if (trust8 <= 8)
                                                                            return <div class="result-bar bgbluemini" style={{ width: trust8reresultbar }}></div>
                                                                        else (trust8 <= 10)
                                                                        return <div class="result-bar bggreenmini" style={{ width: trust8reresultbar }}></div>
                                                                    })()
                                                                }
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        
                                                        <td>How effectively the young (or First time) managers are in managing interpersonal conflict?</td>
                                                        <td className='text-center'>{trust9}</td>
                                                        <td>
                                                        <div className='result-bar-wrapper'>
                                                        {
                                                                    (() => {
                                                                        if (trust9 <= 3)
                                                                            return <div class="result-bar bgredmini" style={{ width: trust9reresultbar }}></div>
                                                                        if (trust9 <= 6)
                                                                            return <div class="result-bar bgorangemini" style={{ width: trust9reresultbar }}></div>
                                                                            if (trust9 <= 8)
                                                                            return <div class="result-bar bgbluemini" style={{ width: trust9reresultbar }}></div>
                                                                        else (trust9 <= 10)
                                                                        return <div class="result-bar bggreenmini" style={{ width: trust9reresultbar }}></div>
                                                                    })()
                                                                }
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        
                                                        <td>How effectively the young (or First time) managers are in managing competing priorities?</td>
                                                        <td className='text-center'>{trust10}</td>
                                                        <td>
                                                        <div className='result-bar-wrapper'>
                                                        {
                                                                    (() => {
                                                                        if (trust10 <= 3)
                                                                            return <div class="result-bar bgredmini" style={{ width: trust10reresultbar }}></div>
                                                                        if (trust10 <= 6)
                                                                            return <div class="result-bar bgorangemini" style={{ width: trust10reresultbar }}></div>
                                                                            if (trust10 <= 8)
                                                                            return <div class="result-bar bgbluemini" style={{ width: trust10reresultbar }}></div>
                                                                        else (trust10 <= 10)
                                                                        return <div class="result-bar bggreenmini" style={{ width: trust10reresultbar }}></div>
                                                                    })()
                                                                }
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    

                                                </table>
                                            </div>

                                        </>
                                    )
                                })
                            }


<br></br>
<br></br>
<br></br>

                            <div className='newtblc'>
                                <table className='tddds'>
                                    <tr className='tablefbh ffdf'>
                                        <th width="15%">Score Range</th>
                                        <th className='text-center'>Interpretation of Score</th>
                                        <th width="18%">Score (Out of 100)</th>
                                    </tr>


                                    <tr>
                                        <td>50 or Less then 50</td>
                                        <td>The current situation needs immediate attention as the cost in terms of Performance, Enagement and Development of team is at big risk</td>
                                        <td rowspan="4" align='center'>
                                            {
                                                result.slice(0, 1).map((results) => {

                                                    var px = '%'
                                                    var resultc = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) + parseInt(results.q10)
                                                    return (
                                                        <h4 className='yresultc text-center'><span className='thmecc'>{resultc}</span></h4>
                                                    )
                                                })


                                            }
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>51 to 68</td>
                                        <td>It is a matter of time when things will start falling apart, and it will show up in blame games, finger pointing, victim cards and helpnessness</td>
                                    </tr>
                                    <tr>
                                        <td>68 to 82</td>
                                        <td>You have a stable young leader team, check which areas you can support them further in terms of skill set to make them great</td>
                                    </tr>
                                    <tr>
                                        <td>83 Plus</td>
                                        <td>Your young leaders 9 or first time) managers are doing a very good job, keep feeding and recognising them for what they are doing</td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br></br>
            <br></br>
        </>
    )
}



