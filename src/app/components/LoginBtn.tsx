import Link from 'next/link'
import React from 'react'

import googleImage from '@/app/assets/google_login-BxkjCuqv.png'
import Image from 'next/image'
const LoginBtn = () => {
  return (
    <Link href="" className='relative top-10 bg-[#F5F5F5] px-20 pl- py-4 rounded-3xl' >
        <span className='absolute left-12 top-1/2 transform -translate-y-[50%] z-50'><Image src={googleImage} width={20} alt='google'/></span>
        continue with Google
    </Link>
  )
}

export default LoginBtn