import Head from 'next/head'

export default function JoinOurPartnerNetworkLP(){
    
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/14/feedback');
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
            "&Companyname=" + event.target.company.value +
            "&Experienceyear=" + event.target.exeprianceyear.value +
            "&Months=" + event.target.exepriancemonths.value +
            "&resume=" + event.target.resume.value +
            "&wheredidyoucome=" + event.target.howdidyouknowaboutus.value +
            "&Haveyouworkedwithusbefore=" + event.target.haveubefore.value +
            "&Occupation=" + event.target.occupation.value +
            "&LinkedInurl=" + event.target.linkedinurl.value +            
            "&Iaminterested=" + event.target.intrestedin.value +
            "&QuestionsComments=" + event.target.leadsquared_Notes.value )

    }

    return(
        <>
          <Head>
            <title>Join our Partner network - BYLD Group</title>
            <meta name="description" content="Welcome to BYLD Group! Join the BYLD Group Partner network, and become our business partner to maximize your growth opportunities. We are the largest group in South Asia offering HR and business productivity solutions for individuals, teams and organizations. Served 300 of 500 Fortune companies. Founded in 1998, backed by 1000+ years of accumulated professional… Continue reading Join our Partner network LP Ab Testing"/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/partner-banner-main.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div className="rs-about style2 pt-50 pb-20 aboutsection1">
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
                                    <p className='tirianpcolor1 mbb-15'>We are now embarking upon an exciting journey into the future. So, if you are <span>AGILE</span> and can <span>THINK BIG</span> then we invite you to join BYLD Group partner network as sales/business consultant. The role will initially involve launching <span>our world class technology based Virtual Reality (AR/VR), and Creativity/Innovation leadership solutions</span> in India.</p>
                                </div>
                                <div className="rs-estimate pppp15">
                                    <h4 className="countertoph2 alltextleft font30 pbb-10">To qualify for this unique business opportunity, you need to be one of the following:</h4>
                                    <ul className='estimate-info mtt-5'>
                                        <li className='alltextleft'>An established training and consulting businesses,</li>
                                        <li className='alltextleft'>HR/Recruitment and/or Sales Consultants,</li>
                                        <li className='alltextleft'>School/Colleges/Universities associates.</li>                                                                  
                                    </ul>                       
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 pr-33 md-pr-15 md-mb-50">
                            <div className="images-part parnernetworkheight">
                            <div className="bannerform">
                            <p>Fill in the form below with your interest to work as a sales/business consultant with us and will connect/call back at the earliest.</p>
                            <form id="contact-form" className='clientcornner' onSubmit={registerUser}>
                                    <div className="row">
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="fname" placeholder="First Name*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="lname" placeholder="Last Name*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="company" placeholder="Company Name*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
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

                                        <div className='col-sm-12'>
                                            <label>Total Experience*</label>
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <select name="exeprianceyear" required>
                                                <option value="">Select Years*</option>
                                                <option value="0 years">0 years</option>
                                                <option value="1 years">1 years</option>
                                                <option value="2 years">2 years</option>
                                                <option value="3 years">3 years</option>
                                                <option value="4 years">4 years</option>
                                                <option value="5 years">5 years</option>
                                                <option value="6 years">6 years</option>
                                                <option value="7 years">7 years</option>
                                                <option value="8 years">8 years</option>
                                                <option value="9 years">9 years</option>
                                                <option value="10 years">10 years</option>
                                                <option value="10+ years">10+ years</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6 mb-12">
                                            <select name="exepriancemonths" required>
                                                <option value="">Select Months*</option>
                                                <option value="0 Month(s)">0 Month(s)</option>
                                                <option value="1 Month(s)">1 Month(s)</option>
                                                <option value="2 Month(s)">2 Month(s)</option>
                                                <option value="3 Month(s)">3 Month(s)</option>
                                                <option value="4 Month(s)">4 Month(s)</option>
                                                <option value="5 Month(s)">5 Month(s)</option>
                                                <option value="6 Month(s)">6 Month(s)</option>
                                                <option value="7 Month(s)">7 Month(s)</option>
                                                <option value="8 Month(s)">8 Month(s)</option>
                                                <option value="9 Month(s)">9 Month(s)</option>
                                                <option value="10 Month(s)">10 Month(s)</option>
                                                <option value="11 Month(s)">11 Month(s)</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <label>Upload your profile/resume</label>
                                            <input type="file" name="resume" />
                                        </div>

                                        
                                        <div className="col-md-6 mb-12">
                                        <label>LinkedIn Url</label>
                                            <input type="url" name="linkedinurl" pattern="https://.*"/>
                                        </div>

                                        <div className="col-md-6 mb-12">
                                            <select name="howdidyouknowaboutus" required>
                                                <option value="">How did you know about us?</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Website">Website</option>
                                                <option value="Reference">Reference</option>
                                                <option value="Sales Representative">Sales Representative</option>                                                
                                            </select>
                                        </div>

                                        <div className="col-md-6 mb-12">
                                            <select name="haveubefore" required>
                                                <option value="">Have you worked with us before?</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>

                                        <div className="col-md-12 mb-12">
                                            <select name="intrestedin" required>
                                                <option value="">I am interested to know more about partnering with*</option>
                                                <option value="BYLD Virtual Reality (AR/VR) Solution">BYLD Virtual Reality (AR/VR) Solution</option>
                                                <option value="BYLD Creativity and Innovation Solutions">BYLD Creativity and Innovation Solutions</option>
                                                <option value="Both">Both</option>
                                            </select>
                                        </div>

                                        <div className="col-md-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Questions/Comments:"></textarea>
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

        

            
        </>
    )
}


