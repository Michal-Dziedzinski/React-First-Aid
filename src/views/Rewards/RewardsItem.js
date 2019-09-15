import React from 'react';
import styled from 'styled-components';

const StyledItemGrabs = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colorMain};
`;
const StyledItem = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colorWhite};
  padding: 10px 10px 10px 0;
  border-top: 1px solid ${({ theme }) => theme.colorPrimary};
  margin: 0 20px;
`;
const StyledItemActive = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colorMain};
  color: ${({ theme }) => theme.colorPrimary};
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.colorPrimary};
  margin: 0 20px;
  ${StyledItemGrabs} {
    color: ${({ theme }) => theme.colorWhite};
  }
`;
const StyledImage = styled.img`
  height: 50px;
`;
const StyledImageWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

const StyledItemName = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colorPrimary};
`;
const StyledItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  padding-bottom: 10px;
`;
const StyledItemInfo = styled.p`
  font-size: 12px;
  justify-content: space-between;
`;
const StyledItemText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const RewardsItem = ({ reward, isActive, setChosenItemId }) =>
  isActive ? (
    <StyledItemActive onClick={() => setChosenItemId(reward.id)}>
      <StyledImageWrapper>
        <StyledImage src={require(`assets/${reward.image}.png`)} alt={reward.partner} />
      </StyledImageWrapper>
      <StyledItemText>
        <StyledItemHeader>
          <StyledItemName>{reward.name}</StyledItemName>
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
    <StyledItem onClick={() => setChosenItemId(reward.id)}>
      <StyledImageWrapper>
        <StyledImage src={require(`assets/${reward.image}.png`)} alt={reward.partner} />
      </StyledImageWrapper>
      <StyledItemText>
        <StyledItemHeader>
          <StyledItemName>{reward.name}</StyledItemName>
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
