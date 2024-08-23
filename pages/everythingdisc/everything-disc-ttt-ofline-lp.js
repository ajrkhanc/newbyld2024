import Head from 'next/head'
import Marquee from "react-fast-marquee";


export default function DiskTTTLP() {

    const EDttt = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/17/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";

                    window.setTimeout(function () {
                        window.location.href = "/everythingdisc/thank-you-ofline-lp"
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
            "&leadsquared-mx_Showed_Interest_in=" + event.target.slot.value +
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

    }


    return (
        <>
            <Head>
                <title>Everything DiSC TTT offline LP - Everything DiSC</title>
                <meta name="description" content="Introducing DISC Offline! Become a Certified DISC Trainer to Increase your confidence and create a culture of DISC in your organization As more and more organizations are experiencing the benefits of DISC" />
            </Head>

            <div className="rs-services">
                <div className="container-full">
                    <div className="row y-middle">
                        <div className="col-lg-12">
                            <img className="img100" src="/edassets/img/banner/disk-ttt-off.jpg" />
                        </div>
                    </div>
                </div>
            </div>

            


            <div className="rs-achievement style1 relative ptt-20 pbb-40">
                <div className="container">
                <Marquee className='ccds'>
            Complementary Epic account with 50 Credits and Digital library
            </Marquee>
                    <div className="row rs-vertical-middle ptt-30">

                        <div className="col-lg-6 pr-0">
                            <div className='onlyshd pb-10'>
                                <h4 className='countertoph2 text-left font24 pcdd'>Introducing DISC Offline!</h4>
                                <p className='mall5 pcdd'><span className='themecolor'>Become a Certified DISC Trainer to Increase your confidence and create a culture of DISC in your organization</span></p>
                                <p className='mall5  pcdd'>
                                    As more and more organizations are experiencing the benefits of DISC, they are recognizing the value of having an internal certified professional who can drive Assessment & DISC culture in their company.
                                </p>
                                <p className=' pcdd'>
                                    This workshop helps you to understand the human behaviour and DISC Personality types.
                                </p>
                                <p className=' pcdd'>
                                    You’ll learn how to keep DISC alive in your organization by customizing an DISC workshop for a specific group you’ll be working with, creating a culture of DISC, and be introduced to My DISC, our mobile-friendly, interactive learning portal that is exclusive to DISC.
                                </p>
                                <p className=' pcdd'>
                                    It also helps organizations in various aspect of people development including talent selection, talent development, transformation of people and performance evaluation and appraisal purpose and much more.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 md-pt-50">
                            <div className="borderall">
                                <div className="bannerform formshd">
                                    <div className="sec-title3 mbb-5 text-left">
                                        <h4 className="countertoph2 text-left font24">Reserve Your Seat</h4>
                                    </div>
                                    <form id="contact-form" className='clientcornner pbb-20' onSubmit={EDttt}>
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
                                                <input type="text" name="designation" placeholder="Designation" />
                                            </div>

                                            <div className="col-sm-12 mb-12">
                                                <select name="slot" required>
                                                    <option value="">Pick up any Slot*</option>
                                                    <option value="15th - 16th June 2023 - DISC Train-the-Trainer (TTT)">15th - 16th June 2023 - DISC Train-the-Trainer (TTT)</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6 mb-12 d-none">
                                                <select name="referredby" required>
                                                    <option value="Google ads">Linkedin Paid</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                            </div>

                                            <div className="col-sm-6 mb-12 d-none">
                                                <input type="text" name="Business_Entity" value="Everything DiSC" required />
                                            </div>

                                            <div className="col-lg-12 mb-12">
                                                <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Submit" />
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

            <div className="rs-achievement style1 relative ptt-10 pbb-40">
                <div className="container">
                    <div className="row rs-vertical-middle">

                        <div className="col-lg-12 pr-0">
                            <div className='onlyshd'>
                                <p className='mall5 pcdd'><span className='themecolor font22'>Key Takeaways:</span></p>
                                <div className='rs-estimate'>
                                    <ul className="estimate-info mtt-5">
                                        <li>Live demonstration of facilitation kit and tool</li>
                                        <li>Earn a Globally acceptable certificate with Life-time Validity by WILEY.</li>
                                        <li>Analyse & understanding how people’s Behavior patterns help in leading them effectively, drive productivity across levels and get maximum results from them.</li>
                                        <li>Organize and drive employee reward & recognitions basis the facts and motivate the employees in ways that really matter to them.</li>
                                        <li>You can run facilitation within your organisation on various DISC profiles as DISC Sales, Workplace, Management, Work Of Leaders</li>
                                    </ul>
                                </div>

                                <p className='mall5 pcdd'><span className='themecolor font22 ptt-20'>Process of offline training:</span></p>
                                <div className='rs-estimate'>
                                    <ul className="estimate-info mtt-5">
                                        <li>Participants will receive pre-read material after registration</li>
                                        <li>They will do their online DISC Profile assessment.</li>
                                        <li>They will have an online assessment of pre-read material.</li>
                                        <li>Two days offline Classroom (2-hour session with a break) spread over 2 days.</li>
                                    </ul>
                                </div>

                                <p className='mall5 pcdd'><span className='themecolor font22'>Prerequisites</span></p>
                                <div className='rs-estimate'>
                                    <ul className="estimate-info mtt-5">
                                        <li>Pre-read material on registering</li>
                                        <li>Do your online DISC profiling</li>
                                        <li>Online assessment on pre-read with 70% qualification for classroom.</li>
                                    </ul>
                                </div>

                                <p className='mall5 pcdd'><span className='themecolor font22'>Post Workshop</span></p>
                                <p className='mall5 textjustify'>
                                    You’ll get a certification on completion of the process along with teach back session after a week on mutually agreed time and date using Podcast shared by the trainer.
                                </p>

                                <p className='textjustify'>
                                    <b>PS:</b> By registering for this event, you are committing to one week of self-directed DISC Core content, plus three weeks dedicated to DISC Workplace.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}