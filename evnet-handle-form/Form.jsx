import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [input, setinput]=useState()
  const inputhandle = (e)=>
    {
        let name = e.target.name;
        let value = e.target.value;
        setinput({...input,[name]:value})
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(input);
      
    }
  return (
    <div className=' h-screen flex justify-center bg-lime-500 items-center '>
     <form onSubmit={handlesubmit}>

      <div className='flex flex-col'>
        <label htmlFor="name">Name:-</label>
        <input type="text" name='name' className='text-black bg-amber-800' onChange={inputhandle} />
     </div>
      
      
      <div className='flex flex-col'>
        <label htmlFor="email">Email:-</label>
        <input type="text" name='email' className='text-black bg-amber-800' onChange={inputhandle} />
     </div>
     <button type='submit'>Submit</button>
     </form>

     
    </div>
  )
}

export default Form