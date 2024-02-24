"use client";
import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import "./style.css";
import { opitions, optionsTable } from "../graph/middleware/options";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
export default function ComponentGraphs({ isData }: any) {
  const response = isData?.dataClient.company;
  const [design, setDesign] = useState(false);
  ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  return (
    <div className="graph-content">
      <div className="select-graph">
        <h1>Selecione o gráfico de sua escolha 📈</h1>
        <div className="select">
          <button onClick={() => setDesign(false)}>Gráfico com Linhas</button>
          <button onClick={() => setDesign(true)}>Gráfico com Tabelas</button>
        </div>
      </div>

      {response?.map((index: any) => {
        const data = {
          labels: index?.history,
          datasets: [
            {
              fill: true,
              data: index?.range,
              label: `pergunta: ${index?.pergunta}`,
              borderColor: design ? "green" : "#b200ff",
              backgroundColor: design ? "green" : "#593d64",
            },
          ],
        };
        return (
          <>
            {design ? (
              <>
              <Bar
                  options={optionsTable}
                  data={data}
                  style={{  background: "black" }}
                  
                />
              </>
            ) : (
              <>
                 <Line
                  data={data}
                  options={opitions}
                  style={{width: "100%", background: "#000" }}
                />
               
              </>
            )}
          </>
        );
      })}
    </div>
  );
}
