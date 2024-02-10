import React, { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Chat } from './pages/chat'
import CanvasComponent from './components/DrawingCanvas'
import DrawingCanvas from './components/DrawingCanvas'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'
import { Home } from './pages/Home/Home'
function App() {

  return (
    <>
      {/* <SignUp/> */}
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      {/* <Chat/> */}
    </>
  )
}

export default App
