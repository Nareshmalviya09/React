import { useState } from 'react'
 
 
 
import Navbar from './component/Navbar'
import Probs from './component/probs';

function App() {
   const issubscribe =true;
   

  return (
    <>    
      <Navbar/>
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
