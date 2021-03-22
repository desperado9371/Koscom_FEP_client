import React, { useEffect, useState } from 'react';
import dgram from 'dgram';
import { Button, Form } from 'react-bootstrap';
import PropTableTest from '../Components/Tables/PropTableTest';
import { constants } from 'buffer';
import net from 'net';

const UdpTest = () => {
  const [msg, SetMsg] = useState('');
  const [isUdpConnected, SetIsUdpConnected] = useState(false);
  const [response, SetResonse] = useState('');

  const [proc1, setProc1] = useState('{ "idx":0, "procNo":0, "money":0 }');
  const [proc2, setProc2] = useState('{ "idx":1, "procNo":1, "money":11 }');
  const [proc3, setProc3] = useState('{ "idx":2, "procNo":2, "money":22 }');
  const [proc4, setProc4] = useState('{ "idx":3, "procNo":3, "money":33 }');

  var s = dgram.createSocket('udp4');
  s.on('message', function (message, rinfo) {
    let str_message = message.toString();
    let json_message = JSON.parse(str_message);
    if (json_message['idx'] == 0) {
      setProc1(str_message);
    } else if (json_message['idx'] == 1) {
      setProc2(str_message);
    } else if (json_message['idx'] == 2) {
      setProc3(str_message);
    } else if (json_message['idx'] == 3) {
      setProc4(str_message);
    }

    console.log('idx: ' + json_message['idx']);
  });
  s.on('error', (err) => {
    console.log(err);
  });
  s.on('close', () => {
    console.log('close');
  });

  let message: string;

  const connectUDP = () => {
    s.bind({
      address: document.getElementById('ip_address').value,
      port: document.getElementById('port_num').value,
      exclusive: true,
    });
    SetIsUdpConnected(true);
  };

  const closeUDP = () => {
    window.location.reload(false);
  };

  const sendTCP = () => {
    let client = new net.Socket();
    const ip = document.getElementById('TCP_ip_address').value;
    const port = document.getElementById('TCP_port_num').value;
    const text = document.getElementById('TCP_text').value;
    client.connect(port, ip, () => {
      console.log('Connected');
      client.write(text);
    });
    client.on('data', function (data) {
      console.log('Received: ' + data);
      SetResonse('Server Response:   ' + data);
      client.destroy(); // kill client after server's response
    });

    client.on('close', function () {
      console.log('Connection closed');
    });

    client.on('error', function (ex) {
      console.log('handled error');
      console.log(ex);
      SetResonse('' + ex);
    });
  };
  return (
    <>
      <Button
        onClick={() => {
          location.href = '#/Home';
        }}
      >
        {'<'}
      </Button>
      <h1>UDP LISTEN Test</h1>
      <h3>
        Message: {proc1},{proc2},{proc3},{proc4}
      </h3>
      <Form.Group>
        <Form.Label>ip주소</Form.Label>
        <Form.Control
          type="text"
          id="ip_address"
          defaultValue="localhost"
          disabled={isUdpConnected}
        ></Form.Control>
        <Form.Label>포트번호UDP</Form.Label>
        <Form.Control
          type="number"
          id="port_num"
          disabled={isUdpConnected}
          defaultValue="13553"
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" disabled={isUdpConnected} onClick={connectUDP}>
        연결
      </Button>
      <Button variant="danger" onClick={closeUDP}>
        연결해제
      </Button>
      <PropTableTest proc1={proc1} proc2={proc2} proc3={proc3} proc4={proc4} />
      <br />
      <hr />
      <h1>TCP connection Test</h1>
      <Form.Group>
        <Form.Label>ip주소</Form.Label>
        <Form.Control
          type="text"
          id="TCP_ip_address"
          defaultValue="localhost"
        ></Form.Control>
        <Form.Label>포트번호TCP</Form.Label>
        <Form.Control
          type="number"
          id="TCP_port_num"
          defaultValue="12000"
        ></Form.Control>
        <Form.Label>전송 문구</Form.Label>
        <Form.Control
          type="text"
          id="TCP_text"
          defaultValue="say something"
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" onClick={sendTCP}>
        전송
      </Button>
      <br />
      <br />
      <h3>{response}</h3>
    </>
  );
};

export default UdpTest;
