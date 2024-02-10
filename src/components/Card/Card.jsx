import {useRef, useEffect ,useState } from "react"
import axios from "axios";
import { io } from 'socket.io-client';
import { useNavigate } from "react-router-dom";
import './Card.css'
export function Card(){
    
    const cardIntersectionRef = useRef(null); 
    const [card, setCard] = useState("");
  

    useEffect(() => {

      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // If target element is intersecting with viewport
          if (entry.isIntersecting) {
            setTimeout(()=>{ setCard("show"); },1000);
          }else{
            setTimeout(()=>{ setCard(""); },1000);
          }

        });
      },{threshold:0.6})
  
      cardObserver.observe(cardIntersectionRef.current);
  
      // Cleanup function to disconnect the upperObserver
      return () => {
        cardObserver.disconnect();
      };
    }, []); // Only run once on mount

return <div ref={cardIntersectionRef} className={`card ${card}` } >
<div className ="card-image"></div>
<div className ="card-text">
    
<div className="name-like">
    <div className="name">Roadster Solid Round Neck T-shirt</div>
    <div className="like"></div>
</div>
    
        
        <div className="price">
            
            <div className="original-price">
                <div className="original-price-value">
                    &#8377;100 
                    <div className="original-price-value-cross"></div>
                </div>
            </div>
            
            <div className="dicount-price">&#8377;60</div>
            <div className="dicount-percent"> 15<span>%OFF</span></div>
        </div>
        

</div>

</div>  

}
