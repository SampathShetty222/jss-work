import React from "react";
import { PropTypes } from "prop-types";

const RankStudentCard = ({ props }) => {
  return (
    <>
      <div className="bg-[#F5F5F5] rounded-[21px] p-[18px] flex items-center gap-[18px]">
        <div>
          <img src={props.image} alt={props.name} />
        </div>
        <div>
          <h5 className="text-xl font-normal text-[#101828] mb-2">
            {props.name}
          </h5>
          <p className="text-base font-semibold font-para text-[#2A94F1] mb-4">
            {props.rank}
          </p>
          <p className="text-sm text-[#475467] font-para font-normal">
            {props.year}
          </p>
        </div>
      </div>
    </>
  );
};

export default RankStudentCard;

RankStudentCard.propTypes = {
  props: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
