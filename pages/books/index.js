import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function Books(){

    


    return(
        <>
          <Head>
            <title>Books - BYLD Group</title>
            <link rel="canonical" href="https://byldgroup.com/books" />
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
                               <a href='https://payments.byldgroup.com/Home' target='_blank'>
                               <img src='/assets/img/books/crucialconversations.svg' alt="books"/>
                              <div className='book-details'>
                              <div className='title'>Crucial Conversations First Chapter</div>
                              </div>

                              <div className='d-flex justify-content-between align-items-center text-center p-3'>
                              <div className='price'>Rs.419.00/-</div>
                              <a href='https://payments.byldgroup.com/Home' target='_blank' class="ebookbtn mt-0">Buy Now</a>
                              </div>
                               </a>
                            </div>
                        </div>

                        <div className="col-sm-3">
                           <div className="innervideoshd">
                               <a href='https://payments.byldgroup.com/Home' target='_blank'>
                               <img src='/assets/img/books/crucialaccountability.svg' alt="books"/>

                               <div className='book-details'>
                              <div className='title'>Crucial Accountability First Chapter</div>
                              </div>

                              <div className='d-flex justify-content-between align-items-center text-center p-3'>
                              <div className='price'>Rs.642.00/-</div>
                              <a href='https://payments.byldgroup.com/Home' target='_blank' class="ebookbtn mt-0">Buy Now</a>
                              </div>

                               
                               </a>
                            </div>
                        </div>

                        <div className="col-sm-3">
                           <div className="innervideoshd">
                               <a href='https://payments.byldgroup.com/Home' target='_blank'>
                               <img src='/assets/img/books/influencer.svg' alt="books"/>
                               <div className='book-details'>
                              <div className='title'>Influencer First Chapter</div>
                              </div>

                              <div className='d-flex justify-content-between align-items-center text-center p-3'>
                              <div className='price'>Rs.742.00/-</div>
                              <a href='https://payments.byldgroup.com/Home' target='_blank' class="ebookbtn mt-0">Buy Now</a>
                              </div>

                            
                               </a>
                            </div>
                        </div>
                      

                    </div>
                </div>                
            </div>


            
        </>
    )
}
