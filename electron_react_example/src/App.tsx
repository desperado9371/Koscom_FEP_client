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
import Home from './HomePage';
import ProcCtrlTest1 from './ProcCtrl_test1';
import Table_test2 from './Table_Exam2';
import UdpTest from './UdpTest';

const Hello = () => {
  return (
    <>
      <Nav_example />
      <UdpTest />
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
      <Table_test2 />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/procCtrlTest1" component={ProcCtrlTest1} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard_example} />
        <Route exact path="/control" component={Control_example} />
        <Route exact path="/test" component={Hello} />
        <Route exact path="/" component={Dashboard_example} />
      </Switch>
    </Router>
  );
}
