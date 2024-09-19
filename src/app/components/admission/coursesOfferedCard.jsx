/* eslint-disable object-curly-newline */

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Box from "../about-us/boxChip";
import { PropTypes } from "prop-types";
import Link from "next/link";

const CoursesOfferedCard = ({ val }) => {
  return (
    <div className="py-[26px] px-7 bg-secondary-lightgray duration-300 hover:bg-white border-2 border-white hover:border-secondary-lightgray flex flex-col justify-between rounded-[14px] min-h-48">
      <h4 className="text-2xl font-normal">{val.courseName}</h4>
      <div className="flex justify-between items-end">
        <div className="flex gap-3">
          <Box item={val.years} bgColor="bg-[#4BA6F5]" />
          <Box item={val.level} bgColor="bg-[#33CC99]" />
        </div>
        <Link href="#">
          <FiArrowUpRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default CoursesOfferedCard;

CoursesOfferedCard.propTypes = {
  val: PropTypes.object,
};
