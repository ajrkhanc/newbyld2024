import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CountUp from 'react-countup';
import React from 'react';




export default function Home() {

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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


  const registerUser = async event => {
    event.preventDefault()
    document.getElementById("submitbuttonform").value = "Submitting form...."
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    }
    xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/11/feedback');
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
    xhttp.send("name=" + event.target.name.value +
      "&email=" + event.target.email.value +
      "&tel=" + event.target.phone.value +
      "&location=" + event.target.Location.value +
      "&Company=" + event.target.organization.value +
      "&Designation=" + event.target.designation.value +
      "&Product=" + event.target.product.value +
      "&referredby=" + event.target.referredby.value +
      "&textarea=" + event.target.leadsquared_Notes.value)

  }

  return (
    <>


      <Head>
        <title>Mission Vision & Values - BYLD Group</title>
        <link rel="canonical" href="https://byldgroup.com/mission-vision-values" />
        <meta name="description" content="Founded in the year 1998, BYLD is the largest group in the South Asian region, offering technology-enabled HR and business productivity solutions. We have served 5,00,000+ individuals, worked with more than 50% of the Fortune 500 and over 60% of the Business World top 1000 companies." />
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(30000).fadeIn();
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
        <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
      </Head>

      <div class="rs-breadcrumbs missionbreadcrum">
        <div class="container">
          <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
            <ul>
              <li>
                <a href="/">
                  <span>Home</span>
                </a>
                <span class="separator">/</span>
              </li>
              <li>
                <a href="/mission-vision-values">
                  <span>Mission, Vision and Values</span>
                </a>
              </li>
            </ul>
          </div>

          <div className='row'>
            <div className='col-sm-7'>
              <div class="breadcrumbs-inner">
                <span class="watermark ">BYLD</span>
                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                  Mission, Vision and Values
                </h1>
                <span class="sub-text wow fadeInUp delay-0-2s animated animateUP">
                  Founded in the year 1998, BYLD is the largest group in the South Asian region, offering technology-enabled HR and business productivity solutions. We have served 5,00,000+ individuals, worked with more than 50% of the Fortune 500 and over 60% of the Business World top 1000 companies.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className='solutionrow ptt-60 pbb-60'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 text-center'>
              <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP pbb-30">What we stand for</h2>
            </div>
          </div>
          <div className='row zindx'>
            <div className='col-sm-12 zindx'>
              <div className='row missionslrow'>
                <div className='col-sm-2'></div>
                <div className='col-sm-4 missionslrowbr missionslrowbb'>
                  <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                    <div className='iconorh'>
                      <img className='active' src="/assets/img/icon/imission.png" alt="images" />
                      <h4><span>M</span>ISSION</h4>
                    </div>
                    <div className='onlytext'>
                      <p>
                        Our MISSION is to enable individuals and organizations to achieve <b>EXCELLENCE</b> through innovative and integrated solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-sm-4 missionslrowbr missionslrowbb'>
                  <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                    <div className='iconorh'>
                      <img className='active' src="/assets/img/icon/ivision.png" alt="images" />
                      <h4><span>V</span>ISION</h4>
                    </div>
                    <div className='onlytext'>
                      <p>
                        Our VISION is to become the most preferred and comprehensive provider of personal, professional, and organizational effectiveness solutions.
                      </p>
                    </div>
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






      <div className="rs-about style2 ptt-50 pbb-100 backwww">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="pb-50">
                <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">VALUES</h2>
                <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP lltextcenter">
              Our VALUES define us and our internal and external engagements. <b>(I CARE)</b>
              </p>
              </div>
            </div>
        

            <div className='col-sm-12'>
              <div className='circlecontainner ptt-80 pbb-40'>
                <div className='circle'>
                  <div>
                    <span>1</span>
                    <div class="shadow">Inclusivity</div>
                  </div>
                  <div>
                    <span>2</span>
                    <div class="shadow">Customer centricity</div>
                  </div>
                  <div>
                    <span>3</span>
                    <div class="shadow">Agility</div>
                  </div>
                  <div>
                    <span>4</span>
                    <div class="shadow">Reciprocity</div>
                  </div>
                  <div>
                    <span>5</span>
                    <div class="shadow">Entrepreneurship</div>
                  </div>
                
                  <div class="w-logo">
                    <img decoding="async" src="/assets/img/byld-logo.svg"/>
                  </div>

                  <div className='innertxtc'>
                    <p className='tooltiptext'>
                    We will consciously provide an equal access, opportunities, and resources for people who might otherwise be excluded or marginalized, due to any reason.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="rs-about style2 logosl ptt-50 pbb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="pb-50">
                <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Authorized Partners</h2>
                <br></br>
                <Slider {...settings}>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/bla.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/eve.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/five.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/jenson8l.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/tirianl.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/lumi.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/inside.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/persona.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/trapo.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/bussion.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/by-cl.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/flight.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/yomalogs.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/dtci.jpg" />
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="homecon ptt-60">
        <div class="container">
          <div className='row'>
            <div className='col-sm-3'>
              <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Get in touch</h2>
            </div>
            <div className='col-sm-9'>
              <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                Avail the development stream that is essential for your professional requirement. For more information, feel free to fill the form and we will get back to you
              </p>
            </div>
          </div>

          <div class="row y-middle">
            <div class="col-lg-5 md-mb-50">
              <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
                <img src="/assets/img/homeb/contactl.png" alt="Contact" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="contact-wrap">
                <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                  <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                    <div className="row">
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="text" name="name" placeholder="Enter Name*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="email" name="email" placeholder="Enter Email*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="text" name="Location" placeholder="Location" />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="text" name="organization" placeholder="Organization*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="text" name="designation" placeholder="Designation*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <select name="product" required>
                          <option value="">Product / Services</option>
                          <option value="Sales and Services">Sales and Services</option>
                          <option value="Coaching">Coaching</option>
                          <option value="Assessments">Assessments</option>
                          <option value="Leadership and Performance">Leadership and Performance</option>
                          <option value="Experiential Learning">Experiential Learning</option>
                        </select>
                      </div>
                      <div className="col-sm-6 mb-12">
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
                      <div className="col-lg-12 mb-12">
                        <input id="submitbuttonform" className="clientcornnerbtn bord0" type="submit" value="Submit" />
                      </div>
                      <p id="showlabel" style={{ display: "none" }}></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* <section className='solutionrow ptt-60 pbb-60'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3'>
              <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP pbb-30">VALUES</h2>
            </div>
            <div className='col-sm-9'>
              <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                Our VALUES define us and our internal and external engagements. (I CARE)
              </p>
            </div>
          </div>
          <div className='row zindx'>
            <div className='col-sm-12 zindx'>
              <div className='row missionslrow'>
                <div className='col-sm-4 missionslrowbr missionslrowbb'>
                  <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                    <div className='iconorh'>
                      <img className='active' src="/assets/img/homeb/icon/experiential-learning.png" alt="images" />
                      <h4><span>I</span>nclusivity</h4>
                    </div>
                    <div className='onlytext'>
                      <p>
                        We will consciously provide an equal access, opportunities, and resources for people who might otherwise be excluded or marginalized, due to any reason.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-sm-4 missionslrowbr missionslrowbb'>
                  <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                    <div className='iconorh'>
                      <img className='active' src="/assets/img/homeb/icon/experiential-learning.png" alt="images" />
                      <h4><span>C</span>ustomer centricity</h4>
                    </div>
                    <div className='onlytext'>
                      <p>
                        We will strive to exceed the expectations of internal and external customers in every moment of truth with them. We will actively encourage new ideas from one and all.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-sm-4 missionslrowbb'>
                  <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                    <div className='iconorh'>
                      <img className='active' src="/assets/img/homeb/icon/experiential-learning.png" alt="images" />
                      <h4><span>A</span>gility</h4>
                    </div>
                    <div className='onlytext'>
                      <p>
                        We will be flexible in our thoughts and agile in our actions in every situation, which has a direct/indirect impact on business.
                      </p>
                    </div>
                  </div>
                </div>


                <div className='col-sm-2'></div>
                <div className='col-sm-4 missionslrowbr'>
                  <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                    <div className='iconorh'>
                      <img className='active' src="/assets/img/homeb/icon/experiential-learning.png" alt="images" />
                      <h4><span>R</span>eciprocity</h4>
                    </div>
                    <div className='onlytext'>
                      <p>
                        We will treat others with respect and dignity and actively solicit the same from them. We will hold people accountable for any gaps in their actions/behaviors, irrespective of the role or hierarchy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-sm-4'>
                  <div className='solutionboxmission wow fadeInUp delay-0-2s animated animateUP'>
                    <div className='iconorh'>
                      <img className='active' src="/assets/img/homeb/icon/experiential-learning.png" alt="images" />
                      <h4><span>E</span>ntrepreneurship</h4>
                    </div>
                    <div className='onlytext'>
                      <p>
                        We will relentlessly pursue new opportunities on a day-to-day basis to add value to our business. We will work smarter and strive to achieve more with fewer resources.
                      </p>
                    </div>
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






      <div className="rs-about style2 ptt-50 pbb-50 backwww">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="pb-50">
                <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">What we stand for</h2>
                <div className='ptt-30'>
                  <Tabs>
                    <div className=''>
                      <div className='tablistt'>
                        <TabList className="missiontab">
                          <Tab>Mission</Tab>
                          <Tab>Vision</Tab>
                          <Tab>Values</Tab>
                        </TabList>
                      </div>
                    </div>

                    <div>
                      <TabPanel>
                        <div className='row'>
                          <div className='col-sm-6'>
                            <div className='tab-info ptt-30'>
                              <ul>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look</li>
                                <li>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</li>
                                <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</li>
                                <li>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</li>
                              </ul>
                            </div>
                          </div>
                          <div className='col-sm-6'>
                            <div>
                              <img src="/assets/img/new/missionleft.jpg" />                            </div>

                          </div>
                        </div>
                      </TabPanel>

                      <TabPanel>
                        <div className='row'>
                          <div className='col-sm-6'>
                            <div className='tab-info ptt-30'>
                              <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</li>
                                <li>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</li>
                              </ul>
                            </div>
                          </div>
                          <div className='col-sm-6'>
                            <div>
                              <img src="/assets/img/new/visionleft.jpg" />                            </div>

                          </div>
                        </div>
                      </TabPanel>

                      <TabPanel>
                        <div className='row'>
                          <div className='col-sm-6'>
                            <div className='tab-info ptt-30'>
                              <ul>
                                <li>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</li>
                                <li>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</li>
                                <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</li>
                                <li>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</li>
                              </ul>
                            </div>
                          </div>
                          <div className='col-sm-6'>
                            <div>
                              <img src="/assets/img/new/valuesleft.jpg" />                            </div>

                          </div>
                        </div>
                      </TabPanel>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="rs-about style2 logosl ptt-50 pbb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="pb-50">
                <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Our Group Businesses</h2>
                <br></br>
                <Slider {...settings}>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/bla.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/eve.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/five.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/jenson8l.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/tirianl.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/lumi.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/inside.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/persona.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/trapo.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/bussion.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/by-cl.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/flight.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/yomalogs.jpg" />
                  </div>

                  <div className='logoslider wow fadeInUp delay-0-2s animated animateUP'>
                    <img src="/assets/img/new/logos/dtci.jpg" />
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="homecon ptt-60">
        <div class="container">
          <div className='row'>
            <div className='col-sm-3'>
              <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Get in touch</h2>
            </div>
            <div className='col-sm-9'>
              <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                Avail the development stream that is essential for your professional requirement. For more information, feel free to fill the form and we will get back to you
              </p>
            </div>
          </div>

          <div class="row y-middle">
            <div class="col-lg-5 md-mb-50">
              <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
                <img src="/assets/img/homeb/contactl.png" alt="Contact" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="contact-wrap">
                <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                  <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                    <div className="row">
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="text" name="name" placeholder="Enter Name*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="email" name="email" placeholder="Enter Email*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="text" name="Location" placeholder="Location" />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="text" name="organization" placeholder="Organization*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input className='borrr' type="text" name="designation" placeholder="Designation*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <select name="product" required>
                          <option value="">Product / Services</option>
                          <option value="Sales and Services">Sales and Services</option>
                          <option value="Coaching">Coaching</option>
                          <option value="Assessments">Assessments</option>
                          <option value="Leadership and Performance">Leadership and Performance</option>
                          <option value="Experiential Learning">Experiential Learning</option>
                        </select>
                      </div>
                      <div className="col-sm-6 mb-12">
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
                      <div className="col-lg-12 mb-12">
                        <input id="submitbuttonform" className="clientcornnerbtn bord0" type="submit" value="Submit" />
                      </div>
                      <p id="showlabel" style={{ display: "none" }}></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
