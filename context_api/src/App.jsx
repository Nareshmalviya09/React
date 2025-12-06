import React from 'react'
import linkContext from './context/link'
const App = () => {
  const menu=["home","about","services"]
  return (
    <linkContext.Provider value={menu}>
    <div>


    </div>
    </linkContext.Provider>
  )
}

export default App