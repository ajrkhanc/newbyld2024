import Head from 'next/head'
import Slider from "react-slick";

import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";

export default function BrowseCourses(){

    const [modalOpen1, setModalOpen1] = React.useState(false);

    const WorkshopsForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform1").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://byldgroup.in/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/169/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                        window.location.href = "/classets/pdf/book-excerpt-crucial-influence.pdf"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-Company=" + event.target.organization.value)

    }

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <>
        <Head>
            <title>Create Lasting Behavior Change with Leadership Skills - Crucial Life-Changing Skills</title>
            <meta name="description" content="Utilize the new Science of Leadership with Influencer programA course backed by 50 years of research to help transform your ingrained human behavior.https://www.youtube.com/watch?v=vbflk9hXOUY LEARN AND MASTER THE SKILLS OF THE... Read more"/> 
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>

        <Modal className='toppc mwc500' toggle={() => setModalOpen1(!modalOpen1)} isOpen={modalOpen1} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen1(!modalOpen1)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc" onSubmit={WorkshopsForm}>
                        <h4>Want to get access?</h4>
                        <h5>Please Register to download </h5>
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Your Name*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Your Work Email*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="text" name="phone" class="form-control" placeholder="Phone No.*" required />
                        </div>

                        <div class="col-md-12">
                            <input type="text" name="organization" class="form-control" placeholder="Organization*" required />
                        </div>
                        <div class="col-md-12 text-center">
                        <input id='submitbuttonform1' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal>

        <section className='blckbgc'>
            <div className='container'>
                <div className='row y-middle'>
                    <div className='col-md-5 text-center'>
                        <img className='imgwwc' src="/classets/img/crucial-influence-3d-book-mock-up.png"/>
                    </div>
                    <div className='col-md-7'>
                        <div className='firsts'>
                        <h1>Crucial Influence</h1>
                        <h2>Create Lasting Behavior Change with Leadership Skills</h2>
                        <p>
                        Introducing Crucial Influence - where leaders unlock the secrets to harnessing personal, social, and environmental forces to ignite positive change.
                        </p>
                        <a href='#' onClick={() => setModalOpen1(!modalOpen1)}>Download First Chapter</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='section2c'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <h2>Master the Art of Influence and <br></br>Elevate Your Leadership Game.</h2>
                    </div>                    
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <div>
                            <p>
                            Fifteen years ago, Influencer introduced a groundbreaking concept to the corporate realm: true leadership depends not on position or personality but on understanding how the world works.
                            </p>
                            <p>
                            Built on half a century of social science research and an extensive global study of leaders, Crucial Influence unveils an approach for harnessing personal, social, and environmental factors to drive behavioral change.
                            </p>
                            <p>
                            This updated edition is a clear, pragmatic guide enriched with real-life case studies. It serves as an invaluable resource for seasoned and emerging leaders across all echelons as they embark on the defining journey of leadership: influencing others.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div>
                        <img className='imgwwc' src="/classets/img/group-talking-color-3.png"/>                        
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='secc3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <h2>Start reading today!</h2>
                        <a href='#' onClick={() => setModalOpen1(!modalOpen1)}>Download First Chapter</a>
                    </div>
                </div>
            </div>
        </section>


        <section className='blckbgc'>
            <div className='container'>
                <div className='row y-middle'>
                   
                    <div className='col-md-6'>
                        <div className='firsts'>                      
                        <h2>The Narrative Behind the Book</h2>
                        <p>
                        Explore the origins and the wealth of research that underpins Crucial Influence, along with insights from coauthor Joseph Grenny.
                        </p>
                        </div>
                    </div>

                    <div className='col-md-6 text-center'>
                    <video controls
                        src="/classets/video/Influencer-Training-Science-of-Leadership-Crucial-Learning.mp4"
                        poster="/classets/img/inf-vid.jpg"
                        width="100%">
                    </video>
                    </div>
                </div>
            </div>
        </section>

       

        </>
    )
}
