import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import SidebarMenuComponent from "./SidebarMenuComponent";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <button
        className="inline-flex items-center p-2 mt-2 ml-3 text-3xl text-gray-500 rounded-lg sm:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <GiHamburgerMenu />
      </button>

      <div
        className={`fixed top-0 left-0 z-40 w-[280px] h-screen transition-transform ${
          openMenu ? `translate-x-0` : "-translate-x-full"
        }  sm:translate-x-0 bg-black text-white rounded-2xl font-montserrat`}
      >
        <div className="flex flex-col items-center lg:p-5">
          <div className="ml-auto sm:hidden" onClick={() => setOpenMenu(false)}>
            <span className="w-full mr-0 ">
              <AiOutlineClose className="text-3xl" />
            </span>
          </div>

          <div>
            <h1 className="text-3xl font-bold sm:mt-6">Board.</h1>
          </div>

          <div className=" w-full mt-3 h-screen p-5 flex flex-col gap-5">
            <SidebarMenuComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
