import React from "react";

const OnlineGrievanceBanner = () => {
  return (
    <>
      <section className="max-w-7xl md:mx-auto text-center py-20">
        <div className="max-w-2xl mx-auto mb-[32px]">
          <h1 className="text-32 font-normal mb-6">Online Grievance Support</h1>
          <p className="font-para text-base leading-[26px] text-primary-opactiy60">
            Lorem ipsum dolor sit amet consectetur. Malesuada nibh justo nunc
            mauris. Pulvinar et morbi in egestas lectus non aliquam nibh
            imperdiet. At vitae sodales.
          </p>
        </div>
        <div className="bg-secondary-lightgray flex justify-center rounded-2xl">
          <img
            src="/img/more/online-grievance/online-grievance.svg"
            alt="banner-image"
          />
        </div>
      </section>
    </>
  );
};

export default OnlineGrievanceBanner;
