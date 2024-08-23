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
      xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/8/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
               document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                  window.location.href = "/blanchardinternational/thank-you-lp"
               }, 3000);

            } else {
               alert('There was a problem with the request.');
            }
         }
      };
      xhttp.send("your-email=" + event.target.fmail.value)

   }

   return (
      <footer className="footer-area footer-bg2 massesment pt-10">
         <div className="footer-top pb-10">
            <div className="container">
               <div className="row">
                  <div className='col-sm-12'>
                  <h3 className="title vvfv">Follow Us On</h3>                     
                  </div>
                  <div className="col-sm-3">
                     <div className="footer-widget footer-widget-color1">
                        <div className="social-link-content">                       
                           <ul className="social-footer-link fsocils">
                              <li>
                                 <a className='aff' href="https://www.facebook.com/blanchardresearchandtrainingindia" target="_blank">
                                    <i className='bx bxl-facebook'></i>
                                 </a>
                              </li>
                              <li>
                                 <a className='all' href="https://www.linkedin.com/company/blanchard-research-and-training-india/" target="_blank">
                                    <i className='bx bxl-linkedin'></i>
                                 </a>
                              </li>
                              <li>
                                 <a className='ayy' href="https://www.youtube.com/c/BlanchardinternationalIndia" target="_blank">
                                    <i className='bx bxl-youtube'></i>
                                 </a>
                              </li>
                              <li>
                                 <a className='att' href="https://twitter.com/blanchard_india" target="_blank">
                                    <i className='bx bxl-twitter'></i>
                                 </a>
                              </li>
                              <li>
                                 <a className='aii' href="https://www.instagram.com/blanchard_research_india/" target="_blank">
                                    <i className='bx bxl-instagram'></i>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-9">
                     <div className="footer-widget footer-widget-color1">
                        {/* <h3>GET IN TOUCH</h3> */}
                        <ul className="footer-list-two">
                           <li>
                              <a className='map' href="https://goo.gl/maps/rwqmAQZ5WEsSZZfs9" target="_blank"><i className="flaticon-placeholder"></i><div className="title">BYLD Group: 2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</div></a>                              
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </footer>
   )
}

export default Footer