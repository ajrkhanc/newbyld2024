import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
        <Head>
        <title>Podcast - Beating Burnout with Christina Maslach</title>
        <link rel="canonical" href="https://byldgroup.com/blanchardindia/podcast/beating-burnout-with-christina-maslach" />
        <meta name="description" content="Hear Christina Maslach talk about how to recognize the signs of employee burnout and how to combat the issue to promote increased productivity and health."/>
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
                                <h3>Beating Burnout with Christina Maslach</h3>
                                <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://play.libsyn.com/embed/episode/id/25153776/height/192/theme/modern/size/large/thumbnail/yes/custom-color/59a3d4/time-start/00:00:00/playlist-height/200/direction/backward/download/yes" title="Embed Player" webkitallowfullscreen="true" width="100%"></iframe>
                                <div>
                                    <p>
                                        In this episode, hear Christina Maslach explain the causes of burnout as described in her new book, <i>The Burnout Challenge.</i> She talks about how to recognize the signs of employee burnout and how to combat the issue to promote increased productivity and health.
                                    </p>
                                    <p>
                                    For more information about Christina Maslach, visit <a target="_blank" href='https://www.theburnoutchallenge.com/'>www.theburnoutchallenge.com</a>
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
