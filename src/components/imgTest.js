import React, { useState } from 'react';
import snow from '../image/snow.png'
import jeju from '../image/jeju.jpg';

function ImgTest() {
    const [slideIndex, setSlideIndex] = useState(0);

    const prevSlide = () => {
      setSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
  
    const slides = [
      { id: 1, src: snow, alt: 'Slide 1' },
      { id: 2, src: jeju, alt: 'Slide 2' },
      // 추가 이미지는 필요한 만큼 여기에 추가
    ];
  
    return (
      <div className="relative overflow-hidden">
        <div className="flex" id="slider">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`w-full flex-shrink-0 ${index === slideIndex ? 'block' : 'hidden'}`}>
              <img src={slide.src} alt={slide.alt} className="w-[100px] h-[70px]" />
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
          onClick={prevSlide}
        >
          이전
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
          onClick={nextSlide}
        >
          다음
        </button>
      </div>
    );
}

export default ImgTest;