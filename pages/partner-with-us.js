import Head from 'next/head'
import Link from 'next/link'

export default function PartnerWithUs(){

    return(
        <>
          <Head>
            <title>Partner With Us - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
          </Head>
          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/partner-with-us.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">                   
                       <div class="col-sm-12 rightsides">
                       <div className="sec-title3 mbb-35 text-left rs-estimate">                       
                            <p className='mtt'>
                            We are critically acclaimed providers of unparalleled research-based & culturally neutral organizational solutions. We represent the top 12 global brands – namely VitalSmarts<sup>®</sup>, The Ken Blanchard<sup>®</sup> Companies, Door Training and Consulting, InsideOut DevelopmentTM, Lumina Learning<sup>®</sup>, Business Today Simulations, Eagle’s FlightTM , and Wiley.
                            </p>
                            <p>
                            We invite you to join our Strategic Partnership Group and explore entrepreneurial opportunities in the areas of Strategic and Operation HR, Learning & Organisation Development Assessments, Survey & Analytics.
                            </p>
                            
                        </div>                        
                       </div>                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}