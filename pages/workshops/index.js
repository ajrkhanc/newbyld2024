import Head from "next/head";
import WorkshopCard from "../../components/workshop-card/WorkshopCard";

export default function Workshops() {
  return (
    <>
      <Head>
        <title>Workshops - BYLD Group</title>
        <link rel="canonical" href="https://byldgroup.com/workshops" />
        <meta
          name="description"
          content="workshop"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/homemodule.css"
        />
      </Head>

      <div className="rs-breadcrumbs workshopsbg">
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
                <a href="/workshops">
                  <span>Workshops</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="breadcrumbs-inner">
                <h1 className="page-title wow fadeInUp delay-0-2s animated animateUP">
                  Workshops - BYLD Group
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
     <WorkshopCard></WorkshopCard>
    </>
  );
}