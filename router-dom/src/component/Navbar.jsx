import React from 'react'

export const Navbar = () => {
  return (
       <div className='flex justify-between items-center p-5 bg-gray-800 text-white'>
   
        <h1>Navbar</h1>
    <div className='flex space-x-6'>
        <a href="/Home">Home</a> <br />
        <a href="/about">About</a><br />
        <a href="/contact">contact</a><br />
        
        </div>  
    </div>
  )
}
 export default Navbar