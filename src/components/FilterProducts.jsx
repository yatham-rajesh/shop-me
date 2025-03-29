import { useState, useContext } from "react"
import { ProductContex } from "../context/Product";
import '../App.css';

export default function FilterProducts() {
   
    const {dispatch} = useContext(ProductContex)

    const [selectedFilter, setSelectedFilter] = useState("");
    const handleClick =(type)=>{
        setSelectedFilter(type);
        dispatch({ type: type === "ascending" ? "ascending" : "descending"});
    }

    const handleClearFilter = () =>{
        dispatch({type: "reset"});
        setSelectedFilter("");


    }

    return (<div className="filter">
        <div className="radio">
        <input type="radio" value="ascending" checked={selectedFilter == "ascending"} onClick={() => handleClick("ascending")}></input>
        <label htmlFor="ascending">Ascending</label>
        </div>
        <div className="radio">
        <input type="radio" value="descending" checked={selectedFilter == "descending"} onClick={() => handleClick("descending")} />
        <label htmlFor="descending">Descending</label>
        </div>
        <button style={{margin:"10px"}} onClick={() => handleClearFilter()}>Clear Filter</button>


    </div>)
}