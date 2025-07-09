import Head from "next/dist/shared/lib/head";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You Lp - BYLD Group</title>
        <meta
          name="description"
          content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WF8WJWJ"
          height="0"
          width="0"
          style={{ display: "none" }}
        ></iframe>
      </noscript>

      <div className="rs-services ">
        <div className="container-fluid" style={{ padding: "0" }}>
          <div className="row y-middle">
            <div className="col-lg-6">
              <img
                className="img100"
                src="/assets/img/thankYouLeftSideImg.png"
              />
            </div>
            <div className="col-lg-6">
              <div className="thankyouRightSide">
                <img
                  className="thankyouRightSideImg"
                  src="/assets/img/thankYouRightSideImg.png"
                />
                <div className="thankyouRightSideInner">
                  <p className="mt-0 mb-0" style={{ color: "#FF5200" }}>
                    We have received your details and our representative shall
                    get back in 24 working hours
                  </p>
                  <p className="mt-2">
                    Meanwhile, don&rsquo;t forget to follow us on Facebook,
                    LinkedIn, and Twitter for more updates.
                  </p>
                  <div
                    className="socialIcons"
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <a
                      href="https://www.facebook.com/BYLDGroup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/assets/img/facebook.png" alt="Facebook" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/byld-group/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/assets/img/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a
                      href="https://twitter.com/BYLDGroup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/assets/img/twitter.png" alt="Twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container pbb-40">
                <div className="row">
                    <div className="col-md-4">
                        <a href="https://www.facebook.com/BYLDGroup" target="_blank">
                          <div className="innerboxthankyou">
                            <i className="fa fa-facebook"></i>
                            <h4>Like us on FACEBOOK</h4>
                            <h5>@BYLDGroup</h5>
                          </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://www.linkedin.com/company/byld-group/" target="_blank">
                            <div className="innerboxthankyou">
                                <i className="fa fa-linkedin"></i>
                                <h4>Connect with us on LINKEDIN</h4>
                                <h5>BYLD Group</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://twitter.com/BYLDGroup" target="_blank">
                            <div className="innerboxthankyou">
                                <i className="fa fa-twitter"></i>
                                <h4>Follow us on TWITTER</h4>
                                <h5>@BYLDGroup</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div> */}
    </>
  );
}
