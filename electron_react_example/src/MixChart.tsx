import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 10);

const data = {
  labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
  datasets: [
    {
      type: 'line',
      label: '주문 건수',
      borderColor: 'orange',
      borderWidth: 3,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand() * rand()],
    },
    {
      type: 'bar',
      label: '평균 처리',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand() * rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand() * rand()],
    },
  ],
};
const MixChart = () => {
  return (
    <>
      <div className="mixchartdiv">
        <Bar data={data} />
      </div>
    </>
  );
};

export default MixChart;
