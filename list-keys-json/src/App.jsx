import React from 'react'
import students from './Student'

const App = () => {
  return (
    <div className='h-screen bg-zince-900'> 
      <ul>
        {students.map((stud,i)=> <li>Name: {stud.name}, Roll no: {stud.rollNo}</li>)}
      </ul>


    </div>
  )
}

export default App