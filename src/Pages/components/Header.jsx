import React from "react";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
const Header = () => {
  return (
    <div className="h-[30px] flex items-center">
      <h1 className="text-1xl sm:text-2xl font-bold ">Dashboard</h1>
      <div className="ml-auto flex items-center gap-2 p-2 sm:gap-4">
        <div>
          <input type="text" placeholder="Search" className="lg:px-2" />
        </div>
        <span>
          <FaRegBell />
        </span>
        <span>
          <AiOutlineUser />
        </span>
      </div>
    </div>
  );
};

export default Header;
