import React from 'react';
import { Table } from 'react-bootstrap';

const CrontabResultTable1 = () => {
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
          <td>1</td>
          <td>ndstk_rm_all</td>
          <td>08:00</td>
          <td>08:00</td>
          <td style={{ backgroundColor: 'blue' }}>Success</td>
        </tr>
        <tr>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td style={{ backgroundColor: 'red' }}>Fail</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>4</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CrontabResultTable1;
