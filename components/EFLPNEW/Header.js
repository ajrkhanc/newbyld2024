import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <>
           
<div className="full-width-header">            
            <header id="rs-header" className="rs-header style2 header-transparent">                
                <div className="topbar-area style1">
                    <div className="container custom">
                        <div className="row y-middle">
                            <div className="col-lg-7">
                                <div className="topbar-contact">
                                   <ul>
                                       <li>
                                           <i className="flaticon-email"></i>
                                           <a href="mailto:eaglesflightindia.info@byldgroup.com">eaglesflightindia.info@byldgroup.com</a>
                                       </li>
                                       <li>
                                           <i className="flaticon-call"></i>
                                           <a href="tel:1800-102-1345"> 1800-102-1345</a>
                                       </li>                                      
                                   </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 text-right">
                                <div className="toolbar-sl-share">
                                    <ul className='ptt-10'>                                         
                                         <li><a target="_blank" href="https://www.facebook.com/BYLDExperientialLearning"><i className="fa fa-facebook"></i></a></li>
                                         <li><a target="_blank" href="https://www.linkedin.com/company/byld-experiential-learning/"><i className="fa fa-linkedin"></i></a></li>
                                         <li><a target="_blank" href="https://twitter.com/ByldLearnings"><i className="fa fa-twitter"></i></a></li>
                                         <li><a target="_blank" href="https://www.youtube.com/channel/UCfRDkIqa8kzNCDWA_VotHXw/videos"><i className="fa fa-youtube"></i></a></li>                                         
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="menu-area menu-sticky">
                    <div className="container custom">
                        <div className="row-table">
                            <div className="col-cell header-logo">                                  
                                <div className="logo-area">
                                    <a href="/eaglesflightindia">
                                        <img src="/efassets/img/ef-logo.png" alt="logo"/>  
                                    </a>
                                </div>
                            </div>
                            <div className="col-cell">
                                <div className="rs-menu-area">
                                    <div className="main-menu">
                                        <nav className="rs-menu hidden-md">
                                            <ul className="nav-menu">
                                                <li>
                                                    <a href="/eaglesflightindia">Home</a>                                                    
                                                </li>
                                                
                                                <li className="menu-item-has-children">
                                                    <a href="#">Our Offerings</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="/eaglesflightindia/our-offerings/museum-caper">Museum Caper (Virtual Immersive Learning)</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/king-kahufu">King Kahufu (Virtual Immersive Learning)</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings">Gold of the Desert Kings</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/council-of-the-marble-star">Council of the Marble Star</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/rattlesnake-canyon">Rattlesnake Canyon</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/promises-promises">Promises, Promises!</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/expedition-outback">Expedition Outback</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/windjammer">Windjammer</a></li>
                                                    </ul>
                                                </li>

                                                

                                                <li>
                                                    <a href="/eaglesflightindia/our-approach">Our Approach</a>
                                                </li>
                                                <li>
                                                    <a href='/eaglesflightindia/the-company'>The Company</a>
                                                </li>                                               

                                                <li>
                                                    <a href="/eaglesflightindia/blogs">Blogs</a>
                                                </li>

                                                <li>
                                                    <a href="/eaglesflightindia/contact-us">Contact Us</a>
                                                </li>
                                            </ul> 
                                        </nav>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-cell">
                                <div className="expand-btn-inner">
                                    <ul>
                                        <li className="humburger">
                                            <a id="nav-expander" className="nav-expander bar" href="#">
                                                <div className="bar">
                                                    <span className="dot1"></span>
                                                    <span className="dot2"></span>
                                                    <span className="dot3"></span>
                                                    <span className="dot4"></span>
                                                    <span className="dot5"></span>
                                                    <span className="dot6"></span>
                                                    <span className="dot7"></span>
                                                    <span className="dot8"></span>
                                                    <span className="dot9"></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <nav className="right_menu_togle hidden-md">
                    <div className="close-btn">
                        <a id="nav-close" className="nav-close">
                            <div className="line">
                                <span className="line1"></span>
                                <span className="line2"></span>
                            </div>
                        </a>
                    </div>
                    <div className="canvas-logo">
                        <a href="/eaglesflightindia"><img src="/wileyassets/img/byld-wiley-auth-logo.png" alt="logo"/></a>
                    </div>                    
                    
                    <div className="canvas-contact">
                        <div className="address-area">
                            <div className="address-list">
                                <div className="info-icon">
                                    <i className="flaticon-location"></i>
                                </div>
                                <div className="info-content">
                                    <h4 className="title">Address</h4>
                                    <em>BYLD Group, Plot No. 48, Sector - 44, Opp. EPF Regional Office, Gurugram - 122003, Haryana, India</em>
                                </div>
                            </div>
                            <div className="address-list">
                                <div className="info-icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <div className="info-content">
                                    <h4 className="title">Email</h4>
                                    <em><a href="mailto:eaglesflightindia.info@byldgroup.com">eaglesflightindia.info@byldgroup.com</a></em>
                                </div>
                             </div>
                            <div className="address-list">
                                <div className="info-icon">
                                  <i className="flaticon-call"></i>
                                </div>
                                <div className="info-content">
                                  <h4 className="title">Phone</h4>
                                  <em>1800-102-1345</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
               
                <nav className="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
                    <div className="close-btn">
                        <a id="nav-close2" className="nav-close">
                            <div className="line">
                                <span className="line1"></span>
                                <span className="line2"></span>
                            </div>
                        </a>
                    </div>
                    <ul className="nav-menu">
                                                <li>
                                                    <a href="/eaglesflightindia">Home</a>                                                    
                                                </li>
                                                
                                                <li className="menu-item-has-children">
                                                    <a href="#">Our Offerings</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="/eaglesflightindia/our-offerings/museum-caper">Museum Caper (Virtual Immersive Learning)</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/king-kahufu">King Kahufu (Virtual Immersive Learning)</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings">Gold of the Desert Kings</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/council-of-the-marble-star">Council of the Marble Star</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/rattlesnake-canyon">Rattlesnake Canyon</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/promises-promises">Promises, Promises!</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/expedition-outback">Expedition Outback</a></li>
                                                        <li><a href="/eaglesflightindia/our-offerings/windjammer">Windjammer</a></li>
                                                    </ul>
                                                </li>

                                                

                                                <li>
                                                    <a href="/eaglesflightindia/our-approach">Our Approach</a>
                                                </li>
                                                <li>
                                                    <a href='/eaglesflightindia/the-company'>The Company</a>
                                                </li>                                               

                                                <li>
                                                    <a href="/eaglesflightindia/blogs">Blogs</a>
                                                </li>

                                                <li>
                                                    <a href="/eaglesflightindia/contact-us">Contact Us</a>
                                                </li>
                                            </ul>                   
                </nav>
            
            </header>
          
        </div>
    </>
  )
}
