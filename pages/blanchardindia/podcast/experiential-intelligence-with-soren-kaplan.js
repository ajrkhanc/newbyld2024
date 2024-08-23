import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
        <Head>
        <title>Podcast - Experiential Intelligence with Soren Kaplan</title>
        <link rel="canonical" href="https://byldgroup.com/blanchardindia/podcast/experiential-intelligence-with-soren-kaplan" />
        <meta name="description" content="Experiential Intelligence with Soren Kaplan"/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
         
            <div className="what-did-area pb-40 pt-45 style2 themebg">
            <div className="container">            
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="what-did-left-content">
                        <div className="row row-eq-height eventsandworkshopbox">
                            <div className="col-sm-8">
                                <div className="podcastd">
                                <h3>Experiential Intelligence with Soren Kaplan</h3>
                                <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://play.libsyn.com/embed/episode/id/26367063/height/192/theme/modern/size/large/thumbnail/yes/custom-color/008264/time-start/00:00:00/playlist-height/200/direction/backward/download/yes" title="Embed Player" webkitallowfullscreen="true" width="100%"></iframe>
                                <div>
                                    <p>
                                    In this episode, hear Soren Kaplan explain how life experiences influence our mindsets and abilities while impacting our present success and future opportunities. He shares tips and examples from his latest book, Experiential Intelligence: Harness the Power of Experience for Personal and Business Breakthroughs, and describes the differences between IQ, EQ, and XQ.
                                    </p>
                                    <p>
                                    For more information about Soren Kaplan, visit <a target="_blank" href='https://www.sorenkaplan.com/'>sorenkaplan.com.</a>
                                    </p>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/kbassets/img/podcast/podcastall.jpg" alt="Images"/>                                                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="/podcast"><a className="default-btn-two">View all Podcasts<i className="bx bx-right-arrow-alt"></i></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
