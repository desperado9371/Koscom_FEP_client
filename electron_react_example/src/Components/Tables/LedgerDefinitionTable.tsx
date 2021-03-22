import React from 'react';
import { Table } from 'react-bootstrap';

const LedgerDefinitionTable = (props) => {
  let data101 = JSON.parse(props.proc101);
  let data102 = JSON.parse(props.proc102);
  let data103 = JSON.parse(props.proc103);
  let data104 = JSON.parse(props.proc104);
  let data105 = JSON.parse(props.proc105);
  let data106 = JSON.parse(props.proc106);
  let data107 = JSON.parse(props.proc107);
  let data108 = JSON.parse(props.proc108);

  return (
    <Table
      striped
      bordered
      responsive="md"
      hover
      size="md"
      variant="dark"
      style={{ fontSize: '0.6vw', width: '100%' }}
    >
      <thead>
        <tr>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>No</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>P</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>N</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>T</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>F</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>IntCnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SsndCnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SWrtcnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SMsndCnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SMWrtcnt</th>
        </tr>
      </thead>
      <tbody>
        <tr
          style={{
            backgroundColor: data101['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>101</td>
          <td>{data101['procStatus']}</td>
          <td>{data101['netStatus']}</td>
          <td>{data101['toWrite']}</td>
          <td>{data101['fromRead']}</td>
          <td>{data101['interfaceCnt']}</td>
          <td>{data101['storeSndCnt']}</td>
          <td>{data101['storeWrtCnt']}</td>
          <td>{data101['smSndCnt']}</td>
          <td>{data101['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data102['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>102</td>
          <td>{data102['procStatus']}</td>
          <td>{data102['netStatus']}</td>
          <td>{data102['toWrite']}</td>
          <td>{data102['fromRead']}</td>
          <td>{data102['interfaceCnt']}</td>
          <td>{data102['storeSndCnt']}</td>
          <td>{data102['storeWrtCnt']}</td>
          <td>{data102['smSndCnt']}</td>
          <td>{data102['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data103['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>103</td>
          <td>{data103['procStatus']}</td>
          <td>{data103['netStatus']}</td>
          <td>{data103['toWrite']}</td>
          <td>{data103['fromRead']}</td>
          <td>{data103['interfaceCnt']}</td>
          <td>{data103['storeSndCnt']}</td>
          <td>{data103['storeWrtCnt']}</td>
          <td>{data103['smSndCnt']}</td>
          <td>{data103['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data104['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>104</td>
          <td>{data104['procStatus']}</td>
          <td>{data104['netStatus']}</td>
          <td>{data104['toWrite']}</td>
          <td>{data104['fromRead']}</td>
          <td>{data104['interfaceCnt']}</td>
          <td>{data104['storeSndCnt']}</td>
          <td>{data104['storeWrtCnt']}</td>
          <td>{data104['smSndCnt']}</td>
          <td>{data104['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data105['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>105</td>
          <td>{data105['procStatus']}</td>
          <td>{data105['netStatus']}</td>
          <td>{data105['toWrite']}</td>
          <td>{data105['fromRead']}</td>
          <td>{data105['interfaceCnt']}</td>
          <td>{data105['storeSndCnt']}</td>
          <td>{data105['storeWrtCnt']}</td>
          <td>{data105['smSndCnt']}</td>
          <td>{data105['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data106['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>106</td>
          <td>{data106['procStatus']}</td>
          <td>{data106['netStatus']}</td>
          <td>{data106['toWrite']}</td>
          <td>{data106['fromRead']}</td>
          <td>{data106['interfaceCnt']}</td>
          <td>{data106['storeSndCnt']}</td>
          <td>{data106['storeWrtCnt']}</td>
          <td>{data106['smSndCnt']}</td>
          <td>{data106['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data107['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>107</td>
          <td>{data107['procStatus']}</td>
          <td>{data107['netStatus']}</td>
          <td>{data107['toWrite']}</td>
          <td>{data107['fromRead']}</td>
          <td>{data107['interfaceCnt']}</td>
          <td>{data107['storeSndCnt']}</td>
          <td>{data107['storeWrtCnt']}</td>
          <td>{data107['smSndCnt']}</td>
          <td>{data107['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data108['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>108</td>
          <td>{data108['procStatus']}</td>
          <td>{data108['netStatus']}</td>
          <td>{data108['toWrite']}</td>
          <td>{data108['fromRead']}</td>
          <td>{data108['interfaceCnt']}</td>
          <td>{data108['storeSndCnt']}</td>
          <td>{data108['storeWrtCnt']}</td>
          <td>{data108['smSndCnt']}</td>
          <td>{data108['smWrtCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default LedgerDefinitionTable;
