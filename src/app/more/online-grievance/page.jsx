/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useEffect, useState } from "react";
import OnlineGrievanceBanner from "@/app/components/more/OnlineGrievanceBanner";
import Authorities from "@/app/components/about-us/authorities";
import {
  antiRaggingCell,
  onlineGrievanceStickData,
} from "../../components/more/data";
import { GoArrowRight } from "react-icons/go";

const OnlineGrievance = () => {
  const [activeSection, setActiveSection] = useState("general");

  const handleScroll = () => {
    const sections = [
      "general",
      "sc-st-obc",
      "anti-ragging-cell",
      "womens-cell",
    ];
    sections.forEach((id) => {
      const sectionElement = document.getElementById(id);
      const { top } = sectionElement.getBoundingClientRect();
      const offset = window.innerHeight * 0.1;
      // Console.log(top?.top);

      if (top <= offset && top >= -offset) setActiveSection(id);
    });
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    const sectionElement = document.getElementById(id);
    sectionElement.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <>
      <OnlineGrievanceBanner />
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
              Online Grievance Support
            </p>
            <div className="mt-7">
              {onlineGrievanceStickData.map((item) => (
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
          <div id="general">
            <h2 className="mt-2 text-2xl font-medium">General</h2>
            <div className="font-normal text-tertiary-gray text-base font-para">
              <p className="mt-3">
                To ensure transparency in all the activities at different
                stages, College provides proper mechanism for redressal of their
                grievances. This committee will deal with all the Grievances
                directly which is related to the common problems at Institute
                level both Academic and Administrative. The aggrieved member
                shall submit his/her petition in online system which available
                in college website or written petition to the Grievance
                Redressal Committee in a sealed envelope marked ‘confidential’.
                On receipt of a petition the Grievance Redressal Committee will
                endeavor to send its recommendation to the Principal for further
                action. In case of false and frivolous complaint (if proved),
                the Grievance Redressal Committee will recommend Principal/
                Disciplinary Authority to take appropriate action against the
                complainant. Complaints dropped in the 'Suggestion Box' by
                students and parents are redressed. All complaints are
                scrutinized by the management and the grievance redressal cell.
              </p>
            </div>
            <div className="py-20">
              <div>
                <p className="bg-[#EFF8FF] border border-[#B2DDFF] py-1 px-2 font-medium rounded-full text-[#175CD3] font-para text-xs w-fit">
                  6 members
                </p>
                <h2 className="text-2xl font-normal mt-3">
                  Grievance Redressal Committee
                </h2>
              </div>
              <Authorities />
            </div>
            <div>
              <h3 className="text-2xl text-[#101828] uppercase font-normal pb-5">
                ROLES AND RESPONSIBILITIES
              </h3>
              <ul className="text-base font-para font-normal text-[#475467] list-disc">
                <li className="ml-5">
                  This cell should help the staff students and Parents to record
                  their complaints and solve their problems related to
                  academics, resources and personal grievances. Complaint/
                  suggestion boxes can be installed
                </li>
                <li className="ml-5">
                  To receive Grievance from faculty, staff and students /
                  parents
                </li>
                <li className="ml-5">
                  To find the facts of the grievances and to suggest remedial
                  and preventive measures
                </li>
                <li className="ml-5">
                  To review the suggestions / complaints raised by the students
                  during periodical counseling
                </li>
                <li className="ml-5">
                  To review the outgoing student’s feedback.
                </li>
              </ul>
              <p className="text-[#475467] font-para font-normal text-base pt-4">
                Grievances by students, staff and parents can be registered
                using this link:
                <br />
                Googleform link :https://forms.gle/cftrsUSqPqBk3nVX8
              </p>
            </div>
          </div>

          <div id="sc-st-obc" className="pt-10">
            <h2 className="mt-2 text-2xl font-medium">SC/ST/OBC</h2>
            <div className="font-normal text-tertiary-gray text-base font-para">
              <p className="mt-3">
                Scheduled Castes (SC), Scheduled Tribes (ST) and Other Backward
                Class (OBC) has been identified as backward groups of Indian
                Society. They include all the castes, races or tribes, which
                have been socially, economically and educationally backward. A
                cell has been established to support and to bring students from
                such communities to the main stream.
              </p>
              <p className="mt-3">
                The SC/ST/OBC cell of JSS Academy of Technical Education, Noida
                was established in the year 2018 with the purpose to empower the
                SC/ST/OBC students in the college. The college takes a special
                interest in facilitating financial support to students belonging
                to these communities from Government agencies and other sources.
                They are also encouraged to enroll for career orientation
                programs, which would equip them with the necessary skills to
                choose a career option.
              </p>
            </div>
            <div className="py-20">
              <div>
                <p className="bg-[#EFF8FF] border border-[#B2DDFF] py-1 px-2 font-medium rounded-full text-[#175CD3] font-para text-xs w-fit">
                  6 members
                </p>
                <h2 className="text-2xl font-normal mt-3">
                  Grievance Redressal Committee
                </h2>
              </div>
              <Authorities />
            </div>
            <div>
              <h3 className="text-2xl text-[#101828] uppercase font-normal pb-5">
                ROLES AND RESPONSIBILITIES
              </h3>
              <ul className="text-base font-para font-normal text-[#475467] list-disc">
                <li className="ml-5">
                  To counsel and guide SC/ ST/OBC students and also help them to
                  manage academic and personal issues of college
                </li>
                <li className="ml-5">
                  To ensure provisions of an environment where all such students
                  feel safe and secure.
                </li>
                <li className="ml-5">
                  To provide prompt counselling for any emotional emergencies
                  arising on account of any event at the campus.
                </li>
                <li className="ml-5">
                  Resolve the any issues relating to discrimination experienced
                  by the students/ employees in the College.
                </li>
                <li className="ml-5">
                  To ensure protection and reservation as provided in the
                  Constitution of India.
                </li>
                <li className="ml-5">
                  To arrange for special opportunities to enhance the carrier
                  growth.
                </li>
                <li className="ml-5">
                  To aware the SC/ST students regarding various scholarships
                  program of State Govt., AICTE and UGC.
                </li>
              </ul>
              <p className="text-[#475467] font-para font-normal text-base pt-4">
                Grievances by students, staff and parents can be registered
                using this link:
                <br />
                Googleform link :https://forms.gle/cftrsUSqPqBk3nVX8
              </p>
            </div>
          </div>

          <div id="anti-ragging-cell" className="pt-20">
            <h2 className="mt-2 text-2xl font-medium">Anti Ragging Cell</h2>
            <div className="font-normal text-tertiary-gray text-base font-para">
              <p className="mt-3">
                Ragging is a social evil and criminal offence under provisions
                of Indian Penal Code (IPC) and, all students are advised not to
                indulge in any form of ragging in or outside the Campus. The
                University Grant Commission has promulgated Regulation on
                "Curbing the Menace of Ragging in Higher Educational
                institutions". A copy of these regulations is enclosed with this
                letter.All students of JSS Academy of Technical Education, Noida
                and their parents are required to study these regulations, and
                submit an Affidavit separately stating that he/she has carefully
                read and understood the provision contained in these
                Regulations. Format of the Affidavit to be given by the student
                is placed in Annexure-I and the format of the Affidavit to be
                given by the parent/guardian is given in Annexure II of these
                regulations. Both the Affidavits are to be given on a
                Non-Judicial Stamp Paper of Rs.10/- Rupees Ten only, signed in.
              </p>
            </div>
            <div className="mt-[18px]">
              {antiRaggingCell.map((value, i) => (
                <div
                  className="max-w-[720px] border-b px-6 py-[22px] flex justify-between items-center"
                  key={i}
                >
                  <p className="text-base font-para font-normal text-[#101828]">
                    {value.title}
                  </p>
                  <GoArrowRight className="text-base text-[#475467]" />
                </div>
              ))}
            </div>
            <div className="my-10">
              <p className="text-base">
                If any grievance/problem:{" "}
                <span className="text-[#FF4E00]">
                  CLICK HERE TO FILL THE FORM
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-[#101828] pb-5">Contact Us</h3>
              <p className="text-[#475467] font-para text-base">
                09990841257 - Chairman (Anti ragging Cell)
              </p>
              <p className="text-[#475467] font-para text-base">
                08095382275 - Member Secretary (Anti ragging Cell)
              </p>
              <p className="text-[#475467] font-para text-base">
                Chief warden (Member of Anti ragging cell)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OnlineGrievance;
