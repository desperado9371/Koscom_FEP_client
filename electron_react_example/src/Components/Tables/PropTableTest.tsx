import React from 'react';
import { Table } from 'react-bootstrap';

const PropTableTest = (props) => {
  let data;
  let idx;
  let procNo;
  let money;

  try {
    data = JSON.parse(props.msg);

    idx = data['idx'];
    procNo = data['procNo'];
    money = data['money'];
  } catch {
    console.log('why');
    idx = 0;
    procNo = 0;
    money = 0;
  }

  let testdata = 1;

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
          <th>idx</th>
          <th>procNo</th>
          <th>money</th>
        </tr>
      </thead>
      <tbody>
        <tr className="redrow">
          <td className={testdata == 1 ? 'redrow' : 'noraml'}>{idx}</td>
          <td className={testdata == 1 ? 'redrow' : 'noraml'}>{procNo}</td>
          <td className={testdata == 1 ? 'redrow' : 'noraml'}>{money}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PropTableTest;
