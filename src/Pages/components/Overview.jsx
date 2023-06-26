import { LiaMoneyBillSolid } from "react-icons/lia";
import { BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { PiUsers } from "react-icons/pi";

const Overview = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-evenly sm:mt-8">
      <div className="p-4 rounded-xl bg-[#DDEFE0] flex flex-col gap-2 sm:w-[222px]">
        <span className="ml-auto text-2xl">
          <LiaMoneyBillSolid />
        </span>
        <span className="font-semibold">Total Revenues</span>
        <span className="font-bold text-2xl">$2,129430</span>
      </div>
      <div className="p-4 rounded-xl bg-[#F4ECDD] flex flex-col gap-2 sm:w-[222px]">
        <span className="ml-auto text-2xl">
          <BsTags />
        </span>
        <span className="font-semibold">Total Transaction</span>
        <span className="font-bold text-2xl">1.520</span>
      </div>
      <div className="p-4 rounded-xl bg-[#EFDADA] flex flex-col gap-2 sm:w-[222px]">
        <span className="ml-auto text-2xl">
          <AiOutlineLike />
        </span>
        <span className="font-semibold">Total Likes</span>
        <span className="font-bold text-2xl">9721</span>
      </div>
      <div className="p-4 rounded-xl bg-[#DEE0EF] flex flex-col gap-2 sm:w-[222px]">
        <span className="ml-auto text-2xl">
          <PiUsers />
        </span>
        <span className="font-semibold">Total Users</span>
        <span className="font-bold text-2xl">8292</span>
      </div>
    </div>
  );
};

export default Overview;
