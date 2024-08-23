import Layout from '../components/Layout/Layout';
import CL from '../components/CL/Layout';
import ED from '../components/ED/Layout';
import FiveB from '../components/FiveB/Layout';
import Wiley from '../components/Wiley/Layout';
import Eaglesflightindia from '../components/Eaglesflightindia/Layout';
import EFLPNEW from '../components/EFLPNEW/Layout';
import Hhf from '../components/Hhf/Layout';
import COS from '../components/cos/Layout'
import COSR from '../components/cosresult/Layout'
import CoachingA from '../components/CoachingA/Layout'
import YogeshSood from '../components/YogeshSood/Layout'
import Leaderbehaviourassessment from '../components/leaderbehaviourassessment/Layout'
import Jensons8urvey from '../components/jenson-8-survey/Layout'
import BYLDNEW from '../components/byld-new/Layout'
import Experientiallearning from '../components/experiential-learning/Layout'
import Jenson8 from '../components/jenson8/Layout'
import Assessments from '../components/Assessments/Layout'
import Bespoke from '../components/Bespoke/Layout'
import Coachinghead from '../components/Coachingheadc/Layout'
import ICFC from '../components/icf/Layout'
import PersonaGlobal from '../components/personaglobal/Layout'
import Coachingheadlp from '../components/Coachingheadclp/Layout'
import DTCIASSESSMENT from '../components/dtciassessment/Layout'

import Kblayout from '../components/kb/Layout/Layout'


import { useRouter } from "next/router";




// import Hhf from '../components/Hhf/Layout';



import Head from 'next/head'
import Script from 'next/script'
import App from 'next/app'

