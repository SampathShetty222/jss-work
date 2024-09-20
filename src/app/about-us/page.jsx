"use client";
import React, { useEffect, useState } from "react";
import Authorities from "../components/about-us/authorities";
import AboutBanner from "../components/about-us/aboutBanner";
import {
  aboutStickyData,
  employeesBenefitData,
  greenInitiativeData,
} from "../components/about-us/data";
import { ourValueData } from "../components/home/data";
import OurValueCard from "../components/common/cards/ourValueCard";
import ContentCard from "../components/common/cards/contentCard";

const Page = () => {
  const [activeSection, setActiveSection] = useState("jss-leaders");

  // Scroll event handler
  const handleScroll = () => {
    const sections = [
      "jss-leaders",
      "vission-mission",
      "authorities",
      "jssmvp",
      "employee-benefits",
      "green-initiatives",
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
      <AboutBanner />

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
            <p className="font-bold mt-7 font-para text-sm">About JSS</p>
            <div className="mt-7">
              {aboutStickyData.map((item) => (
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
          <div id="jss-leaders">
            <img src="/img/about/jss-academy.png" alt="jss-academy" />
            <p className="mt-2 text-2xl font-medium">
              In pursuit of excellence
            </p>
            <div className="font-normal text-tertiary-gray text-base font-para">
              <p className="mt-3">
                JSS University, Noida is built on a strong reputation of JSS
                Academy of Technical Education, Noida, and passionately
                committed for providing education in Science, Technology,
                Management and Life Sciences & Pharmacy. It is Steadfast to find
                solutions to some of the great challenges of our time through
                scientific research and technological innovations.
              </p>
              <p className="mt-3">
                JSS University, Noida is the fourth University established by
                JSS Mahavidyapeetha, besides the JSS Academy of Higher Education
                and Research which is health sciences focused deemed university
                at Mysuru, JSS Science and Technology University a state private
                University at Mysuru and JSS Academy of Higher Education and
                Research at Mauritius.
              </p>
              <p className="mt-3">
                JSS University, Noida plays a key role in providing high quality
                skilled manpower in the fields of Science, Engineering &
                Technology and Management, Pharmacy field to transform the
                society through research and innovation.
              </p>
              <p className="mt-3">
                JSS University, Noida is committed to deliver quality education
                at all levels and provide opportunities for aspiring youth to
                meet the global needs of society in every sector.
              </p>
            </div>

            <img className="mt-20" src="/img/about/guruji.png" alt="guruji" />
            <p className="mt-3 text-2xl font-medium">
              Jagadguru Sri Shivarathri Deshikendra Mahaswamiji
            </p>
            <div className="mt-5 font-normal text-tertiary-gray text-base font-para">
              His Holiness Jagadguru Sri Shivarathri Deshikendra Mahaswamiji,
              the present pontiff and the 24th Peethadhyaksha of Sri Jagadguru
              Veerasimhasana Suttur Math, assumed the Peetha in 1986 at the
              young age of 29 years. He had his spiritual training under the
              guidance of his illustrious predecessor H H Jagadguru Dr Sri
              Shivarathri Rajendra Mahaswamiji the founder president of the JSS
              Mahavidyapeetha, an educational and cultural organization
              dedicated to the ideal of providing education to the villages of
              Karnataka. His Holiness Sri Shivarathri Deshikendra Mahaswamiji,
              the Honourable Chancellor of JSS University, Noida - a visionary,
              endeavoured not only to cross the Vindhyas and establish
              engineering colleges, schools, etc at NOIDA (UP) and the JSS
              Spiritual and Cultural Centre at New Delhi but also travelled
              beyond the shores of the country and established the presence of
              the Math in USA, Mauritius and Dubai. His efforts to reach out to
              the core of the problems that challenge our society be it
              literacy, health care, employment or building values amongst the
              society is lauded and recognised by one and all.
            </div>
          </div>

          <div id="vission-mission" className="pt-20">
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

          <div id="authorities" className="pt-28">
            <section className="max-w-7xl md:mx-auto mx-4">
              <div>
                <p className="bg-[#EFF8FF] border border-[#B2DDFF] py-1 px-2 font-medium rounded-full text-[#175CD3] font-para text-xs w-fit">
                  13 members
                </p>
                <h2 className="text-2xl font-normal mt-3">Governing Body</h2>
              </div>
              <Authorities />
            </section>
          </div>

          <div id="jssmvp" className="pt-28">
            <img src="/img/about/jss-college.png" alt="jss-college" />
            <p className="mt-2 text-2xl font-medium">
              JSSMVP - In pursuit of excellence
            </p>

            <p className="mt-5 font-normal text-tertiary-gray text-base font-para">
              The origin of JSS Mahavidyapeetha (JSSMVP), a formidable
              educational movement, can be traced to the establishment of a
              small hostel in 1928 to cater to the accommodation needs of
              students pursuing higher studies in Mysore. His Holiness Jagadguru
              Dr. Sri Shivarathri Rajendra Mahaswamiji established the Jagadguru
              Sri Shivarathreeshwara Mahavidyapeetha (JSSMVP) in 1954 which was
              registered under the Societies Registration Act 1960.
            </p>
            <p className="mt-5 font-normal text-tertiary-gray text-base font-para">
              Focusing on a purpose as expansive yet specific as improving
              quality of life through Human Development, the JSS Mahavidyapeetha
              has grown from strength to strength. A long and healthy life,
              Education for all and a decent standard of living, the indicators
              of Human development, have been the underlying philosophy of
              Jagadguru Sri Veerasimhasana Mahasamsthana Math, Suttur
              Srikshethra for centuries. This is also the philosophy for which
              the Mahaidyapeetha today stands for.
            </p>
          </div>

          <div id="employee-benefits" className="pt-20">
            {employeesBenefitData.map((item, index) => (
              <div key={index} className="mt-10">
                <ContentCard item={item} />
              </div>
            ))}
          </div>

          <div id="green-initiatives" className="pt-20">
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
