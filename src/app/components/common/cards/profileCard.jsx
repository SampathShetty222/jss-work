import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { PropTypes } from "prop-types";

const ProfileCard = ({ item }) => {
  return (
    <div className="flex-col border-l-2 border-orange-500 items-center justify-start px-5 py-3">
      <p className="font-medium text-base italic leading-6 ">{item.desc}</p>
      <div className="mt-5 flex justify-start items-center">
        <Image src={item.url} width={35} height={35} alt="Proff Photo" />
        <div className="ml-3">
          <p className="font-bold text-sm ">{item.name}</p>
          <p className="text-tertiary-gray text-sm">{item.post}</p>
        </div>
      </div>
      <div className="mt-7 flex justify-start items-center gap-5 ">
        <div className="flex justify-start items-center gap-x-1">
          <CiMail className="text-base font-semibold text-secondary-lighterblue" />
          <p className="text-sm font-para font-normal text-tertiary-gray">
            {item.email}
          </p>
        </div>
        <div className="flex justify-start items-center gap-x-1">
          <FiPhone className="text-sm font-semibold text-secondary-lighterblue" />
          <p className="text-sm font-para font-normal text-tertiary-gray">
            {item.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

ProfileCard.propTypes = { item: PropTypes.object };
