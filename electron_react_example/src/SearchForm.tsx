import React from 'react';
import {
  Row,
  Col,
  Button,
  InputGroup,
  Date,
  Form,
  Badge,
  Table,
} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import moment from 'moment';
import 'moment/locale/ko';

const SearchForm = () => {
  const today = moment();
  return (
    <Form>
      <Form.Group controlId="ctrl1">
        <Row>
          <Col className="align-self-center h-100" sm={3}>
            <Form.Control
              type="date"
              id="date_pick"
              defaultValue={today.format('yyyy-MM-DD')}
            />
          </Col>
          <Col className="align-self-center" sm={2}></Col>
          <Col className="align-self-right pl-10" sm={3}>
            <div
              key="inlie-radio"
              className="mb-3"
              style={{ fontSize: '15px' }}
            >
              <Form.Group>
                <Form.Check
                  inline
                  label="NDFO"
                  name="typeRadio"
                  type="radio"
                  id="radio1"
                />
                <Form.Check
                  inline
                  label="NDSTK"
                  name="typeRadio"
                  type="radio"
                  id="radio2"
                />
              </Form.Group>
            </div>
          </Col>
          <Col className="align-self-center h-100" sm={3}>
            <Form.Control
              className="text align-self-center"
              placeholder="ordId"
            />
          </Col>
          <Col className="align-self-center" sm={1}>
            <Button variant="primary">조회</Button>
          </Col>
        </Row>
      </Form.Group>
      <Row className="w-100">
        <Table
          striped
          bordered
          hover
          size="sm"
          variant="dark"
          style={{ fontSize: '0.9vw' }}
        >
          <thead>
            <tr>
              <th>계좌번호</th>
              <th>원주문</th>
              <th>매매구분</th>
              <th>호가구분</th>
              <th>종목</th>
              <th>수량</th>
              <th>단가</th>
              <th>응답코드</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1013321</td>
              <td>110331</td>
              <td>Buy</td>
              <td>시장가</td>
              <td>005930</td>
              <td>1000</td>
              <td>90000</td>
              <td>Success</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row className="w-100" style={{ fontSize: '1vw' }}>
        <Col
          className="border-right border-top border-light text-center"
          sm={2}
          style={{ fontSize: '1.1vw' }}
        >
          OMS
        </Col>
        <Col
          className="border-top border-light text-center"
          sm={8}
          style={{ fontSize: '1.1vw' }}
        >
          K-LINK 주문 처리 시간 <br />
          {'<--------------------------------------------------------------->'}
          <br />
          20ms
          <br />
        </Col>
        <Col
          className="border-left border-top border-light text-center"
          sm={2}
          style={{ fontSize: '1.1vw' }}
        >
          KRX
        </Col>
      </Row>
      <Row className="w-100" style={{ fontSize: '1vw' }}>
        <Col className="border-right border-light text-center" sm={2}>
          10ms<br></br>------------{'->'}
        </Col>
        <Col className=" text-center" sm={8}>
          <Table
            striped
            bordered
            hover
            size="sm"
            variant="dark"
            style={{ fontSize: '0.9vw' }}
          >
            <thead>
              <tr>
                <th>접수 Proc.</th>
                <th>송신 Proc.</th>
                <th>응답소요</th>
                <th>KRX 응답소요</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1013321</td>
                <td>110331</td>
                <td>1000</td>
                <td>90000</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col className="border-left border-light text-center" sm={2}>
          10ms<br></br>------------{'->'}
        </Col>
      </Row>
      <Row className="w-100" style={{ fontSize: '1vw' }}>
        <Col className="border-right border-light text-center" sm={2}>
          {'<-'}------------
          <br></br>10ms
        </Col>
        <Col className="text-center" sm={8}>
          <Table
            striped
            bordered
            hover
            size="sm"
            variant="dark"
            style={{ fontSize: '0.9vw' }}
          >
            <thead>
              <tr>
                <th>처리 Proc.</th>
                <th>수신 Proc.</th>
                <th>처리소요</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1013321</td>
                <td>110331</td>
                <td>1000</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col className="border-left border-light text-center" sm={2}>
          {'<-'}------------
          <br></br>10ms
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
