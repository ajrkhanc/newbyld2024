import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {  
  return (
    <>
         <Head>
            <title>Museum Caper 4 - Eaglesflightinidia</title>
            <meta name="description" content=""/> 
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
                      <div  className='mauto text-center'>
                      <h5 className='kh5 ptt-40 ffont45'>Role Assignments</h5>
                      <h5 className='kh5 pbb-20 ffont28'>Click on the Character assigned to you.</h5>
                      </div>
                  </div>
                  <div className='clearfix ptt-40'></div>

                  <div className='col-sm-2'></div>
                  <div className='col-sm-8'>
                      <div  className='bottomimages'>
                      <a href='/eaglesflightindia/karamchand'><img className="" src="/efassets/img/m41.png"/></a>                     
                      <a href='/eaglesflightindia/byomkesh-bakshi'><img className="" src="/efassets/img/m42.png"/></a>                      
                      </div>
                  </div>
                  <div className='clearfix'></div>

                  <div className='col-sm-2'></div>
                  <div className='col-sm-8'>
                      <div  className='bottomimages'>
                      <a href='/eaglesflightindia/jagga-jasoos/jagga-jasoos4'><img className="" src="/efassets/img/m43.png"/></a>                     
                      <a href='/eaglesflightindia/feluda'><img className="" src="/efassets/img/m44.png"/></a>                      
                      </div>
                  </div>
                  <div className='clearfix'></div>

                  <div className='clearfix pbb-30'></div>
               </div>
            </div>
         </div>

    </>
  )
}
