// pages/404.js

import Head from 'next/head'
const Custom404 = () => {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
               
                <meta name="description" content="" />
            </Head>
            <div className='container'>

                <div className="row ptt-60 pbb-60">
                    <div className="col-12">
                        <div className="contact-title text-center">
                            <h1>404 - Page Not Found</h1>
                            <p>Sorry, the page you are looking for does not exist.</p>
                        </div>
                    </div>


                </div>

            </div>

        </>

    );
};

export default Custom404;
