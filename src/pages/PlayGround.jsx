import { useEffect, useState } from "react"
import { io } from 'socket.io-client';
import { useLocation, useNavigate } from "react-router-dom";
import DrawingCanvas from "../components/DrawingCanvas";
import Modal from "../components/Modal";
import { Backdrop } from "@mui/material";
// var socket;
// socket = io('http://localhost:3000',{
//     query: {
//         token: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : null,
//         gameCode : ''
//       }
// } );



export function PlayGround({route}){

    // const [socket,setSocket] = useState();
    const [text,setText] = useState('');
    const [roomCode , setRoomCode] = useState('');
    const location = useLocation();
    // console.log(location.state.code);
    const [errorMessage,setErrorMessage] = useState('');
    const [gameMessage,setGameMessage] = useState('');
    const [x,setx] = useState(1);
    const [timer, setTimer] = useState(0);
    const [connectedSocket,setConnectedSocket] = useState();
    
    const navigate = useNavigate();

    useEffect(() => {

        const socket = io('https://api-fb6o.onrender.com',
                { query: {
                    token: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : null,
                    gameCode : location.state.code }}
                );
                    
        setConnectedSocket(socket);
        
        function joined(data){
            console.log(data);
            setRoomCode(data);
            setGameMessage("Ask Friends to Join Game Code ");
        }
        socket.on("joined",joined)


        function game(data){
            // console.log(data);
            if(data[0] == 'R'){
                setx(0);
            }
            setGameMessage(data);
        }
        socket.on("game",game);

        function error(data){
            setErrorMessage(data);
            setTimeout(()=>{
                navigate('/join');
            },8000)
        };
        socket.on("error",error);


        return () => {
            socket.disconnect();
            socket.off('joined',joined);
            socket.off('joined',game);
            socket.off('error',error);
          };
      }, []);


        function sendMessageHandler(){
            if(text){
                connectedSocket.emit("message",{"roomCode"  : roomCode,"message" : text});
            }
        }
        function startGameHandler(){
                    connectedSocket.emit("gameOn",roomCode);
        }

    
    return <>


    {errorMessage ? <Modal message={errorMessage} /> : <></> }
    {errorMessage ? <Backdrop /> : <></> }


    <div className="canvas-container" style={{width : '100%'}}>
    
     {roomCode ? <DrawingCanvas props1 = {connectedSocket} props2 = {roomCode}  /> : <></> }

    <div className="notCanvas">

    <h2> Game Code : {roomCode} </h2>
    {x ? <button onClick={startGameHandler} className='btn'>Start Game</button> : <></>}

    
    <div>
        <h4 className="gameMessage">{gameMessage}</h4>    
    </div>
    


    {!x ? <div className="center">
    
        <input type="text" className="input-field" onChange={(e)=>{setText(e.target.value)}} style={{margin : '5px'}} /> 
        <button onClick={sendMessageHandler} className='btn' >Answer</button>

    </div> : <></> }
        
    {/* <div className="canvas"> */}

    {/* </div> */}
    </div>


    </div>
    </>
}