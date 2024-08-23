import Head from "next/dist/shared/lib/head"

export default function ThankYou(){
    return(
        <>
        <Head>
            <title>Thank You Lp - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-876781539"></script>
            {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-876781539');
          `,
            }}
          /> */}
          </Head>
          <div className="rs-services  ptt-40 pbb-40">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/thank-you-page.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div className="container pbb-40">
                <div className="row">
                    <div className="col-md-4">
                        <a href="https://www.facebook.com/Cruciallifechangingskills" target="_blank">
                          <div className="innerboxthankyou">
                            <i className="fa fa-facebook"></i>
                            <h4>Like us on FACEBOOK</h4>
                            <h5>@Cruciallifechangingskills</h5>
                          </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://www.linkedin.com/company/crucial-life-changing-skills/" target="_blank">
                            <div className="innerboxthankyou">
                                <i className="fa fa-linkedin"></i>
                                <h4>Connect with us on LINKEDIN</h4>
                                <h5>Crucial Life Changing Skills</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://twitter.com/crucial__skills" target="_blank">
                            <div className="innerboxthankyou">
                                <i className="fa fa-twitter"></i>
                                <h4>Follow us on TWITTER</h4>
                                <h5>@crucial__skills</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}