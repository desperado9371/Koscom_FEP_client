import React, { Fragment } from 'react';
import { Card, Button, Nav, Dropdown } from 'tabler-react';
import Nav_example from './Nav_example';
import { Row, Col, Table } from 'react-bootstrap';
import Test2 from './Test2';
import Table_example from './Table_example';

const Dashboard_example = () => {
  return (
    <>
      <Nav_example />
      <Row className="header">
        <h1> 프로세스 모니터링 대시보드</h1>
      </Row>
      <Row className="monit border">
        <Col className="border border-primary w-100 h-100" lg={8}>
          <Test2 />
        </Col>
        <Col className="border border-danger w-100 h-100" lg={4}>
          <Table_example />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard_example;
