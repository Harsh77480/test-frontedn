import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Join } from './pages/Join.jsx';
import { PlayGround } from './pages/PlayGround.jsx';
import axios from 'axios';
import { Login } from './components/Login.jsx';
import { ItemList } from './pages/ItemList/ItemList.jsx';

// import axios

const router = createBrowserRouter( [
  {path: "/", element: <App/> } ,
  {path: "/join", element: <Join/> } ,
  {path: "/play", element: <PlayGround/> } ,
  {path: "/login", element: <Login/> } ,
  {path: "/items_list", element: <ItemList/> } 

]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
