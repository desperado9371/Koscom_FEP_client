import React from 'react';
import { Table } from 'react-bootstrap';

const PropTableTest = (props) => {
  let data1;
  let data2;
  let data3;
  let data4;

  let idx;
  let procNo;
  let money;

  let idx2;
  let procNo2;
  let money2;

  let idx3;
  let procNo3;
  let money3;

  let idx4;
  let procNo4;
  let money4;

  try {
    data1 = JSON.parse(props.proc1);
    data2 = JSON.parse(props.proc2);
    data3 = JSON.parse(props.proc3);
    data4 = JSON.parse(props.proc4);

    idx = data1['idx'];
    procNo = data1['procNo'];
    money = data1['money'];

    idx2 = data2['idx'];
    procNo2 = data2['procNo'];
    money2 = data2['money'];

    idx3 = data3['idx'];
    procNo3 = data3['procNo'];
    money3 = data3['money'];

    idx4 = data4['idx'];
    procNo4 = data4['procNo'];
    money4 = data4['money'];
  } catch {
    console.log('why');
    idx = 0;
    procNo = 0;
    money = 0;
    idx2 = 1;
    procNo2 = 1;
    money2 = 1;
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
          <th>idx</th>
          <th>procNo</th>
          <th>money</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={procNo > 90 ? 'redrow' : 'noraml'}>{idx}</td>
          <td className={procNo > 90 ? 'redrow' : 'noraml'}>{procNo}</td>
          <td className={procNo > 90 ? 'redrow' : 'noraml'}>{money}</td>
        </tr>
        <tr>
          <td className={procNo2 > 90 ? 'redrow' : 'noraml'}>{idx2}</td>
          <td className={procNo2 > 90 ? 'redrow' : 'noraml'}>{procNo2}</td>
          <td className={procNo2 > 90 ? 'redrow' : 'noraml'}>{money2}</td>
        </tr>
        <tr>
          <td className={procNo3 > 90 ? 'redrow' : 'noraml'}>{idx3}</td>
          <td className={procNo3 > 90 ? 'redrow' : 'noraml'}>{procNo3}</td>
          <td className={procNo3 > 90 ? 'redrow' : 'noraml'}>{money3}</td>
        </tr>
        <tr>
          <td className={procNo4 > 90 ? 'redrow' : 'noraml'}>{idx4}</td>
          <td className={procNo4 > 90 ? 'redrow' : 'noraml'}>{procNo4}</td>
          <td className={procNo4 > 90 ? 'redrow' : 'noraml'}>{money4}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PropTableTest;
