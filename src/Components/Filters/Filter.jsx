import React from "react";
import './Filter.css'

export default function Filter({lable,}){
    return(
        <div className="filters">
            <label className="lable"><input type="checkbox" name={lable} className="check" id=""/>{lable}</label>
        </div>
    )
}   