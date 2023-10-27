import { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Chat } from './pages/chat'
import CanvasComponent from './components/CanvasComponent'
import DrawingCanvas from './components/CanvasComponent'
import { Login } from './components/Login'
function App() {

  return (
    <>
      <Login/>
      {/* <Chat/> */}
    </>
  )
}

export default App
