import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";

const AboutNoida = () => {
  return (
    <section className="max-w-7xl md:mx-auto md:flex flex md:flex-row flex-col pb-10 md:pb-20 md:pt-40 pt-10 md:px-0 mx-4">
      <div className="md:w-1/2 w-full md:pr-24 md:order-0 order-1">
        <p className="bg-[#1A1A1A] text-white font-para uppercase px-4 py-2 w-fit rounded-2xl text-xs font-normal md:flex gap-2 hidden">
          <RiGraduationCapLine className="text-sm" /> WELCOME
        </p>
        <h2 className="text-[32px] font-normal pb-6 pt-4 hidden md:block">
          JSSATE, Noida
        </h2>
        <p className="text-base font-normal leading-6 opacity-60 font-para mt-4 md:mt-0">
          JSS Academy of Technical Education Noida (JSSATEN), established in
          1998 by JSS Mahavidyapeetha, is a leading institution in the National
          Capital Region. Renowned for its excellence in discipline, teaching,
          training, and placement, JSSATEN continues to set benchmarks in
          technical education. With a vibrant student body of over 4,000 and a
          dedicated faculty of 250+ members, the institution provides top-tier
          education and comfortable accommodations for both boys and girls in
          the heart of Noida.
        </p>
        <button className="md:mt-10 mt-8 text-sm font-medium md:w-fit w-full px-4 py-[10px] border-2 border-[#CACBCF] border-opacity-80 rounded-md font-para">
          View More
        </button>
      </div>
      <div className="md:w-1/2 w-full md:order-1 order-0">
        <p className="bg-[#1A1A1A] text-white font-para uppercase px-4 py-2 w-fit rounded-2xl text-xs font-normal flex gap-2 md:hidden ">
          <RiGraduationCapLine className="text-sm" /> WELCOME
        </p>
        <h2 className="text-[32px] font-normal pb-6 pt-4  md:hidden block">
          JSSATE, Noida
        </h2>
        <img src="/img/home/about.svg" alt="about-page" />
      </div>
    </section>
  );
};

export default AboutNoida;
