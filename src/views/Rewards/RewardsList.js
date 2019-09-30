import React from 'react';
import styled from 'styled-components';
import { RewardsItem } from 'views/Rewards/RewardsItem';

const StyledList = styled.div`
  width: calc(100% - 40px);
  margin: 0 20px 20px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colorPrimary};
`;

const StyledInfo = styled.p`
  margin-top: 20px;
  margin-bottom: 162px;
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 24px;
`;

export const RewardsList = ({ rewards, setChosenReward, chosenReward }) => (
  <>
    <StyledList>
      {rewards.map(reward => (
        <RewardsItem
          reward={reward}
          key={reward.id}
          setChosenReward={setChosenReward}
          chosenReward={chosenReward}
        />
      ))}
    </StyledList>
    <StyledInfo>Oops, you have seen them all!</StyledInfo>
  </>
);
