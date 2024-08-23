import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Layout/sidebar'

export default function Assessments(){

    return(
        <>
          <Head>
            <title>Ken Blanchard Group of Companies | Blanchard India | BYLD Group</title>
            <meta name="description" content="Ken Blanchard Group of Companies offers leadership training and coaching skills through the Blanchard Online learning platform. To know more about leadership courses in India, check out the page."/> 
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

                    <div className='col-sm-4 leftsides'>
                          <div className='rightsidebar'>
                            <Sidebar></Sidebar>
                          </div>
                       </div>

                       <div class="col-sm-8 rightsides">
                       <div className="sec-title3 mbb-35 text-left">
                            <h4 className="countertoph2 text-left font30">The Ken Blanchard® Group of Companies (Blanchard® India)</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                            It’s often said that a great leader can change one life. But when many great leaders come together, they can transform organizations. This is the power of leadership trainings that we bring to your people’s manager.
                            </p>
                            <p>
                            In partnership with The Ken Blanchard®, the world leader in providing time-tested, sustainable, and award-winning content, we have trained more than 4 million leaders around the world.
                            </p>
                            <p className='solutionp'>Check out our award-winning programs that are crafted differently for each level of your leaders’ journey:</p>
                        </div>

                          <div className='row'>
                            <div class="col-sm-6">
                                <a class="productbox" href="https://blanchardinternational.co.in/products-services/slii-experience/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/icon/b1.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">SLII® Powering Inspired Leaders</h4>                                                               
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-6">
                            <a class="productbox" href="https://blanchardinternational.co.in/products-services/blanchard-management-essentials/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b2.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Blanchard Management Essentials®</h4>                                
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-6">
                            <a class="productbox" href="https://blanchardinternational.co.in/products-services/building-trust/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b3.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Building Trust</h4>                                
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-6">
                            <a class="productbox" href="https://blanchardinternational.co.in/products-services/slii-experience/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b4.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Coaching Essentials</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6">
                            <a class="productbox" href="https://blanchardinternational.co.in/products-services/conversational-capacity/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b5.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Conversational Capacity®</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6">
                            <a class="productbox" href="/leadership-and-performance/leading-in-a-virtual-teams/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b6.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Leading in a Virtual Team</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-4">
                            <a class="productbox" href="https://blanchardinternational.co.in/products-services/customer-service-training">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b7.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Legendary Service</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-4">
                            <a class="productbox" href="https://blanchardinternational.co.in/products-services/team-leadership">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b8.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Team Leadership</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-4">
                            <a class="productbox" href="https://blanchardinternational.co.in/products-services/online-learning-training">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b9.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Online Learning</h4>                                
                                </div>
                                </a>
                            </div> 
                            
                          </div>
                          <br></br>
                          <p className='solutionp'>Check out our award-winning programs that are crafted differently for each level of your leaders’ journey:</p>
                       </div>

                       
                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}