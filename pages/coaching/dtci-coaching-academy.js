import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function DTCICoachingAcademy(){
    return(
        <>
          <Head>
            <title>Door Training and Consulting India | Coaching | BYLD Group</title>
            <meta name="description" content="DTCI offers coaching and mentoring in Executive Coaching, Performance Coaching, and Coach Certification (ICF). It provides training in negotiation skills, time management, soft skills, etc."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/dtci-coaching-academy.jpg"/>
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
                       <div className="sec-title3 text-left">
                            <h4 className="countertoph2 text-left font30">DTCI Coaching Academy</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                            DTCI (Door Training and Consulting India Pvt. Ltd.) is one of the leading names in the industry. They provide a meticulous 3-tier approach in coaching executives to have a national as well as global reach. Door Training and Consulting has three main coaching practice areas- Executive Coaching, Performance Coaching, and Coach Certification (ICF). Additionally, we provide training in the areas of- experiential learning (BTI, Assessments (Lumina), negotiation skills training program, corporate training, soft skills training, people management, time management, and more.
                            </p>
                            <p>DTCI is accredited by International Coach Federation (ICF) for 60 hours of coach training through its affiliation with Aster Coaching. There are various modules available that can be efficiently used by professionals to get the right coaching. The two modules are mentioned below for more details.</p>
                        </div>

                          <div className='row'>
                            <div class="col-sm-6">                                
                              <h4 className="countertoph2 text-left">DTCI Module 1</h4>
                              <h5 className='pinkh'>Provides</h5>
                              <div className='rs-estimate'>
                                <ul className='estimate-info mtt-5'>
                                  <li>Fundamental information of coaching as a profession.</li>
                                  <li>Helps in developing appreciative inquiry skills to focus on strengths.</li>
                                  <li>Guides you through DTCI coaching framework.</li>
                                </ul>
                              </div>
                              <h5 className='pinkh'>Objectives</h5>
                              <div className='rs-estimate'>
                                <ul className='estimate-info mtt-5'>
                                  <li>Increased appreciation for coaching as a profession.</li>
                                  <li>Develop precise questioning skills.</li>
                                  <li>Understanding the standards and ethics of coaching.</li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <h4 className="countertoph2 text-left">DTCI Module 2</h4>
                              <h5 className='pinkh'>Provides</h5>
                              <div className='rs-estimate'>
                                <ul className='estimate-info mtt-5'>
                                  <li>Behavioral coaching skills that help in the sustainable development of the organization.</li>
                                  <li>Provides the right management and performance improvement tools.</li>
                                  <li>You get a coaching toolkit, and in addition to that you also get problem-solving and creativity tools.</li>
                                </ul>
                              </div>
                              <h5 className='pinkh'>Provides</h5>
                              <div className='rs-estimate'>
                                <ul className='estimate-info mtt-5'>
                                  <li>Learn coaching conversations to help improve performance.</li>
                                  <li>Know top management tools to help fight competition.</li>
                                  <li>Understand the concept of behavioral change and emotional intelligence in depth.</li>
                                </ul>
                              </div>
                            </div>
                            <div className='rs-estimate'>
                              <p className='mtt-10 mbb-5'>DTCI provides a comprehensive range of coaching resources to individuals as well as organizations.</p>
                              <h4 className="countertoph2 text-left font18 mtt-0 ptt-0">These include –</h4>
                                <ul className='estimate-info mtt-5'>
                                  <li>Developmental group workshops.</li>
                                  <li>Professional 3 phase coach development program.</li>
                                  <li>Coach Engage: coaching and mentoring management software.</li>
                                </ul>
                                <p className='mtt-10'>After completing graduation, candidates can apply to become ICF ACC Coach or gain a PCC credential. We inspire our customers and help them achieve their personal and business goals through the right kind of coaching methodology. The use of coaching activities and synergies with research activities, coaching, and training are greatly helpful.</p>
                                <h4 className="countertoph2 text-left font18 mtt-0 ptt-0">The DTCI Consulting model consists of five elements –</h4>
                                <ul className='estimate-info mbb-5'>
                                  <li>Diagnose</li>
                                  <li>Design</li>
                                  <li>Develop</li>
                                  <li>Deliver</li>
                                  <li>Demonstrate results</li>
                                </ul>
                                <p>Each phase has a specific role and when done correctly it’ll only add to the credibility and productivity of the participants. What gets measured gets managed, and what gets managed gets done. The important thing to keep in mind is that we have a proven track record of measuring success, and can work with you to measure the impact the solution has made at all levels.</p>
                                <p>For example with training interventions – reaction, learning, behavior change, business impact, and return on expectation.</p>
                              </div>
                            
                            
                          </div>
                       </div>
                       
                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}