import React from 'react'
import Image from 'next/image'
import LogoImage from '@/app/assets/logo-Cr1-04wP.png'
const Logo = () => {
  return (
      <Image src={LogoImage} alt='Creative Agency Logo' width={150} height={47}/>
  )
}

export default Logo