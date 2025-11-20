//   import export
//  real dom -> (use in javaScript) vs virtual dom->(use react.js)
import './App.css'
import Navbar from './component/NavBar'
function App() {
  const name="this is  "

  return (
    <>
    <Navbar/>
    <div>
      <h1 className="heading">Susbcribe</h1>
    </div>
    </>
  )
}

export default App
