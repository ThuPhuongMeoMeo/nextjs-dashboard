import { MenuContext } from '@/context/MenuContext'
import React, { useContext } from 'react'
// import ''
export default function card() {
  const {toggle} = useContext(MenuContext);

  return (
    <div>
        <div onClick={toggle} >

        </div>
    </div>
  )
}
