import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import { TopBar } from 'components/topBar/TopBar';
import { Background } from 'components/background/Background';
import { Navigation } from 'components/navigation/Navigation';
import { Main } from 'views/main/Main';
import { Rewards } from 'views/Rewards/Rewards';
import { BottomBtn } from 'components/bottomBtn/BottomBtn';
import { Scan } from 'views/scan/Scan';
import { Stats } from 'views/stats/Stats';
import { Maps } from 'views/maps/Maps';

const Wrapper = styled.div`
  margin-top: 10.2rem;
`;

export class Root extends Component {
  state = {
    points: 15,
    favoriteReward: null,
    rewards: [
      {
        id: 1,
        name: 'Greek Salad',
        reward: '-50%',
        price: 20,
        partner: 'Kathys Restaurant',
        address: {
          city: 'Białystok',
          street: 'Kamilowa 11',
        },
        type: 'food',
        image: 'salad',
      },
      {
        id: 2,
        name: 'Burger',
        reward: 'Free',
        price: 150,
        partner: 'McRoland',
        address: {
          city: 'Suchowola',
          street: 'Bondara 16',
        },
        type: 'food',
        image: 'burger',
      },
      {
        id: 3,
        name: 'Cinema ticket',
        reward: '-20%',
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
        reward: 'Free',
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
        name: 'Barber',
        reward: '-50%',
        price: 20,
        partner: 'Barber sp. z o.o.',
        address: {
          city: 'Białystok',
          street: 'Szesnastego 16',
        },
        type: 'services',
        image: 'barber',
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

  setFavoriteReward = reward => {
    this.setState({
      favoriteReward: reward,
    });
  };

  render() {
    const { points, rewards, favoriteReward } = this.state;
    const progress = ((points * 1) / rewards) * 1;
    return (
      <div className="Root">
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Wrapper>
            <TopBar points={points} />
            <Background />
            <BrowserRouter>
              <Navigation />
              <Switch>
                <Route path="/scan" render={() => <Scan addGrabbs={this.addGrabbs} />} />
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Main points={points} reward={favoriteReward} progress={progress} />
                  )}
                />
                <Route
                  path="/rewards"
                  render={() => (
                    <Rewards rewards={rewards} setFavoriteReward={this.setFavoriteReward} />
                  )}
                />
                <Route path="/stats" component={Stats} />
                <Route path="/maps" render={() => <Maps />} />
              </Switch>
              <NavLink to="/scan">
                <BottomBtn />
              </NavLink>
            </BrowserRouter>
          </Wrapper>
        </ThemeProvider>
      </div>
    );
  }
}
