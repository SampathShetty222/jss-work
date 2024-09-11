import { PropTypes } from "prop-types";

import React from "react";

const NavigationChip = ({ item, backgroundColor }) => {
  return (
    <>
      <div
        className={`w-10 h-10 rounded-full ${backgroundColor} flex items-center justify-center`}
      >
        <img src={item.icon} alt="icon" />
      </div>
      <div>
        <p className="text-secondary-lightblack text-sm font-medium">
          {item.title}
        </p>
        <p className="text-tertiary-gray text-xs font-normal">{item.desc}</p>
      </div>
    </>
  );
};

export default NavigationChip;

NavigationChip.propTypes = {
  item: PropTypes.object,
  backgroundColor: PropTypes.string,
};
