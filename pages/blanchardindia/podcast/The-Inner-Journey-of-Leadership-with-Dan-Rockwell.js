import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
  return (
    <>
      <Head>
        <title>Podcast - Love + Work with Marcus Buckingham</title>
        <link rel="canonical" href="https://byldgroup.com/blanchardindia/podcast/The-Inner-Journey-of-Leadership-with-Dan-Rockwell" />
        <meta
          name="description"
          content="Hear Christina Maslach talk about how to recognize the signs of employee burnout and how to combat the issue to promote increased productivity and health."
        />
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
                      <h3>
                    The Inner Journey of Leadership with Dan Rockwell
                      </h3>
                      <iframe
                        allowfullscreen=""
                        height="192"
                        mozallowfullscreen="true"
                        msallowfullscreen="true"
                        oallowfullscreen="true"
                        scrolling="no"
                        src="https://play.libsyn.com/embed/episode/id/28150391/height/192/theme/modern/size/large/thumbnail/yes/custom-color/008264/time-start/00:00:00/playlist-height/200/direction/backward/download/yes"
                        title="Embed Player"
                        webkitallowfullscreen="true"
                        width="100%"
                      ></iframe>
                      <div>
                        <p>
                        Hear Dan Rockwell explain how talented people often unintentionally hold themselves back from success. He encourages listeners to identify their self-defeating behaviors to become the authentic leaders they want to be. He shares tips from his latest book, The Vagrant: The Inner Journey of Leadership.
                        </p>
                       
                        <p>
                        For more information about Dan Rockwell, visit {" "}
                          <a
                            target="_blank"
                            href="https://www.leadershipfreak.blog"
                          >
                            {" "}
                            www.leadershipfreak.blog
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="choose-card">
                      <img
                        src="/kbassets/img/podcast/podcastall.jpg"
                        alt="Images"
                      />
                      <div className="row text-center eventsbottomarea2">
                        <div className="col-sm-12">
                          <Link href="/podcast">
                            <a className="default-btn-two">
                              View all Podcasts
                              <i className="bx bx-right-arrow-alt"></i>
                            </a>
                          </Link>
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
  );
}
