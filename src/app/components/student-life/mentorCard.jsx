import Image from "next/image";
import React from "react";
import { PropTypes } from "prop-types";

const MentorCard = ({ item }) => {
  return (
    <div className="bg-secondary-lightgray rounded-lg p-7">
      <div>
        <Image width={48} height={48} src={item.url} alt="Random Picture" />
      </div>
      <p className="text-2xl mt-4 mb-2">{item.sub}</p>
      <p className="text-base text-tertiary-opacity80 font-para">{item.text}</p>
    </div>
  );
};

export default MentorCard;

MentorCard.propTypes = { item: PropTypes.object };
