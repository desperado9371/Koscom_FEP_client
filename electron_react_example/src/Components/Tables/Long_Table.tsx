import React from 'react';
import { Table } from 'react-bootstrap';

const Long_Table = () => {
  return (
    <Table
      striped
      bordered
      responsive="md"
      hover
      size="md"
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
        <tr onClick={() => (window.location.href = '#/home')}>
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
          <td>104</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>105</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>106</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>107</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>108</td>
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

export default Long_Table;
