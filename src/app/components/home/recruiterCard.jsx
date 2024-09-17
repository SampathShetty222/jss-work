import React from "react";
import { recruiterData } from "./data";
import NameChip from "../common/chips/nameChip";
import RecruiteLogoCard from "../common/cards/recruiteLogoCard";

const RecruiterCard = () => {
  return (
    <section className="max-w-7xl md:mx-auto py-10 md:py-20 mx-4">
      <NameChip title="Recruiters" />
      <h2 className="text-32 font-normal pb-3 pt-4">
        Recruiters from the JSS Network
      </h2>
      <div className="pt-2 flex recruiter-scroll overflow-x-auto gap-[18px] w-full">
        {recruiterData.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <RecruiteLogoCard item={value} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default RecruiterCard;
