import Link from "next/link"
import Head from "next/head"

export default function LBaiiSelfQuestionnaire() {
   const registerUser = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/67/feedback');
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
      xhttp.send("your-name=" + event.target.name.value
         + "&your-email=" + event.target.emailid.value

         + "&As1=" + event.target.As1.value
         + "&As2=" + event.target.As2.value
         + "&As3=" + event.target.As3.value
         + "&As4=" + event.target.As4.value
         + "&As5=" + event.target.As5.value
         + "&As6=" + event.target.As6.value
         + "&As7=" + event.target.As7.value
         + "&As8=" + event.target.As8.value
         + "&As9=" + event.target.As9.value
         + "&As10=" + event.target.As10.value
         + "&As11=" + event.target.As11.value
         + "&As12=" + event.target.As12.value
         + "&As13=" + event.target.As13.value
         + "&As14=" + event.target.As14.value
         + "&As15=" + event.target.As15.value
         + "&As16=" + event.target.As16.value
         + "&As17=" + event.target.As17.value
         + "&As18=" + event.target.As18.value
         + "&As19=" + event.target.As19.value
         + "&As20=" + event.target.As20.value)

   }

   return (
      <>
         <Head>
            <title>LBAII Self Questionnaire</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div>
            <div className="inner-banner edge-self-assessment-headbg">
               <div className="container">
                  <div className="inner-title text-center">
                     <h3>LBAII Self Questionnaire</h3>
                     <ul>
                        <li>
                           <Link href="/">Home</Link>
                        </li>
                        <li>LBAII Self Questionnaire</li>
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
                        <span className="sp-color1">Thank You for taking out valuable time to complete the LBAII assessment as part of the SLII Experience™ Workshop. We request you to answer the following questions as per the below given instructions.</span>                        
                     </div>
                     <div>
                        <table className="table-bordered mtt-20">
                            <tr>
                                <td><b>Questionnaire</b></td>
                                <td>20 items involving hypothetical work situations with four possible answers</td>
                            </tr>
                            <tr>
                                <td><b>Direction</b></td>
                                <td>Choose one response (A, B, C, or D) that best describes the action you would take in each situation.</td>
                            </tr>
                        </table>
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
                                       <input type="text" name="name" id="name" className="form-control" placeholder="Your Name*" required />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="form-group">
                                       <input type="email" name="emailid" id="emailid" className="form-control" placeholder="Work Email/Email*" required />

                                    </div>
                                 </div>                           
                                   
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                        <h4>LBAII® Self Questionnaire</h4>                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:1 You have asked a new employee to write a proposal to buy new equipment for the division. She needs to learn more about this equipment to make a sound decision about options and costs. She feels this assignment will stretch her already full schedule. You would...?</label><br/>
                                       <label for="As11c">
                                        <input type="radio" id="As11c" name="As1" value="A) Tell her when you want the proposal and explain what you want in the proposal. Outline the steps she should take to become knowledgeable about the new equipment. Set daily meetings with her to track progress." required="required"/> A) Tell her when you want the proposal and explain what you want in the proposal. Outline the steps she should take to become knowledgeable about the new equipment. Set daily meetings with her to track progress.
                                       </label><br/>

                                       <label for="As12c">
                                        <input type="radio" id="As12c" name="As1" value="B) Ask her to produce the proposal and discuss its importance. Ask her to set a deadline for completion. Give her the resources she needs. Ask her to provide periodic progress reports." required="required"/> B) Ask her to produce the proposal and discuss its importance. Ask her to set a deadline for completion. Give her the resources she needs. Ask her to provide periodic progress reports.
                                       </label><br/>

                                       <label for="As13c">
                                        <input type="radio" id="As13c" name="As1" value="C) Tell her when you want the proposal and discuss its importance. Explain what you want in the report. Outline steps she should take to learn more about the equipment. Listen to her concerns and use her ideas when possible. Set weekly meetings to track her progress." required="required"/> C) Tell her when you want the proposal and discuss its importance. Explain what you want in the report. Outline steps she should take to learn more about the equipment. Listen to her concerns and use her ideas when possible. Set weekly meetings to track her progress.
                                       </label><br/>

                                       <label for="As14c">
                                        <input type="radio" id="As14c" name="As1" value="D) Ask her to produce the proposal and discuss its importance. Explore the barriers she foresees and strategies for removing them. Ask her to set a deadline for completion and periodically check with her to track progress." required="required"/> D) Ask her to produce the proposal and discuss its importance. Explore the barriers she foresees and strategies for removing them. Ask her to set a deadline for completion and periodically check with her to track progress.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:2 Your task force has been working hard to complete its division-wide report. A new member has joined the group. He must present cost figures at the end of next week, but he knows nothing about the report requirements and format. He is eager to learn more about his role in the group. You would...?</label><br/>
                                       <label for="As11">
                                        <input type="radio" id="As11" name="As2" value="A) Tell him exactly what is needed. Specify the requirements and format. Introduce him to other task force members. Check with him frequently during the week to monitor progress and to specify corrections." required="required"/> A) Tell him exactly what is needed. Specify the requirements and format. Introduce him to other task force members. Check with him frequently during the week to monitor progress and to specify corrections.
                                       </label><br/>

                                       <label for="As12">
                                        <input type="radio" id="As12" name="As2" value="B) Ask him if there is anything you can do to help. Introduce him to other task force members. Explore his ideas for “getting up to speed” on the report. Check with him during the week to see how he is doing." required="required"/> B) Ask him if there is anything you can do to help. Introduce him to other task force members. Explore his ideas for “getting up to speed” on the report. Check with him during the week to see how he is doing.
                                       </label><br/>

                                       <label for="As13">
                                        <input type="radio" id="As13" name="As2" value="C) Specify the report format and required information and solicit his ideas. Introduce him to each task force member. Check with him frequently during the week to see how the report is progressing and to help with any modifications." required="required"/> C) Specify the report format and required information and solicit his ideas. Introduce him to each task force member. Check with him frequently during the week to see how the report is progressing and to help with any modifications.
                                       </label><br/>

                                       <label for="As14">
                                        <input type="radio" id="As14" name="As2" value="D) Welcome him and introduce him to members of the task force who could help him. Ask him to check back if he has any problems." required="required"/> D) Welcome him and introduce him to members of the task force who could help him. Ask him to check back if he has any problems.
                                       </label><br/>
                                        
                                    </div>
                                 </div>
                                 

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:3 You have recently noticed a performance problem with one of your people. He demonstrates an “I don’t care” attitude. Only your constant prodding has brought about task completion. You suspect he may not have enough expertise to complete the high-priority task you have given him. You would...?</label><br/>
                                       <label for="As21">
                                        <input type="radio" id="As11" name="As3" value="A) Specify the steps he needs to take and the outcomes you want. Clarify timelines and paperwork requirements. Frequently check to see if the task is progressing as it should." required="required"/> A) Specify the steps he needs to take and the outcomes you want. Clarify timelines and paperwork requirements. Frequently check to see if the task is progressing as it should.
                                       </label><br/>

                                       <label for="As22">
                                        <input type="radio" id="As12" name="As3" value="B) Specify the steps he needs to take and the outcomes you want. Ask for his ideas and incorporate them if appropriate. Ask him to share his feelings about the assignment. Check to see that the task is progressing as it should." required="required"/> B) Specify the steps he needs to take and the outcomes you want. Ask for his ideas and incorporate them if appropriate. Ask him to share his feelings about the assignment. Check to see that the task is progressing as it should.
                                       </label><br/>

                                       <label for="As23">
                                        <input type="radio" id="As23" name="As3" value="C) Involve him in problem solving for this task. Offer your help and encourage him to use his ideas to complete the project. Ask him to share his feelings about the assignment. Periodically check in to see how things are going." required="required"/> C) Involve him in problem solving for this task. Offer your help and encourage him to use his ideas to complete the project. Ask him to share his feelings about the assignment. Periodically check in to see how things are going.
                                       </label><br/>

                                       <label for="As24">
                                        <input type="radio" id="As24" name="As3" value="D) Let him know how important this task is. Ask him to outline his plan for completion and to send you a copy. Ask him to check back if he has any problems." required="required"/> D) Let him know how important this task is. Ask him to outline his plan for completion and to send you a copy. Ask him to check back if he has any problems.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:4 Your work group’s composition has changed because of company restructuring. Performance levels have dropped. Deadlines are being missed and your manager is concerned. Group members want to improve their performance but need more knowledge and skills. You would...?</label><br/>
                                       <label for="As31">
                                        <input type="radio" id="As31" name="As4" value="A) Ask them to identify their training needs and develop their own plan for improving performance. Give them the necessary resources. Be available to help them and ask to be kept informed." required="required"/> A) Ask them to identify their training needs and develop their own plan for improving performance. Give them the necessary resources. Be available to help them and ask to be kept informed.
                                       </label><br/>

                                       <label for="As32">
                                        <input type="radio" id="As32" name="As4" value="B) Discuss your plan to solve the performance problem. Ask for their input and include their ideas in your plan if possible. Explain your rationale. Frequently check to see how the plan is carried out." required="required"/> B) Discuss your plan to solve the performance problem. Ask for their input and include their ideas in your plan if possible. Explain your rationale. Frequently check to see how the plan is carried out.
                                       </label><br/>

                                       <label for="As33">
                                        <input type="radio" id="As33" name="As4" value="C) Outline the steps you want them to follow to solve the performance problem. Be specific about the time requirements and the skills you want them to learn. Closely monitor their progress on the plan." required="required"/> C) Outline the steps you want them to follow to solve the performance problem. Be specific about the time requirements and the skills you want them to learn. Closely monitor their progress on the plan.
                                       </label><br/>

                                       <label for="As34">
                                        <input type="radio" id="As34" name="As4" value="D) Help them develop a plan to improve performance. Encourage them to be creative. Support their plan and periodically check performance." required="required"/> D) Help them develop a plan to improve performance. Encourage them to be creative. Support their plan and periodically check performance.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:5 Because of budget cuts, it is necessary to consolidate. You have asked a highly experienced department member to take charge of the consolidation. This person has worked in all areas of your department. In the past she has usually been eager to help. While you feel she is able to perform the assignment, she seems indifferent to the task. You would...?</label><br/>
                                       <label for="As41">
                                        <input type="radio" id="As41" name="As5" value="A) Reassure her. Outline the steps she should use to manage this project. Ask for her ideas and incorporate them when possible, but make sure she follows your general approach. Frequently check to see how things are going." required="required"/> A) Reassure her. Outline the steps she should use to manage this project. Ask for her ideas and incorporate them when possible, but make sure she follows your general approach. Frequently check to see how things are going.
                                       </label><br/>

                                       <label for="As42">
                                        <input type="radio" id="As42" name="As5" value="B) Reassure her. Ask her to handle the project as she sees fit. Be patient and available to help. Ask for frequent updates." required="required"/> B) Reassure her. Ask her to handle the project as she sees fit. Be patient and available to help. Ask for frequent updates.
                                       </label><br/>

                                       <label for="As43">
                                        <input type="radio" id="As43" name="As5" value="C) Reassure her. Ask her to determine the best way to approach the project. Help her develop options and encourage her to use her own ideas. Agree on frequent checkpoints." required="required"/> C) Reassure her. Ask her to determine the best way to approach the project. Help her develop options and encourage her to use her own ideas. Agree on frequent checkpoints.
                                       </label><br/>

                                       <label for="As44">
                                        <input type="radio" id="As44" name="As5" value="D) Reassure her. Outline an overall plan and specify the steps you want her to follow. Frequently check to see how the steps are being implemented." required="required"/> D) Reassure her. Outline an overall plan and specify the steps you want her to follow. Frequently check to see how the steps are being implemented.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:6 For the second time in a month, you are having a problem with one of your employees. His weekly progress reports have been incomplete and late. In the past year he has completed his reports accurately and submitted them on time. This is the first time you have spoken to him about this problem. You would...?</label><br/>
                                       <label for="As51">
                                        <input type="radio" id="As51" name="As6" value="A) Tell him to improve the quality and timeliness of his paperwork. Go over the areas that are incomplete. Make sure he knows what is expected and how to fill out each section of the report. Continue to track his performance." required="required"/> A) Tell him to improve the quality and timeliness of his paperwork. Go over the areas that are incomplete. Make sure he knows what is expected and how to fill out each section of the report. Continue to track his performance.
                                       </label><br/>

                                       <label for="As52">
                                        <input type="radio" id="As52" name="As6" value="B) Ask him to turn in reports that are complete and on time, without pushing him. Continue to track his performance." required="required"/> B) Ask him to turn in reports that are complete and on time, without pushing him. Continue to track his performance.
                                       </label><br/>

                                       <label for="As53">
                                        <input type="radio" id="As53" name="As6" value="C) Discuss time and completion standards with him. Listen to his concerns but make sure he knows what is expected. Go over each section of the report and answer any questions. Use his ideas if possible. Continue to track his performance." required="required"/> C) Discuss time and completion standards with him. Listen to his concerns but make sure he knows what is expected. Go over each section of the report and answer any questions. Use his ideas if possible. Continue to track his performance.
                                       </label><br/>

                                       <label for="As54">
                                        <input type="radio" id="As54" name="As6" value="D) Ask him why his reports are incomplete. Listen to his concerns and do what you can to help him understand the importance of timely and accurate reports. Continue to track his performance." required="required"/> D) Ask him why his reports are incomplete. Listen to his concerns and do what you can to help him understand the importance of timely and accurate reports. Continue to track his performance.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:7 You have asked one of your senior employees to take on a new project. In the past his performance has been outstanding. The project you have given him is important to the future of your work group. He is excited about the new assignment but doesn’t know where to begin because he lacks project information. You would...?</label><br/>
                                       <label for="As61">
                                        <input type="radio" id="As61" name="As7" value="A) Explain why you think he has the skills to do the job. Ask him what problems he anticipates and help him explore alternative solutions. Frequently stay in touch to support him." required="required"/> A) Explain why you think he has the skills to do the job. Ask him what problems he anticipates and help him explore alternative solutions. Frequently stay in touch to support him.
                                       </label><br/>

                                       <label for="As62">
                                        <input type="radio" id="As62" name="As7" value="B) Specify how he should handle the project. Define the activities necessary to complete the job. Closely monitor how things are going." required="required"/> B) Specify how he should handle the project. Define the activities necessary to complete the job. Closely monitor how things are going.
                                       </label><br/>

                                       <label for="As63">
                                        <input type="radio" id="As63" name="As7" value="C) Ask him to develop a project plan for your approval within two weeks. Give him enough time to get started. Periodically offer support." required="required"/> C) Ask him to develop a project plan for your approval within two weeks. Give him enough time to get started. Periodically offer support.
                                       </label><br/>

                                       <label for="As64">
                                        <input type="radio" id="As64" name="As7" value="D) Outline how the project should be handled and solicit his ideas and suggestions. Incorporate his ideas when possible, but make sure your general outline is followed. Regularly check to see how things are going." required="required"/> D) Outline how the project should be handled and solicit his ideas and suggestions. Incorporate his ideas when possible, but make sure your general outline is followed. Regularly check to see how things are going.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:8 One of your staff members is feeling insecure about a job you have assigned to him. He is highly competent and you know that he has the skills to successfully complete the task. The deadline for completion is near. You would...?</label><br/>
                                       <label for="As71">
                                        <input type="radio" id="As71" name="As8" value="A) Let him know your concerns about the impending deadline. Help him explore alternative action steps and encourage him to use his own ideas. Periodically check with him to lend support." required="required"/> A) Let him know your concerns about the impending deadline. Help him explore alternative action steps and encourage him to use his own ideas. Periodically check with him to lend support.
                                       </label><br/>

                                       <label for="As72">
                                        <input type="radio" id="As72" name="As8" value="B) Discuss your concerns about the impending deadline. Develop an action plan for him to follow and get his reactions. Include his modifications if possible, but make sure he follows your general outline. Regularly check with him to see how things are going." required="required"/> B) Discuss your concerns about the impending deadline. Develop an action plan for him to follow and get his reactions. Include his modifications if possible, but make sure he follows your general outline. Regularly check with him to see how things are going.
                                       </label><br/>

                                       <label for="As73">
                                        <input type="radio" id="As73" name="As8" value="C) Outline the steps you want him to follow. Specify the reasons for completing the assignment on time. Closely monitor his progress." required="required"/> C) Outline the steps you want him to follow. Specify the reasons for completing the assignment on time. Closely monitor his progress.
                                       </label><br/>

                                       <label for="As74">
                                        <input type="radio" id="As74" name="As8" value="D) Ask him if there are any problems, but let him resolve the issue himself. Without pushing him, remind him of the impending deadline. Ask him to get back with an update." required="required"/> D) Ask him if there are any problems, but let him resolve the issue himself. Without pushing him, remind him of the impending deadline. Ask him to get back with an update.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:9 Your staff has asked you to consider changes in their work schedule due to an expansion in the customer base. Their changes make good sense to you. Members are very competent and work well together. You would...?</label><br/>
                                       <label for="As81">
                                        <input type="radio" id="As81" name="As9" value="A) Help them explore alternative scheduling possibilities. Be available to facilitate their group discussion. Support the plan they develop. Check to see how they implement their schedule." required="required"/> A) Help them explore alternative scheduling possibilities. Be available to facilitate their group discussion. Support the plan they develop. Check to see how they implement their schedule.
                                       </label><br/>

                                       <label for="As82">
                                        <input type="radio" id="As82" name="As9" value="B) Design the work schedule yourself. Explain the rationale behind your design. Listen to their reactions, ask for their ideas, and use their recommendations when possible. Check to see that the schedule is being followed." required="required"/> B) Design the work schedule yourself. Explain the rationale behind your design. Listen to their reactions, ask for their ideas, and use their recommendations when possible. Check to see that the schedule is being followed.
                                       </label><br/>

                                       <label for="As83">
                                        <input type="radio" id="As83" name="As9" value="C) Allow the staff to set a work schedule on their own. Let them implement their plan after you approve it. Check back at a later date to make sure the new schedule is working out for them." required="required"/> C) Allow the staff to set a work schedule on their own. Let them implement their plan after you approve it. Check back at a later date to make sure the new schedule is working out for them.
                                       </label><br/>

                                       <label for="As84">
                                        <input type="radio" id="As84" name="As9" value="D) Design the work schedule yourself. Explain how the schedule will work and answer any questions. Frequently check to see that the schedule is being followed." required="required"/> D) Design the work schedule yourself. Explain how the schedule will work and answer any questions. Frequently check to see that the schedule is being followed.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:10 Due to an organizational change, you have been assigned six new people whose performance has been declining over the past three months. They do not seem to have the task knowledge and skills to do their new jobs, and their attitudes have worsened because of the change. In a group meeting, you would...?</label><br/>
                                       <label for="As91">
                                        <input type="radio" id="As91" name="As10" value="A) Make them aware of their three-month performance trend. Ask them to decide what to do about it and set a deadline for implementing their solution. Check on their progress at some point." required="required"/> A) Make them aware of their three-month performance trend. Ask them to decide what to do about it and set a deadline for implementing their solution. Check on their progress at some point.
                                       </label><br/>

                                       <label for="As92">
                                        <input type="radio" id="As92" name="As10" value="B) Make them aware of their three-month performance trend. Specify the action steps you want them to follow. Give them constructive feedback on how to improve performance. Closely monitor their progress." required="required"/> B) Make them aware of their three-month performance trend. Specify the action steps you want them to follow. Give them constructive feedback on how to improve performance. Closely monitor their progress.
                                       </label><br/>

                                       <label for="As93">
                                        <input type="radio" id="As93" name="As10" value="C) Make them aware of their three-month performance trend. Outline the steps you want them to follow, explain why, and seek their feedback. Use their ideas when possible, but make sure they follow your general approach. Regularly monitor their progress." required="required"/> C) Make them aware of their three-month performance trend. Outline the steps you want them to follow, explain why, and seek their feedback. Use their ideas when possible, but make sure they follow your general approach. Regularly monitor their progress.
                                       </label><br/>

                                       <label for="As94">
                                        <input type="radio" id="As94" name="As10" value="D) Make them aware of their three-month performance trend. Ask them why their performance is declining. Listen to their concerns and ideas. Help them create their own plan for improving performance. Periodically check on their progress." required="required"/> D) Make them aware of their three-month performance trend. Ask them why their performance is declining. Listen to their concerns and ideas. Help them create their own plan for improving performance. Periodically check on their progress.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:11 A member of your department has had a fine performance record over the last 22 months. He is excited by the challenges of the upcoming year. Budgets and unit goals have not changed much from last year. In a meeting with him to discuss goals and an action plan for next year, you would...?</label><br/>
                                       <label for="As101">
                                        <input type="radio" id="As101" name="As11" value="A) Ask him to submit an outline of his goals and an action plan for your approval. Tell him you will call him if you have any questions." required="required"/> A) Ask him to submit an outline of his goals and an action plan for your approval. Tell him you will call him if you have any questions.
                                       </label><br/>

                                       <label for="As102">
                                        <input type="radio" id="As102" name="As11" value="B) Prepare a list of goals and an action plan that you think he can accomplish next year. Send it to him and meet with him to see if he has any questions." required="required"/> B) Prepare a list of goals and an action plan that you think he can accomplish next year. Send it to him and meet with him to see if he has any questions.
                                       </label><br/>

                                       <label for="As103">
                                        <input type="radio" id="As103" name="As11" value="C) Prepare a list of goals and an action plan that you think he can achieve next year. Meet with him to discuss his reactions and suggestions. Modify the plan while listening to his ideas but make the final decisions." required="required"/> C) Prepare a list of goals and an action plan that you think he can achieve next year. Meet with him to discuss his reactions and suggestions. Modify the plan while listening to his ideas but make the final decisions.
                                       </label><br/>

                                       <label for="As104">
                                        <input type="radio" id="As104" name="As11" value="D) Ask him to send you an outline of his goals and an action plan for next year. Review the goals and plan with him. Listen to his ideas and help him explore alternatives. Let him make the final decisions on his goals and plan." required="required"/> D) Ask him to send you an outline of his goals and an action plan for next year. Review the goals and plan with him. Listen to his ideas and help him explore alternatives. Let him make the final decisions on his goals and plan.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:12 Your unit members have an excellent performance record over the past two years. However, they have recently experienced three major setbacks due to factors beyond their control. Their performance and morale have drastically dropped and your manager is concerned. In a group meeting, you would...?</label><br/>
                                       <label for="As111">
                                        <input type="radio" id="As111" name="As12" value="A) Discuss the recent setbacks. Give unit members the specific steps you want them to follow to improve their performance. Closely monitor performance." required="required"/> A) Discuss the recent setbacks. Give unit members the specific steps you want them to follow to improve their performance. Closely monitor performance.
                                       </label><br/>

                                       <label for="As112">
                                        <input type="radio" id="As112" name="As12" value="B) Ask them how they feel about the recent setbacks. Listen to their concerns and encourage and help them explore their ideas for improving performance. Periodically check on performance." required="required"/> B) Ask them how they feel about the recent setbacks. Listen to their concerns and encourage and help them explore their ideas for improving performance. Periodically check on performance.
                                       </label><br/>

                                       <label for="As113">
                                        <input type="radio" id="As113" name="As12" value="C) Discuss the recent setbacks. Clarify the steps you want unit members to take to improve performance. Listen to their ideas and incorporate them if possible. Emphasize results. Encourage them to keep trying. Frequently check their performance." required="required"/> C) Discuss the recent setbacks. Clarify the steps you want unit members to take to improve performance. Listen to their ideas and incorporate them if possible. Emphasize results. Encourage them to keep trying. Frequently check their performance.
                                       </label><br/>

                                       <label for="As114">
                                        <input type="radio" id="As114" name="As12" value="D) Discuss the recent setbacks without pressuring unit members. Ask them to set a deadline to improve performance and to support each other along the way. Continue to track performance." required="required"/> D) Discuss the recent setbacks without pressuring unit members. Ask them to set a deadline to improve performance and to support each other along the way. Continue to track performance.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:13 You were recently assigned a new employee who will perform an important job in your unit. Even though she is inexperienced, she is enthusiastic and feels she has the confidence to do the job. You would...?</label><br/>
                                       <label for="As121">
                                        <input type="radio" id="As121" name="As13" value="A) Allow her time to determine what the job requires and how to do it. Let her know why the job is important. Ask her to contact you if she needs help. Track her performance." required="required"/> A) Allow her time to determine what the job requires and how to do it. Let her know why the job is important. Ask her to contact you if she needs help. Track her performance.
                                       </label><br/>

                                       <label for="As122">
                                        <input type="radio" id="As122" name="As13" value="B) Specify the results you want and when you want them. Clearly define the steps she should take to achieve results. Show her how to do the job. Closely monitor her progress." required="required"/> B) Specify the results you want and when you want them. Clearly define the steps she should take to achieve results. Show her how to do the job. Closely monitor her progress.
                                       </label><br/>

                                       <label for="As123">
                                        <input type="radio" id="As123" name="As13" value="C) Discuss the results you want and when you want them. Clearly define the steps she can take to achieve results. Explain why these steps are necessary and get her ideas. Use her ideas if possible, but make sure your general plan is followed. Frequently check her progress." required="required"/> C) Discuss the results you want and when you want them. Clearly define the steps she can take to achieve results. Explain why these steps are necessary and get her ideas. Use her ideas if possible, but make sure your general plan is followed. Frequently check her progress.
                                       </label><br/>

                                       <label for="As124">
                                        <input type="radio" id="As124" name="As13" value="D) Ask her how she plans to tackle this job. Help her explore the problems she anticipates by generating possible solutions. Encourage her to carry out her plan. Be available to listen to her concerns. Periodically check on her progress." required="required"/> D) Ask her how she plans to tackle this job. Help her explore the problems she anticipates by generating possible solutions. Encourage her to carry out her plan. Be available to listen to her concerns. Periodically check on her progress.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:14 Your manager has asked you to increase your unit’s output by seven percent. You know this can be done, but it will require your active involvement. To free your time, you must reassign the task of developing a new cost control system to one of your employees. The person you want has had considerable experience with cost control systems, but she is slightly unsure of doing this task on her own. You would...?</label><br/>
                                       <label for="As131">
                                        <input type="radio" id="As131" name="As14" value="A) Assign her the task and listen to her concerns. Explain why you think she has the skills to handle this assignment. Help her explore alternative approaches if she thinks it would be useful. Encourage and support her by providing needed resources. Periodically monitor her progress." required="required"/> A) Assign her the task and listen to her concerns. Explain why you think she has the skills to handle this assignment. Help her explore alternative approaches if she thinks it would be useful. Encourage and support her by providing needed resources. Periodically monitor her progress.
                                       </label><br/>

                                       <label for="As132">
                                        <input type="radio" id="As132" name="As14" value="B) Assign her the task and listen to her concerns. Discuss the steps to complete the task. Ask for her ideas and suggestions. After incorporating her ideas if possible, make sure she follows your general approach. Frequently monitor her progress." required="required"/> B) Assign her the task and listen to her concerns. Discuss the steps to complete the task. Ask for her ideas and suggestions. After incorporating her ideas if possible, make sure she follows your general approach. Frequently monitor her progress.
                                       </label><br/>

                                       <label for="As133">
                                        <input type="radio" id="As133" name="As14" value="C) Assign her the task. Listen to her concerns but let her resolve the issue. Give her time to adjust, and avoid asking for results right away. Ask her to check in frequently." required="required"/> C) Assign her the task. Listen to her concerns but let her resolve the issue. Give her time to adjust, and avoid asking for results right away. Ask her to check in frequently.    
                                       </label><br/>

                                       <label for="As134">
                                        <input type="radio" id="As134" name="As14" value="D) Assign her the task. Listen to her concerns and minimize her feelings of insecurity by telling her specifically how to handle this task. Outline the steps to be taken. Closely monitor her progress.
