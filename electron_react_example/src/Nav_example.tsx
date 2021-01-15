import React, { Fragment } from 'react';
import { Card, Button, Nav } from 'tabler-react';
import { Row, Col, Image } from 'react-bootstrap';

const Nav_example = () => {
  return (
    <Fragment>
      <Nav className="brand">
        <Row>
          <Col xs={2} md={2}>
            <Image src="./img/koscom_ci.jpg" />
          </Col>
          <Col xs={10} md={6}>
            <h1>고속 FEP 모니터링 클라이언트</h1>
          </Col>
        </Row>
      </Nav>
      <Nav className="navbar">
        <Nav.Item hasSubNav value="Page One" icon="globe">
          <Nav.SubItem value="Sub Item 1" />
          <Nav.SubItem>Sub Item 2</Nav.SubItem>
          <Nav.SubItem icon="globe">Sub Item 3</Nav.SubItem>
        </Nav.Item>
        <Nav.Item to="#/dashboard">프로세스 모니터링 대시보드</Nav.Item>
        <Nav.Item to="#/control">프로세스 제어</Nav.Item>
        <Nav.Item to="#/test">차트 및 기타기능 테스트</Nav.Item>
        <Nav.Item active icon="user">
          Page Four
        </Nav.Item>
      </Nav>
    </Fragment>
  );
};

export default Nav_example;
