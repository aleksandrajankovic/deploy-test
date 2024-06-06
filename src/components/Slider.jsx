import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './Slide';
import './Slider.css';

const slides = [
  {
    id: 1,
    content: 'Slide 1 Content',
    icon: '🔥', 
  },
  {
    id: 2,
    content: 'Slide 2 Content',
    icon: '🌟', 
  },
  {
    id: 3,
    content: 'Slide 3 Content',
    icon: '🚀', 
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    },5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="slider">
      <div className="slide-container">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <Slide
                key={slide.id}
                content={slide.content}
                icon={slide.icon}
              />
            )
          ))}
        </AnimatePresence>
      </div>
    
    </div>
    <div className='registrate-box'>
      <a className="registrate">Click Me</a>
      </div>
      </>
  );
};

export default Slider;
