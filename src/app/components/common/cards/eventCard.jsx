/* eslint-disable object-curly-newline */
import { PropTypes } from "prop-types";
import Image from "next/image";
import React from "react";

const EventCard = ({ item }) => {
  return (
    <div className="flex-col items-center justify-start ">
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

      <p className="text-2xl text-tertiary-black mt-4">{item.title}</p>
      <p className="mt-4 font-para font-normal text-tertiary-gray text-base">
        {item.desc}
      </p>
    </div>
  );
};

export default EventCard;

EventCard.propTypes = {
  item: PropTypes.object,
};
