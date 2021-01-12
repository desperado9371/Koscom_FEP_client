import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test2 from './Test2';
import Timer from './Timer';
import Say from './Say';

const Hello = () => {
  return (
    <>
      <h1>Koscom 고속 FEP 모니터링 클라이언트</h1>
      <a>?</a>
      <Say />
      <Timer
        expiredTime={'2021-03-12T10:53:00+09:00'}
        onExpired={() => {
          console.log('end');
        }}
      />
      <Test2 />
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
