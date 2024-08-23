import Head from 'next/head'

export default function CoachCertificationLP(){
    
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/8/feedback');
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
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Company=" + event.target.companyname.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&wheredidyoucome=" + event.target.wheredidyoucome.value +
            "&Interest_in=" + event.target.Interest_in.value +            
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value )

    }

    return(
        <>
          <Head>
            <title>Coach Certification - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
          </Head>
            
          <div className="icfbanner ptt-40 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-4">
                            <div className="content-wrap">                                
                               <img className="icflogo220" src="/assets/img/icf-logo.png" alt="ICFLOGO"/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h3 className="themecolor2">ARE YOU ASPIRING TO BE A CERTIFIED COACH?</h3>
                            <h3 className="font500">Join Our ICF- ACC Accredited Coach Certification Program</h3>
                        </div>
                        <div className='clearfix'></div>
                        <div className='col-md-6'>
                            <div className='icfbannerbox2'>
                                <h4 className='font500'>Largest Training & Consulting company that helps certify leaders as Coaches based on ICF approved Curriculum licensed by Aster Coaching LLC (USA).</h4>
                                <div className="rs-estimate">                        
                                    <ul className='estimate-info mtt-5 icflist1'>
                                        <li className='alltextleft'><span>Competitively priced program</span> with the highest return on investment.</li>
                                        <li className='alltextleft'>Helped <span>600+ professionals</span> from various industries.</li>                                                                                                     
                                    </ul>                       
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='icfvideoborder'>
                             <iframe width="100%" height="310" src="https://www.youtube.com/embed/9lXOZZP7UCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <section className='icfemibg ptt-40 pbb-30'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-6'>
                            <h3 className='icfemih3'>Passionate about coaching?</h3>
                            <h4 className='icfemih4'>Enroll for our upcoming 39th Batch!</h4>
                            <h6 className='icfemih6'>Starting 22nd April, Time 10:00 AM to 4:00 PM</h6>
                        </div>
                        <div className='col-md-4'>
                            <div className='ptt-30'>
                            <img src="/assets/img/emi-available.gif" alt="EEMI"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}




            <div id='register' className="ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-6">
                            <div className="row"> 
                                                           
                                <div className='col-md-4'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf1.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h4>100% Online (ViLT)</h4>
                                    </div>
                                </div>
                                
                                <div className='col-md-4'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf2.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h4>Guaranteed Peer coaching assistance</h4>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf3.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h4>10 hours of mentor Coaching included</h4>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf4.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h4>Unlimited access Online Mock assessments</h4>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf5.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h3>369</h3>
                                       <h4>ICF Accredited Coaches</h4>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf6.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h3>600</h3>
                                       <h4>Coaches Trained</h4>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf7.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h3>100%</h3>
                                       <h4>Pass Results for CKA</h4>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='icficonbox'>
                                       <div className='iconsvg'>
                                          <img src="/assets/img/svg/icf8.svg" alt="ICF ICONS"/>
                                       </div>
                                       <h3>9+</h3>
                                       <h4>Years of Experience</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 icfborderleft">
                            <div className="bannerform">
                            <p>Fill in the form below and our consultants will contact you:</p>
                            <form id="contact-form" className='clientcornner' onSubmit={registerUser}>                                         
                                    <div className="row">
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="name" placeholder="Name*" required />
                                        </div>   
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="companyname" placeholder="Company Name*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <select name="wheredidyoucome" required>
                                                <option value="">Referred By*</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Social Media">Google Search</option>
                                            </select>
                                        </div>

                                        <div className="col-lg-12 mb-12">
                                            <select name="Interest_in" required>
                                                <option value="">Interest In*</option>
                                                <option value="ICF Batch 39 - Starting 22nd April, 2023">ICF Batch 39 - Starting 22nd April, 2023</option>
                                                <option value="ICF Batch 40 - Starting 10th June, 2023">ICF Batch 40 - Starting 10th June, 2023</option>
                                            </select>
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
            </div>

            <section className='icflastrow ptt-40 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                           <h4 className="icflasth4">FAQ</h4>
                           <div className='icfinnerbox'>
                           <h4 className="icflasth42">What is included in the fees of the course?</h4>
                           <p>The fees of the Coaching Certification includes facilitation fees for Classroom Sessions (Virtual Instructor led) and Asynchronous learning Sessions. We also offer 10 hrs of ‘Mentor Coaching’ sessions, along with ‘Peer Coaching Support’ with unlimited access to Mock Tests for CKA ( now replaced with the new Credentialing Exam). That’s not all, we provide flexible finance options with interest free EMIs. Moreover, various other certifications & programs worth more than Rs. 1 Lakh are complimentary with the course.</p>
                           <h4 className="icflasth42">In Addition to the coaching sessions, what else is included in the program?</h4>
                           <p>In addition, we offer you the following certifications and programs worth more than Rs. 1 lakh, as complimentary :</p>
                           <ul className='estimate-info mtt-5'>
                                <li className='alltextleft'>‘Emotional Intelligence Train the Trainer’ certification.</li>
                                <li className='alltextleft'>25 free EQ assessments for your coaching assignments.</li>
                                <li className='alltextleft'>Free Workshop on setting up your coaching practice or profession.</li>
                                <li className='alltextleft'>‘Advance Learning Professional Certification’ program (a 3 months certification course).</li>
                            </ul>
                            <p>These certifications can be availed anytime within 6 months.</p>
                            <h4 className="icflasth42">Are there easy finance options available?</h4>
                            <p>To reduce your upfront payment burden, we offer ‘Interest Free EMIs’, where you only pay 3 EMIs as advance payment. The rest can be paid over 6/9/12 months depending on the finance institution’s loan tenure scheme.</p>
                            <h4 className="icflasth42">Does the institute provide mentor coaching hours or do we have to pay extra?</h4>
                            <p>At no additional cost, we offer 10 hrs of Mentor Coaching along with ‘Guaranteed Peer Coaching’ assistance and strong back-end support access to Master Coach / Facilitator. This will help you speed up your coaching journey and help establish coaching practice whether inside your organization or as a professional coach.</p>
                            <h4 className="icflasth42">How well experienced are the Master Coaches/ Instructors?</h4>
                            <p>The International Master Coaches who conduct this training are very seasoned coaches with close to 30 years of coaching experience between the two of them. In association with Aster Coaching US (Accredited by ICF), we take pride in sharing with you that we certify and develop high-caliber coaches who meet global standards and are in tune with local, regional and global business practices.</p>
                            <h4 className="icflasth42">What is the flexibility of the Coaching Program?</h4>
                            <p>Keeping in mind one’s work schedule, we offer ViLT sessions on weekends per your convenience. This helps in finishing classroom credits without work being affected. In case of any unforeseen challenges, you can also opt to discontinue the batch and continue later with the next upcoming batch, at no additional Cost.</p>
                           </div>
                        </div>
                        <div className='col-md-6'>
                        <h4 className="icflasth4">Testimonial</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/APLwiqIGujE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>


            <section className='ptt-20 pbb-20'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                    <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center font30">Passionate about coaching?</h4>                        
                    </div>
                    </div>
                    <div className='clearfix'></div>


                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Starting 22nd April, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className='eventtitlec'>ICF Batch 39</h4>
                                <h3>Time: 10:00 AM - 4:00 PM</h3>
                                <a className="eventbtn" href='#register'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Starting 10th June, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className='eventtitlec'>ICF Batch 40</h4>
                                <h3>Time: 10:00 AM - 4:00 PM</h3>
                                <a className="eventbtn" href='#register'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>

                  


                    

                    
                    
                </div>
            </div>
        </section>

            
        </>
    )
}


