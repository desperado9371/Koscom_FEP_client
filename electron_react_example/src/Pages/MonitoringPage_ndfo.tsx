import React from 'react';
import { Row, Col, Button, ProgressBar, Card, Carousel } from 'react-bootstrap';
import Long_Table from '../Components/Tables/Long_Table';
import Mini_Table from '../Components/Tables/Mini_Table';
import MixChart from '../Components/MixChart';
import SearchForm from '../Components/SearchForm';
import Table_example from './Table_example';
import Timer from '../Components/Timer';

const Monitoring_ndfo = () => {
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
          K-LINK 파생 NDFO
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
          <Row style={{ marginTop: '0.7vw' }}>
            <Col className="text-center" xs={2}>
              CPU
            </Col>
            <Col xs={10}>
              <ProgressBar
                style={{
                  height: '30px',
                  fontSize: '20px',
                  fontWeight: 'bolder',
                }}
              >
                <ProgressBar variant="success" now={30} label={30} />
                <ProgressBar variant="secondary" now={70} />
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
                  height: '30px',
                  fontSize: '20px',
                  fontWeight: 'bolder',
                }}
              >
                <ProgressBar variant="danger" now={90} label={90} />
                <ProgressBar variant="secondary" now={10} />
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
                  height: '30px',
                  fontSize: '20px',
                  fontWeight: 'bolder',
                }}
              >
                <ProgressBar variant="warning" now={70} label={70} />
                <ProgressBar variant="secondary" now={40} />
              </ProgressBar>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6}>
              고객 체결 처리
              <Mini_Table />
            </Col>
            <Col xs={6}>
              준비 작업
              <Carousel indicators={false} controls={false}>
                <Carousel.Item interval={3000}>
                  <Mini_Table />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <Mini_Table />
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
        <Col sm={3}>
          고객주문
          <Mini_Table />
          고객체결
          <Mini_Table />
        </Col>
        <Col sm={3}>
          거래소 주문
          <Mini_Table />
          거래소 체결
          <Mini_Table />
        </Col>
        <Col sm={6}>
          <Row>
            <Col sm={6}>
              주문 분배
              <Mini_Table />
              체결 분배
              <Mini_Table />
            </Col>

            <Col sm={6}>
              업무계 송신
              <Long_Table />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        className="mt-3 ml-3"
        style={{ fontSize: '1vw', fontWeight: 'bolder' }}
      >
        <Col sm={6}>
          <div
            className="miniChart"
            style={{ marginLeft: '1vw', justifyContent: 'center' }}
          >
            <MixChart />
          </div>
        </Col>
        <Col sm={6}>
          <SearchForm />
        </Col>
      </Row>
    </div>
  );
};

export default Monitoring_ndfo;
