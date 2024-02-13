import { useNavigate } from "react-router-dom"
import axios from "axios";
import './SortModal.css'
import { useEffect } from "react";

export default function SortModal({setSortModal,setItemList,sortList,setSortList,filterParamString,sortParamString,setSortParamString,setFilterList}){ //here a function is passed as props
  

    
    const applyFilters = async() =>{
     const data = await axios.get(`http://127.0.0.1:8000/api/items/${filterParamString}${sortParamString}`);
     console.log(data)
     setItemList(data.data.items_list)
     setSortList(data.data.sort_data);
     setFilterList(data.data.filter_data);
    }


   const handleCheckboxChange = (key,dict) =>{
            setSortParamString(`sort_type=${key}`)
   }
   useEffect(()=>{
    applyFilters()
  },[sortParamString])

   
   

   return <div className="modal" style={{maxWidth:'140px'}}>
   
   <form className="filter-container" style={{maxHeight:'180px'}}>
      
      { Object.keys(sortList).map(e=>(
         

        <div className="filter-head">
            {e}
        <div className="filter-key-label">

         {/* {sortList[e].map((v)=>(   */}

        <label className="filter-label">
          <div style={{marginRight:'3px'}}>  </div> 
          <input
            type="checkbox"
            checked={sortList[e].is_applied}
            onChange={()=>handleCheckboxChange(e,sortList[e])}
          />
        </label>

        {/* ))} */}
        </div>

        </div>

)) }

      </form>

    {/* <button className="btn btn--alt" onClick = {() => applyFilters()} >Apply</button> */}
    <button className="btn btn--alt" onClick = {() => setSortModal(false)} >Back</button>
 </div>
}