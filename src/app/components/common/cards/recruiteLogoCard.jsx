/* eslint-disable object-curly-newline */

import { PropTypes } from "prop-types";
import React from "react";

const RecruiteLogoCard = ({ item }) => {
  return (
    <div className="min-w-60 !min-h-[280px] bg-secondary-lightgray grid place-items-center rounded-[14px]">
      <img src={item.companyLogo} alt={item.altText} />
    </div>
  );
};

export default RecruiteLogoCard;

RecruiteLogoCard.propTypes = {
  item: PropTypes.object,
};
