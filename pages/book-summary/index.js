import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function Books(){

    


    return(
        <>
          <Head>
            <title>Book Summmary - BYLD Group</title>
            <meta name="description" content="Explore Our Library Crucial Conversations First Chapter Crucial Accountability First Chapter Influencer First Chapter The Power of Habit Book Online Management and Leadership Resources Measuring the Impact and ROI of Leadership Training 7 Ways Poor Leaders Are Costing Your Company Money 3 Fatal Mistakes Managers Make When Coaching Their Teams When It Comes to Customer… Continue reading Books"/> 
          </Head>
            
            <div className="rs-about style2 clientcornnerlogo ptt-20 pbb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                           <div className="">
                               <div className="sec-title3 mbb-35">
                                    <h4 className="countertoph2 text-center font30">Explore Our Library</h4>
                                    <div className="heading-border-line center-style"></div>
                               </div>                             
                            </div>
                        </div>

                        <div className="col-sm-3">
                           <div className="innervideoshd">
                               <a href='/book-summary/simple-truths-of-leadership'>
                               <img src='/assets/img/books/simple-truths-of-leadership.jpg' alt="books"/>
                               <h3 className='booktitlerow1'>Read Book Summary</h3>
                               </a>
                            </div>
                        </div>
                        
                        <div className="col-sm-3">
                           <div className="innervideoshd">
                               <a href='/book-summary/innovation-race-book-summary'>
                               <img src='/assets/img/books/Innovation-race-book-summary.jpg' alt="books"/>
                               <h3 className='booktitlerow1'>Read Book Summary</h3>
                               </a>
                            </div>
                        </div>

                       

                    </div>
                </div>                
            </div>
            
        </>
    )
}