import Head from 'next/head'

export default function Ebook(){

    const EbookForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/26/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";                   
                    window.setTimeout(function() {
                        window.location.href = "/cruciallifechangingskills/thank-you"
                    }, 3000);
                    
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&tel-547=" + event.target.phone.value +            
            "&organisation=" + event.target.organization.value +
            "&Q1=" + event.target.q1.value +
            "&Q2=" + event.target.q2.value +
            "&Q3=" + event.target.q3.value +
            "&Q4=" + event.target.q4.value +
            "&Q5=" + event.target.q5.value +
            "&Q6=" + event.target.q6.value +
            "&Q7=" + event.target.q7.value +
            "&Q8=" + event.target.q8.value +
            "&Q9=" + event.target.q9.value +
            "&Q10=" + event.target.q10.value )

    }

    return(
        <>
        <Head>
            <title>Crucial Conversations for Dialogue knowledge Assessment - Crucial Life-Changing Skills</title>
            <meta name="description" content="Working an oil rig in the Gulf of Mexico is physically demanding and potentially dangerous. Crews clock twelve-hour days for two weeks straight amid swinging iron equipment and heavy machinery."/> 
        </Head>
        <section class="about-section pbb-70">
            <div class="container">
                <div class="row">                    
                    <div class="col-lg-12 left-about-area ptt-70 text-center">
                        <h1>Crucial Conversations for Dialogue knowledge Assessment</h1> 
                    </div>

                    <div class="col-md-12 form-area ptt-10">
                    <form id="contactForm" class="row formb workshop-form" onSubmit={EbookForm}>
                        <div class="col-lg-12 contact-title">                       
                        <h3 className='formh3 ptt-5'>
                           Fill in the form below and our subject matter expert will connect with you within 24 working hours.
                        </h3>
                        </div>
                        <div class="col-md-6 col-6">
                        <input type="text" name='name' placeholder="Your Name*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="email" name='email' placeholder="Work Email/Email*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name='organization' placeholder="Organization*" required/> 
                        </div>

                        <div class="col-md-12">
                            <div className="form-group ccinput">
                                <label>Q1: Most of the time our motives are good. But when a conversation turns crucial, something strange happens. Our motives deteriorate. We can quickly go from wanting to learn and understand to wanting to win, be right, and defend ourselves—and usually we don’t even notice it happening. But we can catch ourselves and change our intent by asking the following questions:</label><br/>
                                <input type="radio" id="q1a" name="q1" value="A) What do I really want?" required/>
                                <label for="q1a">A) What do I really want?</label><br/>
                                <input type="radio" id="q1b" name="q1" value="B) What does it look like I want?" required/>
                                <label for="q1b">B) What does it look like I want?</label><br/>
                                <input type="radio" id="q1c" name="q1" value="C) Both A and B" required/>
                                <label for="q1c">C) Both A and B</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div className="form-group ccinput">
                                <label> Q2: _______ Consists of any verbal strategy the attempts to convince, control or compel others to your point of view.</label><br/>
                                <input type="radio" id="q2a" name="q2" value="A) Violence" required/>
                                <label for="q2a">A) Violence</label><br/>
                                <input type="radio" id="q2b" name="q2" value="B) Silence" required/>
                                <label for="q2b">B) Silence</label>                                
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div className="form-group ccinput">
                                <label>Q3: What does the “S” in STATE stand for?</label><br/>
                                <input type="radio" id="q3a" name="q3" value="A) Start with Heart" required/>
                                <label for="q3a">A) Start with Heart</label><br/>
                                <input type="radio" id="q3b" name="q3" value="B) Start with Facts" required/>
                                <label for="q3b">B) Start with Facts</label><br/>
                                <input type="radio" id="q3c" name="q3" value="C) Start with Stories" required/>
                                <label for="q3c">C) Start with Stories</label><br/>
                                <input type="radio" id="q3d" name="q3" value="D) Start with Sarcasm" required/>
                                <label for="q3d">D) Start with Sarcasm</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div className="form-group ccinput">
                                <label>Q4: What clever story makes us out to be innocent sufferers? “It’s not my fault”</label><br/>
                                <input type="radio" id="q4a" name="q4" value="A) Villain" required/>
                                <label for="q4a">A) Villain</label><br/>
                                <input type="radio" id="q4b" name="q4" value="B) Victim" required/>
                                <label for="q4b">B) Victim</label><br/>
                                <input type="radio" id="q4c" name="q4" value="C) Helpless" required/>
                                <label for="q4c">C) Helpless</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div className="form-group ccinput">
                                <label>Q5: What clever story do we turn normal, decent human beings into evil things. “It’s all your fault”</label><br/>
                                <input type="radio" id="q5a" name="q5" value="A) Victim" required/>
                                <label for="q5a">A) Victim</label><br/>
                                <input type="radio" id="q5b" name="q5" value="B) Helpless" required/>
                                <label for="q5b">B) Helpless</label><br/>
                                <input type="radio" id="q5c" name="q5" value="C) Villain" required/>
                                <label for="q5c">C) Villain</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div className="form-group ccinput">
                                <label>Q6: How you express yourself influences how others respond. In the face of disagreement, follow these steps to encourage others to stay in dialogue with you:</label><br/>
                                <input type="radio" id="q6a" name="q6" value="A) Share your facts" required/>
                                <label for="q6a">A) Share your facts</label><br/>
                                <input type="radio" id="q6b" name="q6" value="B) Tell your story" required/>
                                <label for="q6b">B) Tell your story</label><br/>
                                <input type="radio" id="q6c" name="q6" value="C) Ask for other paths" required/>
                                <label for="q6c">C) Ask for other paths</label><br/>
                                <input type="radio" id="q6d" name="q6" value="D) All above options" required/>
                                <label for="q6d">D) All above options</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div className="form-group ccinput">
                                <label>Q7: The two “T”s in STATE stand for.</label><br/>
                                <input type="radio" id="q7a" name="q7" value="A) Talk loud, Tell your story" required/>
                                <label for="q7a">A) Talk loud, Tell your story</label><br/>
                                <input type="radio" id="q7b" name="q7" value="B) Talk tentatively, Tell other’s story" required/>
                                <label for="q7b">B) Talk tentatively, Tell other’s story</label><br/>
                                <input type="radio" id="q7c" name="q7" value="C) Talk tentatively, Tell your story" required/>
                                <label for="q7c">C) Talk tentatively, Tell your story</label><br/>
                                <input type="radio" id="q7d" name="q7" value="D) Talk softly, Tell everyone’s story required"/>
                                <label for="q7d">D) Talk softly, Tell everyone’s story</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div className="form-group ccinput">
                                <label>Q8: Which AMPP skill is defined as-encourage others to share their path to Action and to express themselves.</label><br/>
                                <input type="radio" id="q8a" name="q8" value="A) Ask" required/>
                                <label for="q8a">A) Ask</label><br/>
                                <input type="radio" id="q8b" name="q8" value="B) Mirror" required/>
                                <label for="q8b">B) Mirror</label><br/>
                                <input type="radio" id="q8c" name="q8" value="C) Paraphrase" required/>
                                <label for="q8c">C) Paraphrase</label><br/>
                                <input type="radio" id="q8d" name="q8" value="D) Prime" required/>
                                <label for="q8d">D) Prime</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div className="form-group ccinput">
                                <label>Q9: _______ is offering up your best guess at what the other person is thinking or feeling when he/she does not provide the information.</label><br/>
                                <input type="radio" id="q9a" name="q9" value="A) Ask" required/>
                                <label for="q9a">A) Ask</label><br/>
                                <input type="radio" id="q9b" name="q9" value="B) Mirror" required/>
                                <label for="q9b">B) Mirror</label><br/>
                                <input type="radio" id="q9c" name="q9" value="C) Paraphrase" required/>
                                <label for="q9c">C) Paraphrase</label><br/>
                                <input type="radio" id="q9d" name="q9" value="D) Prime" required/>
                                <label for="q9d">D) Prime</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div className="form-group ccinput">
                                <label>Q10: People shut down or blow up when they feel unsafe. But they rarely feel unsafe because of what you’re saying. It’s why they think you’re saying it that matters. Intent trumps content.</label><br/>
                                <label>If you start a Crucial Conversation with heart and the other person still gets defensive, it’s likely because they misunderstand your intent. You can often correct misunderstanding with a simple __________________.</label><br/>
                                <input type="radio" id="q10a" name="q10" value="A) CPR" required/>
                                <label for="q10a">A) CPR</label><br/>
                                <input type="radio" id="q10b" name="q10" value="B) Contrasting statement" required/>
                                <label for="q10b">B) Contrasting statement</label>
                            </div>
                        </div> 

                        <div class="col-md-12">
                        <input id='submitbuttonform' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </div>
            
                </div>
            </div>
        </section>        
         
        </>
    )
}   
