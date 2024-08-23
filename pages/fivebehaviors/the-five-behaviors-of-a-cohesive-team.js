import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function teamDevelopment(){

    const FiveBPersonalD = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/48/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/fivebehaviors/thank-you"
                    }, 3000);
  
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +         
            "&referredby=" + event.target.referredby.value +
            "&your-message=" + event.target.leadsquared_Notes.value )
  
    }


    return(
        <>
          <Head>
            <title>The Five Behaviors - Five Behaviors</title>
            <meta name="description" content="Connect With Us Based on Patrick Lencioni’s best-selling story on leadership The Five Dysfunctions of a Team, this program focuses on putting The Five BehaviorsTM model into practice. Team members better understand how they and others contribute to their team’s development, and how their part of the whole can make or break the team and […]"/> 
          </Head>

         <div className="team-developmentbg ptt-50 pbb-50">
            <div className="container custom">
                <div className="row y-middle">
                    <div className="col-md-7 col-sm-12">
                        <div className="content-wrap">                                
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="bannerform formshd">
                        <h2 className="formtitle">Connect With Us</h2>
                        <form id="contactForm" className='clientcornner' onSubmit={FiveBPersonalD}>
                            <div className="row">
                                <div className="col-lg-12 mb-12">
                                    <input type="text" name="name" placeholder="Enter Name*" required />
                                </div>
                                <div className="col-lg-12 mb-12">
                                    <input type="email" name="email" placeholder="Work Email/Email*" required />
                                </div>
                                <div className="col-lg-12 mb-12">
                                    <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                </div>
                                <div className="col-lg-12 mb-12">
                                    <select name="referredby" required>
                                    <option value="">Referred By*</option>
                                    <option value="Sales Representative">Sales Representative</option>
                                    <option value="Email">Email</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Google Search">Google Search</option>
                                    <option value="Website">Website</option>
                                    <option value="Reference">Reference</option>
                                    <option value="SMS">SMS</option>
                                    </select>
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
                </div>
            </div>
            </div>
            <div className="rs-about style4 bg21 pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-7">
                        <div className="sec-title3">                        
                        <h2 className="title countertoph2 paddingme">Team Development</h2>                        
                        <div className="desc pb-17 mtt-15">
                        Based on Patrick Lencioni’s best-selling story on leadership The Five Dysfunctions of a Team, this program focuses on putting The Five Behaviors<sup>®</sup> model into practice. Team members better understand how they and others contribute to their team’s development, and how their part of the whole can make or break the team and its dynamic.
                        </div>                       
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-img">
                        <img src="/5bassets/img/the-five-disfunctions-book.png" alt="images"/>
                        <div className="animations one">
                            <img className="dance2" src="/5bassets/img/1.png" alt="About"/>
                        </div>
                        <div className="animations two">
                            <img className="scale" src="/5bassets/img/2.png" alt="About"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="rs-achievement style1 relative">
            <div className="container">
                <div className="row rs-vertical-middle">
                <div className="col-lg-6">
                        <div className="">
                        <img src="/5bassets/img/five-behaviors-model.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-0">
                        <div className='fivemodelshd'>
                        <h4 className="countertoph2 text-left font34">The Five Behavior<sup>®</sup> Model</h4>
                        <h4 className="countertoph2 text-left font26"> Trust One Another</h4>
                        <p className='justify mbb-5'>When team members are genuinely transparent and honest with one another, it forms a safe environment that creates and builds vulnerability-based trust.</p>
                        <div className="sec-title3 mbb-5 text-left rs-estimate">
                        <h4 className="countertoph2 text-left pbb-5 fivemodelp0">What does this program do?</h4>
                        <p className="mbb-5">
                        This is a tool to help individuals better understand, internalize, and apply the principles of The Five Behaviors model and to foster communication that can be used throughout an organization.
                        </p>

                        <h4 className="countertoph2 text-left pbb-5 fivemodelp0">Engage in Conflict Around Ideas</h4>
                        <p className="mbb-5">
                        With trust, team members are able to engage in unfiltered, constructive debate of ideas.
                        </p>

                        <h4 className="countertoph2 text-left pbb-5 fivemodelp0">Commit to Decisions</h4>
                        <p className="mbb-5">
                        When team members are able to offer opinions and debate ideas, they feel heard and respected, and will be more likely to commit to decisions.
                        </p>

                        <h4 className="countertoph2 text-left pbb-5 fivemodelp0">Hold One Another Accountable</h4>
                        <p className="mbb-5">
                        Once everyone is committed to a clear plan of action, they will be more willing to hold one another accountable.
                        </p>

                        <h4 className="countertoph2 text-left pbb-5 fivemodelp0">Focus on Achieving Collective Results</h4>
                        <p className="mbb-5">
                        The ultimate goal is the achievement of results, unlocked through implementing the model’s principles of Trust, Conflict, Commitment, and Accountability.
                        </p> 
                        </div>
                        </div>
                    </div>                    
                </div>               
            </div>
            </div>



            <div className="rs-achievement style1 relative ptt-30 pbb-10">
            <div className="container">
                <div className="row rs-vertical-middle">
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font34">A productive, high-functioning team:</h4>
                        <div className='rs-estimate'>
                        <ul className="estimate-info mtt-5">
                            <li>Makes better, faster decisions</li>
                            <li>Avoids wasting time and energy on politics, confusion, and destructive conflicts</li>                  
                            <li>Avoids wasting time talking about the wrong issues and revisiting the same topics over and over again because of a lack of buy-in</li>
                            <li>Creates a competitive advantage</li>
                            <li>Feels safe to ask for help and express their opinions</li>                  
                            <li>Is committed to the end goal</li>
                            <li>Holds one another accountable</li>
                            <li>Have more fun—and delivers results!</li>                           
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <img src="/5bassets/img/fb-team.jpg" alt=""/>
                        </div>
                    </div>
                </div>                 
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-20 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <img src="/5bassets/img/program-do.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font34">What does this program do?</h4>
                        <p className='mall0'>
                        The program helps teams understand how they score on the key components of The Five Behaviors model: Trust, Conflict, Commitment, Accountability, and Results. Individual team members will learn about their own personality style and the styles of their team members—based on the Everything DiSC<sup>®</sup> model—and how their style contributes to the team’s overall success.
                        </p>
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">The Program Includes:</h4>
                        <ul className="estimate-info mtt-5">
                            <li>Assessment: 3 sets of questions, full adaptive version of Everything DiSC, team survey, and team culture questions.</li>
                            <li>Individual Profiles, Team Progress Reports, and one-on-one Comparison Reports.</li>                  
                            <li>Participant handouts, take-away cards and activities.</li>                        
                        </ul>
                        </div>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>
            
  
        </>
    )
}