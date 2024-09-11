"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRef } from "react";
import { bannerImages } from "./data";

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
        {bannerImages.map((item) => (
          <div
            key={item.id}
            className="h-[380px] md:px-3 md:h-[500px] relative"
          >
            <Image
              src={item.image}
              alt="login"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full rounded-2xl object-cover"
            />
            <div className="absolute w-auto md:w-full text-center z-10 bottom-14 text-white">
              <h1 className="font-bold px-3 md:px-0 md:w-auto md:leading-[3.2rem] max-w-3xl mx-auto text-base md:text-5xl">
                {item.title}
              </h1>
              <p className="text-xs px-3 md:px-0 md:w-auto md:text-lg mt-2 font-normal max-w-lg mx-auto">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <img
        onClick={() => sliderRef.current.slickPrev()}
        src="/img/home/previous-arrow.svg"
        alt="previous arrow"
        className="w-6 md:w-10 h-6 md:h-10 cursor-pointer absolute top-1/2 -translate-y-1/2 left-10 md:left-20"
      />
      <img
        onClick={() => sliderRef.current.slickNext()}
        src="/img/home/next-arrow.svg"
        alt="next arrow"
        className="w-6 md:w-10 h-6 md:h-10 cursor-pointer absolute top-1/2 -translate-y-1/2 right-10 md:right-20"
      />
    </div>
  );
};

export default HomeBanner;
