import {useRef, useEffect ,useState } from "react"
import axios from "axios";
// import { Chat } from "../chat";
import { io } from 'socket.io-client';
import { useNavigate } from "react-router-dom";
import './Home.css'
import { Card } from "../../components/Card/Card";


export function Home({id,title1,title2,category_image,items}){
  
  const navigation = useNavigate();

    const upperIntersectionRef = useRef(null); 
    const [upperText, setUpperText] = useState("");
    const lowerIntersectionRef = useRef(null); 
    const [lowerText, setLowerText] = useState("");
    const imageIntersectionRef = useRef(null); 
    const [image, setImage] = useState("");
    const [categoryImageAdder,setCategoryImageAdder] = useState("")
    const [opacity,setOpacity] = useState(0)

    const x = { backgroundImage:
      `url(${categoryImageAdder})` ,
      
      opacity:opacity
    }



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
            setCategoryImageAdder(category_image)
            setTimeout(()=>{
              setOpacity(1)
            },1000)

          }else{
            setTimeout(()=>{ setImage(""); },1000);
            setCategoryImageAdder("")
            setTimeout(()=>{
              setOpacity(0)
            },1000)

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


    const handleCategoryClick = () =>{
      navigation('/items_list',{ state: { 'code': id } });
    }


    return <div className="container">
        <p ref={upperIntersectionRef}  className={`upper-twelve-default ${upperText} `} > {title1} </p>
        <div className="default-wrapper">
          <div ref={imageIntersectionRef} onClick={()=>handleCategoryClick()} className={`default ${image}`} style={x} ></div>
        </div>
        <p  ref={lowerIntersectionRef} className={`lower-twelve-default ${lowerText} `}>{title2} </p>
        <div className="cards">
          {
            items.map((item)=>(
              // console.log(item)
               <Card item = {item} /> 
              
            ))
          }
          {/* <div ref={cardIntersectionRef} className={`card ${card}`} ></div>   */}
          
          {/* <Card  />  */}
          {/* <Card  /> */}

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
