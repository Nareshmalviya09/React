import React from 'react'

const Form = () => {
    const handlesubmit = ()=>{

    }
  return (
    <div className=' h-screen flex justify-center bg-lime-500 items-center '>
     <form onSubmit={handlesubmit}>
      <div className='flex flex-col'>
        <label htmlFor="name">Name:-</label>
        <input type="text" className='text-black bg-amber-800' />
     </div>
     <button type='submit'>Submit</button>
     </form>

     
    </div>
  )
}

export default Form