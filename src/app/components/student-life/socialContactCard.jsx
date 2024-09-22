import React from "react";
import Image from "next/image";

const SocialContactCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center">
      <Image width={45} height={45} src={item.url} alt={item.platform} />
      <p className="text-lg mt-4 text-primary-darkblack text-center">
        {item.platform}
      </p>
      <p className="mt-3 text-sm font-para text-tertiary-gray text-center ">
        {item.desc}
      </p>
      <p className="mt-2 text-base font-para font-medium text-secondary-lighterblue hover:text-purple-800 text-center transition-colors duration-300 ease-in-out ">
        {item.link}
      </p>
    </div>
  );
};

export default SocialContactCard;
