"use client";
import { Bar, Line } from "react-chartjs-2";

import { opitions, optionsTable } from "./middleware/options";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  BarElement,
  Filler,
  Legend,
} from "chart.js";

export default function Graph({ isData }: any) {
  const response = isData?.dataClient.company[0];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const data = {
    labels: response?.history,
    datasets: [
      {
        fill: true,
        data: response?.range,
        label: `pergunta: ${response?.pergunta}`,
        borderColor: "#b200ff",
        backgroundColor: `#36273d`,
      },
    ],
  };

  return (
    <>
      <>
     <Line
        data={data}
        options={opitions}
        style={{ width: "100%", height: "50vh" }}
      />
     </>  
    </>
  );
}
