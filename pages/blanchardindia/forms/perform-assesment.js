import Link from "next/link"
import Head from "next/head"

export default function PerformAssesment() {
   const registerUser = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/60/feedback');
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
      xhttp.send("your-name=" + event.target.yourname.value
         + "&your-email=" + event.target.emailid.value
         + "&designation=" + event.target.designation.value
         + "&organisation=" + event.target.organisation.value
         + "&rating=" + event.target.rating.value
         + "&rating-email=" + event.target.ratingemail.value

         + "&Q1=" + event.target.q1.value
         + "&Q2=" + event.target.q2.value
         + "&Q3=" + event.target.q3.value
         + "&Q4=" + event.target.q4.value
         + "&Q5=" + event.target.q5.value
         + "&Q6=" + event.target.q6.value
         + "&Q7=" + event.target.q7.value
         + "&Q8=" + event.target.q8.value
         + "&Q9=" + event.target.q9.value
         + "&Q10=" + event.target.q10.value
         + "&Q11=" + event.target.q11.value
         + "&Q12=" + event.target.q12.value
         + "&Q13=" + event.target.q13.value
         + "&Q14=" + event.target.q14.value
         + "&Q15=" + event.target.q15.value
         + "&Q16=" + event.target.q16.value
         + "&Q17=" + event.target.q17.value
         + "&Q18=" + event.target.q18.value
         + "&Q19=" + event.target.q19.value
         + "&Q20=" + event.target.q20.value
         + "&Q21=" + event.target.q21.value
         + "&Q22=" + event.target.q22.value
         + "&Q23=" + event.target.q23.value
         + "&Q24=" + event.target.q24.value
         + "&Q25=" + event.target.q25.value
         + "&Q26=" + event.target.q26.value
         + "&Q27=" + event.target.q27.value
         + "&Q28=" + event.target.q28.value
         + "&Q29=" + event.target.q29.value
         + "&Q30=" + event.target.q30.value
         + "&Q31=" + event.target.q31.value
         + "&Q32=" + event.target.q32.value
         + "&Q33=" + event.target.q33.value
         + "&Q34=" + event.target.q34.value
         + "&Q35=" + event.target.q35.value)

   }

   return (
      <>
         <Head>
            <title>Perform Assesment - Blanchard India</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div>
            <div className="inner-banner edge-self-assessment-headbg">
               <div className="container">
                  <div className="inner-title text-center">
                     <h3>Perform Assesment</h3>
                     <ul>
                        <li>
                           <Link href="/">Home</Link>
                        </li>
                        <li>Perform Assesment</li>
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
                        <span className="sp-color1">Thank You for taking out valuable time to complete PERFORM Assessment.</span>
                        <p>The PERFORM Rating Scale provides a snapshot of a team’s strengths and gaps in modelling the seven <br></br>characteristics common to all high-performance teams.</p>
                        <h5><span className="sp-color1">Questionnaire:</span> 35 questions with a five-point scale ('Not at all true' -to- 'Very true')</h5>
                        <h5><span className="sp-color1">Direction:</span> Choose the option from the given range that you believe is most appropriate.</h5>
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
                                       <input type="text" name="yourname" id="fullname" className="form-control" placeholder="Full Name*" required />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="email" name="emailid" id="emailid" className="form-control" placeholder="Work Email/Email*" required />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="designation" className="form-control" placeholder="Designation*" required />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="text" name="organisation" id="organisation" className="form-control" placeholder="Organisation*" required />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">                                       
                                       <select name="rating" className="form-control" required>
                                          <option value="">Rating for (Relation )</option>
                                          <option value="Self">Self</option>
                                          <option value="Peer">Peer</option>
                                          <option value="Manager">Manager</option>
                                          <option value="Direct Report">Direct Report</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="email" name="ratingemail" id="ratingemail" className="form-control" placeholder="Rating for (Email Id.)*" required />
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                        <h4>Tool 3—PERFORM Rating Scale</h4>
                                        <p>The PERFORM Rating Scale provides a snapshot of a team’s strengths and gaps in modeling the seven characteristics common to all high-performance teams. Since these are your own perceptions, they should be validated by comparing them with the responses from the other members of your team. To improve performance, focus your attention on the areas rated 3 or below.</p>
                                        <span className="sp-color1">Purpose and Values</span>                                        
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>1) The team has a clear commitment to a common purpose. Team members know what the team’s work is and why it is important.</label><br/>
                                        <input type="radio" id="notatalltrue" name="q1" value="Not at All True" required />
                                          <label for="notatalltrue">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue" name="q1" value="Seldom True" required />
                                          <label for="seldomtrue">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue" name="q1" value="Somewhat True" required />
                                          <label for="somewhattrue">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue" name="q1" value="Mostly True" required />
                                          <label for="MostlyTrue">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue" name="q1" value="Very True" required/>
                                          <label for="VeryTrue">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>2) Shared values and norms promote integrity, quality, and collaboration.</label><br/>
                                        <input type="radio" id="notatalltrue2" name="q2" value="Not at All True" required />
                                          <label for="notatalltrue2">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue2" name="q2" value="Seldom True" required />
                                          <label for="seldomtrue2">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue2" name="q2" value="Somewhat True" required />
                                          <label for="somewhattrue2">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue2" name="q2" value="Mostly True" required />
                                          <label for="MostlyTrue2">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue2" name="q2" value="Very True" required/>
                                          <label for="VeryTrue2">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>3) Specific team goals are clear, challenging, agreed on, and relevant to the purpose.</label><br/>
                                        <input type="radio" id="notatalltrue3" name="q3" value="Not at All True" required />
                                          <label for="notatalltrue3">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue3" name="q3" value="Seldom True" required />
                                          <label for="seldomtrue3">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue3" name="q3" value="Somewhat True" required />
                                          <label for="somewhattrue3">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue3" name="q3" value="Mostly True" required />
                                          <label for="MostlyTrue3">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue3" name="q3" value="Very True" required/>
                                          <label for="VeryTrue3">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>4) Strategies for achieving goals are clear and agreed on.</label><br/>
                                        <input type="radio" id="notatalltrue4" name="q4" value="Not at All True" required />
                                          <label for="notatalltrue4">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue4" name="q4" value="Seldom True" required />
                                          <label for="seldomtrue4">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue4" name="q4" value="Somewhat True" required />
                                          <label for="somewhattrue4">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue4" name="q4" value="Mostly True" required />
                                          <label for="MostlyTrue4">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue4" name="q4" value="Very True" required/>
                                          <label for="VeryTrue4">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>5) Individual roles are clear, and their relationship to the team purpose and goals is understood.</label><br/>
                                        <input type="radio" id="notatalltrue5" name="q5" value="Not at All True" required />
                                          <label for="notatalltrue5">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue5" name="q5" value="Seldom True" required />
                                          <label for="seldomtrue5">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue5" name="q5" value="Somewhat True" required />
                                          <label for="somewhattrue5">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue5" name="q5" value="Mostly True" required />
                                          <label for="MostlyTrue5">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue5" name="q5" value="Very True" required/>
                                          <label for="VeryTrue5">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>6) Values, norms, and practices encourage initiative, involvement, and creativity.</label><br/>
                                        <input type="radio" id="notatalltrue6" name="q6" value="Not at All True" required />
                                          <label for="notatalltrue6">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue6" name="q6" value="Seldom True" required />
                                          <label for="seldomtrue6">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue6" name="q6" value="Somewhat True" required />
                                          <label for="somewhattrue6">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue6" name="q6" value="Mostly True" required />
                                          <label for="MostlyTrue6">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue6" name="q6" value="Very True" required/>
                                          <label for="VeryTrue6">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>7) The team has access to relevant information and resources.</label><br/>
                                        <input type="radio" id="notatalltrue7" name="q7" value="Not at All True" required />
                                          <label for="notatalltrue7">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue7" name="q7" value="Seldom True" required />
                                          <label for="seldomtrue7">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue7" name="q7" value="Somewhat True" required />
                                          <label for="somewhattrue7">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue7" name="q7" value="Mostly True" required />
                                          <label for="MostlyTrue7">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue7" name="q7" value="Very True" required/>
                                          <label for="VeryTrue7">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>8) The team’s decision-making process, scope of authority, and accountability practices are clear.</label><br/>
                                        <input type="radio" id="notatalltrue8" name="q8" value="Not at All True" required />
                                          <label for="notatalltrue8">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue8" name="q8" value="Seldom True" required />
                                          <label for="seldomtrue8">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue8" name="q8" value="Somewhat True" required />
                                          <label for="somewhattrue8">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue8" name="q8" value="Mostly True" required />
                                          <label for="MostlyTrue8">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue8" name="q8" value="Very True" required/>
                                          <label for="VeryTrue8">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>9) Direction, structure, and training are available to support individual and team development.</label><br/>
                                        <input type="radio" id="notatalltrue9" name="q9" value="Not at All True" required />
                                          <label for="notatalltrue9">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue9" name="q9" value="Seldom True" required />
                                          <label for="seldomtrue9">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue9" name="q9" value="Somewhat True" required />
                                          <label for="somewhattrue9">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue9" name="q9" value="Mostly True" required />
                                          <label for="MostlyTrue9">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue9" name="q9" value="Very True" required/>
                                          <label for="VeryTrue9">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>10) The team is committed to the continuing growth and development of all team members.</label><br/>
                                        <input type="radio" id="notatalltrue10" name="q10" value="Not at All True" required />
                                          <label for="notatalltrue10">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue10" name="q10" value="Seldom True" required />
                                          <label for="seldomtrue10">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue10" name="q10" value="Somewhat True" required />
                                          <label for="somewhattrue10">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue10" name="q10" value="Mostly True" required />
                                          <label for="MostlyTrue10">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue10" name="q10" value="Very True" required/>
                                          <label for="VeryTrue10">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>11) Individual differences, including culture, ethnicity, gender, nationality, and age are valued and respected.</label><br/>
                                        <input type="radio" id="notatalltrue11" name="q11" value="Not at All True" required />
                                          <label for="notatalltrue11">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue11" name="q11" value="Seldom True" required />
                                          <label for="seldomtrue11">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue11" name="q11" value="Somewhat True" required />
                                          <label for="somewhattrue11">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue11" name="q11" value="Mostly True" required />
                                          <label for="MostlyTrue11">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue11" name="q11" value="Very True" required/>
                                          <label for="VeryTrue11">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>12) Different ideas, opinions, feelings, and perspectives from all team members are encouraged and considered.</label><br/>
                                        <input type="radio" id="notatalltrue12" name="q12" value="Not at All True" required />
                                          <label for="notatalltrue12">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue12" name="q12" value="Seldom True" required />
                                          <label for="seldomtrue12">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue12" name="q12" value="Somewhat True" required />
                                          <label for="somewhattrue12">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue12" name="q12" value="Mostly True" required />
                                          <label for="MostlyTrue12">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue12" name="q12" value="Very True" required/>
                                          <label for="VeryTrue12">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>13) Team members listen actively to each other for understanding, not judgment.</label><br/>
                                        <input type="radio" id="notatalltrue13" name="q13" value="Not at All True" required />
                                          <label for="notatalltrue13">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue13" name="q13" value="Seldom True" required />
                                          <label for="seldomtrue13">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue13" name="q13" value="Somewhat True" required />
                                          <label for="somewhattrue13">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue13" name="q13" value="Mostly True" required />
                                          <label for="MostlyTrue13">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue13" name="q13" value="Very True" required/>
                                          <label for="VeryTrue13">Very True</label><br/>
                                          
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>14) The team uses effective methods for finding common ground and managing conflict.</label><br/>
                                        <input type="radio" id="notatalltrue14" name="q14" value="Not at All True" required />
                                          <label for="notatalltrue14">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue14" name="q14" value="Seldom True" required />
                                          <label for="seldomtrue14">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue14" name="q14" value="Somewhat True" required />
                                          <label for="somewhattrue14">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue14" name="q14" value="Mostly True" required />
                                          <label for="MostlyTrue14">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue14" name="q14" value="Very True" required/>
                                          <label for="VeryTrue14">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>15) Honest and open feedback helps team members be aware of their strengths and weaknesses.</label><br/>
                                        <input type="radio" id="notatalltrue15" name="q15" value="Not at All True" required />
                                          <label for="notatalltrue15">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue15" name="q15" value="Seldom True" required />
                                          <label for="seldomtrue15">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue15" name="q15" value="Somewhat True" required />
                                          <label for="somewhattrue15">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue15" name="q15" value="Mostly True" required />
                                          <label for="MostlyTrue15">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue15" name="q15" value="Very True" required/>
                                          <label for="VeryTrue15">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>16) Team members share responsibility for team development and leadership.</label><br/>
                                        <input type="radio" id="notatalltrue16" name="q16" value="Not at All True" required />
                                          <label for="notatalltrue16">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue16" name="q16" value="Seldom True" required />
                                          <label for="seldomtrue16">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue16" name="q16" value="Somewhat True" required />
                                          <label for="somewhattrue16">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue16" name="q16" value="Mostly True" required />
                                          <label for="MostlyTrue16">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue16" name="q16" value="Very True" required/>
                                          <label for="VeryTrue16">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>17) The team is able to meet challenges using the unique talents and strengths of all team members.</label><br/>
                                        <input type="radio" id="notatalltrue17" name="q17" value="Not at All True" required />
                                          <label for="notatalltrue17">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue17" name="q17" value="Seldom True" required />
                                          <label for="seldomtrue17">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue17" name="q17" value="Somewhat True" required />
                                          <label for="somewhattrue17">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue17" name="q17" value="Mostly True" required />
                                          <label for="MostlyTrue17">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue17" name="q17" value="Very True" required/>
                                          <label for="VeryTrue17">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>18)The team is open to exploring different ways of doing things and adapts to change.</label><br/>
                                        <input type="radio" id="notatalltrue18" name="q18" value="Not at All True" required />
                                          <label for="notatalltrue18">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue18" name="q18" value="Seldom True" required />
                                          <label for="seldomtrue18">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue18" name="q18" value="Somewhat True" required />
                                          <label for="somewhattrue18">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue18" name="q18" value="Mostly True" required />
                                          <label for="MostlyTrue18">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue18" name="q18" value="Very True" required/>
                                          <label for="VeryTrue18">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>19) Team members shift between behaviors that provide direction or support as needed.</label><br/>
                                        <input type="radio" id="notatalltrue19" name="q19" value="Not at All True" required />
                                          <label for="notatalltrue19">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue19" name="q19" value="Seldom True" required />
                                          <label for="seldomtrue19">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue19" name="q19" value="Somewhat True" required />
                                          <label for="somewhattrue19">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue19" name="q19" value="Mostly True" required />
                                          <label for="MostlyTrue19">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue19" name="q19" value="Very True" required/>
                                          <label for="VeryTrue19">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>20) Calculated risks are supported. Mistakes are seen as opportunities for learning.</label><br/>
                                        <input type="radio" id="notatalltrue20" name="q20" value="Not at All True" required />
                                          <label for="notatalltrue20">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue20" name="q20" value="Seldom True" required />
                                          <label for="seldomtrue20">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue20" name="q20" value="Somewhat True" required />
                                          <label for="somewhattrue20">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue20" name="q20" value="Mostly True" required />
                                          <label for="MostlyTrue20">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue20" name="q20" value="Very True" required/>
                                          <label for="VeryTrue20">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>21) The team consistently produces significant results; the job gets done.</label><br/>
                                        <input type="radio" id="notatalltrue21" name="q21" value="Not at All True" required />
                                          <label for="notatalltrue21">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue21" name="q21" value="Seldom True" required />
                                          <label for="seldomtrue21">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue21" name="q21" value="Somewhat True" required />
                                          <label for="somewhattrue21">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue21" name="q21" value="Mostly True" required />
                                          <label for="MostlyTrue21">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue21" name="q21" value="Very True" required/>
                                          <label for="VeryTrue21">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>22) The team is committed to high standards and measures for goal accomplishment.</label><br/>
                                        <input type="radio" id="notatalltrue22" name="q22" value="Not at All True" required />
                                          <label for="notatalltrue22">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue22" name="q22" value="Seldom True" required />
                                          <label for="seldomtrue22">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue22" name="q22" value="Somewhat True" required />
                                          <label for="somewhattrue22">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue22" name="q22" value="Mostly True" required />
                                          <label for="MostlyTrue22">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue22" name="q22" value="Very True" required/>
                                          <label for="VeryTrue22">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>23)The team uses effective problem-solving and decision-making practices to achieve goals.</label><br/>
                                        <input type="radio" id="notatalltrue23" name="q23" value="Not at All True" required />
                                          <label for="notatalltrue23">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue23" name="q23" value="Seldom True" required />
                                          <label for="seldomtrue23">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue23" name="q23" value="Somewhat True" required />
                                          <label for="somewhattrue23">Somewhat True</label><br/>
                                          <input type="radio" id="23" name="q23" value="Mostly True" required />
                                          <label for="MostlyTrue23">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue23" name="q23" value="Very True" required/>
                                          <label for="VeryTrue23">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>24) The team is committed to learning from mistakes and to continuous improvement.</label><br/>
                                        <input type="radio" id="notatalltrue24" name="q24" value="Not at All True" required />
                                          <label for="notatalltrue24">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue24" name="q24" value="Seldom True" required />
                                          <label for="seldomtrue24">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue24" name="q24" value="Somewhat True" required />
                                          <label for="somewhattrue24">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue24" name="q24" value="Mostly True" required />
                                          <label for="MostlyTrue24">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue24" name="q24" value="Very True" required/>
                                          <label for="VeryTrue24">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>25) The team coordinates efforts with other teams, vendors, and customers as appropriate.</label><br/>
                                        <input type="radio" id="notatalltrue25" name="q25" value="Not at All True" required />
                                          <label for="notatalltrue25">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue25" name="q25" value="Seldom True" required />
                                          <label for="seldomtrue25">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue25" name="q25" value="Somewhat True" required />
                                          <label for="somewhattrue25">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue25" name="q25" value="Mostly True" required />
                                          <label for="MostlyTrue25">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue25" name="q25" value="Very True" required/>
                                          <label for="VeryTrue25">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>26) The team leader and team members acknowledge individual and team accomplishments.</label><br/>
                                        <input type="radio" id="notatalltrue26" name="q26" value="Not at All True" required />
                                          <label for="notatalltrue26">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue26" name="q26" value="Seldom True" required />
                                          <label for="seldomtrue26">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue26" name="q26" value="Somewhat True" required />
                                          <label for="somewhattrue26">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue26" name="q26" value="Mostly True" required />
                                          <label for="MostlyTrue26">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue26" name="q26" value="Very True" required/>
                                          <label for="VeryTrue26">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>27) The organization values and recognizes team contributions.</label><br/>
                                        <input type="radio" id="notatalltrue27" name="q27" value="Not at All True" required />
                                          <label for="notatalltrue27">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue27" name="q27" value="Seldom True" required />
                                          <label for="seldomtrue27">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue27" name="q27" value="Somewhat True" required />
                                          <label for="somewhattrue27">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue27" name="q27" value="Mostly True" required />
                                          <label for="MostlyTrue27">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue27" name="q27" value="Very True" required/>
                                          <label for="VeryTrue27">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>28)Team members feel highly regarded within the team.</label><br/>
                                        <input type="radio" id="notatalltrue28" name="q28" value="Not at All True" required />
                                          <label for="notatalltrue28">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue28" name="q28" value="Seldom True" required />
                                          <label for="seldomtrue28">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue28" name="q28" value="Somewhat True" required />
                                          <label for="somewhattrue28">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue28" name="q28" value="Mostly True" required />
                                          <label for="MostlyTrue28">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue28" name="q28" value="Very True" required/>
                                          <label for="VeryTrue28">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>29) Team members have a sense of personal satisfaction in relation to their contributions.</label><br/>
                                        <input type="radio" id="notatalltrue29" name="q29" value="Not at All True" required />
                                          <label for="notatalltrue29">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue29" name="q29" value="Seldom True" required />
                                          <label for="seldomtrue29">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue29" name="q29" value="Somewhat True" required />
                                          <label for="somewhattrue29">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue29" name="q29" value="Mostly True" required />
                                          <label for="MostlyTrue29">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue29" name="q29" value="Very True" required/>
                                          <label for="VeryTrue29">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>30) The team celebrates successes and milestones.</label><br/>
                                        <input type="radio" id="notatalltrue30" name="q30" value="Not at All True" required />
                                          <label for="notatalltrue30">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue30" name="q30" value="Seldom True" required />
                                          <label for="seldomtrue30">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue30" name="q30" value="Somewhat True" required />
                                          <label for="somewhattrue30">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue30" name="q30" value="Mostly True" required />
                                          <label for="MostlyTrue30">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue30" name="q30" value="Very True" required/>
                                          <label for="VeryTrue30">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>31) Team members are confident and enthusiastic about their work.</label><br/>
                                        <input type="radio" id="notatalltrue31" name="q31" value="Not at All True" required />
                                          <label for="notatalltrue31">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue31" name="q31" value="Seldom True" required />
                                          <label for="seldomtrue31">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue31" name="q31" value="Somewhat True" required />
                                          <label for="somewhattrue31">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue31" name="q31" value="Mostly True" required />
                                          <label for="MostlyTrue31">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue31" name="q31" value="Very True" required/>
                                          <label for="VeryTrue31">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>32) Everyone feels pride and satisfaction in being a part of the team.</label><br/>
                                        <input type="radio" id="notatalltrue32" name="q32" value="Not at All True" required />
                                          <label for="notatalltrue29">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue32" name="q32" value="Seldom True" required />
                                          <label for="seldomtrue32">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue32" name="q32" value="Somewhat True" required />
                                          <label for="somewhattrue32">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue32" name="q32" value="Mostly True" required />
                                          <label for="MostlyTrue32">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue32" name="q32" value="Very True" required/>
                                          <label for="VeryTrue32">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>33)Team members trust one another.</label><br/>
                                        <input type="radio" id="notatalltrue33" name="q33" value="Not at All True" required />
                                          <label for="notatalltrue33">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue33" name="q33" value="Seldom True" required />
                                          <label for="seldomtrue33">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue33" name="q33" value="Somewhat True" required />
                                          <label for="somewhattrue33">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue33" name="q33" value="Mostly True" required />
                                          <label for="MostlyTrue33">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue33" name="q33" value="Very True" required/>
                                          <label for="VeryTrue33">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>34) Team members support and help each other.</label><br/>
                                        <input type="radio" id="notatalltrue34" name="q34" value="Not at All True" required />
                                          <label for="notatalltrue34">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue34" name="q34" value="Seldom True" required />
                                          <label for="seldomtrue34">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue34" name="q34" value="Somewhat True" required />
                                          <label for="somewhattrue34">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue34" name="q34" value="Mostly True" required />
                                          <label for="MostlyTrue34">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue34" name="q34" value="Very True" required/>
                                          <label for="VeryTrue34">Very True</label><br/>
                                          
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>35) The team encourages hard work as well as having fun.</label><br/>
                                        <input type="radio" id="notatalltrue35" name="q35" value="Not at All True" required />
                                          <label for="notatalltrue35">Not at All True</label><br/>
                                        <input type="radio" id="seldomtrue35" name="q35" value="Seldom True" required />
                                          <label for="seldomtrue35">Seldom True</label><br/>
                                         <input type="radio" id="somewhattrue35" name="q35" value="Somewhat True" required />
                                          <label for="somewhattrue35">Somewhat True</label><br/>
                                          <input type="radio" id="MostlyTrue35" name="q35" value="Mostly True" required />
                                          <label for="MostlyTrue35">Mostly True</label><br/>
                                          <input type="radio" id="VeryTrue35" name="q35" value="Very True" required/>
                                          <label for="VeryTrue35">Very True</label><br/>
                                          
                                    </div>
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