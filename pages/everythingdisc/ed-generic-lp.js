import Head from 'next/head'
import Slider from "react-slick";

export default function EdGenericLp(){
    
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
        slidesToShow: 6,
        slidesToScroll: 6,
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
            <title>Coach Certification LP - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
          </Head>
            
          <div className="edgenericlpbanner ptt-40 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">                       
                        <div className='col-md-6'>
                            <div className='icfbannerbox2'>
                            <h3 className='safedcolor'>EMBRACE PRODUCTIVITY AND BETTER WORK COLLABORATION WITH OUR LEARNING SOLUTIONS</h3>
                            <h4 className='safedcolor'>Let us come and work together for better work culture, growth, and change</h4>
                            </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='icfvideoborder'>
                             <iframe width="100%" height="310" src="https://www.youtube.com/embed/dCflyGj6dHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row">                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>                        
                        <p className='mall5'>
                        Employees are assets to an organization, and it is crucial to focus on their interpersonal communication and behavior. Powered by its accurate, tested, and proven Everything DiSC profile and Five Behavior Programs, Wiley is working to harmonize corporate culture. While Everything DiSC is an assessment program for ensuring good behavioral change and work collaboration, the Five Behaviors Program aims to boost the performance of teams and work groups in an organization through collective team work.
                        </p>
                        <h4 className="countertoph2 text-left font24">How is Wiley an Integral Corporate Learning Solution?</h4>
                        <p className='mall5'>
                        The tried and tested programs under Wiley brands are reshaping the work ethics, culture, and potential of employees, managers, C-suite level executives, and teams. Let us understand how.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <div className="bannerform formshd">
                            <div className="sec-title3 mbb-15 text-left">                                
                                <h4 className="countertoph2 text-left font24">Looking for quicker assistance?</h4>
                                <p className='mbb-5'>Fill in your details and get a call back within 24 working hours.</p>
                            </div>
                            <form id="contact-form" className='clientcornner pbb-20' onSubmit={EDGenericLp}>                                         
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
                                            <input type="text" name="designation" pattern="[a-zA-Z -]*$" placeholder="Designation" title="Only alphabets and numbers are allowed" required/>
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <select name="InterestedIn" required>
                                                <option value="">Pick up any Slot*</option>
                                                <option value="3rd December 2021, Personal Listening Profile - Webinar">3rd December 2021, Personal Listening Profile - Webinar</option>
                                                <option value="21st December 2021, Everything DiSC 363 for Leaders - Webinar">21st December 2021, Everything DiSC 363 for Leaders - Webinar</option>
                                                <option value="7th January Everything DiSC Sales - Webinar">7th January Everything DiSC Sales - Webinar</option>
                                                <option value="14th January 2022, The Five Behaviors Team development - Webinar">14th January 2022, The Five Behaviors Team development - Webinar</option>
                                                <option value="24th, 25th, 27th, 28th January 2022, DISC TTT Virtual Public Workshop">24th, 25th, 27th, 28th January 2022, DISC TTT Virtual Public Workshop</option>
                                                <option value="25th February 2022 The Five Behaviors Team Development Workshop">25th February 2022 The Five Behaviors Team Development Workshop</option>
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
            </div>


            <div className="edgenericlpbannermiddle ptt-50 pbb-60">
                <div className="container custom">
                    <div className="row y-middle">                       
                        <div className='col-md-12 text-center'>
                            <div className='icfbannerbox2'>                            
                            <h4 className='safedcolor mbb-5'>How is Wiley an Integral Corporate Learning Solution?</h4>
                            <p className='safedcolor'>
                            The tried and tested programs under Wiley brands are reshaping the work ethics, culture, and potential of employees, managers, <br></br>C-suite level executives, and teams. Let us understand how.
                            </p>
                            </div>
                        </div>
                        <div className='clearfix ptt-10'></div>

                        <div className='col-md-4'>
                            <div className='innerclorbg'>
                                <div className='rs-estimate'>
                                <h4 className='safedcolor mbb-5'>Employees</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li>Easy-to-understand DiSC profile</li>
                                        <li>Better work collaboration</li>
                                        <li>Improves interpersonal communication</li>
                                        <li>Helps in Behavioral change</li>                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='innerclorbg'>
                                <div className='rs-estimate'>
                                <h4 className='safedcolor mbb-5'>Managers and C-suite Executives</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li>Helps them improve weak areas</li>
                                        <li>Optimizes their leadership and managerial skills</li>
                                        <li>Ensures better team handling</li>
                                        <li>Prepares them for conflict resolution</li>                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='innerclorbg'>
                                <div className='rs-estimate'>
                                <h4 className='safedcolor mbb-5'>Teams</h4>
                                    <ul className="estimate-info mtt-5">
                                        <li>Promotes better team work and collaboration</li>
                                        <li>Helps in effective team engagement</li>
                                        <li>Facilitates healthy competition</li>
                                        <li>Boost productivity and team performance</li>                                        
                                    </ul>
                                </div>
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
                                        <img src="/edassets/img/logos/c1.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c2.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c3.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c4.jpg"/>
                                    </div>
                               
                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c5.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c6.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c7.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c8.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c9.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c10.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c11.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c12.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/edassets/img/logos/c13.jpg"/>
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


