import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Bespokem;

    const res = await fetch(`https://byldblogs.vercel.app/api/bespoke-assessment/${caturl}`)
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
                        <a class="submit" href='/bespoke/assessment-marketing'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>


            <Head>
                <title>Result | Bespoke</title>
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
                                    var character = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5);
                                    var charactervalue = (character / 50 * 100).toFixed(2);
                                    var characterresult = charactervalue + px;

                                    var substance = parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) + parseInt(results.q10);
                                    var substancevalue = (substance / 50 * 100).toFixed(2);
                                    var substanceresult = substancevalue + px;

                                    var stylec = parseInt(results.q11) + parseInt(results.q12) + parseInt(results.q13) + parseInt(results.q14) + parseInt(results.q15);
                                    var stylevalue = (stylec / 50 * 100).toFixed(2);
                                    var styleresult = stylevalue + px;

                                    var totalresult = character + substance + stylec;
                                    var totalresulvalu = (totalresult / 150 * 100).toFixed(2);
                                    var totalresultbar = totalresulvalu + px;


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

                                            <h3 className='assh3'>Overall Score = <span class="rco">{totalresultbar}</span></h3>
                                            <div className='result-bar-wrapper result-bar-wrapperbig'>
                                                {
                                                    (() => {
                                                        if (totalresulvalu <= 50)
                                                            return <div class="result-bar bgred" style={{ width: totalresultbar }}></div>
                                                        if (totalresulvalu <= 68)
                                                            return <div class="result-bar yellobg" style={{ width: totalresultbar }}></div>
                                                        if (totalresulvalu <= 82)
                                                            return <div class="result-bar orangebg" style={{ width: totalresultbar }}></div>
                                                        else (totalresulvalu <= 100)
                                                        return <div class="result-bar greenbg" style={{ width: totalresultbar }}></div>
                                                    })()
                                                }
                                            </div>
                                            <br></br>
                                            <br></br>

                                            <div className='resultable'>
                                                <table>
                                                    <tr className='tablefbh'>
                                                        <th>S.N.</th>
                                                        <th>Competency</th>
                                                        <th>Self</th>
                                                        <th>Result</th>
                                                    </tr>
                                                    <tr>
                                                        <td className='firsttd'>01.</td>
                                                        <td><span>Character</span></td>
                                                        <td><span>{characterresult}</span></td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (charactervalue <= 50)
                                                                                return <div class="result-bar bgred" style={{ width: characterresult }}></div>
                                                                            if (charactervalue <= 68)
                                                                                return <div class="result-bar yellobg" style={{ width: characterresult }}></div>
                                                                            if (charactervalue <= 82)
                                                                                return <div class="result-bar orangebg" style={{ width: characterresult }}></div>
                                                                            else (charactervalue <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: characterresult }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>02.</td>
                                                        <td><span>Substance</span></td>
                                                        <td><span>{substanceresult}</span></td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (substancevalue <= 50)
                                                                                return <div class="result-bar bgred" style={{ width: substanceresult }}></div>
                                                                            if (substancevalue <= 68)
                                                                                return <div class="result-bar yellobg" style={{ width: substanceresult }}></div>
                                                                            if (substancevalue <= 82)
                                                                                return <div class="result-bar orangebg" style={{ width: substanceresult }}></div>
                                                                            else (substancevalue <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: substanceresult }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>02.</td>
                                                        <td><span>Style</span></td>
                                                        <td><span>{styleresult}</span></td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (stylevalue <= 50)
                                                                                return <div class="result-bar bgred" style={{ width: styleresult }}></div>
                                                                            if (stylevalue <= 68)
                                                                                return <div class="result-bar yellobg" style={{ width: styleresult }}></div>
                                                                            if (stylevalue <= 82)
                                                                                return <div class="result-bar orangebg" style={{ width: styleresult }}></div>
                                                                            else (stylevalue <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: styleresult }}></div>
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
                                                        <th>Score Range</th>
                                                        <th>Interpretation of Score</th>
                                                    </tr>
                                                    <tr>
                                                        <td>50 or Less then 50</td>
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



