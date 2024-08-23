import Link from "next/link"
import Head from "next/head"

export default function EdgeManagerAssessment() {

   const submitF = async (event) => {
      event.preventDefault();
      document.getElementById("submitbuttonform").value = "Submitting....";

      var q1 = event.target.bmeq1.value;
      var q2 = event.target.bmeq2.value;
      var q3 = event.target.bmeq3.value;
      var q4 = event.target.bmeq4.value;
      var q5 = event.target.bmeq5.value;
      var q6 = event.target.bmeq6.value;
      var q7 = event.target.bmeq7.value;
      var q8 = event.target.bmeq8.value;
      var q9 = event.target.bmeq9.value;
      var q10 = event.target.bmeq10.value;

      const name = event.target.name.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      const organization = event.target.organization.value;
      var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
      nameurl = nameurl.toLowerCase();
      const newnameurl = nameurl.split(' ').join('-') + phone



      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://kbblogs.vercel.app/api/customer-service-quiz');
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
         '&name=' + name +
         '&email=' + email +
         '&phone=' + phone +
         '&organization=' + organization +
         '&newnameurl=' + newnameurl
      );

      xhr.onreadystatechange = function () {
         if (xhr.status == 200) {
            // document.getElementById("formreset").reset()
            var data = JSON.parse(xhr.responseText);
            console.log(data)
            document.getElementById("response").innerHTML = data.message
            if (data.status == 0) {
               var xhttp = new XMLHttpRequest();
               xhttp.onload = function () {
                  console.log(this.responseText);
               }
               xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/344/feedback');
               xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


               var Assessment = "Customer Service Quiz"
               xhttp.send("name=" + event.target.name.value +
                  '&email=' + email +
                  '&phone=' + phone +
                  '&organization=' + organization +
                  '&assessment=' + Assessment)

               window.setTimeout(function () {
                  window.location.href = `/quiz/customer-service-quiz/${newnameurl}`
               }, 2500);

            }



         }
         else {
            document.getElementById("response").innerHTML = "Email is already registered"
            setTimeout(function () {
               document.getElementById("response").innerHTML = "";
            }, 3000);
         }




      }

      xhr.onerror = function () {
         console.log('error');
      }
   };





   return (
      <>

         <div id="results"></div>
         <Head>
            <title>Legendary Customer Service Quiz | The Ken Blanchard Companies</title>
            <meta name="description" content="Quality customer service is essential for the success of a business. How well does your organization deliver on it? Take the quiz and find out!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className="inner-banner edge-self-assessment-headbg">
            <div className="container">
               <div className="inner-title text-center">
                  <h3>DOES YOUR ORGANIZATION <br></br>HAVE A SERVICE MENTALITY?</h3>
               </div>
            </div>
            <div className="inner-lines">
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
            </div>
         </div>

         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="highinnovatin text-center pt-40">
                     <br></br>
                     <h2>LEGENDARY CUSTOMER SERVICE QUIZ</h2>
                     <p>
                        It's a well known fact that treating your customers well is a key to creating the kind of customer loyalty that can drive revenues and competitive advantage. But it's easier said than done. Most leaders would agree that creating a stellar service culture is a key strategic imperative but they often lack a formal process for making this happen. How does your organization rate? Take our quiz and find out.
                     </p>
                     <div className="headh">
                        {/* <h3>Courage</h3> */}
                        <h5>Directions: Think about your current organization and respond to each of the statements below.</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div>




            <div className="contact-area pt-45 pb-40">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12 mshdc">
                        <div className="formb0">
                           <form id="contactForm" name="contactForm" onSubmit={submitF}>
                              <div className="row">

                                 <div className='col-sm-12'>
                                    <div className="formsbarassesment assamet">

                                    <div className='fcol1 fcol1top assamet fcol1c'>
                                          <div className="row align-items-center">
                                             <div className="col-sm-9">
                                                <h2>1. My organization has a clearly defined service vision.</h2>
                                             </div>
                                             <div className="col-sm-3">
                                                <select name="bmeq1" class="quizdropc" required>
                                                   <option value=''>---</option>
                                                   <option value="5">5 - Strongly Agree</option>
                                                   <option value="4">4 - Agree</option>
                                                   <option value="3">3 - Neutral</option>
                                                   <option value="2">2 - Disagree</option>
                                                   <option value="1">1 - Strongly Disagree</option>
                                                </select>
                                             </div>
                                          </div>                                        
                                       </div>

                                       <div className='fcol1 fcol1top assamet fcol1c'>
                                          <div className="row align-items-center">
                                             <div className="col-sm-9">
                                                <h2>
                                                2. In my organization, people are empowered to take initiative to implement the service vision and serve the customers at the highest level.
                                                </h2>
                                             </div>
                                             <div className="col-sm-3">
                                                <select name="bmeq2" class="quizdropc" required>
                                                   <option value=''>---</option>
                                                   <option value="5">5 - Strongly Agree</option>
                                                   <option value="4">4 - Agree</option>
                                                   <option value="3">3 - Neutral</option>
                                                   <option value="2">2 - Disagree</option>
                                                   <option value="1">1 - Strongly Disagree</option>
                                                </select>
                                             </div>
                                          </div>                                        
                                       </div>

                                       <div className='fcol1 fcol1top assamet fcol1c'>
                                          <div className="row align-items-center">
                                             <div className="col-sm-9">
                                                <h2>
                                                3. My organization has clearly defined values that all employees know and follow.
                                                </h2>
                                             </div>
                                             <div className="col-sm-3">
                                                <select name="bmeq3" class="quizdropc" required>
                                                   <option value=''>---</option>
                                                   <option value="5">5 - Strongly Agree</option>
                                                   <option value="4">4 - Agree</option>
                                                   <option value="3">3 - Neutral</option>
                                                   <option value="2">2 - Disagree</option>
                                                   <option value="1">1 - Strongly Disagree</option>
                                                </select>
                                             </div>
                                          </div>                                        
                                       </div>

                                       <div className='fcol1 fcol1top assamet fcol1c'>
                                          <div className="row align-items-center">
                                             <div className="col-sm-9">
                                                <h2>
                                                4. My organization measures customer satisfaction.
                                                </h2>
                                             </div>
                                             <div className="col-sm-3">
                                                <select name="bmeq4" class="quizdropc" required>
                                                   <option value=''>---</option>
                                                   <option value="5">5 - Strongly Agree</option>
                                                   <option value="4">4 - Agree</option>
                                                   <option value="3">3 - Neutral</option>
                                                   <option value="2">2 - Disagree</option>
                                                   <option value="1">1 - Strongly Disagree</option>
                                                </select>
                                             </div>
                                          </div>                                        
                                       </div>

                                       <div className='fcol1 fcol1top assamet fcol1c'>
                                          <div className="row align-items-center">
                                             <div className="col-sm-9">
                                                <h2>
                                                5. People in my organization demonstrate a genuine willingness to serve external customers.
                                                </h2>
                                             </div>
                                             <div className="col-sm-3">
                                                <select name="bmeq5" class="quizdropc" required>
                                                   <option value=''>---</option>
                                                   <option value="5">5 - Strongly Agree</option>
                                                   <option value="4">4 - Agree</option>
                                                   <option value="3">3 - Neutral</option>
                                                   <option value="2">2 - Disagree</option>
                                                   <option value="1">1 - Strongly Disagree</option>
                                                </select>
                                             </div>
                                          </div>                                        
                                       </div>

                                       <div className='fcol1 fcol1top assamet fcol1c'>
                                          <div className="row align-items-center">
                                             <div className="col-sm-9">
                                                <h2>
                                                6. Employees in my organization believe that good service is important to our future success.
                                                </h2>
                                             </div>
                                             <div className="col-sm-3">
                                                <select name="bmeq6" class="quizdropc" required>
                                                   <option value=''>---</option>
                                                   <option value="5">5 - Strongly Agree</option>
                                                   <option value="4">4 - Agree</option>
                                                   <option value="3">3 - Neutral</option>
                                                   <option value="2">2 - Disagree</option>
                                                   <option value="1">1 - Strongly Disagree</option>
                                                </select>
                                             </div>
                                          </div>                                        
                                       </div>

                                       <div className='fcol1 fcol1top assamet fcol1c'>
                                          <div className="row align-items-center">
                                             <div className="col-sm-9">
                                                <h2>
                                                7. My organization understands its customers and their preferences
                                                </h2>
                                             </div>
                                             <div className="col-sm-3">
                                                <select name="bmeq7" class="quizdropc" required>
                                                   <option value=''>---</option>
                                                   <option value="5">5 - Strongly Agree</option>
                                                   <option value="4">4 - Agree</option>
                                                   <option value="3">3 - Neutral</option>
                                                   <option value="2">2 - Disagree</option>
                                                   <option value="1">1 - Strongly Disagree</option>
                                                </select>
                                             </div>
                                          </div>                                        
                                       </div>

                                       <div className='fcol1 fcol1top assamet fcol1c'>
                                          <div className="row align-items-center">
                                             <div className="col-sm-9">
                                                <h2>
                                                8. People in my organization understand that they have both internal and external customers.
                                                </h2>
                                             </div>
                                             <div className="col-sm-3">
                                                <select name="bmeq8" class="quizdropc" required>
                                                   <option value=''>---</option>
                                                   <option value="5">5 - Strongly Agree</option>
                                                   <option value="4">4 - Agree</option>
                                                   <option value="3">3 - Neutral</option>
                                                   <option value="2">2 - Disagree</option>
                                                   <option value="1">1 - Strongly Disagree</option>
                                                </select>
                                             </div>
                                          </div>                                        
                                       </div>

                                       <div className='fcol1 fcol1top assamet fcol1c'>
                                          <div className="row align-items-center">
                                             <div className="col-sm-9">
                                                <h2>
                                                9. My organization has dedicated resources to honing and developing the service skills of its employees.
                                                </h2>
                                             </div>
                                             <div className="col-sm-3">
                                                <select name="bmeq9" class="quizdropc" required>
                                                   <option value=''>---</option>
                                                   <option value="5">5 - Strongly Agree</option>
                                                   <option value="4">4 - Agree</option>
                                                   <option value="3">3 - Neutral</option>
                                                   <option value="2">2 - Disagree</option>
                                                   <option value="1">1 - Strongly Disagree</option>
                                                </select>
                                             </div>
                                          </div>                                        
                                       </div>

                                       <div className='fcol1 fcol1top assamet fcol1c'>
                                          <div className="row align-items-center">
                                             <div className="col-sm-9">
                                                <h2>
                                                10. Employees in my organization believe that customer service is everyone's job.
                                                </h2>
                                             </div>
                                             <div className="col-sm-3">
                                                <select name="bmeq10" class="quizdropc" required>
                                                   <option value=''>---</option>
                                                   <option value="5">5 - Strongly Agree</option>
                                                   <option value="4">4 - Agree</option>
                                                   <option value="3">3 - Neutral</option>
                                                   <option value="2">2 - Disagree</option>
                                                   <option value="1">1 - Strongly Disagree</option>
                                                </select>
                                             </div>
                                          </div>                                        
                                       </div>
                                       

                                       <div className='fcol1 lastinp ptt-20'>
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

                                             <div className="col-sm-6 mb-12">
                                                <input className='form-control' type="text" name="organization" placeholder="Organization*" required />
                                             </div>
                                             <div className='col-sm-12'>
                                                <input type="submit" value="Submit" id='submitbuttonform' class="assesmetmain" tabindex="201" />
                                                <p class="feedbackcolor" id="response"></p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-sm-1"></div>
                     <div className="col-sm-10">

                     </div>

                  </div>
               </div>
            </div>
         </div>
      </>
   )
}