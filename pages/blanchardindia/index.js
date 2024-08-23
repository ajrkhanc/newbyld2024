import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {
   var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 5,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 4,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         }
      ]
   };

   var settings2 = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <>
         <Head>
            <title>Leadership Training and Development Programs in India</title>
            <link rel="canonical" href="https://byldgroup.com/blanchardindia" />
            <meta name="description" content="Explore Corporate Leadership Training Programs by Blanchard India. We offer strategic organizational leadership and management development programs. Enquire today!" />
            <script
               dangerouslySetInnerHTML={{
                  __html: `
              !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '1039427466993495'); 
fbq('track', 'PageView');
          `,
               }}
            />

            <noscript>
               <img height="1" width="1"
                  src="https://www.facebook.com/tr?id=1039427466993495&ev=PageView&noscript=1" />
            </noscript>
         </Head>

         <section className='kbisblanchard'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12'>
                     <div className='kbisblanchardin flex-column'>
                        <h1 className='heading-text new-text'>Discover the new Blanchard®!</h1>
                        <a href='/blanchardindia/about-us' className='kbbtn kbbtn--orange btn-size'>Know More</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='bannehome mt-4'>
            <div className='container-fluid bgreduiswihite'>
               <div className='row align-items-center'>
                  <div className='col-sm-7'>
                     <div className='left-ba'>
                        <h1 className='heading-text mt-10 new-heading'>The Heart of Human <br></br>Achievement™</h1>
                        <p className='text-size new-textsize'>Developing Inspired Leaders through Engaging, Human-powered Learning Experiences</p>
                        <a href='/blanchardindia/what-we-do' className='kbbtn kbbtn--orange btn-size'>Learn More</a>
                     </div>
                  </div>
                  <div className='col-sm-5'>
                     <div className='img-end'>
                        <img src="/kbassets/img/kbnew/banner-right.jpg" alt="Images" className='banner-size' />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='TrendingInsights ptt-60 pbb-60'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12'>
                     <div className='row'>
                        <div className='col-sm-6'>
                           <h2 className='pbb-50 heading-text'>Trending Insights</h2>
                        </div>
                        <div className='col-sm-6 viewall new-viewall'>
                           <a className='mt-10 text-underline' href='/blanchardindia/resources/research-insights/amping-up-your-learning-investment'>View All Trending Insights <i class="bx bx-right-arrow-alt"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3 mt-30'>
                     <div className='innerbox'>
                        <h3 className='fs-24'>01</h3>
                        <div className='innerp'>
                           <p className='text-size new-text-innerp'>Amping Up the Value and Return on Your Learning Investment</p>
                           <a className='py-10' href='/blanchardindia/resources/research-insights/amping-up-your-learning-investment'>Read Now</a>
                        </div>
                     </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3'>
                     <div className='innerbox '>
                        <h3 className='fs-24'>02</h3>
                        <div className='innerp'>
                           <p className='text-size new-text-innerp'>An Unvarnished Look at Asking Employees to Return to the Office</p>
                           <a className='py-10' href='/blanchardindia/resources/research-insights/hybrid-work-pov'>Read Now</a>
                        </div>
                     </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3'>
                     <div className='innerbox'>
                        <h3 className='fs-24'>03</h3>
                        <div className='innerp'>
                           <p className='text-size new-text-innerp'>Six Ways to Supercharge Your Next One-on-One with Your Boss</p>
                           <a className='py-10' href='/blanchardindia/resources/research-insights/supercharge-your-one-on-one'>Read Now</a>
                        </div>
                     </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3'>
                     <div className='innerbox'>
                        <h3 className='fs-24'>04</h3>
                        <div className='innerp'>
                           <p className='text-size new-text-innerp'>Transformational Leadership: Inspiring Change and Driving Innovation</p>
                           <a className='py-10' href='/blanchardindia/blog/transformational-leadership-inspiring-change-and-driving-innovation'>Read Now</a>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section className='Innovativelearning'>
            <div className='container-fluid ptt-90 pbb-60'>
               <div className='row'>
                  <div className='col-sm-6 pa0000'>
                     <div className='prr-90'>
                        <img src="/kbassets/img/kbnew/Innovative-training-solutions.jpg" alt="Images" className='new-imgsize'/>
                     </div>
                  </div>
                  <div className='col-sm-6'>
                     <div>
                        <h2 className='heading-text mt-10'>
                           Meet Your Most Pressing Leadership Challenges via Innovative Learning Journeys
                        </h2>
                        <p>
                           We empower businesses for the workplace of the future by meeting you and your students where they are today and where they need to be in the future.
                        </p>
                        <h4> 
                           <strong>Our biggest challenges are in:</strong>
                        </h4>
                        <ul>
                           <li className='list-item'><a className='fs-12 new-fs-16' href='/blanchardindia/our-content/challenges/leadership-capabilities'>Leadership Capabilities <i class="bx bx-right-arrow-alt arrow-position"></i></a></li>
                           <li className='list-item'><a className='fs-12 new-fs-16' href='/blanchardindia/our-content/challenges/change-agility'>Change & Agility <i class="bx bx-right-arrow-alt arrow-position"></i></a></li>
                           <li className='list-item'><a className='fs-12 new-fs-16' href='/blanchardindia/our-content/challenges/diversity-inclusion'>Diversity & Inclusion <i class="bx bx-right-arrow-alt arrow-position"></i></a></li>
                           <li className='list-item'><a className='fs-12 new-fs-16' href='/blanchardindia/our-content/challenges/engagement-retention'>Engagement & Retention <i class="bx bx-right-arrow-alt arrow-position"></i></a></li>
                           <li className='list-item'><a className='fs-12 new-fs-16' href='/blanchardindia/our-content/challenges/organizational-performance'>Organizational Performance <i class="bx bx-right-arrow-alt arrow-position"></i></a></li>
                           <li className='list-item'><a className='fs-12 new-fs-16' href='/blanchardindia/our-content/challenges/teaming-collaboration'>Teaming & Collaboration <i class="bx bx-right-arrow-alt arrow-position"></i></a></li>
                           <li className='list-item'><a className='fs-12 new-fs-16' href='/blanchardindia/our-content/challenges/personal-effectiveness'>Personal Effectiveness <i class="bx bx-right-arrow-alt arrow-position"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='LeadershipSolutions'>
            <div className='container pbb-60'>
               <div className='row'>
                  <div className='col-sm-12'>
                     <h2 className='pbb-50 heading-text mt-3'>One Stop to All Leadership Solutions</h2>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-4 mt-3'>
                     <div className='leadershipinner h-100 '>
                        <a href='/blanchardindia/who-we-help/teams' className='leadershpa'>
                           <img src="/kbassets/img/kbnew/icon/Team-Leaders-and-managers.svg" alt="Images" />
                           <div className='onestoppboxx'>
                              <h4 className='new-teamtext'>Team Leaders and <br></br>Managers</h4>
                              <p>
                                 Whether you are just starting your leadership journey or want to hone your leadership skills, Blanchard can help you become an Inspired Leader.
                              </p>
                           </div>
                           <a  href='/blanchardindia/who-we-help/teams' className='kbbtn kbbtn--orange btn-size'>Learn More</a>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-4 mt-3'>
                     <div className='leadershipinner h-100 '>
                        <a href='/blanchardindia/who-we-help/organizations' className='leadershpa'>
                           <img src="/kbassets/img/kbnew/icon/L-D-professionals.svg" alt="Images" />
                           <div className='onestoppboxx'>
                              <h4 className='new-teamtext'>Learning and Development Professionals</h4>
                              <p>
                                 Looking to make a transformative impact on your organization and people? Our team of experts is constantly working to deliver dynamic yet time-tested solutions and learning experiences.
                              </p>
                           </div>
                           <a href='/blanchardindia/who-we-help/organizations' className='kbbtn kbbtn--orange btn-size'>Learn More</a>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-4 mt-3'>
                     <div className='leadershipinner h-100 '>
                        <a href='/blanchardindia/who-we-help/training-professionals' className='leadershpa'>
                           <img src="/kbassets/img/kbnew/icon/Training-and-coaching-professionals.svg" alt="Images" />
                           <div className='onestoppboxx'>
                              <h4 className='new-teamtext'>Training and Coaching Professionals</h4>
                              <p>
                                 From a robust community of expert practitioners to a market-leading partner program, we passionately support you in delivering Blanchard content and courses that inspire learners and realize results.
                              </p>
                           </div>
                           <a href='/blanchardindia/who-we-help/training-professionals' className='kbbtn kbbtn--orange btn-size'>Learn More</a>
                        </a>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section className='EnablingFuture ptt-50 pbb-10 '>
            <div className='container pbb-60 p-10'>
               <div className='row'>
                  <div className='col-sm-12 text-center'>
                     <h2 className='sectionh heading-text'>Enabling Future-ready <br></br>Transformation</h2>
                     <p className='headingp pbb-50'>
                        Whether you are looking to provide guidance and support to new managers or to help your experienced leaders <br></br>create a more engaged and productive culture, we can help your organization reach its goals.
                     </p>
                  </div>

                  <div className='col-sm-6 mt-2'>
                     <div className='enablingbox greenboxc textccnn2 h-100'>
                        <h4  className='fs-24'>Coaching</h4>
                        <p className='fs-14'>
                           Personalized, one-on-one, and team leadership coaching to help your executives, managers, and individual learners develop their leadership skills. <a href='/blanchardindia/what-we-do/services/coaching'>Learn More</a>
                        </p>
                     </div>
                  </div>

                  <div className='col-sm-6 mt-2'>
                     <div className='enablingbox darkblueboxc textccnn2 h-100'>
                        <h4 className='fs-24'>Leadership Programs</h4>
                        <p className='fs-14'>
                           Build your leadership bench strength, create self-motivated individuals, improve employee engagement, or lead a change initiative. <a href='/blanchardindia/what-we-do/leadership-development/leadership-development-programs'>Learn More</a>
                        </p>
                     </div>
                  </div>

                  <div className='col-sm-6 mt-2'>
                     <div className='enablingbox blueboxc textccnn2 h-100'>
                        <h4 className='fs-24'>Customized Learning Experiences</h4>
                        <p className='fs-14'>
                           We will partner with you, dive into your needs, and create a solution that unlocks your people’s leadership potential. <a href='/blanchardindia/what-we-do/custom-solutions/customized-learning-experiences'>Learn More</a>
                        </p>
                     </div>
                  </div>

                  <div className='col-sm-6 mt-2'>
                     <div className='enablingbox darkgeenboxc textccnn2 h-100'>
                        <h4 className='fs-24'>Public Courses</h4>
                        <p className='fs-14'>
                           Leadership development and training courses help worldwide throughout the year, whenever and wherever it works best for you. <a href='/blanchardindia/events-workshops'>Learn More</a>
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section className='ExperiencesCourses pbb-60'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12 pbb-40 py-10'>
                     <hr></hr>
                  </div>
                  <div className='col-sm-12'>
                     <div className='row'>
                        <div className='col-sm-8'>
                           <h2 className='pbb-50 heading-text '>Experiences and Courses</h2>
                        </div>
                        <div className='col-sm-4 viewall new-exploretext'>
                           <a className='mt-10' href='/blanchardindia/what-we-do/leadership-development/leadership-development-programs'>Explore Additional Resources <i class="bx bx-right-arrow-alt"></i></a>
                        </div>
                     </div>
                  </div>





                  <div className=' col-lg-12 col-sm-12'>
                     <Slider {...settings2}>
                        <div className='slxpd30 p-10 h-530'>
                           <div className='slbox greenboxc forwhitec'>
                              <div className='slboxheader'>
                                 <div className='slboxfigure'>
                                    <div className='slboximg1'></div>
                                 </div>
                              </div>
                              <div className='slboxbottom sliderpadding'>
                                 <div className="slboxheight">
                                    <span className='sltype'>Program</span>
                                    <h3 className='heading-text'>SLII® Powering Inspired Leaders™</h3>
                                    <p className='fs-14'>Only situational leaders can motivate their workers to rise to the challenge.</p>
                                 </div>
                                 <a href='/blanchardindia/our-content/programs/slii' className='kbbtn kbbtn--orange mtt-0 btn-size'>Learn More</a>
                              </div>
                           </div>
                        </div>

                        <div className='slxpd30 p-10 h-530'>
                           <div className='slbox darkblueboxc forwhitec'>
                              <div className='slboxheader'>
                                 <div className='slboxfigure'>
                                    <div className='slboximg2'></div>
                                 </div>
                              </div>
                              <div className='slboxbottom sliderpadding'>
                                 <div className="slboxheight">
                                    <span className='sltype'>Program</span>
                                    <h3 className='heading-text'>Coaching Essentials®</h3>
                                    <p className='fs-14'>Essential coaching abilities for managers and leaders</p>
                                 </div>
                                 <a href='/blanchardindia/our-content/programs/coaching-essentials' className='kbbtn kbbtn--orange mtt-0 btn-size'>Learn More</a>
                              </div>
                           </div>
                        </div>

                        <div className='slxpd30 p-10 h-530'>
                           <div className='slbox darkwhiteboxc forwhitec'>
                              <div className='slboxheader'>
                                 <div className='slboxfigure'>
                                    <div className='slboximg3'></div>
                                 </div>
                              </div>
                              <div className='slboxbottom sliderpadding'>
                                 <div className="slboxheight">
                                    <span className='sltype'>Program</span>
                                    <h3 className='colortheme heading-text'>Essential Motivators™</h3>
                                    <p className='colorblack fs-14'>Enhance collaboration by knowing yourself and others</p>
                                 </div>
                                 <a href='/blanchardindia/our-content/programs/essential-motivators' className='kbbtn kbbtn--orange mtt-0 btn-size'>Learn More</a>
                              </div>
                           </div>
                        </div>


                        <div className='slxpd30 p-10 h-530'>
                           <div className='slbox darkwhiteboxc forwhitec'>
                              <div className='slboxheader'>
                                 <div className='slboxfigure'>
                                    <div className='slboximg4'></div>
                                 </div>
                              </div>
                              <div className='slboxbottom sliderpadding'>
                                 <div className="slboxheight">
                                    <span className='sltype'>Services</span>
                                    <h3 className='colortheme heading-text'>Design Studio</h3>
                                    <p className='colorblack fs-14'>Custom services to support your learning initiatives</p>
                                 </div>
                                 <a href='/blanchardindia/what-we-do/custom-solutions' className='kbbtn kbbtn--orange mtt-0 btn-size'>Learn More</a>
                              </div>
                           </div>
                        </div>
                     </Slider>
                  </div>


               </div>
            </div>
         </section>

         <section className='SuccessStory'>
            <div className='container-fluid ptt-90 pbb-60 p-10'>
               <div className='row align-items-center'>
                  <div className='col-sm-6'>
                     <div>
                        <h2 className='heading-text'>
                           Client Success Story
                        </h2>
                        <h4>
                           BUSINESS SERVICES
                        </h4>
                        <h3 className='heading-text new-texthcl'>HCL Technologies</h3>

                        <p className='fs-12 newfs-20'>
                        HCL Technologies is one of India’s leading global IT Services companies, providing software-led IT solutions, remote infrastructure management services, and business process outsourcing. With 35 offices in 17 countries, HCL’s customer base reads like a who’s who in business.
                        </p>
                        <a href='/blanchardindia/resources/client-spotlights/hcl-technologies' className='kbbtn kbbtn--orange  mtt-10 btn-size'>Learn More</a>
                     </div>
                  </div>

                  <div className='col-sm-6 pa0000'>
                     <div className='pll-100'>
                        <img src="/kbassets/img/kbnew/Lexisnexis-client-success-story.jpg" alt="Images" />
                     </div>
                  </div>

               </div>
            </div>
         </section>


         <div className="brand-area py-10">
            <div className="container">
               <div className='row'>
                  <div className='col-sm-12 text-center pbb-40 py-10'>
                     <h2 className='sectionh ptt-50 py-10 heading-text'>Our Clients</h2>
                  </div>
                  <div className='col-sm-12 pbb-40'>
                     <Slider {...settings}>
                        <div key={1}>
                           <img src="kbassets/img/boston-1.png" alt="Images" />
                        </div>
                        <div key={2}>
                           <img src="kbassets/img/tcs.png" alt="Images" />
                        </div>
                        <div key={3}>
                           <img src="kbassets/img/optum.png" alt="Images" />
                        </div>
                        <div key={4}>
                           <img src="kbassets/img/nthrive.png" alt="Images" />
                        </div>
                        <div key={5}>
                           <img src="kbassets/img/mcm.png" alt="Images" />
                        </div>
                        <div key={6}>
                           <img src="kbassets/img/hp.png" alt="Images" />
                        </div>
                        <div key={7}>
                           <img src="kbassets/img/hero.png" alt="Images" />
                        </div>
                        <div key={8}>
                           <img src="kbassets/img/hcl.png" alt="Images" />
                        </div>
                        <div key={9}>
                           <img src="kbassets/img/fA.png" alt="Images" />
                        </div>
                     </Slider>
                  </div>
               </div>
            </div>
         </div>



        

         <div className="LeadershipResources">
            <div className="container pbb-50">
               <div className='row'>
                  <div className='col-sm-12 text-center pbb-40'>
                     <h2 className='sectionh ptt-50 heading-text'>Online Leadership Resources</h2>
                     <p className='headingp'>Explore valuable articles, videos, and tools to support your business transformation.</p>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3'>
                     <div className='reinner'>
                        <a href='/blanchardindia/ebooks'>
                           <img src="/kbassets/img/kbnew/icon/eBooks.svg" alt="Images" />
                           <h3 className='new-reinnertext'>eBooks</h3>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3'>
                     <div className='reinner'>
                        <a href='/blanchardindia/white-paper'>
                           <img src="/kbassets/img/kbnew/icon/accelerate-development.svg" alt="Images" />
                           <h3 className='new-reinnertext'>White Papers</h3>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3'>
                     <div className='reinner'>
                        <a href='/blanchardindia/blog'>
                           <img src="/kbassets/img/kbnew/icon/Articles.svg" alt="Images" />
                           <h3 className='new-reinnertext'>Blog Articles</h3>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-12 col-md-6 col-lg-3'>
                     <div className='reinner'>
                        <a href='/blanchardindia/podcast'>
                           <img src="/kbassets/img/kbnew/icon/podcasts.svg" alt="Images" />
                           <h3 className='new-reinnertext'>Podcasts</h3>
                        </a>
                     </div>
                  </div>

                  {/* <div className='col-sm-12 text-center'>
                     <a href='#' className='kbbtn kbbtn--orange  mtt-10'>View All Resources</a>
                  </div> */}

               </div>
            </div>
         </div>

         
      </>
   )
}
