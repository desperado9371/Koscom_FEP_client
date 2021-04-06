import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import Statistic from './Pages/StatisticPage';
import Search from './Pages/SearchPage';
import Monitoring from './Pages/MonitoringPage';
import Login from './Pages/Login';
import UdpTest from './Pages/UdpTest';
import Monitoring_ndfo from './Pages/MonitoringPage_ndfo';
import Monitoring_ndstk from './Pages/MonitoringPage_ndstk';
import ConnectInfo from './Pages/ConnectInfo';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/statistic" component={Statistic} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/monitoring" component={Monitoring} />
        <Route exact path="/monitoring_ndstk" component={Monitoring_ndstk} />
        <Route exact path="/monitoring_ndfo" component={Monitoring_ndfo} />
        <Route exact path="/networktest" component={UdpTest} />
        <Route exact path="/connectInfo" component={ConnectInfo} />
      </Switch>
    </Router>
  );
}
