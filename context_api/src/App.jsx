import React from 'react'
import linkContext from './context/link'
import Navbar from './components/Navbar'
const App = () => {
  const menu=["home","about","services"]
  return (
    <linkContext.Provider value={menu}>
    <div>
      hello
    <Navbar/>
    </div>
    </linkContext.Provider>
  )
}

export default App