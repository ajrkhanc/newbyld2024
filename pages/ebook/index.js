import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function Books(){

    


    return(
        <>
          <Head>
            <title>E-books - BYLD Group</title>
            <link rel="canonical" href="https://byldgroup.com/ebook" />
            <meta name="description" content=""/> 
          </Head>
            
            <div className="rs-about style2 clientcornnerlogo ptt-20 pbb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                           <div className="">
                               <div className="sec-title3 mbb-35">
                                    <h4 className="countertoph2 text-center font30">Explore Our E-books</h4>
                                    <div className="heading-border-line center-style"></div>
                               </div>                             
                            </div>
                        </div>
                        <div className="col-sm-4">
                           <div className="innervideoshd ebookst text-center">
                               <a href='/ebook/critical-skills-every-sales-manager-needs'>
                               <img src='/assets/img/ebook/critical-skills-every-sales-manager-needs.webp' alt="books"/>
                               <h4 className=''>Meeting the Quota Challenge: Critical Skills Every Sales Manager Needs to Excel</h4>
                               <h3 className='ebookbtn'>Read E-book</h3>
                               </a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                           <div className="innervideoshd ebookst text-center">
                               <a href='/ebook/2023-hr-and-trends'>
                               <img src='/assets/img/ebook/2023-hr-and-trends.webp' alt="books"/>
                               <h4 className=''>2023 HR and L&D Trends</h4>
                               <h3 className='ebookbtn'>Read E-book</h3>
                               </a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                           <div className="innervideoshd ebookst text-center">
                               <a href='/ebook/inout-creating-coaching-culture'>
                               <img src='/assets/img/ebook/inout-creating-coaching-culture.webp' alt="books"/>
                               <h4 className=''>Creating a Coaching Culture</h4>
                               <h3 className='ebookbtn'>Read E-book</h3>
                               </a>
                            </div>
                        </div>


                    </div>
                </div>                
            </div>


           

            
        </>
    )
}
