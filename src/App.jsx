import React from 'react'
import './App.css'
// import { Route } from 'react-router-dom'
// import CanvasComponent from './components/DrawingCanvas'
// import DrawingCanvas from './components/DrawingCanvas'
// import { Login } from './components/Login'
// import { SignUp } from './components/SignUp'
import { Home } from './pages/Home/Home'
function App() {

  return (
    <>
    <div id="navbar" className="sticky">
        <div>
        Fair Fashion
        </div>
      </div>
    <div className='category-container'>

      {/* <SignUp/> */}
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      {/* <Chat/> */}
    </div>
    
    </>
  )
}

export default App
