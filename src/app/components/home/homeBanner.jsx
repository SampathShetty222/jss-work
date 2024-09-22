"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRef } from "react";
import { bannerImages } from "./data";
import { GoArrowRight } from "react-icons/go";

const HomeBanner = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "60px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="mt-2 home-banner relative px-5 md:px-0">
      <Slider ref={sliderRef} {...settings}>
        {bannerImages.map((item, index) => (
          <div key={item.id} className="md:px-3 relative">
            <div className="h-[350px] md:h-[500px] relative">
              <Image
                src={item.image}
                alt="login"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full rounded-2xl object-cover"
              />
              <div
                className="absolute rounded-2xl inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.3)_30%)]"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>

            <div className="absolute px-2 md:px-0 w-full text-center z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <h1 className="font-normal md:leading-[3.2rem] max-w-3xl mx-auto text-xl md:text-5xl">
                {item.title}
              </h1>
              <p className="text-sm md:text-base mt-2 md:mt-5 font-normal max-w-3xl mx-auto">
                {item.desc}
              </p>
              {index === 0 && (
                <button className="bg-white border-2 text-black rounded-md text-10px md:text-sm font-medium py-2 px-2 md:px-4">
                  Contact Us
                </button>
              )}
            </div>

            {index === 0 && (
              <button className="bg-white rounded-md text-10px md:text-sm px-4 py-1 absolute top-3 md:top-5 left-3 md:left-8">
                JSS MAHAVIDYAPEETHA
              </button>
            )}
          </div>
        ))}
      </Slider>

      <div
        onClick={() => sliderRef.current.slickNext()}
        className="w-10 h-10 cursor-pointer absolute bottom-4 md:bottom-0 md:top-1/2 -translate-y-1/2 right-10 md:right-20 flex justify-center items-center border-2 rounded-full"
      >
        <GoArrowRight className="text-xl text-white" />
      </div>

      <div
        onClick={() => sliderRef.current.slickPrev()}
        className="w-10 h-10 cursor-pointer absolute bottom-4 md:bottom-0 md:top-1/2 -translate-y-1/2  right-24 md:right-0 md:left-20 flex justify-center items-center border-2 rounded-full"
      >
        <GoArrowRight className="text-xl text-white rotate-180" />
      </div>
    </div>
  );
};

export default HomeBanner;
