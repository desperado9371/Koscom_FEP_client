import React from 'react';
import { Table } from 'react-bootstrap';

const ClientExecutionProcess = (props: { proc441: string; proc442: string; proc443: string; proc444: string; }) => {
  let data441 = JSON.parse(props.proc441);
  let data442 = JSON.parse(props.proc442);
  let data443 = JSON.parse(props.proc443);
  let data444 = JSON.parse(props.proc444);

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
          <td>441</td>
          <td>{data441['procStatus']}</td>
          <td>{data441['MCP']['toWrite']}</td>
          <td>{data441['MCP']['fromRead']}</td>
          <td>{data441['MCP']['interfaceCnt']}</td>
          <td>{data441['MCP']['storeSndCnt']}</td>
          <td>{data441['MCP']['storeWrtCnt']}</td>
          <td>{data441['MCP']['smSndCnt']}</td>
          <td>{data441['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>442</td>
          <td>{data442['procStatus']}</td>
          <td>{data442['MCP']['toWrite']}</td>
          <td>{data442['MCP']['fromRead']}</td>
          <td>{data442['MCP']['interfaceCnt']}</td>
          <td>{data442['MCP']['storeSndCnt']}</td>
          <td>{data442['MCP']['storeWrtCnt']}</td>
          <td>{data442['MCP']['smSndCnt']}</td>
          <td>{data442['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>443</td>
          <td>{data443['procStatus']}</td>
          <td>{data443['MCP']['toWrite']}</td>
          <td>{data443['MCP']['fromRead']}</td>
          <td>{data443['MCP']['interfaceCnt']}</td>
          <td>{data443['MCP']['storeSndCnt']}</td>
          <td>{data443['MCP']['storeWrtCnt']}</td>
          <td>{data443['MCP']['smSndCnt']}</td>
          <td>{data443['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>444</td>
          <td>{data444['procStatus']}</td>
          <td>{data444['MCP']['toWrite']}</td>
          <td>{data444['MCP']['fromRead']}</td>
          <td>{data444['MCP']['interfaceCnt']}</td>
          <td>{data444['MCP']['storeSndCnt']}</td>
          <td>{data444['MCP']['storeWrtCnt']}</td>
          <td>{data444['MCP']['smSndCnt']}</td>
          <td>{data444['MCP']['smWrtCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ClientExecutionProcess;
