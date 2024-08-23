import Head from 'next/head'

export default function Ebook(){

    const EbookForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/25/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";                   
                    setTimeout(function() {
                        window.open("/classets/pdf/how-to-lead-virtual-teams.pdf", "_blank")
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
            "&ebookname=" + event.target.ebookname.value )

    }

    return(
        <>
        <Head>
            <title>How to Lead Virtual Teams - Crucial Life-Changing Skills</title>
        <link rel="canonical" href="https://byldgroup.com/cruciallifechangingskills/ebook/how-to-lead-virtual-teams" />
            <meta name="description" content="A Crucial Learning survey of more than 1,300 people found that an incredible 9 out of 10 respondents have felt emotionally or physically unsafe to speak their mind more than once in the past 18 months."/> 
        </Head>
        <section class="about-section">
            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-12 left-about-area ptt-70 pbb-70 text-center">
                        <h1>How to Lead Virtual Teams</h1>
                        <h6 className='colorb'>Remote or Removed?</h6>
                        
                        <p className='colorb'>
                        2020 was the year when work went remote. In a matter of days, entire workforces were sent home and told to set up shop. Employees with no prior experience to working from home were asked to navigate digital communication platforms, online meeting tools, and field a deluge of email.
                        </p>
                        <p className='colorb'>
                        While some people prefer the remote worklife, it’s not for everyone. You have to be highly self motivated, proactive in your outreach to colleagues, and content with some amount of solace and isolation. When thrown into this type of environment, unprepared, it can be a scary and difficult experience. Not to mention that learning how to get work done in a virtual team takes time and patience.
                        </p>
                    </div>
            
                </div>
            </div>
        </section>

        <section className='ptt-40' id='registered'>
            <div className='container'>
              <div className='row workshop-form'>
             
                <div class="col-md-12 form-area ptt-10">
                <form id="contactForm" class="row formb" onSubmit={EbookForm}>
                        <div class="col-lg-12 contact-title">                       
                        <h3 className='formh3 ptt-5'>
                           Fill in the form below and our subject matter expert will connect with you within 24 working hours.
                        </h3>
                        </div>
                        <div class="col-md-6 col-6">
                        <input type="text" name='name' placeholder="Your Name*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="email" name='email' placeholder="Work Email/Email*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No. (Optional)" />
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name='organization' placeholder="Organization (Optional)"/> 
                        </div>
                        
                        <div className="col-sm-12 mb-12 d-none">
                           <input type="checkbox" name="ebookname" value="How to Lead Virtual Teams"/> 
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
