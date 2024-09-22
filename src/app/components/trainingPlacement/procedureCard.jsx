import Image from "next/image";
import React from "react";
import { PropTypes } from "prop-types";

const ProcedureCard = ({ item }) => {
  return (
    <div className="px-5 py-1.5 bg-white flex items-center justify-start gap-3">
      <Image src={item.url} width={55} height={55} alt="icons.svg" />

      <div>
        <p className="max-w-md text-start text-sm font-medium">{item.line}</p>
      </div>
    </div>
  );
};

export default ProcedureCard;

ProcedureCard.propTypes = { item: PropTypes.object };
