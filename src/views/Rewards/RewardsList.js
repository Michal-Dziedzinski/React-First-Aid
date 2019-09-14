import React from 'react';
import styled from 'styled-components';
import RewardsItem from 'views/Rewards/RewardsItem';

const StyledList = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

export const RewardsList = ({ products }) => (
  <StyledList>
    {products.map(product => (
      <RewardsItem product={product} />
    ))}
  </StyledList>
);
