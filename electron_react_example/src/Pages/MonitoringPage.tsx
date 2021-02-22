import React from 'react';
import { Row, Col, Button, ProgressBar, Card } from 'react-bootstrap';
import Mini_Table from '../Components/Tables/Mini_Table';
import MixChart from '../Components/MixChart';
import SearchForm from '../Components/SearchForm';
import Table_example from '../Components/Table_example';
import Timer from '../Components/Timer';

const Monitoring = () => {
  return (
    <div className="monit">
      <Row style={{ backgroundColor: '#444444' }}>
        <Col className="align-self-center" sm={1}>
          <Button
            className="bk_btn"
            variant="secondary"
            style={{ fontSize: '40px' }}
            href="#/Home"
          >
            {'<'}
          </Button>
        </Col>
        <Col className="monit_title align-self-center text-left" sm={7}>
          K-LINK
        </Col>
        <Col className="align-self-center center-block text-right" sm={4}>
          <Timer />
        </Col>
      </Row>

      <Row
        className=" mt-3 ml-3"
        style={{ fontSize: '1.5vw', fontWeight: 'bolder' }}
      >
        시스템상태
      </Row>

      <Row
        className=" mx-5 mt-1"
        style={{ fontSize: '1.2vw', fontWeight: 'bolder' }}
      >
        <Col className="mb-3" sm={2}>
          CPU 사용률
          <ProgressBar
            style={{ height: '20px', fontSize: '20px', fontWeight: 'bolder' }}
          >
            <ProgressBar variant="success" now={60} label={60} />
            <ProgressBar variant="warning" now={40} label={40} />
          </ProgressBar>
        </Col>
        <Col className="mb-3" sm={2}>
          Memory 사용률
          <ProgressBar
            style={{ height: '20px', fontSize: '20px', fontWeight: 'bolder' }}
          >
            <ProgressBar variant="success" now={80} label={80} />
            <ProgressBar variant="warning" now={20} label={20} />
          </ProgressBar>
        </Col>
        <Col className="mb-3" sm={2}>
          Disk 사용률
          <ProgressBar
            style={{ height: '20px', fontSize: '20px', fontWeight: 'bolder' }}
          >
            <ProgressBar variant="success" now={40} label={40} />
            <ProgressBar variant="warning" now={60} label={60} />
          </ProgressBar>
        </Col>
        <Col className="mb-3" sm={2}>
          Disk 사용률
          <ProgressBar
            style={{ height: '20px', fontSize: '20px', fontWeight: 'bolder' }}
          >
            <ProgressBar variant="success" now={40} label={40} />
            <ProgressBar variant="warning" now={60} label={60} />
          </ProgressBar>
        </Col>
        <Col className="mb-3" sm={2}>
          Disk 사용률
          <ProgressBar
            style={{ height: '20px', fontSize: '20px', fontWeight: 'bolder' }}
          >
            <ProgressBar variant="success" now={40} label={40} />
            <ProgressBar variant="warning" now={60} label={60} />
          </ProgressBar>
        </Col>
        <Col className="mb-3" sm={2}>
          Disk 사용률
          <ProgressBar
            style={{ height: '20px', fontSize: '20px', fontWeight: 'bolder' }}
          >
            <ProgressBar variant="success" now={40} label={40} />
            <ProgressBar variant="warning" now={60} label={60} />
          </ProgressBar>
        </Col>
      </Row>
      <Row
        className=" mt-3 ml-3"
        style={{ fontSize: '1.5vw', fontWeight: 'bolder' }}
      >
        주문 프로세스 상태
      </Row>

      <Row
        className="mt-1 ml-5"
        style={{ fontSize: '1.2vw', fontWeight: 'bolder' }}
      >
        <Col sm={4}>
          OMS
          <Mini_Table />
          <Mini_Table />
        </Col>
        <Col sm={4}>
          KRX
          <Mini_Table />
          <Mini_Table />
        </Col>
        <Col sm={4}>
          미니원장 / 원장후처리
          <Mini_Table />
          <Mini_Table />
        </Col>
      </Row>

      <Row
        className="mt-3 ml-3"
        style={{ fontSize: '1.5vw', fontWeight: 'bolder' }}
      >
        <Col sm={6}>
          주문 통계
          <div className="miniChart" style={{ height: '100%' }}>
            <MixChart />
          </div>
        </Col>
        <Col sm={6}>
          주문 처리 조회
          <SearchForm />
        </Col>
      </Row>
    </div>
  );
};

export default Monitoring;
