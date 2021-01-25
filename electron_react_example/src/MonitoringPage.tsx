import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Timer from './Timer';

const Monitoring = () => {
  return (
    <div className="monit">
      <Row>
        <Col className="align-self-center" sm={1}>
          <Button className="bk_btn" variant="secondary" href="#/">
            종료
          </Button>
        </Col>
        <Col className="monit_title align-self-center text-left" sm={7}>
          K-LINK
        </Col>
        <Col className="align-self-center center-block text-right" sm={4}>
          <Timer />
        </Col>
      </Row>
    </div>
  );
};

export default Monitoring;
