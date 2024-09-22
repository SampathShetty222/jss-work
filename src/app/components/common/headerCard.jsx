/* eslint-disable object-curly-newline */

import React from "react";
import { PropTypes } from "prop-types";

const HeaderCard = ({ title, description, className }) => {
  return (
    <div className={`max-w-headerCard mx-auto md:text-center ${className}`}>
      <h3 className="text-32 font-normal">{title}</h3>
      <p className="text-base leading-[26px] font-normal font-para text-secondary-opactiy60 pt-5">
        {description}
      </p>
    </div>
  );
};

export default HeaderCard;

HeaderCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.description,
  className: PropTypes.string,
};
