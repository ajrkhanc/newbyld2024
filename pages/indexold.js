import Head from 'next/head'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export async function getServerSideProps() {
   const res = await fetch('https://byldnewspr.vercel.app/api/posts')
   const posts = await res.json()

   return {
      props: {
         posts
      },
   }
} 

export default function Home({ posts }) {

   const PopupRegisterd = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonformpopup").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         console.log(this.responseText);
      }
      xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/22/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
               document.getElementById("showlabel1popup").innerHTML = "Thank you for your details. Check your inbox for more details.";

               document.getElementById("showlabel1popup").style.display = "block";
               setTimeout(function () {
                  document.getElementById("popuphidec").style.display = "none";
               }, 3000);


            } else {
               alert('There was a problem with the request.');
            }
         }
      };
      xhttp.send("your-email=" + event.target.fmail.value)

   }

   var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 3000,
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
               slidesToScroll: 2
            }
         }
      ]
   };

   var settings1 = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1
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


   var postslider = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1
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
            <title>HR and Business Productivity Solutions | BYLD Group</title>
            <meta name="description" content="Largest group in South Asia offering HR and business productivity solutions for individuals, teams and organizations. Served 300 of 500 Fortune companies." />
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
            <script
               dangerouslySetInnerHTML={{
                  __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(30000).fadeIn();
               $('.close').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
               $('.x').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
             });
          `,
               }}
            />
         </Head>

         <div className="rs-services style8 dnone767px">
            <div className="container-fluid">
               <div className="row y-middle">
                  <div className="col-lg-5">
                     <div className="sec-title3 ptt-70 pbb-40">
                        <h3 className="sliderh3">WELCOME TO</h3>
                        <h2 className="sliderh2">BYLD Group</h2>
                        <p className="sliderp">Founded in 1998, backed by 1000+ years of accumulated professional
                           experience, and having served 5,00,000+ individuals around the globe, we are
                           dedicated to enabling individuals and organizations to achieve
                           EXCELLENCE.</p>
                     </div>
                  </div>
                  <div className="col-lg-7 pl-30 md-pl-15">
                     <img src="/assets/img/profasnalteam.jpg" alt="ba" />
                  </div>
               </div>
            </div>
         </div>

         <div className="rs-services style8 mblock">
            <div className="container-full">
               <div className="row y-middle">
                  <div className="col-lg-7 pl-30 md-pl-15">
                     <img src="/assets/img/banner/tabbanner-mobile.jpg" alt="ba" />
                  </div>

                  <div className="col-lg-5">
                     <div className="sec-title3 pll-30 ptt-20 pbb-10">
                        <h3 className="sliderh3">WELCOME TO</h3>
                        <h2 className="sliderh2">BYLD Group</h2>
                        <p className="sliderp">Founded in 1998, backed by 1000+ years of accumulated professional
                           experience, and having served 5,00,000+ individuals around the globe, we are
                           dedicated to enabling individuals and organizations to achieve
                           EXCELLENCE.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         <div className="tabsbg ptt-30 pll-30 pbb-30 prr-30 mtt-50">
            <div className="container-full">
               <Tabs>
                  <div className='row'>
                     <div className='col-sm-12'>
                        <div className="sec-title3 text-center mbb-35">
                           <h2 className="title primary-color pbb-10 colorw">OUR SOLUTIONS</h2>
                           <div className="heading-border-line center-style"></div>
                        </div>
                     </div>
                     <div className='col-sm-4 mresa'>
                        <TabList className="lefttab">
                           <Tab><i className='fa fa-folder-o'></i> Experiential Learning</Tab>
                           <Tab><i className='fa fa-users'></i> Leadership & Performance</Tab>
                           <Tab><i className='fa fa-newspaper-o'></i> Assessments</Tab>
                           <Tab><i className='fa fa-newspaper-o'></i> BeSpoke</Tab>
                           <Tab><i className='fa fa-object-group'></i> Staffing & Search</Tab>
                           <Tab><i className='fa fa-cogs'></i> Coaching</Tab>
                        </TabList>
                     </div>
                     <div className='col-sm-8 bgwhite'>
                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">Experiential Learning</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>Today’s stressful and distracted workplace environments are taking a toll on people’s learning and development efforts. Let’s face it; working smarter is the only choice you have and this is where our experiential learning programs help you learn quickly and learn essential skills to keep delivering consistently. For companies of all sizes, and all kinds of people and organizational needs, we bring you a plethora of experiential learning trainings that are unique, highly effective and available in virtual, and offline formats:</p>
                           </div>
                           <div className=''>
                              <div>
                                 <ul className='solutionslist'>
                                    <li><a target="_blank" href="/eaglesflightindia/"><i className='fa fa-angle-double-right'></i> Eagle's Flight</a></li>
                                    <li><a href="/business-today-simulations"><i className='fa fa-angle-double-right'></i> Business Today Simulations</a></li>
                                    <li className='d-none'><a href="#"><i className='fa fa-angle-double-right'></i> Gaminar</a></li>
                                    <li><a href="/jenson-8"><i className='fa fa-angle-double-right'></i> Jenson 8 (Virtual Reality Trainings)</a></li>
                                 </ul>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/our-solutions/experiential-learning"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">Leadership & Performance</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>Ever since the COVID 19 pandemic has hit the world, leaders across the globe have been striving hard to maintain peace within their teams while improving their productivity. Give your leaders the right skills, support, and methods that successful leaders around the world are using.</p>
                              <p className='mbb-5'>We bring you a plethora of world-renowned training brands that are at the top list of Fortune 500 companies. These include:</p>
                           </div>
                           <div className='row'>
                              <div className='col-sm-12'>
                                 <ul className='solutionslist'>
                                    <li><Link href="https://blanchardinternational.co.in/"><a target="_blank"><i className='fa fa-angle-double-right'></i> Blanchard India</a></Link></li>
                                    <li><Link href="/tirian"><a><i className='fa fa-angle-double-right'></i> Tirian</a></Link></li>
                                    <li><Link href="/cruciallifechangingskills/"><a target="_blank"><i className='fa fa-angle-double-right'></i> Crucial Life Changing Skills</a></Link></li>
                                    <li><Link href="/leadership-and-performance/trapologist"><a><i className='fa fa-angle-double-right'></i> Trapologist at Work™</a></Link></li>
                                 </ul>
                              </div>
                              <div className='col-sm-12'>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/our-solutions/leadership-and-talent-development"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">Assessments</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>A company is as strong as its people. Organizations of all sizes prefer psychometric assessments for hiring and managing people and fostering the right culture across all the levels of an organizational hierarchy. Explore our best-in-class assessment brands that have been revolutionizing people development across the globe:</p>
                           </div>
                           <div className=''>
                              <div>
                                 <ul className='solutionslist'>
                                    <li><Link href="/everythingdisc"><a target="_blank"><i className='fa fa-angle-double-right'></i> DiSC<sup>®</sup></a></Link></li>
                                    <li><Link href="/assessments/lumina-psychometric-assesments"><a><i className='fa fa-angle-double-right'></i> Lumina Spark</a></Link></li>
                                    <li><Link href="/assessments/talentsmart-eq-assesments"><a><i className='fa fa-angle-double-right'></i> TalentSmart EQ Assessments</a></Link></li>
                                    <li className='d-none'><Link href="/assessments/assessments-and-development-centers"><a><i className='fa fa-angle-double-right'></i> Assessments and Development Centers</a></Link></li>
                                 </ul>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/our-solutions/assessments"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">BeSpoke</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged:</p>
                           </div>
                           <div className=''>
                              <div>
                                 <ul className='solutionslist'>
                                    <li><Link href="/bespoke/persona-global"><a><i className='fa fa-angle-double-right'></i> Persona Global</a></Link></li>
                                    {/* <li><Link href="#"><a><i className='fa fa-angle-double-right'></i> SLI</a></Link></li>
                        <li><Link href="#"><a><i className='fa fa-angle-double-right'></i> Large Projects</a></Link></li> */}
                                 </ul>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/bespoke"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">Staffing</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>With the advent of technology and automation, more and more companies are focusing on digitizing their processes. This is where we combine technology and staffing services to provide a one-stop solution to manage recruitment, training, payrolls, payments, and automate complete employee lifecycle management through a single tool.</p>
                              <p className='ptt-20 mbb-5'>With a team of expert consultants having wide experience and expertise in the local labor market, and cutting-edge technology, we offer you excellent staffing and business operation solutions to take your business forward. Our two major verticals include:</p>
                           </div>
                           <div className=''>
                              <div>
                                 <ul className='solutionslist'>
                                    <li><Link href="https://yomamultinational.com/"><a target="_blank"><i className='fa fa-angle-double-right'></i> YOMA Business Solutions</a></Link></li>
                                    <li className='d-none'><Link href="#"><a><i className='fa fa-angle-double-right'></i> YOMA Technologies</a></Link></li>
                                 </ul>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/our-solutions/staffing"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">Coaching</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>Managing the complexities of the VUCA business environment, disengaged employees, lowering morale and elevating ROI expectations has never been so challenging the way it has become now. To deal with these complexities and the frequently changing business environment, organizations today need to invest in coaching and development of their leaders, which helps them navigate successfully through these tough times. Our time-tested approach and renowned brands have been creating successful coaches and leaders around the world. Our key partnerships include:</p>
                           </div>
                           <div className=''>
                              <div>
                                 <ul className='solutionslist'>
                                    <li><Link href="#"><a><i className='fa fa-angle-double-right'></i> ICF Certification</a></Link></li>
                                    <li><Link href="/coaching/insideout-coaching"><a><i className='fa fa-angle-double-right'></i> InsideOut CoachingTM</a></Link></li>
                                    <li className='d-none'><Link href="#"><a><i className='fa fa-angle-double-right'></i> Breakthroughs</a></Link></li>
                                    <li><Link href="/coaching/executive-coaching"><a><i className='fa fa-angle-double-right'></i> Executive Coaching</a></Link></li>
                                 </ul>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/our-solutions/coaching"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                     </div>
                  </div>
               </Tabs>
            </div>
         </div>

         <section className='countersetion ptt-50 pbb-50'>
            <div className='container'>
               <div className='row'>

                  <div className='col-md-8'>
                     <div className='sec-title3 mbb-35'>
                        <h4 className="countertoph">WHY OUR CLIENTS TRUST US?</h4>
                        <div className="heading-border-line left-style"></div>
                     </div>

                     <div className='row'>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">500,000 +</span>
                                 </div>
                                 <p className="title">PEOPLE TRAINED</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">1,000 +</span>
                                 </div>
                                 <p className="title">YEARS OF ACCUMULATED CONSULTING EXPERIENCE</p>
                              </div>
                           </div>
                        </div>

                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">10 +</span>
                                 </div>
                                 <p className="title">GLOBAL PARTNERSHIPS</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">100,000 +</span>
                                 </div>
                                 <p className="title">ACCESS TO PROFILES</p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>

                  <div className='col-md-4'>
                     <div className='row rs-testimonial style2 rs-blog style1 pbb-15'>
                        <div className='col-sm-12'>
                           <div className='sec-title3 mbb-35'>
                              <h4 className="countertoph2">CLIENTS SPEAK</h4>
                              <div className="heading-border-line left-style"></div>
                           </div>
                        </div>
                        <Slider {...settings1}>
                           <div class="testi-wrap">
                              <div class="item-content">
                                 <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                                 <p>
                                    The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective
                                 </p>
                              </div>
                              <div class="testi-content">
                                 <div class="image-wrap">
                                    <img src="/assets/img/av.png" alt="Testimonial" />
                                 </div>
                                 <div class="testi-information">
                                    <div class="testi-name">Namita Shah</div>
                                    <span class="testi-title">(HSBC India)</span>
                                    <div class="ratting-img">
                                       <img src="/assets/img/ratting.png" alt="Testimonial" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="testi-wrap">
                              <div class="item-content">
                                 <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                                 <p>
                                    We engaged their services for facilitating a session on SLII<sup>®</sup> for our 26 employees, who were members of the regional and local country leadership team spread across APAC, in Nov 2019. The objective of the learning program being enabling the leaders to drive change in the organization and have constructive & difficult conversations with their teams, ensuring the organizational goals are at the focal point of discussions.
                                 </p>
                              </div>
                              <div class="testi-content">
                                 <div class="image-wrap">
                                    <img src="/assets/img/av.png" alt="Testimonial" />
                                 </div>
                                 <div class="testi-information">
                                    <div class="testi-name">Rangkynsai Nongbet</div>
                                    <span class="testi-title">(Ortho Clinical Diagnostics)</span>
                                    <div class="ratting-img">
                                       <img src="/assets/img/ratting.png" alt="Testimonial" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="testi-wrap">
                              <div class="item-content">
                                 <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                                 <p>
                                    Thankful to the team at Crucial Life Changing Skills for conducting a power packed session on the topic of “Influencer” for our leaders at CK Birla Group. The simple (and powerful) 6 sources of influence model will guide us to to drive change in our personal and professional space!
                                 </p>
                              </div>
                              <div class="testi-content">
                                 <div class="image-wrap">
                                    <img src="/assets/img/av.png" alt="Testimonial" />
                                 </div>
                                 <div class="testi-information">
                                    <div class="testi-name">Prerna S</div>
                                    <span class="testi-title">(Birla Fertility and IVF)</span>
                                    <div class="ratting-img">
                                       <img src="/assets/img/ratting.png" alt="Testimonial" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </Slider>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <div className='container ptt-40 d-none'>
            <div className='row'>
               <div className='col-md-12'>
                  <div className='sec-title3 mbb-35'>
                     <h4 className="countertoph2 text-center">WHAT MAKES US DIFFERENT?</h4>
                     <div className="heading-border-line left-center"></div>
                  </div>
                  <div className='row'>
                     <div className='col-sm-6'>
                        <div className="counter-right mbb-15">
                           <div className="counter-list-right mb-20 homeboxp">
                              <div className="counter-icon-right">
                                 <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                              </div>
                              <p className="title">Globally/Nationally researched and benchmarked, culturally neutral, and customizable products and services.</p>
                           </div>
                        </div>
                     </div>
                     <div className='col-sm-6'>
                        <div className="counter-right">
                           <div className="counter-list-right mb-20 homeboxp">
                              <div className="counter-icon-right">
                                 <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                              </div>
                              <p className="title">Solutions across organizational hierarchies ‘ranging’ from the board room to front-end staff.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <section className='countersetion ptt-50 pbb-50 d-none'>
            <div className='container'>
               <div className='row'>
                  <div className='col-md-8'>
                     <div className='sec-title3 mbb-35'>
                        <h4 className="countertoph">WHY OUR CLIENTS TRUST US?</h4>
                        <div className="heading-border-line left-style"></div>
                     </div>

                     <div className='row'>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">500,000 +</span>
                                 </div>
                                 <p className="title">PEOPLE TRAINED</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">1,000 +</span>
                                 </div>
                                 <p className="title">YEARS OF ACCUMULATED CONSULTING EXPERIENCE</p>
                              </div>
                           </div>
                        </div>

                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">10 +</span>
                                 </div>
                                 <p className="title">GLOBAL PARTNERSHIPS</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">100,000 +</span>
                                 </div>
                                 <p className="title">ACCESS TO PROFILES</p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className='col-md-4'>
                     <div className='sec-title3 mbb-35'>
                        <h4 className="countertoph2">WHAT MAKES US DIFFERENT?</h4>
                        <div className="heading-border-line left-style"></div>
                     </div>
                     <div className='row'>
                        <div className='col-sm-12'>
                           <div className="counter-right mbb-15">
                              <div className="counter-list-right mb-20 homeboxp">
                                 <div className="counter-icon-right">
                                    <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                                 </div>
                                 <p className="title">Globally/Nationally researched and benchmarked, culturally neutral, and customizable products and services.</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-12'>
                           <div className="counter-right">
                              <div className="counter-list-right mb-20 homeboxp">
                                 <div className="counter-icon-right">
                                    <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                                 </div>
                                 <p className="title">Solutions across organizational hierarchies ‘ranging’ from the board room to front-end staff.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div className="rs-services style1 modify shape-bg ptt-40 pbb-40">
            <div className="container-full">
               <div className="sec-title3 text-center mb-30">
                  <h2 className="title color2">INDUSTRIES SERVED SO FAR</h2>
                  <div className="heading-border-line center-style"></div>
               </div>
               <div className="row service-wrap mr-0 ml-0">
                  <Slider {...settings}>
                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Automobile</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Tata Motors </li>
                              <li><i className="fa fa-angle-double-right"></i> Mahindra & Mahindra </li>
                              <li><i className="fa fa-angle-double-right"></i> Eicher Motors</li>
                              <li><i className="fa fa-angle-double-right"></i> Renault India</li>
                              <li><i className="fa fa-angle-double-right"></i> Nissan Motors</li>
                              <li><i className="fa fa-angle-double-right"></i> Hyundai India</li>
                              <li><i className="fa fa-angle-double-right"></i> BMW India Private limited</li>
                              <li><i className="fa fa-angle-double-right"></i> FANUC India Private Limited</li>
                              <li><i className="fa fa-angle-double-right"></i> Hero MotoCorp Ltd.</li>
                              <li><i className="fa fa-angle-double-right"></i> Tenneco Automotive India Pvt Ltd</li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Manufacturing</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> JSW Steel</li>
                              <li><i className="fa fa-angle-double-right"></i> Jindal Saw </li>
                              <li><i className="fa fa-angle-double-right"></i> Mahindra Tractors </li>
                              <li><i className="fa fa-angle-double-right"></i> Eicher Tractors </li>
                              <li><i className="fa fa-angle-double-right"></i> Applied Materials </li>
                              <li><i className="fa fa-angle-double-right"></i> Statkraft </li>
                              <li><i className="fa fa-angle-double-right"></i> ABB India Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Adani Enterprises Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Asian Paints Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Autoliv India Pvt. Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">IT/ITES</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Cyient </li>
                              <li><i className="fa fa-angle-double-right"></i> HCL Tech </li>
                              <li><i className="fa fa-angle-double-right"></i> Hexaware Tech</li>
                              <li><i className="fa fa-angle-double-right"></i> Infosys </li>
                              <li><i className="fa fa-angle-double-right"></i> GE Appliances </li>
                              <li><i className="fa fa-angle-double-right"></i> Scientific Games </li>
                              <li><i className="fa fa-angle-double-right"></i> Tata Communications </li>
                              <li><i className="fa fa-angle-double-right"></i> Allianz Services Private Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Fujitsu Consulting India Private Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Gap IT Services India Pvt Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Hospitality</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Tata Motors </li>
                              <li><i className="fa fa-angle-double-right"></i> EIH </li>
                              <li><i className="fa fa-angle-double-right"></i> Ibibo Group</li>
                              <li><i className="fa fa-angle-double-right"></i> Thomas Cook (India) Ltd</li>
                              <li><i className="fa fa-angle-double-right"></i> Make my Trip </li>
                              <li><i className="fa fa-angle-double-right"></i> Go Ibibo</li>
                              <li><i className="fa fa-angle-double-right"></i> Netherland Embassy</li>
                              <li><i className="fa fa-angle-double-right"></i> Newzealand Embassy </li>
                              <li><i className="fa fa-angle-double-right"></i> Indigo </li>
                              <li><i className="fa fa-angle-double-right"></i> Airseva India Pvt. Ltd</li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">BFSI</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> SBI Mutual Fund </li>
                              <li><i className="fa fa-angle-double-right"></i> Max Life Insurance Company </li>
                              <li><i className="fa fa-angle-double-right"></i> Bajaj Allianz Life Insurance Company </li>
                              <li><i className="fa fa-angle-double-right"></i> SBI Life Insurance Company </li>
                              <li><i className="fa fa-angle-double-right"></i> AEGON Life Insurance Company </li>
                              <li><i className="fa fa-angle-double-right"></i> Aditya Birla Finance Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> Sequoia Capital </li>
                              <li><i className="fa fa-angle-double-right"></i> DESHAW </li>
                              <li><i className="fa fa-angle-double-right"></i> DBS </li>
                              <li><i className="fa fa-angle-double-right"></i> ANZ </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">FMCG/FMCD</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Johnson</li>
                              <li><i className="fa fa-angle-double-right"></i> GlaxoSmith </li>
                              <li><i className="fa fa-angle-double-right"></i> Procter &amp; Gamble </li>
                              <li><i className="fa fa-angle-double-right"></i> Hitachi </li>
                              <li><i className="fa fa-angle-double-right"></i> Kline Consumer Healthcare Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Dabur </li>
                              <li><i className="fa fa-angle-double-right"></i> Marico </li>
                              <li><i className="fa fa-angle-double-right"></i> Future Retail Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Hennes &amp; Mauritz India Pvt. Ltd</li>
                              <li><i className="fa fa-angle-double-right"></i> TNS India Pvt Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Health Care and Life Sciences</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Novozymes South Asia Pvt. Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> Apollo Hospital </li>
                              <li><i className="fa fa-angle-double-right"></i> Johnson &amp; Johnson </li>
                              <li><i className="fa fa-angle-double-right"></i> Sun Pharma </li>
                              <li><i className="fa fa-angle-double-right"></i> Torrent Pharma </li>
                              <li><i className="fa fa-angle-double-right"></i> Mylan Laboratories </li>
                              <li><i className="fa fa-angle-double-right"></i> Procter &amp; Gamble </li>
                              <li><i className="fa fa-angle-double-right"></i> Sun Pharma Adv </li>
                              <li><i className="fa fa-angle-double-right"></i> Stryker </li>
                              <li><i className="fa fa-angle-double-right"></i> Abbott Healthcare Pvt Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Software and Internet</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Addteq Software India Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Agilent Technologies Private Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> KLA -TENCOR SOFTWARE INDIA </li>
                              <li><i className="fa fa-angle-double-right"></i> Kronos Solutions India Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Nelito Systems Pvt Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> Netmagic IT Services Pvt. Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> OnceHub Technologies Pvt. Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Samsung SDS India Private Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Smart Chip Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> TD Williamson India Pvt Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Professional Services</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Deloitte </li>
                              <li><i className="fa fa-angle-double-right"></i> Price Waterhouse Coopers(PwC) </li>
                              <li><i className="fa fa-angle-double-right"></i> Grant Thornton LLP </li>
                              <li><i className="fa fa-angle-double-right"></i> People scout </li>
                              <li><i className="fa fa-angle-double-right"></i> Accenture </li>
                              <li><i className="fa fa-angle-double-right"></i> Aranca (Mumbia) Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Eaton Management Services LLP </li>
                              <li><i className="fa fa-angle-double-right"></i> EY Global Delivery Services India LLP </li>
                              <li><i className="fa fa-angle-double-right"></i> Mckinsey Knowledge Centre India Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Price Waterhouse Coopers Pvt Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Electronics and Electrical</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Finolex Cables </li>
                              <li><i className="fa fa-angle-double-right"></i> Blue Star </li>
                              <li><i className="fa fa-angle-double-right"></i> Siemens </li>
                              <li><i className="fa fa-angle-double-right"></i> ABB India </li>
                              <li><i className="fa fa-angle-double-right"></i> LG Soft India Private Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Infiniti Retail Ltd. - Croma </li>
                              <li><i className="fa fa-angle-double-right"></i> Crompton Greaves Consumer Electrical </li>
                              <li><i className="fa fa-angle-double-right"></i> Eaton Corporation </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Chemical</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Asian Paints </li>
                              <li><i className="fa fa-angle-double-right"></i> Akzo Nobel </li>
                              <li><i className="fa fa-angle-double-right"></i> UPL Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Nalco water (An Ecolab company) </li>
                              <li><i className="fa fa-angle-double-right"></i> Rhodia Speciality Chemicals </li>
                              <li><i className="fa fa-angle-double-right"></i> Bayer Crop Science </li>
                              <li><i className="fa fa-angle-double-right"></i> Boston Scientific India Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> QUAKER CHEMICAL INDIA PRIVATE LIMITED </li>
                              <li><i className="fa fa-angle-double-right"></i> Solvay Group </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Fashion and Lifestyle</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Jindal Worldwide</li>
                              <li><i className="fa fa-angle-double-right"></i> Indo Count </li>
                              <li><i className="fa fa-angle-double-right"></i> Aquarelle India </li>
                              <li><i className="fa fa-angle-double-right"></i> Jockey India </li>
                              <li><i className="fa fa-angle-double-right"></i> Shoppers Stop Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> House of Anita Dongre </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Engineering</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Keller </li>
                              <li><i className="fa fa-angle-double-right"></i> Angelique </li>
                              <li><i className="fa fa-angle-double-right"></i> Angelique International Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Arcadis Consulting India Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Keller Ground Engineering India Pvt. Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> Konecranes and Demag Pvt. Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> Larsen &amp; Toubro Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> UltraTech Cement Ltd </li>


                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Government</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> NTPC</li>
                              <li><i className="fa fa-angle-double-right"></i> Embassy of Netherlands </li>
                              <li><i className="fa fa-angle-double-right"></i> Reserve Bank of India </li>
                              <li><i className="fa fa-angle-double-right"></i> National Stock Exchange </li>
                           </ul>
                        </div>
                     </div>


                  </Slider>

               </div>

            </div>
         </div>

         <section className='ptt-50 pbb-50'>
            <div className='container'>
               <div className='row'>
                  <div className='col-md-8'>
                     <div className='row bgorwhite boderb5'>
                        <div className='col-sm-12'>
                           <div className='sec-title3 mbb-35'>
                              <h4 className="countertoph2">RESOURCE CENTER</h4>
                              <div className="heading-border-line left-style"></div>
                           </div>
                        </div>
                        <div className='col-sm-6 homeblogs'>
                           <a href="/books"><img src='/assets/img/home-book-1.jpg' alt='' /></a>
                           <a href="/books">Our book recommendations for your excellence</a>
                        </div>
                        <div className='col-sm-6 homeblogs'>
                           <a href="/videos"><img src='/assets/img/home-video.jpg' alt='' /></a>
                           <a href="/videos">Checkout the recent videos from our hub</a>
                        </div>

                     </div>
                  </div>
                  <div className='col-md-4'>
                     <div className='newsc pbb-40'>
                        <div className='sec-title3 mbb-35'>
                           <h4 className="countertoph2">WHAT MAKES US DIFFERENT?</h4>
                           <div className="heading-border-line left-style"></div>
                        </div>
                        <Slider {...postslider}>
                        {
                           posts.slice(0, 5).map((allpr) => {
                              return (
                                
                                    <div className="mbb-20">
                                       <div className="blog-item">
                                          <div className="blog-img">
                                             <a target="_blank" href={allpr.PostNewURL}><img src={allpr.ImageURL} alt={allpr.ImageURL} /></a>
                                          </div>
                                          <div className="blog-content">
                                             <h3 className="blog-title mbb-10"><a target="_blank" href={allpr.PostNewURL} className='eventsboxtitle'>{allpr.Title}</a></h3>
                                             <div className="blog-meta">
                                                <ul className="btm-cate">
                                                   <li className='pdate'>
                                                      <div className="blog-date">
                                                         <i className="fa fa-calendar-check-o"></i> <span>Published: </span>{moment(allpr.ModifiedDate).format('MMMM DD Y')}
                                                      </div>
                                                      <div className="author">
                                                         <i className="fa fa-building-o"></i> <span>Published In:</span> {allpr.ImageAlt}
                                                      </div>
                                                   </li>
                                                </ul>
                                             </div>
                                             <div className="blog-button">
                                                <a className="blog-btn" target="_blank" href={allpr.PostNewURL}>Continue Reading</a>
                                             
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                

                              )
                           })
                        }
                        </Slider>
                        {/* <div className='row'>
                           <div className='col-sm-12'>
                              <div className="counter-right mbb-15">
                                 <div className="counter-list-right mb-20 homeboxp">
                                    <div className="counter-icon-right">
                                       <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                                    </div>
                                    <p className="title">Globally/Nationally researched and benchmarked, culturally neutral, and customizable products and services.</p>
                                 </div>
                              </div>
                           </div>
                           <div className='col-sm-12'>
                              <div className="counter-right">
                                 <div className="counter-list-right mb-20 homeboxp">
                                    <div className="counter-icon-right">
                                       <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                                    </div>
                                    <p className="title">Solutions across organizational hierarchies ‘ranging’ from the board room to front-end staff.</p>
                                 </div>
                              </div>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  <div className='col-md-4 d-none'>
                     <div className='row rs-testimonial style2 bgorwhite rs-blog style1 pbb-15'>
                        <div className='col-sm-12'>
                           <div className='sec-title3 mbb-35'>
                              <h4 className="countertoph2">CLIENTS SPEAK</h4>
                              <div className="heading-border-line left-style"></div>
                           </div>
                        </div>
                        <Slider {...settings1}>
                           <div class="testi-wrap">
                              <div class="item-content">
                                 <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                                 <p>
                                    The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective
                                 </p>
                              </div>
                              <div class="testi-content">
                                 <div class="image-wrap">
                                    <img src="/assets/img/av.png" alt="Testimonial" />
                                 </div>
                                 <div class="testi-information">
                                    <div class="testi-name">Namita Shah</div>
                                    <span class="testi-title">(HSBC India)</span>
                                    <div class="ratting-img">
                                       <img src="/assets/img/ratting.png" alt="Testimonial" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="testi-wrap">
                              <div class="item-content">
                                 <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                                 <p>
                                    We engaged their services for facilitating a session on SLII<sup>®</sup> for our 26 employees, who were members of the regional and local country leadership team spread across APAC, in Nov 2019. The objective of the learning program being enabling the leaders to drive change in the organization and have constructive & difficult conversations with their teams, ensuring the organizational goals are at the focal point of discussions.
                                 </p>
                              </div>
                              <div class="testi-content">
                                 <div class="image-wrap">
                                    <img src="/assets/img/av.png" alt="Testimonial" />
                                 </div>
                                 <div class="testi-information">
                                    <div class="testi-name">Rangkynsai Nongbet</div>
                                    <span class="testi-title">(Ortho Clinical Diagnostics)</span>
                                    <div class="ratting-img">
                                       <img src="/assets/img/ratting.png" alt="Testimonial" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="testi-wrap">
                              <div class="item-content">
                                 <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                                 <p>
                                    Thankful to the team at Crucial Life Changing Skills for conducting a power packed session on the topic of “Influencer” for our leaders at CK Birla Group. The simple (and powerful) 6 sources of influence model will guide us to to drive change in our personal and professional space!
                                 </p>
                              </div>
                              <div class="testi-content">
                                 <div class="image-wrap">
                                    <img src="/assets/img/av.png" alt="Testimonial" />
                                 </div>
                                 <div class="testi-information">
                                    <div class="testi-name">Prerna S</div>
                                    <span class="testi-title">(Birla Fertility and IVF)</span>
                                    <div class="ratting-img">
                                       <img src="/assets/img/ratting.png" alt="Testimonial" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </Slider>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div id='popuphidec' class='popup wow fadeInUp delay-0-2s animated animateUP'>
            <div class='cnt223'>
               <a href='' class='close popupclose'>X</a>
               <div className='popupinner'>
                  <div className='popupimg text-center'>
                     <img src="/assets/img/popupimg.png" />
                     <h3>YOU CAN’T LEARN ANYTHING FROM A POP-UP.</h3>
                     <p>But you can learn a lot from insightful matters by our experts by getting those delivered to your inbox every month.</p>
                  </div>
                  <div className='popupform'>
                     <form id="contactForm" onSubmit={PopupRegisterd}>
                        <div className="row clearfix justify-content-center">
                           <div className="col-sm-12">
                              <div className="form-group mb-0">
                                 <input type="email" id="EmailAddress" name="fmail" className="form-control popupsus" placeholder="Enter Your Email" required />
                              </div>
                           </div>

                           <div className="col-sm-12">
                              <div className="form-group mb-0">
                                 <input id="submitbuttonformpopup" type="submit" className="theme-btn btnwidth fullbtn" value="SEND ME INSIGHTS" />
                              </div>
                              <div className="clearfix"></div>
                              <p id="showlabel1popup" className="submitpopup" style={{ display: "none" }}></p>
                           </div>

                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>






      </>
   )
}