" required="required"/> D) Assign her the task. Listen to her concerns and minimize her feelings of insecurity by telling her specifically how to handle this task. Outline the steps to be taken. Closely monitor her progress.

                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:15 Your manager has asked you to assign someone to serve on a company-wide task force. This task force will make recommendations for restructuring the company’s compensation plan. You have chosen a highly productive employee who knows how her coworkers feel about the existing compensation plan. She has successfully led another unit task force. She wants the assignment. You would...?</label><br/>
                                       <label for="As151">
                                        <input type="radio" id="As151" name="As15" value="A) Give her the assignment, but tell her how she should present her coworkers’ point of view. Specify that she turn in a progress report within two days of each task force meeting." required="required"/> A) Give her the assignment, but tell her how she should present her coworkers’ point of view. Specify that she turn in a progress report within two days of each task force meeting.  
                                       </label><br/>

                                       <label for="As152">
                                        <input type="radio" id="As152" name="As15" value="B) Ask her to accept the assignment. Help her develop the point of view she will take on the task force. Periodically check with her." required="required"/> B) Ask her to accept the assignment. Help her develop the point of view she will take on the task force. Periodically check with her.
                                       </label><br/>

                                       <label for="As153">
                                        <input type="radio" id="As153" name="As15" value="C) Give her the assignment. Discuss what she should do to ensure that her coworkers’ perspective is considered by the task force. Ask her for her ideas, but make sure she follows your general approach. Ask her for a report after every task force meeting." required="required"/> C) Give her the assignment. Discuss what she should do to ensure that her coworkers’ perspective is considered by the task force. Ask her for her ideas, but make sure she follows your general approach. Ask her for a report after every task force meeting.
                                       </label><br/>

                                       <label for="As154">
                                        <input type="radio" id="As154" name="As15" value="D) Give her the assignment. Ask to be given updates as things progress." required="required"/> D) Give her the assignment. Ask to be given updates as things progress.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:16 Due to illness in your family, you have been forced to miss two meetings of a committee under your direction. Upon attending the next meeting, you find that the committee is operating well and making progress toward completing its goals. All group members come prepared, actively participate, and seem to be enthusiastic about their progress. You are unsure of what your role should be. You would...?</label><br/>
                                       <label for="As161">
                                        <input type="radio" id="As161" name="As16" value="A) Thank the committee members for their work so far. Let the group continue to work as it has during the last two meetings." required="required"/> A) Thank the committee members for their work so far. Let the group continue to work as it has during the last two meetings.
                                       </label><br/>

                                       <label for="As162">
                                        <input type="radio" id="As162" name="As16" value="B) Thank the committee members for their work so far. Set the agenda for the next meeting. Begin to direct the group’s activities." required="required"/> B) Thank the committee members for their work so far. Set the agenda for the next meeting. Begin to direct the group’s activities.
                                       </label><br/>

                                       <label for="As163">
                                        <input type="radio" id="As163" name="As16" value="C) Thank the committee members for their work so far. Try to solicit alternative ideas and suggestions. Do what you can to make the members feel important and involved." required="required"/> C) Thank the committee members for their work so far. Try to solicit alternative ideas and suggestions. Do what you can to make the members feel important and involved.
                                       </label><br/>

                                       <label for="As164">
                                        <input type="radio" id="As164" name="As16" value="D) Thank the committee members for their work so far. Set the agenda for the next meeting, but make sure to solicit their ideas and suggestions." required="required"/> D) Thank the committee members for their work so far. Set the agenda for the next meeting, but make sure to solicit their ideas and suggestions.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:17 Your staff is very competent and works well on their own. Their enthusiasm is high because of a recent success. Their performance as a group is outstanding. Now, you must set unit goals for next year. In a group meeting, you would...?</label><br/>
                                       <label for="As171">
                                        <input type="radio" id="As171" name="As17" value="A) Praise them for last year’s results. Involve the group in problem solving and goal setting for next year. Encourage them to be creative and help them explore alternatives." required="required"/> A) Praise them for last year’s results. Involve the group in problem solving and goal setting for next year. Encourage them to be creative and help them explore alternatives.
                                       </label><br/>

                                       <label for="As172">
                                        <input type="radio" id="As172" name="As17" value="B) Praise them for last year’s results. Challenge them by setting the goals for next year. Outline the action steps necessary to accomplish these goals." required="required"/> B) Praise them for last year’s results. Challenge them by setting the goals for next year. Outline the action steps necessary to accomplish these goals.
                                       </label><br/>

                                       <label for="As173">
                                        <input type="radio" id="As173" name="As17" value="C) Praise them for last year’s results. Ask them to set the goals for next year and to define their action plan to accomplish these goals. Be available to contribute when asked." required="required"/> C) Praise them for last year’s results. Ask them to set the goals for next year and to define their action plan to accomplish these goals. Be available to contribute when asked.
                                       </label><br/>

                                       <label for="As174">
                                        <input type="radio" id="As174" name="As17" value="D) Praise them for last year’s results. Set the goals for next year and outline the action steps necessary to accomplish these goals. Solicit the group’s ideas and suggestions and incorporate them if possible." required="required"/> D) Praise them for last year’s results. Set the goals for next year and outline the action steps necessary to accomplish these goals. Solicit the group’s ideas and suggestions and incorporate them if possible.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:18 You and your manager know that your department needs a new set of work procedures to improve long-term performance. Department members are eager to make some changes; but because of their specialized functions, they lack the knowledge and skills for understanding the “big picture.” You would...?</label><br/>
                                       <label for="As181">
                                        <input type="radio" id="As181" name="As18" value="A) Outline the new procedures and your plan for implementation. Involve the group in a discussion of alternatives. Use their suggestions when possible, but make them follow your general approach. Frequently check on the use of the new procedures and monitor their results." required="required"/> A) Outline the new procedures and your plan for implementation. Involve the group in a discussion of alternatives. Use their suggestions when possible, but make them follow your general approach. Frequently check on the use of the new procedures and monitor their results.
                                       </label><br/>

                                       <label for="As182">
                                        <input type="radio" id="As182" name="As18" value="B) Outline and demonstrate the new procedures. Instruct the group on the initial use of the procedures and closely monitor results." required="required"/> B) Outline and demonstrate the new procedures. Instruct the group on the initial use of the procedures and closely monitor results.
                                       </label><br/>

                                       <label for="As183">
                                        <input type="radio" id="As183" name="As18" value="C) Involve the group in a discussion to explore new work procedures. Encourage their initiative and creativity in developing the new procedures. Help them examine possible alternatives. Periodically check on the use of the new procedures and monitor their performance." required="required"/> C) Involve the group in a discussion to explore new work procedures. Encourage their initiative and creativity in developing the new procedures. Help them examine possible alternatives. Periodically check on the use of the new procedures and monitor their performance.
                                       </label><br/>

                                       <label for="As184">
                                        <input type="radio" id="As184" name="As18" value="D) Ask the group to formulate and implement a set of new procedures. Answer any informational concerns but give department members the responsibility for the task. Periodically monitor their performance." required="required"/> D) Ask the group to formulate and implement a set of new procedures. Answer any informational concerns but give department members the responsibility for the task. Periodically monitor their performance.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:19 You were recently appointed head of your division. Since taking over, you have noticed a drop in performance. There have been changes in technology, and your staff has not
