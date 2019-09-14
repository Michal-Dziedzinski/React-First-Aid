import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import Main from 'views/main/Main';
import Scan from 'views/scan/Scan';

const Root = () => (
  <div className="Root">
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Scan} />
            <Route path="/main" render={() => <Main />} />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
