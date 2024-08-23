import Link from "next/link";
import Head from "next/head";

export default function TermsAndConditions() {
    return (
        <>
        <Head>
        <title>Terms And Conditions | Blanchard Research and Training India</title>
        <meta name="description" content="Blanchard has been training millions of world’s best managers who know how to ignite their people and bring out the best in them and deliver great results for their organizations."/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="inner-banner termsandconditions-head-headbg">
                <div className="container">
                    <div className="inner-title text-center">
                    <h3>Terms and Conditions</h3>
                        <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
                <div className="inner-lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="terms-area pb-70">
                <div className="container">            
                    <div className="row pt-45">
                    <div className="col-lg-12">
                        <div className="single-content policyh3">   
                            {/* <h3 className='mb-0'>Terms And Conditions</h3>    */}
                            <h4 class="countertoph2 text-left">Terms And Conditions</h4>                      
                            <p className='text-justify pb-10'>
                            According to the Information Technology Act, 2000 and rules thereunder, as applicable, and the
amended provisions pertaining to electronic records in various statutes, the document is an
electronic record. Neither a physical nor a digital signature is required for this electronic record,
which is created by a computer system.
                            </p>

                            <p className='text-justify pb-10'>
                            In accordance with Rule 3 (1) of the Information Technology (Intermediaries Guidelines) Rules, 2011,
this document outlines the rules and regulations, privacy policy, and Terms and Conditions for
accessing and using the website <a href='https://byldgroup.com/'>www.byldgroup.com</a>  
                            </p>

                            <p className='text-justify pb-10'>
                            Your interaction with the Website, its services and tools are bound by the following terms and
conditions (&quot;Terms of Use&quot;), which also include relevant policies. Any transactions made on the
Website will be governed by the applicable policies. By simply using the Website, you are entering
into a contract with BYLD Group, and these terms and conditions, as well as policies, form your
binding obligations to BYLD Group.
                            </p>

                            <p className='text-justify pb-10'>
                            You must read these Terms &amp; Conditions carefully before using this site. These Terms of Use apply to
any natural or legal person who has agreed to become a buyer on the Website by providing
Registration Data while registering as a Registered User on the Website using the computer systems.
End users are referred to as &quot;you&quot; or &quot;your&quot; or &quot;user&quot; for the purpose of these Terms of Use.
                            </p>
                            
                            <p className='text-justify pb-15'>
                            By utilizing any of our services on the Website, you are bound by the applicable rules, guidelines,
policies, and terms. These will be considered a part of our Terms of Use and subject to change at our
discretion without prior notice. We recommend regularly reviewing these Terms for updates. Your
continued use of the Website after any changes indicates your agreement with them. As long as you
abide by these Terms, you are granted a personal, limited privilege to access and use the Website.
                            </p>
                            
                         
                            <h4 class="countertoph2 text-left">Get in touch with us</h4> 
                            
                            <p className='text-justify pb-15'>
                            Please contact us for any questions or comments (including all inquiries unrelated to copyright
infringement) regarding this Website on on <a href='info@byldgroup.com'>info@byldgroup.com</a>
                            </p>
                        </div>
                    </div>                      
                    </div>
                </div>
            </div>
 
        </>
    )
}
