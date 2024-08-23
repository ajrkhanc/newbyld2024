import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
   const EDcontactUs = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
          console.log(this.responseText);
      }
      xhttp.open("Post", 'https://byldgroup.in/everythingdisc/wp-json/contact-form-7/v1/contact-forms/24/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4) {
              if (xhttp.status == 200) {
                  document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";

                  document.getElementById("showlabel").style.display = "block";
                  window.setTimeout(function() {
                     window.location.href = "/everythingdisc/thank-you"
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
            <title>Everything DiSC | Personal Development Learning | BYLD Group</title>
            <meta name="description" content="Explore Everything DiSC Workplace Profile to assess your working style, behavioral pattern, strengths, and weakness for effective team collaboration. To know more about various Everything DiSC solutions, check out the site."/> 
            <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
          </Head>

          <div className="rs-services">
            <div className="container-full">
               <div className="row y-middle">
                  <div className="col-lg-12">
                     <img className="img100" src="/edassets/img/banner/main-banner_02.jpg"/>
                  </div>
               </div>
            </div>
         </div>

         <div className="rs-about style4 bg21 pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
               <div className="row y-middle">
                  <div className="col-lg-7">
                     <div className="sec-title3 onlyshd">                     
                        <h4 className="countertoph2 text-left font30">Everything DiSC<sup>®</sup> – The Culture Catalyst™</h4>
                        <div className="heading-border-line left-style mbb-50"></div>
                     
                        <div className="desc pb-17 textjustify">
                        Everything DiSC is a personal development learning experience that measures an individual’s preferences and tendencies based on the <strong>DiSC<sup>®</sup> profile</strong>. This simple yet powerful model describes four basic styles: D, i, S, and C, and serves as the foundation for the Everything DiSC application suit. Participants receive personalized insights of <strong>DiSC Assessment</strong> that deepen their understanding of self and others, making workplace interactions more enjoyable and effective. The result of <strong>DiSC analysis</strong> is a more engaged and collaborative workforce that can spark meaningful culture improvement in your organization. <strong>Psychometric analysis</strong>, on the other hand, fulfills an organization’s requirement of knowing and evaluating a candidate with perfection.
                        </div>                       
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="about-img text-center">
                        <img src="/edassets/img/ed-catalyst-web-updates-discmap.png" alt="images"/>                       
                     </div>
                  </div>
               </div>
            </div>
         </div>


         <div className="rs-achievement style1 relative">
            <div className="container">
               <div className="row rs-vertical-middle">
                  <div className="col-lg-6 pr-0">
                     <div className='sec-title3'>
                        <h4 className="countertoph2 text-left font30">Everything DiSC<sup>®</sup>- Best Psychometric Analysis Tool</h4>
                        <div className="heading-border-line left-style mbb-10"></div>
                        <h4 className="countertoph2 text-left pbb-5">Do you know the best thing about knowing yourself perfectly?</h4>
                     </div>
                     <p className='justify mbb-5'>
                     No one else can trick you into telling something which you are not. The secret to unlocking the fate of destiny is practice. And practice comes with DiSC analysis of a candidate’s report. Success comes to those who attempt to improve themselves by eliminating their flaws. That is why it is critical to timeline your shortcomings through Everything DiSC<sup>®</sup>. Psychometric assessments measure the qualities that we can’t see with naked eyes. These are characteristics like intelligence, behavior, or honesty. Psychometric analysis reveals the true identity of an individual’s behavior and preferences at work. No tool is perfect, but DiSC Assessment can easily claim to remain unbiased because of the in-depth and research-based analysis.
                     </p>
                     <div className="sec-title3 mbb-35 text-left rs-estimate">                      
                        <ul className="estimate-info mtt-5">
                           <li><b className='themecolor'>DiSC Profile</b> is a thoroughly analyzed report of amalgamation of DiSC styles and their reference points as</li>
                           <li><b className='themecolor'>Dominance:</b> direct, strong-willed, and forceful</li>                  
                           <li><b className='themecolor'>Influence:</b> sociable, talkative, and lively</li>
                           <li><b className='themecolor'>Steadiness:</b> gentle, accommodating, and soft-hearted</li>
                           <li><b className='themecolor'>Conscientiousness:</b> private, analytical, and logical</li>
                           
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-6 md-pt-50">
                     <div className="img-part">
                        <img src="/edassets/img/Psychometric-Testing.jpg" alt=""/>
                     </div>
                  </div>
               </div>
               <img className="pattern-img" src="/edassets/img/pattern4.png" alt=""/>
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
                            <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={EDcontactUs}>
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
                                            <input type="text" name="Business_Entity" value="Everything DiSC"/>
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
                            <img src='/edassets/img/cside.png' alt=""/>
                        </div>
                      
                    </div>
                </div>
            </div>

    </>
  )
}
