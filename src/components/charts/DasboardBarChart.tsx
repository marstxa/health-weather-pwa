import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DasboardBarChart() {
  const getRandomColor = (opacity: number = 1): string => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  type Data = {
    city: string;
    number: number;
  };

  const citiesAQI: Data[] = [
    { city: "Delhi", number: 300 },
    { city: "Lahore", number: 250 },
    { city: "Karachi", number: 230 },
    { city: "Dhaka", number: 220 },
    { city: "Kathmandu", number: 210 },
    { city: "Mumbai", number: 200 },
    { city: "Beijing", number: 180 },
    { city: "Jakarta", number: 170 },
    { city: "Cairo", number: 160 },
    { city: "Kabul", number: 150 },
  ];

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "CITIES WITH THE MOST AQI",
        font: {
          size: 20,
          family: "Rubik",
          weight: "bold",
        },
      },
    },
  };

  const labels = citiesAQI.map((item) => item.city);

  const data: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: "Cities",
        data: citiesAQI.map((item) => item.number),
        backgroundColor: citiesAQI.map(() => getRandomColor(0.2)),
        borderColor: citiesAQI.map(() => getRandomColor()),
        borderWidth: 2,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default DasboardBarChart;
