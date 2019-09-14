import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Scan from "views/Scan/Scan";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Scan} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
