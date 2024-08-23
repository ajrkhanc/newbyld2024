import Head from 'next/head'
import Slider from "react-slick";

export default function TirianIndex() {

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
          window.setTimeout(function () {
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
      "&QuestionsComments=" + event.target.QuestionsComments.value)

  }

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
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

  return (
    <>
      <Head>
        <title>Tirian | Innovation and Creativity Solutions | BYLD Group</title>
        <meta name="description" content="Tirian offers creative thinking skills and innovative solutions to bring transformation in organizational culture and leadership. To know more, check out the page." />
        <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
      </Head>
      <div className="rs-services tirianpage">
        <div className="container-full">
          <div className="row y-middle">
            <div className="col-lg-12">
              <img className="img100" src="/assets/img/banner/tirianbanner.jpg" />
            </div>
          </div>
        </div>
        <div className="btn-part ptt-10 pbb-30 text-center tirianbannerbtn">
          <a href="#tirian-lp" className="readon2">Enquire Now<div className="btn-arrow"></div></a>
        </div>
      </div>


      <section className='ptt-40 pbb-30 jenson8section1 solutionrow ptt-60 pbb-60'>
        <div className='container'>
          <div className='row zindx align-items-center'>
            <div className='col-sm-6'>
              <div className="msicon">
                <div className="services-text tirianpcolor1">
                  <h1 className='tirianh3 text-left wow fadeInUp delay-0-2s animated animateUP'>
                    Are you looking for innovative and practical solutions to workplace and business challenges?
                  </h1>
                  <p className='textl mb-0 pall1 pbb-10 wow fadeInUp delay-0-2s animated animateUP'>BYLD Group introduces <span>highly effective CREATIVITY</span> and <span>INNOVATION</span> solutions that are <span>exclusively designed by Tirian Innovative Solutions, Australia.</span></p>
                  <p className='textl mb-0 pall1 pbb-10 wow fadeInUp delay-0-2s animated animateUP'>We, in partnership with <span>Dr. Andrew Grant</span> (Executive Director at Tirian, Author, Facilitator, Speaker, and Innovation for Transformation Specialist), offer expertise in organizational transformation through strategic innovation.</p>
                  <p className='textl mb-0 pall1 pbb-10 wow fadeInUp delay-0-2s animated animateUP'>We bring expertise in diagnosing and building innovation capability in leaders and teams, to support sustainable change for our clients and partners.</p>
                  <p className='textl mb-0 pall1 pbb-10 wow fadeInUp delay-0-2s animated animateUP'><span>Creative</span> thinking makes people <span>energetic, curious, optimistic,</span> and <span>innovative.</span> When challenges are addressed in a collaborative setting, creative thinking permits you to come up with more ideas and solutions.</p>
                </div>
              </div>
            </div>
            <div className='col-sm-1'></div>
            <div className='col-sm-5 text-center'>
              <img className='wow fadeInUp delay-0-2s animated animateUP' src='/assets/img/tirian1.png' alt="development" />
            </div>
          </div>

          <div className='clearfix'></div>
          <div className='solutionarrowbox1'>
            <img className='opacity4' src="/assets/img/homeb/orangearrow.png" />
          </div>
          <div className='solutionarrowbox2'>
            <img src="/assets/img/homeb/bluearrow1.png" />
          </div>
        </div>
      </section>


      <div className="rs-about style2 logosl ptt-50 pbb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="pb-50">
                <h2 class="tirianh3 mb-0 md-pb-20 wow fadeInUp delay-0-2s animated animateUP">Global Tirian Clients</h2>
                <br></br>
                <Slider {...settings}>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t1.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t2.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t3.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t4.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t5.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t6.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t7.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t8.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t9.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t10.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t11.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t12.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t13.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/logos/tirianlogo/t14.jpg" />
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className='solutionrow ptt-0 pbb-60 ptt-60'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3'>
              <h3 className='tirianh3 pbb-30 textl wow fadeInUp delay-0-2s animated animateUP'>
              Creative Thinking Fundamentals
              </h3>
            </div>
            <div className='col-sm-9'>
              <p className='pbb-20 tirianfont16 mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP'>The Tirian platform empowers the participants to enter a Digital Board Game-themed <span>Crime Scene InvestigationTM</span> program designed to enhance creative thinking, identifying the mental blocks caused due to psychological, environmental, or organizational barriers.</p>
            </div>
          </div>
          <div className='row zindx'>          
            <div className='col-sm-12'>
              <div class="rs-videos choose-video wow fadeInUp delay-0-2s animated animateUP">
                <div class="images-video">
                  <img className='imgbr' src="/assets/img/tirianvideo.jpg" alt="images" />
                </div>
                <div class="animate-border">
                  <a class="popup-border" target="_blank" href="https://www.youtube.com/watch?v=jAleJrTj4Xg">
                    <i class="fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='clearfix'></div>
          <div className='solutionarrowbox1'>
            <img className='opacity4' src="/assets/img/homeb/orangearrow.png" />
          </div>
          <div className='solutionarrowbox2'>
            <img src="/assets/img/homeb/bluearrow1.png" />
          </div>

        </div>
      </section>



      <div className="ptt-40 pbb-40 mtt-20">
        <div className="container custom">
          <div className="row y-middle">
            <div className="col-md-12 col-sm-12">
              <div className="content-wrap text-center tirianpcolor1">
                <img src='/assets/img/tirian-creative.png' />
                <p className='pbb-20 ptt-30'>The USP of this solution is that it allows <span>individuals, teams, and organizations</span> to actually identify the <span>neurological and environmental blocks</span> restricting the creativity of individuals. It develops an understanding of an innovative work environment and a creative mindset.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='solutionrow ptt-60 pbb-60'>
                <div className='container'>
                  
                    <div className='row zindx'>
                        
                        <div className='col-sm-12 zindx cclc'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='solutionbox2 wow fadeInUp delay-0-2s animated animateUP'>
                                    <a href='/creative-intelligence#cs1'>
                                        <div className='jeniconbox d-flex'>                                            
                                            <div className='jenicon'>
                                                <div className='jimgbox'>
                                                    <img src='/assets/img/icon/one-1.png' alt="icon" />
                                                </div>
                                            </div>
                                            <div className='jenicontex'>
                                                <h4>Harnessing Creative Intelligence (CQ -TTCT)</h4>
                                                <p>How to gain a competitive business advantage.</p>
                                            </div>                                            
                                        </div>
                                        </a>

                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='solutionbox2 wow fadeInUp delay-0-2s animated animateUP'>
                                    <a href='/creative-intelligence#cs2'>
                                        <div className='jeniconbox d-flex'>
                                            <div className='jenicon'>
                                                <div className='jimgbox'>
                                                    <img src='/assets/img/icon/two-2.png' alt="icon" />
                                                </div>
                                            </div>
                                            <div className='jenicontex'>
                                                <h4>Who Killed Creativity? (The Crime)</h4>
                                                <p>Interactive diagnostic session with gamified simulation experience.</p>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='solutionbox2 wow fadeInUp delay-0-2s animated animateUP'>
                                    <a href='/creative-intelligence#cs3'>
                                        <div className='jeniconbox d-flex'>
                                            <div className='jenicon'>
                                                <div className='jimgbox'>
                                                    <img src='/assets/img/icon/three-3.png' alt="icon" />
                                                </div>
                                            </div>
                                            <div className='jenicontex'>
                                                <h4>How to Get Creativity Back? (The Scene)</h4>
                                                <p>Creative thinking rescuers and rescue strategies.</p>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='solutionbox2 wow fadeInUp delay-0-2s animated animateUP'>
                                    <a href='/creative-intelligence#cs4'>
                                        <div className='jeniconbox d-flex'>
                                            <div className='jenicon'>
                                                <div className='jimgbox'>
                                                    <img src='/assets/img/icon/four-4.png' alt="icon" />
                                                </div>
                                            </div>
                                            <div className='jenicontex'>
                                                <h4>Implications and Applications (The Investigation)</h4>
                                                <p>Business and/or personal goal setting and strategic planning.</p>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>

                </div>
            </section>


            <section className='solutionrow ptt-60 pbb-60 backgroundwhit'>
                <div className='container'>
                    <div className='row pbb-40'>
                        <div className='col-sm-3'>
                            <h2 class="title h2call2 mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Delivery Formats</h2>
                        </div>
                        <div className='col-sm-9'>
                            <p class="mb-0 pbb-20 ptt-10 pall2 wow fadeInUp delay-0-2s animated animateUP">
                            TIRIAN solutions are not only best in class, but also specifically created to meet every demand related to the mode of delivery.
                            </p>
                        </div>
                    </div>
                    <div className='row zindx'>                    
                        <div className='col-sm-12 deleveryo'>
                            <div className='row missionslrow boch'>                                
                                <div className='col-sm-3 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/staffing-search.png" alt="images" />
                                            <h4><span>F</span>ace-to-Face Live Sessions</h4>
                                        </div>                                       
                                    </div>
                                </div>

                                <div className='col-sm-3 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/coaching.png" alt="images" />
                                            <h4><span>K</span>ey Notes</h4>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className='col-sm-3 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/bespoke.png" alt="images" />
                                            <h4><span>V</span>irtual Live Sessions</h4>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className='col-sm-3 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/assessments.png" alt="images" />
                                            <h4><span>C</span>onference and Events</h4>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className='col-sm-3 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                            <h4><span>O</span>nline Courses</h4>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='col-sm-3 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/experiential-learning.png" alt="images" />
                                            <h4><span>R</span>etreats</h4>
                                        </div>                                    
                                    </div>
                                </div>
                                <div className='col-sm-3 missionslrowbr missionslrowbb'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/experiential-learning.png" alt="images" />
                                            <h4><span>B</span>lended Learning</h4>
                                        </div>                                    
                                    </div>
                                </div>
                                <div className='col-sm-3 missionslrowbr missionslrowbb'>
                                    <a target='_blank' href='/assets/pdf/tirian-brochure.pdf'>
                                    <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='iconorh ptt-40 pbb-40'>
                                            <img className='active' src="/assets/img/homeb/icon/donll.png" alt="images" />
                                            <h4><span>D</span>ownload Brochure</h4>
                                        </div>                                    
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>

                </div>
            </section>

   


      <div id="tirian-lp" className="rs-testimonial style4 tirianformbg ptt-50 pbb-70 homecon">
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
                      <input className='borrr' type="text" name="fname" placeholder="First Name*" required />
                    </div>
                    <div className="col-sm-6 mb-12">
                      <input className='borrr' type="text" name="lname" placeholder="Last Name*" required />
                    </div>
                    <div className="col-sm-6 mb-12">
                      <input className='borrr' type="email" name="email" placeholder="Work Email/Email*" required />
                    </div>
                    <div className="col-sm-6 mb-12">
                      <input className='borrr' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                    </div>

                    <div className="col-sm-6 mb-12">
                      <input className='borrr' type="text" name="organization" placeholder="Organization*" required />
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
                      <input id="submitbuttonform" className="clientcornnerbtn width150" type="submit" value="Speak to an Expert" />
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