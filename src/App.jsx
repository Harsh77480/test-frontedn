import { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Chat } from './pages/chat'
import CanvasComponent from './components/DrawingCanvas'
import DrawingCanvas from './components/DrawingCanvas'
import { Login } from './components/Login'
import https from "https"
import axios from 'axios'
// axios.defaults.httpsAgent = new https.Agent({
//   rejectUnauthorized : false
// });
function App() {
  

  return (
    <>
      <Login/>
      {/* <Chat/> */}
    </>
  )
}

export default App
