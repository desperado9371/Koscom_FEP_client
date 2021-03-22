import React from 'react';
import { Table } from 'react-bootstrap';

const KrxOrderTable = (props) => {
  let data61 = JSON.parse(props.proc61);
  let data62 = JSON.parse(props.proc62);
  let data63 = JSON.parse(props.proc63);
  let data64 = JSON.parse(props.proc64);

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
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>Li</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>T</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>F</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>IntCnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SSndCnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SWrtCnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SMSndCnt</th>
          <th style={{ fontSize: '0.6vw', textTransform: 'none' }}>SMWrtCnt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>61</td>
          <td>{data61['procStatus']}</td>
          <td>{data61['netStatus']}</td>
          <td>{data61['lineStatus']}</td>
          <td>{data61['toWrite']}</td>
          <td>{data61['fromRead']}</td>
          <td>{data61['interfaceCnt']}</td>
          <td>{data61['storeSndCnt']}</td>
          <td>{data61['storeWrtCnt']}</td>
          <td>{data61['smSndCnt']}</td>
          <td>{data61['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>62</td>
          <td>{data62['procStatus']}</td>
          <td>{data62['netStatus']}</td>
          <td>{data62['lineStatus']}</td>
          <td>{data62['toWrite']}</td>
          <td>{data62['fromRead']}</td>
          <td>{data62['interfaceCnt']}</td>
          <td>{data62['storeSndCnt']}</td>
          <td>{data62['storeWrtCnt']}</td>
          <td>{data62['smSndCnt']}</td>
          <td>{data62['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>63</td>
          <td>{data63['procStatus']}</td>
          <td>{data63['netStatus']}</td>
          <td>{data63['lineStatus']}</td>
          <td>{data63['toWrite']}</td>
          <td>{data63['fromRead']}</td>
          <td>{data63['interfaceCnt']}</td>
          <td>{data63['storeSndCnt']}</td>
          <td>{data63['storeWrtCnt']}</td>
          <td>{data63['smSndCnt']}</td>
          <td>{data63['smWrtCnt']}</td>
        </tr>
        <tr>
          <td>64</td>
          <td>{data64['procStatus']}</td>
          <td>{data64['netStatus']}</td>
          <td>{data64['lineStatus']}</td>
          <td>{data64['toWrite']}</td>
          <td>{data64['fromRead']}</td>
          <td>{data64['interfaceCnt']}</td>
          <td>{data64['storeSndCnt']}</td>
          <td>{data64['storeWrtCnt']}</td>
          <td>{data64['smSndCnt']}</td>
          <td>{data64['smWrtCnt']}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default KrxOrderTable;
