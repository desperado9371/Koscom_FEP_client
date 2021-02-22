import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Modal, Card, Image } from 'react-bootstrap';
import { AnimateOnChange, animations, easings } from 'react-animation';
import raw from '../../assets/user2.json';
import fs from 'fs';
import { check } from 'prettier';

const Login = () => {
  const [showModal, setShow] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleCloseSignup = () => setShowSignup(false);
  // const handleShowSignup = () => setShowSignup(true);

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      checkID();
    }
  };

  const checkID = () => {
    const id = document.getElementById('formBasicLogin').value;
    const pw = document.getElementById('formBasicPassword').value;

    for (let i = 0; i < raw.length; i++) {
      if (raw[i]['id'] == id) {
        if (raw[i]['password'] == pw) {
          location.href = '#/Home';
        }
      }
    }
    handleShow();
    // if (id == 'admin' && pw == 'admin') {
    //   location.href = '#/Home';
    // } else {
    //   handleShow();
    // }
  };

  const signUp = () => {
    handleShowSignup();
  };

  // const addMember = () => {
  //   let id = '';
  //   let pw1 = '';
  //   let pw2 = '';
  //   try {
  //     id = document.getElementById('signUpId').value;
  //     pw1 = document.getElementById('signUpPw1').value;
  //     pw2 = document.getElementById('signUpPw2').value;
  //   } catch {
  //     handleCloseSignup();
  //   }

  //   if (pw1 == pw2) {
  //     const newMember = [...raw, { id: id, password: pw1 }];
  //     console.log(newMember);
  //     fs.writeFileSync('./assets/user2.json', JSON.stringify(newMember));
  //   } else {
  //     console.log('pw incorrect');
  //   }
  // };

  const [textIndex, setTextIndex] = useState(0);

  const textArr = ['FAST!!', 'AMAZING!!', 'PERFECT!!', 'RELIABLE!!'];

  useEffect(() => {
    setTimeout(() => {
      if (textIndex == textArr.length - 1) {
        setTextIndex(0);
      } else {
        setTextIndex(textIndex + 1);
      }
    }, 2000);
  });

  return (
    <>
      <Row style={{ backgroundColor: 'white', height: '5vw' }}>
        <Col xs={6} md={2}>
          <Image src="./img/koscom_ci_big.jpg" />
        </Col>
        <Col xs={6} md={2}></Col>
      </Row>
      <Row>
        <Col lg={2}></Col>
        <Col
          lg={5}
          style={{ fontSize: '3vw', fontWeight: 'bolder', marginTop: '14vw' }}
        >
          This is{' '}
          <AnimateOnChange
            animationIn="bounceIn"
            animationOut="bounceOut"
            durationOut={700}
            style={{ textShadow: '1px 1px 1px grey' }}
          >
            {textArr[textIndex]}
          </AnimateOnChange>
        </Col>
        <Col lg={5}></Col>
      </Row>
      <Row style={{ marginTop: '1vw', fontWeight: 'bolder' }}>
        <Col lg={2}></Col>
        <Col
          lg={4}
          className="align-self-center"
          style={{
            fontSize: '8vw',
            animation: `fade-in ${easings.easeInOutQuint} 3000ms forwards`,
            textShadow: '3px 2px 2px grey',
          }}
        >
          K-LINK
          <p
            style={{
              textAlign: 'left',
              marginLeft: '1vw',
              textShadow: '0px 0px 0px grey',
            }}
          >
            코스콤 고속 FEP 서비스
          </p>
        </Col>
        <Col className="border-left" style={{ paddingLeft: '8vw' }} lg={4}>
          <Card>
            <Card.Header>로그인</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicLogin">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="id" placeholder="Id를 입력해주세요" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password를 입력해주세요"
                    onKeyPress={pressEnter}
                  />
                </Form.Group>
                <Button
                  style={{ width: '100%' }}
                  variant="primary"
                  onClick={checkID}
                >
                  로그인
                </Button>
                {/* <Button
                  style={{ width: '100%', marginTop: '1vw' }}
                  variant="dark"
                  onClick={signUp}
                >
                  회원가입
                </Button> */}
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2}></Col>
      </Row>

      <Modal
        style={{ marginTop: '18vw' }}
        show={showModal}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>로그인 실패</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          등록되지 않은 ID 이거나 비밀번호를 잘못 입력하셨습니다.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal
        style={{ marginTop: '18vw' }}
        show={showSignup}
        onHide={handleCloseSignup}
      >
        <Modal.Header>
          <Modal.Title>회원 가입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="signUpId">
              <Form.Label>아이디</Form.Label>
              <Form.Control type="id" placeholder="Id를 입력해주세요" />
            </Form.Group>

            <Form.Group controlId="signUpPw1">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password를 입력해주세요"
              />
            </Form.Group>
            <Form.Group controlId="signUpPw2">
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password를 한번 더 입력해주세요"
              />
            </Form.Group>
            <Button
              style={{ width: '100%' }}
              variant="primary"
              onClick={addMember}
            >
              회원가입
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSignup}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default Login;
