import Head from 'next/head'

export default function BrowseCourses() {

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."


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
        var name = event.target.name.value;
        var phone = event.target.phone.value;
        var email = event.target.email.value;
        var designation = event.target.designation.value;
        var organization = event.target.organization.value;



        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/49/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + name +
            "&phone=" + phone +
            "&email=" + email +
            "&designation=" + designation +
            "&organization=" + organization +
            "&Question1=" + q1 +
            "&Question2=" + q2 +
            "&Question3=" + q3 +
            "&Question4=" + q4 +
            "&Question5=" + q5 +
            "&Question6=" + q6 +
            "&Question7=" + q7 +
            "&Question8=" + q8 +
            "&Question9=" + q9 +
            "&Question10=" + q10)

    }

    return (
        <>
            <Head>
                <title>Virtual reality Solution to drive Behaviour Change HR Tech in the Metaverse</title>
                <meta name="description" content="Virtual reality Solution to drive Behaviour Change HR Tech in the Metaverse" />\
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3BDT7Y19JH"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3BDT7Y19JH');
          `,
                    }}
                />
            </Head>

            <section className='assesmentbannnertop'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <h2>Start unlocking the Strength <br></br>within Yourself today!</h2>
                            <p>
                                The <b><i>Jenson8</i></b> VR is a Metaverse experiential learning platform that delivers behavioural change by enabling participants to enter a fully immersive multi-user VR environment designed to enhance problem-solving, collaboration, and a team connection. The data collected, is then filtered through validated psychometric models to deliver key insights about the aptitude and behaviors of participants.
                            </p>

                        </div>
                        <div className='col-md-6'>
                            <div className='assesmentimgbanner text-center'>
                                <img width="450px" src="/assets/img/virtual-reality.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='pbb-40 ptt-60'>
                <div className='container'>
                    <form onSubmit={registerUser}>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Virtual reality solution to drive Behaviour Change HR Tech in the Metaverse:</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        1. Do you believe implementation of tech like AI and ML can ease up the Hiring Process?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="Agree" id="q1a" required />
                                        <label for="q1a">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="Disagree" id="q1b" required />
                                        <label for="q1b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="Neutral" id="q1c" required />
                                        <label for="q1c">Neutral</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        2. Does your organisation innovate and adopt new technologies to gain better results in business?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="Agree" id="q2a" required />
                                        <label for="q2a">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="Disagree" id="q2b" required />
                                        <label for="q2b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="Neutral" id="q2c" required />
                                        <label for="q2c">Neutral</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        3. Have you ever implemented a Virtual Reality training solution to train or assess your mid-level or senior leadership?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="Agree" id="q3a" required />
                                        <label for="q3a">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="Disagree" id="q3b" required />
                                        <label for="q3b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="Would like to explore" id="q3c" required />
                                        <label for="q3c">Would like to explore</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        4. Are you aware of the fact that VR can enable assessments and drive behaviour change through interactive simulations and AI?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="Aware" id="q4a" required />
                                        <label for="q4a">Aware</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="Unaware" id="q4b" required />
                                        <label for="q4b">Unaware</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="Neutral" id="q4c" required />
                                        <label for="q4c">Neutral</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        5. Is your organisation moving towards upskilling employees through Virtual Reality?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="Agree" id="q5a" required />
                                        <label for="q5a">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="Disagree" id="q5b" required />
                                        <label for="q5b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="Neutral" id="q5c" required />
                                        <label for="q5c">Neutral</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        6. How frequent do you conduct team building activities among team members?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="Frequently" id="q6a" required />
                                        <label for="q6a">Frequently</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="Not frequently" id="q6b" required />
                                        <label for="q6b">Not frequently</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="Depending upon need analysis" id="q6c" required />
                                        <label for="q6c">Depending upon need analysis</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        7. Which type of training intervention would you prefer to upskill your employees?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="Data drive - AI based Interventions" id="q7a" required />
                                        <label for="q7a">Data drive - AI based Interventions</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="Classroom Interventions" id="q7b" required />
                                        <label for="q7b">Classroom Interventions</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="Self-paced learning" id="q7c" required />
                                        <label for="q7c">Self-paced learning</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        8. Do you believe that learning through Virtual reality helps in higher retention and might increase top line revenue of your organisation?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="Agree" id="q8a" required />
                                        <label for="q8a">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="Disagree" id="q8b" required />
                                        <label for="q8b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="Neutral" id="q8c" required />
                                        <label for="q8c">Neutral</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        9. On a scale of 1 to 10, how impactful do you think your current training interventions are?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="1-4" id="q9a" required />
                                        <label for="q9a">1-4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="5-9" id="q9b" required />
                                        <label for="q9b">5-9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="10 and above" id="q9c" required />
                                        <label for="q9c">10 & above</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        10. How frequently do you take initiatives to upskill your employees?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="Actively" id="q10a" required />
                                        <label for="q10a">Actively</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="Not actively" id="q10b" required />
                                        <label for="q10b">Not actively</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="Depending upon the need" id="q10c" required />
                                        <label for="q10c">Depending upon the need</label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className='fcol1 lastinp ptt-20'>
                                    <div className='row inpuut'>
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>

                                        <div className="col-sm-4 mb-12">
                                        <input className='form-control' type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>

                                        <div className='clearfix'></div>

                                        <div className="col-sm-6 mb-12">
                                        <input className='form-control' type="text" name="organization" placeholder="Company Name*" required />
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                        <input className='form-control' type="text" name="designation" placeholder="Designation*" required />
                                        </div>

                                        

                                        <div className='clearfix'></div>

                                        <div className='col-sm-12'>
                                            <input type="submit" value="Submit" id='submitbuttonform' class="assesmetmain" tabindex="201" />
                                            <p class="feedbackcolor" id="showlabel"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>


        </>
    )
}
