
import { Button, TextField , Snackbar, Backdrop} from "@mui/material"
import { useEffect, useState  } from "react";
import axios from 'axios';
import { Route, useLocation, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import './ItemList.css'

import SortModal from "../../components/SortModal"
import Modal from "../../components/Modal";
import BackDrop from "../../components/BackDrop";
import { PreLoader } from "../../components/PreLoader/PreLoader";

export function ItemList(){

    const location = useLocation()

    const [filterModal,setFilterModal] = useState(false)
    const [filterList,setFilterList] = useState({})
    const [sortModal,setSortModal] = useState(false)
    const [sortList,setSortList] = useState({})

    const [itemList,setItemList] = useState([])
    const [filterParamString,setFilterParamString] = useState("?")
    const [sortParamString,setSortParamString] = useState("sort_type=Newest")
    const category_id = location.state.code

    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        const d = async()=>{

            setLoading(true)
            const data = await axios.get(`https://ecom-lszh.onrender.com/api/items/${category_id}/`);
            setLoading(false)

                console.log(data.data);
                setFilterList(data.data.filter_data);
                setSortList(data.data.sort_data)
                setItemList(data.data.items_list)
            
            }   
            d();
            // setFilterList()
    },[])


    
      return (
<>

    {
    loading ? <PreLoader/> :
    <></>
    }

    {/* {errorMessage ? <Modal message={errorMessage} /> : <></> }
    {errorMessage ? <Backdrop /> : <></> } */}
    { filterModal ?
    
    <>
    <BackDrop/>
    <Modal category_id={category_id} sortParamString={sortParamString} filterParamString={filterParamString} setFilterParamString={setFilterParamString}  setItemList={setItemList} filterList={filterList} setFilterModal={setFilterModal} setFilterList={setFilterList} setSortList={setSortList} />
    </>

    :  
    <></> }

   {

    sortModal ?
    <>
    <BackDrop/>
    <SortModal category_id={category_id} filterParamString={filterParamString} sortParamString={sortParamString} setSortParamString={setSortParamString} setItemList={setItemList} sortList={sortList}  setSortList={setSortList} setSortModal={setSortModal} setFilterList={setFilterList} />
    </> :

    <></> 

   }

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
            <div className="bottombarbox-children-1 hoverchange" onClick={()=>  {setSortModal(false);setFilterModal(true)} } >Filter</div>
            <div className="bottombarbox-children-2 hoverchange" onClick={()=> {setFilterModal(false);setSortModal(true)} } >Sort</div>
        </div>
       </div>

       
        </div>

        </> 
);}