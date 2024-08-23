import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function Dtci(){

    return(
        <>
          <Head>
            <title>Door Training and Consulting India | Leadership Development | BYLD Group</title>
            <meta name="description" content="DTCI offers leadership and management courses to facilitate change management, coaching culture, and effective organizational change and development. To know more, check out the page."/> 
          </Head>
            <section className='dtcibg'>
                <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                    <div className='pagetitle text-left'>
                        <h3 className='colorw'>One Place that Creates and Certifies Successful Coaches</h3>
                        <h1>21+ YEARS OF COACHING EXPERIENCE | 1200+ CLIENTS | 100+ CONSULTANTS</h1>
                    </div>
                    </div>
                </div>
                </div>
            </section>

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
                            <h4 className="countertoph2 text-left font30">Door Training and Consulting India (DTCI) Know More</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                            DTCI (Door Training and Consulting India Pt. Ltd.) is a BYLD Group Company and one of the leading names in the Indian coaching and training industry. They provide a meticulous 3-tier approach in coaching executives to have a national as well as global reach.
                            </p>
                            
                            <p className='solutionp'>We have three key coaching practice areas:</p>
                        </div>

                          <div className='row'>
                            <div class="col-sm-4">
                                <a class="productbox" href="/coaching/executive-coaching/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/icon/dtci1.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Executive Coaching</h4>                                                               
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-4">
                            <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/dtci2.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Performance Coaching</h4>                                
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-4">
                            <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/dtci3.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Coach Certification (ICF)</h4>                                
                                </div>
                                </a>
                            </div>
                            
                            <div className='col-sm-12'>
                                <br></br>
                                <p>Our team of coaches, facilitators and consultants have been working with leading 500 Fortune companies and know what it requires to achieve organizational goals. Our customized offerings have been magically effective for organizations striving hard to manage change, fostering coaching culture, developing leaders as per the changing business requirements, or any other organizational-level or employee-level change.</p>
                                <p className='solutionp'>Our major service areas under DTCI include:</p>
                            </div>

                            <div class="col-sm-4">
                                <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/icon/dtci4.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18 font16">SALES SOLUTIONS</h4>                                                               
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-4">
                            <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/dtci5.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18 font16">LEADERSHIP DEVELOPMENT</h4>                                
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-4">
                            <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/dtci6.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18 font16">MANAGEMENT DEVELOPMENT</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6">
                            <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/dtci7.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18 font16">CUSTOM PROGRAMS</h4>                                
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-6">
                            <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/dtci8.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18 font16">SUSTAINIBILITY (MICROLEARNINGS)</h4>                                
                                </div>
                                </a>
                            </div>

                            <div className='clearfix'></div>
                            <br></br>
                            <div className='col-sm-9'>
                                <p className='ptt-15'>Visit our website to explore about our solutions, clients and Indian success stories in detail,</p>
                            </div>
                            <div className='col-sm-3'>
                            <div class="btn-part ptt-10 pbb-30">
                                <a class="readon2" target="_blank" href="https://doortraining.co.in/">Learn More <div class="btn-arrow"></div></a>
                            </div>
                            </div>

                            <div className='clearfix'></div>
                            <div className='col-sm-12'>
                            <p className='solutionp'><i>*DTCI is accredited by International Coach Federation (ICF) for 60 hours of coach training through its affiliation with Aster Coaching.</i></p>
                            </div>
                            
                          </div>                          
                       </div>

                       
                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}