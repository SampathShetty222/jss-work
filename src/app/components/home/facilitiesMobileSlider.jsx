import React, { useRef } from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { content } from "./data";
import { GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FacilitiesMobileSlider = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:hidden px-4">
      <Slider ref={sliderRef} {...settings}>
        {content.map((item, index) => (
          <div key={index}>
            {index === 0 && (
              <p className="bg-white text-black font-para uppercase px-3 py-1.5 w-fit rounded-2xl text-xs font-normal flex gap-2">
                <RiGraduationCapLine className="text-sm text-black" /> FACILTIES
              </p>
            )}
            <p className="text-white mt-2 font-normal text-2xl">{item.title}</p>
            <p className="mt-3 text-primary-opactiy60 text-base">
              {item.description}
            </p>
            <div className="mt-5 h-[207px]">
              <img
                src={item.content}
                alt="classroom"
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </Slider>

      <div className="mt-3 flex items-center gap-x-2 justify-end">
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="w-10 h-10 cursor-pointer flex justify-center items-center border-2 rounded-full"
        >
          <GoArrowRight className="text-xl text-white rotate-180" />
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="w-10 h-10 cursor-pointer flex justify-center items-center border-2 rounded-full"
        >
          <GoArrowRight className="text-xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesMobileSlider;
