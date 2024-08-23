import Head from "next/head";

export default function Workshops() {
  const registerUser = async (event) => {
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };
    xhttp.open(
      "Post",
      "https://byldgroup.in/byldgroup/wp-json/contact-form-7/v1/contact-forms/17/feedback"
    );
    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;"
    );
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          document.getElementById("showlabel").innerHTML =
            "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

          document.getElementById("showlabel").style.display = "block";
          window.setTimeout(function () {
            window.location.href = "/thank-you";
          }, 3000);
        } else {
          alert("There was a problem with the request.");
        }
      }
    };
    xhttp.send(
      "leadsquared-FirstName=" +
        event.target.name.value +
        "&leadsquared-EmailAddress=" +
        event.target.email.value +
        "&leadsquared-Mobile=" +
        event.target.phone.value +
        "&leadsquared-Company=" +
        event.target.organization.value +
        "&leadsquared-JobTitle=" +
        event.target.Designation.value +
        "&leadsquared-mx_States=" +
        event.target.Location.value +
        "&leadsquared-mx_Showed_Interest_in=" +
        event.target.leadsquared_mx_Showed_Interest_in.value +
        "&referredby=" +
        event.target.referredby.value +
        "&leadsquared-Notes=" +
        event.target.QuestionsComments.value +
        "&leadsquared-mx_Business_Entity=" +
        event.target.leadsquared_mx_Business_Entity.value
    );
  };

  return (
    <>
      <Head>
        <title>Workshops - BYLD Group</title>
        <link rel="canonical" href="https://byldgroup.com/workshops" />
        <meta
          name="description"
          content="April 29th, 2022Trapologist at WorkTM Workshop Virtual Public Workshop: April 29th, 2022 Learn More & Register April 26th – 29th, 2022DISC Train-the-Trainer (TTT) Virtual Public Workshop: April 26th – 29th, 2022 Learn More & Register May 9th – 12th, 2022Blanchard India Online Workshop Virtual Public Workshop: May 9th – 12th, 2022 Reserve Your Seat May… Continue reading Workshops"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/homemodule.css"
        />
      </Head>

      <div class="rs-breadcrumbs workshopsbg">
        <div class="container">
          <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
            <ul>
              <li>
                <a href="/">
                  <span>Home</span>
                </a>
                <span class="separator">/</span>
              </li>
              <li>
                <a href="/workshops">
                  <span>Workshops</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div class="breadcrumbs-inner">
                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                  Workshops - BYLD Group
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ptt-60 pbb-60 positionrelative">
        <div className="container">
          <div className="row zindx">
            {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - July 26th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Team Leadership - Virtual</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - July 27th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

            {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>August 17th - 18th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>DISC Certification (TTT)</h3>
                                    <a target="_blank" className="eventbtn" href='/everythingdisc/everything-disc-ttt-vt-lp/'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

            {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - August 23rd, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Conversational Capacity - Virtual</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>




                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop -  August 24th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - August 24th - 25th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

            {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - September 13th - 14th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>September 19th - 22nd, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>DiSC Certification Virtual Workshop</h3>
                                    <a target="_blank" className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - September 25th to 26th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>The SLII Experience™ - Virtual</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - September 27th to 28th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>The SLII Experience™ - T4T</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - September 28th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>October 3rd – 6th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>DiSC Certification Virtual Workshop</h3>
                                    <a target="_blank" className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - October 5th - 6th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

            {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>October 17th - 20th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>DiSC Certification Virtual Workshop</h3>
                                    <a target="_blank" className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

            {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>November 6th - 8th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Getting Things Done Workshop</h3>
                                    <a target="_blank" className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>November 9th - 10th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Getting Things Done (TTT) - Workshop</h3>
                                    <a target="_blank" className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>


                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>November 20th - 24th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>DiSC Certification Virtual Workshop</h3>
                                    <a target="_blank" className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>
                          <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>December 12th - 15th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>DiSC Certification Virtual Workshop</h3>
                                    <a target="_blank" className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - November 29th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>January 6th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DCA Batch 43</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>
             */}

         

           

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>January 22nd -23rd , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Crucial Conversations® For Mastering Dialogue Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>*/}

               {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>January 22nd, 23rd, 24th, 25th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>*/}
            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>Workshop - January 29th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>The Power Of Habit Workshop</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>>*/}
            

{/*             
            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>January 23rd , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>January 24th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>January 25th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - December 14th - 15th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

 

           

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>February 7th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Getting Things Done® Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>February 22nd & 23rd , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification In-Person Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

            
            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>February 16th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>Workshop - February 17th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DCA Batch 44</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>Workshop - February 26th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Crucial Influence Workshop</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

             {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>Workshop - March 4th - 5th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Crucial Conversations for Accountability®</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}


            
            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>Workshop - February 22nd - 23rd, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Crucial Conversations for Accountability®</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

          

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>Workshop - March 7th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Crucial Influence Workshop</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

            

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>Workshop - March 18th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Trapologist at Work® Workshop</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>March 19th,20th,21st & 22nd , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>





            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>January 12th & 13th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>The SLII Experience™ - Virtual</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

         

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>Workshop - January 19th & 20th 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>SLII™ T4T F2F</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>February 1st, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Self Leadership - Virtual</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>February 10th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Conversational Capacity - Virtual</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

{/*             
            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>January 23rd , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>January 24th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>January 25th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Workshop - December 14th - 15th, 2023</span>
                                </div>
                                <div className='eventbottom'>
                                    <h3>Crucial Life Changing Skills Online Workshop</h3>
                                    <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                                </div>
                            </div>
                        </div> */}

 

           

            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>February 22nd, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Fearless Innovation</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

          {/*   <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>March 13th & 14th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>SLII™ - Virtual</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>*/}

            
            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>February 16th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>March 21st and 22nd, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>SLII™ T4T F2F</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            
            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>March 21st, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Blanchard Management Essentials - Virtual</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

          

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>April 4th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>SLII™</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>April 18th & 19th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Self Leadership - Virtual</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span> April 23rd, 24th, 25th & 26th,2024 </span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>May 8th & 9th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>SLII™ - Virtual</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>May 16th & 17th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>SLII™ T4T F2F</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>May 16th & 17th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification F2F Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>June 4th & 7th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>June 6th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Essential Motivators - F2F</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>June 13th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Leading People Through Change </h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>June 20th, 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>Building Trust</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>




            {/* <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>March 20th , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>March 21st , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="eventsbox">
                <div className="eventmiddle">
                  <img src="/assets/img/events.jpg" alt="" />
                  <span>March 22nd , 2024</span>
                </div>
                <div className="eventbottom">
                  <h3>DiSC Certification Virtual Workshop</h3>
                  <a target="_blank" className="eventbtn" href="#Register">
                    Reserve Your Seat
                  </a>
                </div>
              </div>
            </div> */}

          </div>

          </div>
          <div className="clearfix"></div>
          <div className="solutionarrowbox1">
            <img src="/assets/img/homeb/orangearrow.png" />
          </div>
          <div className="solutionarrowbox2">
            <img src="/assets/img/homeb/bluearrow1.png" />
          </div>
      </section>

      <div id="Register" class="homecon ptt-60">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">
                Register Now
              </h2>
            </div>
          </div>

          <div class="row y-middle">
            <div class="col-lg-5 md-mb-50">
              <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
                <img src="/assets/img/homeb/contactl.png" alt="Contact" />
              </div>
            </div>

            <div class="col-lg-7">
              <div class="contact-wrap">
                <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                  <form
                    id="contact-form"
                    className="clientcornner ptt-5 pbb-20"
                    onSubmit={registerUser}
                  >
                    <div className="row">
                      <div className="col-sm-6 mb-12">
                        <input
                          type="text"
                          className="borrr"
                          name="name"
                          placeholder="Your Name*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          type="email"
                          className="borrr"
                          name="email"
                          placeholder="Work Email*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          type="text"
                          className="borrr"
                          name="phone"
                          maxlength="10"
                          minlength="10"
                          pattern="[0-9]*"
                          placeholder="Phone No.*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          type="text"
                          className="borrr"
                          name="organization"
                          placeholder="Organization*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          type="text"
                          className="borrr"
                          name="Designation"
                          placeholder="Designation*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input
                          type="text"
                          className="borrr"
                          name="Location"
                          placeholder="Location*"
                          required
                        />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <select
                          name="leadsquared_mx_Showed_Interest_in"
                          required
                        >
                          <option value="">Pick up any Slot*</option>
                          {/* <option value="Team Leadership - Virtual July 26th, 2023">Team Leadership - Virtual July 26th, 2023</option>
                                                <option value="Crucial Life Changing Skills, Getting Things Done - July 27th, 2023">Crucial Life Changing Skills, Getting Things Done - July 27th, 2023</option> */}
                          {/* 
                                                <option value="August 17th - 18th, 2023 - DISC Certification (TTT)">August 17th - 18th, 2023 - DISC Certification (TTT)</option>*/}

                          {/* <option value="Conversational Capacity - Virtual - August 23rd, 2023">Conversational Capacity - Virtual - August 23rd, 2023</option>
                                                <option value="Crucial Life Changing Skills, The Power of Habit - August 24th, 2023">Crucial Life Changing Skills, The Power of Habit - August 24th, 2023</option>
                                                <option value="Crucial Life Changing Skills, Influencer - August 24th - 25th, 2023">Crucial Life Changing Skills, Influencer - August 24th - 25th, 2023</option> */}
                          {/* <option value="Crucial Life Changing Skills, Crucial Conversations for Mastering Dialogue - September 13th - 14th, 2023">Crucial Life Changing Skills, Crucial Conversations for Mastering Dialogue - September 13th - 14th, 2023</option>
                                                <option value="September 19th - 22nd, 2023 - DiSC Certification Virtual Workshop">September 19th - 22nd, 2023 - DiSC Certification Virtual Workshop</option>                                                
                                                <option value="The SLII Experience™ - September 25th, 2023">The SLII Experience™ - September 25th, 2023</option>
                                                <option value="The SLII Experience™ T4T F2F - September 27th, 2023">The SLII Experience™ T4T F2F - September 27th, 2023</option>
                                                <option value="Crucial Life Changing Skills, Getting Things Done - September 28th, 2023">Crucial Life Changing Skills, Getting Things Done - September 28th, 2023</option>
                                                <option value="October 3rd - 6th, 2023 - DiSC Certification Virtual Workshop">October 3rd - 6th, 2023 - DiSC Certification Virtual Workshop</option>
                                                <option value="Crucial Life Changing Skills, Crucial Conversations for Accountability - October 5th - 6th, 2023">Crucial Life Changing Skills, Crucial Conversations for Accountability - October 5th - 6th, 2023</option> */}
                          {/* <option value="October 17th - 20th, 2023 - DiSC Certification Virtual Workshop">October 17th - 20th, 2023 - DiSC Certification Virtual Workshop</option> */}
                          {/* <option value="Getting Things Done - November 6th to 8th, 2023">
                            Getting Things Done - November 6th to 8th, 2023
                          </option>
                          <option value="Getting Things Done - November 9th to 10th, 2023">
                            Getting Things Done - November 9th to 10th, 2023
                          </option>
                          <option value="November 20th - 24th, 2023 - DiSC Certification Virtual Workshop">
                            November 20th - 24th, 2023 - DiSC Certification
                            Virtual Workshop
                          </option>
                          <option value="Crucial Life Changing Skills, The Power of Habit - November 29th, 2023">
                            Crucial Life Changing Skills, The Power of Habit -
                            November 29th, 2023
                          </option>
                          <option value="December 5th - 8th, 2023 - DiSC Certification Virtual Workshop">
                            December 5th - 8th, 2023 - DiSC Certification
                            Virtual Workshop
                          </option>
                          <option value="Crucial Life Changing Skills, Crucial Conversations for Mastering Dialogue - December 14th - 15th, 2023">
                            Crucial Life Changing Skills, Crucial Conversations
                            for Mastering Dialogue - December 14th - 15th, 2023
                          </option> */}
                               {/* <option value="DCA BAtch 43  - January 6th, 2024">
                           DCA BAtch 43 -
                            January 6th, 2024
                          </option> */}
                          {/* <option value="DCA BAtch 43  - January 6th, 2024">
                           The Power Of Habit -
                            January 11th, 2024
                          </option> */}
                         
                          {/* <option value="Crucial Conversations® For Mastering Dialogue Workshop - January 22nd-23rd, 2024">
                          Crucial Conversations® For Mastering Dialogue Workshop -
                            January 22nd -23rd, 2024
                          </option> */}
                          {/* <option value="DiSC Certification Virtual Workshop - 22nd, 23rd, 24th, 25th January, 2024">
                          DiSC Certification Virtual Workshop -
                          22nd, 23rd, 24th, 25th January, 2024
                          </option> */}

                            
                          {/* <option value="Getting Things Done®Workshop - February 9th, 2024">
                          Getting Things Done® Workshop -
                            February 9th, 2024
                          </option> */}
                          {/* <option value="DiSC Certification In-Person Workshop - February 22nd & 23rd , 2024">
                          DiSC Certification In-Person Workshop -
                            February 22nd & 23rd , 2024
                          </option> */}
                        
                          {/* <option value="DCA BAtch 43 - February 17th, 2024">
                          DCA BAtch 43 - February
                            17th, 2024
                          </option> */}
                          {/* <option value="Crucial Conversations for Accountability®- February 22nd-23rd, 2024">
                          Crucial Conversations for Accountability®
                          February 22nd - 23rd, 2024
                          </option> */}
                        
                          {/* <option value="Crucial Influence - March 7th, 2024">
                          Crucial Influence -
                            March 7th, 2024
                          </option> */}
                         
                          <option value="Trapologist at Work® - March 18th, 2024">
                          Trapologist at Work® -
                            March 18th, 2024
                          </option>
                          <option value="DiSC Certification Virtual Workshop - March 19th,20th,21st & 22nd , 2024">
                          DiSC Certification Virtual Workshop -
                            March 19th,20th,21st & 22nd , 2024
                          </option>

                          {/* ------ */}

                          {/* <option value="SLII™ - Virtual -
                          January 12th & 13th, 2024">
                          SLII™ - Virtual -
                          January 12th & 13th, 2024
                          </option> */}

                          {/* <option value="SLII™ T4T F2F - January 19th & 20th, 2024">
                          SLII™ T4T F2F - January 19th & 20th, 2024
                          </option> */}

                          {/* <option value="|Self Leadership - Virtual -
                          February 1, 2024">
                          Self Leadership - Virtual -
                          February 1st, 2024
                          </option> */}

                          {/* <option value="Conversational Capacity - Virtual -
                          February 10, 2024">
                          Conversational Capacity - Virtual -
                          February 10th, 2024
                          </option> */}

{/* 
                          <option value=" Fearless Innovation -
                          February 22, 2024">
                          Fearless Innovation -
                          February 22nd, 2024
                          </option> */}

                         {/*  <option value="SLII™ - Virtual -
                          March 13th & 14 th, 2024">
                          SLII™ - Virtual -
                          March 13th & 14th, 2024
                          </option>*/}

                          <option value="SLII™ T4T F2F -
                          March 21st & 22nd, 2024">
                          SLII™ T4T F2F -
                          March 21st & 22nd, 2024
                          </option>

                          <option value="  Blanchard Management Essentials - Virtual-
                          March 21, 2024">
                          Blanchard Management Essentials - Virtual-
                          March 21st, 2024
                          </option>

                          <option value="SLII™ -
                          April 4, 2024">
                          SLII™ -
                          April 4th, 2024
                          </option>

                          <option value="Self Leadership - Virtual -
                          April 18th & 19th, 2024">
                          Self Leadership - Virtual -
                          April 18th & 19th, 2024
                          </option>

                          <option value="DiSC Certification Virtual Workshop April 23rd, 24th, 25th & 26th,2024 ">
                          DiSC Certification Virtual Workshop April 23rd, 24th, 25th & 26th,2024 
                          </option>

                          <option value="SLII™ - Virtual -
                          May 8th & 9th, 2024">
                          SLII™ - Virtual -
                          May 8th & 9th, 2024
                          </option>

                          <option value="SLII™ T4T F2F -
                          May 16th & 17th, 2024">
                          SLII™ T4T F2F -
                          May 16th & 17th, 2024
                          </option>

                          <option value="  Essential Motivators - F2F -
                          June 6, 2024">
                          Essential Motivators - F2F -
                          June 6th, 2024
                          </option>

                          <option value="Leading People Through Change  -
                          June 13, 2024">
                          Leading People Through Change  -
                          June 13th, 2024
                          </option>

                          <option value="Building Trust -
                          June 20, 2024">
                          Building Trust -
                          June 20th, 2024
                          </option>
                          <option value="DiSC Certification F2F Workshop -
                          May 16th & 17th , 2024">
                          DiSC Certification F2F Workshop -
                          May 16th & 17th , 2024
                          </option>
                          <option value="DiSC Certification Virtual Workshop -
                          June 4th & 7th , 2024">
                          DiSC Certification Virtual Workshop -
                          June 4th & 7th , 2024
                          </option>
                         
                        </select>
                      </div>
                      <div className="col-sm-6 mb-12">
                        <select name="referredby" required>
                          <option value="">Referred By*</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Google Search">Google Search</option>
                          <option value="Reference">Reference</option>
                        </select>
                      </div>
                      <div className="col-sm-6 mb-12 d-none">
                        <select name="leadsquared_mx_Business_Entity" required>
                          <option value="BYLD Group">BYLD Group</option>
                        </select>
                      </div>
                      <div className="col-lg-12 mb-12">
                        <textarea
                          className="from-control"
                          name="QuestionsComments"
                          placeholder="Questions/Comments:"
                        ></textarea>
                      </div>
                      <div className="col-lg-12 mb-12">
                        <input
                          id="submitbuttonform"
                          className="clientcornnerbtn width150"
                          type="submit"
                          value="Get in Touch"
                        />
                      </div>
                      <p id="showlabel" style={{ display: "none" }}></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
