import { useEffect, useState } from "react"
import { Socket, io } from 'socket.io-client';
import { useLocation } from "react-router-dom";
import DrawingCanvas from "../components/CanvasComponent";
// var socket;
// socket = io('http://localhost:3000',{
//     query: {
//         token: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : null,
//         gameCode : ''
//       }
// } );

export function PlayGround({route}){

    const [socket,setSocket] = useState(io('/'));
    const [text,setText] = useState('');
    const [roomCode , setRoomCode] = useState('');
    const location = useLocation();
    // console.log(location.state.code);
    const [errorMessage,setErrorMessage] = useState('');
    const [gameMessage,setGameMessage] = useState('');
    const [x,setx] = useState(1);
    const [timer, setTimer] = useState(0);

    useEffect(() => {

        const newSocket = io('https://api-fb6o.onrender.com',
                { query: {
                    token: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : null,
                    gameCode : location.state.code }}
                );
                    
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
          };
      }, []);

      useEffect(()=>{
        // if(socket){

            socket.on("error",(err)=>{
                // console.log(err);
                setErrorMessage(err);
            })
            
            
            
            socket.on("joined",(data)=>{
                console.log(data);
                setRoomCode(data);
                setGameMessage("Ask Friends to Join Game Code ");
            })

            socket.on("game",(data)=>{
                if(data[0] === 'R'){
                    
                    // const intervalID = setInterval(() => {
                    //     setTimer((prevTimer) => prevTimer + 1);
                    //   }, 1000);
                }
                console.log(data);
                setGameMessage(data);
            })

        // }

      })


        function sendMessageHandler(){
        //         // console.log(text);
                    if(text){
                        socket.emit("message",{"roomCode"  : roomCode,"message" : text});
                    }
        }
        function startGameHandler(){
                    socket.emit("gameOn",roomCode);
        }

    
    return <>


    <div className="canvas-container" style={{width : '100%'}}>
    
     {roomCode ? <DrawingCanvas props1 = {socket} props2 = {roomCode}  /> : <></> }

    <div>
        <input type="text" className="input-field" onChange={(e)=>{setText(e.target.value)}} /> 
        <button onClick={sendMessageHandler} className='button'>Answer</button>
    </div>
    
    <h3>{gameMessage}</h3>    
    <h3>{errorMessage}</h3>    

    {x ? <button onClick={startGameHandler} className='button'>Start</button> : <></>}
    
    <h2> Game Code : {roomCode} </h2>
        
    {/* <div className="canvas"> */}

    {/* </div> */}


    </div>
    </>
}