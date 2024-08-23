import Head from 'next/head'
import Slider from "react-slick";

export default function BrowseCourses(){

    const WorkshopsForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/16/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                        window.location.href = "/cruciallifechangingskills/thank-you-cl-lp"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&leadsquared-mx_Showed_Interest_in=" + event.target.slot.value +            
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )

    }

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

    return(
        <>
        <Head>
            <title>CL Genric LP - Crucial Life-Changing Skills</title>
            <meta name="description" content="Call Today: 1800-102-1345 Email: cruciallearning.info@byldgroup.com Based on 30+ years of social science research, our courses for managers have proven highly effective in strengthening relationships, achieving more with less stress, building... Read more"/> 
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <section className='genericlpbanner'>
            <div className='container'>
                <div className='row y-middle'>
                    <div className='col-md-6 text-center'>
                        <h1>Learn Life-Transforming Skills</h1>
                        <p className='genericp'>
                        Enroll in our award-winning training and learn how to handle the most crucial challenges of life and work.
                        </p>
                        <p className='genericp pbb-30'>
                        <span>*VitalSmarts India is Now Crucial Learning</span>
                        </p>
                        <h6><a class="secondary-btn mrr-10" href="/cruciallifechangingskills/browse-courses/">Browse Courses</a>
                        <a class="primary-btn mll-10" href="/cruciallifechangingskills/contact-us">Get Started</a></h6>
                    </div>
                    <div className='col-md-6'>
                    <div class="col-md-12 form-area workshop-form">
                    <form id="contactForm" class="row" onSubmit={WorkshopsForm}>
                        <div class="col-lg-12 contact-title">                       
                        <h3 className='formh3'>
                           Fill in the form below and our subject matter expert will connect with you within 24 working hours.
                        </h3>
                        </div>
                        <div class="col-md-6 col-6">
                        <input type="text" name='name' placeholder="Your Name*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="email" name='email' placeholder="Work Email/Email*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name='organization' placeholder="Organization*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name='designation' placeholder="Designation*" required/> 
                        </div>

                        

                        <div class="col-md-6 col-6">
                        <select name='slot' required>
                            <option value="">Interested In*</option>
                            <option value="Crucial Conversations for Mastering Dialogue">Crucial Conversations for Mastering Dialogue</option>
                            <option value="Crucial Conversations for Accountability">Crucial Conversations for Accountability</option>
                            <option value="The Power of Habit">The Power of Habit</option>
                            <option value="Influencer">Influencer</option>
                            <option value="Getting Things Done">Getting Things Done</option>
                        </select>
                        </div>
                        <div class="d-none">
                        <input type="text" name='Business_Entity' value="Crucial Life-Changing Skills"/> 
                        </div>

                        <div class="col-md-12">
                        <input id='submitbuttonform' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </div>
                    </div>
                </div>
            </div>
        </section>


        <div className='desktopviewbrowse'>
            <section class="pbb-10">
                <div class="container-fluid minwidth992px">
                    <div class="row">
                    <div class="col-lg-12 contact-title">                        
                            <h1 className=''>OUR SOLUTIONS</h1>                           
                        </div>

                        <div class="col-md-5">
                            <div className='row paddingleftright3'>
                                <div className='col-sm-12 browsecthemebg ptt-10 pbb-10'>
                                    <h3>COMMUNICATION</h3>
                                </div>
                                <div className='col-sm-6 padding0box'>
                                    <a className='browse-courses-box paddingright3' href='/cruciallifechangingskills/crucial-conversations-for-mastering-dialogue' target="_blank">
                                        <div className='browsecthemebgsecound ptt-20 pbb-10 minbrowseheight'>
                                            <img src="/classets/img/logo-crucial-conversations.svg" alt="logo-crucial-conversations"/>
                                            <h3>CRUCIAL <br/>CONVERSATIONS</h3>
                                            <p>for Mastering Dialogue</p>
                                        </div>
                                        <div className='browsecthemebgsecound mtb6px ptt-15 pbb-15'>
                                            <h4>DIALOGUE</h4>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className='col-sm-6 padding0box'>
                                    <a className='browse-courses-box paddingleft3' href='/cruciallifechangingskills/crucial-conversations-for-accountability/' target="_blank">
                                        <div className='browsecthemebgsecound ptt-20 pbb-10 minbrowseheight'>
                                            <img src="/classets/img/logo-crucial-conversations.svg" alt="logo-crucial-conversations"/>
                                            <h3>CRUCIAL <br/>CONVERSATIONS</h3>
                                            <p>for Accountability</p>
                                        </div>
                                        <div className='browsecthemebgsecound mtb6px ptt-15 pbb-15'>
                                            <h4>ACCOUNTABILITY</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-5'>
                        <div className='row paddingleftright3'>
                                <div className='col-sm-12 browsecthemebg ptt-10 pbb-10'>
                                    <h3>PERFORMANCE</h3>
                                </div>                                
                                
                                <div className='col-sm-6 padding0box'>
                                    <a className='browse-courses-box paddingright3' href='/cruciallifechangingskills/getting-things-done' target="_blank">
                                        <div className='coursegtdcolor ptt-20 pbb-10 minbrowseheight'>
                                            <img src="/classets/img/logo-gtd.svg" alt="logo-crucial-conversations"/>
                                            <h3>GETTING THINGS DONE</h3>                                            
                                        </div>
                                        <div className='coursegtdcolor mtb6px ptt-15 pbb7'>
                                            <h4>PRODUCTIVITY</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-sm-6 padding0box'>
                                <a className='browse-courses-box paddingleft3' href='/cruciallifechangingskills/the-power-of-habit' target="_blank">
                                <div className='browsecthemebgsecound browsepohbg minbrowseheight ptt-20'>
                                    <img src="/classets/img/browse-logo-poh.svg" alt="logo-crucial-conversations"/>
                                    <h3>THE POWER OF HABIT</h3>                                
                                </div>
                                <div className='browsecthemebgsecound browsepohbg mtb6px ptt-15 pbb-15'>
                                    <h4>HABITS</h4>
                                </div>
                            </a>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className='col-md-2 paddingleftright3'>
                            <div className='browsecthemebg ptt-10 pbb-10'>
                                <h3>LEADERSHIP</h3>
                            </div>
                            <a className='browse-courses-box' href='/cruciallifechangingskills/influencer' target="_blank">
                                <div className='browsecthemebgsecound browseinfluncerbg minbrowseheight ptt-20'>
                                    <img src="/classets/img/browse-logo-influencer.svg" alt="logo-crucial-conversations"/>
                                    <h3>INFLUENCER</h3>                                
                                </div>
                                <div className='browsecthemebgsecound browseinfluncerbg mtb6px ptt-15 pbb-15'>
                                    <h4>CHANGE</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section class="features courses-features">
            <div class="container">
                <div class="row">                   
                    <div class="col-md-6 themss1">
                        <div class="row feature-right">
                            <div class="col-md-3 feature-icon">
                                <img src="/classets/img/effective-communication.png" />
                            </div>
                            <div class="col-md-9 feature-content">
                                <h5>CRUCIAL CONVERSATIONS<sub>®</sub> FOR MASTERING DIALOGUE</h5>
                                <p>The Standard in Effective Communication. With 30 years of research in social science, Crucial Conversations for Mastering Dialogue skills provide the standard to make effective dialogues in a conversation that marks as an indicator of high-performing individuals and organizations.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 themss1">
                        <div class="row feature-right">
                            <div class="col-md-3 feature-icon">
                                <img src="/classets/img/organization-culture.png" />
                            </div>
                            <div class="col-md-9 feature-content">
                                <h5>CRUCIAL CONVERSATIONS<sub>®</sub> FOR ACCOUNTABILITY</h5>
                                <p>
                                Performance Management Improved. When it comes to creating healthy relationships amongst people and organizations, accountability becomes critical in nature. If people are able to hold each other accountable, they are able to build trust, fulfill commitments, efficiency, engagement, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 themss2">
                        <div class="row feature-right">
                            <div class="col-md-3 feature-icon">
                                <img src="/classets/img/high-performance.png" />
                            </div>
                            <div class="col-md-9 feature-content">
                                <h5>THE POWER OF HABIT™</h5>
                                <p>
                                The Greatest Predictor of High Performance. Habits can determine your success more than talent, intelligence, luck, or decision-making. Many are aware of this fact but still lack control over their habits to get the desired results. Download our course overview to learn how The Power of Habit™ can help you gain mastery over the one thing that’s in your control: your behavior.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 themss3">
                        <div class="row feature-right">
                            <div class="col-md-3 feature-icon">
                                <img src="/classets/img/influencer.png" />
                            </div>
                            <div class="col-md-9 feature-content">
                                <h5>INFLUENCER</h5>
                                <p>The New Science of Leadership. Backed by the 50 years of research in social science, Influencer takes a route on corporate perks and charismatic personalities to help learn techniques that can alter ingrained human behavior.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>




        <section class="why-us choose-path">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-10 offset-md-1 text-center title">
                        <h2><span>CHOOSE YOUR PATH</span></h2>
                        <p>
                        To ensure you and your organization beneﬁts from our world-renowned training, we offer courses in ﬂexible formats including in person, virtually, or on-demand—or you can blend them for a unique and engaging learning experience to learn Effective Communication Skills.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="grey-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="row feature-content text-center feature-box">
                                    <img className='imgmauto img70 pbb-30' src="/classets/img/icon-on-demand-1.svg" />
                                    <h4>On Demand</h4>
                                    <p>Learn at your own pace online.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row feature-content text-center feature-box">
                                    <img className='imgmauto img70 pbb-30' src="/classets/img/icon-virtual-1.svg" />
                                    <h4>Virtual</h4>
                                    <p>Join one of our instructors online.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row feature-content text-center feature-box">
                                    <img className='imgmauto img70 pbb-30' src="/classets/img/icon-in-person.svg" />
                                    <h4>In Person</h4>
                                    <p>Attend a classroom course.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
     <section class="why-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 newsletter">
                        <h2>READY TO GET STARTED?</h2> 
                    </div>
                    <div class="col-md-6 newsletter-btn mtt-20"> 
                       <a href='/cruciallifechangingskills/contact-us' class="start">Start a Conversation</a>
                    </div>
                </div>
            </div>
        </section>

        <section className='ctestimonials text-center mbb-40 ptt-50'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h3 className='testtt pbb-30'>Client Testimonials</h3>
                    </div>
                    <div className='clearfix'></div>
                    <div className='col-md-4'>
                        <div className='innerb'>
                            <p>
                            “Thankful to the team at VitalSmarts India for conducting a power-packed session on the topic of “Influencer” for our leaders at CK Birla Group. The simple (and powerful) 6 sources of influence model will guide us to drive change in our personal and professional space!”
                            </p>
                            <div className='feturelf'>
                                <div>
                                   <img src='/classets/img/testm.png'/>
                                </div>
                                <div className='testmm'>
                                    <h4>Prerna</h4>
                                    <h5>CK Birla Group</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='innerb'>
                            <p>
                            “The virtual session conducted by VitalSmarts India on Crucial Conversations® received good feedback from the participants. The content for this workshop has always been a winner but the facilitator is the one who helps in rolling out the context to the participants with the right energy, examples, and discussions. Very good session to be run again!”
                            </p>
                            <div className='feturelf'>
                                <div>
                                   <img src='/classets/img/testm.png'/>
                                </div>
                                <div className='testmm'>
                                    <h4>Nisha Abrahim</h4>
                                    <h5>Abbott Healthcare</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='innerb'>
                            <p>
                            “The module was well-designed and engaging keeping the current constraints in perspective. There are also some activities and learning material that I can access for another year to continue my pursuit of this, which is appreciated.
                            </p>
                            <div className='feturelf'>
                                <div>
                                   <img src='/classets/img/testm.png'/>
                                </div>
                                <div className='testmm'>
                                    <h4>Namita Shah</h4>
                                    <h5>HSBC</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className='ctestimonials text-center mbb-40 ptt-50'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h3 className='testtt pbb-30'>Our Clients</h3>
                    </div>
                    <div className='clearfix'></div>
                    <div className='col-sm-12'>
                    <Slider {...settings}>
                      <div className='sllogo'>
                        <img src='/classets/img/clientlogo/cc2-cl5-1.jpg'/>
                      </div>
                      <div className='sllogo'>
                         <img src='/classets/img/clientlogo/cc2-cl4-1.jpg'/>
                      </div>
                      <div className='sllogo'>
                         <img src='/classets/img/clientlogo/cc2-cl10-1.jpg'/>
                      </div>
                      <div className='sllogo'>
                         <img src='/classets/img/clientlogo/cc2-cl9-1.jpg'/>
                      </div>
                      <div className='sllogo'>
                         <img src='/classets/img/clientlogo/cc2-cl8-1.jpg'/>
                      </div>
                      <div className='sllogo'>
                         <img src='/classets/img/clientlogo/cc2-cl3-1.jpg'/>
                      </div>
                      <div className='sllogo'>
                         <img src='/classets/img/clientlogo/cc2-cl11-1.jpg'/>
                      </div>
                      <div className='sllogo'>
                         <img src='/classets/img/clientlogo/cc2-cl6-1.jpg'/>
                      </div>
                      <div className='sllogo'>
                         <img src='/classets/img/clientlogo/cc2-cl7-1.jpg'/>
                      </div>
                      <div className='sllogo'>
                         <img src='/classets/img/clientlogo/cc2-cl1-1.jpg'/>
                      </div>
                      
                    </Slider>
                    </div>
                </div>
            </div>
        </section>

        

        </>
    )
}