mastered the new skills and techniques. Worst of all, they do not seem to be motivated to learn these skills. In a group meeting, you would...?</label><br/>
                                       <label for="As191">
                                        <input type="radio" id="As191" name="As19" value="A) Discuss the staff’s drop in performance. Listen to their concerns. Ask for their solutions for improving performance. Express your faith in their strategies. Emphasize their past efforts but periodically check on performance as they carry out their strategies." required="required"/> A) Discuss the staff’s drop in performance. Listen to their concerns. Ask for their solutions for improving performance. Express your faith in their strategies. Emphasize their past efforts but periodically check on performance as they carry out their strategies.
                                       </label><br/>

                                       <label for="As192">
                                        <input type="radio" id="As192" name="As19" value="B) Outline the necessary corrective actions you want them to take. Explore alternatives and incorporate their ideas. Modify the plan if appropriate but see that they implement it. Frequently check on their performance." required="required"/> B) Outline the necessary corrective actions you want them to take. Explore alternatives and incorporate their ideas. Modify the plan if appropriate but see that they implement it. Frequently check on their performance.
                                       </label><br/>

                                       <label for="As193">
                                        <input type="radio" id="As193" name="As19" value="C) Tell them about the drop in performance. Ask them to analyze the problem and draft a set of action steps for your approval. Set a deadline for the plan. Track their performance." required="required"/> C) Tell them about the drop in performance. Ask them to analyze the problem and draft a set of action steps for your approval. Set a deadline for the plan. Track their performance.
                                       </label><br/>

                                       <label for="As194">
                                        <input type="radio" id="As194" name="As19" value="D) Outline and direct the necessary corrective actions you want them to take. Define roles, responsibilities, and standards. Closely monitor their performance for improvement." required="required"/> D) Outline and direct the necessary corrective actions you want them to take. Define roles, responsibilities, and standards. Closely monitor their performance for improvement.
                                       </label><br/>
                                        
                                    </div>
                                 </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label className="sp-color1">Q:20 You have noticed that one of your inexperienced employees is not properly completing certain reports. These reports are inaccurate and incomplete. She is not enthusiastic about this task and often thinks paperwork is a waste of time. You would...?</label><br/>
                                       <label for="As201">
                                        <input type="radio" id="As201" name="As20" value="A) Let her know that she is submitting inaccurate and incomplete reports. Discuss the steps she should take and clarify why these steps are important. Ask for her suggestions, but make sure she follows your general outline. Frequently check her paperwork." required="required"/> A) Let her know that she is submitting inaccurate and incomplete reports. Discuss the steps she should take and clarify why these steps are important. Ask for her suggestions, but make sure she follows your general outline. Frequently check her paperwork.
                                       </label><br/>

                                       <label for="As202">
                                        <input type="radio" id="As202" name="As20" value="B) Let her know that she is submitting inaccurate and incomplete reports. Ask her to come up with a plan to improve their quality. Give her more time to do the job properly. Check her paperwork." required="required"/> B) Let her know that she is submitting inaccurate and incomplete reports. Ask her to come up with a plan to improve their quality. Give her more time to do the job properly. Check her paperwork.
                                       </label><br/>

                                       <label for="As203">
                                        <input type="radio" id="As203" name="As20" value="C) Let her know that she is submitting inaccurate and incomplete reports. Ask her what she plans to do about it. Help her develop a plan for solving her problems. Periodically check her paperwork." required="required"/> C) Let her know that she is submitting inaccurate and incomplete reports. Ask her what she plans to do about it. Help her develop a plan for solving her problems. Periodically check her paperwork.
                                       </label><br/>

                                       <label for="As204">
                                        <input type="radio" id="As204" name="As20" value="D) Let her know that she is submitting inaccurate and incomplete reports. Show her how to complete the reports. Specify the steps she should take to improve their quality. Closely monitor her paperwork." required="required"/> D) Let her know that she is submitting inaccurate and incomplete reports. Show her how to complete the reports. Specify the steps she should take to improve their quality. Closely monitor her paperwork.
                                       </label><br/>
                                        
                                    </div>
                                 </div>                                 
                                   
                                 <div className="col-lg-12 col-md-12">
                                    <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="Send Messageme" />
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