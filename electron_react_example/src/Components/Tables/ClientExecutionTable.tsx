import React from 'react';
import { Table } from 'react-bootstrap';

const ClientExecutionTable = (props) => {
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
          <td>{data405['toWrite']}</td>
          <td>{data405['fromRead']}</td>
          <td>{data405['interfaceCnt']}</td>
          <td>{data405['storeSndCnt']}</td>
          <td>{data405['storeWrtCnt']}</td>
          <td>{data405['smSndCnt']}</td>
          <td>{data405['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>415</td>
          <td>{data415['procStatus']}</td>
          <td>{data415['netStatus']}</td>
          <td>{data415['toWrite']}</td>
          <td>{data415['fromRead']}</td>
          <td>{data415['interfaceCnt']}</td>
          <td>{data415['storeSndCnt']}</td>
          <td>{data415['storeWrtCnt']}</td>
          <td>{data415['smSndCnt']}</td>
          <td>{data415['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>425</td>
          <td>{data425['procStatus']}</td>
          <td>{data425['netStatus']}</td>
          <td>{data425['toWrite']}</td>
          <td>{data425['fromRead']}</td>
          <td>{data425['interfaceCnt']}</td>
          <td>{data425['storeSndCnt']}</td>
          <td>{data425['storeWrtCnt']}</td>
          <td>{data425['smSndCnt']}</td>
          <td>{data425['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>435</td>
          <td>{data435['procStatus']}</td>
          <td>{data435['netStatus']}</td>
          <td>{data435['toWrite']}</td>
          <td>{data435['fromRead']}</td>
          <td>{data435['interfaceCnt']}</td>
          <td>{data435['storeSndCnt']}</td>
          <td>{data435['storeWrtCnt']}</td>
          <td>{data435['smSndCnt']}</td>
          <td>{data435['smWrtCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ClientExecutionTable;
