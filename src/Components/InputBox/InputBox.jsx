import React,{useState,useContext} from "react";
import './inputBox.css';
import Filter from "../Filters/Filter";
import ListContext from "../../contexts/listContext";

export default function InputBox(){

    const [inputData,setInputData] = useState('')
    const {setList} = useContext(ListContext)

    const additem = (e)=>{  
        e.preventDefault()
        setList({inputData})

    }   

    return(
        <div className="inputBox">

            <div className="input-top">
                <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder="Add" name="input" className="input" id="" />
                <button className="add" onClick={additem}>ADD</button>
            </div>
            <div className="filters">
            <Filter lable="Today" />
            <Filter lable="Tomorrow" />
            <Filter lable="Upcoming" />
            <Filter lable="Someday" />
            </div>
        </div>
    )
} 