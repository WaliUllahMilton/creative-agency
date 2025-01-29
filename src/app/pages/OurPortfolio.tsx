import React from 'react'
import Carousel from '../components/Carousel'
import Feedback from '../components/Feedback'
import CarouselWithShadcn from '../components/CarouselWithShadcn'
const OurPortfolio = () => {
 
  return (
   <div>
     <div className='flex flex-col gap-6 justify-center items-center bg-[#111430] py-10 lg:py-20'>
        <h3 className='text-white text-2xl md:text-5xl font-extrabold'>Here are some of <span className='text-[#7AB259]'>our works</span></h3>
        <Carousel/>
        <CarouselWithShadcn/>
    </div>
    <Feedback/>
   </div>
  )
}

export default OurPortfolio