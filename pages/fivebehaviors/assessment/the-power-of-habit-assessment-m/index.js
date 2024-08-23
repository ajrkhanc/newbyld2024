import Head from 'next/head'
import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function BrowseCourses() {

    const [modalOpen8, setModalOpen8] = React.useState(false);
     
    const submitF = async (event) => {
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting ....";

        var q1 = event.target.q1.value;
        var q2 = event.target.q2.value;
        var q3 = event.target.q3.value;
        var q4 = event.target.q4.value;
        var q5 = event.target.q5.value;
        var q6 = event.target.q6.value;
        var q7 = event.target.q7.value;
        var q8 = event.target.q8.value;
        var q9 = event.target.q9.value;
        var q10 = event.target.q10.value;
        var q11 = event.target.q11.value;
        var q12 = event.target.q12.value;
        var q13 = event.target.q13.value;
        var q14 = event.target.q14.value;
        var q15 = event.target.q15.value;

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const organization = event.target.organization.value;
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-')



        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://clblogs.vercel.app/api/the-power-of-habit-assessment');
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
                    window.location.href = `/fivebehaviors/assessment/the-power-of-habit-assessment-m/${newnameurl}`
                }, 1000);

            }
            else {
                document.getElementById("response").innerHTML = "You Have Submeted to go"
                setTimeout(function () {
                    document.getElementById("response").innerHTML = "";
                    document.getElementById("submitbuttonform").value = "Submited...";
                }, 3000);
            }



        }

        var xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/76/feedback');
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

   
        var Assessment ="The Power of Habit Assessment Form Marketing"
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
                <title>The Power of Habit Assessment | fivebehaviors</title>
                <meta name="description" content="THE GREATEST PREDICTOR OF HIGH PERFORMANCE" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-R9WBGNSBEB"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-R9WBGNSBEB');
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
{/* 
      <ModalBody>
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
                        <div className='col-md-12 text-center'>
                            <h2 className='cacoh phoh2'>THE GREATEST PREDICTOR OF HIGH PERFORMANCE</h2>
                            
                            <div className='clearfix'></div>
                            <div className='mainlinec'>

                                <div className='sboxp ajpoint'>
                                    <div className='sbox'>
                                        <hr className='hrleft'></hr>
                                        <span>1</span>
                                        <p>Never</p>
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>2</span>                                        
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>3</span>                                       
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>4</span>                                        
                                    </div> 
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>5</span>                                        
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>6</span>                                        
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>7</span>                                        
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>8</span>                                        
                                    </div> 
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>9</span>                                        
                                    </div> 

                                    <div className='sbox'>
                                        <hr className='hrright'></hr>
                                        <span>10</span>
                                        <p>Always</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pbb-40'>
            <div className='container aacc'>
                <form onSubmit={submitF}>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Trusts</h3>
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    1. Team members donot feel need to guarded in their interactions
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="1" id="q1a" required />
                                    <label for="q1a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="2" id="q1b" required />
                                    <label for="q1b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="3" id="q1c" required />
                                    <label for="q1c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="4" id="q1d" required />
                                    <label for="q1d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="5" id="q1e" required />
                                    <label for="q1e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="6" id="q1f" required />
                                    <label for="q1f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="7" id="q1g" required />
                                    <label for="q1g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="8" id="q1h" required />
                                    <label for="q1h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="9" id="q1i" required />
                                    <label for="q1i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="10" id="q1j" required />
                                    <label for="q1j">10</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    2. Team members readilily admit mistakes when they happen
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="1" id="q2a" required />
                                    <label for="q2a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="2" id="q2b" required />
                                    <label for="q2b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="3" id="q2c" required />
                                    <label for="q2c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="4" id="q2d" required />
                                    <label for="q2d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="5" id="q2e" required />
                                    <label for="q2e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="6" id="q2f" required />
                                    <label for="q2f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="7" id="q2g" required />
                                    <label for="q2g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="8" id="q2h" required />
                                    <label for="q2h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="9" id="q2i" required />
                                    <label for="q2i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="10" id="q2j" required />
                                    <label for="q2j">10</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    3. Team members are not afraid to share unsolicited feedback.
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="1" id="q3a" required />
                                    <label for="q3a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="2" id="q3b" required />
                                    <label for="q3b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="3" id="q3c" required />
                                    <label for="q3c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="4" id="q3d" required />
                                    <label for="q3d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="5" id="q3e" required />
                                    <label for="q3e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="6" id="q3f" required />
                                    <label for="q3f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="7" id="q3g" required />
                                    <label for="q3g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="8" id="q3h" required />
                                    <label for="q3h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="9" id="q3i" required />
                                    <label for="q3i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="10" id="q3j" required />
                                    <label for="q3j">10</label>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Fear of Conflict</h3>
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    4. Team meetings are open and passionate about ideas and opinions
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="1" id="q4a" required />
                                    <label for="q4a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="2" id="q4b" required />
                                    <label for="q4b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="3" id="q4c" required />
                                    <label for="q4c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="4" id="q4d" required />
                                    <label for="q4d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="5" id="q4e" required />
                                    <label for="q4e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="6" id="q4f" required />
                                    <label for="q4f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="7" id="q4g" required />
                                    <label for="q4g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="8" id="q4h" required />
                                    <label for="q4h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="9" id="q4i" required />
                                    <label for="q4i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="10" id="q4j" required />
                                    <label for="q4j">10</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    5. Members just donot nod their heads to avoid getting into a conflict.
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="1" id="q5a" required />
                                    <label for="q5a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="2" id="q5b" required />
                                    <label for="q5b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="3" id="q5c" required />
                                    <label for="q5c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="4" id="q5d" required />
                                    <label for="q5d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="5" id="q5e" required />
                                    <label for="q5e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="6" id="q5f" required />
                                    <label for="q5f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="7" id="q5g" required />
                                    <label for="q5g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="8" id="q5h" required />
                                    <label for="q5h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="9" id="q5i" required />
                                    <label for="q5i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="10" id="q5j" required />
                                    <label for="q5j">10</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    6. Disagreements are not treated as personal attacks..
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="1" id="q6a" required />
                                    <label for="q6a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="2" id="q6b" required />
                                    <label for="q6b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="3" id="q6c" required />
                                    <label for="q6c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="4" id="q6d" required />
                                    <label for="q6d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="5" id="q6e" required />
                                    <label for="q6e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="6" id="q6f" required />
                                    <label for="q6f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="7" id="q6g" required />
                                    <label for="q6g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="8" id="q6h" required />
                                    <label for="q6h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="9" id="q6i" required />
                                    <label for="q6i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="10" id="q6j" required />
                                    <label for="q6j">10</label>
                                </div>
                            </div>
                        </div>


                        <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Commitment</h3>
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    7. Team Members are clear and aligned on key results.
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="1" id="q7a" required />
                                    <label for="q7a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="2" id="q7b" required />
                                    <label for="q7b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="3" id="q7c" required />
                                    <label for="q7c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="4" id="q7d" required />
                                    <label for="q7d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="5" id="q7e" required />
                                    <label for="q7e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="6" id="q7f" required />
                                    <label for="q7f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="7" id="q7g" required />
                                    <label for="q7g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="8" id="q7h" required />
                                    <label for="q7h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="9" id="q7i" required />
                                    <label for="q7i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="10" id="q7j" required />
                                    <label for="q7j">10</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    8. We have strong follow up within the team on individual deliverables
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="1" id="q8a" required />
                                    <label for="q8a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="2" id="q8b" required />
                                    <label for="q8b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="3" id="q8c" required />
                                    <label for="q8c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="4" id="q8d" required />
                                    <label for="q8d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="5" id="q8e" required />
                                    <label for="q8e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="6" id="q8f" required />
                                    <label for="q8f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="7" id="q8g" required />
                                    <label for="q8g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="8" id="q8h" required />
                                    <label for="q8h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="9" id="q8i" required />
                                    <label for="q8i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="10" id="q8j" required />
                                    <label for="q8j">10</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    9. We clarify 'who will do what by when and how we will follow up'
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="1" id="q9a" required />
                                    <label for="q9a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="2" id="q9b" required />
                                    <label for="q9b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="3" id="q9c" required />
                                    <label for="q9c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="4" id="q9d" required />
                                    <label for="q9d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="5" id="q9e" required />
                                    <label for="q9e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="6" id="q9f" required />
                                    <label for="q9f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="7" id="q9g" required />
                                    <label for="q9g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="8" id="q9h" required />
                                    <label for="q9h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="9" id="q9i" required />
                                    <label for="q9i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="10" id="q9j" required />
                                    <label for="q9j">10</label>
                                </div>
                            </div>
                        </div>


                        <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Accountability</h3>
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    10.Team members have the skills and comfort to call out directly, in case there is a delay by someone.
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="1" id="q10a" required />
                                    <label for="q10a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="2" id="q10b" required />
                                    <label for="q10b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="3" id="q10c" required />
                                    <label for="q10c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="4" id="q10d" required />
                                    <label for="q10d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="5" id="q10e" required />
                                    <label for="q10e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="6" id="q10f" required />
                                    <label for="q10f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="7" id="q10g" required />
                                    <label for="q10g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="8" id="q10h" required />
                                    <label for="q10h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="9" id="q10i" required />
                                    <label for="q10i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="10" id="q10j" required />
                                    <label for="q10j">10</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    11. Team members speak directly instead of escalting the gaps or delayed commitments
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q11" value="1" id="q11a" required />
                                    <label for="q11a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q11" value="2" id="q11b" required />
                                    <label for="q11b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q11" value="3" id="q11c" required />
                                    <label for="q11c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q11" value="4" id="q11d" required />
                                    <label for="q11d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q11" value="5" id="q11e" required />
                                    <label for="q11e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q11" value="6" id="q11f" required />
                                    <label for="q11f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q11" value="7" id="q11g" required />
                                    <label for="q11g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q11" value="8" id="q11h" required />
                                    <label for="q11h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q11" value="9" id="q11i" required />
                                    <label for="q11i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q11" value="10" id="q11j" required />
                                    <label for="q11j">10</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    12. Team avoids marking mails to their manager(s) unless expected
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q12" value="1" id="q12a" required />
                                    <label for="q12a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q12" value="2" id="q12b" required />
                                    <label for="q12b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q12" value="3" id="q12c" required />
                                    <label for="q12c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q12" value="4" id="q12d" required />
                                    <label for="q12d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q12" value="5" id="q12e" required />
                                    <label for="q12e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q12" value="6" id="q12f" required />
                                    <label for="q12f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q12" value="7" id="q12g" required />
                                    <label for="q12g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q12" value="8" id="q12h" required />
                                    <label for="q12h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q12" value="9" id="q12i" required />
                                    <label for="q12i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q12" value="10" id="q12j" required />
                                    <label for="q12j">10</label>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Attention to results</h3>
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    13. Team members easily priositise on overall goals even if that means setback to their personal goals
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q13" value="1" id="q13a" required />
                                    <label for="q13a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q13" value="2" id="q13b" required />
                                    <label for="q13b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q13" value="3" id="q13c" required />
                                    <label for="q13c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q13" value="4" id="q13d" required />
                                    <label for="q13d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q13" value="5" id="q13e" required />
                                    <label for="q13e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q13" value="6" id="q13f" required />
                                    <label for="q13f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q13" value="7" id="q13g" required />
                                    <label for="q13g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q13" value="8" id="q13h" required />
                                    <label for="q13h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q13" value="9" id="q13i" required />
                                    <label for="q13i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q13" value="10" id="q13j" required />
                                    <label for="q13j">10</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    14. Team has method to update the progress on key delverables like dashboards or shared platforms
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q14" value="1" id="q14a" required />
                                    <label for="q14a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q14" value="2" id="q14b" required />
                                    <label for="q14b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q14" value="3" id="q14c" required />
                                    <label for="q14c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q14" value="4" id="q14d" required />
                                    <label for="q14d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q14" value="5" id="q14e" required />
                                    <label for="q14e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q14" value="6" id="q14f" required />
                                    <label for="q14f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q14" value="7" id="q14g" required />
                                    <label for="q14g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q14" value="8" id="q14h" required />
                                    <label for="q14h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q14" value="9" id="q14i" required />
                                    <label for="q14i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q14" value="10" id="q14j" required />
                                    <label for="q14j">10</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    15. Team takes decisions keeping larger goals in mind
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q15" value="1" id="q15a" required />
                                    <label for="q15a">1</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q15" value="2" id="q15b" required />
                                    <label for="q15b">2</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q15" value="3" id="q15c" required />
                                    <label for="q15c">3</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q15" value="4" id="q15d" required />
                                    <label for="q15d">4</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q15" value="5" id="q15e" required />
                                    <label for="q15e">5</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q15" value="6" id="q15f" required />
                                    <label for="q15f">6</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q15" value="7" id="q15g" required />
                                    <label for="q15g">7</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q15" value="8" id="q15h" required />
                                    <label for="q15h">8</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q15" value="9" id="q15i" required />
                                    <label for="q15i">9</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q15" value="10" id="q15j" required />
                                    <label for="q15j">10</label>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12'>
                            <div className='fcol1 lastinp ptt-20'>
                                <div className='row inpuut'>
                                    <div className="col-sm-4 mb-12">
                                        <input className='form-control 5binput' type="text" name="name" placeholder="Your Name*" required />
                                    </div>
                                    <div className="col-sm-4 mb-12">
                                        <input className='form-control 5binput' type="email" name="email" placeholder="Work Email/Email*" required />
                                    </div>
                                    <div className="col-sm-4 mb-12">
                                        <input className='form-control 5binput' type="text" name="phone"  maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                    </div>

                                    <div className="col-sm-6 mb-12 d-none">
                                        <input className='form-control 5binput' type="text" value="Null" name="organization" placeholder="Organization*" required />
                                    </div>
                                    <div className='col-sm-12'>
                                        <input type="submit" value="Submit" id='submitbuttonform' class="assesmetmain 5bass" tabindex="201" />
                                        <p class="feedbackcolor" id="response"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </form>
                </div>
            </section>
            <button onClick={() => setModalOpen8(!modalOpen8)} id="myButton" style={{ display: "none" }}>
                    modalevent
                  </button>
        </>
    )
}
