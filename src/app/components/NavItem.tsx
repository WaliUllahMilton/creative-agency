import React from 'react'
import Link from 'next/link'

type NavItemProps = {
    content : React.ReactNode,
    href :string
}
const NavItem = ({content,href}:NavItemProps) => {
  return (
    <li className='text-gray-600 text-base font-medium'>
        <Link href={href}>
            {content}
        </Link>
    </li>
  )
}

export default NavItem