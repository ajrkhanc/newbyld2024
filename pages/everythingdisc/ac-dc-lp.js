import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function FIveBgenriclp() {

    const EDGenericLp = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/everythingdisc/wp-json/contact-form-7/v1/contact-forms/287/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/everythingdisc/thank-you"
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
            "&referredby=" + event.target.referredby.value +
            "&leadsquared_Notes=" + event.target.leadsquared_Notes.value +
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

    }

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };



    return (
        <>
            <Head>
                <title>Want to Identify the Top-Performing Candidates in Your Organization?</title>
                <meta name="description" content="Proven Learning Solutions for Individuals and Teams Unlock the potential of your people and the power of your culture with the Everything DiSC® Solutions." />
            </Head>

            <div className="edacdc ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-7 col-sm-12">
                            <div className="content-wrap">
                                <h2 className="colorw font38">Want to Identify the Top-Performing Candidates in Your Organization? </h2>
                                <h3 className="colorw font23">Leverage the Full Potential of the Assessment Center Development Center (AC DC).</h3>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="bannerform mbgc">
                                <p className='mbb-10'>Eager to unlock the core competencies of your employees? <br></br>We are here to help.</p>
                                <form id="contact-form" className='clientcornner' onSubmit={EDGenericLp}>
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
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <input type="text" name="designation" placeholder="Designation" />
                                        </div>

                                        <div className="col-sm-6 mb-12 d-none">
                                            <select name="referredby">
                                                <option value="Google ads">Referred By</option>                                                
                                                <option value="Google Search">Google ads</option>                                                
                                            </select>
                                        </div>

                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Questions/Comments:"></textarea>
                                        </div>

                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="Business_Entity" value="Everything DiSC" />
                                        </div>

                                        <div className="col-lg-12 mb-12">
                                            <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Talk to our Expert" />
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rs-about style4 bg21 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-6">
                            <div className="sec-title3 onlyshd">
                                <p className="pbb-0 mbb-5">
                                    Assessment Center Development Center (AC DC) identifies the core competencies, creates high-performing teams, distinguishes good or bad hires, and helps optimize organizational growth and development.
                                </p>
                                <p className='mall5 pcdd'><span className='themecolor font22'>USPs of Assessment Center Development Center (AC DC):</span></p>
                                <div className='rs-estimate'>
                                    <ul className="estimate-info mtt-5">
                                        <li>Grooms future leaders or managers based on assessment</li>
                                        <li>Identifies and encourages high-potential individuals</li>
                                        <li>Prepares Individual Development Plans (IDPs) for employees</li>
                                        <li>Helps in succession planning</li>
                                        <li>Understand and unlock the full potential of employees</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-img">
                                <img src="/edassets/img/edgenericlp.jpg" alt="images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="rs-about style2 clientcornnerlogo ptt-20">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="pb-50">
                                <div className="sec-title3 mbb-35">
                                    <h4 className="countertoph2 text-center font30">Our Clients</h4>
                                    <div className="heading-border-line center-style"></div>
                                </div>
                                <Slider {...settings}>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c1.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c2.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c3.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c4.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c5.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c6.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c7.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c8.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c9.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c10.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c11.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c12.jpg" />
                                    </div>

                                    <div className='logoslider'>
                                        <img src="/5bassets/img/logos/c13.jpg" />
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
