import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
        <Head>
        <title>Podcast - Real-Time Leadership with Carol Kauffman</title>
        <link rel="canonical" href="https://byldgroup.com/blanchardindia/podcast/real-time-leadership-with-carol-kauffman" />
        <meta name="description" content="Real-Time Leadership with Carol Kauffman"/>
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
                                <h3>Real-Time Leadership with Carol Kauffman</h3>
                                <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://play.libsyn.com/embed/episode/id/26026512/height/192/theme/modern/size/large/thumbnail/yes/custom-color/008264/time-start/00:00:00/playlist-height/200/direction/backward/download/yes" title="Embed Player" webkitallowfullscreen="true" width="100%"></iframe>
                                <div>
                                    <p>
                                    Hear Carol Kauffman share information about the MOVE framework from her latest book, Real-Time Leadership: Find Your Winning Moves When the Stakes are High, coauthored with David Noble. She describes how leaders must learn to read situations and respond in the most effective way to manage high-stakes challenges.
                                    </p>
                                    <p>
                                    For more information about Carol Kauffman, visit <a target="_blank" href='https://carolkauffman.com/'>www.carolkauffman.com</a>
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
