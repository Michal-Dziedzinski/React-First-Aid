import React from 'react';
import styled from 'styled-components';
import { RewardsItem } from 'views/Rewards/RewardsItem';

const StyledList = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const RewardsList = ({
  rewards,
  chosenItemId,
  wishItemId,
  setChosenItemId,
  setWishItemId,
}) => (
  <StyledList>
    {rewards.map(reward => (
      <RewardsItem
        reward={reward}
        key={reward.id}
        isActive={reward.id === chosenItemId}
        isWished={reward.id === wishItemId}
        setChosenItemId={setChosenItemId}
        setWishItemId={setWishItemId}
      />
    ))}
  </StyledList>
);
