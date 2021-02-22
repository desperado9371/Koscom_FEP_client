// @flow

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
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
} from 'tabler-react';

import C3Chart from 'react-c3js';

import SiteWrapper from './SiteWrapper.react';
import Test2 from '../Test2';
import Table_example from '../Components/Tables/Table_example';

function Home() {
  return (
    <SiteWrapper>
      <Page.Content title="서버 현황">
        <Grid.Row cards={true}>
          <Grid.Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>시스템 상태</Card.Title>
              </Card.Header>
              <Grid.Row>
                <Grid.Col sm={4}>
                  <ProgressCard
                    header="CPU 사용량"
                    content="55%"
                    progressColor="yellow"
                    progressWidth={55}
                  />
                </Grid.Col>
                <Grid.Col sm={4}>
                  <ProgressCard
                    header="Memory 사용량"
                    content="40%"
                    progressColor="green"
                    progressWidth={40}
                  />
                </Grid.Col>
                <Grid.Col sm={4}>
                  <ProgressCard
                    header="Disk 사용량"
                    content="80%"
                    progressColor="red"
                    progressWidth={80}
                  />
                </Grid.Col>
              </Grid.Row>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
      <Page.Content title="주문 현황">
        <Grid.Row cards={true}>
          <Grid.Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>고속 OMS 상태</Card.Title>
              </Card.Header>
              <Table_example />
            </Card>
          </Grid.Col>
          <Grid.Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>KRX 상태</Card.Title>
              </Card.Header>
              <Table_example />
            </Card>
          </Grid.Col>
          <Grid.Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>미니 원장 및 원장 후처리 상태</Card.Title>
              </Card.Header>
              <Table_example />
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
