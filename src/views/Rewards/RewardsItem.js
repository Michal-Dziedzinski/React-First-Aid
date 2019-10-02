import React from 'react';
import styled from 'styled-components';

const StyledItemGrabs = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colorMain};
`;
const StyledItem = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colorWhite};
  padding: 1rem 1rem 1rem 0;
  border-top: 0.1rem solid ${({ theme }) => theme.colorPrimary};
`;
const StyledItemActive = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colorMain};
  color: ${({ theme }) => theme.colorPrimary};
  padding: 1rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colorPrimary};
  ${StyledItemGrabs} {
    color: ${({ theme }) => theme.colorWhite};
  }
`;
const StyledImage = styled.img`
  height: 5rem;
`;
const StyledImageWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

const StyledItemName = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colorPrimary};
`;
const StyledItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  padding-bottom: 1rem;
`;
const StyledItemInfo = styled.p`
  font-size: 1.2rem;
  justify-content: space-between;
`;
const StyledItemText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const RewardsItem = ({ reward, chosenReward, setChosenReward }) =>
  reward.id === (chosenReward ? chosenReward.id : undefined) ? (
    <StyledItemActive>
      <StyledImageWrapper>
        <StyledImage src={require(`assets/${reward.image}.png`)} alt={reward.partner} />
      </StyledImageWrapper>
      <StyledItemText>
        <StyledItemHeader>
          <StyledItemName>
            {reward.reward} {reward.name}
          </StyledItemName>
          <StyledItemGrabs>{reward.price} GRABS</StyledItemGrabs>
        </StyledItemHeader>
        <StyledItemInfo />
        <StyledItemInfo>{reward.partner}</StyledItemInfo>
        <StyledItemInfo>
          {reward.address.city}, {reward.address.street}
        </StyledItemInfo>
      </StyledItemText>
    </StyledItemActive>
  ) : (
    <StyledItem onClick={() => setChosenReward(reward)}>
      <StyledImageWrapper>
        <StyledImage src={require(`assets/${reward.image}.png`)} alt={reward.partner} />
      </StyledImageWrapper>
      <StyledItemText>
        <StyledItemHeader>
          <StyledItemName>
            {reward.reward} {reward.name}
          </StyledItemName>
          <StyledItemGrabs>{reward.price} GRABS</StyledItemGrabs>
        </StyledItemHeader>
        <StyledItemInfo />
        <StyledItemInfo>{reward.partner}</StyledItemInfo>
        <StyledItemInfo>
          {reward.address.city}, {reward.address.street}
        </StyledItemInfo>
      </StyledItemText>
    </StyledItem>
  );
