import React, { useContext } from "react";
import './ListBox.css'
import ListContext from "../../contexts/listContext";

export default function ListBox({
    listName="List",
    }){

        const {list} = useContext(ListContext)
    

        if(!list) return <div><h3>{listName}</h3></div>

        return <div><h3>{listName}</h3> <ul><li>{list.inputData}</li></ul></div>

        // return(
        // <div>
        //     <h3>{listName}</h3>
        //     <ul><li>
        //         {/* {list.inputData} */}
        //         </li></ul>
        // </div>)
    
}