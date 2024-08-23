import Head from 'next/head'

export default function BrowseCourses() {

    const submitF = async (event) => {
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        var q1 = event.target.q1.value;
        var q2 = event.target.q2.value;
        var q3 = event.target.q3.value;
        var q4 = event.target.q4.value;
        var q5 = event.target.q5.value;
        var q6 = event.target.q6.value;
        var q7 = event.target.q7.value;
        var q8 = event.target.q8.value;
        var q9 = event.target.q9.value;
        var q10 = event.target.q10.value;

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const organization = event.target.organization.value;
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-')



        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://byldblogs.vercel.app/api/become-a-professional-coach');
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
                    xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/53/feedback');
                    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


                    var Assessment = "Become a Professional Coach Assessment Form Marketing"
                    xhttp.send("name=" + event.target.name.value +
                        '&email=' + email +
                        '&phone=' + phone +
                        '&organization=' + organization +
                        '&assessment=' + Assessment)

                    window.setTimeout(function () {
                        window.location.href = `/coaching/become-a-professional-coach-assessment-m/${newnameurl}`
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
        // xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/53/feedback');
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
            <Head>
                <title>Coaching | Become a Professional Coach</title>
                <meta name="description" content="Coaching | Become a Professional Coach" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9D9QEXG1BB"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-9D9QEXG1BB');
          `,
                    }}
                />
            </Head>

            <section className='assesmentbannnerbg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className='cacoh pbb-20'>Check your readiness for becoming a Professional Coach? - Part I</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pbb-40'>
                <div className='container'>
                    <form onSubmit={submitF}>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Behavioural Judgement questions</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1 newassesment'>
                                    <h2>
                                        1. You are appointed as a performance coach to a senior leader in the organization. After a few coaching sessions, your Coachee spells out to you that he doesn’t see a future for himself in the current organization; he has offers from the competition and is actually considering those options. What probable choice will you make:
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="0" id="q1a" required />
                                        <label for="q1a">In the best interest of the organization inform the HR about your coachee's plan and how it is a waste of resource to coach him any further</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="10" id="q1b" required />
                                        <label for="q1b">Guide your Coachee to consider growing in the same organization and share the probable reasons why the organization is investing in coaching for him</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="0" id="q1c" required />
                                        <label for="q1c">Remain neutral and allow him to drive his agenda</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="0" id="q1d" required />
                                        <label for="q1d">You share your similar experience and guide your Coachee on how to negotiate his terms within the organization and also with other potential employers.</label>
                                    </div>

                                </div>

                                <div className='fcol1 newassesment'>
                                    <h2>
                                        2. You are the HR manager of an organization and you are coaching a young man who complains about getting into conflicting situations with his team & they don’t collaborate with him – this leads him to take most workload on himself and causes stress. He also demonstrated aggression in his language and the examples of situations he quoted. To you, this looks like:
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="0" id="q2a" required />
                                        <label for="q2a">A counselling case and you would like to pass the case to a counsellor</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="0" id="q2b" required />
                                        <label for="q2b">Share examples of people who have practised anger management techniques and have been successful</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="10" id="q2c" required />
                                        <label for="q2c">Lack of ownership coming from serious blind spots and will like to use tools to raise self-awareness</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="0" id="q2d" required />
                                        <label for="q2d">You recommend him to practice meditation and learn to control his mind</label>
                                    </div>

                                </div>

                                <div className='fcol1 newassesment'>
                                    <h2>
                                        3. You have been coaching a young vibrant lady who is doing significantly well in her organization. Over the last few months of coaching sessions, the coachee feels and considers that you have contributed in a big way to helping her overcome challenges in her personal and professional life. She wants to hire your services as a Coach beyond the current assignment and wants you to be her mentor. How will you take your coaching relationship further with your client?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="10" id="q3a" required />
                                        <label for="q3a">Value her emotions and agree to partner with her for her developmental journey from there.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="0" id="q3b" required />
                                        <label for="q3b">Establish with her the scope of this coaching relationship and the ethics of the relationship. Tell her that she must strive to become self-reliant in the process</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="0" id="q3c" required />
                                        <label for="q3c">Guide her to another coach to carry on with the coaching intervention</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="0" id="q3d" required />
                                        <label for="q3d">You inform her that the coaching process will end at after the agreed timelines, but you will be available to connect on an informal basis.</label>
                                    </div>
                                </div>

                                <div className='fcol1 newassesment'>
                                    <h2>
                                        4. You are starting a coaching session with a group of young managers (Group Coaching), and begin the session with a ‘Check-In’ – what's going well and what are the challenges in their team. You sense a bit of discomfort in the team and some of them are not willing to really even speak up and deflecting or not participating, giving an impression to you that they are uncomfortable.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="0" id="q4a" required />
                                        <label for="q4a">You start the session stating clearly the group objective and how will you partner with them in achieving the objective.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="0" id="q4b" required />
                                        <label for="q4b">You allow vocal members a window to vent out their qualms and then encourage others to speak up.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="0" id="q4c" required />
                                        <label for="q4c">You suggest that everyone speaks for a couple of minutes one by one, giving ample opportunity to allow all to participate</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="10" id="q4d" required />
                                        <label for="q4d">Make it amply clear that first let's commit to establishing ground rules about confidentiality, and mutual respect even before going to problems we want to solve.</label>
                                    </div>
                                </div>

                                <div className='fcol1 newassesment'>
                                    <h2>
                                        5. Prasad is your coachee and he is grappling with a situation where he strongly feels that his boss is negatively biased towards him and is promoting his blue-eyed colleague for all events. Prasad feels that his efforts are going to waste however hard he may try, his boss is never going to acknowledge his hard work and talent he has. This situation will prompt you to:
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="0" id="q5a" required />
                                        <label for="q5a">Discuss, whether Prasad's goal is to please the boss or achieve something else in the process.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="0" id="q5b" required />
                                        <label for="q5b">Share with Prasad feedback on his role in the problem that may be leading to this situation</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="10" id="q5c" required />
                                        <label for="q5c">Help Prasad prepare for dialogue with the manager to get validation of bias and concerns</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="0" id="q5d" required />
                                        <label for="q5d">Ask Prasad to focus on the circle of control and remind him that the nature of his manager falls in the circle of no control</label>
                                    </div>
                                </div>

                                <div className='fcol1 newassesment'>
                                    <h2>
                                        6. Linnet is Secretary to the MD of a growing company. Her workload is increasing each day. She sits till late at work and even then her work doesn’t get over. Linnet was hesitant initially but on further probing, she shares that another major reason for her to sit till late is last-minute unplanned work given by her boss- The Managing Director. Work coming up for completion at short notice disturbs her entire schedule and she lands up in stress.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="0" id="q6a" required />
                                        <label for="q6a">You tell Linnet that her boss (MD) has appointed you as her coach to improve her performance as he considers Linnet is very slow.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="10" id="q6b" required />
                                        <label for="q6b">You coach Linnet and build her trust in your coaching relationship with her; you also promise to partner with her to increase her performance and help her reduce stress.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="0" id="q6c" required />
                                        <label for="q6c">You would like to guide Linnet to look at time management skills as one of the areas to improve performance</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="0" id="q6d" required />
                                        <label for="q6d">You feel Linnet needs to raise her self-awareness in her approach towards her work and stop blaming her boss for all her problems.</label>
                                    </div>
                                </div>

                                <div className='fcol1 newassesment'>
                                    <h2>
                                        7. Sameer is Coaching Rita & she is demoralized at work since she lost a promotion to her male colleague who was also filling in for her when she went on a maternity break for three months. Rita is very ambitious, hardworking & extremely result driven. The promotion not coming through for her has disappointed her faith in the organization. She is not the same hardworking person she used to be. If you are Sameer, how would you address this issue?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="0" id="q7a" required />
                                        <label for="q7a">You would patiently listen to Rita and invest in the coaching process to guide her to what you think can help her cope with this situation.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="10" id="q7b" required />
                                        <label for="q7b">You listen to all her issues and also help raise her self-awareness of more possibilities before you assist her to draw up her action plan with an unbiased approach.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="0" id="q7c" required />
                                        <label for="q7c">You demonstrate empathy towards her and help Rita see options beyond getting promoted.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="0" id="q7d" required />
                                        <label for="q7d">You feel your focus should be more on creating a good interpersonal relationship with Rita before she starts sharing more details.</label>
                                    </div>
                                </div>

                                <div className='fcol1 newassesment'>
                                    <h2>
                                        8. You are the manager of the team and there are two teammates who are on leave. Reema who is a team member is currently overburdened with extra work and she is unable to strike a balance with her family commitments. You have assigned her the job of writing a paper on the recent trends of HR in social media and how the organization has benefited by adopting some of them. This write-up is for a business magazine. She got very upset and hastily walked up to your workstation seemingly upset.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="10" id="q8a" required />
                                        <label for="q8a">You empathize with her feelings and allow her the space to speak up and seek input on how she can achieve both goals. (showcasing their team's performance).</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="0" id="q8b" required />
                                        <label for="q8b">You offered her help and asked another team member to buddy up in writing that article.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="0" id="q8c" required />
                                        <label for="q8c">For you, it was important that the article is written and given to you no matter who and how it is done.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="0" id="q8d" required />
                                        <label for="q8d">You send her back and give her more time to manage situations at her end and then submit the paper.</label>
                                    </div>
                                </div>

                                <div className='fcol1 newassesment'>
                                    <h2>
                                        9. Many a time in an open forum when you invite suggestions, ideas or opinions you most often see yourself:
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="0" id="q9a" required />
                                        <label for="q9a">Encourage dissent and discussion</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="0" id="q9b" required />
                                        <label for="q9b">Focusing on the idea and who is sharing it</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="0" id="q9c" required />
                                        <label for="q9c">Test the idea to ensure that there are no gaps in thinking behind it.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="10" id="q9d" required />
                                        <label for="q9d">Build and brainstorm further by asking "What more is possible?"</label>
                                    </div>
                                </div>

                                <div className='fcol1 newassesment'>
                                    <h2>
                                        10. Shree is your subordinate and you sense that she has been quite indifferent for some time now during meetings and discussions. You hear another person that she is upset because the research paper she submitted to you, didn’t get the basic appreciation and attention she deserved. The paper in your view was average in quality, so you thought it didn't deserve any special recognition. She also spoke about how she has put in a lot of extra hours and effort in completing the project. you will in this case
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="10" id="q10a" required />
                                        <label for="q10a">Ask Shree what was bothering her and allow her the space to talk about it and clarify expectations around the quality of work.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="0" id="q10b" required />
                                        <label for="q10b">Call her to your workspace and break the ice and then give her an opportunity to share her finding and then use the opportunity to give feedback.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="0" id="q10c" required />
                                        <label for="q10c">You could also ask her what were her lessons learnt doing this project and what will she do differently next time.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="0" id="q10d" required />
                                        <label for="q10d">You feel it is better not to poke the matter any further, just write mail acknowledging hard work.</label>
                                    </div>
                                </div>

                                <div className='fcol1 lastinp ptt-20'>
                                    <div className='row inpuut'>
                                        <div className=" col-lg-6 col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className=" col-lg-6 col-sm-6 mb-12">
                                            <input className='form-control' type="email" name="email" placeholder="Work Email/ Personal Email*" required />
                                        </div>
                                        
                                        <div className=" col-lg-6 col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>

                                        <div className=" col-lg-6 col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                         <div className=" col-lg-6 col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="emailer" placeholder="Emailer"  disabled />
                                        </div>
                                        <div className='col-sm-12'>
                                            <input type="submit" value="Submit" id='submitbuttonform' class="assesmetmain" tabindex="201" />
                                            <p class="feedbackcolor" id="response"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </form>
                </div>
            </section>


        </>
    )
}
