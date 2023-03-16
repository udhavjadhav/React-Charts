import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import './PolarAreaChart.css'
const PolarAreaChart = () => {
  return (
    <div className='polar'>
      <PolarArea
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [11, 16, 7, 3, 14],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Polar Area Chart'
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
 
export default PolarAreaChart;
 