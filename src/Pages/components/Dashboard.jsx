import { useEffect, useState } from "react";
import Activities from "./Activities";
import Header from "./Header";
import Overview from "./Overview";
import PieChart from "./PieChart";
import Schedule from "./Schedule";

const Dashboard = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=5&interval=daily&precision=1"
      );
      const data = await res.json();
      setdata(data?.prices);
    };
    fetchDatas();
  }, []);
  return (
    <div className="sm:ml-[280px] p-2 h-full  bg-[#F5F5F5] sm:p-8 font-montserrat">
      <Header />
      <Overview />
      <Activities values={data} />
      <div className="flex flex-col items-center gap-5 bg-inherit sm:flex-row sm:gap-[40px] m-6 justify-around">
        <PieChart />
        <Schedule />
      </div>
    </div>
  );
};

export default Dashboard;
