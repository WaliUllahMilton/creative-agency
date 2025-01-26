import React from 'react'
import NavLink from '../components/NavLink'
import NavItem from '../components/NavItem'
import Logo from '../components/Logo'
import Image from 'next/image'
import Btn from '../components/Btn'
import LoginBtn from '../components/LoginBtn'
const page = () => {
  return (
    <div className='flex flex-col items-center h-[100vh] gap-6 justify-center w-full  '>
        <NavItem href='/' content={<Logo/>}/>
        <div className='border-2 border-black p-24 mt-20'>
          <h3 className='text-center text-2xl font-bold'>Login With</h3>
          <LoginBtn/>
          <p className='mt-20'>
          Don't have an account Create an account</p>
        </div>
    </div>
  )
}

export default page