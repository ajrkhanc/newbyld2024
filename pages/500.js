// pages/404.js

import Head from 'next/head'
const Custom500 = () => {
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
                            <h1>500 - Internal Server Error</h1>
                            <p>Sorry, something went wrong on the server.</p>
                        </div>
                    </div>


                </div>

            </div>

        </>

    );
};

export default Custom500;
