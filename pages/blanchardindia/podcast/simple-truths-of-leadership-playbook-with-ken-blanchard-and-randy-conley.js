import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
        <Head>
        <title>Podcast -Simple Truths of Leadership Playbook with Ken Blanchard and Randy Conley</title>
        <meta name="description" content="Simple Truths of Leadership Playbook with Ken Blanchard and Randy Conley"/>
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
                                <h3>Simple Truths of Leadership Playbook with Ken Blanchard and Randy Conley</h3>
                                <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://play.libsyn.com/embed/episode/id/29263823/height/192/theme/modern/size/large/thumbnail/yes/custom-color/008264/time-start/00:00:00/playlist-height/200/direction/backward/download/yes/font-color/FFFFFF" webkitallowfullscreen="true" width="100%"></iframe>
                                {/* <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://play.libsyn.com/embed/episode/id/29263823/height/192/theme/modern/size/large/thumbnail/yes/custom-color/008264/time-start/00:00:00/playlist-height/200/direction/backward/download/yes/font-color/FFFFFF" style="border: none;" title="Embed Player" webkitallowfullscreen="true" width="100%"></iframe> */}
                                <div>
                                    <p>
                                  
                                    </p>
                                    <p>
                                    <b></b>In this episode:Ken Blanchard and Randy Conley discuss how they are helping leaders become servant leaders with the tips in their new book, Simple Truths of Leadership Playbook. They explain how to put learning into action with the structured exercises and thought-provoking questions from the book.
                                    </p>
                                    {/* <p>
                                    <b>.</b>Get your copy of Simple Truths of Leadership Playbook
                                    </p>
                                    <p>
                                    <b>.</b>DISCOVER valuable information that will make you want to listen to each episode AGAIN and AGAIN and revisit the insights shared!
                                    </p> */}
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
