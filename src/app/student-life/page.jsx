/* eslint-disable no-nested-ternary */

"use client";
import React, { useEffect, useState } from "react";
import { greenInitiativeData } from "@/components/about-us/data";
import { ourValueData } from "@/components/home/data";
import OurValueCard from "@/components/common/cards/ourValueCard";
import ContentCard from "@/components/common/cards/contentCard";
import {
  aicteScholarshipData,
  contactData,
  keyBenefitsData,
  mentoringData,
  nationalScholarshipData,
  stateScholarshipData,
  studentsStickyData,
} from "@/components/student-life/data";
import { IoIosArrowDown } from "react-icons/io";
import SupportCard from "@/components/common/cards/supportCard";
import ScholarshipCard from "@/components/student-life/scholarshipCard";
import MentorCard from "@/components/student-life/mentorCard";
import SocialContactCard from "../components/student-life/socialContactCard";

const Page = () => {
  const [activeSection, setActiveSection] = useState("scholarship");
  const [openNav, setOpenNav] = useState(true);

  // Scroll event handler
  const handleScroll = () => {
    const sections = [
      "scholarship",
      "statement",
      "mentoring",
      "exams",
      "techno-cultural",
      "social-outreach",
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
      <SupportCard
        item={{
          title: "Student Support",
          desc: "JSS University Noida ensures students have access to guidance and resources for both academic and personal success.",
        }}
      />

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
            <p className="font-bold mt-7 font-para text-sm">Students</p>
            <div className="mt-7">
              {studentsStickyData.map((item) => (
                <React.Fragment key={item.id}>
                  <div
                    onClick={
                      item.subMenus
                        ? () => setOpenNav(!openNav)
                        : () => handleClick(item.unique)
                    }
                    className={`${item.subMenus && openNav ? "bg-secondary-lightgray" : activeSection === item.unique ? "bg-secondary-paleblue text-secondary-lighterblue" : "text-secondary-darkgray"} rounded-lg cursor-pointer py-3 px-4 text-sm font-medium font-para flex items-center justify-between`}
                  >
                    <p>{item.title}</p>
                    {item.subMenus && (
                      <IoIosArrowDown
                        className={`${openNav ? "" : "rotate-180"}`}
                      />
                    )}
                  </div>
                  {item.subMenus &&
                    openNav &&
                    item.subMenus.map((value) => (
                      <p
                        key={value.id}
                        onClick={() => handleClick(value.unique)}
                        className={`${activeSection === value.unique ? "rounded-lg bg-secondary-paleblue text-secondary-lighterblue" : "text-secondary-darkgray"} mt-1 cursor-pointer text-center py-3 px-4 text-sm font-medium font-para`}
                      >
                        {value.title}
                      </p>
                    ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/5 mb-20">
          <div id="scholarship">
            <p className="text-2xl mb-4">
              Scholarship Information at JSSATE, Noida
            </p>
            <p className="text-base leading-[24px] font-para text-start text-tertiary-gray">
              Scholarship facilities are available for students under various
              schemes depending upon merit as well as category. Students who are
              eligible to apply can contact college scholarship staff member in
              the accounts section. Also refer scholarship “Student Support
              portal” of our college website. Do not apply through private
              agencies. All scholarship information is available in the website
              of respective categories.
            </p>

            <p className="text-2xl text-primary-darkblack mt-16">
              State Scholarship
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-3">
              {stateScholarshipData.map((item, index) => (
                <React.Fragment key={index}>
                  <ScholarshipCard item={item} />
                </React.Fragment>
              ))}
            </div>

            <p className="text-2xl text-primary-darkblack mt-16">
              National Scholarship Portal
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-3">
              {nationalScholarshipData.map((item, index) => (
                <React.Fragment key={index}>
                  <ScholarshipCard item={item} />
                </React.Fragment>
              ))}
            </div>

            <p className="text-2xl text-primary-darkblack mt-16">
              AICTE Portal
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-3">
              {aicteScholarshipData.map((item, index) => (
                <React.Fragment key={index}>
                  <ScholarshipCard item={item} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div id="statement" className="pt-20">
            <div className="md:grid md:grid-cols-2 gap-6 rounded-[14px] pt-[36px]">
              {ourValueData.map((value) => {
                return (
                  <React.Fragment key={value.id}>
                    <OurValueCard value={value} />
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div id="mentoring" className="pt-20">
            <p className="text-2xl text-tertiary-black">
              Mentoring at JSS Academy
            </p>
            <p className="text-start font-para text-base text-tertiary-gray mt-5 mb-4">
              JSS Academy of Technical Education, NOIDA, is dedicated to helping
              students make positive changes and informed choices through its
              mentoring program. This initiative fosters a partnership between
              mentors and students, providing psycho-social support, career
              guidance, and role modeling to help students grow personally and
              professionally.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {mentoringData.map((item, index) => (
                <React.Fragment key={index}>
                  <MentorCard item={item} />
                </React.Fragment>
              ))}
            </div>

            <p className="text-2xl text-primary-darkblack mt-16">
              Key Benefits
            </p>
            <p className="text-base font-para text-tertiary-gray mt-5 mb-4">
              The Institution believes that the face-to-face interaction
              involved in the mentoring system will, in a sustained period of
              time, bring the following results
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {keyBenefitsData.map((item, index) => (
                <React.Fragment key={index}>
                  <MentorCard item={item} />
                </React.Fragment>
              ))}
            </div>

            <div className="bg-secondary-lightgray md:flex items-center justify-between gap-20 rounded-[14px] mt-16 py-20 px-12 hidden">
              {contactData.map((item, index) => (
                <React.Fragment key={index}>
                  <SocialContactCard item={item} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div id="exams" className="pt-20">
            <p className="text-2xl text-primary-darkblack font-normal">
              Semester End Examinations
            </p>
            <p className="text-base mt-5 font-para text-tertiary-gray">
              Semester End Examinations are conducted by the Dr APJ Abdul Kalam
              Technical University, as per the time table published. This time
              table is published by the University approximately one months
              prior to the commencement of examinations. The SEEs are conducted
              separately for Laboratory courses and theory courses.
            </p>
            <p className="text-base mt-4 font-para text-tertiary-gray">
              The laboratory SEEs are conducted in batches of 30 students. Two
              examiners (one internal and one external) are appointed by the
              university for this purpose. The laboratory SEEs are scheduled,
              normally after the theory examinations
            </p>

            <p className="text-2xl mt-10 text-primary-darkblack font-normal">
              AICTE Guidelines in Model Curriculum{" "}
            </p>
            <p className="text-base mt-5 font-para text-tertiary-gray">
              After successful completion of 160 credits, a student shall be
              eligible to get Undergraduate degree in Engineering. A student
              will be eligible to get Undergraduate degree with Honours only, if
              he/she completes additional university recommended courses only
              (Equivalent to 20 credits; NPTEL Courses of 4 Weeks, 8 Weeks and
              12 Weeks shall be of 2. 3 and 4 Credits respectively) through
              MOOCs. For registration to MOOCs Courses, the students shall
              follow NPTEL Site http://nptel.ac.in/as per the NPTEL policy and
              norms. The students can register for these courses through NPTEL
              directly as per the course offering in Odd/Even Semesters at
              NPTEL. These NPTEL courses (recommended by the University) may be
              cleared during the B. Tech degree program (not necessary one
              course in each semester). After successful completion of these
              MOOCs courses the students, shall, provide their successful
              completion NPTEL status/certificates to the University (COE)
              through their college of study only. The student shall be awarded
              Hons. Degree (on successful completion of MOOCS based 20 credit)
              only if he/she secures 7.50 or above CGPA and passed each subject
              of that Degree Programme in single attempt without any grace marks
            </p>
          </div>

          <div id="techno-cultural" className="pt-20">
            <div className="flex flex-col items-start justify-center">
              <p className="text-2xl text-primary-darkblack marcellus">
                Zealicon Techno Cultural Fest{" "}
              </p>
              <p className="mt-5 text-base font-para text-tertiary-gray">
                Lorem ipsum dolor sit amet consectetur. Et pulvinar posuere a
                neque scelerisque amet. Ut scelerisque in ullamcorper adipiscing
                id. Consectetur id nulla diam et volutpat. Quis pellentesque
                dignissim faucibus vitae et montes sagittis pellentesque
                laoreet. Dictum a pulvinar feugiat lectus ullamcorper volutpat
                arcu. Nibh aliquet pretium in ornare. Nulla ultricies at nulla
                diam. Phasellus nulla id aliquam vitae. Pretium rhoncus enim leo
                quis. Et tortor interdum fames ut non mattis nisi a nullam.
                Posuere at diam sed arcu sodales dignissim lacus. Vestibulum
                amet diam interdum amet cras suspendisse pretium nec tristique.
                Elementum.
              </p>
            </div>
          </div>

          <div id="social-outreach" className="pt-20">
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
