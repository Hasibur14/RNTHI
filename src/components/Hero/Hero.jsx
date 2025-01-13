import React, { useState } from 'react';
import slider1 from "../../../src/assets/hero/slider10.png";
import slider2 from "../../../src/assets/hero/slider.jpg";
import slider3 from "../../../src/assets/hero/slider5.jpg";
import Sidebar from '../Sidebar/Sidebar';

const Hero = () => {
    // Sample JSON data
    const sliderData = [
        {
            id: 1,
            image: slider1,
            title: 'Welcome To RNTHI Institute',
            description: 'Description for Slide 1',
        },
        {
            id: 2,
            image: slider2,
            title: 'Slide 2',
            description: 'Description for Slide 2',
        },
        {
            id: 3,
            image: slider3,
            title: 'Slide 3',
            description: 'Description for Slide 3',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="absolute w-full mx-auto bg-black bg-opacity-20 bg-blend-overlay">
            <div className="relative ">
                {/* Slider Image with Text overlay */}

                {sliderData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`absolute inset-0 transition-transform duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute w-full h-[900px] object-cover"
                        />
                        <div className="absolute inset-0 mt-96 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="text-center p-10 text-white">
                                <h2 className="text-7xl font-bold mb-4 font-cinzel uppercase">{item.title}</h2>
                                <p className="text-lg">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='relative top-0 border-b z-50'>
                <Sidebar />
            </div>

            <div className='absolute text-center mt-10 justify-center items-center flex space-x-4 w-full'>
                {/* Navigation Controls */}
                <button
                    onClick={handlePrevious}
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
                >
                    Previous
                </button>
                {/* Slider Indicators */}
                <div className="flex justify-center h-5 space-x-4">
                    {sliderData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`text-xl font-bold border-r border-gray-400 ${currentIndex === index
                                ? 'text-primary-light '
                                : 'text-white'
                                }`}
                        >
                            0{index + 1}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Hero;
