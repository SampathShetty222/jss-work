"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FacilitiesCard = () => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const content = [
    {
      title: "Classrooms",
      description:
        "Our classrooms are designed to foster an engaging learning experience with modern seating arrangements and audio-visual equipment. Spacious and well-ventilated, these classrooms provide a comfortable environment that enhances focus and collaboration among students.",
      content: (
        <img
          src="/img/home/classroom.svg"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Modern Laboratories",
      description:
        "Equipped with the latest technology, our laboratories offer hands-on experience, enabling students to apply theoretical knowledge in a practical setting. Regular upgrades ensure that students work with current industry-standard tools and equipment.",
      content: (
        <img
          src="/img/home/laboratory.svg"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Library",
      description:
        "Our library boasts an extensive collection of books, journals, and digital resources, providing a quiet and resourceful space for academic growth. Dedicated study areas and digital access ensure a comprehensive learning environment.",
      content: (
        <img
          src="/img/home/library.svg"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Hostel Facilities",
      description:
        "Comfortable and secure accommodations with essential amenities for both boys and girls, fostering a supportive living environment. The hostels also provide recreational facilities and a safe atmosphere for holistic development.",
      content: (
        <img
          src="/img/home/hostel.svg"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Sports Complex",
      description:
        "A wide range of sports facilities, including fields, courts, and indoor games, encouraging physical fitness and teamwork. Regular sports events and coaching sessions help students stay active and engaged.",
      content: (
        <img
          src="/img/home/sport-complex.svg"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Auditorium",
      description:
        "A modern auditorium equipped with state-of-the-art audio-visual technology, ideal for hosting events, seminars, and cultural programs. The space accommodates large audiences, making it perfect for institutional gatherings and guest lectures.",
      content: (
        <img
          src="/img/home/auditorium.svg"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
  ];

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
    <section className="bg-secondary-black sticky top-20">
      <motion.div
        className="h-[30rem] overflow-y-auto flex gap-x-10 justify-center relative rounded-md px-20 py-10"
        ref={ref}
      >
        <div className="relative w-1/2 flex items-start px-4">
          <div>
            {content.map((item, index) => (
              <div key={item.title + index} className="my-32">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-3xl text-white font-normal"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
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
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </section>
  );
};

export default FacilitiesCard;
