import Head from 'next/head'
import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function BrowseCourses() {

  const [modalOpen8, setModalOpen8] = React.useState(false);

  const submitF = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";

    var q1a = event.target.q1a.value;
    var q1b = event.target.q1b.value;
    var q1c = event.target.q1c.value;
    var q1d = event.target.q1d.value;

    var q2a = event.target.q2a.value;
    var q2b = event.target.q2b.value;
    var q2c = event.target.q2c.value;
    var q2d = event.target.q2d.value;

    var q3a = event.target.q3a.value;
    var q3b = event.target.q3b.value;
    var q3c = event.target.q3c.value;
    var q3d = event.target.q3d.value;

    var q4a = event.target.q4a.value;
    var q4b = event.target.q4b.value;
    var q4c = event.target.q4c.value;
    var q4d = event.target.q4d.value;

    var q5a = event.target.q5a.value;
    var q5b = event.target.q5b.value;
    var q5c = event.target.q5c.value;
    var q5d = event.target.q5d.value;

    var q6a = event.target.q6a.value;
    var q6b = event.target.q6b.value;
    var q6c = event.target.q6c.value;
    var q6d = event.target.q6d.value;

    var q7a = event.target.q7a.value;
    var q7b = event.target.q7b.value;
    var q7c = event.target.q7c.value;
    var q7d = event.target.q7d.value;

    var q8a = event.target.q8a.value;
    var q8b = event.target.q8b.value;
    var q8c = event.target.q8c.value;
    var q8d = event.target.q8d.value;



    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const organization = event.target.organization.value;
    var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
    nameurl = nameurl.toLowerCase();
    const newnameurl = nameurl.split(' ').join('-')



    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://clblogs.vercel.app/api/influencer-assessment');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('q1a=' + q1a +
      '&q1b=' + q1b +
      '&q1c=' + q1c +
      '&q1d=' + q1d +
      '&q2a=' + q2a +
      '&q2b=' + q2b +
      '&q2c=' + q2c +
      '&q2d=' + q2d +
      '&q3a=' + q3a +
      '&q3b=' + q3b +
      '&q3c=' + q3c +
      '&q3d=' + q3d +
      '&q4a=' + q4a +
      '&q4b=' + q4b +
      '&q4c=' + q4c +
      '&q4d=' + q4d +
      '&q5a=' + q5a +
      '&q5b=' + q5b +
      '&q5c=' + q5c +
      '&q5d=' + q5d +
      '&q6a=' + q6a +
      '&q6b=' + q6b +
      '&q6c=' + q6c +
      '&q6d=' + q6d +
      '&q7a=' + q7a +
      '&q7b=' + q7b +
      '&q7c=' + q7c +
      '&q7d=' + q7d +
      '&q8a=' + q8a +
      '&q8b=' + q8b +
      '&q8c=' + q8c +
      '&q8d=' + q8d +
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
          window.location.href = `/fivebehaviors/assessment/influencer-assessment-s/${newnameurl}`
        }, 1000);

      }
      else {
        document.getElementById("response").innerHTML = "You Have Submeted to go"
        setTimeout(function () {
          document.getElementById("response").innerHTML = "";
          document.getElementById("submitbuttonform").value = "Submit JobForm";
        }, 3000);
      }


      var xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/76/feedback');
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

   
        var Assessment ="Influecer Assessment Form Sales"
        xhttp.send("name=" + event.target.name.value +
        '&email=' + email +
        '&phone=' + phone +
        '&organization=' + organization+
        '&assessment=' + Assessment)



    }

    xhr.onerror = function () {
      console.log('error');
    }
  };

  return (
    <>
      <Head>
        <title>Influencer Assessment | fivebehaviors</title>
        <meta name="description" content="The Influencer Assessment is used to determine your influence skills. The questions examine methods you use to lead and help others change. Complete the quiz to see your level of influence." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GF55PKMMPH"></script>
        <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-GF55PKMMPH');
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
              <h2>ARE YOU AN INFLUENTIAL LEADER?</h2>
              <p>The greatest capacity we possess is the ability to influence behavior—our own and others’. And yet our ability to influence often evades us when we need it most. Never mind charisma or charm, discover whether you have the skills of influence with this short assessment.</p>
              <img className='widd' src='/5bassets/img/clf.png'/>
            </div>
            <div className='col-md-6'>
              <div className='assesmentimgbanner'>
                <img src="/5bassets/img/influencer-assessment.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='assesmentpart2'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div>
                <h2>ASSESSMENT</h2>
                <h5>INSTRUCTION</h5>
                <p>Think of an influence challenge you've faced or now face and answer the questions with that in mind. Need an example?</p>
                <h5>Someone resistant to your suggestions.</h5>
                <p>"My son is living in my basement and refuses to do something with his life."</p>
                <h5>A group that won't change.</h5>
                <p>"My teammates lose track of leads after tradeshows and won't adopt the new process for tracking them."</p>
                <h5>An organization in a rut.</h5>
                <p>"Our company does not share information and resources across teams. We act as though we are in silos."</p>
              </div>
            </div>
            <div className='col-md-6'>
              <form onSubmit={submitF}>
                <div className='formsbarassesment'>
                  <h4>1. Focus and Measure</h4>
                  <ol>
                    <li>When I try to influence change, I make sure everyone understands the results we're trying to achieve and is committed to achieving them.</li>
                    <span>
                      <input type="radio" name="q1a" value="1" id="sdisagree1" required />
                      <label for="sdisagree1">Strongly Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q1a" value="2" id="disagree1" />
                      <label for="disagree1">Somewhat Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q1a" value="3" id="neutral1" />
                      <label for="neutral1">Neutral</label>
                    </span>
                    <span>
                      <input type="radio" name="q1a" value="4" id="agree1" tabindex="4" />
                      <label for="agree1">Somewhat Agree</label>
                    </span>
                    <span>
                      <input type="radio" name="q1a" value="5" id="sagree1" tabindex="5" />
                      <label for="sagree1">Strongly Agree</label>
                    </span>
                    <li>To help others stay focused and committed, I frequently share measures that demonstrate our progress.</li>
                    <span>
                      <input type="radio" name="q1b" value="1" id="sdisagree2" required />
                      <label for="sdisagree2">Strongly Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q1b" value="2" id="disagree2" />
                      <label for="disagree2">Somewhat Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q1b" value="3" id="neutral2" tabindex="8" />
                      <label for="neutral2">Neutral</label>
                    </span>
                    <span>
                      <input type="radio" name="q1b" value="4" id="agree2" tabindex="9" />
                      <label for="agree2">Somewhat Agree</label>
                    </span>
                    <span>
                      <input type="radio" name="q1b" value="5" id="sagree2" tabindex="10" />
                      <label for="sagree2">Strongly Agree</label>
                    </span>
                    <li>To prevent people from falling into old, unhealthy routines, I remove or modify measures that encourage the wrong behaviors.</li>
                    <span>
                      <input type="radio" name="q1c" value="1" id="sdisagree3" tabindex="11" required />
                      <label for="sdisagree3">Strongly Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q1c" value="2" id="disagree3" tabindex="12" />
                      <label for="disagree3">Somewhat Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q1c" value="3" id="neutral3" tabindex="13" />
                      <label for="neutral3">Neutral</label>
                    </span>
                    <span>
                      <input type="radio" name="q1c" value="4" id="agree3" tabindex="14" />
                      <label for="agree3">Somewhat Agree</label>
                    </span>
                    <span>
                      <input type="radio" name="q1c" value="5" id="sagree3" tabindex="15" />
                      <label for="sagree3">Strongly Agree</label>
                    </span>
                    <li>To achieve challenging goals, I help others break long-term goals into daily or weekly milestones that encourage steady progress.</li>
                    <span>
                      <input type="radio" name="q1d" value="1" id="sdisagree4" />
                      <label for="sdisagree4">Strongly Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q1d" value="2" id="disagree4" tabindex="17" />
                      <label for="disagree4">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q1d" value="3" id="neutral4" tabindex="18" />
                      <label for="neutral4">Neutral</label>
                    </span>
                    <span>
                      <input type="radio" name="q1d" value="4" id="agree4" tabindex="19" />
                      <label for="agree4">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q1d" value="5" id="sagree4" tabindex="20" />
                      <label for="sagree4">Strongly Agree</label>
                    </span>
                  </ol>
                  <h4>2. Find Vital Behaviors</h4>
                  <ol>
                    <li>When trying to influence others, I specify the behaviors people need to adopt or change rather than emphasizing vague values or generic qualities I hope they'll adopt.</li>
                    <span>
                      <input type="radio" name="q2a" value="1" id="sdisagree6" required />
                      <label for="sdisagree6">Strongly Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q2a" value="2" id="disagree6" tabindex="27" />
                      <label for="disagree6">Somewhat Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q2a" value="3" id="neutral6" tabindex="28" />
                      <label for="neutral6">Neutral</label>
                    </span>
                    <span>
                      <input type="radio" name="q2a" value="4" id="agree6" tabindex="29" />
                      <label for="agree6">Somewhat Agree</label>
                    </span>
                    <span>
                      <input type="radio" name="q2a" value="5" id="sagree6" tabindex="30" />
                      <label for="sagree6">Strongly Agree</label>
                    </span>
                    <li>I make sure we focus on the two or three behaviors that will have the greatest impact on results.</li>
                    <span>
                      <input type="radio" name="q2b" value="1" id="sdisagree7" tabindex="31" required />
                      <label for="sdisagree7">Strongly Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q2b" value="2" id="disagree7" tabindex="32" />
                      <label for="disagree7">Somewhat Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q2b" value="3" id="neutral7" tabindex="33" />
                      <label for="neutral7">Neutral</label>
                    </span>
                    <span>
                      <input type="radio" name="q2b" value="4" id="agree7" tabindex="34" />
                      <label for="agree7">Somewhat Agree</label>
                    </span>
                    <span>
                      <input type="radio" name="q2b" value="5" id="sagree7" tabindex="35" />
                      <label for="sagree7">Strongly Agree</label>
                    </span>
                    <li>I check to ensure everyone agrees to adopt the two or three behaviors that will help us achieve the results we want.</li>
                    <span>
                      <input type="radio" name="q2c" value="1" id="sdisagree8" tabindex="36" required="required" />
                      <label for="sdisagree8">Strongly Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q2c" value="2" id="disagree8" tabindex="37" />
                      <label for="disagree8">Somewhat Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q2c" value="3" id="neutral8" tabindex="38" />
                      <label for="neutral8">Neutral</label>
                    </span>
                    <span>
                      <input type="radio" name="q2c" value="4" id="agree8" tabindex="39" />
                      <label for="agree8">Somewhat Agree</label>
                    </span>
                    <span>
                      <input type="radio" name="q2c" value="5" id="sagree8" tabindex="40" />
                      <label for="sagree8">Strongly Agree</label>
                    </span>
                    <li>I frequently track how well we're adopting these key behaviors, as well as results, to see if my influence efforts are working.</li>
                    <span><input type="radio" name="q2d" value="1" id="sdisagree9" tabindex="41" required="required" />
                      <label for="sdisagree9">Strongly Disagree</label>
                    </span>
                    <span>
                      <input type="radio" name="q2d" value="2" id="disagree9" tabindex="42" /><label for="disagree9">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q2d" value="3" id="neutral9" tabindex="43" /><label for="neutral9">Neutral</label></span>
                    <span>
                      <input type="radio" name="q2d" value="4" id="agree9" tabindex="44" /><label for="agree9">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q2d" value="5" id="sagree9" tabindex="45" /><label for="sagree9">Strongly Agree</label></span>
                  </ol>
                  <h4>3. Help Them Love What They Hate</h4>
                  <ol>
                    <li>Whenever possible, I invite people to try out and test new things rather than use authority or pressure to compel them.</li>
                    <span>
                      <input type="radio" name="q3a" value="1" id="sdisagree11" tabindex="51" required="required" />
                      <label for="sdisagree11">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q3a" value="2" id="disagree11" tabindex="52" /><label for="disagree11">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q3a" value="3" id="neutral11" tabindex="53" /><label for="neutral11">Neutral</label></span>
                    <span>
                      <input type="radio" name="q3a" value="4" id="agree11" tabindex="54" /><label for="agree11">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q3a" value="5" id="sagree11" tabindex="55" /><label for="sagree11">Strongly Agree</label></span>
                    <li>I go beyond business and economic arguments to help people see the moral and ethical imperatives that call for change.</li>
                    <span><input type="radio" name="q3b" value="1" id="sdisagree12" tabindex="56" required="required" title="Please choose one of these answers." />
                      <label for="sdisagree12">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q3b" value="2" id="disagree12" tabindex="57" /><label for="disagree12">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q3b" value="3" id="neutral12" tabindex="58" /><label for="neutral12">Neutral</label></span>
                    <span>
                      <input type="radio" name="q3b" value="4" id="agree12" tabindex="59" /><label for="agree12">Somewhat Agree</label></span>
                    <span><input type="radio" name="q3b" value="5" id="sagree12" tabindex="60" /><label for="sagree12">Strongly Agree</label></span>
                    <li>I avoid giving lectures or logical arguments for why others should change and instead tell compelling stories that illustrate the human and moral reasons that call for change.</li>
                    <span>
                      <input type="radio" name="q3c" value="1" id="sdisagree13" tabindex="61" required="required" title="Please choose one of these answers." /><label for="sdisagree13">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q3c" value="2" id="disagree13" tabindex="62" /><label for="disagree13">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q3c" value="3" id="neutral13" tabindex="63" /><label for="neutral13">Neutral</label></span>
                    <span>
                      <input type="radio" name="q3c" value="4" id="agree13" tabindex="64" /><label for="agree13">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q3c" value="5" id="sagree13" tabindex="65" /><label for="sagree13">Strongly Agree</label></span>
                    <li>I find creative ways to engage people in direct experiences (field trips, pilot programs, simulations, etc.) that will help them feel differently about the need for change.</li>
                    <span>
                      <input type="radio" name="q3d" value="1" id="sdisagree14" tabindex="66" required="required" title="Please choose one of these answers." /><label for="sdisagree14">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q3d" value="2" id="disagree14" tabindex="67" /><label for="disagree14">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q3d" value="3" id="neutral14" tabindex="68" /><label for="neutral14">Neutral</label></span>
                    <span>
                      <input type="radio" name="q3d" value="4" id="agree14" tabindex="69" /><label for="agree14">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q3d" value="5" id="sagree14" tabindex="70" /><label for="sagree14">Strongly Agree</label></span>
                  </ol>
                  <h4>4. Help Them Do What They Can't</h4>
                  <ol>
                    <li>I share hints, tips, practice opportunities, and take time to coach those I am trying to help change.</li>
                    <span>
                      <input type="radio" name="q4a" value="1" id="sdisagree16" tabindex="76" required="required" title="Please choose one of these answers." /><label for="sdisagree16">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q4a" value="2" id="disagree16" tabindex="77" /><label for="disagree16">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q4a" value="3" id="neutral16" tabindex="78" /><label for="neutral16">Neutral</label></span>
                    <span>
                      <input type="radio" name="q4a" value="4" id="agree16" tabindex="79" /><label for="agree16">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q4a" value="5" id="sagree16" tabindex="80" /><label for="sagree16">Strongly Agree</label></span>
                    <li>I invest as much time and effort in helping people develop the skills and abilities they need to succeed as I do in trying to motivate them to change.</li>
                    <span>
                      <input type="radio" name="q4b" value="1" id="sdisagree17" tabindex="81" required="required" title="Please choose one of these answers." /><label for="sdisagree17">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q4b" value="2" id="disagree17" tabindex="82" /><label for="disagree17">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q4b" value="3" id="neutral17" tabindex="83" /><label for="neutral17">Neutral</label></span>
                    <span>
                      <input type="radio" name="q4b" value="4" id="agree17" tabindex="84" /><label for="agree17">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q4b" value="5" id="sagree17" tabindex="85" /><label for="sagree17">Strongly Agree</label></span>
                    <li>I help others develop skills in ALL the areas that may be required, including the social, emotional, and interpersonal skills and not just the technical or physical skills they need.</li>
                    <span>
                      <input type="radio" name="q4c" value="1" id="sdisagree18" tabindex="86" required="required" title="Please choose one of these answers." /><label for="sdisagree18">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q4c" value="2" id="disagree18" tabindex="87" /><label for="disagree18">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q4c" value="3" id="neutral18" tabindex="88" /><label for="neutral18">Neutral</label></span>
                    <span>
                      <input type="radio" name="q4c" value="4" id="agree18" tabindex="89" /><label for="agree18">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q4c" value="5" id="sagree18" tabindex="90" /><label for="sagree18">Strongly Agree</label></span>
                    <li>I create lots of opportunities to help people practice new skills in challenging but safe conditions.</li>
                    <span>
                      <input type="radio" name="q4d" value="1" id="sdisagree19" tabindex="91" required="required" title="Please choose one of these answers." /><label for="sdisagree19">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q4d" value="2" id="disagree19" tabindex="92" /><label for="disagree19">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q4d" value="3" id="neutral19" tabindex="93" /><label for="neutral19">Neutral</label></span>
                    <span>
                      <input type="radio" name="q4d" value="4" id="agree19" tabindex="94" /><label for="agree19">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q4d" value="5" id="sagree19" tabindex="95" /><label for="sagree19">Strongly Agree</label></span>
                  </ol>
                  <h4>5. Provide Encouragement</h4>
                  <ol>
                    <li>I make sure others can see I am willing to sacrifice a great deal (ego, time, money, or other priorities) to achieve change.</li>
                    <span>
                      <input type="radio" name="q5a" value="1" id="sdisagree21" tabindex="101" required="required" title="Please choose one of these answers." /><label for="sdisagree21">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q5a" value="2" id="disagree21" tabindex="102" /><label for="disagree21">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q5a" value="3" id="neutral21" tabindex="103" /><label for="neutral21">Neutral</label></span>
                    <span>
                      <input type="radio" name="q5a" value="4" id="agree21" tabindex="104" /><label for="agree21">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q5a" value="5" id="sagree21" tabindex="105" /><label for="sagree21">Strongly Agree</label></span>
                    <li>I carefully identify opinion leaders and get them involved in encouraging others to change.</li>
                    <span>
                      <input type="radio" name="q5b" value="1" id="sdisagree22" tabindex="106" required="required" title="Please choose one of these answers." /><label for="sdisagree22">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q5b" value="2" id="disagree22" tabindex="107" /><label for="disagree22">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q5b" value="3" id="neutral22" tabindex="108" /><label for="neutral22">Neutral</label></span>
                    <span>
                      <input type="radio" name="q5b" value="4" id="agree22" tabindex="109" /><label for="agree22">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q5b" value="5" id="sagree22" tabindex="110" /><label for="sagree22">Strongly Agree</label></span>
                    <li>I make sure formal leaders teach, model, praise, and coach others toward the new behaviors.</li>
                    <span>
                      <input type="radio" name="q5c" value="1" id="sdisagree23" tabindex="111" required="required" title="Please choose one of these answers." /><label for="sdisagree23">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q5c" value="2" id="disagree23" tabindex="112" /><label for="disagree23">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q5c" value="3" id="neutral23" tabindex="113" /><label for="neutral23">Neutral</label></span>
                    <span>
                      <input type="radio" name="q5c" value="4" id="agree23" tabindex="114" /><label for="agree23">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q5c" value="5" id="sagree23" tabindex="115" /><label for="sagree23">Strongly Agree</label></span>
                    <li>I encourage and teach everyone how to hold everyone else accountable for the new behaviors (including me), irrespective of level or position.</li>
                    <span>
                      <input type="radio" name="q5d" value="1" id="sdisagree24" tabindex="116" required="required" title="Please choose one of these answers." /><label for="sdisagree24">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q5d" value="2" id="disagree24" tabindex="117" /><label for="disagree24">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q5d" value="3" id="neutral24" tabindex="118" /><label for="neutral24">Neutral</label></span>
                    <span>
                      <input type="radio" name="q5d" value="4" id="agree24" tabindex="119" /><label for="agree24">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q5d" value="5" id="sagree24" tabindex="120" /><label for="sagree24">Strongly Agree</label></span>
                  </ol>
                  <h4>6. Provide Help</h4>
                  <ol>
                    <li>I make sure others can get timely assistance whenever they are struggling with the new behaviors.</li>
                    <span>
                      <input type="radio" name="q6a" value="1" id="sdisagree26" tabindex="126" required="required" title="Please choose one of these answers." /><label for="sdisagree26">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q6a" value="2" id="disagree26" tabindex="127" /><label for="disagree26">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q6a" value="3" id="neutral26" tabindex="128" /><label for="neutral26">Neutral</label></span>
                    <span>
                      <input type="radio" name="q6a" value="4" id="agree26" tabindex="129" /><label for="agree26">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q6a" value="5" id="sagree26" tabindex="130" /><label for="sagree26">Strongly Agree</label></span>
                    <li>I identify obstacles to change and make sure people have others around them that can help overcome these obstacles.</li>
                    <span>
                      <input type="radio" name="q6b" value="1" id="sdisagree27" tabindex="131" required="required" title="Please choose one of these answers." /><label for="sdisagree27">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q6b" value="2" id="disagree27" tabindex="132" /><label for="disagree27">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q6b" value="3" id="neutral27" tabindex="133" /><label for="neutral27">Neutral</label></span>
                    <span>
                      <input type="radio" name="q6b" value="4" id="agree27" tabindex="134" /><label for="agree27">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q6b" value="5" id="sagree27" tabindex="135" /><label for="sagree27">Strongly Agree</label></span>
                    <li>I go to great lengths to ensure people feel safe to ask for help without feeling embarrassed or put on the spot.</li>
                    <span>
                      <input type="radio" name="q6c" value="1" id="sdisagree28" tabindex="136" required="required" title="Please choose one of these answers." /><label for="sdisagree28">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q6c" value="2" id="disagree28" tabindex="137" /><label for="disagree28">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q6c" value="3" id="neutral28" tabindex="138" /><label for="neutral28">Neutral</label></span>
                    <span>
                      <input type="radio" name="q6c" value="4" id="agree28" tabindex="139" /><label for="agree28">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q6c" value="5" id="sagree28" tabindex="140" /><label for="sagree28">Strongly Agree</label></span>
                    <li>I ensure everyone knows they have the authority to step up to the new behaviors.</li>
                    <span>
                      <input type="radio" name="q6d" value="1" id="sdisagree29" tabindex="141" required="required" title="Please choose one of these answers." /><label for="sdisagree29">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q6d" value="2" id="disagree29" tabindex="142" /><label for="disagree29">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q6d" value="3" id="neutral29" tabindex="143" /><label for="neutral29">Neutral</label></span>
                    <span>
                      <input type="radio" name="q6d" value="4" id="agree29" tabindex="144" /><label for="agree29">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q6d" value="5" id="sagree29" tabindex="145" /><label for="sagree29">Strongly Agree</label></span>
                  </ol>
                  <h4>7. Change Their Economy</h4>
                  <ol>
                    <li>I put more effort into sharing the moral, ethical, and business reasons for change than into rewarding or punishing people toward the change.</li>
                    <span>
                      <input type="radio" name="q7a" value="1" id="sdisagree31" tabindex="151" required="required" title="Please choose one of these answers." /><label for="sdisagree31">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q7a" value="2" id="disagree31" tabindex="152" /><label for="disagree31">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q7a" value="3" id="neutral31" tabindex="153" /><label for="neutral31">Neutral</label></span>
                    <span>
                      <input type="radio" name="q7a" value="4" id="agree31" tabindex="154" /><label for="agree31">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q7a" value="5" id="sagree31" tabindex="155" /><label for="sagree31">Strongly Agree</label></span>
                    <li>I ensure that our formal reward and discipline systems encourage the desired behavior more than discourage the undesired behavior.</li>
                    <span>
                      <input type="radio" name="q7b" value="1" id="sdisagree32" tabindex="156" required="required" title="Please choose one of these answers." /><label for="sdisagree32">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q7b" value="2" id="disagree32" tabindex="157" /><label for="disagree32">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q7b" value="3" id="neutral32" tabindex="158" /><label for="neutral32">Neutral</label></span>
                    <span>
                      <input type="radio" name="q7b" value="4" id="agree32" tabindex="159" /><label for="agree32">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q7b" value="5" id="sagree32" tabindex="160" /><label for="sagree32">Strongly Agree</label></span>
                    <li>I make careful use of small yet thoughtful rewards to encourage people who make early attempts to change.</li>
                    <span>
                      <input type="radio" name="q7c" value="1" id="sdisagree33" tabindex="161" required="required" title="Please choose one of these answers." /><label for="sdisagree33">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q7c" value="2" id="disagree33" tabindex="162" /><label for="disagree33">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q7c" value="3" id="neutral33" tabindex="163" /><label for="neutral33">Neutral</label></span>
                    <span>
                      <input type="radio" name="q7c" value="4" id="agree33" tabindex="164" /><label for="agree33">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q7c" value="5" id="sagree33" tabindex="165" /><label for="sagree33">Strongly Agree</label></span>
                    <li>I use formal rewards to encourage not just the right results, but also the right behaviors that will lead to those results.</li>
                    <span>
                      <input type="radio" name="q7d" value="1" id="sdisagree34" tabindex="166" required="required" title="Please choose one of these answers." /><label for="sdisagree34">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q7d" value="2" id="disagree34" tabindex="167" /><label for="disagree34">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q7d" value="3" id="neutral34" tabindex="168" /><label for="neutral34">Neutral</label></span>
                    <span>
                      <input type="radio" name="q7d" value="4" id="agree34" tabindex="169" /><label for="agree34">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q7d" value="5" id="sagree34" tabindex="170" /><label for="sagree34">Strongly Agree</label></span>
                  </ol>
                  <h4>8. Change Their Space</h4>
                  <ol>
                    <li>I use visual reminders, regular communications, and metrics to keep the new behaviors and need for change visible and "top of mind."</li>
                    <span>
                      <input type="radio" name="q8a" value="1" id="sdisagree36" tabindex="176" required="required" title="Please choose one of these answers." /><label for="sdisagree36">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q8a" value="2" id="disagree36" tabindex="177" /><label for="disagree36">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q8a" value="3" id="neutral36" tabindex="178" /><label for="neutral36">Neutral</label></span>
                    <span>
                      <input type="radio" name="q8a" value="4" id="agree36" tabindex="179" /><label for="agree36">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q8a" value="5" id="sagree36" tabindex="180" /><label for="sagree36">Strongly Agree</label></span>
                    <li>I make sure people have access to the tools, information, and resources they need to adopt new behaviors.</li>
                    <span>
                      <input type="radio" name="q8b" value="1" id="sdisagree37" tabindex="181" required="required" title="Please choose one of these answers." /><label for="sdisagree37">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q8b" value="2" id="disagree37" tabindex="182" /><label for="disagree37">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q8b" value="3" id="neutral37" tabindex="183" /><label for="neutral37">Neutral</label></span>
                    <span>
                      <input type="radio" name="q8b" value="4" id="agree37" tabindex="184" /><label for="agree37">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q8b" value="5" id="sagree37" tabindex="185" /><label for="sagree37">Strongly Agree</label></span>
                    <li>Where possible, I redesign the physical space of those I’m trying to influence to make the new behavior easy to do and the bad behavior hard to do.</li>
                    <span>
                      <input type="radio" name="q8c" value="1" id="sdisagree38" tabindex="186" required="required" title="Please choose one of these answers." /><label for="sdisagree38">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q8c" value="2" id="disagree38" tabindex="187" /><label for="disagree38">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q8c" value="3" id="neutral38" tabindex="188" /><label for="neutral38">Neutral</label></span>
                    <span>
                      <input type="radio" name="q8c" value="4" id="agree38" tabindex="189" /><label for="agree38">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q8c" value="5" id="sagree38" tabindex="190" /><label for="sagree38">Strongly Agree</label></span>
                    <li>Where possible, I change the physical environment so the new behavior becomes an automatic part of our workflow and people can act without having to think about it.</li>
                    <span>
                      <input type="radio" name="q8d" value="1" id="sdisagree39" tabindex="191" required="required" title="Please choose one of these answers." /><label for="sdisagree39">Strongly Disagree</label></span>
                    <span>
                      <input type="radio" name="q8d" value="2" id="disagree39" tabindex="192" /><label for="disagree39">Somewhat Disagree</label></span>
                    <span>
                      <input type="radio" name="q8d" value="3" id="neutral39" tabindex="193" /><label for="neutral39">Neutral</label></span>
                    <span>
                      <input type="radio" name="q8d" value="4" id="agree39" tabindex="194" /><label for="agree39">Somewhat Agree</label></span>
                    <span>
                      <input type="radio" name="q8d" value="5" id="sagree39" tabindex="195" /><label for="sagree39">Strongly Agree</label></span>
                  </ol>

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

                    <div className="col-sm-6 mb-12 d-none">
                      <input className='form-control' type="text" value="Null" name="organization" placeholder="Organization*" required />
                    </div>


                  </div>
                </div>
                <input type="submit" value="Submit" id='submitbuttonform' class="assesmetmain" tabindex="201" /></form>
              <p class="feedbackcolor" id="response"></p>
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
