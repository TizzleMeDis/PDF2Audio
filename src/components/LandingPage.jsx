import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx"

const slides = [
  {
    path: "../assets/pexels-cottonbro-studio-8382288.jpg"
  },
  {
    path: "../assets/pexels-marina-m-8356830.jpg"
  },
  {
    path: "../assets/pexels-rdne-stock-project-8363155.jpg"
  },
];

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = slides.length - 1 === currentIndex;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div 
        style={{ backgroundImage: `url(${slides[currentIndex].path})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-1000"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FaChevronLeft size={30} onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FaChevronRight size={30} onClick={nextSlide} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div 
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            { slideIndex === currentIndex ? <RxDotFilled className="text-white transition-all duration-1000"/> : <RxDotFilled />}
          </div>
        ))}
      </div>

      <div className="absolute top-[60%] left-[10%] text-white font-bold">
        Reading books have became easier!
      </div>
      <div className="absolute top-[65%] left-[10%] text-white font-bold">
        Pick your book and listen now!
      </div>
      <div className="absolute top-[70%] left-[10%] text-white font-bold">
        For more information click about!
      </div>
    </div>
  )
}