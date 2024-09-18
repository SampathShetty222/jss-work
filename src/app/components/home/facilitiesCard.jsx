"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import FacilitiesMobileSlider from "./facilitiesMobileSlider";
import { content } from "./data";
import { RiGraduationCapLine } from "react-icons/ri";

const FacilitiesCard = () => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) return index;

        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <section className="py-10 lg:py-0 md:px-20 bg-secondary-black lg:sticky top-20">
      <motion.div
        className="h-[30rem] max-w-7xl mx-auto facilities-card overflow-y-auto hidden lg:flex gap-x-10 justify-center relative rounded-md py-10"
        ref={ref}
      >
        <div className="relative w-1/2 flex items-start">
          <div>
            {content.map((item, index) => (
              <div key={item.title + index} className="my-32">
                {index === 0 && (
                  <p className="bg-white mb-2 text-black font-para uppercase px-4 py-2 w-fit rounded-2xl text-xs font-normal flex gap-2">
                    <RiGraduationCapLine className="text-sm text-black" />{" "}
                    FACILTIES
                  </p>
                )}
                <motion.h2
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-3xl text-white font-normal"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-base text-primary-opactiy60 mt-5"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          className={cn(
            "hidden lg:block h-80 w-1/2 rounded-md sticky top-10 overflow-hidden"
          )}
        >
          <img
            src={content[activeCard].content ?? null}
            alt="jss-facilities"
            className="w-full object-cover h-full"
          />
        </div>
      </motion.div>
      <FacilitiesMobileSlider />
    </section>
  );
};

export default FacilitiesCard;
