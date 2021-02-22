import * as React from 'react';

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
  Form as TablerForm,
} from 'tabler-react';

import {
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
} from 'react-bootstrap';
import { DatePicker } from 'react-bootstrap-date-picker';

import C3Chart from 'react-c3js';
import SiteWrapper from './SiteWrapper.react';

function Search() {
  return (
    <SiteWrapper>
      <Page.Content title="주문 처리 조회">
        <Row>
          <Card>
            <Row>
              <Col sm={2}>
                <Card>
                  <Row className="justify-content-md-center">
                    <Form>
                      {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label="NDFO"
                          />
                        </div>
                      ))}
                    </Form>
                  </Row>
                </Card>
              </Col>
              <Col sm={2}>
                <Card>
                  <Row className="justify-content-md-center">
                    <Form>
                      {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={'NDSTK'}
                          />
                        </div>
                      ))}
                    </Form>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row>
          <Card>
            <Row>
              <Col sm={3}>
                <TablerForm.DatePicker
                  defaultDate={new Date('2021-01-22T04:55:59.408Z')}
                  format="yyyy/mm/dd"
                  maxYear={2021}
                  minYear={1897}
                  monthLabels={[
                    '01',
                    '02',
                    '03',
                    '04',
                    '05',
                    '06',
                    '07',
                    '08',
                    '09',
                    '10',
                    '11',
                    '12',
                  ]}
                />
              </Col>
              <Col sm={5}></Col>
              <Col sm={1}>
                <Badge color="warning" className="mr-1">
                  주문번호
                </Badge>
              </Col>
              <Col sm={2}>
                <TablerForm.Input placeholder="ordID"></TablerForm.Input>
              </Col>
              <Col width={1} sm={1}>
                <Button>조회</Button>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row lg={12}>
          <Card>
            <Table
              responsive
              className="card-table table-vcenter text-nowrap"
              headerItems={[
                { content: '계좌번호', className: 'w-1' },
                { content: '원주문' },
                { content: '매매구분' },
                { content: '호가구분' },
                { content: '종목' },
                { content: '수량' },
                { content: '단가' },
                { content: '응답코드' },
              ]}
              bodyItems={[
                {
                  key: '1',
                  item: [
                    {
                      content: (
                        <Text RootComponent="span" muted>
                          001401
                        </Text>
                      ),
                    },
                    {
                      content: (
                        <a href="invoice.html" className="text-inherit">
                          12314114
                        </a>
                      ),
                    },
                    { content: '매수' },
                    { content: '시장가' },
                    { content: '005930' },
                    {
                      content: '1000',
                    },
                    { content: '90000' },
                    {
                      // alignContent: 'right',
                      content: 'success',
                    },
                  ],
                },
              ]}
            />
          </Card>
        </Row>
        <Row lg={12}>
          <Card>
            <Grid.Row cards={true}>
              <Grid.Col width={6} sm={4} lg={2}>
                <StatsCard
                  layout={1}
                  movement={6}
                  total="0.00ms"
                  label="------OMS----->"
                />
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={8}>
                <StatsCard
                  layout={1}
                  movement={6}
                  total="4.33ms"
                  label="주문처리시간"
                />
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={2}>
                <StatsCard
                  layout={0}
                  movement={0}
                  total="0.00ms"
                  label="-------->KRX"
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row cards={true}>
              <Grid.Col width={6} sm={4} lg={2}>
                <StatsCard
                  layout={1}
                  total="1.33ms"
                  movement={-2}
                  label="<-----OMS------"
                />
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={8}>
                <StatsCard
                  layout={1}
                  movement={16}
                  total="11.30ms"
                  label="주문처리시간"
                />
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={2}>
                <StatsCard
                  layout={1}
                  movement={-2}
                  total="0.00ms"
                  label="<--------KRX"
                />
              </Grid.Col>
            </Grid.Row>
          </Card>
        </Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Search;
