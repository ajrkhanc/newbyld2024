import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {  
  return (
    <>
         <Head>
            <title>King Kahufu Website - Eaglesflightinidia</title>
            <meta name="description" content=""/> 
          </Head>

          <div className='headsection ptt-20'>
            <div className='container'>
              <div className='row'>
                  <div className="col-lg-5">
                     <h3>King Kahufu – Agent Info Sheets</h3>
                  </div>
                  <div className='col-sm-7'>
                    <ul className='float-right dfl'>
                        <li><a className='mlist2' href='#'>HOME</a></li>
                        <li><a className='mlist2' target="_blank" href='/efassets/pdf/kkw/Winners-Notes.pdf'>WINNERS NOTE</a></li>                                               
                        <li><a className='mlist2' target="_blank" href='/efassets/pdf/kkw/4-minute-discussion-questions.pdf'>4 MIN READ</a></li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>

          <div className='kingkufubg ptt-100 pbb-100'>
            <div className='container ptt-50 pbb-50'>
              <div className='row'>
                <div className='col-md-4'></div>
                <div className="col-md-5">
                    <ul className='kingkufuli'>
                      <li><a target="_blank" href='/efassets/pdf/kkw/mkk-001-Role-1_Archaeologist_w-intro_INTERACTIVE.pdf'>ARCHAEOLOGIST</a></li>
                      <li><a target="_blank" href='/efassets/pdf/kkw/mKK-001-Role-3_Scientist_w-intro_INTERACTIVE.pdf'>SCIENTIST</a></li>
                      <li><a target="_blank" href='/efassets/pdf/kkw/mKK-001-Role-4_Entrepreneur_w-intro_INTERACTIVE.pdf'>ENTREPRENEUR</a></li>
                      <li><a target="_blank" href='/efassets/pdf/kkw/mKK-001-Role-5_Producer_w-intro_INTERACTIVE.pdf'>PRODUCER</a></li>
                      <li><a target="_blank" href='/efassets/pdf/kkw/mKK-001-Role-2_Mayor_w-Intro_INTERACTIVE.pdf'>MAYOR</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>

    </>
  )
}
