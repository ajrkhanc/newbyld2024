import Head from "next/head";
import SpeakerCard from "../../components/SpeakerseriesCard/SpeakerCard";
export default function Speakers() {
  return (
    <>
      <Head>
        <title>
          Leadership Skills Workshops & Training | Leadership Development
          Workshops by BYLD
        </title>
        <link rel="canonical" href="https://byldgroup.com/workshops" />
        <meta
          name="description"
          content="Enhance your team’s capabilities with BYLD’s leadership skills workshops. Our leadership skills training workshops and development programs empower leaders to drive performance, collaboration, and growth."
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/homemodule.css"
        />
      </Head>

      <div className="rs-breadcrumbs speakersbg">
        <div className="container">
          <div className="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
            <ul>
              <li>
                <a href="/">
                  <span>Home</span>
                </a>
                <span className="separator">/</span>
              </li>
              <li>
                <a href="/Speakers">
                  <span>Speakers Series</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="breadcrumbs-inner">
                <h1 className="page-title wow fadeInUp delay-0-2s animated animateUP">
                  Speakers Series - BYLD Group
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SpeakerCard></SpeakerCard>
    </>
  );
}
