import Head from 'next/head'
import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function BrowseCourses() {

    const [modalOpen8, setModalOpen8] = React.useState(false);

    const submitF = async (event) => {
        
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        var q1 = event.target.q1.value;
        var q2 = event.target.q2.value;
        var q3 = event.target.q3.value;
        var q4 = event.target.q4.value;    
        var q5 = event.target.q5.value;
        var q6 = event.target.q6.value;
        // var q7 = event.target.q7.value;
        // var q8 = event.target.q8.value;    
        // var q9 = event.target.q9.value;
        // var q10 = event.target.q10.value;
        // var q11 = event.target.q11.value;
        // var q12 = event.target.q12.value;    
        var q13 = event.target.q13.value;
        var q14 = event.target.q14.value;
        var q15 = event.target.q15.value;
        var q16 = event.target.q16.value;    
        var q17 = event.target.q17.value;
        var q18 = event.target.q18.value;
        // var q19 = event.target.q19.value;
        // var q20 = event.target.q20.value;    
        // var q21 = event.target.q21.value;
        // var q22 = event.target.q22.value;
        // var q23 = event.target.q23.value;
        // var q24 = event.target.q24.value;    
        // var q25 = event.target.q25.value;
        // var q26 = event.target.q26.value;
        // var q27 = event.target.q27.value;
        // var q28 = event.target.q28.value;    
        // var q29 = event.target.q29.value;
        // var q30 = event.target.q30.value;    
    
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = "null";
        const organization = "null";
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-')
    
    
    
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://clblogs.vercel.app/api/styleunderstressassessment');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('q1=' + q1 +
          '&q2=' + q2 +
          '&q3=' + q3 +
          '&q4=' + q4 +
          '&q5=' + q5 +
          '&q6=' + q6 +
        //   '&q7=' + q7 +
        //   '&q8=' + q8 +
        //   '&q9=' + q9 +
        //   '&q10=' + q10 +
        //   '&q11=' + q11 +
        //   '&q12=' + q12 +
          '&q13=' + q13 +
          '&q14=' + q14 +
          '&q15=' + q15 +
          '&q16=' + q16 +
          '&q17=' + q17 +
          '&q18=' + q18 +
        //   '&q19=' + q19 +
        //   '&q20=' + q20 +
        //   '&q21=' + q21 +
        //   '&q22=' + q22 +
        //   '&q23=' + q23 +
        //   '&q24=' + q24 +
        //   '&q25=' + q25 +
        //   '&q26=' + q26 +
        //   '&q27=' + q27 +
        //   '&q28=' + q28 +
        //   '&q29=' + q29 +
        //   '&q30=' + q30 +
       
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
              window.location.href = `/fivebehaviors/assessment/style-under-stress-assessment-c/${newnameurl}`
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
    
       
            var Assessment ="Style Under Stress - Assessment Form Client" 
            xhttp.send("name=" + event.target.name.value +
            '&email=' + email +
            '&assessment=' + Assessment)    
        }
    
        xhr.onerror = function () {
          console.log('error');
        }
      };

    return (
        <>
            <Head>
                <title>Style Under Stress Assessment | fivebehaviors</title>
                <meta name="description" content="Discover how well you handle Crucial Conversations and identify where you can improve with the Style Under Stress™ assessment." />
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
                            <h2>WHAT’S YOUR STYLE UNDER STRESS?</h2>
                            <h3>Stressed? Who, me? Never</h3>
                            <p>When stakes are high, emotions run strong, and opinions differ, we all struggle to stay cool. We often either clam up and hope the conflict will go away, or we blow up and damage trust and respect. Take the assessment and find out how well you communicate when it matters most.</p>
                        </div>
                        <div className='col-md-6'>
                            <div className='assesmentimgbanner'>
                                <img src="/5bassets/img/style-under-stress-assessment.jpg" />
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

                                <h5>Identify a Relationship</h5>
                                <p>Before you begin, think of a relationship you want to explore—with your boss, coworker, direct report, partner, or family member.</p>
                                <h5>Identify a Circumstance</h5>
                                <p>Next, think of a tough disagreement you've had or continue to have—one where you feel frustrated or irritated or that doesn't get resolved to your satisfaction.</p>
                                <h5>Apply</h5>
                                <p>With the relationship and disagreement in mind, respond to the following statements.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <form  onSubmit={submitF}>
                                <div className='formsbarassesment'>

                                    <ol>
                                        <li>Rather than tell people exactly what I think, sometimes I rely on jokes, sarcasm, or snide remarks to let them know I'm frustrated.</li>
                                        <div>
                                            <span><input type="radio" name="q1" id="1t" value="1" required="required" tabindex="1" /><label for="1t">True</label></span>
                                            <span><input type="radio" name="q1" id="1f" value="0" tabindex="2" /><label for="1f">False</label></span>
                                        </div>
                                        <li>When I've got something tough to bring up, I understate it rather than share my full opinion.</li>
                                        <div>
                                            <span><input type="radio" name="q2" id="2t" value="1" required="required" tabindex="3" /><label for="2t">True</label></span>
                                            <span><input type="radio" name="q2" id="2f" value="0" tabindex="4" /><label for="2f">False</label></span>
                                        </div>
                                        <li>Sometimes when people bring up a touchy issue, I try to change the subject.</li>
                                        <div>
                                            <span><input type="radio" name="q3" id="3t" value="1" required="required" tabindex="5" /><label for="3t">True</label></span>
                                            <span><input type="radio" name="q3" id="3f" value="0" tabindex="6" /><label for="3f">False</label></span>
                                        </div>
                                        <li>When it comes to dealing with difficult subjects, sometimes I steer the conversation to safer issues rather than address what really concerns me.</li>
                                        <div>
                                            <span><input type="radio" name="q4" id="4t" value="1" required="required" tabindex="7" /><label for="4t">True</label></span>
                                            <span><input type="radio" name="q4" id="4f" value="0" tabindex="8" /><label for="4f">False</label></span>
                                        </div>
                                        <li>At times I avoid situations that might bring me into contact with people I'm having problems with.</li>
                                        <div>
                                            <span><input type="radio" name="q5" id="5t" value="1" required="required" tabindex="9" /><label for="5t">True</label></span>
                                            <span><input type="radio" name="q5" id="5f" value="0" tabindex="10" /><label for="5f">False</label></span>
                                        </div>
                                        <li>I put off getting back to people sometimes because I'm uncomfortable dealing with them.</li>
                                        <div>
                                            <span><input type="radio" name="q6" id="6t" value="1" required="required" tabindex="11" /><label for="6t">True</label></span>
                                            <span><input type="radio" name="q6" id="6f" value="0" tabindex="12" /><label for="6f">False</label></span>
                                        </div>

                                        {/* <li>In order to get my point across, I sometimes exaggerate my side of the argument.</li>
                                        <div>
                                            <span><input type="radio" name="q7" id="7t" value="1" required="required" tabindex="13" /><label for="7t">True</label></span>
                                            <span><input type="radio" name="q7" id="7f" value="0" tabindex="14" /><label for="7f">False</label></span>
                                        </div>
                                        <li>If I seem to be losing control of a conversation, I sometimes cut people off or change the subject to something that works better for me.</li>
                                        <div>
                                            <span><input type="radio" name="q8" id="8t" value="1" required="required" tabindex="15" /><label for="8t">True</label></span>
                                            <span><input type="radio" name="q8" id="8f" value="0" tabindex="16" /><label for="8f">False</label></span>
                                        </div>
                                        <li>I suspect others walk away from conversations with me at times feeling belittled or hurt. </li>
                                        <div>
                                            <span><input type="radio" name="q9" id="9t" value="1" required="required" tabindex="17" /><label for="9t">True</label></span>
                                            <span><input type="radio" name="q9" id="9f" value="0" tabindex="18" /><label for="9f">False</label></span>
                                        </div>
                                        <li>When I'm stunned by a comment, sometimes I say things that others might take as forceful or attacking—comments such as "Give me a break!" or "That's ridiculous!"</li>
                                        <div>
                                            <span><input type="radio" name="q10" id="10t" value="1" required="required" tabindex="19" /><label for="10t">True</label></span>
                                            <span><input type="radio" name="q10" id="10f" value="0" tabindex="20" /><label for="10f">False</label></span>
                                        </div>
                                        <li>Sometimes when things get heated, I move from arguing against others' points to saying things that might hurt them personally.</li>
                                        <div>
                                            <span><input type="radio" name="q11" id="11t" value="1" required="required" tabindex="21" /><label for="11t">True</label></span>
                                            <span><input type="radio" name="q11" id="11f" value="0" tabindex="22" /><label for="11f">False</label></span>
                                        </div>
                                        <li>When I feel threatened or hurt I sometimes behave in ways that appear spiteful or vengeful.</li>
                                        <div>
                                            <span><input type="radio" name="q12" id="12t" value="1" required="required" tabindex="23" /><label for="12t">True</label></span>
                                            <span><input type="radio" name="q12" id="12f" value="0" tabindex="24" /><label for="12f">False</label></span>
                                        </div> */}
                                        <li>I sometimes find myself having the same conversation with the same person multiple times.</li>
                                        <div>
                                            <span><input type="radio" name="q13" id="13t" value="1" required="required" tabindex="25" /><label for="13t">True</label></span>
                                            <span><input type="radio" name="q13" id="13f" value="0" tabindex="26" /><label for="13f">False</label></span>
                                        </div>
                                        <li>At times I walk away from conversations with an agreement that I don't think really solves the problem.</li>
                                        <div>
                                            <span><input type="radio" name="q14" id="14t" value="1" required="required" tabindex="27" /><label for="14t">True</label></span>
                                            <span><input type="radio" name="q14" id="14f" value="0" tabindex="28" /><label for="14f">False</label></span>
                                        </div>
                                        <li>When I'm discussing an important topic with others, sometimes I move from trying to make my point to trying to win the battle.</li>
                                        <div>
                                            <span><input type="radio" name="q15" id="15t" value="1" required="required" tabindex="29" /><label for="15t">True</label></span>
                                            <span><input type="radio" name="q15" id="15f" value="0" tabindex="30" /><label for="15f">False</label></span>
                                        </div>
                                        <li>Sometimes I decide that it's better to keep the peace than share my views.</li>
                                        <div>
                                            <span><input type="radio" name="q16" id="16t" value="1" required="required" tabindex="31" /><label for="16t">True</label></span>
                                            <span><input type="radio" name="q16" id="16f" value="0" tabindex="32" /><label for="16f">False</label></span>
                                        </div>
                                        <li>When talking about sensitive subjects, my emotions often get the best of me.</li>
                                        <div>
                                            <span><input type="radio" name="q17" id="17t" value="1" required="required" tabindex="33" /><label for="17t">True</label></span>
                                            <span><input type="radio" name="q17" id="17f" value="0" tabindex="34" /><label for="17f">False</label></span>
                                        </div>
                                        <li>I sometimes walk away from conversations rehashing the reasons I'm right and others are wrong.</li>
                                        <div>
                                            <span><input type="radio" name="q18" id="18t" value="1" required="required" tabindex="35" /><label for="18t">True</label></span>
                                            <span><input type="radio" name="q18" id="18f" value="0" tabindex="36" /><label for="18f">False</label></span>
                                        </div>
                                        {/* <li>In the middle of a tough conversation, I often get so caught up in arguments that I don't see how I'm coming across to others.</li>
                                        <div>
                                            <span><input type="radio" name="q19" id="19t" value="1" required="required" tabindex="37" /><label for="19t">True</label></span>
                                            <span><input type="radio" name="q19" id="19f" value="0" tabindex="38" /><label for="19f">False</label></span>
                                        </div>
                                        <li>When conversations start to deteriorate, I find it hard to figure out what's going wrong and get it back on track.</li>
                                        <div>
                                            <span><input type="radio" name="q20" id="20t" value="1" required="required" tabindex="39" /><label for="20t">True</label></span>
                                            <span><input type="radio" name="q20" id="20f" value="0" tabindex="40" /><label for="20f">False</label></span>
                                        </div>
                                        <li>When I finally say what I really think, I tend to do so in a way that makes others feel defensive.</li>
                                        <div>
                                            <span><input type="radio" name="q21" id="21t" value="1" required="required" tabindex="41" /><label for="21t">True</label></span>
                                            <span><input type="radio" name="q21" id="21f" value="0" tabindex="42" /><label for="21f">False</label></span>
                                        </div>
                                        <li>I often struggle to decide whether it's more important to say what I think or preserve the relationship.</li>
                                        <div>
                                            <span><input type="radio" name="q22" id="22t" value="1" required="required" tabindex="43" /><label for="22t">True</label></span>
                                            <span><input type="radio" name="q22" id="22f" value="0" tabindex="44" /><label for="22f">False</label></span>
                                        </div>
                                        <li>Sometimes when I feel strongly about something, I say it in a way that others tend to resist.</li>
                                        <div>
                                            <span><input type="radio" name="q23" id="23t" value="1" required="required" tabindex="45" /><label for="23t">True</label></span>
                                            <span><input type="radio" name="q23" id="23f" value="0" tabindex="46" /><label for="23f">False</label></span>
                                        </div>
                                        <li>When I am very confident of my opinion, I don't like it when others push back.</li>
                                        <div>
                                            <span><input type="radio" name="q24" id="24t" value="1" required="required" tabindex="47" /><label for="24t">True</label></span>
                                            <span><input type="radio" name="q24" id="24f" value="0" tabindex="48" /><label for="24f">False</label></span>
                                        </div>
                                        <li>I'm often unsure of how to help others open up about things they are reluctant to share.</li>
                                        <div>
                                            <span><input type="radio" name="q25" id="25t" value="1" required="required" tabindex="49" /><label for="25t">True</label></span>
                                            <span><input type="radio" name="q25" id="25f" value="0" tabindex="50" /><label for="25f">False</label></span>
                                        </div>
                                        <li>I spend more of my energy thinking about how to get my point across than worrying about how to help others express theirs.</li>
                                        <div>
                                            <span><input type="radio" name="q26" id="26t" value="1" required="required" tabindex="51" /><label for="26t">True</label></span>
                                            <span><input type="radio" name="q26" id="26f" value="0" tabindex="52" /><label for="26f">False</label></span>
                                        </div>
                                        <li>I spend lots of time feeling very anxious when I'm facing a conversation where I think I might get tough feedback.</li>
                                        <div>
                                            <span><input type="radio" name="q27" id="27t" value="1" required="required" tabindex="53" /><label for="27t">True</label></span>
                                            <span><input type="radio" name="q27" id="27f" value="0" tabindex="54" /><label for="27f">False</label></span>
                                        </div>
                                        <li>I can feel hurt and angry for a long time after a conversation where others said hurtful things to me.</li>
                                        <div>
                                            <span><input type="radio" name="q28" id="28t" value="1" required="required" tabindex="55" /><label for="28t">True</label></span>
                                            <span><input type="radio" name="q28" id="28f" value="0" tabindex="56" /><label for="28f">False</label></span>
                                        </div>
                                        <li>I often have problems with people failing to do what we agreed to, and then the burden is on me to bring it up again.</li>
                                        <div>
                                            <span><input type="radio" name="q29" id="29t" value="1" required="required" tabindex="57" /><label for="29t">True</label></span>
                                            <span><input type="radio" name="q29" id="29f" value="0" tabindex="58" /><label for="29f">False</label></span>
                                        </div>
                                        <li>When resolving tough things, we sometimes have clashing expectations about how the decision will be made, or even about what we agreed to when we talked.</li>
                                        <div>
                                            <span><input type="radio" name="q30" id="30t" value="1" required="required" tabindex="59" /><label for="30t">True</label></span>
                                            <span><input type="radio" name="q30" id="30f" value="0" tabindex="60" /><label for="30f">False</label></span>
                                        </div> */}
                                    </ol>

                                    <div className='row inpuut'>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                    </div>
                                </div>
                                <input id='submitbuttonform' type="submit" value="Submit" class="assesmetmain" tabindex="201" />
                                <p class="feedbackcolor" id="response"></p>
                                </form>
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
