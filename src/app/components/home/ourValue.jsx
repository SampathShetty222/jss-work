import React from "react";
import { ourValueData } from "./data";

const OurValue = () => {
  return (
    <section className="max-w-7xl md:mx-auto md:py-20 py-10 mx-4">
      <div className="max-w-[600px] mx-auto md:text-center text-start">
        <h3 className="text-[32px] font-normal">Our Values</h3>
        <p className="text-base leading-[26px] font-normal font-para opacity-60 pt-6">
          Lorem ipsum dolor sit amet consectetur. Eu dui mauris pharetra arcu
          nec aliquam. Id et nunc sit risus. Tortor phasellus erat quis blandit.
          Enim.
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 gap-6 rounded-[14px] pt-[36px]">
        {ourValueData.map((value) => {
          return (
            <div
              className="bg-[#F5F5F5] rounded-[14px] p-7 md:mb-0 mb-4"
              key={value.id}
            >
              <img src={value.iconImage} alt={value.altText} />
              <h4 className="text-[32px] leading-10 font-normal pt-24">
                {value.title}
              </h4>
              <p className="text-base font-normal font-para max-w-[405px] mt-2">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurValue;
