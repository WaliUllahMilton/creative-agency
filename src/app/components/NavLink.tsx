import Link from 'next/link'
import React from 'react'

type NavLinkProps = {
    children : React.ReactNode,
    className?:string
}
const NavLink = ({children,className}:NavLinkProps) => {
  return (
    <ul className={className}>
        {children}
    </ul>
  )
}

export default NavLink