import React from "react";
import { PropTypes } from "prop-types";

const Box = ({ item, bgColor }) => {
  return (
    <>
      <p
        className={`font-para px-[10px] py-1 ${bgColor} text-sm font-normal text-white rounded-md`}
      >
        {item}
      </p>
    </>
  );
};

export default Box;

Box.propTypes = {
  item: PropTypes.string,
  bgColor: PropTypes.string,
};
