import React from 'react';
import styled from 'styled-components';
import { RewardsList } from 'views/Rewards/RewardsList';
import { Button } from 'components/button/Button';

const StyledRewards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Rewards = ({ rewards }) => (
  <StyledRewards>
    <RewardsList rewards={rewards} />
    <Button>Grab your reward!</Button>
  </StyledRewards>
);
