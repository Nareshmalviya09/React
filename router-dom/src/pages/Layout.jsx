import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    < >
        <Navbar/>
        <Outlet/>
    </>
  )
}
