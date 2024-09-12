import React from "react";
import RedirectionCard from "./redirectionCard";
import { coursesData } from "./data";

const CoursesOffered = () => {
  return (
    <>
      {coursesData.map((values, index) => {
        return (
          <div key={values.id}>
            <RedirectionCard
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
