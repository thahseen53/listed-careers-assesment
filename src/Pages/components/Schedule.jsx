const Schedule = () => {
  return (
    <div className="flex flex-col gap-4 m-3 p-8 rounded-lg bg-white sm:w-[480px]">
      <h3 className="text-[18px] font-bold font-lato">Today's schedule</h3>
      <div className="flex flex-col gap-4">
        <div className="flex justify-start items-center w-full h-[66px]">
          <div className="h-full w-[5px] bg-[#9BDD7C] mr-2"></div>
          <div>
            <h4 className="text-[#666] text-1xl font-semibold">
              Meeting with suppliers with Kuta Bali
            </h4>
            <span className="block text-[#999] text-[12px]">14.00 - 15.00</span>
            <span className="block text-[#999] text-[12px]">
              at Sunset road, Kuta Bali
            </span>
          </div>
        </div>
        <div className="flex justify-start items-center w-full h-[66px]">
          <div className="h-full w-[5px] bg-[#6972C3] mr-2"></div>

          <div>
            <h4 className="text-[#666] text-1xl font-semibold">
              Check operation at Giga factory 1
            </h4>
            <span className="block text-[#999] text-[12px]">18.00 - 20.00</span>
            <span className="block text-[#999] text-[12px]">
              at central Jakarta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
