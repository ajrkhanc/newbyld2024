import React from "react";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

import Link from 'next/link'

function Nav() {   
    return (
      <> 
     
        <div className="navbar-area formobile">  
        <div className="mobile-nav secoundh">
            <a href="/blanchardinternational/" className="logo">
            <img src="/kbassets/img/kb-logo.png" alt="Logo"/>
            </a>
           
         </div>        
         <div className="main-nav nav-two">
            <div className="container-fluid">
               <div className="container-max">
               <nav className="navbar navbar-expand-md navbar-light ptb0">
                     <Link href="/blanchardinternational/"><a className="navbar-brand secoundheader"><img src="/kbassets/img/kb-logo.png" alt="Logo"/></a></Link>                     
                     <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto ulfright">                          
                                        
                        </ul>
                        <div className="nav-btn">
                        <ul className="navbar-nav m-auto ulfright">                          
                           <li className="nav-item d-inline-flex">
                           <div className="head-icon">
                                    <i className='flaticon-email'></i>
                                 </div>
                                 <a href="mailto:blanchard.info@byldgroup.com"><span className="texttras">blanchard.info@byldgroup.com</span></a>
                           </li>

                           <li className="nav-item d-inline-flex">
                           <div className="head-icon">
                                    <i className='flaticon-call'></i>
                                 </div>
                                 <a href="tel:1800-102-1345">1800-102-1345</a>
                           </li>                            
                        </ul>
                        </div>
                        
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </div>
      </>
    )
}

export default Nav
