import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
        <Head>
        <title>Podcast - Love + Work with Marcus Buckingham</title>
        <link rel="canonical" href="https://byldgroup.com/blanchardindia/podcast/love+work-With-Marcus-Buckingham" />
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
                                <h3>Love + Work with Marcus Buckingham</h3>
                                <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://html5-player.libsyn.com/embed/episode/id/23154515/height/90/theme/custom/thumbnail/no/direction/backward/render-playlist/no/custom-color/3c5853/" title="Embed Player" webkitallowfullscreen="true" width="100%"></iframe>
                                <div>
                                    <p>
                                    Do what you love. Sounds simple, right? Hear Marcus Buckingham share how to determine when you are at your best, so you can do what you love, and do it for the rest of your life. His newest book Love + Work focuses on bringing love, the most powerful of human emotions, back into your work and in life.
                                    </p>
                                    <p>
                                    For more information on Marcus Buckingham visit <a target="_blank" href='https://www.loveandwork.org/'> loveandwork.org</a> and  <a target="_blank" href='https://www.marcusbuckingham.com'> marcusbuckingham.com</a>
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
