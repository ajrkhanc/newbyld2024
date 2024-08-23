import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

export default function Layout({children}) {
  return (
    <>
    <Nav></Nav>
    {children}  
    <Footer></Footer>
    </>
  )
}
