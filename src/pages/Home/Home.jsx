import {useRef, useEffect ,useState } from "react"
import axios from "axios";
// import { Chat } from "../chat";
import { io } from 'socket.io-client';
import { useNavigate } from "react-router-dom";
import './Home.css'
import { Card } from "../../components/Card/Card";
export function Home(){

    const upperIntersectionRef = useRef(null); 
    const [upperText, setUpperText] = useState("");
    const lowerIntersectionRef = useRef(null); 
    const [lowerText, setLowerText] = useState("");
    const imageIntersectionRef = useRef(null); 
    const [image, setImage] = useState("");
  

    useEffect(() => {

          
      


      const upperObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // If target element is intersecting with viewport
          if (entry.isIntersecting) {
            setUpperText("upper-twelve");
            // Stop observing after it becomes visible
            upperObserver.unobserve(entry.target);
          }
        });
      });

      const lowerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // If target element is intersecting with viewport
          if (entry.isIntersecting) {
            setLowerText("lower-twelve");
            // Stop observing after it becomes visible
            lowerObserver.unobserve(entry.target);
          }
        });
      });

      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // If target element is intersecting with viewport
          if (entry.isIntersecting) {
            setTimeout(()=>{ setImage("img"); },1000);
          }else{
            setTimeout(()=>{ setImage(""); },1000);
          }

        });
      });
  
      // Start observing the target element
      upperObserver.observe(upperIntersectionRef.current);
      lowerObserver.observe(lowerIntersectionRef.current);
      imageObserver.observe(imageIntersectionRef.current);
  
      // Cleanup function to disconnect the upperObserver
      return () => {
        upperObserver.disconnect();
        lowerObserver.disconnect();
        imageObserver.disconnect();
      };
    }, []); // Only run once on mount


    return <div className="container">
        <p ref={upperIntersectionRef}  className={`upper-twelve-default ${upperText} `} > 50% discount </p>
        <div className="default-wrapper">
          <div ref={imageIntersectionRef}  className={`default ${image}`}></div>
        </div>
        <p  ref={lowerIntersectionRef} className={`lower-twelve-default ${lowerText} `}>Shirts </p>
          {/* <Card/> */}
          {/* <div ref={cardIntersectionRef} className={`card ${card}`} ></div>   */}
        <div className="cards">
          <Card  />
          <Card  />
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
