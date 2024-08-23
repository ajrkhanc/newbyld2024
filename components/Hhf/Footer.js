import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
    <footer id="rs-footer" className="rs-footer style1 footercc mfooterc">
            <div className="footer-top ptt-10">
                <div className="container">
                    <div className="row">
                        <div className='col-sm-12'>
                            <h4 className='centerwhite'>Our Offerings</h4>
                        </div>
                        <div className="col-md-3">
                            <ul className="site-map">
                                <li><a href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings">Gold Of Desert Kings</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/council-of-the-marble-star">Council Of Marble Star</a></li>
                            </ul>                              
                        </div>
                        <div className="col-md-3">
                            <ul className="site-map">                                
                                <li><a href="/eaglesflightindia/our-offerings/expedition-outback">Expedition Outback</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/windjammer">Windjammer</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <ul className="site-map">                                
                                <li><a href="/eaglesflightindia/our-offerings/promises-promises">Promises! Promises!</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/rattlesnake-canyon">Rattlesnake Canyon</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <ul className="site-map">
                                <li><a href="/eaglesflightindia/our-offerings/museum-caper">Museum Caper</a></li>
                                <li><a href="/eaglesflightindia/our-offerings/king-kahufu">King Kahufu</a></li>
                            </ul>                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">                    
                    <div className="row y-middle">                        
                        <div className="col-lg-12">
                            <div className="copyright text-lg-start text-center ">
                                <p className='text-center'>
                                ©2023 EAGLES FLIGHT INDIA. All Rights Reserved. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
