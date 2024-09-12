import React from "react";
import { Menus } from "./menus";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <nav className="sticky top-0 py-3 z-50 bg-white flex justify-between items-center px-20">
      <img src="/img/header/jss-noida-logo.svg" alt="jss-noida-logo" />
      <div className="flex items-center gap-x-5">
        <Menus />
        <div className="flex items-center gap-x-8">
          <div className="flex gap-x-2 items-center">
            <p className="text-primary-orange font-semibold">En</p>
            <img src="/img/header/liner.svg" alt="liner" />
            <img src="/img/header/hindi.svg" alt="hindi" />
          </div>
          <BsSearch />
        </div>
      </div>
    </nav>
  );
};

export default Header;
