import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'



export async function getServerSideProps(context) {
    const caturl = context.params.gtdResults;

    const res = await fetch(`https://clblogs.vercel.app/api/styleunderstressassessment/${caturl}`)
    const result = await res.json()



    return {
        props: {
            result
        },
    }
}

export default function Home({ result }) {



    function downloadAsPDF() {
        var element = document.getElementById('demo');
        html2pdf(element);
    }

    return (
        <>

            <Head>
                <title>Style Under Stress Assessment Result | fivebehaviors</title>
                <meta name="description" content="The GTD Assessment is a twenty-question quiz that helps reveal some of your tendencies with managing workflow. See what you know and what you need to improve on." />
            </Head>

            <section className='assesmentbannnerbg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <br></br>
                            <br></br>
                            {
                                result.slice(0, 1).map((results) => {
                                    return (
                                        <h3>Hi {results.name}</h3>
                                    )
                                })
                            }

                            <h2>Your Style Under Stress™ Results</h2>
                            <br></br>
                            <br></br>
                        </div>

                    </div>
                </div>
            </section>

            <section className='assesmentpart2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <div>
                                <h2>UNDERSTANDING YOUR RESULTS</h2>
                                <p>The Style Under Stress assessment measures two areas: Your style under stress, and your dialogue skills.</p>

                                <p>Your Style Under Stress™ Score indicates how likely you are to move toward silence (masking, avoiding, or withdrawing) or verbal violence (controlling, labeling, or attacking) during a Crucial Conversation. The higher your score in this section, the more likely you are to move to silence and/or violence. Notice which behaviors you resort to in crucial moments.</p>
                                <p>
                                    Your Dialogue Skills Score indicates how well you use the skills taught in Crucial Conversations. The higher your score in this section, the better you are at using the skills. You should pay special attention to any section in which you score zero.
                                </p>
                                <p>
                                    Awareness is the first step toward improvement. Action is the next step. Improve your communication and your results with the skills from Crucial Conversations.
                                </p>
                                
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='formsbarassesment'>
                                {
                                    result.slice(0, 1).map((results) => {
                                        var px = '%'
                                        var silence = parseInt(results.q1) + parseInt(results.q2) +
                                            parseInt(results.q3)

                                        var silenceoverallresult = silence * 33.34 + px
                                        var silenceoverallbar = silence

                                        var Masking = parseInt(results.q3)
                                        var Avoiding = parseInt(results.q2)
                                        var Withdrawing = parseInt(results.q1)

                                        var px = '%'
                                        var violence = parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6)

                                        var violenceoverallresult = violence * 33.34 + px
                                        var violenceoverallbar = violence


                                        var Controlling = parseInt(results.q4)
                                        var Labeling = parseInt(results.q5)
                                        var Attacking = parseInt(results.q6)


                                        var ch3 = parseInt(results.q13)
                                        var ch4 = parseInt(results.q14)
                                        var ch5 = parseInt(results.q15)
                                        var ch6 = parseInt(results.q16)
                                        var ch7 = parseInt(results.q17)
                                        var ch8 = parseInt(results.q18)


                                        return (

                                            <div class="recent-post-widget paddi20" id='demo'>
                                                <div class="component-wrapper assessment" id="gtd-results">
                                                    <div class="component-content">
                                                        <div class="assessment-right">
                                                            <div class="assessment-result-block">
                                                                <h3>How often do you move towards silence?</h3>
                                                                <div class="result-bar-wrapper">
                                                                    <div class="result-bar bgredc" style={{ width: silenceoverallresult }}></div>
                                                                    {/* {
                                                                        (() => {
                                                                            if (silenceoverallbar <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: silenceoverallresult }}></div>
                                                                            if (silenceoverallbar <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: silenceoverallresult }}></div>

                                                                            if (silenceoverallbar <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: silenceoverallresult }}></div>
                                                                            else (silenceoverallbar <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: silenceoverallresult }}></div>
                                                                        })()
                                                                    } */}


                                                                </div>
                                                                <div class="result-bar-labels">
                                                                    <div className='row'>
                                                                        <div className='col'>Rarely</div>
                                                                        <div className='col'>Sometimes</div>
                                                                        <div className='col text-right'>Often</div>

                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <br></br>
                                                                    <h4>
                                                                        Silence Score Breakdown
                                                                    </h4>
                                                                    <ul    className='ulBox'>
                                                                        <li>Masking: {Masking}</li>
                                                                        <li>Avoiding: {Avoiding}</li>
                                                                        <li>Withdrawing: {Withdrawing}</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <hr></hr>

                                                            <div class="assessment-result-block">
                                                                <h3>How often do you move towards verbal violence?</h3>
                                                                <div class="result-bar-wrapper">
                                                                    <div class="result-bar bgredc" style={{ width: violenceoverallresult }}></div>
                                                                    {/* {
                                                                        (() => {
                                                                            if (violenceoverallbar <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: violenceoverallresult }}></div>
                                                                            if (violenceoverallbar <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: violenceoverallresult }}></div>

                                                                            if (violenceoverallbar <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: violenceoverallresult }}></div>
                                                                            else (violenceoverallbar <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: violenceoverallresult }}></div>
                                                                        })()
                                                                    } */}


                                                                </div>
                                                                <div class="result-bar-labels">
                                                                    <div className='row'>
                                                                        <div className='col'>Rarely</div>
                                                                        <div className='col'>Sometimes</div>
                                                                        <div className='col text-right'>Often</div>

                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <br></br>
                                                                    <h4>
                                                                        Verbal Violence Score Breakdown
                                                                    </h4>
                                                                    <ul   className='ulBox'>
                                                                        <li>Controlling: {Controlling}</li>
                                                                        <li>Labeling: {Labeling}</li>
                                                                        <li>Attacking: {Attacking}</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <hr></hr>

                                                            <div class="assessment-result-block">
                                                                <h3>Dialogue Skills Score</h3>
                                                                <p>
                                                                    Now look at how well you use the Crucial Conversations skills. If you scored one or two, you're doing alright in this area—at least in the scenario you had in mind when answering the questions. If you scored zero, you should pay special attention to the corresponding chapter in the book—or attend a course.
                                                                </p>
                                                                <div>

                                                                    <ul  className='ulBox'>
                                                                        <li>Choose Your Topic (Chapter 3): {ch3}</li>
                                                                        <li>Start with Heart (Chapter 4): {ch4}</li>
                                                                        <li>Master My Stories (Chapter 5): {ch5}</li>
                                                                        <li>Learn To Look (Chapter 6): {ch6}</li>
                                                                        <li>Make It Safe (Chapter 7): {ch7}</li>
                                                                        <li>STATE My Path (Chapter 8): {ch8}</li>
                                                                    </ul>
                                                                </div>
                                                               
                                                            </div>




                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}



