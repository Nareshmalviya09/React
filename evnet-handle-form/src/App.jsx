import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setcount]=useState(0)

  const increse =()=>{
    setcount(count+1)
  }
  const decrese =()=>{
    if(count>0){
        setcount(count-1)
    }
    
  }
  const reset =()=>{
    setcount(0)
  }
  return (
    <div className='bg-blue-950 text-white flex flex-col items-center justify-center'>
      <div className='mb-8'>
        <h1 className='text-3xl font-semibold'>{count}</h1>
      </div>
      <div>
        <button className='bg-blue-400 px-8 py-2 rounded-lg ml-4' onClick={increse}>+</button>
        <button className='bg-blue-400 px-8 py-2 rounded-lg ml-4' onMouseEnter={decrese}>-</button>
        <button className='bg-blue-400 px-8 py-2 rounded-lg ml-4' onMouseLeave={reset}>Reset</button>
      
      </div>
   
    </div>
  )
}

export default App