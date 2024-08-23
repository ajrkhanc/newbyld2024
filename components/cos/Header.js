import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <>

    {/* <div className="offwrap"></div>
    <div id="pre-load">
    <div id="loader" className="loader">
        <div className="loader-container">
            <div className='loader-icon'><img src="/assets/img/byld-logo.svg" alt="BYLD"/></div>
        </div>
    </div>
    </div> */}


           
<div className="full-width-header">            
            <header id="rs-header" className="rs-header style2 header-transparent mobileh">              
                <div className="menu-area menu-sticky">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col mw6 header-logo ptt-5 pbb-5">                                  
                                <div className="logo-area">
                                    <a href="#">
                                        <img src="/assets/img/byld-logo.svg" alt="logo"/>  
                                    </a>
                                </div>
                            </div>
                            {/* <div className="col mw6">
                                <div className="rs-menu-area">
                                <div className="logo-area text-right">
                                    <a href="#">
                                        <img src="/assets/img/insideco.jpg" alt="logo"/>  
                                    </a>
                                </div> 
                                </div>
                            </div> */}
                          
                        </div>
                    </div>
                </div>             
            
            </header>
          
        </div>
    </>
  )
}
