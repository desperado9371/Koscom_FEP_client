import React, { useEffect, useState } from 'react';
import dgram from 'dgram';

const UdpTest = () => {
  const [msg, SetMsg] = useState('hello');

  var s = dgram.createSocket('udp4');

  let message: string;

  s.on('message', function (msg, rinfo) {
    message = msg.toString();
    console.log('I got this message: ' + msg.toString());
  });
  s.on('error', (err) => {
    console.log(err);
    s.close();
  });
  s.bind(12345);
  useEffect(() => {
    setTimeout(() => {
      SetMsg(message);
      s.close();
    }, 1000);
  });

  return (
    <>
      <h3>{msg}</h3>
    </>
  );
};

export default UdpTest;
