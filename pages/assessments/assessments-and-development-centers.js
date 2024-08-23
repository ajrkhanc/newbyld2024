import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function AssesmentsAndDevelopmentCenter(){

    return(
        <>
          <Head>
            <title>Assessments and Development Centers | Assessments | BYLD Group</title>
            <meta name="description" content="BYLD Group offers various assessments and development centers to improve leadership skills, behavioral progress, and a culture of teamwork. To know more, check out the page."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/assessments-and-development-centers.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">

                    <div className='col-sm-4 leftsides'>
                          <div className='rightsidebar'>
                            <Sidebar></Sidebar>
                          </div>
                       </div>

                       <div class="col-sm-8 rightsides">
                       <div className="sec-title3 mbb-35 text-left rs-estimate">                            
                            <p className='mtt-30'>
                            Blanchard offers a variety of developmental assessments that provide a powerful baseline and means of checking behavioral progress on the leadership skills being developed. We typically pair our assessments with one-on-one coaching to debrief the assessment, define an individual development plan, and begin making progress on that development plan.
                            </p>
                            
                            <h4 className="countertoph2 text-left">LAPII</h4>
                            <p>Measures frequency of use of SLII leadership behaviors.</p>

                            <h4 className="countertoph2 text-left">Leadership Behavior Analysis</h4>
                            <p>Measures leadership style flexibility and effectiveness; available in both the Self version as part of standard SLII participant materials and an optional 360-degree format.</p>

                            <h4 className="countertoph2 text-left">The Booth 360</h4>
                            <p>Delivers 360-degree feedback for managers and individual contributors; the Booth 360 assessments cover a broader array of leadership skills than Blanchard-owned assessments, which tend to be focused on the skills covered in a single program (for example, LAPII with SLII).</p>

                            <h4 className="countertoph2 text-left">Frontline Leader Assessment</h4>
                            <p>Measures strengths regarding twelve leadership dimensions.</p>

                        </div>                        
                       </div>                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}