import React from 'react';
import styled from 'styled-components';
import { RewardsItem } from 'views/Rewards/RewardsItem';

const StyledList = styled.div`
  width: calc(100% - 4rem);
  margin: 0 2rem 2rem 2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colorPrimary};
`;

const StyledInfo = styled.p`
  margin-top: 2rem;
  margin-bottom: 26.2rem;
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 2.4rem;
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
