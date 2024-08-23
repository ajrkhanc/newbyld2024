import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";

export default function AboutUs(){

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

    return(
        <>
          <Head>
            <title>Organizational Development | E-learning Portal | BYLD Group </title>
            <meta name="description" content="Willing to know about our E-learning portal? You can find various options for In house training as well. Connect today to know about it and also get to know about the Train The Trainer training for organizational development."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/about-us.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div className="rs-about style2 pt-50 pb-50 aboutsection1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className='boxshd'>
                                <div className="sec-title">
                                    <p className='mmm'>
                                    Founded in the year 1998, BYLD is the largest group in the South Asian region, offering technology-enabled HR and business productivity solutions. We have served 5,00,000+ individuals, worked with more than 50% of the Fortune 500 and over 60% of the Business World top 1000 companies.
                                    </p>                                    
                                    <h4 className="countertoph2 text-left">Our Group Businesses</h4>                                  
                                </div>
                                <ul>
                                    <li className='eael-feature-list-item'>
                                    <div className='rs-services chooseus-style'>
                                        <div className="services-item bgwhite1">
                                            <div className="services-icon">                                            
                                            <img src="/assets/img/icon/assessments.png" alt="Images"/>
                                            </div>
                                            <div className="services-text">
                                                <h3 className="title">Assessments</h3>
                                                <p>DiSC<sup>®</sup>, Lumina Spark, Talent Smarts, Assessments, and Development Centres</p>
                                            </div>
                                        </div>
                                    </div>
                                    </li>

                                    <li className='eael-feature-list-item'>
                                    <div className='rs-services chooseus-style'>
                                        <div className="services-item bgwhite1">
                                            <div className="services-icon">
                                            <img src="/assets/img/icon/coaching.png" alt="Images"/>
                                            </div>
                                            <div className="services-text">
                                                <h3 className="title">Coaching</h3>
                                                <p>Door Coaching Academy, InsideOut™ Coaching</p>
                                            </div>
                                        </div>
                                    </div>
                                    </li>

                                    <li className='eael-feature-list-item'>
                                    <div className='rs-services chooseus-style'>
                                        <div className="services-item bgwhite1">
                                            <div className="services-icon">
                                            <img src="/assets/img/icon/experiential-learning.png" alt="Images"/>
                                            </div>
                                            <div className="services-text">
                                                <h3 className="title">Experiential Learning</h3>
                                                <p>Business Today Simulations, Eagle’s Flight™, Jenson 8 (Virtual Reality Trainings)</p>
                                            </div>
                                        </div>
                                    </div>
                                    </li>

                                    <li className='eael-feature-list-item'>
                                    <div className='rs-services chooseus-style'>
                                        <div className="services-item bgwhite1">
                                            <div className="services-icon">
                                            <img src="/assets/img/icon/leadership-development.png" alt="Images"/>
                                            </div>
                                            <div className="services-text">
                                                <h3 className="title">Leadership Development and Performance Enhancement</h3>
                                                <p>Door Training & Consulting India (DTCI), Persona Global<sup>®</sup>, Crucial Life Changing Skills, Blanchard<sup>®</sup> India, Trapologist at Work™</p>
                                            </div>
                                        </div>
                                    </div>
                                    </li>

                                    <li className='eael-feature-list-item'>
                                    <div className='rs-services chooseus-style'>
                                        <div className="services-item bgwhite1">
                                            <div className="services-icon">
                                            <img src="/assets/img/icon/staffing.png" alt="Images"/>
                                            </div>
                                            <div className="services-text">
                                                <h3 className="title">Staffing</h3>
                                                <p>YOMA Business, YOMA Technologies</p>
                                            </div>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 pr-33 md-pr-15 md-mb-50">
                            <div className="images-part boxshd">
                                <img src="/assets/img/about-byld.jpg" alt="Images"/>
                            </div>
                        </div>                        
                    </div>
                </div>                
            </div>

            <div className="rs-about style2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                           <div className="pb-50">
                               <div className="sec-title3 mbb-35">
                                    <h4 className="countertoph2 text-center">Our Group Businesses</h4>
                                    <div className="heading-border-line center-style"></div>
                               </div>
                            <Slider {...settings}>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/bla.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/eve.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/five.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/jenson8l.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianl.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/lumi.jpg"/>
                                    </div>
                               
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/inside.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/persona.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/trapo.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/bussion.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/by-cl.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/flight.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/yomalogs.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/dtci.jpg"/>
                                    </div>
                                
                            </Slider>
                            </div>
                        </div>                  
                    </div>
                </div>                
            </div>
        </>
    )
}


