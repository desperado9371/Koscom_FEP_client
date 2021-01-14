import React, { Fragment } from 'react';
import '../node_modules/tabler-react/dist/Tabler.css';
import { Card, Button, Nav, Dropdown } from 'tabler-react';
import Nav_example from './Nav_example';

const Dashboard_example = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Dashboard_example;
