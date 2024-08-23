import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";

export default function ThanYouLP() {

    var settings2 = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
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
                <title>Leadership Training for Senior Leaders | Blanchard International</title>
                <link rel="canonical" href="https://byldgroup.com/blanchardindia/who-we-help/leaders-at-all-levels" />
                <meta name="description" content="Help your senior leaders continue to grow their management skills with leadership development training from Blanchard." />
                <link rel="icon" href="/blanchardindia/favicon.ico" />
            </Head>

            <section className="bredkums2 colortheme3bg pbb-100 border-bottom-left-radius-70">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/blanchardindia/">HOME</a></li>
                                <li className="brdlifirst"><a href="/blanchardindia/our-content/programs">WHO WE HELP</a></li>                 
                                <li><a><span>LEADERS AT ALL LEVELS</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Leaders at all Levels</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Developing leaders at all levels</h2>
                            <p className="headingp text-justify pbb-10">
                            At Blanchard, we strive to help leaders become unstoppable agents of change. With four decades of experience helping the world's most innovative companies, we have designed management training courses for all stages of a leader's career. Our content focuses on practical leadership skills that can be applied and remembered. Through our learning journeys catered to each unique leadership role, we aim to foster a culture of inspired leadership so leaders can achieve their personal best and improve organizational efficiency.
                            </p>                            
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Empowering-leaders.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Innovativelearning contanerbgc'>
            <div className='container-fluid ptt-90 pbb-60 colortheme2bg'>
               <div className='row'>
                  <div className='col-sm-6 pa0000'>
                     <div className='prr-90'>
                        <img src="/kbassets/img/kbnew/Solutions-to-grow-leadership.jpg" alt="Images" />
                     </div>
                  </div>
                  <div className='col-sm-6'>   
                     <div>
                        <h2>
                        Leadership development solutions for all levels
                        </h2>
                        <p>
                        We provide interactive learning courses and resources to deepen leaders' management and leadership skills from aspiring managers to the C-Suite.
                        </p>
                        <h4>
                           <strong>Each leadership level has its learning journey</strong>
                        </h4>
                        <ul>
                           <li><a href='/blanchardindia/who-we-help/leaders-at-all-levels/emerging-leaders'>Leaders in Emergence <i class="bx bx-right-arrow-alt"></i></a></li>
                           <li><a href='/blanchardindia/who-we-help/leaders-at-all-levels/new-managers'>Managers <i class="bx bx-right-arrow-alt"></i></a></li>
                           <li><a href='/blanchardindia/who-we-help/leaders-at-all-levels/executives'>Leaders with experience <i class="bx bx-right-arrow-alt"></i></a></li>
                           <li><a href='/blanchardindia/who-we-help/leaders-at-all-levels/senior-leaders'>Managers new to the company <i class="bx bx-right-arrow-alt"></i></a></li>
                           <li><a href='/blanchardindia/who-we-help/leaders-at-all-levels/experienced-leaders'>Senior Leaders <i class="bx bx-right-arrow-alt"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>



            
        </>
    )
}
