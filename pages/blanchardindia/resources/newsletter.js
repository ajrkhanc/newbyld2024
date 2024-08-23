import Link from "next/link";
import Head from "next/head";

export default function ThanYouLP() {
    return (
        <>
            <Head>
                <title>Monthly Newsletter | Blanchard International</title>
        <link rel="canonical" href="https://byldgroup.com/blanchardindia/resources/newsletter" />
                <meta name="description" content="Blanchard’s monthly newsletter can delivered to you with the touch of a button to keep you up-to-date with Blanchard's newest articles, webinars, podcasts, and research."/>
                <link rel="icon" href="/blanchardindia/favicon.ico" />
            </Head>

            <section className="bredkums2 pbb-100 border-bottom-left-radius-70 colortheme3bg">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/blanchardindia/">HOME</a></li>
                                <li className="brdlifirst"><a href="/blanchardindia/resources">RESOURCES</a></li>                                
                                <li><a><span>NEWSLETTER</span></a></li>
                            </ul>
                        </div>                
                            <div className="col-sm-12">
                                <div className="innerbedkms text-center">
                                    <h1>Monthly Newsletter</h1>                                    
                                </div>
                            </div>
                        </div>
                    </div>              
            </section>

          

            <section className="ptt-60 pbb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Your monthly guide to bringing out the best in people</h2>
                            <p className="headingp text-justify">
                            Blanchard's newsletter provides invaluable insights and strategies to help you build and cultivate a productive and engaged workforce.
                            </p>
                            <p className="headingp text-justify">
                            Our team of leadership experts and thought leaders delve into the most pressing topics in employee engagement, productivity, motivation, and performance. We bring you practical and actionable advice that you can implement immediately in your organization.
                            </p>
                            <p className="headingp text-justify">
                            Whether you are a seasoned leader or new to the field, the Blanchard's newsletter is the perfect resource to keep you up-to-date with the latest trends and best practices in talent development. 
                            </p>
                            <p className="headingp text-justify">
                            Subscribe today and join our community of inspired leaders who better themselves as they better others and drive success in their organizations.
                            </p>
                        </div> 
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/kbassets/img/kbnew/Ignite-on-Ipad.jpg" alt="Images" />
                            </div>
                        </div>                       
                    </div>
                </div>
            </section>

            <section className="colortheme2bg">           
            <div className="contact-area pt-45 pb-40 ptt-60 border-top-left-radius-70 border-top-right-radius-70">
               <div className="container">
                  <div className="row">
                    <div className="col-sm-12 text-center">
                    <h2 className="sectionh">Subscribe Today</h2>
                    <br></br>
                    </div>  
                    <div className="clearfix"></div>             
                    <div className="col-lg-3"></div>
                     <div className="col-lg-6">
                        <div className="contact-form">
                           <form id="contactForm">
                              <div className="row">
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <input type="text" name="leadsquared_FirstName" id="leadsquared_FirstName" className="form-control" placeholder="Your Name*" required />

                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <input type="email" name="leadsquared_EmailAddress" id="leadsquared_EmailAddress" className="form-control" placeholder="Work Email/Email*" required />

                                    </div>
                                 </div>
                                
                                 <div className="col-lg-12 col-md-12 text-center">
                                    <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="Subscribe" />
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                    <p id="showlabel" style={{ display: "none" }}></p>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     
                  </div>
               </div>
            </div>
         </section>

        </>
    )
}
