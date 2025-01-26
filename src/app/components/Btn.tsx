import Link from 'next/link'
import React from 'react'

type BtnProps = {
    content : string | React.ReactNode,
    href ?: string
}
const Btn = ({content,href=""}:BtnProps) => {
  return (
    <Link href={href} className='px-10 py-3 bg-black text-white rounded-md text-base font-medium'>
        {content}
    </Link>
  )
}

export default Btn