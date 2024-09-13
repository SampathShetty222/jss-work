/* eslint-disable object-curly-newline */

import { PropTypes } from "prop-types";
import React from "react";

export const OurValueCard = ({ value }) => {
  return (
    <div className="bg-secondary-lightgray rounded-[14px] p-7 md:mb-0 mb-4">
      <img src={value.iconImage} alt={value.altText} />
      <h4 className="text-32 leading-10 font-normal pt-24">{value.title}</h4>
      <p className="text-base font-normal font-para max-w-[405px] mt-2">
        {value.description}
      </p>
    </div>
  );
};

export default OurValueCard;

OurValueCard.propTypes = {
  value: PropTypes.object,
};
