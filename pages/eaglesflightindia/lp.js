import Head from 'next/head'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";



export default function Home() {

    const Eflpsubmit = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonforml").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/35/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/eaglesflightindia/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-mx_States=" + event.target.Location.value +
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&slot=" + event.target.slot.value +            
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

    }

    const downloadpdf = async event => {
        event.preventDefault()
        document.getElementById("hellocc").value = "Downloading...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/46/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/efassets/pdf/eaglesflightindia.pdf"
                    });

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&organization=" + event.target.organization.value +
            "&designation=" + event.target.designation.value)

    }

    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalOpen2, setModalOpen2] = React.useState(false);

    return (
        <>
            <Head>
                <title>Eagle’s Flight LP</title>
                <meta name="description" content="Experiential Learning is a revelation for those who learn, experience, apply, and practice. But their implementation is done in the form of business team-building activities." />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-R93RP8FMVC"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-R93RP8FMVC');
          `,
                    }}
                />
            </Head>

            <Modal toggle={() => setModalOpen2(!modalOpen2)} isOpen={modalOpen2} backdrop="static" keyboard={false} className='ccmdc'>
                <button
                    aria-label="Close"
                    className="close popcl"
                    type="button"
                    onClick={() => setModalOpen2(!modalOpen2)}
                >
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>

                    <form id="contactForm" className='clientcornner ptt-5 pbb-0' onSubmit={downloadpdf}>
                        <div className="row mmcform">
                            <div className="col-sm-6 mb-12">
                                <input type="text" className='borrr' name="name" placeholder="Name*" required />
                            </div>
                            <div className="col-sm-6 mb-12">
                                <input type="text" className='borrr' name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                            </div>
                            <div className="col-sm-12 mb-12">
                                <input type="email" className='borrr' name="email" placeholder="Work Email/Email*" required />
                            </div>


                            <div className="col-sm-12 mb-12">
                                <input type="text" className='borrr' name="organization" placeholder="Organization*" required />
                            </div>
                            <div className="col-sm-12 mb-12">
                                <input type="text" className='borrr' name="designation" placeholder="Designation*" required />
                            </div>

                            <div className="col-lg-12 mb-12 text-center">
                                <input id='hellocc' className="clientcornnerbtn" type="submit" value="Download" />
                            </div>
                            <p id="showlabel" style={{ display: "none" }}></p>
                        </div>
                    </form>
                </ModalBody>

            </Modal>

           
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} backdrop="static" keyboard={false}>
      <button
            aria-label="Close"
            className="close popcl"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
          
        <ModalBody>
        <div className="bannerform pa00">
                                <form id="contact-form" className='clientcornner' onSubmit={Eflpsubmit}>
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Enter Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <select name="slot" required>
                                                <option value="">Pick up your Slot*</option>
                                                <option value="Eagle's Flight Executive Briefing: October 12th, 2023">Eagle's Flight Executive Briefing: October 12th, 2023</option>
                                            </select>
                                        </div>
                                      
                                        <div className="col-sm-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagles Flight" required />
                                        </div>
                                        <div className="col-lg-12 mb-12 text-center">
                                            <input id='submitbuttonforml' className="clientcornnerbtn" type="submit" value="Submit" />
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                </form>
                            </div>
        </ModalBody>
      
      </Modal>
          

            <div className="rs-services">
                <div className="container-full">
                    <div className="row y-middle">
                        <div className="col-sm-5">
                            <div className='efnlp'>
                                <h1>Do you want your team to be prepared for the future?</h1>
                                <h2>MINDSET IS EVERYTHING</h2>
                                <a href='#our-solutions'>Explore our Experiential Learning Solutions!</a>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <img className="img100" src="/efassets/img/ef-br.jpg" />
                        </div>
                    </div>
                </div>
            </div>

            <section className='eflp2box'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h2>We're More Than Just a Training Company</h2>
                            <p>
                                We're a company that fosters change, teamwork, innovation, and forward momentum in businesses. We specialize in helping people to unlearn bad habits and mindsets that are holding them back so they can develop into their best selves. We don't just teach skills - we change lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div id='our-solutions' class="rs-project style2 efhbg ptt-30 pbb-30 pll-20 prr-20">
                <div class="container-full">
                    <div class="row">
                        <div className='col-sm-12'>
                            <div className="text-center">
                                <h4 className="oversl">Our Solutions</h4>                                
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/mus01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/museum-caper"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/museum-caper">Museum Caper™ (Virtual Immersive Learning)</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/king01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/king-kahufu"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/king-kahufu">King Kahufu™ (Virtual Immersive Learning)</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/gold01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings">Gold Of Desert Kings™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/consil01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/council-of-the-marble-star"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/council-of-the-marble-star">Council Of Marble Star™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/promise01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/promises-promises"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/promises-promises">Promises! Promises!™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/rat01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/rattlesnake-canyon"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/rattlesnake-canyon">Rattlesnake Canyon™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="col-lg-3 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/outback.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/expedition-outback"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/expedition-outback">Expedition Outback™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/win01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/windjammer"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/windjammer">Windjammer™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='clearfix'></div>
                        <div className='col-sm-12 text-center connetc'>
                        <a href='#' onClick={() => setModalOpen2(!modalOpen2)}>Download Brochure</a>
                    </div>

                    </div>
                </div>
            </div>

            {/* <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 text-center connetc'>
                        <a href='#connect-now'>Download Brochure</a>
                    </div>
                </div>
            </div> */}

            

            

            <div className="efclientbg ptt-30 pbb-40 solutionsboxarea">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="sec-title3 mbb-35 text-center rs-estimate">
                            <h2>Satisfied Clients</h2>
                                <p>
                                By the experience and absolutely loved it. This is a second intervention with them and what we learned is more important collaboration. I think that is beautifully mirrored in the entire exercise. Thank you to the entire BYLD team.”
                                </p>
                                <h4>Sudip Das</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rs-about style4 bg21 mtt-60">
                <div class="container-full">
                    <div class="row y-middle">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-6">
                            <div class="sec-title3 mbb-35 text-left efmd">
                                <h2 class="">Want to Leverage Team Building Activities for Enhanced Decision-Making and Teamwork?</h2>
                                <h3>Eagle’s Flight Showcase builds an inclusive work culture.</h3>

                                <div class="workshop-date">
                                    {/* <h6><i class="fa fa-calendar" aria-hidden="true"></i> June 27th, 2023</h6>
                                    <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 11 AM to 2 PM</h6> */}
                                    <a className='enbtnc' onClick={() => setModalOpen(!modalOpen)}>Connect Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="about-img"><img src="/efassets/img/efc2.jpg" alt="images" /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div id="connect-now" className="rs-testimonial style4 homebgcontactus ptt-30 pbb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="sec-title3 mbb-35 text-center">
                                <h4 className="countertoph2 text-center font30 colorw">Reach Out to Us</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className='col-sm-2'></div>
                        <div className="col-sm-8">
                            <div className="bannerform">
                                <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={Eaglesflightindia}>
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Enter Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Reference">Reference</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-sm-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagles Flight" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Submit" />
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div> */}

        </>
    )
}
