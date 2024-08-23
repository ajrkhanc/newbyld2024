import Head from 'next/head'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function EDSalesWorkshop() {

    const EDttt = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/215/feedback');
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
                <title>Everything DiSC Work of Leaders Webinar - Everything DiSC</title>
                <meta name="description" content="We invite you for a complimentary webinar and learn the strategies of Everything DiSC Work of Leaders®. Learn how to create impactful leaders with one combined model of leadership- Alignment, Vision, and Execution." />
            </Head>

            <div className="rs-services">
                <div className="container-full">
                    <div className="row y-middle">
                        <div className="col-lg-12">
                            <img className="img100" src="/edassets/img/wol-lp-banner.jpg" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="rs-achievement style1 relative ptt-50 pbb-40">
                <div className="container">
                    <div className="row rs-vertical-middle">

                        <div className="col-lg-6 pr-0">
                            <div className='onlyshd pb-30'>
                                <p className='mall5 ptt-30'>
                                We invite you for a complimentary webinar and learn the strategies of Everything DiSC Work of Leaders®.
                                </p>
                                <p className='mall5'>
                                Learn how to create impactful leaders with one combined model of leadership- Alignment, Vision, and Execution.
                                </p>
                                <p className='mall5'><span className='themecolor'>We bring you an opportunity to access the following:</span></p>
                                <div className='rs-estimate'>
                                    <ul className="estimate-info mtt-5">
                                        <li>Best practices from 300 experts in over 150 organizations</li>
                                        <li>Important work of the most prominent scholars</li>
                                        <li>Four+ years of additional research and development</li>
                                    </ul>
                                </div>

                                <p className='mall5'><span className='themecolor'>Post this webinar you will be able to learn:</span></p>
                                <div className='rs-estimate'>
                                    <ul className="estimate-info mtt-5">
                                        <li>A common language to understand one another and work better together</li>
                                        <li>Act as a springboard for conversation and team building</li>
                                        <li>An actionable path toward more effective leadership</li>
                                        <li>Strategies to reduce conflict and avoid misunderstandings</li>
                                    </ul>
                                </div>
                                <p>We are sure you will come out of this webinar equipped with techniques of converting a conflict into a productive conflict by understanding the DiSC Styles, and how to manage response in conflict situation.</p>
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

                                            <div className="col-sm-6 mb-12">
                                                <select name="slot" required>
                                                    <option value="">Pick up any Slot*</option>
                                                    <option value="May 24th, 2023 Everything DiSC Work of Leaders Webinar">May 24th, 2023 Everything DiSC Work of Leaders Webinar</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <select name="referredby" required>
                                                    <option value="">Referred By</option>
                                                    <option value="Email">Email</option>
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


        </>
    )
}