import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Activities = ({ values }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bitcoin vs usd",
      },
    },
  };

  const labels = values.map((value) => value[0]);

  const data = {
    labels,
    datasets: [
      {
        label: "usd",
        data: values.map((value) => value[1]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="mt-5 p-3 bg-inherit">
      <Line data={data} />
    </div>
  );
};

export default Activities;
