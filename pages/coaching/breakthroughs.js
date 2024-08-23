import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function DTCICoachingAcademy() {

  const registerUser = async event => {
    event.preventDefault()
    document.getElementById("submitbuttonform").value = "Submitting form...."
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this.responseText);
    }
    xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/87/feedback');
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                document.getElementById("showlabel").style.display = "block";
                window.setTimeout(function() {
                    window.location.href = "/coaching/thank-you"
                 }, 3000);

            } else {
                alert('There was a problem with the request.');
            }
        }
    };
    xhttp.send("fname=" + event.target.fname.value +
        "&lname=" + event.target.lname.value +
        "&email-721=" + event.target.email.value +
        "&phone=" + event.target.phone.value +
        "&Companyname=" + event.target.organization.value +
        "&wheredidyoucome=" + event.target.referredby.value +
        "&QuestionsComments=" + event.target.QuestionsComments.value )

}



  return (
    <>
      <Head>
        <title>Breakthroughs - BYLD Group</title>
        <meta name="description" content="When you think of becoming a coach – Think BYLD" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1NMQZQH64M"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1NMQZQH64M');
          `,
                    }}
                />
      </Head>

      <section className='breakthroughs'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='pagetitle text-center'>
                <h1>Breakthroughs</h1>
                <p>Cultivating Performance At Every Level</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rs-about style2 ptt-40 pbb-40">
        <div className="container">
          <div className="row">
            <div className='col-sm-6 icfbg'>
              <div className='sec-title3 icfbh4'>
                <h4 className="">Breakthroughs</h4>
                <div className="heading-border-line left-style jencolor"></div>
              </div>
              <p className='text-justify ptt-20 icfpc'>
                Breakthroughs is one of the most in-demand InsideOut Coaching programs that helps bring the best in each and everyone in the team.
              </p>

              <p className='text-justify ptt-20 icfpc'>
                The success of your company’s strategic initiatives depends on the commitment and proactive behavior of those on the front line, the individual contributors responsible for executing and making it happen.
              </p>
            </div>

            <div className="col-sm-6">
              <div className="icfimglb">
                <img src='/assets/img/br2.jpg' alt="dt-dr" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='ptt-40 pbb-30 jenson8section1'>
        <div className='container'>
          <div className='row'>
            <div className="col-sm-6">
              <div className="icfimglb">
                <img src='/assets/img/br1.jpg' alt="dt-dr" />
              </div>
            </div>

            <div className='col-sm-6 boxshd letf5border text-left bgwhite patb0'>
              <div className='ptt-10 pbb-10'>
                <h2 className='ifch2c'>5 new world corporate threats | One solution</h2>
                <p>
                  A vast majority of new world businesses face threats, such as:
                </p>

                <div className='rs-estimate'>
                  <ul className='estimate-info mtt-5'>
                    <li>Unclear goals</li>
                    <li>Poor decision-making</li>
                    <li>Overbearing or micromanagement</li>
                    <li>Lack of ownership</li>
                    <li>Unproductive conversations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
        <div class="container">
          <div class="row">


            <div class="col-sm-12 rightsides">

              <div className='row'>
                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Breakthroughs: A program to create self-leaders</h4>
                  <p>Breakthroughs program ensures the following qualities in each and every team member:</p>
                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>Accountability</li>
                      <li>Problem-solving mindset</li>
                      <li>Proactive decision-making</li>
                      <li>Empowered</li>
                      <li>Motivated</li>
                      <li>Open to feedback</li>
                    </ul>
                  </div>
                </div>

                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Why Breakthroughs</h4>
                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>Organizations are focusing on developing ICs as they are the frontline force and critical to executing the strategy & action plans. As per some of the research :
                        <ul>
                          <li>50% OF INDIVIDUAL CONTRIBUTORS feel their jobs are stagnant. (Gallup 2015 engagement survey)</li>
                          <li>1/3 JUST DO THEIR JOB and nothing more. (DDI pulse of the workforce survey)</li>
                        </ul>
                      </li>
                      <li>Organizations are trying to equip the ICs with skillsets and mindsets where they act & think like a SELF LEADER, thus adding value to their work. It builds a healthy and empowered workforce that is accountable, innovative, and productive.</li>
                    </ul>
                  </div>
                </div>


                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Breakthroughs: Coaching done to them Coaching done with them</h4>
                  <p>Overview & Learning Objectives</p>
                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>Features a simple, replicable self-coaching process to achieve breakthroughs quickly easily using the same framework as InsideOut Coaching</li>
                      <li>Participants apply the Performance Wheel, Check-In Questions, and GROW® to enhance their performance, create Breakthrough Plans, seek coaching and complete action challenges </li>
                      <li>Builds more resilient, accountable and self-starting employees</li>
                      <li>Breakthroughs works when team members and leaders make these connections and develop together</li>
                    </ul>
                  </div>
                </div>

                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Breakthroughs: Learning impact</h4>
                  <p>Overview & Learning Objectives</p>
                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>Shared language</li>
                      <li>Improved coachability</li>
                      <li>Increased accountability</li>
                      <li>Enhanced promotability</li>
                    </ul>
                  </div>
                </div>


              </div>
            </div>


          </div>
        </div>
      </div>


      <div class="rs-process style1 pt-100 pb-100 md-pt-70 md-pb-70">
        <div class="container">
          <div class="row y-middle">
          </div>
        </div>
        <div class="container custom2">
          <div class="process-effects-layer">
            <div class="row">
              <div className='col'></div>
              <div class="col">
                <div class="rs-addon-number">
                  <div class="number-part">
                    <a className='hccs' href='/coaching/executive-coaching'>
                      <div class="number-image">
                        <span>Executive Coaching</span>
                      </div>

                    </a>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="rs-addon-number">
                  <div class="number-part">
                    <a className='hccs' href='/coaching/insideout-coaching'>
                      <div class="number-image">
                        <span>InsideOut™ Coaching</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="rs-addon-number">
                  <div class="number-part">
                    <a className='hccs' href='/coaching/become-a-coach'>
                      <div class="number-image">
                        <span>Become A Coach (ICF)</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col'></div>

            </div>
          </div>
        </div>
      </div>

      <div className="rs-testimonial style4 tirianformbg ptt-50 pbb-70" id="Reserve">
                <div className="container">                   
                    <div className="row">                     
                         <div className="clearfix"></div>
                   
                         <div className='col-sm-2'></div>
                         <div className="col-sm-8">
                         <div className="bannerform tirianformshd">
                            <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                            <div className="row">
                                      <div className='col-sm-12'>
                                        <p>Fill in the form below and our subject matter experts will connect you within 24 working hours.</p>
                                      </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="fname" placeholder="First Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="lname" placeholder="Last Name*" required />
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div> 
                                        <div className="col-sm-12 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        
                                        <div className="col-sm-12 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                       
                                        
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>                                                
                                                <option value="Reference">Reference</option>
                                                
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="QuestionsComments" placeholder="Questions/Comments:"></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn width150" type="submit" value="Submit"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                         </div>

                         <div className='col-sm-2'></div>
                         
                    </div>
                </div>
            </div>




    </>
  )
}