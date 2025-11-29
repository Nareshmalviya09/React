import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export const Layout = () => {
  return (
    < >
        <Navbar/>
        <Outlet/>
         <Footer/>
    </>
  )
}
