import React from 'react';
import { Bubble } from 'react-chartjs-2';
import './BubbleChart.css';

const BubbleChart = () => {
  return (
    <div className='bubble'>
      <Bubble
        data={{
          datasets: [
            {
              label: 'Dataset 1',
              data: [
                { x: 1, y: 10, r: 5 },
                { x: 2, y: 5, r: 10 },
                { x: 3, y: 8, r: 7 },
                { x: 4, y: 12, r: 3 },
                { x: 5, y: 7, r: 6 },
                { x: 6, y: 9, r: 9 },
                { x: 7, y: 15, r: 4 },
                { x: 8, y: 3, r: 8 },
                { x: 9, y: 6, r: 6 },
                { x: 10, y: 11, r: 5 },
              ],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
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
              text: 'Bubble Chart'
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
 
export default BubbleChart;