import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/derivatives/exchanges?per_page=3&page=1"
      );
      const data = await res.json();
      setChartData(data);
      console.log(data);
    };
    fetchDatas();
  }, []);
  const data = {
    labels: "",
    responsive: true,
    datasets: [
      {
        label: "# of Votes",
        data: chartData.map((data) => data.trade_volume_24h_btc),
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
        borderColor: ["#98D89E;", "#F6DC7D", "#EE8484"],
        borderWidth: 0,
      },
    ],
  };
  const colors = ["bg-[#98D89E]", "bg-[#F6DC7D]", "bg-[#EE8484]"];
  return (
    <div className="bg-white px-8 rounded-lg m-2">
      <h3 className="p-0 font-bold">Trade volume in 24 Hours</h3>
      <div className=" flex flex-col sm:flex-row gap-6">
        <Pie
          data={data}
          options={{ responsive: true, maintainAspectRatio: true }}
          width={"145px"}
          height={"145px"}
        />
        <div className="flex flex-col gap-6">
          {chartData.map((data, index) => (
            <div key={data.id}>
              <div className="flex justify-normal items-center gap-2">
                <span
                  className={`flex w-3 h-3 ${colors[index]} rounded-full`}
                ></span>
                <div>
                  <h3 className="text-[14px] font-bold">{data.name}</h3>
                  <p className="text-[#858585] text-[12px]">
                    {data.trade_volume_24h_btc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
