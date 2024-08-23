import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <>

    {/* <div className="offwrap"></div>
    <div id="pre-load">
    <div id="loader" className="loader">
        <div className="loader-container">
            <div className='loader-icon'><img src="/assets/img/byld-logo.svg" alt="BYLD"/></div>
        </div>
    </div>
    </div> */}


           
<div className="full-width-header">
            <header id="rs-header" className="rs-header style2 header-transparent">                
                
               
                <div className="menu-area menu-sticky">
                    <div className="container-fluid">
                        <div className="row-table">
                            <div className="col-cell header-logo">                                  
                                <div className="logo-area">
                                    <a href="/">
                                        <img src="/assets/img/byld-logo.svg" alt="logo"/>  
                                    </a>
                                </div>
                            </div>
                            <div className="col-cell">
                                <div className="rs-menu-area">
                                    <div className="main-menu">
                                        <nav className="rs-menu hidden-md">
                                            <ul className="nav-menu">
                                                <li>
                                                    <a href="/yogesh-sood">HOME</a>                                                    
                                                </li>                                                
                                               
                                                <li>
                                                    <a href="#">ABOUT US</a>
                                                </li>
                                                
                                            </ul> 
                                        </nav>
                                    </div> 
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
                        <a href="/"><img src="/assets/img/byld-logo.svg" alt="logo"/></a>
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
                                    <em><a href="mailto:info@byldgroup.com">info@byldgroup.com</a></em>
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
                        <ul className="social">
                            <li><a target="_blank" href="https://www.facebook.com/BYLDGroup"><i className="fa fa-facebook"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/company/byld-group/"><i className="fa fa-linkedin"></i></a></li>
                            <li><a target="_blank" href="https://twitter.com/BYLDGroup"><i className="fa fa-twitter"></i></a></li>
                            <li><a target="_blank" href="https://www.youtube.com/channel/UC7kOBtc5uLtODiuTYvqgS4g"><i className="fa fa-youtube"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/byld_group/"><i className="fa fa-instagram"></i></a></li>
                        </ul>
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
                            <a href="/yogesh-sood/">HOME</a>                                                    
                        </li>
                    
                        
                        <li>
                            <a href="#">About Yogesh Sood</a>
                        </li>
                    </ul>
                </nav>
            
            </header>
          
        </div>
    </>
  )
}
