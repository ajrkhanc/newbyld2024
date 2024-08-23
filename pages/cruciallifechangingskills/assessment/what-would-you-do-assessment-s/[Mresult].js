import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Mresult;

    const res = await fetch(`https://clblogs.vercel.app/api/whatwouldyoudoassessment/${caturl}`)
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

    return (
        <>

            <Head>
                <title>What Would You Do Assessment Result | Crucial Learning</title>
                <meta name="description" content="The What Would You Do assessment reveals your natural tendencies when confronted with a gap in expectation or performance. See where you stand by taking this assessment."/>
            </Head>

             

            <section className='assesmentpart2 aalpading0'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 text-center'>
                        <button class="submit btnnewc" onClick={downloadAsPDF}> Download Result </button>
                        </div>
                        <div className='col-md-12'>
                            {
                                result.slice(0, 1).map((results) => {

                                    var px = '%'
                                    var q1a1 = results.q1a1
                                    if (q1a1 == 'undefined') {
                                        q1a1 = 0;
                                    }

                                    var q2a1 = results.q2a1
                                    if (q2a1 == 'undefined') {
                                        q2a1 = 0;
                                    }

                                    var q3a1 = results.q3a1
                                    if (q3a1 == 'undefined') {
                                        q3a1 = 0;
                                    }

                                    var q4a1 = results.q4a1
                                    if (q4a1 == 'undefined') {
                                        q4a1 = 0;
                                    }

                                    var q5a1 = results.q5a1
                                    if (q5a1 == 'undefined') {
                                        q5a1 = 0;
                                    }

                                    var q6a1 = results.q6a1
                                    if (q6a1 == 'undefined') {
                                        q6a1 = 0;
                                    }

                                    var q7a1 = results.q7a1
                                    if (q7a1 == 'undefined') {
                                        q7a1 = 0;
                                    }

                                    var q8a1 = results.q8a1
                                    if (q8a1 == 'undefined') {
                                        q8a1 = 0;
                                    }

                                    var q9a1 = results.q9a1
                                    if (q9a1 == 'undefined') {
                                        q9a1 = 0;
                                    }

                                    var q10a1 = results.q10a1
                                    if (q10a1 == 'undefined') {
                                        q10a1 = 0;
                                    }

                                    var motivationScore = parseInt(q1a1) + parseInt(q2a1) + parseInt(q3a1) + parseInt(q4a1) +
                                        parseInt(q5a1) + parseInt(q6a1) + parseInt(q7a1) + parseInt(q8a1) + parseInt(q9a1) + parseInt(q10a1)

                                    var motivationScorenew = 10 * motivationScore + px

                                    var motivationbar = 10 * motivationScore


                                    var q1b1 = results.q1b1
                                    if (q1b1 == 'undefined') {
                                        q1b1 = 0;
                                    }

                                    var q2b1 = results.q2b1
                                    if (q2b1 == 'undefined') {
                                        q2b1 = 0;
                                    }

                                    var q3b1 = results.q3b1
                                    if (q3b1 == 'undefined') {
                                        q3b1 = 0;
                                    }

                                    var q4b1 = results.q4b1
                                    if (q4b1 == 'undefined') {
                                        q4b1 = 0;
                                    }

                                    var q5b1 = results.q5b1
                                    if (q5b1 == 'undefined') {
                                        q5b1 = 0;
                                    }

                                    var q6b1 = results.q6b1
                                    if (q6b1 == 'undefined') {
                                        q6b1 = 0;
                                    }

                                    var q7b1 = results.q7b1
                                    if (q7b1 == 'undefined') {
                                        q7b1 = 0;
                                    }

                                    var q8b1 = results.q8b1
                                    if (q8b1 == 'undefined') {
                                        q8b1 = 0;
                                    }

                                    var q9b1 = results.q9b1
                                    if (q9b1 == 'undefined') {
                                        q9b1 = 0;
                                    }

                                    var q10b1 = results.q10b1
                                    if (q10b1 == 'undefined') {
                                        q10b1 = 0;
                                    }

                                    var abilityScore = parseInt(q1b1) + parseInt(q2b1) + parseInt(q3b1) + parseInt(q4b1) +
                                        parseInt(q5b1) + parseInt(q6b1) + parseInt(q7b1) + parseInt(q8b1) + parseInt(q9b1) + parseInt(q10b1)
                                    var abilitfornew = 10 * abilityScore + px
                                    var Takeawayresult = 10 * abilityScore + px
                                    var abilitybar = 10 * abilityScore

                                    return (

                                        <div className='demodonload' id='demo'>
                                            <div class="assessment-result-block">
                                                <h3 className='ptop text-center'>Hi {results.name}</h3>
                                            </div>
                                            <div class="assessment-result-block">
                                                 
                                                <div className='row'>
                                                    <div className='col-sm-6 aalpading0'>
                                                    <div class="text-center colof"><span>M</span>OTIVATION</div>
                                                        <div className='bresult'>
                                                            <div class="result-bar-wrapper boright">
                                                                {
                                                                    (() => {
                                                                        if (motivationbar <= 50)
                                                                            return <div class="result-bar doingwellcolor" style={{ width: motivationScorenew }}></div>
                                                                        else
                                                                            return <div class="result-bar skycolor" style={{ width: motivationScorenew }}></div>
                                                                    })()
                                                                }

                                                            </div>

                                                        </div>
                                                        <div class="assessment-result-block ppdr">
                                                            <h3 className='newh3'>Your motivation score: {motivationScore}</h3>
                                                            <p className='ptextjustify'>
                                                                This score indicates your tendency to focus on motivation when trying to hold someone accountable. While motivation contributes to behavior, if you overemphasize it when addressing performance problems, you risk discouraging and demeaning the other person rather than motivating them. If you can address ability first and make sure you focus on it as part of your overall approach, you will get better results when holding others accountable and helping them improve.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-6 aalpading0'>
                                                    <div class="text-center colof"><span>A</span>BILITY</div>
                                                        <div className='bresult'>
                                                            <div class="result-bar-wrapper boleft">
                                                                {
                                                                    (() => {
                                                                        if (abilitybar <= 50)
                                                                            return <div class="result-bar doingwellcolor" style={{ width: abilitfornew }}></div>
                                                                        else
                                                                            return <div class="result-bar skycolor" style={{ width: abilitfornew }}></div>
                                                                    })()
                                                                }
                                                            </div>
                                                        </div>

                                                        <div class="assessment-result-block ppdl">
                                                            <h3 className='newh3'>Your ability score: {abilityScore}</h3>
                                                            <p className='ptextjustify'>This score indicates your tendency to focus on ability when trying to hold someone accountable. If your score is high here and low on the motivation scale, it may mean you lack the confidence to be direct with someone when you need to be. Addressing factors that influence a person’s ability to do what’s expected is important when resolving performance problems. But you also need skills to directly address problems of motivation when they’re a factor.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-12 bodttt aalpading0'>
                                                        <div class="assessment-result-block">
                                                            <h3 className='newh3 colof2'><span>T</span>AKEAWAY</h3>
                                                            <p className='ptextjustify'>
                                                                Effective leaders and managers address both motivation and ability to help others perform to expectations. You can improve your own ability by learning about the research, principles, and skills for better performance management. Download our free guide, <em>Mind the Gap: The Essential Guide to Workplace Accountability</em>.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
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



