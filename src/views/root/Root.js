import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import TopBar from 'components/topBar/TopBar';
import Background from 'components/background/Background';
import Navigation from 'components/navigation/Navigation';
import Main from 'views/main/Main';
import Rewards from 'views/Rewards/Rewards';
import BottomBtn from 'components/bottomBtn/BottomBtn';
import Scan from 'views/scan/Scan';
import Stats from 'views/stats/Stats';
import Maps from 'views/maps/Maps';

class Root extends Component {
  state = {
    points: 15,
    rewards: [
      {
        id: 1,
        name: 'Greek Salad -50%',
        price: 20,
        partner: 'Kathys Restaurant',
        addres: {
          city: 'Białystok',
          street: 'Warszawska 11',
        },
        type: 'food',
      },
      {
        id: 2,
        name: 'Free Burger',
        price: 150,
        partner: 'McRoland',
        addres: {
          city: 'Suchowola',
          street: 'Szklana 16',
        },
        type: 'food',
      },
      {
        id: 3,
        name: 'Cinema ticket -20%',
        price: 10,
        partner: 'CinemaTown',
        addres: {
          city: 'Suchowola',
          street: 'Szklana 16',
        },
        type: 'services',
      },
      {
        id: 4,
        name: 'Bus ticket',
        price: 20,
        partner: 'MPK Białystok',
        addres: {
          city: 'Białystok',
          street: 'Abramova 160',
        },
        type: 'items',
      },
      {
        id: 5,
        name: 'Barber -50%',
        price: 20,
        partner: 'Barber sp. z o.o.',
        addres: {
          city: 'Białystok',
          street: 'Szesnastego 16',
        },
        type: 'services',
      },
    ],
  };

  addGrabbs = qty => {
    const { points } = this.state;
    const totalPoints = points * 1 + qty * 1;
    this.setState({
      points: totalPoints,
    });
  };

  render() {
    const { points, rewards } = this.state;
    const progress = ((points * 1) / rewards) * 1;
    console.log(progress);
    return (
      <div className="Root">
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <TopBar points={points} />
            <Background />
            <BrowserRouter>
              <Navigation />
              <Switch>
                <Route path="/scan" render={() => <Scan addGrabbs={this.addGrabbs} />} />
                <Route
                  exact
                  path="/"
                  render={() => <Main points={points} price="20" progress={progress} />}
                />
                <Route path="/rewards" render={() => <Rewards rewards={rewards} />} />
                <Route path="/stats" component={Stats} />
                <Route path="/maps" render={() => <Maps />} />
              </Switch>
              <NavLink to="/scan">
                <BottomBtn />
              </NavLink>
            </BrowserRouter>
          </>
        </ThemeProvider>
      </div>
    );
  }
}

export default Root;
