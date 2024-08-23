import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function Assessments(){

    return(
        <>
          <Head>
            <title>Our Solutions | Assessments | BYLD Group</title>
            <meta name="description" content="Psychometric Assessment offers insight into the behavior and working style of an individual. Explore how Everything DiSC solutions play a crucial role in people’s development."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/assesments.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">
                       <div class="col-sm-12 rightsides">
                       <div className="sec-title3 mbb-35 text-left">
                            <h4 className="countertoph2 text-left font30">Assessments</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                            A company is as strong as its people. Organizations of all sizes prefer psychometric assessments for hiring and managing people, and fostering the right culture across all the levels of an organizational hierarchy.
                            </p>
                            <p className='solutionp'>Explore our best-in-class assessment brands that have been revolutionizing people development across the globe:</p>
                        </div>

                          <div className='row'>
                            <div class="col-sm-3">
                                <a class="productbox" target="_blank" href="/everythingdisc">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/edl.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">DiSC<sup>®</sup></h4>                                                               
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-3">
                                <a class="productbox" target="_blank" href="/fivebehaviors">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/fiveb.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Five Behaviors</h4>                                                               
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-3">
                            <a class="productbox" href="/assessments/lumina-psychometric-assesments">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/lsl.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Lumina Spark</h4>                                
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-3">
                            <a class="productbox" href="/assessments/talentsmart-eq-assesments">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/tsl.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">TalentSmart EQ Assessments</h4>                                
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-6 d-none">
                            <a class="productbox" href="/assessments/assessments-and-development-centers">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/assessments-and-development.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Assessments and Development Centers</h4>                                
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
                                    <a className='hccs' href='#'>
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
                                    <a className='hccs' href='/our-solutions/staffing'>
                                        <div class="number-image">
                                            <span>Staffing & Search</span>
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