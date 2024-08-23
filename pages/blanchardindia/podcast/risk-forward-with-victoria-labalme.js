import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
            <Head>
                <title>Podcast - Risk Forward with Victoria Labalme podcast | The Ken Blanchard Companies</title>
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/podcast/risk-forward-with-victoria-labalme" />
                <meta name="description" content="Listen as performance coach Victoria Labalme share strategies from her new book, Risk Forward, for moving forward in times when your goals aren’t precisely clear." />
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
                                            <h3>Risk Forward with Victoria Labalmei</h3>
                                            <iframe allowfullscreen="" height="90" mozallowfullscreen="" msallowfullscreen="" oallowfullscreen="" scrolling="no" src="//html5-player.libsyn.com/embed/episode/id/18581300/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/59a3d4/" title="Libsyn Player" webkitallowfullscreen="" width="100%"></iframe>
                                            <div>
                                                <p>
                                                    In this episode, hear performance coach Victoria Labalme share strategies for moving forward in times when your goals aren’t precisely clear. Some people know exactly what they want and go for it, but others aren’t quite sure. Labalme talks about the tips and techniques from her new book, <em>Risk Forward: Embrace the Unknown and Unlock Your Hidden Genius</em>.
                                                </p>
                                                <p>
                                                    About Victoria Labalme: <br />
                                                    For more information about Victoria Labalme, go to <a href="https://www.riskforward.com/book" target="_blank" data-internal="false">www.riskforward.com/book</a> or <a href="https://www.victorialabalme.com/" target="_blank" data-internal="false">www.victorialabalme.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="choose-card">
                                            <img src="/kbassets/img/podcast/podcastall.jpg" alt="Images" />
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
