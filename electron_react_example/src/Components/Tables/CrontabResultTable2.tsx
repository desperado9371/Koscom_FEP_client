import React from 'react';
import { Table } from 'react-bootstrap';

const CrontabResultTable2 = () => {
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
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>Job_Name</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>
            Schedule Time
          </th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>
            Process Time
          </th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5</td>
          <td>ndstk_something</td>
          <td>09:00</td>
          <td>09:00</td>
          <td>Success</td>
        </tr>
        <tr>
          <td>6</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>Fail</td>
        </tr>
        <tr>
          <td>7</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>8</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CrontabResultTable2;
