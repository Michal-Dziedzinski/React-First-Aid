import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Scan from 'views/scan/Scan';

const Root = () => (
  <div className="Root">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Scan} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Root;
