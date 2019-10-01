import React, { Component } from 'react';
import styled from 'styled-components';
import { RewardsList } from 'views/Rewards/RewardsList';
import { Button } from 'components/button/Button';

const StyledRewards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonContainer = styled.div`
  position: fixed;
  bottom: 70px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: #fff;
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
