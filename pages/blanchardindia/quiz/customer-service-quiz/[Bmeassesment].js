import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Bmeassesment;

    const res = await fetch(`https://kbblogs.vercel.app/api/customer-service-quiz/${caturl}`)
    const result = await res.json()
    return {
        props: {
            result
        },
    }
}

export default function result({ result }) {

    function downloadAsPDF() {
        var element = document.getElementById('demo');
        html2pdf(element);
    }

    if (!Object.keys(result).length) {
        return <div className='container'>
            <div className='row'>
                <div class="col-lg-12 contact-title nofound">

                    <h1>Nothing Found</h1>
                    <p>
                        Please Submit You Asessement Before.
                    </p>
                    <h6>
                        <a class="submit" href='/quiz/customer-service-quiz'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>


            <Head>
                <title>BME and First Time Manager Result</title>
                <meta name="description" content="BME and First Time Manager" />
                <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>

            </Head>




            <section id='demo' className='pbb-10 pll-20 prr-20 paddingsall'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h4 className="countertoph2 text-center resh">DOES YOUR ORGANIZATION HAVE A SERVICE MENTALITY?</h4>
                            <div className="headh text-center">
                                <h3>Thank you for participating in our customer service mentality quiz.</h3>
                                <h5>You can now view your results below.</h5>
                            </div>
                        </div>

                        <div className='col-sm-12'>
                            {
                                result.slice(0, 1).map((results) => {

                                    var px = '%'
                                    var result1 = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) + parseInt(results.q10)

                                    var overall = result1
                                    var overresult = overall

                                    var overallresult = overresult.toFixed(2) + px
                                    var overallbar = overresult

                                    return (
                                        <>
                                            <div class="assessment-result-block text-center">
                                                <h3>Your Customer Service Mentality Results: <span className='rco'>{overresult}</span></h3>
                                                <div class="">
                                                    {
                                                        (() => {
                                                            if (overallbar <= 17)
                                                                return <>
                                                                    <p>
                                                                    Creating customer loyalty is easier said than done and many organizations struggle with optimizing their service delivery methods and clarifying a service vision. One place to start on the road to customer service improvement is to focus on the systems and processes that make it easy for your customers to do business with you. Looking at the service chain from your customer's point of view can provide a wealth of information for improving the customer experience.
                                                                    </p>
                                                                </>
                                                            if (overallbar <= 35)
                                                                return <>                                                                   
                                                                   <p>
                                                                   If you scored between 18 and 35 you're off to a good start, but there's room for improvement. Empowering your customer-facing employees to listen with the customer in mind, diagnose customer needs and issues, and make decisions on the customer's behalf, can greatly improve your odds of improving customer satisfaction and ultimately their loyalty.
                                                                    </p>
                                                                </>

                                                            else
                                                                return <>
                                                                    <p>
                                                                    Congratulations! If you scored between 36 and 50, your organization is most likely providing the kind of legendary service that keeps your customers returning year after year. Continue to hone and communicate the service vision, provide customer-facing employees with training that helps them deliver a customer experience in alignment with that vision, and continue to make refinements and innovations along the way.
                                                                    </p>
                                                                </>
                                                            
                                                        })()
                                                    }

                                                </div>
                                               
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>



                        <div className='col-sm-12'>
                            <div className="headh text-center">
                                <h3>DOWNLOAD NOW: THE POWER OF CUSTOMER LOYALTY</h3>
                                <p>
                                Building a loyal customer base takes time, energy, and commitment. It begins by developing a shared vision that is focused on the customer and the experience you want your customers to have when they interact with your company.
                                </p>
                                <p>
                                Creating an aligned organization that is focused on the customer means creating an energizing environment for employees and balancing concern for people with concern for results; it also means making sure that the first drives the second. It continues by building the leadership capacity necessary to create engaged employees who are passionate about delivering that experience and understanding how their role fits into the overall picture.
                                </p>
                                <p>
                                By creating an environment that allows employees to win and be passionate about what they do, employees in turn take care of the customers at a level that causes customers to return year after year.
                                </p>
                                <h5><a href='https://resources.kenblanchard.com/white-paper-access/the-power-of-customer-loyalty'>Download The Power of Customer Loyalty PDF now</a></h5>

                                <h3>LEARN MORE ABOUT BLANCHARD'S LEGENDARY SERVICE PROGRAM</h3>

                                <p>
                                Legendary Service is defined as consistently delivering ideal service that keeps customers coming back and results in a competitive advantage for the organization. Our Legendary Service program—a one-day program for all customer facing employees—focuses on the service providers and what they can do individually in their jobs to provide better service and take more of a lead to serve customers. The half-day manager's program—for service champions or leaders in the organization—provides the framework and leadership skills to create an organization, and an organizational culture, that will be known for its Legendary Service.
                                </p>
                                <h5><a href='/products-services/customer-service-training'>More Information on the Legendary Service program</a></h5>
                            </div>
                        </div>
                    </div>
                </div>

        
            </section>

            <br></br>
            <br></br>
        </>
    )
}



