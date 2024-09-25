import React from "react";
import { TbMailFilled } from "react-icons/tb";
import { SiGithub } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { PropTypes } from "prop-types";

const Authorities = ({ props, index }) => {
  return (
    <>
      <div className={`mb-10 ${index < 3 ? "md:block hidden" : "block"}`}>
        <div className="w-16 h-16 overflow-hidden rounded-full mb-5">
          <img
            src={props?.image}
            alt={props?.name}
            className="object-cover w-full h-full"
          />
        </div>
        <h5 className="text-lg font-normal leading-[26px]">{props?.name}</h5>
        <p className="font-para text-[#2A94F1]">{props?.designation}</p>
        <div className="flex text-xl text-[#98A2B3] gap-4 mt-4">
          <a href={props?.mailLink}>
            <TbMailFilled />
          </a>
          <a href={props?.githubLink}>
            <SiGithub />
          </a>
          <a href={props?.linkedInLink}>
            <IoLogoLinkedin />
          </a>
          <a href={props?.twitterLink}>
            <FaXTwitter />
          </a>
        </div>
      </div>
    </>
  );
};

export default Authorities;

Authorities.propTypes = {
  props: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  mailLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  linkedInLink: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
};
