import Link from 'next/link'
import React from 'react'

function Footer() {
   const registerUser = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         console.log(this.responseText);
      }
      xhttp.open("Post", 'https://byldgroup.in/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/8/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
               document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                  window.location.href = "/thank-you-lp"
               }, 3000);

            } else {
               alert('There was a problem with the request.');
            }
         }
      };
      xhttp.send("your-email=" + event.target.fmail.value)

   }

   return (
      <footer className="footer-area footer-bg2">
         <div className="footer-top ptt-70 py-10">
            <div className="container">
               <div className='row'>
                  <div className='col-sm-12'>
                     <div className='innercallt flex-column'>
                        <div className='flogoc text-align-center'>
                           <a href=''><img src="/kbassets/img/kbnew/blanchard_logo_footer.png" alt="Images" /></a>
                        </div>
                        <div className='calltoaa flex-column'>
                           <h3 className='heading-text text-center'>Ready to get started? Talk to us today.</h3>
                           <a href='/blanchardindia/get-started' className='kbbtn kbbtn--orange  mtt-10 btn-size'>Get Started</a>
                        </div>
                     </div>
                  </div>
               
               </div>
               <div className="row mmiddlec mt-10 py-10">
                  <div className="col-lg-3 col-md-6">
                     <div className="footer-widget footer-widget-color1">
                     <h3>ABOUT US</h3>
                        <p>
                           Blanchard India is the leading training provider in South Asia, with expertise in leadership development across hierarchies.
                        </p>
                        <div className="social-link-content">
                           <h3 className="title">Follow Us On</h3>
                           <ul className="social-footer-link">
                              <li>
                                 <a href="https://www.facebook.com/blanchardresearchandtrainingindia" target="_blank">
                                    <i className='bx bxl-facebook'></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://www.linkedin.com/company/blanchard-research-and-training-india/" target="_blank">
                                    <i className='bx bxl-linkedin'></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://www.youtube.com/c/BlanchardinternationalIndia" target="_blank">
                                    <i className='bx bxl-youtube'></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://twitter.com/blanchard_india" target="_blank">
                                 {/*  <i className='bx bxl-twitter'></i> */}
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                   <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                 </svg>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://www.instagram.com/blanchard_research_india/" target="_blank">
                                    <i className='bx bxl-instagram'></i>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-2 col-md-6">
                     <div className="footer-widget footer-widget-color1 ps-2">
                        <h3>CONNECT</h3>
                        <ul className="footer-list">
                           <li>
                              <Link href="/blanchardindia/get-started" target="_blank">
                                 Contact Us
                              </Link>
                           </li>
                           <li>
                              <Link href="/blanchardindia/get-started" target="_blank">
                                 Request a Speaker
                              </Link>
                           </li>
                           <li>
                              <Link href="/blanchardindia/terms-and-conditions" target="_blank">
                                 Terms And Conditions
                              </Link>
                           </li>
                           <li>
                              <Link href="/blanchardindia/cancellation-and-refund-policy" target="_blank">
                                 Cancellation and Refund Policy
                              </Link>
                           </li>
                           <li>
                              <Link href="/blanchardindia/books" target="_blank">
                                 Books
                              </Link>
                           </li>
                           <li>
                              <Link href="/blanchardindia/blanchard-privacy-policy" target="_blank">
                                 Privacy Policy
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="footer-widget footer-widget-color1 ps-2">
                        <h3>PRODUCTS & SERVICES</h3>
                        <ul className="footer-list">
                           <li>
                              <a href="/blanchardindia/our-content/programs/slii" target="_blank">
                              SLII<sup>®</sup>—Powering Inspired Leaders™
                              </a>
                           </li>
                           <li>
                              <a href="/blanchardindia/our-content/programs/blanchard-management-essentials" target="_blank">
                              Blanchard Management Essentials<sup>®</sup>
                              </a>
                           </li>
                           <li>
                              <a href="/blanchardindia/our-content/programs/building-trust" target="_blank">
                              Building Trust
                              </a>
                           </li>
                           <li>
                              <a href="/blanchardindia/our-content/programs/coaching-essentials" target="_blank">
                              Coaching Essentials<sup>®</sup>
                              </a>
                           </li>
                           <li>
                              <a href="/blanchardindia/our-content/programs/conversational-capacity" target="_blank">
                              Conversational Capacity<sup>®</sup>
                              </a>
                           </li>
                           <li>
                              <a href="/blanchardindia/our-content/programs/courageous-inclusion" target="_blank">
                              Courageous Inclusion™
                              </a>
                           </li>
                           <li>
                              <a href="/blanchardindia/our-content/programs/essential-motivators" target="_blank">
                              Essential Motivators™
                              </a>
                           </li>                          
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="footer-widget footer-widget-color1">
                        <h3>GET IN TOUCH</h3>
                        <ul className="footer-list-two">
                           <li>
                              <i className="flaticon-placeholder"></i>
                              <div className="title">BYLD Group: <br></br>2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</div>
                           </li>
                           <li>
                              <i className="flaticon-call"></i>
                              <div className="title"></div>
                              <a href="tel:1800-102-1345"> 1800-102-1345 </a>
                           </li>
                           <li>
                              <i className="flaticon-email"></i>
                              <div className="title"></div>
                              <a href="mailto:blanchard.info@byldgroup.com"><span className="__cf_email__" data-cfemail="ff979a939390bf91968790d19c9092">blanchard.info@byldgroup.com</span></a>
                           </li>
                        </ul>
                        <h3>Get Access to Blanchard India Updates</h3>
                        <form id="footerformreset" className="newsletter-form" onSubmit={registerUser}>
                           
                           <input type="email" className="form-control" placeholder="Email Address" name="fmail" required autocomplete="off" />
                           <button type="submit" className="submit-btn btn-bg1">
                              Subscribe
                           </button>
                           <p id="showlabel" style={{ display: "none" }}></p>
                        </form>

                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="copy-right-area-two">
               <div className="copy-right-text">
                  <p>
                     © 2023 Blanchardinternational India . All Rights Reserved.
                  </p>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
