import React, { useState, useEffect } from 'react';
import header1 from '../assets/homeheader2_files/library-slider-img-1.jpg'
import header2 from '../assets/homeheader2_files/library-slider-img-2.jpg'
import header3 from '../assets/homeheader2_files/library-slider-img-3.jpg'



const Slider = () => {
    const images = [
        header1,
        header2,
        header3
          ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-screen h-96 overflow-hidden ">
            <img
                src={images[currentIndex]}
                className="w-screen h-96 object-contain  duration-800"
                alt={`Image ${currentIndex + 1}`}
            />
        
        </div>
    );
};

export default Slider;
