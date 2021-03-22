import React from 'react';
import { Table } from 'react-bootstrap';

const OrderDistributionTable = (props) => {
  let data301 = JSON.parse(props.proc301);
  let data302 = JSON.parse(props.proc302);
  let data303 = JSON.parse(props.proc303);
  let data304 = JSON.parse(props.proc304);
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
          <td>301</td>
          <td>{data301['procStatus']}</td>
          <td>{data301['toWrite']}</td>
          <td>{data301['fromRead']}</td>
          <td>{data301['interfaceCnt']}</td>
          <td>{data301['storeSndCnt']}</td>
          <td>{data301['storeWrtCnt']}</td>
          <td>{data301['smSndCnt']}</td>
          <td>{data301['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>302</td>
          <td>{data302['procStatus']}</td>
          <td>{data302['toWrite']}</td>
          <td>{data302['fromRead']}</td>
          <td>{data302['interfaceCnt']}</td>
          <td>{data302['storeSndCnt']}</td>
          <td>{data302['storeWrtCnt']}</td>
          <td>{data302['smSndCnt']}</td>
          <td>{data302['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>303</td>
          <td>{data303['procStatus']}</td>
          <td>{data303['toWrite']}</td>
          <td>{data303['fromRead']}</td>
          <td>{data303['interfaceCnt']}</td>
          <td>{data303['storeSndCnt']}</td>
          <td>{data303['storeWrtCnt']}</td>
          <td>{data303['smSndCnt']}</td>
          <td>{data303['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>304</td>
          <td>{data304['procStatus']}</td>
          <td>{data304['toWrite']}</td>
          <td>{data304['fromRead']}</td>
          <td>{data304['interfaceCnt']}</td>
          <td>{data304['storeSndCnt']}</td>
          <td>{data304['storeWrtCnt']}</td>
          <td>{data304['smSndCnt']}</td>
          <td>{data304['smWrtCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default OrderDistributionTable;
