import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { Line } from 'react-chartjs-2';

const Timer = ({ expiredTime, onExpired }) => {
  let count = useRef(0);
  const [date, setDate] = useState(moment());
  const expireDate = moment(expiredTime);
  const isExpired = expireDate < moment();

  let data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
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

  console.log(isExpired);
  console.log(data.datasets[0].data);
  const randomize = () => {
    console.log('random!');
    let newdata = [];
    for (var x = 0; x < data.labels.length; x++) {
      newdata[x] = Math.floor(Math.random() * 100);
    }
    console.log(newdata);

    let oldDataset = data.datasets[0];
    let newdatasets = {
      ...oldDataset,
    };

    newdatasets.data = newdata;

    let newtop = {
      ...data,
      datasets: [newdatasets],
    };
  };

  useEffect(() => {
    if (isExpired) {
      onExpired();
      return;
    }

    setTimeout(() => {
      count.current++;
      setDate(moment());
      randomize();
    }, 1000);
  });

  return (
    <div>
      {count.current}
      <Line data={data} />
      <div>{date.format('현재시간 hh:mm:ss')}</div>
      {!isExpired && <div>{`${expireDate.fromNow()} 에 종료됩니다.`}</div>}
    </div>
  );
};

export default Timer;
