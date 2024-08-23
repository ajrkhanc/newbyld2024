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
                        <div className="col-lg-3 col-md-12 col-sm-12 md-mb-10">
                            <div className="footer-logo mb-40">
                                <a href="/"><img src="/wileyassets/img/byld-wiley-auth-logo.png" alt=""/></a>
                            </div>
                              <div className="textwidget white-color pb-40"><p>We denounce with righteous indig nation in and dislike men who are so beguiled and to demo realized by the, so blinded by desire, that they cannot foresee.</p>
                              </div>
                              <ul className="footer-social md-mb-30">  
                                  <li> 
                                      <a href="https://www.facebook.com/AssessmentsandSignaturePrograms" target="_blank"><span><i className="fa fa-facebook"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="https://twitter.com/ByldAssessments" target="_blank"><span><i className="fa fa-twitter"></i></span></a> 
                                  </li>

                                  <li> 
                                      <a href="https://www.linkedin.com/company/byld-assessments-signature-programs/" target="_blank"><span><i className="fa fa-linkedin"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="https://www.youtube.com/channel/UCKn4hSzswvSO6-IqAZC1JtA" target="_blank"><span><i className="fa fa-youtube"></i></span></a> 
                                  </li>
                                                                           
                              </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 md-mb-10 pl-55 md-pl-15">
                            <h3 className="footer-title">Important Links</h3>
                            <ul className="site-map">
                                <li><a href="/wiley">Home</a></li>
                                <li><a href="/wiley/contact-us">Contact Us</a></li>
                                <li><a href="/everythingdisc">Everything DiSC</a></li>
                                <li><a href="/fivebehaviors">The Five Behaviors™</a></li>
                                <li><a href="/wiley/listening-profile">Personal Listening Profile</a></li>                                
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 md-mb-10">
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
                                        <a href="mailto:assessments.info@byldgroup.com">assessments.info@byldgroup.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-clock-1"></i>
                                    <div className="desc">
                                    09:30 am - 06:30 pm
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <h3 className="footer-title">Newsletter</h3>
                            <p className="widget-desc white-color">Stay up to update with our latest news and products.</p>
                            <p>
                                <input type="email" name="EMAIL" placeholder="Your email address" required=""/>
                                <input type="submit" value="Subscribe Now"/>
                            </p>
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
                                ©2023 By John Wiley & Sons, Inc. The Five Behaviors, Everything DiSC, Everything DiSC Workplace, Everything DiSC Work Of Leaders, Everything 363 For Leaders, Are Trademarks Of John Wiley & Sons, Inc. And Its Affiliated Companies. All Other Trademarks Are The Property Of Their Respective Owners.
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
