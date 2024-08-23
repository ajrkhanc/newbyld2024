import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        
        <header className="top-header top-header-bg">
         <div className="container-fluid">
            <div className="container-max">
               <div className="row align-items-center">
                  <div className="col-lg-8 dnonem">
                     <div className="header-left">
                        <div className="header-left-card">
                           <ul>                             
                              <li>
                                 <div className="head-icon">
                                    <i className='flaticon-email'></i>
                                 </div>
                                 <a href="mailto:blanchard.info@byldgroup.com"><span className="__cf_email__" data-cfemail="b2dad7dededdf2dcdbcadd9cd1dddf">blanchard.info@byldgroup.com</span></a>
                              </li>
                              <li>
                                 <div className="head-icon">
                                    <i className='flaticon-call'></i>
                                 </div>
                                 <a href="tel:1800-102-1345">1800-102-1345</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="top-right">
                        <div className="top-right-login">
                           <a target="_blank" href="https://www.facebook.com/blanchardresearchandtrainingindia"><i className="bx bxl-facebook"></i></a>
                           <a target="_blank" href="https://www.linkedin.com/company/blanchard-research-and-training-india/"><i className="bx bxl-linkedin"></i></a>
                           <a target="_blank" href="https://www.youtube.com/c/BlanchardinternationalIndia"><i className="bx bxl-youtube"></i></a>
                           <a target="_blank" href="https://twitter.com/blanchard_india"><i className="bx bxl-twitter"></i></a>                           
                        </div>                         
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
        
    )
}



export default Header;