import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.InfluecerResult;

    const res = await fetch(`https://clblogs.vercel.app/api/influencer-assessment/${caturl}`)
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
                        <a class="submit" href='/cruciallifechangingskills/assessment/influencer-assessment'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>

            <Head>
                <title>Influencer Assessment Result | Crucial Learning</title>
                <meta name="description" content="The Influencer Assessment is used to determine your influence skills. The questions examine methods you use to lead and help others change. Complete the quiz to see your level of influence." />
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
                                    var FocusandMeasure = parseInt(results.q1a) + parseInt(results.q1b) + parseInt(results.q1c) + parseInt(results.q1d)
                                    var FocusandMeasureresult = 5 * FocusandMeasure + px
                                    var FocusandMeasureresult1 = FocusandMeasure

                                    var FindVitalBehaviors = parseInt(results.q2a) + parseInt(results.q2b) + parseInt(results.q2c) + parseInt(results.q2d)
                                    var FindVitalBehaviorsresult = 5 * FindVitalBehaviors + px
                                    var FindVitalBehaviorsresult1 = FindVitalBehaviors

                                    var HelpThemLoveWhatTheyHate = parseInt(results.q3a) + parseInt(results.q3b) + parseInt(results.q3c) + parseInt(results.q3d)
                                    var HelpThemLoveWhatTheyHateresult = 5 * HelpThemLoveWhatTheyHate + px
                                    var HelpThemLoveWhatTheyHateresult1 = HelpThemLoveWhatTheyHate

                                    var HelpThemDoWhatTheyCan = parseInt(results.q4a) + parseInt(results.q4b) + parseInt(results.q4c) + parseInt(results.q4d)
                                    var HelpThemDoWhatTheyCanresult = 5 * HelpThemDoWhatTheyCan + px
                                    var HelpThemDoWhatTheyCanresult1 = HelpThemDoWhatTheyCan

                                    var ProvideEncouragement = parseInt(results.q5a) + parseInt(results.q5b) + parseInt(results.q5c) + parseInt(results.q5d)
                                    var ProvideEncouragementresult = 5 * ProvideEncouragement + px
                                    var ProvideEncouragementresult1 = ProvideEncouragement

                                    var ProvideAssistance = parseInt(results.q6a) + parseInt(results.q6b) + parseInt(results.q6c) + parseInt(results.q6d)
                                    var ProvideAssistanceresult = 5 * ProvideAssistance + px
                                    var ProvideAssistanceresult1 = ProvideAssistance

                                    var ChangeTheirEconomy = parseInt(results.q7a) + parseInt(results.q7b) + parseInt(results.q7c) + parseInt(results.q7d)
                                    var ChangeTheirEconomyresult = 5 * ChangeTheirEconomy + px
                                    var ChangeTheirEconomyresult1 = ChangeTheirEconomy

                                    var ChangeTheirSpace = parseInt(results.q8a) + parseInt(results.q8b) + parseInt(results.q8c) + parseInt(results.q8d)
                                    var ChangeTheirSpaceresult = 5 * ChangeTheirSpace + px
                                    var ChangeTheirSpaceresult1 = ChangeTheirSpace

                                    return (

                                        <div className='demodonload' id='demo'>
                                            <div class="assessment-result-block">
                                                <h3 className='ptop text-center'>Hi {results.name}</h3>
                                            </div>

                                            <div class="assessment-result-block">
                                                <h3 className='hcll'>UNDERSTANDING YOUR RESULTS</h3>
                                                <p>
                                                    Your results are broken into eight sections. For each section your score determines your level of influence in that area. The Influencer levels are:
                                                </p>

                                                <ul>
                                                    <li>Master Influencer: Scores between 19-20.</li>
                                                    <li>Effective Influencer: Scores between 17-18.</li>
                                                    <li>Apprentice Influencer: Scores between 15-16.</li>
                                                    <li>Novice Influencer: Scores below 15.</li>
                                                </ul>
                                                <p>
                                                    Notice which areas you struggle with. Perhaps you're good at providing encouragement, for example, and not so good at helping others do what they can't. Whatever you scored, awareness is the first step toward improvement.
                                                </p>

                                                <h3 className='hcll paddtop16'>YOUR RESULT</h3>
                                            </div>

                                            <div className='row newclp'>
                                                <div className='col-sm-6'>
                                                    <div class="assessment-result-block">
                                                        <h3><i>Focus and Measure:</i> <span>{FocusandMeasureresult1}</span></h3>
                                                        <div class="result-bar-wrapper">
                                                            <div class="result-bar" style={{ width: FocusandMeasureresult }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-sm-6'>
                                                    <div class="assessment-result-block">
                                                        <h3><i>Find Vital Behaviors:</i> <span>{FindVitalBehaviorsresult1}</span></h3>
                                                        <div class="result-bar-wrapper">
                                                            <div class="result-bar" style={{ width: FindVitalBehaviorsresult }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-sm-6'>
                                                    <div class="assessment-result-block">
                                                        <h3><i>Help Them Love What They Hate:</i> <span>{HelpThemLoveWhatTheyHateresult1}</span></h3>
                                                        <div class="result-bar-wrapper">
                                                            <div class="result-bar" style={{ width: HelpThemLoveWhatTheyHateresult }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-sm-6'>
                                                    <div class="assessment-result-block">
                                                        <h3><i>Help Them Do What They Can’t:</i> <span>{HelpThemDoWhatTheyCanresult1}</span></h3>
                                                        <div class="result-bar-wrapper">
                                                            <div class="result-bar" style={{ width: HelpThemDoWhatTheyCanresult }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-sm-6'>
                                                    <div class="assessment-result-block">
                                                        <h3><i>Provide Encouragement:</i> <span>{ProvideEncouragementresult1}</span></h3>
                                                        <div class="result-bar-wrapper">
                                                            <div class="result-bar" style={{ width: ProvideEncouragementresult }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-sm-6'>
                                                    <div class="assessment-result-block">
                                                        <h3><i>Provide Assistance:</i> <span>{ProvideAssistanceresult1}</span></h3>
                                                        <div class="result-bar-wrapper">
                                                            <div class="result-bar" style={{ width: ProvideAssistanceresult }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-sm-6'>
                                                    <div class="assessment-result-block">
                                                        <h3><i>Change Their Economy:</i> <span>{ChangeTheirEconomyresult1}</span></h3>
                                                        <div class="result-bar-wrapper">
                                                            <div class="result-bar" style={{ width: ChangeTheirEconomyresult }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-sm-6'>
                                                    <div class="assessment-result-block">
                                                        <h3><i>Change Their Space:</i> <span>{ChangeTheirSpaceresult1}</span></h3>
                                                        <div class="result-bar-wrapper">
                                                            <div class="result-bar" style={{ width: ChangeTheirSpaceresult }}></div>
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






            {/* <section className='assesmentpart2'>
            <div className='container'>
                <div className='row align-items-center'>
                <div className='col-sm-12 text-center'>
                        <button class="submit btnnewc" onClick={downloadAsPDF}> Download Result </button>
                        </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>                       
                    {
            result.slice(0, 1).map((results) => {
         
                var FocusandMeasure = parseInt(results.q1a) + parseInt(results.q1b) + parseInt(results.q1c) + parseInt(results.q1d)
                
                var FindVitalBehaviors = parseInt(results.q2a) + parseInt(results.q2b) + parseInt(results.q2c) + parseInt(results.q2d)

                var HelpThemLoveWhatTheyHate = parseInt(results.q3a) + parseInt(results.q3b) + parseInt(results.q3c) + parseInt(results.q3d)

                var HelpThemDoWhatTheyCan = parseInt(results.q4a) + parseInt(results.q4b) + parseInt(results.q4c) + parseInt(results.q4d)

                var ProvideEncouragement = parseInt(results.q5a) + parseInt(results.q5b) + parseInt(results.q5c) + parseInt(results.q5d)

                var ProvideAssistance = parseInt(results.q6a) + parseInt(results.q6b) + parseInt(results.q6c) + parseInt(results.q6d)

                var ChangeTheirEconomy = parseInt(results.q7a) + parseInt(results.q7b) + parseInt(results.q7c) + parseInt(results.q7d)

                var ChangeTheirSpace = parseInt(results.q8a) + parseInt(results.q8b) + parseInt(results.q8c) + parseInt(results.q8d)

            return (
                    <div className='' id='demo'>  

                    <div class="assessment-result-block">
                    <h3 className='ptop'>Hi {results.name}</h3>
                            <h3>Focus and Measure</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{FocusandMeasure}</td>
                                        <td>Novice Influencer</td>
                                        <td>1-34</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Find Vital Behaviors</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{FindVitalBehaviors}</td>
                                        <td>Apprentice Influencer</td>
                                        <td>35-64</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Help Them Love What They Hate</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{HelpThemLoveWhatTheyHate}</td>
                                        <td>Master Influencer</td>
                                        <td>77-112</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Help Them Do What They Can’t</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td >{HelpThemDoWhatTheyCan}</td>
                                        <td>Apprentice Influencer</td>
                                        <td>113-144</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Provide Encouragement</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{ProvideEncouragement}</td>
                                        <td>Novice Influencer</td>
                                        <td>145-184</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Provide Assistance</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{ProvideAssistance}</td>
                                        <td>Novice Influencer</td>
                                        <td>185-216</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Change Their Economy</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{ChangeTheirEconomy}</td>
                                        <td>Novice Influencer</td>
                                        <td>217-246</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Change Their Space</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{ChangeTheirSpace}</td>
                                        <td>Master Influencer</td>
                                        <td>247-286</td>
                                    </tr>
                                </tbody>
                            </table>
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



