import Head from 'next/head'
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  '/assets/img/events/eventswebp/DSC02240.webp',
  '/assets/img/events/eventswebp/7R3A9938.webp',
  '/assets/img/events/eventswebp/7R3A9926.webp',
  '/assets/img/events/eventswebp/7R3A9919.webp',
  '/assets/img/events/eventswebp/7R3A9917.webp',
  '/assets/img/events/eventswebp/7R3A9913.webp',
  '/assets/img/events/eventswebp/7R3A9911.webp',
  '/assets/img/events/eventswebp/7R3A9902.webp',
  '/assets/img/events/eventswebp/7R3A9839.webp',
  '/assets/img/events/eventswebp/7R3A9717.webp',
  '/assets/img/events/eventswebp/7R3A9687.webp',
  '/assets/img/events/eventswebp/7R3A9686.webp',
  '/assets/img/events/eventswebp/7R3A9545.webp',
  '/assets/img/events/eventswebp/7R3A9397.webp',
  '/assets/img/events/eventswebp/7R3A9245.webp',
  '/assets/img/events/eventswebp/7R3A9217.webp',
  '/assets/img/events/eventswebp/7R3A9203.webp',
  '/assets/img/events/eventswebp/7R3A9188.webp',
  '/assets/img/events/eventswebp/7R3A9151.webp',
  '/assets/img/events/eventswebp/7R3A9122.webp',
  '/assets/img/events/eventswebp/7R3A9089.webp',
  '/assets/img/events/eventswebp/7R3A9057.webp',
  '/assets/img/events/eventswebp/7R3A9026.webp',
  '/assets/img/events/eventswebp/7R3A8995.webp',
  '/assets/img/events/eventswebp/7R3A8993.webp',
  '/assets/img/events/eventswebp/7R3A8988.webp',
  '/assets/img/events/eventswebp/7R3A8986.webp',
  '/assets/img/events/eventswebp/7R3A8978-scaled.webp',
  '/assets/img/events/eventswebp/7R3A8978-1.webp',
  '/assets/img/events/eventswebp/7R3A8803-1.webp',
  '/assets/img/events/eventswebp/7R3A8780-1.webp',
  '/assets/img/events/eventswebp/7R3A8463.webp',
  '/assets/img/events/eventswebp/7R3A8462.webp'
];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {     
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
        <>
        <Head>
            <title>Events Gallery - BYLD Group</title>
            <link rel="canonical" href="https://byldgroup.com/events-gallery" />
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
            <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
          </Head>

          <div class="rs-breadcrumbs eventsbg">
                <div class="container">
                    <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
                        <ul>
                            <li>
                                <a href="/">
                                    <span>Home</span>
                                </a>
                                <span class="separator">/</span>
                            </li>
                            <li>
                                <a href="/events-gallery">
                                    <span>Events</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-8'>
                            <div class="breadcrumbs-inner">                                
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                Events
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         

            <div className="pt-50 pbb-50 positionrelative">
                <div className="container">
                    <div className="row zindx">
                       
                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 0, })} src="/assets/img/events/eventswebp/DSC02240.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 1, })} src="/assets/img/events/eventswebp/7R3A9938.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 2, })} src="/assets/img/events/eventswebp/7R3A9926.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 3, })} src="/assets/img/events/eventswebp/7R3A9919.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 4, })} src="/assets/img/events/eventswebp/7R3A9917.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 5, })} src="/assets/img/events/eventswebp/7R3A9913.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 6, })} src="/assets/img/events/eventswebp/7R3A9911.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 7, })} src="/assets/img/events/eventswebp/7R3A9902.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 8, })} src="/assets/img/events/eventswebp/7R3A9839.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 9, })} src="/assets/img/events/eventswebp/7R3A9717.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 10, })} src="/assets/img/events/eventswebp/7R3A9687.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 11, })} src="/assets/img/events/eventswebp/7R3A9686.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 12, })} src="/assets/img/events/eventswebp/7R3A9545.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 13, })} src="/assets/img/events/eventswebp/7R3A9397.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 14, })} src="/assets/img/events/eventswebp/7R3A9245.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 15, })} src="/assets/img/events/eventswebp/7R3A9217.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 16, })} src="/assets/img/events/eventswebp/7R3A9203.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 17, })} src="/assets/img/events/eventswebp/7R3A9188.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 18, })} src="/assets/img/events/eventswebp/7R3A9151.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 19, })} src="/assets/img/events/eventswebp/7R3A9122.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 20, })} src="/assets/img/events/eventswebp/7R3A9089.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 21, })} src="/assets/img/events/eventswebp/7R3A9057.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 22, })} src="/assets/img/events/eventswebp/7R3A9026.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 23, })} src="/assets/img/events/eventswebp/7R3A8995.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 24, })} src="/assets/img/events/eventswebp/7R3A8993.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 25, })} src="/assets/img/events/eventswebp/7R3A8988.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 26, })} src="/assets/img/events/eventswebp/7R3A8986.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 27, })} src="/assets/img/events/eventswebp/7R3A8978-scaled.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 28, })} src="/assets/img/events/eventswebp/7R3A8978-1.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 29, })} src="/assets/img/events/eventswebp/7R3A8803-1.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 30, })} src="/assets/img/events/eventswebp/7R3A8780-1.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 31, })} src="/assets/img/events/eventswebp/7R3A8463.webp" alt="Awards"/>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='awardsarea'>
                                <img onClick={() => this.setState({ isOpen: true, photoIndex: 31, })} src="/assets/img/events/eventswebp/7R3A8462.webp" alt="Awards"/>
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="https://ik.imagekit.io/byld/BYLD/byldallasests/orangearrow_Y2tPSed3ik.webp" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="https://ik.imagekit.io/byld/BYLD/byldallasests/bluearrow1_IallzTm-61.webp" />
                    </div>
                </div>                
            </div>

            {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        </>
    //   <div>
        
    //     <div className='container'>
    //         <div className='row'>
    //             <div className='col-sm-3'><img onClick={() => this.setState({ isOpen: true, photoIndex: 0, })} src='//placekitten.com/1500/500'/></div>
    //             <div className='col-sm-3'><img onClick={() => this.setState({ isOpen: true, photoIndex: 1, })} src='//placekitten.com/4000/3000'/></div>
    //             <div className='col-sm-3'><img onClick={() => this.setState({ isOpen: true, photoIndex: 2, })} src='//placekitten.com/800/1200'/></div>
    //             <div className='col-sm-3'><img onClick={() => this.setState({ isOpen: true, photoIndex: 3, })} src='//placekitten.com/1500/1500'/></div>
    //         </div>
    //     </div>

    //     {isOpen && (
    //       <Lightbox
    //         mainSrc={images[photoIndex]}
    //         nextSrc={images[(photoIndex + 1) % images.length]}
    //         prevSrc={images[(photoIndex + images.length - 1) % images.length]}
    //         onCloseRequest={() => this.setState({ isOpen: false })}
    //         onMovePrevRequest={() =>
    //           this.setState({
    //             photoIndex: (photoIndex + images.length - 1) % images.length,
    //           })
    //         }
    //         onMoveNextRequest={() =>
    //           this.setState({
    //             photoIndex: (photoIndex + 1) % images.length,
    //           })
    //         }
    //       />
    //     )}
    //   </div>
    );
  }
}


