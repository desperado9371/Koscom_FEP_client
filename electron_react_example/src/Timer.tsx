import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import 'moment/locale/ko';

const Timer = () => {
  let count = useRef(0);
  const [date, setDate] = useState(moment());

  // console.log(isExpired);

  useEffect(() => {
    setTimeout(() => {
      count.current++;
      setDate(moment());
    }, 1000);
  });

  return (
    <div>
      <div className="timer">{date.format('yyyy/M/D HH:mm:ss')}</div>
    </div>
  );
};

export default Timer;
