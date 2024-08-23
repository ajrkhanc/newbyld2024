import Head from 'next/head'
import Link from 'next/link'


export default function PersonaGlobal(){

    return(
        <>
          <Head>
            <title>Persona Global - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
          </Head>
          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/persona-global.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">

                    

                       <div class="col-sm-12 rightsides">
                       <div className="sec-title3 mbb-35 text-left rs-estimate">
                       <h4 className="countertoph2 text-left">What is The Persuasive Communicator<sup>®</sup> ?</h4>
                            <p className='mtt'>
                            The Persuasive Communicator<sup>®</sup> (PC) is a robust workshop that provides delegates with an intuitive, practical system for dealing with all people, especially those “difficult or uncooperative people” whom they have not been able to influence yet. It clarifies the skills of how to use your behavior to build trust, positively influence others, and achieve win/win results in the shortest time frame possible.
                            </p>
                            <p>
                            Skills honed during The Persuasive Communicator<sup>®</sup> workshop are easy to learn and immediately applicable to real-life interpersonal communication challenges.
                            </p>
                            <p>
                            The Persuasive Communicator<sup>®</sup> has been proven over the past 37 years to be one of the world’s most effective interpersonal communication skills training programs. More than 2 million people in 72 countries have attended this communications skill-building workshop in their language.
                            </p>
                            <h4 className="countertoph2 text-left">About Persona Global<sup>®</sup></h4>
                            <p>
                            Persona GLOBAL<sup>®</sup> is a worldwide provider of assessment tools and methodologies for corporations facing challenges in change leadership, communication, organizational alignment, sales, customer service, and management. Persona Global<sup>®</sup> metrics and methodologies are currently available in 70+ countries; its programs have been translated into up to 38 languages. More than 1,600 certified Persona Global<sup>®</sup> practitioners around the world serve their clients as strategic business partners.
                            </p>
                        </div>                        
                       </div>                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}