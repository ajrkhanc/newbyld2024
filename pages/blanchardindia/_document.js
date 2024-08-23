import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="facebook-domain-verification" content="aequc18jzotzx1fcbz3rfx06pu7tzz" />
          <link rel="shortcut icon" href="/kbassets/img/favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="/kbassets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/kbassets/fonts/flaticon.css" />
          <link rel="stylesheet" href="/kbassets/css/meanmenu.css" />
          <link rel="stylesheet" href="/kbassets/css/boxicons.min.css" />
          <link rel="stylesheet" href="/kbassets/css/nice-select.min.css" />
          <link rel="stylesheet" href="/kbassets/css/style.css" />
          <link rel="stylesheet" href="/kbassets/css/responsive.css" />
          <link rel="stylesheet" href="/kbassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z1T5CNVYDT"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Z1T5CNVYDT'); 
                `,
            }}
          />


          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-26893767-1"></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-26893767-1');
          `,
            }}
          />




          {/* Global site tag (gtag.js) - Google Ads: 370688250 */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-370688250"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-370688250');`,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="https://v2.zopim.com/?1H9zQ0Y1HchN8fWyjU9CO4zfNgoQjP7F";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
          `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
               window.__lo_site_id = 314174;
                (function() {
                var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
                wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
                })();
          `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "Blanchard Research & Training India",
                "alternateName": "Blanchard India",
                "url": "https://blanchardinternational.co.in/",
                "logo": "https://blanchardinternational.co.in/assets/img/kblogo.png",
                "sameAs": [
                  "https://www.facebook.com/blanchardresearchandtrainingindia",
                  "https://twitter.com/Blanchard_India",
                  "https://www.instagram.com/blanchard_research_india/",
                  "https://www.youtube.com/@BlanchardInternationalIndia",
                  "https://www.linkedin.com/company/blanchard-research-and-training-india/",
                  "https://in.pinterest.com/blanchardind/",
                  "https://soundcloud.com/user-515979600",
                  "https://www.tumblr.com/blanchardindia",
                  "https://en.wikipedia.org/w/index.php?title=Special:Homepage&source=personaltoolslink&namespace=-1",
                  "https://github.com/blanchardinternationalindia",
                  "https://blanchardinternational.co.in/"
                ]
              }
          `,
            }}
          />


        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/kbassets/js/jquery.min.js"></script>
          <script src="/kbassets/js/meanmenu.js"></script>
          <script src="/kbassets/js/custom.js"></script>


          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.addEventListener('load', function() {
                if (document.referrer.indexOf('https://blanchardinternational.co.in/events-workshops/program-experience-webinar') != -1 && window.location.pathname == '/thank-you-lp') {
                  gtag('event', 'conversion', {'send_to': 'AW-370688250/dx4gCOeRmtMDEPqB4bAB'});
                }
              });
          `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument