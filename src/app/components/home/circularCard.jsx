/* eslint-disable object-curly-newline */

import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { PropTypes } from "prop-types";

const CircularCard = ({ value }) => {
  return (
    <div className="p-7 bg-secondary-lightgray border-2 border-white hover:bg-white hover:border-secondary-lightgray duration-300 rounded-14 relative">
      <div className="absolute top-18 right-18">
        {value.badge && (
          <div className="flex bg-primary-orange px-2 py-1 rounded-full text-white items-center gap-1.5">
            <GiStarShuriken className="text-[8px]" />
            <p className="text-xs font-para font-semibold">{value.badge}</p>
          </div>
        )}
      </div>
      <img src={value.iconImage} alt={value.title} />
      <div className="mt-6 flex justify-between items-center">
        <h4 className="text-2xl font-normal">{value.title}</h4>
        <a href={value.anchorLink}>
          <FaArrowRight className="-rotate-45" />
        </a>
      </div>
    </div>
  );
};

export default CircularCard;

CircularCard.propTypes = {
  value: PropTypes.object,
};
