
import { Button, TextField , Snackbar, Backdrop} from "@mui/material"
import { useEffect, useState  } from "react";
import axios from 'axios';
import { Route, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import './ItemList.css'

import Modal from "../../components/Modal";
import BackDrop from "../../components/BackDrop";

export function ItemList(){

    const [filterModal,setFilterModal] = useState(false)
    const [sortModal,setSortModal] = useState(false)
    const [filterList,setFilterList] = useState({})
    const [itemList,setItemList] = useState([])

    useEffect(()=>{
        const d = async()=>{
            const data = await axios.get('https://ecom-lszh.onrender.com/api/items/');
                console.log(data.data);
                setFilterList(data.data.filter_data);
                setItemList(data.data.items_list)
            }   
            d();
            // setFilterList()
    },[])


    
      return (
<>


    {/* {errorMessage ? <Modal message={errorMessage} /> : <></> }
    {errorMessage ? <Backdrop /> : <></> } */}
    { filterModal ?
    <>
    <BackDrop/>
    <Modal setItemList={setItemList} filterList={filterList} setFilterModal={setFilterModal} setFilterList={setFilterList} />
    </>

    :  

    <></> } 

    <div className="container" >
        

        <div id="navbar" className="sticky">
        <div>
        Fair Fashion
        </div>
       </div>


            <div className="cards" style={{marginTop:'45px'}}>
                {itemList.map((item)=>(
                    <Card item = {item} />
                ))}
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