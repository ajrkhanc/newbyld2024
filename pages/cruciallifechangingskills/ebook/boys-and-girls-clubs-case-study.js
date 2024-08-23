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
                        window.open("/classets/pdf/boys-and-girls-clubs-case-study.pdf", "_blank")
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
            <title>Boys and Girls Clubs Case Study - Crucial Life-Changing Skills</title>
            <meta name="description" content="Working an oil rig in the Gulf of Mexico is physically demanding and potentially dangerous. Crews clock twelve-hour days for two weeks straight amid swinging iron equipment and heavy machinery."/> 
        </Head>
        <section class="about-section">
            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-12 left-about-area ptt-70 pbb-70 text-center">
                        <h1>Boys and Girls Clubs Case Study</h1>
                        
                        <p className='colorb'>
                        Children have been coming to the Boys & Girls Clubs of Greater Milwaukee since 1887, when Annabell Cook Whitcomb transformed two basement rooms at Plymouth Church in downtown Milwaukee into a Club for boys.
                        </p>
                        <p className='colorb'>
                        Today, the organization is one of the largest and longest running youth-serving agencies in Milwaukee, offering structured after-school and summer programming to more than 43,000 children and teens each year. Within the safety of the Clubs, youth have access to academic support, free meals, role models, and opportunities to build character and explore new interests.”
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
                           <input type="checkbox" name="ebookname" value="Boys and Girls Clubs Case Study"/> 
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
