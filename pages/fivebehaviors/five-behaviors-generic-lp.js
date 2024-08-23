import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function FIveBgenriclp(){

    const FiveBgSubmit = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/everythingdisc/wp-json/contact-form-7/v1/contact-forms/42/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";                    
                    document.getElementById("showlabel").style.display = "block";
                    setTimeout(function() {
                        window.location.href="/fivebehaviors/thank-you"
                     }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +            
            "&leadsquared-Company=" + event.target.Organization.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&leadsquared-mx_Showed_Interest_in=" + event.target.intrestin.value +            
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value )

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
            <title>Five Behaviors Generic LP - Five Behaviors</title>
            <meta name="description" content="Effective Teamwork Can Be Your Greatest Competitive Advantage Activate Your Teams’ Potential Connect With Us As the workplace evolves, so do team dynamics. Giving your team the skills they need to work together effectively, regardless of where they are working, is more important than ever. The Five Behaviors<sup>®</sup> solutions can help you activate your team’s […]"/> 
          </Head>

          <div className="fivebgericlp ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-7 col-sm-12">
                            <div className="content-wrap">                                
                                <h2 className="colorw">Effective Teamwork Can Be Your</h2>
                                <h3 className="colorw">Greatest Competitive Advantage</h3>
                                <h3 className="colorw">Activate Your Teams’ Potential</h3>                                
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="bannerform">                            
                            <p className='mbb-10'>Looking for quicker assistance? Fill in your details and get a call back within 24 working hours.</p>
                            <form id="contactForm" className='clientcornner' onSubmit={FiveBgSubmit}>                                         
                                    <div className="row">
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="Organization" placeholder="Organization*" required />
                                        </div>

                                        <div className="col-md-12 mb-12">
                                            <input type="text" name="designation" placeholder="Designation" />
                                        </div>
                                        <div className="col-md-12 mb-12">
                                            <select name="intrestin" required>
                                                <option value="">Interested In*</option>
                                                <option value="Personal Development">Personal Development</option>
                                                <option value="Team Development">Team Development</option>
                                                <option value="The Five Behaviors for Virtual Teams">The Five Behaviors for Virtual Teams</option>
                                                <option value="Interested in knowing more">Interested in knowing more</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-md-6 mb-12 d-none">
                                            <input type="text" name="leadsquared_mx_Business_Entity" value="The Five Behaviors" required />
                                        </div>
                                       
                                        <div className="col-lg-12 mb-12">
                                        <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Submit"/>
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
         <div className="col-lg-7">
            <div className="sec-title3 onlyshd">
               
               <div className="desc pb-17">
               As the workplace evolves, so do team dynamics. Giving your team the skills they need to work together effectively, regardless of where they are working, is more important than ever.
               </div>
               <p className="pbb-0">
               The Five Behaviors<sup>®</sup> solutions can help you activate your team’s ability to drive results through cohesive teamwork, whether it is with our Personal Development solution which helps individuals learn the skills they need to “team” effectively, or our Team Development solution which helps intact teams gain the know-how to work better together.
               </p>
               <p className="margin-0">
               All our <b>team building training and personal development programs</b> use the framework of best-selling author Patrick Lencioni’s model for teamwork which focuses on Trust, Conflict, Commitment, Accountability, and Results. This framework is combined with personalized insights to create powerful, customized, and authentic team development solutions that empower both teams and individuals to make lasting change.
               </p>
            </div>
         </div>
         <div className="col-lg-5">
            <div className="about-img">
               <img src="/5bassets/img/personal-development2.png" alt="images"/>
               <div className="animations one">
                  <img className="dance2" src="/5bassets/img/1.png" alt="About"/>
               </div>
               <div className="animations two">
                  <img className="scale" src="/5bassets/img/2.png" alt="About"/>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>


<div className="rs-services style1 modify shape-bg ptt-60 pbb-50">
   <div className="container">
      <div className="sec-title4 text-center mb-60">         
         <h2 className="title primary-color">Choose the right The Five Behaviors Solution for your team</h2>
      </div>
      <div className="row service-wrap mr-0 ml-0">
         <div className="col-lg-4 padding-0 pr-1">
            <div className="service-grid">
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/personal-development.png" alt=""/>
               </div>
               <h4 className="title mb-18"><a href="#">Personal Development</a></h4>
               <div className="desc mb-12">The Five Behaviors Personal Development solution teaches individuals to become better teammates by integrating Patrick Lencioni’s model at the organizational level.</div>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>A computer-adaptive, psychological assessment</li>
                    <li>Personal Development Profile and one-on-one Comparison Reports</li>
                    <li>Half-day facilitation that includes activities, video, and a handout, plus two optional activities</li>
                </ul>
               </div>
               <div className="btn-wrap">
                  <a className="readmore" href="#">
                  Know More
                     <div className="btn-arrow"></div>
                  </a>
               </div>
            </div>
         </div>
         <div className="col-lg-4 padding-0">
            <div className="service-grid">
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/team-development.png" alt=""/>
               </div>
               <h4 className="title mb-18"><a href="#">Team Development</a></h4>
               <div className="desc mb-12">The program helps teams understand how they score on the key components of The Five Behaviors model: Trust, Conflict, Commitment, Accountability, and Results.</div>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>Assessment: 3 sets of questions, full adaptive version of Everything DiSC, team survey, and team culture questions</li>
                    <li>Individual Profiles, Team Progress Reports, and one-on-one Comparison Reports</li>
                    <li>Participant handouts, take-away cards and activities</li>
                </ul>
               </div>
               <div className="btn-wrap">
                  <a className="readmore" href="#">
                  Know More 
                     <div className="btn-arrow"></div>
                  </a>
               </div>
            </div>
         </div>
         <div className="col-lg-4 padding-0">
            <div className="service-grid">
               <div className="service-icon mb-23">
                  <img src="/5bassets/img/icon/virtual-teams.png" alt=""/>
               </div>
               <h4 className="title mb-18"><a href="#">The Five Behaviors for Virtual Teams</a></h4>
               <div className="desc mb-12">We don’t always think of teamwork as a skill—but the reality is, teamwork is an essential skill, especially in the work from home format. The way we work has changed!</div>
               <div className='rs-estimate'>
                <ul className="estimate-info mtt-5">
                    <li>Discover the principles of The Five Behaviors<sup>®</sup> to build and strengthen teamwork from anywhere.</li>
                    <li>Learn how The Five Behaviors<sup>®</sup> for Virtual Teams can support your remote workforce, no matter where they are.</li>                    
                </ul>
               </div>
               <div className="btn-wrap">
                  <a className="readmore" href="#">
                     Know More
                     <div className="btn-arrow"></div>
                  </a>
               </div>
            </div>
         </div>
         
         
         
      </div>
      <div className="view-btn text-center mt-40">
         <a className="readon2" target="_blank" href="https://ik.imagekit.io/byld/5B/fivebehaviorsbrochure-17Sept_QuhGj3L_34.pdf">
             DOWNLOAD BROCHURE 
            <div className="btn-arrow"></div>
         </a>
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
