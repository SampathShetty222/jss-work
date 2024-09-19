"use client";
import CoursesOfferedCard from "@/components/admission/coursesOfferedCard";
import { courseDetails } from "@/components/about-us/data";
import React, { Fragment, useState } from "react";
import { RiHome6Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Select from "react-select";
import { coursesOptions } from "@/components/admission/data";
import { TbFilter } from "react-icons/tb";
import Link from "next/link";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <section className="px-4 md:px-20">
      <div className="mt-20 flex items-center justify-center gap-x-3">
        <Link href={"/"}>
          {" "}
          <RiHome6Line />{" "}
        </Link>
        <IoIosArrowForward className="text-sm text-tertiary-dimgray" />
        <p className="text-secondary-lighterblue text-sm font-normal font-para">
          Management
        </p>
      </div>
      <p className="mt-14 text-32 text-center font-normal">
        Courses Offered By JSS University
      </p>
      <p className="text-secondary-opactiy60 mt-5 max-w-xl text-center mx-auto">
        Find important updates, academic schedules, and key notifications to
        stay informed with the latest circulars and announcements
      </p>

      <div className="mt-9 relative md:max-w-[300px] mx-auto">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={coursesOptions}
          styles={{
            control: (base) => ({
              ...base,
              paddingLeft: "18px",
              cursor: "pointer",
            }),
            singleValue: (base) => ({
              ...base,
              cursor: "pointer",
            }),
            option: (base) => ({
              ...base,
              cursor: "pointer",
            }),
          }}
        />
        <TbFilter className="text-lg absolute left-1 top-[10px]" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-10 mb-10">
        {courseDetails.map((value, i) => (
          <Fragment key={i}>
            <CoursesOfferedCard val={value} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Page;
