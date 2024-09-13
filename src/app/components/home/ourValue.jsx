import React from "react";
import { ourValueData } from "./data";
import OurValueCard from "../common/cards/ourValueCard";

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
            <React.Fragment key={value.id}>
              <OurValueCard value={value} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default OurValue;
