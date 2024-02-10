import {useRef, useEffect ,useState } from "react"
import axios from "axios";
// import { Chat } from "../chat";
import { io } from 'socket.io-client';
import { useNavigate } from "react-router-dom";
import './Home.css'
export function Home(){

    const intersectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {

          const d = async()=>{
        const credentials = JSON.parse(localStorage.getItem('userInfo'));
        const data = await axios.get('http://127.0.0.1:8000/api/items/');
            console.log(data);}   
        d();
      


      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // If target element is intersecting with viewport
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stop observing after it becomes visible
            observer.unobserve(entry.target);
          }
        });
      });
  
      // Start observing the target element
      observer.observe(intersectionRef.current);
  
      // Cleanup function to disconnect the observer
      return () => {
        observer.disconnect();
      };
    }, []); // Only run once on mount


    return <div className="container">
        <p ref={intersectionRef}  className={`upper-twelve-default ${isVisible ? "upper-twelve" : ""} `} > 50% discount </p>
        <div className="default-wrapper">
          <div className="default"></div>
        </div>
        <p className="lower-twelve-default ">Shirts </p>
        <div className="cards">
          <div className="card"></div>  
          <div className="card"></div>  
        </div>
      </div>
}

// useEffect(()=>{
//     const d = async()=>{
//         const credentials = JSON.parse(localStorage.getItem('userInfo'));
//         const data = await axios.get('user/login',{
//             headers: {
//                 'Authorization': `Bearer ${credentials.token}`}
//             });
//             console.log(data);}   
//     d();
// },[]);
