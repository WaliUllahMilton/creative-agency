"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
  import CarImg1 from '@/app/assets/carousel-1-G1OKsn4W.png'
  import carImg2 from '@/app/assets/carousel-2-BIJEuKZI.png'
  import carImg3 from '@/app/assets/carousel-4-2nNdLCNC.png'
import Image from "next/image"
import { useEffect, useState } from "react"

type CarouselType = {
    autoSlide ?: boolean,
    autoSlideInterval ?: number
}
 const CarouselWithShadcn = ({ autoSlide = true, autoSlideInterval = 3000 }:CarouselType)=>{
    const images = [
        {src:CarImg1,
          alt:"img-one"
        },
        {src:carImg2,
            alt:"img-one"
          },
          {src:carImg3,
            alt:"img-one"
          },
      ];
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          if (autoSlide) {
            const slideInterval = setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, autoSlideInterval);
            return () => clearInterval(slideInterval);
          }
        }, [autoSlide, autoSlideInterval, images.length]);
        // console.log(currentIndex)
    return (
        <div>
            <Carousel>
                <CarouselContent className="text-white max-w-[550px]">
                    {
                        images.map((image,index)=>(
                            <CarouselItem key={index}  className={` inset-0 transition-transform transform rounded-lg  overflow-hidden ${
                                index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                              }`} >
                                {currentIndex == index && <Image src={image.src} alt={image.alt} />}
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className="absolute -bottom-6 md:bottom-4 lg:-bottom-14 left-0 right-0 flex justify-center mb-4">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 cursor-pointer rounded-full mx-1 ${index === currentIndex ? 'bg-yellow-400' : 'bg-yellow-800'}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                 </div>
            </Carousel>
        </div>
    )
  }
export default CarouselWithShadcn;