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
import MixChart from './MixChart';

function Statistic() {
  return (
    <SiteWrapper>
      <Page.Content title="주문 통계">
        <Grid.Row>
          <MixChart />
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Statistic;
