import React from "react";
import { alumniData } from "./data";

const AluminiCard = () => {
  return (
    <section className="bg-[#161616] py-20">
      <div className="md:max-w-7xl md:mx-auto md:text-center mx-4">
        <div className="max-w-[600px] mx-auto md:text-center">
          <h3 className="text-white text-[32px] font-normal">
            JSS Technical Education Alumni
          </h3>
          <p className="text-white text-base font-para opacity-60 pt-6 font-normal">
            Our alumni excel across various industries, making us proud with
            their accomplishments and leadership.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 text-white max-w-[974px] mx-auto pt-9 text-start">
          {alumniData.map((value, index) => {
            return (
              <div
                className={`md:flex gap-4 border-b py-3 border-[#323232] md:pl-9 ${index === 0 || index === 1 ? "border-t" : "border-t-0"} ${index % 2 === 0 ? "border-r" : "border-r-0"} ${index % 2 === 1 ? "hidden md:flex" : "flex"}`}
                key={value.id}
              >
                <img src={value.alumniImage} alt="name1" />
                <div>
                  <h5 className="text-base font-normal">{value.alumniName}</h5>
                  <p className="text-sm font-para opacity-60 pt-1">
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
