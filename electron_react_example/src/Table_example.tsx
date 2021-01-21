import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';

import makeData from './makeData';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      font-size: 1vw;
      :last-child {
        border-right: 0;
      }
      background-color: #cccccc;
    }

    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      font-size: 1vw;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Table_example() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'ProcNum',
      },
      {
        Header: 'P',
        accessor: 'ProcRunState',
      },
      {
        Header: 'C',
        accessor: 'ClientCount',
      },
      {
        Header: 'N',
        accessor: 'LinkStatus',
      },
      {
        Header: 'Li',
        accessor: 'ServerType',
      },
      {
        Header: 'T',
        accessor: 'T',
      },
      {
        Header: 'F',
        accessor: 'F',
      },
      {
        Header: 'IntCnt',
        accessor: 'SeqNum',
      },
      {
        Header: 'SSndCnt',
        accessor: 'StoreQsent',
      },
      {
        Header: 'SWrtCnt',
        accessor: 'StoreQwillsend',
      },
      {
        Header: 'SMSndC',
        accessor: 'MemQsent',
      },
      {
        Header: 'SMWrtC',
        accessor: 'MemQwillsend',
      },
      {
        Header: 'Time',
        accessor: 'ResponseTime',
      },
      {
        Header: 'L',
        accessor: 'LogLevels',
      },
    ],
    []
  );

  const [data2, setDatas2] = useState(makeData(4));

  useEffect(() => {
    setTimeout(() => {
      let temp = makeData(4);
      setDatas2(temp);
    }, 1000);
  });

  const data = React.useMemo(() => makeData(4), []);
  // console.log(data);
  return (
    <Styles>
      <Table columns={columns} data={data2} />
    </Styles>
  );
}

export default Table_example;
