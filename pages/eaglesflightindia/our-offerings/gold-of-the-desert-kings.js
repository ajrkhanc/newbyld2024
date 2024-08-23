import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function GoldofthedesertKings(){

    const MuseumCaperForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/24/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/eaglesflightindia/thank-you"
                    }, 3000);
  
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-mx_States=" + event.target.Location.value +          
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +          
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )
  
    }


    return(
        <>
          <Head>
            <title>Best Virtual Employee Engagement Activity - Gold of the Desert Kings™</title>
            <link rel="canonical"href="https://byldgroup.com/eaglesflightindia/our-offerings/gold-of-the-desert-kings" />
            <meta name="description" content="When you treat teamwork as a skill, all you need is goal-setting team-building activities for employees to practice, plan, implement, and accomplish desired results."/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                        <img className="img100" src="/efassets/img/banner/ef-gold-of-the-desert-kings.jpg"/>
                    </div>
                </div>
            </div>
            </div>

            <div class="rs-about style4 bg21 mtt-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="sec-title3 mbb-35 text-left onlyshd">
                        <h4 class="countertoph2 text-left font36">Decode the Enigma of the Best Employee Engagement Activity- Overview</h4>
                        <div class="heading-border-line left-style"></div>
                        <p class="mtt-40 justify">
                        Gold of the Desert Kings™ addresses the issue of effort versus productivity. Participants are placed in circumstances with limited time and resources and must rely on their team to achieve their goals. The pressures and anxiety experienced in virtual group games are similar to those experienced daily in a hectic work schedule. Participants contend with deadlines, a perceived lack of resources, others’ points of view, and the pressure to just do something while trying to accomplish team objectives.
                        </p>                        
                        </div>
                    </div>

                    <div className="col-lg-6">
                    <iframe width="100%" height="370" src="https://www.youtube.com/embed/Dn0Wrwa9qO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                </div>
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-40 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    <div className="col-lg-6 md-pt-50 text-center">
                        <div className="">
                        <img src="/efassets/img/gold-of-the-desert-kings-logo.png" alt=""/>
                        </div>
                        <div class="btn-part ptt-10 pbb-30">
                            <a class="readon2" target="_blank" href="https://ik.imagekit.io/byld/EF/gold-of-the-desert-kings_WyD8lsjU-.pdf?updatedAt=1708510509478">
                                 DOWNLOAD BROCHURE
                                <div class="btn-arrow"></div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>                        
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">Experience the Fun and Learning with this Best Team Building Game</h4>
                        <p>
                        Teams rush to compete against each other in this challenging race across the desert. Their goal? Battle the elements to get to the mountains to mine for as much gold as possible and return home alive. Teams are forced to be as productive as possible with limited time and resources. Through these team-building activities for employees, participants will experience the benefits of teamwork, planning, setting goals, and taking necessary risks.
                        </p>
                        </div>

                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">THE PRACTICAL DETAILS:</h4>
                        <ul className="estimate-info">
                            <li>Groups of 20 to over 1000 participants</li>
                            <li>Groups of 20 to over 1000 participants</li>
                            <li>Teams of 2-5 participants</li>
                            <li>Half-day sessions</li>
                            <li>Suitable for cross-functional and intact teams at all levels</li>
                            <li>Ideal for use in both a conference and training setting</li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-40 pbb-60">
            <div className="container">
                <div className="row rs-vertical-middle">
                   
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>                        
                        <div className='rs-estimate pbb-65'>
                        <h4 className="countertoph2 text-left font26">RESULTS</h4>
                        <ul className="estimate-info mtt-5">
                            <li>Increase productivity</li>
                            <li>Create vision</li>
                            <li>Improve the decision-making process</li>
                            <li>Manage change</li>
                            <li>Plan for success</li>
                            <li>Achieve exceptional team results</li>
                        </ul>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>        
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">KEY LEARNING POINTS</h4>
                        <ul className="estimate-info mtt-5">
                            <li>Discover how productive-driven behavior begins with picturing the end in mind</li>
                            <li>Get the best from team building activities for employees</li>
                            <li>Learn the value of obtaining, evaluating, and applying information</li>
                            <li>Determine the power of effective planning and generate the conviction, to do it</li>
                            <li>Understand how to work smarter, not harder</li>
                            <li>Realize the impact of asking, “What’s Possible?”</li>
                            <li>Control the effect of environmental pressures</li>
                            <li>Distinguish between results and activity</li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>

            <div className="rs-testimonial style4 bg16 ptt-30 pbb-70">
                <div className="container">                   
                    <div className="row">
                         <div className="col-sm-2"></div>
                         <div className="col-sm-8">
                         <div className="bannerform formshd">
                            <div className="sec-title3 mbb-35 text-center">                                
                                <h4 className="countertoph2 text-left font34">Register and Learn More</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                            <form id="contact-form" className='clientcornner pbb-20' onSubmit={MuseumCaperForm}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Enter Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                    
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>                                                
                                            </select>
                                        </div>
                                        <div className="col-sm-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagles Flight" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>
                            </div>
                         </div>
                         <div className="col-sm-2">
                         
                         </div>
                    </div>
                </div>
            </div>


  
        </>
    )
}
