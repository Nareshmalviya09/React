import { useState } from 'react'
 
 
 
import Navbar from './component/Navbar'
import Probs from './component/probs';

function App() {
   const issubscribe =true;
    let link1="Home" 
   let link2="Contact Us" 
   let link3="Youtube" 
   let link4="Courses"

  return (
    <>    
      <Navbar link1={link1} link2={link2} link3={link3} link4={link4}/>
      <Probs/>
      
      {
        // issubscribe?<p>subscribed</p>:<p>not sbscribe </p>
      }
        {/* <h1 className='heading'>subscribe</h1>
        <h1 className='nvabar text-center'>subscribe</h1> */}
    </>
  )
}

export default App
