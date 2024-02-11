import { useNavigate } from "react-router-dom"
import './Modal.css'

export default function Modal({setFilterModal}){ //here a function is passed as props
   
   // const navigate = useNavigate();
    // navigate('/join') //used in back botton 
    const testArray = [ {"key" : "occasion_filter" , "values" : ["Formal","Casual"] },{"key" : "Brand" , "values" : ["Nike","Addidas","Somthing"] },{"key" : "occasion" , "values" : ["Formal","Casual"] },{"key" : "occasion" , "values" : ["Formal","Casual"] },]

   return <div className="modal">
   
   <form className="filter-container">
      
      { testArray.map(e=>(
         

        <div className="filter-head">
            {e.key}

        <div className="filter-key-label">
         {e.values.map((v)=>(  
        <label className="filter-label">
          <div style={{marginRight:'3px'}}>{v}</div> 
          <input
            type="checkbox"
            // checked={isChecked}
            // onChange={handleCheckboxChange}
          />
        </label>
        ))}
        </div>

        </div>

)) }

      </form>

    <button className="btn btn--alt" onClick = {() => setFilterModal(false)} >Back</button>
 </div>
}