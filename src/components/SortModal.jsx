import { useNavigate } from "react-router-dom"
import axios from "axios";
import './SortModal.css'
import { useEffect ,useState} from "react";
import { PreLoader } from "./PreLoader/PreLoader";

export default function SortModal({category_id,setSortModal,setItemList,sortList,setSortList,filterParamString,sortParamString,setSortParamString,setFilterList}){ //here a function is passed as props
  
  const [loading, setLoading] = useState(false);

    
    const applyFilters = async() =>{
    
      setLoading(true)
     const data = await axios.get(`https://ecom-lszh.onrender.com/api/items/${category_id}/${filterParamString}${sortParamString}`);
      setLoading(false)

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
   {

    loading ? <PreLoader/> :
    <></>
    
    }

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

    <button className="btn btn--alt" onClick = {() => setSortModal(false)} >Back</button>

    {/* <button className="btn btn--alt" onClick = {() => applyFilters()} >Apply</button> */}
 </div>
}