"use client";
import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { PropTypes } from "prop-types";

const ActionHorzCard = ({ item }) => {
  return (
    <div className="border-b-2 border-gray-200 grid grid-cols-12">
      <div className="col-span-11 hover:bg-gray-100 py-[15px] md:px-6">
        <p className="marcellus text-base">{item.text}</p>
        <p className=" text-sm font-para opacity-60 pt-1">{item.file}</p>
      </div>
      <a
        href="/dummy.pdf"
        target="_blank"
        className="hover:bg-gray-100 flex items-center justify-center col-span-1"
      >
        <LiaDownloadSolid className="transform hover:scale-110 transition-all text-[25px] text-tertiary-gray" />
      </a>
    </div>
  );
};

export default ActionHorzCard;

ActionHorzCard.propTypes = { item: PropTypes.object };
