import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { PropTypes } from "prop-types";

const PdfDownloadCard = (props) => {
  return (
    <div
      className="border-b-2 border-gray-200 grid grid-cols-12"
      key={props.id}
    >
      <div className="col-span-11 hover:bg-gray-100 py-[15px] md:px-6 flex gap-3 items-center">
        <div className="bg-[#cccccc] rounded-full w-10 h-10 overflow-hidden border-[0.75px] border-black border-opacity-10">
          <img src={props.image} alt="" className="object-cover" />
        </div>
        <div>
          <p className="marcellus text-base">{props.name}</p>
          <p className=" text-sm font-para opacity-60 pt-1">{props.pdfName}</p>
        </div>
      </div>
      <a
        href={props.pdf}
        target="_blank"
        className="hover:bg-gray-100 flex items-center justify-center col-span-1"
        rel="noreferrer"
      >
        <LiaDownloadSolid className="transform hover:scale-110 transition-all text-[25px] text-tertiary-gray" />
      </a>
    </div>
  );
};

export default PdfDownloadCard;

PdfDownloadCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  pdfName: PropTypes.string.isRequired,
  pdf: PropTypes.string.isRequired,
};
