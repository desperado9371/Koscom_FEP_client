import React from 'react';
import { Table } from 'react-bootstrap';

const ClientExecutionProcess = (props) => {
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
          <td>{data441['toWrite']}</td>
          <td>{data441['fromRead']}</td>
          <td>{data441['interfaceCnt']}</td>
          <td>{data441['storeSndCnt']}</td>
          <td>{data441['storeWrtCnt']}</td>
          <td>{data441['smSndCnt']}</td>
          <td>{data441['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>442</td>
          <td>{data442['procStatus']}</td>
          <td>{data442['toWrite']}</td>
          <td>{data442['fromRead']}</td>
          <td>{data442['interfaceCnt']}</td>
          <td>{data442['storeSndCnt']}</td>
          <td>{data442['storeWrtCnt']}</td>
          <td>{data442['smSndCnt']}</td>
          <td>{data442['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>443</td>
          <td>{data443['procStatus']}</td>
          <td>{data443['toWrite']}</td>
          <td>{data443['fromRead']}</td>
          <td>{data443['interfaceCnt']}</td>
          <td>{data443['storeSndCnt']}</td>
          <td>{data443['storeWrtCnt']}</td>
          <td>{data443['smSndCnt']}</td>
          <td>{data443['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>444</td>
          <td>{data444['procStatus']}</td>
          <td>{data444['toWrite']}</td>
          <td>{data444['fromRead']}</td>
          <td>{data444['interfaceCnt']}</td>
          <td>{data444['storeSndCnt']}</td>
          <td>{data444['storeWrtCnt']}</td>
          <td>{data444['smSndCnt']}</td>
          <td>{data444['smWrtCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ClientExecutionProcess;
