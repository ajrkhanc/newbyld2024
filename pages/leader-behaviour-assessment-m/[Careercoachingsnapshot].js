import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Careercoachingsnapshot;

    const res = await fetch(`https://eaglesflightindiablog.vercel.app/api/leader-behaviour-assessment-marketing/${caturl}`)
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
                        <a class="submit" href='/eaglesflightindia/assessment/leader-behaviour-assessment'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>
       

            <Head>
                <title>Result | Leader Behaviour Assessment</title>
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
                                    
                                    var rm1 = parseInt(results.rm1).toFixed(1)
                                    var rm1reresultbar = 14.28 * rm1 + px
                                    var rm1reresult = 14.28 * rm1

                                    var rm2 = parseInt(results.rm2).toFixed(1)
                                    var rm2reresultbar = 14.28 * rm2 + px
                                    var rm2reresult = 14.28 * rm2

                                    var rm3 = parseInt(results.rm3).toFixed(1)
                                    var rm3reresultbar = 14.28 * rm3 + px
                                    var rm3reresult = 14.28 * rm3

                                    var pm1 = parseInt(results.pm1).toFixed(1)
                                    var pm1reresultbar = 14.28 * pm1 + px
                                    var pm1reresult = 14.28 * pm1

                                    var pm2 = parseInt(results.pm2).toFixed(1)
                                    var pm2reresultbar = 14.28 * pm2 + px
                                    var pm2reresult = 14.28 * pm2

                                    var pm3 = parseInt(results.pm3).toFixed(1)
                                    var pm3reresultbar = 14.28 * pm3 + px
                                    var pm3reresult = 14.28 * pm3

                                    var il1 = parseInt(results.il1).toFixed(1)
                                    var il1reresultbar = 14.28 * il1 + px
                                    var il1reresult = 14.28 * il1

                                    var il2 = parseInt(results.il2).toFixed(1)
                                    var il2reresultbar = 14.28 * il2 + px
                                    var il2reresult = 14.28 * il2

                                    var il3 = parseInt(results.il3).toFixed(1)
                                    var il3reresultbar = 14.28 * il3 + px
                                    var il3reresult = 14.28 * il3

                                    var cr1 = parseInt(results.cr1).toFixed(1)
                                    var cr1reresultbar = 14.28 * cr1 + px
                                    var cr1reresult = 14.28 * cr1

                                    var cr2 = parseInt(results.cr2).toFixed(1)
                                    var cr2reresultbar = 14.28 * cr2 + px
                                    var cr2reresult = 14.28 * cr2

                                    var cr3 = parseInt(results.cr3).toFixed(1)
                                    var cr3reresultbar = 14.28 * cr3 + px
                                    var cr3reresult = 14.28 * cr3

                                    var at1 = parseInt(results.at1).toFixed(1)
                                    var at1reresultbar = 14.28 * at1 + px
                                    var at1reresult = 14.28 * at1

                                    var at2 = parseInt(results.at2).toFixed(1)
                                    var at2reresultbar = 14.28 * at2 + px
                                    var at2reresult = 14.28 * at2

                                    var pm21 = parseInt(results.pm21).toFixed(1)
                                    var pm21reresultbar = 14.28 * pm21 + px
                                    var pm21reresult = 14.28 * pm21

                                    var pm22 = parseInt(results.pm22).toFixed(1)
                                    var pm22reresultbar = 14.28 * pm22 + px
                                    var pm22reresult = 14.28 * pm22

                                    var pm23 = parseInt(results.pm23).toFixed(1)
                                    var pm23reresultbar = 14.28 * pm23 + px
                                    var pm23reresult = 14.28 * pm23

                                   

                                    






                                    return (

                                        <div className='demodonload dresult' id='demo'>
                                           <div className="pageheader mb15">              
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
                                                            <div className="col mw6 header-logo ptt-5 pbb-5 bgs">
                                                                <div className="rs-menu-area">
                                                                <div className="logo-area text-right">
                                                                    <a href="#" className=''>
                                                                        <img className='slogo' src="/efassets/img/lmg-logo.jpg" alt="logo"/>  
                                                                    </a>
                                                                </div> 
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>            
                                            </div>
                                            
                                            <div class="assessment-result-block">
                                                <h3 className='ptop text-center'>Hi {results.name}</h3>
                                            </div>
                                            <div className='cochingformat cochingformatt10'>                                               
                                                <div className='dlw'>
                                                <h4 className='yresultc'><span>Y</span>OUR <span>R</span>EPORT</h4> <a onClick={downloadAsPDF}><i className="fa fa-download" aria-hidden="true"></i></a>
                                                </div>
                                               
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
                                                        <td className='firsttd'>Relationship Management</td>
                                                        <td>
                                                            <span>To understand the customer needs</span>
                                                            <span>Listening </span>
                                                            <span>Conflict Management</span>
                                                        </td>
                                                        <td>
                                                            <span>{rm1}</span>
                                                            <span>{rm2}</span>
                                                            <span>{rm3}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (rm1 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: rm1reresultbar }}></div>
                                                                            if (rm1 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: rm1reresultbar }}></div>
                                                                            else (rm1 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: rm1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                {
                                                                        (() => {
                                                                            if (rm2 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: rm2reresultbar }}></div>
                                                                            if (rm2 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: rm2reresultbar }}></div>
                                                                            else (rm2 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: rm2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                {
                                                                        (() => {
                                                                            if (rm3 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: rm3reresultbar }}></div>
                                                                            if (rm3 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: rm3reresultbar }}></div>
                                                                            else (rm3 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: rm3reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>People Management</td>
                                                        <td>
                                                            <span>Building Effective Team</span>
                                                            <span>Communicate clearly</span>
                                                            <span>Self development</span>                                                            
                                                        </td>
                                                        <td>
                                                            <span>{pm1}</span>
                                                            <span>{pm2}</span>
                                                            <span>{pm3}</span>                                                        
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pm1 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: pm1reresultbar }}></div>
                                                                            if (pm1 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: pm1reresultbar }}></div>
                                                                            else (pm1 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: pm1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pm2 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: pm2reresultbar }}></div>
                                                                            if (pm2 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: pm2reresultbar }}></div>

                                                                          
                                                                            else (pm2 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: pm2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pm3 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: pm3reresultbar }}></div>
                                                                            if (pm3 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: pm3reresultbar }}></div>
                                                                            else (pm3 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: pm3reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>                                                            
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Inspirational Leadership</td>
                                                        <td>
                                                            <span>Encourage Team Unity</span>
                                                            <span>Approachable</span>
                                                            <span>Being Agile</span>
                                                        </td>
                                                        <td>
                                                            <span>{il1}</span>
                                                            <span>{il2}</span>
                                                            <span>{il3}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (il1 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: il1reresultbar }}></div>
                                                                            if (il1 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: il1reresultbar }}></div>                                                                            
                                                                            else (il1 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: il1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (il2 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: il2reresultbar }}></div>
                                                                            if (il2 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: il2reresultbar }}></div>                                                                            
                                                                            else (il2 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: il2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (il3 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: il3reresultbar }}></div>
                                                                            if (il3 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: il3reresultbar }}></div>
                                                                            else (il3 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: il3reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Customer Centricity</td>
                                                        <td>
                                                            <span>Being Empathetic</span>
                                                            <span>Customer Delight</span>
                                                            <span>Create Accountability  </span>                                                    
                                                        </td>
                                                        <td>
                                                            <span>{cr1}</span>
                                                            <span>{cr2}</span>
                                                            <span>{cr3}</span>
                                                         
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr1 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: cr1reresultbar }}></div>
                                                                            if (cr1 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: cr1reresultbar }}></div>
                                                                            
                                                                            else (cr1 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: cr1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr2 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: cr2reresultbar }}></div>
                                                                            if (cr2 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: cr2reresultbar }}></div>
                                                                           
                                                                            else (cr2 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: cr2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr3 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: cr3reresultbar }}></div>
                                                                            if (cr3 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: cr3reresultbar }}></div>
                                                                            
                                                                            else (cr3 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: cr3reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Analytical Thinking</td>
                                                        <td>
                                                            <span>Problem Solving</span>
                                                            <span>Creative/Critical Thinking</span>
                                                                                                            
                                                        </td>
                                                        <td>
                                                            <span>{at1}</span>
                                                            <span>{at2}</span>                                                         
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (at1 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: at1reresultbar }}></div>
                                                                            if (at1 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: at1reresultbar }}></div>
                                                                            
                                                                            else (at1 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: at1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (at2 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: at2reresultbar }}></div>
                                                                            if (at2 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: at2reresultbar }}></div>
                                                                           
                                                                            else (at2 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: at2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                           

                                                            
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>Planning & Management</td>
                                                        <td>
                                                            <span>Prioritization</span>
                                                            <span>Goal Setting</span>
                                                            <span>Time Management</span>                                                    
                                                        </td>
                                                        <td>
                                                            <span>{pm21}</span>
                                                            <span>{pm22}</span>
                                                            <span>{pm23}</span>
                                                         
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pm21 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: pm21reresultbar }}></div>
                                                                            if (pm21 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: pm21reresultbar }}></div>
                                                                            
                                                                            else (pm21 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: pm21reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pm22 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: pm22reresultbar }}></div>
                                                                            if (pm22 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: pm22reresultbar }}></div>
                                                                           
                                                                            else (pm22 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: pm22reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pm23 <= 3)
                                                                                return <div class="result-bar bgred" style={{ width: pm23reresultbar }}></div>
                                                                            if (pm23 <= 5)
                                                                                return <div class="result-bar yellobg" style={{ width: pm23reresultbar }}></div>
                                                                            
                                                                            else (pm23 <= 5.1)
                                                                            return <div class="result-bar greenbg" style={{ width: pm23reresultbar }}></div>
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
                                                        <td>Less than 3.0 (Red)</td>
                                                        <td>Foundation Level (Area that needs attention)</td>
                                                        <td>Prioritise to manage and learn the skills to minimize the negative impact on others</td>
                                                    </tr>

                                                    <tr>
                                                        <td>3.2 to 5 (Yellow)</td>
                                                        <td>Competent Level (Area of Strength) </td>
                                                        <td>Build it further & focus on select behaviours to make them even better</td>
                                                    </tr>

                                                    <tr>
                                                        <td>5.1 + (Green)</td>
                                                        <td>Advanced/Expertise Level (Area of commanding excellence)</td>
                                                        <td>Keep building on the strengths</td>
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



