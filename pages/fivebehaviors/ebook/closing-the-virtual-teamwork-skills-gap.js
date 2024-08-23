import Head from 'next/head'

export default function FiveBEbookpage(){

    const EbookSubmit = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/39/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";                    
                    document.getElementById("showlabel").style.display = "block";
                    setTimeout(function() {
                        window.open("/5bassets/pdf/5b-whitepaper-closing-the-virtual-team-works-kills-gap.pdf", "_blank")
                     }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&location=" + event.target.location.value +
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&referredby=" + event.target.referredby.value +            
            "&checkboxs=" + event.target.chb1.value +
            "&your-message=" + event.target.leadsquared_Notes.value +
            "&formname=" + event.target.formname.value )

    }

    return(
        <>
          <Head>
            <title>Closing the Virtual Teamwork Skills Gap - Five Behaviors</title>
            <meta name="description" content="Closing the Virtual Teamwork Skills Gap Uncover the challenges faced by virtual teams and learn three strategies for developing an effective virtual team culture. The virtual workplace has upended the way teams work together."/> 
          </Head>

          <div className="rs-services">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <div className='sec-title3 ptt-30'>
                      <h4 className="countertoph2 text-center font30">Closing the Virtual Teamwork Skills Gap</h4>
                      <div className="heading-border-line left-center"></div>
                      </div>
                    </div>         
                </div>
            </div>
            </div>

            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font24">Uncover the challenges faced by virtual teams and learn three strategies for developing an effective virtual team culture.</h4>
                        <p className='mall5'>
                        The virtual workplace has upended the way teams work together.To thrive in the new normal, organizations need to assess what they are doing to build a culture of effective teamwork
                        </p>                        
                        <p className='mall5'>
                        Organizations had been inching closer to an embrace of remote and flexible work arrangements—that is, until the COVID-19 pandemic forced an overnight conversion to virtual work. Remote work is highly prevalent now, with nearly 42% of workers in the U.S. fully remotei. And it’s here to stay: 90% of human resources leaders expect work to remain semi-flexible beyond the pandemicii.
                        </p>                    
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <div className="bannerform formshd">
                            <div className="sec-title3 mbb-35 text-left">                                
                                <h4 className="countertoph2 text-left font18">To know more fill your details below and get access.</h4>
                                <div className="heading-border-line left-style"></div>
                            </div>
                            <form id="contactForm" className='clientcornner pbb-20' onSubmit={EbookSubmit}>                                         
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
                                            <input type="text" name="location" placeholder="Location*" required />
                                        </div>
                                        
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation"/>
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By*</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Reference">Reference</option>
                                            </select>
                                        </div>

                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Your Message"></textarea>
                                        </div>

                                        <div className="col-sm-12 mb-12">
                                             <div class="agree-label">
                                                <input type="checkbox" name="chb1" id="chb1" value="Subscribe to our newsletter to receive updates on our research, product news, and future webinars and Workshops." required/>
                                                <label for="chb1">*Subscribe to our newsletter to receive updates on our research, product news, and future webinars and Workshops.</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="formname" value="Closing the Virtual Teamwork Skills Gap"/>
                                        </div>                                        
                                        
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Download"/>
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