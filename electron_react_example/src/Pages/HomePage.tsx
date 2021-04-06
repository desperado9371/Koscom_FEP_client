// @flow
import React, { useState, useEffect } from 'react';

import { Page } from 'tabler-react';

import { Button, Form } from 'react-bootstrap';

import C3Chart from 'react-c3js';

import SiteWrapper from './SiteWrapper.react';
import Test2 from '../Test2';
import Table_example from '../Components/Tables/Table_example';

import store from 'electron-store'

function Home() {

  return (
    <SiteWrapper>
      <Page.Content title="코스콤 고속FEP 모니터링 클라이언트">
        <h3>서버 IP 및 Port 정보</h3>
        <br></br>
        <a>{window.localStorage.getItem('ip')}:{window.localStorage.getItem('port')}</a>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
