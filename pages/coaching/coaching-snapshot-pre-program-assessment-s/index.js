import Head from 'next/head'

export default function BrowseCourses() {

    const submitF = async (event) => {
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        var trust1 = event.target.trust1.value;
        var trust2 = event.target.trust2.value;
        var trust3 = event.target.trust3.value;
        var trust4 = event.target.trust4.value;
        var trust5 = event.target.trust5.value;

        var ec1 = event.target.ec1.value;
        var ec2 = event.target.ec2.value;
        var ec3 = event.target.ec3.value;
        var ec4 = event.target.ec4.value;
        var ec5 = event.target.ec5.value;
        var ec6 = event.target.ec6.value;
        var ec7 = event.target.ec7.value;
        var ec8 = event.target.ec8.value;
        var ec9 = event.target.ec9.value;
        var ec10 = event.target.ec10.value;
        var ec11 = event.target.ec11.value;
        var ec12 = event.target.ec12.value;
        var ec13 = event.target.ec13.value;
        var ec14 = event.target.ec14.value;

        var pf1 = event.target.pf1.value;
        var pf2 = event.target.pf2.value;
        var pf3 = event.target.pf3.value;
        var pf4 = event.target.pf4.value;
        var pf5 = event.target.pf5.value;
        var pf6 = event.target.pf6.value;

        var cr1 = event.target.cr1.value;
        var cr2 = event.target.cr2.value;
        var cr3 = event.target.cr3.value;
        var cr4 = event.target.cr4.value;
        var cr5 = event.target.cr5.value;


        var organization = "Null";
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-') + phone;
        const result = `https://byldgroup.com/coaching/coaching-snapshot-pre-program-assessment/${newnameurl}`

        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://clblogs.vercel.app/api/career-coaching-snapshot');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('trust1=' + trust1 +
            '&trust2=' + trust2 +
            '&trust3=' + trust3 +
            '&trust4=' + trust4 +
            '&trust5=' + trust5 +
            '&ec1=' + ec1 +
            '&ec2=' + ec2 +
            '&ec3=' + ec3 +
            '&ec4=' + ec4 +
            '&ec5=' + ec5 +
            '&ec6=' + ec6 +
            '&ec7=' + ec7 +
            '&ec8=' + ec8 +
            '&ec9=' + ec9 +
            '&ec10=' + ec10 +
            '&ec11=' + ec11 +
            '&ec12=' + ec12 +
            '&ec13=' + ec13 +
            '&ec14=' + ec14 +
            '&pf1=' + pf1 +
            '&pf2=' + pf2 +
            '&pf3=' + pf3 +
            '&pf4=' + pf4 +
            '&pf5=' + pf5 +
            '&pf6=' + pf6 +
            '&cr1=' + cr1 +
            '&cr2=' + cr2 +
            '&cr3=' + cr3 +
            '&cr4=' + cr4 +
            '&cr5=' + cr5 +
            '&name=' + name +
            '&email=' + email +
            '&phone=' + phone +
            '&organization=' + organization +
            '&newnameurl=' + newnameurl

        );
        logmaintane(name,phone,email,organization,"IOC-assessment",result);
        xhr.onreadystatechange = function () {

            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                document.getElementById("response").innerHTML = data.message;
                if (data.status == 0) {
                    var xhttp = xhr;
                    xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/66/feedback');
                    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                    xhttp.send("name=" + name +
                        '&email=' + email +
                        '&phone=' + phone +
                        '&result=' + result)

                    window.setTimeout(function () {
                        window.location.href = `/coaching/coaching-snapshot-pre-program-assessment-s/${newnameurl}`
                    }, 7000);
                }
            }

            else {
                document.getElementById("response").innerHTML = "Fetching your result"
                setTimeout(function () {
                    document.getElementById("response").innerHTML = "";
                    document.getElementById("submitbuttonform").value = "Submit";
                }, 6000);
            }

        }



        xhr.onerror = function () {
            console.log('error');
        }
    };
    function logmaintane(nameabc,phoneabc,emailabc,organizationabc,assessmentabc,resultabc){
        var person = new Object();
                     person.name = nameabc;
                     person.phone =phoneabc;
                     person.email =emailabc;
                     person.organization = organizationabc;
                     person.assesment = assessmentabc;
                     person.result = resultabc;
                     
                     $.ajax({
                         url: 'https://api.yoma.co.in/api/IOCAssesmentByld',
                         type: 'POST',
                         dataType: 'json',
                         "crossDomain": true,
                      "Access-Control-Allow-Origin": "*",
    
                         data: person,
                         success: function (data, textStatus, xhr) {
                             console.log(data);
                         },
                         error: function (xhr, textStatus, errorThrown) {
                             console.log('Error in Operation');
                         }
                     });
    }
    return (
        <>
            <Head>
                <title>Coaching | Career Coaching Snapshot Internal Assessment</title>
                <meta name="description" content="Circle the number that best represents the extent to which you do the following" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-H4RT5QHB12"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-H4RT5QHB12');
          `,
                    }}
                />
            </Head>

            <section className='assesmentbannnerbg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className='cacoh'>Coaching Snapshot</h2>
                            <p>Select the number that best represents the extent to which you do the following (Use the line chart below as a guide.):</p>
                            <div className='clearfix'></div>
                            <div className='mainlinec'>

                                <div className='sboxp'>
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
                                        <p>Somewhat Disagree</p>
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>4</span>
                                        <p>Neither Agree nor Disagree</p>
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>5</span>
                                        <p>Somewhat Agree</p>
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>6</span>
                                        <p>Agree</p>
                                    </div>
                                    <div className='sbox'>
                                        <hr className='hrright'></hr>
                                        <span>7</span>
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
                                <div className='fh3'>
                                    <h3>TRUST</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        1. I create a safe environment for talking about sensitive or personal topics
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust1" value="1" id="trust1" required />
                                        <label for="trust1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust1" value="2" id="trust2" required />
                                        <label for="trust2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust1" value="3" id="trust3" required />
                                        <label for="trust3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust1" value="4" id="trust4" required />
                                        <label for="trust4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust1" value="5" id="trust5" required />
                                        <label for="trust5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust1" value="6" id="trust6" required />
                                        <label for="trust6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust1" value="7" id="trust7" required />
                                        <label for="trust7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        2. I keep the conversation focused on the agenda of the other person
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust2" value="1" id="2trust1" required />
                                        <label for="2trust1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust2" value="2" id="2trust2" required />
                                        <label for="2trust2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust2" value="3" id="2trust3" required />
                                        <label for="2trust3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust2" value="4" id="2trust4" required />
                                        <label for="2trust4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust2" value="5" id="2trust5" required />
                                        <label for="2trust5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust2" value="6" id="2trust6" required />
                                        <label for="2trust6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust2" value="7" id="2trust7" required />
                                        <label for="2trust7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        3. I communicate openly and honestly at all times
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust3" value="1" id="3trust1" required />
                                        <label for="3trust1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust3" value="2" id="3trust2" required />
                                        <label for="3trust2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust3" value="3" id="3trust3" required />
                                        <label for="3trust3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust3" value="4" id="3trust4" required />
                                        <label for="3trust4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust3" value="5" id="3trust5" required />
                                        <label for="3trust5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust3" value="6" id="3trust6" required />
                                        <label for="3trust6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust3" value="7" id="3trust7" required />
                                        <label for="3trust7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        4. My commitments relating to each coaching conversation are always made clear to the other person
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust4" value="1" id="4trust1" required />
                                        <label for="4trust1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust4" value="2" id="4trust2" required />
                                        <label for="4trust2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust4" value="3" id="4trust3" required />
                                        <label for="4trust3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust4" value="4" id="4trust4" required />
                                        <label for="4trust4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust4" value="5" id="4trust5" required />
                                        <label for="4trust5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust4" value="6" id="4trust6" required />
                                        <label for="4trust6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust4" value="7" id="4trust7" required />
                                        <label for="4trust7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        5. I consistently follow through on my commitments
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust5" value="1" id="5trust1" required />
                                        <label for="5trust1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust5" value="2" id="5trust2" required />
                                        <label for="5trust2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust5" value="3" id="5trust3" required />
                                        <label for="5trust3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust5" value="4" id="5trust4" required />
                                        <label for="5trust4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust5" value="5" id="5trust5" required />
                                        <label for="5trust5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust5" value="6" id="5trust6" required />
                                        <label for="5trust6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="trust5" value="7" id="5trust7" required />
                                        <label for="5trust7">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>EFFECTIVE COMMUNICATION</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        6. I make it clear when commitments can't be met
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec1" value="1" id="1ec1" required />
                                        <label for="1ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec1" value="2" id="1ec2" required />
                                        <label for="1ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec1" value="3" id="1ec3" required />
                                        <label for="1ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec1" value="4" id="1ec4" required />
                                        <label for="1ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec1" value="5" id="1ec5" required />
                                        <label for="1ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec1" value="6" id="1ec6" required />
                                        <label for="1ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec1" value="7" id="1ec7" required />
                                        <label for="1ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        7. I set a clear goal for every coaching conversation
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec2" value="1" id="2ec1" required />
                                        <label for="2ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec2" value="2" id="2ec2" required />
                                        <label for="2ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec2" value="3" id="2ec3" required />
                                        <label for="2ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec2" value="4" id="2ec4" required />
                                        <label for="2ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec2" value="5" id="2ec5" required />
                                        <label for="2ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec2" value="6" id="2ec6" required />
                                        <label for="2ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec2" value="7" id="2ec7" required />
                                        <label for="2ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        8. I keep every coaching conversation focused on achieving agreed-upon goals
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec3" value="1" id="3ec1" required />
                                        <label for="3ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec3" value="2" id="3ec2" required />
                                        <label for="3ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec3" value="3" id="3ec3" required />
                                        <label for="3ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec3" value="4" id="3ec4" required />
                                        <label for="3ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec3" value="5" id="3ec5" required />
                                        <label for="3ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec3" value="6" id="3ec6" required />
                                        <label for="3ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec3" value="7" id="3ec7" required />
                                        <label for="3ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        9. I help others think of alternative ways to view a problem or solution
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec4" value="1" id="4ec1" required />
                                        <label for="4ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec4" value="2" id="4ec2" required />
                                        <label for="4ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec4" value="3" id="4ec3" required />
                                        <label for="4ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec4" value="4" id="4ec4" required />
                                        <label for="4ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec4" value="5" id="4ec5" required />
                                        <label for="4ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec4" value="6" id="4ec6" required />
                                        <label for="4ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec4" value="7" id="4ec7" required />
                                        <label for="4ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        10. I help others think of as many ideas or options as they can to solve a problem
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec5" value="1" id="5ec1" required />
                                        <label for="5ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec5" value="2" id="5ec2" required />
                                        <label for="5ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec5" value="3" id="5ec3" required />
                                        <label for="5ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec5" value="4" id="5ec4" required />
                                        <label for="5ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec5" value="5" id="5ec5" required />
                                        <label for="5ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec5" value="6" id="5ec6" required />
                                        <label for="5ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec5" value="7" id="5ec7" required />
                                        <label for="5ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        11. I listen to new ideas without jumping in to judge or evaluate them too soon
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec6" value="1" id="6ec1" required />
                                        <label for="6ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec6" value="2" id="6ec2" required />
                                        <label for="6ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec6" value="3" id="6ec3" required />
                                        <label for="6ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec6" value="4" id="6ec4" required />
                                        <label for="6ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec6" value="5" id="6ec5" required />
                                        <label for="6ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec6" value="6" id="6ec6" required />
                                        <label for="6ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec6" value="7" id="6ec7" required />
                                        <label for="6ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        12. I stay objective during coaching conversations
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec7" value="1" id="7ec1" required />
                                        <label for="7ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec7" value="2" id="7ec2" required />
                                        <label for="7ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec7" value="3" id="7ec3" required />
                                        <label for="7ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec7" value="4" id="7ec4" required />
                                        <label for="7ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec7" value="5" id="7ec5" required />
                                        <label for="7ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec7" value="6" id="7ec6" required />
                                        <label for="7ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec7" value="7" id="7ec7" required />
                                        <label for="7ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        13. I communicate in a way that makes others want to share their ideas or perspective
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec8" value="1" id="8ec1" required />
                                        <label for="8ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec8" value="2" id="8ec2" required />
                                        <label for="8ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec8" value="3" id="8ec3" required />
                                        <label for="8ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec8" value="4" id="8ec4" required />
                                        <label for="8ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec8" value="5" id="8ec5" required />
                                        <label for="8ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec8" value="6" id="8ec6" required />
                                        <label for="8ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec8" value="7" id="8ec7" required />
                                        <label for="8ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        14. I help others draw their conclusions when considering different perspectives or approaches
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec9" value="1" id="9ec1" required />
                                        <label for="9ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec9" value="2" id="9ec2" required />
                                        <label for="9ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec9" value="3" id="9ec3" required />
                                        <label for="9ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec9" value="4" id="9ec4" required />
                                        <label for="9ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec9" value="5" id="9ec5" required />
                                        <label for="9ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec9" value="6" id="9ec6" required />
                                        <label for="9ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec9" value="7" id="9ec7" required />
                                        <label for="9ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        15. I demonstrate understanding by reflecting on or summarizing what was said
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec10" value="1" id="10ec1" required />
                                        <label for="10ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec10" value="2" id="10ec2" required />
                                        <label for="10ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec10" value="3" id="10ec3" required />
                                        <label for="10ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec10" value="4" id="10ec4" required />
                                        <label for="10ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec10" value="5" id="10ec5" required />
                                        <label for="10ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec10" value="6" id="10ec6" required />
                                        <label for="10ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec10" value="7" id="10ec7" required />
                                        <label for="10ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        16. My body language shows a high level of engagement in each conversation
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec11" value="1" id="11ec1" required />
                                        <label for="11ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec11" value="2" id="11ec2" required />
                                        <label for="11ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec11" value="3" id="11ec3" required />
                                        <label for="11ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec11" value="4" id="11ec4" required />
                                        <label for="11ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec11" value="5" id="11ec5" required />
                                        <label for="11ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec11" value="6" id="11ec6" required />
                                        <label for="11ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec11" value="7" id="11ec7" required />
                                        <label for="11ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        17. I spend more time listening and less time talking
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec12" value="1" id="12ec1" required />
                                        <label for="12ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec12" value="2" id="12ec2" required />
                                        <label for="12ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec12" value="3" id="12ec3" required />
                                        <label for="12ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec12" value="4" id="12ec4" required />
                                        <label for="12ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec12" value="5" id="12ec5" required />
                                        <label for="12ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec12" value="6" id="12ec6" required />
                                        <label for="12ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec12" value="7" id="12ec7" required />
                                        <label for="12ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        18. I ask helpful questions during conversations
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec13" value="1" id="13ec1" required />
                                        <label for="13ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec13" value="2" id="13ec2" required />
                                        <label for="13ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec13" value="3" id="13ec3" required />
                                        <label for="13ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec13" value="4" id="13ec4" required />
                                        <label for="13ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec13" value="5" id="13ec5" required />
                                        <label for="13ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec13" value="6" id="13ec6" required />
                                        <label for="13ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec13" value="7" id="13ec7" required />
                                        <label for="13ec7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        19. I am willing to ask tough questions when needed
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec14" value="1" id="14ec1" required />
                                        <label for="14ec1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec14" value="2" id="14ec2" required />
                                        <label for="14ec2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec14" value="3" id="14ec3" required />
                                        <label for="14ec3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec14" value="4" id="14ec4" required />
                                        <label for="14ec4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec14" value="5" id="14ec5" required />
                                        <label for="14ec5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec14" value="6" id="14ec6" required />
                                        <label for="14ec6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="ec14" value="7" id="14ec7" required />
                                        <label for="14ec7">Strongly Agree</label>
                                    </div>
                                </div>

                            </div>


                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>PERFORMANCE FOCUS</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        20. I always end a coaching conversation by clarifying actions or commitments
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf1" value="1" id="1pf1" required />
                                        <label for="1pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf1" value="2" id="1pf2" required />
                                        <label for="1pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf1" value="3" id="1pf3" required />
                                        <label for="1pf3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf1" value="4" id="1pf4" required />
                                        <label for="1pf4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf1" value="5" id="1pf5" required />
                                        <label for="1pf5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf1" value="6" id="1pf6" required />
                                        <label for="1pf6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf1" value="7" id="1pf7" required />
                                        <label for="1pf7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        21. I support others in setting specific dates for follow-up actions and commitments
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf2" value="1" id="2pf1" required />
                                        <label for="2pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf2" value="2" id="2pf2" required />
                                        <label for="2pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf2" value="3" id="2pf3" required />
                                        <label for="2pf3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf2" value="4" id="2pf4" required />
                                        <label for="2pf4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf2" value="5" id="2pf5" required />
                                        <label for="2pf5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf2" value="6" id="2pf6" required />
                                        <label for="2pf6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf2" value="7" id="2pf7" required />
                                        <label for="2pf7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        22. I help others set priorities based on our organization’s needs
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf3" value="1" id="3pf1" required />
                                        <label for="3pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf3" value="2" id="3pf2" required />
                                        <label for="3pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf3" value="3" id="3pf3" required />
                                        <label for="3pf3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf3" value="4" id="3pf4" required />
                                        <label for="3pf4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf3" value="5" id="3pf5" required />
                                        <label for="3pf5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf3" value="6" id="3pf6" required />
                                        <label for="3pf6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf3" value="7" id="3pf7" required />
                                        <label for="3pf7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        23. I make a clear link between our coaching conversations and career priorities
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf4" value="1" id="4pf1" required />
                                        <label for="4pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf4" value="2" id="4pf2" required />
                                        <label for="4pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf4" value="3" id="4pf3" required />
                                        <label for="4pf3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf4" value="4" id="4pf4" required />
                                        <label for="4pf4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf4" value="5" id="4pf5" required />
                                        <label for="4pf5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf4" value="6" id="4pf6" required />
                                        <label for="4pf6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf4" value="7" id="4pf7" required />
                                        <label for="4pf7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        24. I provide the coaching others need to grow in their career
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf5" value="1" id="5pf1" required />
                                        <label for="5pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf5" value="2" id="5pf2" required />
                                        <label for="5pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf5" value="3" id="5pf3" required />
                                        <label for="5pf3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf5" value="4" id="5pf4" required />
                                        <label for="5pf4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf5" value="5" id="5pf5" required />
                                        <label for="5pf5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf5" value="6" id="5pf6" required />
                                        <label for="5pf6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf5" value="7" id="5pf7" required />
                                        <label for="5pf7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        25. Others achieve better results because of the coaching they get from me
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf6" value="1" id="6pf1" required />
                                        <label for="6pf1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf6" value="2" id="6pf2" required />
                                        <label for="6pf2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf6" value="3" id="6pf3" required />
                                        <label for="6pf3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf6" value="4" id="6pf4" required />
                                        <label for="6pf4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf6" value="5" id="6pf5" required />
                                        <label for="6pf5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf6" value="6" id="6pf6" required />
                                        <label for="6pf6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="pf6" value="7" id="6pf7" required />
                                        <label for="6pf7">Strongly Agree</label>
                                    </div>
                                </div>
                            </div>


                            <div className='col-sm-12'>
                                <div className='fh3'>
                                    <h3>COACHING ROUTINE</h3>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <div className='fcol1'>
                                    <h2>
                                        26. I regularly make time to help others explore career growth challenges
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr1" value="1" id="1cr1" required />
                                        <label for="1cr1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr1" value="2" id="1cr2" required />
                                        <label for="1cr2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr1" value="3" id="1cr3" required />
                                        <label for="1cr3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr1" value="4" id="1cr4" required />
                                        <label for="1cr4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr1" value="5" id="1cr5" required />
                                        <label for="1cr5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr1" value="6" id="1cr6" required />
                                        <label for="1cr6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr1" value="7" id="1cr7" required />
                                        <label for="1cr7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        27. I take time with others to check on their progress
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr2" value="1" id="2cr1" required />
                                        <label for="2cr1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr2" value="2" id="2cr2" required />
                                        <label for="2cr2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr2" value="3" id="2cr3" required />
                                        <label for="2cr3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr2" value="4" id="2cr4" required />
                                        <label for="2cr4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr2" value="5" id="2cr5" required />
                                        <label for="2cr5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr2" value="6" id="2cr6" required />
                                        <label for="2cr6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr2" value="7" id="2cr7" required />
                                        <label for="2cr7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        28. I provide the support others need to stay on track
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr3" value="1" id="3cr1" required />
                                        <label for="3cr1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr3" value="2" id="3cr2" required />
                                        <label for="3cr2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr3" value="3" id="3cr3" required />
                                        <label for="3cr3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr3" value="4" id="3cr4" required />
                                        <label for="3cr4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr3" value="5" id="3cr5" required />
                                        <label for="3cr5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr3" value="6" id="3cr6" required />
                                        <label for="3cr6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr3" value="7" id="3cr7" required />
                                        <label for="3cr7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        29. I remind others of the commitments they have made
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr4" value="1" id="4cr1" required />
                                        <label for="4cr1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr4" value="2" id="4cr2" required />
                                        <label for="4cr2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr4" value="3" id="4cr3" required />
                                        <label for="4cr3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr4" value="4" id="4cr4" required />
                                        <label for="4cr4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr4" value="5" id="4cr5" required />
                                        <label for="4cr5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr4" value="6" id="4cr6" required />
                                        <label for="4cr6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr4" value="7" id="4cr7" required />
                                        <label for="4cr7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                        30. I encourage others to take responsibility for their development
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr5" value="1" id="5cr1" required />
                                        <label for="5cr1">Strongly Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr5" value="2" id="5cr2" required />
                                        <label for="5cr2">Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr5" value="3" id="5cr3" required />
                                        <label for="5cr3">Somewhat Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr5" value="4" id="5cr4" required />
                                        <label for="5cr4">Neither Agree nor Disagree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr5" value="5" id="5cr5" required />
                                        <label for="5cr5">Somewhat Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr5" value="6" id="5cr6" required />
                                        <label for="5cr6">Agree</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="cr5" value="7" id="5cr7" required />
                                        <label for="5cr7">Strongly Agree</label>
                                    </div>
                                </div>

                                <div className='fcol1 lastinp ptt-20'>
                                    <div className='row inpuut'>
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-4 mb-12">
                                            <input className='form-control' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No. (Optional)" />
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
