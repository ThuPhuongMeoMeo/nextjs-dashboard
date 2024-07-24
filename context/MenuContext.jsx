"use client"
import { useState } from "react";

const { createContext } = require("react");

export const MenuContext = createContext();

const MenuContextProvider = ({ chidren }) =>{ 
    //cai menuContextProvider nay co 2 bien la open voi toggle
    const [open, setOpen] = useState(false);
    const toggle = ()=> {
        console.log(open);
        setOpen((prev) => !prev);
    };

    return <MenuContext.Provider value={{open, toggle}}>{chidren}</MenuContext.Provider>
}

export default MenuContextProvider;