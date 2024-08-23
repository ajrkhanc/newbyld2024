import Head from 'next/head';
 
export default function PaymentFailed() {
  return (
    <>
      <Head>
        <title>Payment Failed | Example Company</title>
      </Head>
 
      <main>
        <h1>Payment Failed</h1>
        <p>Unfortunately, your payment has failed. Please try again or contact customer support for assistance.</p>
      </main>
    </>
  )
}