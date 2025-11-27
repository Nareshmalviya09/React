import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  BrowserRouter , router, Route, Routes} from "react-router-dom"
 
import Navbar from './component/Navbar'
import { Layout } from './pages/Layout'

function App() { 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Layout/>}>
      <Route index elemen={<Home/>}/>
      <Route path='/about' elemen={<About/>}/>
      <Route path='' elemen={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
