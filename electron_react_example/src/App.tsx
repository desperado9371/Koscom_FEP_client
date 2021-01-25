import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './HomePage';
import Statistic from './StatisticPage';
import Search from './SearchPage';
import Monitoring from './MonitoringPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/statistic" component={Statistic} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/monitoring" component={Monitoring} />
      </Switch>
    </Router>
  );
}
