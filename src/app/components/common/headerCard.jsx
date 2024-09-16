/* eslint-disable object-curly-newline */

import React from "react";
import { PropTypes } from "prop-types";

const HeaderCard = ({ title, description }) => {
  return (
    <div className="max-w-xl mx-auto md:text-center">
      <h3 className="text-32 font-normal">{title}</h3>
      <p className="text-base leading-[26px] font-normal font-para text-secondary-opactiy60 pt-6">
        {description}
      </p>
    </div>
  );
};

export default HeaderCard;

HeaderCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.description,
};
