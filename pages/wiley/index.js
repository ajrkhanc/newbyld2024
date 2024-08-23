import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
   
   const HomeForm = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
          console.log(this.responseText);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/56/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4) {
              if (xhttp.status == 200) {
                  document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
                  document.getElementById("contactForm").reset();
                  document.getElementById("showlabel").style.display = "block";
                  window.setTimeout(function() {
                     window.location.href = "/wiley/thank-you"
                  }, 3000);

              } else {
                  alert('There was a problem with the request.');
              }
          }
      };
      xhttp.send("leadsquared-FirstName=" + event.target.name.value +
          "&leadsquared-EmailAddress=" + event.target.email.value +
          "&leadsquared-Mobile=" + event.target.phone.value +
          "&leadsquared-Company=" + event.target.organization.value +
          "&leadsquared-JobTitle=" + event.target.designation.value +
          "&leadsquared-mx_States=" + event.target.Location.value +          
          "&referredby=" + event.target.referredby.value +
          "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +          
          "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )

  }

  return (
    <>
         <Head>
            <title>Home - Wiley</title>
            <meta name="description" content="We provide globally researched and validated psychometric assessments, and related training solutions in leadership development across hierarchies. Our Solutions Unlock the potential of your people and the power of your culture with the Everything DiSC® Application Suite. Read More The Five Behaviors™ is a unique learning experience which helps individuals and teams build an effective […]"/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
               <div className="row y-middle">
                  <div className="col-lg-12">
                     <img className="img100" src="/wileyassets/img/banner/wiley-banner.jpg"/>
                  </div>
               </div>
            </div>
         </div>
         <div className="ptt-50 pbb-0">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="sec-title3 mbb-35 text-center rs-estimate">
                        <p className='font20'>
                        We provide globally researched and validated psychometric assessments, and related training solutions in leadership development across hierarchies.
                        </p>                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
         <div className="shape-bg ptt-50 pbb-50 solutionsboxarea">
            <div className="container">
               <div className="row">
                  <div className='col-sm-12'>
                  <div className="sec-title3 mbb-35">
                     <h4 className="countertoph2 text-center font30">Our Solutions</h4>
                     <div className="heading-border-line center-style mbb-50"></div>
                  </div>
                  </div>
                  <div className="col-sm-6">
                     <div className='rs-blog style1'>
                        <div className="blog-wrap">
                           <div className='text-center'>
                              <img src="/wileyassets/img/everything-disc-authorized-partner.png" alt="everything-disc-authorized-partner"/>
                           </div>
                           <div className="blog-img">
                              <img src="/wileyassets/img/wilelyhome1.jpg" alt=""/>
                           </div>
                           <div className="blog-contant hometeamsection">                             
                              <div className="desc">
                              Unlock the potential of your people and the power of your culture with the Everything DiSC<sup>®</sup> Application Suite.
                              </div>
                              <div className="blog-meta">
                                 <div className="btn-part ptt-10 pbb-10">
                                    <a className="readon2" href="/everythingdisc/">
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
                           <div className='text-center'>
                              <img src="/wileyassets/img/5b-ap-awb.png" alt="5b-ap-awb"/>
                           </div>
                           <div className="blog-img">
                              <img src="/wileyassets/img/wilelyhome2.png" alt=""/>
                           </div>
                           <div className="blog-contant hometeamsection">                              
                              <div className="desc">
                              The Five Behaviors™ is a unique learning experience which helps individuals and teams build an effective work culture through communication and collaboration.
                              </div>
                              <div className="blog-meta">
                                 <div className="btn-part ptt-10 pbb-10">
                                    <a className="readon2" href="/fivebehaviors/">
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


         <div className="shape-bg ptt-50 pbb-0 solutionsboxarea">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">

                     <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center font30">About BYLD Group</h4>
                        <div className="heading-border-line center-style mbb-30"></div>
                     </div>

                     <div className="sec-title3 mbb-35 text-center rs-estimate">
                        <p className='mtt-30'>
                           <i>BYLD is the largest group in the South Asian region, offering value-added services in Strategic and Operational HR, Business Operations, Manpower Staffing, Technology, Executive Coaching, Leadership, and Organizational Development. The first company of BYLD Group, Door Training, and Consulting India Pvt. Ltd. was founded in the year 1998, and since then we have served 4,00,000+ individuals, more than 50% of the Fortune 500 Companies and over 60% of the Business World Top 1000 Companies.</i>
                        </p>
                        <p>
                        Our key international alliances include The Ken Blanchard<sup>®</sup> Companies, VitalSmarts<sup>®</sup>, Eagle’s FlightTM, Everything DiSC<sup>®</sup> and The Five Behaviors<sup>®</sup> (Wiley Brands), Lumina Learning<sup>®</sup>, Business Today Simulations, InsideOut DevelopmentTM, Persona Global<sup>®</sup>, Trapologist at Work™, Aster Coaching. Our India headquartered businesses comprise – Door Training and Consulting India Pvt. Ltd. (DTCI) and YOMA Business Solutions. With an annual turnover of over USD 32 Million (INR 230 crores approx.), more than 250 employees, our operational domain is spread across national and international boundaries. Backed by nearly 1000+ years of professional experience, our consultants support clients across industries to manage, develop and align the talent needs in line with their business objectives and strategies.
                        </p>
                        
                     </div>
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
                            <form id="contactForm" className='clientcornner ptt-40 pbb-20' onSubmit={HomeForm}>                                         
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
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Website">Website</option>
                                                <option value="Reference">Reference</option>
                                                <option value="Sales Representative">Sales Representative</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-sm-6 mb-12 d-none">
                                            <input type="text" name="Business_Entity" value="The Five Behaviors" />
                                        </div>  
                                        <div className="col-lg-12 mb-12">
                                        <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                         </div>
                         <div className="col-sm-5">
                            <img src='/wileyassets/img/cside.png' alt=""/>
                        </div>
                      
                    </div>
                </div>
            </div>

    </>
  )
}
