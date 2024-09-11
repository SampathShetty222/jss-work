"use client";
/* eslint-disable no-unused-vars */

import { PropTypes } from "prop-types";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavigationChip from "../header/navigationChip";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const aboutLinks = [
  {
    id: 1,
    title: "College of Pharmacy",
    link: "#",
  },
  {
    id: 2,
    title: "ERP",
    link: "#",
  },
  {
    id: 3,
    title: "JSSMVP",
    link: "#",
  },
  {
    id: 4,
    title: "Campus Tour",
    link: "#",
  },
  {
    id: 5,
    title: "Suttur Kshetra",
    link: "#",
  },
];

const aboutSupport = [
  {
    id: 1,
    title: "About",
    link: "#",
    desc: "Learn About Our College",
    icon: "/img/about/about-info.svg",
  },
  {
    id: 2,
    title: "Mission & Vision",
    link: "#",
    desc: "Our Mission and Vision",
    icon: "/img/about/about-target.svg",
  },
  {
    id: 3,
    title: "Message",
    link: "#",
    desc: "Message from Leadership",
    icon: "/img/about/message.svg",
  },
  {
    id: 4,
    title: "Governance",
    link: "#",
    desc: "Governance Structure",
    icon: "/img/about/shield.svg",
  },
  {
    id: 5,
    title: "Administration",
    link: "#",
    desc: "Administration Team",
    icon: "/img/about/profile.svg",
  },
  {
    id: 6,
    title: "Green Initiatives",
    link: "#",
    desc: "Sustainability Initiatives",
    icon: "/img/about/globe.svg",
  },
  {
    id: 7,
    title: "Mandatory Disclosure",
    link: "#",
    desc: "Legal and Mandatory Information",
    icon: "/img/about/folder-check.svg",
  },
  {
    id: 8,
    title: "Contact Us",
    link: "#",
    desc: "Reach Out to Us",
    icon: "/img/about/phone.svg",
  },
];

export const admissionLink = [
  {
    id: 1,
    title: "Under Graduate (UG) Programs",
    link: "#",
    desc: "Bachelor's Programs - BE",
    icon: "/img/admission/graduation-ug.svg",
  },
  {
    id: 2,
    title: "Post Graduate (PG) Programs",
    link: "#",
    desc: "Master's Programs - Mtech",
    icon: "/img/admission/graduation-pg.svg",
  },
  {
    id: 3,
    title: "Admission Help Desk/Contact",
    link: "#",
    desc: "Admission Assistance",
    icon: "/img/admission/headphones.svg",
  },
];

export const academicsLink = [
  {
    id: 1,
    title: "Departments",
    link: "#",
    desc: "Our Academic Departments",
    icon: "/img/academics/department.svg",
  },
  {
    id: 2,
    title: "Calendar of Events",
    link: "#",
    desc: "Academic Events Calendar",
    icon: "/img/academics/calendar.svg",
  },
  {
    id: 3,
    title: "Collaboration and MOU’s",
    link: "#",
    desc: "JSS Collaborations and MOU's",
    icon: "/img/academics/collabration.svg",
  },
];

export const researchLinks = [
  {
    id: 1,
    title: "Research Center",
    link: "#",
    desc: "Our Research Center",
    icon: "/img/academics/research.svg",
  },
  {
    id: 2,
    title: "Grants",
    link: "#",
    desc: "Available Research Grants",
    icon: "/img/academics/currency.svg",
  },
  {
    id: 3,
    title: "Patents",
    link: "#",
    desc: "Our Patents",
    icon: "/img/academics/lightbulb.svg",
  },
  {
    id: 4,
    title: "Events/Activities",
    link: "#",
    desc: "Reserach Events",
    icon: "/img/academics/announcement.svg",
  },
  {
    id: 5,
    title: "STEP",
    link: "#",
    desc: "Science & Technology Entrepreneurs Park ",
    icon: "/img/academics/star.svg",
  },
  {
    id: 6,
    title: "Contact (Research)",
    link: "#",
    desc: "Research Department Contact",
    icon: "/img/academics/star.svg",
  },
];

export const studentLinks = [
  {
    id: 1,
    title: "Scholarships",
    link: "#",
    desc: "Financial Scholarships",
    icon: "/img/student-life/scholarship.svg",
  },
  {
    id: 2,
    title: "Mentoring Scheme",
    link: "#",
    desc: "Mentoring Programs",
    icon: "/img/student-life/user-check.svg",
  },
  {
    id: 3,
    title: "Exam",
    link: "#",
    desc: "Examination Information",
    icon: "/img/student-life/pencil.svg",
  },
  {
    id: 4,
    title: "Techno Cultural Impact",
    link: "#",
    desc: "Tech and Cultural Activities",
    icon: "/img/student-life/techno-culture.svg",
  },
  {
    id: 5,
    title: "Social Outreach Program",
    link: "#",
    desc: "Community Outreach",
    icon: "/img/student-life/hearts.svg",
  },
];

