import React from "react";
import { recruiterData } from "./data";
import { RiGraduationCapLine } from "react-icons/ri";

const RecruiterCard = () => {
  return (
    <section className="max-w-7xl md:mx-auto py-20 mx-4">
      <p className="bg-[#1A1A1A] text-white font-para uppercase px-4 py-2 w-fit rounded-2xl text-xs font-normal flex gap-2">
        <RiGraduationCapLine className="text-sm" />
        Recruiters
      </p>
      <h2 className="text-[32px] font-normal pb-6 pt-4">
        Recruiters from the JSS Network
      </h2>
      <div className="pt-5 md:flex gap-[18px] w-full">
        {recruiterData.map((value) => {
          return (
            <div
              className="min-w-[248px] min-h-[280px] bg-[#F5F5F5] grid place-items-center rounded-[14px]"
              key={value.id}
            >
              <img src={value.companyLogo} alt={value.altText} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecruiterCard;
