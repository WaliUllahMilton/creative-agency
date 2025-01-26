"use client"
import React from 'react'
import SlackImage from '@/app/assets/slack-Bdhas0YI.png'
import GoogleImage from '@/app/assets/google-C07XfvRj.png'
import UberImage from '@/app/assets/uber-CFQekxzk.png'
import NetflixImage from '@/app/assets/netflix-B8OCm1or.png'
import airbnbImage from '@/app/assets/airbnb-DV634ORD.png'
import Image from 'next/image'
const BannerBottom = () => {
const imgData = [
    {src:SlackImage,
     alt:"slack"   
    },
    {src:GoogleImage,
    alt: "google"
    },
    {src:UberImage,
    alt: "uber"
    },
    {src:NetflixImage,
    alt: "netflix"
    },
    {src:airbnbImage,
    alt: "airbnb"
    }
]
  return (
    <div className='px-4 flex flex-wrap bg-white justify-center gap-10 lg:gap-20 items-center py-10 md:px-24 lg:mt-12'>
        {
            imgData.map((img,index)=>{
                return (
                    <div className='max-w-[80px] md:max-w-[120px] max-h-[8]'key={index}>
                        <Image src={img.src} alt={img.alt} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default BannerBottom