export const facilitiesLinks = [
  {
    id: 1,
    title: "Library and Information Centre",
    link: "#",
    desc: "Library Services",
    icon: "/img/student-life/book-open.svg",
  },
  {
    id: 2,
    title: "Hostel",
    link: "#",
    desc: "Student Accommodation",
    icon: "/img/student-life/hostel.svg",
  },
  {
    id: 3,
    title: "Sports",
    link: "#",
    desc: "Sports Facilities",
    icon: "/img/student-life/trophy.svg",
  },
  {
    id: 4,
    title: "Cafeteria",
    link: "#",
    desc: "Dining Options",
    icon: "/img/student-life/cafeteria.svg",
  },
  {
    id: 5,
    title: "Infrastructure",
    link: "#",
    desc: "Campus Infrastructure",
    icon: "/img/student-life/infrastructure.svg",
  },
  {
    id: 6,
    title: "JSS Counselling Centre",
    link: "#",
    desc: "Counselling Services",
    icon: "/img/student-life/counselling.svg",
  },
];

export const moreLinks = [
  {
    id: 1,
    title: "Alumni",
    link: "#",
    desc: "Our Alumni Network",
    icon: "/img/more/cube-outline.svg",
  },
  {
    id: 2,
    title: "Photo Gallery",
    link: "#",
    desc: "Our Photo Gallery",
    icon: "/img/more/photo-gallery.svg",
  },
  {
    id: 3,
    title: "Online Grievance Support",
    link: "#",
    desc: "Submit Grievances",
    icon: "/img/more/annotation-alert.svg",
  },
  {
    id: 4,
    title: "Career Opportunity",
    link: "#",
    desc: "Job Opportunities",
    icon: "/img/more/briefcase.svg",
  },
];

export function Menus() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="px-7 py-10 w-[800px]">
              <p className="text-primary-darkblack text-base font-semibold">
                About Us
              </p>
              <p className="text-tertiary-gray text-sm font-normal">
                Lorem ipsum dorem
              </p>
              <div className="mt-8 flex gap-x-14">
                <div>
                  <p className="text-xs text-primary-orange font-semibold">
                    Links
                  </p>
                  <div className="mt-3 inline-flex flex-col gap-y-2">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="text-sm underline leading-7 text-tertiary-gray"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-primary-orange font-semibold">
                    Support
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-x-12 gap-y-5">
                    {aboutSupport.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex items-center gap-x-5"
                      >
                        <NavigationChip
                          backgroundColor="bg-primary-cream"
                          item={item}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Admission</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[350px] px-7 py-10">
              <div>
                <p className="text-xs text-primary-orange font-semibold">
                  Support
                </p>
                <div className="mt-3 flex flex-col gap-y-5">
                  {admissionLink.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="flex items-center gap-x-5"
                    >
                      <NavigationChip
                        backgroundColor="bg-primary-lightgreen"
                        item={item}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Academics & Research</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="px-7 py-10 w-[950px] ">
              <div className="flex gap-x-14">
                <div>
                  <p className="text-xs text-primary-orange font-semibold">
                    Academics
                  </p>
                  <div className="mt-3 inline-flex flex-col gap-y-2">
                    {academicsLink.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex items-center gap-x-5"
                      >
                        <NavigationChip
                          backgroundColor="bg-primary-lightblue"
                          item={item}
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-primary-orange font-semibold">
                    Research
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-x-12 gap-y-5">
                    {researchLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex items-center gap-x-5"
                      >
                        <NavigationChip
                          backgroundColor="bg-primary-lightblue"
                          item={item}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Student Life</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="px-7 py-10 w-[600px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-primary-orange font-semibold">
                    Student Support
                  </p>
                  <div className="mt-3 inline-flex flex-col gap-y-8">
                    {studentLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex items-center gap-x-5"
                      >
                        <NavigationChip
                          backgroundColor="bg-secondary-lightgray"
                          item={item}
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-primary-orange font-semibold">
                    Facilities
                  </p>
                  <div className="mt-3 inline-flex flex-col gap-y-8">
                    {facilitiesLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex items-center gap-x-5"
                      >
                        <NavigationChip
                          backgroundColor="bg-secondary-lightgray"
                          item={item}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Training & placement</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 px-7 py-10 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <div>
                <p className="text-xs text-primary-orange font-semibold">
                  Facilities
                </p>
                <div className="mt-3 inline-flex flex-col gap-y-8">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="flex items-center gap-x-5"
                    >
                      <NavigationChip
                        backgroundColor="bg-secondary-lightgray"
                        item={item}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(function ListItem(
  { className, title, children, ...props },
  ref
) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

ListItem.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
