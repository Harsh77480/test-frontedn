import React, { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Chat } from './pages/Chat'
import CanvasComponent from './components/DrawingCanvas'
import DrawingCanvas from './components/DrawingCanvas'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'
function App() {

  return (
    <>
      <SignUp/>
      {/* <Chat/> */}
    </>
  )
}

export default App
