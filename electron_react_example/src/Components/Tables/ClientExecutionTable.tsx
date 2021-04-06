import React from 'react';
import { Table } from 'react-bootstrap';

const ClientExecutionTable = (props: { proc405: string; proc415: string; proc425: string; proc435: string; }) => {
  let data405 = JSON.parse(props.proc405);
  let data415 = JSON.parse(props.proc415);
  let data425 = JSON.parse(props.proc425);
  let data435 = JSON.parse(props.proc435);

  return (
    <Table
      striped
      bordered
      responsive
      hover
      size="sm"
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
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SSndCnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SWrtCnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SMSndCnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SMWrtCnt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>405</td>
          <td>{data405['procStatus']}</td>
          <td>{data405['netStatus']}</td>
          <td>{data405['MCP']['toWrite']}</td>
          <td>{data405['MCP']['fromRead']}</td>
          <td>{data405['MCP']['interfaceCnt']}</td>
          <td>{data405['MCP']['storeSndCnt']}</td>
          <td>{data405['MCP']['storeWrtCnt']}</td>
          <td>{data405['MCP']['smSndCnt']}</td>
          <td>{data405['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>415</td>
          <td>{data415['procStatus']}</td>
          <td>{data415['netStatus']}</td>
          <td>{data415['MCP']['toWrite']}</td>
          <td>{data415['MCP']['fromRead']}</td>
          <td>{data415['MCP']['interfaceCnt']}</td>
          <td>{data415['MCP']['storeSndCnt']}</td>
          <td>{data415['MCP']['storeWrtCnt']}</td>
          <td>{data415['MCP']['smSndCnt']}</td>
          <td>{data415['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>425</td>
          <td>{data425['procStatus']}</td>
          <td>{data425['netStatus']}</td>
          <td>{data425['MCP']['toWrite']}</td>
          <td>{data425['MCP']['fromRead']}</td>
          <td>{data425['MCP']['interfaceCnt']}</td>
          <td>{data425['MCP']['storeSndCnt']}</td>
          <td>{data425['MCP']['storeWrtCnt']}</td>
          <td>{data425['MCP']['smSndCnt']}</td>
          <td>{data425['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>435</td>
          <td>{data435['procStatus']}</td>
          <td>{data435['netStatus']}</td>
          <td>{data435['MCP']['toWrite']}</td>
          <td>{data435['MCP']['fromRead']}</td>
          <td>{data435['MCP']['interfaceCnt']}</td>
          <td>{data435['MCP']['storeSndCnt']}</td>
          <td>{data435['MCP']['storeWrtCnt']}</td>
          <td>{data435['MCP']['smSndCnt']}</td>
          <td>{data435['MCP']['smWrtCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ClientExecutionTable;
