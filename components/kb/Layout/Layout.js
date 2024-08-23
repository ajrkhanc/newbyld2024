import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

export default function Layout({children}) {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    {children}  
    <Footer></Footer>
    </>
  )
}