export default function MyApp({ Component, pageProps, router }) {

  if (router.pathname.startsWith('/cruciallifechangingskills')) {

    return (
      <CL>
        <Head>
          <title>Crucial Life-Changing Skills | Our Solutions | BYLD Group</title>
          <meta name="description" content="We offer the best communication courses for leaders to ensure effective business communication through Influence skills training. To know more, check out the page." />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" type="text/css" href="/classets/css/bootstrap.min.css"/>
          <script src="https://unpkg.com/phosphor-icons"></script>
          <link rel="stylesheet" href="/classets/css/style.css" />
          <link rel="shortcut icon" href="/classets/favicon.png" type="image/x-icon" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-CYF0M71008"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CYF0M71008');
          `,
            }}
          />

             <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

           

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-25012511-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-25012511-1');
                `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "Crucial Life-Changing Skills",
                "alternateName": "Crucial Learning",
                "url": "https://byldgroup.com/cruciallifechangingskills",
                "logo": "https://byldgroup.com/classets/img/cruciallifechangingskills-logo.svg",
                "sameAs": [
                  "https://www.facebook.com/Cruciallifechangingskills",
                  "https://twitter.com/crucial__skills",
                  "https://www.instagram.com/cruciallifechangingskills/",
                  "https://www.youtube.com/@CrucialLifeChangingSkills",
                  "https://www.linkedin.com/company/crucial-life-changing-skills/",
                  "https://in.pinterest.com/cruciallearningmail/",
                  "https://soundcloud.com/user-927726372-657474651",
                  "https://www.tumblr.com/cruciallifechangingskills",
                  "https://en.wikipedia.org/w/index.php?title=Special:Homepage&source=personaltoolslink&namespace=-1",
                  "https://github.com/cruciallearning",
                  "https://byldgroup.com/cruciallifechangingskills"
                ]
              }
            `,
            }}
          />

        </Head>
        <Component {...pageProps} />
      </CL>
    )
  }


  else if (router.pathname.startsWith('/fivebehaviors')) {

    return (
      <FiveB>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/5bassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/5bassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/5bassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/5bassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/5bassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205275343-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-205275343-1');
                `,
            }}
          />
              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-3EZ957QPRY"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3EZ957QPRY');
                `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "The Five Behaviors",
                "url": "https://byldgroup.com/fivebehaviors",
                "logo": "https://byldgroup.com/5bassets/img/fbpng.png",
                "sameAs": [
                  "https://www.facebook.com/AssessmentsandSignaturePrograms",
                  "https://twitter.com/ByldAssessments",
                  "https://www.instagram.com/byld_assessments/",
                  "https://www.youtube.com/@BYLDassessments",
                  "https://www.linkedin.com/company/byld-assessments-signature-programs/",
                  "https://in.pinterest.com/wileyassessment/everything-disc/",
                  "https://soundcloud.com/wiley-assessment",
                  "https://www.tumblr.com/wileyed5b",
                  "https://en.wikipedia.org/w/index.php?title=Special:Homepage&source=personaltoolslink&namespace=-1",
                  "https://github.com/wileyassessments",
                  "https://byldgroup.com/fivebehaviors"
                ]
              }
            `,
            }}
          />

        </Head>
        <Component {...pageProps} />
      </FiveB>
    )

  }

  else if (router.pathname.startsWith('/everythingdisc')) {

    return (
      <ED>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/edassets/favicon.png" />
          <link rel="stylesheet" type="text/css" href="/edassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/edassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/edassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/edassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/edassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-P9GPQ8EC4C"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P9GPQ8EC4C'); 
                `,
            }}
          />
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11220859115"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11220859115');
          `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "Everything DiSC",
                "url": "https://byldgroup.com/everythingdisc",
                "logo": "https://byldgroup.com/edassets/img/ed-lg.png",
                "sameAs": [
                  "https://www.facebook.com/AssessmentsandSignaturePrograms",
                  "https://twitter.com/ByldAssessments",
                  "https://www.instagram.com/byld_assessments/",
                  "https://www.youtube.com/@BYLDassessments",
                  "https://www.linkedin.com/company/byld-assessments-signature-programs/",
                  "https://in.pinterest.com/wileyassessment/everything-disc/",
                  "https://soundcloud.com/wiley-assessment",
                  "https://www.tumblr.com/wileyed5b",
                  "https://en.wikipedia.org/w/index.php?title=Special:Homepage&source=personaltoolslink&namespace=-1",
                  "https://github.com/wileyassessments",
                  "https://byldgroup.com/everythingdisc"
                ]
              }
                `,
            }}
          />

        </Head>
        <Component {...pageProps} />
      </ED>
    )

  }

  else if (router.pathname.startsWith('/wiley')) {

    return (
      <Wiley>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/wileyassets/favicon.png" />


          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/wileyassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/wileyassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
         
        <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
      <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>
        </Head>

        <Component {...pageProps} />
      </Wiley>
    )

  }

  else if (router.pathname.startsWith('/eaglesflightindia/byomkesh-bakshi')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/feluda')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/jagga-jasoos')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/karamchand')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/kkw')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

        <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/ms-marple')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
        <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/museum-caper-4')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
        <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/museum-caper-5')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
        <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/mcw')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
        <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/promotional-lp')) {

    return (
      <EFLPNEW>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />


          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205257587-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-205257587-1');
                `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-R93RP8FMVC"></script>
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

          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>
        </Head>

        <Component {...pageProps} />
      </EFLPNEW>
    )

  }



  else if (router.pathname.startsWith('/eaglesflightindia')) {

    return (
      <Eaglesflightindia>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />
        


          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205257587-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-205257587-1');
                `,
            }}
          />

        <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-R93RP8FMVC"></script>
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

<script async src="https://www.googletagmanager.com/gtag/js?id=G-R93RP8FMVC"></script>
         
             <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ' G-R93RP8FMVC');
                `,
            }}
          />
            
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "Eagle's Flight India",
                "url": "https://byldgroup.com/eaglesflightindia",
                "logo": "https://www.eaglesflight.com/asia/wp-content/uploads/2021/09/cropped-EAGLES-FLIGHT-LOGO_WITHOUT_2-1.jpeg",
                "sameAs": [
                  "https://www.facebook.com/BYLDExperientialLearning",
                  "https://twitter.com/ByldLearnings",
                  "https://www.instagram.com/byld_experientiallearning/",
                  "https://www.youtube.com/@BYLDexperientiallearning",
                  "https://www.linkedin.com/company/byld-experiential-learning/",
                  "https://in.pinterest.com/eaglesflighti/",
                  "https://soundcloud.com/eaglesflight-india",
                  "https://www.tumblr.com/eagle-flights-india",
                  "https://en.wikipedia.org/w/index.php?title=Special:Homepage&source=personaltoolslink&namespace=-1",
                  "https://github.com/eaglesflightindia",
                  "https://byldgroup.com/eaglesflightindia"
                ]
              }
            `,
            }}
          />
        </Head>
  
        <Component {...pageProps} />
      </Eaglesflightindia>
    )

  }

  else if (router.pathname.startsWith('/coaching/become-a-professional-coach-assessment-m')) {

    return (
      <CoachingA>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </CoachingA>
    )

  }

  else if (router.pathname.startsWith('/coaching/become-a-professional-coach-pre-program-assessment-s')) {

    return (
      <CoachingA>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </CoachingA>
    )

  }


  else if (router.pathname.startsWith('/coaching/coaching-snapshot-pre-program-assessment-s/')) {

    return (
      <COSR>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </COSR>
    )

  }
  else if (router.pathname.startsWith('/coaching/coaching-snapshot-pre-program-assessment-s')) {

    return (
      <CoachingA>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </CoachingA>
    )

  }



  else if (router.pathname.startsWith('/coaching/coaching-snapshot-assessment-m/')) {

    return (
      <COSR>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </COSR>
    )

  }

  else if (router.pathname.startsWith('/coaching/coaching-snapshot-assessment-m')) {

    return (
      <COS>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </COS>
    )

  }

  else if (router.pathname.startsWith('/eq/eq-assessment1/')) {

    return (
      <DTCIASSESSMENT>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </DTCIASSESSMENT>
    )

  }
  else if (router.pathname.startsWith('/eq/eq-assessment2/')) {

    return (
      <DTCIASSESSMENT>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </DTCIASSESSMENT>
    )

  }

  else if (router.pathname.startsWith('/eq/eq-assessments/')) {

    return (
      <DTCIASSESSMENT>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>

        <Component {...pageProps} />
      </DTCIASSESSMENT>
    )

  }

  else if (router.pathname.startsWith('/erf/erf-assessment/')) {

    return (
      <DTCIASSESSMENT>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </DTCIASSESSMENT>
    )

  }


  else if (router.pathname.startsWith('/yogesh-sood')) {

    return (
      <YogeshSood>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/yogesh.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-5PXTTR960E');
        `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </YogeshSood>
    )

  }

  else if (router.pathname.startsWith('/leader-behaviour-assessment-s/')) {

    return (
      <COSR>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </COSR>
    )

  }

  else if (router.pathname.startsWith('/leader-behaviour-assessment-s-s')) {

    return (
      <Leaderbehaviourassessment>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/head.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}

        <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </Leaderbehaviourassessment>
    )

  }
  else if (router.pathname.startsWith('/leader-behaviour-assessment-s')) {

    return (
      <Leaderbehaviourassessment>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/head.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>

        <Component {...pageProps} />
      </Leaderbehaviourassessment>
    )

  }

  else if (router.pathname.startsWith('/jenson-8/jenson-8-survey-marketing')) {

    return (
      <Jensons8urvey>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/head.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}

        <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </Jensons8urvey>
    )

  }

  else if (router.pathname.startsWith('/jenson-8/jenson-8-survey-sales')) {

    return (
      <Jensons8urvey>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/head.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>

        <Component {...pageProps} />
      </Jensons8urvey>
    )

  }

  else if (router.pathname.startsWith('/jenson-8')) {

    return (
      <Jenson8>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

             <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>

        <Component {...pageProps} />
      </Jenson8>
    )

  }


  else if (router.pathname.startsWith('/leader-behaviour-assessment-m')) {

    return (
      <Leaderbehaviourassessment>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/head.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>

        <Component {...pageProps} />
      </Leaderbehaviourassessment>
    )

  }


  else if (router.pathname.startsWith('/byld-new')) {

    return (
      <BYLDNEW>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </BYLDNEW>
    )

  }


  else if (router.pathname.startsWith('/our-solutions/experiential-learning')) {

    return (
      <Experientiallearning>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </Experientiallearning>
    )

  }

  else if (router.pathname.startsWith('/our-solutions/assessments')) {

    return (
      <Assessments>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </Assessments>
    )

  }

  else if (router.pathname.startsWith('/assessments')) {

    return (
      <Assessments>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </Assessments>
    )

  }

  else if (router.pathname.startsWith('/our-solutions/coaching')) {

    return (
      <Coachinghead>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>


          <script async src="https://www.googletagmanager.com/gtag/js?id=G-P9GPQ8EC4C"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P9GPQ8EC4C');
          `,
            }}
          />

        </Head>
        <Component {...pageProps} />
      </Coachinghead>
    )

  }

  else if (router.pathname.startsWith('/coaching/become-a-coach')) {

    return (
      <ICFC>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-P9GPQ8EC4C"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P9GPQ8EC4C');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </ICFC>
    )

  }

  else if (router.pathname.startsWith('/coaching')) {

    return (
      <Coachinghead>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-P9GPQ8EC4C"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P9GPQ8EC4C');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Coachinghead>
    )

  }

 else if (router.pathname.startsWith('/bespoke')) {

    return (
      <Bespoke>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          

          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>
          
        </Head>
        <Component {...pageProps} />
      </Bespoke>
    )

  }

  else if (router.pathname.startsWith('/bespoke/persona-global')) {

    return (
      <PersonaGlobal>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          

          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>
          
        </Head>
        <Component {...pageProps} />
      </PersonaGlobal>
    )

  }


  else if (router.pathname.startsWith('/icf-new')) {

    return (
      <Coachingheadlp>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </Coachingheadlp>
    )

  }



  else if (router.pathname.startsWith('/blanchardindia')) {


  const router = useRouter();
  const canonicalUrl = (`https://blog.byldgroup.com` + (router.asPath === "/blanchardindia/" ? "": router.asPath)).split("?")[0];

    return (
      <Kblayout>
        <Head>
        {/* <link rel="canonical" href={canonicalUrl} /> */}
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" href="/kbassets/favicon.ico" />
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
          <link rel="stylesheet" href="/kbassets/css/newkb.css" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Playfair+Display:wght@600&display=swap" rel="stylesheet" />
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
  <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
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
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
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
         {/* <script src="/assets/js/meanmenu.js"></script> */}
          <script src="/assets/js/custom.js"></script>


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

        </Head>
        <Component {...pageProps} />

      </Kblayout>
    )

  }




  else {

    const router = useRouter();
  const canonicalUrl = (`https://blog.byldgroup.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

    return (
      <Layout>
        <Head>
             {/*   <link rel="canonical" href={canonicalUrl} />  */}
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

              <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF8WJWJ');
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "BYLD Group",
                "url": "https://byldgroup.com/",
                "logo": "https://byldgroup.com/assets/img/byld-logo.svg",
                "sameAs": [
                  "https://www.facebook.com/BYLDGroup",
                  "https://twitter.com/BYLDGroup",
                  "https://www.instagram.com/byld_group/",
                  "https://www.youtube.com/@BYLDgroup",
                  "https://www.linkedin.com/company/byld-group/",
                  "https://in.pinterest.com/byldgroupindia/",
                  "https://soundcloud.com/byld-group",
                  "https://www.tumblr.com/byldgroup",
                  "https://github.com/byldgroup",
                  "https://byldgroup.com/"
                ]
              }
            `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    )

  }

}
