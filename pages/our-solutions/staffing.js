import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function Staffing(){

    return(
        <>
          <Head>
            <title>Staffing | Our Solutions | BYLD Group</title>
            <meta name="description" content="BYLD Group offers corporate staffing services to organizations of different sizes. It provides manpower staffing to ensure easy recruitment, payrolls, payments, and other areas."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/staffing.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">

                 

                       <div class="col-sm-12 rightsides">
                          <div className="sec-title3 mbb-35 text-left">
                            <h4 className="countertoph2 text-left font30">Staffing & Search</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                               With the advent of technology and automation, more and more companies are focusing on digitizing their processes. This is where we combine technology and staffing services to provide a one-stop solution to manage recruitment, training, payrolls, payments, and automate complete employee lifecycle management through a single tool.
                            </p>
                            <p className='solutionp'>
                               With a team of expert consultants having wide experience and expertise in the local labor market, and cutting-edge technology, we offer you excellent staffing and business operation solutions to take your business forward. Our two major verticals include:
                            </p>
                          </div>
                            <div className='row'>
                            <div class="col-sm-6">
                                <a class="productbox" target="_blank" href="https://www.yomabusinesssolutions.com/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/yml.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">YOMA Business Solutions</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6">
                                <a class="productbox" target="_blank" href="https://www.yomatechnologies.in/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/yml.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">YOMA Technologies</h4>                                                               
                                </div>
                                </a>
                            </div>

                            </div>                         
                       </div>
                       
                       
                    </div>                     
                </div>
            </div>


            <div class="rs-process style1 pt-100 pb-100 md-pt-70 md-pb-70">                
                <div class="container">
                    <div class="row y-middle">
                    </div>
                </div>
                <div class="container custom2">
                    <div class="process-effects-layer">
                        <div class="row">
                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <a className='hccs' href='/our-solutions/experiential-learning'>
                                        <div class="number-image">
                                            <span>Experiential Learning</span>
                                        </div>
                                         
                                        </a>                                        
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/our-solutions/leadership-and-talent-development'>
                                        <div class="number-image">
                                            <span>Leadership & Performance</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/our-solutions/assessments'>
                                        <div class="number-image">
                                            <span>Assessments</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/bespoke'>
                                        <div class="number-image">
                                            <span>BeSpoke</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/our-solutions/coaching'>
                                        <div class="number-image">
                                            <span>Coaching</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}