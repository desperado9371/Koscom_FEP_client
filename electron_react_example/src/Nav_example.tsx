import React, { Fragment } from 'react';
import '../node_modules/tabler-react/dist/Tabler.css';
import { Card, Button, Nav } from 'tabler-react';

const Nav_example = () => {
  return (
    <Fragment>
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
