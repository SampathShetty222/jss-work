import React from "react";
import { mapCollaborationData } from "../../components/academics/data";
import ActionHorzCard from "@/app/components/academics/ActionHorzCard";
import HeaderCard from "@/app/components/common/headerCard";
import { HiOutlineArrowRight } from "react-icons/hi";

const Collaboration = () => {
  return (
    <section className="max-w-7xl md:mx-auto mx-4 md:py-20 py-10">
      <HeaderCard
        title="JSS Collaborations and MOU'S"
        description="JSSATE Noida is building industry collaborations through MOUs to enhance practical knowledge for faculty and students"
        className="text-center"
      />
      <div className="mt-[32px] grid md:grid-cols-2 gap-x-5">
        {mapCollaborationData.map((item) => (
          <ActionHorzCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-12 md:px-3 ">
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

export default Collaboration;
