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

            <div class="modal fade search-modal" id="searchModal" tabindex="-1">
                <button type="button" class="close" data-bs-dismiss="modal">
                    <span class="flaticon-cross"></span>
                </button>
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="search-block clearfix">
                            <form>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Search Here..." type="text" />
                                    <button type="submit" value="Search"><i class="flaticon-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="full-width-header">
                <header id="rs-header" className="rs-header style2 header-transparent">
                    <div className="topbar-area style1">
                        <div className="container-fluid">
                            <div className="row y-middle">
                                <div className="col-lg-7">
                                    <div className="topbar-contact">
                                        <ul>
                                            <li>
                                                <i className="flaticon-email"></i>
                                                <a href="mailto:info@byldgroup.com">info@byldgroup.com</a>
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
                                            <li className="opening"></li>
                                            <li><a target="_blank" href="https://www.facebook.com/BYLDGroup"><i className="fa fa-facebook"></i></a></li>
                                            <li><a target="_blank" href="https://www.linkedin.com/company/byld-group/"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a target="_blank" href="https://twitter.com/BYLDGroup"><i className="fa fa-twitter"></i></a></li>
                                            <li><a target="_blank" href="https://www.youtube.com/channel/UC7kOBtc5uLtODiuTYvqgS4g"><i className="fa fa-youtube"></i></a></li>
                                            <li><a target="_blank" href="https://www.instagram.com/byld_group/"><i className="fa fa-instagram"></i></a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu-area menu-sticky">
                        <div className="container-fluid">
                            <div className="row-table">
                                <div className="col-cell header-logo">
                                    <div className="logo-area">
                                        <a href="/">
                                            <img src="/assets/img/byld-logo.svg" alt="logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-cell">
                                    <div className="rs-menu-area">
                                        <div className="main-menu">
                                            <nav className="rs-menu hidden-md">
                                                <ul className="nav-menu">
                                                    <li>
                                                        <a href="/">HOME</a>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">OUR SOLUTIONS</a>
                                                        <ul className="sub-menu">
                                                            <li className="last-item menu-item-has-children">
                                                                <a href="/our-solutions/experiential-learning">Experiential Learning</a>
                                                                <ul className="sub-menu">
                                                                    <li><a target="_blank" href="/eaglesflightindia/">Eagle’s Flight™</a></li>
                                                                    <li><a href="/business-today-simulations">Business Today Simulations</a> </li>
                                                                    <li className='d-none'><a href="#">Gaminar</a></li>
                                                                    <li><a href="/jenson-8">Jenson 8 (Virtual Reality Trainings)</a></li>
                                                                </ul>
                                                            </li>

                                                            <li className="last-item menu-item-has-children">
                                                                <a href="/our-solutions/leadership-and-talent-development">Leadership & Performance</a>
                                                                <ul className="sub-menu">
                                                                    <li><a target="_blank" href="https://blanchardinternational.co.in/">Blanchard India</a></li>
                                                                    <li><a target="_blank" href="/cruciallifechangingskills/">Crucial Life Changing Skills</a></li>
                                                                    <li><a href='/tirian'>Tirian</a></li>
                                                                    <li><a href="/leadership-and-performance/trapologist">Trapologist at Work™</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="last-item menu-item-has-children">
                                                                <a href="/our-solutions/assessments">Assessments</a>
                                                                <ul className="sub-menu">
                                                                    <li><a target="_blank" href="/everythingdisc">Everything DiSC (A Wiley Brand)</a> </li>
                                                                    <li><a target="_blank" href="/fivebehaviors">Five Behaviors</a> </li>
                                                                    <li><a href="/assessments/lumina-psychometric-assesments">Lumina Spark</a></li>
                                                                     {/*  <li><a href="/assessments/talentsmart-eq-assesments">TalentSmart EQ</a></li>*/}
                                                                    <li className='d-none'><a href="/assessments/assessments-and-development-centers">Assessments and Development Centers</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="last-item menu-item-has-children">
                                                                <a href="/bespoke">BeSpoke</a>
                                                                <ul className="sub-menu">
                                                                    <li><a href="/bespoke/persona-global">Persona Global<sup>®</sup></a> </li>
                                                                    <li><a target='_blank' href="https://doortraining.co.in/">Custom Solutions</a></li>
                                                                    <li className='d-none'><a href="#">Large Projects</a></li>
                                                                </ul>
                                                            </li>

                                                            <li className="last-item menu-item-has-children">
                                                               {/* <a href="/our-solutions/coaching">Coaching</a> */}
                                                                 <a href="https://byldcoaching.co.in/">Coaching</a>
                                                                {/*<ul className="sub-menu">
                                                                    <li><a href='/coaching/become-a-coach'>Become A Coach (ICF Certification)</a></li>
                                                                    <li><a href="/coaching/insideout-coaching">InsideOut™ Coaching</a></li>
                                                                    <li><a href='/coaching/breakthroughs'>Breakthroughs</a></li>
                                                                    <li><a href='/coaching/executive-coaching'>Executive Coaching</a></li>
                                                                </ul>*/}
                                                            </li>

                                                            <li className="last-item menu-item-has-children">
                                                                <a href="/our-solutions/staffing">Staffing & Search</a>
                                                                <ul className="sub-menu">
                                                                    <li><a target="_blank" href="https://yomabusinesssolutions.com/">YOMA Business Solutions</a> </li>
                                                                    <li className=''><a target="_blank" href="https://www.yomatechnologies.in/">YOMA Technologies</a></li>
                                                                </ul>
                                                            </li>


                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="/about-us">ABOUT US</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="/mission-vision-values">Mission, Vision and Values</a></li>
                                                            <li><a href="/our-leadership-team">Our Leadership Team</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="/client-corner">CLIENT CORNER</a>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">EVENTS</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="/webinars-and-program-experience">Webinars</a></li>
                                                            <li><a href="/workshops">Workshops</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="/blog">BLOG</a>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">MEDIA</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="/press">BYLD Group in News</a></li>
                                                            <li><a href="/events-gallery">Events</a></li>
                                                            <li><a href="/awards-accolades">Awards & Accolades</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="/contact-us">CONTACT US</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-cell">
                                    <div className="expand-btn-inner">
                                        <ul>
                                            <li class="search-parent">
                                                <a class="hidden-xs rs-search" data-bs-toggle="modal" data-bs-target="#searchModal" href="#">
                                                    <i class="flaticon-search"></i>
                                                </a>
                                            </li>
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
                            <a href="/"><img src="/assets/img/byld-logo.svg" alt="logo" /></a>
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
                                <a href="/">HOME</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">OUR SOLUTIONS</a>
                                <ul className="sub-menu">
                                    <li className="last-item menu-item-has-children">
                                        <a href="/our-solutions/experiential-learning">Experiential Learning</a>
                                        <ul className="sub-menu">
                                            <li><a target="_blank" href="/eaglesflightindia/">Eagle’s Flight™</a></li>
                                            <li><a href="/business-today-simulations">Business Today Simulations</a> </li>
                                            <li className='d-none'><a href="#">Gaminar</a></li>
                                            <li><a href="/jenson-8">Jenson 8 (Virtual Reality Trainings)</a></li>
                                        </ul>
                                    </li>

                                    <li className="last-item menu-item-has-children">
                                        <a href="/our-solutions/leadership-and-talent-development">Leadership & Performance</a>
                                        <ul className="sub-menu">
                                            <li><a target="_blank" href="https://blanchardinternational.co.in/">Blanchard India</a></li>
                                            <li><a target="_blank" href="/cruciallifechangingskills/">Crucial Life Changing Skills</a></li>
                                            <li><a href='/tirian'>Tirian</a></li>
                                            <li><a href="/leadership-and-performance/trapologist">Trapologist at Work™</a></li>
                                        </ul>
                                    </li>
                                    <li className="last-item menu-item-has-children">
                                        <a href="/our-solutions/assessments">Assessments</a>
                                        <ul className="sub-menu">
                                            <li><a target="_blank" href="/everythingdisc">Everything DiSC (A Wiley Brand)</a> </li>
                                            <li><a target="_blank" href="/fivebehaviors">Five Behaviors</a> </li>
                                            <li><a href="/assessments/lumina-psychometric-assesments">Lumina Spark</a></li>
                                              {/* <li><a href="/assessments/talentsmart-eq-assesments">TalentSmart EQ</a></li>*/}
                                            <li className='d-none'><a href="/assessments/assessments-and-development-centers">Assessments and Development Centers</a></li>
                                        </ul>
                                    </li>
                                    <li className="last-item menu-item-has-children">
                                        <a href="/bespoke">BeSpoke</a>
                                        <ul className="sub-menu">
                                            <li><a href="/bespoke/persona-global">Persona Global<sup>®</sup></a></li>
                                            <li><a target='_blank' href="https://doortraining.co.in/">Custom Solutions</a></li>
                                            <li className='d-none'><a href="#">Large Projects</a></li>
                                        </ul>
                                    </li>

                                    <li className="last-item menu-item-has-children">
                                       {/* <a href="/our-solutions/coaching">Coaching</a> */}
                                        <a href="https://byldcoaching.co.in/">Coaching</a>
                                        {/*<ul className="sub-menu">
                                            <li><a href='/coaching/become-a-coach'>Become A Coach (ICF Certification)</a></li>
                                            <li><a href="/coaching/insideout-coaching">InsideOut™ Coaching</a></li>
                                            <li><a href='/coaching/breakthroughs'>Breakthroughs</a></li>
                                            <li><a href='/coaching/executive-coaching'>Executive Coaching</a></li>
                                        </ul>*/}
                                    </li>

                                    <li className="last-item menu-item-has-children">
                                        <a href="/our-solutions/staffing">Staffing & Search</a>
                                        <ul className="sub-menu">
                                            <li><a target="_blank" href="https://yomabusinesssolutions.com/">YOMA Business Solutions</a> </li>
                                            <li className=''><a target="_blank" href="https://www.yomatechnologies.in/">YOMA Technologies</a></li>
                                        </ul>
                                    </li>


                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="/about-us">ABOUT US</a>
                                <ul className="sub-menu">
                                    <li><a href="/mission-vision-values">Mission, Vision and Values</a></li>
                                    <li><a href="/our-leadership-team">Our Leadership Team</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/client-corner">CLIENT CORNER</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">EVENTS</a>
                                <ul className="sub-menu">
                                    <li><a href="/webinars-and-program-experience">Webinars</a></li>
                                    <li><a href="/workshops">Workshops</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/blog">BLOG</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">MEDIA</a>
                                <ul className="sub-menu">
                                    <li><a href="/press">BYLD Group in News</a></li>
                                    <li><a href="/events-gallery">Events</a></li>
                                    <li><a href="/awards-accolades">Awards & Accolades</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/contact-us">CONTACT US</a>
                            </li>
                        </ul>
                    </nav>

                </header>

            </div>
        </>
    )
}
