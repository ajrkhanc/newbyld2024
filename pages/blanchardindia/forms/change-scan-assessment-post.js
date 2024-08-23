import Link from "next/link"
import Head from "next/head"

export default function EdgeManagerAssessment() {

   //   document.contactForm.onclick = function(){
   //       var radVal = document.contactForm.qq1.value;
   //       result.innerHTML = 'You selected: '+radVal;
   //   }
     
   const registerUser = async event => {
      
      
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/184/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            var res = JSON.parse(xhttp.responseText);
            console.log(res)
            if (res.status == "mail_sent") {
               document.getElementById("contactForm").reset();

               document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                   window.location.href = "/blanchardindia/thank-you-lp"
               }, 3000);

            } else {
               document.getElementById("showlabel").innerHTML = "There was a problem with the request.";
               document.getElementById("showlabel").style.display = "block";

            }
         }
      };
      xhttp.send("your-name=" + event.target.fullname.value
         + "&your-email=" + event.target.emailid.value         
         + "&message=" + event.target.messagebox.value
         + "&q1=" + event.target.q1.value
         + "&q2=" + event.target.q2.value
         + "&q3=" + event.target.q3.value
         + "&q4=" + event.target.q4.value
         + "&q5=" + event.target.q5.value
         + "&q6=" + event.target.q6.value
         + "&q7=" + event.target.q7.value
         + "&q8=" + event.target.q8.value
         + "&q9=" + event.target.q9.value
         + "&q10=" + event.target.q10.value
         + "&q11=" + event.target.q11.value
         + "&q12=" + event.target.q12.value
         + "&q13=" + event.target.q13.value
         + "&q14=" + event.target.q14.value
         + "&q15=" + event.target.q15.value
         + "&q16=" + event.target.q16.value
         + "&q17=" + event.target.q17.value
         + "&q18=" + event.target.q18.value
         + "&q19=" + event.target.q19.value
         + "&q20=" + event.target.q20.value
         + "&q21=" + event.target.q21.value
         + "&q22=" + event.target.q22.value
         + "&q23=" + event.target.q23.value
         + "&q24=" + event.target.q24.value
         + "&q25=" + event.target.q25.value
         + "&c1q1=" + event.target.c1q1.value
         + "&c2q2=" + event.target.c2q2.value
         + "&c3q3=" + event.target.c3q3.value
         + "&cu1q2=" + event.target.cu1q2.value
         + "&cu2q2=" + event.target.cu2q2.value
         + "&cu3q2=" + event.target.cu3q2.value
         + "&ag1q3=" + event.target.ag1q3.value
         + "&ag2q3=" + event.target.ag2q3.value
         + "&ag3q3=" + event.target.ag3q3.value
         + "&gr1q4=" + event.target.gr1q4.value
         + "&gr2q4=" + event.target.gr2q4.value
         + "&gr3q4=" + event.target.gr3q4.value
         + "&qq1=" + event.target.qq1.value
         + "&qq2=" + event.target.qq2.value
         + "&qq3=" + event.target.qq3.value
         + "&qq4=" + event.target.qq4.value
         + "&qq5=" + event.target.qq5.value
         + "&qq6=" + event.target.qq6.value
         + "&qq7=" + event.target.qq7.value)

   }

   

