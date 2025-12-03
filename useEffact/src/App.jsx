 import React, { useState } from 'react'
 import { useEffect } from 'react'

//  useEffect - Hook - that provide side to our website 

// useEffect(<call back function>,<[dependency may be opational | variable]>)

 const App = () => {
  //  usecase :-1
  // useEffect(()=>{
  //   alert("component has render useeffect is workking ");
    
  // },[])

  //  usecase :-2
  const[dependency, setddepency]=useState(0)
  // useEffect(()=>{
  //   alert("component has render useeffect is workking ");
    
  // },[dependency])

  // usecase:-4
  useEffect(()=>{
    alert(`mount hora hai ${dependency}`);
    return ()=>{
      alert(`unmount hora hai ${dependency}`)
    }
    
  },[dependency])
   return (
     <div>
          <h1>{dependency}</h1>
      <button onClick={()=>setddepency(dependency+1)}>increment</button>
      
      </div>
   )
 }
 
 export default App
