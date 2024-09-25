/* eslint-disable multiline-ternary */
"use client";
import { RxLink2 } from "react-icons/rx";
import { LiaDownloadSolid } from "react-icons/lia";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PropTypes } from "prop-types";

const ResearchCard = ({ props }) => {
  return (
    <>
      <div className="flex justify-between items-center border-b  hover:bg-slate-50">
        <div className="flex gap-3 py-4 items-center w-full md:px-6">
          <div className="bg-[#cccccc] border border-[#cccccc] border-opacity-80 w-11 h-11 rounded-full overflow-hidden">
            <img
              src={props.image}
              alt={props.heading}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <h6 className="text-base font-normal text-[#101828] mb-1">
              {props.heading}
            </h6>
            <p className="text-sm font-normal opacity-60 font-para">
              {props.description}
            </p>
          </div>
        </div>
        <div className="px-6 max-h-full">
          {props.copyLink ? (
            <CopyToClipboard text="Hello!">
              <RxLink2 className="text-2xl text-[#475467] cursor-pointer" />
            </CopyToClipboard>
          ) : (
            <a href="/#" download>
              <LiaDownloadSolid className="text-2xl text-[#475467]" />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default ResearchCard;

ResearchCard.propTypes = {
  props: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  copyLink: PropTypes.boolean,
};
