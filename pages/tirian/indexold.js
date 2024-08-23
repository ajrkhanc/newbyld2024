import Head from 'next/head'
import Slider from "react-slick";

export default function TirianIndex(){

  const registerUser = async event => {
    event.preventDefault()
    document.getElementById("submitbuttonform").value = "Submitting form...."
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this.responseText);
    }
    xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/19/feedback');
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                document.getElementById("showlabel").style.display = "block";
                window.setTimeout(function() {
                    window.location.href = "/thank-you"
                 }, 3000);

            } else {
                alert('There was a problem with the request.');
            }
        }
    };
    xhttp.send("fname=" + event.target.fname.value +
        "&lname=" + event.target.lname.value +
        "&email-721=" + event.target.email.value +
        "&phone=" + event.target.phone.value +
        "&Companyname=" + event.target.organization.value +
        "&wheredidyoucome=" + event.target.referredby.value +
        "&QuestionsComments=" + event.target.QuestionsComments.value )

}

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
            <title>Tirian | Innovation and Creativity Solutions | BYLD Group</title>
            <meta name="description" content="Tirian offers creative thinking skills and innovative solutions to bring transformation in organizational culture and leadership. To know more, check out the page."/> 
          </Head>
          <div className="rs-services tirianpage">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/tirianbanner.jpg"/>
                    </div>                            
                </div>
            </div>
                     <div className="btn-part ptt-10 pbb-30 text-center tirianbannerbtn">
                        <a href="#tirian-lp" className="readon2">Enquire Now<div className="btn-arrow"></div></a>
                     </div>
            </div>

          <section className='ptt-40 pbb-30'>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-12'>                  
                    <div className="msicon">                      
                      <div className="services-text tirianpcolor1">
                        <h3 className='tirianh3'>
                        Are you looking for innovative and practical solutions to workplace and business challenges?
                        </h3>
                              <p>BYLD Group introduces <span>highly effective CREATIVITY</span> and <span>INNOVATION</span> solutions that are <span>exclusively designed by Tirian Innovative Solutions, Australia.</span></p>
                              <p>We, in partnership with <span>Dr. Andrew Grant</span> (Executive Director at Tirian, Author, Facilitator, Speaker, and Innovation for Transformation Specialist), offer expertise in organizational transformation through strategic innovation.</p>
                              <p>We bring expertise in diagnosing and building innovation capability in leaders and teams, to support sustainable change for our clients and partners.</p>
                              <p><span>Creative</span> thinking makes people <span>energetic, curious, optimistic,</span> and <span>innovative.</span> When challenges are addressed in a collaborative setting, creative thinking permits you to come up with more ideas and solutions.</p>
                          </div>
                      </div>                      
                  </div>
                  {/* <div className='col-sm-6 boxshd letf5border text-center'>
                    <img src='/assets/img/tirian1.png' alt="development"/>
                  </div> */}
                </div>
              </div>
          </section>
          

            <div className="rs-about style2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                           <div className="pb-50">                               
                               <h3 className='tirianh3 pbb-20'>
                               Global Tirian Clients
                                </h3>
                            <Slider {...settings}>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t1.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t2.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t3.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t4.jpg"/>
                                    </div>
                               
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t5.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t6.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t7.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t8.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t9.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t10.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t11.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t12.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t13.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/tirianlogo/t14.jpg"/>
                                    </div>
                                
                            </Slider>
                            </div>
                        </div>                  
                    </div>
                </div>                
            </div>

            <div className="tirianvideobg ptt-60 pbb-60 mtt-20">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-12 col-sm-12">
                            <div className="content-wrap text-center tirianpcolor1">
                                <h3 className='tirianh3'>
                                CREATIVE THINKING FUNDAMENTALS
                                </h3>                                
                                <h2 className="colorw"></h2>
                                <p className='pbb-20 tirianfont16'>The Tirian platform empowers the participants to enter a Digital Board Game-themed <span>Crime Scene InvestigationTM</span> program designed to enhance creative thinking, identifying the mental blocks caused due to psychological, environmental, or organizational barriers.</p>
                            </div>
                            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/jAleJrTj4Xg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>                    
                    </div>
                </div>
            </div>

            <div className="ptt-40 pbb-40 mtt-20">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-12 col-sm-12">
                            <div className="content-wrap text-center tirianpcolor1">
                                <img src='/assets/img/tirian-creative.png'/>
                                <p className='pbb-20 ptt-30'>The USP of this solution is that it allows <span>individuals, teams, and organizations</span> to actually identify the <span>neurological and environmental blocks</span> restricting the creativity of individuals. It develops an understanding of an innovative work environment and a creative mindset.</p>
                            </div>                            
                        </div>                    
                    </div>
                </div>
            </div>

          

          <section className='virtual-live-1 ptt-80 pbb-40'>
            <div className='container'>
              <div className='row'>
                   <div className='col-sm-3'>
                      <a target="_blank" href='/creative-intelligence/#cs1'>
                      <div className='vbox vboxfortirian text-center sec-title3'>
                          <img src="/assets/img/icon/one-1.png"/>
                          <h3>Harnessing Creative Intelligence <br></br>(CQ -TTCT)</h3>
                          
                          <p>How to gain a competitive business advantage.</p>
                       </div>  
                      </a> 
                    </div>
                    <div className='col-sm-3'>
                    <a target="_blank" href='/creative-intelligence/#cs2'>
                      <div className='vbox vboxfortirian text-center sec-title3'>
                          <img src="/assets/img/icon/two-2.png"/>
                          <h3>Who Killed Creativity? <br></br>(The Crime)</h3>                          
                          <p>Interactive diagnostic session with gamified simulation experience.</p>
                      </div>
                      </a>
                    </div>
                    <div className='col-sm-3'>
                    <a target="_blank" href='/creative-intelligence/#cs3'>
                        <div className='vbox vboxfortirian text-center sec-title3'>
                          <img src="/assets/img/icon/three-3.png"/>
                          <h3>How to Get Creativity Back? <br></br>(The Scene)</h3>                          
                          <p>Creative thinking rescuers and rescue strategies.</p>
                        </div>
                        </a>
                    </div>

                    <div className='col-sm-3'>
                    <a target="_blank" href='/creative-intelligence/#cs4'>
                        <div className='vbox vboxfortirian text-center sec-title3'>
                          <img src="/assets/img/icon/four-4.png"/>
                          <h3>Implications and Applications <br></br>(The Investigation)</h3>                          
                          <p>Business and/or personal goal setting and strategic planning.</p>
                        </div>
                        </a>
                    </div>
              </div>
            </div>
          </section>

          <div className="rs-about style2  pbb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                           <div className="ptt-40">                               
                               <h3 className='tirianh3 pbb-20 dtitle'>
                               Delivery Formats
                                </h3>
                                <p className='text-center'>TIRIAN solutions are not only best in class, but also specifically created to meet every demand related to the mode of delivery.</p>                           
                            </div>
                        </div>
                        <div className='clearfix'></div>

                        <div className='col-sm-4'>                                
                        <div className='deliverybox'>
                          <img src="/assets/img/t1-3.jpg"/>
                        </div>
                        </div>

                    <div className='col-sm-4'>                                
                        <div className='deliverybox'>
                          <img src="/assets/img/t2-1.jpg"/>
                        </div>
                    </div>

                    <div className='col-sm-4'>                                
                        <div className='deliverybox'>
                          <img src="/assets/img/t-3-3.jpg"/>
                        </div>
                    </div>

                    <div className='col-sm-4'>                                
                        <div className='deliverybox'>
                          <img src="/assets/img/t-4-3.jpg"/>
                        </div>
                    </div>

                    <div className='col-sm-4'>                                
                        <div className='deliverybox'>
                          <img src="/assets/img/t-5-3.jpg"/>
                        </div>
                    </div>

                    <div className='col-sm-4'>                                
                        <div className='deliverybox'>
                          <img src="/assets/img/t-6-3.jpg"/>
                        </div>
                    </div>

                    <div className='col-sm-4'>                                
                        <div className='deliverybox'>
                          <img src="/assets/img/t-7-3.jpg"/>
                        </div>
                    </div>

                    <div className='col-sm-4'>                                
                        <div className='deliverybox'>
                          <a target="_blank" href='https://ik.imagekit.io/byld/BYLD/pdf/tirian-brochure_W8QeLM7n7.pdf'><img src="/assets/img/download-brochure.svg"/></a>
                        </div>
                    </div>
                    </div>
                    
                </div>                
            </div>


            <div id="tirian-lp" className="rs-testimonial style4 tirianformbg ptt-50 pbb-70">
                <div className="container">                   
                    <div className="row">                    
                         <div className="col-sm-12">
                            <div className="sec-title3 mbb-35 text-center">                                
                                <h3 className='tirianh3 pbb-20 dtitle'>
                                Let us help you diagnose effectively, collaborate better, and innovate faster!
                                </h3>
                            </div>
                         </div>
                         <div className="clearfix"></div>
                         {/* <div className="col-sm-1"></div> */}
                         <div className='col-sm-2'></div>
                         <div className="col-sm-8">
                         <div className="bannerform tirianformshd">
                            <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                                    <div className="row">
                                      <div className='col-sm-12'>
                                        <p>Fill in the form below and our subject matter experts will connect you within 24 working hours.</p>
                                      </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="fname" placeholder="First Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="lname" placeholder="Last Name*" required />
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
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>                                                
                                                <option value="Reference">Reference</option>
                                                
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="QuestionsComments" placeholder="Questions/Comments:"></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn width150" type="submit" value="Speak to an Expert"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                         </div>

                         <div className='col-sm-2'></div>
                         
                    </div>
                </div>
            </div>

        </>
    )
}