import React from 'react';
import { Table } from 'react-bootstrap';

const Mini_Table = () => {
  return (
    <Table
      striped
      bordered
      hover
      size="sm"
      variant="dark"
      style={{ fontSize: '0.8vw' }}
    >
      <thead>
        <tr>
          <th>No</th>
          <th>P</th>
          <th>C</th>
          <th>N</th>
          <th>Li</th>
          <th>T</th>
          <th>F</th>
          <th>IntCnt</th>
          <th>SsndCnt</th>
          <th>SWrtcnt</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>101</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0.00312</td>
        </tr>
        <tr>
          <td>102</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0.00312</td>
        </tr>
        <tr>
          <td>103</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0.00312</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Mini_Table;
