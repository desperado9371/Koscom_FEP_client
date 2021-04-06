import React from 'react';
import { Table } from 'react-bootstrap';

const KrxExecutionTable = (props) => {
  let data81 = JSON.parse(props.proc81);
  let data82 = JSON.parse(props.proc82);
  let data83 = JSON.parse(props.proc83);
  let data84 = JSON.parse(props.proc84);

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
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>Li</th>
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
          <td>81</td>
          <td>{data81['procStatus']}</td>
          <td>{data81['netStatus']}</td>
          <td>{data81['lineStatus']}</td>
          <td>{data81['MCP']['toWrite']}</td>
          <td>{data81['MCP']['fromRead']}</td>
          <td>{data81['MCP']['interfaceCnt']}</td>
          <td>{data81['MCP']['storeSndCnt']}</td>
          <td>{data81['MCP']['storeWrtCnt']}</td>
          <td>{data81['MCP']['smSndCnt']}</td>
          <td>{data81['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>82</td>
          <td>{data82['procStatus']}</td>
          <td>{data82['netStatus']}</td>
          <td>{data82['lineStatus']}</td>
          <td>{data82['MCP']['toWrite']}</td>
          <td>{data82['MCP']['fromRead']}</td>
          <td>{data82['MCP']['interfaceCnt']}</td>
          <td>{data82['MCP']['storeSndCnt']}</td>
          <td>{data82['MCP']['storeWrtCnt']}</td>
          <td>{data82['MCP']['smSndCnt']}</td>
          <td>{data82['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>83</td>
          <td>{data83['procStatus']}</td>
          <td>{data83['netStatus']}</td>
          <td>{data83['lineStatus']}</td>
          <td>{data83['MCP']['toWrite']}</td>
          <td>{data83['MCP']['fromRead']}</td>
          <td>{data83['MCP']['interfaceCnt']}</td>
          <td>{data83['MCP']['storeSndCnt']}</td>
          <td>{data83['MCP']['storeWrtCnt']}</td>
          <td>{data83['MCP']['smSndCnt']}</td>
          <td>{data83['MCP']['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>84</td>
          <td>{data84['procStatus']}</td>
          <td>{data84['netStatus']}</td>
          <td>{data84['lineStatus']}</td>
          <td>{data84['MCP']['toWrite']}</td>
          <td>{data84['MCP']['fromRead']}</td>
          <td>{data84['MCP']['interfaceCnt']}</td>
          <td>{data84['MCP']['storeSndCnt']}</td>
          <td>{data84['MCP']['storeWrtCnt']}</td>
          <td>{data84['MCP']['smSndCnt']}</td>
          <td>{data84['MCP']['smWrtCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default KrxExecutionTable;
