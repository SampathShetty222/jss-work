import React from "react";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    "JSS Mahavidyapeetha",
    "Faculty List",
    "Admissions",
    "Library & Information Center",
    "Mandatory Disclosure",
    "Research & Developments",
    "Accreditation",
    "Downloads",
    "Online Grievance Support (General)",
    "Online Grievance Support (SC/ST/OBC)",
    "NIRF",
    "RESULT",
  ];
  const externalLink = [
    "Suttur Kshetra",
    "JSS Mahavidyapeetha",
    "Dr. A.P.J. AKTU, Lucknow",
    "National Assessment & Accreditation Council",
    "All India Council for Technical Education-AICTE",
    "Feedback",
  ];
  return (
    <>
      <footer className="bg-[#171717] relative z-20 py-16 text-white">
        <div className="max-w-7xl md:mx-auto mx-4 md:flex">
          <div className="md:w-1/2">
            <img src="/img/footer/footerLogo.svg" alt="Footer Logo" />
            <div className="max-w-80 md:mt-8 mt-6">
              <p className="font-para text-sm font-normal leading-[22px]">
                JSS Academy of Technical Educaiton, Noida
                <br />
                C-20/1, Sector-62, NOIDA
                <br />
                District Gautam Buddha Nagar
                <br />
                Uttar Pradesh
                <br />
                INDIA-201301
              </p>
              <div className="mt-5 flex gap-6">
                <a href="#">
                  <FiPhone className="text-2xl" />
                </a>
                <a href="#">
                  <FiMail className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-[25%] mt-12 md:mt-0">
            <h6 className="font-para text-xs font-bold text-[#FF4E00] mb-4">
              Quick Links
            </h6>
            {quickLinks.map((value, index) => {
              return (
                <p className="font-para text-sm font-normal mb-3" key={index}>
                  {value}
                </p>
              );
            })}
          </div>
          <div className="md:w-[25%] mt-8 md:mt-0">
            <h6 className="font-para text-xs font-bold text-[#FF4E00] mb-4">
              External Links
            </h6>
            {externalLink.map((value, index) => {
              return (
                <p className="font-para text-sm font-normal mb-3" key={index}>
                  {value}
                </p>
              );
            })}
          </div>
        </div>
        <div className="md:mt-16 mt-12 pt-[34px] border-t border-white border-opacity-25 max-w-7xl md:mx-auto mx-4 md:flex justify-between items-center">
          <div className="flex gap-6 ">
            <a href="#">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#">
              <FaXTwitter className="text-xl" />
            </a>
            <a href="#">
              <FaYoutube className="text-xl" />
            </a>
            <a href="#">
              <FaGithub className="text-xl" />
            </a>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="font-para text-sm">
              © 2024 JSSATEN. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
