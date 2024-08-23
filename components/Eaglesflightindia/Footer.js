import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
    <footer id="rs-footer" className="rs-footer style1 footercc">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-12 md-mb-10">
                        <h3 className="footer-title">Important Links</h3>
                            <ul className="site-map">
                                <li><a href="/eaglesflightindia">Home</a></li>
                                <li><a href="/eaglesflightindia/the-company">The Company</a></li>
                                <li><a href="/eaglesflightindia/our-approach">Our Approach</a></li>
                                <li><a href="/eaglesflightindia/blogs">Blog</a></li>
                                <li><a href="/eaglesflightindia/contact-us">Contact Us</a></li>                              
                            </ul>                              
                        </div>
                        <div className="col-md-3 md-mb-10 pl-55 md-pl-15">
                            <h3 className="footer-title">Our Offerings</h3>
                            <ul className="site-map">
                                <li><a href="/eaglesflightindia/our-offerings/museum-caper">Museum Caper</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/king-kahufu">King Kahufu</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings">Gold Of Desert Kings</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/council-of-the-marble-star">Council Of Marble Star</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/promises-promises">Promises! Promises!</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/rattlesnake-canyon">Rattlesnake Canyon</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/expedition-outback">Expedition Outback</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/windjammer">Windjammer</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 md-mb-10">
                            <h3 className="footer-title">Contact Info</h3>
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
                                        <a href="mailto:eaglesflightindia.info@byldgroup.com">eaglesflightindia.info@byldgroup.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-clock-1"></i>
                                    <div className="desc">
                                    9:00 AM - 6:00 PM
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">                        
                            <h3 className="footer-title">Follow Us</h3>

                            <ul className="footer-social md-mb-30">  
                                  <li> 
                                      <a href="https://www.facebook.com/BYLDExperientialLearning" target="_blank"><span><i className="fa fa-facebook"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="https://twitter.com/ByldLearnings" target="_blank"><span><i className="fa fa-twitter"></i></span></a> 
                                  </li>

                                  <li> 
                                      <a href="https://www.linkedin.com/company/byld-experiential-learning/" target="_blank"><span><i className="fa fa-linkedin"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="https://www.youtube.com/channel/UCfRDkIqa8kzNCDWA_VotHXw/videos" target="_blank"><span><i className="fa fa-youtube"></i></span></a> 
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
                                <p className='text-center'>
                                ©2024-25 EAGLES FLIGHT INDIA. All Rights Reserved. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
