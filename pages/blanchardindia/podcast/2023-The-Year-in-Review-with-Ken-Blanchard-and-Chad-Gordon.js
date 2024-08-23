import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
        <Head>
        <title>Podcast - 2023 The Year in Review with Ken Blanchard and Chad Gordon</title>
        <meta name="description" content="Listen as Ken Blanchard and Chad Gordon review each podcast episode from 2023, and the key facts and ideas they want listeners to learn from them."/>
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
                                <h3>2023 The Year in Review with Ken Blanchard and Chad Gordon</h3>
                                <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://play.libsyn.com/embed/episode/id/29099868/height/192/theme/modern/size/large/thumbnail/yes/custom-color/008264/time-start/00:00:00/playlist-height/200/direction/backward/download/yes/font-color/FFFFFF" webkitallowfullscreen="true" width="100%"></iframe>
                                <div>
                                    <p>
                                    In this episode:
                                    </p>
                                    <p>
                                    <b>.</b>HEAR Ken Blanchard and Chad Gordon discuss EVERY episode of the LeaderChat podcast that aired in 2023!
                                    </p>
                                    <p>
                                    <b>.</b>LISTEN as each guest reveals the key facts and ideas they want YOU to learn from their episode!
                                    </p>
                                    <p>
                                    <b>.</b>DISCOVER valuable information that will make you want to listen to each episode AGAIN and AGAIN and revisit the insights shared!
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