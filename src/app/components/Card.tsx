import React from 'react'
import Image from 'next/image'
type CardProps = {
    src : any,
    alt : string,
    title:string,
    disc:string,
    role?:string
    feedback?:boolean
}
const Card = ({src,alt,title,disc,role,feedback=false}:CardProps) => {
  return (
    <div className={`flex flex-col items-center gap-4 p-4 pb-6 border-[1px] border-gray-300 max-w-[280px] rounded-lg${feedback ? "" : " hover:scale-110 cursor-pointer transition-[300] ease-linear hover:shadow-xl"}`}>
        <div className={`flex ${feedback ? "gap-4 items-center":"flex-col items-center "}`}>
          <Image src={src} alt={alt} width={70} height={70}/>
          <div>
            <h2 className='text-2xl font-bold'>{title}</h2>
            {role&& <p>{role}</p>}
          </div>
        </div>
        <p className='text-base text-gray-400 font-medium text-center'>{disc}</p>
    </div>
  )
}

export default Card