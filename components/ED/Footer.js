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
                    <div className="col-lg-3 col-md-12 col-sm-12 md-mb-10 pl-55 md-pl-15">
                            <h3 className="footer-title">Important Links</h3>
                            <ul className="site-map">
                                <li><a href="/everythingdisc">Home</a></li>
                                <li><a href="/everythingdisc/solutions">Solutions</a></li>
                                <li><a href="/everythingdisc/contact-us">Contact Us</a></li>
                                <li><a href="/everythingdisc/everythingdisc-privacy-policy">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 md-mb-10 pl-55 md-pl-15">
                            <h3 className="footer-title">Products and Services</h3>
                            <ul className="site-map">
                                <li><a href="/everythingdisc/solutions/everything-disc-agile-eq">Everything DiSC<sup>®</sup> Agile EQ™</a></li>
                                <li><a href="/everythingdisc/solutions/everything-disc-sales">Everything DiSC<sup>®</sup> Sales</a></li>
                                <li><a href="/everythingdisc/solutions/everything-disc-363-for-leaders">Everything DiSC<sup>®</sup> 363 for Leaders</a></li>
                                <li><a href="/everythingdisc/solutions/everything-disc-productive-conflict">Everything DiSC<sup>®</sup> Productive Conflict</a></li>
                                <li><a href="/everythingdisc/solutions/everything-disc-work-of-leaders">Everything DiSC<sup>®</sup> Work Of Leaders</a></li>
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
                                    9:00 AM - 6:00 PM
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
                                <p className='text-center'>©2023 Everything DiSC Is A Registered Trademark Of John Wiley & Sons, Inc., Or Its Affiliated Companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
