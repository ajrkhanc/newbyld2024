import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
  return (
    <>
      <Head>
        <title>Podcast - Love + Work with Marcus Buckingham</title>
    <link rel="canonical" href="https://byldgroup.com/blanchardindia/podcast/bestofSeries-FearlessLeadershipwithCareyLohrenz" />
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
                        Best of Series-Fearless Leadership with Carey Lohrenz
                      </h3>
                      <iframe
                        allowfullscreen=""
                        height="192"
                        mozallowfullscreen="true"
                        msallowfullscreen="true"
                        oallowfullscreen="true"
                        scrolling="no"
                        src="https://html5-player.libsyn.com/embed/episode/id/17070614/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/59a3d4/"
                        title="Embed Player"
                        webkitallowfullscreen="true"
                        width="100%"
                      ></iframe>
                      <div>
                        <p>
                          In this exciting episode, you’ll hear how aviation
                          pioneer Carey D. Lohrenz learned what Fearless
                          Leadership means in two of the most demanding and
                          extreme environments imaginable: the cockpit of an
                          F-14 and the flight deck of an aircraft carrier.
                          Through her experiences, Lohrenz identified a
                          fundamental truth: high performing teams require
                          fearless leaders.
                        </p>
                        <p>
                          “Fearless leadership isn’t about not feeling fear.
                          It’s having the ability to feel uncomfortable and to
                          move through it and show up to be the best you can
                          be,” explains Lohrenz. Hear her describe the
                          fundamentals of Fearless Leadership:
                        </p>
                        <p>
                          <b>Courage:</b> If you cultivate courage in yourself,
                          you’ll have what it takes to see limitless
                          possibilities for yourself as a leader.
                        </p>
                        <p>
                          <b>Tenacity:</b> Embracing the persistence it takes to
                          keep going after a goal—even when it becomes difficult
                          or risky—and continuing to take action.
                        </p>
                        <p>
                          <b>Integrity:</b> Do the right thing, be honest, be
                          trustworthy, and lead by example.
                        </p>
                        <p>
                          Lohrenz also describes how to put Fearless Leadership
                          into action by first setting a clear vision, then
                          being the catalyst for moving your team toward that
                          vision by creating the culture to support it. She also
                          illustrates the importance of being resilient as a
                          leader and describes the seven steps you can take to
                          become more resilient:
                        </p>
                        <p>Reject victimhood</p>
                        <p>Embrace change</p>
                        <p>Focus on what matters</p>
                        <p>Find a wingman</p>
                        <p>Know what you can control</p>
                        <p>Learn from adversity</p>
                        <p>Take action</p>
                        <p>
                          “Above all, Fearless Leadership is the difference
                          between having the life, team, culture, and
                          organization that you want, and settling,” says
                          Lohrenz.
                        </p>
                        <p>
                          So risk more, worry less, and take action—because
                          bold, fearless action drives success. For more
                          information about Carey Lohrenz,visit{" "}
                          <a
                            target="_blank"
                            href="https://www.Careylohrenz.com"
                          >
                            {" "}
                            www.Careylohrenz.com
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
