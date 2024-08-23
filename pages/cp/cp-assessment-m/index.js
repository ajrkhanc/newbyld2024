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



        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const organization = event.target.organization.value;
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-')



        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://byldblogs.vercel.app/api/cp-assessment');
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
                var data = JSON.parse(xhr.responseText);

                document.getElementById("response").innerHTML = data.message;

                if (data.status == 0) {
                    var xhttp = xhr;                    
                    xhttp.open("Post", 'https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/61/feedback');
                    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                    var Assessment = "Coaching - Coaching Snapshot Assessment Marketing"
                    xhttp.send("name=" + event.target.name.value +
                        '&email=' + email +
                        '&phone=' + phone +
                        '&organization=' + organization +
                        '&assessment=' + Assessment)

                        window.setTimeout(function () {
                            window.location.href = `/cp/cp-assessment-m/${newnameurl}`
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
                <title>CP | CP Marketing Assessment</title>
                <meta name="description" content="Circle the number that best represents the extent to which you do the following" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-334NQCHLMD"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-334NQCHLMD');
          `,
                    }}
                />
            </Head>

            <section className='assesmentbannnerbg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className='cacoh'>CP Marketing Assessment</h2>
                            <p>Select the number that best represents the extent to which you do the following (Use the line chart below as a guide.):</p>
                            <div className='clearfix'></div>
                            <div className='mainlinec'>

                                <div className='sboxp'>
                                    <div className='sbox'>
                                        <hr className='hrleft'></hr>
                                        <span>1</span>
                                        <p>Not Fast Enough</p>
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>2</span>                                        
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>3</span>
                                        
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>4</span>                                        
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>5</span>                                     
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>6</span>                                  
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>7</span>                                  
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>8</span>                                  
                                    </div>
                                    <div className='sbox'>
                                        <hr></hr>
                                        <span>9</span>                                  
                                    </div>

                                    <div className='sbox'>
                                        <hr className='hrright'></hr>
                                        <span>10</span>
                                        <p>Fast Enough</p>
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
                                    <h3>CP Marketing Assessment</h3>
                                </div>
                            </div>
                            <div className='col-sm-12 mradio'>
                                <div className='fcol1'>
                                    <h2>
                                       01. How fast is your organisation's response to disruptions?
                                    </h2>
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
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                       02. How robust and reliable is supply chain or (service levels)
                                    </h2>
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
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                       03. How agile is your leadership during adversity?
                                    </h2>
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
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                       04. How insulated is your business/industry to macro factors?
                                    </h2>
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
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                       05. How good is the capacity of leaders to influence change?
                                    </h2>
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
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                       06. How your current culture supports employees to quickly  react to external events?
                                    </h2>
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
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                       07. How quickly can your organisation manage cost of employees and doing business during adverse situations? 
                                    </h2>
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
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                       08. How goal directed is your culture?
                                    </h2>
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
                                </div>
                                <div className='fcol1'>
                                    <h2>
                                       09. How effective are your leaders in terms of critical thinking (well thought)?
                                    </h2>
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
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                       10. How well people hold each other accountable for best outcomes?
                                    </h2>
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
