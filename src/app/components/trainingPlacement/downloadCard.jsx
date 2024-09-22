"use client";
import React from "react";
import { PropTypes } from "prop-types";
import { GoArrowDown } from "react-icons/go";

const DownladCard = ({ item }) => {
  return (
    <div className="border-b border-gray-200 grid grid-cols-12">
      {/* Description section start */}
      <div className="col-span-11 hover:bg-gray-100">
        <p className="text-base font-para mt-3 px-3">{item.text}</p>
        <p className="mb-2 px-3 py-1.5 text-sm font-sans text-[#00000099] pt-1">
          {item.file}
        </p>
      </div>
      {/* Description section end */}
      <a
        href="/dummy.pdf"
        target="_blank"
        className="hover:bg-gray-100 flex items-center justify-center col-span-1"
      >
        <GoArrowDown className="text-xl" />
      </a>
      {/* Download button section end */}
    </div>
  );
};

export default DownladCard;

DownladCard.propTypes = { item: PropTypes.object };
