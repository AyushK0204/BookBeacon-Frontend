import React, { useState, useEffect } from 'react';

const Slider = () => {
    const images = [
        'https://www.creativ-eras.com/assets/images/library-slider-img-2.jpg',
        'https://www.creativ-eras.com/assets/images/library-slider-img-1.jpg',
        'https://www.creativ-eras.com/assets/images/library-slider-img-3.jpg',
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
