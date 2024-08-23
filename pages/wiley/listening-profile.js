import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function TheFiveBehaviorsForVirtualTeam(){


    return(
        <>
          <Head>
            <title>Listening Profile - Wiley</title>
            <meta name="description" content="Personal Listening Profile® Listening is more than simply hearing. The Personal Listening Profile® helps people discover their most natural approach to listening while gaining insight into the different listening approaches of others. In addition, participants learn when and how to adopt another approach for more successful communication. DiSC® assessments are used worldwide in thousands of […]"/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/wileyassets/img/banner/listening-profile.jpg"/>
                    </div>         
                </div>
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font34">Listening is more than simply hearing.</h4>
                        <p className='mall5'>
                        The Personal Listening Profile<sup>®</sup> helps people discover their most natural approach to listening while gaining insight into the different listening approaches of others. In addition, participants learn when and how to adopt another approach for more successful communication.
                        </p>
                        <p className='mall5'>
                        DiSC<sup>®</sup> assessments are used worldwide in thousands of organizations of all sizes, major governmental agencies, non-profits, and Fortune 500 companies.
                        </p>
                       
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font22">
                        DiSC<sup>®</sup> is the leading personal assessment tool, used by over 1 million people every year.
                        </h4>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <img src="/wileyassets/img/listener.jpg" alt=""/>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>

             
            
  
        </>
    )
}