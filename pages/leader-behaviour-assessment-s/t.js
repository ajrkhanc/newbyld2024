import Head from 'next/head'

export default function BrowseCourses() {

    const submitF = async (event) => {
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        var name = event.target.name.value;
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
        var newnameurl = nameurl.split(' ').join('-')

        const data = {
            rm1: event.target.rm1.value,
            rm2: event.target.rm2.value,
            rm3: event.target.rm3.value,
            
            pm1: event.target.pm1.value,
            pm2: event.target.pm2.value,
            pm3: event.target.pm3.value,

            il1: event.target.il1.value,
            il2: event.target.il2.value,
            il3: event.target.il3.value,

            cr1: event.target.cr1.value,
            cr2: event.target.cr2.value,
            cr3: event.target.cr3.value,

            at1: event.target.at1.value,
            at2: event.target.at2.value,

            pm21: event.target.pm21.value,
            pm22: event.target.pm22.value,
            pm23: event.target.pm23.value,

            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            organization: event.target.organization.value,
            newnameurl: newnameurl
          }

          const JSONdata = JSON.stringify(data)

          const endpoint = 'https://eaglesflightindiablog.vercel.app/api/leader-behaviour-assessment'

          const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
              'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
          }

          const response = await fetch(endpoint, options)

          const result = await response.json()

          if (response.status !== 200) {
            alert("Try Again")
        } else {
            document.getElementById("response").innerHTML = "View Result"
            window.setTimeout(function () {
                window.location.href = `/leader-behaviour-assessment/${newnameurl}`
            }, 1000);
        }

          

   



        



        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', 'http://localhost:3000/api/leader-behaviour-assessment');
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.send(   
        //     'trust1=' + trust1 +
        //     '&trust2=' + trust2 +
        //     '&trust3=' + trust3 +
        //     '&trust4=' + trust4 +
        //     '&trust5=' + trust5 +
        //     '&ec1=' + ec1 +
        //     '&ec2=' + ec2 +
        //     '&ec3=' + ec3 +
        //     '&ec4=' + ec4 +
        //     '&ec5=' + ec5 +
        //     '&ec6=' + ec6 +
        //     '&ec7=' + ec7 +
        //     '&ec8=' + ec8 +
        //     '&ec9=' + ec9 +
        //     '&ec10=' + ec10 +
        //     '&ec11=' + ec11 +
        //     '&ec12=' + ec12 +
        //     '&ec13=' + ec13 +
        //     '&ec14=' + ec14 +
        //     '&pf1=' + pf1 +
        //     '&pf2=' + pf2 +
        //     '&pf3=' + pf3 +
        //     '&pf4=' + pf4 +
        //     '&pf5=' + pf5 +
        //     '&pf6=' + pf6 +
        //     '&cr1=' + cr1 +
        //     '&cr2=' + cr2 +
        //     '&cr3=' + cr3 +
        //     '&cr4=' + cr4 +
        //     '&cr5=' + cr5 +    
        //     '&name=' + name +
        //     '&email=' + email +
        //     '&phone=' + phone +
        //     '&organization=' + organization +
        //     '&newnameurl=' + newnameurl
        // );

        
    };

    return (
        <>
            <Head>
                <title>Leader Behaviour Assessment | Career Coaching Snapshot</title>
                <meta name="description" content="Circle the number that best represents the extent to which you do the following" />
            </Head>

            <section className='assesmentbannnerbg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className='cacoh pbb-20'>Leader Behaviour Assessment</h2>
                            {/* <p>Circle the number that best represents the extent to which you do the following (Use the line chart below as a guide.):</p> */}
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
                        {/* <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Relationship Management</h3>
                            </div>
                        </div> */}
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    1. I always try to meet the client's requirement or expectation on time
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm1" value="1" id="rm1" required />
                                    <label for="rm1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm1" value="2" id="rm2" required />
                                    <label for="rm2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm1" value="3" id="rm3" required />
                                    <label for="rm3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm1" value="4" id="rm4" required />
                                    <label for="rm4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm1" value="5" id="rm5" required />
                                    <label for="rm5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm1" value="6" id="rm6" required />
                                    <label for="rm6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm1" value="7" id="rm7" required />
                                    <label for="rm7">Strongly Agree</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    2. If I am talking to a team member/client, and another call or message comes in, I rarely halt the conversation and switch my attention
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm2" value="1" id="2trust1" required />
                                    <label for="2trust1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm2" value="2" id="2trust2" required />
                                    <label for="2trust2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm2" value="3" id="2trust3" required />
                                    <label for="2trust3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm2" value="4" id="2trust4" required />
                                    <label for="2trust4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm2" value="5" id="2trust5" required />
                                    <label for="2trust5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm2" value="6" id="2trust6" required />
                                    <label for="2trust6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm2" value="7" id="2trust7" required />
                                    <label for="2trust7">Strongly Agree</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    3. I always try to put my thoughts forward and try to show my emotions if my ideas are not heard
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm3" value="1" id="3trust1" required />
                                    <label for="3trust1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm3" value="2" id="3trust2" required />
                                    <label for="3trust2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm3" value="3" id="3trust3" required />
                                    <label for="3trust3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm3" value="4" id="3trust4" required />
                                    <label for="3trust4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm3" value="5" id="3trust5" required />
                                    <label for="3trust5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm3" value="6" id="3trust6" required />
                                    <label for="3trust6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="rm3" value="7" id="3trust7" required />
                                    <label for="3trust7">Strongly Agree</label>
                                </div>
                            </div>                            
                        </div>

                        {/* <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>People Management</h3>
                            </div>
                        </div> */}
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    4. I always encourage the team to build good relationship and provide development opportnuties
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm1" value="1" id="1ec1" required />
                                    <label for="1ec1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm1" value="2" id="1ec2" required />
                                    <label for="1ec2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm1" value="3" id="1ec3" required />
                                    <label for="1ec3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm1" value="4" id="1ec4" required />
                                    <label for="1ec4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm1" value="5" id="1ec5" required />
                                    <label for="1ec5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm1" value="6" id="1ec6" required />
                                    <label for="1ec6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm1" value="7" id="1ec7" required />
                                    <label for="1ec7">Strongly Agree</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    5. When an individuals role changes, I usually make an effort to clarify and communicate it to everyone on the team
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm2" value="1" id="2ec1" required />
                                    <label for="2ec1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm2" value="2" id="2ec2" required />
                                    <label for="2ec2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm2" value="3" id="2ec3" required />
                                    <label for="2ec3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm2" value="4" id="2ec4" required />
                                    <label for="2ec4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm2" value="5" id="2ec5" required />
                                    <label for="2ec5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm2" value="6" id="2ec6" required />
                                    <label for="2ec6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm2" value="7" id="2ec7" required />
                                    <label for="2ec7">Strongly Agree</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    6. I always identify the development area/gaps for self
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm3" value="1" id="3ec1" required />
                                    <label for="3ec1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm3" value="2" id="3ec2" required />
                                    <label for="3ec2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm3" value="3" id="3ec3" required />
                                    <label for="3ec3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm3" value="4" id="3ec4" required />
                                    <label for="3ec4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm3" value="5" id="3ec5" required />
                                    <label for="3ec5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm3" value="6" id="3ec6" required />
                                    <label for="3ec6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm3" value="7" id="3ec7" required />
                                    <label for="3ec7">Strongly Agree</label>
                                </div>
                            </div>                           

                        </div>


                        {/* <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Inspirational Leadership</h3>
                            </div>
                        </div> */}
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    7. I always ensure we have open communication  for team unity
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="il1" value="1" id="1pf1" required />
                                    <label for="1pf1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il1" value="2" id="1pf2" required />
                                    <label for="1pf2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il1" value="3" id="1pf3" required />
                                    <label for="1pf3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il1" value="4" id="1pf4" required />
                                    <label for="1pf4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il1" value="5" id="1pf5" required />
                                    <label for="1pf5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il1" value="6" id="1pf6" required />
                                    <label for="1pf6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il1" value="7" id="1pf7" required />
                                    <label for="1pf7">Strongly Agree</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    8. I rarely step away from desk and walk around to speak to my colleagues
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="il2" value="1" id="2pf1" required />
                                    <label for="2pf1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il2" value="2" id="2pf2" required />
                                    <label for="2pf2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il2" value="3" id="2pf3" required />
                                    <label for="2pf3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il2" value="4" id="2pf4" required />
                                    <label for="2pf4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il2" value="5" id="2pf5" required />
                                    <label for="2pf5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il2" value="6" id="2pf6" required />
                                    <label for="2pf6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il2" value="7" id="2pf7" required />
                                    <label for="2pf7">Strongly Agree</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    9. Being agile always helps me to improve the quality of work I do
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="il3" value="1" id="3pf1" required />
                                    <label for="3pf1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il3" value="2" id="3pf2" required />
                                    <label for="3pf2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il3" value="3" id="3pf3" required />
                                    <label for="3pf3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il3" value="4" id="3pf4" required />
                                    <label for="3pf4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il3" value="5" id="3pf5" required />
                                    <label for="3pf5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il3" value="6" id="3pf6" required />
                                    <label for="3pf6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="il3" value="7" id="3pf7" required />
                                    <label for="3pf7">Strongly Agree</label>
                                </div>
                            </div>
                        </div>


                        {/* <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Customer Centricity</h3>
                            </div>
                        </div> */}
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    10. I usually empathasize with my colleagues situation and emotion
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
                                    11. I always value the customer feedback & try to work on it
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
                                    12. I rarely make an execuses as reason
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
                            
                        </div>



                        {/* <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Analytical Thinking</h3>
                            </div>
                        </div> */}
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    13. I always evaluate options and make a constructive decision
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="at1" value="1" id="1at1" required />
                                    <label for="1at1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at1" value="2" id="1at2" required />
                                    <label for="1at2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at1" value="3" id="1at3" required />
                                    <label for="1at3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at1" value="4" id="1at4" required />
                                    <label for="1at4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at1" value="5" id="1at5" required />
                                    <label for="1at5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at1" value="6" id="1at6" required />
                                    <label for="1at6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at1" value="7" id="1at7" required />
                                    <label for="1at7">Strongly Agree</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    14. I always make an effort to think out of the box
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="at2" value="1" id="2at1" required />
                                    <label for="2at1">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at2" value="2" id="2at2" required />
                                    <label for="2at2">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at2" value="3" id="2at3" required />
                                    <label for="2at3">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at2" value="4" id="2at4" required />
                                    <label for="2at4">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at2" value="5" id="2at5" required />
                                    <label for="2at5">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at2" value="6" id="2at6" required />
                                    <label for="2at6">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="at2" value="7" id="2at7" required />
                                    <label for="2at7">Strongly Agree</label>
                                </div>
                            </div>                            
                        </div>

                        {/* <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Planning & Management</h3>
                            </div>
                        </div> */}
                        <div className='col-sm-12'>
                            <div className='fcol1'>
                                <h2>
                                    15. I always prioritise the task based on its urgency
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm21" value="1" id="1pm21" required />
                                    <label for="1pm21">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm21" value="2" id="1pm22" required />
                                    <label for="1pm22">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm21" value="3" id="1pm23" required />
                                    <label for="1pm23">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm21" value="4" id="1pm24" required />
                                    <label for="1pm24">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm21" value="5" id="1pm25" required />
                                    <label for="1pm25">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm21" value="6" id="1pm26" required />
                                    <label for="1pm26">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm21" value="7" id="1pm27" required />
                                    <label for="1pm27">Strongly Agree</label>
                                </div>
                            </div>

                            <div className='fcol1'>
                                <h2>
                                    16. Always sets goals for self in line with company/Stakeholders expectation
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm22" value="1" id="2pm21" required />
                                    <label for="2pm21">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm22" value="2" id="2pm22" required />
                                    <label for="2pm22">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm22" value="3" id="2pm23" required />
                                    <label for="2pm23">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm22" value="4" id="2pm24" required />
                                    <label for="2pm24">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm22" value="5" id="2pm25" required />
                                    <label for="2pm25">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm22" value="6" id="2pm26" required />
                                    <label for="2pm26">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm22" value="7" id="2pm27" required />
                                    <label for="2pm27">Strongly Agree</label>
                                </div>
                            </div>
                            <div className='fcol1'>
                                <h2>
                                    17. I always set daily planner for each task with time limit
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm23" value="1" id="3pm21" required />
                                    <label for="3pm21">Strongly Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm23" value="2" id="3pm22" required />
                                    <label for="3pm22">Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm23" value="3" id="3pm23" required />
                                    <label for="3pm23">Somewhat Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm23" value="4" id="3pm24" required />
                                    <label for="3pm24">Neither Agree nor Disagree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm23" value="5" id="3pm25" required />
                                    <label for="3pm25">Somewhat Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm23" value="6" id="3pm26" required />
                                    <label for="3pm26">Agree</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="pm23" value="7" id="3pm27" required />
                                    <label for="3pm27">Strongly Agree</label>
                                </div>
                            </div> 
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