import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
        <Head>
        <title>Podcast - Change Your Questions, Change Your Life with Dr. Marilee Adams</title>
        <link rel="canonical" href="https://byldgroup.com/blanchardindia/podcast/change-your-questions-change-your-life-with-dr-marilee-adams" />
        <meta name="description" content="Hear Dr. Marilee Adams share powerful insights from her best-selling book Change Your Questions, Change Your Life"/>
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
                                <h3>Change Your Questions, Change Your Life with Dr. Marilee Adams</h3>
                                <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://play.libsyn.com/embed/episode/id/27893481/height/192/theme/modern/size/large/thumbnail/yes/custom-color/008264/time-start/00:00:00/playlist-height/200/direction/backward/download/yes" title="Embed Player" webkitallowfullscreen="true" width="100%"></iframe>
                                <div>
                                    <p>
                                    Hear Dr. Marilee Adams share powerful insights from her best-selling book Change Your Questions, Change Your Life. She explains how the questions we ask ourselves and others can either expand our mindsets and open us up to new possibilities, or constrict our mindsets to limit our choices.
                                    </p>
                                    <p>
                                    Learn more about Dr. Marilee Adams at <a target="_blank" href='https://inquiryinstitute.com/'>www.inquiryinstitute.com</a>
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
