import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function StateOfTeams(){

    return(
        <>
          <Head>
            <title>State of Teams - Five Behaviors</title>
            <meta name="description" content="Ineffective teamwork affects your organization’s bottom line. But there’s a solution within reach. Organizations have never been more team-oriented than they are today—in fact, over 60% of employees’ time is now spent engaging with said teams. But this surging emphasis on teams has complicated our work lives as factors such as cross-functionality and working remotely […]"/> 
          </Head>

  
            <div className="rs-about style4 bg21 pt-70 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-12">
                        <div className="sec-title3">              
                        <h2 className="countertoph2 text-center">
                        Ineffective teamwork affects your organization’s bottom line. But there’s a solution within reach.
                        </h2>
                        <div className="mall5 text-center">
                        Organizations have never been more team-oriented than they are today—in fact, over 60% of employees’ time is now spent engaging with said teams. But this surging emphasis on teams has complicated our work lives as factors such as cross-functionality and working remotely (especially in the wake of COVID-19) have disrupted old patterns and practices. Wiley Workplace Learning Solutions recently conducted a survey to investigate the dynamic nature of teams in the workplace—and how organizations are responding.
                        </div>               
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-sm-2"></div>
                        <div className='col-sm-8'>
                        <div className="bannerform formshd mtt-30">
                            <div className="sec-title3 mbb-35 text-center">                                
                                <h4 className="countertoph2 text-left font34">Reserve Your Seat</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                            <form id="contact-form" className='clientcornner pbb-20'>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Enter Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                    
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Website">Website</option>
                                                <option value="Reference">Reference</option>
                                                <option value="Sales Representative">Sales Representative</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared-Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                        </div>
                        <div className='col-sm-2'></div>
                    </div>
                    
                </div>
            </div>
            </div>

  
        </>
    )
}