import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function InsideOutCoaching() {

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/86/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
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
            "&QuestionsComments=" + event.target.QuestionsComments.value)

    }

    return (
        <>
            <Head>
                <title>InsideOut Coaching | Coaching | BYLD Group</title>
                <meta name="description" content="InsideOut Coaching provides leadership mentoring to managers to help them energize people, motivate and drive them toward success and better business performance." />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-DMTBK8B78S"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DMTBK8B78S');
          `,
                    }}
                />
            </Head>

            <section className='iocmain'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='pagetitle text-center'>
                                <h1>InsideOut Coaching</h1>
                                <p>Coaching that leads to a Performance Breakthrough!</p>
                                <div class="btn-part ptt-10 pbb-30">
                                    <a class="readon2" href="/coaching/coaching-snapshot-marketing">Take Assessment <div class="btn-arrow"></div></a>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
            </section>

            {/* <div className="rs-services">
                <div className="container-full">
                    <div className="row y-middle">
                        <div className="col-lg-12">
                            <img className="img100" src="/assets/img/banner/insideout-coaching.jpg" />
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">
                    <div class="row">

                        <div class="col-sm-12 rightsides">
                            <div className="sec-title3 text-left">
                                <h4 className="countertoph2 text-left font30">InsideOut™ Coaching</h4>
                                <div className="heading-border-line left-style"></div>
                                <p className='mtt-30'>
                                    InsideOut Coaching™ is the world’s best workplace coaching module. It is simple, cohesive, and robust. This training program helps clients hold the right kind of conversations to energize people, motivate them, and lead them to success and better business performance.
                                </p>
                                <p>
                                    It is a time-tested coaching framework that helps convert conversations into action. The good thing about this training is that it is easy to adapt and managers can easily apply what they’ve learned in coaching in real-life situations. As a manager, if you want to unlock the full potential of your team, then using the right techniques and coaching methodology is imperative.
                                </p>
                                <h4 className="countertoph2 text-left font18 mtt-0 ptt-0">InsideOutCoaching™ gives you competitive advantage in the following ways –</h4>
                                <div className='rs-estimate'>
                                    <ul className='estimate-info mtt-5'>
                                        <li>Transforms your decision making process</li>
                                        <li>Helps practice accountability</li>
                                        <li>Augment action oriented tasks</li>
                                        <li>Enhances effective communication</li>
                                        <li>Provides instant feedback</li>
                                    </ul>
                                </div>
                                <h4 className="countertoph2 text-left">Think you’re not able to get 100% out of your team?</h4>
                                <p>
                                    Learn why and what to do about it. Greatness is a lot of small things done well every day. With the help of this award-winning training program, leaders bring out the best performers inside each individual. Discover how workplace coaching can benefit your team and unleash their 100% potential.
                                </p>
                                <h4 className="countertoph2 text-left font18 ptt-0 ptt-0">Participants of InsideOut Coaching™ experience the introductory, coaching, and practice sessions in three distinct phases –</h4>
                                <h4 className="countertoph2 text-left mtt-10">PreWorkshop</h4>
                                <p>
                                    This stage is all about getting 360-degree coaching and participants identify challenges and opportunities in an innovative and interactive manner. This pre-workshop stage needs planning and may require some extra time and effort. Thus, the best way to proceed is to make the sessions engaging, fun, and interactive.
                                </p>
                                <h4 className="countertoph2 text-left ptt-5">OneDay Workshop</h4>
                                <p>The one-day Monday workshop of InsideOut Coaching™ helps in inculcating confidence through group discussions and interactive learning tools like videos, practice tools, and activities. Participants usually find this interaction interesting and start taking part with their team members from the beginning itself.</p>
                                <h4 className="countertoph2 text-left ptt-5">Post Workshop</h4>
                                <p>
                                    Once the participants attend the initial workshops, the next step is to introduce them to online sessions. The online community has varied resources and ongoing support to help maintain and sustain the coaching practice.
                                </p>
                                <p>Also, once all three levels are completed, you become a certified InsideOut Coaching™ facilitator.</p>
                                <h4 className="countertoph2 text-left ptt-5">Special Feature: Helps new managers communicate like a pro</h4>
                                <p>This e-book is the complete guide that’ll help transform your new leaders from MVPs to top-level coaches. Each individual is different, so just because one is good at marketing and sales doesn’t mean they have a clue on how to inspire and bring out the best in others.</p>
                                <h4 className="countertoph2 text-left ptt-5">25 years of success stories</h4>
                                <p>Being in the industry for over two decades, we have served numerous clients from across domains. Our clients are some of the biggest names in the industry. It is a pleasure to collaborate with them as you most certainly will love the results.</p>
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
                                        <a className='hccs' href='/coaching/breakthroughs'>
                                            <div class="number-image">
                                                <span>Breakthroughs</span>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                            </div>

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
                                            <input id="submitbuttonform" className="clientcornnerbtn width150" type="submit" value="Submit" />
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
