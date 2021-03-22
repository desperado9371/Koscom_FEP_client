import React, { useState, useEffect } from 'react';
import dgram from 'dgram';
import { Row, Col, Button, ProgressBar, Card, Carousel } from 'react-bootstrap';
import Long_Table from '../Components/Tables/Long_Table';
import Mini_Table from '../Components/Tables/Mini_Table';
import MixChart from '../Components/MixChart';
import SearchForm from '../Components/SearchForm';
import Chart from 'react-google-charts';
import Timer from '../Components/Timer';
import Guage_chart from '../Components/Guage_chart';
import ClientOrderTable from '../Components/Tables/ClientOrderTable';
import ClientExecutionTable from '../Components/Tables/ClientExecutionTable';
import KrxOrderTable from '../Components/Tables/KrxOrderTable';
import KrxExecutionTable from '../Components/Tables/KrxExecutionTable';
import OrderDistributionTable from '../Components/Tables/OrderDistributionTable';
import ExecutionDistributionTable from '../Components/Tables/ExecutionDistributionTable';
import LedgerDefinitionTable from '../Components/Tables/LedgerDefinitionTable';
import CrontabResultTable1 from '../Components/Tables/CrontabResultTable1';
import CrontabResultTable2 from '../Components/Tables/CrontabResultTable2';
import ClientExecutionProcess from '../Components/Tables/ClientExecutionProcess';

