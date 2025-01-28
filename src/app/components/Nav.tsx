"use client"
import React, { useState } from 'react'
import NavLink from './NavLink'
import { MdOutlineMenu,MdClose } from "react-icons/md";

import NavItem from './NavItem'
import Logo from './Logo'
import Btn from './Btn'
const Nav = () => {
  const [toggleBtn,setToggleBtn]= useState(false);
  return (
    <header className='px-4 md:px-24 lg:px-32 bg-[#FBD062]  '>
        <nav className='flex justify-between py-4'>
            <NavLink className="flex items-center">
                <NavItem href='#home' content={<Logo/>}/>
            </NavLink>
            <NavLink className={`transition-[300] ease-in-out duration-1000 ${toggleBtn ? "flex flex-col absolute top-0 left-0 px-24 py-4 bg-[#FBD062]  z-40 w-[100vw] h-[100vh] overflow-hidden " : "hidden"} lg:flex items-center gap-6`}>
                <NavItem href='#home' content="Home"/>
                <NavItem href='#OurPortfolio' content="OurPortfolio"/>
                <NavItem href='#OurTeam' content="OurTeam"/>
                <NavItem href='#ContactUs' content="ContactUs"/>
                <Btn href='/login' content='Login'/>
            </NavLink>
            <div className='lg:hidden absolute z-50 right-4 text-2xl'
            onClick={()=>setToggleBtn(!toggleBtn)}
            >{toggleBtn ? <MdClose/> : <MdOutlineMenu/>}</div>
        </nav>
    </header>
  )
}

export default Nav