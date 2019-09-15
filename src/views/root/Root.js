import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import TopBar from 'components/topBar/TopBar';
import Navigation from 'components/navigation/Navigation';
import Main from 'views/main/Main';
import { Rewards } from 'views/Rewards/Rewards';
import Scan from 'views/scan/Scan';

const rewards = [
  {
    id: 1,
    name: 'Greek Salad -50%',
    price: 20,
    partner: 'Kathys Restaurant',
    address: {
      city: 'Białystok',
      street: 'Warszawska 11',
    },
    type: 'food',
    image: 'salad',
  },
  {
    id: 2,
    name: 'Free Burger',
    price: 150,
    partner: 'McRoland',
    address: {
      city: 'Suchowola',
      street: 'Szklana 16',
    },
    type: 'food',
    image: 'burger',
  },
  {
    id: 3,
    name: 'Cinema ticket -20%',
    price: 10,
    partner: 'CinemaTown',
    address: {
      city: 'Suchowola',
      street: 'Szklana 16',
    },
    type: 'services',
    image: 'cinema',
  },
  {
    id: 4,
    name: 'Bus ticket',
    price: 20,
    partner: 'MPK Białystok',
    address: {
      city: 'Białystok',
      street: 'Abramova 160',
    },
    type: 'items',
    image: 'bus',
  },
  {
    id: 5,
    name: 'Barber -50%',
    price: 20,
    partner: 'Barber sp. z o.o.',
    address: {
      city: 'Białystok',
      street: 'Szesnastego 16',
    },
    type: 'services',
    image: 'barber',
  },
];

const Root = () => (
  <div className="Root">
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <TopBar />
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Scan} />
            <Route path="/main" render={() => <Main />} />
            <Route path="/rewards" render={() => <Rewards rewards={rewards} />} />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
