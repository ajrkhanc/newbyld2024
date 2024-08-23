import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function FIveBgenriclp() {

    const FiveBgSubmit = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/284/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("showlabel").style.display = "block";
                    setTimeout(function () {
                        window.location.href = "/fivebehaviors/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-Company=" + event.target.Organization.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&ReferredBy=" + event.target.intrestin.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

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
                <title>Learn to Unlock the Full Potential and Effectiveness of Your Teams - Five Behaviors</title>
                <meta name="description" content="Learn to Unlock the Full Potential and Effectiveness of Your Teams" />
            </Head>

            <div className="genericlpc ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-7 col-sm-12">
                            <div className="content-wrap">
                                <h2 className="colorw">Learn to Unlock the Full Potential and Effectiveness of Your Teams</h2>
                                <h3 className="colorw">Utilize the insights of <span className='clpc'>The Five Behaviors<sup>®</sup></span> team development model.</h3>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="bannerform">
                                <p className='mbb-10'>Want to improve teamwork and collaboration? We are here to help.</p>
                                <form id="contactForm" className='clientcornner' onSubmit={FiveBgSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-md-6 mb-12">
                                            <input type="text" name="Organization" placeholder="Organization*" required />
                                        </div>

                                        <div className="col-md-12 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required/>
                                        </div>
                                        <div className="col-md-12 mb-12">
                                            <select name="intrestin">
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Website">Website</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6 mb-12 d-none">
                                            <input type="text" name="leadsquared_mx_Business_Entity" value="The Five Behaviors" required />
                                        </div>

                                        <div className="col-lg-12 mb-12">
                                            <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Speak to our Expert" />
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rs-about style4 bg21 pt-50 pb-50 md-pt-70 md-pb-70 mbgcv">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-7">
                            <div className="sec-title3">

                                <div className="desc pb-17">
                                    The tried and tested, <b>The Five Behaviors<sup>®</sup></b> team development model is based on the best-selling book of Patrick Lencioni- <b>The Five Dysfunctions of a Team</b>. The program comprises the key components- Trust, Conflict, Commitment, Accountability, and Results for creating a high-performing team. <b>The Five Behaviors<sup>®</sup></b> focuses on optimizing contribution to team development, improving decision-making, and building an accountable team for optimum results.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-img">
                                <img src="/5bassets/img/dysfunctions.png" alt="images" />
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