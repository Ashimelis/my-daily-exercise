import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Transaction = () => {
  const [data, setData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [options, setOptions] = useState({
    title: {
      display: true,
      text: 'Sales Dashboard',
    },
    scales: {
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Sales',
          },
        },
      ],
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month',
          },
        },
      ],
    },
  });
useEffect(() => {
setOptions()
}, [])
useEffect(() => {
setData()
}, [])
  return (
    <div>
      <h1>Sales Dashboard</h1>
      <Line data={data} options={options} />
      <Bar data={data} options={options} />
    </div>
  );
};

export default Transaction;