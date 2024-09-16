import React from "react";
import { alumniData } from "./data";

const AluminiCard = () => {
  return (
    <section className="bg-secondary-black py-20">
      <div className="max-w-7xl md:mx-auto md:text-center mx-4">
        <div className="max-w-xl mx-auto md:text-center">
          <h3 className="text-white text-32 font-normal">
            JSS Technical Education Alumni
          </h3>
          <p className="text-base font-para text-primary-opactiy60 pt-6 font-normal">
            Our alumni excel across various industries, making us proud with
            their accomplishments and leadership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-white max-w-4xl mx-auto pt-9 text-start">
          {alumniData.map((value, index) => {
            return (
              <div
                className={`md:flex gap-4 border-b py-3 border-[#323232] md:pl-9 ${index === 0 || index === 1 ? "border-t" : "border-t-0"} ${index % 2 === 0 ? "border-r" : "border-r-0"} ${index % 2 === 1 ? "hidden md:flex" : "flex"}`}
                key={value.id}
              >
                <div className="w-12 h-12">
                  <img
                    src={value.alumniImage}
                    alt="name1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-base font-normal">{value.alumniName}</h5>
                  <p className="text-sm font-para text-primary-opactiy60 pt-1">
                    {value.alumniDetails}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="mt-10 text-sm font-medium md:w-fit w-full px-4 py-[10px] border-2 border-white border-opacity-20 rounded-md font-para text-white">
          View More
        </button>
      </div>
    </section>
  );
};

export default AluminiCard;
