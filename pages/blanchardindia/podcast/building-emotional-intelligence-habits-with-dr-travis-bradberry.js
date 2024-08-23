import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
        <Head>
        <title>Podcast -Building Emotional Intelligence Habits with Dr. Travis Bradberry
</title>
        <meta name="description" content="Dr. Travis Bradberry share strategies from his latest book, Emotional Intelligence Habits. He explains how to form good habits, break bad ones, and master the micro behaviors that will take your EQ to new heights. His insights will help you change your habits and change your life."/>
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
                                <h3>Building Emotional Intelligence Habits with Dr. Travis Bradberry</h3>
                                {/* <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://play.libsyn.com/embed/episode/id/28695898/height/192/theme/modern/size/large/thumbnail/yes/custom-color/008264/time-start/00:00:00/playlist-height/200/direction/backward/download/yes" title="Embed Player" webkitallowfullscreen="true" width="100%"></iframe> */}
                                <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://play.libsyn.com/embed/episode/id/29720058/height/192/theme/modern/size/large/thumbnail/yes/custom-color/008264/time-start/00:00:00/playlist-height/200/direction/backward/download/yes/font-color/FFFFFF"  title="Embed Player" webkitallowfullscreen="true" width="100%"></iframe> 
                                <div>
                                    <p>
                                    Hear Dr. Travis Bradberry share strategies from his latest book, Emotional Intelligence Habits. He explains how to form good habits, break bad ones, and master the micro behaviors that will take your EQ to new heights. His insights will help you change your habits and change your life.
                                    </p>
                                    <p>
                                    To learn more, follow Dr. Travis Bradberry on  <a target="_blank" href='https://www.linkedin.com/in/travisbradberry/'>LinkedIn</a>
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
