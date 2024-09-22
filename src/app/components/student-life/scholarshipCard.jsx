import React from "react";
import { PropTypes } from "prop-types";

const ScholarshipCard = ({ item }) => {
  return (
    <div className="p-6 rounded-xl bg-secondary-lightgray duration-300 hover:bg-white border-2 border-white hover:border-secondary-lightgray">
      <p className="text-primary-darkblack font-normal text-xl leading-[26px] mb-5 text-start">
        {item.title}
      </p>
      <p className="leading-[26px] font-para text-tertiary-gray font-normal text-base">
        {item.desc}
      </p>
      <a
        href={item.link}
        className="leading-[26px] text-secondary-lighterblue hover:cursor-pointer text-base"
        target="_blank"
      >
        {item.link}
      </a>
    </div>
  );
};

export default ScholarshipCard;

ScholarshipCard.propTypes = { item: PropTypes.object };
