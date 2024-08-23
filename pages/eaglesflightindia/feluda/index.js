import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {  
  return (
    <>
         <Head>
            <title>Feluda - Eaglesflightinidia</title>
            <meta name="description" content="Home Feluda, As you know, Crimes have been committed in 3 Cities across the world!   When each round is announced, You can access your Individual clue sets by clicking on the city name below."/> 
          </Head>

          <div className="themecoloforpdf ptt-40">
            <div className="container">
               <div className="row">
                  <div className="col-lg-5">
                     <img className="mlogosize" src="/efassets/img/mlogo.png"/>
                  </div>
                  <div className='col-sm-7'>
                    <ul className='float-right'>
                        <li><a className='mlist' href='/eaglesflightindia/mcw'>Home</a></li>
                    </ul>
                  </div>
                  <div className='clearfix'></div>
                  <div className='col-sm-3'></div>
                  <div className='col-sm-6'>
                      <div  className='mauto'>
                      <img className="" src="/efassets/img/mtheme.png"/>
                      </div>
                  </div>
                  <div className='clearfix'></div>
                  <div className='col-sm-3'></div>
                  <div className='col-sm-6'>
                      <div  className='mauto'>
                      <h5 className='kh5 ptt-40'>Feluda,</h5>
                      <h5 className='kh5 pbb-20'>As you know, Crimes have been committed in 3 Cities across the world!</h5>

                      <h5 className='kh5'>When each round is announced, You can access your Individual clue sets by clicking on the city name below.</h5>
                      </div>
                  </div>
                  <div className='clearfix ptt-40'></div>

                  <div className='col-sm-3'></div>
                  <div className='col-sm-6'>
                      <div  className='bottomimages'>
                      <a target="_blank" href='/efassets/pdf/feluda/7892e4_04b04f4b95bf404cbe22702fc2e379da.pdf'><img className="" src="/efassets/img/new-york.png"/></a>
                      <a><img className="" src="/efassets/img/l1.png"/></a>
                      <a target="_blank" href='/efassets/pdf/feluda/7892e4_ccfc989060444dae9396d3ed73c16b7a.pdf'><img className="" src="/efassets/img/paris.png"/></a>
                      <a><img className="" src="/efassets/img/l1.png"/></a>
                      <a target="_blank" href='/efassets/pdf/feluda/7892e4_d788a89364f443978c74c10f18308a7d.pdf'><img className="" src="/efassets/img/london.png"/></a>
                      </div>
                  </div>

                  <div className='clearfix'></div>

                  <div className='col-sm-3'></div>
                  <div className='col-sm-6'>
                      <div  className='bottomimages'>
                      <a href='#'><img className="" src="/efassets/img/l2.png"/></a>                      
                      </div>
                  </div>
                  <div className='clearfix pbb-30'></div>
               </div>
            </div>
         </div>

    </>
  )
}