/* eslint-disable object-curly-newline */
/* eslint-disable indent */

import { Dialog, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Fragment } from "react";
import { MdClose } from "react-icons/md";
import { mobileNavData } from "../header/data";
import { FiArrowRight } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { PropTypes } from "prop-types";

const MobileNav = ({ sidebarOpen, setSidebarOpen }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const handleRouter = () => {
    router.push("/");
    setSidebarOpen(false);
  };
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute right-full top-0 flex w-16 justify-center pt-5"></div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col overflow-y-auto bg-white">
                <div className="flex items-center justify-between p-5">
                  <img
                    src="/img/header/jss-noida-logo.svg"
                    alt="jss-noida-logo"
                  />
                  <MdClose
                    onClick={() => setSidebarOpen(false)}
                    className="text-xl cursor-pointer"
                  />
                </div>
                {activeMenu !== null && (
                  <div
                    onClick={() => setActiveMenu(null)}
                    className="mt-3 px-5 cursor-pointer !inline-flex items-center gap-x-2"
                  >
                    <FiArrowRight className="text-lg rotate-180" />
                    <p className="text-base font-para font-normal text-primary-lightblack">
                      Back
                    </p>
                  </div>
                )}
                <div className="mt-3">
                  {activeMenu === null
                    ? mobileNavData.map((item) => {
                        const isActive =
                          item.path === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.path);
                        return (
                          <div
                            key={item.id}
                            onClick={
                              item.link
                                ? handleRouter
                                : () => setActiveMenu(item.id)
                            }
                            className="px-5 cursor-pointer flex items-center py-3 border-b justify-between"
                          >
                            <p
                              className={`font-para ${isActive ? "text-primary-orange" : "text-primary-lightblack"} font-normal text-base`}
                            >
                              {item.title}
                            </p>
                            <FiArrowRight
                              className={`text-lg ${isActive ? "text-primary-orange" : "text-primary-lightblack"}`}
                            />
                          </div>
                        );
                      })
                    : mobileNavData
                        .find((menu) => menu.id === activeMenu)
                        .subMenus.map((subMenu) => (
                          <div
                            key={subMenu.id}
                            className="px-5 flex items-center py-3 border-b justify-between"
                          >
                            <p className="font-para text-primary-lightblack font-normal text-base">
                              {subMenu.title}
                            </p>
                            <FiArrowRight className="text-lg" />
                          </div>
                        ))}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileNav;

MobileNav.propTypes = {
  sidebarOpen: PropTypes.boolean,
  setSidebarOpen: PropTypes.setSidebarOpen,
};
