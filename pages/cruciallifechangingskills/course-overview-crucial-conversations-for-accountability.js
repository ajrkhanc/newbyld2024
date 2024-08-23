import Head from 'next/head'

export default function Courseoverviewcrucialconversationsformasteringdialogue(){

    const ContactUsForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/8/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    setTimeout(function() {
                        window.open("/classets/pdf/course-overview-pdf-crucial-conversations-for-accountability.pdf", "_blank")
                     }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("yourname=" + event.target.name.value +
            "&youremail=" + event.target.email.value +
            "&phonenumber=" + event.target.phone.value +
            "&companyname=" + event.target.organization.value +
            "&designation=" + event.target.designation.value +
            "&location=" + event.target.location.value +            
            "&referredby=" + event.target.referredby.value +
            "&Notes=" + event.target.message.value )

    }

    return(
        <>
        <Head>
            <title>Course Overview - Crucial Conversations for Accountability - Crucial Life-Changing Skills</title>
        <link rel="canonical" href="https://byldgroup.com/cruciallifechangingskills/course-overview-crucial-conversations-for-accountability" />
            <meta name="description" content=""/> 
        </Head>
        <section class="about-section workshop-hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 contact-title"> 
                        <h1>FILL-IN YOUR DETAILS TO DOWNLOAD OR ACCESS THE FILE</h1>                       
                     </div>

                     <div class="col-md-12 form-area workshop-form">
                                <form id='contactForm' class="row" onSubmit={ContactUsForm}>                                     
                                    <div class="col-md-6 col-6">
                                        <input type="text" name='name' class="form-control" placeholder="Your Name*"/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <input type="email" name='email' class="form-control" placeholder="Work Email/Email*"/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                    <input type="text" name="phone" class="form-control" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <input type="text" name='organization' class="form-control" placeholder="Organization*"/> 
                                    </div>
                                    <div class="col-md-12">
                                        <input type="text" name='designation' class="form-control" placeholder="Designation"/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <label>Location</label>
                                        <select name='location' required>
                                        <option value="">—</option>
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
                                    <div class="col-md-12">
                                        <input id='submitbuttonform' class="formbtn" type="submit" value="Submit"/>
                                    </div>
                                    <p id="showlabel" style={{ display: "none" }}></p>
                                </form>
                            </div>
                </div>
            </div>
        </section>

        
        </>
    )
}
