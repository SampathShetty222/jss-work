"use client";
import React, { useEffect, useState } from "react";
import Authorities from "@/components/about-us/authorities";
import { greenInitiativeData } from "@/components/about-us/data";
import ContentCard from "@/components/common/cards/contentCard";
import {
  industryData,
  placementInfrastructureData,
  placementOverviewData,
  placementProcedureData,
  placementProgramData,
  quoteData,
  trainingPlacementData,
} from "@/components/trainingPlacement/data";
import EventCard from "../components/common/cards/eventCard";
import ProfileCard from "../components/common/cards/profileCard";
import RecruiteLogoCard from "../components/common/cards/recruiteLogoCard";
import ProgramCard from "../components/trainingPlacement/programCard";
import ProcedureCard from "../components/trainingPlacement/procedureCard";

const Page = () => {
  const [activeSection, setActiveSection] = useState("overview");

  // Scroll event handler
  const handleScroll = () => {
    const sections = [
      "overview",
      "placement-team",
      "facilities",
      "activities",
      "placement-procedure",
      "placement-portal",
    ];

    const middleOfViewport = window.innerHeight / 2;
    sections.forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        const { top, bottom } = sectionElement.getBoundingClientRect();

        // Check if the section is around the middle of the viewport
        if (top <= middleOfViewport && bottom >= middleOfViewport)
          setActiveSection(id);
      }
    });
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the clicked section
  const handleClick = (id) => {
    const sectionElement = document.getElementById(id);
    sectionElement.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <main className="px-4 md:px-20">
      <section className="max-w-7xl md:mx-auto py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-32">Training & placement</p>
          <p className="text-base text-secondary-opactiy60 font-para pt-5">
            Lorem ipsum dolor sit amet consectetur. Malesuada nibh justo nunc
            mauris. Pulvinar et morbi in egestas lectus non aliquam nibh
            imperdiet. At vitae sodales.
          </p>
        </div>
        <div className="flex flex-wrap md:justify-around justify-center max-w-7xl mx-auto bg-[#F5F5F5] rounded-2xl md:px-16 md:gap-8 gap-8 px-6 py-[46px] mt-8">
          <div className="text-center">
            <h2 className="font-para font-bold text-4xl mb-3 text-[#4BA6F5]">
              40+
            </h2>
            <p className="text-[#101828] md:text-base text-sm font-para font-medium">
              Years of Excellence
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-para font-bold text-4xl mb-3 text-[#33CC99]">
              1 lakh+
            </h2>
            <p className="text-[#101828] md:text-base text-sm font-para font-medium">
              Students
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-para font-bold text-4xl mb-3 text-[#FDCA30]">
              10
            </h2>
            <p className="text-[#101828] md:text-base text-sm font-para font-medium">
              Universities
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto flex gap-x-10 items-start">
        <div className="hidden lg:block w-1/5 sticky top-20">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="placeholder:text-sm focus-visible:outline-none pl-10 font-para w-full border rounded-lg py-1.5 placeholder:font-normal placeholder:text-secondary-darkgray"
            />
            <img
              src="/img/about/search-icon.svg"
              alt="search"
              className="absolute top-[10px] left-3"
            />
          </div>
          <div>
            <p className="font-bold mt-7 font-para text-sm">
              Training & placement
            </p>
            <div className="mt-7">
              {trainingPlacementData.map((item) => (
                <p
                  key={item.id}
                  onClick={() => handleClick(item.unique)}
                  className={` ${activeSection === item.unique ? "font-medium rounded-lg bg-secondary-paleblue text-secondary-lighterblue" : "text-secondary-darkgray"} cursor-pointer py-3 px-4 text-sm font-medium font-para`}
                >
                  {item.title}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/5 mb-20">
          <div id="overview">
            {placementOverviewData.map((item, idx) => (
              <EventCard key={idx} item={item} />
            ))}

            <div className="mt-8">
              <p className="text-base text-tertiary-gray mb-5">Objectives</p>
              <ul className="list-disc list-inside text-tertiary-gray font-para ml-6 text-base">
                <li>
                  {" "}
                  Career guidance: Higher education, Placements and
                  Entrepreneurship.
                </li>
                <li>Internship & Full Time Placement Activities.</li>
                <li>Facilitate Pre-Placement visits to the companies.</li>
                <li>
                  Communication, Networking & Relationship Building with
                  Potential Recruiters.
                </li>
              </ul>
            </div>

            <div className="mt-20">
              {quoteData.map((item, idx) => (
                <ProfileCard key={idx} item={item} />
              ))}
            </div>

            <p className="mt-20 text-2xl text-tertiary-black mb-6">
              Industry Institute Collaborations (MOUs & COEs)
            </p>
            <div className=" mt-3 pt-2 flex recruiter-scroll overflow-x-auto gap-[18px] w-full">
              {industryData.map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <RecruiteLogoCard item={value} />
                  </React.Fragment>
                );
              })}
            </div>

            <p className="mt-20 text-2xl text-tertiary-black mb-6">
              Product Based Companies
            </p>
            <div className="pt-2 flex recruiter-scroll overflow-x-auto gap-[18px] w-full">
              {industryData.map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <RecruiteLogoCard item={value} />
                  </React.Fragment>
                );
              })}
            </div>

            <p className="text-2xl text-tertiary-black mb-6 mt-20 inline-block">
              Service Based Companies
            </p>
            <div className="pt-2 flex recruiter-scroll overflow-x-auto gap-[18px] w-full">
              {industryData.map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <RecruiteLogoCard item={value} />
                  </React.Fragment>
                );
              })}
            </div>

            <p className="mt-20 text-2xl text-tertiary-black mb-6">
              Core (Manufacturing / Design)
            </p>
            <div className="pt-2 flex recruiter-scroll overflow-x-auto gap-[18px] w-full">
              {industryData.map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <RecruiteLogoCard item={value} />
                  </React.Fragment>
                );
              })}
            </div>

            <p className="mt-20 text-2xl text-tertiary-lightblack mb-6">
              Others
            </p>
            <div className="pt-2 flex recruiter-scroll overflow-x-auto gap-[18px] w-full">
              {industryData.map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <RecruiteLogoCard item={value} />
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div id="placement-team" className="pt-20">
            <div className="py-10">
              <div>
                <p className="bg-tertiary-palelightblue border border-tertiary-paleblue py-1 px-2 font-medium rounded-full text-[#175CD3] font-para text-xs w-fit">
                  6 members
                </p>
                <h2 className="text-2xl font-normal mt-3">Advisory Board</h2>
              </div>
              <Authorities />
            </div>

            <div className="py-10">
              <div>
                <p className="bg-tertiary-palelightblue border border-tertiary-paleblue py-1 px-2 font-medium rounded-full text-[#175CD3] font-para text-xs w-fit">
                  6 members
                </p>
                <h2 className="text-2xl font-normal mt-3">Placement Team</h2>
              </div>
              <Authorities />
            </div>
          </div>

          <div id="facilities" className="pt-20">
            <p className="text-2xl text-primary-darkblack mb-5 font-medium">
              Infrastructure and Facilities
            </p>
            <p className="text-base font-para font-normal text-tertiary-gray text-start mb-20">
              Explore our state-of-the-art infrastructure and comprehensive
              facilities designed to support both academic excellence and
              extracurricular activities. Our campus is equipped with advanced
              labs, modern classrooms, sports amenities, and recreational spaces
              to ensure a well-rounded student experience.
            </p>
            <div className="grid md:grid-cols-2 gap-x-5 gap-y-10 ">
              {placementInfrastructureData.map((item, index) => (
                <React.Fragment key={index}>
                  <EventCard item={item} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div id="activities" className="pt-20">
            {placementProgramData.map((item, index) => {
              return (
                <div key={index} className="mb-16">
                  <ProgramCard item={item} />
                </div>
              );
            })}
          </div>

          <div id="placement-procedure" className="pt-20">
            <p className="text-2xl mb-7">Placement Procedure </p>
            <p className="text-base font-para text-tertiary-gray">
              Our streamlined placement procedure ensures a smooth transition
              from campus to career. The TPC coordinates with companies to
              arrange job descriptions, pre-placement talks, and interview
              schedules. Eligible students are matched with job opportunities,
              and the entire process is designed to provide the best fit for
              both students and employers, leading to successful placements.
              Explore the dynamic world of Computer Science at JSS University
              through our gallery. From
            </p>
            <div className="pl-10">
              <div className="border-l-2 relative border-gray-200 overflow-visible mt-10">
                {placementProcedureData.map((item, index) => (
                  <div key={index} className="ml-[-47px] mt-5">
                    <ProcedureCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="placement-portal" className="pt-20">
            {greenInitiativeData.map((item, index) => (
              <div key={index} className="mt-10">
                <ContentCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
