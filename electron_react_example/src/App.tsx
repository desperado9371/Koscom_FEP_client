import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './test';
import TimerTick from './TimerTick';
import Timer from './Timer';

const Hello = () => {
  return (
    <>
      <h1>Koscom 고속 FEP 모니터링 클라이언트</h1>
      <a>?</a>
      <TimerTick />
      <Timer expiredTime={'2021-03-24T17:00:00+09:00'} onExpired="yes" />
      <Test />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
