// pages/error.js
'use client'
import Head from 'next/head'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const Error = ({ statusCode }) => 
{
    const router = useRouter();

 useEffect(() => {
    // Redirect to custom 404 page if status code is 404
    if (statusCode === 404) {
      router.push('/404');
    }
  }, [statusCode, router]);

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
                            <h1>{statusCode} - Something went wrong</h1>
                            <p>Sorry, an error occurred on the server.</p>
                        </div>
                    </div>


                </div>

            </div>

        </>

    );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
  
export default Error;
