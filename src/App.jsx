import React from 'react'
import './App.css'
import {useRef, useEffect ,useState } from "react"
import axios from 'axios'
// import { Route } from 'react-router-dom'
// import CanvasComponent from './components/DrawingCanvas'
// import DrawingCanvas from './components/DrawingCanvas'
// import { Login } from './components/Login'
// import { SignUp } from './components/SignUp'
import { Home } from './pages/Home/Home'
import { PreLoader } from './components/PreLoader/PreLoader';
function App() {

  const [loading, setLoading] = useState(true);
  const [categoryList,setCategoryList] = useState([])
  useEffect(() => {
    
    


    const d = async()=>{
      const data = await axios.get('https://ecom-lszh.onrender.com/api/categories/');
      
      setTimeout(()=>{
        setLoading(false)
      },3000)

          console.log(data.data);
          setCategoryList(data.data['categories_list'])
          // console.log(data.data['categories_list'])
      }   
      d();


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

      {
        categoryList.map((category)=>(

          <Home id={category.id} title1={category.title1} title2={category.title2} category_image={category.image} items={category.items}/>

        ))

      }

      {/* <Chat/> */}
    </div>
    
      )}
    </>
  )
}

export default App
