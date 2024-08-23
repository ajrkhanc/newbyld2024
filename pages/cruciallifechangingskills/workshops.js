import Head from "next/head";

export default function Workshops() {
  const WorkshopsForm = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/14/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
          document.getElementById("contactForm").reset();
          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href = "/cruciallifechangingskills/thank-you";
          }, 3000);
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "leadsquared-FirstName=" +
        event.target.name.value +
        "&leadsquared-EmailAddress=" +
        event.target.email.value +
        "&leadsquared-Mobile=" +
        event.target.phone.value +
        "&leadsquared-Company=" +
        event.target.organization.value +
        "&leadsquared-JobTitle=" +
        event.target.designation.value +
        "&leadsquared-mx_States=" +
        event.target.location.value +
        "&referredby=" +
        event.target.referredby.value +
        "&leadsquared-mx_Showed_Interest_in=" +
        event.target.slot.value +
        "&Notes=" +
        event.target.nots.value +
        "&leadsquared-mx_Business_Entity=" +
        event.target.Business_Entity.value
    );
  };

  return (
    <>
      <Head>
        <title>Workshops - Crucial Life-Changing Skills</title>
        <link
          rel="canonical"
          href="https://byldgroup.com/cruciallifechangingskills/workshops"
        />
        <meta
          name="description"
          content="DO YOU THINK VIRTUAL INSTRUCTOR-LED TRAINING IS NOT ENGAGING? Then, probably you haven’t attended a real one. Join our upcoming online, on-demand, and virtual courses, and gain new insights to... Read more"
        />
      </Head>
      <section class="about-section workshop-hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 contact-title">
              <h1>
                DO YOU THINK VIRTUAL INSTRUCTOR-LED TRAINING IS NOT ENGAGING?
              </h1>
              <p>
                Then, you probably haven’t attended a real one. Join our
                upcoming online, on-demand, and virtual courses, and gain new
                insights to develop crucial skills for better behavior and
                results. Our training focus on the fundamentals of human
                behavior and its impact on individual, team, and organizational
                productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="workshops">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 contact-title">
              <h1>WORKSHOPS</h1>
            </div>

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Mastering Dialogue</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> April 27th - 28th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Accountability</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 12th& 13th September , 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content green-col"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>INFLUENCER</h4>
                            <p></p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date green-col"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> June 22nd - 23rd, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content phothemecolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4 className='pbb-20'>THE POWER OF HABIT</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> July 13th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register phothemecolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}


            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content phothemecolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4 className='pbb-20'>THE POWER OF HABIT</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> August 24th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register phothemecolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>
                    <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content green-col"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>INFLUENCER</h4>
                            <p></p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date green-col"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> August 24th - 25th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}

            {/*             
                    <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content gtdcolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                            <h4 className='pbb-20'>Getting Things Done</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> September 28th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>*/}

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Accountability</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 16th May, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 3:00 PM to 4:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>  */}

            {/* <div class="col-md-4 workshop-col">
                            <div class="row workshop-row">
                                <div class="col-md-12 workshop-content">
                                    <img class="left-image img100px mbb-30" src="/classets/img/logo-conversations.svg" alt="" />
                                    <h4>CRUCIAL CONVERSATIONS</h4>
                                    <p>for Accountability</p>
                                </div>
                                <h5 className='eventt'>Workshop</h5>
                                <div class="col-md-12 workshop-date">
                                    <h6><i class="fa fa-calendar" aria-hidden="true"></i> October 12th - 13th, 2023</h6>
                                    <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                                    <p className='soldout'>Sold Out</p>
                                    <a href='#registered'><button class="register">REGISTER NOW</button></a>
                                </div>
                            </div>
                        </div> */}

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content gtdcolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                            <h4 className='pbb-20'>Getting Things Done</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> November 6th - 8th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 02:30 PM to 5:00 PM</h6>
                            <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>

                    <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content gtdcolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                            <h4 className='pbb-20'>Getting Things Done</h4>                            
                            </div>
                            <h5 className='eventt'>Train-The-Trainers (TTT) - Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> November 9th - 10th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 4:00 PM</h6>
                            <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>

                        
                        <div class="col-md-4 workshop-col">
                            <div class="row workshop-row">
                                <div class="col-md-12 workshop-content phothemecolor">
                                    <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                                    <h4 className='pbb-20'>THE POWER OF HABIT</h4>
                                </div>
                                <h5 className='eventt'>Workshop</h5>
                                <div class="col-md-12 workshop-date">
                                    <h6><i class="fa fa-calendar" aria-hidden="true"></i> November 17th, 2023</h6>
                                    <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                                    <a href='#registered'><button class="register phothemecolor">REGISTER NOW</button></a>
                                </div>
                            </div>
                        </div> */}

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content phothemecolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4 className='pbb-20'>THE POWER OF HABIT</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> November 29th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register phothemecolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}
                    {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Mastering Dialogue</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i>18th & 19th April ,2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 9:00 AM - 5:30 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>  */}
          {/* <div class="col-md-4 workshop-col">
              <div class="row workshop-row">
                <div class="col-md-12 workshop-content green-col">
                  <img
                    class="left-image img100px mbb-30"
                    src="/classets/img/logo-influencer.svg"
                    alt=""
                  />
                  <h4>Crucial Influence</h4>
                  <p></p>
                </div>
                <h5 className="eventt">Workshop</h5>
                <div class="col-md-12 workshop-date green-col">
                  <h6>
                    <i class="fa fa-calendar" aria-hidden="true"></i> 9th May
                    2024
                  </h6>
                  <h6>
                    <i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to
                    5:00 PM
                  </h6>
                  <a href="#registered">
                    <button class="register">REGISTER NOW</button>
                  </a>
                </div>
              </div>
            </div>*/}
            <div class="col-md-4 workshop-col">
              <div class="row workshop-row">
                <div class="col-md-12 workshop-content green-col">
                  <img
                    class="left-image img100px mbb-30"
                    src="/classets/img/logo-influencer.svg"
                    alt=""
                  />
                  <h4>The Power of Habit</h4>
                  <p></p>
                </div>
                <h5 className="eventt">Workshop</h5>
                <div class="col-md-12 workshop-date green-col">
                  <h6>
                    <i class="fa fa-calendar" aria-hidden="true"></i> 13th August
                    2024
                  </h6>
                  <h6>
                    <i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to
                    5:00 PM
                  </h6>
                  <a href="#registered">
                    <button class="register">REGISTER NOW</button>
                  </a>
                </div>
              </div>
            </div>
                      
            <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content gtdcolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                            <h4 className='pbb-20'>Getting Things Done</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 23rd August, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                  </div> 
                  <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Accountability</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i>12th& 13th September, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>

                    <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content gtdcolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                            <h4 className='pbb-20'>Trapologist At work</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 26th September , 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>  

                  <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Mastering Dialogue</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 7th & 8th October   ,2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM - 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> 
                    <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content phothemecolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4 className='pbb-20'>THE POWER OF HABIT</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 24th October, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register phothemecolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> 
                     
                    <div class="col-md-4 workshop-col">
              <div class="row workshop-row">
                <div class="col-md-12 workshop-content green-col">
                  <img
                    class="left-image img100px mbb-30"
                    src="/classets/img/logo-influencer.svg"
                    alt=""
                  />
                  <h4>Crucial Influence</h4>
                  <p></p>
                </div>
                <h5 className="eventt">Workshop</h5>
                <div class="col-md-12 workshop-date green-col">
                  <h6>
                    <i class="fa fa-calendar" aria-hidden="true"></i> 12th November,2024
                  </h6>
                  <h6>
                    <i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to
                    5:00 PM
                  </h6>
                  <a href="#registered">
                    <button class="register">REGISTER NOW</button>
                  </a>
                </div>
              </div>
            </div>
             <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content gtdcolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                            <h4 className='pbb-20'>Getting Things Done</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 27th November, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM - 5:00 PM </h6>
                            <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> 



                 <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content gtdcolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                            <h4 className='pbb-20'>Trapologist At work</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 11th December , 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 PM to 5:00 PM</h6>
                            <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> 
                   <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Accountability</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 19th & 20th December, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> 

            <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content phothemecolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4 className='pbb-20'>THE POWER OF HABIT</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 10th January, 2025</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register phothemecolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> 
                   <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content gtdcolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                            <h4 className='pbb-20'>Getting Things Done</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i>24th January, 2025</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM - 5:00 PM </h6>
                            <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> 
  
                 <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content gtdcolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                            <h4 className='pbb-20'>Trapologist At work</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 7th February , 2025</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 PM to 5:00 PM</h6>
                            <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> 
                   <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content green-col"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>INFLUENCER</h4>
                            <p></p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date green-col"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 20th February, 2025</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> 

  
            <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Mastering Dialogue</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i>6th & 7th March, 2025</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>  
                    <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Accountability</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i>19th & 20th March, 2025</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> 

           
            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Mastering Dialogue</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> February 28th - 29th, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>  */}

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Accountability</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> March 4th - 5th, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content green-col"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>INFLUENCER</h4>
                            <p></p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date green-col"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> February 28th - 29th, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content green-col"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>INFLUENCER</h4>
                            <p></p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date green-col"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> March 7th, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}

            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content phothemecolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4 className='pbb-20'>THE POWER OF HABIT</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> March 14th, 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM to 5:00 PM</h6>
                            <a href='#registered'><button class="register phothemecolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}
            {/* <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content gtdcolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-gtd.svg" alt="" />
                            <h4 className='pbb-20'>Trapologist At work</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> 31st May , 2024</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 3:00 PM to 4:00 PM</h6>
                            <a href='#registered'><button class="register gtdcolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>  */}

            <div id="registered" class="col-md-12 form-area workshop-form">
              <form id="contactForm" class="row" onSubmit={WorkshopsForm}>
                <div class="col-lg-12 contact-title">
                  <h1>REGISTER NOW</h1>
                  <h6>
                    OUR SUBJECT MATTER EXPERTS WILL CONNECT YOU WITHIN 24
                    WORKING HOURS TO SHARE PROGRAM DETAILS AND PRICING
                  </h6>
                </div>
                <div class="col-md-6 col-6">
                  <input type="text" name="name" placeholder="Your Name*" />
                </div>
                <div class="col-md-6 col-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email/Email*"
                  />
                </div>
                <div class="col-md-6 col-6">
                  <input
                    type="text"
                    name="phone"
                    maxlength="10"
                    minlength="10"
                    pattern="[0-9]*"
                    placeholder="Phone No.*"
                    required
                  />
                </div>
                <div class="col-md-6 col-6">
                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization*"
                  />
                </div>
                <div class="col-md-6 col-6">
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation*"
                    required
                  />
                </div>
                <div class="col-md-6 col-6">
                  <select name="location" required>
                    <option value="">Location</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div class="col-md-6 col-6">
                  <select name="slot" required>
                    <option value="">Pick any Slot*</option>
                    {/* <option value="Crucial Conversations for Mastering Dialogue - 18th & 19th April , 2024">
                      Crucial Conversations for Mastering Dialogue - 18th & 19th
                      April 2024
                    </option> */}

                    <option value="The Power of Habit-13th-August-2024">
                     The Power of Habit-13th-August,2024
                    </option>
                    <option value="Getting Things Done - 26rd-August-2024">
                     Getting Things Done - 26rd-August,2024
                    </option>
                    <option value="Crucial Conversations for Accountibility-12th& 13t -September-2024">
                     Crucial Conversations for Accountibility-12th& 13t -September,2024
                    </option>
                    <option value="Trapologist At work-26th-September-2024	">
                      Trapologist At work-26th-September,2024	
                    </option>
                    <option value="Crucial Conversations for Mastering Dialogue-7th & 8th-October-2024">
                   Crucial Conversations for Mastering Dialogue-7th & 8th-October,2024
                    </option>
                    <option value="The Power of Habit-24th-October-2024">
                      The Power of Habit-24th-October,2024
                    </option>
                    <option value="Crucial Influence-12th-Nov-2024	">
                      Crucial Influence-12th-Nov,2024	
                    </option>
                    <option value="Getting Things Done-27th-Nov-2024	">
                     Getting Things Done-27th-Nov,2024
                    </option>
                    <option value="Trapologist At work-11th-December-2024">
                    Trapologist At work-11th-December,2024
                    </option>
                    <option value="Crucial Conversations for Accountibility-19th & 20th-December-2024">
                     Crucial Conversations for Accountibility-19th & 20th-December,2024
                    </option>
                    <option value="The Power of Habit-10th-January-2025	">
                     The Power of Habit-10th-January,2025	
                    </option>
                    <option value="Getting Things Done-24th-January-2025		">
                      Getting Things Done-24th-January,2025	
                    </option>
                    <option value="Trapologist At work-7th-Feb-2025">
                     Trapologist At work-7th-Feb,2025
                    </option>
                    <option value="Crucial Influence-20th Feb-2025">
                       Crucial Influence-20th Feb,2025	
                    </option>
                    <option value="Crucial Conversations for Mastering Dialogue-6th & 7th-March-2025">
                     Crucial Conversations for Mastering Dialogue-6th & 7th-March,2025
                    </option>
                    <option value="Crucial Conversations for Accountibility-19th & 20th-March-2025	">
                    Crucial Conversations for Accountibility-19th & 20th-March-2025	
                    </option>
                  </select>
                </div>
                <div class="col-md-6 col-6">
                  <select name="referredby" required>
                    <option value="">Referred by*</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Reference">Reference</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <textarea
                    name="nots"
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                </div>
                <div class="d-none">
                  <input
                    type="text"
                    name="Business_Entity"
                    value="Crucial Life-Changing Skills"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    id="submitbuttonform"
                    class="formbtn"
                    type="submit"
                    value="Submit"
                  />
                </div>
                <p id="showlabel" style={{ display: "none" }}></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
