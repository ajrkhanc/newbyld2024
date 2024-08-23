import Head from 'next/head'

export default function Aspectum(){    

    return(
        <>
          <Head>
            <title>Who We Are - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/who-we-are.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div className="rs-about style2 pt-50 pbb-50 aboutsection1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 pr-33 md-pr-15 md-mb-50">
                        <div className='aspectumshd'>
                               <img className='' src='/assets/img/who-we-are-2.png'/>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className='aspectumshd'>
                                <div className="sec-title">                               
                                    <p className='mmm'>
                                    BYLD Building Your Leadership Differentiators group is committed to work with individuals, teams and organisations and help them achieve leadership positions in their chosen areas.
                                    </p>                                    
                                    <p className='tirianpcolor1'>
                                    Started in 1998, BYLD has emerged as the largest integrator of value-added products/services – in HR, business operations, manpower staffing, executive coaching and organisational development. We provide end-to- end solutions to our clients across hierarchies and industries.
                                    </p>
                                    <p className='tirianpcolor1'>
                                    BYLD represents and works with 6 of the top 10 global leaders in Learning and Development and offers globally/nationally bench-marked and validated products and services to make our clients measurably more effective.
                                    </p>
                                    
                                </div>                                
                            </div>
                        </div>                   
                    </div>
                </div>                
            </div>
            
        </>
    )
}


