import React from 'react'
import './App.css'
import {useRef, useEffect ,useState } from "react"

// import { Route } from 'react-router-dom'
// import CanvasComponent from './components/DrawingCanvas'
// import DrawingCanvas from './components/DrawingCanvas'
// import { Login } from './components/Login'
// import { SignUp } from './components/SignUp'
import { Home } from './pages/Home/Home'
import { PreLoader } from './components/PreLoader/PreLoader';
function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    setTimeout(()=>{
      setLoading(false)
    },1000)

  }, []);


  return (
    <>
    <div id="navbar" className="sticky">
        <div>
        Fair Fashion
        </div>
      </div>

      {loading ? (
        <PreLoader />
      ) : (
        // <Home />


    <div className='category-container'>

      {/* <SignUp/> */}
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      {/* <Chat/> */}
    </div>
    
      )}
    </>
  )
}

export default App
