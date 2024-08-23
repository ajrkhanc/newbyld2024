import Head from 'next/head'

export default function ContactUs(){

    const ContactUsForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/6/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                        window.location.href = "/cruciallifechangingskills/thank-you"
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
            "&leadsquared-mx_States=" + event.target.location.value +            
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.message.value +
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )

    }

    return(
        <>
        <Head>
            <title>Contact Us - Crucial Life-Changing Skills</title>
        <link rel="canonical" href="https://byldgroup.com/cruciallifechangingskills/contact-us" />
            <meta name="description" content="Tell us how we can help? Unit No. 629-634, 6th Floor, Vipul Trade Centre, Sohna Road, Sector – 48, Gurgaon – 122018, Haryana (India) Toll Free: 1800-102-1345 Phone: +91-124-2666030 cruciallearning.info@byldgroup.com"/> 
        </Head>
        <section class="about-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 contact-title">
                        <h1>Tell us how we can help?</h1>
                        </div>
                     <div class="col-md-7 form-area contact-form">
                                <form id='contactForm' class="row" onSubmit={ContactUsForm}>
                                    <div class="col-md-6 col-6">
                                        <input type="text" name='name' class="form-control" placeholder="Your Name*" required/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <input type="email" name='email' class="form-control" placeholder="Work Email/Email*" required/> 
                                    </div>
                                    <div class="col-md-6 col-6">                                        
                                        <input type="text" name="phone" class="form-control" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <input type="text" name="organization" class="form-control" placeholder="Organization*" required/> 
                                    </div>
                                    <div class="col-md-12">
                                        <input type="text" name='designation' class="form-control" placeholder="Designation"/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <label>Location</label>
                                        <select name='location' required>
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
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
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
                                        <label>Referred By</label>
                                        <select name='referredby' required>
                                            <option value="">-Please select-</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Google Search">Google Search</option>
                                            <option value="Reference">Reference</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12">                                         
                                       <textarea name='message' placeholder="Your Message" rows="5"></textarea> 
                                    </div>

                                    <div class="col-md-12 d-none">
                                        <input type="text" name='Business_Entity' value="Crucial Life Changing Skills"/> 
                                    </div>
                                    <div class="col-md-12">
                                       <button id="submitbuttonform" class="primary-btn submit">Submit</button> 
                                    </div>
                                    <p id="showlabel" style={{ display: "none" }}></p>
                                </form>
                            </div>
                    <div class="col-lg-5 contact-map">
                        <div class="row m-0 contact-details">
                            <div class="col-md-2 col-2 icon">
                                <i aria-hidden="true" class="fa fa-map"></i>
                            </div>
                            <div class="col-md-10 col-10 text">
                                <p>BYLD Group, 2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</p>
                            </div>
                            <div class="col-md-2 col-2 icon">
                                <i aria-hidden="true" class="fa fa-phone"></i>
                            </div>
                            <div class="col-md-10 col-10 text">
                                <p>Toll Free: 1800-102-1345</p>
                            </div>
                            <div class="col-md-2 col-2 icon">
                               <i aria-hidden="true" class="fa fa-phone"></i>
                            </div>
                            <div class="col-md-10 col-10 text">
                                <p>Phone: +91-124-2666030</p>
                            </div>
                            <div class="col-md-2 col-2 icon">
                                <i aria-hidden="true" class="fa fa-envelope-open"></i>
                            </div>
                            <div class="col-md-10 col-10 text">
                                <p>cruciallearning.info@byldgroup.com</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d449204.54772317223!2d77.041671!3d28.406867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x784abf10032f4ea1!2sBYLD%20Group%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1652631637446!5m2!1sen!2sus" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
