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
          <td>{data301['MCP']['toWrite']}</td>
          <td>{data301['MCP']['fromRead']}</td>
          <td>{data301['MCP']['interfaceCnt']}</td>
          <td>{data301['MCP']['storeSndCnt']}</td>
          <td>{data301['MCP']['storeWrtCnt']}</td>
          <td>{data301['MCP']['smSndCnt']}</td>
          <td>{data301['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>302</td>
          <td>{data302['procStatus']}</td>
          <td>{data302['MCP']['toWrite']}</td>
          <td>{data302['MCP']['fromRead']}</td>
          <td>{data302['MCP']['interfaceCnt']}</td>
          <td>{data302['MCP']['storeSndCnt']}</td>
          <td>{data302['MCP']['storeWrtCnt']}</td>
          <td>{data302['MCP']['smSndCnt']}</td>
          <td>{data302['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>303</td>
          <td>{data303['procStatus']}</td>
          <td>{data303['MCP']['toWrite']}</td>
          <td>{data303['MCP']['fromRead']}</td>
          <td>{data303['MCP']['interfaceCnt']}</td>
          <td>{data303['MCP']['storeSndCnt']}</td>
          <td>{data303['MCP']['storeWrtCnt']}</td>
          <td>{data303['MCP']['smSndCnt']}</td>
          <td>{data303['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>304</td>
          <td>{data304['procStatus']}</td>
          <td>{data304['MCP']['toWrite']}</td>
          <td>{data304['MCP']['fromRead']}</td>
          <td>{data304['MCP']['interfaceCnt']}</td>
          <td>{data304['MCP']['storeSndCnt']}</td>
          <td>{data304['MCP']['storeWrtCnt']}</td>
          <td>{data304['MCP']['smSndCnt']}</td>
          <td>{data304['MCP']['smWrtCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default OrderDistributionTable;
