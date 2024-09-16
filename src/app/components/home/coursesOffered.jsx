import React from "react";
import { coursesData } from "./data";
import CourseCard from "../common/cards/courseCard";

const CoursesOffered = () => {
  return (
    <>
      {coursesData.map((values, index) => {
        return (
          <div key={values.id}>
            <CourseCard
              className={index > 2 ? "md:block hidden" : ""}
              iconImage={values.iconImage}
              heading={values.heading}
              description={values.description}
              anchorLink={values.anchorLink}
            />
          </div>
        );
      })}
    </>
  );
};

export default CoursesOffered;
