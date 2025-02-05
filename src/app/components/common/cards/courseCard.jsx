/* eslint-disable react/prop-types */

import React from "react";
import { PropTypes } from "prop-types";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const CourseCard = (props, index) => {
  return (
    <Link href={props.anchorLink}>
      <div
        className={`p-7 bg-secondary-lightgray duration-300 hover:bg-white border-2 border-white hover:border-secondary-lightgray rounded-[14px] md:mb-0 mb-4 ${props.className}`}
        key={index}
      >
        <img src={props.iconImage} alt={props.heading} />
        <h4 className="pt-6 text-2xl font-normal">{props.heading}</h4>
        <p className="pt-2 text-base leading-[26px] opacity-60 font-para">
          {props.description}
        </p>
        <div className="mt-3 flex justify-end ">
          <FaArrowRight className="-rotate-45" />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

CourseCard.propTypes = {
  props: PropTypes.object,
  index: PropTypes.number,
};
