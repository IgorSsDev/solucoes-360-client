"use client";
import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function DoughnutPage({ isData }: any) {

  const index = isData.dataClient.company[1];

  const data = {
    labels: index?.history,
    datasets: [
      {
        fill: true,
        data: index?.range,
        label: `pergunta: ${index?.pergunta}`,
        borderColor: "#002fff",
        backgroundColor: "#002fff",
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
}
