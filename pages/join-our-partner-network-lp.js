import Head from 'next/head'

export default function JoinOurPartnerNetworkLP(){
    
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/13/feedback');
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
            "&email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&Occupation=" + event.target.occupation.value +
            "&intrestedin=" + event.target.intrestedin.value +
            "&wheredidyoucome=" + event.target.howdidyouknowaboutus.value )

    }

    return(
        <>
          <Head>
            <title>Join our Partner network LP - BYLD Group</title>
            <meta name="description" content="Welcome to BYLD Group! Join the BYLD Group Partner network, and become our business partner to maximize your growth opportunities. We are the largest group in South Asia offering HR and business productivity solutions for individuals, teams and organizations. Served 300 of 500 Fortune companies. Founded in 1998, backed by 1000+ years of accumulated professional… Continue reading Join our Partner network LP Ab Testing"/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/banner-partner.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div id='GetinTouch' className="rs-about style2 pt-50 pb-20 aboutsection1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className='parnernetworkheight'>
                                <div className="sec-title">
                                <h4 class="countertoph2 text-left mixheading">Welcome to <span>BYLD Group!</span></h4>
                                <h4 className="countertoph2 text-left ptt-0">We invite you to become our business partner to leverage the mutual growth opportunities.</h4>
                                    <p className='mmm'>
                                    BYLD is the largest group in South Asia offering HR and business productivity solutions for individuals, teams and organizations. The first company in BYLD Group was founded in 1998. Over the years we have served more than 300 of the fortune 500 companies. Today, we work with professionals/consultants having 1000+ years of accumulated professional experience and have served nearly half a million clients (both corporates and Individuals) in India and outside.
                                    </p>
                                    
                                    <p className='tirianpcolor1'>We are now embarking upon an exciting journey into the future. So, if you are <span>AGILE</span> and can <span>THINK BIG</span> then we invite you to join BYLD Group partner network as sales/business consultant. The role will initially involve launching <span>our world class technology based Virtual Reality (AR/VR), and Creativity/Innovation leadership solutions</span> in India.</p>
                                    
                                </div>                                
                            </div>
                        </div>

                        <div className="col-md-6 pr-33 md-pr-15 md-mb-50">
                            <div className="images-part parnernetworkheight">
                            <div className="bannerform">
                            <p>Fill in the form below with your interest to work as a sales/business consultant with us and will connect/call back at the earliest.</p>
                            <form id="contact-form" className='clientcornner' onSubmit={registerUser}>                                         
                                    <div className="row">
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="fname" placeholder="First Name*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-lg-12 mb-12">
                                            <select name="occupation" required>
                                                <option value="">Occupation*</option>
                                                <option value="HR Professional">HR Professional</option>
                                                <option value="L & D Professional">L & D Professional</option>
                                                <option value="Independent Consultant (Technical)">Independent Consultant (Technical)</option>
                                                <option value="Trainer">Trainer</option>
                                                <option value="Medical Professional">Medical Professional</option>
                                                <option value="Software Engineer">Software Engineer</option>
                                                <option value="Business Analyst">Business Analyst</option>
                                                <option value="Consultant">Consultant</option>
                                                <option value="Sales Representative">Sales Representative</option>
                                                <option value="Lawyer">Lawyer</option>
                                                <option value="Architect">Architect</option>
                                                <option value="Project Manager">Project Manager</option>
                                                <option value="Marketing Manager">Marketing Manager</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>

                                        <div className="col-lg-12 mb-12">
                                            <select name="intrestedin" required>
                                                <option value="">Pick up any Slot*</option>                                                
                                                <option value="September 8th 2023 - 11:00 AM - 12:00 PM">September 8th 2023 - 11:00 AM - 12:00 PM</option>
                                                <option value="October 4th 2023 - 11:00 AM - 12:00 PM">October 4th 2023 - 11:00 AM - 12:00 PM</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-lg-12 mb-12">
                                            <select name="howdidyouknowaboutus" required>
                                                <option value="">How did you know about us?</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>                                                
                                            </select>
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

            <section className='ptt-20 pbb-10'>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-6 boxshd'>
                  <img src='/assets/img/pt-nt.jpg' alt="development"/>
                  </div>
                  <div className='col-sm-6 boxshd letf5border alltextleft'>
                    <div className="rs-estimate pppp15">
                        <h4 className="countertoph2 alltextleft font30 pbb-10">To qualify for this unique business opportunity, you need to be one of the following:</h4>
                        <ul className='estimate-info mtt-5'>
                            <li className='alltextleft'>Trainers and independent consultants with 10+ years of experiences</li>
                            <li className='alltextleft'>Small and boutique training organizations</li>
                            <li className='alltextleft'>School/Colleges/Universities</li>                                                                  
                        </ul>                       
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

                    

                    

                    <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 8th September 2023</span>
                                </div>

                                <div className='eventbottom'>
                                    <h3 className='hhd'>BYLD Partner Network Briefing</h3>
                                    <h5>Time: 11:00 AM - 12:00 PM</h5>
                                    <a className="eventbtn" href='#GetinTouch'>REGISTER NOW</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 4th October 2023</span>
                                </div>

                                <div className='eventbottom'>
                                    <h3 className='hhd'>BYLD Partner Network Briefing</h3>
                                    <h5>Time: 11:00 AM - 12:00 PM</h5>
                                    <a className="eventbtn" href='#GetinTouch'>REGISTER NOW</a>
                                </div>
                            </div>
                        </div>

                  

                </div>
            </div>
        </section>

            
        </>
    )
}


