// @flow
import React, { useState, useEffect } from 'react';

import { Page } from 'tabler-react';

import { Button, Form, Row, Col } from 'react-bootstrap';

import C3Chart from 'react-c3js';

import SiteWrapper from './SiteWrapper.react';
import Test2 from '../Test2';
import Table_example from '../Components/Tables/Table_example';

import store from 'electron-store'

function ConnectInfo() {
  const [serverIp, setServerIp] = useState('localhost');
  const [udpPort, setUdpPort] = useState('13553');

  const savetoFile = () => {
    let ip_input = document.getElementById('formIp').value;
    if(ip_input =='')
    {
      ip_input = serverIp;
    }
    window.localStorage.setItem('ip', ip_input);

    let port_input = document.getElementById('formPort').value;
    if(port_input =='')
    {
      port_input = udpPort;
    }
    window.localStorage.setItem('port', port_input);

  };

  const loadfromFile = () => {
    document.getElementById('formIp').value = window.localStorage.getItem('ip');
    document.getElementById('formPort').value = window.localStorage.getItem('port');
  };

  useEffect( () => {
    if( window.localStorage.getItem('ip') == undefined)
    {
      console.log('ip empty');
      window.localStorage.setItem('ip', serverIp);
    }
    else{
      document.getElementById('formIp').value = window.localStorage.getItem('ip');
    }

    if( window.localStorage.getItem('port') == undefined)
    {
      console.log('port empty');
      window.localStorage.setItem('port',udpPort);
    }
    else{
      document.getElementById('formPort').value = window.localStorage.getItem('port');
    }
  }, []);

  return (
    <SiteWrapper>
      <Page.Content title="FEP 서버 주소 및 포트 설정">
        <Row >
          <Col xl={5} style={{borderRight: '2px solid'}}>
          <h1>UDP</h1>
          <Form>
          <Form.Group controlId="formIp" style={{ width: '80%' }}>
            <Form.Label>클라이언트 IP</Form.Label>
            <Form.Control type="ip" defaultValue={serverIp} />
          </Form.Group>

          <Form.Group controlId="formPort" style={{ width: '80%' }}>
            <Form.Label>Port(UDP)</Form.Label>
            <Form.Control defaultValue={udpPort} />
          </Form.Group>
          <Button style={{ width: '80%' }} variant="primary" onClick={savetoFile}>
            저장
          </Button>
          <br></br>
          <br></br>
          {/* <Button style={{ width: '80%' }} variant="primary" onClick={loadfromFile}>
            불러오기
          </Button> */}
          {/* <ButtonS
                  style={{ width: '100%', marginTop: '1vw' }}
                  variant="dark"
                  onClick={signUp}
                >
                  회원가입
                </ButtonS> */}
        </Form>
          </Col>
          <Col xl={1}>

          </Col>
          <Col xl={5}>
          <h1>TCP</h1>
          <Form>
          <Form.Group controlId="formIp_server" style={{ width: '80%' }}>
            <Form.Label>고속 FEP 서버 IP</Form.Label>
            <Form.Control type="ip" defaultValue={serverIp} />
          </Form.Group>

          <Form.Group controlId="formPort_server" style={{ width: '80%' }}>
            <Form.Label>Port(TCP)</Form.Label>
            <Form.Control defaultValue={udpPort} />
          </Form.Group>
          <Button style={{ width: '80%' }} variant="primary" onClick={savetoFile}>
            저장
          </Button>
          <br></br>
          <br></br>
          {/* <Button style={{ width: '80%' }} variant="primary" onClick={loadfromFile}>
            불러오기
          </Button> */}
          {/* <ButtonS
                  style={{ width: '100%', marginTop: '1vw' }}
                  variant="dark"
                  onClick={signUp}
                >
                  회원가입
                </ButtonS> */}
        </Form>
          </Col>
        </Row>

      </Page.Content>
    </SiteWrapper>
  );
}

export default ConnectInfo;
