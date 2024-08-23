import Head from 'next/head'


export default function TirianIndex(){

  const registerUser = async event => {
    event.preventDefault()
    document.getElementById("submitbuttonform").value = "Submitting form...."
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this.responseText);
    }
    xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/27/feedback');
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
        "&email=" + event.target.email.value +
        "&phone=" + event.target.phone.value +
        "&company=" + event.target.company.value +
        "&designation=" + event.target.designation.value +
        "&slot=" + event.target.slot.value +
        "&referredby=" + event.target.referredby.value +
        "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value +
        "&message=" + event.target.message.value )

}



    return(
        <>
          <Head>
            <title>Tirian - BYLD Group</title>
            <meta name="description" content="Enquire Now Enquire Now Are you looking for innovative and practical solutions to workplace and business challenges? BYLD Group introduces highly effective CREATIVITY and INNOVATION solutions that are exclusively designed by Tirian Innovative Solutions, Australia.We, in partnership with Dr. Andrew Grant (Executive Director at Tirian, Author, Facilitator, Speaker, and Innovation for Transformation Specialist), offer expertise… Continue reading Tirian"/> 
          </Head>
          <div className="rs-services tirianpage">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner-tirian.jpg"/>
                    </div>                            
                </div>
            </div>
            </div>

            <div className="rs-about style2 pt-50 pb-20 aboutsection1" id='Reserve'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className='parnernetworkheight'>
                                <div className="sec-title">
                                <p>
                                We aim to create positive intervening experiences through innovative simulations and engaging facilitation which break down barriers and provide unique leadership and team development opportunities and outcomes.
                                </p>
                                <h4 className="countertoph2 text-left ptt-0">Watch the video to learn more</h4>
                                <iframe width="100%" height="355px" src="https://www.youtube.com/embed/jAleJrTj4Xg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>                                
                            </div>
                        </div>

                        <div className="col-md-6 pr-33 md-pr-15 md-mb-50">
                            <div className="images-part parnernetworkheight">
                            <div className="bannerform">
                            <h4 className="countertoph2 text-left ptt-0">Reserve your spot now</h4>
                            <p>Fill in the form below and our subject matter experts will connect you within 24 working hours.</p>
                            <form id="contact-form" className='clientcornner' onSubmit={registerUser}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="company" placeholder="Company Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <select name="slot" required>
                                                <option value="">Pick up any Slot*</option>                                                
                                                {/* <option value="Showcase 15th September 2023">Showcase 15th September 2023</option>
                                                <option value="Webinar 6th October 2023">Webinar 6th October 2023</option>
                                                <option value="Webinar 10th November 2023">Webinar 10th November 2023</option>
                                                <option value="Webinar 1st December 2023">Webinar 1st December 2023</option> */}
                                                <option value="Webinar 5th January 2024">Webinar 5th January 2024</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-sm-12 mb-12 d-none">
                                            <select name="Business_Entity" required>
                                                <option value="BYLD Group">BYLD Group</option>                                                                                               
                                            </select>
                                        </div>

                                        <div className="col-sm-12 mb-12">
                                            <textarea type="text" name="message" placeholder="Questions/Comments:" />
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
 

          <section className='ptt-20 pbb-20'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                    <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center font30">To get more insights, register for any of the upcoming sessions below:</h4>                        
                    </div>
                    </div>
                    <div className='clearfix'></div>

                    {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Tuesday 10th January 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Time: 11:00 AM -12:00 PM</h3>
                                <a className="eventbtn" href='#Reserve'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> */}

                   
                    {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar Friday, 11th August 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Time: 11:00 AM -12:00 PM</h3>
                                <a className="eventbtn" href='#Reserve'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Showcase 15th September 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Time: 11:00 AM -12:00 PM</h3>
                                <a className="eventbtn" href='#Reserve'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar 6th October 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Time: 11:00 AM -12:00 PM</h3>
                                <a className="eventbtn" href='#Reserve'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> 

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar 10th November 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Time: 11:00 AM -12:00 PM</h3>
                                <a className="eventbtn" href='#Reserve'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar 1st December  2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Time: 11:00 AM -12:00 PM</h3>
                                <a className="eventbtn" href='#Reserve'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>  */}

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar 5th January  2024</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Time: 11:00 AM -12:00 PM</h3>
                                <a className="eventbtn" href='#Reserve'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> 

                </div>
            </div>
        </section>

        </>
    )
}
