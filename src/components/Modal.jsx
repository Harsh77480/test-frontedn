import { useNavigate } from "react-router-dom"


export default function Modal({message}){ //here a function is passed as props

    const navigate = useNavigate();
 return <div className="modal">

    <h3> {message} </h3>

    <button className="btn btn--alt" onClick = {() => navigate('/join')} >Back</button>
 </div>
}