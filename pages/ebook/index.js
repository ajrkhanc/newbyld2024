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
                               <img src='/assets/img/ebook/critical-skills-every-sales-manager-needs.jpg' alt="books"/>
                               <h4 className=''>Meeting the Quota Challenge: Critical Skills Every Sales Manager Needs to Excel</h4>
                               <h3 className='ebookbtn'>Read E-book</h3>
                               </a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                           <div className="innervideoshd ebookst text-center">
                               <a href='/ebook/2023-hr-and-trends'>
                               <img src='/assets/img/ebook/2023-hr-and-trends.jpg' alt="books"/>
                               <h4 className=''>2023 HR and L&D Trends</h4>
                               <h3 className='ebookbtn'>Read E-book</h3>
                               </a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                           <div className="innervideoshd ebookst text-center">
                               <a href='/ebook/inout-creating-coaching-culture'>
                               <img src='/assets/img/ebook/inout-creating-coaching-culture.jpg' alt="books"/>
                               <h4 className=''>Creating a Coaching Culture</h4>
                               <h3 className='ebookbtn'>Read E-book</h3>
                               </a>
                            </div>
                        </div>

                        {/* <div className="col-sm-4">
                           <div className="innervideoshd ebookst">
                               <a href='/everythingdisc/ebook/agility-unlocked'>
                               <img src='/edassets/img/ebooki/agility-unlocked.jpg' alt="books"/>
                               <h4 className=''>Agility Unlocked</h4>
                               <h3 className='booktitlerow1'>Read eBook</h3>
                               </a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                           <div className="innervideoshd ebookst">
                               <a href='/everythingdisc/ebook/history-of-disc'>
                               <img src='/edassets/img/ebooki/history-of-disc.jpg' alt="books"/>
                               <h4 className=''>History of DiSC</h4>
                               <h3 className='booktitlerow1'>Read eBook</h3>
                               </a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                           <div className="innervideoshd ebookst">
                               <a href='/everythingdisc/ebook/the-invisible-drain-on-your-companys-culture'>
                               <img src='/edassets/img/ebooki/the-invisible-drain-on-your-companys-culture.jpg' alt="books"/>
                               <h4 className=''>The Invisible Drain on Your Company’s Culture</h4>
                               <h3 className='booktitlerow1'>Read eBook</h3>
                               </a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                           <div className="innervideoshd ebookst">
                               <a href='/everythingdisc/ebook/under-the-hood-the-secret-engine-that-drives-destructive-conflict'>
                               <img src='/edassets/img/ebooki/under-the-hood-the-secret-engine-that-drives-destructive-conflict.jpg' alt="books"/>
                               <h4 className=''>The Under the Hood</h4>
                               <h3 className='booktitlerow1'>Read eBook</h3>
                               </a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                           <div className="innervideoshd ebookst">
                               <a href='/everythingdisc/ebook/virtual-culture-dilemma'>
                               <img src='/edassets/img/ebooki/virtual-culture-dilemma.jpg' alt="books"/>
                               <h4 className=''>Tackling the Virtual Culture Dilemma</h4>
                               <h3 className='booktitlerow1'>Read eBook</h3>
                               </a>
                            </div>
                        </div> */}

                    </div>
                </div>                
            </div>


           

            
        </>
    )
}
