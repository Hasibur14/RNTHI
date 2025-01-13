import React, { useState } from "react";
import slider1 from "../../../src/assets/hero/slider.jpg";
import slider3 from "../../../src/assets/hero/slider5.jpg";
import Sidebar from "../Sidebar/Sidebar";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
    const sliderData = [
        {
            id: 1,
            image: slider1,
            title: "Welcome To RNTHI Institute",
            description: "Description for Slide 1",
        },
        {
            id: 2,
            image: slider3,
            title: "Slide 2",
            description: "Description for Slide 2",
        },
        {
            id: 3,
            image: slider3,
            title: "Slide 3",
            description: "Description for Slide 3",
        },
    ];

    // Slider with auto-play
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            slideChanged(slider) {
                setCurrentIndex(slider.track.details.rel);
            },
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;

                function clearNextTimeout() {
                    clearTimeout(timeout);
                }

                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 5000);
                }

                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });

                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    // Active slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Slider navigation handlers
    const handlePrevious = () => {
        instanceRef.current?.prev();
    };

    const handleNext = () => {
        instanceRef.current?.next();
    };

    return (
        <div className="relative w-full mx-auto font-mulish">

            {/* Slider Section */}
            <div
                ref={sliderRef}
                className="relative keen-slider font-rajdhani h-auto">

                {/* Sidebar */}
                <div className="absolute top-0 left-0 z-[9999] bg-black bg-opacity-20 p-4 w-full">
                    <Sidebar />
                </div>

                {sliderData.map((slide, index) => (
                    <div
                        key={index}
                        className={`keen-slider__slide number-slide relative inset-0`}
                    >
                        <img
                            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
                            src={slide.image}
                            alt={slide.title}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-center justify-center space-y-4 px-6 sm:px-8 lg:px-20">
                            <h2 className="font-cinzel text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white">
                                {slide.title}
                            </h2>
                            <p className="font-mulish text-md sm:text-lg md:text-2xl text-gray-300">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
          <div className="relative w-full top-0 left-0">
          <div className=" justify-center items-center flex space-x-4 w-full">
                <button
                    onClick={handlePrevious}
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
                    aria-label="Previous Slide"
                >
                    Previous
                </button>
                <div className="flex justify-center h-5 space-x-4">
                    {sliderData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => instanceRef.current?.moveToIdx(index)}
                            className={`text-xl font-bold border-r border-gray-400 px-2 ${currentIndex === index ? "text-primary-light" : "text-white"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            0{index + 1}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
                    aria-label="Next Slide"
                >
                    Next
                </button>
            </div>
          </div>
        </div>
    );

};

export default Hero;
