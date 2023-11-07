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

    return <div className="joinPage">
        <div className="joinContainer">
            {/* <Chat/> */}
            <div className="center">
            <input style={{margin : '5px'}} className="input-field" placeholder="Enter Game Code" type="number" onChange={(e)=>{setGameCode(e.target.value)}}  ></input>
            <button onClick={enterGameHandler} className="btn">Join This Game</button>
            </div>


            <button onClick={createGameHandler} className="btn" >Create A Game</button>

            <div style={{width : '90%'}}>
            <p>Create/Join game with different devices or use incognito tabs if using same device</p>
            <p>Try using similar screen size devices and updated chrome browser</p>
            
            </div>

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
