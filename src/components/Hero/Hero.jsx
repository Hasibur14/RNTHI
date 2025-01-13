import React, { useState } from "react";
import slider1 from "../../../src/assets/hero/slider.jpg";
import slider3 from "../../../src/assets/hero/slider5.jpg";
import Sidebar from "../Sidebar/Sidebar";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import 'animate.css';

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
                <div className="absolute top-0 left-0 z-[9999] backdrop-blur-[2px] bg-opacity-20 p-4 w-full">
                    <Sidebar />
                </div>

                {sliderData.map((slide, index) => (
                    <div
                        key={index}
                        className={`keen-slider__slide number-slide relative inset-0`}
                    >
                        <img
                            className="w-full h-[50vh] sm:h-[60vh] md:h-[100vh] object-cover animate__animated animate__fadeInDown"
                            src={slide.image}
                            alt={slide.title}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-center items-center justify-center space-y-4 px-6 sm:px-8 lg:px-20 ">
                            <h2 className="font-cinzel text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white animate__animated animate__fadeInUp">
                                {slide.title}
                            </h2>
                            <p className="font-mulish text-md sm:text-lg md:text-2xl text-gray-300 animate__animated animate__fadeInUp">
                                {slide.description}
                            </p>
                            {/* Stats Section */}
                            <div className=" gap-4 p-3 md:p-5 bg-primary-soft rounded  border-none animate__animated animate__fadeInUp">
                                <h4 className="text-xl">lets create your dream space</h4>
                                <div className="flex gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 lg:px-10">
                                    <div className="text-center">
                                        <p className="text-3xl lg:text-4xl xl:text-4xl  ">05+</p>
                                        <p>Available Program</p>
                                    </div>
                                    <div className="border-r-2"></div>
                                    <div className="text-center ">
                                        <p className="text-3xl lg:text-4xl xl:text-4xl ">21+</p>
                                        <p>Active Module</p>
                                    </div>
                                    <div className="border-r-2"></div>
                                    <div className="text-center">
                                        <p className="text-3xl lg:text-4xl xl:text-4xl ">100+</p>
                                        <p>Satisfied Students</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            <div className="absolute font-cinzel top-20 left-0 right-0 flex justify-center items-center space-x-4 w-full z-50">
                <button
                    onClick={handlePrevious}
                    className="flex  text-white font-semibold px-4 py-2 rounded-full hover:bg-primary-dark"
                    aria-label="Previous Slide"
                >
                    Prev
                </button>
                <div className="border border-gray-400 min-w-14 hidden md:block"></div>
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
                <div className="border border-gray-400 min-w-14 hidden md:block"></div>
                <button
                    onClick={handleNext}
                    className=" text-white px-4 py-2 font-semibold rounded-full hover:bg-primary-dark"
                    aria-label="Next Slide"
                >
                    Next
                </button>
            </div>

        </div>
    );

};

export default Hero;
