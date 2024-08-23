import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    const FooregisterUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform1").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/22/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel1").innerHTML = "Thank you for your details. Check your inbox for more details.";

                    document.getElementById("showlabel1").style.display = "block";
                    setTimeout(function () {
                        document.getElementById("showlabel1").style.display = "none";
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-email=" + event.target.email.value)

    }

    return (
        <>
            <footer id="rs-footer" className="rs-footer style1 byldfooter relative">
                {/* <div className='fsub'>
                <div class="container">
                    <div class="newslatter-wrap relative extra-pt">
                        <div class="footer-newsletter fly-up">
                            <div class="sec-title4 text-center mb-40">
                                <div class="sub-title mb-6">Subscribe</div>
                                <h2 class="title">Join Our Newsletter</h2>
                            </div>
                            <form class="subscribe-form">
                                <input type="email" name="email" placeholder="Enter Your Email" required=""/>
                                    <button class="readon2" type="submit">Get started <div class="btn-arrow"></div></button>
                            </form>
                            <img class="img1 pattern" src="/assets/img/homeb/pattern8.png" alt=""/>
                                <img class="img2 pattern" src="/assets/img/homeb/pattern9.png" alt=""/>
                                </div>
                        </div>
                    </div>
                    </div> */}
                    <div className="footer-top">
                        <div className="container-fluid">
                            <div className="row wow fadeInUp delay-0-2s animated animateUP">
                                <div className="col-md-2 col-sm-6 md-mb-10 pl-55 md-pl-15">
                                    <h3 className="footer-title">Quick Links</h3>
                                    <ul className="site-map">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about-us">About Us</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/sitemap">Sitemap</a></li>
                                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    </ul>
                                </div>

                                <div className="col-md-3 col-sm-6 md-mb-10 pl-55 md-pl-15">
                                    <h3 className="footer-title">Our Solutions</h3>
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
                                    <h3 className="footer-title">Contact Us</h3>
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
                                    <h3 className="footer-title">Social Links</h3>
                                    <ul className="footer-social md-mb-30">
                                        <li>
                                            <a href="https://www.facebook.com/BYLDGroup" target="_blank"><span><i className="fa fa-facebook"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/byld-group/" target="_blank"><span><i className="fa fa-linkedin"></i></span></a>
                                        </li>

                                        <li>
                                            <a href="https://twitter.com/BYLDGroup" target="_blank"><span><i className="fa fa-twitter"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UC7kOBtc5uLtODiuTYvqgS4g" target="_blank"><span><i className="fa fa-youtube"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/byld_group/" target="_blank"><span><i className="fa fa-instagram"></i></span></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom wow fadeInUp delay-0-2s animated animateUP">
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
        </>
    )
}
