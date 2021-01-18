import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

let data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      // backgroundColor: 'rgba(75,192,192,0.4)',
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#123312',
        '#0088ff',
        '#770033',
        '#555555',
      ],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: 'black',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

let options = {
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

const Test2 = () => {
  const [datas, setDatas] = useState(data);

  useEffect(() => {
    setTimeout(() => {
      let oldDataset = datas.datasets[0];
      let newData = [];
      for (let x = 0; x < datas.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 100));
      }

      let newDatasets = {
        ...oldDataset,
      };
      newDatasets.data = newData;

      let new_datas = {
        ...datas,
        datasets: [newDatasets],
      };
      setDatas(new_datas);
    }, 1000);
  });

  return (
    <Fragment>
      <h2> Random chart</h2>
      <div className="chartdiv">
        {/* <div className="grid_item w-50">
          <Line data={datas} options={options} />
        </div> */}
        <Bar data={datas} options={options} />
      </div>
    </Fragment>
  );
};

export default Test2;
