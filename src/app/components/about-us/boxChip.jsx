import React from "react";
import { PropTypes } from "prop-types";

const Box = ({ item, bgColor }) => {
  return (
    <>
      <button
        className={`font-para px-[10px] py-2 ${bgColor} text-white rounded-[6px]`}
      >
        {item}
      </button>
    </>
  );
};

export default Box;

Box.propTypes = {
  item: PropTypes.string,
  bgColor: PropTypes.string,
};
