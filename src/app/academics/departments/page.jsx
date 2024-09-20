import HeaderCard from "@/app/components/common/headerCard";
import CoursesOffered from "@/app/components/home/coursesOffered";
import React from "react";

const Departments = () => {
  return (
    <>
      <section className="md:px-20">
        <div className="max-w-7xl md:mx-auto pb-20 mx-4 mt-16">
          <HeaderCard
            title="Courses Offered By JSS University"
            description="Find important updates, academic schedules, and key notifications to stay informed with the latest circulars and announcements"
          />
          <div className="md:grid grid-cols-3 gap-6 pt-9">
            <CoursesOffered />
            <button className="md:mt-10 mt-8 text-sm font-medium md:w-fit w-full px-4 py-10px border-2 border-tertiary-lightgray border-opacity-80 rounded-md font-para md:hidden block">
              View More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Departments;
