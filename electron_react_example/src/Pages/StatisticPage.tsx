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
import MixChart from '../Components/MixChart';

function Statistic() {
  return (
    <SiteWrapper>
      <Page.Content title="주문 통계">
        <Grid.Row>
          <div className="mixchartdiv" style={{ width: '100%' }}>
            <MixChart />
          </div>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Statistic;
