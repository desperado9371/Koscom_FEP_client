import React from 'react';
import { Table } from 'react-bootstrap';

const ExecutionDistributionTable = (props) => {
  let data307 = JSON.parse(props.proc307);
  let data308 = JSON.parse(props.proc308);
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
          <td>307</td>
          <td>{data307['procStatus']}</td>
          <td>{data307['MCP']['toWrite']}</td>
          <td>{data307['MCP']['fromRead']}</td>
          <td>{data307['MCP']['interfaceCnt']}</td>
          <td>{data307['MCP']['storeSndCnt']}</td>
          <td>{data307['MCP']['storeWrtCnt']}</td>
          <td>{data307['MCP']['smSndCnt']}</td>
          <td>{data307['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>308</td>
          <td>{data308['procStatus']}</td>
          <td>{data308['MCP']['toWrite']}</td>
          <td>{data308['MCP']['fromRead']}</td>
          <td>{data308['MCP']['interfaceCnt']}</td>
          <td>{data308['MCP']['storeSndCnt']}</td>
          <td>{data308['MCP']['storeWrtCnt']}</td>
          <td>{data308['MCP']['smSndCnt']}</td>
          <td>{data308['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ExecutionDistributionTable;
