import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Careercoachingsnapshot;

    const res = await fetch(`https://clblogs.vercel.app/api/career-coaching-snapshot/${caturl}`)
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
                                    var trust1 = parseInt(results.trust1) + parseInt(results.trust2)
                                    var trust1r = (trust1/2).toFixed(1)
                                    var trust1reresultbar = 7.14 * trust1 + px
                                    var trust1reresult = 7.14 * trust1

                                    var trust2 = parseInt(results.trust3) + parseInt(results.trust4) + parseInt(results.trust5)
                                    var trust2r = (trust2/3).toFixed(1)
                                    var trust2reresultbar = 4.76 * trust2 + px
                                    var trust2reresult = 4.76 * trust2

                                    var ec1 = parseInt(results.ec1) + parseInt(results.ec2) + parseInt(results.ec3)
                                    var ec1r = (ec1/3).toFixed(1)
                                    var ec1reresultbar = 4.76 * ec1 + px
                                    var ec1reresult = 4.76 * ec1

                                    var ec2 = parseInt(results.ec4) + parseInt(results.ec5) + parseInt(results.ec6)
                                    var ec2r = (ec2/3).toFixed(1)
                                    var ec2reresultbar = 4.76 * ec2 + px
                                    var ec2reresult = 4.76 * ec2

                                    var ec3 = parseInt(results.ec7) + parseInt(results.ec8) + parseInt(results.ec9)
                                    var ec3r = (ec3/3).toFixed(1)
                                    var ec3reresultbar = 4.76 * ec3 + px
                                    var ec3reresult = 4.76 * ec3

                                    var ec4 = parseInt(results.ec10) + parseInt(results.ec11) + parseInt(results.ec12)
                                    var ec4r = (ec4/3).toFixed(1)
                                    var ec4reresultbar = 4.76 * ec4 + px
                                    var ec4reresult = 4.76 * ec4

                                    var ec5 = parseInt(results.ec13) + parseInt(results.ec14)
                                    var ec5r = (ec5/2).toFixed(1)
                                    var ec5reresultbar = 7.14 * ec5 + px
                                    var ec5reresult = 7.14 * ec5

                                    var pf1 = parseInt(results.pf1) + parseInt(results.pf2)
                                    var pf1r = (pf1/2).toFixed(1)
                                    var pf1reresultbar = 7.14 * pf1 + px
                                    var pf1reresult = 7.14 * pf1

                                    var pf2 = parseInt(results.pf3) + parseInt(results.pf4)
                                    var pf2r = (pf2/2).toFixed(1)
                                    var pf2reresultbar = 7.14 * pf2 + px
                                    var pf2reresult = 7.14 * pf2

                                    var pf3 = parseInt(results.pf5) + parseInt(results.pf6)
                                    var pf3r = (pf3/2).toFixed(1)
                                    var pf3reresultbar = 7.14 * pf3 + px
                                    var pf3reresult = 7.14 * pf3

                                    var cr1 = parseInt(results.cr1).toFixed(1)
                                    var cr1reresultbar = 14.28 * cr1 + px
                                    var cr1reresult = 14.28 * cr1

                                    var cr2 = parseInt(results.cr2).toFixed(1)
                                    var cr2reresultbar = 14.28 * cr2 + px
                                    var cr2reresult = 14.28 * cr2

                                    var cr3 = parseInt(results.cr3).toFixed(1)
                                    var cr3reresultbar = 14.28 * cr3 + px
                                    var cr3reresult = 14.28 * cr3

                                    var cr4 = parseInt(results.cr4).toFixed(1)
                                    var cr4reresultbar = 14.28 * cr4 + px
                                    var cr4reresult = 14.28 * cr4

                                    var cr5 = parseInt(results.cr5).toFixed(1)
                                    var cr5reresultbar = 14.28 * cr5 + px
                                    var cr5reresult = 14.28 * cr5






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
                                                        <th>Sub-Competency</th>
                                                        <th>Self</th>
                                                        <th>Result</th>
                                                    </tr>
                                                    <tr>
                                                        <td className='firsttd'>TRUST</td>
                                                        <td>
                                                            <span>Establishing trust and respect</span>
                                                            <span>Acting with integrity</span>
                                                        </td>
                                                        <td>
                                                            <span>{trust1r}</span>
                                                            <span>{trust2r}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (trust1r <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: trust1reresultbar }}></div>
                                                                            if (trust1r <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: trust1reresultbar }}></div>
                                                                            else (trust1r <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: trust1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                {
                                                                        (() => {
                                                                            if (trust2r <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: trust2reresultbar }}></div>
                                                                            if (trust2r <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: trust2reresultbar }}></div>
                                                                            else (trust2r <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: trust2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>EFFECTIVE COMMUNICATION</td>
                                                        <td>
                                                            <span>Keeping conversation focused on a goal</span>
                                                            <span>Encouraging alternative ways to view and define problems</span>
                                                            <span>Valuing the individual’s perspective</span>
                                                            <span>Listening and being fully present</span>
                                                            <span>Asking good questions</span>
                                                        </td>
                                                        <td>
                                                            <span>{ec1r}</span>
                                                            <span>{ec2r}</span>
                                                            <span>{ec3r}</span>
                                                            <span>{ec4r}</span>
                                                            <span>{ec5r}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (ec1r <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: ec1reresultbar }}></div>
                                                                            if (ec1r <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: ec1reresultbar }}></div>
                                                                            else (ec1r <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: ec1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (ec2r <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: ec2reresultbar }}></div>
                                                                            if (ec2r <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: ec2reresultbar }}></div>

                                                                          
                                                                            else (ec2r <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: ec2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (ec3r <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: ec3reresultbar }}></div>
                                                                            if (ec3r <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: ec3reresultbar }}></div>
                                                                            else (ec3r <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: ec3reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (ec4r <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: ec4reresultbar }}></div>
                                                                            if (ec4r <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: ec4reresultbar }}></div>
                                                                            else (ec4r <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: ec4reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (ec5r <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: ec5reresultbar }}></div>
                                                                            if (ec5r <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: ec5reresultbar }}></div>
                                                                            else (ec5r <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: ec5reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>PERFORMANCE FOCUS</td>
                                                        <td>
                                                            <span>Focusing on action</span>
                                                            <span>Aligning with the business</span>
                                                            <span>Enhancing performance</span>
                                                        </td>
                                                        <td>
                                                            <span>{pf1r}</span>
                                                            <span>{pf2r}</span>
                                                            <span>{pf3r}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pf1r <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: pf1reresultbar }}></div>
                                                                            if (pf1r <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: pf1reresultbar }}></div>                                                                            
                                                                            else (pf1r <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: pf1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pf2r <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: pf2reresultbar }}></div>
                                                                            if (pf2r <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: pf2reresultbar }}></div>                                                                            
                                                                            else (pf2r <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: pf2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pf3r <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: pf3reresultbar }}></div>
                                                                            if (pf3r <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: pf3reresultbar }}></div>
                                                                            else (pf3r <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: pf3reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>COACHING ROUTINE</td>
                                                        <td>
                                                            <span>Following up on progress</span>
                                                            <span>Providing ongoing support</span>
                                                            <span>Reinforcing accountability</span>
                                                            <span>Structuring time for conversation</span>
                                                            <span>Promoting self-discovery</span>
                                                        </td>
                                                        <td>
                                                            <span>{cr1}</span>
                                                            <span>{cr2}</span>
                                                            <span>{cr3}</span>
                                                            <span>{cr4}</span>
                                                            <span>{cr5}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr1 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: cr1reresultbar }}></div>
                                                                            if (cr1 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: cr1reresultbar }}></div>
                                                                            
                                                                            else (cr1 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: cr1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr2 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: cr2reresultbar }}></div>
                                                                            if (cr2 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: cr2reresultbar }}></div>
                                                                           
                                                                            else (cr2 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: cr2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr3 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: cr3reresultbar }}></div>
                                                                            if (cr3 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: cr3reresultbar }}></div>
                                                                            
                                                                            else (cr3 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: cr3reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr4 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: cr4reresultbar }}></div>
                                                                            if (cr4 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: cr4reresultbar }}></div>
                                                                            
                                                                            else (cr4 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: cr4reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr5 <= 4.5)
                                                                                return <div class="result-bar bgred" style={{ width: cr5reresultbar }}>.</div>
                                                                            if (cr5 <= 6.0)
                                                                                return <div class="result-bar yellobg" style={{ width: cr5reresultbar }}>.</div>
                                                                            
                                                                            else (cr5 <= 6.1)
                                                                            return <div class="result-bar greenbg" style={{ width: cr5reresultbar }}>.</div>
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



