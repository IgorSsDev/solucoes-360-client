"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function DoughnutPage({ isData }: any) {


  const data = {
    labels: ['Satisfeito', 'Neutro', 'Insatisfeito'],
    datasets: [
      {
        label: 'Satisfação dos seus clientes',
        data: [isData.dataClient.satisfied[0].notas, isData.dataClient.satisfied[1].notas, isData.dataClient.satisfied[2].notas],
        backgroundColor: [
          'rgba(119, 0, 255, 0.2)',
          'rgba(180, 214, 67, 0.2)',
          'rgba(235, 54, 54, 0.2)',
        ],
        borderColor: [
          '#8000ff',
          'rgba(255, 206, 86, 1)',
          '#ff0000',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={data} />
    </div>
  )
}
