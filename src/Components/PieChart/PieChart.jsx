import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css'
const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Pie Chart',
        data: [300, 50, 100],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4 ,
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
    <div className='pie'>
        <Pie data={chartData} options={options}/>
    </div>
  )
};
 
export default PieChart;
 
