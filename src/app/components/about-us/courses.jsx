import React, { Fragment } from "react";
import { courseDetails } from "./data";
import AboutCards from "./aboutCard";

const Courses = () => {
  return (
    <div className="md:grid grid-cols-3 md:gap-6  mt-10 md:mx-0 mx-3">
      {courseDetails.map((value, i) => (
        <Fragment key={i}>
          <AboutCards val={value} />
        </Fragment>
      ))}
    </div>
  );
};

export default Courses;
