'use client'
import Image from "next/image";

import React, { useContext } from 'react'
import Card from "./Card/card";
import Header from "./Header/header";
import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";

const page = () => {
  const {open, toggle} = useContext(MenuContext);

  return (
    <div>
    
      <button type="submit" onClick={toggle}>Click me</button>
      <div className={`${open == false ? "w-60" : "hidden"}`}><Header/></div>  
      
    </div>
    
  )
}

export default page