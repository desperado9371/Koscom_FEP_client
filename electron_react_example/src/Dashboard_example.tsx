import React, { Fragment } from 'react';
import { Card, Button, Nav, Dropdown } from 'tabler-react';
import Nav_example from './Nav_example';
import { Row, Col, Container } from 'react-bootstrap';

const Dashboard_example = () => {
  return (
    <>
      <Nav_example />
      <h1> 프로세스 모니터링 대시보드</h1>
      <Dropdown
        type="button"
        toggle={false}
        color="primary"
        arrow
        icon="globe"
        triggerContent="Button"
        itemsObject={[
          {
            value: 'Profile',
          },
          { isDivider: true },
          { value: 'Logout' },
        ]}
      />
    </>
  );
};

export default Dashboard_example;
