import React from "react";

const Contactus = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl md:mx-auto md:py-20 py-10 mx-4 md:text-center">
        <div>
          <h5 className="text-[32px] text-[#101828] font-normal">
            Get in touch
          </h5>
          <p className="font-para text-lg text-[#475467] md:pt-6 pt-4">
            We’d love to hear from you. Please fill out this form.
          </p>
        </div>
        <div className="md:pt-20 pt-4">
          <form action="" className="max-w-[480px] mx-auto">
            <div className="md:flex text-start gap-6">
              <div className="md:w-1/2 w-full flex flex-col">
                <label
                  htmlFor=""
                  className="font-para text-sm font-medium text-[#344054]"
                >
                  First name <span className="text-[#FF4E00]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-[#D0D5DD] rounded-md mt-[6px] px-4 py-3 font-para text-md"
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col md:pt-0 pt-6">
                <label
                  htmlFor=""
                  className="font-para text-sm font-medium text-[#344054]"
                >
                  Last name <span className="text-[#FF4E00]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="font-para border border-[#D0D5DD] rounded-md mt-[6px] px-4 py-3 text-md"
                />
              </div>
            </div>
            <div className="w-full flex flex-col text-start pt-6">
              <label
                htmlFor=""
                className="font-para text-sm font-medium text-[#344054]"
              >
                Email <span className="text-[#FF4E00]">*</span>
              </label>
              <input
                type="email"
                placeholder="you@gmail.com"
                className="border border-[#D0D5DD] rounded-md mt-[6px] px-4 py-3 font-para text-md"
              />
            </div>
            <div className="w-full flex flex-col text-start pt-6">
              <label
                htmlFor=""
                className="font-para text-sm font-medium text-[#344054]"
              >
                Phone number
              </label>
              <input
                type="tel"
                placeholder="+91 9876 543 321"
                className="border border-[#D0D5DD] rounded-md mt-[6px] px-4 py-3 font-para text-md"
              />
            </div>
            <div className="w-full flex flex-col text-start pt-6">
              <label
                htmlFor=""
                className="font-para text-sm font-medium text-[#344054]"
              >
                Message <span className="text-[#FF4E00]">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Leave us a message..."
                className="border border-[#D0D5DD] rounded-md mt-[6px] px-4 py-3 font-para text-md"
                rows="4"
              />
            </div>
            <div className="w-full flex gap-3 text-start pt-6">
              <input
                type="checkbox"
                id="form"
                name="form"
                value="checkbox"
                className="w-5 border rounded-md  border-[#D0D5DD] cursor-pointer"
              />
              <label
                htmlFor="form"
                className="font-para text-md font-normal text-[#475467] underline"
              >
                You agree to our friendly privacy policy.
              </label>
            </div>
            <div className="w-full text-start pt-11">
              <input
                type="button"
                value="Send message"
                className="bg-[#FF4E00] text-white rounded-md w-full py-3 font-para text-md font-medium cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
