import { useNavigate } from "react-router-dom"
import axios from "axios";
import './Modal.css'
import { useEffect } from "react";

export default function Modal({setFilterModal,filterList,setItemList,setFilterList,filterParamString,setFilterParamString,sortParamString,setSortList}){ //here a function is passed as props
  
  
  const removeElement = (list,element) =>{for(let i = 0;i<list.length;i++){if(list[i] == element){list.splice(i,1)}}}
  const createParamString = (obj) =>{
    let paramString = "?"
    Object.keys(obj).map(key=>{
      if(obj[key].length){
        obj[key].forEach(i=>{paramString += `${key}=${i}&`})
      }})
      setFilterParamString(paramString)
    }
    
    let params = {
    }
    Object.keys(filterList).map((key)=>{
      params[key] = [];
      filterList[key].map(element => {
        if (element.is_applied)
        {params[key].push(element['title'])}
      });
    })
    
    
    const applyFilters = async() =>{
      const data = await axios.get(`http://127.0.0.1:8000/api/items/${filterParamString}${sortParamString}`);
      console.log(filterParamString+sortParamString)
      // console.log()
      setItemList(data.data.items_list)
      setFilterList(data.data.filter_data);
      setSortList(data.data.sort_data)
    }
    
    useEffect(()=>{
      applyFilters()
  
    },[filterParamString])



   const handleCheckboxChange = (key,value) =>{
      
    if(params[key].includes(value)){
      removeElement(params[key],value)
    }else{
      params[key].push(value)
    }

      console.log(params,'updated params')

      createParamString(params)
      // console.log(filterParamString,sortString,"all_params")
      // applyFilters()

   }
   
   

   return <div className="modal">
   
   <form className="filter-container">
      
      { Object.keys(filterList).map(e=>(
         

        <div className="filter-head">
            {e}
        <div className="filter-key-label">

         {filterList[e].map((v)=>(  

        <label className="filter-label">
          <div style={{marginRight:'3px'}}> {v['title'] }</div> 
          <input
            type="checkbox"
            checked={v['is_applied']}
            onChange={()=>handleCheckboxChange(e,v['title'])}
          />
        </label>

        ))}
        </div>

        </div>

)) }

      </form>

    {/* <button className="btn btn--alt" onClick = {() => applyFilters()} >Apply</button> */}
    <button className="btn btn--alt" onClick = {() => setFilterModal(false)} >Back</button>
 </div>
}