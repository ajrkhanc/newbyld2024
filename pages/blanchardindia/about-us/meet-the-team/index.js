import Link from "next/link";
import Head from "next/head";

export default function MeetTheTeam() {
    return (
        <>
        <Head>
        <title>Meet-the-Team - Blanchard International</title>
        <meta name="description" content="FOCUSED ON OUR CLIENTS’ SUCCESS KEY LEADERS Blanchard’s dedicated leadership team is focused on delivering leadership development programs that exceed our clients’ expectations and help them achieve their goals. Yogesh Sood VIEW BIO Rajul Kansal VIEW BIO"/>
        <link rel="icon" href="/blanchardindia/favicon.ico" />
        </Head>
           <div className="inner-banner team-head-headbg">
                <div className="container">
                    <div className="inner-title text-center">
                    <h3>FOCUSED ON OUR <br/>CLIENTS’ SUCCESS</h3>
                        <ul>
                        <li>
                            <Link href="/blanchardindia/">Home</Link>
                        </li>
                        <li>Meet The Team</li>
                        </ul>
                    </div>
                </div>
                <div className="inner-lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="team-area pt-45 pb-40">
                <div className="container">
                    <div className="section-title text-center">
                    <h2>KEY LEADERS</h2>
                    <p>Blanchard’s dedicated leadership team is focused on delivering leadership development programs that <br/>exceed our clients’ expectations and help them achieve their goals.</p>
                        
                    </div>
                    <div className="row pt-45">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                            <div className="team-img">
                                <img src="/kbassets/img/yogesh.jpg" alt="Images"/>
                                <div className="team-social-icon">
                                    <ul className="team-social-link">
                                       
                                        <li>
                                        <a href="https://www.linkedin.com/in/yogesh-sood/" target="_blank" rel="noreferrer">
                                        <i className="bx bxl-linkedin"></i>
                                        </a>
                                        </li>                                      
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                            <h3><Link href="/blanchardindia/about-us/meet-the-team/yogesh-sood/">Yogesh Sood</Link></h3>
                            <span>Chairman & Managing Director</span>
                            </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                            <div className="team-img">
                                <img src="/kbassets/img/rajul.jpg" alt="Images"/>
                                <div className="team-social-icon">
                                    <ul className="team-social-link">
                                        
                                        <li>
                                        <a href="https://www.linkedin.com/in/rajul-kansal-he-him-his-09872410/" target="_blank" rel="noreferrer">
                                        <i className="bx bxl-linkedin"></i>
                                        </a>
                                        </li>                                       
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <h3><Link href="/blanchardindia/about-us/meet-the-team/rajul-kansal">Rajul Kansal</Link></h3>
                                <span>Senior Vice President- BYLD Group</span>
                            </div>
                            </div>
                        </div>                        */}
                        
                    </div>
                </div>
                </div>
 
        </>
    )
}