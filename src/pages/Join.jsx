import { useEffect ,useState } from "react"
import axios from "axios";
import { Chat } from "./chat";
import { io } from 'socket.io-client';
import { useNavigate } from "react-router-dom";

export function Join(){

    const navigation = useNavigate();
    const [gameCode,setGameCode] = useState('');
    
    function enterGameHandler(){
           if(gameCode){
               navigation('/play',{ state: { 'code': gameCode } });
           }
    }
    function createGameHandler(){
        navigation('/play',{ state: { 'code': '' } });
    }

    return <div className="joinContainer">
        {/* <Chat/> */}
        <div>
        <input className="" type="number" onChange={(e)=>{setGameCode(e.target.value)}}  ></input>
        <button onClick={enterGameHandler} >Join A Game</button>
        </div>
        
        
        <button onClick={createGameHandler}>Create A Game</button>

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
