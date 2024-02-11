
import { Button, TextField , Snackbar, Backdrop} from "@mui/material"
import { useState  } from "react";
import axios from 'axios';
import { Route, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import './ItemList.css'

import Modal from "../../components/Modal";
import BackDrop from "../../components/BackDrop";

export function ItemList(){

    const [filterModal,setFilterModal] = useState(false)

    
      return (
<>


    {/* {errorMessage ? <Modal message={errorMessage} /> : <></> }
    {errorMessage ? <Backdrop /> : <></> } */}
    { filterModal ?
    <>
    <BackDrop/>
    <Modal message={"lsdfjklsfj"} setFilterModal={setFilterModal} />
    </>

    : <></> } 

    <div className="container" >
        

        <div id="navbar" className="sticky">
        <div>
        Fair Fashion
        </div>
       </div>


            <div className="cards" style={{marginTop:'45px'}}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
       
       <div id="bottombar" className="bottom-sticky">
        <div className="bottombarbox">
            <div className="bottombarbox-children-1 hoverchange" onClick={()=>setFilterModal(true)}>Filter</div>
            <div className="bottombarbox-children-2 hoverchange">Sort</div>
        </div>
       </div>

        </div>

        </> 
);}