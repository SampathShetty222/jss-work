/* eslint-disable object-curly-newline */
import { PropTypes } from "prop-types";
import Image from "next/image";
import React from "react";

const ContentCard = ({ item }) => {
  return (
    <div className="bg-white flex-col items-center justify-start">
      {item?.url && (
        <Image
          sizes="100vw"
          width={0}
          height={0}
          src={item.url}
          className="w-full rounded-lg"
          alt="photo"
        />
      )}
      <p className="text-4xl mt-4 text-tertiary-black">{item.title}</p>
      <p className="mt-4 font-para font-normal text-tertiary-gray">
        {item.desc}
      </p>
    </div>
  );
};

export default ContentCard;

ContentCard.propTypes = {
  item: PropTypes.object,
};
