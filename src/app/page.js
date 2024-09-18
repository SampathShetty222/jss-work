import React from "react";
import HomeBanner from "@/components/home/homeBanner";
import AboutNoida from "@/components/home/aboutNoida";
import OurValue from "@/components/home/ourValue";
import AluminiCard from "@/components/home/aluminiCard";
import RecruiterCard from "@/components/home/recruiterCard";
import HeaderCard from "@/components/common/headerCard";
import CoursesOffered from "@/components/home/coursesOffered";
import { circularData } from "@/components/home/data";
import NewsCard from "@/components/home/newsCard";
import Contactus from "@/components/home/contact-us";
import FacilitiesCard from "@/components/home/facilitiesCard";
import NameChip from "@/components/common/chips/nameChip";
import CircularCard from "@/components/home/circularCard";

const Page = () => {
  return (
    <main>
      <HomeBanner />
      <AboutNoida />
      <OurValue />
      <AluminiCard />
      <RecruiterCard />

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

      <FacilitiesCard />

      <section className="bg-white md:px-20 relative z-20">
        <div className="max-w-7xl md:mx-auto md:flex py-20 mx-4">
          <div className="md:w-1/2 md:pr-24">
            <NameChip title="KEY FACTS" />
            <h2 className="text-32 font-normal md:pb-6 pb-4 pt-4">
              Statistical Insights
            </h2>
            <p className="text-base font-normal leading-6 text-secondary-opactiy60 font-para md:pb-0 pb-4">
              Our core mission revolves around ensuring student satisfaction, as
              evidenced by our outstanding 95% satisfaction rate derived from
              student feedback.Our core mission revolves around ensuring student
              satisfaction, as evidenced by our outstanding 95% satisfaction
              rate derived from student feedback.Our core mission revolves
              around ensuring student satisfaction, as evidenced by our
            </p>
            <button className="mt-10 text-sm font-medium w-fit px-4 py-[10px] border-2 border-tertiary-lightgray border-opacity-80 rounded-md font-para hidden md:block">
              View More
            </button>
          </div>
          <div className="md:w-1/2 md:flex md:gap-[18px]">
            <div className="md:w-3/4 md:pb-0 pb-4">
              <img src="/img/home/keyfacts.svg" alt="KeyFacts" />
            </div>
            <div className="flex md:flex-col flex-row justify-between gap-[18px]">
              <div className="bg-secondary-lightgray py-[30px] pl-[30px] md:pr-12 pr-[30px] rounded-xl h-full">
                <h5 className="text-4xl leading-9 text-black font-para font-medium">
                  10K+
                </h5>
                <p className="text-sm leading-7 font-para text-[#333333] pt-2">
                  Community Students Worldwide
                </p>
              </div>
              <div className="bg-secondary-lightgray py-[30px] px-[30px] rounded-xl h-full">
                <h5 className="text-4xl leading-9 text-black font-para font-medium">
                  85%
                </h5>
                <p className="text-sm leading-7 font-para text-[#333333] pt-2">
                  Impressive Courses Completion
                </p>
              </div>
            </div>
            <button className="md:mt-10 mt-8 text-sm font-medium md:w-fit w-full px-4 py-[10px] border-2 border-[#CACBCF] border-opacity-80 rounded-md font-para md:hidden block ">
              View More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white md:px-20 relative z-20">
        <div className="max-w-7xl md:mx-auto md:py-20 py-0 mx-4">
          <HeaderCard
            title="Circulars and Announcements"
            description="Find important updates, academic schedules, and key notifications to stay informed with the latest circulars and announcements"
          />
          <div className="md:grid grid-cols-3 gap-6 pt-9">
            {circularData.map((value) => {
              return (
                <React.Fragment key={value.id}>
                  <CircularCard value={value} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <NewsCard />
      <Contactus />
    </main>
  );
};

export default Page;
