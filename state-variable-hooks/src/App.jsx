 import React from 'react'
 
//  step-1
import {useState} from 'react'
 
 const App = () => {
  // step-2
  const [a, seta]=useState(0)
  const increment=()=>{
    seta(a+1)
  }
  const decrement=()=>{
    seta(a-1)
  }
   return (
     <div className='flex flex-col justify-center items-center h-screen'>
             <h1>my count is {a}</h1>
      <button className='bg-purple-600 rounded-sm px-4 my-4' onClick={increment}>increment</button>
      
      <button className='bg-purple-600 rounded-sm px-4' onClick={decrement}>decrement</button>
     </div>
   )
 }
 
 export default App