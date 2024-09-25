import React from "react";
import { PropTypes } from "prop-types";

const SingleCard = ({ image, heading, description }) => {
  return (
    <>
      <img src={image} alt={heading} />
      <p className="mt-3 text-2xl font-medium">{heading}</p>

      <p className="mt-5 font-normal text-tertiary-gray text-base leading-[26px] font-para">
        {description}
      </p>
    </>
  );
};

export default SingleCard;

SingleCard.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
