

module.exports = {
  reactStrictMode: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

    async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },

          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:"
          },
           {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
        
        
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/coaching/become-a-professional-coach',
        destination: '/coaching/become-a-professional-coach-marketing',
        permanent: true,
      },
       {
        source: '/coaching/become-a-coach',
        destination: 'https://byldcoaching.co.in/become-a-coach-icf-certification',
        permanent: true,
      },
     {
        source: '/our-solutions/coaching',
        destination: 'https://byldcoaching.co.in',
        permanent: true,
      },
      {
        source: '/coaching/breakthroughs',
        destination: 'https://byldcoaching.co.in/breakthroughs',
        permanent: true,
      },
           {
        source: '/coach-certification-lp',
        destination: '/404',
        permanent: true,
      },
        {
        source: '/coaching/dtci-coaching-academy',
        destination: '/404',
        permanent: true,
      },
       {
        source: '/dtci',
        destination: '/404',
        permanent: true,
      },
        {
        source: '/who-we-are',
        destination: '/404',
        permanent: true,
      },
        {
        source: '/inside-out-coaching-lp',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/coaching/become-a-professional-coach-marketing',
        destination: '/coaching/become-a-professional-coach-assessment-m',
        permanent: true,
      },

      {
        source: '/coaching/become-a-professional-coach-pre-program-assessment',
        destination: '/coaching/become-a-professional-coach-pre-program-assessment-s',
        permanent: true,
      },
      {
        source: '/coaching/insideout-coaching',
        destination: 'https://byldcoaching.co.in/insideout-coaching',
        permanent: true,
      },
        {
        source: '/coaching/executive-coaching',
        destination: 'https://byldcoaching.co.in/executive-coaching/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/assessment/gtd-assessment',
        destination: '/cruciallifechangingskills/assessment/gtd-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/influencer-assessment',
        destination: '/cruciallifechangingskills/assessment/influencer-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment',
        destination: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/what-would-you-do-assessment',
        destination: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/gtd-assessment-marketing',
        destination: '/cruciallifechangingskills/assessment/gtd-assessment-m',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/gtd-assessment-sales',
        destination: '/cruciallifechangingskills/assessment/gtd-assessment-s',
        permanent: true,
      },



      {
        source: '/cruciallifechangingskills/assessment/influencer-assessment-marketing',
        destination: '/cruciallifechangingskills/assessment/influencer-assessment-m',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/influencer-assessment-sales',
        destination: '/cruciallifechangingskills/assessment/influencer-assessment-s',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-marketing',
        destination: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-m',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-sales',
        destination: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-s',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-marketing',
        destination: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-m',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-sales',
        destination: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-s',
        permanent: true,
      },


















      {
        source: '/jenson-8/jenson-8-survey',
        destination: '/jenson-8/jenson-8-survey-marketing',
        permanent: true,
      },

      {
        source: '/leader-behaviour-assessment',
        destination: '/leader-behaviour-assessment-marketing',
        permanent: true,
      },

      {
        source: '/leader-behaviour-assessment2',
        destination: '/leader-behaviour-assessment-sales',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot',
        destination: '/coaching/coaching-snapshot-marketing',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot-marketing',
        destination: '/coaching/coaching-snapshot-assessment-m',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot-marketing/:slug',
        destination: '/coaching/coaching-snapshot-assessment-m/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },


      {
        source: '/coaching/coaching-snapshot-internal-assessment',
        destination: '/coaching/coaching-snapshot-sales',
        permanent: true,
      },

      {
        source: '/coaching/become-a-professional-coach-sales',
        destination: '/coaching/become-a-professional-coach-pre-program-assessment',
        permanent: true,
      },

      {
        source: '/coaching/become-a-professional-coach-pre-program-assessment',
        destination: '/coaching/become-a-professional-coach-pre-program-assessment-s',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot-pre-program-assessment',
        destination: '/coaching/coaching-snapshot-pre-program-assessment-s',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot-pre-program-assessment/:slug',
        destination: '/coaching/coaching-snapshot-pre-program-assessment-s/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },

      {
        source: '/cp/cp-marketing',
        destination: '/cp-assessment-m',
        permanent: true,
      },

      {
        source: '/jenson-8/jenson-8-survey-marketing',
        destination: '/jenson-8/jenson-8-survey-assessment-m',
        permanent: true,
      },

      {
        source: '/jenson-8/jenson-8-survey-sales',
        destination: '/jenson-8/jenson-8-survey-assessment-s',
        permanent: true,
      },


      {
        source: '/leader-behaviour-assessment-marketing',
        destination: '/leader-behaviour-assessment-m',
        permanent: true,
      },
      {
        source: '/leader-behaviour-assessment-sales',
        destination: '/leader-behaviour-assessment-s',
        permanent: true,
      },
      {
        source: '/leader-behaviour-assessment-self-sales',
        destination: '/leader-behaviour-assessment-s-s',
        permanent: true,
      },

      {
        source: '/eaglesflightindia/promotional-lp',
        destination: '/eaglesflightindia/lp',
        permanent: true,
      },






      {
        source: '/benefits-of-coaching-and-mentoring-in-the-gig-economy',
        destination: 'https://blog.byldgroup.com/benefits-of-coaching-and-mentoring-in-the-gig-economy/',
        permanent: true,
      },

      {
        source: '/the-7-senses-of-self-development',
        destination: 'https://blog.byldgroup.com/the-7-senses-of-self-development/',
        permanent: true,
      },

      {
        source: '/how-personality-assessment-improves-safety-at-work',
        destination: 'https://blog.byldgroup.com/how-personality-assessment-improves-safety-at-work/',
        permanent: true,
      },

      {
        source: '/business-simulation-games-5-tips-on-how-they-help-you-prepare',
        destination: 'https://blog.byldgroup.com/business-simulation-games-5-tips-on-how-they-help-you-prepare/',
        permanent: true,
      },

      {
        source: '/why-the-american-red-cross-chose-insideout-coaching-virtual-',
        destination: 'https://blog.byldgroup.com/why-the-american-red-cross-chose-insideout-coaching-virtual/',
        permanent: true,
      },

      {
        source: '/build-your-resilience-in-the-face-of-a-crisis',
        destination: 'https://blog.byldgroup.com/build-your-resilience-in-the-face-of-a-crisis/',
        permanent: true,
      },

      {
        source: '/virtual-meetings-dont-have-to-be-a-bore',
        destination: 'https://blog.byldgroup.com/virtual-meetings-dont-have-to-be-a-bore/',
        permanent: true,
      },

      {
        source: '/learn-to-have-a-clear-vision-to-sustain-in-the-postcovid19-environment',
        destination: 'https://blog.byldgroup.com/learn-to-have-a-clear-vision-to-sustain-in-the-post-covid19-environment/',
        permanent: true,
      },

      {
        source: '/train-the-trainer-training-is-it-mandatory',
        destination: 'https://blog.byldgroup.com/train-the-trainer-training-is-it-mandatory',
        permanent: true,
      },

      {
        source: '/4-undeniable-assets-of-the-best-corporate-training-companies',
        destination: 'https://blog.byldgroup.com/4-undeniable-assets-of-the-best-corporate-training-companies/',
        permanent: true,
      },

      {
        source: '/corporate-training-companies--paving-the-way-to-a-better-future',
        destination: 'https://blog.byldgroup.com/corporate-training-companies-paving-the-way-to-a-better-future/',
        permanent: true,
      },

    

      {
        source: '/the-role-and-importance-of-motivation-in-an-organization',
        destination: 'https://blog.byldgroup.com/the-role-and-importance-of-motivation-in-an-organization/',
        permanent: true,
      },



      {
        source: '/leadership-training-for-women-in-2023-a-look-at-the-new-leaders',
        destination: 'https://blog.byldgroup.com/leadership-training-for-women-in-2023-a-look-at-the-new-leaders/',
        permanent: true,
      },

      {
        source: '/from-strength-to-strength-how-custom-leadership-solutions-uplift-individual-skills',
        destination: 'https://blog.byldgroup.com/from-strength-to-strength-how-custom-leadership-solutions-uplift-individual-skills',
        permanent: true,
      },

      {
        source: '/transformational-leadership-guiding-people-to-excellence-innovation-and-inspiration',
        destination: 'https://blog.byldgroup.com/transformational-leadership-guiding-people-to-excellence-innovation-and-inspiration',
        permanent: true,
      },


      {
        source: '/immersive-learning-implementation-best-practices-benefits',
        destination: 'https://blog.byldgroup.com/immersive-learning-implementation-best-practices-benefits-2/',
        permanent: true,
      },

      {
        source: '/unveiling-the-power-of-executive-coaching-for-your-organizational-growth-and-development',
        destination: 'https://blog.byldgroup.com/unveiling-the-power-of-executive-coaching-for-your-organizational-growth-and-development/',
        permanent: true,
      },

      {
        source: '/how-to-create-and-deliver-the-best-custom-employee-training-program',
        destination: 'https://blog.byldgroup.com/how-to-create-and-deliver-the-best-custom-employee-training-program/',
        permanent: true,
      },

      {
        source: '/blog',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-do-training-companies-help-in-providing-business-productivity-solutions',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/experiential-learning-through-business-simulations',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/why-organizational-culture-matters',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/factors-that-influence-assessment-outcomes',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/building-a-coaching-culture-starts-with-your-people-leaders',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

    
      {
        source: '/10-key-traits-of-a-gen-z-employee',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/a-guide-for-working-from-home-parents',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/not-making-the-best-out-of-your-virtual-meetings-probably-youre-missing-this',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/6-ways-to-talk-to-your-team-when-the-times-are-challenging',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/5-ways-to-answer-unanswerable-questions-effectively',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/ideas-to-maintain-a-great-company-culture-while-working-remotely',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/learn-5-qualities-of-a-great-leader-to-lead-the-change',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-to-prepare-teams-for-the-postpandemic-world',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/excellent-ideas-to-maintain-a-great-company-culture-while',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/secrets-behind-making-smart-decisions-in-the-time-of-uncertainty',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/importance-of-learning-to-keep-employee-morale-higher',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/what-is-the-importance-of-leadership-in-an-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/5-useful-ways-to-communicate-with-employees-during-a-crisis',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/5-effective-ways-to-be-an-inclusive-leader-during-a-crisis',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },


      {
        source: '/reasons-why-ld-is-vital-in-change-management-during-a-crisis',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-to-put-competency-based-training-to-work-for-your-company',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/the-importance-of-providing-support-to-a-remote-team',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

    

      {
        source: '/latest-training-trends-for-remote-workforce',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/importance-of-having-a-good-eq-in-an-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/managing-sales-team-during-virtual-times',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/the-post-covid19-future-of-facetoface-training',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/importance-of-selfcompassion-for-a-leader',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/ld-support-during-times-of-crisis',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/the-world-is-changing-and-so-should-your-ld-initiatives',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/difficult-to-find-human-connection-in-this-new-reality-read-on',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/corporate-training-is-the-new-wave-of-survival',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/leadership-development-program-in-india',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/corporate-training-a-necessity-for-the-future',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/executive-coaching-in-india',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/the-health-of-the-training-market-after-covid19',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/coaching-and-mentoring-for-an-adaptable-workforce',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/psychological-assessment-is-the-key-for-leadership-assessment',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/the-importance-of-early-leadership-coaching-in-succession-planning',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/need-for-assessment-learning',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/need-for-corporate-training-companies',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/never-underestimate-the-influence-of-corporate-training-companies',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/top-corporate-training-trends-to-look-for-in-2021',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/consultative-selling-is-a-great-way-to--increase-your-profit',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/five-quick-tips-to-mastering-customer-service-skills',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/organizational-development-a-necessity',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-coaching-and-mentoring-can-help-in-succeeding-amid-challenging-business-environment',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-can-coaching-certification-be-advantageous-for-your-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/leadership-training-the-effective-powerhouse-of-an-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/exploring-the-2021-learning-and-development-trends',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/train-the-trainer-program-leads-to-an-organizations-growth-but-how',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/5-perks-of-learning-and-development-for-modern-establishments',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/unable-to-lead-a-successful-change-involve-your-people',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/7-signs-you-have-a-toxic-workplace--and-how-to-fix-it',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

   
      {
        source: '/how-to-shift-employees-learning-mindset-from-must-do-to-want-to',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

   

      {
        source: '/best-corporate-training-companies',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/all-you-need-to-know-about-coaching-and-mentoring',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/6-learning-and-development-trends-in-2021-finding-opportunity-in-change',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/psychometric-assessment-provide-the-best-assessment-for-learning-to-enable-your-workforce',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-byld-helps-maximizing-business-and-employee-productivity',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/training-companies-can-make-assessment-for-learning-more-fruitful',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/psychological-assessment-pave-the-way-for-better-leadership-assessment',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/what-types-of-temporary-staffing-solutions-do-staffing-companies-provide',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/coaching-in-the-workplace-revolutionizes-organizational-development',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/revolutionize-coaching-and-mentoring-with-the-help-of-training-companies',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/best-business-productivity-solutions-provided-by-training-companies',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-does-assessment-for-learning-enhance-leadership-training',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/learn-how-psychometric-assessments-and-coaching-certifications-are-transforming-organizations',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-do-training-companies-help-in-providing-business-productivity-solutions-1659027661450',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/reasons-why-temporary-staffing-is-the-most-preferred-staffing-service',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/coaching-and-mentoring-upscale-massive-organizational-development',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-have-corporate-training-companies-utilized-elearning-portals',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/impact-of-elearning-portal-on--organizational-development',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-does-coaching-certification-facilitate-coaching-in-the-workplace',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

   

      {
        source: '/profitability-of-training-companies-providing-business-productivity-solutions',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/learn-the-importance-of-psychometric-assessments-in-your-learning-journey',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/leadership-management-courses-and-trainings-to-upskill-your-managers',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-to-choose-your-staffing-partner',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/learn-how-to-coach-your-people-the-right-way',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/optimizing-the-outcomes-of-corporate-leadership-development-program-a-framework-for-analyzing-the-understanding-and-transfer-of-leadership-mastery',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-psychometric-assessment-helps-in-creating-a-productive-workforce',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/make-corporate-learning-better-with-the-power-of-experiential-learning',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/how-elearning-portal-is-upskilling-employees-in-an-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

   
      {
        source: '/develop-leadership-skills-with-bylds-coaching-and-mentoring-certifications',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/the-gateway-for-employee-skill-development-online-elearning-portal',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/become-a-global-leader-with-byld-group',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

   

      {
        source: '/why-does-a-corporate-organization-need-a-leadership-management-course',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

   

    

      {
        source: '/facing-increasing-employee-resentment-heres-a-quick-guide-to-address-the-core-issues',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/leadership-development-training-boosts-job-performance-upto-20--a-quick-fact-check',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

    

   

      {
        source: '/soft-skills-training-yields-250-roi-in-factories-applicable-for-it-employees',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

    

    

      {
        source: '/the-corporate-leadership-training-market-yoy-growth-rate-in-2022-stands-at-787',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

     

      {
        source: '/training-and-development-to-combat-recession',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

    

  

      {
        source: '/a-roadmap-for-better-management',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/why-will-leaders-need-training-in-2023',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/great-companies-have-both-productivity-and-efficiency',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

    

      {
        source: '/combining-change-management-with-training-to-ensure-better-adjustment',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/best-business-productivity-solutions-in-2023',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/from-vuca-to-bani-understanding-the-changing-business-landscape',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/effective-use-of-humility-to-transform-into-a-mature-leader',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/getting-to-know-the-new-kid-on-the-block-chatgpt-the-fastestgrowing-app-of-all-time',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

 

      {
        source: '/learning-to-lead-through-the-turbulence-with-the-help-of-a-new-alternative-to-vuca',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/bare-minimum-monday-is-the-new-workplace-trend-you-need-to-know-about',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/ready-to-build-an-accountable-workforce-for-optimum-results-these-5-tips-might-help',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/conflict-resolution-or-conflict-management-the-skills-that-are-sought-after-today',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

     

      {
        source: '/improving-your-employees-time-management-skills-to-increase-performance',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/a-quick-guide-to-professional-coaching-and-all-you-need-to-know-in-2023',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

   
      {
        source: '/the-power-of-immersive-learning-on-workforce-productivity',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/an-overview-of-the-most-powerful-leadership-skill--empathy',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

    

      {
        source: '/7-detailed-ways-to-develop-worklife-integration-and-improve-employee-wellbeing',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/leadership-training-and-development-trends-to-follow-in-2023',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/decoding-the-top-hr-trends-in-2023-staffing-solutions-for-businesses',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/the-market-for-training-in-soft-skills-is-set-to-touch-66075-million-by-the-year-2030',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/being-an-effective-leader-impacts-employee-wellbeing-and-mental-health',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/unlocking-how-to-become-a-life-coach-to-influence-and-motivate-others',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/immersive-learning-your-solution-to-workplace-and-training-problems',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

    

      {
        source: '/setting-goals-together-with-leadership-development-are-the-pillars-of-long-time-success',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/pull-your-business-out-of-the-ordinary-standard-with-custom-ld-training-solutions',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/the-secret-sauce-how-custom-coaching-unlocks-hidden-potentials',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/harness-the-power-of-leadership-the-importance-of-leadership-building-for-your-employees',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      {
        source: '/unveiling-the-power-of-executive-coaching-for-your-organizational-growth-and-development',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },



      {
        source: '/blanchardindia/blog/the-best-leaders-serve-their-people-one-at-a-time',
        destination: 'https://blog.byldgroup.com/blanchardindia/the-best-leaders-serve-their-people-one-at-a-time',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/3-ways-senior-leaders-can-improve-customer-service-in-their-organizations',
        destination: 'https://blog.byldgroup.com/blanchardindia/3-ways-senior-leaders-can-improve-customer-service-in-their-organizations',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/4-keys-to-being-more-mindful-at-work-a-coaching-perspective',
        destination: 'https://blog.byldgroup.com/blanchardindia/4-keys-to-being-more-mindful-at-work-a-coaching-perspective',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/accelerate-learning-with-train-the-trainer-certification-in-india',
        destination: 'https://blog.byldgroup.com/blanchardindia/accelerate-learning-with-train-the-trainer-certification-in-india',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/how-to-experience-the-best-when-on-a-day-off',
        destination: 'https://blog.byldgroup.com/blanchardindia/how-to-experience-the-best-when-on-a-day-off',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/stepping-into-a-big-mess-as-a-new-manager-ask-madeleine',
        destination: 'https://blog.byldgroup.com/blanchardindia/stepping-into-a-big-mess-as-a-new-manager-ask-madeleine',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/importance-of-change-management-training-and-how-it-can-help-employees',
        destination: 'https://blog.byldgroup.com/blanchardindia/importance-of-change-management-training-and-how-it-can-help-employees',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/understand-the-benefits-of-corporate-training-for-your-organization',
        destination: 'https://blog.byldgroup.com/blanchardindia/understand-the-benefits-of-corporate-training-for-your-organization',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/87-of-the-times-wrong-leaders-are-preferred-find-the-right-ones-with-us',
        destination: 'https://blog.byldgroup.com/blanchardindia/87-of-the-times-wrong-leaders-are-preferred-find-the-right-ones-with-us',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/want-to-become-a-customercentric-culture-company-these-7-tips-might-help',
        destination: 'https://blog.byldgroup.com/blanchardindia/want-to-become-a-customer-centric-culture-company-these-7-tips-might-help/',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/how-to-be-a-better-manager-with-one-minute-manager',
        destination: 'https://blog.byldgroup.com/blanchardindia/how-to-be-a-better-manager-with-one-minute-manager',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/decode-the-5cs-for-making-an-inclusive-leader',
        destination: 'https://blog.byldgroup.com/blanchardindia/decode-the-5cs-for-making-an-inclusive-leader',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/7-tips-to-ensure-a-smooth-change-transition-in-your-organization',
        destination: 'https://blog.byldgroup.com/blanchardindia/7-tips-to-ensure-a-smooth-change-transition-in-your-organization',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/employee-turnover-has-cost-companies-more-than-49-billion-usd-per-year',
        destination: 'https://blog.byldgroup.com/blanchardindia/employee-turnover-has-cost-companies-more-than-49-billion-usd-per-year',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/self-determination-and-self-leadership-can-accelerate-your-performance',
        destination: 'https://blog.byldgroup.com/blanchardindia/self-determination-and-self-leadership-can-accelerate-your-performance',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/cultivating-future-leaders-the-indispensable-role-of-leadership-programs',
        destination: 'https://blog.byldgroup.com/blanchardindia/cultivating-future-leaders-the-indispensable-role-of-leadership-programs',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/transformational-leadership-inspiring-change-and-driving-innovation',
        destination: 'https://blog.byldgroup.com/blanchardindia/transformational-leadership-inspiring-change-and-driving-innovation',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/unveiling-the-distinction-leaders-vs-managers--navigating-roles-for-ultimate-success',
        destination: 'https://blog.byldgroup.com/blanchardindia/unveiling-the-distinction-leaders-vs-managers--navigating-roles-for-ultimate-success',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/empowering-from-within-how-leadership-development-programs-boost-employee-morale',
        destination: 'https://blog.byldgroup.com/blanchardindia/empowering-from-within-how-leadership-development-programs-boost-employee-morale',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/unveiling-the-spectrum-of-leadership-styles-navigating-the-landscape-of-effective-leadership',
        destination: 'https://blog.byldgroup.com/blanchardindia/unveiling-the-spectrum-of-leadership-styles-navigating-the-landscape-of-effective-leadership',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/objectives-of-employee-motivation-training-blanchard-india',
        destination: 'https://blog.byldgroup.com/blanchardindia/objectives-of-employee-motivation-training-blanchard-india',
        permanent: true,
      },
      {
        source: '/blanchardindia/blog/who-is-your-dronacharya-the-importance-of-mentorship-in-life',
        destination: 'https://blog.byldgroup.com/blanchardindia/who-is-your-dronacharya-the-importance-of-mentorship-in-life',
        permanent: true,
      },

      {
        source: '/blanchardindia/blog/:path*',
        destination: 'https://blog.byldgroup.com/blanchardindia/',
        permanent: false
      },


      /* cl blogs */

      {
        source: '/cruciallifechangingskills/mastering-the-art-of-habit-building-a-guide-to-positive-change',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/how-to-break-bad-habits-and-become-the-person-you-want-to-be',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/beyond-micromanagement-trustbased-accountability-for-enhanced-productivity',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/beyond-micromanagement-trust-based-accountability-for-enhanced-productivity',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/mastering-crucial-conversations-your-guide-to-effective-communication-skills',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/mastering-crucial-conversations-your-guide-to-effective-communication-skills',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/you-can-influence-others-in-the-workplace-without-having-authority',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/you-can-influence-others-in-the-workplace-without-having-authority',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/mastering-communication-skills',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/the-secret-to-mastering-effective-communication-skills',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/leadership-skills-in-corporate',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/developing-corporate-leadership-skills-strategies-for-success',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/what-should-we-expect-for-the-future-of-corporate-training-in-2021',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/what-should-we-expect-for-the-future-of-corporate-training-in-2021',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/what-should-be-included-in-leadership-training',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/what-should-be-included-in-leadership-training',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/skill-development-training-what-are-the-benefits-of-skill-development',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/skill-development-training-what-are-the-benefits-of-skill-development',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/corporate-training-what-is-it-and-why-do-you-need-it',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/corporate-training-what-is-it-and-why-do-you-need-it',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/what-is-effective-communication-and-why-is-it-important',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/what-is-effective-communication-and-why-is-it-important',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/understand-the-benefits-of-behavioural-skills-training-for-corporate-companies',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/understand-the-benefits-of-behavioural-skills-training-for-corporate-companies',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/responding-to-false-accusations-is-part-of-crucial-accountability',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/responding-to-false-accusations-is-part-of-crucial-accountability',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-accountability-will-benefit-your-workplace-and-how-to-achieve-it',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/accountability-in-the-workplace-a-guide-for-managers',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/tips-on-how-to-improve-your-effective-communication-skills',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/tips-on-how-to-improve-your-effective-communication-skills',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/crucial-accountability-book',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/crucial-accountability-a-new-perspective-on-performance-management',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-boost-up-employee-morale',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/how-to-boost-up-employee-morale',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-deliver-feedback-without-embarrassing-someone',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/how-to-deliver-feedback-without-embarrassing-someone',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/significance-of-skill-development-training',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/significance-of-skill-development-training',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/top-7-behaviour-skills-to-develop-in-your-employees',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/top-7-behaviour-skills-to-develop-in-your-employees',
        permanent: true,
      },





      {
        source: '/cruciallifechangingskills/how-to-deal-with-delicate-workplace-issues',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/transforming-an-undesirable-environment',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/best-ways-to-increase-accountability-in-the-workplace',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/advantages-of-corporate-training-and-enhancing-your-interpersonal-skills',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/an-influential-approach-to-leadership-training',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/become-a-certified-trainer-with-train-the-trainer-module',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-importance-of-skill-development-training-in-shaping-your-organization',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-importance-of-effective-communication-in-professional-relations',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/lead-your-way-through-skill-development-training-and-corporate-training',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/understanding-the-importance-of-behavioural-skills-training-at-workplace',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/importance-of-building-accountability-in-the-workplace',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/importance-of-interpersonal-skills-and-how-to-improve-them',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-importance-of-corporate-training-for-business',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-foster-accountability-in-a-tightknit-culture',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-talk-to-a-students-parent-in-crucial-moments',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/lead-your-way-through-skill-development-training-and-corporate-training-1658755551999',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/importance-of-behavioural-training-for-call-center-employees',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/behavioural-skills-training-and-its-importance-in-enhancing-work-culture',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/train-the-trainer-what-is-it-and-why-do-you-need-it',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/get-leadership-training-program-and-improve-your-skills',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/train-the-trainer--what-is-it-and-why-does-your-organization-need-it',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/skill-development-training-what-is-it-and-why-do-you-need-it',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/corporate-training-what-is-corporate-training-why-do-we-need-it',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/top-10-interpersonal-skills-what-are-interpersonal-skills-and-why-theyre-important',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/repairing-broken-relationship-between-father-and-son',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/components-essential-for-effective-communication',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/importance-of-interpersonal-skills-for-organizational-success',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-tell-your-colleague-to-stay-at-home-when-sick',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/importance-of-corporate-training-for-organizational-development-and-growth',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/what-is-skill-development-and-training',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/keys-to-manage-newly-remote-teams',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/9-tips-to-minimize-disruption-during-a-pandemic',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/effective-communication--a-complete-guide',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/this-is-how-we-are-leading-through-the-crisis',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/tips-for-successful-video-conferencing',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-rising-importance-of-skill-development-training-in-india',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/invest-in-leadership-training-activities-for-rapid-growth-of-your-organization',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-accountability-is-beneficial-for-the-workplace-and-how-to-achieve-it',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/are-your-employees-missing-on-these-imperative-behaviour-skills',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/know-why-effective-communication-for-leaders-is-important',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-take-care-of-a-silent-family-member',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/increase-effectiveness-of-your-virtual-meetings',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-listen-positively-when-everything-around-you-is-so-negative',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/tips-to-initiate-a-crucial-conversation-with-a-friend',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/effective-communication--a-complete-guide-1658812074408',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/learning-to-deliver-tough-love-with-respect',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/my-coworker-cuts-me-off-doesnt-listen-and-always-says-no-what--now',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/understanding-responsibility-is-more-than-a-process-of-memofication',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/a-new-model-for-ethical-leadership',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-the-secret-to-good-leadership-can-improve-your-life-too',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-ld-helps-in-risk-management',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/role-of-training-and-development-in-helping-revive-organizations-post-covid',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/top-strategies-for-better-decision-making',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/develop-these-4-important-behavioral-skills-that-employers-value',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/are-you-using-smart-training',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/including-ethics-into-organizational-culture',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/4-communication-skills-every-manager-should-master',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/leading-in-the-future',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/strategic-leadership-development--the-time-is-now',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/3-things-to-stop-doing-and-3-things-to-start-doing-for-more-productivity',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/importance-of-behavioral-skills-training-at-the-workplace',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/important-skill-development-areas-for-employees',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/identifying-skill-gaps-to-lead-the-postcovid-world',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/5-tips-for-turning-2020-disarray-into-2021-direction-insights-from-learning-leaders',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/storytelling-in-a-virtual-training-environment',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/importance-of-effective-communication',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/leadership-training-to-be-an-influencer',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/redefining-learning-and-development-success-metrics',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/what-influences-performance-review-discussions--facts-or-stories-we-tell-ourselves',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/importance-of-behavioral-skills-training',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/2020-in-review-how-remote-work-has-shifted-learning-and-development-needs',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/decide-how-to-decide',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/changing-trends-in-the-learning-and-development-industry',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/skill-development-training',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-can-teenagers-deal-with-crucial-conversations',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-do-effective-communication-skills-transform-productivity',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/6-ways-to-level-up-your-communication-game',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/learning-the-art-of-active-listening-become-a-better-communicator',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/change-the-constant-factor-in-our-lives',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/why-companies-need-to-train-leaders-into-trainers',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/key-leadership-skills-you-require-to-excel-in-your-career',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-impact-of-training-the-trainers-what-you-need-to-know-before-choosing-a-course',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/what-are-the-key-highlights-of-corporate-training',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/what-are-the-barriers-to-effective-communication',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/what-is-the-future-of-training-industry-the-ld-edition',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-interpersonal-skills-you-need',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-run-away-car',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/what-are-behavioral-skills-training-and-why-you-should-invest-in-it',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/key-areas-to-enhance-for-better-communication',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/my-journey-with-vitalsmarts',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
   
      {
        source: '/cruciallifechangingskills/what-leads-to-accountability-at-workplace',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/key-behavioural-skill-for-employees',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-science-behind-habit-formation',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/crucial-conversations--mastering-dialogues-for-better-working',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/building-accountability-at-work-place',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/fun-leadership-games-for-skill-development',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/why-should-leaders-become-influencers',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/few-ways-to-carry-on-through-change',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/can-leadership-training-assist-professionals-in-2022',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/what-lies-behind-leading-people',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-turn-a-resolution-into-a-habit',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/why-is-communication-important-in-business',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/my-experience-crucial-conversations-for-mastering-dialogue',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/crucial-conversations-leading-to-crucial-outcomes',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/is-willpower-reliable-or-not',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-deliver-a-feedback-safely',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/encouraging-employees-to-provide-inputs',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/why-crucial-conversations-are-important-everywhere',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/practicing-crucial-conversations-to-master-conflicts',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/six-best-practices-for-client-communication',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/balancing-work-and-life-tips-to-manage-work-workspace-edition',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/overcome-behaviour-that-is-selfdestructive-through-habits',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/emotional-quotient--why-does-it-matter-in-the-organization',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-are-clear-conversations-a-mark-of-highperforming-individuals',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-achieve-good-communication-skills',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-to-master-crucial-conversations-like-a-pro',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/unable-to-get-through-people-during-a-crucial-conversation-here-is-what-you-need',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/discipline--bridge-between-goals-and-achievement',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/essential-steps-to-master-a-crucial-conversation',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-leaders-can-influence-through-influence-training-courses',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/steps-to-master-accountability-in-personal-and-professional-lives',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/humanizing-artificial-intelligencewhy-ai-needs-emotional-intelligence',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/keep-your-hybrid-employees-engage-with-these-simple-tips',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/tips-to-motivate-your-underperforming-employees',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/are-you-close-to-your-customers',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/know-the-insideout-of-getting-things-done',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/pondering-to-balance-work-and-life-altogether',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/getting-things-done--no-1-productivity-system',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-well-are-you-engaged-with-what-matters-to-you--david-allen',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/7-most-vital-life-changing-skills-to-adapt',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/leverage-productivity-with-better-time-management-training',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/empower-employee-productivity-via-getting-things-done-in-7-prime-ways',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/a-unique-approach-to-boost-personal-productivity-with-3-strategies',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-do-our-training-courses-help-to-solve-common-organizational-problems',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/best-5-advises-to-increase-the-organization-effectiveness',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-best-way-to-identify-opportunities-is-with-development-communication',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/ror-of-great-relationships-is-based-on-effective-communication',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/train-your-managers-to-talk-effectively-during-a-financial-crisis',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/how-talking-good-can-bring-in-revenue-for-your-company',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/crucial-accountability-can-build-relationships-based-on-trust-that-reduces-burnout-by-40',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/mastering-your-habits-can-change-your-life',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/only-11-feel-that-the-company-has-creative-communication',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/44-of-projects-fail-due-to-poor-business-communications',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/lifechanging-skills-that-you-need-to-become-a-better-manager-in-2023',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/mastering-crucial-conversations-is-the-key-skill-for-high-performance',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/lack-of-selfregard-can-negatively-affect-your-role-as-a-leader',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/effective-habits-that-lead-to-adaptability-and-agility',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/95-of-people-admit-to-putting-off-work-strategies-to-increase-creativity-in-procrastinators',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/poor-communications-in-the-workplace-can-cost-the-company-420000-per-year',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/accountability-or-responsibility-difference-and-impact',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-art-of-spinning-a-conversation-crucial-conversations-in-the-workplace',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/10-habits-of-successful-business-owners',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/getting-things-done-to-change-business-and-deal-with-change',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/increase-productivity-with-time-management-by-getting-things-done',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/communicating-to-influence-importance-of-interpersonal-skills-in-the-workplace',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/employees-responsibility-and-ownership--workplace-accountability',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/lead-to-positive-outcomes-with-the-power-of-habit',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/learn-how-to-influence-without-disrespecting-your-colleagues-employees-or-team-members',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/nonverbal-communication-skills-that-every-professional-needs-to-master',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-importance-of-accountability-in-the-workplace-7-ways-to-foster-it',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/10-great-work-habits-to-set-yourself-up-for-success-insights-from-successful-organizations',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/skills-required-in-2023--industries-prioritizing-communication-skills',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/harnessing-the-power-of-habits-for-accelerating-growth',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-vital-role-of-influence-in-organizational-success-empowering-managers-through-courses',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/cultivating-success-the-power-of-accountability-in-the-workplace',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/7-tips-to-be-more-productive-at-work--the-road-to-success',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/understanding-the-power-of-habit-how-small-changes-can-lead-to-big-results',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },
      {
        source: '/cruciallifechangingskills/the-role-of-emotional-intelligence-in-effective-communication-and-conflict-resolution',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/blog',
        destination: 'https://blog.byldgroup.com/cruciallifechangingskills/',
        permanent: true,
      },


      /* ED Blogs */

      {
        source: '/everythingdisc/blog/psychometric-assessments-and-its-benefits',
        destination: 'https://blog.byldgroup.com/everythingdisc/psychometric-assessments-and-its-benefits',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/all-you-need-to-know-about-everything-disc-workplace',
        destination: 'https://blog.byldgroup.com/everythingdisc/all-you-need-to-know-about-everything-disc-workplace',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/how-emotional-intelligence-leads-to-effective-leadership',
        destination: 'https://blog.byldgroup.com/everythingdisc/how-emotional-intelligence-leads-to-effective-leadership',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/psychometric-analysis-your-key-to-behavioral-challenges',
        destination: 'https://blog.byldgroup.com/everythingdisc/psychometric-analysis-your-key-to-behavioral-challenges',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/why-are-assessments-becoming-a-necessity',
        destination: 'https://blog.byldgroup.com/everythingdisc/why-are-assessments-becoming-a-necessity',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/voyage-of-everything-disc-model-from-itowe',
        destination: 'https://blog.byldgroup.com/everythingdisc/voyage-of-everything-disc-model-from-itowe',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/types-of-personality-tests-for-managers',
        destination: 'https://blog.byldgroup.com/everythingdisc/types-of-personality-tests-for-managers',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/make-the-most-of-your-daily-meetings-with-disc-profile-assessment',
        destination: 'https://blog.byldgroup.com/everythingdisc/make-the-most-of-your-daily-meetings-with-disc-profile-assessment',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/develop-a-positive-work-environment-in-the-office',
        destination: 'https://blog.byldgroup.com/everythingdisc/develop-a-positive-work-environment-in-the-office',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/learn-how-to-manage-your-growing-and-changing-teams',
        destination: 'https://blog.byldgroup.com/everythingdisc/learn-how-to-manage-your-growing-and-changing-teams',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/how-can-a-singleaccess-platform-change-your-life',
        destination: 'https://blog.byldgroup.com/everythingdisc/how-can-a-singleaccess-platform-change-your-life',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/your-emotional-intelligence-is-instrumental-for-exceptional-leadership',
        destination: 'https://blog.byldgroup.com/everythingdisc/your-emotional-intelligence-is-instrumental-for-exceptional-leadership',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/soft-skills-development-at-hard-times',
        destination: 'https://blog.byldgroup.com/everythingdisc/soft-skills-development-at-hard-times',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/a-quick-guide-for-implementing-disc-assessment-for-employee-upskilling-and-training',
        destination: 'https://blog.byldgroup.com/everythingdisc/a-quick-guide-for-implementing-disc-assessment-for-employee-upskilling-and-training',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/learn-the-art-of-effective-performance-management-with-employee-assessment',
        destination: 'https://blog.byldgroup.com/everythingdisc/learn-the-art-of-effective-performance-management-with-employee-assessment',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/understanding-the-reasons-why-personality-tests-are-on-the-rise',
        destination: 'https://blog.byldgroup.com/everythingdisc/understanding-the-reasons-why-personality-tests-are-on-the-rise',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/exploring-the-science-behind-optimal-employee-performance-with-psychometric-assessment',
        destination: 'https://blog.byldgroup.com/everythingdisc/exploring-the-science-behind-optimal-employee-performance-with-psychometric-assessment',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/ways-and-benefits-of-an-employee-assessment-in-the-workplace',
        destination: 'https://blog.byldgroup.com/everythingdisc/ways-and-benefits-of-an-employee-assessment-in-the-workplace',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/unraveling-the-truth-and-enigma-around-disc-assessment',
        destination: 'https://blog.byldgroup.com/everythingdisc/unraveling-the-truth-and-enigma-around-disc-assessment',
        permanent: true,
      },
      {
        source: '/everythingdisc/blog/uncovering-the-true-power-of-psychometric-assessment-in-corporate-arena',
        destination: 'https://blog.byldgroup.com/everythingdisc/uncovering-the-true-power-of-psychometric-assessment-in-corporate-arena',
        permanent: true,
      },

      {
        source: '/everythingdisc/blog/:path*',
        destination: 'https://blog.byldgroup.com/everythingdisc/',
        permanent: false
      },

      {
        source: '/eq/eq-assessment',
        destination: '/eq/eq-assessment1',
        permanent: true,
      },

      {
        source: '/fivebehaviors/blog/11-ways-to-completely-revamp-your-team-development',
        destination: 'https://blog.byldgroup.com/fivebehaviors/11-ways-to-completely-revamp-your-team-development',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/why-having-the-right-personality-matters',
        destination: 'https://blog.byldgroup.com/fivebehaviors/why-having-the-right-personality-matters',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/eliminate-your-fear-and-pick-up-personal-development-training-today',
        destination: 'https://blog.byldgroup.com/fivebehaviors/eliminate-your-fear-and-pick-up-personal-development-training-today',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/the-five-behaviors-of-a-cohesive-team-that-leads-to-a-greater-business-efficiency',
        destination: 'https://blog.byldgroup.com/fivebehaviors/the-five-behaviors-of-a-cohesive-team-that-leads-to-a-greater-business-efficiency',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/how-to-create-a-culture-of-teamwork-that-sustains-an-organizational-change',
        destination: 'https://blog.byldgroup.com/fivebehaviors/how-to-create-a-culture-of-teamwork-that-sustains-an-organizational-change',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/how-does-teambuilding-training-help-in-forming-intact-teams',
        destination: 'https://blog.byldgroup.com/fivebehaviors/how-does-team-building-training-help-in-forming-intact-teams',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/how-to-develop-and-sustain-highperformance-teams-at-workplace',
        destination: 'https://blog.byldgroup.com/fivebehaviors/how-to-develop-and-sustain-high-performance-teams-at-workplace',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/stretch-your-comfort-zone-for-personal-development',
        destination: 'https://blog.byldgroup.com/fivebehaviors/stretch-your-comfort-zone-for-personal-development',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/why-is-teambuilding-important',
        destination: 'https://blog.byldgroup.com/fivebehaviors/why-is-team-building-important',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/5-behaviors-of-a-cohesive-team-in-a-virtual-work-environment',
        destination: 'https://blog.byldgroup.com/fivebehaviors/5-behaviors-of-a-cohesive-team-in-a-virtual-work-environment',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/resolve-passiveaggressive-behavior-in-your-team-with-effective-team-development',
        destination: 'https://blog.byldgroup.com/fivebehaviors/resolve-passive-aggressive-behavior-in-your-team-with-effective-team-development',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/encourage-positive-team-behavior-that-boosts-organizational-productivity',
        destination: 'https://blog.byldgroup.com/fivebehaviors/encourage-positive-team-behavior-that-boosts-organizational-productivity',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/the-importance-of-setting-goals-for-team-development',
        destination: 'https://blog.byldgroup.com/fivebehaviors/the-importance-of-setting-goals-for-team-development',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/resolving-conflicts-at-work-to-build-a-culture-of-teamwork',
        destination: 'https://blog.byldgroup.com/fivebehaviors/resolving-conflicts-at-work-to-build-a-culture-of-teamwork',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/learning-how-to-change-the-behaviors-of-your-team-to-increase-performance',
        destination: 'https://blog.byldgroup.com/fivebehaviors/learning-how-to-change-the-behaviors-of-your-team-to-increase-performance',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/want-to-become-an-effective-manager-build-a-cohesive-team-with-these-7-tips',
        destination: 'https://blog.byldgroup.com/fivebehaviors/want-to-become-an-effective-manager-build-a-cohesive-team-with-these-7-tips',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/team-development--reasons-for-failure-and-how-to-succeed',
        destination: 'https://blog.byldgroup.com/fivebehaviors/team-development--reasons-for-failure-and-how-to-succeed',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/realize-the-goal-of-better-organizational-growth-by-focusing-on-personal-development',
        destination: 'https://blog.byldgroup.com/fivebehaviors/realize-the-goal-of-better-organizational-growth-by-focusing-on-personal-development',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/diffusing-increasing-employee-resistance-in-your-team-with-team-development',
        destination: 'https://blog.byldgroup.com/fivebehaviors/diffusing-increasing-employee-resistance-in-your-team-with-team-development',
        permanent: true,
      },
      {
        source: '/fivebehaviors/blog/boosting-productivity-uncovering-the-secrets-of-highperformance-teams',
        destination: 'https://blog.byldgroup.com/fivebehaviors/boosting-productivity-uncovering-the-secrets-of-high-performance-teams',
        permanent: true,
      },

      {
        source: '/fivebehaviors/blog/:path*',
        destination: 'https://blog.byldgroup.com/fivebehaviors/',
        permanent: false
      },


      {
        source: '/eaglesflightindia/corporate-team-building-games',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/corporate-team-building-games',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/team-building-activities-for-work',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/building-the-dream-team-fun-and-engaging-team-building-activities-for-work/',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/team-building-activities-for-corporates',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/team-building-activities-for-corporates',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/five-little-tricks-for-effective-team-building',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/five-little-tricks-for-effective-team-building',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/why-are-team-building-games-so-famous',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/why-are-team-building-games-so-famous',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/is-experiential-learning-the-most-trending-thing-now',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/is-experiential-learning-the-most-trending-thing-now',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/business-teambuilding-activities-and-experiential-learning-perfect-combo',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/business-team-building-activities-and-experiential-learning-perfect-combo',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/surprisingly-fun-teambuilding-activities-games-and-exercises-for-work-in-2021',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/surprisingly-fun-team-building-activities-games-and-exercises-for-work-in-2021',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/best-time-management-activities-and-games-to-boost-productivity',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/best-time-management-activities-and-games-to-boost-productivity',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/how-can-effective-communication-help-you-personally',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/how-can-effective-communication-help-you-personally',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/decoding-the-king-kahufu-virtual-simulation-program',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/decoding-the-king-kahufu-virtual-simulation-program',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/learn-to-find-solutions-during-a-time-of-crisis-with-team-building-skills',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/learn-to-find-solutions-during-a-time-of-crisis-with-team-building-skills',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/5-reasons-to-adopt-experiential-learning-for-employee-growth-and-development',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/5-reasons-to-adopt-experiential-learning-for-employee-growth-and-development',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/team-building-activities-embracing-experiential-learning-for-enhanced-workplace-cohesion',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/team-building-activities-embracing-experiential-learning-for-enhanced-workplace-cohesion',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/team-building-activities-and-their-impact-on-effective-team-building',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/team-building-activities-and-their-impact-on-effective-team-building',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/advantages-of-experiential-learning-for-an-organization',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/advantages-of-experiential-learning-for-an-organization',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/importance-of-team-building-activities-in-virtual-setting',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/importance-of-team-building-activities-in-virtual-setting',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/why-is-goal-setting-team-building-activities-important',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/why-is-goal-setting-team-building-activities-important',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/team-building-games-that-will-increase-morale-and-make-an-effective-ondemand-workforce',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/team-building-games-that-will-increase-morale-and-make-an-effective-on-demand-workforce',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/implement-effective-communication-with-council-of-the-marble-star-game',
        destination: 'https://blog.byldgroup.com/eaglesflightindia/implement-effective-communication-with-council-of-the-marble-star-game',
        permanent: true,
      },


      {
        source: '/eaglesflightindia/blogs',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },








      {
        source: '/eaglesflightindia/everything-you-need-to-know-about-experiential-learning',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/learn-why-time-management-and-teambuilding-activities-are-so-important',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/best-experiential-business-games-for-teambuilding',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/the-nature-of-true-experiential-learning',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/the-4-key-elements-of-experiential-learning-how-to-create-a-growing-environment-for-employees-virtually',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/how-do-corporate-teambuilding-games-lead-to-increased-productivity',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/why-are-teamwork-and-collaboration-necessary-for-digital-transformation',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/top-10-benefits-of-teamwork-you-should-know',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/experiential-learning-vs-dynamic-learning-whats-the-difference',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/everything-you-need-to-know-about-experiential-teambuilding',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/7-vital-tips-for-implementing-teambuilding-games',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/essential-skills-for-teamwork',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/best-teambuilding-activities-for-work',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/experiential-learning-helps-in-modernizing--employee-development',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/importance-of-teambuilding-activities-for-an-individual',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/how-can-business-teambuilding-activities-help-your-team',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/can-effective-communication-really-help-your-organization-thrive-for-success',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/how-can-you-add-fun-to-virtual-team-activities',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/learn-timemanagement-with-teambuilding-activities',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/can-virtual-teambuilding-activities-excite-things-during-workfromhome',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/do-you-want-your-boss-to-allow-having-fun-in-office',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/are-virtual-teambuilding-activities-effective',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/how-to-measure-employee-centricity-with-virtual-teambuilding-business-games',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/learn-the-art-of-transforming-your-companys-culture',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/can-simulation-programs-help-in-effective-communication',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/5-ways-to-improve-performance-through-virtual-teambuilding-activities',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/4-ways-to-plan-successful-virtual-fun-team-activities',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/6-effective-strategies-to-motivate-your-team-virtually',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/selfimprovement-plan-with-council-of-the-marble-star-game',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/confine-at-home-or-shine-at-work',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/building-relationships-build-organizations',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/leadership-is-not-a-position-it-is-an-action',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/you-train-your-people-but-do-they-learn',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/become-a-leader-others-shall-look-up-to',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/importance-of-teambuilding-activities-for-work-in-shaping-your-future',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/build-highperforming-winning-teams',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/embrace-creativity-to-keep-your-employees-engaged-and-satisfied',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/develop-trust-respect-and-cooperation-with-business-team-building-activities',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/achieve-your-organizational-goals-by-team-building-activities',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/virtual-team-building-games-for-a-positive-work-environment',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/gain-corporate-advantage-with-virtual-team-building-activities',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/reduce-arguments-and-enhance-communication-with-team-building-activities-for-work',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/the-alternative-to-team-building-activities-virtual-team-games',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/experience-a-whole-new-world-of-learning-with-virtual-group-games',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/importance-of-virtual-employee-engagement-activities-in-a-globalized-world',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/tackle-communication-gaps-in-an-organization-with-these-golden-tips',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/want-highly-successful-teams-in-your-organization',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/trying-hard-to-build-effective-communication-at-workplace-master-the-art-with-promises-promises',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/time-to-learn-and-optimize-your-corporate-skills-with-these-team-games',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/crosscultural-teams-not-performing-to-their-fullest-try-these-5-tips',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/how-king-kahufu-virtual-team-game-is-a-great-learning-platform-for-employees-1667986371831',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/how-windjammer-helps-in-optimizing-corporate-planning-and-execution-1667986798898',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/planning-team-building-exercises-these-7-tips-can-determine-your-success',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/want-employee-engagement-in-crisis-these-7-tips-can-be-your-savior',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/poor-team-engagement-costing-you-billions-of-dollars-learn-how-to-save-your-pocket',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/making-learning-fun-can-help-increase-retention-in-organizations',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/unlock-the-gateway-to-team-productivity-with-gold-of-the-desert-kings',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/the-rise-of-digital-team-building-and-the-ld-transformation',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/breaking-boundaries-to-discover-your-inner-potential-with-experiential-learning',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/a-quick-corporate-tip-team-building-will-be-the-most-important-investment-in-2023',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/stuck-with-optimizing-virtual-employee-engagement-follow-these-5-tips',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/implement-these-5-tips-to-build-a-successful-business-development-team',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/how-virtual-team-games-are-evolving-and-their-impact-in-2023',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/how-are-team-building-programs-redefining-company-culture',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/employees-who-work-in-collaboration-are-17-more-satisfied-use-team-building-games-to-make-meaningful-connections',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/sync-up-the-personal-and-professional-growth-with-team-building-training',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/agile-product-management-teams-require-rigorous-team-building-to-meet-objectives',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/team-building-today-is-about-being-hypervigilant-to-accomplish-a-collaborative-mindset',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/team-building-and-cost-control-are-all-about-visibility-and-dedication',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/5-team-building-activities-to-enhance-the-creativity-of-your-employees',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/5-tips-to-build-a-futureready-resilient-team-for-your-organization',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/express-gratitude-toward-your-employees-to-win-over-their-loyalty-and-trust',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/resolve-internal-crisis-and-build-a-strong-team-with-these-5-tips',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/7-powerful-strategies-to-foster-ownership-and-drive-change-among-your-team',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/revolutionizing-the-workplace-environment-virtual-team-games-and-experiential-learning',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/resolving-workplace-resenteeism-conquering-the-demon-through-team-building-activities',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      },
      {
        source: '/eaglesflightindia/how-to-build-teams-virtually',
        destination: 'https://blog.byldgroup.com/eaglesflightindia',
        permanent: true,
      }













    ]
  },
}


