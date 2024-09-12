import React from "react";
import { newsData } from "./data";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

const NewsCard = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl md:mx-auto md:flex md:py-20 py-10 mx-4">
        <div className="md:flex md:items-start gap-24">
          <div className="md:w-[40%] md:sticky top-0">
            <p className="bg-[#1A1A1A] text-white font-para uppercase px-4 py-2 w-fit rounded-2xl text-xs font-normal flex gap-2">
              <RiGraduationCapLine className="text-sm" /> Our Blogs
            </p>
            <h2 className="text-[32px] font-normal md:pb-6 pb-4 pt-4">
              News & Articles
            </h2>
            <p className="text-base font-normal leading-6 font-para text-[#333333]">
              Stay informed and inspired with our collection of blog posts
              covering a wide range of topics related to education, career
              development, industry trends, and more.
            </p>
            <button className="mt-10 text-sm font-medium w-fit px-4 py-[10px] border-2 border-[#CACBCF] border-opacity-80 rounded-md font-para md:block hidden">
              View All
            </button>
          </div>
          <div className="md:w-[60%] mt-4 md:mt-0">
            {newsData.map((value) => {
              return (
                <div
                  className="md:flex md:gap-5 md:mb-10 mb-4 md:sticky md:top-0 bg-white"
                  key={value.id}
                >
                  <div className="">
                    <img
                      src={value.newsImage}
                      alt={value.title}
                      className="rounded-lg md:w-auto w-full"
                    />
                  </div>
                  <div className="md:max-h-fit md:my-auto my-4">
                    <span className="bg-[#F5F5F5] font-para text-xs font-normal p-2 me-3">
                      {value.badge}
                    </span>
                    <span className="bg-[#F5F5F5] font-para text-xs font-normal p-2">
                      {value.publishDate}
                    </span>
                    <div className="max-w-96">
                      <h5 className="text-xl leading-8 mt-4 ">{value.title}</h5>
                      <a href={value.anchorLink}>
                        <p className="flex gap-[10px] items-center text-[14px] font-para pt-10">
                          <FaArrowRight />
                          Read Articles
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            <button className="md:mt-10 mt-8 text-sm font-medium md:w-fit w-full px-4 py-[10px] border-2 border-[#CACBCF] border-opacity-80 rounded-md font-para md:hidden block">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