const Monitoring_ndstk = () => {
  // const [resources, SetResource] = useState([40, 80, 50]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetResource([
  //       resources[0] + (Math.random() - 0.42) * 10,
  //       resources[1] + (Math.random() - 0.48) * 10,
  //       resources[2] + (Math.random() - 0.42) * 10,
  //     ]);
  //   }, 1000);
  // });

  const connectUDP = () => {
    console.log('connecting');
    s.bind({
      address: window.localStorage.getItem('ip'),
      port: parseInt(window.localStorage.getItem('port')),
    });
  };

  const resources = [40, 60, 80];

  const [ip, setIp] = useState('localhost');
  const [port, setPort] = useState(13553);

  useEffect( () => {
    setIp(window.localStorage.getItem('ip'));
    setPort(parseInt(window.localStorage.getItem('port')));
    connectUDP();
  }, []);

  // 업무계송신 - LedgerDefinitionTable을 위한 state 정의
  const [proc101, setProc101] = useState(
    '{ "procNo":101, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc102, setProc102] = useState(
    '{ "procNo":102, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc103, setProc103] = useState(
    '{ "procNo":103, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc104, setProc104] = useState(
    '{ "procNo":104, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc105, setProc105] = useState(
    '{ "procNo":105, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc106, setProc106] = useState(
    '{ "procNo":106, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc107, setProc107] = useState(
    '{ "procNo":107, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc108, setProc108] = useState(
    '{ "procNo":108, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );

  // 고객주문 - ClientOrderTable을 위한 state 정의
  const [proc401, setProc401] = useState(
    '{ "procNo":401, "procStatus":0, "netStatus":0, "OrdNo":0, "MAX":0, "interfaceCnt":0 }'
  );
  const [proc411, setProc411] = useState(
    '{ "procNo":411, "procStatus":0, "netStatus":0, "OrdNo":0, "MAX":0, "interfaceCnt":0 }'
  );
  const [proc421, setProc421] = useState(
    '{ "procNo":421, "procStatus":0, "netStatus":0, "OrdNo":0, "MAX":0, "interfaceCnt":0 }'
  );
  const [proc431, setProc431] = useState(
    '{ "procNo":431, "procStatus":0, "netStatus":0, "OrdNo":0, "MAX":0, "interfaceCnt":0 }'
  );

  // 고객체결 - ClientExecutionTable을 위한 state 정의
  const [proc405, setProc405] = useState(
    '{ "procNo":405, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc415, setProc415] = useState(
    '{ "procNo":415, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc425, setProc425] = useState(
    '{ "procNo":425, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc435, setProc435] = useState(
    '{ "procNo":435, "procStatus":0, "netStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );

  // 거래소 주문 - KrxOrderTable을 위한 state 정의
  const [proc61, setProc61] = useState(
    '{ "procNo":61, "procStatus":0, "netStatus":0, "lineStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc62, setProc63] = useState(
    '{ "procNo":62, "procStatus":0, "netStatus":0, "lineStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc63, setProc64] = useState(
    '{ "procNo":63, "procStatus":0, "netStatus":0, "lineStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc64, setProc62] = useState(
    '{ "procNo":64, "procStatus":0, "netStatus":0, "lineStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );

  // 거래소 체결 - KrxExecutionTable을 위한 state 정의
  const [proc81, setProc81] = useState(
    '{ "procNo":81, "procStatus":0, "netStatus":0, "lineStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc82, setProc82] = useState(
    '{ "procNo":82, "procStatus":0, "netStatus":0, "lineStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc83, setProc83] = useState(
    '{ "procNo":83, "procStatus":0, "netStatus":0, "lineStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc84, setProc84] = useState(
    '{ "procNo":84, "procStatus":0, "netStatus":0, "lineStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );

  // 주문 분배 - OrderDistruibutionTable을 위한 state 정의
  const [proc301, setProc301] = useState(
    '{ "procNo":301, "procStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc302, setProc302] = useState(
    '{ "procNo":302, "procStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc303, setProc303] = useState(
    '{ "procNo":303, "procStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc304, setProc304] = useState(
    '{ "procNo":304, "procStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );

  // 체결 분배 - ExecutionDistributionTable을 위한 state 정의
  const [proc307, setProc307] = useState(
    '{ "procNo":307, "procStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc308, setProc308] = useState(
    '{ "procNo":308, "procStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );

  // 고객 체결 처리 - ClientExecutionProcess를 위한 state 정의
  const [proc441, setProc441] = useState(
    '{ "procNo":441, "procStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc442, setProc442] = useState(
    '{ "procNo":442, "procStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc443, setProc443] = useState(
    '{ "procNo":443, "procStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );
  const [proc444, setProc444] = useState(
    '{ "procNo":444, "procStatus":0, "toWrite":0, "fromRead":0, "interfaceCnt":0, "storeSndCnt":0, "storeWrtCnt":0, "smSndCnt":0, "smWrtCnt":0 }'
  );

  var s = dgram.createSocket('udp4');

  s.on('message', function (message, rinfo) {
    let str_message = message.toString();
    let json_message = JSON.parse(str_message);
    switch (json_message['procNo']) {
      //ledgerDefinition
      case 101:
        setProc101(str_message);
        break;
      case 102:
        setProc102(str_message);
        break;
      case 103:
        setProc103(str_message);
        break;
      case 104:
        setProc104(str_message);
        break;
      case 105:
        setProc105(str_message);
        break;
      case 106:
        setProc106(str_message);
        break;
      case 107:
        setProc107(str_message);
        break;
      case 108:
        setProc108(str_message);
        break;

      //ClientOrder
      case 401:
        setProc401(str_message);
        break;
      case 411:
        setProc411(str_message);
        break;
      case 421:
        setProc421(str_message);
        break;
      case 431:
        setProc431(str_message);
        break;

      //ClientExecution
      case 405:
        setProc405(str_message);
        break;
      case 415:
        setProc415(str_message);
        break;
      case 425:
        setProc425(str_message);
        break;
      case 435:
        setProc435(str_message);
        break;

      //KrxOrder
      case 61:
        setProc61(str_message);
        break;
      case 62:
        setProc62(str_message);
        break;
      case 63:
        setProc63(str_message);
        break;
      case 64:
        setProc64(str_message);
        break;

      //KrxExecution
      case 81:
        setProc81(str_message);
        break;
      case 82:
        setProc82(str_message);
        break;
      case 83:
        setProc83(str_message);
        break;
      case 84:
        setProc84(str_message);
        break;

      //OrderDistribution
      case 301:
        setProc301(str_message);
        break;
      case 302:
        setProc302(str_message);
        break;
      case 303:
        setProc303(str_message);
        break;
      case 304:
        setProc304(str_message);
        break;

      //ExecutionDistribution
      case 307:
        setProc307(str_message);
        break;
      case 308:
        setProc308(str_message);
        break;

      //ClientExecutionProcess
      case 441:
        setProc441(str_message);
        break;
      case 442:
        setProc442(str_message);
        break;
      case 443:
        setProc443(str_message);
        break;
      case 444:
        setProc444(str_message);
        break;
    }
    // console.log('procNo: ' + json_message['procNo']);
    // console.log(json_message);
  });
  s.on('error', (err) => {
    console.log(err);
    window.location.reload(false);
  });

  return (
    <div className="monit" style={{ textShadow: '2px 2px 5px black' }}>
      <Row style={{ backgroundColor: '#444444' }}>
        <Col className="align-self-center" sm={1}>
          <Button
            className="bk_btn"
            variant="secondary"
            style={{ fontSize: '40px' }}
            href="#/Home"
          >
            {'<'}
          </Button>
        </Col>
        <Col
          className="monit_title align-self-center text-left"
          style={{ fontSize: '3.2vw', textShadow: '3px 2px 5px black' }}
          sm={7}
        >
          K-LINK 현물 모니터링
          <Button variant="primary" onClick={connectUDP}>
            연결
          </Button>
        </Col>
        <Col className="align-self-center center-block text-right" sm={4}>
          <Timer />
        </Col>
      </Row>

      <Row
        className=" mx-5 mt-1"
        style={{ fontSize: '1vw', fontWeight: 'bolder' }}
      >
        <Col xs={6} style={{ border: '2px solid grey', borderRadius: '5px' }}>
          {/* <Col style={{ justifyContent: 'center', marginLeft: '3vw' }} xs={12}>
            <Guage_chart />
          </Col> */}
          <Row style={{ marginTop: '0.7vw' }}>
            <Col className="text-center" xs={2}>
              CPU
            </Col>
            <Col xs={10}>
              <ProgressBar
                style={{
                  height: '1.5vw',
                  fontSize: '1vw',
                  fontWeight: 'bolder',
                  textShadow: '2px 2px 5px black',
                  borderRadius: '25px',
                }}
              >
                <ProgressBar
                  animated
                  variant={
                    resources[0] > 80
                      ? 'danger'
                      : resources[0] > 60
                      ? 'warning'
                      : 'success'
                  }
                  now={resources[0]}
                  label={resources[0].toFixed(2) + '%'}
                />
                <ProgressBar variant="secondary" now={100 - resources[0]} />
              </ProgressBar>
            </Col>
          </Row>
          <Row style={{ marginTop: '1.5vw' }}>
            <Col className="text-center" xs={2}>
              Memory
            </Col>
            <Col xs={10}>
              <ProgressBar
                style={{
                  height: '1.5vw',
                  fontSize: '1vw',
                  fontWeight: 'bolder',
                  textShadow: '2px 2px 5px black',
                  borderRadius: '25px',
                }}
              >
                <ProgressBar
                  animated
                  variant={
                    resources[1] > 80
                      ? 'danger'
                      : resources[1] > 60
                      ? 'warning'
                      : 'success'
                  }
                  now={resources[1]}
                  label={resources[1].toFixed(2) + '%'}
                />
                <ProgressBar variant="secondary" now={100 - resources[1]} />
              </ProgressBar>
            </Col>
          </Row>
          <Row style={{ marginTop: '1.5vw' }}>
            <Col className="text-center" xs={2}>
              Disk
            </Col>
            <Col xs={10}>
              <ProgressBar
                style={{
                  height: '1.5vw',
                  fontSize: '1vw',
                  fontWeight: 'bolder',
                  textShadow: '2px 2px 5px black',
                  borderRadius: '25px',
                }}
              >
                <ProgressBar
                  animated
                  variant={
                    resources[2] > 80
                      ? 'danger'
                      : resources[2] > 60
                      ? 'warning'
                      : 'success'
                  }
                  now={resources[2]}
                  label={resources[2].toFixed(2) + '%'}
                />
                <ProgressBar variant="secondary" now={100 - resources[2]} />
              </ProgressBar>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6} style={{ borderTop: '2px solid grey' }}>
              고객 체결 처리
              <ClientExecutionProcess
                proc441={proc441}
                proc442={proc442}
                proc443={proc443}
                proc444={proc444}
              />
            </Col>
            <Col
              xs={6}
              style={{
                border: '2px solid grey',
              }}
            >
              준비 작업
              <Carousel indicators={false} controls={false}>
                <Carousel.Item interval={3000}>
                  <CrontabResultTable1 />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <CrontabResultTable2 />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        className="mt-1 mx-5"
        style={{ fontSize: '1vw', fontWeight: 'bolder', height: '20vw' }}
      >
        <Col
          sm={3}
          style={{
            borderLeft: '2px solid grey',
            borderRight: '2px solid grey',
            borderBottom: '2px solid grey',
          }}
        >
          고객주문
          <ClientOrderTable
            proc401={proc401}
            proc411={proc411}
            proc421={proc421}
            proc431={proc431}
          />
          고객체결
          <ClientExecutionTable
            proc405={proc405}
            proc415={proc415}
            proc425={proc425}
            proc435={proc435}
          />
        </Col>
        <Col
          sm={3}
          style={{
            borderRight: '2px solid grey',
            borderBottom: '2px solid grey',
          }}
        >
          거래소 주문
          <KrxOrderTable
            proc61={proc61}
            proc62={proc62}
            proc63={proc63}
            proc64={proc64}
          />
          거래소 체결
          <KrxExecutionTable
            proc81={proc81}
            proc82={proc82}
            proc83={proc83}
            proc84={proc84}
          />
        </Col>
        <Col
          sm={6}
          style={{
            borderBottom: '2px solid grey',
            borderRight: '2px solid grey',
          }}
        >
          <Row>
            <Col sm={6}>
              주문 분배
              <OrderDistributionTable
                proc301={proc301}
                proc302={proc302}
                proc303={proc303}
                proc304={proc304}
              />
              체결 분배
              <ExecutionDistributionTable proc307={proc307} proc308={proc308} />
            </Col>

            <Col sm={6}>
              업무계 송신
              <LedgerDefinitionTable
                proc101={proc101}
                proc102={proc102}
                proc103={proc103}
                proc104={proc104}
                proc105={proc105}
                proc106={proc106}
                proc107={proc107}
                proc108={proc108}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        className="mt-1 mx-5"
        style={{ fontSize: '1vw', fontWeight: 'bolder', marginTop: '0px' }}
      >
        <Col
          sm={6}
          style={{
            borderBottom: '2px solid grey',
            borderRight: '2px solid grey',
            borderLeft: '2px solid grey',
          }}
        >
          <div
            className="miniChart"
            style={{ marginLeft: '1vw', justifyContent: 'center' }}
          >
            <MixChart />
          </div>
        </Col>
        <Col
          sm={6}
          style={{
            borderBottom: '2px solid grey',
            borderRight: '2px solid grey',
          }}
        >
          <SearchForm />
        </Col>
      </Row>
    </div>
  );
};

export default Monitoring_ndstk;
