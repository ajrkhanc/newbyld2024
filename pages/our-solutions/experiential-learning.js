import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function ExperientialLearning(){

    return(
        <>
          <Head>
            <title>Experiential Learning | Our Solutions | BYLD Group</title>
            <link rel="canonical" href="https://byldgroup.com/our-solutions/experiential-learning" />
            <meta name="description" content="Experiential Learning helps in developing leadership skills by offering leadership development programs that promote self-learning and improvement. To know more, check out the page."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/experiential-learning.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">

                   
                       <div class="col-sm-12 rightsides">
                          <div className="sec-title3 mbb-35 text-left">
                            <h4 className="countertoph2 text-left font30">Experiential Learning</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                            Today’s stressful and distracted workplace environments are taking a toll on people’s learning and development efforts. Let’s face it; working smarter is the only choice you have and this is where our experiential learning programs help you learn quickly and learn essential skills to keep delivering consistently.
                            </p>
                            <p className='solutionp'>
                            For companies of all sizes, and all kinds of people and organizational needs, we bring you a plethora of experiential learning trainings that are unique, highly effective and available in virtual, and offline formats:
                            </p>
                          </div>
                            <div className='row'>
                            <div class="col-sm-4">
                                <a class="productbox" target="_blank" href="/eaglesflightindia">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/efl.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Eagle’s Flight™</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-4">
                                <a class="productbox" href="/business-today-simulations">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/btl.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Business Today Simulations</h4>                                                               
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6 d-none">
                            <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/j8l.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Gaminar</h4>                                
                                </div>
                                </a>
                            </div>
                            
                            <div class="col-sm-4">
                            <a class="productbox" href="/jenson-8">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/j8l.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Jenson8</h4>                                
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
