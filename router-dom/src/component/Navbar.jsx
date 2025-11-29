import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
       <div className='flex justify-between items-center p-5 bg-gray-800 text-white'>
   
        <h1>Navbar</h1>
    <div className='flex space-x-6'>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link><br />
        <Link to="/contact">contact</Link><br />
        
        </div>  
    </div>
  )
}
 export default Navbar