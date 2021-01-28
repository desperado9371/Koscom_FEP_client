import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 10);

const data = {
  labels: [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
  ],
  datasets: [
    {
      type: 'line',
      label: '주문 건수',
      borderColor: '#58FFDD',
      borderWidth: 3,
      fill: false,
      data: [
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand() + rand(),
        rand() + rand(),
        rand() + rand(),
        rand() + rand(),
        rand() + rand(),
        rand() + rand() + rand() * rand(),
      ],
    },
    {
      type: 'bar',
      label: '평균 처리',
      backgroundColor: '#7446E8',
      data: [
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand() * rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand() + rand(),
        rand() * rand(),
      ],
      borderColor: '#7446E8',
      borderWidth: 2,
    },
  ],
};

const options = {
  legend: {
    labels: {
      fontColor: '#eeeeee',
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontColor: '#eeeeee',
        },
        color: 'grey',
        gridLines: {
          color: 'grey',
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: '#eeeeee',
        },
      },
    ],
  },
};
const MixChart = () => {
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default MixChart;
