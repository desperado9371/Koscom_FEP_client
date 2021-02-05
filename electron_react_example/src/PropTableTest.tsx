import React from 'react';
import { Table } from 'react-bootstrap';

const PropTableTest = (props) => {
  let data;
  let id;
  let age;
  let money;

  try {
    data = JSON.parse(props.msg);

    id = data['id'];
    age = data['age'];
    money = data['money'];
  } catch {
    console.log('why');
    id = 0;
    age = 0;
    money = 0;
  }

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
          <th>id</th>
          <th>age</th>
          <th>money</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{age}</td>
          <td>{money}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PropTableTest;
