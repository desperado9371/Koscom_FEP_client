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
import { freemem, totalmem } from 'os';

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
    '{ "market": "FO", "idx": 101, "procNo": 101, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 101, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc102, setProc102] = useState(
    '{ "market": "FO", "idx": 102, "procNo": 102, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 102, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc103, setProc103] = useState(
    '{ "market": "FO", "idx": 103, "procNo": 103, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 103, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc104, setProc104] = useState(
    '{ "market": "FO", "idx": 104, "procNo": 104, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 104, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc105, setProc105] = useState(
    '{ "market": "FO", "idx": 105, "procNo": 105, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 105, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc106, setProc106] = useState(
    '{ "market": "FO", "idx": 106, "procNo": 106, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 106, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc107, setProc107] = useState(
    '{ "market": "FO", "idx": 107, "procNo": 107, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 107, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc108, setProc108] = useState(
    '{ "market": "FO", "idx": 108, "procNo": 108, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 108, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );

  // 고객주문 - ClientOrderTable을 위한 state 정의
  const [proc401, setProc401] = useState(
    '{ "market": "FO", "idx": 401, "procNo": 401, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "LCP": { "procNo": 401, "interfaceCnt": 0, "leadTime": 0 }}'
  );
  const [proc411, setProc411] = useState(
    '{ "market": "FO", "idx": 411, "procNo": 411, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "LCP": { "procNo": 411, "interfaceCnt": 0, "leadTime": 0 }}'
  );
  const [proc421, setProc421] = useState(
    '{ "market": "FO", "idx": 421, "procNo": 421, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "LCP": { "procNo": 421, "interfaceCnt": 0, "leadTime": 0 }}'
  );
  const [proc431, setProc431] = useState(
    '{ "market": "FO", "idx": 431, "procNo": 431, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "LCP": { "procNo": 431, "interfaceCnt": 0, "leadTime": 0 }}'
  );

  // 고객체결 - ClientExecutionTable을 위한 state 정의
  const [proc405, setProc405] = useState(
    '{ "market": "FO", "idx": 405, "procNo": 405, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 405, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc415, setProc415] = useState(
    '{ "market": "FO", "idx": 415, "procNo": 415, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 415, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc425, setProc425] = useState(
    '{ "market": "FO", "idx": 425, "procNo": 425, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 425, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc435, setProc435] = useState(
    '{ "market": "FO", "idx": 435, "procNo": 435, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 435, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );

  // 거래소 주문 - KrxOrderTable을 위한 state 정의
  const [proc61, setProc61] = useState(
    '{ "market": "FO", "idx": 61, "procNo": 61, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 61, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc62, setProc62] = useState(
    '{ "market": "FO", "idx": 62, "procNo": 62, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 62, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc63, setProc63] = useState(
    '{ "market": "FO", "idx": 63, "procNo": 63, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 63, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc64, setProc64] = useState(
    '{ "market": "FO", "idx": 64, "procNo": 64, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 64, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );

  // 거래소 체결 - KrxExecutionTable을 위한 state 정의
  const [proc81, setProc81] = useState(
    '{ "market": "FO", "idx": 81, "procNo": 81, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 81, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0,"smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc82, setProc82] = useState(
    '{ "market": "FO", "idx": 82, "procNo": 82, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 82, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0,"smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc83, setProc83] = useState(
    '{ "market": "FO", "idx": 83, "procNo": 83, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 83, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0,"smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc84, setProc84] = useState(
    '{ "market": "FO", "idx": 84, "procNo": 84, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 84, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0,"smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );

  // 주문 분배 - OrderDistruibutionTable을 위한 state 정의
  const [proc301, setProc301] = useState(
    '{ "market": "FO", "idx": 302, "procNo": 302, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 302, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc302, setProc302] = useState(
    '{ "market": "FO", "idx": 302, "procNo": 302, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 302, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc303, setProc303] = useState(
    '{ "market": "FO", "idx": 302, "procNo": 302, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 302, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc304, setProc304] = useState(
    '{ "market": "FO", "idx": 302, "procNo": 302, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 302, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt":0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );

  // 체결 분배 - ExecutionDistributionTable을 위한 state 정의
  const [proc307, setProc307] = useState(
    '{ "market": "FO", "idx": 307, "procNo": 307, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 307, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc308, setProc308] = useState(
    '{ "market": "FO", "idx": 308, "procNo": 308, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 308, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );

  // 고객 체결 처리 - ClientExecutionProcess를 위한 state 정의
  const [proc441, setProc441] = useState(
    '{ "market": "FO", "idx": 441, "procNo": 441, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 441, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc442, setProc442] = useState(
    '{ "market": "FO", "idx": 442, "procNo": 442, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 442, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc443, setProc443] = useState(
    '{ "market": "FO", "idx": 443, "procNo": 443, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 443, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );
  const [proc444, setProc444] = useState(
    '{ "market": "FO", "idx": 444, "procNo": 444, "interfaceCnt": 0, "SmWrtCnt": 0, "SmSndCnt": 0, "StoreWrtCnt": 0, "StoreSndCnt": 0, "procStatus": 0, "connStatus": 0, "netStatus": 0, "lineStatus": 0, "logFlag": 0, "procGamsiFlag": 0, "encryptFlag": 0, "MCP": { "procNo": 444, "toWrite": 0, "fromRead": 0, "interfaceCnt": 0, "storeWrtCnt": 0, "storeSndCnt": 0, "smWrtCnt": 0, "smSndCnt": 0, "leadTime": 0 } }'
  );

  const [CPUUsage, setCPUUsage] = useState(0);
  const [MemTotal, setMemTotal] = useState(0);
  const [MemFree, setMemFree] = useState(0);
  const [Shmem, setShmem] = useState(0);


  var s = dgram.createSocket('udp4');

  s.on('message', function (message, rinfo) {
    let str_message = message.toString();
    let json_message = JSON.parse(str_message);

    if( json_message.hasOwnProperty('CPUUsage'))
    {
      console.log( json_message['CPUUsage']);
      setCPUUsage( parseFloat(json_message['CPUUsage']) );

      setMemTotal( parseInt( json_message['MemTotal']));

      setMemFree( parseInt( json_message['MemFree']));

      setShmem( parseInt( json_message['Shmem']));
    }

    if( json_message['market'] == 'FO')
    {
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
          K-LINK 선물 모니터링
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
                    CPUUsage > 80
                      ? 'danger'
                      : CPUUsage > 60
                      ? 'warning'
                      : 'success'
                  }
                  now={CPUUsage}
                  label={CPUUsage.toFixed(2) + '%'}
                />
                <ProgressBar variant="secondary" now={100 - CPUUsage} />
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
                    ( (MemTotal-MemFree) / MemTotal * 100 )> 80
                      ? 'danger'
                      : ( (MemTotal-MemFree) / MemTotal * 100 ) > 60
                      ? 'warning'
                      : 'success'
                  }
                  now={( (MemTotal-MemFree) / MemTotal * 100 )}
                  label={( (MemTotal-MemFree) / MemTotal * 100 ).toFixed(2) + '%'+'  <Shmem: '+Shmem+'Mb>'}
                />
                <ProgressBar variant="secondary" now={100 - ( (MemTotal-MemFree) / MemTotal * 100 )} />
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
