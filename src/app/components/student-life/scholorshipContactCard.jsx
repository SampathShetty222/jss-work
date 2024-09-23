import React, { Fragment } from "react";
import { PropTypes } from "prop-types";

const ScholorshipContactCard = (props) => {
  return (
    <>
      <div className="p-6">
        <div className="max-w-48 min-h-36 rounded-[5px] overflow-hidden">
          <img
            src={props.image}
            alt={props.name}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-xl leading-7 pt-3">{props.name}</h3>
      </div>
    </>
  );
};

export default ScholorshipContactCard;

ScholorshipContactCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
