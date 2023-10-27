import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Join } from './pages/Join.jsx';
import { PlayGround } from './pages/playGround.jsx';
// import axios

const router = createBrowserRouter( [
  {path: "/", element: <App/> } ,
  {path: "/join", element: <Join/> } ,
  {path: "/play", element: <PlayGround/> } 

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
