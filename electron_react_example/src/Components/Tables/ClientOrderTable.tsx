import React from 'react';
import { Table } from 'react-bootstrap';

const ClientOrderTable = () => {
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
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>10000</td>
          <td>0</td>
        </tr>
        <tr>
          <td>411</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>10000</td>
          <td>1</td>
        </tr>
        <tr style={{ backgroundColor: 'red' }}>
          <td>421</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>10000</td>
          <td>1</td>
        </tr>
        <tr>
          <td>431</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>10000</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ClientOrderTable;
