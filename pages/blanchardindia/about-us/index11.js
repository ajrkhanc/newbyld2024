import Link from "next/link";
import Head from "next/head";

export default function AboutUs() {
    return (
        <>
        <Head>
        <title>Blanchard Research and Training India | Know More About Us</title>
        <meta name="description" content="Blanchard has been training millions of world’s best managers who know how to ignite their people and bring out the best in them and deliver great results for their organizations."/>
        <link rel="icon" href="/blanchardindia/favicon.ico" />
        </Head>
        
        <div className="inner-banner about-us-headbg">
                <div className="container">
                    <div className="inner-title text-center">
                        <h3>GREAT MANAGERS <br/>BUILD GREAT COMPANIES</h3>
                        <ul>
                        <li>
                            <Link href="/blanchardindia/">Home</Link>
                        </li>
                        <li>About Us</li>
                        </ul>
                    </div>
                </div>
                <div className="inner-lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="what-did-area pt-45">
            <div className="container">
                <div className="row row-eq-height">
                    <div className="col-lg-6 bgshd">
                        <div className="what-did-content">
                        <div className="section-title pt-20">                            
                            <p className="text-justify">
                            Blanchard Research and Training LLP is the leading training provider in South Asia, with expertise in leadership development across hierarchies. Having a global establishment of over 35 years and operational in India since 2008 by Mr Yogesh Sood, who is a veteran in business operations and leadership development.
                            </p>
                            <p className="text-justify">
                            Blanchard Research and Training LLP offers customized and effective training and coaching programs catering to businesses in today’s ever-changing times. We strongly believe that managers can make a positive difference in a company with the right guidance and skillsets. Our aim is to develop managers to enable them to create high performing teams, generate innovative business solutions and produce the finest bottom-line results.
                            </p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="">
                        <img src="/kbassets/img/home2-pic1.jpg" alt="Images"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
 

        <div className="what-did-area pt-20 pb-40">
         <div className="container">
            <div className="row row-eq-height">
            <div className="col-lg-6">
                  <div className="">
                     <img src="/kbassets/img/image1-home1.png" alt="Images"/>                      
                  </div>
               </div>
               <div className="col-lg-6 bgshd">
                  <div className="what-did-content what-did-content-rs">
                     <div className="section-title-two pt-20">                        
                        <p className="text-justify">
                        We endeavor to aid your business to overcome critical challenges, enrich performance, develop the potentials of your employees, and foster effective business solutions. Our passionate team strives to exceed client’s expectations.
                        </p>
						 <p className="text-justify">
                         Established by Dr. Ken and Dr. Marjorie Blanchard in 1979 in the USA, The Blanchard Companies have always focused on three key goals—to make a difference in people’s lives, to drive human worth and effectiveness in the workplace, and to help organizations to become employers of choice.
                         </p>
                         <p className="text-justify">
                         In India, BYLD Group owns Blanchard Research and Training. BYLD is the largest group in South Asia, offering integrated value-added services – in HR, business operations, man power staffing, executive coaching, technology, and organizational development. Established since 1998 by Mr Yogesh Sood with a turnover of over INR 160 crores, we work with more than 50 consultants, who have 1000+ years of cumulative professional experience, all over India.
                         </p>
                     </div>                     
                  </div>
               </div>               
            </div>
         </div>
      </div>
 
        </>
    )
}