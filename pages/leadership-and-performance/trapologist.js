import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function Trapologist(){

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/20/feedback');
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
        xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&tel=" + event.target.phone.value +
            "&companyname=" + event.target.Organization.value +
            "&designation=" + event.target.designation.value +
            "&pic-slot=" + event.target.anyslot.value +
            "&reff=" + event.target.creferredby.value +
            "&textarea-310=" + event.target.leadsquared_Notes.value +           
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value )

    }
 
    return(
        <>
          <Head>
            <title>Trapologist at Work | Leadership and Performance | BYLD Group</title>
            <meta name="description" content="Trapologist at Work is one of the time-tested business productivity solutions that help improve organizational development and performance. To know more, check out the page."/> 
          </Head>
            

          <div className="client-cornerbg ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-7 col-sm-12">
                            <div className="content-wrap">
                                <img className="trapologistlogo" src="/assets/img/trapologistlogo.png"/>
                                <h2 className="colorw">Is multitasking taking a toll on your mind?</h2>
                                <h3 className="colorw">Learn to Increase focus and productivity while workinng from home.</h3>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="bannerform">
                            <h2 className="formtitle">Enquiry Form</h2>                                
                            <form id="contact-form" className='clientcornner' onSubmit={registerUser}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 pppp8">
                                            <input type="text" name="name" placeholder="Enter Name*" required />
                                        </div>
                                        <div className="col-sm-6 pppp8">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-6 pppp8">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" title="Only Numbers are allowed" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-sm-6 pppp8">
                                            <input type="text" name="Organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 pppp8">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-6 pppp8">
                                            <select name="anyslot" required>
                                                <option value="">Pick up any Slot*</option>    
                                                <option value="Virtual Course Previews: 29th,August-2024">Virtual Course Previews: 29th August,2024</option>                                             
                                                <option value="Workshop: 26th-September-2024">Workshop: 26th September,2024	</option> 
                                                <option value="Virtual Course Previews: 5th November,2024">Virtual Course Previews: 5th November,2024</option>                                             
                                                <option value="Workshop: 11th-December-2024">Workshop: 11th December,2024</option> 
                                                <option value="Virtual Course Previews: 15th January,2025">Virtual Course Previews: 15th January,2025</option> 
                                                <option value="Workshop: 7th Feb-2025">Workshop: 7thFeb,2025</option> 
                                                
                                               
                                               {/*   <option value="Workshop: 15th February, 2024">Workshop: 15th February, 2024</option> */}
                                                {/* <option value="Workshop: 18th March, 2024">Workshop: 18th March, 2024</option> */}
                                                {/* <option value="Workshop: 26th October, 2023">Workshop: 26th October, 2023</option> */}
                                            </select>                                            
                                        </div>
                                        <div className="col-sm-12 pppp8">
                                            <select name="creferredby" required>
                                                <option value="">Referred By*</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                            </select>                                            
                                        </div>
                                        <div className="col-lg-12 mb-12 d-none">
                                            <input type="text" name="leadsquared_mx_Business_Entity" placeholder="BYLD Group" value="BYLD Group" required />
                                        </div>
                                        <div className="col-lg-12 mb-12 pppp8">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
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

            <div className="rs-testimonial style4 bg16 ptt-50 pbb-50">
                <div className="container">                    
                    <div className="row">
                      <div className='col-sm-8'>
                           <div className="clientcornnertest atcb">
                                <div className="testi-information">                                    
                                    <span className="testi-title textleftc">
                                    We know what it feels like to be stuck. After three years of study and research of human dynamics in the workplace, we are offering you solutions to the 7 modern-day traps in a transformative training course – Trapologist at WorkTM.
                                    </span>
                                    <div className="testi-name textleftc">This revolutionary program will help you to:</div>
                                </div>
                                <div className="rs-estimate">
                                    <ul className='estimate-info mtt-5'>
                                        <li className='textleftc whitecolor'>Recognize – learning how the trap seduces you, limits your abilities, and keeps you stuck.</li>
                                        <li className='textleftc whitecolor'>Quantify – determining how long the traps last, how severe they are, how often you fall into them, and in what environments you are most vulnerable.</li>
                                        <li className='textleftc whitecolor'>Identify the conventional approach –what is the popular, generic, and accepted yet ineffective solution?</li>
                                        <li className='textleftc whitecolor'>Discover the epiphany breakthrough –what innovative strategies will accelerate my success?</li>
                                        <li className='textleftc whitecolor'>Take Action – establish your priorities. Create a plan and implement it.</li>                                        
                                    </ul>
                                </div>                                
                            </div>
                      </div>
                      <div className='col-sm-4'>                        
                             <div className="clientcornnertest bgpurewhite ptt-0">                                    
                                    <div className="testi-information">
                                    <div className="testi-name textleftc orangecolor mbb-15">Explore Our Upcoming Events</div>
                                    </div>
                                      {/*    <div className='eventslist'>
                                        <div className='eventicon'>
                                            <i className='fa fa-calendar'></i>
                                        </div>
                                        <div className='eventstext'>
                                            <h3>Trapologist at Work<sup>®</sup></h3>
                                            <h4> Virtual Course Previews: 13th February, 2024</h4>
                                        </div>
                                    </div>*/}

                                   {/*   <div className='eventslist'>
                                        <div className='eventicon'>
                                            <i className='fa fa-calendar'></i>
                                        </div>
                                        <div className='eventstext'>
                                            <h3>Trapologist at Work<sup>®</sup></h3>
                                            <h4>Workshop: 15th February, 2024</h4>
                                        </div>
                                    </div> */}

                                    <div className='eventslist'>
                                        <div className='eventicon'>
                                            <i className='fa fa-calendar'></i>
                                        </div>
                                        <div className='eventstext'>
                                            <h3>Trapologist at Work<sup>®</sup></h3>
                                            <h4>Virtual Course Previews: 29th August,2024</h4>
                                        </div>
                                    </div>
                                    <div className='eventslist'>
                                        <div className='eventicon'>
                                            <i className='fa fa-calendar'></i>
                                        </div>
                                        <div className='eventstext'>
                                            <h3>Trapologist at Work<sup>®</sup></h3>
                                            <h4>Workshop: 26th September,2024</h4>
                                        </div>
                                    </div>
                                    <div className='eventslist'>
                                        <div className='eventicon'>
                                            <i className='fa fa-calendar'></i>
                                        </div>
                                        <div className='eventstext'>
                                            <h3>Trapologist at Work<sup>®</sup></h3>
                                            <h4>Virtual Course Previews: 5th November,2024</h4>
                                        </div>
                                    </div>
                                    <div className='eventslist'>
                                        <div className='eventicon'>
                                            <i className='fa fa-calendar'></i>
                                        </div>
                                        <div className='eventstext'>
                                            <h3>Trapologist at Work<sup>®</sup></h3>
                                            <h4>Workshop: 11th December,2024</h4>
                                        </div>
                                    </div>
                                    <div className='eventslist'>
                                        <div className='eventicon'>
                                            <i className='fa fa-calendar'></i>
                                        </div>
                                        <div className='eventstext'>
                                            <h3>Trapologist at Work<sup>®</sup></h3>
                                            <h4>Virtual Course Previews: 15th January,2025</h4>
                                        </div>
                                    </div>
                                    <div className='eventslist'>
                                        <div className='eventicon'>
                                            <i className='fa fa-calendar'></i>
                                        </div>
                                        <div className='eventstext'>
                                            <h3>Trapologist at Work<sup>®</sup></h3>
                                            <h4>Workshop: 7thFeb,2025</h4>
                                        </div>
                                    </div>



                                    {/* <div className='eventslist'>
                                        <div className='eventicon'>
                                            <i className='fa fa-calendar'></i>
                                        </div>
                                        <div className='eventstext'>
                                            <h3>Trapologist at Work<sup>®</sup></h3>
                                            <h4>Workshop: 26th October, 2023</h4>
                                        </div>
                                    </div> */}

                                    
                                </div>
                            </div>                            
                    </div>
                </div>
            </div>

            <div className="rs-about style2 clientcornnerlogo ptt-50 pbb-40">
                <div className="container">
                    <div className="row">                        

                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                           <div className="innervideoshd">
                           <div className="rs-estimate pppp15">
                           <h4 className="countertoph2 text-left font30 pbb-10">Does your workforce struggle with:</h4>
                                    <ul className='estimate-info mtt-5'>
                                        <li>Information overload</li>
                                        <li>Staying focused</li>
                                        <li>Adapting to changes</li>
                                        <li>Taking initiative and being resourceful</li>
                                        <li>Positively receiving feedback</li>
                                        <li>Silos/working independently</li>
                                        <li>Engagement, inspiration, and passion at work</li>
                                        <li>Knowing how they contribute to the organization</li>                                        
                                    </ul>
                                    <p className='solutionp mtt-20'>
                                    If you want to break the shackles of these restraining forces, you are at the right place. So let this be the right time and get through our solutions that will transform these passive forces into active forces.
                                    </p>
                                </div>                  
                            </div>
                        </div>

                        <div className="col-sm-2"></div>
                    </div>
                </div>                
            </div>

            <div className="trapologistfix1 ptt-100 pbb-100">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-12 col-sm-12">
                            <div className="content-wrap text-center">                                
                                <h2 className="colorw">Think of it in terms of this metaphor. We are in a boat with our team determined to reach our destination. <span className='orangecolor'>But our boat has holes in it…</span></h2>
                                <p className="colorw mbb-10 font20">The answer is not rowing faster and harder. This will only cause us to sink sooner. The answer lies in patching the holes in our boat first before we even start rowing. The Trapologist at Work workshop will identify and patch your holes at work.</p>
                                <p className="colorw font20">The Trapologist at Work™ framework is unique and effective because it teaches you the restraining forces [traps] that are keeping you from achieving your goals and reaching your dreams. Most workshops do the opposite. They offer initiatives and to-dos to your already overwhelmed life.</p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>

            <div className="trapologistfix3">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-12 col-sm-12">
                            
                        </div>                    
                    </div>
                </div>
            </div>

            <div className="rs-about style2 clientcornnerlogo ptt-60 pbb-60">
                <div className="container">
                    <div className="row">                        

                        <div className="col-sm-6">
                            <img src="/assets/img/TrapologistSequence.jpg" alt="TrapologistSequence"/>
                        </div>
                        <div className="col-sm-6">
                           <div className="innervideoshd">
                           <div className="rs-estimate pppp15">
                                    <ul className='estimate-info mtt-5'>
                                        <li>Busyness – drowning in the thick of thin things.</li>
                                        <li>Procrastination – idling in the status quo.</li>
                                        <li>Ego – maintaining a façade of perfection.</li>
                                        <li>Trigger – allowing emotions to taint your perspective.</li>
                                        <li>Silo – operating as an independant on a team.</li>
                                        <li>Settling – losing passion and inspiration in your work.</li>
                                        <li>Myopia – failing to see the big picture.</li>
                                                                               
                                    </ul>                                    
                                </div>                  
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            <div className="trapologistfix4 ptt-100 pbb-100">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-12 col-sm-12">
                            <div className="content-wrap text-center">
                                <img src="/assets/img/0TTbookimage-1.png" alt="0TTbookimage-1"/>
                                <h2 className="colorw">“Trap Tales is a Triumph!'“ - Ken Blanchard</h2>                                
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
            
        </>
    )
}
