import React from 'react'
import Card from './Card'
import FImg1 from '@/app/assets/customer-1.png'
import FImg2 from '@/app/assets/customer-2.png'
import FImg3 from '@/app/assets/customer-3.png'
const Feedback = () => {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
        <h2 className='text-black text-2xl md:text-5xl font-extrabold'>Clients <span className='text-[#7AB259]'>Feedback</span></h2>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-10 md:gap-6'>
            <Card src={FImg1} alt='customer one' title='Nash Patrik'
            role='CEO, Manpol'
            feedback={true}
            disc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
            />
            <Card src={FImg2} alt='customer one' title='Miriam Barron'
            role='CEO, Manpol'
            feedback={true}
            disc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
            />
            <Card src={FImg3} alt='customer one' title='Bria Malone'
            role='CEO, Manpol'
            feedback={true}
            disc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
            />
        </div>
    </div>
  )
}

export default Feedback