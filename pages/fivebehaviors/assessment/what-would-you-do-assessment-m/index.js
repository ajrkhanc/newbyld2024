import Head from 'next/head'
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";


export default function BrowseCourses() {
    const [modalOpen8, setModalOpen8] = React.useState(false);
    const submitF = async (event) => {
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        var q1a = "a";
        var q2a = "a";
        var q3a = "a";
        var q4a = "a";
        var q5a = "a";
        var q6a = "a";
        var q7a = "a";
        var q8a = "a";
        var q9a = "a";
        var q10a = "a";

        const q1 = event.target.q1.value;
        if (q1 == q1a) {
            var q1a1 = 1
        }
        else {
            var q1b1 = 1
        }

        console.log(q1a1)
        console.log(q1b1)

        const q2 = event.target.q2.value;
        if (q2 == q2a) {
            var q2a1 = 1
        }
        else {
            var q2b1 = 1
        }

        const q3 = event.target.q3.value;
        if (q3 == q3a) {
            var q3a1 = 1
        }
        else {
            var q3b1 = 1
        }

        const q4 = event.target.q4.value;
        if (q4 == q4a) {
            var q4a1 = 1
        }
        else {
            var q4b1 = 1
        }

        const q5 = event.target.q5.value;
        if (q5 == q5a) {
            var q5a1 = 1
        }
        else {
            var q5b1 = 1
        }

        const q6 = event.target.q6.value;
        if (q6 == q6a) {
            var q6a1 = 1
        }
        else {
            var q6b1 = 1
        }

        const q7 = event.target.q7.value;
        if (q7 == q7a) {
            var q7a1 = 1
        }
        else {
            var q7b1 = 1
        }

        const q8 = event.target.q8.value;
        if (q8 == q8a) {
            var q8a1 = 1
        }
        else {
            var q8b1 = 1
        }

        const q9 = event.target.q9.value;
        if (q9 == q9a) {
            var q9a1 = 1
        }
        else {
            var q9b1 = 1
        }

        const q10 = event.target.q10.value;
        if (q10 == q10a) {
            var q10a1 = 1
        }
        else {
            var q10b1 = 1
        }

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const organization = event.target.organization.value;
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-')



        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://clblogs.vercel.app/api/whatwouldyoudoassessment');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('q1a1=' + q1a1 +
            '&q1b1=' + q1b1 +
            '&q2a1=' + q2a1 +
            '&q2b1=' + q2b1 +
            '&q3a1=' + q3a1 +
            '&q3b1=' + q3b1 +
            '&q4a1=' + q4a1 +
            '&q4b1=' + q4b1 +
            '&q5a1=' + q5a1 +
            '&q5b1=' + q5b1 +
            '&q6a1=' + q6a1 +
            '&q6b1=' + q6b1 +
            '&q7a1=' + q7a1 +
            '&q7b1=' + q7b1 +
            '&q8a1=' + q8a1 +
            '&q8b1=' + q8b1 +
            '&q9a1=' + q9a1 +
            '&q9b1=' + q9b1 +
            '&q10a1=' + q10a1 +
            '&q10b1=' + q10b1 +
            '&name=' + name +
            '&email=' + email +
            '&phone=' + phone +
            '&organization=' + organization +
            '&newnameurl=' + newnameurl
        );

        xhr.onreadystatechange = function () {

            if (xhr.status == 200) {
                // document.getElementById("formreset").reset()
                document.getElementById("response").innerHTML = "Assessment Result"

                window.setTimeout(function () {
                    window.location.href = `/fivebehaviors/assessment/what-would-you-do-assessment-m/${newnameurl}`
                }, 1000);

            }
            else {
                document.getElementById("response").innerHTML = "You Have Submeted to go"
                setTimeout(function () {
                    document.getElementById("response").innerHTML = "";
                    document.getElementById("submitbuttonform").value = "Submit JobForm";
                }, 3000);
            }



        }

        var xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/76/feedback');
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

   
        var Assessment ="What Would You Do Assessment Form Marketing"
        xhttp.send("name=" + event.target.name.value +
        '&email=' + email +
        '&phone=' + phone +
        '&organization=' + organization+
        '&assessment=' + Assessment)

        xhr.onerror = function () {
            console.log('error');
        }
    };

    return (
        <>
            <Head>
                <title>What Would You Do Assessment | fivebehaviors</title>
        <link rel="canonical" href="https://byldgroup.com/fivebehaviors/assessment/what-would-you-do-assessment-m" />
                <meta name="description" content="The What Would You Do assessment reveals your natural tendencies when confronted with a gap in expectation or performance. See where you stand by taking this assessment." />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z80L406ZCP"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Z80L406ZCP');
          `,
                    }}
                />

<script
            dangerouslySetInnerHTML={{
              __html: `
              window.__lo_site_id = 328340;

(function() {
var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
 })();
          `,
            }}
          />
            </Head>
         <Modal
        className="toppc modal-lg popUpModal"
        toggle={() => setModalOpen8(!modalOpen8)}
        isOpen={modalOpen8}
        backdrop="static"
        keyboard={false}
      >
        <button
          aria-label="Close"
          className="close popcl"
          type="button"
          onClick={() => setModalOpen8(!modalOpen8)}
        >
          <span aria-hidden={true}>×</span>
        </button>

        {/* <ModalBody>
          <div class="row">
            <div class="col-md-8">
              <div class="text-center">
                <h4 class="text-danger">Register Now and Avail 10% OFF</h4>
                <p>
                  Register by December 31 on any course and get 10% OFF. First
                  20 registrations will get an extra 5% discount{" "}
                </p>

                <a class="btn btn-sm rounded-pill btn-danger" href="#">
                  See In-Person Courses
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <img
                class="img-fluid"
                src="../../classets/img/Human_In-Person-Teaching_Color.webp"
              ></img>
            </div>
          </div>
        </ModalBody> */}
      </Modal>
              
            <section className='assesmentbannnerbg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <h2>WHAT WOULD YOU DO?</h2>
                            <p>When others perform poorly, fail to keep their word, or behave badly, what we say and do can mean the difference between solving the problem and making matters worse. Take the assessment and discover how well you respond when others fail to meet expectations or violate trust.</p>
                            <p>Read each situation and select the answer that best reflects what you would MOST LIKELY DO. Your results will show on the next page.</p>
                        </div>
                        <div className='col-md-6'>
                            <div className='assesmentimgbanner'>
                                <img src="/5bassets/img/accountability-convo.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='assesmentpart2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12'>
                            <div className='dfdfdf'>
                                <form className='mlicss' onSubmit={submitF}>
                                    <div className='odd1 mform'>
                                        <p>1. You have been in a new role at work and want to make sure your first appraisal goes well. You have been informally asking your manager for feedback. However, all he says is “You’re doing well.” You:</p>
                                        <span><input type="radio" name="q1" value="a" id="q1a" tabindex="2" required /><label for="q1a">Meet with him so that you can formally explain why the feedback is so important to you.</label></span>
                                        <span><input type="radio" name="q1" value="b" id="q1b" tabindex="3" /><label for="q1b">Offer to send him a specific questionnaire that asks him to rate your strengths and weaknesses.</label></span>
                                    </div>

                                    <div className='even1 mform'>
                                        <p>2. Your direct report is a great tactical executor but not a good strategic thinker. She desperately wants a promotion for which you don’t think she is qualified. You:</p>
                                        <span><input type="radio" name="q2" value="a" id="q2a" tabindex="4" required /><label for="q2a">Let her know that in order to get promoted in the organization, she is going to need to be more strategic.</label></span>
                                        <span><input type="radio" name="q2" value="b" id="q2b" tabindex="5" /><label for="q2b">Offer to connect her with a mentor in the organization who is a good strategic thinker.</label></span>
                                    </div>

                                    <div className='odd1 mform'>
                                        <p>3. The IT department still hasn’t delivered the new computer you were expecting… last week. You:</p>
                                        <span><input type="radio" name="q3" value="a" id="q3a" tabindex="6" required="" /><label for="q3a">Call the IT department and let them know that if the computer doesn’t get to you by the end of the week, you will need to call the IT manager to let her know about your concern.</label></span>
                                        <span><input type="radio" name="q3" value="b" id="q3b" tabindex="7" /><label for="q3b">Call the IT department and ask what you can do to help them get you the computer you need.</label></span>
                                    </div>

                                    <div className='even1 mform'>
                                        <p>4. A direct report delivers most projects a few days late. You describe the gap and:</p>
                                        <span><input type="radio" name="q4" value="a" id="q4a" tabindex="8" required="" /><label for="q4a">Speak to him about the way this is damaging his credibility with others on the project team.</label></span>
                                        <span><input type="radio" name="q4" value="b" id="q4b" tabindex="9" /><label for="q4b">Share some tips that would help him manage his schedule more effectively.</label></span>
                                    </div>

                                    <div className='odd1 mform'>
                                        <p>5. You need a report from the marketing product manager in order to complete a product proposal. He hasn’t gotten it to you, despite promising that he would. You:</p>
                                        <span><input type="radio" name="q5" value="a" id="q5a" tabindex="10" required="" /><label for="q5a">Let him know that if you don’t get his insights into the proposal, your manager won’t be happy with you or with him.</label></span>
                                        <span><input type="radio" name="q5" value="b" id="q5b" tabindex="11" /><label for="q5b">Ask if it would be helpful for you to send an intern from your team over to help him out by crunching the data for him.</label></span>
                                    </div>

                                    <div className='even1 mform'>
                                        <p>6. Your manager is AWOL. She has been canceling meetings, missing one-on-one meetings, failing to dial in for conference calls, etc. You need her executive sponsorship on an important project. You:</p>
                                        <span><input type="radio" name="q6" value="a" id="q6a" tabindex="12" required="" /><label for="q6a">E-mail her your concerns that the project will fail without her engagement.</label></span>
                                        <span><input type="radio" name="q6" value="b" id="q6b" tabindex="13" /><label for="q6b">Approach her assistant and ask her to help coordinate and reschedule meetings with your manager.</label></span>
                                    </div>

                                    <div className='odd1 mform'>
                                        <p>7. Your teenage daughter comes home past curfew… for the fourth time this month. You:</p>
                                        <span><input type="radio" name="q7" value="a" id="q7a" tabindex="14" required="" /><label for="q7a">Explain your concerns and let her know this is a violation of trust.</label></span>
                                        <span><input type="radio" name="q7" value="b" id="q7b" tabindex="15" /><label for="q7b">Tell her that going forward you will text her thirty minutes before curfew to remind her to be home on time.</label></span>
                                    </div>

                                    <div className='even1 mform'>
                                        <p>8. Your manager keeps adding new requirements to an important project but doesn’t give your team more time or resources. You:</p>
                                        <span><input type="radio" name="q8" value="a" id="q8a" tabindex="16" required="" /><label for="q8a">Express your concerns that quality will likely suffer because of her additions.</label></span>
                                        <span><input type="radio" name="q8" value="b" id="q8b" tabindex="17" /><label for="q8b">Create and share a visual dashboard that helps clarify the trade-offs between cost, quality, and time each time a new requirement is added.</label></span>
                                    </div>

                                    <div className='odd1 mform'>
                                        <p>9. Your spouse isn’t pulling his/her weight at home—leaving you with the bulk of the household chores while he/she does other, more enjoyable things. You:</p>
                                        <span><input type="radio" name="q9" value="a" id="q9a" tabindex="18" required="" /><label for="q9a">Help your spouse see that his/her negligence is making your life harder.</label></span>
                                        <span><input type="radio" name="q9" value="b" id="q9b" tabindex="19" /><label for="q9b">Ask your spouse how you could make it easier for him or her to do the chores he or she committed to do.</label></span>
                                    </div>

                                    <div className='even1 mform'>
                                        <p>10. Your best friend has been going through a hard time in her personal life. You want to support her, but she is so negative that it is hard to be around her. You want to help her be more positive, so you:</p>
                                        <span><input type="radio" name="q10" value="a" id="q10a" tabindex="20" required="" /><label for="q10a">Give her a pep talk to help her see the positive aspects of her life.</label></span>
                                        <span><input type="radio" name="q10" value="b" id="q10b" tabindex="21" /><label for="q10b">Give her the contact information for a therapist another friend highly recommends.</label></span>
                                    </div>

                                    <div className='row inpuut'>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="organization" placeholder="Organization*" required />
                                        </div>

                                        <div className='col-sm-12 text-center'>
                                            <input type="submit" id='submitbuttonform' value="Submit" tabindex="22" class="assesmetmain" />
                                            <p class="feedbackcolor" id="response"></p>
                                        </div>
                                    </div>



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        <button onClick={() => setModalOpen8(!modalOpen8)} id="myButton" style={{ display: "none" }}>
                    modalevent
                  </button>
        </>
    )
}
