import React,{useState} from "react";
import ListContext from "./listContext";

const ListContextProvider = ({children}) =>{
    const [list,setList] = useState(null)
    return(
        <ListContext.Provider value={{list,setList}}>
            {children}
        </ListContext.Provider>     
    )
}

export default ListContextProvider;