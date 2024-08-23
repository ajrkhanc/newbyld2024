import Link from "next/link"
import Head from "next/head"

export default function EdgeManagerAssessment() {

   if (typeof window !== "undefined") {

      $(document).ready(function () {

         $('input[type=radio]').change(function () {
            checkQuizResult();
         });


      });

      function checkQuizResult() {
         var total = parseInt(0);
         var incompletecount = parseInt(0);
         for (let i = 1; i <= 12; i++) {
            var rval = $('input[name=q' + i + ']:checked').val();
            if (rval != undefined) {
               total += parseInt(rval);
            } else {
               incompletecount++;
            }

         }
         $('#qtotal').html(total);
         if (incompletecount === 0) {
            var finalscore = total / 12;
            var rounded = Math.round(finalscore * 10) / 10;
            var fixed = rounded.toFixed(1);
            $('#finalscore').html(fixed).css('font-weight', 'bold').css('font-size', '16px');

            if (rounded < parseFloat(2.75)) {
               $('#score_content_1').show();
               $('#score_content_2').hide();
               $('#score_content_3').hide();
               $('#score_content_4').hide();
            } else if (rounded >= 2.75 && rounded < parseFloat(4.25)) {
               $('#score_content_1').hide();
               $('#score_content_2').show();
               $('#score_content_3').hide();
               $('#score_content_4').hide();
            } else if (rounded >= 4.25 && rounded < parseFloat(5.5)) {
               $('#score_content_1').hide();
               $('#score_content_2').hide();
               $('#score_content_3').show();
               $('#score_content_4').hide();
            } else {
               $('#score_content_1').hide();
               $('#score_content_2').hide();
               $('#score_content_3').hide();
               $('#score_content_4').show();
            }

         } else {
            $('#finalscore').html('Complete all questions first').css('font-weight', 'normal').css('font-size', '13px');
         }
         console.log('total=' + total);
      }

   }

   return (
      <>

         <div id="results"></div>
         <Head>
            <title>What is Servant Leadership? Take Our Quiz - Blanchard India</title>
            <meta name="description" content="Learn if you are a self serving leader or a serving leader with this brief servant leadership quiz" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className="inner-banner edge-self-assessment-headbg">
            <div className="container">
               <div className="inner-title text-center">
                  <h3>ARE YOU A SERVING LEADER?</h3>                 
               </div>
            </div>
            <div className="inner-lines">
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
            </div>
         </div>

         <div>
            <div className="contact-area pt-45 pb-0">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <div className="highinnovatin text-center">
                           <h2>WHAT IS SERVANT LEADERSHIP?</h2>
                           <p>Leaders who practice servant leadership know how to achieve both great results and great human satisfaction. It’s a delicate balance that requires self-awareness, the ability to maintain a dual focus, and a desire to serve. Servant leaders realize that their number one customer is their people. When they take care of their people, train them, and empower them, people have higher levels of engagement and human satisfaction, which leads to increased customer satisfaction and organizational vitality.</p>
                           <div className="headh">
                           {/* <h3>Courage</h3> */}
                           <h5>TAKE OUR QUIZ TO FIND OUT HOW WELL YOU DEMONSTRATE THE QUALITIES OF A SERVANT LEADER.</h5>
                        </div>
                           <div className="highrating">
                              <div className="ratess borrr">
                              1 = Almost Never
                              </div>
                              <div className="ratess borrr">
                              2 = Infrequently
                              </div>
                              <div className="ratess borrr">
                              3 = Occasionally
                              </div>
                              <div className="ratess borrr">
                              4 = Sometimes
                              </div>
                              <div className="ratess borrr">
                              5 = Almost Always
                              </div>
                              <div className="ratess">
                              6 = Always
                              </div>
                           </div>
                          
                        </div>
                     </div>

                     <div className="col-sm-12 mshdc pt-45">
                        <div className="formb0">
                           <form id="contactForm" name="contactForm">
                              <div className="row">
                                 <div className='col-sm-12'>
                                    <div className="formsbarassesment assamet">
                                       <div className='fcol1 fcol1top assamet'>
                                          <h2>
                                             01. People would say that I take time to understand their perspective before sharing my own.
                                          </h2>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q1" value="1" id="bmeq1b" required />
                                             <label for="bmeq1b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q1" value="2" id="bmeq1c" required />
                                             <label for="bmeq1c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q1" value="3" id="bmeq1d" required />
                                             <label for="bmeq1d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q1" value="4" id="bmeq1e" required />
                                             <label for="bmeq1e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q1" value="5" id="bmeq1f" required />
                                             <label for="bmeq1f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q1" value="6" id="bmeq1g" required />
                                             <label for="bmeq1g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             02. People would say that I am fully present when working with them, ensuring that I remove distractions, look up, and listen to what they are saying.
                                          </h2>


                                          <div className='fcolmain'>
                                             <input type="radio" name="q2" value="1" id="bmeq2b" required />
                                             <label for="bmeq2b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q2" value="2" id="bmeq2c" required />
                                             <label for="bmeq2c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q2" value="3" id="bmeq2d" required />
                                             <label for="bmeq2d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q2" value="4" id="bmeq2e" required />
                                             <label for="bmeq2e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q2" value="5" id="bmeq2f" required />
                                             <label for="bmeq2f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q2" value="6" id="bmeq2g" required />
                                             <label for="bmeq2g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             03. People would say that I create an environment that welcomes, celebrates, and values people’s authenticity and differences.
                                          </h2>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q3" value="1" id="bmeq3b" required />
                                             <label for="bmeq3b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q3" value="2" id="bmeq3c" required />
                                             <label for="bmeq3c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q3" value="3" id="bmeq3d" required />
                                             <label for="bmeq3d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q3" value="4" id="bmeq3e" required />
                                             <label for="bmeq3e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q3" value="5" id="bmeq3f" required />
                                             <label for="bmeq3f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q3" value="6" id="bmeq3g" required />
                                             <label for="bmeq3g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             04. People would say that I take time to listen to learn when others are speaking to me.
                                          </h2>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q4" value="1" id="bmeq4b" required />
                                             <label for="bmeq4b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q4" value="2" id="bmeq4c" required />
                                             <label for="bmeq4c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q4" value="3" id="bmeq4d" required />
                                             <label for="bmeq4d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q4" value="4" id="bmeq4e" required />
                                             <label for="bmeq4e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q4" value="5" id="bmeq4f" required />
                                             <label for="bmeq4f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q4" value="6" id="bmeq4g" required />
                                             <label for="bmeq4g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             05. People would say that I invest in the development of others.
                                          </h2>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q5" value="1" id="bmeq5b" required />
                                             <label for="bmeq5b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q5" value="2" id="bmeq5c" required />
                                             <label for="bmeq5c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q5" value="3" id="bmeq5d" required />
                                             <label for="bmeq5d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q5" value="4" id="bmeq5e" required />
                                             <label for="bmeq5e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q5" value="5" id="bmeq5f" required />
                                             <label for="bmeq5f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q5" value="6" id="bmeq5g" required />
                                             <label for="bmeq5g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             06. People would say that I create a trusting work environment.
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q6" value="1" id="bmeq6b" required />
                                             <label for="bmeq6b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q6" value="2" id="bmeq6c" required />
                                             <label for="bmeq6c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q6" value="3" id="bmeq6d" required />
                                             <label for="bmeq6d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q6" value="4" id="bmeq6e" required />
                                             <label for="bmeq6e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q6" value="5" id="bmeq6f" required />
                                             <label for="bmeq6f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q6" value="6" id="bmeq6g" required />
                                             <label for="bmeq6g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             07. People would say that I seek others’ opinions and regularly ask for input and feedback.
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q7" value="1" id="bmeq7b" required />
                                             <label for="bmeq3b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q7" value="2" id="bmeq7c" required />
                                             <label for="bmeq3c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q7" value="3" id="bmeq7d" required />
                                             <label for="bmeq7d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q7" value="4" id="bmeq7e" required />
                                             <label for="bmeq7e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q7" value="5" id="bmeq7f" required />
                                             <label for="bmeq7f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q7" value="6" id="bmeq7g" required />
                                             <label for="bmeq7g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             08. People would say that I enjoy catching people doing things right.
                                          </h2>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q8" value="1" id="bmeq8b" required />
                                             <label for="bmeq8b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q8" value="2" id="bmeq8c" required />
                                             <label for="bmeq8c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q8" value="3" id="bmeq8d" required />
                                             <label for="bmeq8d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q8" value="4" id="bmeq8e" required />
                                             <label for="bmeq8e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q8" value="5" id="bmeq8f" required />
                                             <label for="bmeq8f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q8" value="6" id="bmeq8g" required />
                                             <label for="bmeq8g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             09. People would say that I provide honest, constructive feedback to them.
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q9" value="1" id="bmeq9b" required />
                                             <label for="bmeq9b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q9" value="2" id="bmeq9c" required />
                                             <label for="bmeq9c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q9" value="3" id="bmeq9d" required />
                                             <label for="bmeq9d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q9" value="4" id="bmeq9e" required />
                                             <label for="bmeq9e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q9" value="5" id="bmeq9f" required />
                                             <label for="bmeq9f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q9" value="6" id="bmeq9g" required />
                                             <label for="bmeq9g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             10. People would say that I am conscious of the impact my actions have on others.
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q10" value="1" id="bmeq10b" required />
                                             <label for="bmeq10b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q10" value="2" id="bmeq10c" required />
                                             <label for="bmeq10c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q10" value="3" id="bmeq10d" required />
                                             <label for="bmeq10d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q10" value="4" id="bmeq10e" required />
                                             <label for="bmeq10e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q10" value="5" id="bmeq10f" required />
                                             <label for="bmeq10f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q10" value="6" id="bmeq10g" required />
                                             <label for="bmeq10g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             10. People would say that I am conscious of the impact my actions have on others.
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q11" value="1" id="bmeq11b" required />
                                             <label for="bmeq11b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q11" value="2" id="bmeq11c" required />
                                             <label for="bmeq11c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q11" value="3" id="bmeq11d" required />
                                             <label for="bmeq11d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q11" value="4" id="bmeq11e" required />
                                             <label for="bmeq11e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q11" value="5" id="bmeq11f" required />
                                             <label for="bmeq11f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q11" value="6" id="bmeq11g" required />
                                             <label for="bmeq11g">6</label>
                                          </div>
                                       </div>

                                       <div className='fcol1'>
                                          <h2>
                                             12. People would say that I act with their best interest in mind.
                                          </h2>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q12" value="1" id="bmeq12b" required />
                                             <label for="bmeq12b">1</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q12" value="2" id="bmeq12c" required />
                                             <label for="bmeq12c">2</label>
                                          </div>
                                          <div className='fcolmain'>
                                             <input type="radio" name="q12" value="3" id="bmeq12d" required />
                                             <label for="bmeq12d">3</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q12" value="4" id="bmeq12e" required />
                                             <label for="bmeq12e">4</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q12" value="5" id="bmeq12f" required />
                                             <label for="bmeq12f">5</label>
                                          </div>

                                          <div className='fcolmain'>
                                             <input type="radio" name="q12" value="6" id="bmeq12g" required />
                                             <label for="bmeq12g">6</label>
                                          </div>
                                       </div>


                                    </div>

                                    <div className="resultd">
                                       <div>
                                          <div className="totals tocc">
                                             <strong>Total:</strong>
                                             <span class="qtotal" id="qtotal"></span>
                                          </div>
                                          <div className="totals tocc">
                                             <strong>Final Score:</strong>
                                             <span class="finalscore" id="finalscore"></span>
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



         <section class="quiz-result" style={{ display: "none" }} id="score_content_1">
            <div class="container mobile-full">
               <div class="row quiz-result">
                  <div class="col-lg-12">
                     <h3>YOUR SCORE SHOWS YOU ARE AN <strong>Infrequent Servant Leader</strong>.</h3>
                     <p>You rarely demonstrate servant leadership behaviors, placing your own needs first.
                        As a result, the people you lead likely have lower levels of engagement, satisfaction,
                        and performance. If you are interested in becoming a more serving leader, you will
                        find valuable articles, white papers, and recorded webinars
                        in the <a href="https://resources.kenblanchard.com/servant-leadership">Servant Leadership
                           section</a> of our Resource Center. You could also read one of Ken Blanchard’s books on
                        servant leadership,
                        <a href="https://www.amazon.com/Simple-Truths-Leadership-Servant-Leader/dp/1523000627/" target="_blank"><em>Simple
                           Truths of Leadership: 52 Ways to Be a Servant Leader and
                           Build Trust</em></a>, or <a href="https://www.amazon.com/Servant-Leadership-Action-Achieve-Relationships/dp/152309396X/" target="_blank"><em>Servant Leadership in Action: How You Can Achieve Great Relationships and Results</em></a>.</p>
                  </div>
               </div>
            </div>
         </section>
         <section class="quiz-result" style={{ display: "none" }} id="score_content_2">
            <div class="container mobile-full">
               <div class="row quiz-result">
                  <div class="col-lg-12">
                     <h3>YOUR SCORE SHOWS YOU ARE AN <strong>OCCASIONAL SERVANT LEADER</strong>.</h3>
                     <p>You demonstrate some servant leadership behaviors but are not consistently
                        prioritizing the needs of those you lead. For inspiration, read Ken Blanchard’s
                        latest book,
                        <a href="https://www.amazon.com/Simple-Truths-Leadership-Servant-Leader/dp/1523000627/" target="_blank"><em>Simple
                           Truths of Leadership: 52 Ways to Be a Servant Leader and Build Trust</em></a>.
                        You can find valuable blog articles, white papers, and recorded webinars in
                        the <a href="https://resources.kenblanchard.com/servant-leadership">Servant
                           Leadership section</a> of our Resource Center.</p>
                  </div>
               </div>
            </div>
         </section>
         <section class="quiz-result" style={{ display: "none" }} id="score_content_3">
            <div class="container mobile-full">
               <div class="row quiz-result">
                  <div class="col-lg-12">
                     <h3>YOUR SCORE SHOWS YOU ARE A <strong>Servant Leader</strong>.</h3>
                     <p>You are well on your way with the servant aspect of servant leadership!
                        You can continue to refine your servant leadership skills by reading
                        Ken Blanchard’s latest book,
                        <a href="https://www.amazon.com/Simple-Truths-Leadership-Servant-Leader/dp/1523000627/" target="_blank"><em>Simple
                           Truths of Leadership: 52 Ways to Be a Servant Leader and Build Trust</em></a>.
                        For additional blog articles, white papers, and recorded webinars, explore the <a href="https://resources.kenblanchard.com/servant-leadership">Servant
                           Leadership section</a> of our Resource Center.</p>
                  </div>
               </div>
            </div>
         </section>
         <section class="quiz-result" style={{ display: "none" }} id="score_content_4">
            <div class="container mobile-full">
               <div class="row">
                  <div class="col-lg-12">
                     <h3>Your score shows you are a <strong>Servant Leadership Role Model</strong>. </h3>
                     <p>Congratulations! You are a true servant leader, prioritizing the needs of those you serve. You likely have the trust and admiration of your people.  Please encourage others to use the same techniques you use to spread the servant leadership message.</p>
                  </div>
               </div>  </div>
         </section>


         <section class="enterprise">
            <div class="container">
               <div class="row">
                  <div class="col-xs-12"><h2 class="text-center">SERVANT LEADERSHIP <span class="green-bg">ESSENTIALS</span></h2></div>
               </div>
               <div class="row margin-20">
                  <div class="col-lg-2"></div>
                  <div class="col-lg-8">
                     <p class="text-center">
                        Our <strong>Servant Leadership Essentials</strong>&trade; program teaches leaders how to build trust, listen, and give and receive feedback in ways that bring out the best in their people. What could your organization accomplish if everyone had a servant leader?
                     </p>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-12 text-center">
                     <div className="services-more-btn text-left">
                        <Link href="/get-started"><a className="default-btn-two">Get Started<i className="bx bx-right-arrow-alt"></i></a></Link>
                     </div>
                  </div>
               </div>  </div>
         </section>
      </>
   )
}