import React from 'react';
import { Scatter } from 'react-chartjs-2';
import './Scatter.css';

const ScatterChart = () => {
  return (
    <div className='scatter'>
      <Scatter
        data={{
          datasets: [
            {
              label: 'Scatter Dataset',
              data: [
                { x: 1, y: 10 },
                { x: 2, y: 5 },
                { x: 3, y: 8 },
                { x: 4, y: 12 },
                { x: 5, y: 7 },
                { x: 6, y: 9 },
                { x: 7, y: 15 },
                { x: 8, y: 3 },
                { x: 9, y: 6 },
                { x: 10, y: 11 },
              ],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Scatter Chart'
            }
          },
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              ticks: {
                beginAtZero: true,
              },
            },
            y: {
              type: 'linear',
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
 
export default ScatterChart;