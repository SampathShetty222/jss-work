"use client";
import Authorities from "@/app/components/about-us/authorities";
import CoursesDetailCard from "@/app/components/admission/coursesDetailCard";
import {
  academicExcellenceData,
  admissionQuoteData,
  admissionStickyData,
  admissionSyllabusData,
  cardDetailCard,
  infrastructureData,
  researchDetailsData,
  supportingStaff,
  teachingStaff,
} from "@/app/components/admission/data";
import RankStudentCard from "@/app/components/admission/rankStudentCaed";
import ResearchCard from "@/app/components/admission/researchCard";
import ProfileCard from "@/app/components/common/cards/profileCard";
import SingleCard from "@/app/components/common/cards/singleCard";
import PdfDownloadCard from "@/app/components/common/pdfDownloadCard";
import { Fragment, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { TbLink } from "react-icons/tb";

const page = () => {
  const [activeSection, setActiveSection] = useState("admission");

  // Scroll event handler
  const handleScroll = () => {
    const sections = [
      "admission",
      "syllabus",
      "faculty ",
      "infrastructure",
      "achievements",
      "notable-alumni",
      "events",
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
    <>
      <section className="max-w-7xl mx-auto md:py-20 py-10 px-4 md:px-0">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="flex gap-3 justify-center items-center">
            <RiHome6Line className="text-xl text-[#667085]" />
            <MdOutlineKeyboardArrowRight className="text-base text-[#D0D5DD]" />
            <p className="text-sm font-para font-semibold text-[#667085]">
              Engineering
            </p>
            <MdOutlineKeyboardArrowRight className="text-base text-[#D0D5DD]" />
            <p className="text-sm font-para font-semibold text-[#2A94F1]">CS</p>
          </div>
          <div className="md:pt-[54px] pt-8">
            <h3 className="text-[32px] font-normal md:pb-6 pb-4">
              Computer Science (CS)
            </h3>
            <p className="text-base leading-[26px] font-para font-normal opacity-60 pb-9">
              From programming to AI, our hands-on programs prepare you for
              exciting careers in the ever-evolving tech industry.
            </p>
          </div>
        </div>
        <div className="max-w-5xl min-h-[180px] grid grid-cols-3 md:gap-7 gap-3 mx-auto">
          {cardDetailCard.map((value, i) => (
            <Fragment key={i}>
              <CoursesDetailCard props={value} />
            </Fragment>
          ))}
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
              Explore CS Department
            </p>
            <div className="mt-7">
              {admissionStickyData.map((item) => (
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
          <div id="admission">
            <div className="px-5 md:px-0">
              <h2 className="text-2xl text-[#101828] pb-5">Eligibility</h2>
              <p className="text-[#475467] font-para leading-7">
                Pass in 10+2, with 50% marks in Physics, Chemistry and
                Biology/Biotechnology and English as one of the languages of
                study. Candidate should be NEET-UG qualified. The candidate
                should have completed 17 years of age as on 31st December of the
                year of admission.
              </p>
              <div className="w-full h-full overflow-hidden rounded-xl pt-12 pb-4">
                <img
                  src="/img/academics/eligibility.svg"
                  alt="image"
                  className="img-fluid object-cover"
                />
              </div>
              <button className="text-[#475467] text-sm font-para font-normal flex gap-1 items-center">
                <TbLink className="text-base text-[#98A2B3]" />
                View Gallery
              </button>

              <div className="py-10">
                <h2 className="text-[#101828] text-2xl">Admission Procedure</h2>
                <p className="text-[#475467] text-base font-para leading-7 py-5">
                  Students seeking admission to our Computer Science programs
                  must meet the basic eligibility criteria and successfully
                  qualify through the appropriate national entrance exams.
                  Admission is based on inter-se merit. Indian Nationals, NRIs,
                  OCIs, PIOs, and Foreign Nationals are eligible to apply.
                  Detailed application procedures, including key dates and
                  requirements, can be found on the official websites of the
                  respective entrance exams. Make sure to read the information
                  bulletins thoroughly and keep the necessary documents ready
                  before submission.
                </p>
              </div>

              <div>
                {admissionQuoteData.map((item, idx) => (
                  <ProfileCard key={idx} item={item} />
                ))}
              </div>

              <div className="py-10 text-[#475467] text-lg font-para">
                <p>
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  vitae malesuada fringilla.
                </p>
                <p className="py-5">
                  Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                  imperdiet commodo consectetur convallis risus. Sed condimentum
                  enim dignissim adipiscing faucibus consequat, urna. Viverra
                  purus et erat auctor aliquam. Risus, volutpat vulputate
                  posuere purus sit congue convallis aliquet. Arcu id augue ut
                  feugiat donec porttitor neque. Mauris, neque ultricies eu
                  vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc
                  lectus in tellus, pharetra, porttitor.
                </p>
                <p>
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                  mauris id. Non pellentesque congue eget consectetur turpis.
                  Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                  aenean tempus. Quis velit eget ut tortor tellus. Sed vel,
                  congue felis elit erat nam nibh orci.
                </p>
              </div>

              <div className="pb-10">
                <h2 className="text-[#101828] text-2xl">Lorem ipsum dorem</h2>
                <p className="text-[#475467] text-lg py-5 font-para leading-7">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                </p>
                <p className="text-[#475467] text-lg font-para leading-7">
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at. Suscipit tristique risus, at donec. In turpis vel et
                  quam imperdiet. Ipsum molestie aliquet sodales id est ac
                  volutpat.{" "}
                </p>
              </div>

              <div>
                <h2 className="text-[#101828] text-2xl ">Ipsum dorem</h2>
                <p className="text-[#475467] py-5 text-lg font-para leading-7">
                  Sagittis et eu at elementum, quis in. Proin praesent volutpat
                  egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi
                  ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate
                  consectetur ac ultrices at diam dui eget fringilla tincidunt.
                  Arcu sit dignissim massa erat cursus vulputate gravida id. Sed
                  quis auctor vulputate hac elementum gravida cursus dis.
                </p>
                <ol className="list-decimal pl-5 text-[#475467] text-lg font-para leading-7">
                  <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                  <li>
                    Eu turpis posuere semper feugiat volutpat elit, ultrices
                    suspendisse. Auctor vel in vitae placerat.
                  </li>
                  <li>
                    Suspendisse maecenas ac donec scelerisque diam sed est duis
                    purus.
                  </li>
                </ol>
                <p className="text-[#475467] text-lg font-para leading-7">
                  Lectus leo massa amet posuere. Malesuada mattis non convallis
                  quisque. Libero sit et imperdiet bibendum quisque dictum
                  vestibulum in non. Pretium ultricies tempor non est diam. Enim
                  ut enim amet amet integer cursus. Sit ac commodo pretium sed
                  etiam turpis suspendisse at.
                </p>
                <p className="text-[#475467] py-5 text-lg font-para leading-7">
                  Tristique odio senectus nam posuere ornare leo metus,
                  ultricies. Blandit duis ultricies vulputate morbi feugiat cras
                  placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis
                  pellentesque suscipit accumsan. Cursus viverra aenean magna
                  risus elementum faucibus molestie pellentesque. Arcu ultricies
                  sed mauris vestibulum.
                </p>
              </div>
            </div>
          </div>

          <div id="syllabus" className="pt-20">
            <div className="flex flex-col items-start justify-center">
              <p className="text-2xl text-primary-darkblack marcellus">
                Syllabus
              </p>
              <p className="mt-5 text-base font-para text-tertiary-gray">
                Lorem ipsum dolor sit amet consectetur. Faucibus dui volutpat
                facilisis egestas. Fames sociis turpis bibendum pharetra. Amet
                nisl blandit etiam mi lectus vel nulla placerat ut. Faucibus mi
                eget elit at. Rhoncus pharetra quis molestie suspendisse
                consectetur accumsan dolor vitae. Integer eget vestibulum ac
                nibh feugiat eu quam amet. Sapien scelerisque diam fermentum
                morbi eget. Platea orci a et integer. Gravida pulvinar nisl
                adipiscing scelerisque turpis. Magna curabitur pellentesque
                pretium nunc tempor sollicitudin ac tortor purus. Viverra
                pretium faucibus nullam vitae eget nisl aenean. Fames dictum id
                nunc imperdiet eu. Semper ut vitae lobortis arcu a tempor id.
              </p>
            </div>
            <div className="pt-6">
              {admissionSyllabusData.map((value, i) => (
                <Fragment key={i}>
                  <PdfDownloadCard props={value} />
                </Fragment>
              ))}
            </div>
          </div>

          <div className="max-w-7xl md:mx-auto mx-4 pt-20" id="faculty">
            <div>
              <p className="bg-[#EFF8FF] border border-[#B2DDFF] py-1 px-2 font-medium rounded-full text-[#175CD3] font-para text-xs w-fit">
                13 members
              </p>
              <h2 className="text-2xl font-normal mt-3">Teaching Staff</h2>
            </div>
            <div className="md:grid md:grid-cols-3 pt-10 gap-8">
              {teachingStaff.map((value, i) => (
                <Fragment key={i}>
                  <Authorities props={value} index={i} />
                </Fragment>
              ))}
            </div>
            <button className="text-sm font-medium w-fit px-4 py-[10px] border-2 border-[#CACBCF] border-opacity-80 rounded-md font-para">
              View More
            </button>

            <div className="pt-20">
              <p className="bg-[#EFF8FF] border border-[#B2DDFF] py-1 px-2 font-medium rounded-full text-[#175CD3] font-para text-xs w-fit">
                7 members
              </p>
              <h2 className="text-2xl font-normal mt-3">Supporting Staff</h2>
            </div>
            <div className="md:grid md:grid-cols-3 pt-10 gap-8">
              {supportingStaff.map((value, i) => (
                <Fragment key={i}>
                  <Authorities props={value} index={i} />
                </Fragment>
              ))}
            </div>
            <button className="text-sm font-medium w-fit px-4 py-[10px] border-2 border-[#CACBCF] border-opacity-80 rounded-md font-para">
              View More
            </button>
          </div>

          <div id="infrastructure" className="pt-28">
            <p className="text-2xl text-primary-darkblack marcellus">
              State-of-the-Art Infrastructure
            </p>
            <p className="mt-5 text-base font-para text-tertiary-gray leading-[26px]">
              The learning environment at JSS University is enriched by its
              cutting-edge infrastructure, designed to support a wide range of
              academic and extracurricular pursuits. The campus features
              advanced laboratories, modern classrooms, and comprehensive
              libraries, all aimed at enhancing the educational experience.
              Additionally, students benefit from well-maintained sports
              facilities, auditoriums, and recreational areas that encourage a
              holistic development. This blend of state-of-the-art facilities
              ensures that students have access to everything they need for both
              their intellectual growth and personal well-being.
            </p>
            {infrastructureData.map((value, i) => (
              <Fragment key={i}>
                <div className="pt-20">
                  <SingleCard
                    image={value.image}
                    heading={value.heading}
                    description={value.description}
                  />
                </div>
              </Fragment>
            ))}
          </div>

          <div id="achievements" className="pt-20">
            <div className="max-w-5xl mx-auto md:py-20 py-10 px-4">
              <h4 className="text-2xl font-normal text-[#101828] mb-5">
                Achievements
              </h4>
              <p className="text-[#475467] font-para text-base">
                Discover the remarkable accomplishments of our students and
                faculty in the CS Department. From award-winning projects and
                research breakthroughs to industry recognition and competition
                wins, these achievements highlight our commitment to excellence
                and innovation in the field of Computer Science.
              </p>
              <div className="md:my-16 my-[60px]">
                <h4 className="text-2xl font-normal text-[#101828] mb-5">
                  Academic Excellence
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {academicExcellenceData.map((values, i) => (
                    <Fragment key={i}>
                      <RankStudentCard props={values} />
                    </Fragment>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-normal text-[#101828] mb-5">
                  Research Publications
                </h4>
                <p className="text-[#475467] font-para text-base mb-5 ">
                  Discover our department impactful research publications in
                  Computer Science. Our faculty and students drive innovation
                  with work showcased globally.
                </p>
                {researchDetailsData.map((value, i) => (
                  <Fragment key={i}>
                    <ResearchCard props={value} />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div id="green-initiatives" className="pt-20"></div>
        </div>
      </section>
    </>
  );
};

export default page;
