import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
        <Head>
        <title>Podcast - Beating Burnout with Christina Maslach</title>
        <link rel="canonical" href="https://byldgroup.com/blanchardindia/podcast/leverage-change-with-jake-jacobs" />
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
                                <h3>Leverage Change with Jake Jacobs</h3>                                
                                <iframe title="Libsyn Player" src="//html5-player.libsyn.com/embed/episode/id/20285855/height/90/theme/custom/thumbnail/no/direction/backward/render-playlist/no/custom-color/353637/" height="120" width="100%" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
                                <div>
                                    <p>
                                    In this episode, organizational change expert Jake Jacobs shares how to make any change initiative successful by using the techniques from in his latest book, Leverage Change: 8 Ways to Achieve Faster, Easier, Better Results.
                                    </p>
                                    <p>
                                    Jacobs encourages you to embrace change, learn to love the troublemakers, and find ways to help people make a meaningful difference during the change process.
                                    </p>
                                    <p>
                                    For more information about Jake Jacobs, visit <a target="_blank" href='https://jakejacobsconsulting.com/'>www.jakejacobsconsulting.com</a>
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
