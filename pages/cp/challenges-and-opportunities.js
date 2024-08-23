import Head from 'next/head'
import React from 'react';

export default function BrowseCourses() {
    if (typeof window !== "undefined") {
    var submitCart = document.getElementById("submitbuttonform");
    var userCart = document.forms["user-cart"];
    var displayCart = document.getElementById("display-cart");

    
    }
    const submitF = async (event) => {
        event.preventDefault();
        submitCart.addEventListener("click", submitF);

        var allOptions = userCart.elements["cartitems"];
      var selectedOptions = [];
      allOptions.forEach((element) => {
        if (element.checked) {
          selectedOptions.push(element.value);
        }
      });
      var cartString = selectedOptions.join(", ");
    
        

        document.getElementById("submitbuttonform").value = "Submitting";

        
        var q17 = event.target.q17.value;
        var q18 = event.target.q18.value;







        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const organization = event.target.organization.value;

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/143/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                        window.location.href = "/thank-you"
                     }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("q1=" + cartString +
            "&q17=" + q17 +
            "&q18=" + q18 +
            "&name=" + name +
            "&email=" + email +
            "&phone=" + phone +
            "&organization=" + organization)
       


      
    
    };


    if (typeof window !== "undefined") {
        var limit = 3;
        var checked = 0;
        $('.single-checkbox').on('change', function () {
            if ($(this).is(':checked'))
                checked = checked + 1;

            if ($(this).is(':checked') == false)
                checked = checked - 1;

            if (checked > limit) {
                this.checked = false;
                error.textContent = "You Must Select at Least 3";
                checked = limit;
            }
        });



    }

    return (
        <>
            <Head>
                <title>CP | Challenges and Opportunities in Hospitality Industry</title>
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

            <section className='pbb-40'>
                <div className='container'>
                    <form id="user-cart" name='form1' onSubmit={submitF}>
                
                        <div className='row'>
                            <div className='col-sm-12 text-center'>                            
                            <h2 className='cacoh'>Challenges and Opportunities in Hospitality Industry</h2>
                            </div>
                    
                            <div className='col-sm-12 mradio'>
                                <div className='fcol1 cpover ccf'>
                                    <h2>
                                       What are key metrics of business you use?<sup className='supp'>*</sup> <span className='msups'>(Choose Top three)</span>
                                    </h2>
                                    <span className='supp' id="error"></span>
                                    <div className='fcolmain feedbcp10'>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q1" value="Occupancy/load factor" /><label for='q1'>Occupancy/load factor</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q2" value="Revenue per employee or asset" /><label for="q2">Revenue per employee or asset</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q3" value="Net Promoter Score" /><label for="q3">Net Promoter Score</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q4" value="Average Occupancy Rate" /><label for="q4">Average Occupancy Rate</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q5" value="Revenue Per Available Room (RevPar)" /><label for="q5">Revenue Per Available Room (RevPar)</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q6" value="Gross operating profit per available room (GOPPAR)" /><label for="q6">Gross operating profit per available room (GOPPAR)</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q7" value="Market Penetration Index (MPI)" /><label for="q7">Market Penetration Index (MPI)</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q8" value="Revenue Generation Index (RGI)" /><label for="q8">Revenue Generation Index (RGI)</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q9" value="Average Daily Rate (ADR)" /><label for="q9">Average Daily Rate (ADR)</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q10" value="Average Rate Index (ARI)" /><label for="q10">Average Rate Index (ARI)</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q11" value="MCPB (marketing cost per booking)1" /><label for="q11">MCPB (marketing cost per booking)1</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q12" value="Sentiment score on TripAdvisor" /><label for="q12">Sentiment score on TripAdvisor</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q13" value="DRR (direct revenue ratio)" /><label for="q13">DRR (direct revenue ratio)</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q14" value="Website conversion rate" /><label for="q14">Website conversion rate</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q15" value="Segmentation - Group/Transient" /><label for="q15">Segmentation - Group/Transient</label></div>
                                        <div className='mcheck'><input class="single-checkbox" className="checkbox" type="checkbox" name="cartitems" id="q16" value="TrevPar (Total revenue per available room)" /><label for="q16">TrevPar (Total revenue per available room)</label></div>                                 
                                </div>
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    How aligned are your development and talent management strategies to the business metrics chosen above?
                                    </h2>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="1" id="q2a" required />
                                        <label for="q2a">1</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="2" id="q2b" required />
                                        <label for="q2b">2</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="3" id="q2c" required />
                                        <label for="q2c">3</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="4" id="q2d" required />
                                        <label for="q2d">4</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="5" id="q2e" required />
                                        <label for="q2e">5</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="6" id="q2f" required />
                                        <label for="q2f">6</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="7" id="q2g" required />
                                        <label for="q2g">7</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="8" id="q2h" required />
                                        <label for="q2h">8</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="9" id="q2i" required />
                                        <label for="q2i">9</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="10" id="q2j" required />
                                        <label for="q2j">10</label>                                  
                                    </div>
                                </div>


                                <div className='fcol1 '>
                                    <h2>
                                    What more needs to be done in order to accelerate the results in your organization? 
                                    </h2>
                                    <div className='fcolmain mtextc'>
                                    <textarea className="from-control" name="q18" placeholder="Your Answer"></textarea>
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
                                            <p class="feedbackcolor" id="showlabel"></p>
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