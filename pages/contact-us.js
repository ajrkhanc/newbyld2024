import Head from 'next/head'

export default function ContactUs() {
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/11/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&tel=" + event.target.phone.value +
            "&location=" + event.target.Location.value +
            "&Company=" + event.target.organization.value +
            "&Designation=" + event.target.designation.value +
            "&Product=" + event.target.product.value +
            "&referredby=" + event.target.referredby.value +
            "&textarea=" + event.target.leadsquared_Notes.value)

    }
    return (
        <>
            <Head>
                <title>Contact Us - BYLD Group</title>
                <meta name="description" content="Contact US Have a question? Call us now 1800-102-1345 +91-124-2666030 Need support? Drop us an email info@byldgroup.com Reach out to us! Unit No. 629-634, 6th Floor, Vipul Trade Centre, Sohna Road, Sector -48, Gurgaon – 122018, Haryana (India). GET IN TOUCH FILL THE FORM BELOW" />
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(5000).fadeIn();
               $('.close').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
               $('.x').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
             });
          `,
                    }}
                />
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <div class="rs-breadcrumbs contactbrud">
                <div class="container">
                    <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
                        <ul>
                            <li>
                                <a href="/">
                                    <span>Home</span>
                                </a>
                                <span class="separator">/</span>
                            </li>
                            <li>
                                <a href="/contact-us">
                                    <span>Contact Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">
                                <span class="watermark ">Contact</span>
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    Contact Us
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='aboutmap ptt-50 pbb-40 zinc'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-7'>                            
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className='contactusali wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='contacticonc'>
                                            <img src='/assets/img/icon/map.png' />
                                        </div>
                                        <div className='contacttext'>
                                            <h4>Reach out to us!</h4>
                                            <p>
                                                BYLD Group: 2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-12'>
                                    <div className='contactusali wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='contacticonc'>
                                            <img src='/assets/img/icon/map.png' />
                                        </div>
                                        <div className='contacttext'>
                                            <h4>Need support? Drop us an email</h4>
                                            <a href='mailto:info@byldgroup.com'>info@byldgroup.com</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-12'>
                                    <div className='contactusali wow fadeInUp delay-0-2s animated animateUP'>
                                        <div className='contacticonc'>
                                            <img src='/assets/img/icon/map.png' />
                                        </div>
                                        <div className='contacttext'>
                                            <h4>Have a question? Call us now</h4>
                                            <a href='tel:1800-102-1345'>1800-102-1345</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-5'>
                            <img src="/assets/img/new/contact-map.svg" />
                        </div>
                    </div>
                </div>
            </section>

            <div class="homecon ptt-60">
                <div class="container">
                    <div className='row'>
                        <div className='col-sm-3'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Get in touch</h2>
                        </div>
                        <div className='col-sm-9'>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                                Avail the development stream that is essential for your professional requirement. For more information, feel free to fill the form and we will get back to you
                            </p>
                        </div>
                    </div>

                    <div class="row y-middle">
                        <div class="col-lg-5 md-mb-50">
                            <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
                                <img src="/assets/img/homeb/contactl.png" alt="Contact" />
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="contact-wrap">
                                <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                                    <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                                        <div className="row">
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="name" placeholder="Enter Name*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="email" name="email" placeholder="Enter Email*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="Location" placeholder="Location" />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="organization" placeholder="Organization*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="designation" placeholder="Designation*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <select name="product" required>
                                                    <option value="">Product / Services</option>
                                                    <option value="Sales and Services">Sales and Services</option>
                                                    <option value="Coaching">Coaching</option>
                                                    <option value="Assessments">Assessments</option>
                                                    <option value="Leadership and Performance">Leadership and Performance</option>
                                                    <option value="Experiential Learning">Experiential Learning</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <select name="referredby" required>
                                                    <option value="">Referred By</option>
                                                    <option value="Email">Email</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Google Search">Google Search</option>
                                                    <option value="Website">Website</option>
                                                    <option value="Reference">Reference</option>
                                                    <option value="Sales Representative">Sales Representative</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input id="submitbuttonform" className="clientcornnerbtn bord0" type="submit" value="Submit" />
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
