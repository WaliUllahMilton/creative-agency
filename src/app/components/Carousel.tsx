"use client"
import Image from 'next/image';
import CarImg1 from '@/app/assets/carousel-1-G1OKsn4W.png'
import React, { useState, useEffect } from 'react';
import carImg2 from '@/app/assets/carousel-2-BIJEuKZI.png'
import carImg3 from '@/app/assets/carousel-4-2nNdLCNC.png'
// import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

type CarouselType = {
    autoSlide ?: boolean,
    autoSlideInterval ?: number
}
const Carousel = ({ autoSlide = true, autoSlideInterval = 3000 }:CarouselType) => {
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
  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  //feat
  // };

  return ( 
    <div className="relative w-[350px] md:w-[450px] lg:w-[550px]  max-w-3xl mx-auto lg:mb-8 ">
      <div className="overflow-hidden relative h-[280px] md:h-[400px]">
        {images?.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform rounded-lg  overflow-hidden ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Image src={image.src} alt={image.alt} objectFit='cover'/>
          </div>
        ))}
      </div>
      {/* <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={prevSlide}
      >
        <FaArrowLeft/>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={nextSlide}
      >
        <FaArrowRight/>
      </button> */}
      <div className="absolute -bottom-6 md:bottom-4 lg:-bottom-14 left-0 right-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 cursor-pointer rounded-full mx-1 ${index === currentIndex ? 'bg-yellow-400' : 'bg-yellow-800'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

