import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {  
  return (
    <>
         <Head>
            <title>Jagga Jasoos - Eaglesflightinidia</title>
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
                      <h5 className='kh5 ptt-40'>Jagga Jasoos,</h5>
                      <h5 className='kh5 pbb-20'>As you know, Crimes have been committed in 3 Cities across the world!</h5>

                      <h5 className='kh5'>When each round is announced, You can access your Individual clue sets by clicking on the city name below.</h5>
                      </div>
                  </div>
                  <div className='clearfix ptt-40'></div>

                  <div className='col-sm-3'></div>
                  <div className='col-sm-6'>
                      <div  className='bottomimages'>
                      <a target="_blank" href='/efassets/pdf/jagga-jasoos/7892e4_5f811e8b989242d9a3a557ba1ab5f81e.pdf'><img className="" src="/efassets/img/new-york.png"/></a>
                      <a><img className="" src="/efassets/img/l1.png"/></a>
                      <a target="_blank" href='/efassets/pdf/jagga-jasoos/7892e4_7ab61cced24d49a198dd0b63b8369680.pdf'><img className="" src="/efassets/img/paris.png"/></a>
                      <a><img className="" src="/efassets/img/l1.png"/></a>
                      <a target="_blank" href='/efassets/pdf/jagga-jasoos/7892e4_ce90eff0d4144da89aa60258c5b356f5.pdf'><img className="" src="/efassets/img/london.png"/></a>
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
