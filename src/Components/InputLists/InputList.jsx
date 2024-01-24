import React from "react";
import './InputList.css'
import {ListBox} from "../ListBox/List/";

export default function InputList(){
    
    return(
        <div className="inputlist">
            <ListBox 
            listName="Today"
            />
            <ListBox 
            listName="Tomorrow"
            />
            <ListBox 
            listName="Upcoming"
            />
            <ListBox 
            listName="Someday"
            />
        </div>
    )
}