if (typeof window !== "undefined") {
   document.contactForm.onclick = function(){
      var fr1 = document.contactForm.c1q1.value;
      var fr2 = document.contactForm.c2q2.value;
      var fr3 = document.contactForm.c3q3.value;
      var courseresult = parseInt(fr1) + parseInt(fr2) + parseInt(fr3)
      result1.innerHTML = 'Courage Total: '+courseresult;
      couresult.innerHTML = courseresult;

      var two1 = document.contactForm.cu1q2.value;
      var two2 = document.contactForm.cu2q2.value;
      var two3 = document.contactForm.cu3q2.value;
      var couriosityresult = parseInt(two1) + parseInt(two2) + parseInt(two3)
      couriosityresult1.innerHTML = 'Curiosity Total: '+couriosityresult;
      curresult.innerHTML = couriosityresult;

      var thre1 = document.contactForm.ag1q3.value;
      var thre2 = document.contactForm.ag2q3.value;
      var thre3 = document.contactForm.ag3q3.value;
      var agilityresult = parseInt(thre1) + parseInt(thre2) + parseInt(thre3)
      agilityresult1.innerHTML = 'Agility Total: '+agilityresult;
      agresult.innerHTML = agilityresult;

      var four1 = document.contactForm.gr1q4.value;
      var four2 = document.contactForm.gr2q4.value;
      var four3 = document.contactForm.gr3q4.value;
      var gritresult = parseInt(four1) + parseInt(four2) + parseInt(four3)
      gritresult1.innerHTML = 'Grit Total: '+gritresult;
      grresult.innerHTML = gritresult;
  }
 }

   return (
      <> 

<div id="results"></div>
         <Head>
            <title>Change Scan Assessment Post - Blanchard India</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div>
            <div className="inner-banner edge-self-assessment-headbg">
               <div className="container">
                  <div className="inner-title text-center">
                     <h3>Change Scan Assessment</h3>
                     <ul>
                        <li>
                           <Link href="/">Home</Link>
                        </li>
                        <li>Change Scan Assessment</li>
                     </ul>
                  </div>
               </div>
               <div className="inner-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
               </div>
            </div>

             
            <div className="contact-area pt-45 pb-40">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="contact-form">
                            <p>Thank You for taking out valuable time to complete this assessment as part of your Leading People Through Change workshop. The Change Scan presents a snapshot of the likelihood of successfully implementing a specific change. It provides insight as to where the change is set up for success and where it could derail or fail. </p>
                            <p><b>Before we begin, please share the following details –</b></p>
                            
                           <form id="contactForm" name="contactForm" onSubmit={registerUser}>
                              <div className="row">
                        

                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="fullname" id="fullname" className="form-control" placeholder="Your Name*" required />
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="email" name="emailid" id="emailid" className="form-control" placeholder="Work Email/Email*" required />
                                    </div>
                                 </div>
                                
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                    <h4>Let us begin –</h4>
                                    <textarea name="messagebox" className="form-control" id="messagebox" cols="30" rows="3" placeholder="What is the change initiative?" />
                                    </div>
                                 </div>

                                 <div className="highinnovatin">
                                    <h2>High-Involvement Change Mindset</h2>
                                    <div className="highrating">
                                       <div className="ratess borrr">
                                          1 = Never
                                       </div>
                                       <div className="ratess borrr">
                                          2 = Rarely
                                       </div>
                                       <div className="ratess borrr">
                                          3 = Frequently
                                       </div>
                                       <div className="ratess">
                                          4 = Always
                                       </div>
                                    </div>
                                    <p className="mset">
                                       Rate how often you display these behaviors for each attribute of a high-involvement change mindset.
                                    </p>
                                 </div>

                                 
                                <div className="headh">
                                    <h3>Courage</h3>
                                    <h5>Strenght in the cage of chanllenges and uncertainty</h5>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>1. Move toward  what is uncomfortable or creates a sense of vulnerability</label><br/>
                                        <input type="radio" id="c1StronglyDisagree1" name="c1q1" value="1" required/>
                                          <label for="c1StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="c1Disagree1" name="c1q1" value="2" required/>
                                          <label for="c1Disagree1">2</label><br/>
                                         <input type="radio" id="c1Agree1" name="c1q1" value="3" required/>
                                          <label for="c1Agree1">3</label><br/>
                                          <input type="radio" id="c1StronglyAgree1" name="c1q1" value="4" required/>
                                          <label for="c1StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>2. Tell the truth about what is and what needs to change</label><br/>
                                        <input type="radio" id="c2StronglyDisagree1" name="c2q2" value="1" required/>
                                          <label for="c2StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="c2Disagree1" name="c2q2" value="2" required/>
                                          <label for="c2Disagree1">2</label><br/>
                                         <input type="radio" id="c2Agree1" name="c2q2" value="3" required/>
                                          <label for="c2Agree1">3</label><br/>
                                          <input type="radio" id="c2StronglyAgree1" name="c2q2" value="4" required/>
                                          <label for="c2StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>3. Change your approach to change-share control by involving others in chang-marking</label><br/>
                                        <input type="radio" id="c3StronglyDisagree1" name="c3q3" value="1" required/>
                                          <label for="c3StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="c3Disagree1" name="c3q3" value="2" required/>
                                          <label for="c3Disagree1">2</label><br/>
                                         <input type="radio" id="c3Agree1" name="c3q3" value="3" required/>
                                          <label for="c3Agree1">3</label><br/>
                                          <input type="radio" id="c3StronglyAgree1" name="c3q3" value="4" required/>
                                          <label for="c3StronglyAgree1">4</label>
                                    </div>
                                 </div>
                                 <div className="resultd">
                                    <span id="result1"></span>
                                 </div>

                                 <div className="headh">
                                    <h3>Curiosity</h3>
                                    <h5>A strong desire to know, learn, or understand something</h5>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>1. Ask about what is not fully understood</label><br/>
                                        <input type="radio" id="cu1StronglyDisagree1" name="cu1q2" value="1" required/>
                                          <label for="cu1StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="cu1Disagree1" name="cu1q2" value="2" required/>
                                          <label for="cu1Disagree1">2</label><br/>
                                         <input type="radio" id="cu1Agree1" name="cu1q2" value="3" required/>
                                          <label for="cu1Agree1">3</label><br/>
                                          <input type="radio" id="c1StronglyAgree1" name="cu1q2" value="4" required/>
                                          <label for="cu1StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>2. Express interest in others' experiences, opinions, feelings, and well-being</label><br/>
                                        <input type="radio" id="cu2StronglyDisagree1" name="cu2q2" value="1" required/>
                                          <label for="cu2StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="cu2Disagree1" name="cu2q2" value="2" required/>
                                          <label for="cu2Disagree1">2</label><br/>
                                         <input type="radio" id="cu2Agree1" name="cu2q2" value="3" required/>
                                          <label for="cu2Agree1">3</label><br/>
                                          <input type="radio" id="cu2StronglyAgree1" name="cu2q2" value="4" required/>
                                          <label for="cu2StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>3. Demonstrate that you value others by involving them in the change process and hearing their voices</label><br/>
                                        <input type="radio" id="cu3StronglyDisagree1" name="cu3q2" value="1" required/>
                                          <label for="cu3StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="cu3Disagree1" name="cu3q2" value="2" required/>
                                          <label for="cu3Disagree1">2</label><br/>
                                         <input type="radio" id="cu3Agree1" name="cu3q2" value="3" required/>
                                          <label for="cu3Agree1">3</label><br/>
                                          <input type="radio" id="cu3StronglyAgree1" name="cu3q2" value="4" required/>
                                          <label for="cu3StronglyAgree1">4</label>
                                    </div>
                                 </div>
                                 <div className="resultd">
                                    <span id="couriosityresult1"></span>
                                 </div>



                                 <div className="headh">
                                    <h3>Agility</h3>
                                    <h5>The ability to think, understand, and move quickly</h5>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>1. Recognize the need to change and act quickly</label><br/>
                                        <input type="radio" id="ag1StronglyDisagree1" name="ag1q3" value="1" required/>
                                          <label for="ag1StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="ag1Disagree1" name="ag1q3" value="2" required/>
                                          <label for="ag1Disagree1">2</label><br/>
                                         <input type="radio" id="ag1Agree1" name="ag1q3" value="3" required/>
                                          <label for="ag1Agree1">3</label><br/>
                                          <input type="radio" id="ag1StronglyAgree1" name="ag1q3" value="4" required/>
                                          <label for="ag1StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>2. Remain open-minded when things don't go as planned</label><br/>
                                        <input type="radio" id="ag2StronglyDisagree1" name="ag2q3" value="1" required/>
                                          <label for="ag2StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="ag2Disagree1" name="ag2q3" value="2" required/>
                                          <label for="ag2Disagree1">2</label><br/>
                                         <input type="radio" id="ag2Agree1" name="ag2q3" value="3" required/>
                                          <label for="ag2Agree1">3</label><br/>
                                          <input type="radio" id="ag2StronglyAgree1" name="ag2q3" value="4" required/>
                                          <label for="ag2StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>3. Anticipate and flexibly respond to others' concerns</label><br/>
                                        <input type="radio" id="ag3StronglyDisagree1" name="ag3q3" value="1" required/>
                                          <label for="ag3StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="ag3Disagree1" name="ag3q3" value="2" required/>
                                          <label for="ag3Disagree1">2</label><br/>
                                         <input type="radio" id="ag3Agree1" name="ag3q3" value="3" required/>
                                          <label for="ag3Agree1">3</label><br/>
                                          <input type="radio" id="ag3StronglyAgree1" name="ag3q3" value="4" required/>
                                          <label for="ag3StronglyAgree1">4</label>
                                    </div>
                                 </div>
                                 <div className="resultd">
                                    <span id="agilityresult1"></span>
                                 </div>

                                 <div className="headh">
                                    <h3>Grit</h3>
                                    <h5>The ability to withstand discomfort; resilience</h5>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>1. Demonstrate passion for achieving lonng-term goals</label><br/>
                                        <input type="radio" id="gr1StronglyDisagree1" name="gr1q4" value="1" required/>
                                          <label for="gr1StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="gr1Disagree1" name="gr1q4" value="2" required/>
                                          <label for="gr1Disagree1">2</label><br/>
                                         <input type="radio" id="gr1Agree1" name="gr1q4" value="3" required/>
                                          <label for="gr1Agree1">3</label><br/>
                                          <input type="radio" id="gr1StronglyAgree1" name="gr1q4" value="4" required/>
                                          <label for="gr1StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>2. Persevere in the face of discomfort and chanllenges</label><br/>
                                        <input type="radio" id="gr2StronglyDisagree1" name="gr2q4" value="1" required/>
                                          <label for="gr2StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="gr2Disagree1" name="gr2q4" value="2" required/>
                                          <label for="gr2Disagree1">2</label><br/>
                                         <input type="radio" id="gr2Agree1" name="gr2q4" value="3" required/>
                                          <label for="gr2Agree1">3</label><br/>
                                          <input type="radio" id="gr2StronglyAgree1" name="gr2q4" value="4" required/>
                                          <label for="gr2StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>3. Demonstrate resolve in seeing things through</label><br/>
                                        <input type="radio" id="gr3StronglyDisagree1" name="gr3q4" value="1" required/>
                                          <label for="gr3StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="gr3Disagree1" name="gr3q4" value="2" required/>
                                          <label for="gr3Disagree1">2</label><br/>
                                         <input type="radio" id="gr3Agree1" name="gr3q4" value="3" required/>
                                          <label for="gr3Agree1">3</label><br/>
                                          <input type="radio" id="gr3StronglyAgree1" name="gr3q4" value="4" required/>
                                          <label for="gr3StronglyAgree1">4</label>
                                    </div>
                                 </div>
                                 <div className="resultd">
                                    <span id="gritresult1"></span>
                                 </div>


                                 <div className="headh">
                                    <h3>Total Scores</h3>
                                    <div className="totals">
                                       <div className="scord">
                                          <span className="cname">Courage: </span>
                                          <span className="cvalue" id="couresult"></span>
                                       </div>

                                       <div className="scord">
                                          <span className="cname">Curiosity: </span>
                                          <span className="cvalue" id="curresult"></span>
                                       </div>

                                       <div className="scord">
                                          <span className="cname">Agility: </span>
                                          <span className="cvalue" id="agresult"></span>
                                       </div>

                                       <div className="scord">
                                          <span className="cname">Grit: </span>
                                          <span className="cvalue" id="grresult"></span>
                                       </div>
                                    </div>
                                </div>

                                <div className="highinnovatin">
                                    <h2>Change Scan</h2>
                                    <div className="highrating">
                                       <div className="ratess borrr">
                                          1 = Strongly Disagree
                                       </div>
                                       <div className="ratess borrr">
                                          2 = Disagree
                                       </div>
                                       <div className="ratess borrr">
                                          3 = Agree
                                       </div>
                                       <div className="ratess">
                                          4 = Strongly Agree
                                       </div>
                                    </div>
                                    <p className="mset">
                                    IDENTIFY the change initiative, then READ each statement below. For statements 1 through 24, select the response that indicates your level of agreement. For statement 25, select the phrase that best describes your attitude about this change.
                                    </p>
                                 </div>

                                 

                                 
      
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>1. I have/will have opportunities to influence decisions related to this change.</label><br/>
                                        <input type="radio" id="StronglyDisagree1" name="q1" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree1">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree1" name="q1" value="B. Disagree" required/>
                                          <label for="Disagree1">B. Disagree</label><br/>
                                         <input type="radio" id="Agree1" name="q1" value="C. Agree" required/>
                                          <label for="Agree1">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree1" name="q1" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree1">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>2. People being asked to change are/will be involved in planning for it.</label><br/>
                                        <input type="radio" id="StronglyDisagree2" name="q2" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree2">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree2" name="q2" value="B. Disagree" required/>
                                          <label for="Disagree2">B. Disagree</label><br/>
                                         <input type="radio" id="Agree2" name="q2" value="C. Agree" required/>
                                          <label for="Agree2">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree2" name="q2" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree2">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>3. I have/will have opportunities to raise questions/express concerns with this change.</label><br/>
                                        <input type="radio" id="StronglyDisagree3" name="q3" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree3">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree3" name="q3" value="B. Disagree" required/>
                                          <label for="Disagree3">B. Disagree</label><br/>
                                         <input type="radio" id="Agree3" name="q3" value="C. Agree" required/>
                                          <label for="Agree3">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree3" name="q3" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree3">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>4. I have peers who actively support this change.</label><br/>
                                        <input type="radio" id="StronglyDisagree4" name="q4" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree4">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree4" name="q4" value="B. Disagree" required/>
                                          <label for="Disagree4">B. Disagree</label><br/>
                                         <input type="radio" id="Agree4" name="q4" value="C. Agree" required/>
                                          <label for="Agree4">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree4" name="q4" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree4">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>5. I understand why we need to change.</label><br/>
                                        <input type="radio" id="StronglyDisagree5" name="q5" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree5">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree5" name="q5" value="B. Disagree" required/>
                                          <label for="Disagree5">B. Disagree</label><br/>
                                         <input type="radio" id="Agree5" name="q5" value="C. Agree" required/>
                                          <label for="Agree5">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree5" name="q5" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree5">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>6. I have a clear picture of what we’re trying to achieve.</label><br/>
                                        <input type="radio" id="StronglyDisagree6" name="q6" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree6">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree6" name="q6" value="B. Disagree" required/>
                                          <label for="Disagree6">B. Disagree</label><br/>
                                         <input type="radio" id="Agree6" name="q6" value="C. Agree" required/>
                                          <label for="Agree6">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree6" name="q6" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree6">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>7. Communication about the change is/will be consistent, regardless of who is communicating.</label><br/>
                                        <input type="radio" id="StronglyDisagree7" name="q7" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree7">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree7" name="q7" value="B. Disagree" required/>
                                          <label for="Disagree7">B. Disagree</label><br/>
                                         <input type="radio" id="Agree7" name="q7" value="C. Agree" required/>
                                          <label for="Agree7">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree7" name="q7" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree7">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>8. I am excited about the impact this change will have on the organization.</label><br/>
                                        <input type="radio" id="StronglyDisagree8" name="q8" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree8">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree8" name="q8" value="B. Disagree" required/>
                                          <label for="Disagree8">B. Disagree</label><br/>
                                         <input type="radio" id="Agree8" name="q8" value="C. Agree" required/>
                                          <label for="Agree8">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree8" name="q8" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree8">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>9. I see myself benefiting from this change.</label><br/>
                                        <input type="radio" id="StronglyDisagree9" name="q9" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree9">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree9" name="q9" value="B. Disagree" required/>
                                          <label for="Disagree9">B. Disagree</label><br/>
                                         <input type="radio" id="Agree9" name="q9" value="C. Agree" required/>
                                          <label for="Agree9">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree9" name="q9" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree9">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>10. The change plan is/will be well thought out and realistic.</label><br/>
                                        <input type="radio" id="StronglyDisagree10" name="q10" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree10">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree10" name="q10" value="B. Disagree" required/>
                                          <label for="Disagree10">B. Disagree</label><br/>
                                         <input type="radio" id="Agree10" name="q10" value="C. Agree" required/>
                                          <label for="Agree10">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree10" name="q10" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree10">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>11. Barriers to success are/will be surfaced and addressed.</label><br/>
                                        <input type="radio" id="StronglyDisagree11" name="q11" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree11">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree11" name="q11" value="B. Disagree" required/>
                                          <label for="Disagree11">B. Disagree</label><br/>
                                         <input type="radio" id="Agree11" name="q11" value="C. Agree" required/>
                                          <label for="Agree11">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree11" name="q11" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree11">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>12. The right people are being/will be asked the right questions about what could go wrong.</label><br/>
                                        <input type="radio" id="StronglyDisagree12" name="q12" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree12">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree12" name="q12" value="B. Disagree" required/>
                                          <label for="Disagree12">B. Disagree</label><br/>
                                         <input type="radio" id="Agree12" name="q12" value="C. Agree" required/>
                                          <label for="Agree12">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree12" name="q12" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree12">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>13. I have/will have the resources I need to implement this change.</label><br/>
                                        <input type="radio" id="StronglyDisagree13" name="q13" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree13">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree13" name="q13" value="B. Disagree" required/>
                                          <label for="Disagree13">B. Disagree</label><br/>
                                         <input type="radio" id="Agree13" name="q13" value="C. Agree" required/>
                                          <label for="Agree13">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree13" name="q13" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree13">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>14. I understand the priority of this change in relation to other initiatives.</label><br/>
                                        <input type="radio" id="StronglyDisagree14" name="q14" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree14">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree14" name="q14" value="B. Disagree" required/>
                                          <label for="Disagree14">B. Disagree</label><br/>
                                         <input type="radio" id="Agree14" name="q14" value="C. Agree" required/>
                                          <label for="Agree14">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree14" name="q14" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree14">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>15. I know how success will be measured.</label><br/>
                                        <input type="radio" id="StronglyDisagree15" name="q15" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree15">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree15" name="q15" value="B. Disagree" required/>
                                          <label for="Disagree15">B. Disagree</label><br/>
                                         <input type="radio" id="Agree15" name="q15" value="C. Agree" required/>
                                          <label for="Agree15">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree15" name="q15" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree15">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>16. The organization will test this change before rolling it out.</label><br/>
                                        <input type="radio" id="StronglyDisagree16" name="q16" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree16">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree16" name="q16" value="B. Disagree" required/>
                                          <label for="Disagree16">B. Disagree</label><br/>
                                         <input type="radio" id="Agree16" name="q16" value="C. Agree" required/>
                                          <label for="Agree16">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree16" name="q16" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree16">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>17. The organization is fixing/will fix implementation issues.</label><br/>
                                        <input type="radio" id="StronglyDisagree17" name="q17" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree17">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree17" name="q17" value="B. Disagree" required/>
                                          <label for="Disagree17">B. Disagree</label><br/>
                                         <input type="radio" id="Agree17" name="q17" value="C. Agree" required/>
                                          <label for="Agree17">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree17" name="q17" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree17">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>18. We are learning/will learn from successes and setbacks.</label><br/>
                                        <input type="radio" id="StronglyDisagree18" name="q18" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree18">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree18" name="q18" value="B. Disagree" required/>
                                          <label for="Disagree18">B. Disagree</label><br/>
                                         <input type="radio" id="Agree18" name="q18" value="C. Agree" required/>
                                          <label for="Agree18">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree18" name="q18" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree18">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>19. Impact data is/will be shared to prove the change is working.</label><br/>
                                        <input type="radio" id="StronglyDisagree19" name="q19" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree19">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree19" name="q19" value="B. Disagree" required/>
                                          <label for="Disagree19">B. Disagree</label><br/>
                                         <input type="radio" id="Agree19" name="q19" value="C. Agree" required/>
                                          <label for="Agree19">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree19" name="q19" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree19">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>20. People leading this change model the mindset expected of others: courage, curiosity, agility, and grit.</label><br/>
                                        <input type="radio" id="StronglyDisagree20" name="q20" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree20">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree20" name="q20" value="B. Disagree" required/>
                                          <label for="Disagree20">B. Disagree</label><br/>
                                         <input type="radio" id="Agree20" name="q20" value="C. Agree" required/>
                                          <label for="Agree20">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree20" name="q20" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree20">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>21. I am/others are or will be held accountable for contributing to the success of this change.</label><br/>
                                        <input type="radio" id="StronglyDisagree21" name="q21" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree21">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree21" name="q21" value="B. Disagree" required/>
                                          <label for="Disagree21">B. Disagree</label><br/>
                                         <input type="radio" id="Agree21" name="q21" value="C. Agree" required/>
                                          <label for="Agree21">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree21" name="q21" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree21">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>22. A critical mass of people will eventually become advocates for this change.</label><br/>
                                        <input type="radio" id="StronglyDisagree22" name="q22" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree22">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree22" name="q22" value="B. Disagree" required/>
                                          <label for="Disagree22">B. Disagree</label><br/>
                                         <input type="radio" id="Agree22" name="q22" value="C. Agree" required/>
                                          <label for="Agree22">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree22" name="q22" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree22">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>23. I am confident the organization will continue to improve on the original idea.</label><br/>
                                        <input type="radio" id="StronglyDisagree23" name="q23" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree23">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree23" name="q23" value="B. Disagree" required/>
                                          <label for="Disagree23">B. Disagree</label><br/>
                                         <input type="radio" id="Agree23" name="q23" value="C. Agree" required/>
                                          <label for="Agree23">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree23" name="q23" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree23">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>24. I am confident in the ability of the organization to sustain this change.</label><br/>
                                        <input type="radio" id="StronglyDisagree24" name="q24" value="A. Strongly Disagree" required/>
                                          <label for="StronglyDisagree24">A. Strongly Disagree</label><br/>
                                        <input type="radio" id="Disagree24" name="q24" value="B. Disagree" required/>
                                          <label for="Disagree24">B. Disagree</label><br/>
                                         <input type="radio" id="Agree24" name="q24" value="C. Agree" required/>
                                          <label for="Agree24">C. Agree</label><br/>
                                          <input type="radio" id="StronglyAgree24" name="q24" value="D. Strongly Agree" required/>
                                          <label for="StronglyAgree24">D. Strongly Agree</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>25. At this point in the change process, I am generally</label><br/>
                                        <input type="radio" id="StronglyDisagree25" name="q25" value="A. Supportive of this change" required/>
                                          <label for="StronglyDisagree25">A. Supportive of this change</label><br/>
                                        <input type="radio" id="Disagree25" name="q25" value="B. Undecided about this change" required/>
                                          <label for="Disagree25">B. Undecided about this change</label><br/>
                                         <input type="radio" id="Agree25" name="q25" value="C. Not supportive of this change" required/>
                                          <label for="Agree25">C. Not supportive of this change</label><br/>
                                       
                                    </div>
                                 </div>

                                 <div className="highinnovatin">
                                    <h2>Unsuccessful Past Change</h2>                                 
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                    <label>1. Describe an unsuccessful past change effort you led or were impacted by.</label><br/>
                                       <input type="text" name="qq1" className="form-control" required />
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                    <label>2. What were the three most critical reasons that the change was not successful?</label><br/>
                                       <input type="text" name="qq2" className="form-control" required />
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                    <label>3. When you think of specific people impacted by the change, what were the concerns they had that were not expected or addressed?</label><br/>
                                       <input type="text" name="qq3" className="form-control" required />
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>4. When the change was first announed what was your attitude toward the change?</label><br/>
                                        <input type="radio" id="qq4StronglyDisagree25" name="qq4" value="A. Supportive" required/>
                                          <label for="qq4StronglyDisagree25">A. Supportive</label><br/>
                                        <input type="radio" id="qq4Disagree25" name="qq4" value="B. Undecided" required/>
                                          <label for="qq4Disagree25">B. Undecided</label><br/>
                                         <input type="radio" id="qq4Agree25" name="qq4" value="C. Not supportive" required/>
                                          <label for="qq4Agree25">C. Not supportive</label><br/>
                                       
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>5. To what extent did your or others have opportunities to raise questions about the change?</label><br/>
                                        <input type="radio" id="qq5StronglyDisagree1" name="qq5" value="1" required/>
                                          <label for="qq5StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="qq5Disagree1" name="qq5" value="2" required/>
                                          <label for="qq5Disagree1">2</label><br/>
                                         <input type="radio" id="qq5Agree1" name="qq5" value="3" required/>
                                          <label for="qq5Agree1">3</label><br/>
                                          <input type="radio" id="qq5StronglyAgree1" name="qq5" value="4" required/>
                                          <label for="qq5StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>6. To what extent were you or others involved in planning for the change?</label><br/>
                                        <input type="radio" id="qq6StronglyDisagree1" name="qq6" value="1" required/>
                                          <label for="qq6StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="qq6Disagree1" name="qq6" value="2" required/>
                                          <label for="qq6Disagree1">2</label><br/>
                                         <input type="radio" id="qq6Agree1" name="qq6" value="3" required/>
                                          <label for="qq6Agree1">3</label><br/>
                                          <input type="radio" id="qq6StronglyAgree1" name="qq6" value="4" required/>
                                          <label for="qq6StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>7. To what extent did you or others understand why the change was needed?</label><br/>
                                        <input type="radio" id="qq7StronglyDisagree1" name="qq7" value="1" required/>
                                          <label for="qq7StronglyDisagree1">1</label><br/>
                                        <input type="radio" id="qq7Disagree1" name="qq7" value="2" required/>
                                          <label for="qq7Disagree1">2</label><br/>
                                         <input type="radio" id="qq7Agree1" name="qq7" value="3" required/>
                                          <label for="qq7Agree1">3</label><br/>
                                          <input type="radio" id="qq7StronglyAgree1" name="qq7" value="4" required/>
                                          <label for="qq7StronglyAgree1">4</label>
                                    </div>
                                 </div>

                                 <div className="resultd">
                                    <span className="mysp"><span>Scale</span> <span>1</span> = not at all <span>5</span> = a lot</span>
                                 </div>
                                   
                                 <div className="col-lg-12 col-md-12">
                                    <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="Submit" />
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                    <p id="showlabel" style={{ display: "none" }}></p>
                                 </div>
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