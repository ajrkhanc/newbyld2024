import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function PromisesPromises(){

    const Eaglesflightexecutivebriefing = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/31/feedback');
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
            "&slot=" + event.target.slot.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +          
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )
  
    }


    return(
        <>
          <Head>
            <title>Develop Effective Communication with Promises, Promises!</title>
            <link rel="canonical"href="https://byldgroup.com/eaglesflightindia/our-offerings/promises-promises" />
            <meta name="description" content="If you want to improve your communication skills, then you need team building activities to make it effective."/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                        <img className="img100" src="/efassets/img/banner/ef-promises-promises.jpg"/>
                    </div>
                </div>
            </div>
            </div>

            <div class="rs-about style4 bg21 mtt-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="sec-title3 mbb-35 text-left onlyshd">
                        <h4 class="countertoph2 text-left font36">Best Team-Building Games – OVERVIEW</h4>
                        <div class="heading-border-line left-style"></div>
                        <p class="mtt-40 justify">
                        By forcing people to deal with the pressures and obstacles of interdependent teams, <b>Promises, Promises!™</b> powerfully demonstrates the strong relationship between effective communication and quality results with the team-building games. To meet their goals and become a United League of Nations, all teams must get the right resources to the right people according to their needs and deadlines. Participants walk away from Promises, Promises!™ understanding that everyone within an organization is both a supplier and a customer.
                        </p>                        
                        </div>
                    </div>

                    <div className="col-lg-6">
                    <iframe width="100%" height="360" src="https://www.youtube.com/embed/WfJLmfEWp6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                </div>
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-40 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    <div className="col-lg-6 md-pt-50 text-center">
                        <div className="">
                        <img src="/efassets/img/promises-promises-logo.png" alt=""/>
                        </div>
                        <div class="btn-part ptt-10 pbb-30">
                            <a class="readon2" target="_blank" href="https://ik.imagekit.io/byld/EF/promises-promises_Liv8dJ949.pdf?updatedAt=1708511661143">
                                 DOWNLOAD BROCHURE
                                <div class="btn-arrow"></div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>                        
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">THE EXPERIENCE</h4>
                        <p className='justify'>
                        As newly elected politicians representing one of 10 countries, participants must fulfill the promises they made to their constituents, no matter how outrageous!
                        </p>
                        <p className='justify'>
                        Operating in an environment of scandal, intrigue, fun, and politics, participants grapple with the needs of their constituents and neighboring countries and wade through cultural barriers, lack of trust, and poor communication to meet their goals. Alliances are created, abandoned, and reformed but before the end of the five-year term, all countries have become a truly United League of Nations.
                        </p>                        
                        </div>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-40 pbb-60">
            <div className="container">
                <div className="row">
                   
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>                        
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">THE PRACTICAL DETAILS:</h4>
                        <ul className="estimate-info mtt-5">
                            <li>Minimum group size of 20</li>
                            <li>Teams of 2-5 participants</li>
                            <li>3-4 hours per session of team building activities</li>
                            <li>Suitable for cross-functional and intact teams at all levels</li>
                            <li>Ideal for use in both conference and training setting</li>                            
                        </ul>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>        
                        <div className='rs-estimate'>
                        <h4 className="countertoph2 text-left font26">KEY LEARNING POINTS</h4>
                        <ul className="estimate-info mtt-5">
                            <li>Experience the impact of a “we” versus “me” focus</li>
                            <li>Understand the importance of fostering a trusting environment through a global focus</li>
                            <li>Learn how to maximize productivity through a win-win approach</li>
                            <li>Discover how your role impacts company-wide goals</li>
                            <li>Identify how to deliver exceptional quality and service through effective communication</li>
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
                            <form id="contact-form" className='clientcornner pbb-20' onSubmit={Eaglesflightexecutivebriefing}>                                         
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
                                            <select name="slot" required>
                                                <option value="">Pick up any Slot*</option>
                                                {/* <option value="Promises, Promises!™: February 8th, 2023">Promises, Promises!™: February 8th, 2023</option> */}
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-sm-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagles Flight" required />
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
