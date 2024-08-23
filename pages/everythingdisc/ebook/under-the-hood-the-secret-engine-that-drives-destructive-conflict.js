import Head from 'next/head'

export default function Ebookpage(){

    const EbookSubmit = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/5/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";

                    document.getElementById("showlabel").style.display = "block";
                    setTimeout(function() {
                        window.open("/edassets/pdf/ed-ebook-underthehood-partner.pdf", "_blank")
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
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value +
            "&formname=" + event.target.formname.value )

    }

    return(
        <>
          <Head>
            <title>The Under the Hood: The Secret Engine that Drives Destructive Conflict - Everything DiSC</title>
            <meta name="description" content="But we don’t always realize the level of harm caused by the toxic behaviors that come along with it. Unproductive conflict is a measurable drag on productivity, performance, and the bottom line."/> 
          </Head>

          <div className="rs-services">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <div className='sec-title3 ptt-30'>
                      <h4 className="countertoph2 text-center font30">The Under the Hood: The Secret Engine that Drives Destructive Conflict</h4>
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
                        <h4 className="countertoph2 text-left font24">CONFLICT IS AN UNCOMFORTABLE,YET UNAVOIDABLE PART OF EVERY WORKPLACE.</h4>
                        <p className='mall5'>
                        But we don’t always realize the level of harm caused by the toxic behaviors that come along with it. Unproductive conflict is a measurable drag on productivity, performance, and the bottom line. Yet conflict—if done right—is integral to success. Today’s struggle leads to tomorrow’s breakthrough. Under the Hood exposes the hidden connection between our thoughts, emotions, and behaviors, revealing the secret engine that drives destructive conflict in the workplace. This eBook also points to the solution with a proven methodology that’s grounded in psychology and validated in the field by Authorized Partners of Everything DiSC<sup>®</sup>. This method empowers all people to put their conscious selves back in the driver’s seat and productively engage in conflict.
                        </p>                        
                        <p className='mall5'>
                        Why is there so much gossip in organizations? It’s so common that we just accept it—but seriously, why? Gossip makes people look untrustworthy and two-faced. Not to mention, there’s a pretty decent chance those words are going to get back to the other person and land the source on their blacklist. So why risk it?
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <div className="bannerform formshd">
                            <div className="sec-title3 mbb-35 text-left">                                
                                <h4 className="countertoph2 text-left font24">Download now</h4>
                                <div className="heading-border-line left-style"></div>
                            </div>
                            <form id="contact-form" className='clientcornner pbb-20' onSubmit={EbookSubmit}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No. (Optional)" />
                                        </div> 
                                        
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization (Optional)" />
                                        </div>                                       
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="formname" value="The Under the Hood: The Secret Engine that Drives Destructive Conflict"/>
                                        </div>
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="Business_Entity" value="Everything DiSC"/>
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