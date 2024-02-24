
export const opitions = {
    responsive: true,
    plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Gráfico com base em nossos feedbacks',
        },
      },
      maintainAspectRatio: false,
      scales: {
        x: {  // Anteriormente xAxes
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
        },
        y: {  // Anteriormente yAxes
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
        },
      },
};
export const optionsTable = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};