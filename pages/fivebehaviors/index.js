import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
   
   const FiveBcontactUs = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
          console.log(this.responseText);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/76/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4) {
              if (xhttp.status == 200) {
                  document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
                  document.getElementById("contactForm").reset();
                  document.getElementById("showlabel").style.display = "block";
                  window.setTimeout(function() {
                     window.location.href = "/fivebehaviors/thank-you"
                  }, 3000);

              } else {
                  alert('There was a problem with the request.');
              }
          }
      };
      xhttp.send("leadsquared-FirstName=" + event.target.name.value +
          "&leadsquared-EmailAddress=" + event.target.email.value +
          "&leadsquared-Mobile=" + event.target.phone.value +
          "&leadsquared-mx_States=" + event.target.Location.value +          
          "&leadsquared-Company=" + event.target.organization.value +
          "&leadsquared-JobTitle=" + event.target.designation.value +
          "&referredby=" + event.target.referredby.value +
          "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +          
          "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )

  }

  return (
    <>
         <Head>
            <title>The Five Behaviors Solutions | Personal and team development | BYLD Group</title>
            <meta name="description" content="The Five Behaviors offers team building training and personal development solutions. It promotes team development and a healthy culture of teamwork. To know more, check out the page."/> 
            <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
          </Head>

          <div className="rs-services">
            <div className="container-full">
               <div className="row y-middle">
                  <div className="col-lg-12">
                     <img className="img100" src="/5bassets/img/banner/fivebbanner.jpg"/>
                  </div>
               </div>
            </div>
         </div>
         <div className="shape-bg ptt-50 pbb-0 solutionsboxarea">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="sec-title3 mbb-35 text-center rs-estimate">
                        <p className='mtt-30'>
                           <i>We are the authorized partners of The Five Behaviors<sup>®</sup> (A Wiley Brand) in India. Together, we bring you an array of assessments and programs that make individuals, team and organizations measurably more effective.</i>
                        </p>
                        <p>The Five Behaviors<sup>®</sup> is the result of the partnership between Wiley Workplace Learning Solutions and best-selling author Patrick Lencioni. Our mission was to create a program that improves team effectiveness and productivity through the understanding and application of The Five Behaviors: Trust, Conflict, Commitment, Accountability, and Results. This unique learning experience helps individuals and teams build effective work culture through communication and collaboration.</p>
                        <div className="btn-part ptt-10 pbb-30">
                           <a className="readon2" href="/fivebehaviors/contact-us">
                              Connect With Our Subject Matter Experts To Know More
                              <div className="btn-arrow"></div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div>
                     <img className="img100" src='/5bassets/img/rise-together.png'/>
                  </div>
               </div>
            </div>
         </div>
         <div className="shape-bg ptt-50 pbb-50 solutionsboxarea">
            <div className="container">
               <div className="row">
                  <div className='col-sm-12'>
                  <div className="sec-title3 mbb-35">
                     <h4 className="countertoph2 text-center font30">OUR SOLUTIONS</h4>
                     <div className="heading-border-line center-style mbb-50"></div>
                  </div>
                  </div>
                  <div className="col-sm-6">
                     <div className='rs-blog style1'>
                        <div className="blog-wrap">
                           <div className="blog-img">
                              <img src="/5bassets/img/teamleadership.jpg" alt=""/>
                           </div>
                           <div className="blog-contant hometeamsection">
                              <h4 className="title"><a href="/fivebehaviors/the-five-behaviors-of-a-cohesive-team">Team Development</a></h4>
                              <div className="desc">
                                 Helps participants better understand themselves, the personalities on their team, and how they can effectively work together
                              </div>
                              <div className="blog-meta">
                                 <div className="btn-part ptt-10 pbb-10">
                                    <a className="readon2" href="/fivebehaviors/the-five-behaviors-of-a-cohesive-team">
                                       Read More
                                       <div className="btn-arrow"></div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-6">
                     <div className='rs-blog style1'>
                        <div className="blog-wrap">
                           <div className="blog-img">
                              <img src="/5bassets/img/personaldevelopment.jpg" alt=""/>
                           </div>
                           <div className="blog-contant hometeamsection">
                              <h4 className="title"><a href="/fivebehaviors/personal-development">Personal Development</a></h4>
                              <div className="desc">
                              Helps individuals to better understand themselves and their team through the principles of The Five Behaviors<sup>®</sup>
                              </div>
                              <div className="blog-meta">
                                 <div className="btn-part ptt-10 pbb-10">
                                    <a className="readon2" href="/fivebehaviors/personal-development">
                                       Read More
                                       <div className="btn-arrow"></div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>

         <div className="shape-bg ptt-50 pbb-50 solutionsboxarea tablearea">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center font30">The Five Behaviors<sup>®</sup> Solutions</h4>
                        <div className="heading-border-line center-style mbb-30"></div>
                     </div>
                  </div>
                  <div className='col-sm-12'>
                  <table className="table table-condensed">
                     <thead>
                     <tr>
                        <th>Solution Highlights </th>
                        <th><i className="fa fa-user-o" aria-hidden="true"></i> Personal Development </th>
                        <th> <i className="fa fa-users" aria-hidden="true"></i>Team Development</th>
                     </tr>
                     </thead>
                        <tbody>
                           <tr>
                              <td>Product Description</td>
                              <td>Helps individuals to better understand themselves and their team through the principles of The Five Behaviors</td>
                              <td>Helps participants better understand themselves, the personalities on their team, and how they can effectively work together</td>
                           </tr>
                           <tr>
                              <td>Purpose</td>
                              <td>Creates and scales a culture of teamwork and collaboration</td>
                              <td>Builds cohesiveness within intact teams</td>
                           </tr>
                           <tr>
                              <td>Who</td>
                              <td>Anyone</td>
                              <td>Intact Team</td>
                           </tr>
                           <tr>
                              <td>Number of People</td>
                              <td>Up to 30</td>
                              <td>5-12</td>
                           </tr>
                           <tr>
                              <td>Longevity of Team</td>
                              <td>No requirement</td>
                              <td>Designed for teams with a 6-week minimum tenure</td>
                           </tr>
                           <tr>
                              <td></td>
                              <td>
                                 <div className="btn-part ptt-10 pbb-10">
                                    <a className="readon2" href="/fivebehaviors/personal-development">
                                       Read More
                                       <div className="btn-arrow"></div>
                                    </a>
                                 </div>
                              </td>
                              <td>
                                <div className="btn-part ptt-10 pbb-10">
                                    <a className="readon2" href="/fivebehaviors/the-five-behaviors-of-a-cohesive-team">
                                       Read More
                                       <div className="btn-arrow"></div>
                                    </a>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>


         <div className="rs-testimonial style4 homebgcontactus ptt-30 pbb-70">
                <div className="container">                   
                    <div className="row">                    
                         <div className="col-sm-12">
                            <div className="sec-title3 mbb-35 text-center">                                
                                <h4 className="countertoph2 text-center font30 colorw">Reach Out to Us</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                         </div>
                         <div className="clearfix"></div>                         
                         <div className="col-sm-7">
                         <div className="bannerform">
                            <form id="contactForm" className='clientcornner ptt-40 pbb-20' onSubmit={FiveBcontactUs}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Enter Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                      
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>                                                
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>                                               
                                                <option value="Reference">Reference</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="Business_Entity" value="The Five Behaviors"/>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                         </div>
                         <div className="col-sm-5">
                            <img src='/5bassets/img/cside.png' alt=""/>
                        </div>
                      
                    </div>
                </div>
            </div>

    </>
  )
}
