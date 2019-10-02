import React, { Component } from 'react';
import styled from 'styled-components';
import { RewardsList } from 'views/Rewards/RewardsList';
import { Button } from 'components/button/Button';

const StyledRewards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 700;
  text-align: center;
  margin: 2rem 0;
  font-size: 2.4rem;
  @media only screen and (min-width: 768px) {
    margin: 4rem 0;
  }
  text-transform: uppercase;
`;

const StyledButtonContainer = styled.div`
  position: fixed;
  bottom: 7rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(1200px - 4rem);
  align-items: center;
  background-color: #fff;
  @media only screen and (min-width: 768px) {
    bottom: 0;
  }
`;

export class Rewards extends Component {
  state = {
    rewards: null,
    chosenReward: null,
  };

  componentWillMount() {
    const { rewards } = this.props;
    this.setState({ rewards });
  }

  setChosenReward = reward => {
    this.setState({ chosenReward: reward });
  };

  render() {
    const { rewards, chosenReward } = this.state;
    const { setFavoriteReward } = this.props;

    return (
      <StyledRewards>
        <StyledTitle>Choose your reward!</StyledTitle>
        <RewardsList
          rewards={rewards}
          setChosenReward={this.setChosenReward}
          chosenReward={chosenReward}
        />
        <StyledButtonContainer>
          <Button disabled={!chosenReward}>Grab your reward!</Button>
          <Button disabled={!chosenReward} onClick={() => setFavoriteReward(chosenReward)}>
            Add as most wanted{' '}
          </Button>
        </StyledButtonContainer>
      </StyledRewards>
    );
  }
}
