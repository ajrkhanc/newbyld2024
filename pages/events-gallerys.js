import Head from "next/head";

export default function EventsGallerys() {
  return (
    <>
      <Head>
        <title>Events Gallerys - BYLD Group</title>
        <link rel="canonical" href="https://byldgroup.com/events-gallery" />
        <meta
          name="description"
          content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/homemodule.css"
        />
      </Head>

      <div class="rs-breadcrumbs eventsbg">
        <div class="container">
          <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
            <ul>
              <li>
                <a href="/">
                  <span>Home</span>
                </a>
                <span class="separator">/</span>
              </li>
              <li>
                <a href="/events-gallery">
                  <span>Events</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div class="breadcrumbs-inner">
                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                  Events
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Gallery</h1>
    </>
  );
}
