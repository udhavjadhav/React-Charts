import React from 'react';
import { Radar } from 'react-chartjs-2';
import './RadarChart.css';
const RadarChart = () => {
  return (
    <div className='radar'>
      <Radar
        data={{
          labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [10, 5, 8, 12, 7, 9],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
            {
              label: 'Dataset 2',
              data: [5, 10, 3, 6, 8, 12],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Radar Chart'
            }
          },
          scales: {
            r: {
              ticks: {
                beginAtZero: true,
              },
            },
          },
        }}
      />
    </div>
  );
};
 
export default RadarChart;
 