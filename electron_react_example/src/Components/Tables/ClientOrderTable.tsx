import React from 'react';
import { Table } from 'react-bootstrap';

const ClientOrderTable = (props) => {
  let data401 = JSON.parse(props.proc401);
  let data411 = JSON.parse(props.proc411);
  let data421 = JSON.parse(props.proc421);
  let data431 = JSON.parse(props.proc431);
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
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>OrdNo</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>MAX</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>IntCnt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>401</td>
          <td>{data401['procStatus']}</td>
          <td>{data401['netStatus']}</td>
          <td>?</td>
          <td>?</td>
          <td>{data401['interfaceCnt']}</td>
        </tr>
        <tr>
          <td>411</td>
          <td>{data411['procStatus']}</td>
          <td>{data411['netStatus']}</td>
          <td>?</td>
          <td>?</td>
          <td>{data411['interfaceCnt']}</td>
        </tr>
        <tr>
          <td>421</td>
          <td>{data421['procStatus']}</td>
          <td>{data421['netStatus']}</td>
          <td>?</td>
          <td>?</td>
          <td>{data421['interfaceCnt']}</td>
        </tr>
        <tr>
          <td>431</td>
          <td>{data431['procStatus']}</td>
          <td>{data431['netStatus']}</td>
          <td>?</td>
          <td>?</td>
          <td>{data431['interfaceCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ClientOrderTable;
