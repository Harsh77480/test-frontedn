import {useRef, useEffect ,useState } from "react"
import axios from "axios";
import { io } from 'socket.io-client';
import { useNavigate } from "react-router-dom";
import './PreLoader.css'
export function PreLoader(){


    return (<>
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    </>);

}