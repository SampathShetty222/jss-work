import React from "react";
import { mapCalenderData } from "../data";
import ActionHorzCard from "@/components/academics/ActionHorzCard";
import HeaderCard from "@/app/components/common/headerCard";
import { HiOutlineArrowRight } from "react-icons/hi";

const CalendarOfEvents = () => {
  return (
    <section className="max-w-3xl md:mx-auto mx-4 md:py-20 py-10">
      <HeaderCard
        title="Calendar of Events"
        description="Stay updated on events, workshops, and seminars at JSS University, and never miss an opportunity to participate in academic and extracurricular activities."
        className="text-center"
      />
      <div className="mt-[32px]">
        {mapCalenderData.map((item) => (
          <ActionHorzCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-12 md:px-3">
        <button className="bg-primary-orange font-para p-3 rounded-lg text-lg relative text-white w-full md:w-fit">
          Get Updates
          <span className="ml-2">
            <HiOutlineArrowRight className="left-8 inline-block text-lg" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default CalendarOfEvents;
