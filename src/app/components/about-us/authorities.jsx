import React from "react";
import { TbMailFilled } from "react-icons/tb";
import { SiGithub } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Authorities = () => {
  const governing = [
    {
      id: 1,
      image: "/img/alumni/person1.svg",
      name: "His Holiness Jagadguru Sri Shivarathri Deshikendra MahaSwamiji",
      designation: "The Chancellor - Chairman",
      mailLink: "#",
      githubLink: "#",
      linkedInLink: "#",
      twitterLink: "#",
    },
    {
      id: 2,
      image: "/img/alumni/person1.svg",
      name: "His Holiness Jagadguru Sri Shivarathri Deshikendra MahaSwamiji",
      designation: "The Chancellor - Chairman",
      mailLink: "#",
      githubLink: "#",
      linkedInLink: "#",
      twitterLink: "#",
    },
    {
      id: 3,
      image: "/img/alumni/person1.svg",
      name: "His Holiness Jagadguru Sri Shivarathri Deshikendra MahaSwamiji",
      designation: "The Chancellor - Chairman",
      mailLink: "#",
      githubLink: "#",
      linkedInLink: "#",
      twitterLink: "#",
    },
    {
      id: 4,
      image: "/img/alumni/person1.svg",
      name: "His Holiness Jagadguru Sri Shivarathri Deshikendra MahaSwamiji",
      designation: "The Chancellor - Chairman",
      mailLink: "#",
      githubLink: "#",
      linkedInLink: "#",
      twitterLink: "#",
    },
    {
      id: 5,
      image: "/img/alumni/person1.svg",
      name: "His Holiness Jagadguru Sri Shivarathri Deshikendra MahaSwamiji",
      designation: "The Chancellor - Chairman",
      mailLink: "#",
      githubLink: "#",
      linkedInLink: "#",
      twitterLink: "#",
    },
    {
      id: 6,
      image: "/img/alumni/person1.svg",
      name: "His Holiness Jagadguru Sri Shivarathri Deshikendra MahaSwamiji",
      designation: "The Chancellor - Chairman",
      mailLink: "#",
      githubLink: "#",
      linkedInLink: "#",
      twitterLink: "#",
    },
  ];
  return (
    <>
      <section className="max-w-7xl md:mx-auto mx-4">
        <div>
          <p className="bg-[#EFF8FF] border border-[#B2DDFF] py-1 px-2 font-medium rounded-full text-[#175CD3] font-para text-xs w-fit">
            13 members
          </p>
          <h2 className="text-2xl font-normal mt-3">Governing Body</h2>
        </div>
        <div className="md:grid md:grid-cols-3 pt-10 gap-8">
          {governing.map((value, index) => {
            return (
              <div
                key={value.id}
                className={`mb-10 ${index < 3 ? "md:block hidden" : "block"}`}
              >
                <div className="w-16 h-16 overflow-hidden rounded-full mb-5">
                  <img
                    src={value.image}
                    alt={value.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h5 className="text-lg font-normal leading-[26px]">
                  {value.name}
                </h5>
                <p className="font-para text-[#2A94F1]">{value.designation}</p>
                <div className="flex text-xl text-[#98A2B3] gap-4 mt-4">
                  <a href={value.mailLink}>
                    <TbMailFilled />
                  </a>
                  <a href={value.githubLink}>
                    <SiGithub />
                  </a>
                  <a href={value.linkedInLink}>
                    <IoLogoLinkedin />
                  </a>
                  <a href={value.twitterLink}>
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            );
          })}
          <button className="text-sm font-medium w-fit px-4 py-[10px] border-2 border-[#CACBCF] border-opacity-80 rounded-md font-para">
            View More
          </button>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Authorities;
