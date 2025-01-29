import React from 'react'
import Card from '../components/Card'
import WebDevImage from '@/app/assets/webdev.png'
import WebNMobImage from '@/app/assets/service2.png'
import GraDesignImage from '@/app/assets/service3.png'
const Services = () => {
  return (
    <div id='services' className=' xl:max-w-50vw flex flex-col justify-center items-center xl:my-32 my-10'>
        <h3 className='text-2xl md:text-4xl font-bold'>Provide awesome <span className='text-[#7AB259]'>services</span></h3>
        <div className=' mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-8'>
            <Card src={WebDevImage} title='Web Development' disc='With well written codes, we build amazing apps for all platforms, mobile and web apps in general.' alt='Web Development'/>
            <Card src={WebNMobImage} title='Web & Mobile Design' disc='With well written codes, we build amazing apps for all platforms, mobile and web apps in general.' alt='Web Development'/>
            <Card src={GraDesignImage} title='Graphic Design' disc='With well written codes, we build amazing apps for all platforms, mobile and web apps in general.' alt='Web Development'/>
        </div>

    </div>
  )
}

export default Services