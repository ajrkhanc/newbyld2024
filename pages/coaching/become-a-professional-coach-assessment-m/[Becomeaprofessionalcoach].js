import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Becomeaprofessionalcoach;

    const res = await fetch(`https://byldblogs.vercel.app/api/become-a-professional-coach/${caturl}`)
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
                <title>Become a Professional Coach Result</title>
                <meta name="description" content="Coaching | Become a Professional Coach" />
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
                                        <h4 className="countertoph2 text-center resh">{results.name} - Self-Assessment Report</h4>
                                    )
                                })


                            }


                        </div>
                        <div className='col-sm-6 boxshd'>

                            <div className="msicon mtt-0">
                                <div className="services-text">
                                    <h3 className="title">Coach</h3>
                                    <p className='ptt-5 mbb-10'>
                                    The word coaching originates from the European context, where valuable people were moved from one place to another in a buggy that looked very similar. In the modern context, it is a skill to move people from where they find themselves to where they aspire to be. ICF defines coaching as partnering with clients in a thought- provoking and creative process that inspires them to maximize their personal and professional potential. Coaches honor the client as the expert in their life and work and believe every client is creative, resourceful, and whole.
                                    </p>
                                </div>
                            </div>
                            <div className="msicon">
                                <div className="services-text">
                                    <h5 className='pinkh'>Standing on this foundation, a coach's responsibility is to:</h5>
                                    <div className='rs-estimate'>
                                        <ul className='estimate-info mtt-5'>
                                            <li>Discover, clarify, and align with what the client wants to achieve</li>
                                            <li>Encourage clients’ self-discovery</li>
                                            <li>Elicit client-generated solutions and strategies</li>
                                            <li>Hold the client responsible and accountable</li>
                                            <li>Coaching process helps clients dramatically improve their outlook on work and life, while improving their leadership skills and unlocking their potential.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 boxshd letf5border text-center'>
                            <img src='/assets/img/df.png' alt="development" />
                        </div>
                    </div>
                </div>

                <div className='container ptt-30 pbb-40'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='newtblc'>
                                <table>
                                    <tr className='tablefbh'>
                                        <th width="15%">Score</th>
                                        <th>Level of Readiness</th>
                                        <th width="15%">Score (Out of 100)</th>
                                    </tr>


                                    <tr>
                                        <td>Less than 60</td>
                                        <td>Need to work on to build your skills around these areas if you aspire to be a coach.</td>
                                        <td rowspan="3" align='center'>
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
                                        <td>Between 60-80</td>
                                        <td>Good awareness, consider getting Certified, if not done already, and you would be able to start your coaching journey</td>
                                    </tr>
                                    <tr>
                                        <td>More than 80</td>
                                        <td>You are doing well, if you are certified then you are already on the way to do quality job, however if ICF accreditation is pending recommend doing it to move faster ahead</td>
                                    </tr>

                                </table>
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



