import React from "react";
import DownladCard from "./downloadCard";
import { PropTypes } from "prop-types";

const ProgramCard = ({ item }) => {
  return (
    <>
      <p className="marcellus text-[1.5rem] font-medium mb-8">{item.title}</p>
      <ul className="list-disc  text-[#475467]  text-base list-inside ml-6 mb-8">
        {item.points.map((point, index) => (
          <li key={index}> {point} </li>
        ))}
      </ul>
      {item?.download && <DownladCard item={item.download} />}
    </>
  );
};

export default ProgramCard;

ProgramCard.propTypes = { item: PropTypes.object };
