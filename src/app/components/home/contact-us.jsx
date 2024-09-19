"use client";
import { Field, Form, Formik } from "formik";
import React from "react";
import { contactSchema } from "../schema/contactSchema";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Contactus = () => {
  const handlePhoneNumberChange = (value, setFieldValue) => {
    setFieldValue("phone", value);
  };
  return (
    <section className="bg-white relative z-20">
      <div className="max-w-7xl md:mx-auto py-20 mx-4 md:text-center">
        <h5 className="text-32 text-tertiary-black font-normal">
          Get in touch
        </h5>
        <p className="font-para text-lg text-tertiary-gray md:pt-6 pt-4">
          We’d love to hear from you. Please fill out this form.
        </p>
        <div className="md:pt-20 pt-4">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
              check: false,
            }}
            validationSchema={contactSchema}
          >
            {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
              <Form>
                <div className="max-w-[480px] mx-auto">
                  <div className="md:flex text-start gap-6">
                    <div className="md:w-1/2 w-full flex flex-col">
                      <label
                        htmlFor="firstName"
                        className="font-para text-sm font-medium text-tertiary-darkblack"
                      >
                        First name{" "}
                        <span className="text-primary-orange">*</span>
                      </label>
                      <Field
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        className="border border-tertiary-dimgray rounded-md mt-1.5 px-4 py-3 font-para text-md"
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="text-red-500 pl-2 mt-1 text-sm font-medium">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col md:pt-0 pt-6">
                      <label
                        htmlFor="lastName"
                        className="font-para text-sm font-medium text-tertiary-darkblack"
                      >
                        Last name <span className="text-primary-orange">*</span>
                      </label>
                      <Field
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        className="font-para border border-tertiary-dimgray rounded-md mt-[6px] px-4 py-3 text-md"
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="text-red-500 pl-2 mt-1 text-sm font-medium">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-col text-start pt-6">
                    <label
                      htmlFor="email"
                      className="font-para text-sm font-medium text-tertiary-darkblack"
                    >
                      Email <span className="text-primary-orange">*</span>
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@gmail.com"
                      className="border border-tertiary-dimgray rounded-md mt-1.5 px-4 py-3 font-para text-md"
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 pl-2 mt-1 text-sm font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="w-full flex flex-col text-start pt-6">
                    <label
                      htmlFor="phone"
                      className="font-para text-sm font-medium text-tertiary-darkblack"
                    >
                      Phone number{" "}
                      <span className="text-primary-orange">*</span>
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="IN"
                      countryCallingCodeEditable={false}
                      value={values.phone}
                      onChange={(value) =>
                        handlePhoneNumberChange(value, setFieldValue)
                      }
                      onBlur={() => setFieldTouched("phone", true, true)}
                      onFocus={() => setFieldTouched("phone", false, false)}
                      placeholder="+91 9876 543 321"
                      className="border border-tertiary-dimgray phone-input rounded-md mt-[6px] px-4 py-3 font-para text-md"
                    />
                    {errors.phone && touched.phone && (
                      <p className="text-red-500 pl-2 mt-1 text-sm font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="w-full flex flex-col text-start pt-6">
                    <label
                      htmlFor="message"
                      className="font-para text-sm font-medium text-tertiary-darkblack"
                    >
                      Message <span className="text-primary-orange">*</span>
                    </label>
                    <Field
                      name="message"
                      id="message"
                      placeholder="Leave us a message..."
                      className="border border-[#D0D5DD] rounded-md mt-[6px] px-4 py-3 font-para text-md"
                      rows="4"
                    />
                    {errors.message && touched.message && (
                      <p className="text-red-500 pl-2 mt-1 text-sm font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full flex gap-3 text-start pt-6">
                    <Field
                      type="checkbox"
                      id="check"
                      name="check"
                      className="w-5 border rounded-md  border-[#D0D5DD] cursor-pointer"
                    />
                    <label
                      htmlFor="form"
                      className="font-para text-md font-normal text-tertiary-gray underline"
                    >
                      You agree to our friendly privacy policy.
                    </label>
                  </div>
                  {errors.check && touched.check && (
                    <p className="text-red-500 text-start pl-2 mt-2 text-sm font-medium">
                      {errors.check}
                    </p>
                  )}

                  <div className="w-full text-start pt-11">
                    <button
                      type="submit"
                      className="bg-primary-orange text-white rounded-md w-full py-3 font-para text-md font-medium cursor-pointer"
                    >
                      Send Message{" "}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
