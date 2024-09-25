import React from "react";
import { PropTypes } from "prop-types";

const CoursesDetailCard = ({ props }) => {
  return (
    <>
      <div className="bg-[#F5F5F5] rounded-[14px] md:p-[34px] p-4">
        <div
          className={`w-10 h-10 ${props.iconBgColor} rounded-md mb-9 grid place-items-center p-2 text-white`}
        >
          {props.icon}
        </div>
        <div>
          <h3 className="mb-1 text-lg font-para font-bold leading-7">
            {props.cardValue}
          </h3>
          <p className="text-sm text-[#475467] font-para">{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default CoursesDetailCard;

CoursesDetailCard.propTypes = {
  props: PropTypes.object,
  iconBgColor: PropTypes.string,
  icon: PropTypes.string.isRequired,
  cardValue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
