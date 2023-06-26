import { AiOutlinePieChart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { LuCalendarClock } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";

const sidebarMenu = [
  {
    icon: AiOutlinePieChart,
    menuItem: "Dashboard",
  },
  {
    icon: BsTags,
    menuItem: "Transaction",
  },
  {
    icon: LuCalendarClock,
    menuItem: "Schedules",
  },
  {
    icon: AiOutlineUser,
    menuItem: "Users",
  },
  {
    icon: FiSettings,
    menuItem: "Settings",
  },
];

const SidebarMenuComponent = () => {
  return sidebarMenu.map((menu, index) => (
    <div key={index} className="flex gap-3 items-center text-1xl ml-3">
      <span>{<menu.icon />}</span>
      <h3>{menu.menuItem}</h3>
    </div>
  ));
};

export default SidebarMenuComponent;
