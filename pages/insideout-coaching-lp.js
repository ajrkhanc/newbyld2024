import Head from 'next/head'

export default function CoachCertificationLP(){
    
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/90/feedback');
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
        xhttp.send("name=" + event.target.name.value +
            "&phone=" + event.target.phone.value +
            "&email=" + event.target.email.value +
            "&companyname=" + event.target.companyname.value +
            "&designation=" + event.target.designation.value +
            "&wheredidyoucome=" + event.target.wheredidyoucome.value +
            "&slot=" + event.target.slot.value +
            "&leadsquared_Notes=" + event.target.leadsquared_Notes.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value )

    }

    return(
        <>
          <Head>
            <title>Inside Out Coaching LP - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
          </Head>
            
          <div className="icfbanner ptt-40 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">                        
                        <div className='clearfix'></div>
                        <div className='col-md-6 text-center'>
                            <div className='icfbannerbox2'>
                            <h3 className="themecolorc">Are you looking at skilling your managers in developing and retaining talent?</h3>
                            <p className='insideoutsideco'>Do you know most of the managers do not have regular meaningful conversations with team members because they don’t know how to initiate coaching conversations with them? InsideOut Coaching equips managers to energize, motivate, and lead people to success and better business performance.</p>
                            <a href='#ioc-lp' className='insideoutcontn'>Join InsideOut Coaching now</a>
                            </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='icfvideoborder icfbannerbox2'>
                             <img src='/assets/img/ioc-logo.png'/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

         =
            <div className="ptt-50 pbb-50" id='ioc-lp'>
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-6 text-center">
                            <div className="row"> 
                            <h4 className="icflasth4">Key benefits of InsideOut Coaching:</h4>                            
                                <div className='col-md-6'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf1.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h4>Optimizes your decision-making process</h4>
                                    </div>
                                </div>
                                
                                <div className='col-md-6'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf2.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h4>Promotes effective communication and feedback</h4>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf3.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h4>Improves accountability</h4>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf4.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h4>Enhance team performance and engagement</h4>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="col-md-6 icfborderleft">
                        <iframe width="100%" height="375" src="https://www.youtube.com/embed/HFCp00YL-Gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                        </div>
                    </div>
                </div>
            </div>

            <section className='icflastrow ptt-40 pbb-40' id='REGISTER'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                           <h4 className="icflasth4">Know what our clients have to say</h4>
                           <iframe width="100%" height="375" src="https://www.youtube.com/embed/HFCp00YL-Gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className='col-md-6'>
                        <div className="bannerform">
                            <p>Fill in the form below and our consultants will contact you:</p>
                            <form id="contact-form" className='clientcornner' onSubmit={registerUser}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Name*" required />
                                        </div>   
                                        <div className="col-lg-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="companyname" placeholder="Company Name*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <select name="wheredidyoucome" required>
                                                <option value="">Referred By*</option>
                                                <option value="Email">Email</option>                                                
                                            </select>
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                           {/*    <select name="slot" required>
                                                <option value="">Interested In*</option>                                                
                                                <option value="21st March, 2024">21st March, 2024</option>
                                               
                                                </select> */}
                                        </div>
                                        <div className="col-lg-12 mb-12 d-none">
                                            <input type="text" name="leadsquared_mx_Business_Entity" placeholder="BYLD Group" value="BYLD Group" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Questions/Comments:"></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="I’m Interested"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ptt-20 pbb-20'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                    <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center font30">To get more insights, register for any of the upcoming sessions below:</h4>                        
                    </div>
                    </div>
                    <div className='clearfix'></div>

                    {/*   <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>21st March, 2024</span>
                                 
                                
                            </div>
                            <div className='eventbottom'>
                                    <div >
                                    <h6 style={{margin:'0px'}}>Manager as Coach Open Workshop</h6>
                                    </div>
                                <h3>Time:9:30 AM to 4:30 PM</h3>
                                <a className="eventbtn" href='#REGISTER'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> */}

                      {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>12th October 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Time: 4:00 AM 5:00 PM</h3>
                                <a className="eventbtn" href='#REGISTER'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>  */}

                    {/*  <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>7th December 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Time: 4:00 AM 5:00 PM</h3>
                                <a className="eventbtn" href='#REGISTER'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> */}

                        {/*  <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>27th December 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Time: 4:00 AM 5:00 PM</h3>
                                <a className="eventbtn" href='#REGISTER'>REGISTER NOW</a>
                            </div>
                        </div> 
                    </div> */}

                </div>
            </div>
        </section>

            
        </>
    )
}


