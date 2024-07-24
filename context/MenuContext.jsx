import { useState } from "react";

const { createContext } = require("react");

export const MenuContext = createContext();

const MenuContextProvider = ({ chidren }) =>{ 
    const [open, setOpen] = useState(false);
     
    const toggle = ()=> {
        console.log("Toggle click");
        setOpen((prev) => !prev);
    };

    return <MenuContext.Provider value={{open, toggle}}>{chidren}</MenuContext.Provider>
}

export default MenuContextProvider;