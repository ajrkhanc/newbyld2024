import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.thePOHAssessment;

    const res = await fetch(`https://clblogs.vercel.app/api/the-power-of-habit-assessment/${caturl}`)
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
                        <a class="submit" href='/coaching/become-a-professional-coac'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>


            <Head>
                <title>Power of Habit Assessment Result</title>
                <meta name="description" content="Power of Habit Assessment Result" />
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

            <section id='demo' className='pbb-10 pll-20 prr-20'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            {
                                result.slice(0, 1).map((results) => {
                                    return (
                                        <h4 className="countertoph2 text-center resh">{results.name} - Self Report Assessment</h4>
                                    )
                                })
                            }

                            <h4 className="countertoph2 text-center resh">THE GREATEST PREDICTOR OF HIGH PERFORMANCE</h4>
                        </div>
                    </div>
                </div>

                <div className='container ptt-10 pbb-40'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='newtblc'>

                                {
                                    result.slice(0, 1).map((results) => {

                                        var px = '%'
                                        var result1 = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3)
                                        var result2 = parseInt(results.q4) + parseInt(results.q4) + parseInt(results.q6)
                                        var result3 = parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9)
                                        var result4 = parseInt(results.q10) + parseInt(results.q11) + parseInt(results.q12)
                                        var result5 = parseInt(results.q13) + parseInt(results.q14) + parseInt(results.q15)

                                        var overall = result1 + result2 + result3 + result4 + result5
                                        var overresult = overall / 150 * 100

                                        var overallresult = overresult.toFixed(2) + px
                                        var overallbar = overresult

                                        return (



                                            <>
                                            
                                                <table>
                                                    <tr className='tablefbh'>
                                                        <th width="15%">Competency</th>
                                                        <th>Sub-Competency</th>
                                                        <th width="10%">Total Score</th>
                                                        <th width="10%">Legend</th>
                                                        <th width="25%">Interpretation</th>
                                                    </tr>

                                                    <tr>
                                                        <td rowspan="3">Identify Lag in Habits</td>
                                                        <td>I am able to quikly identify when I am losing control over things and/or actions</td>
                                                        <td rowspan="3" align='center' className='tblrr'>
                                                            {result1}
                                                        </td>
                                                        <td rowspan="3" className='tdspn'>
                                                            <span>Less than 15</span>
                                                            <span>16 to 20</span>
                                                            <span>21 to 25</span>
                                                            <span>26+</span>
                                                        </td>
                                                        <td rowspan="3" className='tdspn'>
                                                            <span>Need Help</span>
                                                            <span>Can do better</span>
                                                            <span>Doing well</span>
                                                            <span>You have Low Lag in your unhelpful habits</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>I am very aware of unhelpful patterns that I am building up</td>
                                                    </tr>

                                                    <tr>
                                                        <td align='center'>
                                                            I am aware very aware of cost I will pay, when I delay changing unhelful habits
                                                        </td>
                                                    </tr>
                                                </table>


                                                <table className='mtttt'>
                                                    <tr>
                                                        <td rowspan="3" width="15%">Leave the Lag Behind</td>
                                                        <td>I am able to identify new behaviours that will replace the current ones</td>
                                                        <td width="10%" rowspan="3" align='center' className='tblrr'>
                                                            {result2}
                                                        </td>
                                                        <td width="10%" rowspan="3" className='tdspn'>
                                                            <span>Less than 15</span>
                                                            <span>16 to 20</span>
                                                            <span>21 to 25</span>
                                                            <span>26+</span>
                                                        </td>
                                                        <td width="25%" rowspan="3" className='tdspn'>
                                                            <span>Need Help</span>
                                                            <span>Can do better</span>
                                                            <span>Doing well</span>
                                                            <span>You have Low Lag in your unhelpful habits</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>I try to see if, there are skills to learnt to develop new behaviour patterns</td>
                                                    </tr>

                                                    <tr>
                                                        <td align='center'>
                                                            I am able to see the impact of unhelpful habits on results and relationships
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table className='mtttt'>
                                                    <tr>
                                                        <td width="15%" rowspan="3">Make New Routines Easy</td>
                                                        <td>I break my new routines to make them easy</td>
                                                        <td width="10%" rowspan="3" align='center' className='tblrr'>
                                                            {result3}
                                                        </td>
                                                        <td width="10%" rowspan="3" className='tdspn'>
                                                            <span>Less than 15</span>
                                                            <span>16 to 20</span>
                                                            <span>21 to 25</span>
                                                            <span>26+</span>
                                                        </td>
                                                        <td width="25%" rowspan="3" className='tdspn'>
                                                            <span>Need Help</span>
                                                            <span>Can do better</span>
                                                            <span>Doing well</span>
                                                            <span>You have Low Lag in your unhelpful habits</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>I cue my new routines to remind me in readily and at right time & places</td>
                                                    </tr>

                                                    <tr>
                                                        <td align='center'>
                                                            I use some method or process  or tool to support my new behaviour
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table className='mtttt'>
                                                    <tr>
                                                        <td width="15%" rowspan="3">Make it Desirable</td>
                                                        <td>I reward my new behaviours </td>
                                                        <td width="10%" rowspan="3" align='center' className='tblrr'>
                                                            {result4}
                                                        </td>
                                                        <td width="10%" rowspan="3" className='tdspn'>
                                                            <span>Less than 15</span>
                                                            <span>16 to 20</span>
                                                            <span>21 to 25</span>
                                                            <span>26+</span>
                                                        </td>
                                                        <td width="25%" rowspan="3" className='tdspn'>
                                                            <span>Need Help</span>
                                                            <span>Can do better</span>
                                                            <span>Doing well</span>
                                                            <span>You have Low Lag in your unhelpful habits</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>I link my new behaviours in what I deeply value</td>
                                                    </tr>

                                                    <tr>
                                                        <td align='center'>
                                                            I make wrong behaviours difficult for myself
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table className='mtttt mtt-50'>
                                                    <tr>
                                                        <td width="15%" rowspan="3">Make New Habit, Habitual</td>
                                                        <td>I track my new behaviours or routines</td>
                                                        <td width="10%" rowspan="3" align='center' className='tblrr'>
                                                            {result5}
                                                        </td>
                                                        <td width="10%" rowspan="3" className='tdspn'>
                                                            <span>Less than 15</span>
                                                            <span>16 to 20</span>
                                                            <span>21 to 25</span>
                                                            <span>26+</span>
                                                        </td>
                                                        <td width="25%" rowspan="3" className='tdspn'>
                                                            <span>Need Help</span>
                                                            <span>Can do better</span>
                                                            <span>Doing well</span>
                                                            <span>You have Low Lag in your unhelpful habits</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>I try to adapt, when things are working the way I need them to</td>
                                                    </tr>

                                                    <tr>
                                                        <td align='center'>
                                                            I have a plan to create new habits
                                                        </td>
                                                    </tr>
                                                </table>

<br></br>
                                                <div class="assessment-result-block">
                                                    <h3>Overall Score = <span className='rco'>{overallresult}</span></h3>
                                                    <div class="result-bar-wrapper">

                                                        {
                                                            (() => {
                                                                if (overallbar <= 30)
                                                                    return <div class="result-bar bgred" style={{ width: overallresult }}></div>
                                                                if (overallbar <= 55)
                                                                    return <div class="result-bar yellobg" style={{ width: overallresult }}></div>

                                                                if (overallbar <= 80)
                                                                    return <div class="result-bar orangebg" style={{ width: overallresult }}></div>
                                                                else (overallbar <= 100)
                                                                return <div class="result-bar greenbg" style={{ width: overallresult }}></div>
                                                            })()
                                                        }


                                                    </div>
                                                    <div class="result-bar-labels">
                                                        <div className='row'>
                                                            <div className='col'>Need Help</div>
                                                            <div className='col'>Can do better</div>
                                                            <div className='col'>Doing well</div>
                                                            <div className='col'>You have Low Lag</div>
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
                </div>
            </section>


            {/* <section className='assesmentpart2 aalpading0'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 text-center'>
                            <button class="submit btnnewc"> Download Result </button>
                        </div>
                        <div className='col-md-12'>


                        {
                                result.slice(0, 1).map((results) => {

                                    var px = '%'
                                    var resultc = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) + parseInt(results.q10)





                                    return (

                                        <div className='demodonload dresult' id='demo'>

                                            <div class="assessment-result-block ptt-90">
                                                <h3 className='ptop text-center'>Hi {results.name}</h3>
                                            </div>
                                            <div className='cochingformat pbb-70'>
                                                <div className='dlw'>
                                                    <h4 className='yresultc'><span>Y</span>OUR <span>R</span>ESULT <span>I</span>S: <span className='thmecc'>{resultc}/100</span></h4>
                                                </div>
                                            </div>

                                        </div>
                                    )



                                })


                            }

                        </div>
                    </div>
                </div>
            </section> */}


        </>
    )
}



