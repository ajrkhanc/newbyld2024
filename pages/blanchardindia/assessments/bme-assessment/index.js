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
      xhr.open('POST', 'https://kbblogs.vercel.app/api/bme-assessment');
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
               xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/319/feedback');
               xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


               var Assessment = "Become a Professional Coach Assessment Form Marketing"
               xhttp.send("name=" + event.target.name.value +
                  '&email=' + email +
                  '&phone=' + phone +
                  '&organization=' + organization +
                  '&assessment=' + Assessment)

               window.setTimeout(function () {
                  window.location.href = `/assessments/bme-assessment/${newnameurl}`
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

      // var xhttp = new XMLHttpRequest();
      // xhttp.onload = function () {
      //     console.log(this.responseText);
      // }
      // xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/53/feedback');
      // xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


      // var Assessment = "Become a Professional Coach Assessment Form Marketing"
      // xhttp.send("name=" + event.target.name.value +
      //     '&email=' + email +
      //     '&phone=' + phone +
      //     '&organization=' + organization +
      //     '&assessment=' + Assessment)

      xhr.onerror = function () {
         console.log('error');
      }
   };





   return (
      <>

         <div id="results"></div>
         <Head>
            <title>Blanchard Management Essentials - Blanchard India</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div>


            <div className="contact-area pt-45 pb-40 bgcc">
               <div className="container">
                  <div className="row">
                     
                     <div className="col-sm-6">
                        <div className="assesmenthead2">
                           <h2>The Blanchard Management Essentials<sup>®</sup> Assessment</h2>
                        </div>
                        <h1 className="assesmenthead">ACCELERATE YOUR MANAGERS’ SUCCESS WITH A TRANSFORMATIVE MANAGEMENT TRAINING PROGRAM</h1>
                        <p className="text-justify">
                        Most new managers struggle, and the cost of that is significant: high turnover, low morale, subpar productivity, and more. It’s because most don’t receive the essential management skills training to succeed. That’s why we created <b>Blanchard Management Essentials<sup>®</sup></b> Assessment : a transformational leadership training assessment for new managers / First time Managers and those who need to sharpen the essential skills.
                        </p>
                        <p className="text-justify">
                        Take the first step by completing the self-assessment below. This ten-question quiz reveals your tendencies when it comes to build positive relationships with team , inspire engagement, and drive productivity.
                        </p>
                     </div>

                     <div className="col-sm-6">
                     <img src="/kbassets/img/bme-asssimg.jpg" alt="Images" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="contact-area pt-45 pb-40">
               <div className="container">
                  <div className="row">
                     {/* <div className="col-sm-1"></div> */}
                     <div className="col-sm-12 mshdc">
                        <div className="row ascal">
                           <div className="col-sm-12">
                              {/* <div className="assesmenthead2">
                                 <h2>The Blanchard Management Essentials<sup>®</sup></h2>
                              </div>
                              <h1 className="assesmenthead">Attention Index for your New Managers</h1> */}
                           </div>
                           <div className="clearfix"></div>
                           {/* <div className="col">
                              <div className="ratess borrr">
                                 0 = NA (Not Applicable)
                              </div>
                           </div>
                           <div className="col">
                              <div className="ratess borrr">
                                 1 = Not Well Enough
                              </div>
                           </div>
                           <div className="col">
                              <div className="ratess">
                                 10= Do it extremely well
                              </div>
                           </div> */}

                        </div>

                        <div className="formb0">
                           <form id="contactForm" name="contactForm" onSubmit={submitF}>
                              <div className="row">

                                 <div className='col-sm-12'>
                                    <div className="formsbarassesment assamet">
                                       <div className='fcol1 fcol1top assamet'>
                                          <h2>
                                             01. How effectively the young (or First time) managers are dealing with former peers?
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="0" id="bmeq1a" required />
                                             <label for="bmeq1a">0</label><br></br>
                                             <span>0 = NA <br></br>(Not Applicable)</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="1" id="bmeq1b" required />
                                             <label for="bmeq1b">1</label><br></br>
                                             <span>1 = Not<br></br>Well Enough</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="2" id="bmeq1c" required />
                                             <label for="bmeq1c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="3" id="bmeq1d" required />
                                             <label for="bmeq1d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="4" id="bmeq1e" required />
                                             <label for="bmeq1e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="5" id="bmeq1f" required />
                                             <label for="bmeq1f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="6" id="bmeq1g" required />
                                             <label for="bmeq1g">6</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="7" id="bmeq1h" required />
                                             <label for="bmeq1h">7</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="8" id="bmeq1i" required />
                                             <label for="bmeq1i">8</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="9" id="bmeq1j" required />
                                             <label for="bmeq1j">9</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq1" value="10" id="bmeq1k" required />
                                             <label for="bmeq1k">10</label><br></br>
                                             <span>10= Do it <br></br>extremely well</span>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             02. How well the young (or First time) managers balance the new workload?
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="0" id="bmeq2a" required />
                                             <label for="bmeq2a">0</label><br></br>
                                             <span>0 = NA <br></br>(Not Applicable)</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="1" id="bmeq2b" required />
                                             <label for="bmeq2b">1</label><br></br>
                                             <span>1 = Not <br></br>Well Enough</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="2" id="bmeq2c" required />
                                             <label for="bmeq2c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="3" id="bmeq2d" required />
                                             <label for="bmeq2d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="4" id="bmeq2e" required />
                                             <label for="bmeq2e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="5" id="bmeq2f" required />
                                             <label for="bmeq2f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="6" id="bmeq2g" required />
                                             <label for="bmeq2g">6</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="7" id="bmeq2h" required />
                                             <label for="bmeq2h">7</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="8" id="bmeq2i" required />
                                             <label for="bmeq2i">8</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="9" id="bmeq2j" required />
                                             <label for="bmeq2j">9</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq2" value="10" id="bmeq2k" required />
                                             <label for="bmeq2k">10</label><br></br>
                                             <span>10= Do it <br></br>extremely well</span>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             03. How clear are the goals being set by young (or First time) managers?
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="0" id="bmeq3a" required />
                                             <label for="bmeq3a">0</label><br></br>
                                             <span>0 = NA <br></br>(Not Applicable)</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="1" id="bmeq3b" required />
                                             <label for="bmeq3b">1</label><br></br>
                                             <span>1 = Not <br></br>Well Enough</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="2" id="bmeq3c" required />
                                             <label for="bmeq3c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="3" id="bmeq3d" required />
                                             <label for="bmeq3d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="4" id="bmeq3e" required />
                                             <label for="bmeq3e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="5" id="bmeq3f" required />
                                             <label for="bmeq3f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="6" id="bmeq3g" required />
                                             <label for="bmeq3g">6</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="7" id="bmeq3h" required />
                                             <label for="bmeq3h">7</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="8" id="bmeq3i" required />
                                             <label for="bmeq3i">8</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="9" id="bmeq3j" required />
                                             <label for="bmeq3j">9</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq3" value="10" id="bmeq3k" required />
                                             <label for="bmeq3k">10</label><br></br>
                                             <span>10= Do it <br></br>extremely well</span>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             04. How well the team chemistry being worked upon by young (or First time) managers?
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="0" id="bmeq4a" required />
                                             <label for="bmeq4a">0</label><br></br>
                                             <span>0 = NA <br></br>(Not Applicable)</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="1" id="bmeq4b" required />
                                             <label for="bmeq4b">1</label><br></br>
                                             <span>1 = Not <br></br>Well Enough</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="2" id="bmeq4c" required />
                                             <label for="bmeq4c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="3" id="bmeq4d" required />
                                             <label for="bmeq4d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="4" id="bmeq4e" required />
                                             <label for="bmeq4e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="5" id="bmeq4f" required />
                                             <label for="bmeq4f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="6" id="bmeq4g" required />
                                             <label for="bmeq4g">6</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="7" id="bmeq4h" required />
                                             <label for="bmeq4h">7</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="8" id="bmeq4i" required />
                                             <label for="bmeq4i">8</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="9" id="bmeq4j" required />
                                             <label for="bmeq4j">9</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq4" value="10" id="bmeq4k" required />
                                             <label for="bmeq4k">10</label><br></br>
                                             <span>10= Do it <br></br>extremely well</span>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             05. How well  the young (or First time) managers inspire and motivate their team members to exceed expections?
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="0" id="bmeq5a" required />
                                             <label for="bmeq5a">0</label><br></br>
                                             <span>0 = NA <br></br>(Not Applicable)</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="1" id="bmeq5b" required />
                                             <label for="bmeq5b">1</label><br></br>
                                             <span>1 = Not <br></br>Well Enough</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="2" id="bmeq5c" required />
                                             <label for="bmeq5c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="3" id="bmeq5d" required />
                                             <label for="bmeq5d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="4" id="bmeq5e" required />
                                             <label for="bmeq5e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="5" id="bmeq5f" required />
                                             <label for="bmeq5f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="6" id="bmeq5g" required />
                                             <label for="bmeq5g">6</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="7" id="bmeq5h" required />
                                             <label for="bmeq5h">7</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="8" id="bmeq5i" required />
                                             <label for="bmeq5i">8</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="9" id="bmeq5j" required />
                                             <label for="bmeq5j">9</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq5" value="10" id="bmeq5k" required />
                                             <label for="bmeq5k">10</label><br></br>
                                             <span>10= Do it <br></br>extremely well</span>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             06. How well (Comfortable) are young (or First time) managers in terms of giving negative or consttuctive feedback?
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="0" id="bmeq6a" required />
                                             <label for="bmeq6a">0</label><br></br>
                                             <span>0 = NA <br></br>(Not Applicable)</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="1" id="bmeq6b" required />
                                             <label for="bmeq6b">1</label><br></br>
                                             <span>1 = Not <br></br>Well Enough</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="2" id="bmeq6c" required />
                                             <label for="bmeq6c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="3" id="bmeq6d" required />
                                             <label for="bmeq6d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="4" id="bmeq6e" required />
                                             <label for="bmeq6e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="5" id="bmeq6f" required />
                                             <label for="bmeq6f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="6" id="bmeq6g" required />
                                             <label for="bmeq6g">6</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="7" id="bmeq6h" required />
                                             <label for="bmeq6h">7</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="8" id="bmeq6i" required />
                                             <label for="bmeq6i">8</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="9" id="bmeq6j" required />
                                             <label for="bmeq6j">9</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq6" value="10" id="bmeq6k" required />
                                             <label for="bmeq6k">10</label><br></br>
                                             <span>10= Do it <br></br>extremely well</span>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             07. How well are the young (or First time) managers in holding coaching conversations?
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="0" id="bmeq7a" required />
                                             <label for="bmeq7a">0</label><br></br>
                                             <span>0 = NA <br></br>(Not Applicable)</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="1" id="bmeq7b" required />
                                             <label for="bmeq3b">1</label><br></br>
                                             <span>1 = Not <br></br>Well Enough</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="2" id="bmeq7c" required />
                                             <label for="bmeq3c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="3" id="bmeq7d" required />
                                             <label for="bmeq7d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="4" id="bmeq7e" required />
                                             <label for="bmeq7e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="5" id="bmeq7f" required />
                                             <label for="bmeq7f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="6" id="bmeq7g" required />
                                             <label for="bmeq7g">6</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="7" id="bmeq7h" required />
                                             <label for="bmeq7h">7</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="8" id="bmeq7i" required />
                                             <label for="bmeq7i">8</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="9" id="bmeq7j" required />
                                             <label for="bmeq7j">9</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq7" value="10" id="bmeq7k" required />
                                             <label for="bmeq7k">10</label><br></br>
                                             <span>10= Do it <br></br>extremely well</span>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             08. How effectively the young (or First time) managers are in communicating things clearly and effectively?
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="0" id="bmeq8a" required />
                                             <label for="bmeq8a">0</label><br></br>
                                             <span>0 = NA <br></br>(Not Applicable)</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="1" id="bmeq8b" required />
                                             <label for="bmeq8b">1</label><br></br>
                                             <span>1 = Not <br></br>Well Enough</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="2" id="bmeq8c" required />
                                             <label for="bmeq8c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="3" id="bmeq8d" required />
                                             <label for="bmeq8d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="4" id="bmeq8e" required />
                                             <label for="bmeq8e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="5" id="bmeq8f" required />
                                             <label for="bmeq8f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="6" id="bmeq8g" required />
                                             <label for="bmeq8g">6</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="7" id="bmeq8h" required />
                                             <label for="bmeq8h">7</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="8" id="bmeq8i" required />
                                             <label for="bmeq8i">8</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="9" id="bmeq8j" required />
                                             <label for="bmeq8j">9</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq8" value="10" id="bmeq8k" required />
                                             <label for="bmeq8k">10</label><br></br>
                                             <span>10= Do it <br></br>extremely well</span>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             09. How effectively the young (or First time) managers are in managing interpersonal conflict?
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="0" id="bmeq9a" required />
                                             <label for="bmeq9a">0</label><br></br>
                                             <span>0 = NA <br></br>(Not Applicable)</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="1" id="bmeq9b" required />
                                             <label for="bmeq9b">1</label><br></br>
                                             <span>1 = Not <br></br>Well Enough</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="2" id="bmeq9c" required />
                                             <label for="bmeq9c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="3" id="bmeq9d" required />
                                             <label for="bmeq9d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="4" id="bmeq9e" required />
                                             <label for="bmeq9e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="5" id="bmeq9f" required />
                                             <label for="bmeq9f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="6" id="bmeq9g" required />
                                             <label for="bmeq9g">6</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="7" id="bmeq9h" required />
                                             <label for="bmeq9h">7</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="8" id="bmeq9i" required />
                                             <label for="bmeq9i">8</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="9" id="bmeq9j" required />
                                             <label for="bmeq9j">9</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq9" value="10" id="bmeq9k" required />
                                             <label for="bmeq9k">10</label><br></br>
                                             <span>10= Do it <br></br>extremely well</span>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             10. How effectively the young (or First time) managers are in managing competing priorities?
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="0" id="bmeq10a" required />
                                             <label for="bmeq10a">0</label><br></br>
                                             <span>0 = NA <br></br>(Not Applicable)</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="1" id="bmeq10b" required />
                                             <label for="bmeq10b">1</label><br></br>
                                             <span>1 = Not <br></br>Well Enough</span>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="2" id="bmeq10c" required />
                                             <label for="bmeq10c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="3" id="bmeq10d" required />
                                             <label for="bmeq10d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="4" id="bmeq10e" required />
                                             <label for="bmeq10e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="5" id="bmeq10f" required />
                                             <label for="bmeq10f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="6" id="bmeq10g" required />
                                             <label for="bmeq10g">6</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="7" id="bmeq10h" required />
                                             <label for="bmeq10h">7</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="8" id="bmeq10i" required />
                                             <label for="bmeq10i">8</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="9" id="bmeq10j" required />
                                             <label for="bmeq10j">9</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="bmeq10" value="10" id="bmeq10k" required />
                                             <label for="bmeq10k">10</label><br></br>
                                             <span>10= Do it <br></br>extremely well</span>
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