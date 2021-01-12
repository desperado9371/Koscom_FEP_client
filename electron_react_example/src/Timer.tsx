import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import 'moment/locale/ko';

const Timer = ({ expiredTime, onExpired }) => {
  let count = useRef(0);
  const [date, setDate] = useState(moment());
  const expireDate = moment(expiredTime);
  const isExpired = expireDate < moment();

  // console.log(isExpired);

  useEffect(() => {
    if (isExpired) {
      onExpired();
      return;
    }

    setTimeout(() => {
      count.current++;
      setDate(moment());
    }, 1000);
  });

  return (
    <div>
      {count.current}
      <div>{date.format('현재시간 hh:mm:ss')}</div>
      {!isExpired && <div>{`${expireDate.fromNow()} 에 종료됩니다.`}</div>}
    </div>
  );
};

export default Timer;
