import React from "react";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

import Link from 'next/link'

function Nav() {
    return (
        <>

<header id="site-header" className="site-header " role="banner">
{/* header-search-trigger */}
       
            <div className="header-middle">
               <div className="header-container container container--large">
                  <div className="header-row">
                     <div className="header-col">
                                    <div className="header-logo logo-size">
                           <a href="/blanchardindia" className="brand">
                           <img src="https://byldgroup.com/kbassets/img/Blanchard_Global Partner Logo_India (1).png" alt="Images" />
                           </a>
                        </div>
                        <button className="header-mobile-btn hamburger" data-expander="header-nav" data-expander-css="" data-expander-nofocus="">
                        <span className="hamburger__box">
                        <span className="hamburger__inner">
                        <span className="visually-hidden">Toggle navigation</span>
                        </span>
                        </span>
                        </button>
                        <div id="header-nav" className="header-bottom">
                         
                           <nav className="main-navigation" role="navigation">
                              <ul>
                                 <li data-expander="" data-expander-css="" data-expander-nofocus="" data-nav-type="mega">
                                    <button type="button" className="main-navigation-toggle" data-expander-toggle=""><span>What We Do</span> <i class="bx bx-chevron-down"></i></button>
                                    <div className="mega" data-expander-target="">
                                       <div className="mega__inner">
                                          <div className="mega__left menu-trending">
                                             <h3 className="menu-trending__heading">Trending Now:</h3>
                                             <ul className="menu-trending__list">
                                                <li>
                                                   <a className="menu-trending__link" href="/blanchardindia/what-we-do/custom-solutions" target="_self">
                                                   <span>Blanchard Design Studio</span>
                                                   </a>
                                                   <p className="menu-trending__desc">Our solutions combine our award-winning content and methodologies with a collaborative design process.</p>
                                                </li>
                                             </ul>
                                          </div>
                                          <div className="mega__right main-navigation-mega">
                                             <button className="main-navigation-back">back</button>
                                             <h3 className='main-navigation__heading'>
                                                <a href="/blanchardindia/what-we-do" className="main-navigation__heading-link" target="_self">
                                                What We Do									</a>
                                             </h3>
                                             <ul className="mega-menu">
                                                <li className="mega-menu-item mega-menu-item--33">
                                                   <ul>
                                                      <li data-expander="" data-expander-css="" data-expander-nofocus="">
                                                         <a href="/blanchardindia/what-we-do/leadership-development" target="_self" data-expander-toggle="">
                                                         <span>Leadership Development</span>
                                                         </a>
                                                         <a href="/blanchardindia/what-we-do/leadership-development" target="_self" className="link-desktop">
                                                         <span>Leadership Development</span>
                                                         </a>
                                                         <div className="main-navigation-mega__sub" data-expander-target="">
                                                            <button className="main-navigation-back">back</button>
                                                            <h3 className='main-navigation__heading'>
                                                               <a href="/blanchardindia/what-we-do/leadership-development" className="main-navigation__heading-link" target="_self">
                                                               Leadership Development							</a>
                                                            </h3>
                                                            <ul>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/leadership-development/leadership-development-programs" target="_self">
                                                                  <span>Leadership Development Programs</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/leadership-development/learning-journeys" target="_self">
                                                                  <span>Learning Journeys</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/leadership-development/digital-virtual-learning-experiences" target="_self">
                                                                  <span>Digital &amp; Virtual Learning Experiences</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/leadership-development/propel-by-blanchard" target="_self">
                                                                  <span>Propel by Blanchard</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/leadership-development/keynotes" target="_self">
                                                                  <span>Keynotes</span>
                                                                  </a>
                                                               </li>
                                                              
                                                               <li>
                                                                  <a href="/blanchardindia/resources/public-courses" target="_self">
                                                                  <span>Public Courses</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/leadership-development/training-for-trainers" target="_self">
                                                                  <span>Training for Trainers</span>
                                                                  </a>
                                                               </li>
                                                            </ul>
                                                         </div>
                                                      </li>
                                                   </ul>
                                                </li>
                                                <li className="mega-menu-item mega-menu-item--33">
                                                   <ul>
                                                      <li data-expander="" data-expander-css="" data-expander-nofocus="">
                                                         <a href="/blanchardindia/what-we-do/services" target="_self" data-expander-toggle="">
                                                         <span>Services</span>
                                                         </a>
                                                         <a href="/blanchardindia/what-we-do/services" target="_self" className="link-desktop">
                                                         <span>Services</span>
                                                         </a>
                                                         <div className="main-navigation-mega__sub" data-expander-target="">
                                                            <button className="main-navigation-back">back</button>
                                                            <h3 className='main-navigation__heading'>
                                                               <a href="/blanchardindia/what-we-do/services" className="main-navigation__heading-link" target="_self">
                                                               Services							</a>
                                                            </h3>
                                                            <ul>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/services/coaching" target="_self">
                                                                  <span>Coaching</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/services/facilitation" target="_self">
                                                                  <span>Facilitation</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/services/measurement-impact" target="_self">
                                                                  <span>Measurement &amp; Impact</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/services/assessments" target="_self">
                                                                  <span>Assessments</span>
                                                                  </a>
                                                               </li>
                                                           
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/services/reinforcement-sustainment" target="_self">
                                                                  <span>Reinforcement &amp; Sustainment</span>
                                                                  </a>
                                                               </li>
                                                            </ul>
                                                         </div>
                                                      </li>
                                                   </ul>
                                                </li>
                                                <li className="mega-menu-item mega-menu-item--33">
                                                   <ul>
                                                      <li data-expander="" data-expander-css="" data-expander-nofocus="">
                                                         <a href="/blanchardindia/what-we-do/custom-solutions" target="_self" data-expander-toggle="">
                                                         <span>Custom Solutions by Blanchard Design Studio</span>
                                                         </a>
                                                         <a href="/blanchardindia/what-we-do/custom-solutions" target="_self" className="link-desktop">
                                                         <span>Custom Solutions by Blanchard Design Studio</span>
                                                         </a>
                                                         <div className="main-navigation-mega__sub" data-expander-target="">
                                                            <button className="main-navigation-back">back</button>
                                                            <h3 className='main-navigation__heading'>
                                                               <a href="/blanchardindia/what-we-do/custom-solutions" className="main-navigation__heading-link" target="_self">
                                                               Custom Solutions by Blanchard Design Studio							</a>
                                                            </h3>
                                                            <ul>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/custom-solutions/curated-learning-journeys" target="_self">
                                                                  <span>Curated Learning Journeys</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/custom-solutions/customized-learning-experiences" target="_self">
                                                                  <span>Customized Learning Experiences</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/custom-solutions/custom-coaching" target="_self">
                                                                  <span>Custom Coaching Solutions</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/custom-solutions/executive-development" target="_self">
                                                                  <span>Executive Development Experiences</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/custom-solutions/content-integration" target="_self">
                                                                  <span>Content Integration</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/what-we-do/custom-solutions/talent-strategy" target="_self">
                                                                  <span>Talent Strategy</span>
                                                                  </a>
                                                               </li>
                                                            </ul>
                                                         </div>
                                                      </li>
                                                   </ul>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li data-expander="" data-expander-css="" data-expander-nofocus="" data-nav-type="mega">
                                    <button type="button" className="main-navigation-toggle" data-expander-toggle=""><span>Who We Help</span> <i class="bx bx-chevron-down"></i></button>
                                    <div className="mega" data-expander-target="">
                                       <div className="mega__inner">
                                          <div className="mega__left menu-trending">
                                             <h3 className="menu-trending__heading">Trending Now:</h3>
                                             <ul className="menu-trending__list">
                                                <li>
                                                   <a className="menu-trending__link" href="/blanchardindia/who-we-help/leaders-at-all-levels/new-managers" target="_blank">
                                                   <span>New Managers</span>
                                                   </a>
                                                   <p className="menu-trending__desc">When you promote your high potential individual contributors into their first people manager role, you want to ensure they are successful.</p>
                                                </li>
                                                <li>
                                                   <a className="menu-trending__link" href="/blanchardindia/who-we-help/leaders-at-all-levels/senior-leaders" target="_self">
                                                   <span>Senior Leaders</span>
                                                   </a>
                                                   <p className="menu-trending__desc">These leaders are the key to creating an inclusive, high performance workplace culture that reflects the company&#x2019;s values.</p>
                                                </li>
                                             </ul>
                                          </div>
                                          <div className="mega__right main-navigation-mega">
                                             <button className="main-navigation-back">back</button>
                                             <h3 className='main-navigation__heading'>
                                                <a href="/blanchardindia/who-we-help" className="main-navigation__heading-link" target="_self">
                                                Who We Help									</a>
                                             </h3>
                                             <ul className="mega-menu">
                                                <li className="mega-menu-item mega-menu-item--33">
                                                   <ul>
                                                      <li data-expander="" data-expander-css="" data-expander-nofocus="">
                                                         <a href="/blanchardindia/who-we-help/leaders-at-all-levels" target="_self" data-expander-toggle="">
                                                         <span>Leaders At All Levels</span>
                                                         </a>
                                                         <a href="/blanchardindia/who-we-help/leaders-at-all-levels" target="_self" className="link-desktop">
                                                         <span>Leaders At All Levels</span>
                                                         </a>
                                                         <div className="main-navigation-mega__sub" data-expander-target="">
                                                            <button className="main-navigation-back">back</button>
                                                            <h3 className='main-navigation__heading'>
                                                               <a href="/blanchardindia/who-we-help/leaders-at-all-levels" className="main-navigation__heading-link" target="_self">
                                                               Leaders At All Levels							</a>
                                                            </h3>
                                                            <ul>
                                                               <li>
                                                                  <a href="/blanchardindia/who-we-help/leaders-at-all-levels/emerging-leaders" target="_self">
                                                                  <span>Emerging Leaders</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/who-we-help/leaders-at-all-levels/new-managers" target="_self">
                                                                  <span>New Managers</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/who-we-help/leaders-at-all-levels/experienced-leaders" target="_self">
                                                                  <span>Experienced Leaders</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/who-we-help/leaders-at-all-levels/senior-leaders" target="_self">
                                                                  <span>Senior Leaders</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/who-we-help/leaders-at-all-levels/executives" target="_self">
                                                                  <span>Executives</span>
                                                                  </a>
                                                               </li>
                                                            </ul>
                                                         </div>
                                                      </li>
                                                   </ul>
                                                </li>
                                                <li className="mega-menu-item mega-menu-item--33">
                                                   <ul>
                                                      <li>
                                                         <a href="/blanchardindia/who-we-help/organizations" target="_self">
                                                         <span>Organizations</span>
                                                         </a>
                                                      </li>
                                                      <li>
                                                         <a href="/blanchardindia/who-we-help/training-professionals" target="_self">
                                                         <span>Training Professionals</span>
                                                         </a>
                                                      </li>
                                                      <li>
                                                         <a href="/blanchardindia/who-we-help/coaching-professionals" target="_self">
                                                         <span>Coaching Professionals</span>
                                                         </a>
                                                      </li>
                                                   </ul>
                                                </li>
                                                <li className="mega-menu-item mega-menu-item--33">
                                                   <ul>
                                                      <li>
                                                         <a href="/blanchardindia/who-we-help/teams" target="_self">
                                                         <span>Teams</span>
                                                         </a>
                                                      </li>
                                                      <li>
                                                         <a href="/blanchardindia/who-we-help/individuals" target="_self">
                                                         <span>Individuals</span>
                                                         </a>
                                                      </li>
                                                      <li>
                                                         <a href="/blanchardindia/who-we-help/students" target="_self">
                                                         <span>Students</span>
                                                         </a>
                                                      </li>
                                                   </ul>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li data-expander="" data-expander-css="" data-expander-nofocus="" data-nav-type="mega">
                                    <button type="button" className="main-navigation-toggle" data-expander-toggle=""><span>Our Content</span> <i class="bx bx-chevron-down"></i></button>
                                    <div className="mega" data-expander-target="">
                                       <div className="mega__inner">
                                          <div className="mega__left menu-trending">
                                             <h3 className="menu-trending__heading">Trending Now:</h3>
                                             <ul className="menu-trending__list">
                                                <li>
                                                   <a className="menu-trending__link" href="/blanchardindia/our-content/programs/courageous-inclusion" target="_self">
                                                   <span>Courageous Inclusion</span>
                                                   </a>
                                                   <p className="menu-trending__desc">The program teaches participants how to become more knowledgeable and active advocates of inclusion in their workplace.</p>
                                                </li>
                                                <li>
                                                   <a className="menu-trending__link" href="/blanchardindia/our-content/programs/essential-motivators" target="_self">
                                                   <span>Essential Motivators Program</span>
                                                   </a>
                                                   <p className="menu-trending__desc">Learners identify their pattern of core psychological needs, values, talents, and behaviors so they can better understand themselves and others. </p>
                                                </li>
                                             </ul>
                                          </div>
                                          <div className="mega__right main-navigation-mega">
                                             <button className="main-navigation-back">back</button>
                                             <h3 className='main-navigation__heading'>
                                                <a href="/blanchardindia/our-content" className="main-navigation__heading-link" target="_self">
                                                Our Content									</a>
                                             </h3>
                                             <ul className="mega-menu">
                                                <li className="mega-menu-item mega-menu-item--66">
                                                   <ul>
                                                      <li data-expander="" data-expander-css="" data-expander-nofocus="">
                                                         <a href="/blanchardindia/our-content/programs" target="_self" data-expander-toggle="">
                                                         <span>Programs</span>
                                                         </a>
                                                         <a href="/blanchardindia/our-content/programs" target="_self" className="link-desktop">
                                                         <span>Programs</span>
                                                         </a>
                                                         <div className="main-navigation-mega__sub" data-expander-target="">
                                                            <button className="main-navigation-back">back</button>
                                                            <h3 className='main-navigation__heading'>
                                                               <a href="/blanchardindia/our-content/programs" className="main-navigation__heading-link" target="_self">
                                                               Programs							</a>
                                                            </h3>
                                                            <ul>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/slii" target="_self">
                                                                  <span>SLII&#xAE;&#x2014;Powering Inspired Leaders&#x2122;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/blanchard-management-essentials" target="_self">
                                                                  <span>Blanchard Management Essentials&#xAE;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/building-trust" target="_self">
                                                                  <span>Building Trust</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/coaching-essentials" target="_self">
                                                                  <span>Coaching Essentials&#xAE;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/conversational-capacity" target="_self">
                                                                  <span>Conversational Capacity&#xAE;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/courageous-inclusion" target="_self">
                                                                  <span>Courageous Inclusion&#x2122;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/essential-motivators" target="_self">
                                                                  <span>Essential Motivators&#x2122;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/leadership-point-of-view" target="_self">
                                                                  <span>Leadership Point of View&#x2122;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/leading-people-through-change" target="_self">
                                                                  <span>Leading People through Change&#xAE;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/leading-virtually" target="_self">
                                                                  <span>Leading Virtually&#x2122;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/legendary-service" target="_self">
                                                                  <span>Legendary Service&#xAE;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/self-leadership" target="_self">
                                                                  <span>Self Leadership</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/servant-leadership-essentials" target="_self">
                                                                  <span>Servant Leadership Essentials&#x2122;</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/programs/team-leadership" target="_self">
                                                                  <span>Team Leadership</span>
                                                                  </a>
                                                               </li>
                                                            </ul>
                                                         </div>
                                                      </li>
                                                      <li>
                                                         <a href="/blanchardindia/our-content/programs" target="_self">
                                                         <span>See All Programs</span>
                                                         </a>
                                                      </li>
                                                   </ul>
                                                </li>
                                                <li className="mega-menu-item ">
                                                   <ul>
                                                      <li data-expander="" data-expander-css="" data-expander-nofocus="">
                                                         <a href="/blanchardindia/our-content/challenges" target="_self" data-expander-toggle="">
                                                         <span>Challenges</span>
                                                         </a>
                                                         <a href="/blanchardindia/our-content/challenges" target="_self" className="link-desktop">
                                                         <span>Challenges</span>
                                                         </a>
                                                         <div className="main-navigation-mega__sub" data-expander-target="">
                                                            <button className="main-navigation-back">back</button>
                                                            <h3 className='main-navigation__heading'>
                                                               <a href="/blanchardindia/our-content/challenges" className="main-navigation__heading-link" target="_self">
                                                               Challenges							</a>
                                                            </h3>
                                                            <ul>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/challenges/leadership-capabilities" target="_self">
                                                                  <span>Leadership Capabilities</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/challenges/change-agility" target="_self">
                                                                  <span>Change &amp; Agility</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/challenges/diversity-inclusion" target="_self">
                                                                  <span>Diversity &amp; Inclusion</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/challenges/engagement-retention" target="_self">
                                                                  <span>Engagement &amp; Retention</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/challenges/organizational-performance" target="_self">
                                                                  <span>Organizational Performance</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/challenges/personal-effectiveness" target="_self">
                                                                  <span>Personal Effectiveness</span>
                                                                  </a>
                                                               </li>
                                                               <li>
                                                                  <a href="/blanchardindia/our-content/challenges/teaming-collaboration" target="_self">
                                                                  <span>Teaming &amp; Collaboration</span>
                                                                  </a>
                                                               </li>
                                                            </ul>
                                                         </div>
                                                      </li>
                                                      <li>
                                                         <a href="/blanchardindia/our-content/modalities" target="_self">
                                                         <span>Explore Modalities</span>
                                                         </a>
                                                      </li>
                                                   </ul>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li data-expander="" data-expander-css="" data-expander-nofocus="" data-nav-type="mega">
                                    <button type="button" className="main-navigation-toggle" data-expander-toggle=""><span>Resources</span> <i class="bx bx-chevron-down"></i></button>
                                    <div className="mega" data-expander-target="">
                                       <div className="mega__inner">
                                          <div className="mega__left menu-trending">
                                             <h3 className="menu-trending__heading">Trending Now:</h3>
                                             <ul className="menu-trending__list">
                                                <li>
                                                   <a className="menu-trending__link" href="https://blanchardcommunity.com/" target="_self">
                                                   <span>Blanchard Community</span>
                                                   </a>
                                                   <p className="menu-trending__desc">Learn about the Blanchard Community and how to join.</p>
                                                </li>
                                                
                                             </ul>
                                          </div>
                                          <div className="mega__right main-navigation-mega">
                                             <button className="main-navigation-back">back</button>
                                             <h3 className='main-navigation__heading'>
                                                <a href="resources" className="main-navigation__heading-link" target="_self">
                                                Resources									</a>
                                             </h3>
                                             <ul className="mega-menu">
                                                <li className="mega-menu-item mega-menu-item--33">
                                                   <ul>
                                                
                                                      <li>
                                                         <a href="/blanchardindia/blog" target="_self">
                                                         <span>Blogs</span>
                                                         </a>
                                                      </li>
                                                      <li>
                                                         <a href="/blanchardindia/resources/client-spotlights" target="_self">
                                                         <span>Client Success Stories</span>
                                                         </a>
                                                      </li>
                                                      <li>
                                                         <a href="/blanchardindia/resources/newsletter" target="_self">
                                                         <span>Newsletter</span>
                                                         </a>
                                                      </li>
                                                   </ul>
                                                </li>
                                                <li className="mega-menu-item mega-menu-item--33">
                                                   <ul>
                                                   <li>
                                                         <a href="/blanchardindia/resources/research-insights" target="_self">
                                                         <span>Research &amp; Insights</span>
                                                         </a>
                                                      </li>
                                                      <li>
                                                         <a href="/blanchardindia/ebooks" target="_self">
                                                         <span>eBooks</span>
                                                         </a>
                                                      </li>
                                                      
                                                      <li>
                                                         <a href="/blanchardindia/podcast" target="_self">
                                                         <span>Podcasts</span>
                                                         </a>
                                                      </li>
                                                   </ul>
                                                </li>
                                                <li className="mega-menu-item mega-menu-item--33">
                                                   <ul>
                                                    
                                                     
                                                      <li>
                                                         <a href="/blanchardindia/events-workshops" target="_self">
                                                         <span>Upcoming Webinars</span>
                                                         </a>
                                                      </li>
                                                      <li>
                                                         <a href="/blanchardindia/resources/videos" target="_self">
                                                         <span>Videos</span>
                                                         </a>
                                                      </li>
                                                   </ul>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li data-expander="" data-expander-css="" data-expander-nofocus="" data-nav-type="mega">
                                    <button type="button" className="main-navigation-toggle" data-expander-toggle=""><span>About Us</span> <i class="bx bx-chevron-down"></i></button>
                                    <div className="mega" data-expander-target="">
                                       <div className="mega__inner">
                                          <div className="mega__left menu-trending">
                                             <h3 className="menu-trending__heading">Trending Now:</h3>
                                             <ul className="menu-trending__list">
                                                <li>
                                                   <a className="menu-trending__link" href="/blanchardindia/about-us/our-commitments/blanchard-institute" target="_self">
                                                   <span>The Blanchard Institute</span>
                                                   </a>
                                                   <p className="menu-trending__desc">The Blanchard Institute is focused on leadership training for middle and high school age students to teach the mindset and skillset of a self leader.</p>
                                                </li>
                                             </ul>
                                          </div>
                                          <div className="mega__right main-navigation-mega">
                                             <button className="main-navigation-back">back</button>
                                             <h3 className='main-navigation__heading'>
                                                <a href="about-us" className="main-navigation__heading-link" target="_self">
                                                About Us									</a>
                                             </h3>
                                             <ul className="mega-menu">
                                                <li className="mega-menu-item mega-menu-item--33">
                                                   <ul>
                                                      <li data-expander="" data-expander-css="" data-expander-nofocus="">
                                                         <a href="/blanchardindia/about-us/who-we-are" target="_self" data-expander-toggle="">
                                                         <span>Who We Are</span>
                                                         </a>
                                                         <a href="/blanchardindia/about-us/who-we-are" target="_self" className="link-desktop">
                                                         <span>Who We Are</span>
                                                         </a>
                                                         <div className="main-navigation-mega__sub" data-expander-target="">
                                                            <button className="main-navigation-back">back</button>
                                                            <h3 className='main-navigation__heading'>
                                                               <a href="/blanchardindia/about-us/who-we-are" className="main-navigation__heading-link" target="_self">
                                                               Who We Are							</a>
                                                            </h3>
                                                            <ul>
                                                               <li>
                                                                  <a href="/blanchardindia/about-us/who-we-are/leadership-team" target="_self">
                                                                  <span>Leadership Team</span>
                                                                  </a>
                                                               </li>
                                                              
                                                               <li>
                                                                  <a href="/blanchardindia/about-us/who-we-are/innovation-lab" target="_self">
                                                                  <span>Innovation Lab</span>
                                                                  </a>
                                                               </li>
                                                              
                                                            </ul>
                                                         </div>
                                                      </li>
                                                      
                                                   </ul>
                                                </li>
                                          
                                              
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                           </nav>
                           <a className="btn build-journey--mobile" href="/blanchardindia/get-started">Build Your Journey</a>
                          
                        </div>
                        <a className="btn build-journey--desktop" href="/blanchardindia/get-started">Build Your Journey</a>
                     </div>
                  </div>
               </div>
            </div>
         </header>
        </>
    )
}

export default Nav
