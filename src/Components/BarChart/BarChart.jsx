import React from 'react';
import { Bar } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import './BarChart.css'
Chart.register(CategoryScale);

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Bar Chart',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#884EA0',
        borderColor: '#F39C12',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className='bar'>
      <Bar data={data} options={options} />
    </div>
  )
};

export default BarChart;
