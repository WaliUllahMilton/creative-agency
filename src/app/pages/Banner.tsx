import React from 'react'
import Btn from '../components/Btn'
import Image from 'next/image'
import BannerImage from '@/app/assets/Frame-z-hRhP5J.png'
import BannerBottom from '../components/BannerBottom'
const Banner = () => {
  return (
   <div className="">
     <main className='bg-[#FBD062] px-4 md:px-24 lg:px-32 flex flex-col md:flex-row items-center justify-center md:justify-between py-12'>
        <div className='max-w-[480px] flex flex-col gap-6 text-gray-800'>
            <h1 className='md:text-[20px] lg:text-[30px] font-extrabold'>Let’s Grow Your Brand To The Next Level</h1>
            <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus. git</p>
            <div>
                <Btn content='Hire us'/>
            </div>
        </div>
        <div className='max-w-[207px] mt-4 md:mt-0 max-h-[140px] sm:max-w-[300px] sm:max-h-[240px] lg:max-h-[400px] lg:max-w-[440px] xl:max-w-[700px] xl:max-h-[740px]  '>
            <Image src={BannerImage} alt='Banner image'/>
        </div>
    </main>
    <div className="bg-white">
        <BannerBottom/>
      </div>
   </div>
  )
}

export default Banner