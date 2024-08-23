import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function FIveBgenriclp(){

    const EDGenericLp = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/everythingdisc/wp-json/contact-form-7/v1/contact-forms/33/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                        window.location.href = "/everythingdisc/thank-youeverything-disc-generic-overview-landing-page"
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
            "&leadsquared-mx_PickupanySlot=" + event.target.InterestedIn.value +                  
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )
  
    }

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

       

    return(
        <>
           <Head>
            <title>Everything DiSC Generic Overview Landing Page - Everything DiSC</title>
            <meta name="description" content="Proven Learning Solutions for Individuals and Teams Unlock the potential of your people and the power of your culture with the Everything DiSC® Solutions."/>             
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11220859115"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11220859115');
          `,
            }}
          />
          </Head>

          <div className="fivebgericlp ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-7 col-sm-12">
                            <div className="content-wrap">                                
                                <h2 className="colorw font30">Proven Learning Solutions for Individuals and Teams</h2>
                                <h3 className="colorw font22">Unlock the potential of your people and the power of your culture with the Everything DiSC<sup>®</sup> Solutions.</h3>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="bannerform">                            
                            <p className='mbb-10'>Looking for quicker assistance? Fill in your details and get a call back within 24 working hours.</p>
                            <form id="contact-form" className='clientcornner' onSubmit={EDGenericLp}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation"/>
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <select name="InterestedIn" required>
                                                <option value="">Interested In*</option>
                                                <option value="Everything DiSC Agile EQ">Everything DiSC Agile EQ</option>
                                                <option value="Everything DiSC Sales">Everything DiSC Sales</option>
                                                <option value="Everything DiSC 363 for Leaders">Everything DiSC 363 for Leaders</option>
                                                <option value="Everything DiSC Productive Conflict">Everything DiSC Productive Conflict</option>
                                                <option value="Everything DiSC Workplace">Everything DiSC Workplace</option>
                                                <option value="Everything DiSC Work Of Leaders">Everything DiSC Work Of Leaders</option>
                                                <option value="Everything DiSC Management">Everything DiSC Management</option>
                                                <option value="Everything DiSC Workplace on Catalyst">Everything DiSC Workplace on Catalyst</option>
                                                <option value="Interested in knowing more">Interested in knowing more</option>
                                            </select>
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
                    </div>
                </div>
            </div>

 <div className="rs-about style4 bg21 pt-100 pb-100 md-pt-70 md-pb-70">
   <div className="container">
      <div className="row y-middle">
         <div className="col-lg-6">
            <div className="sec-title3 onlyshd">
               <h3 className='countertoph2 font30'>We help organizations develop thriving virtual cultures</h3>
               
               <p className="pbb-0">
               Everything DiSC<sup>®</sup> is a personal development training backed by psychometric assessments that measures preferences and tendencies based on the DiSC<sup>®</sup> model. This simple yet powerful model describes four basic styles: D, i, S, and C, and serves as the foundation for the Everything DiSC<sup>®</sup> Solutions.
               </p>
               <p className="margin-0">
               Explore our complete application suite of workplace development programs (based on personality assessment tests), to improve the collaboration and engagement of employees.
               </p>
            </div>
         </div>
         <div className="col-lg-5">
            <div className="about-img">
               <img src="/edassets/img/edgenericlp.jpg" alt="images"/>          
            </div>
         </div>
      </div>
   </div>
</div>


<div className="rs-services style1 modify shape-bg ptt-60 pbb-50">
   <div className="container">
      <div className="sec-title4 text-center mb-60">         
         <h2 className="title primary-color">The Everything DiSC<sup>®</sup> Solutions</h2>
         <p>
         Each distinct Everything DiSC application is designed to help participants better understand themselves and others. Whether improving working relationships, strengthening management skills, elevating leadership impact, or tackling conflict with a new mindset, Everything DiSC delivers insights and strategies to meet the unique needs of your people and your organizational culture.
         </p>
      </div>
      <div className="row service-wrap mr-0 ml-0">
         <div className="col-lg-4 padding-0 pr-1 borddd">
            <div className="service-grid">
               <a href="/everythingdisc/solutions/everything-disc-agile-eq">
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/personal-development.png" alt=""/>
               </div>
               <h4 className="title mb-6"><a>Agile EQ™</a></h4>
               <div className="desc">Develop the emotional intelligence necessary to support a thriving agile culture.</div>
               <h4 className='countertoph2 font22'>Participant Takeaways</h4>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>Discover your EQ strengths</li>
                    <li>Recognize your EQ potential</li>
                    <li>Commit to customized strategies for building agility</li>
                </ul>
               </div>
                </a>               
            </div>
         </div>
         <div className="col-lg-4 padding-0 borddd">
         <div className="service-grid">
               <a href='/everythingdisc/solutions/workplace'>
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/personal-development.png" alt=""/>
               </div>
               <h4 className="title mb-6"><a>Workplace</a></h4>
               <div className="desc">Engage every individual in building more effective relationships at work.</div>
               <h4 className='countertoph2 font22'>Participant Takeaways</h4>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>In-depth self-discovery</li>
                    <li>Appreciation for differences in work styles</li>
                    <li>Strategies for successful interactions</li>
                </ul>
               </div>
                </a>               
            </div>
         </div>
         <div className="col-lg-4 padding-0 borddd">
         <div className="service-grid">
               <a href="/everythingdisc/solutions/everything-disc-management">
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/personal-development.png" alt=""/>
               </div>
               <h4 className="title mb-6"><a>Management</a></h4>
               <div className="desc">Teach managers to successfully engage, motivate, and develop their people.</div>
               <h4 className='countertoph2 font22'>Participant Takeaways</h4>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>Discovery of personal management style</li>
                    <li>Insight into directing, delegating, and motivating</li>
                    <li>Strategies to support long-term development</li>
                </ul>
               </div> 
                </a>              
            </div>
         </div>

         <div className="col-lg-4 padding-0 borddd">
         <div className="service-grid">
               <a href="/everythingdisc/solutions/everything-disc-productive-conflict">
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/personal-development.png" alt=""/>
               </div>
               <h4 className="title mb-6"><a>Productive Conflict</a></h4>
               <div className="desc">Develop the emotional intelligence necessary to support a thriving agile culture.</div>
               <h4 className='countertoph2 font22'>Participant Takeaways</h4>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>Self-awareness around reactions to conflict</li>
                    <li>The impact different conflict responses have on others</li>
                    <li>Steps to change responses from destructive to productive</li>
                </ul>
               </div> 
                </a>              
            </div>
         </div>

         <div className="col-lg-4 padding-0 borddd">
         <div className="service-grid">
               <a href="/everythingdisc/solutions/everything-disc-work-of-leaders">
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/personal-development.png" alt=""/>
               </div>
               <h4 className="title mb-6"><a>Work of Leaders</a></h4>
               <div className="desc">Create impactful leaders through the process of Vision, Alignment, and Execution.</div>
               <h4 className='countertoph2 font22'>Participant Takeaways</h4>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>A simple, compelling model of leadership</li>
                    <li>Personalized insights to leverage strengths and overcome challenges</li>
                    <li>A clear path for improvement</li>
                </ul>
               </div>
               </a>
            </div>
         </div>

         <div className="col-lg-4 padding-0 borddd">
         <div className="service-grid">
               <a href="/everythingdisc/solutions/everything-disc-sales">
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/personal-development.png" alt=""/>
               </div>
               <h4 className="title mb-6"><a>Sales</a></h4>
               <div className="desc">Provide salespeople with the skills to adapt to customers’ preferences and expectations.</div>
               <h4 className='countertoph2 font22'>Participant Takeaways</h4>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>Discovery of personal sales style</li>
                    <li>Recognition of customers’ differences</li>
                    <li>Strategies to adapt sales approaches to customer needs</li>
                </ul>
               </div>
               </a>
            </div>
         </div>

         <div className="col-lg-4 padding-0 borddd">
         <div className="service-grid">
               <a href="/everythingdisc/solutions/everything-disc-363-for-leaders">
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/personal-development.png" alt=""/>
               </div>
               <h4 className="title mb-6"><a>363 for Leaders</a></h4>
               <div className="desc">Elevate leadership effectiveness with our dynamic 360-degree feedback tool.</div>
               <h4 className='countertoph2 font22'>Participant Takeaways</h4>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>The tendencies that shape participants’ leadership approaches</li>
                    <li>Focused, balanced and, constructive feedback</li>
                    <li>Three actionable steps to elevate effectiveness</li>
                </ul>
               </div>
               </a>
            </div>
         </div>

         <div className="col-lg-4 padding-0 borddd">
         <div className="service-grid">
               <a href="/everythingdisc/solutions/everything-disc-workplace-on-catalyst">
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/personal-development.png" alt=""/>
               </div>
               <h4 className="title mb-6"><a>DiSC Catalyst</a></h4>
               <div className="desc">Organizational culture faces unpredictable and constantly evolving challenges.</div>
               <h4 className='countertoph2 font22'>Participant Takeaways</h4>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>A simple, compelling model of leadership</li>
                    <li>Personalized insights to leverage strengths and overcome challenges</li>
                    <li>A clear path for improvement</li>
                </ul>
               </div>
               </a>
            </div>
         </div>


         <div className="col-lg-4 padding-0 y-middle text-center">
         <div className="view-btn text-center pll-20">
         <a className="readon2" target="_blank" href="/edassets/pdf/everything-disc-brochure.pdf">
             DOWNLOAD BROCHURE 
            <div className="btn-arrow"></div>
         </a>
      </div>
         </div>
         
         
         
      </div>      
   </div>
</div>




            <div className="rs-about style2 clientcornnerlogo ptt-20">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                           <div className="pb-50">
                               <div className="sec-title3 mbb-35">
                                    <h4 className="countertoph2 text-center font30">Our Clients</h4>
                                    <div className="heading-border-line center-style"></div>
                               </div>
                            <Slider {...settings}>
                                
                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c1.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c2.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c3.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c4.jpg"/>
                                    </div>
                               
                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c5.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c6.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c7.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c8.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c9.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c10.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c11.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c12.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/5bassets/img/logos/c13.jpg"/>
                                    </div>
                                
                            </Slider>
                            </div>
                        </div>                  
                    </div>
                </div>                
            </div>
        </>
    )
}
