import React from 'react'
import Input from '../components/Input'
import Btn from '../components/Btn'

const ContactUs = () => {
  return (
    <div className='bg-[#FBD062] pb-4 '>
      <div className='flex flex-wrap py-20 px-4 md:px-24 gap-6 justify-between'>
        <div>
            <h3 className='text-xl xxl:text-4xl font-bold'>Let us handle your project, professionally.</h3>
            <p className='text-base mt-6 lg:w-[400px]'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
        </div>
        <form className=' lg:max-w-[400px] xl:max-w-[700px]'>
            <Input placeholder='your email address'/>
            <Input placeholder="your name / company's name"/>
            <textarea className='w-full h-[250px] mb-6 resize-none rounded-lg px-4 py-2 text-gray-400' name="msg" id="msg" placeholder='Your message'/>
            <Btn content='send'/>
        </form>
    </div>
    <footer className='text-center'>copyright Orange labs 2020</footer>
    </div>
  )
}

export default ContactUs