import Head from 'next/head'
import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function Home() {

    const [modalOpen8, setModalOpen8] = React.useState(false);

    const submitF = async (event) => {

        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        const q1 = event.target.i1.value;
        const q2 = event.target.i2.value;
        const q3 = event.target.i3.value;
        const q4 = event.target.i4.value;
        const q5 = event.target.i5.value;
        const q6 = event.target.i6.value;
        const q7 = event.target.i7.value;
        const q8 = event.target.i8.value;
        const q9 = event.target.i9.value;
        const q10 = event.target.i10.value;
        const q11 = event.target.i11.value;
        const q12 = event.target.i12.value;
        const q13 = event.target.i13.value;
        const q14 = event.target.i14.value;
        const q15 = event.target.i15.value;
        const q16 = event.target.i16.value;
        const q17 = event.target.i17.value;
        const q18 = event.target.i18.value;
        const q19 = event.target.i19.value;
        const q20 = event.target.i20.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const organization = event.target.organization.value;

        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-')

        var px = '%'
        var overall = parseInt(q1) + parseInt(q2) + parseInt(q1) + parseInt(q2) + parseInt(q3) +
            parseInt(q4) + parseInt(q5) + parseInt(q6) +
            parseInt(q7) + parseInt(q8) + parseInt(q9) +
            parseInt(q10) + parseInt(q11) + parseInt(q12) +
            parseInt(q13) + parseInt(q14) + parseInt(q15) +
            parseInt(q16) + parseInt(q17) + parseInt(q18) +
            parseInt(q19) + parseInt(q20) + px;

  


        var Capture = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + px;


        var Clarify = parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + px;
     

        var Organize = parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + px;
   

        var ReflectEngage = parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16) + px;
    

        var RenewThroughReview = parseInt(q17) + parseInt(q18) + parseInt(q19) + parseInt(q20) + px;
        





        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://clblogs.vercel.app/api/assesmentf');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('q1=' + q1 +
            '&q2=' + q2 +
            '&q3=' + q3 +
            '&q4=' + q4 +
            '&q5=' + q5 +
            '&q6=' + q6 +
            '&q7=' + q7 +
            '&q8=' + q8 +
            '&q9=' + q9 +
            '&q10=' + q10 +
            '&q11=' + q11 +
            '&q12=' + q12 +
            '&q13=' + q13 +
            '&q14=' + q14 +
            '&q15=' + q15 +
            '&q16=' + q16 +
            '&q17=' + q17 +
            '&q18=' + q18 +
            '&q19=' + q19 +
            '&q20=' + q20 +
            '&name=' + name +
            '&email=' + email +
            '&phone=' + phone +
            '&organization=' + organization +
            '&newnameurl=' + newnameurl


        );


        xhr.onreadystatechange = function () {

            if (xhr.status == 200) {
                // document.getElementById("formreset").reset()
                document.getElementById("response").innerHTML = "View Assessment"

                window.setTimeout(function () {
                    window.location.href = '/fivebehaviors/thank-you'
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


        var Assessment = "GTD Assessment Form Sales"
        xhttp.send("name=" + event.target.name.value +
            '&email=' + email +
            '&phone=' + phone +
            '&Overall-Score=' + overall +
            '&Capture=' + Capture +
            '&Clarify=' + Clarify +
            '&Organize=' + Organize +
            '&Reflect-and-Engage=' + ReflectEngage +
            '&Renew-Through-Review=' + RenewThroughReview)


        xhr.onerror = function () {
            console.log('error');
        }
    };


    return (
        <>
            <Head>
                <title>GTD Assessment | fivebehaviors</title>
                <meta name="description" content="The GTD Assessment is a twenty-question quiz that helps reveal some of your tendencies with managing workflow. See what you know and what you need to improve on." />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-W8Z3G86M64"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-W8Z3G86M64');
          `,
                    }}
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.__lo_site_id = 328341;

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
                            <h2>GTD ASSESSMENT</h2>
                            <p>Do you frequently feel overwhelmed, stressed, or out of control? Our research shows that reducing stress and increasing focus have little to do with how much you have going on and everything to do with how you manage everything going on.</p>
                            <p>Take the first step toward improving your productivity skills by completing the self-assessment below. This twenty-question quiz reveals your tendencies when it comes to managing your workflow and provides some tips for improvement.</p>
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
                                    <div class="odd1 mform gtda">
                                        <h4>1. I sometimes lose track of things I need to do, because I failed to write them down or record them.</h4>
                                        <input type="radio" name="i1" value="5" id="sdisagree1" /><label for="sdisagree1">Strongly Disagree</label>
                                        <input type="radio" name="i1" value="4" id="disagree1" /><label for="disagree1">Disagree</label>
                                        <input type="radio" name="i1" value="3" id="neutral1" /><label for="neutral1">Neutral</label>
                                        <input type="radio" name="i1" value="2" id="agree1" /><label for="agree1">Agree</label>
                                        <input type="radio" name="i1" value="1" id="sagree1" /><label for="sagree1">Strongly Agree</label>
                                    </div>

                                    <div class="even1 mform gtda">
                                        <h4>2. When assignments come in, I don’t always capture them on paper, on my calendar, or anywhere.</h4>
                                        <input type="radio" name="i2" value="5" id="sdisagree2" tabindex="6" required="required" /><label for="sdisagree2">Strongly Disagree</label>
                                        <input type="radio" name="i2" value="4" id="disagree2" tabindex="7" /><label for="disagree2">Disagree</label>
                                        <input type="radio" name="i2" value="3" id="neutral2" tabindex="8" /><label for="neutral2">Neutral</label>
                                        <input type="radio" name="i2" value="2" id="agree2" tabindex="9" /><label for="agree2">Agree</label>
                                        <input type="radio" name="i2" value="1" id="sagree2" tabindex="10" /><label for="sagree2">Strongly Agree</label>
                                    </div>

                                    <div class="odd1 mform gtda">
                                        <h4>3.	I don’t always document my To-Dos and tasks, and this causes me to forget that I need to do them.</h4>
                                        <input type="radio" name="i3" value="5" id="sdisagree3" tabindex="11" required="required" /><label for="sdisagree3">Strongly Disagree</label>
                                        <input type="radio" name="i3" value="4" id="disagree3" tabindex="12" /><label for="disagree3">Disagree</label>
                                        <input type="radio" name="i3" value="3" id="neutral3" tabindex="13" /><label for="neutral3">Neutral</label>
                                        <input type="radio" name="i3" value="2" id="agree3" tabindex="14" /><label for="agree3">Agree</label>
                                        <input type="radio" name="i3" value="1" id="sagree3" tabindex="15" /><label for="sagree3">Strongly Agree</label>
                                    </div>

                                    <div class="even1 mform gtda">
                                        <h4>4.	At times, I feel stressed because I know there are things I need to do, but I can’t remember what they are.</h4>
                                        <input type="radio" name="i4" value="5" id="sdisagree4" tabindex="16" required="required" /><label for="sdisagree4">Strongly Disagree</label>
                                        <input type="radio" name="i4" value="4" id="disagree4" tabindex="17" /><label for="disagree4">Disagree</label>
                                        <input type="radio" name="i4" value="3" id="neutral4" tabindex="18" /><label for="neutral4">Neutral</label>
                                        <input type="radio" name="i4" value="2" id="agree4" tabindex="19" /><label for="agree4">Agree</label>
                                        <input type="radio" name="i4" value="1" id="sagree4" tabindex="20" /><label for="sagree4">Strongly Agree</label>
                                    </div>

                                    <div class="odd1 mform gtda">
                                        <h4>5.	Sometimes I glance at an email, feel a bit overwhelmed, and leave it for later.</h4>
                                        <input type="radio" name="i5" value="5" id="sdisagree5" tabindex="21" required="required" /><label for="sdisagree5">Strongly Disagree</label>
                                        <input type="radio" name="i5" value="4" id="disagree5" tabindex="22" /><label for="disagree5">Disagree</label>
                                        <input type="radio" name="i5" value="3" id="neutral5" tabindex="23" /><label for="neutral5">Neutral</label>
                                        <input type="radio" name="i5" value="2" id="agree5" tabindex="24" /><label for="agree5">Agree</label>
                                        <input type="radio" name="i5" value="1" id="sagree5" tabindex="25" /><label for="sagree5">Strongly Agree</label>
                                    </div>

                                    <div class="even1 mform gtda">
                                        <h4>6.	It’s not uncommon for me to revisit an email multiple times because I haven’t taken the time to fully decide what to do with it.</h4>
                                        <input type="radio" name="i6" value="5" id="sdisagree6" tabindex="26" required="required" /><label for="sdisagree6">Strongly Disagree</label>
                                        <input type="radio" name="i6" value="4" id="disagree6" tabindex="27" /><label for="disagree6">Disagree</label>
                                        <input type="radio" name="i6" value="3" id="neutral6" tabindex="28" /><label for="neutral6">Neutral</label>
                                        <input type="radio" name="i6" value="2" id="agree6" tabindex="29" /><label for="agree6">Agree</label>
                                        <input type="radio" name="i6" value="1" id="sagree6" tabindex="30" /><label for="sagree6">Strongly Agree</label>
                                    </div>

                                    <div class="odd1 mform gtda">
                                        <h4>7.	I often scan through all my emails looking for the ones that seem urgent or important, and leave the others for later.</h4>
                                        <input type="radio" name="i7" value="5" id="sdisagree7" tabindex="31" required="required" /><label for="sdisagree7">Strongly Disagree</label>
                                        <input type="radio" name="i7" value="4" id="disagree7" tabindex="32" /><label for="disagree7">Disagree</label>
                                        <input type="radio" name="i7" value="3" id="neutral7" tabindex="33" /><label for="neutral7">Neutral</label>
                                        <input type="radio" name="i7" value="2" id="agree7" tabindex="34" /><label for="agree7">Agree</label>
                                        <input type="radio" name="i7" value="1" id="sagree7" tabindex="35" /><label for="sagree7">Strongly Agree</label>
                                    </div>

                                    <div class="even1 mform gtda">
                                        <h4>8.	My inbox has become more of a storage bin than a place where things come and are quickly resolved.</h4>
                                        <input type="radio" name="i8" value="5" id="sdisagree8" tabindex="81" required="required" /><label for="sdisagree8">Strongly Disagree</label>
                                        <input type="radio" name="i8" value="4" id="disagree8" tabindex="82" /><label for="disagree8">Disagree</label>
                                        <input type="radio" name="i8" value="3" id="neutral8" tabindex="83" /><label for="neutral8">Neutral</label>
                                        <input type="radio" name="i8" value="2" id="agree8" tabindex="84" /><label for="agree8">Agree</label>
                                        <input type="radio" name="i8" value="1" id="sagree8" tabindex="85" /><label for="sagree8">Strongly Agree</label>
                                    </div>

                                    <div class="odd1 mform gtda">
                                        <h4>9.	Sometimes I’m startled by my calendar notifications, because they pop up when I am doing other things.</h4>
                                        <input type="radio" name="i9" value="5" id="sdisagree9" tabindex="86" required="required" /><label for="sdisagree9">Strongly Disagree</label>
                                        <input type="radio" name="i9" value="4" id="disagree9" tabindex="87" /><label for="disagree9">Disagree</label>
                                        <input type="radio" name="i9" value="3" id="neutral9" tabindex="88" /><label for="neutral9">Neutral</label>
                                        <input type="radio" name="i9" value="2" id="agree9" tabindex="89" /><label for="agree9">Agree</label>
                                        <input type="radio" name="i9" value="1" id="sagree9" tabindex="90" /><label for="sagree9">Strongly Agree</label>
                                    </div>

                                    <div class="even1 mform gtda">
                                        <h4>10.	At home, I find myself worrying about the things I need to remember to do the next day at work.</h4>
                                        <input type="radio" name="i10" value="5" id="sdisagree10" tabindex="91" required="required" /><label for="sdisagree10">Strongly Disagree</label>
                                        <input type="radio" name="i10" value="4" id="disagree10" tabindex="92" /><label for="disagree10">Disagree</label>
                                        <input type="radio" name="i10" value="3" id="neutral10" tabindex="93" /><label for="neutral10">Neutral</label>
                                        <input type="radio" name="i10" value="2" id="agree10" tabindex="94" /><label for="agree10">Agree</label>
                                        <input type="radio" name="i10" value="1" id="sagree10" tabindex="95" /><label for="sagree10">Strongly Agree</label>
                                    </div>

                                    <div class="odd1 mform gtda">
                                        <h4>11.	I have trouble letting go of To-Dos, because I’m not fully confident I’ll remember  them or be reminded of them at the right time.</h4>
                                        <input type="radio" name="i11" value="5" id="sdisagree11" tabindex="101" required="required" /><label for="sdisagree11">Strongly Disagree</label>
                                        <input type="radio" name="i11" value="4" id="disagree11" tabindex="102" /><label for="disagree11">Disagree</label>
                                        <input type="radio" name="i11" value="3" id="neutral11" tabindex="103" /><label for="neutral11">Neutral</label>
                                        <input type="radio" name="i11" value="2" id="agree11" tabindex="104" /><label for="agree11">Agree</label>
                                        <input type="radio" name="i11" value="1" id="sagree11" tabindex="105" /><label for="sagree11">Strongly Agree</label>
                                    </div>

                                    <div class="even1 mform gtda">
                                        <h4>12.	I regularly stress over remembering important tasks or events.</h4>
                                        <input type="radio" name="i12" value="5" id="sdisagree12" tabindex="106" required="required" /><label for="sdisagree12">Strongly Disagree</label>
                                        <input type="radio" name="i12" value="4" id="disagree12" tabindex="107" /><label for="disagree12">Disagree</label>
                                        <input type="radio" name="i12" value="3" id="neutral12" tabindex="108" /><label for="neutral12">Neutral</label>
                                        <input type="radio" name="i12" value="2" id="agree12" tabindex="109" /><label for="agree12">Agree</label>
                                        <input type="radio" name="i12" value="1" id="sagree12" tabindex="110" /><label for="sagree12">Strongly Agree</label>
                                    </div>

                                    <div class="odd1 mform gtda">
                                        <h4>13.	I often feel as if I’m working really hard, but not getting the important jobs completed.</h4>
                                        <input type="radio" name="i13" value="5" id="sdisagree13" tabindex="111" required="required" /><label for="sdisagree13">Strongly Disagree</label>
                                        <input type="radio" name="i13" value="4" id="disagree13" tabindex="112" /><label for="disagree13">Disagree</label>
                                        <input type="radio" name="i13" value="3" id="neutral13" tabindex="113" /><label for="neutral13">Neutral</label>
                                        <input type="radio" name="i13" value="2" id="agree13" tabindex="114" /><label for="agree13">Agree</label>
                                        <input type="radio" name="i13" value="1" id="sagree13" tabindex="115" /><label for="sagree13">Strongly Agree</label>
                                    </div>

                                    <div class="even1 mform gtda">
                                        <h4>14.	It’s common for me to feel overly busy, and yet uneasy about whether I’m getting the right stuff done.</h4>
                                        <input type="radio" name="i14" value="5" id="sdisagree14" tabindex="116" required="required" /><label for="sdisagree14">Strongly Disagree</label>
                                        <input type="radio" name="i14" value="4" id="disagree14" tabindex="117" /><label for="disagree14">Disagree</label>
                                        <input type="radio" name="i14" value="3" id="neutral14" tabindex="118" /><label for="neutral14">Neutral</label>
                                        <input type="radio" name="i14" value="2" id="agree14" tabindex="119" /><label for="agree14">Agree</label>
                                        <input type="radio" name="i14" value="1" id="sagree14" tabindex="120" /><label for="sagree14">Strongly Agree</label>
                                    </div>

                                    <div class="odd1 mform gtda">
                                        <h4>15.	I often worry about the priorities I’m not working on, even though I’m putting in a lot of hours and getting a lot done.</h4>
                                        <input type="radio" name="i15" value="5" id="sdisagree15" tabindex="126" required="required" /><label for="sdisagree15">Strongly Disagree</label>
                                        <input type="radio" name="i15" value="4" id="disagree15" tabindex="116" /><label for="disagree15">Disagree</label>
                                        <input type="radio" name="i15" value="3" id="neutral15" tabindex="117" /><label for="neutral15">Neutral</label>
                                        <input type="radio" name="i15" value="2" id="agree15" tabindex="129" /><label for="agree15">Agree</label>
                                        <input type="radio" name="i15" value="1" id="sagree15" tabindex="130" /><label for="sagree15">Strongly Agree</label>
                                    </div>

                                    <div class="even1 mform gtda">
                                        <h4>16.	I’m working as hard as I can, but there are times when I’m troubled that I might not be working on the right priorities.</h4>
                                        <input type="radio" name="i16" value="5" id="sdisagree16" tabindex="140" required="required" /><label for="sdisagree16">Strongly Disagree</label>
                                        <input type="radio" name="i16" value="4" id="disagree16" tabindex="141" /><label for="disagree16">Disagree</label>
                                        <input type="radio" name="i16" value="3" id="neutral16" tabindex="142" /><label for="neutral16">Neutral</label>
                                        <input type="radio" name="i16" value="2" id="agree16" tabindex="143" /><label for="agree16">Agree</label>
                                        <input type="radio" name="i16" value="1" id="sagree16" tabindex="144" /><label for="sagree16">Strongly Agree</label>
                                    </div>

                                    <div class="odd1 mform gtda">
                                        <h4>17.	At least once a week, I take time to pause, clear my mind, update my accomplishments, and take stock of where I stand.</h4>
                                        <input type="radio" name="i17" value="1" id="sdisagree17" tabindex="145" required /><label for="sdisagree17">Strongly Disagree</label>
                                        <input type="radio" name="i17" value="2" id="disagree17" tabindex="146" /><label for="disagree17">Disagree</label>
                                        <input type="radio" name="i17" value="3" id="neutral17" tabindex="147" /><label for="neutral17">Neutral</label>
                                        <input type="radio" name="i17" value="4" id="agree17" tabindex="148" /><label for="agree17">Agree</label>
                                        <input type="radio" name="i17" value="5" id="sagree17" tabindex="149" /><label for="sagree17">Strongly Agree</label>
                                    </div>

                                    <div class="even1 mform gtda">
                                        <h4>18.	I regularly review the connection (or lack of connection) between my daily tasks and my high-level priorities.</h4>
                                        <input type="radio" name="i18" value="1" id="sdisagree18" tabindex="141" required /><label for="sdisagree18">Strongly Disagree</label>
                                        <input type="radio" name="i18" value="2" id="disagree18" tabindex="142" /><label for="disagree18">Disagree</label>
                                        <input type="radio" name="i18" value="3" id="neutral18" tabindex="143" /><label for="neutral18">Neutral</label>
                                        <input type="radio" name="i18" value="4" id="agree18" tabindex="144" /><label for="agree18">Agree</label>
                                        <input type="radio" name="i18" value="5" id="sagree18" tabindex="145" /><label for="sagree18">Strongly Agree</label>
                                    </div>

                                    <div class="odd1 mform gtda">
                                        <h4>19.	Every few days I step back and evaluate the connection between my actions and my long-term goals.</h4>
                                        <input type="radio" name="i19" value="1" id="sdisagree19" tabindex="151" required /><label for="sdisagree19">Strongly Disagree</label>
                                        <input type="radio" name="i19" value="2" id="disagree19" tabindex="152" /><label for="disagree19">Disagree</label>
                                        <input type="radio" name="i19" value="3" id="neutral19" tabindex="153" /><label for="neutral19">Neutral</label>
                                        <input type="radio" name="i19" value="4" id="agree19" tabindex="154" /><label for="agree19">Agree</label>
                                        <input type="radio" name="i19" value="5" id="sagree19" tabindex="155" /><label for="sagree19">Strongly Agree</label>
                                    </div>

                                    <div class="even1 mform gtda">
                                        <h4>20.	I regularly take time to consider my longer-term goals.</h4>
                                        <input type="radio" name="i20" value="1" id="sdisagree20" tabindex="156" required /><label for="sdisagree20">Strongly Disagree</label>
                                        <input type="radio" name="i20" value="2" id="disagree20" tabindex="157" /><label for="disagree20">Disagree</label>
                                        <input type="radio" name="i20" value="3" id="neutral20" tabindex="158" /><label for="neutral20">Neutral</label>
                                        <input type="radio" name="i20" value="4" id="agree20" tabindex="159" /><label for="agree20">Agree</label>
                                        <input type="radio" name="i20" value="5" id="sagree20" tabindex="160" /><label for="sagree20">Strongly Agree</label>
                                    </div>

                                    <div className='row inpuut'>
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>

                                        <div className="col-sm-6 mb-12 d-none">
                                            <input className='form-control' type="text" value="Null" name="organization" placeholder="Organization*" required />
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
