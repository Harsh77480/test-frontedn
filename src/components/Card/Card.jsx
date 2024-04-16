import {useRef, useEffect ,useState } from "react"
import axios from "axios";
import { io } from 'socket.io-client';
import { useNavigate } from "react-router-dom";
import './Card.css'
export function Card(item){
    

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
      },{threshold:0.3})
  
      cardObserver.observe(cardIntersectionRef.current);
  
      // Cleanup function to disconnect the upperObserver
      return () => {
        cardObserver.disconnect();
      };
    }, []); // Only run once on mount

    // console.log()
    const x = { backgroundImage:
    `url(${item.item.image})` }

      return <div ref={cardIntersectionRef} className={`card ${card}` } >
      <div className ="card-image" style={x}></div>
      <div className ="card-text">
          
      <div className="name-like">
          <div className="name">{item.item.title}</div>
          <div className="like"></div>
      </div>
    
        
        <div className="price">
            
            <div className="original-price">
                <div className="original-price-value">
                    {/* &#8377;100 */}
                    &#8377;{item.item.original_price} 
                    <div className="original-price-value-cross"></div>
                </div>
            </div>
            
            {/* <div className="dicount-price">&#8377;{100} </div> */}
            <div className="dicount-price">&#8377;{item.item.discount_price} </div>
            {/* <div className="dicount-percent"> 10 <span className="discount-off">%OFF</span></div> */}
            <div className="dicount-percent"> {item.item.discount_percent} <span className="discount-off">%OFF</span></div>
        </div>
        

</div>

</div>  

}
