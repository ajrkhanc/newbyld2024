import Link from "next/link";
import Head from "next/head";

export default function ThanYouLP() {
    return (
        <>
        <Head>
        <title>Thank You LP - Blanchard International</title>
        <meta name="description" content="Like us on FACEBOOK @blanchardresearchandtrainingindia Connect with us on LINKEDIN Blanchard Research and Training India Follow us on TWITTER @Blanchard_India A confirmation email will be sent to your email. In case you do not find it in your inbox, check your SPAM folder to access the same."/>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-370688250"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-370688250');
          `,
            }}
          />
        </Head>           
            <div className="terms-area pb-70">
                <div className="container">            
                    <div className="row pt-45">
                    <div className="col-lg-12">
                        <img src="/kbassets/img/thank-you-lp.jpg"/>
                    </div>                     
                    </div>
                </div>
            </div>
 
        </>
    )
}