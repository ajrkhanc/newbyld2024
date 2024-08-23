import Head from "next/head"
import Link from "next/link"
import Slider from "react-slick";


export default function BlanchardGenericLPNew() {

   var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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

    var settings2 = {
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

   const BGLP = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://byldgroup.in/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/180/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            var res = JSON.parse(xhttp.responseText);
            console.log(res)
            if (res.status == "mail_sent") {
               document.getElementById("contactForm").reset();

               document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                   window.location.href = "/blanchardindia/thank-you-lp"
               }, 3000);

            } else {
               document.getElementById("showlabel").innerHTML = "There was a problem with the request.";
               document.getElementById("showlabel").style.display = "block";

            }
         }
      };
      xhttp.send("leadsquared-FirstName=" + event.target.name.value
         + "&leadsquared-EmailAddress=" + event.target.email.value
         + "&leadsquared-Mobile=" + event.target.phone_number.value
         + "&leadsquared-Company=" + event.target.companyName.value
         + "&leadsquared-JobTitle=" + event.target.designation.value
         + "&referredby=" + event.target.referredby.value
         + "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

   }
    return (
        <>
        <Head>
            <title>Building Trust Training to Increase Engagement, Creativity, and Commitment</title>
            <meta name="description" content="" />
         </Head>

         <script
            dangerouslySetInnerHTML={{
              __html: `
              var deadline = new Date("june 30, 2023 09:30:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("second").innerHTML =seconds;
if (t < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "TIME UP";
		document.getElementById("day").innerHTML ='0';
		document.getElementById("hour").innerHTML ='0';
		document.getElementById("minute").innerHTML ='0' ;
		document.getElementById("second").innerHTML = '0'; }
}, 1000);
          `,
            }}
          />
         
         <div className="inner-banner genericnewlp genericnewlps pading0120" id="book-now">
            <div className="container">
                <div className='row align-items-center'>
                   <div className='col-md-7'>
                        <div className="inner-title text-center formtbg lpnewbannerp minh3">                           
                            {/* <img class="img-responsive maxw280" src="/kbassets/img/kb-award.png"/> */}
                            <h3>Building Trust Training to Increase Engagement, Creativity, and Commitment</h3>
                            <h4 className='landingpagesbannerh4 landingpagesbannerh4cc'><span>Enroll in Excellence – Limited Seats Left!</span></h4>
                        </div>
                   </div>
        <div className='col-md-5'>
       <div className='contact-form genericnewlpformbg'>
             <div className="section-title">                   
                <p>Looking for faster support? Please fill out the details and get a call within 24 hours!</p>
            </div>
             <form id="contactForm" method="post" onSubmit={BGLP}>
                     <div className="row">
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="name" id="name" className="form-control" data-error="Please Enter Your Name" placeholder="Your Name*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="email" name="email" id="email" className="form-control" data-error="Please Enter Your Email" placeholder="Work Email/Email*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="phone_number" id="phone_number" pattern="[0-9]*" minlength="10" maxlength="10" className="form-control" placeholder="Phone No.*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <input type="text" name="companyName" id="companyName" className="form-control" data-error="Please Enter Company Name" placeholder="Company Name*" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                              <input type="text" name="designation" id="designation" className="form-control" data-error="Please Enter Designation" placeholder="Designation*" pattern="[a-zA-Z -]*$" title="Only alphabets are allowed" required/>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>                                               
                        
                        
                        <div className="col-lg-6 d-none">
                           <div className="form-group">
                              <label>Business Entity*</label>                              
                              <select className="form-control" name="Business_Entity">
                                 <option value="Ken Blanchard Companies">Ken Blanchard Companies</option>
                              </select>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-6 d-none">
                           <div className="form-group">                                                  
                              <select className="form-control" name="referredby">
                                 <option value="...">Paid</option>
                              </select>
                              <div className="help-block with-errors"></div>
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-12">                          
                           <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="Talk to an Expert" />
                           <div id="msgSubmit" className="h3 text-center hidden"></div>
                           <div className="clearfix"></div>
                           <p id="showlabel" style={{ display: "none" }}></p>
                        </div>
                     </div>
                  </form>
             </div>
                   </div>
                </div>
            </div>                 
        </div>


        <div className="what-did-area pt-45 pb-40 ccbg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <h3 className="bbdrh">Powerful Trust Model Includes</h3><br></br>
                    </div>
                    <div className="clearfix"></div>
                   
                    <div className="col bbdr">                       
                        <div class="business-box">
                        <img class="img-responsive topiconc" src="/kbassets/img/problem-solving.png"/>
                            <h2>ABLE - Demonstrates Competence</h2>                            
                        </div>
                    </div>
                    <div className="col bbdr">                       
                        <div class="business-box">
                        <img class="img-responsive topiconc" src="/kbassets/img/believe.png"/>
                            <h2>BELIEVABLE - Acts with Integrity</h2>
                            
                        </div>
                    </div>
                    <div className="col bbdr">                       
                        <div class="business-box">
                        <img class="img-responsive topiconc" src="/kbassets/img/network.png"/>
                            <h2>CONNECTED - Cares about Others</h2>                            
                        </div>
                    </div>

                    <div className="col bbdr">                       
                        <div class="business-box">
                        <img class="img-responsive topiconc" src="/kbassets/img/dependencies.png"/>
                            <h2>DEPENDABLE - Honors Commitments</h2>                            
                        </div>
                    </div>
                                     
                                      
                </div>
            </div>
            </div>

      

            <div className="eventvideo forpp">
            <div className="container">
                <div className='row align-items-center'>
                    <div className="col-md-6">
                        <div className="text-center borderccc">
                            {/* <img className='ptt50' src="/kbassets/img/home2-pic1.jpg" alt="Images"/> */}
                            <iframe width="100%" height="390" src="https://www.youtube.com/embed/fCIWUJ9ZFnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                   <div className='col-md-6 clanderbg'>
                        <div className="inner-title text-center">
                            
                            <h4 className='landingpagesbannerh4 textsecondcolor textccx'>Team Leadership - Virtual Workshop</h4>
                             <h5 className="sech5">2nd November 2023</h5>
                            <h5 className="sech52">9:30 AM to 5:30 PM</h5>
                             <div className="daysca">

                             <div className="ecdays smf">
                                 <span class="days" id="day"></span>
                                 <div class="smalltext">Days</div>
                              </div>

                              <div className="ehours smf">
                                 <span class="hours" id="hour"></span>
                                 <div class="smalltext">Hours</div>
                              </div>

                              <div className="eminutes smf">
                                 <span class="minutes" id="minute"></span>
                                 <div class="smalltext">Minutes</div>
                              </div>

                              <div className="eseconds smf">
                                 <span class="seconds" id="second"></span>
                                 <div class="smalltext">Seconds</div>
                              </div>

                           </div>

                            <div className="pt-20 pb30">                                
                                <a href="#book-now" className="default-btn btn-bg1 border-radius-5"> Book Now</a>
                            </div>
                        </div>
                   </div>        
                </div>
            </div>                 
        </div>


         


          


            <div className="what-did-area pb-40 pt-45 style2">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-12">
			   <h2 className="titleh2 text-center">Develop Trusting Relationships with Building Trust Program</h2>
			 
                  <div className="what-did-left-content planboxpt80">
                     <div className="row row-eq-height height100p">
                        <div className="col-md-3">
                           <div className="what-did-left-card text-center homeboxeql planbox planbox1">
                              <img src="/kbassets/img/improve.png" alt="Images"/>
                              <h3>Increase Productivity</h3>
							  <p>Employees have a higher level of commitment and discretion.</p>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="what-did-left-card text-center homeboxeql planbox planbox1">
                              <img src="/kbassets/img/badge.png" alt="Images"/>
                              <h3>Retains Talent</h3>
							  <p>
                       Employees are more likely to stay and recognize the company as a great workplace.
                       </p>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="what-did-left-card text-center homeboxeql planbox planbox1">
                              <img src="/kbassets/img/leverage.png" alt="Images"/>
                              <h3>Creativity and Innovation</h3>
							  <p>
                       Employees communicate more openly, share their best ideas, and feel safe by being proactive.
                       </p>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="what-did-left-card text-center homeboxeql planbox planbox1">
                              <img src="/kbassets/img/diagram.png" alt="Images"/>
                              <h3>Create Collaboration</h3>
							  <p>
                       Colleagues and teams help each other get work done together.
                       </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>



 <div class="demo">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            <h2 className="titleh2 text-center pa30c">Client Testimonials</h2>
                <div id="testimonial-slider" class="owl-carousel">
                <Slider {...settings}>
                    <div class="testimonial">
                        <div class="testimonial-content">
                            <div class="testimonial-icon">
                            <img src="/kbassets/img/inverted-commas.png" alt="Images"/>
                            </div>
                            <p class="description">
                            “This workshop was very insightful and made absolute sense in terms of the principles and their application. This program did a great job providing actionable concepts in a way that encouraged instant application.”
                            </p>
                        </div>
                        <h3 class="title">Simpplr</h3>                        
                    </div>

                    <div class="testimonial">
                        <div class="testimonial-content">
                            <div class="testimonial-icon">                                
                                <img src="/kbassets/img/inverted-commas.png" alt="Images"/>
                            </div>
                            <p class="description">
                            “Participants found the Self Leadership workshop very interactive, informative and engaging. They liked the facilitator’s way of presenting the session by implementing various engaging activities.”
                            </p>
                        </div>
                        <h3 class="title">OPTUM </h3>                        
                    </div>
 
                    <div class="testimonial">
                        <div class="testimonial-content">
                            <div class="testimonial-icon">
                            <img src="/kbassets/img/inverted-commas.png" alt="Images"/>
                            </div>
                            <p class="description">
                            “We thank you for being our most trusted vendor partner for sharing the quotes and for supplying the right products/services on time. We acknowledge and appreciate your service and look forward for such excellence in near future as well. Keep up the good work!”
                            </p>
                        </div>
                        <h3 class="title">DBS </h3>
                        
                    </div>
 
                    <div class="testimonial">
                        <div class="testimonial-content">
                            <div class="testimonial-icon">
                            <img src="/kbassets/img/inverted-commas.png" alt="Images"/>
                            </div>
                            <p class="description">
                            “The SLII® Experience provided some really helpful tips to our managers to engage with the teams and be agile in their responses accordingly. It helped them look at the capability model from a different perspective and in turn made them realize the importance of different leadership styles to be an effective leader. Our managers were able to analyze their own effectiveness as a leader and how to enhance it further.”
                            </p>
                        </div>
                        <h3 class="title">Our SLII® Experience Training participant</h3>
                        
                    </div>

                    
                    </Slider>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="what-did-area pb-40 pt-45 style2">
         <div className="container">
            <div className="row">              
               <div className="col-md-12">
               <h2 className="titleh2 text-center">Google Reviews</h2>
               </div>

              

               <div className="col-md-4">
                  <div className="googlereviewbox">
                     <img src="/kbassets/img/re1.jpg" alt="Images"/>
                  </div>
               </div>

               <div className="col-md-4">
                  <div className="googlereviewbox">
                     <img src="/kbassets/img/re2.jpg" alt="Images"/>
                  </div>
               </div>

               <div className="col-md-4">
                  <div className="googlereviewbox">
                     <img src="/kbassets/img/re3.jpg" alt="Images"/>
                  </div>
               </div>

            

            </div>
         </div>
      </div>


      <div className="brand-area brand-bg2">
         <div className="container">
               <Slider {...settings2}>
                  <div key={1}>
                     <img src="/kbassets/img/boston-1.png" alt="Images"/>
                  </div>
                  <div key={2}>
                     <img src="/kbassets/img/tcs.png" alt="Images"/>
                  </div>
                  <div key={3}>
                     <img src="/kbassets/img/optum.png" alt="Images"/>
                  </div>
                  <div key={4}>
                     <img src="/kbassets/img/nthrive.png" alt="Images"/>
                  </div>
                  <div key={5}>
                     <img src="/kbassets/img/mcm.png" alt="Images"/>
                  </div>
                  <div key={6}>
                     <img src="/kbassets/img/hp.png" alt="Images"/>
                  </div>
                  <div key={7}>
                    <img src="/kbassets/img/hero.png" alt="Images"/>
                  </div>
                  <div key={8}>
                    <img src="/kbassets/img/hcl.png" alt="Images"/>
                  </div>
                  <div key={9}>
                    <img src="/kbassets/img/fA.png" alt="Images"/>
                  </div>
               </Slider>
            
         </div>
      </div>
        
        </>
    )
}
