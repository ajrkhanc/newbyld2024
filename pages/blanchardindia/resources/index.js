import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";

export default function ThanYouLP() {

    var settings2 = {
        dots: true,
        arrows: false,
        infinite: true,
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

    return (
        <>
            <Head>
                <title>Leadership Development Resources | Blanchard International</title>
                   <link rel="canonical" href="https://byldgroup.com/blanchardindia/resources" />
                <meta name="description" content="At Blanchard, we help organizations of all sizes, leaders at every career stage, and leadership trainers and coaches gain the skills they need to unlock their people’s potential." />
                <link rel="icon" href="/blanchardindia/favicon.ico" />
            </Head>

            <section className="bredkums pbb-100">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/blanchardindia/">HOME</a></li>
                                <li><a><span>RESOURCES</span></a></li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 pa0000">
                                <img className="" src="/kbassets/img/kbnew/diverse-people-working-office.jpg" alt="Images" />
                            </div>
                            <div className="col-sm-6">
                                <div className="innerbedkms">
                                    <h1>Explore our Leadership Development Resources</h1>
                                    <p>
                                    Valuable articles, videos, and tools to address the challenges of your leadership and management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 text-center pbb-50">
                            <h2 className="sectionh">Featured Insight</h2>
                        </div>
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/kbassets/img/kbnew/Turning-New-Hires-into-Top.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">Quickly Turn New Hires into Top Performers</h2>
                            <p className="headingp">
                            The aftermath of the pandemic has sparked a hiring boom and a widespread exodus from jobs. New hires are overrunning workplaces. And individuals are considering their options. It will depend on how leaders handle the inflow of new talent, whether new workers depart or remain, contribute or coast, struggle or thrive.
                            </p>
                            <a href='#' className='kbbtn kbbtn--orange mtt-20'>Read eBook</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='FlexiblyMatching'>
                <div className='container ptt-60 pbb-60'>
                    <div className='row align-items-center'>
                        <div className="col-sm-12 text-center pbb-50">
                            <h2 className="sectionh">
                                Upcoming Webinar
                            </h2>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2 className="sectionh3">
                                    Flexibly Matching Your Leadership Style to the Needs of Your People
                                </h2>
                                <p className="pbb-0">
                                    Join leadership expert Courtney Harrison for an in-depth look at the Blanchard approach to performance management. With participants from around the world, you’ll explore:
                                </p>
                                <div className="ajlist">
                                    <ul class="ptt-5">
                                        <li>The Development Continuum—a predictable path that explains how people move through four stages of development when performing a new task</li>
                                        <li>Diagnosing Effectively—how to identify a direct report’s development level by assessing their competence and commitment on a task or goal</li>
                                        <li>Matching Appropriately—identifying your default leadership style and learning how to add more direction and support when needed</li>
                                    </ul>
                                </div>
                                <p>
                                    Participants will gain a greater sense of leadership self-awareness, along with practical strategies to increase your effectiveness as a leader.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-6 pa0000'>
                            <div className='mimg100 imgborder pll-90'>
                                <img src="/kbassets/img/kbnew/Succeeding-in-a-Hybrid-Work-Environment.jpg" alt="Images" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="ExploreMoreResources">
                <div className="container pbb-60">
                    <div className='row'>
                        <div className='col-sm-12 text-center pbb-60'>
                            <h2 className='sectionh ptt-50'>Explore More Resources</h2>                            
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <a href='/blanchardindia/events-workshops'>
                                    <img src="/kbassets/img/kbnew/icon/webinars.svg" alt="Images" />
                                    <h3>Workshops <i class="bx bx-right-arrow-alt"></i></h3>                                    
                                </a>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <a href='/blanchardindia/ebooks'>
                                    <img src="/kbassets/img/kbnew/icon/eBooks.svg" alt="Images" />
                                    <h3>eBooks <i class="bx bx-right-arrow-alt"></i></h3>
                                </a>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <a href='/blanchardindia/blog'>
                                    <img src="/kbassets/img/kbnew/icon/Articles.svg" alt="Images" />
                                    <h3>Blog Posts <i class="bx bx-right-arrow-alt"></i></h3>
                                </a>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <a href='/blanchardindia/podcast'>
                                    <img src="/kbassets/img/kbnew/icon/podcasts.svg" alt="Images" />
                                    <h3>Podcasts <i class="bx bx-right-arrow-alt"></i></h3>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className="ptt-60 pbb-60 crucialleadershiptopics">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 text-center">
                            <h2 className="sectionh">Find Our Latest Insights on Critical <br></br>Leadership Topics</h2>
                            <p className="headingp pbb-10">
                            Explore articles, research, eBooks, webinars and more on the topics today's leadership experts talk about most.
                            </p>                           
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="hrfbox">
                                <a href="#">Inclusion</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="hrfbox">
                                <a href="#">Hybrid workplace</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="hrfbox">
                                <a href="#">Leadership skills</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="hrfbox">
                                <a href="#">Employee Engagement</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="hrfbox">
                                <a href="#">Retaining Top Talent</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="hrfbox">
                                <a href="#">Workplace Culture</a>
                            </div>
                        </div>

                        <div className="col-sm-2">
                            
                        </div>

                        <div className="col-sm-4">
                            <div className="hrfbox">
                                <a href="#">Servant Leadership</a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="hrfbox">
                                <a href="#">Learning Online</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* <section className='FeaturedBooksc ptt-60 pbb-60 bgdarkc'>
            <div className='container'>
               <div className='row'>                 
                  <div className='col-sm-12'>
                     <div className='row'>
                        <div className='col-sm-12 text-center'>
                           <h2 className='sectionh pbb-10'>Featured Books</h2>
                           <p className="headingp pbb-10">
                           Read our best-selling books that address today’s most pressing leadership challenges.
                            </p>
                        </div>                       
                     </div>
                  </div>

                  <div className='col-sm-12'> 
                     <Slider {...settings2}>

                        <div className='cfv'>
                           <div className='FeaturedBooksc'>                            
                              <div className='FeaturedBookscinner'>
                                <div className="sl2imgbox">
                                    <img src="/kbassets/img/kbnew/The-New-One-Minute-Manager-250px.png"/>
                                </div>                              
                                 <h3>The New One Minute Manager®</h3>
                                 <p>
                                 Ken Blanchard and Spencer Johnson
                                 </p>
                                 <a href='#' className='kbbtn kbbtn--orange mtt-60'>Buy Book</a></div>
                           </div>
                        </div>

                        <div className='cfv'>
                           <div className='FeaturedBooksc'>                            
                              <div className='FeaturedBookscinner'>
                                <div className="sl2imgbox">
                                    <img src="/kbassets/img/kbnew/Leading-at-a-Higher-Level-250px.png"/>
                                </div>                              
                                 <h3>Leading at a Higher Level</h3>
                                 <p>Ken Blanchard</p>
                                 <a href='#' className='kbbtn kbbtn--orange mtt-90'>Buy Book</a></div>
                           </div>
                        </div>

                        <div className='cfv'>
                           <div className='FeaturedBooksc'>                            
                              <div className='FeaturedBookscinner'>
                                <div className="sl2imgbox">
                                    <img src="/kbassets/img/kbnew/Leadership-and-the-One-Minute-Manager-250px.png"/>
                                </div>                              
                                 <h3>Leadership and the One Minute Manager®</h3>
                                 <p>Ken Blanchard, Drea Zigarmi, and Patricia Zigarmi</p>
                                 <a href='#' className='kbbtn kbbtn--orange mtt-20'>Buy Book</a></div>
                           </div>
                        </div>

                        <div className='cfv'>
                           <div className='FeaturedBooksc'>                            
                              <div className='FeaturedBookscinner'>
                                <div className="sl2imgbox">
                                    <img src="/kbassets/img/kbnew/TrustWorks.png"/>
                                </div>                              
                                 <h3>TrustWorks!</h3>
                                 <p>Ken Blanchard, Cynthia Omstead, and Martha Lawrence</p>
                                 <a href='#' className='kbbtn kbbtn--orange mtt-40'>Buy Book</a></div>
                           </div>
                        </div>

                        <div className='cfv'>
                           <div className='FeaturedBooksc'>                            
                              <div className='FeaturedBookscinner'>
                                <div className="sl2imgbox">
                                    <img src="/kbassets/img/kbnew/Self-Leadership-and-the-One-Minute-Manager.png"/>
                                </div>                              
                                 <h3>Self Leadership and the One Minute Manager</h3>
                                 <p>Ken Blanchard, Susan Fowler, and Laurence Hawkins</p>
                                 <a href='#' className='kbbtn kbbtn--orange mtt-20'>Buy Book</a></div>
                           </div>
                        </div>
                     </Slider>
                  </div>


               </div>
            </div>
         </section> */}

            



        </>
    )
}
