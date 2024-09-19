"use client";
import React, { useState } from "react";
import { Menus } from "./menus";
import { BsSearch } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import MobileNav from "./mobileNav";
import Link from "next/link";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <header className="sticky top-0 py-3 z-50 bg-white px-5 md:px-10 lg:px-20">
      <nav className="hidden lg:flex justify-between items-center">
        <Link href={"/"}>
          <img src="/img/header/jss-noida-logo.svg" alt="jss-noida-logo" />
        </Link>
        <div className="flex items-center gap-x-5">
          <Menus />
          <div className="flex items-center gap-x-8">
            <div className="flex gap-x-2 items-center">
              <p className="text-primary-orange text-sm font-semibold">En</p>
              <img src="/img/header/liner.svg" alt="liner" />
              <p className="font-normal text-sm">हि</p>
            </div>
            <BsSearch />
          </div>
        </div>
      </nav>

      <nav className="flex items-center justify-between lg:hidden">
        <img src="/img/header/jss-noida-logo.svg" alt="jss-noida-logo" />
        <LuMenu
          className="text-2xl cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
      </nav>
      <MobileNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </header>
  );
};

export default Header;
