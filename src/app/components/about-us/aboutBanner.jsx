import React from "react";

const AboutBanner = () => {
  return (
    <section className="max-w-7xl md:mx-auto py-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-32">About</p>
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
  );
};

export default AboutBanner;
