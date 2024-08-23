import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Layout/sidebar'

export default function InsideOutsidecoaching(){

    return(
        <>
          <Head>
            <title>InsideOut Development - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
          </Head>
          <section className='inside-out-coachingbg'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='pagetitle text-left'>
                    <h1 className='myblack'>COACHING BEYOND COMPETENCE— IT’S ALL ABOUT PERFORMANCE</h1>
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
                       <div className="sec-title3 mbb-35 text-left rs-estimate">                            
                            <p className='mtt'>
                            Coaching skill is no longer a bonus for managers. It’s what leaders do, and done well, coaching unlocks the talent already inside your teams. Great coaches use the InsideOut Coaching™ approach to:
                            </p>                            
                            <ul className='estimate-info mtt-5'>
                                <li>Accelerate decision-making capability</li>
                                <li>Boost accountability</li>
                                <li>Communicate feedback quickly and effectively</li>
                                <li>Help their teams take necessary actions to get the job done</li>                                
                            </ul>
                            <h4 className="countertoph2 text-left">What is InsideOut Coaching™</h4>
                            <p>InsideOut Coaching™ is a client-tested and time-proven process that turns conversation into connection, dialogue into doing. It’s simple enough for managers to use immediately, flexible to apply in any situation, and designed to produce real breakthroughs.</p>
                            <h4 className="countertoph2 text-left">Did You Know?</h4>
                            <p>Organizations that are highly effective at coaching were 30% more likely to have strong business results. They also enjoyed 42% higher employee productivity.*</p>
                            <h4 className="countertoph2 text-left">Bring the Power of Coaching Inside</h4>
                            <p>The best way to influence organizational impact through coaching is by certifying to become an InsideOut Coaching™ facilitator. It’s a cost-effective and powerful way to deliver our coaching, YOUR way. Graduates of our one-day program are eligible to join a two-day certification workshop, with convenient dates and locations all across the U.S. (In-house certification workshops also available). Participants receive all program facilitator materials, plus mastery practice of content and activities, in addition to our stellar facilitator support and online community—it’s a great place to share tips and insights and receive support from subject matter experts.</p>
                            <p>Learn more about our InsideOut Coaching™ suite and how you can put the power of manager-led coaching to work! Read the first chapter of the best-selling book by Alan Fine. He talks about his simple and proven approach to achieving breakthrough performance using the GROW model. Click Here</p>
                            <p><i>Learn more about our To learn more, visit insideoutdev.com or contact us at 1800.102.1345</i></p>
                            <p>Unit No. 629-634, 6th Floor, Vipul Trade Centre, Sohna Road, Sector – 48, Gurgaon – 122018, Haryana(India) Read insights about GROW model</p>                           
                        </div>                        
                       </div>                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}