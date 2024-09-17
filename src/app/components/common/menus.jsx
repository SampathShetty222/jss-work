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
} from "../../../components/ui/navigation-menu";
import NavigationChip from "../header/navigationChip";
import {
  aboutLinks,
  aboutSupport,
  academicsLink,
  admissionLink,
  facilitiesLinks,
  moreLinks,
  researchLinks,
  studentLinks,
} from "../header/data";

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

export function Menus() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="px-7 py-10 w-[850px]">
              <div className="flex gap-x-14">
                <div>
                  <p className="text-xs text-primary-orange font-semibold">
                    Links
                  </p>
                  <div className="mt-3 inline-flex flex-col gap-y-2">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="text-sm underline hover:text-secondary-lighterblue leading-7 text-tertiary-gray"
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
                  <div className="mt-3 grid grid-cols-2 gap-x-12 gap-y-2">
                    {aboutSupport.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex items-center py-3 px-2 hover:bg-gray-100 rounded-lg gap-x-5"
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
                <div className="mt-3 flex flex-col gap-y-2">
                  {admissionLink.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="flex items-center hover:bg-gray-100 rounded-lg py-3 px-2 gap-x-5"
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
            <ul className="px-7 py-10 w-[980px] ">
              <div className="flex gap-x-10">
                <div>
                  <p className="text-xs text-primary-orange font-semibold">
                    Academics
                  </p>
                  <div className="mt-3 inline-flex flex-col gap-y-2">
                    {academicsLink.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex items-center py-3 px-2 hover:bg-gray-100 rounded-lg gap-x-5"
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
                  <div className="mt-3 grid grid-cols-2 gap-x-12 gap-y-2">
                    {researchLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex py-3 px-2 hover:bg-gray-100 rounded-lg items-center gap-x-5"
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
            <ul className="px-7 py-10 w-[650px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-primary-orange font-semibold">
                    Student Support
                  </p>
                  <div className="mt-3 inline-flex flex-col gap-y-2">
                    {studentLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex py-3 px-2 hover:bg-gray-100 rounded-lg items-center gap-x-5"
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
                  <div className="mt-3 inline-flex flex-col gap-y-2">
                    {facilitiesLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex hover:bg-gray-100 rounded-lg py-3 px-2 items-center gap-x-5"
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
            <ul className="px-7 py-10 lg:w-[800px] flex justify-end">
              <div>
                <p className="text-xs text-primary-orange font-semibold">
                  More
                </p>
                <div className="mt-3 inline-flex flex-col gap-y-2">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="flex items-center py-3 px-2 hover:bg-gray-100 rounded-lg gap-x-5"
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
