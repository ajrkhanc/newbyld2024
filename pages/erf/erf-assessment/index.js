import Head from 'next/head'

export default function BrowseCourses() {

    const submitF = async (event) => {
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting";

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
        var q11 = event.target.q11.value;
        var q12 = event.target.q12.value;
        var q13 = event.target.q13.value;
        var q14 = event.target.q14.value;
        var q15 = event.target.q15.value;
        var q16 = event.target.q16.value;
        var q17 = event.target.q17.value;
        var q18 = event.target.q18.value;
        var q19 = event.target.q19.value;
        var q20 = event.target.q20.value;
        var q21 = event.target.q21.value;
        var q22 = event.target.q22.value;
        var q23 = event.target.q23.value;
        var q24 = event.target.q24.value;
        var q25 = event.target.q25.value;
        var q26 = event.target.q26.value;
        var q27 = event.target.q27.value;
        var q28 = event.target.q28.value;
        var q29 = event.target.q29.value;
        var q30 = event.target.q30.value;
        var q31 = event.target.q31.value;
        var q32 = event.target.q32.value;
        var q33 = event.target.q33.value;
        var q34 = event.target.q34.value;
        var q35 = event.target.q35.value;
        var q36 = event.target.q36.value;
        var q37 = event.target.q37.value;
        var q38 = event.target.q38.value;
        var q39 = event.target.q39.value;
        var q40 = event.target.q40.value;
        var q41 = event.target.q41.value;
        var q42 = event.target.q42.value;
        var q43 = event.target.q43.value;
        var q44 = event.target.q44.value;
        var q45 = event.target.q45.value;
        var q46 = event.target.q46.value;
        var q47 = event.target.q47.value;
        var q48 = event.target.q48.value;
        var q49 = event.target.q49.value;
        var q50 = event.target.q50.value;
        var q51 = event.target.q51.value;
        var q52 = event.target.q52.value;
        var q53 = event.target.q53.value;
        var q54 = event.target.q54.value;
        var q55 = event.target.q55.value;
        var q56 = event.target.q56.value;
        var q57 = event.target.q57.value;
        var q58 = event.target.q58.value;
        var q59 = event.target.q59.value;
        var q60 = event.target.q60.value;
        var q61 = event.target.q61.value;
        var q62 = event.target.q62.value;
        var q63 = event.target.q63.value;
        var q64 = event.target.q64.value;
        var q65 = event.target.q65.value;
        var q66 = event.target.q66.value;
        var q67 = event.target.q67.value;
        var q68 = event.target.q68.value;
        var q69 = event.target.q69.value;
        var q70 = event.target.q70.value;
        var q71 = event.target.q71.value;
        var q72 = event.target.q72.value;
        var q73 = event.target.q73.value;
        var q74 = event.target.q74.value;
        var q75 = event.target.q75.value;
        var q76 = event.target.q76.value;
        var q77 = event.target.q77.value;
        var q78 = event.target.q78.value;
        var q79 = event.target.q79.value;
        var q80 = event.target.q80.value;
        var q81 = event.target.q81.value;
        var q82 = event.target.q82.value;
        var q83 = event.target.q83.value;
        var q84 = event.target.q84.value;
        var q85 = event.target.q85.value;
        var q86 = event.target.q86.value;
        var q87 = event.target.q87.value;



        const name = event.target.name.value;
        const email = event.target.email.value;
        // const phone = event.target.phone.value;
        const organization = event.target.organization.value;
        const pname = event.target.pname.value;
        const yrole = event.target.yrole.value;
        const startd = event.target.startd.value;
        const completed = event.target.completed.value;
        const initiative = event.target.initiative.value;

        
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-')



        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://byldblogs.vercel.app/api/efc-assessment');
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
            '&q11=' + q11 +
            '&q12=' + q12 +
            '&q13=' + q13 +
            '&q14=' + q14 +
            '&q15=' + q15 +
            '&q16=' + q16 +
            '&q17=' + q17 +
            '&q18=' + q18 +
            '&q19=' + q19 +
            '&q20=' + q20 +
            '&q21=' + q21 +
            '&q22=' + q22 +
            '&q23=' + q23 +
            '&q24=' + q24 +
            '&q25=' + q25 +
            '&q26=' + q26 +
            '&q27=' + q27 +
            '&q28=' + q28 +
            '&q29=' + q29 +
            '&q30=' + q30 +
            '&q31=' + q31 +
            '&q32=' + q32 +
            '&q33=' + q33 +
            '&q34=' + q34 +
            '&q35=' + q35 +
            '&q36=' + q36 +
            '&q37=' + q37 +
            '&q38=' + q38 +
            '&q39=' + q39 +
            '&q40=' + q40 +
            '&q41=' + q41 +
            '&q42=' + q42 +
            '&q43=' + q43 +
            '&q44=' + q44 +
            '&q45=' + q45 +
            '&q46=' + q46 +
            '&q47=' + q47 +
            '&q48=' + q48 +
            '&q49=' + q49 +
            '&q50=' + q50 +
            '&q51=' + q51 +
            '&q52=' + q52 +
            '&q53=' + q53 +
            '&q54=' + q54 +
            '&q55=' + q55 +
            '&q56=' + q56 +
            '&q57=' + q57 +
            '&q58=' + q58 +
            '&q59=' + q59 +
            '&q60=' + q60 +
            '&q61=' + q61 +
            '&q62=' + q62 +
            '&q63=' + q63 +
            '&q64=' + q64 +
            '&q65=' + q65 +
            '&q66=' + q66 +
            '&q67=' + q67 +
            '&q68=' + q68 +
            '&q69=' + q69 +
            '&q70=' + q70 +
            '&q71=' + q71 +
            '&q72=' + q72 +
            '&q73=' + q73 +
            '&q74=' + q74 +
            '&q75=' + q75 +
            '&q76=' + q76 +
            '&q77=' + q77 +
            '&q78=' + q78 +
            '&q79=' + q79 +
            '&q80=' + q80 +
            '&q81=' + q81 +
            '&q82=' + q82 +
            '&q83=' + q83 +
            '&q84=' + q84 +
            '&q85=' + q85 +
            '&q86=' + q86 +
            '&q87=' + q87 +

            '&name=' + name +
            '&email=' + email +      
            '&organization=' + organization +

            '&pname=' + pname +
            '&yrole=' + yrole +
            '&startd=' + startd +
            '&completed=' + completed +
            '&initiative=' + initiative +
            
            '&newnameurl=' + newnameurl
        );

        xhr.onreadystatechange = function () {

            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);

                document.getElementById("response").innerHTML = data.message;

                if (data.status == 0) {
                    var xhttp = xhr;
                    xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/154/feedback');
                    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                    var Assessment = "ECF Assessment"
                    xhttp.send("name=" + event.target.name.value +
                        '&email=' + email +                        
                        '&organization=' + organization +
                        '&pname=' + pname +
                        '&yrole=' + yrole +
                        '&startd=' + startd +
                        '&completed=' + completed +
                        '&assessment=' + Assessment)

                    window.setTimeout(function () {
                        window.location.href = `/erf/erf-assessment/${newnameurl}`
                    }, 1000);
                }

            }
            else {
                document.getElementById("response").innerHTML = "Fetching your result"
                setTimeout(function () {
                    document.getElementById("response").innerHTML = "";
                    document.getElementById("submitbuttonform").value = "Submit";
                }, 3000);
            }

        }



        xhr.onerror = function () {
            console.log('error');
        }
    };

    return (
        <>
            <Head>
                <title>ERF | BYLD Group</title>
                <meta name="description" content="Circle the number that best represents the extent to which you do the following" />
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
                            <h2 className='cacoh'>Execution Risk Forecast</h2>
                            <p>
                                BYLD Execution Risk Forecast (ERF) is a reflective and scientific approach to manage the human and cultural elements critical to achieving strategic business, objectives. The Execution Risk Forecast (ERF) is one component of the overall approach and provided a “snapshot” measurement designed to increase the probability of Execution of strategies and/or transformation projects success by identifying current risk factors and targeting specific resources for a project in progress. Additional components will assess the other key factors which are essential for change/project of success.
                            </p>
                            <p>Select the number that best represents the extent to which you do the following (Use the line chart below as a guide.):</p>
                            <div className='clearfix'></div>
                            <div className='mainlinec'>
                                <div className='sboxp middlecenter'>
                                    <div className='sbox'>
                                        <hr className='hrleft'></hr>
                                        <span>1</span>
                                        <p>Strongly Disagree</p>
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>2</span>
                                        <p>Disagree</p>
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>3</span>
                                        <p>Neutral</p>
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>4</span>
                                        <p>Agree</p>
                                    </div>
                                    <div className='sbox'>
                                        <hr className='hrright'></hr>
                                        <span>5</span>
                                        <p>Strongly Agree</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pbb-40'>
                <div className='container'>
                    <form onSubmit={submitF}>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='fcol1 fmcvt lastinp ptt-20'>
                                    <div className='row inpuut'>
                                    <div className="col-sm-2"></div>
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="text" name="initiative" placeholder="Your Initiative*" required />
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <h2>
                                            Who are you in your organisation? Cast of characters(Vocabulary)
                                            </h2>
                                            <div className='rolcc'>                                                
                                                <div><input type="radio" name="yrole" value="Champions" id="trust1" required /></div>
                                                <label for="trust1">Champions : Individuals who believe in and want the change and attempt to obtain commitment and resource for it. Implementation can be accelerated when other three roles are also champions </label>
                                            </div>
                                            <div className='rolcc'>                                                
                                                <div><input type="radio" name="yrole" value="Agents" id="trust2" required /></div>
                                                <label for="trust2">Agents : Implement change. Agents have responsibility through planning and executing implementation. At-least part, if not all of their performance is evaluated a reinforced on the success of this implementation.</label>
                                            </div>
                                            <div className='rolcc'>                                                
                                                <div><input type="radio" name="yrole" value="Sponsors" id="trust3" required /></div>
                                                <label for="trust3">Sponsors: Authorise, legitimise and demonstrate ownership for the change: possess sufficient organisational power and/or influence to either initiate resource commitment (Authorising Sponsor)or reinforce the change at the local level(Reinforce Sponsor).</label>
                                            </div>
                                            <div className='rolcc'>                                                
                                                <div><input type="radio" name="yrole" value="Targets: Change behaviour, emotions ,knowledge , perceptions ,etc." id="trust4" required /></div>
                                                <label for="trust4">Targets: Change behaviour, emotions ,knowledge , perceptions ,etc.</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Define the change/project</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        We have ensured that everyone impacted by change/project understands the business case and/or rationale for transformation.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="1" id="trust1" required />
                                        <label for="trust1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="2" id="trust2" required />
                                        <label for="trust2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="3" id="trust3" required />
                                        <label for="trust3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="4" id="trust4" required />
                                        <label for="trust4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="5" id="trust5" required />
                                        <label for="trust5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        We have ensured that all people impacted by change/project have a commonly held definition of the current state (where we are now).
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="1" id="2trust1" required />
                                        <label for="2trust1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="2" id="2trust2" required />
                                        <label for="2trust2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="3" id="2trust3" required />
                                        <label for="2trust3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="4" id="2trust4" required />
                                        <label for="2trust4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="5" id="2trust5" required />
                                        <label for="2trust5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Everyone impacted by the change/project has a commonly held definition of the desired state (will be).
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="1" id="3trust1" required />
                                        <label for="3trust1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="2" id="3trust2" required />
                                        <label for="3trust2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="3" id="3trust3" required />
                                        <label for="3trust3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="4" id="3trust4" required />
                                        <label for="3trust4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="5" id="3trust5" required />
                                        <label for="3trust5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Time and milestones have been defining for this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="1" id="4trust1" required />
                                        <label for="4trust1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="2" id="4trust2" required />
                                        <label for="4trust2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="3" id="4trust3" required />
                                        <label for="4trust3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="4" id="4trust4" required />
                                        <label for="4trust4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="5" id="4trust5" required />
                                        <label for="4trust5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        The budget has been defined for the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="1" id="5trust1" required />
                                        <label for="5trust1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="2" id="5trust2" required />
                                        <label for="5trust2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="3" id="5trust3" required />
                                        <label for="5trust3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="4" id="5trust4" required />
                                        <label for="5trust4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="5" id="5trust5" required />
                                        <label for="5trust5">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        The business objectives have been defined for the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="1" id="1ec1" required />
                                        <label for="1ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="2" id="1ec2" required />
                                        <label for="1ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="3" id="1ec3" required />
                                        <label for="1ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="4" id="1ec4" required />
                                        <label for="1ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="5" id="1ec5" required />
                                        <label for="1ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        The human objectives (behaviors we seek to see) have been defined for the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="1" id="2ec1" required />
                                        <label for="2ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="2" id="2ec2" required />
                                        <label for="2ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="3" id="2ec3" required />
                                        <label for="2ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="4" id="2ec4" required />
                                        <label for="2ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="5" id="2ec5" required />
                                        <label for="2ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        A specific measurement system has been established for the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="1" id="3ec1" required />
                                        <label for="3ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="2" id="3ec2" required />
                                        <label for="3ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="3" id="3ec3" required />
                                        <label for="3ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="4" id="3ec4" required />
                                        <label for="3ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="5" id="3ec5" required />
                                        <label for="3ec5">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Build leaders (Agent) Capacity</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        Change/project leaders (project team, project managers) have the trust and credibility of the sponsors.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="1" id="4ec1" required />
                                        <label for="4ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="2" id="4ec2" required />
                                        <label for="4ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="3" id="4ec3" required />
                                        <label for="4ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="4" id="4ec4" required />
                                        <label for="4ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="5" id="4ec5" required />
                                        <label for="4ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Change/project leaders have the trust and credibility of those impacted (Targets).
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="1" id="5ec1" required />
                                        <label for="5ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="2" id="5ec2" required />
                                        <label for="5ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="3" id="5ec3" required />
                                        <label for="5ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="4" id="5ec4" required />
                                        <label for="5ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="5" id="5ec5" required />
                                        <label for="5ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        The Change/project leaders have adequate time to implement the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="1" id="6ec1" required />
                                        <label for="6ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="2" id="6ec2" required />
                                        <label for="6ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="3" id="6ec3" required />
                                        <label for="6ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="4" id="6ec4" required />
                                        <label for="6ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="5" id="6ec5" required />
                                        <label for="6ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Change/project leaders are dedicated full time, to the project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="1" id="7ec1" required />
                                        <label for="7ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="2" id="7ec2" required />
                                        <label for="7ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="3" id="7ec3" required />
                                        <label for="7ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="4" id="7ec4" required />
                                        <label for="7ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="5" id="7ec5" required />
                                        <label for="7ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Change/project leaders can successfully translate the sponsor's Frame of Reference (FOR) to the goals.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="1" id="8ec1" required />
                                        <label for="8ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="2" id="8ec2" required />
                                        <label for="8ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="3" id="8ec3" required />
                                        <label for="8ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="4" id="8ec4" required />
                                        <label for="8ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="5" id="8ec5" required />
                                        <label for="8ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Change/project leaders can derive minimum of core and vital behaviors to enacted by Targets to achieve the goals
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="1" id="9ec1" required />
                                        <label for="9ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="2" id="9ec2" required />
                                        <label for="9ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="3" id="9ec3" required />
                                        <label for="9ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="4" id="9ec4" required />
                                        <label for="9ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="5" id="9ec5" required />
                                        <label for="9ec5">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>


                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Assess the Culture</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        This change/project is seen as one of the top priorities for the organization.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="1" id="10ec1" required />
                                        <label for="10ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="2" id="10ec2" required />
                                        <label for="10ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="3" id="10ec3" required />
                                        <label for="10ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="4" id="10ec4" required />
                                        <label for="10ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="5" id="10ec5" required />
                                        <label for="10ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Resources have been allocated for this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="1" id="11ec1" required />
                                        <label for="11ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="2" id="11ec2" required />
                                        <label for="11ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="3" id="11ec3" required />
                                        <label for="11ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="4" id="11ec4" required />
                                        <label for="11ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="5" id="11ec5" required />
                                        <label for="11ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        The organization has a history of successfully implementing projects/change initiatives on time.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="1" id="12ec1" required />
                                        <label for="12ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="2" id="12ec2" required />
                                        <label for="12ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="3" id="12ec3" required />
                                        <label for="12ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="4" id="12ec4" required />
                                        <label for="12ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="5" id="12ec5" required />
                                        <label for="12ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        The organization has a history of successfully implementing projects within budget.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="1" id="13ec1" required />
                                        <label for="13ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="2" id="13ec2" required />
                                        <label for="13ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="3" id="13ec3" required />
                                        <label for="13ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="4" id="13ec4" required />
                                        <label for="13ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="5" id="13ec5" required />
                                        <label for="13ec5">Strongly Agree</label>
                                    </div>

                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        The organization has a history of successfully implementing the human objectives of the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="1" id="14ec1" required />
                                        <label for="14ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="2" id="14ec2" required />
                                        <label for="14ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="3" id="14ec3" required />
                                        <label for="14ec3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="4" id="14ec4" required />
                                        <label for="14ec4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="5" id="14ec5" required />
                                        <label for="14ec5">Strongly Agree</label>
                                    </div>

                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        The organization has a history of successfully achieving the business objectives driving the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="1" id="1pf1" required />
                                        <label for="1pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="2" id="1pf2" required />
                                        <label for="1pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="3" id="1pf3" required />
                                        <label for="1pf3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="4" id="1pf4" required />
                                        <label for="1pf4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="5" id="1pf5" required />
                                        <label for="1pf5">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>


                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Generate Social Support Leadership Sponsorship</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        Sponsors understand their role in this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="1" id="2pf1" required />
                                        <label for="2pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="2" id="2pf2" required />
                                        <label for="2pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="3" id="2pf3" required />
                                        <label for="2pf3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="4" id="2pf4" required />
                                        <label for="2pf4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="5" id="2pf5" required />
                                        <label for="2pf5">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Sponsors have actively and publicly communicated their commitment to the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="1" id="3pf1" required />
                                        <label for="3pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="2" id="3pf2" required />
                                        <label for="3pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="3" id="3pf3" required />
                                        <label for="3pf3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="4" id="3pf4" required />
                                        <label for="3pf4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="5" id="3pf5" required />
                                        <label for="3pf5">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Sponsors have informally communicated their commitment to the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="1" id="4pf1" required />
                                        <label for="4pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="2" id="4pf2" required />
                                        <label for="4pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="3" id="4pf3" required />
                                        <label for="4pf3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="4" id="4pf4" required />
                                        <label for="4pf4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="5" id="4pf5" required />
                                        <label for="4pf5">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Sponsors have dedicated resources to achieve goals of this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="1" id="5pf1" required />
                                        <label for="5pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="2" id="5pf2" required />
                                        <label for="5pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="3" id="5pf3" required />
                                        <label for="5pf3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="4" id="5pf4" required />
                                        <label for="5pf4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="5" id="5pf5" required />
                                        <label for="5pf5">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Change agents exist at all management level.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="1" id="6pf1" required />
                                        <label for="6pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="2" id="6pf2" required />
                                        <label for="6pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="3" id="6pf3" required />
                                        <label for="6pf3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="4" id="6pf4" required />
                                        <label for="6pf4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="5" id="6pf5" required />
                                        <label for="6pf5">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Sponsors have involved people early in the change process.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="1" id="1cr1" required />
                                        <label for="1cr1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="2" id="1cr2" required />
                                        <label for="1cr2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="3" id="1cr3" required />
                                        <label for="1cr3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="4" id="1cr4" required />
                                        <label for="1cr4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="5" id="1cr5" required />
                                        <label for="1cr5">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Sponsors have made specific sacrifices to achieve this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="1" id="2cr1" required />
                                        <label for="2cr1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="2" id="2cr2" required />
                                        <label for="2cr2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="3" id="2cr3" required />
                                        <label for="2cr3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="4" id="2cr4" required />
                                        <label for="2cr4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="5" id="2cr5" required />
                                        <label for="2cr5">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Leaders have shared support needed for the project/change with their direct reports
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="1" id="3cr1" required />
                                        <label for="3cr1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="2" id="3cr2" required />
                                        <label for="3cr2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="3" id="3cr3" required />
                                        <label for="3cr3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="4" id="3cr4" required />
                                        <label for="3cr4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="5" id="3cr5" required />
                                        <label for="3cr5">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Sponsors have applied specific, informal, and positive reinforcement for those attempting to change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="1" id="4cr1" required />
                                        <label for="4cr1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="2" id="4cr2" required />
                                        <label for="4cr2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="3" id="4cr3" required />
                                        <label for="4cr3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="4" id="4cr4" required />
                                        <label for="4cr4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="5" id="4cr5" required />
                                        <label for="4cr5">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        Leaders have applied specific formal rewards for those achieving the goals of this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="1" id="5cr1" required />
                                        <label for="5cr1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="2" id="5cr2" required />
                                        <label for="5cr2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="3" id="5cr3" required />
                                        <label for="5cr3">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="4" id="5cr4" required />
                                        <label for="5cr4">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="5" id="5cr5" required />
                                        <label for="5cr5">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Leaders have applied specific informal discipline for deficient performance.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="1" id="q31a" required />
                                        <label for="q31a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="2" id="q31b" required />
                                        <label for="q31b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="3" id="q31c" required />
                                        <label for="q31c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="4" id="q31d" required />
                                        <label for="q31d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="5" id="q31e" required />
                                        <label for="q31e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Leaders have communicated natural consequences of non-performance
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="1" id="q32a" required />
                                        <label for="q32a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="2" id="q32b" required />
                                        <label for="q32b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="3" id="q32c" required />
                                        <label for="q32c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="4" id="q32d" required />
                                        <label for="q32d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="5" id="q32e" required />
                                        <label for="q32e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Sponsor’s performance is measured for the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="1" id="q33a" required />
                                        <label for="q33a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="2" id="q33b" required />
                                        <label for="q33b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="3" id="q33c" required />
                                        <label for="q33c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="4" id="q33d" required />
                                        <label for="q33d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="5" id="q33e" required />
                                        <label for="q33e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Sponsor’s performance for the change/project is tied directly to their performance measurement (objectives, goals, etc.) system.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="1" id="q34a" required />
                                        <label for="q34a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="2" id="q34b" required />
                                        <label for="q34b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="3" id="q34c" required />
                                        <label for="q34c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="4" id="q34d" required />
                                        <label for="q34d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="5" id="q34e" required />
                                        <label for="q34e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Sponsors possess a high degree of trust and credibility with the organization.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="1" id="q35a" required />
                                        <label for="q35a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="2" id="q35b" required />
                                        <label for="q35b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="3" id="q35c" required />
                                        <label for="q35c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="4" id="q35d" required />
                                        <label for="q35d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="5" id="q35e" required />
                                        <label for="q35e">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Determine Change/project Approach</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        People involved show high degree of alignment and ownership.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="1" id="q36a" required />
                                        <label for="q36a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="2" id="q36b" required />
                                        <label for="q36b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="3" id="q36c" required />
                                        <label for="q36c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="4" id="q36d" required />
                                        <label for="q36d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="5" id="q36e" required />
                                        <label for="q36e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We are building commitment versus generating compliance to the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="1" id="q37a" required />
                                        <label for="q37a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="2" id="q37b" required />
                                        <label for="q37b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="3" id="q37c" required />
                                        <label for="q37c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="4" id="q37d" required />
                                        <label for="q37d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="5" id="q37e" required />
                                        <label for="q37e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We are focusing on speed and accuracy in implementing the project/change
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="1" id="q38a" required />
                                        <label for="q38a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="2" id="q38b" required />
                                        <label for="q38b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="3" id="q38c" required />
                                        <label for="q38c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="4" id="q38d" required />
                                        <label for="q38d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="5" id="q38e" required />
                                        <label for="q38e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We continuously monitor the change in commitment for the project/change.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="1" id="q39a" required />
                                        <label for="q39a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="2" id="q39b" required />
                                        <label for="q39b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="3" id="q39c" required />
                                        <label for="q39c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="4" id="q39d" required />
                                        <label for="q39d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="5" id="q39e" required />
                                        <label for="q39e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We can deal with the inevitable resistance prior to and during change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="1" id="q40a" required />
                                        <label for="q40a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="2" id="q40b" required />
                                        <label for="q40b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="3" id="q40c" required />
                                        <label for="q40c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="4" id="q40d" required />
                                        <label for="q40d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="5" id="q40e" required />
                                        <label for="q40e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        The motivation to change/project (at the personal level) is stronger than the motivation to stay where we are.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="1" id="q41a" required />
                                        <label for="q41a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="2" id="q41b" required />
                                        <label for="q41b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="3" id="q41c" required />
                                        <label for="q41c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="4" id="q41d" required />
                                        <label for="q41d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="5" id="q41e" required />
                                        <label for="q41e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Both the human and business aspects has been integrated into this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="1" id="q42a" required />
                                        <label for="q42a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="2" id="q42b" required />
                                        <label for="q42b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="3" id="q42c" required />
                                        <label for="q42c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="4" id="q42d" required />
                                        <label for="q42d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="5" id="q42e" required />
                                        <label for="q42e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We realize and are prepared for performance/productivity/morale to go down before it improves.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="1" id="q43a" required />
                                        <label for="q43a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="2" id="q43b" required />
                                        <label for="q43b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="3" id="q43c" required />
                                        <label for="q43c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="4" id="q43d" required />
                                        <label for="q43d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="5" id="q43e" required />
                                        <label for="q43e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have identified the minimum number of core behaviors to leverage change/acceleration.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="1" id="q44a" required />
                                        <label for="q44a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="2" id="q44b" required />
                                        <label for="q44b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="3" id="q44c" required />
                                        <label for="q44c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="4" id="q44d" required />
                                        <label for="q44d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="5" id="q44e" required />
                                        <label for="q44e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have provided adequate structure (communication, reinforcement, etc.) do that the organization does not feel out of control.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="1" id="q45a" required />
                                        <label for="q45a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="2" id="q45b" required />
                                        <label for="q45b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="3" id="q45c" required />
                                        <label for="q45c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="4" id="q45d" required />
                                        <label for="q45d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="5" id="q45e" required />
                                        <label for="q45e">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>


                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Develop Target Readiness</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        Those impacted by this change/project know how this change/project will specifically affect them.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="1" id="q46a" required />
                                        <label for="q46a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="2" id="q46b" required />
                                        <label for="q46b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="3" id="q46c" required />
                                        <label for="q46c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="4" id="q46d" required />
                                        <label for="q46d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="5" id="q46e" required />
                                        <label for="q46e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Those impacted by this change/project know what is in it for them.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="1" id="q47a" required />
                                        <label for="q47a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="2" id="q47b" required />
                                        <label for="q47b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="3" id="q47c" required />
                                        <label for="q47c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="4" id="q47d" required />
                                        <label for="q47d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="5" id="q47e" required />
                                        <label for="q47e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We encourage people to voice their resistance our organization.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="1" id="q48a" required />
                                        <label for="q48a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="2" id="q48b" required />
                                        <label for="q48b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="3" id="q48c" required />
                                        <label for="q48c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="4" id="q48d" required />
                                        <label for="q48d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="5" id="q48e" required />
                                        <label for="q48e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        It is safe to surface your concerns or resistance in this organization.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="1" id="q49a" required />
                                        <label for="q49a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="2" id="q49b" required />
                                        <label for="q49b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="3" id="q49c" required />
                                        <label for="q49c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="4" id="q49d" required />
                                        <label for="q49d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="5" id="q49e" required />
                                        <label for="q49e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have provided multiple opportunities for those impacted to express their concerns about this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="1" id="q50a" required />
                                        <label for="q50a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="2" id="q50b" required />
                                        <label for="q50b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="3" id="q50c" required />
                                        <label for="q50c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="4" id="q50d" required />
                                        <label for="q50d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="5" id="q50e" required />
                                        <label for="q50e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        What concerns have been expresses, we have taken active steps to manage that resistance.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="1" id="q51a" required />
                                        <label for="q51a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="2" id="q51b" required />
                                        <label for="q51b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="3" id="q51c" required />
                                        <label for="q51c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="4" id="q51d" required />
                                        <label for="q51d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="5" id="q51e" required />
                                        <label for="q51e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Sponsors and Agents are skilled in managing resistance.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="1" id="q52a" required />
                                        <label for="q52a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="2" id="q52b" required />
                                        <label for="q52b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="3" id="q52c" required />
                                        <label for="q52c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="4" id="q52d" required />
                                        <label for="q52d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="5" id="q52e" required />
                                        <label for="q52e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have developed a problem-solving climate to implement this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="1" id="q53a" required />
                                        <label for="q53a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="2" id="q53b" required />
                                        <label for="q53b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="3" id="q53c" required />
                                        <label for="q53c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="4" id="q53d" required />
                                        <label for="q53d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="5" id="q53e" required />
                                        <label for="q53e">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Build Communication Plan</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        We have created and communicated the business case for change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="1" id="q54a" required />
                                        <label for="q54a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="2" id="q54b" required />
                                        <label for="q54b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="3" id="q54c" required />
                                        <label for="q54c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="4" id="q54d" required />
                                        <label for="q54d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="5" id="q54e" required />
                                        <label for="q54e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have communicated in language specific to each Target group's FOR.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="1" id="q55a" required />
                                        <label for="q55a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="2" id="q55b" required />
                                        <label for="q55b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="3" id="q55c" required />
                                        <label for="q55c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="4" id="q55d" required />
                                        <label for="q55d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="5" id="q55e" required />
                                        <label for="q55e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have communicated in a manner that allows feedback and changes.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q56" value="1" id="q56a" required />
                                        <label for="q56a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q56" value="2" id="q56b" required />
                                        <label for="q56b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q56" value="3" id="q56c" required />
                                        <label for="q56c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q56" value="4" id="q56d" required />
                                        <label for="q56d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q56" value="5" id="q56e" required />
                                        <label for="q56e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We are using non-traditional methods to communicate this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q57" value="1" id="q57a" required />
                                        <label for="q57a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q57" value="2" id="q57b" required />
                                        <label for="q57b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q57" value="3" id="q57c" required />
                                        <label for="q57c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q57" value="4" id="q57d" required />
                                        <label for="q57d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q57" value="5" id="q57e" required />
                                        <label for="q57e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Each communication method or opportunity has a specific feedback loop attached to it.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q58" value="1" id="q58a" required />
                                        <label for="q58a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q58" value="2" id="q58b" required />
                                        <label for="q58b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q58" value="3" id="q58c" required />
                                        <label for="q58c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q58" value="4" id="q58d" required />
                                        <label for="q58d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q58" value="5" id="q58e" required />
                                        <label for="q58e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We dashboard how we are tracking on the change/project milestones
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q59" value="1" id="q59a" required />
                                        <label for="q59a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q59" value="2" id="q59b" required />
                                        <label for="q59b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q59" value="3" id="q59c" required />
                                        <label for="q59c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q59" value="4" id="q59d" required />
                                        <label for="q59d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q59" value="5" id="q59e" required />
                                        <label for="q59e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Those impacted by the change/project know where to go for more information.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q60" value="1" id="q60a" required />
                                        <label for="q60a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q60" value="2" id="q60b" required />
                                        <label for="q60b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q60" value="3" id="q60c" required />
                                        <label for="q60c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q60" value="4" id="q60d" required />
                                        <label for="q60d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q60" value="5" id="q60e" required />
                                        <label for="q60e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We constantly check for understanding.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q61" value="1" id="q61a" required />
                                        <label for="q61a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q61" value="2" id="q61b" required />
                                        <label for="q61b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q61" value="3" id="q61c" required />
                                        <label for="q61c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q61" value="4" id="q61d" required />
                                        <label for="q61d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q61" value="5" id="q61e" required />
                                        <label for="q61e">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Develop Reinforcement Strategy</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        We have positively reinforced people who take risks.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q62" value="1" id="q62a" required />
                                        <label for="q62a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q62" value="2" id="q62b" required />
                                        <label for="q62b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q62" value="3" id="q62c" required />
                                        <label for="q62c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q62" value="4" id="q62d" required />
                                        <label for="q62d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q62" value="5" id="q62e" required />
                                        <label for="q62e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have decreased or eliminated the rewards for performing the old way.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q63" value="1" id="q63a" required />
                                        <label for="q63a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q63" value="2" id="q63b" required />
                                        <label for="q63b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q63" value="3" id="q63c" required />
                                        <label for="q63c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q63" value="4" id="q63d" required />
                                        <label for="q63d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q63" value="5" id="q63e" required />
                                        <label for="q63e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have applied immediate negative consequences for performing the old way.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q64" value="1" id="q64a" required />
                                        <label for="q64a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q64" value="2" id="q64b" required />
                                        <label for="q64b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q64" value="3" id="q64c" required />
                                        <label for="q64c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q64" value="4" id="q64d" required />
                                        <label for="q64d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q64" value="5" id="q64e" required />
                                        <label for="q64e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have made the old way more difficult to do, or difficult to access.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q65" value="1" id="q65a" required />
                                        <label for="q65a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q65" value="2" id="q65b" required />
                                        <label for="q65b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q65" value="3" id="q65c" required />
                                        <label for="q65c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q65" value="4" id="q65d" required />
                                        <label for="q65d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q65" value="5" id="q65e" required />
                                        <label for="q65e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have applied specific immediate positive rewards for those attempting or achieving the new way.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q66" value="1" id="q66a" required />
                                        <label for="q66a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q66" value="2" id="q66b" required />
                                        <label for="q66b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q66" value="3" id="q66c" required />
                                        <label for="q66c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q66" value="4" id="q66d" required />
                                        <label for="q66d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q66" value="5" id="q66e" required />
                                        <label for="q66e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have eliminated any negative sanctions or consequences for performing the new way.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q67" value="1" id="q67a" required />
                                        <label for="q67a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q67" value="2" id="q67b" required />
                                        <label for="q67b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q67" value="3" id="q67c" required />
                                        <label for="q67c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q67" value="4" id="q67d" required />
                                        <label for="q67d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q67" value="5" id="q67e" required />
                                        <label for="q67e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have made the new way easier to access or perform.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q68" value="1" id="q68a" required />
                                        <label for="q68a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q68" value="2" id="q68b" required />
                                        <label for="q68b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q68" value="3" id="q68c" required />
                                        <label for="q68c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q68" value="4" id="q68d" required />
                                        <label for="q68d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q68" value="5" id="q68e" required />
                                        <label for="q68e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        The change/project is included in Sponsors', Agents,’ and Targets' short-term objectives.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q69" value="1" id="q69a" required />
                                        <label for="q69a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q69" value="2" id="q69b" required />
                                        <label for="q69b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q69" value="3" id="q69c" required />
                                        <label for="q69c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q69" value="4" id="q69d" required />
                                        <label for="q69d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q69" value="5" id="q69e" required />
                                        <label for="q69e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        The goal of this change/project has been included in long term performance management for Sponsors, Agents, Targets.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q70" value="1" id="q70a" required />
                                        <label for="q70a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q70" value="2" id="q70b" required />
                                        <label for="q70b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q70" value="3" id="q70c" required />
                                        <label for="q70c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q70" value="4" id="q70d" required />
                                        <label for="q70d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q70" value="5" id="q70e" required />
                                        <label for="q70e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        When attempting the new way, people are not punished for mistakes
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q71" value="1" id="q71a" required />
                                        <label for="q71a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q71" value="2" id="q71b" required />
                                        <label for="q71b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q71" value="3" id="q71c" required />
                                        <label for="q71c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q71" value="4" id="q71d" required />
                                        <label for="q71d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q71" value="5" id="q71e" required />
                                        <label for="q71e">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Cultural Fit</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        The vision and mission of the organization have driven this change/project
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q72" value="1" id="q72a" required />
                                        <label for="q72a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q72" value="2" id="q72b" required />
                                        <label for="q72b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q72" value="3" id="q72c" required />
                                        <label for="q72c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q72" value="4" id="q72d" required />
                                        <label for="q72d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q72" value="5" id="q72e" required />
                                        <label for="q72e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        The change/project is consistent with our organization's values.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q73" value="1" id="q73a" required />
                                        <label for="q73a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q73" value="2" id="q73b" required />
                                        <label for="q73b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q73" value="3" id="q73c" required />
                                        <label for="q73c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q73" value="4" id="q73d" required />
                                        <label for="q73d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q73" value="5" id="q73e" required />
                                        <label for="q73e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        This change/project is consistent with the behavior pattern of this organization.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q74" value="1" id="q74a" required />
                                        <label for="q74a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q74" value="2" id="q74b" required />
                                        <label for="q74b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q74" value="3" id="q74c" required />
                                        <label for="q74c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q74" value="4" id="q74d" required />
                                        <label for="q74d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q74" value="5" id="q74e" required />
                                        <label for="q74e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        This change/project does not conflict with the organization's unwritten rules (assumptions, "the way we do things")
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q75" value="1" id="q75a" required />
                                        <label for="q75a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q75" value="2" id="q75b" required />
                                        <label for="q75b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q75" value="3" id="q75c" required />
                                        <label for="q75c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q75" value="4" id="q75d" required />
                                        <label for="q75d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q75" value="5" id="q75e" required />
                                        <label for="q75e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        We have modified the change/project to specific subcultures in the organization.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q76" value="1" id="q76a" required />
                                        <label for="q76a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q76" value="2" id="q76b" required />
                                        <label for="q76b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q76" value="3" id="q76c" required />
                                        <label for="q76c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q76" value="4" id="q76d" required />
                                        <label for="q76d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q76" value="5" id="q76e" required />
                                        <label for="q76e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Politics of the organization do not impact this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q77" value="1" id="q77a" required />
                                        <label for="q77a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q77" value="2" id="q77b" required />
                                        <label for="q77b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q77" value="3" id="q77c" required />
                                        <label for="q77c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q77" value="4" id="q77d" required />
                                        <label for="q77d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q77" value="5" id="q77e" required />
                                        <label for="q77e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Departments/divisions are reinforced jointly for achieving the goals of this change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q78" value="1" id="q78a" required />
                                        <label for="q78a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q78" value="2" id="q78b" required />
                                        <label for="q78b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q78" value="3" id="q78c" required />
                                        <label for="q78c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q78" value="4" id="q78d" required />
                                        <label for="q78d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q78" value="5" id="q78e" required />
                                        <label for="q78e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        This is a high trust organization.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q79" value="1" id="q79a" required />
                                        <label for="q79a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q79" value="2" id="q79b" required />
                                        <label for="q79b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q79" value="3" id="q79c" required />
                                        <label for="q79c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q79" value="4" id="q79d" required />
                                        <label for="q79d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q79" value="5" id="q79e" required />
                                        <label for="q79e">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Involvement</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        People impacted by this change/project originally surfaced the situation requiring change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q80" value="1" id="q80a" required />
                                        <label for="q80a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q80" value="2" id="q80b" required />
                                        <label for="q80b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q80" value="3" id="q80c" required />
                                        <label for="q80c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q80" value="4" id="q80d" required />
                                        <label for="q80d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q80" value="5" id="q80e" required />
                                        <label for="q80e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        People impacted by this change/project feel they are in control of the change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q81" value="1" id="q81a" required />
                                        <label for="q81a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q81" value="2" id="q81b" required />
                                        <label for="q81b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q81" value="3" id="q81c" required />
                                        <label for="q81c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q81" value="4" id="q81d" required />
                                        <label for="q81d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q81" value="5" id="q81e" required />
                                        <label for="q81e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        People impacted by this change/project participated in the definition of the problem.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q82" value="1" id="q82a" required />
                                        <label for="q82a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q82" value="2" id="q82b" required />
                                        <label for="q82b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q82" value="3" id="q82c" required />
                                        <label for="q82c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q82" value="4" id="q82d" required />
                                        <label for="q82d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q82" value="5" id="q82e" required />
                                        <label for="q82e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        People impacted by this change/project participated in diagnosing and defining the current state.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q83" value="1" id="q83a" required />
                                        <label for="q83a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q83" value="2" id="q83b" required />
                                        <label for="q83b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q83" value="3" id="q83c" required />
                                        <label for="q83c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q83" value="4" id="q83d" required />
                                        <label for="q83d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q83" value="5" id="q83e" required />
                                        <label for="q83e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Targets participated in designing the change/project (what).
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q84" value="1" id="q84a" required />
                                        <label for="q84a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q84" value="2" id="q84b" required />
                                        <label for="q84b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q84" value="3" id="q84c" required />
                                        <label for="q84c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q84" value="4" id="q84d" required />
                                        <label for="q84d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q84" value="5" id="q84e" required />
                                        <label for="q84e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Targets have been involved in planning the change/project (how).
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q85" value="1" id="q85a" required />
                                        <label for="q85a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q85" value="2" id="q85b" required />
                                        <label for="q85b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q85" value="3" id="q85c" required />
                                        <label for="q85c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q85" value="4" id="q85d" required />
                                        <label for="q85d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q85" value="5" id="q85e" required />
                                        <label for="q85e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Targets have been involved in the actual change/project.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q86" value="1" id="q86a" required />
                                        <label for="q86a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q86" value="2" id="q86b" required />
                                        <label for="q86b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q86" value="3" id="q86c" required />
                                        <label for="q86c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q86" value="4" id="q86d" required />
                                        <label for="q86d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q86" value="5" id="q86e" required />
                                        <label for="q86e">Strongly Agree</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                        Targets are actively monitoring process.
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q87" value="1" id="q87a" required />
                                        <label for="q87a">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q87" value="2" id="q87b" required />
                                        <label for="q87b">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q87" value="3" id="q87c" required />
                                        <label for="q87c">Neutral</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q87" value="4" id="q87d" required />
                                        <label for="q87d">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q87" value="5" id="q87e" required />
                                        <label for="q87e">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className='fcol1 lastinp ptt-20'>
                                    <div className='row inpuut'>                                        
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>                                      

                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="text" name="organization" placeholder="Organization*" required />
                                        </div>

                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="text" name="pname" placeholder="Transformation Name/ Project Name*" required />
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <label>Project Start Date*</label>
                                            <input className='form-control' type="date" name="startd" placeholder="Start Date*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <label>Completion Date*</label>
                                            <input className='form-control' type="date" name="completed" placeholder="Completion Date*" required />
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