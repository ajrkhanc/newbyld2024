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
      xhttp.open("Post", 'https://byldgroup.in/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/66/feedback');
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
         + "&tel-547=" + event.target.phoeno.value
         + "&organisation=" + event.target.organisation.value
         + "&managers=" + event.target.YourManagerName.value
         + "&managersemail=" + event.target.YourManagerEmail.value

         + "&esa1=" + event.target.influence_people_at_work.value
         + "&esa2=" + event.target.influence_people_at_work2.value
         + "&esa3=" + event.target.influence_people_at_work3.value
         + "&esa4=" + event.target.influence_people_at_work4.value
         + "&esa5=" + event.target.influence_people_at_work5.value
         + "&esa6=" + event.target.influence_people_at_work6.value
         + "&esa7=" + event.target.influence_people_at_work7.value
         + "&esa8=" + event.target.influence_people_at_work8.value
         + "&esa9=" + event.target.influence_people_at_work9.value
         + "&esa10=" + event.target.influence_people_at_work10.value
         + "&esa11=" + event.target.influence_people_at_work11.value
         + "&esa12=" + event.target.influence_people_at_work12.value
         + "&esa13=" + event.target.influence_people_at_work13.value
         + "&esa14=" + event.target.influence_people_at_work14.value
         + "&esa15=" + event.target.influence_people_at_work15.value
         + "&esa16=" + event.target.influence_people_at_work16.value
         + "&esa17=" + event.target.influence_people_at_work17.value
         + "&esa18=" + event.target.influence_people_at_work18.value
         + "&esa19=" + event.target.influence_people_at_work19.value
         + "&esa20=" + event.target.influence_people_at_work20.value
         + "&esa21=" + event.target.influence_people_at_work21.value
         + "&esa22=" + event.target.influence_people_at_work22.value
         + "&esa23=" + event.target.influence_people_at_work23.value
         + "&esa24=" + event.target.influence_people_at_work24.value
         + "&esa25=" + event.target.influence_people_at_work25.value
         + "&esa26=" + event.target.influence_people_at_work26.value
         + "&esa27=" + event.target.influence_people_at_work27.value
         + "&esa28=" + event.target.influence_people_at_work28.value
         + "&esa29=" + event.target.influence_people_at_work29.value
         + "&esa30=" + event.target.influence_people_at_work30.value
         + "&esa31=" + event.target.influence_people_at_work31.value
         + "&esa32=" + event.target.influence_people_at_work32.value
         + "&esa33=" + event.target.influence_people_at_work33.value
         + "&esa34=" + event.target.influence_people_at_work34.value
         + "&esa35=" + event.target.influence_people_at_work35.value
         + "&esa36=" + event.target.influence_people_at_work36.value
         + "&esa37=" + event.target.influence_people_at_work37.value)

   }

   return (
      <>
         <Head>
            <title>Edge Self Assessment - Blanchard India</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div>
            <div className="inner-banner edge-self-assessment-headbg">
               <div className="container">
                  <div className="inner-title text-center">
                     <h3>Self Assessment</h3>
                     <ul>
                        <li>
                           <Link href="/">Home</Link>
                        </li>
                        <li>Self Assessment</li>
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
                        <span className="sp-color1">Contact us to get started with the Leadership challenge resolutions. We can help train your managers <br/>and deliver real ROI for your training investment.</span>
                        <h4>WANT TO TALK TO SOMEONE? CALL US AT 1800.102.1345</h4>
                     </div>
                  </div>
               </div>
            </div>
            <div className="contact-area pt-45 pb-40">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="contact-form">
                           <form id="contactForm" onSubmit={registerUser}>
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
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="YourManagerName" id="YourManagerName" className="form-control" placeholder="Your Manager's Name*" />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="email" name="YourManagerEmail" id="YourManagerEmail" className="form-control" placeholder="Your Manager's Email ID*" />
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                        <h4>EMPOWERMENT DEVELOPMENT GAUGE AND EVALUATION PARTICIPANT QUESTIONNAIRE-SELF</h4>
                                        <span className="sp-color1">You are requested to fill the assessment.</span><br/>
                                        <span className="sp-color1">Please indicate the extent to which you agree or disagree with the following statements by choosing an appropriate option.</span>
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>1) I have power to influence people at work</label><br/>
                                        <input type="radio" id="almostalways" name="influence_people_at_work" value="Almost Always" required="required"/>
                                          <label for="almostalways">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently" name="influence_people_at_work" value="Very Frequently" required="required"/>
                                          <label for="veryfrequently">Very Frequently</label><br/>
                                         <input type="radio" id="frequently" name="influence_people_at_work" value="Frequently" required="required"/>
                                          <label for="frequently">Frequently</label><br/>
                                          <input type="radio" id="infrequently" name="influence_people_at_work" value="Infrequently" required="required"/>
                                          <label for="infrequently">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently" name="influence_people_at_work" value="Very Infrequently" required="required"/>
                                          <label for="veryinfrequently">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever" name="influence_people_at_work" value="Almost Never" required="required"/>
                                          <label for="almostnever">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>2) My manager gives me the power and authority to do my job.</label><br/>
                                        <input type="radio" id="almostalways2" name="influence_people_at_work2" value="Almost Always" required/>
                                          <label for="almostalways2">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently2" name="influence_people_at_work2" value="Very Frequently" required/>
                                          <label for="veryfrequently2">Very Frequently</label><br/>
                                         <input type="radio" id="frequently2" name="influence_people_at_work2" value="Frequently" required/>
                                          <label for="frequently2">Frequently</label><br/>
                                          <input type="radio" id="infrequently2" name="influence_people_at_work2" value="Infrequently" required/>
                                          <label for="infrequently2">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently2" name="influence_people_at_work2" value="Very Infrequently" required/>
                                          <label for="veryinfrequently2">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever2" name="influence_people_at_work2" value="Almost Never" required/>
                                          <label for="almostnever2">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>3) According to the job title, I have power in this job.</label><br/>
                                        <input type="radio" id="almostalways3" name="influence_people_at_work3" value="Almost Always"/>
                                          <label for="almostalways3">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently3" name="influence_people_at_work3" value="Very Frequently"/>
                                          <label for="veryfrequently3">Very Frequently</label><br/>
                                         <input type="radio" id="frequently3" name="influence_people_at_work3" value="Frequently"/>
                                          <label for="frequently3">Frequently</label><br/>
                                          <input type="radio" id="infrequently3" name="influence_people_at_work3" value="Infrequently"/>
                                          <label for="infrequently3">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently3" name="influence_people_at_work3" value="Very Infrequently"/>
                                          <label for="veryinfrequently3">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever3" name="influence_people_at_work3" value="Almost Never"/>
                                          <label for="almostnever3">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>4) Although my title may not reflect it, I have power in this job.</label><br/>
                                        <input type="radio" id="almostalways4" name="influence_people_at_work4" value="Almost Always"/>
                                          <label for="almostalways4">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently4" name="influence_people_at_work4" value="Very Frequently"/>
                                          <label for="veryfrequently4">Very Frequently</label><br/>
                                         <input type="radio" id="frequently4" name="influence_people_at_work4" value="Frequently"/>
                                          <label for="frequently4">Frequently</label><br/>
                                          <input type="radio" id="infrequently4" name="influence_people_at_work4" value="Infrequently"/>
                                          <label for="infrequently4">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently4" name="influence_people_at_work4" value="Very Infrequently"/>
                                          <label for="veryinfrequently4">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever4" name="influence_people_at_work4" value="Almost Never"/>
                                          <label for="almostnever4">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>5) I am aware of my sources of power.</label><br/>
                                        <input type="radio" id="almostalways5" name="influence_people_at_work5" value="Almost Always"/>
                                          <label for="almostalways5">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently5" name="influence_people_at_work5" value="Very Frequently"/>
                                          <label for="veryfrequently5">Very Frequently</label><br/>
                                         <input type="radio" id="frequently5" name="influence_people_at_work5" value="Frequently"/>
                                          <label for="frequently5">Frequently</label><br/>
                                          <input type="radio" id="infrequently5" name="influence_people_at_work5" value="Infrequently"/>
                                          <label for="infrequently5">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently5" name="influence_people_at_work5" value="Very Infrequently"/>
                                          <label for="veryinfrequently5">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever5" name="influence_people_at_work5" value="Almost Never"/>
                                          <label for="almostnever5">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>6) I can affect the outcome of my job.</label><br/>
                                        <input type="radio" id="almostalways6" name="influence_people_at_work6" value="Almost Always"/>
                                          <label for="almostalways6">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently6" name="influence_people_at_work6" value="Very Frequently"/>
                                          <label for="veryfrequently6">Very Frequently</label><br/>
                                         <input type="radio" id="frequently6" name="influence_people_at_work6" value="Frequently"/>
                                          <label for="frequently6">Frequently</label><br/>
                                          <input type="radio" id="infrequently6" name="influence_people_at_work6" value="Infrequently"/>
                                          <label for="infrequently6">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently6" name="influence_people_at_work6" value="Very Infrequently"/>
                                          <label for="veryinfrequently6">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever6" name="influence_people_at_work6" value="Almost Never"/>
                                          <label for="almostnever6">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>7) I am motivated by my job.</label><br/>
                                        <input type="radio" id="almostalways7" name="influence_people_at_work7" value="Almost Always"/>
                                          <label for="almostalways7">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently7" name="influence_people_at_work7" value="Very Frequently"/>
                                          <label for="veryfrequently7">Very Frequently</label><br/>
                                         <input type="radio" id="frequently7" name="influence_people_at_work7" value="Frequently"/>
                                          <label for="frequently7">Frequently</label><br/>
                                          <input type="radio" id="infrequently7" name="influence_people_at_work7" value="Infrequently"/>
                                          <label for="infrequently7">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently7" name="influence_people_at_work7" value="Very Infrequently"/>
                                          <label for="veryinfrequently7">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever7" name="influence_people_at_work7" value="Almost Never"/>
                                          <label for="almostnever7">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>8) When doing the job, I have a good idea of what motivates me.</label><br/>
                                        <input type="radio" id="almostalways8" name="influence_people_at_work8" value="Almost Always"/>
                                          <label for="almostalways8">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently8" name="influence_people_at_work8" value="Very Frequently"/>
                                          <label for="veryfrequently8">Very Frequently</label><br/>
                                         <input type="radio" id="frequently8" name="influence_people_at_work8" value="Frequently"/>
                                          <label for="frequently8">Frequently</label><br/>
                                          <input type="radio" id="infrequently8" name="influence_people_at_work8" value="Infrequently"/>
                                          <label for="infrequently8">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently8" name="influence_people_at_work8" value="Very Infrequently"/>
                                          <label for="veryinfrequently8">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever8" name="influence_people_at_work8" value="Almost Never"/>
                                          <label for="almostnever8">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>9) I take the initiative to create an environment that is personally motivating.</label><br/>
                                        <input type="radio" id="almostalways9" name="influence_people_at_work9" value="Almost Always"/>
                                          <label for="almostalways9">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently9" name="influence_people_at_work9" value="Very Frequently"/>
                                          <label for="veryfrequently9">Very Frequently</label><br/>
                                         <input type="radio" id="frequently9" name="influence_people_at_work9" value="Frequently"/>
                                          <label for="frequently9">Frequently</label><br/>
                                          <input type="radio" id="infrequently9" name="influence_people_at_work9" value="Infrequently"/>
                                          <label for="infrequently9">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently9" name="influence_people_at_work9" value="Very Infrequently"/>
                                          <label for="veryinfrequently9">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever9" name="influence_people_at_work9" value="Almost Never"/>
                                          <label for="almostnever9">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>10) I tell my manager what motivates me.</label><br/>
                                        <input type="radio" id="almostalways10" name="influence_people_at_work10" value="Almost Always"/>
                                          <label for="almostalways10">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently10" name="influence_people_at_work10" value="Very Frequently"/>
                                          <label for="veryfrequently10">Very Frequently</label><br/>
                                         <input type="radio" id="frequently10" name="influence_people_at_work10" value="Frequently"/>
                                          <label for="frequently10">Frequently</label><br/>
                                          <input type="radio" id="infrequently10" name="influence_people_at_work10" value="Infrequently"/>
                                          <label for="infrequently10">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently10" name="influence_people_at_work10" value="Very Infrequently"/>
                                          <label for="veryinfrequently10">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever10" name="influence_people_at_work10" value="Almost Never"/>
                                          <label for="almostnever10">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>11) I am satisfied with my job.</label><br/>
                                        <input type="radio" id="almostalways11" name="influence_people_at_work11" value="Almost Always"/>
                                          <label for="almostalways11">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently11" name="influence_people_at_work11" value="Very Frequently"/>
                                          <label for="veryfrequently11">Very Frequently</label><br/>
                                         <input type="radio" id="frequently11" name="influence_people_at_work11" value="Frequently"/>
                                          <label for="frequently11">Frequently</label><br/>
                                          <input type="radio" id="infrequently11" name="influence_people_at_work11" value="Infrequently"/>
                                          <label for="infrequently11">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently11" name="influence_people_at_work11" value="Very Infrequently"/>
                                          <label for="veryinfrequently11">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever11" name="influence_people_at_work11" value="Almost Never"/>
                                          <label for="almostnever11">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>12) I make good use of my time to produce good results in the job.</label><br/>
                                        <input type="radio" id="almostalways12" name="influence_people_at_work12" value="Almost Always"/>
                                          <label for="almostalways12">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently12" name="influence_people_at_work12" value="Very Frequently"/>
                                          <label for="veryfrequently12">Very Frequently</label><br/>
                                         <input type="radio" id="frequently12" name="influence_people_at_work12" value="Frequently"/>
                                          <label for="frequently12">Frequently</label><br/>
                                          <input type="radio" id="infrequently12" name="influence_people_at_work12" value="Infrequently"/>
                                          <label for="infrequently12">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently12" name="influence_people_at_work12" value="Very Infrequently"/>
                                          <label for="veryinfrequently12">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever12" name="influence_people_at_work12" value="Almost Never"/>
                                          <label for="almostnever12">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>13) In general, I meet expected performance standards.</label><br/>
                                        <input type="radio" id="almostalways13" name="influence_people_at_work13" value="Almost Always"/>
                                          <label for="almostalways13">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently13" name="influence_people_at_work13" value="Very Frequently"/>
                                          <label for="veryfrequently13">Very Frequently</label><br/>
                                         <input type="radio" id="frequently13" name="influence_people_at_work13" value="Frequently"/>
                                          <label for="frequently13">Frequently</label><br/>
                                          <input type="radio" id="infrequently13" name="influence_people_at_work13" value="Infrequently"/>
                                          <label for="infrequently13">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently13" name="influence_people_at_work13" value="Very Infrequently"/>
                                          <label for="veryinfrequently13">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever13" name="influence_people_at_work13" value="Almost Never"/>
                                          <label for="almostnever13">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>14) My efforts contribute to the overall goals of the organization.</label><br/>
                                        <input type="radio" id="almostalways14" name="influence_people_at_work14" value="Almost Always"/>
                                          <label for="almostalways14">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently14" name="influence_people_at_work14" value="Very Frequently"/>
                                          <label for="veryfrequently14">Very Frequently</label><br/>
                                         <input type="radio" id="frequently14" name="influence_people_at_work14" value="Frequently"/>
                                          <label for="frequently14">Frequently</label><br/>
                                          <input type="radio" id="infrequently14" name="influence_people_at_work14" value="Infrequently"/>
                                          <label for="infrequently14">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently14" name="influence_people_at_work14" value="Very Infrequently"/>
                                          <label for="veryinfrequently14">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever14" name="influence_people_at_work14" value="Almost Never"/>
                                          <label for="almostnever14">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>15) I know what is expected from 1me in the job.</label><br/>
                                        <input type="radio" id="almostalways15" name="influence_people_at_work15" value="Almost Always"/>
                                          <label for="almostalways15">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently15" name="influence_people_at_work15" value="Very Frequently"/>
                                          <label for="veryfrequently15">Very Frequently</label><br/>
                                         <input type="radio" id="frequently15" name="influence_people_at_work15" value="Frequently"/>
                                          <label for="frequently15">Frequently</label><br/>
                                          <input type="radio" id="infrequently15" name="influence_people_at_work15" value="Infrequently"/>
                                          <label for="infrequently15">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently15" name="influence_people_at_work15" value="Very Infrequently"/>
                                          <label for="veryinfrequently15">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever15" name="influence_people_at_work15" value="Almost Never"/>
                                          <label for="almostnever15">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>16) I am productive in my job.</label><br/>
                                        <input type="radio" id="almostalways16" name="influence_people_at_work16" value="Almost Always"/>
                                          <label for="almostalways16">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently16" name="influence_people_at_work16" value="Very Frequently"/>
                                          <label for="veryfrequently16">Very Frequently</label><br/>
                                         <input type="radio" id="frequently16" name="influence_people_at_work16" value="Frequently"/>
                                          <label for="frequently16">Frequently</label><br/>
                                          <input type="radio" id="infrequently16" name="influence_people_at_work16" value="Infrequently"/>
                                          <label for="infrequently16">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently16" name="influence_people_at_work16" value="Very Infrequently"/>
                                          <label for="veryinfrequently16">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever16" name="influence_people_at_work16" value="Almost Never"/>
                                          <label for="almostnever16">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>17) When setting goals, I include a completion date for each goal.</label><br/>
                                        <input type="radio" id="almostalways17" name="influence_people_at_work17" value="Almost Always"/>
                                          <label for="almostalways17">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently17" name="influence_people_at_work17" value="Very Frequently"/>
                                          <label for="veryfrequently17">Very Frequently</label><br/>
                                         <input type="radio" id="frequently17" name="influence_people_at_work17" value="Frequently"/>
                                          <label for="frequently17">Frequently</label><br/>
                                          <input type="radio" id="infrequently17" name="influence_people_at_work17" value="Infrequently"/>
                                          <label for="infrequently17">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently17" name="influence_people_at_work17" value="Very Infrequently"/>
                                          <label for="veryinfrequently17">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever17" name="influence_people_at_work17" value="Almost Never"/>
                                          <label for="almostnever17">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>18) I seek resources to help me accomplish my goals. (For example: Talk with others in my department, attend informational meetings, seek out experts, utilize library resources)</label><br/>
                                        <input type="radio" id="almostalways18" name="influence_people_at_work18" value="Almost Always"/>
                                          <label for="almostalways18">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently18" name="influence_people_at_work18" value="Very Frequently"/>
                                          <label for="veryfrequently18">Very Frequently</label><br/>
                                         <input type="radio" id="frequently18" name="influence_people_at_work18" value="Frequently"/>
                                          <label for="frequently18">Frequently</label><br/>
                                          <input type="radio" id="infrequently18" name="influence_people_at_work18" value="Infrequently"/>
                                          <label for="infrequently18">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently18" name="influence_people_at_work18" value="Very Infrequently"/>
                                          <label for="veryinfrequently18">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever18" name="influence_people_at_work18" value="Almost Never"/>
                                          <label for="almostnever18">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>19) I have clear and measurable goals.</label><br/>
                                        <input type="radio" id="almostalways19" name="influence_people_at_work19" value="Almost Always"/>
                                          <label for="almostalways19">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently19" name="influence_people_at_work19" value="Very Frequently"/>
                                          <label for="veryfrequently19">Very Frequently</label><br/>
                                         <input type="radio" id="frequently19" name="influence_people_at_work19" value="Frequently"/>
                                          <label for="frequently19">Frequently</label><br/>
                                          <input type="radio" id="infrequently19" name="influence_people_at_work19" value="Infrequently"/>
                                          <label for="infrequently19">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently19" name="influence_people_at_work19" value="Very Infrequently"/>
                                          <label for="veryinfrequently19">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever19" name="influence_people_at_work19" value="Almost Never"/>
                                          <label for="almostnever19">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>20) I share my goals with my manager.</label><br/>
                                        <input type="radio" id="almostalways20" name="influence_people_at_work20" value="Almost Always"/>
                                          <label for="almostalways20">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently20" name="influence_people_at_work20" value="Very Frequently"/>
                                          <label for="veryfrequently20">Very Frequently</label><br/>
                                         <input type="radio" id="frequently20" name="influence_people_at_work20" value="Frequently"/>
                                          <label for="frequently20">Frequently</label><br/>
                                          <input type="radio" id="infrequently20" name="influence_people_at_work20" value="Infrequently"/>
                                          <label for="infrequently20">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently20" name="influence_people_at_work20" value="Very Infrequently"/>
                                          <label for="veryinfrequently20">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever20" name="influence_people_at_work20" value="Almost Never"/>
                                          <label for="almostnever20">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>21) I create action plans for accomplishing my goals.</label><br/>
                                        <input type="radio" id="almostalways21" name="influence_people_at_work21" value="Almost Always"/>
                                          <label for="almostalways21">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently21" name="influence_people_at_work21" value="Very Frequently"/>
                                          <label for="veryfrequently21">Very Frequently</label><br/>
                                         <input type="radio" id="frequently21" name="influence_people_at_work21" value="Frequently"/>
                                          <label for="frequently21">Frequently</label><br/>
                                          <input type="radio" id="infrequently21" name="influence_people_at_work21" value="Infrequently"/>
                                          <label for="infrequently21">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently21" name="influence_people_at_work21" value="Very Infrequently"/>
                                          <label for="veryinfrequently21">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever21" name="influence_people_at_work21" value="Almost Never"/>
                                          <label for="almostnever21">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>22) I write clear and measurable goals.</label><br/>
                                        <input type="radio" id="almostalways22" name="influence_people_at_work22" value="Almost Always"/>
                                          <label for="almostalways22">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently22" name="influence_people_at_work22" value="Very Frequently"/>
                                          <label for="veryfrequently22">Very Frequently</label><br/>
                                         <input type="radio" id="frequently22" name="influence_people_at_work22" value="Frequently"/>
                                          <label for="frequently22">Frequently</label><br/>
                                          <input type="radio" id="infrequently22" name="influence_people_at_work22" value="Infrequently"/>
                                          <label for="infrequently22">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently22" name="influence_people_at_work22" value="Very Infrequently"/>
                                          <label for="veryinfrequently22">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever22" name="influence_people_at_work22" value="Almost Never"/>
                                          <label for="almostnever22">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>23) I ask my manager for specific feedback on my overall performance as it relates to my goal/ career objectives.</label><br/>
                                        <input type="radio" id="almostalways23" name="influence_people_at_work23" value="Almost Always"/>
                                          <label for="almostalways23">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently23" name="influence_people_at_work23" value="Very Frequently"/>
                                          <label for="veryfrequently23">Very Frequently</label><br/>
                                         <input type="radio" id="frequently23" name="influence_people_at_work23" value="Frequently"/>
                                          <label for="frequently23">Frequently</label><br/>
                                          <input type="radio" id="infrequently23" name="influence_people_at_work23" value="Infrequently"/>
                                          <label for="infrequently23">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently23" name="influence_people_at_work23" value="Very Infrequently"/>
                                          <label for="veryinfrequently23">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever23" name="influence_people_at_work23" value="Almost Never"/>
                                          <label for="almostnever23">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>24) I ask my manager for specific direction when I am unclear about how a task should be completed</label><br/>
                                        <input type="radio" id="almostalways24" name="influence_people_at_work24" value="Almost Always"/>
                                          <label for="almostalways24">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently24" name="influence_people_at_work24" value="Very Frequently"/>
                                          <label for="veryfrequently24">Very Frequently</label><br/>
                                         <input type="radio" id="frequently24" name="influence_people_at_work24" value="Frequently"/>
                                          <label for="frequently24">Frequently</label><br/>
                                          <input type="radio" id="infrequently24" name="influence_people_at_work24" value="Infrequently"/>
                                          <label for="infrequently24">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently24" name="influence_people_at_work24" value="Very Infrequently"/>
                                          <label for="veryinfrequently24">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever24" name="influence_people_at_work24" value="Almost Never"/>
                                          <label for="almostnever24">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>25) I ask my manager for specific feedback to improve my performance on a goal/task.</label><br/>
                                        <input type="radio" id="almostalways25" name="influence_people_at_work25" value="Almost Always"/>
                                          <label for="almostalways25">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently25" name="influence_people_at_work25" value="Very Frequently"/>
                                          <label for="veryfrequently25">Very Frequently</label><br/>
                                         <input type="radio" id="frequently25" name="influence_people_at_work25" value="Frequently"/>
                                          <label for="frequently25">Frequently</label><br/>
                                          <input type="radio" id="infrequently25" name="influence_people_at_work25" value="Infrequently"/>
                                          <label for="infrequently25">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently25" name="influence_people_at_work25" value="Very Infrequently"/>
                                          <label for="veryinfrequently25">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever25" name="influence_people_at_work25" value="Almost Never"/>
                                          <label for="almostnever25">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>26) When lacking confidence performing a task/ responsibility, I tell my manager what I need to reduce frustration.</label><br/>
                                        <input type="radio" id="almostalways26" name="influence_people_at_work26" value="Almost Always"/>
                                          <label for="almostalways26">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently26" name="influence_people_at_work26" value="Very Frequently"/>
                                          <label for="veryfrequently26">Very Frequently</label><br/>
                                         <input type="radio" id="frequently26" name="influence_people_at_work26" value="Frequently"/>
                                          <label for="frequently26">Frequently</label><br/>
                                          <input type="radio" id="infrequently26" name="influence_people_at_work26" value="Infrequently"/>
                                          <label for="infrequently26">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently26" name="influence_people_at_work26" value="Very Infrequently"/>
                                          <label for="veryinfrequently26">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever26" name="influence_people_at_work26" value="Almost Never"/>
                                          <label for="almostnever26">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>27) When I identify a problem, I offer solutions to it.</label><br/>
                                        <input type="radio" id="almostalways27" name="influence_people_at_work27" value="Almost Always"/>
                                          <label for="almostalways27">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently27" name="influence_people_at_work27" value="Very Frequently"/>
                                          <label for="veryfrequently27">Very Frequently</label><br/>
                                         <input type="radio" id="frequently27" name="influence_people_at_work27" value="Frequently"/>
                                          <label for="frequently27">Frequently</label><br/>
                                          <input type="radio" id="infrequently27" name="influence_people_at_work27" value="Infrequently"/>
                                          <label for="infrequently27">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently27" name="influence_people_at_work27" value="Very Infrequently"/>
                                          <label for="veryinfrequently27">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever27" name="influence_people_at_work27" value="Almost Never"/>
                                          <label for="almostnever27">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>28) I offer solutions to my manager that include recommendations and rationale.</label><br/>
                                        <input type="radio" id="almostalways28" name="influence_people_at_work28" value="Almost Always"/>
                                          <label for="almostalways28">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently28" name="influence_people_at_work28" value="Very Frequently"/>
                                          <label for="veryfrequently28">Very Frequently</label><br/>
                                         <input type="radio" id="frequently28" name="influence_people_at_work28" value="Frequently"/>
                                          <label for="frequently28">Frequently</label><br/>
                                          <input type="radio" id="infrequently28" name="influence_people_at_work28" value="Infrequently"/>
                                          <label for="infrequently28">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently28" name="influence_people_at_work28" value="Very Infrequently"/>
                                          <label for="veryinfrequently28">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever28" name="influence_people_at_work28" value="Almost Never"/>
                                          <label for="almostnever28">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>29) When I have a good idea, I suggest it to my manager.</label><br/>
                                        <input type="radio" id="almostalways29" name="influence_people_at_work29" value="Almost Always"/>
                                          <label for="almostalways29">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently29" name="influence_people_at_work29" value="Very Frequently"/>
                                          <label for="veryfrequently29">Very Frequently</label><br/>
                                         <input type="radio" id="frequently29" name="influence_people_at_work29" value="Frequently"/>
                                          <label for="frequently29">Frequently</label><br/>
                                          <input type="radio" id="infrequently29" name="influence_people_at_work29" value="Infrequently"/>
                                          <label for="infrequently29">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently29" name="influence_people_at_work29" value="Very Infrequently"/>
                                          <label for="veryinfrequently29">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever29" name="influence_people_at_work29" value="Almost Never"/>
                                          <label for="almostnever29">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>30) If my manager is staying too involved in my work, I tell him or her.</label><br/>
                                        <input type="radio" id="almostalways30" name="influence_people_at_work30" value="Almost Always"/>
                                          <label for="almostalways30">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently30" name="influence_people_at_work30" value="Very Frequently"/>
                                          <label for="veryfrequently30">Very Frequently</label><br/>
                                         <input type="radio" id="frequently30" name="influence_people_at_work30" value="Frequently"/>
                                          <label for="frequently30">Frequently</label><br/>
                                          <input type="radio" id="infrequently30" name="influence_people_at_work30" value="Infrequently"/>
                                          <label for="infrequently30">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently30" name="influence_people_at_work30" value="Very Infrequently"/>
                                          <label for="veryinfrequently30">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever30" name="influence_people_at_work30" value="Almost Never"/>
                                          <label for="almostnever30">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>31) When appropriate, I take the authority to get the job done.</label><br/>
                                        <input type="radio" id="almostalways31" name="influence_people_at_work31" value="Almost Always"/>
                                          <label for="almostalways31">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently31" name="influence_people_at_work31" value="Very Frequently"/>
                                          <label for="veryfrequently31">Very Frequently</label><br/>
                                         <input type="radio" id="frequently31" name="influence_people_at_work31" value="Frequently"/>
                                          <label for="frequently31">Frequently</label><br/>
                                          <input type="radio" id="infrequently31" name="influence_people_at_work31" value="Infrequently"/>
                                          <label for="infrequently31">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently31" name="influence_people_at_work31" value="Very Infrequently"/>
                                          <label for="veryinfrequently31">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever31" name="influence_people_at_work31" value="Almost Never"/>
                                          <label for="almostnever31">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>32) I negotiate for the appropriate level of involvement from my manager.</label><br/>
                                        <input type="radio" id="almostalways32" name="influence_people_at_work32" value="Almost Always"/>
                                          <label for="almostalways32">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently32" name="influence_people_at_work32" value="Very Frequently"/>
                                          <label for="veryfrequently32">Very Frequently</label><br/>
                                         <input type="radio" id="frequently32" name="influence_people_at_work32" value="Frequently"/>
                                          <label for="frequently32">Frequently</label><br/>
                                          <input type="radio" id="infrequently32" name="influence_people_at_work32" value="Infrequently"/>
                                          <label for="infrequently32">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently32" name="influence_people_at_work32" value="Very Infrequently"/>
                                          <label for="veryinfrequently32">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever32" name="influence_people_at_work32" value="Almost Never"/>
                                          <label for="almostnever32">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>33) I provide my manager with feedback and direction for managing me effectively.</label><br/>
                                        <input type="radio" id="almostalways33" name="influence_people_at_work33" value="Almost Always"/>
                                          <label for="almostalways33">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently33" name="influence_people_at_work33" value="Very Frequently"/>
                                          <label for="veryfrequently33">Very Frequently</label><br/>
                                         <input type="radio" id="frequently33" name="influence_people_at_work33" value="Frequently"/>
                                          <label for="frequently33">Frequently</label><br/>
                                          <input type="radio" id="infrequently33" name="influence_people_at_work33" value="Infrequently"/>
                                          <label for="infrequently33">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently33" name="influence_people_at_work33" value="Very Infrequently"/>
                                          <label for="veryinfrequently33">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever33" name="influence_people_at_work33" value="Almost Never"/>
                                          <label for="almostnever33">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>34) My manager and I discuss and clarify my key responsibility areas.</label><br/>
                                        <input type="radio" id="almostalways34" name="influence_people_at_work34" value="Almost Always"/>
                                          <label for="almostalways34">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently34" name="influence_people_at_work34" value="Very Frequently"/>
                                          <label for="veryfrequently34">Very Frequently</label><br/>
                                         <input type="radio" id="frequently34" name="influence_people_at_work34" value="Frequently"/>
                                          <label for="frequently34">Frequently</label><br/>
                                          <input type="radio" id="infrequently34" name="influence_people_at_work34" value="Infrequently"/>
                                          <label for="infrequently34">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently34" name="influence_people_at_work34" value="Very Infrequently"/>
                                          <label for="veryinfrequently34">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever34" name="influence_people_at_work34" value="Almost Never"/>
                                          <label for="almostnever34">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>35) I know my career objectives.</label><br/>
                                        <input type="radio" id="almostalways35" name="influence_people_at_work35" value="Almost Always"/>
                                          <label for="almostalways35">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently35" name="influence_people_at_work35" value="Very Frequently"/>
                                          <label for="veryfrequently35">Very Frequently</label><br/>
                                         <input type="radio" id="frequently35" name="influence_people_at_work35" value="Frequently"/>
                                          <label for="frequently35">Frequently</label><br/>
                                          <input type="radio" id="infrequently35" name="influence_people_at_work35" value="Infrequently"/>
                                          <label for="infrequently35">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently35" name="influence_people_at_work35" value="Very Infrequently"/>
                                          <label for="veryinfrequently35">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever35" name="influence_people_at_work35" value="Almost Never"/>
                                          <label for="almostnever35">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>36) My manager and I are equally involved in my development.</label><br/>
                                        <input type="radio" id="almostalways36" name="influence_people_at_work36" value="Almost Always"/>
                                          <label for="almostalways36">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently36" name="influence_people_at_work36" value="Very Frequently"/>
                                          <label for="veryfrequently36">Very Frequently</label><br/>
                                         <input type="radio" id="frequently36" name="influence_people_at_work36" value="Frequently"/>
                                          <label for="frequently36">Frequently</label><br/>
                                          <input type="radio" id="infrequently36" name="influence_people_at_work36" value="Infrequently"/>
                                          <label for="infrequently36">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently36" name="influence_people_at_work36" value="Very Infrequently"/>
                                          <label for="veryinfrequently36">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever36" name="influence_people_at_work36" value="Almost Never"/>
                                          <label for="almostnever36">Almost Never</label>
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>37) I tell my manager my career objectives.</label><br/>
                                        <input type="radio" id="almostalways37" name="influence_people_at_work37" value="Almost Always"/>
                                          <label for="almostalways37">Almost Always</label><br/>
                                        <input type="radio" id="veryfrequently37" name="influence_people_at_work37" value="Very Frequently"/>
                                          <label for="veryfrequently37">Very Frequently</label><br/>
                                         <input type="radio" id="frequently37" name="influence_people_at_work37" value="Frequently"/>
                                          <label for="frequently37">Frequently</label><br/>
                                          <input type="radio" id="infrequently37" name="influence_people_at_work37" value="Infrequently"/>
                                          <label for="infrequently37">Infrequently</label><br/>
                                          <input type="radio" id="veryinfrequently37" name="influence_people_at_work37" value="Very Infrequently"/>
                                          <label for="veryinfrequently37">Very Infrequently</label><br/>
                                          <input type="radio" id="almostnever37" name="influence_people_at_work37" value="Almost Never"/>
                                          <label for="almostnever37">Almost Never</label>
                                    </div>
                                 </div>
                                   
                                 <div className="col-lg-12 col-md-12 text-center">
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
