import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Careercoachingsnapshot;

    const res = await fetch(`https://byldblogs.vercel.app/api/cp-assessment/${caturl}`)
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
                        <a class="submit" href='/cp/cp-marketing'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>


            <Head>
                <title>Result | CP Marketing</title>
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
                                    var result = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) + parseInt(results.q10)

                                    var rusultbar = result + px




                                    return (

                                        <div className='demodonload dresult' id='demo'>
                                            

                                            <div class="assessment-result-block">
                                                <h3 className='ptop text-center'>Hi {results.name}</h3>
                                            </div>
                                            <div className='cochingformat'>
                                                <div className='dlw'>
                                                    <h4 className='yresultc'><span>Y</span>OUR <span>R</span>EPORT</h4> <a onClick={downloadAsPDF}><i className="fa fa-download" aria-hidden="true"></i></a>
                                                </div>
                                                <p>Your survey responses provide a snapshot, or data from a point in time, about how you perceive your coaching. This is a unique opportunity to gain insights into how you see your effectiveness as a coach.</p>
                                            </div>
                                            <h3 className='assh3'>Overall Score = <span class="rco">{result}</span></h3>
                                            <div className='result-bar-wrapper result-bar-wrapperbig'>
                                                {
                                                    (() => {
                                                        if (result <= 50)
                                                            return <div class="result-bar bgred" style={{ width: rusultbar }}></div>
                                                        if (result <= 68)
                                                            return <div class="result-bar yellobg" style={{ width: rusultbar }}></div>
                                                        if (result <= 82)
                                                            return <div class="result-bar orangebg" style={{ width: rusultbar }}></div>
                                                        else (result <= 100)
                                                        return <div class="result-bar greenbg" style={{ width: rusultbar }}></div>
                                                    })()
                                                }
                                            </div>



                                            <div className='cochingformat'>


                                                <h4 className='yresultc ccn'><span>U</span>NDERSTANDING <span>Y</span>OUR <span>R</span>ATINGS <span>S</span>UMMARY</h4>
                                                <br></br>
                                                <table>
                                                    <tr className='tablefbh'>
                                                        <th>Score Range</th>
                                                        <th>Interpretation of Score</th>
                                                    </tr>
                                                    <tr>
                                                        <td>50 or Less then 50 </td>
                                                        <td>The current situation needs immediate attention at multiple levels to reduce vulnerability of your organisation?</td>
                                                    </tr>

                                                    <tr>
                                                        <td>51 to 68</td>
                                                        <td>It is a matter of time when things will start falling apart, and it will show up in blame games, finger pointing, victim cards and helplessness</td>
                                                    </tr>

                                                    <tr>
                                                        <td>68 to 82</td>
                                                        <td>You have a stable organisation , check which areas you need to focus on to further strengthen the culture and practices</td>
                                                    </tr>
                                                    <tr>
                                                        <td>83 Plus</td>
                                                        <td>You are part of a fairly resilient company and keep building culture that will make you win in market place</td>
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



