import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function Coaching() {

    return (
        <>
            <Head>
                <title>Our Solutions | Coaching | BYLD Group</title>
                <meta name="description" content="BYLD Group offers various coaching mentoring and leadership mentoring programs to bring organizational change and development. To know more, check out the page." />
            </Head>

            <section className='coachingmain'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='pagetitle text-left'>
                                <h1>Bringing transformational changes through coaching</h1>
                                <p>Be future-ready and optimize your people’s performance with coachin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 rightsides">
                            <div className="sec-title3 mbb-35 text-left">
                                <h4 className="countertoph2 text-left font30">Coaching</h4>
                                <div className="heading-border-line left-style"></div>
                                <p className='mtt-30'>
                                    BYLD Group offers time-tested, customized and diverse coaching solutions. Our team of professional coaches, best consultants and facilitators across geographies offer a wide range of coaching solutions to teams,  individuals and organizations.
                                </p>
                                <p className='solutionp'>Coaching solutions by BYLD Group primarily include:</p>
                            </div>

                            <div className='row'>
                                <div class="col-sm-3">
                                    <a class="productbox" href="/coaching/become-a-coach">
                                        <div class="service-grid">
                                            <div class="service-icon">
                                                <img src="/assets/img/icon/coaching-academy.png" alt="" />
                                            </div>
                                            <h4 class="title mb-18">Become A Coach (ICF)</h4>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-sm-3">
                                    <a class="productbox" href="/coaching/insideout-coaching">
                                        <div class="service-grid">
                                            <div class="service-icon">
                                                <img src="/assets/img/icon/talentsmart-eq.png" alt="" />
                                            </div>
                                            <h4 class="title mb-18">Inside Out Coaching</h4>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-sm-3">
                                    <a class="productbox" href="/coaching/breakthroughs">
                                        <div class="service-grid">
                                            <div class="service-icon">
                                                <img src="/assets/img/icon/link.png" alt="" />
                                            </div>
                                            <h4 class="title mb-18">Breakthroughs</h4>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-sm-3">
                                    <a class="productbox" href="/coaching/executive-coaching">
                                        <div class="service-grid">
                                            <div class="service-icon">
                                                <img src="/assets/img/icon/link.png" alt="" />
                                            </div>
                                            <h4 class="title mb-18">Executive Coaching</h4>
                                        </div>
                                    </a>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div class="rs-process style1 pt-100 pb-100 md-pt-70 md-pb-70">
                <div class="container">
                    <div class="row y-middle">
                    </div>
                </div>
                <div class="container custom2">
                    <div class="process-effects-layer">
                        <div class="row">
                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <a className='hccs' href='/our-solutions/experiential-learning'>
                                            <div class="number-image">
                                                <span>Experiential Learning</span>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <a className='hccs' href='/our-solutions/leadership-and-talent-development'>
                                            <div class="number-image">
                                                <span>Leadership & Performance</span>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <a className='hccs' href='/our-solutions/assessments'>
                                            <div class="number-image">
                                                <span>Assessments</span>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <a className='hccs' href='/bespoke'>
                                            <div class="number-image">
                                                <span>BeSpoke</span>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                            </div>



                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <a className='hccs' href='/our-solutions/staffing'>
                                            <div class="number-image">
                                                <span>Staffing & Search</span>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}