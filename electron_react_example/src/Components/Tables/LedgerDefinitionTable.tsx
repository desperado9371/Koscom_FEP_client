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
          <td>{data101['MCP']['toWrite']}</td>
          <td>{data101['MCP']['fromRead']}</td>
          <td>{data101['MCP']['interfaceCnt']}</td>
          <td>{data101['MCP']['storeSndCnt']}</td>
          <td>{data101['MCP']['storeWrtCnt']}</td>
          <td>{data101['MCP']['smSndCnt']}</td>
          <td>{data101['MCP']['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data102['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>102</td>
          <td>{data102['procStatus']}</td>
          <td>{data102['netStatus']}</td>
          <td>{data102['MCP']['toWrite']}</td>
          <td>{data102['MCP']['fromRead']}</td>
          <td>{data102['MCP']['interfaceCnt']}</td>
          <td>{data102['MCP']['storeSndCnt']}</td>
          <td>{data102['MCP']['storeWrtCnt']}</td>
          <td>{data102['MCP']['smSndCnt']}</td>
          <td>{data102['MCP']['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data103['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>103</td>
          <td>{data103['procStatus']}</td>
          <td>{data103['netStatus']}</td>
          <td>{data103['MCP']['toWrite']}</td>
          <td>{data103['MCP']['fromRead']}</td>
          <td>{data103['MCP']['interfaceCnt']}</td>
          <td>{data103['MCP']['storeSndCnt']}</td>
          <td>{data103['MCP']['storeWrtCnt']}</td>
          <td>{data103['MCP']['smSndCnt']}</td>
          <td>{data103['MCP']['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data104['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>104</td>
          <td>{data104['procStatus']}</td>
          <td>{data104['netStatus']}</td>
          <td>{data104['MCP']['toWrite']}</td>
          <td>{data104['MCP']['fromRead']}</td>
          <td>{data104['MCP']['interfaceCnt']}</td>
          <td>{data104['MCP']['storeSndCnt']}</td>
          <td>{data104['MCP']['storeWrtCnt']}</td>
          <td>{data104['MCP']['smSndCnt']}</td>
          <td>{data104['MCP']['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data105['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>105</td>
          <td>{data105['procStatus']}</td>
          <td>{data105['netStatus']}</td>
          <td>{data105['MCP']['toWrite']}</td>
          <td>{data105['MCP']['fromRead']}</td>
          <td>{data105['MCP']['interfaceCnt']}</td>
          <td>{data105['MCP']['storeSndCnt']}</td>
          <td>{data105['MCP']['storeWrtCnt']}</td>
          <td>{data105['MCP']['smSndCnt']}</td>
          <td>{data105['MCP']['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data106['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>106</td>
          <td>{data106['procStatus']}</td>
          <td>{data106['netStatus']}</td>
          <td>{data106['MCP']['toWrite']}</td>
          <td>{data106['MCP']['fromRead']}</td>
          <td>{data106['MCP']['interfaceCnt']}</td>
          <td>{data106['MCP']['storeSndCnt']}</td>
          <td>{data106['MCP']['storeWrtCnt']}</td>
          <td>{data106['MCP']['smSndCnt']}</td>
          <td>{data106['MCP']['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data107['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>107</td>
          <td>{data107['procStatus']}</td>
          <td>{data107['netStatus']}</td>
          <td>{data107['MCP']['toWrite']}</td>
          <td>{data107['MCP']['fromRead']}</td>
          <td>{data107['MCP']['interfaceCnt']}</td>
          <td>{data107['MCP']['storeSndCnt']}</td>
          <td>{data107['MCP']['storeWrtCnt']}</td>
          <td>{data107['MCP']['smSndCnt']}</td>
          <td>{data107['MCP']['smWrtCnt']}</td>
        </tr>
        <tr
          style={{
            backgroundColor: data108['procStatus'] > 8 ? 'red' : '',
          }}
        >
          <td>108</td>
          <td>{data108['procStatus']}</td>
          <td>{data108['netStatus']}</td>
          <td>{data108['MCP']['toWrite']}</td>
          <td>{data108['MCP']['fromRead']}</td>
          <td>{data108['MCP']['interfaceCnt']}</td>
          <td>{data108['MCP']['storeSndCnt']}</td>
          <td>{data108['MCP']['storeWrtCnt']}</td>
          <td>{data108['MCP']['smSndCnt']}</td>
          <td>{data108['MCP']['smWrtCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default LedgerDefinitionTable;
