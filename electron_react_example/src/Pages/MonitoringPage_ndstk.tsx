import React, { useState, useEffect } from 'react';
import { Row, Col, Button, ProgressBar, Card, Carousel } from 'react-bootstrap';
import Long_Table from '../Components/Tables/Long_Table';
import Mini_Table from '../Components/Tables/Mini_Table';
import MixChart from '../Components/MixChart';
import SearchForm from '../Components/SearchForm';
import Chart from 'react-google-charts';
import Timer from '../Components/Timer';
import Guage_chart from '../Components/Guage_chart';
import ClientOrderTable from '../Components/Tables/ClientOrderTable';
import ClientExecutionTable from '../Components/Tables/ClientExecutionTable';
import KrxOrderTable from '../Components/Tables/KrxOrderTable';
import KrxExecutionTable from '../Components/Tables/KrxExecutionTable';
import OrderDistributionTable from '../Components/Tables/OrderDistributionTable';
import ExecutionDistributionTable from '../Components/Tables/ExecutionDistributionTable';
import LedgerDefinitionTable from '../Components/Tables/LedgerDefinitionTable';
import CrontabResultTable1 from '../Components/Tables/CrontabResultTable1';
import CrontabResultTable2 from '../Components/Tables/CrontabResultTable2';

const Monitoring_ndstk = () => {
  const [resources, SetResource] = useState([40, 80, 50]);
  useEffect(() => {
    setTimeout(() => {
      SetResource([
        resources[0] + (Math.random() - 0.42) * 10,
        resources[1] + (Math.random() - 0.48) * 10,
        resources[2] + (Math.random() - 0.42) * 10,
      ]);
    }, 1000);
  });

  return (
    <div className="monit" style={{ textShadow: '2px 2px 5px black' }}>
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
        <Col
          className="monit_title align-self-center text-left"
          style={{ fontSize: '3.5vw', textShadow: '3px 2px 5px black' }}
          sm={7}
        >
          K-LINK 현물 모니터링
        </Col>
        <Col className="align-self-center center-block text-right" sm={4}>
          <Timer />
        </Col>
      </Row>

      <Row
        className=" mx-5 mt-1"
        style={{ fontSize: '1vw', fontWeight: 'bolder' }}
      >
        <Col xs={6} style={{ border: '2px solid grey', borderRadius: '5px' }}>
          {/* <Col style={{ justifyContent: 'center', marginLeft: '3vw' }} xs={12}>
            <Guage_chart />
          </Col> */}
          <Row style={{ marginTop: '0.7vw' }}>
            <Col className="text-center" xs={2}>
              CPU
            </Col>
            <Col xs={10}>
              <ProgressBar
                style={{
                  height: '1.5vw',
                  fontSize: '1vw',
                  fontWeight: 'bolder',
                  textShadow: '2px 2px 5px black',
                  borderRadius: '25px',
                }}
              >
                <ProgressBar
                  animated
                  variant={
                    resources[0] > 80
                      ? 'danger'
                      : resources[0] > 60
                      ? 'warning'
                      : 'success'
                  }
                  now={resources[0]}
                  label={resources[0].toFixed(2) + '%'}
                />
                <ProgressBar variant="secondary" now={100 - resources[0]} />
              </ProgressBar>
            </Col>
          </Row>
          <Row style={{ marginTop: '1.5vw' }}>
            <Col className="text-center" xs={2}>
              Memory
            </Col>
            <Col xs={10}>
              <ProgressBar
                style={{
                  height: '1.5vw',
                  fontSize: '1vw',
                  fontWeight: 'bolder',
                  textShadow: '2px 2px 5px black',
                  borderRadius: '25px',
                }}
              >
                <ProgressBar
                  animated
                  variant={
                    resources[1] > 80
                      ? 'danger'
                      : resources[1] > 60
                      ? 'warning'
                      : 'success'
                  }
                  now={resources[1]}
                  label={resources[1].toFixed(2) + '%'}
                />
                <ProgressBar variant="secondary" now={100 - resources[1]} />
              </ProgressBar>
            </Col>
          </Row>
          <Row style={{ marginTop: '1.5vw' }}>
            <Col className="text-center" xs={2}>
              Disk
            </Col>
            <Col xs={10}>
              <ProgressBar
                style={{
                  height: '1.5vw',
                  fontSize: '1vw',
                  fontWeight: 'bolder',
                  textShadow: '2px 2px 5px black',
                  borderRadius: '25px',
                }}
              >
                <ProgressBar
                  animated
                  variant={
                    resources[2] > 80
                      ? 'danger'
                      : resources[2] > 60
                      ? 'warning'
                      : 'success'
                  }
                  now={resources[2]}
                  label={resources[2].toFixed(2) + '%'}
                />
                <ProgressBar variant="secondary" now={100 - resources[2]} />
              </ProgressBar>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6} style={{ borderTop: '2px solid grey' }}>
              고객 체결 처리
              <Mini_Table />
            </Col>
            <Col
              xs={6}
              style={{
                border: '2px solid grey',
              }}
            >
              준비 작업
              <Carousel indicators={false} controls={false}>
                <Carousel.Item interval={3000}>
                  <CrontabResultTable1 />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <CrontabResultTable2 />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        className="mt-1 mx-5"
        style={{ fontSize: '1vw', fontWeight: 'bolder', height: '20vw' }}
      >
        <Col
          sm={3}
          style={{
            borderLeft: '2px solid grey',
            borderRight: '2px solid grey',
            borderBottom: '2px solid grey',
          }}
        >
          고객주문
          <ClientOrderTable />
          고객체결
          <ClientExecutionTable />
        </Col>
        <Col
          sm={3}
          style={{
            borderRight: '2px solid grey',
            borderBottom: '2px solid grey',
          }}
        >
          거래소 주문
          <KrxOrderTable />
          거래소 체결
          <KrxExecutionTable />
        </Col>
        <Col
          sm={6}
          style={{
            borderBottom: '2px solid grey',
            borderRight: '2px solid grey',
          }}
        >
          <Row>
            <Col sm={6}>
              주문 분배
              <OrderDistributionTable />
              체결 분배
              <ExecutionDistributionTable />
            </Col>

            <Col sm={6}>
              업무계 송신
              <LedgerDefinitionTable />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        className="mt-1 mx-5"
        style={{ fontSize: '1vw', fontWeight: 'bolder', marginTop: '0px' }}
      >
        <Col
          sm={6}
          style={{
            borderBottom: '2px solid grey',
            borderRight: '2px solid grey',
            borderLeft: '2px solid grey',
          }}
        >
          <div
            className="miniChart"
            style={{ marginLeft: '1vw', justifyContent: 'center' }}
          >
            <MixChart />
          </div>
        </Col>
        <Col
          sm={6}
          style={{
            borderBottom: '2px solid grey',
            borderRight: '2px solid grey',
          }}
        >
          <SearchForm />
        </Col>
      </Row>
    </div>
  );
};

export default Monitoring_ndstk;
