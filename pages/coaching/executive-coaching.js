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
    xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/78/feedback');
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
        <title>Executive Coaching - BYLD Group</title>
        <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5JPVP8PVF4"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-5JPVP8PVF4');
          `,
                    }}
                />
      </Head>

      <section className='icfmain executivecoaching'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='pagetitle text-left'>
                <h1>Hire professional coaches to develop key contributors, leaders/managers in transition</h1>
                <p>Individuals and teams both benefit from Executive Coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
        <div class="container">
          <div class="row">


            <div class="col-sm-6 rightsides">
              <div className="sec-title3 text-left">
                <p className='mtt-'>
                Coaching helps unlock people's potential to maximize their performance.
                </p>
                <p>
                An experienced coach helps unlock the maximum potential of individuals and ensure they reach their defined goals in the shortest time with tailor made solutions customized to the learner’s needs.
                </p>
              </div>

              <div className='row'>
                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Why use Executive coaching ?</h4>
                  
                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>Improved business performance</li>
                      <li>Enhanced individual development</li>
                      <li>Increased retention of key people</li>
                      <li>Greater productivity and customer service</li>
                    </ul>
                  </div>
                </div>

                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Benefits of Executive Coaching by BYLD Group -</h4>                  
                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>In line with the highest standards set by ICF</li>
                      <li>Experienced panel of coaches</li>
                      <li>Professional project management</li>
                      <li>Tangible outcomes</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-md-6 pr-33 md-pr-15 md-mb-50">
                            <div className="images-part parnernetworkheight">
                            <div className="bannerform">                           
                            <form id="contact-form" className='clientcornner' onSubmit={registerUser}>
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
                    <a className='hccs' href='/coaching/become-a-coach'>
                      <div class="number-image">
                        <span>Become A Coach (ICF)</span>
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
                        <span>Inside Out Coaching</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="rs-addon-number">
                  <div class="number-part">
                    <a className='hccs' href='/coaching/breakthroughs'>
                      <div class="number-image">
                        <span>Breakthroughs</span>
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

    </>
  )
}