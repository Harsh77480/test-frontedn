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
      <Login/>
      {/* <Chat/> */}
    </div>
    
      )}
    </>
  )
}

export default App
