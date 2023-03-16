import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import './Area.css'
const AreaChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Area Chart',
        data: [10, 65, 30, 80, 70, 95, 55, 70],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  });

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
    <div className='area'>
      <Line data={chartData} options ={options} />
    </div>
  )
};
 
export default AreaChart;
 