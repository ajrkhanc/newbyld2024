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
        xhttp.open("Post", 'https://byldgroup.in/everythingdisc/wp-json/contact-form-7/v1/contact-forms/74/feedback');
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
                <title>Everything DISC Productive Conflict Webinar - Everything DiSC</title>
                <meta name="description" content="DiSC® Productive Conflict helps learners improve self-awareness around conflict behavior." />
            </Head>

            <div className="rs-services">
                <div className="container-full">
                    <div className="row y-middle">
                        <div className="col-lg-12">
                            <img className="img100" src="/edassets/img/banner/EDP-banner.jpg" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="rs-achievement style1 relative ptt-50 pbb-40">
                <div className="container">
                    <div className="row rs-vertical-middle">

                        <div className="col-lg-6 pr-0">
                            
                            <div className='onlyshd pb-30'>
                            <div className="sec-title3 mbb-5 text-left">
                                        <h4 className="countertoph2 text-left font24">Everything DiSC Productive Conflict</h4>
                                    </div>
                                <p className='mall5 ptt-5 pbb-20'>
                                DiSC<sup>®</sup> Productive Conflict helps learners improve self-awareness around conflict behavior. Rather than focus on a step-by-step process for conflict resolution, the program helps learners curb destructive behaviors so that conflict may become more productive, ultimately improving workplace results and relationships.
                                </p>
                                
                                <p className='mall5'><span className='themecolor'>Key takeaways:</span></p>
                                <div className='rs-estimate pbb-100'>
                                    <ul className="estimate-info mtt-5">
                                        <li>Use the power of DiSC<sup>®</sup> to understand your behavior</li>
                                        <li>Recognize your destructive conflict responses</li>
                                        <li>Choose to change your response to conflict</li>
                                    </ul>
                                </div>
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
                                                    <option value="July 5th 2023, DiSC Productive Conflict">July 5th 2023, DiSC Productive Conflict</option>
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
