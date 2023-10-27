// import axios from 'axios';
// import { useState,useEffect } from 'react';
// import { Login } from '../components/Login';
// import { io } from 'socket.io-client';
// import DrawingCanvas from '../components/CanvasComponent';




// var socket = io('http://localhost:3000',{
//     query: {
//         token: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : null,
//         gameCode : ''
//       }
// } );//this will connect user to socket url


// //if user reloads / websocket disconnects remove user from contest 
// //all users disconnects then delete the game 
// //captca and name instead of email and password , no registration page 


export function Chat(){
    
//     // console.log();
    
//     const [text,setText] = useState('');
//     const [room,setRoom] = useState('');
//     const [on,setOn] = useState(1);
    
//     async function getData(){
//         const data = await axios.get('/user/login' );
//         console.log(data);
//     }
    
    
//     useEffect(()=>{
        
//         socket.on("ROOM JOINED",(joinData)=>{console.log("Joined room : ",joinData)});
//         socket.emit("join room",{"roomCode" : "test123","userData" : "user 123"});
        
//     },[]);
    
//     useEffect(()=>{
//         socket.on("broadcast",(data)=>{console.log(data)
//         })
//         socket.on("Game",(data)=>{console.log(data);
//             setOn(0);
//         });

//     });

//     // function joinRoom(){
//     //     socket.emit("join room",{"roomCode" : room,"userData" : "user 123"});//emit event to join a particular room 
//     // }
    
//     function send(){
//         // console.log(text);
//         socket.emit("message",{"roomCode" : "test123","message" : text});
//     }

//     function start(){
//         socket.emit("start",{"roomCode" : "test123","userData" : "user 123"});
//     }

    
        

return (<></>)};

//     <div className='canvas-container'>

//     {/* {text} */}
//     {
//         // on ? 
//          <DrawingCanvas props1 = {socket}/>   
//         //  : <></>
//     }
    



//     <div>
//     <input type="text" className="input-field" onChange={(e)=>{setText(e.target.value)}} /> 
//     <button onClick={send} className='button'>send</button>
    
//     { on ?<button onClick={start}>Start</button>:<></> }

//     {/* <input type="text" onChange={(e)=>{setRoom(e.target.value)}} /> 
//     <button onClick={joinRoom}>join</button> */}
//     </div>


//     </div>

// </>)

// }