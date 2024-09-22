import React from "react";
import { mapCollaborationData } from "../../components/academics/data";
import ActionHorzCard from "@/app/components/academics/ActionHorzCard";
import HeaderCard from "@/app/components/common/headerCard";
import { HiOutlineArrowRight } from "react-icons/hi";

const Collaboration = () => {
  return (
    <section className="md:px-20">
      <div className="max-w-7xl md:mx-auto mx-4 md:py-20 py-10">
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
          <button className="bg-primary-orange flex items-center justify-center gap-x-2 font-para p-2 rounded-lg text-sm font-medium text-white w-full md:w-fit">
            Get Updates
            <HiOutlineArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
