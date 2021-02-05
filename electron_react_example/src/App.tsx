import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './HomePage';
import Statistic from './StatisticPage';
import Search from './SearchPage';
import Monitoring from './MonitoringPage';
import Login from './Login';
import UdpTest from './UdpTest';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/statistic" component={Statistic} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/monitoring" component={Monitoring} />
        <Route exact path="/udptest" component={UdpTest} />
      </Switch>
    </Router>
  );
}
