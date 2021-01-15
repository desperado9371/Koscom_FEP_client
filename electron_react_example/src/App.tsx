import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Test2 from './Test2';
import Timer from './Timer';
import Say from './Say';
import Table from './Table_example';
import Dashboard_example from './Dashboard_example';
import Control_example from './Control_example';
import Nav_example from './Nav_example';
import Bootstrap_test from './Bootstrap_test';

const Hello = () => {
  return (
    <>
      <Nav_example />
      <h1>Koscom 고속 FEP 모니터링 클라이언트</h1>
      <Bootstrap_test />
      <Say />
      <Timer
        expiredTime={'2021-03-12T10:53:00+09:00'}
        onExpired={() => {
          console.log('end');
        }}
      />
      <Test2 />
      <Table />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard_example} />
        <Route exact path="/control" component={Control_example} />
        <Route exact path="/test" component={Hello} />
        <Route exact path="/" component={Dashboard_example} />
      </Switch>
    </Router>
  );
}
