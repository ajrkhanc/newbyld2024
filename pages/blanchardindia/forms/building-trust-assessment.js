import Link from "next/link"
import Head from "next/head"

export default function EdgeSelfAssessment() {
   const registerUser = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/64/feedback');
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
      xhttp.send("leadsquared-FirstName=" + event.target.fullname.value +
            "&leadsquared-EmailAddress=" + event.target.emailid.value +
            "&leadsquared-Mobile=" + event.target.phoeno.value +
            "&leadsquared-Company=" + event.target.organisation.value +
            "&bt1=" + event.target.question1.value +
            "&bt2=" + event.target.question2.value +
            "&bt3=" + event.target.question3.value +
            "&bt4=" + event.target.question4.value +
            "&bt5=" + event.target.question5.value +
            "&bt6=" + event.target.question6.value +
            "&bt7=" + event.target.question7.value +
            "&bt8=" + event.target.question8.value +
            "&bt9=" + event.target.question9.value +
            "&bt10=" + event.target.question10.value +
            "&bt11=" + event.target.question11.value +
            "&bt12=" + event.target.question12.value +
            "&bt13=" + event.target.question13.value +
            "&bt14=" + event.target.question14.value +
            "&bt15=" + event.target.question15.value +
            "&bt16=" + event.target.question16.value +
            "&bt17=" + event.target.question17.value +
            "&bt18=" + event.target.question18.value +
            "&bt19=" + event.target.question19.value +
            "&bt20=" + event.target.question20.value +
            "&bt21=" + event.target.question21.value +
            "&bt22=" + event.target.question22.value +
            "&bt23=" + event.target.question23.value +
            "&bt24=" + event.target.question24.value +
            "&bt25=" + event.target.question25.value +
            "&bt26=" + event.target.question26.value +
            "&bt27=" + event.target.question27.value +
            "&bt28=" + event.target.question28.value +
            "&checkbox-640=" + event.target.chb1.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

   }

   return (
      <>
         <Head>
            <title>Building Trust Assessment - Blanchard India</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

<div>
            <div className="inner-banner edge-self-assessment-headbg">
               <div className="container">
                  <div className="inner-title text-center">
                     <h3>Building Trust Assessment</h3>
                     <ul>
                        <li>
                           <Link href="/">Home</Link>
                        </li>
                        <li>Building Trust Assessment</li>
                     </ul>
                  </div>
               </div>
               <div className="inner-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
               </div>
            </div>

            <div className="container pt-45">
               <div className="row">
                  <div className="col-sm-12 text-center">
                     <div className="section-title">
                        <span className="sp-color1">Attempt this quick assessment and our subject matter experts will tell you your score. Fill in your details to access the assessment.</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="contact-area pt-45 pb-40">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="contact-form">
                        <form id="contactForm" className="radionbtnm" method="post" onSubmit={registerUser}>
                              <div className="row">
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="fullname" id="fullname" className="form-control" placeholder="Full Name*" required />
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="email" name="emailid" id="emailid" className="form-control" placeholder="Work Email/Email*" required />
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="phoeno" id="phoeno" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*" required />
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="organisation" id="organisation" className="form-control" placeholder="Organisation*" required />
                                    </div>
                                 </div>
                                 
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                        <h4>When you demonstrate competence and skills, you are ABLE, which builds trust.</h4>
                                        <p>Becoming a master of trust begins with examining your own behaviors in the four domains of trust: <b>Able, Believable, Connected, and Dependable.</b> Using the response legend to the right, complete the following self-assessment. Submit your responses to discover your strengths—as well as the areas where you can improve.</p>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>1) Get quality results:</label><br/>
                                        <input checked type="radio" id="almostalways" name="question1" value="Hardly Ever" required="required"/>
                                          <label for="almostalways">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently" name="question1" value="Sometimes" required="required"/>
                                          <label for="veryfrequently">Sometimes</label><br/>
                                         <input type="radio" id="frequently" name="question1" value="Often" required="required"/>
                                          <label for="frequently">Often</label><br/>
                                          <input type="radio" id="infrequently" name="question1" value="Very Often" required="required"/>
                                          <label for="infrequently">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently" name="question1" value="Always" required="required"/>
                                          <label for="veryinfrequently">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>2) Solve problems:</label><br/>
                                        <input checked type="radio" id="almostalways2" name="question2" value="Hardly Ever" required="required"/>
                                          <label for="almostalways2">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently2" name="question2" value="Sometimes" required="required"/>
                                          <label for="veryfrequently2">Sometimes</label><br/>
                                         <input type="radio" id="frequently2" name="question2" value="Often" required="required"/>
                                          <label for="frequently2">Often</label><br/>
                                          <input type="radio" id="infrequently2" name="question2" value="Very Often" required="required"/>
                                          <label for="infrequently2">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently2" name="question2" value="Always" required="required"/>
                                          <label for="veryinfrequently2">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>3) Am highly skilled:</label><br/>
                                        <input checked type="radio" id="almostalways3" name="question3" value="Hardly Ever" required="required"/>
                                          <label for="almostalways3">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently3" name="question3" value="Sometimes" required="required"/>
                                          <label for="veryfrequently3">Sometimes</label><br/>
                                         <input type="radio" id="frequently3" name="question3" value="Often" required="required"/>
                                          <label for="frequently3">Often</label><br/>
                                          <input type="radio" id="infrequently3" name="question3" value="Very Often" required="required"/>
                                          <label for="infrequently3">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently3" name="question3" value="Always" required="required"/>
                                          <label for="veryinfrequently3">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>4) Am good at what I do:</label><br/>
                                        <input checked type="radio" id="almostalways4" name="question4" value="Hardly Ever" required="required"/>
                                          <label for="almostalways4">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently4" name="question4" value="Sometimes" required="required"/>
                                          <label for="veryfrequently4">Sometimes</label><br/>
                                         <input type="radio" id="frequently4" name="question4" value="Often" required="required"/>
                                          <label for="frequently4">Often</label><br/>
                                          <input type="radio" id="infrequently4" name="question4" value="Very Often" required="required"/>
                                          <label for="infrequently4">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently4" name="question4" value="Always" required="required"/>
                                          <label for="veryinfrequently4">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>5) Have relevant experience:</label><br/>
                                        <input checked type="radio" id="almostalways5" name="question5" value="Hardly Ever" required="required"/>
                                          <label for="almostalways5">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently5" name="question5" value="Sometimes" required="required"/>
                                          <label for="veryfrequently5">Sometimes</label><br/>
                                         <input type="radio" id="frequently5" name="question5" value="Often" required="required"/>
                                          <label for="frequently5">Often</label><br/>
                                          <input type="radio" id="infrequently5" name="question5" value="Very Often" required="required"/>
                                          <label for="infrequently5">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently5" name="question5" value="Always" required="required"/>
                                          <label for="veryinfrequently5">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>6) Use my skills to assist others:</label><br/>
                                        <input checked type="radio" id="almostalways6" name="question6" value="Hardly Ever" required="required"/>
                                          <label for="almostalways6">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently6" name="question6" value="Sometimes" required="required"/>
                                          <label for="veryfrequently6">Sometimes</label><br/>
                                         <input type="radio" id="frequently6" name="question6" value="Often" required="required"/>
                                          <label for="frequently6">Often</label><br/>
                                          <input type="radio" id="infrequently6" name="question6" value="Very Often" required="required"/>
                                          <label for="infrequently6">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently6" name="question6" value="Always" required="required"/>
                                          <label for="veryinfrequently6">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>7) Strive to be the best at what I do:</label><br/>
                                        <input checked type="radio" id="almostalways7" name="question7" value="Hardly Ever" required="required"/>
                                          <label for="almostalways7">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently7" name="question7" value="Sometimes" required="required"/>
                                          <label for="veryfrequently7">Sometimes</label><br/>
                                         <input type="radio" id="frequently7" name="question7" value="Often" required="required"/>
                                          <label for="frequently7">Often</label><br/>
                                          <input type="radio" id="infrequently7" name="question7" value="Very Often" required="required"/>
                                          <label for="infrequently7">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently7" name="question7" value="Always" required="required"/>
                                          <label for="veryinfrequently7">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>8) Keep confidences:</label><br/>
                                        <input checked type="radio" id="almostalways8" name="question8" value="Hardly Ever" required="required"/>
                                          <label for="almostalways8">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently8" name="question8" value="Sometimes" required="required"/>
                                          <label for="veryfrequently8">Sometimes</label><br/>
                                         <input type="radio" id="frequently8" name="question8" value="Often" required="required"/>
                                          <label for="frequently8">Often</label><br/>
                                          <input type="radio" id="infrequently8" name="question8" value="Very Often" required="required"/>
                                          <label for="infrequently8">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently8" name="question8" value="Always" required="required"/>
                                          <label for="veryinfrequently8">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>9) Admit when I am wrong:</label><br/>
                                        <input checked type="radio" id="almostalways9" name="question9" value="Hardly Ever" required="required"/>
                                          <label for="almostalways9">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently9" name="question9" value="Sometimes" required="required"/>
                                          <label for="veryfrequently9">Sometimes</label><br/>
                                         <input type="radio" id="frequently9" name="question9" value="Often" required="required"/>
                                          <label for="frequently9">Often</label><br/>
                                          <input type="radio" id="infrequently9" name="question9" value="Very Often" required="required"/>
                                          <label for="infrequently9">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently9" name="question9" value="Always" required="required"/>
                                          <label for="veryinfrequently9">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>10) Am honest:</label><br/>
                                        <input checked type="radio" id="almostalways10" name="question10" value="Hardly Ever" required="required"/>
                                          <label for="almostalways10">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently10" name="question10" value="Sometimes" required="required"/>
                                          <label for="veryfrequently10">Sometimes</label><br/>
                                         <input type="radio" id="frequently10" name="question10" value="Often" required="required"/>
                                          <label for="frequently10">Often</label><br/>
                                          <input type="radio" id="infrequently10" name="question10" value="Very Often" required="required"/>
                                          <label for="infrequently10">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently10" name="question10" value="Always" required="required"/>
                                          <label for="veryinfrequently10">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>11) Avoid talking behind people's backs:</label><br/>
                                        <input checked type="radio" id="almostalways11" name="question11" value="Hardly Ever" required="required"/>
                                          <label for="almostalways11">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently11" name="question11" value="Sometimes" required="required"/>
                                          <label for="veryfrequently11">Sometimes</label><br/>
                                         <input type="radio" id="frequently11" name="question11" value="Often" required="required"/>
                                          <label for="frequently11">Often</label><br/>
                                          <input type="radio" id="infrequently11" name="question11" value="Very Often" required="required"/>
                                          <label for="infrequently11">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently11" name="question11" value="Always" required="required"/>
                                          <label for="veryinfrequently11">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>12) Am sincere:</label><br/>
                                        <input checked type="radio" id="almostalways12" name="question12" value="Hardly Ever" required="required"/>
                                          <label for="almostalways12">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently12" name="question12" value="Sometimes" required="required"/>
                                          <label for="veryfrequently12">Sometimes</label><br/>
                                         <input type="radio" id="frequently12" name="question12" value="Often" required="required"/>
                                          <label for="frequently12">Often</label><br/>
                                          <input type="radio" id="infrequently12" name="question12" value="Very Often" required="required"/>
                                          <label for="infrequently12">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently12" name="question12" value="Always" required="required"/>
                                          <label for="veryinfrequently12">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>13) Am nonjudgmental:</label><br/>
                                        <input checked type="radio" id="almostalways13" name="question13" value="Hardly Ever" required="required"/>
                                          <label for="almostalways13">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently13" name="question13" value="Sometimes" required="required"/>
                                          <label for="veryfrequently13">Sometimes</label><br/>
                                         <input type="radio" id="frequently" name="question13" value="Often" required="required"/>
                                          <label for="frequently13">Often</label><br/>
                                          <input type="radio" id="infrequently13" name="question13" value="Very Often" required="required"/>
                                          <label for="infrequently13">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently13" name="question13" value="Always" required="required"/>
                                          <label for="veryinfrequently13">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>14) Show respect for others:</label><br/>
                                        <input checked type="radio" id="almostalways14" name="question14" value="Hardly Ever" required="required"/>
                                          <label for="almostalways14">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently14" name="question14" value="Sometimes" required="required"/>
                                          <label for="veryfrequently14">Sometimes</label><br/>
                                         <input type="radio" id="frequently14" name="question14" value="Often" required="required"/>
                                          <label for="frequently14">Often</label><br/>
                                          <input type="radio" id="infrequently14" name="question14" value="Very Often" required="required"/>
                                          <label for="infrequently14">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently14" name="question14" value="Always" required="required"/>
                                          <label for="veryinfrequently14">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>15) Listen well:</label><br/>
                                        <input checked type="radio" id="almostalways15" name="question15" value="Hardly Ever" required="required"/>
                                          <label for="almostalways15">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently15" name="question15" value="Sometimes" required="required"/>
                                          <label for="veryfrequently15">Sometimes</label><br/>
                                         <input type="radio" id="frequently15" name="question15" value="Often" required="required"/>
                                          <label for="frequently15">Often</label><br/>
                                          <input type="radio" id="infrequently15" name="question15" value="Very Often" required="required"/>
                                          <label for="infrequently15">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently15" name="question15" value="Always" required="required"/>
                                          <label for="veryinfrequently15">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>16) Praise others' efforts:</label><br/>
                                        <input checked type="radio" id="almostalways16" name="question16" value="Hardly Ever" required="required"/>
                                          <label for="almostalways16">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently16" name="question16" value="Sometimes" required="required"/>
                                          <label for="veryfrequently16">Sometimes</label><br/>
                                         <input type="radio" id="frequently16" name="question16" value="Often" required="required"/>
                                          <label for="frequently16">Often</label><br/>
                                          <input type="radio" id="infrequently16" name="question16" value="Very Often" required="required"/>
                                          <label for="infrequently16">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently16" name="question16" value="Always" required="required"/>
                                          <label for="veryinfrequently16">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>17) Show interest in others:</label><br/>
                                        <input checked type="radio" id="almostalways17" name="question17" value="Hardly Ever" required="required"/>
                                          <label for="almostalways17">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently17" name="question17" value="Sometimes" required="required"/>
                                          <label for="veryfrequently17">Sometimes</label><br/>
                                         <input type="radio" id="frequently17" name="question17" value="Often" required="required"/>
                                          <label for="frequently17">Often</label><br/>
                                          <input type="radio" id="infrequently17" name="question17" value="Very Often" required="required"/>
                                          <label for="infrequently17">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently17" name="question17" value="Always" required="required"/>
                                          <label for="veryinfrequently17">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>18) Share about myself:</label><br/>
                                        <input checked type="radio" id="almostalways18" name="question18" value="Hardly Ever" required="required"/>
                                          <label for="almostalways18">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently18" name="question18" value="Sometimes" required="required"/>
                                          <label for="veryfrequently18">Sometimes</label><br/>
                                         <input type="radio" id="frequently18" name="question18" value="Often" required="required"/>
                                          <label for="frequently18">Often</label><br/>
                                          <input type="radio" id="infrequently18" name="question18" value="Very Often" required="required"/>
                                          <label for="infrequently18">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently18" name="question18" value="Always" required="required"/>
                                          <label for="veryinfrequently18">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>19) Work well with others:</label><br/>
                                        <input checked type="radio" id="almostalways19" name="question19" value="Hardly Ever" required="required"/>
                                          <label for="almostalways19">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently19" name="question19" value="Sometimes" required="required"/>
                                          <label for="veryfrequently19">Sometimes</label><br/>
                                         <input type="radio" id="frequently19" name="question19" value="Often" required="required"/>
                                          <label for="frequently19">Often</label><br/>
                                          <input type="radio" id="infrequently19" name="question19" value="Very Often" required="required"/>
                                          <label for="infrequently19">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently19" name="question19" value="Always" required="required"/>
                                          <label for="veryinfrequently19">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>20) Show empathy for others:</label><br/>
                                        <input checked type="radio" id="almostalways20" name="question20" value="Hardly Ever" required="required"/>
                                          <label for="almostalways20">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently20" name="question20" value="Sometimes" required="required"/>
                                          <label for="veryfrequently20">Sometimes</label><br/>
                                         <input type="radio" id="frequently20" name="question20" value="Often" required="required"/>
                                          <label for="frequently20">Often</label><br/>
                                          <input type="radio" id="infrequently20" name="question20" value="Very Often" required="required"/>
                                          <label for="infrequently20">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently20" name="question20" value="Always" required="required"/>
                                          <label for="veryinfrequently20">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>21) Ask for input:</label><br/>
                                        <input checked type="radio" id="almostalways21" name="question21" value="Hardly Ever" required="required"/>
                                          <label for="almostalways21">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently21" name="question21" value="Sometimes" required="required"/>
                                          <label for="veryfrequently21">Sometimes</label><br/>
                                         <input type="radio" id="frequently21" name="question21" value="Often" required="required"/>
                                          <label for="frequently21">Often</label><br/>
                                          <input type="radio" id="infrequently21" name="question21" value="Very Often" required="required"/>
                                          <label for="infrequently21">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently21" name="question21" value="Always" required="required"/>
                                          <label for="veryinfrequently21">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>22) Do what I say I will do:</label><br/>
                                        <input checked type="radio" id="almostalways22" name="question22" value="Hardly Ever" required="required"/>
                                          <label for="almostalways22">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently22" name="question22" value="Sometimes" required="required"/>
                                          <label for="veryfrequently22">Sometimes</label><br/>
                                         <input type="radio" id="frequently22" name="question22" value="Often" required="required"/>
                                          <label for="frequently22">Often</label><br/>
                                          <input type="radio" id="infrequently22" name="question22" value="Very Often" required="required"/>
                                          <label for="infrequently22">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently22" name="question22" value="Always" required="required"/>
                                          <label for="veryinfrequently22">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>23) Am timely:</label><br/>
                                        <input checked type="radio" id="almostalways23" name="question23" value="Hardly Ever" required="required"/>
                                          <label for="almostalways23">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently23" name="question23" value="Sometimes" required="required"/>
                                          <label for="veryfrequently23">Sometimes</label><br/>
                                         <input type="radio" id="frequently23" name="question23" value="Often" required="required"/>
                                          <label for="frequently23">Often</label><br/>
                                          <input type="radio" id="infrequently23" name="question23" value="Very Often" required="required"/>
                                          <label for="infrequently23">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently23" name="question23" value="Always" required="required"/>
                                          <label for="veryinfrequently23">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>24) Am responsive to requests:</label><br/>
                                        <input checked type="radio" id="almostalways24" name="question24" value="Hardly Ever" required="required"/>
                                          <label for="almostalways24">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently24" name="question24" value="Sometimes" required="required"/>
                                          <label for="veryfrequently24">Sometimes</label><br/>
                                         <input type="radio" id="frequently24" name="question24" value="Often" required="required"/>
                                          <label for="frequently24">Often</label><br/>
                                          <input type="radio" id="infrequently24" name="question24" value="Very Often" required="required"/>
                                          <label for="infrequently24">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently24" name="question24" value="Always" required="required"/>
                                          <label for="veryinfrequently24">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>25) Am organized:</label><br/>
                                        <input checked type="radio" id="almostalways25" name="question25" value="Hardly Ever" required="required"/>
                                          <label for="almostalways25">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently25" name="question25" value="Sometimes" required="required"/>
                                          <label for="veryfrequently25">Sometimes</label><br/>
                                         <input type="radio" id="frequently25" name="question25" value="Often" required="required"/>
                                          <label for="frequently25">Often</label><br/>
                                          <input type="radio" id="infrequently25" name="question25" value="Very Often" required="required"/>
                                          <label for="infrequently25">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently25" name="question25" value="Always" required="required"/>
                                          <label for="veryinfrequently25">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>26) Am accountable for my actions:</label><br/>
                                        <input checked type="radio" id="almostalways26" name="question26" value="Hardly Ever" required="required"/>
                                          <label for="almostalways26">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently26" name="question26" value="Sometimes" required="required"/>
                                          <label for="veryfrequently26">Sometimes</label><br/>
                                         <input type="radio" id="frequently26" name="question26" value="Often" required="required"/>
                                          <label for="frequently26">Often</label><br/>
                                          <input type="radio" id="infrequently26" name="question26" value="Very Often" required="required"/>
                                          <label for="infrequently26">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently26" name="question26" value="Always" required="required"/>
                                          <label for="veryinfrequently26">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>27) Follow up:</label><br/>
                                        <input checked type="radio" id="almostalways27" name="question27" value="Hardly Ever" required="required"/>
                                          <label for="almostalways27">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently27" name="question27" value="Sometimes" required="required"/>
                                          <label for="veryfrequently27">Sometimes</label><br/>
                                         <input type="radio" id="frequently27" name="question27" value="Often" required="required"/>
                                          <label for="frequently27">Often</label><br/>
                                          <input type="radio" id="infrequently27" name="question27" value="Very Often" required="required"/>
                                          <label for="infrequently27">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently27" name="question27" value="Always" required="required"/>
                                          <label for="veryinfrequently27">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>28) Am consistent:</label><br/>
                                        <input checked type="radio" id="almostalways28" name="question28" value="Hardly Ever" required="required"/>
                                          <label for="almostalways28">Hardly Ever</label><br/>
                                        <input type="radio" id="veryfrequently28" name="question28" value="Sometimes" required="required"/>
                                          <label for="veryfrequently28">Sometimes</label><br/>
                                         <input type="radio" id="frequently28" name="question28" value="Often" required="required"/>
                                          <label for="frequently28">Often</label><br/>
                                          <input type="radio" id="infrequently" name="question28" value="Very Often" required="required"/>
                                          <label for="infrequently28">Very Often</label><br/>
                                          <input type="radio" id="veryinfrequently28" name="question28" value="Always" required="required"/>
                                          <label for="veryinfrequently28">Always</label><br/>
                                    </div>
                                 </div>
                                 
                                 <div className="col-lg-6 d-none">
                                   <div className="form-group">
                                      <input type="text" name="leadsquared_mx_Business_Entity" id="leadsquared_mx_Business_Entity" value="Ken Blanchard Companies" className="form-control" />
                                   </div>
                                </div>
                                
                                <div className="col-sm-12 col-md-12">
                                  <div className="agree-label">
                                    <input type="checkbox" name="chb1" id="chb1" value="Subscribe to our newsletter" required/>
                                    <label for="chb1">*Subscribe to our newsletter to receive updates on our research, product news, and future webinars and Workshops.</label>
                                  </div>
                                </div>
                                           
                                 <div className="col-lg-12 col-md-12">
                                    <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="Send Message" />
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