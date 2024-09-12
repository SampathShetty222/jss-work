import { RiHome6Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbFilter } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import Courses from "./courses";

const AboutCourses = () => {
  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="max-w-[600px] mx-auto text-center">
        <div className="flex gap-3 justify-center">
          <RiHome6Line className="text-xl text-[#667085]" />
          <MdOutlineKeyboardArrowRight className="text-base text-[#D0D5DD]" />
          <p className="text-sm font-para font-semibold text-[#2A94F1]">
            Engineering
          </p>
        </div>
        <div className="pt-[54px]">
          <h3 className="text-[32px] font-normal pb-6">
            Courses Offered By JSS University
          </h3>
          <p className="text-base leading-[26px] font-para font-normal opacity-60 pb-9">
            Find important updates, academic schedules, and key notifications to
            stay informed with the latest circulars and announcements
          </p>
          <button className="flex border border-[#D0D5DD] px-3 py-2 items-center w-fit mx-auto gap-4 rounded-md">
            <TbFilter />
            Under Graduate (UG) / Engineering
            <MdKeyboardArrowDown className="text-xl text-[#344054] opacity-60" />
          </button>
        </div>
      </div>
      <Courses />
    </section>
  );
};

export default AboutCourses;
