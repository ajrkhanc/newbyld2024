import Link from "next/link";
import Head from "next/head";

export default function Books() {
    return (
        <>
        <Head>
        <title>Books - Blanchard International</title>
        <link rel="canonical" href="https://byldgroup.com/blanchardindia/books" />
        <meta name="description" content="Lead the winning path with Leadership training programs in India. Acquiring Leadership training by the experts help in the development of the individuals."/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
         <div className="inner-banner books-head-headbg">
            <div className="container">
                <div className="inner-title text-center">
                    <h3>Books</h3>
                </div>
            </div>
            <div className="inner-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            </div>
            <div className="what-did-area pb-40 pt-45 style2 themebg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="what-did-left-content">
                        <div className="row row-eq-height eventsandworkshopbox">
                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/kbassets/img/leading-at-a-higher-leve.jpg" alt="Images"/>
                                    <h3>Leading at a Higher Level</h3>
                                    <p className="text-justify">
                                    Rs: 2440
                                    </p>
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                        <Link href="#">
                                            <a className="default-btn-two">BUY NOW<i className="bx bx-right-arrow-alt"></i></a>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/kbassets/img/the-new-one-minute-manager.jpg" alt="Images"/>
                                    <h3>The New One Minute Manager</h3>
                                    <p className="text-justify">
                                    Rs: 160
                                    </p>
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                        <Link href="#">
                                            <a className="default-btn-two">BUY NOW<i className="bx bx-right-arrow-alt"></i></a>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
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
