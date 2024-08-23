import Link from "next/link";
import Head from "next/head";

export default function ThanYouLP() {
    return (
        <>
            <Head>
                <title>Thank You | Blanchard International</title>
                <meta name="description" content="At Blanchard, we help organizations of all sizes, leaders at every career stage, and leadership trainers and coaches gain the skills they need to unlock their people’s potential."/>
                <link rel="icon" href="/blanchardindia/favicon.ico" />
            </Head>

            <section className="bredkums pbb-100">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/blanchardindia/">HOME</a></li>
                                <li><a><span>THANK YOU</span></a></li>
                            </ul>
                        </div>

                        <div className="row">
                           
                            <div className="col-sm-8">
                                <div className="innerbedkms">
                                    <h1 className="pbb-100">Thank You For Reaching Out</h1>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60">
                <div className="container-fluid">
                    <div className="row align-items-center">
                    <div className="col-sm-6  pa0000">
                            <div className="prr-90">
                                <img className="border-top-right-radius-70 border-bottom-right-radius-70" src="/kbassets/img/kbnew/Thank-you-image.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">We will forward your request to the appropriate Blanchard representative and they will respond back shortly.</h2>
                            <p className="headingp">
                            Please know we are also available via chat or at any of the numbers below:
                            </p>
                            <ul>
                                <li><a href="tel:1800-102-1345">Call Us Any Time: 1800-102-1345</a></li>
                            </ul>
                            <p className="headingp">In the meantime, we invite you to explore Blanchard content that might be of interest to you.</p>
                            <div className="twobtninone">
                            <a href='/blanchardindia/events-workshops' className='kbbtn kbbtn--orange mtt-20'>Register for Workshops</a>
                            {/* <a href='/blanchardindia/who-we-help/training-professionals' className='kbbtn kbbtn--orange mtt-20 blanbtn'>Training Professionals</a> */}
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>

      

            

           

            

        </>
    )
}