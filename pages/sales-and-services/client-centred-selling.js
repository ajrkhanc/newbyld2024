import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function ClientCenteredSelling(){

    return(
        <>
          <Head>
            <title>Client Centred Selling - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
          </Head>
          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/client-centered-selling.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">

                    <div className='col-sm-4 leftsides'>
                          <div className='rightsidebar'>
                            <Sidebar></Sidebar>
                          </div>
                       </div>

                       <div class="col-sm-8 rightsides">
                       <div className="sec-title3 mbb-35 text-left rs-estimate">
                       <h4 className="countertoph2 text-left">Improve your Client-Centered Selling Quality and Experience</h4>
                            <p className='mtt'>
                            It tells you the right approach to break the ice and helps your selling efforts to meet success.
                            </p>
                            <h4 className="countertoph2 text-left">Objectives of the program:</h4>
                            <p>By the end of the program, the participants will be able to demonstrate their knowledge and skills to increase sales by:</p>
                            <ul className='estimate-info mtt-5'>
                                <li>Adding new clients.</li>
                                <li>Cross or up-selling.</li>
                                <li>Speeding-up sales cycle / decreasing sales costs.</li>
                                <li>Convincing the difficult clients ones.</li>                                
                            </ul>

                            <h4 className="countertoph2 text-left">The course is based on eight-stage process:</h4>                            
                            <ul className='estimate-info mtt-5'>
                                <li>Satisfaction/research- Customers are happy with the products they have.</li>
                                <li>Acknowledgment/analysis- Customer knows they have a problem and they are shown that it is worth solving.</li>
                                <li>Decision/confirmation- Customer has decided to solve the problem and make up their mind to buy your product.</li>
                                <li>Criteria/requirement- Customer decides on the criteria to select the product.</li>
                                <li>Measurement/specification- Customer now measures how success will look like.</li>
                                <li>Investigation/solution- Customer now looks for a product that meets the specification/solution.</li>
                                <li>Selection/close- Customer selects the product to meet their specification.</li>
                                <li>Reconsideration/maintenance- Customer now takes delivery, uses the product, and solves the problem.</li>
                            </ul>
                            
                            
                        </div>                        
                       </div>                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}