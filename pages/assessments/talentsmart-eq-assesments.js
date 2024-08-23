import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function TalentSmartEQAssesment(){

    return(
        <>
          <Head>
            <title>TalentSmart EQ Assessment | Assessments | BYLD Group</title>
            <meta name="description" content="It is an emotional intelligence and leadership assessment tool that discover emotional intelligence skill levels for effective self-management and relationship management."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/talentsmart-eq-assesments.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">


                       <div class="col-sm-12 rightsides">
                       <div className="sec-title3 mbb-35 text-left rs-estimate">                            
                            <p className='mtt-30'>
                            <i>Emotional Intelligence (EQ) is a person’s skill at perceiving, understanding, and managing emotions. It is seen in what we do each day and how we interact with others.</i>
                            </p>
                            <p className='solutionp'><i>Learn key concepts in emotional intelligence:</i></p>
                            <ul className='estimate-info mtt-5'>
                                <li>Discover your emotional intelligence skill Levels</li>
                                <li>Understand the business case for emotional intelligence</li>
                                <li>Explore the range of emotions</li>
                                <li>Write your own EQ learning agenda</li>
                                <li>Set your plan in motion</li>
                                <li>Explore negative and positive self-talk patterns</li>
                                <li>Rewrite your own negative inner dialogue</li>
                                <li>Discover the role your emotions play in conflict</li>
                                <li>Talk about brain change strategies from six wisdom sources</li>
                                <li>Learn techniques for raising self and social awareness, and managing your emotions and relationships</li>
                                <li>Explore your own behavior during positive and negative emotions</li>
                                <li>Lean into your own discomfort by committing to observe one emotion </li>
                            </ul>
                            <h4 className="countertoph2 text-left">EQ can be learned</h4>
                            <p>Unlike IQ, emotional intelligence is a skill that can be greatly improved with practice. Building emotional intelligence skills offers everyone the opportunity to be increasingly effective on the job, regardless of profession or job level.</p>
                            <p><b>Begin developing your emotional intelligence by attending this powerful two-day workshop.</b></p>
                            <p>According to research, 58% of job performance is due to things like self-awareness, self-management, social awareness, and relationship management. We thought it was time that the world knew how to develop these skills.</p>
                            
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
                          <div className='col'></div>
                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <a className='hccs' href='/everythingdisc'>
                                        <div class="number-image">
                                            <span>DiSC<sup>®</sup></span>
                                        </div>
                                         
                                        </a>                                        
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/assessments/lumina-psychometric-assesments'>
                                        <div class="number-image">
                                            <span>Lumina Spark</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col'></div>

                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}