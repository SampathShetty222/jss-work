/* eslint-disable object-curly-newline */

import { PropTypes } from "prop-types";

import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";

const NameChip = ({ title }) => {
  return (
    <p className="bg-tertiary-lightblack text-white font-para uppercase px-3 py-1.5 w-fit rounded-2xl text-xs font-normal flex gap-3">
      <RiGraduationCapLine className="text-sm" />
      {title}
    </p>
  );
};

export default NameChip;

NameChip.propTypes = {
  title: PropTypes.string,
};
