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



        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const organization = event.target.organization.value;
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-')



        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://byldblogs.vercel.app/api/training-assessment');
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
            '&name=' + name +
            '&email=' + email +
            '&phone=' + phone +
            '&organization=' + organization +
            '&newnameurl=' + newnameurl
        );

        xhr.onreadystatechange = function () {

            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);

                document.getElementById("response").innerHTML = data.message;

                if (data.status == 0) {
                    var xhttp = xhr;
                    xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/153/feedback');
                    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                    var Assessment = "Test Assessment"
                    xhttp.send("name=" + event.target.name.value +
                        '&email=' + email +
                        '&phone=' + phone +
                        '&organization=' + organization +
                        '&assessment=' + Assessment)

                    window.setTimeout(function () {
                        window.location.href = `/dtci/tna/${newnameurl}`
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
                <title>Training Need Analysis by Key Stakeholder | BYLD Group</title>
                <meta name="description" content="Circle the number that best represents the extent to which you do the following" />
            </Head>

            <section className='assesmentbannnerbg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className='cacoh'>Training Need Analysis by Key Stakeholder</h2>
                            <p>Select the number that best represents the extent to which you do the following (Use the line chart below as a guide.):</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pbb-40'>
                <div className='container'>
                    <form onSubmit={submitF}>
                        <div className='row radiobnc'>
                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>Leadership</h3>
                                </div>
                            </div>
                            <div className='col-sm-12 mradio'>
                                <div className='fcol1'>
                                    <h2>
                                    Initiative : Leaders in our organization identify opportunities or problems and act accordingly.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="1" id="q1a" required />
                                        <label for="q1a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="2" id="q1b" required />
                                        <label for="q1b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="3" id="q1c" required />
                                        <label for="q1c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="4" id="q1d" required />
                                        <label for="q1d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="5" id="q1e" required />
                                        <label for="q1e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="6" id="q1f" required />
                                        <label for="q1f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="7" id="q1g" required />
                                        <label for="q1g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="8" id="q1h" required />
                                        <label for="q1h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="9" id="q1i" required />
                                        <label for="q1i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="10" id="q1j" required />
                                        <label for="q1j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Decisiveness: People in our organization make well-considered decisions using effective decision-making techniques
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="1" id="q2a" required />
                                        <label for="q2a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="2" id="q2b" required />
                                        <label for="q2b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="3" id="q2c" required />
                                        <label for="q2c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="4" id="q2d" required />
                                        <label for="q2d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="5" id="q2e" required />
                                        <label for="q2e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="6" id="q2f" required />
                                        <label for="q2f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="7" id="q2g" required />
                                        <label for="q2g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="8" id="q2h" required />
                                        <label for="q2h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="9" id="q2i" required />
                                        <label for="q2i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="10" id="q2j" required />
                                        <label for="q2j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Lead courageously: People in our organization demonstrate courage by addressing issues clearly.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="1" id="q3a" required />
                                        <label for="q3a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="2" id="q3b" required />
                                        <label for="q3b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="3" id="q3c" required />
                                        <label for="q3c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="4" id="q3d" required />
                                        <label for="q3d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="5" id="q3e" required />
                                        <label for="q3e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="6" id="q3f" required />
                                        <label for="q3f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="7" id="q3g" required />
                                        <label for="q3g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="8" id="q3h" required />
                                        <label for="q3h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="9" id="q3i" required />
                                        <label for="q3i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="10" id="q3j" required />
                                        <label for="q3j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Responsibility: Leaders in the organization take responsibility for accomplishing work goals within accepted timeframes.
                                    </h2>

                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="1" id="q4a" required />
                                        <label for="q4a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="2" id="q4b" required />
                                        <label for="q4b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="3" id="q4c" required />
                                        <label for="q4c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="4" id="q4d" required />
                                        <label for="q4d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="5" id="q4e" required />
                                        <label for="q4e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="6" id="q4f" required />
                                        <label for="q4f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="7" id="q4g" required />
                                        <label for="q4g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="8" id="q4h" required />
                                        <label for="q4h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="9" id="q4i" required />
                                        <label for="q4i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="10" id="q4j" required />
                                        <label for="q4j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Risk willingness: Leaders in the organization do not hold back in the face of uncertainties.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="1" id="q5a" required />
                                        <label for="q5a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="2" id="q5b" required />
                                        <label for="q5b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="3" id="q5c" required />
                                        <label for="q5c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="4" id="q5d" required />
                                        <label for="q5d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="5" id="q5e" required />
                                        <label for="q5e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="6" id="q5f" required />
                                        <label for="q5f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="7" id="q5g" required />
                                        <label for="q5g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="8" id="q5h" required />
                                        <label for="q5h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="9" id="q5i" required />
                                        <label for="q5i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="10" id="q5j" required />
                                        <label for="q5j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Coaching and developing: People in the organization guide, motivate and inspire staff in line with organizational objectives.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="1" id="q6a" required />
                                        <label for="q6a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="2" id="q6b" required />
                                        <label for="q6b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="3" id="q6c" required />
                                        <label for="q6c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="4" id="q6d" required />
                                        <label for="q6d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="5" id="q6e" required />
                                        <label for="q6e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="6" id="q6f" required />
                                        <label for="q6f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="7" id="q6g" required />
                                        <label for="q6g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="8" id="q6h" required />
                                        <label for="q6h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="9" id="q6i" required />
                                        <label for="q6i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="10" id="q6j" required />
                                        <label for="q6j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Empowerment: People in our organization instill a sense of trust and responsibility among employees.
                                    </h2>

                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="1" id="q7a" required />
                                        <label for="q7a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="2" id="q7b" required />
                                        <label for="q7b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="3" id="q7c" required />
                                        <label for="q7c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="4" id="q7d" required />
                                        <label for="q7d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="5" id="q7e" required />
                                        <label for="q7e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="6" id="q7f" required />
                                        <label for="q7f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="7" id="q7g" required />
                                        <label for="q7g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="8" id="q7h" required />
                                        <label for="q7h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="9" id="q7i" required />
                                        <label for="q7i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="10" id="q7j" required />
                                        <label for="q7j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Leadership: Leaders in our organization direct and steer employees in performing their tasks and duties to achieve goals
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="1" id="q8a" required />
                                        <label for="q8a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="2" id="q8b" required />
                                        <label for="q8b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="3" id="q8c" required />
                                        <label for="q8c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="4" id="q8d" required />
                                        <label for="q8d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="5" id="q8e" required />
                                        <label for="q8e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="6" id="q8f" required />
                                        <label for="q8f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="7" id="q8g" required />
                                        <label for="q8g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="8" id="q8h" required />
                                        <label for="q8h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="9" id="q8i" required />
                                        <label for="q8i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="10" id="q8j" required />
                                        <label for="q8j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                    Managing objectives: Leaders in our organization apply core management skills, tools, and techniques to deliver results;
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="1" id="q9a" required />
                                        <label for="q9a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="2" id="q9b" required />
                                        <label for="q9b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="3" id="q9c" required />
                                        <label for="q9c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="4" id="q9d" required />
                                        <label for="q9d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="5" id="q9e" required />
                                        <label for="q9e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="6" id="q9f" required />
                                        <label for="q9f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="7" id="q9g" required />
                                        <label for="q9g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="8" id="q9h" required />
                                        <label for="q9h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="9" id="q9i" required />
                                        <label for="q9i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="10" id="q9j" required />
                                        <label for="q9j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Managing processes: Leaders in our organization analyze and improve organizational processes.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="1" id="q10a" required />
                                        <label for="q10a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="2" id="q10b" required />
                                        <label for="q10b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="3" id="q10c" required />
                                        <label for="q10c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="4" id="q10d" required />
                                        <label for="q10d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="5" id="q10e" required />
                                        <label for="q10e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="6" id="q10f" required />
                                        <label for="q10f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="7" id="q10g" required />
                                        <label for="q10g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="8" id="q10h" required />
                                        <label for="q10h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="9" id="q10i" required />
                                        <label for="q10i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="10" id="q10j" required />
                                        <label for="q10j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Managing progress: Leaders in our organization install and execute procedures to monitor the progression of work and tasks.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="1" id="q11a" required />
                                        <label for="q11a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="2" id="q11b" required />
                                        <label for="q11b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="3" id="q11c" required />
                                        <label for="q11c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="4" id="q11d" required />
                                        <label for="q11d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="5" id="q11e" required />
                                        <label for="q11e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="6" id="q11f" required />
                                        <label for="q11f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="7" id="q11g" required />
                                        <label for="q11g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="8" id="q11h" required />
                                        <label for="q11h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="9" id="q11i" required />
                                        <label for="q11i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="10" id="q11j" required />
                                        <label for="q11j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='ccccf'>
                                    <div className='fh3'>
                                        <h3>Interaction</h3>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Empathy: People in our organization recognize and identify with the feelings and needs of others
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="1" id="q12a" required />
                                        <label for="q12a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="2" id="q12b" required />
                                        <label for="q12b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="3" id="q12c" required />
                                        <label for="q12c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="4" id="q12d" required />
                                        <label for="q12d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="5" id="q12e" required />
                                        <label for="q12e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="6" id="q12f" required />
                                        <label for="q12f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="7" id="q12g" required />
                                        <label for="q12g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="8" id="q12h" required />
                                        <label for="q12h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="9" id="q12i" required />
                                        <label for="q12i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="10" id="q12j" required />
                                        <label for="q12j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Listening:  People in our organization possess the ability to glean information from verbal announcements; probes: responding to reactions.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="1" id="q13a" required />
                                        <label for="q13a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="2" id="q13b" required />
                                        <label for="q13b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="3" id="q13c" required />
                                        <label for="q13c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="4" id="q13d" required />
                                        <label for="q13d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="5" id="q13e" required />
                                        <label for="q13e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="6" id="q13f" required />
                                        <label for="q13f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="7" id="q13g" required />
                                        <label for="q13g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="8" id="q13h" required />
                                        <label for="q13h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="9" id="q13i" required />
                                        <label for="q13i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="10" id="q13j" required />
                                        <label for="q13j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Sociability: People in our organization are at ease in the company of others.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="1" id="q14a" required />
                                        <label for="q14a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="2" id="q14b" required />
                                        <label for="q14b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="3" id="q14c" required />
                                        <label for="q14c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="4" id="q14d" required />
                                        <label for="q14d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="5" id="q14e" required />
                                        <label for="q14e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="6" id="q14f" required />
                                        <label for="q14f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="7" id="q14g" required />
                                        <label for="q14g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="8" id="q14h" required />
                                        <label for="q14h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="9" id="q14i" required />
                                        <label for="q14i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="10" id="q14j" required />
                                        <label for="q14j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Teamwork: People in our organization work effectively and productively together and make a positive contribution to the common goal.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="1" id="q15a" required />
                                        <label for="q15a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="2" id="q15b" required />
                                        <label for="q15b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="3" id="q15c" required />
                                        <label for="q15c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="4" id="q15d" required />
                                        <label for="q15d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="5" id="q15e" required />
                                        <label for="q15e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="6" id="q15f" required />
                                        <label for="q15f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="7" id="q15g" required />
                                        <label for="q15g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="8" id="q15h" required />
                                        <label for="q15h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="9" id="q15i" required />
                                        <label for="q15i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="10" id="q15j" required />
                                        <label for="q15j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Building trust: People know how to gain and maintain trust from others through consistent behavior.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="1" id="q16a" required />
                                        <label for="q16a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="2" id="q16b" required />
                                        <label for="q16b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="3" id="q16c" required />
                                        <label for="q16c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="4" id="q16d" required />
                                        <label for="q16d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="5" id="q16e" required />
                                        <label for="q16e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="6" id="q16f" required />
                                        <label for="q16f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="7" id="q16g" required />
                                        <label for="q16g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="8" id="q16h" required />
                                        <label for="q16h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="9" id="q16i" required />
                                        <label for="q16i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="10" id="q16j" required />
                                        <label for="q16j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div> 

                                <div className='fcol1'>
                                    <h2>
                                    Integrity: People in our organization are able to display and build the highest standards of ethical and moral conduct in order to promote confidence and trust.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="1" id="q17a" required />
                                        <label for="q17a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="2" id="q17b" required />
                                        <label for="q17b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="3" id="q17c" required />
                                        <label for="q17c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="4" id="q17d" required />
                                        <label for="q17d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="5" id="q17e" required />
                                        <label for="q17e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="6" id="q17f" required />
                                        <label for="q17f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="7" id="q17g" required />
                                        <label for="q17g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="8" id="q17h" required />
                                        <label for="q17h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="9" id="q17i" required />
                                        <label for="q17i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="10" id="q17j" required />
                                        <label for="q17j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Organizational commitment: People in our organization can easily identify with the culture, goals and values of the organization.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="1" id="q18a" required />
                                        <label for="q18a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="2" id="q18b" required />
                                        <label for="q18b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="3" id="q18c" required />
                                        <label for="q18c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="4" id="q18d" required />
                                        <label for="q18d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="5" id="q18e" required />
                                        <label for="q18e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="6" id="q18f" required />
                                        <label for="q18f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="7" id="q18g" required />
                                        <label for="q18g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="8" id="q18h" required />
                                        <label for="q18h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="9" id="q18i" required />
                                        <label for="q18i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="10" id="q18j" required />
                                        <label for="q18j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                

                                <div className='ccccf'>
                                    <div className='fh3'>
                                        <h3>Communication Skills</h3>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Building relations: People in our organization can easily establish genuine relationships to create networks.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="1" id="q19a" required />
                                        <label for="q19a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="2" id="q19b" required />
                                        <label for="q19b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="3" id="q19c" required />
                                        <label for="q19c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="4" id="q19d" required />
                                        <label for="q19d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="5" id="q19e" required />
                                        <label for="q19e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="6" id="q19f" required />
                                        <label for="q19f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="7" id="q19g" required />
                                        <label for="q19g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="8" id="q19h" required />
                                        <label for="q19h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="9" id="q19i" required />
                                        <label for="q19i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="10" id="q19j" required />
                                        <label for="q19j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Managing conflicts: People in our organization can handle and solve conflicts of interest with a large emotional cargo in a delicate manner.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="1" id="q20a" required />
                                        <label for="q20a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="2" id="q20b" required />
                                        <label for="q20b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="3" id="q20c" required />
                                        <label for="q20c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="4" id="q20d" required />
                                        <label for="q20d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="5" id="q20e" required />
                                        <label for="q20e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="6" id="q20f" required />
                                        <label for="q20f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="7" id="q20g" required />
                                        <label for="q20g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="8" id="q20h" required />
                                        <label for="q20h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="9" id="q20i" required />
                                        <label for="q20i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="10" id="q20j" required />
                                        <label for="q20j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Influencing: People in our organization can influence others to ensure that goals are successfully achieved.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="1" id="q21a" required />
                                        <label for="q21a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="2" id="q21b" required />
                                        <label for="q21b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="3" id="q21c" required />
                                        <label for="q21c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="4" id="q21d" required />
                                        <label for="q21d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="5" id="q21e" required />
                                        <label for="q21e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="6" id="q21f" required />
                                        <label for="q21f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="7" id="q21g" required />
                                        <label for="q21g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="8" id="q21h" required />
                                        <label for="q21h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="9" id="q21i" required />
                                        <label for="q21i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q21" value="10" id="q21j" required />
                                        <label for="q21j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Negotiating: Leaders in our organization have ability of gaining optimal results in situations with conflicting interests.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="1" id="q22a" required />
                                        <label for="q22a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="2" id="q22b" required />
                                        <label for="q22b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="3" id="q22c" required />
                                        <label for="q22c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="4" id="q22d" required />
                                        <label for="q22d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="5" id="q22e" required />
                                        <label for="q22e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="6" id="q22f" required />
                                        <label for="q22f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="7" id="q22g" required />
                                        <label for="q22g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="8" id="q22h" required />
                                        <label for="q22h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="9" id="q22i" required />
                                        <label for="q22i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q22" value="10" id="q22j" required />
                                        <label for="q22j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Persuasiveness: People in our organization have the ability to convince others of own point of view by using appropriate arguments and influencing techniques.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="1" id="q23a" required />
                                        <label for="q23a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="2" id="q23b" required />
                                        <label for="q23b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="3" id="q23c" required />
                                        <label for="q23c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="4" id="q23d" required />
                                        <label for="q23d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="5" id="q23e" required />
                                        <label for="q23e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="6" id="q23f" required />
                                        <label for="q23f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="7" id="q23g" required />
                                        <label for="q23g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="8" id="q23h" required />
                                        <label for="q23h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="9" id="q23i" required />
                                        <label for="q23i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q23" value="10" id="q23j" required />
                                        <label for="q23j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Speaking with impact: Presenting ideas and opinions clearly, in easy-to-understand language, concisely and persuasively so that the message is clearly conveyed.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="1" id="q24a" required />
                                        <label for="q24a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="2" id="q24b" required />
                                        <label for="q24b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="3" id="q24c" required />
                                        <label for="q24c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="4" id="q24d" required />
                                        <label for="q24d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="5" id="q24e" required />
                                        <label for="q24e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="6" id="q24f" required />
                                        <label for="q24f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="7" id="q24g" required />
                                        <label for="q24g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="8" id="q24h" required />
                                        <label for="q24h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="9" id="q24i" required />
                                        <label for="q24i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q24" value="10" id="q24j" required />
                                        <label for="q24j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Communication skills: People in our organization possess the social and communication skills required to maintain contacts in the interest of the company.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="1" id="q25a" required />
                                        <label for="q25a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="2" id="q25b" required />
                                        <label for="q25b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="3" id="q25c" required />
                                        <label for="q25c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="4" id="q25d" required />
                                        <label for="q25d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="5" id="q25e" required />
                                        <label for="q25e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="6" id="q25f" required />
                                        <label for="q25f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="7" id="q25g" required />
                                        <label for="q25g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="8" id="q25h" required />
                                        <label for="q25h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="9" id="q25i" required />
                                        <label for="q25i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q25" value="10" id="q25j" required />
                                        <label for="q25j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Presentation skills: People in our organization have the ability to communicate effectively during (sales) talks by conveying information in a clear, structured and inspiring way.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="1" id="q26a" required />
                                        <label for="q26a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="2" id="q26b" required />
                                        <label for="q26b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="3" id="q26c" required />
                                        <label for="q26c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="4" id="q26d" required />
                                        <label for="q26d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="5" id="q26e" required />
                                        <label for="q26e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="6" id="q26f" required />
                                        <label for="q26f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="7" id="q26g" required />
                                        <label for="q26g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="8" id="q26h" required />
                                        <label for="q26h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="9" id="q26i" required />
                                        <label for="q26i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q26" value="10" id="q26j" required />
                                        <label for="q26j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                
                                <div className='ccccf'>
                                    <div className='fh3'>
                                        <h3>Analytical Skills</h3>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Writing texts: People in our organization have the ability to write texts in a correct and understandable manner in a business context.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="1" id="q27a" required />
                                        <label for="q27a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="2" id="q27b" required />
                                        <label for="q27b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="3" id="q27c" required />
                                        <label for="q27c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="4" id="q27d" required />
                                        <label for="q27d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="5" id="q27e" required />
                                        <label for="q27e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="6" id="q27f" required />
                                        <label for="q27f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="7" id="q27g" required />
                                        <label for="q27g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="8" id="q27h" required />
                                        <label for="q27h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="9" id="q27i" required />
                                        <label for="q27i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q27" value="10" id="q27j" required />
                                        <label for="q27j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Analytical thinking: People in our organization have the ability to analyze, investigate and interpret data, issues and situations.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="1" id="q28a" required />
                                        <label for="q28a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="2" id="q28b" required />
                                        <label for="q28b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="3" id="q28c" required />
                                        <label for="q28c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="4" id="q28d" required />
                                        <label for="q28d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="5" id="q28e" required />
                                        <label for="q28e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="6" id="q28f" required />
                                        <label for="q28f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="7" id="q28g" required />
                                        <label for="q28g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="8" id="q28h" required />
                                        <label for="q28h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="9" id="q28i" required />
                                        <label for="q28i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q28" value="10" id="q28j" required />
                                        <label for="q28j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Problem handling; People in our organization collate, analyze and weigh up information with the purpose of identifying and establishing patterns and connections to solve problems.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="1" id="q29a" required />
                                        <label for="q29a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="2" id="q29b" required />
                                        <label for="q29b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="3" id="q29c" required />
                                        <label for="q29c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="4" id="q29d" required />
                                        <label for="q29d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="5" id="q29e" required />
                                        <label for="q29e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="6" id="q29f" required />
                                        <label for="q29f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="7" id="q29g" required />
                                        <label for="q29g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="8" id="q29h" required />
                                        <label for="q29h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="9" id="q29i" required />
                                        <label for="q29i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q29" value="10" id="q29j" required />
                                        <label for="q29j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>


                                <div className='ccccf'>
                                    <div className='fh3'>
                                        <h3>Improvement</h3>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                    Learning ability: People in our organization have the ability to learn and comprehend; to understand and profit from experience. Ability to learn and comprehend; to understand and profit from experience.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="1" id="q30a" required />
                                        <label for="q30a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="2" id="q30b" required />
                                        <label for="q30b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="3" id="q30c" required />
                                        <label for="q30c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="4" id="q30d" required />
                                        <label for="q30d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="5" id="q30e" required />
                                        <label for="q30e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="6" id="q30f" required />
                                        <label for="q30f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="7" id="q30g" required />
                                        <label for="q30g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="8" id="q30h" required />
                                        <label for="q30h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="9" id="q30i" required />
                                        <label for="q30i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q30" value="10" id="q30j" required />
                                        <label for="q30j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Creativity: People in our organization have the ability to devise original and innovative solutions to job-specific problems.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="1" id="q31a" required />
                                        <label for="q31a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="2" id="q31b" required />
                                        <label for="q31b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="3" id="q31c" required />
                                        <label for="q31c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="4" id="q31d" required />
                                        <label for="q31d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="5" id="q31e" required />
                                        <label for="q31e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="6" id="q31f" required />
                                        <label for="q31f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="7" id="q31g" required />
                                        <label for="q31g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="8" id="q31h" required />
                                        <label for="q31h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="9" id="q31i" required />
                                        <label for="q31i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q31" value="10" id="q31j" required />
                                        <label for="q31j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Innovating: People in our organization look always and everywhere for improvements.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="1" id="q32a" required />
                                        <label for="q32a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="2" id="q32b" required />
                                        <label for="q32b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="3" id="q32c" required />
                                        <label for="q32c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="4" id="q32d" required />
                                        <label for="q32d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="5" id="q32e" required />
                                        <label for="q32e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="6" id="q32f" required />
                                        <label for="q32f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="7" id="q32g" required />
                                        <label for="q32g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="8" id="q32h" required />
                                        <label for="q32h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="9" id="q32i" required />
                                        <label for="q32i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q32" value="10" id="q32j" required />
                                        <label for="q32j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Strategic thinking: People in our organization have the ability to set long-term goals by placing relevant aspects in a broader context and translating these into a strategic planning framework.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="1" id="q33a" required />
                                        <label for="q33a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="2" id="q33b" required />
                                        <label for="q33b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="3" id="q33c" required />
                                        <label for="q33c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="4" id="q33d" required />
                                        <label for="q33d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="5" id="q33e" required />
                                        <label for="q33e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="6" id="q33f" required />
                                        <label for="q33f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="7" id="q33g" required />
                                        <label for="q33g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="8" id="q33h" required />
                                        <label for="q33h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="9" id="q33i" required />
                                        <label for="q33i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q33" value="10" id="330j" required />
                                        <label for="q33j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Visionary thinking: People in our organization have the ability to establish a vision for the future.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="1" id="q34a" required />
                                        <label for="q34a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="2" id="q34b" required />
                                        <label for="q34b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="3" id="q34c" required />
                                        <label for="q34c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="4" id="q34d" required />
                                        <label for="q34d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="5" id="q34e" required />
                                        <label for="q34e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="6" id="q34f" required />
                                        <label for="q34f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="7" id="q34g" required />
                                        <label for="q34g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="8" id="q34h" required />
                                        <label for="q34h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="9" id="q34i" required />
                                        <label for="q34i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q34" value="10" id="340j" required />
                                        <label for="q34j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='ccccf'>
                                    <div className='fh3'>
                                        <h3>Managing</h3>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                    Attention to detail: People in our organization have the ability to focus on the details, and using this information accurately and effectively.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="1" id="q35a" required />
                                        <label for="q35a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="2" id="q35b" required />
                                        <label for="q35b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="3" id="q35c" required />
                                        <label for="q35c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="4" id="q35d" required />
                                        <label for="q35d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="5" id="q35e" required />
                                        <label for="q35e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="6" id="q35f" required />
                                        <label for="q35f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="7" id="q35g" required />
                                        <label for="q35g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="8" id="q35h" required />
                                        <label for="q35h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="9" id="q35i" required />
                                        <label for="q35i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q35" value="10" id="q35j" required />
                                        <label for="q35j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Making plans: People in our organization have the skills to make, implement and monitor the plans successfully.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="1" id="q36a" required />
                                        <label for="q36a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="2" id="q36b" required />
                                        <label for="q36b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="3" id="q36c" required />
                                        <label for="q36c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="4" id="q36d" required />
                                        <label for="q36d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="5" id="q36e" required />
                                        <label for="q36e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="6" id="q36f" required />
                                        <label for="q36f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="7" id="q36g" required />
                                        <label for="q36g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="8" id="q36h" required />
                                        <label for="q36h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="9" id="q36i" required />
                                        <label for="q36i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q36" value="10" id="q36j" required />
                                        <label for="q36j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Personal effectiveness: People in our organization have the skills  to purposefully organize own work by setting priorities and properly managing time.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="1" id="q37a" required />
                                        <label for="q37a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="2" id="q37b" required />
                                        <label for="q37b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="3" id="q37c" required />
                                        <label for="q37c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="4" id="q37d" required />
                                        <label for="q37d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="5" id="q37e" required />
                                        <label for="q37e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="6" id="q37f" required />
                                        <label for="q37f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="7" id="q37g" required />
                                        <label for="q37g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="8" id="q37h" required />
                                        <label for="q37h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="9" id="q37i" required />
                                        <label for="q37i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q37" value="10" id="q37j" required />
                                        <label for="q37j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Planning and organizing: People in our organization have the ability to apply logical methods and well-ordered procedures to identify and acknowledge priorities, formulate plans and achieve goals.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="1" id="q38a" required />
                                        <label for="q38a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="2" id="q38b" required />
                                        <label for="q38b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="3" id="q38c" required />
                                        <label for="q38c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="4" id="q38d" required />
                                        <label for="q38d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="5" id="q38e" required />
                                        <label for="q38e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="6" id="q38f" required />
                                        <label for="q38f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="7" id="q38g" required />
                                        <label for="q38g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="8" id="q38h" required />
                                        <label for="q38h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="9" id="q38i" required />
                                        <label for="q38i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q38" value="10" id="q38j" required />
                                        <label for="q38j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Customer focus: People in our organization have the pursuit of the highest level of customer service.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="1" id="q39a" required />
                                        <label for="q39a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="2" id="q39b" required />
                                        <label for="q39b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="3" id="q39c" required />
                                        <label for="q39c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="4" id="q39d" required />
                                        <label for="q39d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="5" id="q39e" required />
                                        <label for="q39e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="6" id="q39f" required />
                                        <label for="q39f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="7" id="q39g" required />
                                        <label for="q39g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="8" id="q39h" required />
                                        <label for="q39h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="9" id="q39i" required />
                                        <label for="q39i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q39" value="10" id="q39j" required />
                                        <label for="q39j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Drive for results: People in our organization have the ability to achieve results by focusing on the formulated goals.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="1" id="q40a" required />
                                        <label for="q40a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="2" id="q40b" required />
                                        <label for="q40b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="3" id="q40c" required />
                                        <label for="q40c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="4" id="q40d" required />
                                        <label for="q40d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="5" id="q40e" required />
                                        <label for="q40e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="6" id="q40f" required />
                                        <label for="q40f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="7" id="q40g" required />
                                        <label for="q40g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="8" id="q40h" required />
                                        <label for="q40h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="9" id="q40i" required />
                                        <label for="q40i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q40" value="10" id="q40j" required />
                                        <label for="q40j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Discipline: People in our organization adhere to organizational policies and/or procedures/agreements; seeking confirmation from the appropriate authorities in the event of changes.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="1" id="q41a" required />
                                        <label for="q41a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="2" id="q41b" required />
                                        <label for="q41b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="3" id="q41c" required />
                                        <label for="q41c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="4" id="q41d" required />
                                        <label for="q41d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="5" id="q41e" required />
                                        <label for="q41e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="6" id="q41f" required />
                                        <label for="q41f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="7" id="q41g" required />
                                        <label for="q41g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="8" id="q41h" required />
                                        <label for="q41h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="9" id="q41i" required />
                                        <label for="q41i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q41" value="10" id="q41j" required />
                                        <label for="q41j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>


                                <div className='ccccf'>
                                    <div className='fh3'>
                                        <h3>Flexibility</h3>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                    Adaptability: People in our organization have the ability to continue acting purposefully by adapting to changing environment, tasks, responsibilities and people.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="1" id="q42a" required />
                                        <label for="q42a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="2" id="q42b" required />
                                        <label for="q42b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="3" id="q42c" required />
                                        <label for="q42c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="4" id="q42d" required />
                                        <label for="q42d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="5" id="q42e" required />
                                        <label for="q42e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="6" id="q42f" required />
                                        <label for="q42f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="7" id="q42g" required />
                                        <label for="q42g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="8" id="q42h" required />
                                        <label for="q42h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="9" id="q42i" required />
                                        <label for="q42i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q42" value="10" id="q42j" required />
                                        <label for="q42j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Stress resistance: People in our organization has the ability to remain effective, even in the face of time pressure, setbacks, disappointment, resistance and crises.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="1" id="q43a" required />
                                        <label for="q43a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="2" id="q43b" required />
                                        <label for="q43b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="3" id="q43c" required />
                                        <label for="q43c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="4" id="q43d" required />
                                        <label for="q43d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="5" id="q43e" required />
                                        <label for="q43e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="6" id="q43f" required />
                                        <label for="q43f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="7" id="q43g" required />
                                        <label for="q43g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="8" id="q43h" required />
                                        <label for="q43h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="9" id="q43i" required />
                                        <label for="q43i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q43" value="10" id="q43j" required />
                                        <label for="q43j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='ccccf'>
                                    <div className='fh3'>
                                        <h3>Performance</h3>
                                    </div>
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                    Ambition: People in our organization have the strive to climb the rungs of the organizational ladder; demonstrate behavior that is geared towards creating a successful career; committed to personal development to achieve these goals.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="1" id="q44a" required />
                                        <label for="q44a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="2" id="q44b" required />
                                        <label for="q44b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="3" id="q44c" required />
                                        <label for="q44c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="4" id="q44d" required />
                                        <label for="q44d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="5" id="q44e" required />
                                        <label for="q44e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="6" id="q44f" required />
                                        <label for="q44f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="7" id="q44g" required />
                                        <label for="q44g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="8" id="q44h" required />
                                        <label for="q44h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="9" id="q44i" required />
                                        <label for="q44i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q44" value="10" id="q44j" required />
                                        <label for="q44j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Drive for sales results: People in our organization have the ability to achieve results by focusing on the formulated sales objectives.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="1" id="q45a" required />
                                        <label for="q45a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="2" id="q45b" required />
                                        <label for="q45b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="3" id="q45c" required />
                                        <label for="q45c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="4" id="q45d" required />
                                        <label for="q45d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="5" id="q45e" required />
                                        <label for="q45e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="6" id="q45f" required />
                                        <label for="q45f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="7" id="q45g" required />
                                        <label for="q45g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="8" id="q45h" required />
                                        <label for="q45h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="9" id="q45i" required />
                                        <label for="q45i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q45" value="10" id="q45j" required />
                                        <label for="q45j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Drive for success: People in our organization are geared towards achieving successes.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="1" id="q46a" required />
                                        <label for="q46a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="2" id="q46b" required />
                                        <label for="q46b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="3" id="q46c" required />
                                        <label for="q46c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="4" id="q46d" required />
                                        <label for="q46d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="5" id="q46e" required />
                                        <label for="q46e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="6" id="q46f" required />
                                        <label for="q46f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="7" id="q46g" required />
                                        <label for="q46g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="8" id="q46h" required />
                                        <label for="q46h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="9" id="q46i" required />
                                        <label for="q46i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q46" value="10" id="q46j" required />
                                        <label for="q46j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Energy: People in our organization have the ability to work hard over a longer period of time if the nature of the work necessitates this; hard working; perseverance.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="1" id="q47a" required />
                                        <label for="q47a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="2" id="q47b" required />
                                        <label for="q47b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="3" id="q47c" required />
                                        <label for="q47c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="4" id="q47d" required />
                                        <label for="q47d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="5" id="q47e" required />
                                        <label for="q47e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="6" id="q47f" required />
                                        <label for="q47f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="7" id="q47g" required />
                                        <label for="q47g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="8" id="q47h" required />
                                        <label for="q47h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="9" id="q47i" required />
                                        <label for="q47i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q47" value="10" id="q47j" required />
                                        <label for="q47j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Goal orientation: People in our organization have the ability to determine goals, prioritize, identify required action.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="1" id="q48a" required />
                                        <label for="q48a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="2" id="q48b" required />
                                        <label for="q48b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="3" id="q48c" required />
                                        <label for="q48c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="4" id="q48d" required />
                                        <label for="q48d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="5" id="q48e" required />
                                        <label for="q48e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="6" id="q48f" required />
                                        <label for="q48f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="7" id="q48g" required />
                                        <label for="q48g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="8" id="q48h" required />
                                        <label for="q48h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="9" id="q48i" required />
                                        <label for="q48i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q48" value="10" id="q48j" required />
                                        <label for="q48j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Independence: People in our organization undertakes actions, based more on own convictions than on a desire to please others.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="1" id="q49a" required />
                                        <label for="q49a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="2" id="q49b" required />
                                        <label for="q49b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="3" id="q49c" required />
                                        <label for="q49c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="4" id="q49d" required />
                                        <label for="q49d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="5" id="q49e" required />
                                        <label for="q49e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="6" id="q49f" required />
                                        <label for="q49f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="7" id="q49g" required />
                                        <label for="q49g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="8" id="q49h" required />
                                        <label for="q49h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="9" id="q49i" required />
                                        <label for="q49i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q49" value="10" id="q49j" required />
                                        <label for="q49j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Perseverance: People in our organization do not give up until the goals are achieved.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="1" id="q50a" required />
                                        <label for="q50a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="2" id="q50b" required />
                                        <label for="q50b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="3" id="q50c" required />
                                        <label for="q50c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="4" id="q50d" required />
                                        <label for="q50d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="5" id="q50e" required />
                                        <label for="q50e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="6" id="q50f" required />
                                        <label for="q50f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="7" id="q50g" required />
                                        <label for="q50g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="8" id="q50h" required />
                                        <label for="q50h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="9" id="q50i" required />
                                        <label for="q50i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q50" value="10" id="q50j" required />
                                        <label for="q50j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Self management: People in our organization have the ability to complete tasks without the aid of others.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="1" id="q51a" required />
                                        <label for="q51a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="2" id="q51b" required />
                                        <label for="q51b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="3" id="q51c" required />
                                        <label for="q51c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="4" id="q51d" required />
                                        <label for="q51d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="5" id="q51e" required />
                                        <label for="q51e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="6" id="q51f" required />
                                        <label for="q51f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="7" id="q51g" required />
                                        <label for="q51g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="8" id="q51h" required />
                                        <label for="q51h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="9" id="q51i" required />
                                        <label for="q51i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q51" value="10" id="q51j" required />
                                        <label for="q51j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Commercial awareness: People in our organization take calculated risks to achieve business success and goals.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="1" id="q52a" required />
                                        <label for="q52a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="2" id="q52b" required />
                                        <label for="q52b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="3" id="q52c" required />
                                        <label for="q52c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="4" id="q52d" required />
                                        <label for="q52d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="5" id="q52e" required />
                                        <label for="q52e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="6" id="q52f" required />
                                        <label for="q52f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="7" id="q52g" required />
                                        <label for="q52g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="8" id="q52h" required />
                                        <label for="q52h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="9" id="q52i" required />
                                        <label for="q52i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q52" value="10" id="q52j" required />
                                        <label for="q52j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Cost awareness: People in our organization have the ability to weigh up costs and benefits in the decision-making process, based on the available information.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="1" id="q53a" required />
                                        <label for="q53a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="2" id="q53b" required />
                                        <label for="q53b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="3" id="q53c" required />
                                        <label for="q53c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="4" id="q53d" required />
                                        <label for="q53d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="5" id="q53e" required />
                                        <label for="q53e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="6" id="q53f" required />
                                        <label for="q53f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="7" id="q53g" required />
                                        <label for="q53g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="8" id="q53h" required />
                                        <label for="q53h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="9" id="q53i" required />
                                        <label for="q53i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q53" value="10" id="q53j" required />
                                        <label for="q53j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Customer relations: People in our organization are able to build and maintain a strong network of (in)formal contacts that are in the organization's interest.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="1" id="q54a" required />
                                        <label for="q54a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="2" id="q54b" required />
                                        <label for="q54b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="3" id="q54c" required />
                                        <label for="q54c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="4" id="q54d" required />
                                        <label for="q54d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="5" id="q54e" required />
                                        <label for="q54e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="6" id="q54f" required />
                                        <label for="q54f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="7" id="q54g" required />
                                        <label for="q54g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="8" id="q54h" required />
                                        <label for="q54h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="9" id="q54i" required />
                                        <label for="q54i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q54" value="10" id="q54j" required />
                                        <label for="q54j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Entrepreneurship: People in our organization are able to identify and seize opportunities in the market, both for existing and new products, acting accordingly and daring to take risks.
                                    </h2>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Not Proficient</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="1" id="q55a" required />
                                        <label for="q55a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="2" id="q55b" required />
                                        <label for="q55b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="3" id="q55c" required />
                                        <label for="q55c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="4" id="q55d" required />
                                        <label for="q55d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="5" id="q55e" required />
                                        <label for="q55e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="6" id="q55f" required />
                                        <label for="q55f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="7" id="q55g" required />
                                        <label for="q55g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="8" id="q55h" required />
                                        <label for="q55h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="9" id="q55i" required />
                                        <label for="q55i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q55" value="10" id="q55j" required />
                                        <label for="q55j">10</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <label className='beafinput'>Highly Proficient</label>
                                    </div>
                                </div>                                
                            </div>


                            <div className='col-sm-12'>
                                <div className='fcol1 lastinp ptt-20'>
                                    <div className='row inpuut'>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="organization" placeholder="Organization*" required />
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