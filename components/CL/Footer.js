import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
    <footer>
   <div class="container">
        <div class="row">
            <div class="col-md-3 footer-links menu-links">
                <h5>QUICK LINKS</h5>
                <ul>
                    <li>
                        <a href="/cruciallifechangingskills"> Home</a>
                    </li>
                    <li>
                        <a href="/cruciallifechangingskills/blog"> Blog</a>
                    </li>
                    <li>
                        <a href="/cruciallifechangingskills/books"> Books</a>
                    </li>
                    <li>
                        <a href="/cruciallifechangingskills/cancellation-and-refund-policy"> Cancellation and Refund Policy</a>
                    </li>
                    <li>
                        <a href='/cruciallifechangingskills/privacy-policy'>Privacy Policy</a>
                    </li>
                    <li>
                        <a href='/cruciallifechangingskills/terms-and-conditions'>Terms and Conditions</a>
                    </li>
                </ul>
            </div>
            
            <div class="col-md-3 footer-links menu-links">
                <h5>OUR SOLUTIONS</h5>
                <ul>
                    <li>
                        <a href="/cruciallifechangingskills/browse-courses"> Browse Courses</a>
                    </li>
                    <li>
                        <a href="/cruciallifechangingskills/crucial-conversations-for-mastering-dialogue"> Crucial Conversations for Mastering Dialogue</a>
                    </li>
                    <li>
                        <a href="/cruciallifechangingskills/crucial-conversations-for-accountability"> Crucial Conversations for Accountability</a>
                    </li>
                    <li>
                        <a href="/cruciallifechangingskills/the-power-of-habit"> The Power of Habit</a>
                    </li>
                    <li>
                        <a href="/cruciallifechangingskills/influencer"> Crucial Influence</a>
                    </li>
                    <li>
                        <a href='/cruciallifechangingskills/getting-things-done'>Getting Things Done</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-3 footer-links address-area">
                <h5>CONTACT US</h5>
                <ul>
                    <li>
                        <i class="fa fa-map-marker"></i> <span>BYLD Group, 2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</span>
                    </li>
                     <li>
                        <i class="fa fa-phone"></i> <a href='tel:1800 102 1345'><span>1800 102 1345</span></a>
                    </li>
                     <li>
                        <i class="fa fa-envelope" aria-hidden="true"></i> <a href='mailto:cruciallearning.info@byldgroup.com'><span>cruciallearning.info@byldgroup.com</span></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-3 footer-links social-links ">
                <h5>SOCIAL LINKS</h5>
                <ul>
                    <li>
                        <a target="_blank" href="https://www.facebook.com/Cruciallifechangingskills"> <i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/company/crucial-life-changing-skills"> <i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.youtube.com/channel/UCwpwP8sH7YBIFs4xJeID9uA"> <i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/crucial__skills"> <i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/cruciallifechangingskills/"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                </ul>
                <p>Subscribe to our monthly newsletter and learn how to handle the most crucial challenges of life and work.</p>
                <form>
                <input type="email"/>
                <button>SUBSCRIBE</button>
                </form>
            </div>
        </div>
    </div>        
</footer>

        <section class="footer-copyright-text">
            <div class="container-fluid text-center">
                <div class="row">                
                    <div class="footer-copyright col-md-12">©2023 BYLD Group. All Rights Reserved.</div>            
                </div>           
            </div>
        </section>

        <div id="popuphidec" class='popup wow fadeInUp delay-0-2s animated animateUP ppcc'>
            <div class='cnt223'>
            <a href='' class='close popupclose clccc'>X</a>
               <div className='popupinner'>
                  <div className='popupimg ccmcv'>
                    <div>
                        <img src='https://a.omappapi.com/users/e020f3435f2d/images/322a72183c921692140758-icon-Influencer.svg'/>
                    </div>
                     <div className='xcm'>
                     <h3>Leadership requires influence. <span>Crucial Influence.</span></h3>
                     <p>Meet the new course for all leaders—from new managers to seasoned executives.</p>
                     <a className='cfa' href='/cruciallifechangingskills/influencer'>See the New Course</a>
                     </div>
                  </div>
                  <div className='popupform'>
                 
                  </div>
               </div>
            </div>
         </div>

         <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(1000).fadeIn();
               $('.close').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
               $('.x').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
             });
          `,
            }}
          />

    </>
  )
}
