import React from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';

const checkID = () => {
  const id = document.getElementById('formBasicLogin').value;
  const pw = document.getElementById('formBasicPassword').value;

  if (id == 'admin' && pw == 'admin123') {
    location.href = '#/Home';
  }
};

const Login = () => {
  return (
    <Row style={{ marginTop: '20vw' }}>
      <Col lg={4}></Col>
      <Col lg={4}>
        <Form>
          <Form.Group controlId="formBasicLogin">
            <Form.Label>ID</Form.Label>
            <Form.Control type="id" placeholder="Enter ID" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={checkID}>
            확인
          </Button>
        </Form>
      </Col>
      <Col lg={4}></Col>
    </Row>
  );
};

export default Login;
