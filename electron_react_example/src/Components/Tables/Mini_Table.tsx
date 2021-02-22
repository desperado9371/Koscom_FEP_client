import React from 'react';
import { Table } from 'react-bootstrap';

const Mini_Table = () => {
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
          <th style={{ fontSize: '0.6vw' }}>No</th>
          <th style={{ fontSize: '0.6vw' }}>P</th>
          <th style={{ fontSize: '0.6vw' }}>Li</th>
          <th style={{ fontSize: '0.6vw' }}>T</th>
          <th style={{ fontSize: '0.6vw' }}>F</th>
          <th style={{ fontSize: '0.6vw' }}>IntCnt</th>
          <th style={{ fontSize: '0.6vw' }}>SsndCnt</th>
          <th style={{ fontSize: '0.6vw' }}>SWrtcnt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>101</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>102</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr style={{ backgroundColor: 'red' }}>
          <td>103</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>103</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Mini_Table;
