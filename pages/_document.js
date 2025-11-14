import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.__lo_site_id = 308922;

          (function() {
          var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
          wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
          })();
          `,
            }}
          />

          {/* --------------------- GTM HEAD SCRIPT --------------------- */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MVVDGGSD');
              `,
            }}
          />
          {/* ------------------- END GTM HEAD SCRIPT ------------------ */}
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/favicon.ico" as="image" />
          <meta
            name="google-site-verification"
            content="OM6hSC8XO4ylFInFKwcHaWp5gFMt0Nn6aQ6A-eV7SWc"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/assets/js/jquery.min.js" defer></script>
          <script src="/assets/js/owl.carousel.min.js" defer></script>
          <script src="/assets/js/wow.js" defer></script>
          <script src="/assets/js/main.js" defer></script>
          <script src="/classets/js/script.js" defer></script>
          <script src="/kbassets/js/meanmenu.js" defer></script>
          <script
            src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"
            defer
          ></script>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-R93RP8FMVC"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-R93RP8FMVC');
                `,
            }}
          />

          {/* Start of HubSpot Embed Code */}
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/48649180.js"
          ></script>
          {/* End of HubSpot Embed Code  */}
          {/* ------------------- GTM NOSCRIPT (BODY TOP) ------------------- */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MVVDGGSD"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* ------------------- END GTM NOSCRIPT -------------------------- */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
