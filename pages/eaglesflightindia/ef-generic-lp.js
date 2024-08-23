import Head from 'next/head';
import Slider from "react-slick";
import { useState } from 'react';
export default function CoachCertificationLP() {

    const EFgenericLP = async event => {
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        };

        xhttp.open("POST", 'https://byldgroup.in/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/22/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    // Show success message
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";
                    document.getElementById("showlabel").style.display = "block";

                    // Redirect after 3 seconds
                    window.setTimeout(function () {
                        const formData = new FormData(event.target);
                        const name = formData.get('name');
                        const email = formData.get('email');
                        const phone = formData.get('phone');
                        const gst_number = formData.get('gst_number');
                        const entity_name = formData.get('entity_name');
                        const address = formData.get('address');
                        const pan_number = formData.get('pan_number');
                        const gst = formData.get('gst');
                        // Construct URL with form data
                        const redirectURL = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${name}&email=${email}&contact=${phone}&GstNumber=${gst_number}&EntityName=${entity_name}&Amount=1000&Address=${address}&PanNumber=${pan_number}&gst=${gst}`;
                        window.location.href = redirectURL;
                    }, 3000);
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };

        const formData = new FormData(event.target);
        xhttp.send("leadsquared-FirstName=" + formData.get('name') +
            "&leadsquared-EmailAddress=" + formData.get('email') +
            "&leadsquared-Mobile=" + formData.get('phone') +
            "&leadsquared-Company=" + formData.get('organization') +
            "&leadsquared-JobTitle=" + formData.get('designation') +
            "&leadsquared-GstNumber=" + formData.get('gst_number') +
            "&leadsquared-EntityName=" + formData.get('entity_name') +
            "&leadsquared-Address=" + formData.get('address') +
            "&leadsquared-PanNumber=" + formData.get('pan_number') +
            "&slot=" + formData.get('slot') +
            "&gst=" + formData.get('gst') +
            
            "&leadsquared-mx_Business_Entity=" + formData.get('Business_Entity'));
           
    }
   

    const [changetext, setText] = useState(
        {
            heading: "Team building and time management are crucial components in a corporate environment. However, instilling the same in senior leaders is a daunting task.",
            subheading: "Eagle’s Flight offers various corporate team building games to boost productivity, behavioral change, and team work in a fun learning way."
        }
    )


    const handleChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "Council of the Marble star: June 5th, 2024") {
            setText({
                heading: "How often do your managers struggle to strike the right balance between achieving results and upholding organizational values?",
                subheading: "Join us at the 'COUNCIL OF THE MARBLE START™️' game-based Experience session where together we will experience and reflect on these critical issues."
            });
        } else {
            // Handle other options if needed
            setText({
                heading: "Team building and time management are crucial components in a corporate environment. However, instilling the same in senior leaders is a daunting task.",
                subheading: "Eagle’s Flight offers various corporate team building games to boost productivity, behavioral change, and team work in a fun learning way."
            });
        }
    };


    const [showGSTFields, setShowGSTFields] = useState(false);
    const [showGSTFieldsOne, setShowGSTFieldOne] = useState(false);
    const [gstNumber, setGstNumber] = useState('');
    const [isGstNumberValid, setIsGstNumberValid] = useState(true);
    const [panGST, setPanGST] = useState('');
    const [isPanGSTValid, setIsPanGSTValid] = useState(true);
    
    const validateGSTNumber = (gstNumber) => {
        // GST number format: 2 characters (state code) + 10 characters (GSTIN) 
        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}$/;
        return gstRegex.test(gstNumber);
    };
    const validatePAN = (panNumber) => {
        // PAN number format: 5 characters (letters) + 4 digits + 1 character (letter or digit)
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(panNumber);
    };
    
    const handleGstNumberChange = (event) => {
        const value = event.target.value;
        setGstNumber(value);
        setIsGstNumberValid(validateGSTNumber(value));
    };
    const handleGSTChange = (event) => {
        setShowGSTFields(event.target.value === "Yes");
        setShowGSTFieldOne(event.target.value === "No");
    };
 
    const handlePanGSTChange = (event) => {
        const value = event.target.value;
        setPanGST(value);
        setIsPanGSTValid(validatePAN(value));
    };

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                <title>Eagle’s Flight™ Generic LP</title>
                <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies." />
            </Head>

            <div className="icfbanner ptt-40 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className='clearfix'></div>
                        <div className='col-md-6'>
                            <div className='icfbannerbox2 text-center'>
                                <img className="icflogo220" src="/efassets/img/eagle.png" alt="ICFLOGO" />
                                <h3 className="themecolor2 ptt-10 pbb-10">Let’s improve team building and decision-making with self-learning</h3>
                                <h4 className='font500'>Make Way for Corporate Transformation with Our Experiential Learning</h4>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='icfvideoborder'>
                                <iframe width="100%" height="370" src="https://www.youtube.com/embed/IgqNOgpmv64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="register" className='icfemibg ptt-40 pbb-40'>
                <div className='container'>
                    <div className='row y-middle'>
                        <div className='col-md-7'>
                            <h3 className='icfemih3'>{changetext.heading}</h3>
                            <h4 className='icfemih4'>{changetext.subheading}</h4>
                        </div>
                        <div className='col-md-5'>
                            <div className='ptt-10'>
                                <div className="bannerform">
                                    <p>Fill in the form below and our subject matter expert will connect with you within 24 working hours.</p>
                                    <form id="contact-form" className='clientcornner' onSubmit={EFgenericLP}>
                                        <div className="row">
                                            <div className="col-sm-6 mb-12">
                                                <input type="text" name="name" placeholder="Name*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input type="email" name="email" placeholder="Work Email/Email*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input type="text" name="organization" placeholder="Company Name*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input type="text" name="designation" placeholder="Designation*" required />
                                            </div>

                                        
                                                <div className="col-sm-12 mb-12">
                                                    <label>Are you under GST ?</label><br />
                                                    <div className='d-flex mt-2'>
                                                        <input className='w-auto ms-2 me-2' type="radio" name="gst" value="Yes" onChange={handleGSTChange} /> Yes
                                                        <input className='w-auto ms-2 me-2' type="radio" name="gst" value="No" onChange={handleGSTChange} /> No
                                                    </div>
                                                </div>

                                                {showGSTFields ? (
                                                    <div id="gst_fields">
                                                        {/* GST Number */}
                                                        
                                                         <div className="col-lg-12 mb-12">
                                                            <input type="text" name="gst_number" placeholder="GST Number*" value={gstNumber} onChange={handleGstNumberChange} required />
                                                            {!isGstNumberValid && <span style={{ color: 'red' }}>Invalid GST Number</span>}
                                                        </div>
                                                                                                {/* Entity Name */}
                                                        <div className="col-lg-12 mb-12">
                                                            <input type="text" name="entity_name" placeholder="Entity Name*" required />
                                                        </div>
                                                        {/* Address */}
                                                        <div className="col-lg-12 mb-12">
                                                            <input type="text" name="address" placeholder="Address*" required />
                                                        </div>
                                                        {/* PAN Number */}
                                                        <div className="col-lg-12 mb-12">
                                                        <input type="text" name="pan_number" placeholder="PAN Number*" value={panGST} onChange={handlePanGSTChange} required />
                                                            {!isPanGSTValid && <span style={{ color: 'red' }}>Invalid PAN Number</span>}
                                                        </div>
                                                    </div>
                                                ) : null}

                                                {showGSTFieldsOne ? (
                                                    <div id="gst_fields">
                                                    {/* Address */}
                                                    <div className="col-lg-12 mb-12">
                                                        <input type="text" name="address" placeholder="Address*" required />
                                                    </div> 
                                                    {/* PAN Number */}
                                                    {/* <div className="col-lg-12 mb-12">
                                                        <input type="text" name="pan_number" placeholder="PAN Number*" value={panGST} onChange={handlePanGSTChange} required />
                                                            {!isPanGSTValid && <span style={{ color: 'red' }}>Invalid PAN Number</span>}
                                                    </div>*/}
                                                </div>
                                                ) : null}
                                         

                                            <div className="col-sm-12 mb-12">
                                                <select name="slot" required onChange={handleChange}>
                                                    <option value="Select">Pick up any Slot*</option>
                                                    <option value="Council of the Marble star: June 5th, 2024">Council of the Marble star: June 5th, 2024</option>
                                                    <option value="Council of Marble star : July 25th,2024, Bangalore">Council of Marble star : July 25th,2024, Bangalore </option>
                                                    <option value="Council of Marble star : Sept 12th,2024 Mumbai">Council of Marble star : Sept 12th,2024 Mumbai </option>
                                                    <option value="Council of Marble star : Nov  12th ,2024 Hyderabad">Council of Marble star : Nov  12th ,2024 Hyderabad </option>

                                                    {/* <option value="Eagle's Flight Executive Briefing: March 8th, 2023">Eagle's Flight Executive Briefing: March 8th, 2023</option> */}
                                                </select>
                                            </div>

                                            <div className="col-sm-12 d-none">
                                                <input type="text" name="Business_Entity" value="Eagles Flight" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="I’m Interested" />
                                            </div>
                                            <p id="showlabel" style={{ display: "none" }}></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div className="ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-12">
                            <div className='text-center'>
                                <h4 className="themecolor2 pbb-30">Explore Experiential Learning with Our Programs</h4>
                            </div>
                            <Slider {...settings}>
                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/wind.png" alt="ICF ICONS" />
                                    </div>
                                    <h4>Windjammer</h4>
                                    <p>
                                        Improve your business profitability with effective planning, goal setting, and execution with this team building activity.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/cms.png" alt="ICF ICONS" />
                                    </div>
                                    <h4>Council Of The Marble Star</h4>
                                    <p>
                                        Master the art of productive relationships for higher productivity with this corporate team building game.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/rsc.png" alt="ICF ICONS" />
                                    </div>
                                    <h4>Rattlesnake Canyon</h4>
                                    <p>
                                        Boost your team effectiveness and negotiation skills for optimum business results with this virtual fun activity.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/pp.png" alt="ICF ICONS" />
                                    </div>
                                    <h4>Promises, Promises!</h4>
                                    <p>
                                        Unlock the impact of effective communication for maximum productivity with this virtual team building game.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/kk.png" alt="ICF ICONS" />
                                    </div>
                                    <h4>King Kahufu</h4>
                                    <p>
                                        Build a cohesive and productive team with this immersive virtual experiential learning activity.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/gdk.png" alt="ICF ICONS" />
                                    </div>
                                    <h4>Gold Of The Desert Kings</h4>
                                    <p>
                                        Learn to maintain a healthy balance between efforts versus productivity with this team building activity.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/eo.png" alt="ICF ICONS" />
                                    </div>
                                    <h4>Expedition Outback</h4>
                                    <p>
                                        Learn to grab maximum business opportunities through better information management with this team activity.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/mc.png" alt="ICF ICONS" />
                                    </div>
                                    <h4>Museum Caper</h4>
                                    <p>
                                        Employ effective communication and timely feedback for team building with this immersive virtual activity.
                                    </p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <section className='icflastrow ptt-40 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h4 className="themecolor2 pbb-30">Know what our clients have to say</h4>
                            <iframe width="100%" height="450" src="https://www.youtube.com/embed/ZAQNmqKkkRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ptt-20 pbb-20'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font30">Our Upcoming Programs</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                        </div>
                        <div className='clearfix'></div>



                        {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar January 11th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Eagle's Flight™ Executive Briefing</h3>
                                <h5>Complimentary Webinar</h5>
                                <a className="eventbtn" href='#register'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> */}



                        {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar March 8th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Eagle's Flight™ Executive Briefing</h3>
                                <h5>Complimentary Webinar</h5>
                                <a className="eventbtn" href='#register'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> */}


                    </div>
                </div>
            </section>
        </>
    )
}


