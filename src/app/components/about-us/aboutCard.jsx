/* eslint-disable object-curly-newline */

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Box from "./boxChip";
import { PropTypes } from "prop-types";

const AboutCards = ({ val }) => {
  return (
    <div className="py-[26px] px-7 bg-[#F5F5F5] flex flex-col justify-between rounded-[14px] min-h-48 md:mb-0 mb-4">
      <h4 className="text-2xl font-normal">{val.courseName}</h4>
      <div className="flex justify-between items-end">
        <div className="flex gap-3">
          <Box item={val.years} bgColor="bg-[#4BA6F5]" />
          <Box item={val.level} bgColor="bg-[#33CC99]" />
        </div>
        <a href="#">
          <FiArrowUpRight className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default AboutCards;

AboutCards.propTypes = {
  val: PropTypes.object,
};
