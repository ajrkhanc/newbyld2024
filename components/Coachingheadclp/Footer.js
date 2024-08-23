import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
   
    
  return (
    <>
    <footer id="rs-footer" className="rs-footer style1">
            <div className="footer-top">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-2 col-sm-6 md-mb-10 pl-55 md-pl-15">
                            <h3 className="footer-title">QUICK LINKS</h3>
                            <ul className="site-map">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/sitemap">Sitemap</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 md-mb-10 pl-55 md-pl-15">
                            <h3 className="footer-title">OUR SOLUTIONS</h3>
                            <ul className="site-map">
                                <li><a href="/client-corner">Client Corner</a></li>
                                <li><a href="/our-solutions/leadership-and-talent-development">Leadership & Performance</a></li>
                                <li><a href="/our-solutions/assessments">Assessments</a></li>
                                <li><a href="/bespoke">BeSpoke</a></li>
                                <li><a href="/our-solutions/staffing">Staffing & Search</a></li>
                                <li><a href="/our-solutions/coaching">Coaching</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 md-mb-10">
                            <h3 className="footer-title">CONTACT US</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">BYLD Group, 2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                       <a href="tel:1800-102-1345">1800-102-1345</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc">
                                        <a href="mailto:info@byldgroup.com">info@byldgroup.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-clock-1"></i>
                                    <div className="desc">
                                        Office Hours: 9:00 AM - 6:00 PM
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h3 className="footer-title">SOCIAL LINKS</h3>
                            <ul className="footer-social md-mb-30">  
                                  <li> 
                                      <a href="https://www.facebook.com/BYLDCoaching" target="_blank"><span><i className="fa fa-facebook"></i></span></a> 
                                  </li>
                                  <li> 
                                  <a href="https://www.linkedin.com/company/byld-coaching/" target="_blank"><span><i className="fa fa-linkedin"></i></span></a>
                                  </li>

                                  <li> 
                                     <a href="https://twitter.com/Byld_Coaching" target="_blank"><span><i className="fa fa-twitter"></i></span></a> 
                                  </li>

                                  <li> 
                                     <a href="https://www.youtube.com/@BYLDgroup" target="_blank"><span><i className="fa fa-youtube"></i></span></a> 
                                  </li>
                                                                           
                              </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">                    
                    <div className="row y-middle">                       
                        <div className="col-lg-12">
                            <div className="copyright text-lg-start text-center ">
                                <p className='text-center'>© 2023 BYLD Group. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>     
        <script
            dangerouslySetInnerHTML={{
              __html: `
              window.addEventListener('load',function(){
                if(document.location.href.indexOf('/coaching/thank-you') != -1)
                {
                  gtag('event', 'conversion', {'send_to': 'AW-AW-358447811/MyrhCLz_g80YEMP19aoB'});  
                }
              });
                `,
            }}
          />   
    </>
  )
}
