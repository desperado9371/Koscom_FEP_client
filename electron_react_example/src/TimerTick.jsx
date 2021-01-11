import React from 'react';

const TimerTick = () => {
  return <div>{new Date().toLocaleTimeString()}</div>;
};

export default TimerTick;
